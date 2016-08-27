//XJS=accScripts.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path, "scripts::commonUtil.xjs");
        this.registerScript(path, function() {
        /********************************************************************************
        회계공통 스크립트
        @Path		    scripts-accScripts	
        @Description 	회계공통 스크립트
        @Author	 		임행섭
        @Create         2016. 05. 27.      
        ********************************************************************************/
        // 공통스크립트 include
        //include "scripts::commonUtil.xjs"; 

        // 회계 메세지
        this.MSG_ACC_SAVE 		= "정상적으로 저장되었습니다";
        this.MSG_ACC_RESETYN 	= "작업중인 정보가 있습니다. 취소하시겠습니까?";

        this.MSG_ACC_FINAN_CHO 	= "조회할 재무제표를 선택하세요";
        this.MSG_ACC_PRID_CHO 	= "회계기수를 선택하세요";
        this.MSG_ACC_DLINE 		= "회계기수 마감이 완료되었었습니다";
        this.MSG_ACC_CARRFOR 	= "회계기수 이월이 완료되었습니다";
        this.MSG_ACC_DLINE_Q1 	= "회계기수를 마감하시겠습니까?";
        this.MSG_ACC_DLINE_Q2 	= "회계기수 마감을 취소하시겠습니까?";
        this.MSG_ACC_CARRFOR_Q1	= "회계기수 이월작업을 진행하시겠습니까?";
        this.MSG_ACC_NODLINE 	= "이월하기 위해서 마감작업이 선행되어야합니다.";
        this.MSG_ACC_DONECARR 	= "기 이월된 회계기수입니다."; 
        this.MSG_ACC_CLOS_JOUR	= "결산 전표발행이 완료되었습니다";

        
        this.MSG_ACC_PUBDATE 	= "발행일자를 확인해주세요";
        this.MSG_ACC_GIPYODATE 	= "기표일자를 확인해주세요";
        this.MSG_ACC_CUSTCD 	= "거래처를 확인해주세요";
        this.MSG_ACC_ABS 		= "적요를 입력해주세요";
        this.MSG_ACC_DTLTAXINV 	= "세금계산서 상세항목을 입력해주세요.";
        this.MSG_ACC_AMT 		= "금액이 0보다 작거나 같을 수 없습니다.";
        this.MSG_ACC_TAXDEL		= "선택하신 세금계산서를 삭제하시겠습니까?";
        this.MSG_ACC_PURCHSALES	= "매입/매출구분을 선택해주세요";
        this.MSG_ACC_SAVEYN		= "저장하시겠습니까?";
        this.MSG_ACC_notSHOW    = "출력할 세금계산서가 없습니다.";

        // 회계 콜백
        this.accCallbackFunc = function(svcID,errorCode,errorMsg) {
        	if(errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {
        		var msg = this.dsService.lookup("serviceID", svcID, "msg");
        		var callbackStr = this.dsService.lookup("ServiceID", svcID, "callbackFunc2");
        		//alert(eval(msg));
        		if(!this.gfnIsNull(callbackStr)) {
        			var callbackArr = callbackStr.split(":");
        			var callback = callbackArr[0];
        			if (callback.indexOf("(") == -1) {
        				callback+='();';
        			}
        			var when = callbackArr[1]; 
        			if (when == "B") {
        				eval(callback);
        				if(!this.gfnIsNull(msg)) alert(eval(msg));
        			} else {
        				if (!this.gfnIsNull(msg)) alert(eval(msg));
        				eval(callback);
        			}
        		} else {
        			if (!this.gfnIsNull(msg)) alert(eval(msg));
        		}
        	}
        	
        }

        // 회계기수세팅
        this.accGetCurAccPrid = function() {
        	var accArr = new Array();
        	var i = 0;	
        	accArr[i++] = application.gdsAccPrid.getColumn(0, "accPrid");
        	accArr[i++] = application.gdsAccPrid.getColumn(0, "startDate");
        	accArr[i++] = application.gdsAccPrid.getColumn(0, "endDate");
        	accArr[i++] = application.gdsAccPrid.getColumn(0, "dlineYn");
        	accArr[i++] = application.gdsAccPrid.getColumn(0, "carrforYn");
        	return accArr;
        }

        // 고정자산 검색팝업
        this.gfnFixedAssetPopup = function(parentName) {
           return application.open(
        	    "고정자산검색팝업",
        		"acc::AF_FixedAssetPopupForm.xfdl",
        		this.parent,
        		{parentReason:parentName},
        		"showtitlebar=true showstatusbar=false",
        		110, 110,
        		this
           );
        }
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();

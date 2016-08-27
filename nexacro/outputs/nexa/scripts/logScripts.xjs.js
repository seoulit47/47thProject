//XJS=logScripts.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /********************************************************************************
        물류공통 스크립트
        @Path		    scripts::logScripts.xjs                   	                        
        @Description    물류공통 스크립트
        @Author	    	임행섭	  
        @Created 		2016. 5. 27.
        ********************************************************************************/

        var outData;

        // 물류에서 사용되는 코드와 코드명을 DataSet에 담아서 호출
        this.logBindCd=function(serviceID){
        	outData = "";
        	for(var i = 0; i < this.dsBindLogCd.rowcount; i++) {
        		outData += " " + this.dsBindLogCd.getColumn(i,"dsLogName") + "=" + this.dsBindLogCd.getColumn(i,"dsLogName");
            }
        	var serviceRow = this.dsService.findRow("serviceID", serviceID);
            this.dsService.setColumn(serviceRow, "outData", outData);
            this.gfnService("bindLogCd", "true");
        //	this.transaction("bindLogCd","his::log/baseInfo/bindLogCd.do","dsBindLogCd=dsBindLogCd",outData,"","callbackLogBind",false);
        }

        this.callbackLogBind = function(svcID,errorCode,errorMsg) {
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {
        		if(this.dsLogCd.getRowCount() == 0) {
        			alert("검색된 결과가 없습니다.");
        		}
        		trace("물류 바인드 데이터셋 : " + outData + "\n" + "------------물류 바인드 성공-------------\n");
        	}
        	
        }

        
        // 구매재고관리에서 필요한 코드를 선택하기 위한 팝업창(물품분류코드, 창고, 물품코드, 물품명)
        this.logOpenCdDialog = function(divCd,logCd,secCd,thrCd) {
        	return application.open(
        				"LB_logCdPopupForm",
        				"log::LB_logCdPopupForm.xfdl",
        				this.parent,
        				{divCode:divCd,				// 찾고자 하는 코드의 대분류
        				 logCode:logCd,				// 대분류에 해당하는 상세코드
        				 secCode:secCd,				// 상세코드의 검색조건 추가
        				 thrCode:thrCd},			// 상세코드의 검색조건 추가
        				"showtitlebar=true showstatusbar=false",
        				250, 300,
        				this
        			);
        }

        // 물품정보 팝업
        this.logOpenGdsDialog = function(divCd) {
        	return application.open(
        				"LB_GdsPopupForm",
        				"log::LB_GdsPopupForm.xfdl",
        				this.parent,
        				{gdsCode:divCd},
        				"showtitlebar=true showstatusbar=false",
        				250, 300,
        				this
        			);
        }

        // 물품요구 취소팝업
        this.logOpenCancleDialog = function(canCau) {
        	return application.open(
        				"LR_buyDemdCancelForm",
        				"log::LR_buyDemdCancelForm.xfdl",
        				this.parent,
        				{canCau:canCau},
        				"showtitlebar=true showstatusbar=false",
        				250, 300,
        				this
        			);
        }

        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();

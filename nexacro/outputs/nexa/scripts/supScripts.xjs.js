﻿//XJS=supScripts.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path, "scripts::commonUtil.xjs");
        this.registerScript(path, function() {

        /********************************************************************************
        *                                                                               *
        * 진료지원 스크립트 관리		                                   				*
        *                                                                               *
        * @Path			scripts-supScripts                  	 	                    *
        * @Description	진료지원 공통 스크립트 모음  								*      
        *			      																*
        * @Author	    한수정					                                		*
        * 									                                            *
        * Created on	2016. 5. 26.	                             		            *
        *									                                            *
        ********************************************************************************/

        // 공통 스크립트
        //include "scripts::commonUtil.xjs"; 

        
        // 메세지
        this.MSG_SUP_SEARCH="조회되었습니다.";
        this.MSG_SUP_SAVE="정상적으로 저장되었습니다";
        this.MSG_SUP_RECE="정상적으로 수납되었습니다";
        this.MSG_SUP_RSVT="예약이 완료되었습니다";
        this.MSG_SUP_RECEIPT="접수가 완료되었습니다";
        this.MSG_SUP_CANCEL="정상적으로 취소되었습니다";
        this.MSG_SUP_MD="필수정보를 입력하세요";
        this.MSG_SUP_ADD="추가할 대상을 선택하여 주세요";
        this.MSG_SUP_APRV="결제가 정상적으로 승인되었습니다";
        this.MSG_SUP_APRVDATA="승인자료를 입력하세요";
        this.MSG_SUP_PAYAMT="승인금액을 입력하세요";
        this.MSG_SUP_CASHDIV="거래구분을 선택하세요";

        this.MSG_SUP_PRESCDATE="처방일자를 확인해주세요";
        this.MSG_SUP_RP="접수파트를 선택해주세요";
        this.MSG_SUP_PATNO="환자번호를 입력해주세요";
        this.MSG_SUP_BCODE="바코드번호를 입력해주세요";
        this.MSG_SUP_NOTSEARCH="조회된 결과가 없습니다.";
        this.MSG_SUP_PAT_PRESCNO="처방번호나 환자번호를 입력하여 주세요";
        this.MSG_SUP_PATHOL_NO="병리번호를 입력하여 주세요.";
        this.MSG_SUP_CNC_REASON="취소사유를 선택해주세요.";

        
        // 필수입력사항 체크 	
        this.supCheckMdData = function(div)
        {	
        	var compArr = div.components;

        	for(var i = 0; i < compArr.length ; i++){
        		var compCls = compArr[i].compCheck
        		
        		if(!this.gfnIsNull(compCls)){
        		    var comp = compArr[i].compCheck.slice(compArr[i].compCheck.length - 3).trim();
        			if(comp != "Stc" && comp != "Shp" && comp != "Btn" && compCls.indexOf("Es") == '0' )
        			{
        	
        				if(this.gfnIsNull(compArr[i].value))
        				{
        					alert(this.MSG_SUP_MD);
        					return false;
        				}
        			}
        		}
        	}
        	return true;
        	//alert("체크데이타 끝");
        }

        
        // 사용자정보 셋팅
        this.supSetUserData = function(ds,index)
        {
        	var row;
        	if(this.gfnIsNull(index)){		//this._isNull() 은 commonUtil 에 있는 이벤트입니다.
        		row = ds.rowposition ;	
        	}else{
        		row = index;
        	}	
        	
        	var userId = application.gdsEmp.getColumn(0, "empNo");
        	var gfnIpAddr=application.gdsEmp.getColumn(0,"loginIp");

        	ds.setColumn(row, "userId", userId);	
        	ds.setColumn(row, "userIp", application.gvnIpAddr);	

        }

        // 콜백함수
        this.supCallBackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {
        		if(svcID.slice(0,4)=="find"){
        			alert(this.MSG_SUP_SEARCH);
        		}else if(svcID.slice(0,5)=="batch"){
        			alert(this.MSG_SUP_SAVE);
        		}
         	}
        }
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();

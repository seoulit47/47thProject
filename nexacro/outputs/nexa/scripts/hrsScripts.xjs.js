//XJS=hrsScripts.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /********************************************************************************
        인사공통 스크립트
        @Path		    scripts-hrsScripts	
        @Description 	인사공통 스크립트
        @Author	 		임행섭
        @Create         2016. 05. 27.      
        ********************************************************************************/

        // 지급일 팝업
        this.hrsOpenPaydayDialog = function(belongYm,seq) {
        	application.open(
        		"paydaySubPopup",
        		"hrs::HS_PaydaySubForm.xfdl",
        		this.parent,
        		{belongYm:belongYm,codeSeq:seq},
        		"showtitlebar=true showstatusbar=false",
        		110, 110,
        		this
        	);	
        }

        //사원검색 팝업
        this.gfn_EmpPopup = function(hr){
        	application.open(
        		"empPopupForm",
        		"hrs::HM_EmpSearchPopup.xfdl",
        		this.parent,
        		{hrs:hr},
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

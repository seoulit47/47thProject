//XJS=wonScripts.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /********************************************************************************
        원무공통 스크립트
        @Path		    scripts-wonScripts	
        @Description 	원무공통 스크립트
        @Author	 		임행섭
        @Create         2016. 05. 27.      
        ********************************************************************************/

        // 환자등록번호조회팝업
        this.gfnPatPopup = function() {
        	return application.open(
        			"WS_PatPopupForm",
        			"won::WS_PatPopupForm.xfdl",
        			this.parent,
        			{},
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

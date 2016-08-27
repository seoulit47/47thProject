(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("HS_SalStatePDFForm");
                this.set_classname("HS_SalStatePDFForm");
                this.set_titletext("HS_SalStatePDFForm");
                this._setFormPosition(0,0,600,851);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser", "absolute", "1%", "7", null, "832", "1.33%", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 851, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HS_SalStatePDFForm");
            		p.set_titletext("HS_SalStatePDFForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("HS_SalStatePDFForm.xfdl", function() {

        this.HS_SalStatePDFForm_onload = function(obj,e){
        	this.WebBrowser.set_url(
        		"http://localhost:8282/his/hrs/salMng/salStatePDF.do?empNo="+this.parent.empNo
        		+"& belongYm="+this.parent.belongYm
        		+"& paymentDate="+this.parent.paymentDate
        		+"& format=pdf"
        	);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HS_SalStatePDFForm_onload, this);

        };

        this.loadIncludeScript("HS_SalStatePDFForm.xfdl");

       
    };
}
)();

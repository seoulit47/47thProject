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
                this.set_name("bottomFrame");
                this.set_classname("bottomFrame");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,46);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0.88%", "6", null, "34", "0.78%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("민라디미르 트롤");
            obj.style.set_font("bold 14 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 46, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("bottomFrame");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("bottomFrame.xfdl");

       
    };
}
)();

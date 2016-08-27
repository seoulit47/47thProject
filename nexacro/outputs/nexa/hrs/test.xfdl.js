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
                this.set_name("test");
                this.set_classname("test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00", "absolute", "10.35%", "71", null, "82", "65.82%", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "43.16%", "94", null, "26", "50.29%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");

            obj = new ProgressBar("ProgressBar00", "absolute", "20.21%", "220", null, "44", "62.99%", null, this);
            obj.set_taborder("2");
            obj.set_text("ProgressBar00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test");
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

        this.loadIncludeScript("test.xfdl");

       
    };
}
)();

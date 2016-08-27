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
                this.set_name("menuFrame");
                this.set_classname("menuFrame");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,44);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "2.34%", "-7", null, "47", "4.1%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("민블 민사이 갓혜자");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "23.24%", "10", null, "22", "68.46%", null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "41.02%", "8", null, "22", "48.44%", null, this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 44, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("menuFrame");
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

        this.loadIncludeScript("menuFrame.xfdl");

       
    };
}
)();

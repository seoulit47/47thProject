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
                this.set_name("버튼모음2");
                this.set_classname("버튼모음2");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "1670", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0%", "88", "1670", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar2.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0%", "176", "1670", "60", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("transparent URL('img::titleBar3.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0%", "264", "1670", "60", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "0%", "356", "1670", "60", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "0%", "444", "1670", "60", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "0%", "540", "1670", "60", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("권한관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("버튼모음2");
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

        this.loadIncludeScript("버튼모음2.xfdl");

       
    };
}
)();

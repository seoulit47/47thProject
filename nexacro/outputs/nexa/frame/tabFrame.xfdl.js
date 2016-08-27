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
                this.set_name("tabFrame");
                this.set_classname("tabFrame");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,43);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("topTab", "absolute", "0.68%", "5", null, "33", "3.71%", null, this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttonbackground("#4682b466");
            obj.style.set_buttongradation("liner 0,0 #feffffff 0,100 aliceblue [60% #f2f2efff][70% #ecece9ff]");
            obj.style.set_buttonborder("2 solid transparent");
            obj.style.set_buttonpadding("8 16 8 16");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid transparent");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("12 antialias 맑은 고딕");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage", this.topTab);
            obj.set_text("tabpage1");
            obj.style.set_background("whitesmoke");
            obj.set_dragscrolltype("none");
            this.topTab.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.topTab);
            obj.set_text("tabpage2");
            this.topTab.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "51.66%", "7", null, "29", "12.99%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("탭프레임 민용666");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 43, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("tabFrame");
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
            this.topTab.addEventHandler("onchanged", this.topTab_onchanged, this);
            this.topTab.addEventHandler("onextrabuttonclick", this.topTab_onextrabuttonclick, this);

        };

        this.loadIncludeScript("tabFrame.xfdl");

       
    };
}
)();

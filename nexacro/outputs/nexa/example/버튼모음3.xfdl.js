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
                this.set_name("버튼모음3");
                this.set_classname("버튼모음3");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "2", "450", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::miniTitleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "96", "450", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::miniTitleBar2.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0%", "194", "450", "60", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("transparent URL('img::miniTitleBar3.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0%", "296", "450", "60", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("transparent URL('img::miniTitleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0%", "396", "358", "60", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("transparent URL('img::miniTitleBar5.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "0%", "492", "358", "60", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("transparent URL('img::miniTitleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "0%", "600", "358", "60", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("transparent URL('img::miniTitleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.72%", "-3", null, "60", "81.76%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("권한관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 450, 60, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::miniTitleBar1.jpg')");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 450, 60, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("transparent URL('img::miniTitleBar3.jpg')");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 450, 60, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("transparent URL('img::miniTitleBar4.jpg')");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 358, 60, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_background("transparent URL('img::miniTitleBar5.jpg')");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("버튼모음3");
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

        this.loadIncludeScript("버튼모음3.xfdl");

       
    };
}
)();

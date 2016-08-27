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
                this.set_name("LD_GdsAnspMngntPopupForm");
                this.set_classname("LW_GdsAnspMngntPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,650,375);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLwGdsAnspHist", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"물품청구번호\" type=\"STRING\" size=\"256\"/><Column id=\"물품코드\" type=\"STRING\" size=\"256\"/><Column id=\"물품명\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"단가\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"출고창고\" type=\"STRING\" size=\"256\"/><Column id=\"청구사유\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.18%", "4", null, "60", "2.91%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10.32%", "-2", null, "60", "52.72%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("물품청구 정보");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "1.27%", "65", null, "267", "1.64%", null, this);
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"68\"/><Column size=\"130\"/><Column size=\"51\"/><Column size=\"42\"/><Column size=\"41\"/><Column size=\"94\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"물품청구번호\"/><Cell col=\"1\" text=\"물품코드\"/><Cell col=\"2\" text=\"물품명\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"단가\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"출고창고\"/><Cell col=\"7\" text=\"청구사유\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn03", "absolute", "32%", "340", null, "32", "54.15%", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn01", "absolute", "48%", "340", null, "32", "38.15%", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 650, 375, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LW_GdsAnspMngntPopupForm");
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
            this.DelBtn03.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn01.addEventHandler("onclick", this.DelBtn_onclick, this);

        };

        this.loadIncludeScript("LD_GdsAnspMngntPopupForm.xfdl");

       
    };
}
)();

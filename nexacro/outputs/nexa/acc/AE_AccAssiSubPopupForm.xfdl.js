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
                this.set_name("AE_AccAssiSubPopupForm");
                this.set_classname("AE_AccAssiSubPopupForm");
                this.set_titletext("보조과목 조회화면");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,400,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAssiSubList</Col><Col id=\"URL\">his::acc/elementary/findAssiSubList.do</Col><Col id=\"outData\">dsAssiSub=dsAssiSub</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">call</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAccAcnt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCodePopup", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAssiSub", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "-4.5%", "-4", "403", "44", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "12.16%", "12", null, "29", "43.18%", null, this.Div06);
            obj.getSetter("taborder").set("0");
            obj.set_text("보조과목 조회");
            obj.style.set_font("bold 20 나눔스퀘어 Bold");
            this.Div06.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "1.75%", "43", null, "549", "2%", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.style.set_background("lavender");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Edit("assiSubNmEd", "absolute", "29.75%", "49", null, "27", "26.25%", null, this);
            obj.set_taborder("2");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc07", "absolute", "4.25%", "49", null, "27", "74.5%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("보조과목명");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "12", "83", null, "500", "11", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsAssiSub");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"보조과목코드\"/><Cell col=\"1\" text=\"보조과목명\"/></Band><Band id=\"body\"><Cell text=\"bind:assiSubCd\"/><Cell col=\"1\" text=\"bind:assiSubNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchassiSubBtn", "absolute", "304", "49", "74", "27", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 403, 44, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar7.jpg')");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 400, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AE_AccAssiSubPopupForm");
            		p.set_titletext("보조과목 조회화면");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AE_AccAssiSubPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AE_AccAssiSubPopupForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        // 조회버튼 클릭 이벤트
        this.searchassiSubBtn_onclick = function(obj,e)
        {
        	var accYear=this.opener.yearSpin.value;
        	var assiSubNm=this.assiSubNmEd.value;	
        	var acntCd = this.parent.acntCd;
        	argument = 'accYear='+accYear+' assiSubNm='+assiSubNm + ' acntCd='+acntCd;
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findAssiSubList");
        }

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array;
        	var i=0;	
        	arrRtn[i++] = this.dsAssiSub.getColumn(e.row,"assiSubCd");
        	arrRtn[i++] = this.dsAssiSub.getColumn(e.row,"assiSubNm");
        	this.opener.setCode(this.parent.code, arrRtn);
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Grid00.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);
            this.searchassiSubBtn.addEventHandler("onclick", this.searchassiSubBtn_onclick, this);

        };

        this.loadIncludeScript("AE_AccAssiSubPopupForm.xfdl");

       
    };
}
)();

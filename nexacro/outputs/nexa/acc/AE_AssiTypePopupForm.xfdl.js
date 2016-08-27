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
                this.set_name("AE_assiTypePopupForm");
                this.set_classname("AE_assiTypePopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,389,596);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAssiType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"assiTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiTypeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAssiTypeList</Col><Col id=\"URL\">his::acc/elementary/findAssiTypeList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAssiType=dsAssiType</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("assiSubNmEd", "absolute", "106", "43", "177", "32", null, null, this);
            obj.set_taborder("0");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc07", "absolute", "2.76%", "43", null, "32", "75.69%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("보조유형명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("assiTypeGrid", "absolute", "11", "81", "372", "503", null, null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsAssiType");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"보조유형코드\"/><Cell col=\"1\" text=\"보조유형명\"/></Band><Band id=\"body\"><Cell text=\"bind:assiTypeCd\"/><Cell col=\"1\" text=\"bind:assiTypeNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "291", "43", "90", "32", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "-4.76%", "-4", "403", "44", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "13.4%", "15", null, "29", "41.94%", null, this.Div06);
            obj.getSetter("taborder").set("0");
            obj.set_text("보조유형 조회");
            obj.style.set_font("bold 20 나눔스퀘어 Bold");
            this.Div06.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 403, 44, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.style.set_background("transparent URL('img::titleBar7.jpg')");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 389, 596, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AE_assiTypePopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AE_AssiTypePopupForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("AE_AssiTypePopupForm.xfdl", function() {
        //include "scripts::commonTransaction.xjs";

        //조회
        this.DelBtn_onclick = function(obj,e)
        {
        	var accYear = new Date().getFullYear();
        	alert(accYear);
        	var argument = 'accYear='+accYear;
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findAssiTypeList");
        }

        this.assiTypeGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array;
        	var i=0;
        	
        	arrRtn[i++] = this.dsAssiType.getColumn(e.row,"assiTypeCd");
        	arrRtn[i++] = this.dsAssiType.getColumn(e.row,"assiTypeNm");
        	
        	this.opener.assicode(arrRtn)
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.assiTypeGrid.addEventHandler("oncelldblclick", this.assiTypeGrid_oncelldblclick, this);
            this.searchBtn.addEventHandler("onclick", this.DelBtn_onclick, this);

        };

        this.loadIncludeScript("AE_AssiTypePopupForm.xfdl");

       
    };
}
)();

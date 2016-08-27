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
                this.set_name("AF_AssetGrpCdPopupForm");
                this.set_classname("AF_AssetGrpCdPopupForm");
                this.set_titletext("고정자산 분류코드 선택화면");
                this._setFormPosition(0,0,1000,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAssetLgGrpCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAssetMidGrpCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findFixedAssetGrpCdList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/fixedasset/findFixedAssetGrpCdList.do</Col><Col id=\"callbackFunc\">fixedAssetGrpCdCallBack</Col><Col id=\"outData\">dsAssetLgGrpCd=dsAssetLgGrpCd dsAssetMidGrpCd=dsAssetMidGrpCd dsAssetSmGrpCd=dsAssetSmGrpCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAssetSmGrpCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "-2.8%", "-4", "1020", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.9%", "-4", null, "60", "60.59%", null, this.Div03);
            obj.getSetter("taborder").set("0");
            obj.set_text("고정자산 분류코드 검색");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("fixedAssetGrpCdDiv", "absolute", "0.6%", "48", null, "543", "1%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#c4d2daff");
            this.addChild(obj.name, obj);
            obj = new Static("fixedAssetLgGrpCdStc", "absolute", "1.83%", "14", null, "27", "91.06%", null, this.fixedAssetGrpCdDiv);
            obj.getSetter("taborder").set("12");
            obj.set_text("대분류");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Static("fixedAssetMidGrpCdStc", "absolute", "35.77%", "14", null, "27", "57.11%", null, this.fixedAssetGrpCdDiv);
            obj.getSetter("taborder").set("13");
            obj.set_text("중분류");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Static("fixedAssetSmGrpCdStc", "absolute", "69.72%", "14", null, "27", "23.17%", null, this.fixedAssetGrpCdDiv);
            obj.getSetter("taborder").set("14");
            obj.set_text("소분류");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Grid("fixedAssetLgGrpCdGrid", "absolute", "1.22%", "54", null, "448", "67.89%", null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("15");
            obj.set_binddataset("dsAssetLgGrpCd");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"대분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell text=\"bind:lgGrpCd\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:lgGrpCdNm\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"대분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:lgGrpCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:lgGrpCdNm\"/></Band></Format></Formats>");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Grid("fixedAssetMidGrpCdGrid", "absolute", "34.55%", "54", null, "448", "34.45%", null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"중분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell text=\"bind:midGrpCd\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:midGrpCdNm\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"중분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:midGrpCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:midGrpCdNm\"/></Band></Format></Formats>");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Grid("fixedAssetSmGrpCdGrid", "absolute", "67.89%", "54", null, "448", "1.12%", null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell text=\"bind:smGrpCd\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:smGrpCdNm\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소분류 코드\"/><Cell col=\"1\" text=\"분류명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:smGrpCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:smGrpCdNm\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);

            obj = new Button("selectFixedAssetGrpCdBtn", "absolute", "888", "555", "90", "32", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("@gradation URL('img::okBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1020, 60, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar4.jpg')");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 543, this.fixedAssetGrpCdDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#c4d2daff");

            	}
            );
            this.fixedAssetGrpCdDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1000, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AF_AssetGrpCdPopupForm");
            		p.set_titletext("고정자산 분류코드 선택화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AF_AssetGrpCdPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AF_AssetGrpCdPopupForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        // 폼 로드
        this.AF_AssetGrpCdPopupForm_onload = function(obj,e)
        {
        	this.gfnService("findFixedAssetGrpCdList");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAssetLgGrpCd.addEventHandler("oncolumnchanged", this.dsAssetLgGrpCd_oncolumnchanged, this);
            this.dsAssetMidGrpCd.addEventHandler("oncolumnchanged", this.dsAssetMidGrpCd_oncolumnchanged, this);
            this.dsAssetSmGrpCd.addEventHandler("oncolumnchanged", this.dsAssetSmGrpCd_oncolumnchanged, this);
            this.addEventHandler("onload", this.AF_AssetGrpCdPopupForm_onload, this);
            this.fixedAssetGrpCdDiv.fixedAssetLgGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetMidGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetSmGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetLgGrpCdGrid.addEventHandler("oncellclick", this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_oncellclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetLgGrpCdGrid.addEventHandler("onselectchanged", this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_onselectchanged, this);
            this.fixedAssetGrpCdDiv.fixedAssetMidGrpCdGrid.addEventHandler("oncellclick", this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_oncellclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetMidGrpCdGrid.addEventHandler("onselectchanged", this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_onselectchanged, this);

        };

        this.loadIncludeScript("AF_AssetGrpCdPopupForm.xfdl");

       
    };
}
)();

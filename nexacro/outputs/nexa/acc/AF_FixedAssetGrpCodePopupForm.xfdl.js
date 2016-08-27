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
                this.set_name("AF_FixedAssetGrpCodePopupForm");
                this.set_classname("AF_FixedAssetGrpCodePopupForm");
                this.set_titletext("고정자산 분류코드 선택화면");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1000,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findFixedAssetGrpCdList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/fixedasset/findFixedAssetGrpCdList.do</Col><Col id=\"callbackFunc\">fixedAssetGrpCdCallBack</Col><Col id=\"outData\">dsAssetLgGrpCd=dsAssetLgGrpCd dsAssetMidGrpCd=dsAssetMidGrpCd dsAssetSmGrpCd=dsAssetSmGrpCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAssetLgGrpCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAssetMidGrpCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAssetSmGrpCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "-1.5%", "0", "1015", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.83%", "-4", null, "60", "61.58%", null, this.titleBarDiv);
            obj.getSetter("taborder").set("5");
            obj.set_text("고정자산 분류코드 선택");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "756", "67", "86", "26", null, null, this.titleBarDiv);
            obj.getSetter("taborder").set("6");
            obj.set_text("자산번호");
            obj.getSetter("class").set("AreaStc");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Edit("assetNoEdit", "absolute", "845", "67", "105", "26", null, null, this.titleBarDiv);
            obj.set_taborder("7");
            obj.getSetter("class").set("AreaEdt");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Edit("assetNmEdit", "absolute", "1040", "67", "105", "26", null, null, this.titleBarDiv);
            obj.set_taborder("8");
            obj.getSetter("class").set("AreaEdt");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "952", "67", "86", "26", null, null, this.titleBarDiv);
            obj.getSetter("taborder").set("9");
            obj.set_text("자산이름");
            obj.getSetter("class").set("AreaStc");
            this.titleBarDiv.addChild(obj.name, obj);

            obj = new Div("fixedAssetGrpCdDiv", "absolute", "1.3%", "55", null, "543", "1.3%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Static("fixedAssetLgGrpCdStc", "absolute", "1.13%", "17", null, "27", "91.79%", null, this.fixedAssetGrpCdDiv);
            obj.getSetter("taborder").set("12");
            obj.set_text("대분류");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Static("fixedAssetMidGrpCdStc", "absolute", "34.6%", "17", null, "27", "58.21%", null, this.fixedAssetGrpCdDiv);
            obj.getSetter("taborder").set("13");
            obj.set_text("중분류");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Static("fixedAssetSmGrpCdStc", "absolute", "67.86%", "17", null, "27", "25.05%", null, this.fixedAssetGrpCdDiv);
            obj.getSetter("taborder").set("14");
            obj.set_text("소분류");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Grid("fixedAssetLgGrpCdGrid", "absolute", "1.22%", "54", null, "448", "68.8%", null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("15");
            obj.set_binddataset("dsAssetLgGrpCd");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"대분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell text=\"bind:lgGrpCd\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:lgGrpCdNm\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"대분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:lgGrpCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:lgGrpCdNm\"/></Band></Format></Formats>");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Grid("fixedAssetMidGrpCdGrid", "absolute", "34.55%", "54", null, "448", "35.37%", null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"중분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell text=\"bind:midGrpCd\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:midGrpCdNm\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"중분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:midGrpCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:midGrpCdNm\"/></Band></Format></Formats>");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Grid("fixedAssetSmGrpCdGrid", "absolute", "67.89%", "54", null, "448", "2.03%", null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell text=\"bind:smGrpCd\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:smGrpCdNm\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소분류 코드\"/><Cell col=\"1\" text=\"분류명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:smGrpCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:smGrpCdNm\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);

            obj = new Button("selectFixedAssetGrpCdBtn", "absolute", "877", "562", "90", "32", null, null, this);
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
            obj = new Layout("default", "", 1015, 60, this.titleBarDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar4.jpg')");
            		p.set_scrollbars("none");

            	}
            );
            this.titleBarDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 543, this.fixedAssetGrpCdDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");

            	}
            );
            this.fixedAssetGrpCdDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1000, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AF_FixedAssetGrpCodePopupForm");
            		p.set_titletext("고정자산 분류코드 선택화면");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AF_FixedAssetGrpCodePopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AF_FixedAssetGrpCodePopupForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        // 폼 로드 이벤트
        this.AF_FixedAssetGrpCodePopupForm_onload = function(obj,e)
        {
        	this.gfnService("findFixedAssetGrpCdList");
        }

        //  그리드 클릭 이벤트
        this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_oncellclick = function(obj,e)
        {	
        	var lgGrpCd = this.dsAssetLgGrpCd.getColumn(this.dsAssetLgGrpCd.rowposition,"lgGrpCd");
        	this.dsAssetMidGrpCd.filter("lgGrpCd=='"+lgGrpCd+"'");
        	this.fixedAssetGrpCdDiv.fixedAssetMidGrpCdGrid.set_binddataset("dsAssetMidGrpCd");
        	this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_oncellclick(this,0);
        	
        }

        this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_oncellclick = function(obj,e)
        {
        	var lgGrpCd = this.dsAssetLgGrpCd.getColumn(this.dsAssetLgGrpCd.rowposition,"lgGrpCd");
        	var midGrpCd = this.dsAssetMidGrpCd.getColumn(e.row,"midGrpCd");	
        	this.dsAssetSmGrpCd.filter("lgGrpCd=='"+lgGrpCd+"'"+"&& midGrpCd=='"+midGrpCd+"'"+"&& useYn=='1'");
        	this.fixedAssetGrpCdDiv.fixedAssetSmGrpCdGrid.set_binddataset("dsAssetSmGrpCd");
        }

        //  그리드 내용변경 이벤트
        this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_onselectchanged = function(obj,e)
        {
        	this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_oncellclick(obj,e);
        }

        this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_onselectchanged = function(obj,e)
        {
        	this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_oncellclick(obj,e);
        }

        // 확인버튼 클릭 이벤트
        this.selectFixedAssetGrpCdBtn_onclick = function(obj,e)
        {
        	if(this.parent.parentReason == "searchFixedAssetGrpCd"){
        		var lgGrpCd = this.dsAssetLgGrpCd.getColumn(this.dsAssetLgGrpCd.rowposition,"lgGrpCd");
        		var midGrpCd = this.dsAssetMidGrpCd.getColumn(this.dsAssetMidGrpCd.rowposition,"midGrpCd");
        		var smGrpCd = this.dsAssetSmGrpCd.getColumn(this.dsAssetSmGrpCd.rowposition,"smGrpCd");
        		
        			if(lgGrpCd != null && midGrpCd != null){
        				var assetGrp = lgGrpCd+midGrpCd;
        				if(smGrpCd != null){
        				    assetGrp = assetGrp+smGrpCd;
        				}
        				this.opener.assetGrpCdEd.set_value(assetGrp);
        				this.opener.assetGrpNmEd.set_value(this.dsAssetMidGrpCd.getColumn(this.dsAssetMidGrpCd.rowposition,"midGrpCdNm"));
        				this.close();
        			}else{
        				alert("대,중분류를 선택하시오.");
        			}	
        	}
        }

        
        // 콜백함수
        this.fixedAssetGrpCdCallBack = function fixedAssetGrpCdCallBack(strSvcID,nErrorCode,strErrorMag)
        {
        	if(strSvcID == "findFixedAssetGrpCdList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_oncellclick(this,0);
        		}
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAssetLgGrpCd.addEventHandler("oncolumnchanged", this.dsAssetLgGrpCd_oncolumnchanged, this);
            this.dsAssetMidGrpCd.addEventHandler("oncolumnchanged", this.dsAssetMidGrpCd_oncolumnchanged, this);
            this.dsAssetSmGrpCd.addEventHandler("oncolumnchanged", this.dsAssetSmGrpCd_oncolumnchanged, this);
            this.addEventHandler("onload", this.AF_FixedAssetGrpCodePopupForm_onload, this);
            this.titleBarDiv.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.titleBarDiv.Static00.addEventHandler("onclick", this.Static06_onclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetLgGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetMidGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetSmGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetLgGrpCdGrid.addEventHandler("oncellclick", this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_oncellclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetLgGrpCdGrid.addEventHandler("onselectchanged", this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_onselectchanged, this);
            this.fixedAssetGrpCdDiv.fixedAssetMidGrpCdGrid.addEventHandler("oncellclick", this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_oncellclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetMidGrpCdGrid.addEventHandler("onselectchanged", this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_onselectchanged, this);
            this.selectFixedAssetGrpCdBtn.addEventHandler("onclick", this.selectFixedAssetGrpCdBtn_onclick, this);

        };

        this.loadIncludeScript("AF_FixedAssetGrpCodePopupForm.xfdl");

       
    };
}
)();

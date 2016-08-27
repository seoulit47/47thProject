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
                this.set_name("AB_BimokHelpPopupForm");
                this.set_classname("AB_BimokHelpPopupForm");
                this.set_titletext("비목코드조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,791,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRunBudg", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"cngAmount\" type=\"STRING\" size=\"256\"/><Column id=\"allotPlanAmount\" type=\"STRING\" size=\"256\"/><Column id=\"bimokCode\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"causeAmount\" type=\"STRING\" size=\"256\"/><Column id=\"budgAmount\" type=\"STRING\" size=\"256\"/><Column id=\"budgBal\" type=\"STRING\" size=\"256\"/><Column id=\"bimokNm\" type=\"STRING\" size=\"256\"/><Column id=\"AcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokLevel\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findRunBudgList</Col><Col id=\"URL\">his::acc/budget/findRunBudgList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsRunBudg=dsRunBudg</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div05", "absolute", "0%", "4", "790", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "7.59%", "10", null, "44", "74.59%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("비목코드조회");
            obj.style.set_font("bold 15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "1.26%", "71", null, "53", "1.01%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bimok", "absolute", "26.3%", "85", null, "27", "60.56%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("비목명");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("bimokNmEd", "absolute", "325", "85", "132", "27", null, null, this);
            obj.set_taborder("4");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Grid("bimokListGrid", "absolute", "10", "140", "773", "612", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsRunBudg");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"293\"/><Column size=\"90\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"예산비목\"/><Cell col=\"1\" text=\"예산액\"/><Cell col=\"2\" text=\"예산잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:bimokNm\" treestartlevel=\"1\" treelevel=\"bind:bimokLevel\"/><Cell col=\"1\" text=\"bind:budgAmount\"/><Cell col=\"2\" text=\"bind:budgBal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchBimokBtn", "absolute", "465", "82", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            obj.set_cssclass("SearchBtn");
            this.addChild(obj.name, obj);

            obj = new Div("stc_year", "absolute", "3.29%", "85", null, "26", "88.75%", null, this);
            obj.set_taborder("7");
            obj.set_text("회계년도");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "12.64%", "84", null, "30", "75.85%", null, this);
            obj.set_taborder("8");
            obj.set_value("2016");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 790, 60, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar6.jpg')");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 791, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AB_BimokHelpPopupForm");
            		p.set_titletext("비목코드조회");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AB_BimokHelpPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("AB_BimokHelpPopupForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("AB_BimokHelpPopupForm.xfdl", "scripts::commonUtil.xjs");
        this.registerScript("AB_BimokHelpPopupForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";  
        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonUtil.xjs";

        
        this.searchBimokBtn_onclick = function(obj,e)
        {
        	//var accYear = this.parent.accYear;
        	var accYear = this.yearSpin.value;
        	var bimokNm = this.bimokNmEd.value;
        	
        	argument = "accYear="+accYear +" bimokNm="+bimokNm;
        //	alert(argument);
        			 
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findRunBudgList");
        }

        this.bimokListGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array;
        	var i=0;
        	
        	arrRtn[i++] = this.dsRunBudg.getColumn(e.row,"accYear");
        	arrRtn[i++] = this.dsRunBudg.getColumn(e.row,"bimokCd");
        	arrRtn[i++] = this.dsRunBudg.getColumn(e.row,"bimokNm");
        	arrRtn[i++] = this.dsRunBudg.getColumn(e.row,"budgAmount");
        	arrRtn[i++] = this.dsRunBudg.getColumn(e.row,"budgBal");
        	
        	this.opener.setCode("bimokHelp",arrRtn);
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.stc_bimok.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.bimokListGrid.addEventHandler("oncelldblclick", this.bimokListGrid_oncelldblclick, this);
            this.searchBimokBtn.addEventHandler("onclick", this.searchBimokBtn_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);

        };

        this.loadIncludeScript("AB_BimokHelpPopupForm.xfdl");

       
    };
}
)();

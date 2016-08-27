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
                this.set_name("AB_BudgViewForm");
                this.set_classname("AB_BudgViewForm");
                this.set_titletext("예산현황조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUseYN", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">Y</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findRunBudg</Col><Col id=\"URL\">his::acc/budget/findRunBudg.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsRunBudg=dsRunBudg</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRunBudg", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"cngAmount\" type=\"STRING\" size=\"256\"/><Column id=\"allotPlanAmount\" type=\"STRING\" size=\"256\"/><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"causeAmount\" type=\"STRING\" size=\"256\"/><Column id=\"budgAmount\" type=\"STRING\" size=\"256\"/><Column id=\"budgBal\" type=\"STRING\" size=\"256\"/><Column id=\"bimokNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokLevel\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "4", "1246", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);
            obj = new Static("titleEdt02", "absolute", "4.41%", "6", null, "44", "77.77%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("예산현황조회");
            obj.set_cssclass("TStc");
            obj.style.set_font("bold 15 Dotum");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "1.28%", "71", null, "53", "1.04%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("stc_year", "absolute", "2.16%", "84", null, "27", "90.8%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("회계년도");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "9.92%", "82", null, "30", "80.64%", null, this);
            obj.set_taborder("3");
            obj.set_value("2015");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bimok", "absolute", "20.64%", "84", null, "27", "72.32%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("예산비목");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("bimokEd", "absolute", "28.4%", "84", null, "26", "61.6%", null, this);
            obj.set_taborder("5");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_acc", "absolute", "39.68%", "84", null, "27", "53.28%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("계정과목");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("acntEd", "absolute", "47.44%", "83", null, "26", "42.56%", null, this);
            obj.set_taborder("7");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "732", "80", "90", "32", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("budgGrid", "absolute", "1.28%", "143", null, "616", "1.04%", null, this);
            obj.set_taborder("9");
            obj.set_binddataset("dsRunBudg");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"219\"/><Column size=\"119\"/><Column size=\"202\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"비목명\"/><Cell col=\"1\" text=\"비목코드\"/><Cell col=\"2\" text=\"계정명\"/><Cell col=\"3\" text=\"계획배정금액\"/><Cell col=\"4\" text=\"예산금액\"/><Cell col=\"5\" text=\"변경금액\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:bimokNm\" treestartlevel=\"1\" treelevel=\"bind:bimokLevel\"/><Cell col=\"1\" text=\"bind:bimokCd\"/><Cell col=\"2\" text=\"bind:acntNm\"/><Cell col=\"3\" text=\"bind:allotPlanAmount\"/><Cell col=\"4\" text=\"bind:budgAmount\"/><Cell col=\"5\" text=\"bind:cngAmount\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1246, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar6.jpg')");
            		p.set_cssclass("TStc");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AB_BudgViewForm");
            		p.set_titletext("예산현황조회");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AB_BudgViewForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AB_BudgViewForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";  

        this.searchBtn_onclick = function(obj,e)
        {
        	var accYear = this.yearSpin.value;
        	var bimokNm = this.bimokEd.value;
        	var acntNm = this.acntEd.value;
        	var argument = 'accYear='+accYear+' bimokNm='+bimokNm+' acntNm='+acntNm;
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findRunBudg");
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.stc_year.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.stc_bimok.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_acc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("AB_BudgViewForm.xfdl");

       
    };
}
)();

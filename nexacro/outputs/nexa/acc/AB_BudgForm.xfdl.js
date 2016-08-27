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
                this.set_name("AB_BudgForm");
                this.set_classname("AB_BudgForm");
                this.set_titletext("예산등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGB101", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GB101</Col><Col id=\"dsName\">dsGB101</Col></Row></Rows>");
            this.addChild(obj.name, obj);

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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findBudg</Col><Col id=\"URL\">his::acc/budget/findBudg.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsBudgReg=dsBudgReg dsOrgDline=dsOrgDline</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">findBudgCallback</Col></Row><Row><Col id=\"serviceID\">registerBudg</Col><Col id=\"URL\">his::acc/budget/registerBudg.do</Col><Col id=\"inData\">dsBudgReg=dsBudgReg:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBudgReg", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"bimokNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/><Column id=\"parentBimok\" type=\"STRING\" size=\"256\"/><Column id=\"useDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"finYn\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"STRING\" size=\"256\"/><Column id=\"beforeAmount\" type=\"STRING\" size=\"256\"/><Column id=\"bimokLevel\" type=\"STRING\" size=\"256\"/><Column id=\"calcReason\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOrgDline", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"reason\" type=\"STRING\" size=\"256\"/><Column id=\"procDay\" type=\"STRING\" size=\"256\"/><Column id=\"procPerson\" type=\"STRING\" size=\"256\"/><Column id=\"dlineDiv\" type=\"STRING\" size=\"256\"/><Column id=\"modifier\" type=\"STRING\" size=\"256\"/><Column id=\"procDiv\" type=\"STRING\" size=\"256\"/><Column id=\"modiDay\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "4", "1246", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Static("titleEdt02", "absolute", "4.4%", "10", null, "44", "77.76%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("예산등록");
            obj.set_cssclass("TStc");
            obj.style.set_font("bold 15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "1.28%", "71", null, "53", "1.04%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dline", "absolute", "2.24%", "84", null, "27", "90.72%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("마감상태");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("dlineCB", "absolute", "10.08%", "84", null, "26", "80.08%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("dsGB101");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("stc_year", "absolute", "21.2%", "84", null, "27", "71.76%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("회계년도");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "28.96%", "82", null, "30", "61.6%", null, this);
            obj.set_taborder("6");
            obj.set_value("2016");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bimok", "absolute", "39.68%", "84", null, "27", "53.28%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("예산비목");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("bimokEd", "absolute", "47.44%", "84", null, "26", "42.56%", null, this);
            obj.set_taborder("8");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_acc", "absolute", "58.72%", "84", null, "27", "34.24%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("계정과목");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("acntEd", "absolute", "66.48%", "83", null, "26", "23.52%", null, this);
            obj.set_taborder("10");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "971", "80", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("bimokListGrid", "absolute", "1.28%", "140", null, "616", "1.04%", null, this);
            obj.set_taborder("12");
            obj.set_binddataset("dsBudgReg");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"267\"/><Column size=\"103\"/><Column size=\"79\"/><Column size=\"178\"/><Column size=\"131\"/><Column size=\"113\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"예산비목\"/><Cell col=\"1\" text=\"계정책임자\"/><Cell col=\"2\" text=\"계정코드\"/><Cell col=\"3\" text=\"계정명\"/><Cell col=\"4\" text=\"이전예산금액\"/><Cell col=\"5\" text=\"예산금액\"/><Cell col=\"6\" text=\"산출근거\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:bimokNm\" treestartlevel=\"1\" treelevel=\"bind:bimokLevel\"/><Cell col=\"1\" text=\"bind:useDeptNm\"/><Cell col=\"2\" text=\"bind:acntCd\"/><Cell col=\"3\" text=\"bind:acntNm\"/><Cell col=\"4\" text=\"bind:beforeAmount\"/><Cell col=\"5\" edittype=\"expr:finYn == &quot;N&quot; ? &quot;none&quot; : &quot;normal&quot;\" text=\"bind:amount\"/><Cell col=\"6\" edittype=\"expr:finYn == &quot;N&quot; ? &quot;none&quot; : &quot;normal&quot;\" text=\"bind:calcReason\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "1075", "80", "90", "32", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AB_BudgForm");
            		p.set_titletext("예산등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AB_BudgForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AB_BudgForm.xfdl", function() {
        //include "scripts::commonScripts.xjs"; 

        //*******
        //onload
        //*******
        this.AB_BudgForm_onload = function(obj,e)
        {
        	this.gfnBind();
        }

        //*****
        //조회
        //*****
        this.searchBtn_onclick = function(obj,e)
        {
        	var accYear = this.yearSpin.value;
        	var bimokNm = this.bimokEd.value;
        	var acntNm = this.acntEd.value;
        	var argument = 'accYear='+accYear+' bimokNm='+bimokNm+' acntNm='+acntNm;
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findBudg");
        }

        //*****
        //등록
        //*****
        this.regBudgBtn_onclick = function(obj,e)
        {
        	this.gfnService("registerBudg");
        //	this.searchBtn_onclick();
        }

        //*********
        //Callback
        //*********
        this.findBudgCallback = function(){
        	var procDiv = this.dsOrgDline.getColumn(0,"procDiv");
        	if(procDiv==2)
        	{
        		this.bimokListGrid.set_readonly(true);
        	}else
        	{
        		this.bimokListGrid.set_readonly(false);
        	}
        }

        
        this.saveBtn_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AB_BudgForm_onload, this);
            this.stc_dline.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_year.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.stc_bimok.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_acc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.bimokListGrid.addEventHandler("oncellclick", this.bimokListGrid_oncellclick, this);
            this.saveBtn.addEventHandler("onclick", this.regBudgBtn_onclick, this);

        };

        this.loadIncludeScript("AB_BudgForm.xfdl");

       
    };
}
)();

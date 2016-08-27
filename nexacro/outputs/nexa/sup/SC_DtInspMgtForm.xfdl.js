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
                this.set_name("SC_DtInspMgtForm");
                this.set_classname("SC1");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }
            this.style.set_background("white");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInsp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/><Column id=\"ocsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ocsNm\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ocsDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDtInsp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtInspCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtInspNm\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"genderCd\" type=\"STRING\" size=\"256\"/><Column id=\"ocsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ocsNm\" type=\"STRING\" size=\"256\"/><Column id=\"refHighFig\" type=\"STRING\" size=\"256\"/><Column id=\"refLowFig\" type=\"STRING\" size=\"256\"/><Column id=\"runYn\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGenderCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findSimpleInspList</Col><Col id=\"URL\">his::sup/checkup/findInspList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsInsp=dsInsp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">supCallBackFunc</Col></Row><Row><Col id=\"serviceID\">findDtInspList</Col><Col id=\"URL\">his::sup/checkup/findDtInspList.do</Col><Col id=\"outData\">dsDtInsp=dsDtInsp</Col><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">batchDtInspProcess</Col><Col id=\"URL\">his::sup/checkup/batchDtInspProcess.do</Col><Col id=\"inData\">dsDtInsp=dsDtInsp:U</Col><Col id=\"callbackFunc\">supCallBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRunYN", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"code\">0</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">SC031</Col><Col id=\"dsName\">dsGenderCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("btnBox", "absolute", "73.6%", "693", null, "50", "1.04%", null, this);
            obj.set_taborder("31");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "211", "9", "90", "32", null, null, this.btnBox);
            obj.set_taborder("0");
            obj.set_cssclass("DelBtn");
            obj.set_enable("true");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("modBtn", "absolute", "111", "9", "90", "32", null, null, this.btnBox);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("registerBtn", "absolute", "10", "9", "90", "32", null, null, this.btnBox);
            obj.set_taborder("2");
            obj.set_cssclass("DelBtn");
            obj.set_enable("true");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "0", "1250", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar2.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5.12%", "-3", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("종합검진 세부검사 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("inspGrid", "absolute", "2.32%", "110", null, "623", "62.8%", null, this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsInsp");
            obj.set_createcellasync("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"111\"/><Column size=\"325\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검사코드\"/><Cell col=\"1\" text=\"검사명\"/></Band><Band id=\"body\"><Cell text=\"bind:inspCd\"/><Cell col=\"1\" text=\"bind:inspNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "2.24%", "72", null, "30", "92.32%", null, this);
            obj.set_taborder("3");
            obj.set_text("검사코드");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("inspCodeEdit", "absolute", "8.16%", "72", null, "30", "84.16%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("inspNameEdit", "absolute", "22%", "72", null, "30", "65.52%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "16.48%", "72", null, "30", "78.48%", null, this);
            obj.set_taborder("6");
            obj.set_text("검사명");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "38.16%", "519", null, "173", "2.4%", null, this);
            obj.set_taborder("8");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "39.52%", "532", null, "145", "4%", null, this);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.set_enableevent("false");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);
            obj = new Div("Div07", "absolute", "70.96%", "17", "76", "30", null, null, this.compBox);
            obj.set_taborder("0");
            obj.set_text("성별");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "70.96%", "58", "76", "30", null, null, this.compBox);
            obj.set_taborder("1");
            obj.set_text("검사여부");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Combo("runYnEd", "absolute", "82.86%", "58", "113", "30", null, null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@dsRunYN");
            obj.set_datacolumn("value");
            obj.set_codecolumn("code");
            obj = new Combo("genderCombo", "absolute", "82.86%", "17", "113", "30", null, null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@dsGenderCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Div("Div08", "absolute", "70.96%", "98", "76", "30", null, null, this.compBox);
            obj.set_taborder("4");
            obj.set_text("단위");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("unitEd", "absolute", "82.86%", "98", "113", "30", null, null, this.compBox);
            obj.set_taborder("5");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("ocsSearchBtn", "absolute", "446", "56", "32", "32", null, null, this.compBox);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "1.27%", "98", "105", "30", null, null, this.compBox);
            obj.set_taborder("8");
            obj.set_text("참고치(하/상)");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "1.27%", "58", "105", "30", null, null, this.compBox);
            obj.set_taborder("9");
            obj.set_text("OCS코드/명");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ocsCodeEd", "absolute", "17.56%", "58", null, "30", "67.85%", null, this.compBox);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("refLowFigEd", "absolute", "17.56%", "98", null, "30", "58.92%", null, this.compBox);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("refHighFigEd", "absolute", "41.64%", "98", null, "30", "32.58%", null, this.compBox);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ocsNameEd", "absolute", "33%", "58", null, "30", "37.39%", null, this.compBox);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("dtInpsNameEd", "absolute", "32.86%", "18", null, "30", "32.58%", null, this.compBox);
            obj.set_taborder("14");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("dtInpsCodeEd", "absolute", "17.56%", "18", null, "30", "67.85%", null, this.compBox);
            obj.set_taborder("15");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "1.27%", "18", "105", "30", null, null, this.compBox);
            obj.set_taborder("16");
            obj.set_text("세부코드/명");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "435", "71", "32", "32", null, null, this);
            obj.set_taborder("32");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Grid("dtInspGrid", "absolute", "477", "110", "743", "399", null, null, this);
            obj.set_taborder("34");
            obj.set_binddataset("dsDtInsp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"165\"/><Column size=\"80\"/><Column size=\"69\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"71\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"세부검사코드\"/><Cell col=\"1\" rowspan=\"2\" text=\"세부검사명\"/><Cell col=\"2\" rowspan=\"2\" text=\"OCS코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"성별\"/><Cell col=\"4\" colspan=\"2\" text=\"참고치\"/><Cell col=\"6\" rowspan=\"2\" text=\"단위\"/><Cell row=\"1\" col=\"4\" text=\"하한\"/><Cell row=\"1\" col=\"5\" text=\"상한\"/></Band><Band id=\"body\"><Cell text=\"bind:dtInspCd\"/><Cell col=\"1\" text=\"bind:dtInspNm\"/><Cell col=\"2\" text=\"bind:ocsCd\"/><Cell col=\"3\" text=\"bind:genderCd\"/><Cell col=\"4\" text=\"bind:refLowFig\"/><Cell col=\"5\" text=\"bind:refHighFig\"/><Cell col=\"6\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 317, 50, this.btnBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("31");
            		p.set_enable("false");

            	}
            );
            this.btnBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 30, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("검사코드");
            		p.style.set_background("wheat");
            		p.style.set_color("black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("10 다음_Regular");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 100, 30, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_text("검사명");
            		p.style.set_background("wheat");
            		p.style.set_color("black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("10 다음_Regular");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 743, 218, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 392, 264, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_enable("false");
            		p.set_enableevent("false");
            		p.style.set_border("0 none #808080ff");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SC1");
            		p.set_titletext("New Form");
            		p.style.set_background("white");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","compBox.dtInpsCodeEd","value","dsDtInsp","dtInspCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","compBox.dtInpsNameEd","value","dsDtInsp","dtInspNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","compBox.ocsNameEd","value","dsDtInsp","ocsNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","compBox.refHighFigEd","value","dsDtInsp","refHighFig");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","compBox.refLowFigEd","value","dsDtInsp","refLowFig");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","compBox.refLowFigEd","value","dsInsp","ocsCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","compBox.ocsCodeEd","value","dsDtInsp","ocsCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","compBox.unitEd","value","dsDtInsp","unit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","compBox.genderCombo","value","dsDtInsp","genderCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","compBox.runYnEd","value","dsDtInsp","runYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","compBox.inspNameEd","value","dsInsp","inspNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div03.Div00.rsltDeptCodeEd","value","dsInsp","rsltDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div03.Div00.ocsCodeEd","value","dsInsp","ocsNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div03.Div00.inpsCodeEd","value","dsInsp","inspCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div03.Div00.inpsNameEd","value","dsInsp","inspNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div03.Div00.ocsNameEd","value","dsInsp","ocsNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div03.Div00.rsltDeptNameEd","value","dsInsp","rsltDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div03.Div00.amtEd","value","dsInsp","amt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div03.Div00.ocsDivCombo","value","dsInsp","ocsDivCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div03.Div00.useYnCombo","value","dsInsp","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SC_DtInspMgtForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("SC_DtInspMgtForm.xfdl", "scripts::commonPopup.xjs");
        this.addIncludeScript("SC_DtInspMgtForm.xfdl", "scripts::commonBind.xjs");
        this.addIncludeScript("SC_DtInspMgtForm.xfdl", "scripts::supScripts.xjs");
        this.registerScript("SC_DtInspMgtForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 진료지원 종합검진 세부검사관리                                                          	*
        *                                                                               *
        * @Path		                	                        *
        * @Description 										   	*
        * @Author	    한수정					                                		*
        * 									                                            *
        * Created on 2016. 5. 26.                             		                    *
        *									                                            *
        ********************************************************************************/

        
        // 공통 스크립트
        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonPopup.xjs";	
        //include "scripts::commonBind.xjs";
        //include "scripts::supScripts.xjs";

        
        // 공통 변수
        var enableState = false;

        //코드 바인드
        this.SC_DtInspMgtForm_onload = function(obj,e)
        {
        	this.gfnBind();
        }

        
        // 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	var inspCd = this.inspCodeEdit.value;
        	var inspNm = this.inspNameEdit.value;
        	
        	var argument = "inspCd='"+inspCd+"' inspNm='"+inspNm+"'";
        	
        	//alert(argument);
        	var row = this.dsService.findRow("serviceID", "findSimpleInspList");

        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findSimpleInspList", false);

        	enableState = false;
        	this.btnBox.set_enable(true);
        }

        // 세부조회
        this.dsInsp_onrowposchanged = function(obj,e)
        {
        	var argument = "inspCd='"+obj.getColumn(e.newrow , "inspCd")+"'";
        	var row = this.dsService.findRow("serviceID", "findDtInspList");
        	
        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findDtInspList", false);
        }

        
        // 처방코드 팝업
        this.ocsSearchBtn_onclick = function(obj,e)
        {
        	var rsltDeptCd = this.dsInsp.getColumn(this.dsInsp.rowposition, "rsltDeptCd");
        	var param = {rsltDeptCd:rsltDeptCd};
        	
        	this.gfnPopup("SC_OcsPopupForm","sup",param,"supCallBackFunc");
        }	

        // 팝업 셋팅
        this.setCode=function(code,arrRtn)
        {
        	this.compBox.ocsCodeEd.set_value(arrRtn[0]);
        	this.compBox.ocsNameEd.set_value(arrRtn[1]);
        }

        // 추가

        this.addBtn_onclick=function(obj,e)
        {	

        	if(this.dsInsp.rowposition == -1){
        		alert(this.MSG_SUP_ADD);	
        		return;
        	}else{
        		if (enableState == true){
        			if(!this.supCheckMdData(this.compBox)){
        				return;
        			}
        		}
        	}

        	this.dsDtInsp.addRow();
        	this.compBox.set_enable(true);
        	
        	this.dsDtInsp.setColumn(this.dsDtInsp.rowposition, "inspCd",
        							this.dsInsp.getColumn(this.dsInsp.rowposition, "inspCd"));						
        		
        	//this.fn_setUserData(this.dsDtInsp);
        	enableState = true;
        }

        
        // 수정
        this.modBtn_onclick = function(obj,e)
        {
        	this.compBox.set_enable(true);
        	enableState = true;
        }

        // 수정시 사용자정보 셋팅 
        // 
        // this.dlDtlInsp_oncolumnchanged=function(obj:Dataset, e:nexacro.DSColChangeEventInfo)
        // {
        // 	this.fn_setUserData(obj);
        // }
        // 
        // 
        // this.dlInsp_canrowposchange=function(obj:Dataset, e:nexacro.DSRowPosChangeEventInfo)
        // {
        // 	//수정중입니다. 확인을 누르시면 작업중인 정보를 잃게됩니다. 계속하시겠습니까.//
        // }

        
        // 저장
        this.saveBtn_onclick=function(obj,e)
        {
        	if(this.supCheckMdData(this.compBox))
        	{
        		this.gfnService("batchDtInspProcess");
        		enableState = false;
        	}
        	this.searchBtn_onclick(null,null);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsInsp.addEventHandler("onrowposchanged", this.dsInsp_onrowposchanged, this);
            this.dsDtInsp.addEventHandler("oncolumnchanged", this.dlDtlInsp_oncolumnchanged, this);
            this.addEventHandler("onload", this.SC_DtInspMgtForm_onload, this);
            this.btnBox.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.btnBox.modBtn.addEventHandler("onclick", this.modBtn_onclick, this);
            this.btnBox.registerBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.compBox.ocsSearchBtn.addEventHandler("onclick", this.ocsSearchBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("SC_DtInspMgtForm.xfdl");

       
    };
}
)();

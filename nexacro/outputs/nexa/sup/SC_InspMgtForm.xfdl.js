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
                this.set_name("SC_InspMgtForm");
                this.set_classname("SC1");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }
            this.style.set_background("white");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findInspList</Col><Col id=\"URL\">his::sup/checkup/findInspList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsInsp=dsInsp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">supCallBackFunc</Col></Row><Row><Col id=\"serviceID\">batchInspProcess</Col><Col id=\"URL\">his::sup/checkup/batchInspProcess.do</Col><Col id=\"outData\"/><Col id=\"inData\">dsInsp=dsInsp:u</Col><Col id=\"callbackFunc\">supCallBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInsp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/><Column id=\"ocsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ocsNm\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ocsDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">SC035</Col><Col id=\"dsName\">dsOcsDivCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOcsDivCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUseYN", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">사용</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("btnBox", "absolute", "69.2%", "696", null, "50", "5.44%", null, this);
            obj.set_taborder("31");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "211", "9", "90", "32", null, null, this.btnBox);
            obj.set_taborder("0");
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
            obj.set_enable("true");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "0", "1670", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5.12%", "-3", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("종합검진 검사 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("inspGrid", "absolute", "2.24%", "118", null, "618", "35.84%", null, this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsInsp");
            obj.set_createcellasync("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"183\"/><Column size=\"66\"/><Column size=\"229\"/><Column size=\"53\"/><Column size=\"89\"/><Column size=\"53\"/><Column size=\"40\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검사코드\"/><Cell col=\"1\" text=\"검사명\"/><Cell col=\"2\" text=\"처방코드\"/><Cell col=\"3\" text=\"처방명\"/><Cell col=\"4\" text=\"OCS구분\"/><Cell col=\"5\" text=\"결과부서\"/><Cell col=\"6\" text=\"금액\"/><Cell col=\"7\" text=\"사용\"/></Band><Band id=\"body\"><Cell text=\"bind:inspCd\"/><Cell col=\"1\" text=\"bind:inspNm\"/><Cell col=\"2\" text=\"bind:ocsCd\"/><Cell col=\"3\" style=\"font:8 arial;\" text=\"bind:ocsNm\"/><Cell col=\"4\" text=\"bind:ocsDivCd\"/><Cell col=\"5\" text=\"bind:rsltDeptNm\"/><Cell col=\"6\" text=\"bind:amt\"/><Cell col=\"7\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "2.24%", "72", null, "30", "89.76%", null, this);
            obj.set_taborder("3");
            obj.set_text("검사코드");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("inspCodeEdit", "absolute", "10.88%", "72", null, "30", "77.92%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("inspNameEdit", "absolute", "32.96%", "72", null, "30", "55.84%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "24.16%", "72", null, "30", "67.84%", null, this);
            obj.set_taborder("6");
            obj.set_text("검사명");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "715", "71", "90", "32", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "64.88%", "387", null, "301", "2.24%", null, this);
            obj.set_taborder("8");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "65.92%", "404", null, "283", "2.88%", null, this);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_enableevent("false");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "3.85%", "18", "105", "30", null, null, this.compBox);
            obj.set_taborder("17");
            obj.set_text("검사코드/명");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "3.59%", "98", "105", "30", null, null, this.compBox);
            obj.set_taborder("18");
            obj.set_text("처방코드/명");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "3.59%", "58", "105", "30", null, null, this.compBox);
            obj.set_taborder("19");
            obj.set_text("결과부서");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "51.5%", "175", "76", "30", null, null, this.compBox);
            obj.set_taborder("28");
            obj.set_text("사용금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "3.59%", "216", "76", "30", null, null, this.compBox);
            obj.set_taborder("31");
            obj.set_text("사용여부");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div07", "absolute", "3.59%", "175", "76", "30", null, null, this.compBox);
            obj.set_taborder("32");
            obj.set_text("OCS구분");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("ocsSearchBtn", "absolute", "347", "98", "32", "32", null, null, this.compBox);
            obj.set_taborder("33");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("rsltDeptSearchBtn", "absolute", "347", "58", "32", "32", null, null, this.compBox);
            obj.set_taborder("34");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox.addChild(obj.name, obj);
            obj = new Combo("useYnCombo", "absolute", "24.1%", "216", "100", "30", null, null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_innerdataset("@dsUseYN");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Combo("ocsDivCombo", "absolute", "24.36%", "175", "100", "30", null, null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_innerdataset("@dsOcsDivCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("compCheck").set("EsCombo");
            obj = new Edit("amtEd", "absolute", "72.2%", "175", "95", "30", null, null, this.compBox);
            obj.set_taborder("47");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ocsCodeEd", "absolute", "31.79%", "98", null, "30", "47.44%", null, this.compBox);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ocsNameEd", "absolute", "53.59%", "98", null, "30", "12.31%", null, this.compBox);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rsltDeptNameEd", "absolute", "53.59%", "58", null, "30", "12.31%", null, this.compBox);
            obj.set_taborder("50");
            obj.getSetter("compCheck").set("EsEd");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rsltDeptCodeEd", "absolute", "31.79%", "58", null, "30", "47.44%", null, this.compBox);
            obj.set_taborder("51");
            obj.getSetter("compCheck").set("EsEd");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("inpsNameEd", "absolute", "53.59%", "18", null, "30", "3.59%", null, this.compBox);
            obj.getSetter("compCheck").set("EsEd");
            obj.set_taborder("52");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("inpsCodeEd", "absolute", "31.89%", "18", null, "30", "47.41%", null, this.compBox);
            obj.set_taborder("53");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "12.64%", "247", null, "191", "66.88%", null, this);
            obj.set_taborder("32");
            obj.set_binddataset("dsTest");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"84\"/><Column size=\"78\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Test1\"/><Cell col=\"1\" text=\"Test2\"/><Cell col=\"2\" text=\"Test3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"expand\" text=\"bind:Column1\" expandshow=\"show\" expandimage=\"URL('img::gridSearch2.png')\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
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
            obj = new Layout("default", "", 0, 301, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 105, 30, this.compBox.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_text("처방코드/명");
            		p.style.set_background("tan");
            		p.style.set_color("black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("10 다음_Regular");

            	}
            );
            this.compBox.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 392, 264, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_enable("true");
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
            obj = new BindItem("item8","compBox.inpsCodeEd","value","dsInsp","inspCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","compBox.inspNameEd","value","dsInsp","inspNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","compBox.rsltDeptCodeEd","value","dsInsp","rsltDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","compBox.rsltDeptNameEd","value","dsInsp","rsltDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","compBox.ocsNameEd","value","dsInsp","ocsNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","compBox.ocsCodeEd","value","dsInsp","ocsCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","compBox.amtEd","value","dsInsp","amt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","compBox.ocsDivCombo","value","dsInsp","ocsDivCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","compBox.useYnCombo","value","dsInsp","useYn");
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
            obj = new BindItem("item18","compBox.inpsNameEd","value","dsInsp","inspNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","compBox.ocsCodeEd","value","dsInsp","ocsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SC_InspMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SC_InspMgtForm.xfdl", "scripts::supScripts.xjs");
        this.registerScript("SC_InspMgtForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 진료지원 종합검진 검사관리                                                *
        *                                                                               *
        * @Path		    scripts-commonScript                   	                        *
        * @Description 	공통스크립트의 모음										   	*
        * @Author	    한수정					                                		*
        * 									                                            *
        * Created on 2016. 5. 26.                             		                    *
        *									                                            *
        ********************************************************************************/

        
        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 
        //include "scripts::supScripts.xjs";

        
        var editFlag = false;

        //코드 바인드
        this.SC_InspMgtForm_onload = function(obj,e)
        {
        	this.gfnBind();	
        }

        
        // 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	this.compBox.set_enable(false);
        	this.btnBox.set_enable(true);
        	
        	var inspCd = this.inspCodeEdit.value;
        	var inspNm = this.inspNameEdit.value;
        	
        	var argument = "inspCd='"+inspCd+"' inspNm='"+inspNm+"'";
        	
        	//alert(argument);
        	var row = this.dsService.findRow("serviceID", "findInspList");

        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findInspList", false);

        	editFlag = false;
        }

        // 결과부서 팝업
        this.rsltDeptSearchBtn_onclick = function(obj,e)
        {
        	var param = {code:"SC036"};
        	this.gfnPopup("CM_CdPopupForm","com",param,"supCallBackFunc");
        }

        

        // 처방코드 팝업
        this.ocsSearchBtn_onclick = function(obj,e)
        {
        	var rsltDeptCd = this.dsInsp.getColumn(this.dsInsp.rowposition, "rsltDeptCd");
        	var param = {rsltDeptCd:rsltDeptCd};
        	
        	this.gfnPopup("SC_OcsPopupForm","sup",param);
        }

        // 팝업 셋팅
        this.setCode=function(code,arrRtn)
        {
        	if(code=="SC036"){
        		this.compBox.rsltDeptCodeEd.set_value(arrRtn[0]);
        		this.compBox.rsltDeptNameEd.set_value(arrRtn[1]);
        	}else{
        		this.compBox.ocsCodeEd.set_value(arrRtn[0]);
        		this.compBox.ocsNameEd.set_value(arrRtn[1]);
        	}
        }

        // 추가

        this.addBtn_onclick=function(obj,e)
        {	

        	if(editFlag == true)
        	{
        		if(!this.supCheckMdData(this.compBox))			
        		{
        			return;
        		}	
        	}
        	
        	this.dsInsp.addRow();
        	this.compBox.set_enable(true);
        		
        	//this.fn_setUserData(this.dlInsp);					
        }

        
        // 수정
        this.modBtn_onclick = function(obj,e)
        {
        	this.compBox.set_enable(true);
        	editFlag = true;
        }

        // 수정시 사용자정보 셋팅 
        // this.dlInsp_oncolumnchanged=function(obj:Dataset, e:nexacro.DSColChangeEventInfo)
        // {
        // 	this.fn_setUserData(this.dlInsp);			//이거되는지확인
        // }

        
        // 저장
        this.saveBtn_onclick=function(obj,e)
        {
        	if(this.supCheckMdData(this.compBox))
        	{
        		this.gfnService("batchInspProcess");
        	}
        	
        	this.searchBtn_onclick(null,null);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SC_InspMgtForm_onload, this);
            this.btnBox.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.btnBox.modBtn.addEventHandler("onclick", this.modBtn_onclick, this);
            this.btnBox.registerBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.inspGrid.addEventHandler("onsetfocus", this.inspGrid_onsetfocus, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.compBox.ocsSearchBtn.addEventHandler("onclick", this.ocsSearchBtn_onclick, this);
            this.compBox.rsltDeptSearchBtn.addEventHandler("onclick", this.rsltDeptSearchBtn_onclick, this);

        };

        this.loadIncludeScript("SC_InspMgtForm.xfdl");

       
    };
}
)();

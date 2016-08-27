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
                this.set_name("AB_BudgMisaForm");
                this.set_classname("AB_BudgMisaForm");
                this.set_titletext("예산목간전용관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">getMisaNo</Col><Col id=\"URL\">his::acc/budget/getMisaNo.do</Col><Col id=\"inData\"/><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">getMisaNoCallback</Col></Row><Row><Col id=\"serviceID\">appBudgMisa</Col><Col id=\"URL\">his::acc/budget/appBudgMisa.do</Col><Col id=\"inData\">dsBudgMisa=dsBudgMisa:U dsBudgMisaTaget=dsBudgMisaTaget:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">deciBudgMisa</Col><Col id=\"URL\">his::acc/budget/deciBudgMisa.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsBudgMisa=dsBudgMisa dsBudgMisaTaget=dsBudgMisaTaget</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findBudgMisaList</Col><Col id=\"URL\">his::acc/budget/findBudgMisaList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsBudgMisa=dsBudgMisa dsBudgMisaTaget=dsBudgMisaTaget</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBudgMisa", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"deciDept\" type=\"STRING\" size=\"256\"/><Column id=\"deciNote\" type=\"STRING\" size=\"256\"/><Column id=\"signDiv\" type=\"STRING\" size=\"256\"/><Column id=\"appDept\" type=\"STRING\" size=\"256\"/><Column id=\"appDay\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"misaNo\" type=\"STRING\" size=\"256\"/><Column id=\"calcReason\" type=\"STRING\" size=\"256\"/><Column id=\"deciDay\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GB102</Col><Col id=\"dsName\">dsGB102</Col></Row><Row><Col id=\"code\">GB103</Col><Col id=\"dsName\">dsGB103</Col></Row><Row><Col id=\"code\">GP500</Col><Col id=\"dsName\">dsGP500</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGB103", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBudgMisaTaget", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/><Column id=\"variationDiv\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"misaNo\" type=\"STRING\" size=\"256\"/><Column id=\"variationAmount\" type=\"STRING\" size=\"256\"/><Column id=\"budgAmount\" type=\"STRING\" size=\"256\"/><Column id=\"budgBal\" type=\"STRING\" size=\"256\"/><Column id=\"bimokNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGB102", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGP500", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "4", "1246", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Static("titleEdt02", "absolute", "4.4%", "10", null, "44", "77.76%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("예산목간전용관리");
            obj.set_cssclass("TStc");
            obj.style.set_font("bold 15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stc_year", "absolute", "1.52%", "76", null, "27", "91.44%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("회계년도");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "9.28%", "74", null, "30", "81.28%", null, this);
            obj.set_taborder("3");
            obj.set_value("2016");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Static("stc_state_divide", "absolute", "19.52%", "76", null, "27", "73.44%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("상태구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("signDivCombo", "absolute", "27.36%", "76", null, "25", "62.8%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("@dsGB102");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("stc_ask_date", "absolute", "38.08%", "76", null, "27", "54.88%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("신청일자");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("auto");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("startDateCal", "absolute", "45.92%", "76", null, "26", "44.4%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");

            obj = new Static("stc_acnt_sub01", "absolute", "55.76%", "76", null, "27", "42.96%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("~");
            obj.style.set_background("transparent");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("endDateCal", "absolute", "57.36%", "76", null, "26", "32.96%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");

            obj = new Grid("misaGrid", "absolute", "1.6%", "120", null, "583", "66.16%", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("dsBudgMisa");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"106\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"전용번호\"/><Cell col=\"1\" text=\"상태구분\"/><Cell col=\"2\" text=\"신청부서\"/><Cell col=\"3\" text=\"신청일\"/></Band><Band id=\"body\"><Cell text=\"bind:misaNo\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:signDiv\" combodataset=\"dsGB102\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:appDept\" combodataset=\"dsGP500\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"3\" text=\"bind:appDay\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "34.96%", "120", null, "27", "58.16%", null, this);
            obj.getSetter("taborder").set("11");
            obj.set_text("신청부서");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("auto");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("appDeptCdEd", "absolute", "42.24%", "120", null, "25", "52%", null, this);
            obj.set_taborder("12");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Combo("signDivCombo2", "absolute", "42.24%", "161", null, "25", "45.36%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.getSetter("usecontextmenu").set("false");
            obj.set_innerdataset("dsGB102");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("Static08", "absolute", "34.96%", "161", null, "27", "58.16%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("상태구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("auto");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "55.92%", "161", null, "27", "37.2%", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("확정의견");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("auto");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "34.96%", "202", null, "27", "58.16%", null, this);
            obj.getSetter("taborder").set("16");
            obj.set_text("변경사유");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("auto");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "34.96%", "243", null, "27", "58.16%", null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("확정부서");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("auto");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("deciDeptCdEd", "absolute", "42.24%", "243", null, "25", "52%", null, this);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("deciDeptNmEd", "absolute", "48.64%", "243", null, "25", "41.44%", null, this);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Combo("deciDeptCombo", "absolute", "51.84%", "120", null, "25", "38.96%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.getSetter("usecontextmenu").set("false");
            obj.set_innerdataset("dsGP500");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.getSetter("class").set("AreaCombo");

            obj = new Edit("deciNoteEd", "absolute", "63.28%", "161", null, "25", "1.44%", null, this);
            obj.set_taborder("22");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "62.24%", "120", null, "27", "30.88%", null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("신청일자");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("auto");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("appDayCal", "absolute", "69.68%", "120", null, "26", "20%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");

            obj = new Static("Static07", "absolute", "80.88%", "120", null, "27", "12.24%", null, this);
            obj.getSetter("taborder").set("25");
            obj.set_text("확정일자");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("auto");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("deciDayCal", "absolute", "88.24%", "120", null, "26", "1.44%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");

            obj = new Button("addMisaBtn", "absolute", "230", "718", "90", "32", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("ArBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delMisaBtn", "absolute", "334", "718", "90", "32", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("DrBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deptPoputBtn", "absolute", "608", "116", "32", "32", null, null, this);
            obj.set_taborder("29");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "853", "72", "90", "32", null, null, this);
            obj.set_taborder("30");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("misaappBtn", "absolute", "1142", "719", "90", "32", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("SaveBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("misaTagetGrid", "absolute", "35.04%", "278", null, "426", "1.52%", null, this);
            obj.set_taborder("32");
            obj.set_binddataset("dsBudgMisaTaget");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"183\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"전용번호\"/><Cell col=\"1\" text=\"회계년도\"/><Cell col=\"2\" text=\"비목코드\"/><Cell col=\"3\" text=\"비목명\"/><Cell col=\"4\" text=\"전용상태\"/><Cell col=\"5\" text=\"전용금액\"/><Cell col=\"6\" text=\"예산금액\"/><Cell col=\"7\" text=\"예산잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:misaNo\"/><Cell col=\"1\" text=\"bind:accYear\"/><Cell col=\"2\" edittype=\"expand\" text=\"bind:bimokCd\" expandshow=\"show\" expandimage=\"URL('img2::popup.png')\"/><Cell col=\"3\" text=\"bind:bimokNm\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:variationDiv\" combodataset=\"dsGB103\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:variationAmount\"/><Cell col=\"6\" text=\"bind:budgAmount\"/><Cell col=\"7\" text=\"bind:budgBal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("misaDeciBtn", "absolute", "83.2%", "720", null, "30", "9.84%", null, this);
            obj.set_taborder("33");
            obj.set_text("전용확정");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addTagetBtn", "absolute", "1039", "240", "90", "32", null, null, this);
            obj.set_taborder("34");
            obj.set_cssclass("ArBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delTagerBtn", "absolute", "1143", "240", "90", "32", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("DrBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("calcReasonEd", "absolute", "42.24%", "202", null, "25", "1.52%", null, this);
            obj.set_taborder("36");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AB_BudgMisaForm");
            		p.set_titletext("예산목간전용관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","appDeptCdEd","value","dsBudgMisa","appDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","signDivCombo2","value","dsBudgMisa","signDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","deciDeptCdEd","value","dsBudgMisa","deciDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","deciDeptCombo","value","dsBudgMisa","appDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","deciNoteEd","value","dsBudgMisa","deciNote");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","appDayCal","value","dsBudgMisa","appDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","deciDayCal","value","dsBudgMisa","deciDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","calcReasonEd","value","dsBudgMisa","calcReason");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AB_BudgMisaForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AB_BudgMisaForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";  

        var misaNo;    //전용번호

        //*******
        //Onload
        //*******
        this.AB_BudgMisaForm_onload = function(obj,e){
        	this.gfnBind();
        	
        //	var jobtt = application.gdsEmp.getColumn(0,"jobtt");
        //	if(jobtt=="과장"){
        //		this.misaDeciBtn.set_visible(true);	//과장이상만 추가등록 가능
        //	}
        }

        //*****
        //조회
        //*****
        this.searchMisaBtn_onclick = function(obj,e){
        	var accYear = this.yearSpin.value;
        	var signDiv = this.signDivCombo.value;
        	var startDate = this.startDateCal.value;
        	var endDate = this.endDateCal.value;
        	
        	var argument = 'accYear='+accYear+' signDiv='+signDiv+' startDate='+startDate+' endDate='+endDate;

        //alert(argument);
        	this.dsService.setColumn(3, "argument", argument);
        	this.gfnService("findBudgMisaList");
        	this.dsBudgMisaTaget.filter("misaNo =="+this.dsBudgMisa.getColumn(e.row,"misaNo"));
        }

        //**************
        //전용추가버튼
        //**************
        this.addMisaBtn_onclick = function(obj,e){
        	var rowCount = this.dsBudgMisa.rowcount;
        	var addRow = this.dsBudgMisa.addRow();
        	if(rowCount == 0){
        		this.dsBudgMisa.setColumn(addRow, "misaNo", 10000);
        	}else{
        		this.dsBudgMisa.setColumn(addRow, "misaNo",parseInt(this.dsBudgMisa.getColumn(addRow-1,"misaNo"))+1);
        	}
        	this.dsBudgMisa.setColumn(addRow, "accYear",this.yearSpin.value);
        	//this.gfnService("getMisaNo");
        }

        //**************
        //전용삭제버튼
        //**************
        this.delMisaBtn_onclick = function(obj,e){
        	var signDiv = this.dsBudgMisa.getColumn(this.dsBudgMisa.rowposition,"signDiv")
        	
        	if(signDiv=='2'){
        	alert('이미확정된 전용신청은 삭제가 불가능합니다.');
        	return;
        	}
        	this.dsBudgMisa.deleteRow(this.dsBudgMisa.rowposition);
        }

        //************
        //행추가버튼
        //************
        this.addTagetBtn_onclick = function(obj,e){
        	var signDiv = this.dsBudgMisa.getColumn(this.dsBudgMisa.rowposition,"signDiv");
        	
        	if(signDiv==null){
        		alert('전용을 선택후 추가하셔야합니다.');
        		return;
        	}
        	else if(signDiv=='2'){
        		alert('이미확정된 전용신청은 추가가 불가능합니다.');
        		return;
        	}
        	var aRow = this.dsBudgMisaTaget.addRow();
        	this.dsBudgMisaTaget.setColumn(aRow,"misaNo", this.dsBudgMisa.getColumn( this.dsBudgMisa.rowposition,"misaNo"));
        	this.dsBudgMisaTaget.setColumn(aRow,"accYear", this.dsBudgMisa.getColumn( this.dsBudgMisa.rowposition,"accYear"));
        }

        //************
        //행삭제버튼
        //************
        this.delTagerBtn_onclick = function(obj,e){
        	var signDiv = this.dsBudgMisa.getColumn( this.dsBudgMisa.rowposition,"signDiv");
        	
        	if(signDiv=='2'){
        		alert('이미확정된 전용신청은 추가가 불가능합니다.');
        		return;
        	}
        	this.dsBudgMisaTaget.deleteRow(this.dsBudgMisaTaget.rowposition);
        }

        //**************
        //전용확정버튼
        //**************
        this.misaDeciBtn_onclick = function(obj,e){
        	var signDiv = this.dsBudgMisa.getColumn(this.dsBudgMisa.rowposition, "signDiv");
        //	alert(signDiv);
        	
        	if(signDiv=='2'){
        		alert('이미확정된 전용신청입니다.');
        		return;
        	}
        	
        	var misaNo = this.dsBudgMisa.getColumn(this.dsBudgMisa.rowposition,"misaNo");
        	var accYear = this.dsBudgMisa.getColumn(this.dsBudgMisa.rowposition,"accYear");
        //	var deciDept = application.dsEmp.getColumn(0,"deptCd");	//확정자 부서가져오기
        	var deciDept = 100;	//임시로 부서지정...(원장)
        	var deciNote = this.deciNoteEd.value;
        	
        	var argument = 'misaNo='+misaNo+' accYear='+accYear+' deciDept='+deciDept+' deciNote='+deciNote;
        	this.dsService.setColumn(2,"argument",argument);
        	this.gfnService("deciBudgMisa");
        }

        //*************************************
        //날짜 ds에 넣기(자꾸 안드가네..;;)
        //*************************************
        this.appDayCal_onkillfocus = function(obj,e){
        	var aapDay = this.appDayCal.value+"";
        	this.dsBudgMisa.setColumn(this.dsBudgMisa.rowposition, "appDay", aapDay);
        }

        this.deciDayCal_onkillfocus = function(obj,e){
        	var deciDay = this.deciDayCal.value+"";
        	this.dsBudgMisa.setColumn(this.dsBudgMisa.rowposition, "deciDay", deciDay);
        }

        //**********
        //저장버튼
        //**********
        this.misaappBtn_onclick = function(obj,e){
         
        	var rowcount = this.dsBudgMisaTaget.rowcount;
        	var totalVariationAmount = 0 ;
         
        	for(i=0;i<rowcount;i++){
        		var variationAmount = this.dsBudgMisaTaget.getColumn(i,"variationAmount");
        		var variationDiv = this.dsBudgMisaTaget.getColumn(i,"variationDiv");
        		totalVariationAmount = totalVariationAmount + (variationDiv == '1' ? parseInt(variationAmount) : parseInt('-'+variationAmount));
        	}
         
        	if(totalVariationAmount!= 0){
        		alert('증액 과 감액이 같아야합니다')
        		return;
        	}
        	this.gfnService("appBudgMisa");
        }

        //************
        //그리드함수
        //************
        this.misaGrid_oncellclick = function(obj,e){	
        	this.dsBudgMisaTaget.filter("misaNo =="+this.dsBudgMisa.getColumn(e.row,"misaNo"));
        	
        	var deciDept = this.deciDeptCdEd.value;
        	if(deciDept != ""){
        		var deciDeptNm = this.dsGP500.getColumn(this.dsGP500.findRow("code", deciDept), "bigValue");
        		this.deciDeptNmEd.set_value(deciDeptNm);
        	}
        }

        this.misaTagetGrid_oncelldblclick = function(obj,e){
        	var accYear = this.yearSpin.value;
        	
        	if(e.cell=='2'){
        		var bimokArr = application.open("비목코드도움","acc::AB_BimokHelpPopupForm.xfdl",this.parent,{accYear:accYear},'',e.screenX,e.screenY);
        	}
        }

        //*********
        //부서검색
        //*********
        this.deptPoputBtn_onclick = function(obj,e){
        	var arr = this.gfnCodePopup("GP500");
        	this.appDeptCdEd.set_value(arr[0]);
        }

        this.setCode = function(code,arrRtn) {
        	alert(code);
        	if(code == "bimokHelp"){
        		var bimokNm = this.dsBudgMisaTaget.findRow("bimokNm",arrRtn[2]);
        		
        		if(bimokNm == -1){
        			this.dsBudgMisaTaget.setColumn(this.dsBudgMisaTaget.rowposition,"accYear",arrRtn[0]);
        			this.dsBudgMisaTaget.setColumn(this.dsBudgMisaTaget.rowposition,"bimokCd",arrRtn[1]);
        			this.dsBudgMisaTaget.setColumn(this.dsBudgMisaTaget.rowposition,"bimokNm",arrRtn[2]);
        			this.dsBudgMisaTaget.setColumn(this.dsBudgMisaTaget.rowposition,"budgAmount",arrRtn[3]);
        			this.dsBudgMisaTaget.setColumn(this.dsBudgMisaTaget.rowposition,"budgBal",arrRtn[4]);
        		}else{
        			alert("같은비목이 존재합니다.");
        		}
        	}else{
        		this.appDeptCdEd.set_value(arrRtn[0]);
        	}
        }

        //*********
        //Callback
        //*********
        this.getMisaNoCallback = function(){
        	var aRow = this.dsBudgMisa.addRow();
        	this.dsBudgMisa.setColumn(aRow,"signDiv",1);
        	this.dsBudgMisa.setColumn(aRow,"misaNo",misaNo);
        	this.dsBudgMisa.setColumn(aRow,"accYear",this.yearSpin.value);
        	this.dsBudgMisa.setColumn(aRow,"appDay",this.gfn_date("YYYY-MM-DD"));
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AB_BudgMisaForm_onload, this);
            this.stc_year.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.stc_state_divide.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_ask_date.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_acnt_sub01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.misaGrid.addEventHandler("oncellclick", this.misaGrid_oncellclick, this);
            this.appDayCal.addEventHandler("onkillfocus", this.appDayCal_onkillfocus, this);
            this.deciDayCal.addEventHandler("onkillfocus", this.deciDayCal_onkillfocus, this);
            this.addMisaBtn.addEventHandler("onclick", this.addMisaBtn_onclick, this);
            this.delMisaBtn.addEventHandler("onclick", this.delMisaBtn_onclick, this);
            this.deptPoputBtn.addEventHandler("onclick", this.deptPoputBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchMisaBtn_onclick, this);
            this.misaappBtn.addEventHandler("onclick", this.misaappBtn_onclick, this);
            this.misaTagetGrid.addEventHandler("oncelldblclick", this.misaTagetGrid_oncelldblclick, this);
            this.misaDeciBtn.addEventHandler("onclick", this.misaDeciBtn_onclick, this);
            this.addTagetBtn.addEventHandler("onclick", this.addTagetBtn_onclick, this);
            this.delTagerBtn.addEventHandler("onclick", this.delTagerBtn_onclick, this);

        };

        this.loadIncludeScript("AB_BudgMisaForm.xfdl");

       
    };
}
)();

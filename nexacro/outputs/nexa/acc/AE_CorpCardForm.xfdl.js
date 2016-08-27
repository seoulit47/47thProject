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
                this.set_name("AE_CorpCardForm");
                this.set_classname("AE_CorpCardForm");
                this.set_titletext("법인카드 관리 화면");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("useYN", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGA012", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGA055", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGA007", this);
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA007</Col><Col id=\"dsName\">dsGA007</Col></Row><Row><Col id=\"code\">GA003</Col><Col id=\"dsName\">dsGA003</Col></Row><Row><Col id=\"code\">GA055</Col><Col id=\"dsName\">dsGA055</Col></Row><Row><Col id=\"code\">GA012</Col><Col id=\"dsName\">dsGA012</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGA003", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCorpCard", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"cardNo\" type=\"STRING\" size=\"256\"/><Column id=\"cardKnd\" type=\"STRING\" size=\"256\"/><Column id=\"cardDiv\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"signBank\" type=\"STRING\" size=\"256\"/><Column id=\"signAccntNo\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"ccardMngntDiv\" type=\"STRING\" size=\"256\"/><Column id=\"receiveDate\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCorpCard</Col><Col id=\"URL\">his::acc/elementary/findCorpCardList.do</Col><Col id=\"inData\">dsCorpCard=dsCorpCard</Col><Col id=\"outData\">dsCorpCard=dsCorpCard</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">batchCorpCard</Col><Col id=\"inData\">dsCorpCard=dsCorpCard:U</Col><Col id=\"URL\">his::acc/elementary/batchCorpCardListProcess.do</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "0%", "-4", "1242", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "3.71%", "11", null, "35", "81.2%", null, this.titleBarDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("법인카드 관리");
            obj.style.set_font("bold 20 나눔스퀘어 Bold");
            this.titleBarDiv.addChild(obj.name, obj);

            obj = new Static("stc_card_sort", "absolute", "2.24%", "61", null, "27", "90.72%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("카드종류");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("stc_receive_date", "absolute", "2.24%", "101", null, "27", "90.72%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("수령일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("cardKndComBo", "absolute", "10.08%", "61", null, "26", "80.08%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("dsGA007");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Calendar("SdayCal", "absolute", "10.08%", "101", null, "26", "80.24%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");

            obj = new Calendar("EdayCal", "absolute", "21.52%", "101", null, "26", "68.8%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");

            obj = new Static("stc_cardNm", "absolute", "22.16%", "61", null, "27", "70.8%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("카드번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("cardNmEd", "absolute", "30%", "61", "180", "26", null, null, this);
            obj.set_taborder("7");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_useYN", "absolute", "33.6%", "101", null, "27", "59.36%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("사용여부");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("stc_emp", "absolute", "46.8%", "61", null, "27", "46.16%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("회원명조회");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("empEd", "absolute", "54.64%", "61", null, "26", "24.08%", null, this);
            obj.set_taborder("10");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "979", "58", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("corpCardGrid", "absolute", "2.24%", "136", null, "578", "30.24%", null, this);
            obj.set_taborder("13");
            obj.set_binddataset("dsCorpCard");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"49\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"27\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"카드번호\"/><Cell col=\"1\" text=\"카드종류\"/><Cell col=\"2\" text=\"사원명\"/><Cell col=\"3\" text=\"결재은행\"/><Cell col=\"4\" text=\"결재계좌\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" displaytype=\"normal\" text=\"관리구분\"/><Cell col=\"7\" text=\"사용\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:cardNo\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:cardKnd\" combodataset=\"dsGA007\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" text=\"bind:empNm\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:signBank\" combodataset=\"dsGA003\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:signAccntNo\"/><Cell col=\"5\" text=\"bind:deptNm\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:ccardMngntDiv\" combodataset=\"dsGA055\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:useYn\" combodataset=\"useYN\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "80.64%", "130", null, "32", "9.28%", null, this);
            obj.set_taborder("15");
            obj.set_text(" 상세정보 ");
            obj.style.set_font("bold 12 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("stc_card_sort_detail", "absolute", "71.2%", "168", null, "27", "21.76%", null, this);
            obj.getSetter("taborder").set("16");
            obj.set_text("카드종류*");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("cardKndCombo", "absolute", "79.84%", "168", null, "26", "5.84%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_innerdataset("@dsGA007");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("stc_cardNo", "absolute", "71.2%", "214", null, "27", "21.76%", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("시용카드번호*");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("cardNoEd", "absolute", "79.84%", "214", null, "26", "5.76%", null, this);
            obj.set_taborder("19");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Combo("settlingBankCombo", "absolute", "79.84%", "260", null, "26", "10.32%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_innerdataset("@dsGA003");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.style.set_buttonsize("-1");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#46463dff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("auto");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("stc_settling_Bank", "absolute", "71.2%", "260", null, "27", "21.76%", null, this);
            obj.getSetter("taborder").set("21");
            obj.set_text("결제은행");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("stc_clearance_acc", "absolute", "71.2%", "306", null, "27", "21.76%", null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("결제계좌번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("clearanceAccEd", "absolute", "79.84%", "306", null, "26", "5.76%", null, this);
            obj.set_taborder("23");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_card_manage", "absolute", "71.2%", "352", null, "27", "21.76%", null, this);
            obj.getSetter("taborder").set("24");
            obj.set_text("카드관리구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("cardManageCombo", "absolute", "79.84%", "352", null, "26", "10.32%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_innerdataset("@dsGA055");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("stc_receive_emp", "absolute", "71.2%", "398", null, "27", "21.76%", null, this);
            obj.getSetter("taborder").set("26");
            obj.set_text("회원명*");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("empNmEd", "absolute", "79.84%", "398", null, "26", "9.76%", null, this);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.set_font("bold antialias 8 돋움");
            obj.getSetter("class").set("MdEdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_empno", "absolute", "71.2%", "444", null, "27", "21.76%", null, this);
            obj.getSetter("taborder").set("28");
            obj.set_text("사번*");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("empNoEd", "absolute", "79.84%", "444", null, "26", "9.76%", null, this);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.set_font("bold antialias 8 돋움");
            obj.getSetter("class").set("MdEdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept", "absolute", "71.2%", "490", null, "27", "21.76%", null, this);
            obj.getSetter("taborder").set("30");
            obj.set_text("부서*");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("deptCdEd", "absolute", "79.84%", "491", null, "26", "16.16%", null, this);
            obj.set_taborder("31");
            obj.style.set_align("center middle");
            obj.style.set_font("bold antialias 8 돋움");
            obj.style.setStyleValue("background", "readonly", "#fbf8f1ff");
            obj.style.setStyleValue("border", "readonly", "1 solid #ffffff00");
            obj.style.setStyleValue("bordertype", "readonly", "normal 0 0");
            obj.style.setStyleValue("align", "readonly", "center middle");
            obj.style.setStyleValue("font", "readonly", "bold antialias 8 돋움");
            obj.style.setStyleValue("cursor", "readonly", "auto");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("deptEd", "absolute", "84.32%", "490", null, "26", "6.88%", null, this);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.set_font("bold antialias 8 돋움");
            obj.style.setStyleValue("background", "readonly", "#fbf8f1ff");
            obj.style.setStyleValue("border", "readonly", "1 solid #ffffff00");
            obj.style.setStyleValue("bordertype", "readonly", "normal 0 0");
            obj.style.setStyleValue("align", "readonly", "center middle");
            obj.style.setStyleValue("font", "readonly", "bold antialias 8 돋움");
            obj.style.setStyleValue("cursor", "readonly", "auto");
            obj.getSetter("class").set("MdEdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_acnt_sub12", "absolute", "71.2%", "536", null, "27", "21.76%", null, this);
            obj.getSetter("taborder").set("33");
            obj.set_text("수령일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("receiveDateCal", "absolute", "79.84%", "536", null, "26", "10.48%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("stc_retrn_date", "absolute", "71.2%", "582", null, "27", "21.76%", null, this);
            obj.getSetter("taborder").set("35");
            obj.set_text("반납일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("returmDateCal", "absolute", "79.84%", "582", null, "26", "10.48%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("stc_acnt_sub15", "absolute", "71.2%", "628", null, "27", "21.76%", null, this);
            obj.getSetter("taborder").set("37");
            obj.set_text("사용여부");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Radio("useRadio2", "absolute", "79.84%", "628", null, "26", "13.28%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_columncount("2");
            obj.set_innerdataset("@useYN");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Static("stc_note", "absolute", "71.2%", "674", null, "27", "21.76%", null, this);
            obj.getSetter("taborder").set("39");
            obj.set_text("비고");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("noteEd", "absolute", "79.84%", "674", null, "26", "1.44%", null, this);
            obj.set_taborder("40");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Radio("useRadio", "absolute", "43.28%", "102", null, "26", "49.84%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_columncount("2");
            obj.set_innerdataset("@useYN");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Static("stc_acnt_sub01", "absolute", "20%", "99", null, "27", "78.72%", null, this);
            obj.getSetter("taborder").set("42");
            obj.set_text("~");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "686", "728", "90", "32", null, null, this);
            obj.set_taborder("43");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "782", "728", "90", "32", null, null, this);
            obj.set_taborder("44");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "1153", "728", "90", "32", null, null, this);
            obj.set_taborder("45");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchEmpBtn", "absolute", "1152", "395", "32", "32", null, null, this);
            obj.set_taborder("46");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchDeptBtn", "absolute", "1182", "488", "32", "32", null, null, this);
            obj.set_taborder("47");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1242, 60, this.titleBarDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.titleBarDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AE_CorpCardForm");
            		p.set_titletext("법인카드 관리 화면");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","cardKndCombo","value","dsCorpCard","cardKnd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cardNoEd","value","dsCorpCard","cardNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","settlingBankCombo","value","dsCorpCard","signBank");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","clearanceAccEd","value","dsCorpCard","signAccntNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cardManageCombo","value","dsCorpCard","ccardMngntDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","empNmEd","value","dsCorpCard","empNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","empNoEd","value","dsCorpCard","empNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","deptCdEd","value","dsCorpCard","deptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","deptEd","value","dsCorpCard","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","receiveDateCal","value","dsCorpCard","receiveDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","useRadio2","value","dsCorpCard","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","noteEd","value","dsCorpCard","note");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","useRadio","value","dsCorpCard","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AE_CorpCardForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AE_CorpCardForm.xfdl", function() {
        // include "scripts::commonTransaction.xjs";
        // include "scripts::commonBind.xjs";	
        // include "scripts::commonPopup.xjs";
        //include "scripts::commonScripts.xjs";

        this.AE_CorpCardForm_onload = function(obj,e)
        {
        	this.gfnBind();
        	this.gfnService("findCorpCard");
        }

        //법인카드정보 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	var cardKnd=this.cardKndComBo.value;
        	var cardNo=this.cardNmEd.value;
        	var Sday=this.SdayCal.value;
        	var Eday=this.EdayCal.value;
        	var emp=this.empEd.value;
        	var useYn=this.useRadio.value;
        	
        	var argument = 'cardKnd='+cardKnd+' cardNo='+cardNo+' Sday='+Sday+' Eday='+Eday+' emp='+emp+' useYn='+useYn;
        	
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findCorpCard");
        }

        //법인카드정보 추가
        this.addBtn_onclick = function(obj,e)
        {
        	this.dsCorpCard.addRow();
        }

        //법인카드정보 삭제
        this.delBtn_onclick = function(obj,e)
        {
        	this.dsCorpCard.deleteRow(this.corpCardGrid.currentrow);
        }

        //법인카드 정보 일괄처리
        this.batchBtn_onclick = function(obj,e)
        {
        	if(this.cardNoEd.value==null){
        		alert("카드번호는 필수 입력사항입니다.");
        	}else if(this.cardKndCombo.value==null){
        		alert("카드종류는 필수 입력사항입니다.");	
        	}else if(this.empNmEd.value==null){
        		alert("회원명은 필수 입력사항입니다.");
        	}else {
        		this.gfnService("batchCorpCard");
        	}
        }

        
        //사원 검색팝업
        this.searchEmpBtn_onclick = function(obj,e)
        {
        	this.gfnEmpPopup();
        }

        //사원팝업창에서 선택시 사원명과 사원번호 세팅
        this.setEmpInfo = function(arrRtn){
        	this.empNmEd.set_value(arrRtn[1]);
        	this.empNoEd.set_value(arrRtn[0]);
        }

        //부서 검색팝업
        this.searchDeptBtn_onclick = function(obj,e)
        {
        	var param = {code:"GP500"};
        	this.gfnPopup("codePopupForm","com",param);
        }

        //부서팝업창에서 선택시 부서명과 부서번호 세팅
        this.setCodeArray = function(code,arrRtn,codeSeq){
        	this.deptCdEd.set_value(arrRtn[0]);
        	this.deptEd.set_value(arrRtn[1]);
        }

        
        //콜백함수
        this.CallbackFunc=function(serviceID,errorCode,errorMsg){

        	if(serviceID=="findCorpCard"){
        		if(errorCode < 0){
        			alert(errorMsg+"법인카드목록을 불러오는데 실패했습니다");
        		}
        	}else if(serviceID=="batchCorpCard"){
        		if(errorCode == 0){
        			alert("법인카드정보 일괄처리를 완료했습니다.");
        			this.reload();
        		}else if(errorCode < 0){
        			alert(errorMsg+"법인카드정보 일괄처리를 실패했습니다.");
        		}
        	}
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AE_CorpCardForm_onload, this);
            this.titleBarDiv.titleStc.addEventHandler("onclick", this.Div04_Static00_onclick, this);
            this.stc_card_sort.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_receive_date.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_cardNm.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_useYN.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_emp.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.stc_card_sort_detail.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_cardNo.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_settling_Bank.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_clearance_acc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_card_manage.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_receive_emp.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_empno.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_dept.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_acnt_sub12.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.receiveDateCal.addEventHandler("onkillfocus", this.receiveDateCal_onkillfocus, this);
            this.receiveDateCal.addEventHandler("ondayclick", this.receiveDateCal_ondayclick, this);
            this.stc_retrn_date.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_acnt_sub15.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_note.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_acnt_sub01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.batchBtn.addEventHandler("onclick", this.batchBtn_onclick, this);
            this.searchEmpBtn.addEventHandler("onclick", this.searchEmpBtn_onclick, this);
            this.searchDeptBtn.addEventHandler("onclick", this.searchDeptBtn_onclick, this);

        };

        this.loadIncludeScript("AE_CorpCardForm.xfdl");

       
    };
}
)();

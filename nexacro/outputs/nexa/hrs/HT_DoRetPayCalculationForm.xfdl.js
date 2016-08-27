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
                this.set_name("HT_DoRetPayCalculationForm");
                this.set_classname("HT_DoRetPayCalculationForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1243,762);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">calcRetPayProcess</Col><Col id=\"URL\">his::hrs/ret/calcRetPayProcess.do</Col></Row><Row><Col id=\"URL\">his::hrs/ret/findRetPayList.do</Col><Col id=\"serviceID\">findRetPayList</Col><Col id=\"outData\">dsRetPay=dsRetPay</Col></Row><Row><Col id=\"serviceID\">searchEmp</Col><Col id=\"URL\">his::hrs/emp/selectEmpList.do</Col><Col id=\"outData\">dsHmEmp=gdsEmp</Col></Row><Row><Col id=\"serviceID\">findRetPlanEmpList</Col><Col id=\"URL\">his::hrs/ret/findRetPlanEmpList.do</Col><Col id=\"outData\">dsRetPlanEmp=dsRetPlanEmp</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRetPay", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"retIncomeAmt\" type=\"STRING\" size=\"256\"/><Column id=\"retIncomeDeduction\" type=\"STRING\" size=\"256\"/><Column id=\"retIncomeAsseStandard\" type=\"STRING\" size=\"256\"/><Column id=\"retIncomeCalcTaxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"retIncomeDecidedTaxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"residenceTax\" type=\"STRING\" size=\"256\"/><Column id=\"actualRetPay\" type=\"STRING\" size=\"256\"/><Column id=\"retIncomeAppropriation\" type=\"STRING\" size=\"256\"/><Column id=\"salAmount\" type=\"STRING\" size=\"256\"/><Column id=\"workingdays\" type=\"STRING\" size=\"256\"/><Column id=\"salDays\" type=\"STRING\" size=\"256\"/><Column id=\"recentWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"recentSalAmount\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"taxRate\" type=\"STRING\" size=\"256\"/><Column id=\"progressiveTaxDeduction\" type=\"STRING\" size=\"256\"/><Column id=\"singleRateDeduction\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmEmp", this);
            obj._setContents("<ColumnInfo><Column id=\"payDate\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"lunar\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRetPlanEmp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "606", "1230", "148", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Edit("empNoEdt00", "absolute", "1.95%", "95", "120", "25", null, null, this.Div03);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("empNoEdt01", "absolute", "17.83%", "95", "120", "25", null, null, this.Div03);
            obj.set_taborder("20");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("empNoEdt02", "absolute", "33.96%", "95", "120", "25", null, null, this.Div03);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("empNoEdt03", "absolute", "49.51%", "95", "120", "25", null, null, this.Div03);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("actualRetPayEdt", "absolute", "82.33%", "95", "150", "25", null, null, this.Div03);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "14.5%", "95", "20", "25", null, null, this.Div03);
            obj.getSetter("taborder").set("24");
            obj.set_text("+");
            obj.style.set_font("bold 18 Dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "30.13%", "97", null, "25", "67.18%", null, this.Div03);
            obj.getSetter("taborder").set("25");
            obj.set_text("+");
            obj.style.set_font("bold 18 Dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "46.09%", "97", null, "25", "51.22%", null, this.Div03);
            obj.getSetter("taborder").set("26");
            obj.set_text("-");
            obj.style.set_font("bold 18 Dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "62.21%", "95", null, "25", "35.18%", null, this.Div03);
            obj.getSetter("taborder").set("27");
            obj.set_text("-");
            obj.style.set_font("bold 18 Dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "79.8%", "94", null, "25", "17.51%", null, this.Div03);
            obj.getSetter("taborder").set("28");
            obj.set_text("=");
            obj.style.set_font("bold 18 Dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("empNoEdt05", "absolute", "66.21%", "95", "120", "25", null, null, this.Div03);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "1.95%", "64", "120", "27", null, null, this.Div03);
            obj.getSetter("taborder").set("30");
            obj.set_text("퇴직급여액");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "17.83%", "64", "120", "27", null, null, this.Div03);
            obj.getSetter("taborder").set("31");
            obj.set_text("근속연수공제액");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "33.96%", "64", "120", "27", null, null, this.Div03);
            obj.getSetter("taborder").set("32");
            obj.set_text("퇴직충당금");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "49.51%", "64", "120", "27", null, null, this.Div03);
            obj.getSetter("taborder").set("33");
            obj.set_text("퇴직소득 결정세액");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "66.21%", "64", "120", "27", null, null, this.Div03);
            obj.getSetter("taborder").set("34");
            obj.set_text("주민세");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "0%", "-1", "1230", "25", null, null, this.Div03);
            obj.getSetter("taborder").set("35");
            obj.set_text(" 실 지급 퇴직급여 계산");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "82.33%", "64", null, "27", "5.46%", null, this.Div03);
            obj.getSetter("taborder").set("36");
            obj.set_text("실 지급 퇴직급여");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0%", "109", "1230", "443", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "0.57%", "5", null, "27", "82.41%", null, this.Div02);
            obj.getSetter("taborder").set("15");
            obj.set_text("사원 리스트");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("empGrid", "absolute", "0.57%", "35", null, "400", "61.48%", null, this.Div02);
            obj.set_taborder("16");
            obj.set_binddataset("dsRetPlanEmp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"73\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"사원명\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"직급\"/><Cell col=\"4\" text=\"퇴직예정일\"/></Band><Band id=\"body\"><Cell text=\"bind:empNo\"/><Cell col=\"1\" text=\"bind:empNm\"/><Cell col=\"2\" text=\"bind:deptNm\"/><Cell col=\"3\" text=\"bind:jobtt\"/><Cell col=\"4\" text=\"bind:retMonthWorkingdays\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "39.5%", "5", null, "27", "43.49%", null, this.Div02);
            obj.getSetter("taborder").set("17");
            obj.set_text("사원 퇴직금 정보");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("retPayInfoGrid", "absolute", "39.5%", "35", "730", "400", null, null, this.Div02);
            obj.set_taborder("18");
            obj.set_binddataset("dsRetPay");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"109\"/><Column size=\"123\"/><Column size=\"130\"/><Column size=\"196\"/><Column size=\"146\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"퇴직급여액\"/><Cell col=\"1\" text=\"근속연수공제액\"/><Cell col=\"2\" text=\"퇴직충당금\"/><Cell col=\"3\" text=\"퇴직소득 결정새액\"/><Cell col=\"4\" text=\"주민세\"/></Band><Band id=\"body\"><Cell text=\"bind:retIncomeAmt\" mask=\"###,###,###\"/><Cell col=\"1\" text=\"bind:retIncomeDeduction\"/><Cell col=\"2\" text=\"bind:retIncomeAppropriation\"/><Cell col=\"3\" text=\"bind:retIncomeDecidedTaxAmt\"/><Cell col=\"4\" text=\"bind:residenceTax\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0%", "64", "1230", "40", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "0.57%", "4", null, "27", "92.35%", null, this.Div01);
            obj.getSetter("taborder").set("20");
            obj.set_text("사원번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("empNoEdt", "absolute", "7.82%", "4", null, "26", "82.25%", null, this.Div01);
            obj.set_taborder("21");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("empNmEdt", "absolute", "28.5%", "4", null, "26", "61.56%", null, this.Div01);
            obj.set_taborder("23");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "21.25%", "4", null, "27", "71.66%", null, this.Div01);
            obj.getSetter("taborder").set("25");
            obj.set_text("사원명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "0%", "560", "1230", "40", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Button("retPayBtn", "absolute", "84.36%", "7", null, "26", "1.14%", null, this.Div04);
            obj.set_taborder("0");
            obj.set_text("퇴직금 계산");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("empSearchBtn", "absolute", "1123", "69", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "0", "1229", "58", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5.21%", "0", null, "48", "41.01%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("퇴직금 계산");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("DelBtn10", "absolute", "224", "68", "28", "28", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1230, 148, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1230, 443, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1230, 40, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1230, 40, this.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1229, 58, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1243, 762, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HT_DoRetPayCalculationForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div03.empNoEdt00","value","dsRetPay","retIncomeAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div03.empNoEdt01","value","dsRetPay","retIncomeDeduction");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div03.empNoEdt02","value","dsRetPay","retIncomeAppropriation");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div03.empNoEdt03","value","dsRetPay","retIncomeDecidedTaxAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div03.empNoEdt05","value","dsRetPay","residenceTax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div03.actualRetPayEdt","value","dsRetPay","actualRetPay");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HT_DoRetPayCalculationForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HT_DoRetPayCalculationForm.xfdl", "scripts::hrsScripts.xjs");
        this.registerScript("HT_DoRetPayCalculationForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 퇴직예정자 퇴직금계산                                          *
        *                                                                   *
        * @Path		    퇴직예정자 퇴직금계산   	                        *
        * @Description  퇴직예정자의 퇴직금을 계산하고 저장한다        *
        * @Author		조현진   					                        *
        * 								                                    *
        * Created on 2016. 2. 21.                             		        *
        *								                                    *
        ********************************************************************/

        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/

        //include "scripts::commonScripts.xjs"; 
        //include "scripts::hrsScripts.xjs";

        /********************************************************************************
         검색조건 변수 선언
        ********************************************************************************/
        var empNo;			//사원번호
        var empNm;			//사원명
        var currentRow;		//클릭한 행의 위치
        var actPay;			//퇴직금 값

        
        /********************************************************************************
          사원번호조회 버튼 이벤트
        ********************************************************************************/
        this.Div01_empNoSearchBtn_onclick = function(obj,e)
        {
        	var arr = this.gfn_EmpPopup();
            
            this.setEmpInfo = function(arrRtn)
            { 
        		this.Div01.empNoEdt.set_value(arrRtn[0]);
        		this.Div01.empNmEdt.set_value(arrRtn[1]);
        	}
        }

        
        /********************************************************************************
          사원전체조회 버튼 이벤트
        ********************************************************************************/
        this.empSearchBtn_onclick = function(obj,e)
        {
        		empNo = this.Div01.empNoEdt.value;
        	empNm = this.Div01.empNmEdt.value;
        	trace(empNo+empNm);
        	//변수 argument
        	var argument = "empNo="+empNo+" empNm="+empNm;
        	
        	
        	//사원정보 argument Setting
        	this.dsService.setColumn(3,"argument",argument);
        	
        	
        	//사원정보 트랜잭션처리
        	
        	this.gfnService("findRetPlanEmpList");
        	
        	//퇴직금정보 트랜잭션처리
        	this.gfnService("findRetPayList");
        	
        	
        }

        /********************************************************************************
          퇴직금계산 버튼 이벤트
        ********************************************************************************/
        this.Div04_retPayBtn_onclick = function(obj,e)
        {	
        	//변수 argument
        	var argument = "empNo="+empNo;
        	
        	
        	//퇴직금계산 argument Setting
        	this.dsService.setColumn(0,"argument",argument);

        
        	//퇴직금계산 트랜잭션처리
        	this.gfnService("calcRetPayProcess");
        	
        	
        	//새로고침 역할
        	this.gfnService("findRetPayList");

        }

        
        /********************************************************************************
          사원리스트 셀 클릭 이벤트
        ********************************************************************************/
        this.Div02_empGrid_oncellclick = function(obj,e)
        {	

        	//선택한 행의 empNo 값  
        	empNo = this.dsRetPlanEmp.getColumn(this.dsRetPlanEmp.rowposition, "empNo");	
        	
        	
        	//dsRetPay = empNo 값으로 필터링
        	this.dsRetPay.filter("empNo=='"+empNo+"'");
        	
        	
        	//check 함수 호출
        	this.chek();
        }

        
        /********************************************************************************
          퇴직금 계산 사용 유무 함수 set
        ********************************************************************************/
        this.chek = function()
        {
        	var count = this.dsRetPay.getRowCount();
        	
        	if(count == 0)
        	{
        		alert("퇴직금 계산이 가능합니다.");
        	}
        	else
        	{
        		alert("이미 퇴직금 계산이 완료된 사원입니다");
        	}

        }
        /********************************************************************************
        	콜백
        ********************************************************************************/
        this.CallbackFunc=function(trid,errcd,errmsg){	
        	if(trid =="findRetPlanEmpList"){
        		if(errcd == 1){
        				//alert("성공");
        					empNo = this.dsRetPlanEmp.getColumn(this.dsRetPlanEmp.rowposition, "empNo");		
        					//dsRetPay = empNo 값으로 필터링
        					this.dsRetPay.filter("empNo=='"+empNo+"'");
        		}
        		else{ 
        				alert("실패");
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHmEmp.addEventHandler("onrowposchanged", this.dsHmEmp_onrowposchanged, this);
            this.Div03.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div02.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div02.empGrid.addEventHandler("oncellclick", this.Div02_empGrid_oncellclick, this);
            this.Div02.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div04.retPayBtn.addEventHandler("onclick", this.Div04_retPayBtn_onclick, this);
            this.empSearchBtn.addEventHandler("onclick", this.empSearchBtn_onclick, this);
            this.DelBtn10.addEventHandler("onclick", this.Div01_empNoSearchBtn_onclick, this);

        };

        this.loadIncludeScript("HT_DoRetPayCalculationForm.xfdl");

       
    };
}
)();

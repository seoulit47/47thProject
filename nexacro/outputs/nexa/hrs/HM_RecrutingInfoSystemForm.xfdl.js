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
                this.set_name("HM_RecrutingInfoSystemForm");
                this.set_classname("HM_RecrutingInfoSystemForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1280,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHmTestSubject", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"employSeq\" type=\"STRING\" size=\"256\"/><Column id=\"subjectCd\" type=\"STRING\" size=\"256\"/><Column id=\"subjectNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmEmployInfo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"employStartDay\" type=\"STRING\" size=\"256\"/><Column id=\"employEndDay\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"recruLimit\" type=\"STRING\" size=\"256\"/><Column id=\"employYear\" type=\"STRING\" size=\"256\"/><Column id=\"employSeq\" type=\"STRING\" size=\"256\"/><Column id=\"hostDept\" type=\"STRING\" size=\"256\"/><Column id=\"exp\" type=\"STRING\" size=\"256\"/><Column id=\"employNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">EmployInfoList</Col><Col id=\"URL\">his::hrs/emp/findEmployInfoList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsHmEmployInfo=dsHmEmployInfo</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">TestSubject</Col><Col id=\"URL\">his::hrs/emp/findTestSubject.do</Col><Col id=\"outData\">dsHmTestSubject=dsHmTestSubject</Col><Col id=\"argument\"/><Col id=\"inData\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">ItverList</Col><Col id=\"URL\">his::hrs/emp/findItverList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsHmItver=dsHmItver</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">mngntEmployInfo</Col><Col id=\"URL\">his::hrs/emp/batchEmployProcess.do</Col><Col id=\"inData\">dsHmEmployInfo=dsHmEmployInfo:U dsHmItver=dsHmItver:U dsHmTestSubject=dsHmTestSubject:U</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmItver", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"employSeq\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0.31%", "8", "1272", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar2.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0.63%", "60", null, "651", "0.78%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "0.63%", "717", null, "38", "0.86%", null, this);
            obj.set_taborder("4");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose", "absolute", "89.22%", "722", null, "28", "1.41%", null, this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("mngnt", "absolute", "79.61%", "722", null, "28", "11.02%", null, this);
            obj.set_taborder("6");
            obj.set_text("일괄처리");
            obj.set_cssclass("ProcessBtn");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("btn_employInfoDelete", "absolute", "70.08%", "722", null, "28", "20.63%", null, this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("register", "absolute", "60.47%", "722", null, "28", "30.16%", null, this);
            obj.set_taborder("8");
            obj.set_text("등록");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("01Stc", "absolute", "17", "67", "100", "30", null, null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("채용년도");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Spin("applySpin", "absolute", "123", "67", "77", "30", null, null, this);
            obj.set_taborder("10");
            obj.set_value("2016");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Grid("employInfo", "absolute", "16", "104", "775", "605", null, null, this);
            obj.set_taborder("12");
            obj.set_binddataset("dsHmEmployInfo");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"101\"/><Column size=\"56\"/><Column size=\"167\"/><Column size=\"54\"/><Column size=\"95\"/><Column size=\"82\"/><Column size=\"80\"/><Column size=\"78\"/><Column size=\"54\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"No\"/><Cell col=\"1\" style=\"color: ;\" text=\"채용시퀀스\"/><Cell col=\"2\" style=\"color: ;\" text=\"채용년도\"/><Cell col=\"3\" style=\"color: ;\" text=\"채용명\"/><Cell col=\"4\" style=\"color: ;\" text=\"고용구분\"/><Cell col=\"5\" style=\"color: ;\" text=\"채용공고일\"/><Cell col=\"6\" style=\"color: ;\" text=\"채용마감일\"/><Cell col=\"7\" style=\"color: ;\" text=\"모집정원\"/><Cell col=\"8\" style=\"color: ;\" text=\"주관부서\"/><Cell col=\"9\" style=\"color: ;\" text=\"비고\"/></Band><Band id=\"body\"><Cell style=\"background:azure;background2:azure;\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"background:azure;background2:azure;\" text=\"bind:employSeq\"/><Cell col=\"2\" edittype=\"normal\" style=\"background:azure;background2:azure;\" text=\"bind:employYear\"/><Cell col=\"3\" edittype=\"normal\" style=\"background:azure;background2:azure;\" text=\"bind:employNm\"/><Cell col=\"4\" edittype=\"normal\" style=\"background:azure;background2:azure;\" text=\"bind:hireDiv\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"background:azure;background2:azure;\" text=\"bind:employStartDay\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" style=\"background:azure;background2:azure;\" text=\"bind:employEndDay\"/><Cell col=\"7\" edittype=\"normal\" style=\"background:azure;background2:azure;\" text=\"bind:recruLimit\"/><Cell col=\"8\" edittype=\"normal\" style=\"background:azure;background2:azure;\" text=\"bind:hostDept\"/><Cell col=\"9\" edittype=\"normal\" style=\"background:azure;background2:azure;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("02Stc", "absolute", "792", "128", "86", "30", null, null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("채용년도");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("03Stc", "absolute", "792", "96", "86", "30", null, null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("채용명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("employNameEd", "absolute", "880", "97", "230", "30", null, null, this);
            obj.set_taborder("15");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Spin("employYearSp", "absolute", "880", "128", "116", "30", null, null, this);
            obj.set_taborder("16");
            obj.set_value("0");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1003", "196", "23", "30", null, null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("ㅡ");
            obj.style.set_color("black");
            obj.style.set_font("bold 9 Stencil BT");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("05Stc", "absolute", "792", "193", "86", "30", null, null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("채용기간");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("hireDivCombo", "absolute", "880", "162", "116", "30", null, null, this);
            this.addChild(obj.name, obj);
            var hireDivCombo_innerdataset = new Dataset("hireDivCombo_innerdataset", this.hireDivCombo);
            hireDivCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">정규직</Col><Col id=\"datacolumn\">정규직</Col></Row><Row><Col id=\"codecolumn\">비정규직</Col><Col id=\"datacolumn\">비정규직</Col></Row></Rows>");
            obj.set_innerdataset(hireDivCombo_innerdataset);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.getSetter("class").set("AreaCal");

            obj = new Static("06Stc", "absolute", "792", "225", "86", "157", null, null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("과목명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("07Stc", "absolute", "792", "385", "86", "161", null, null, this);
            obj.getSetter("taborder").set("21");
            obj.set_text("면접관명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("09Stc", "absolute", "1025", "161", "86", "30", null, null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("주관부서");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSubject", "absolute", "880", "226", "320", "156", null, null, this);
            obj.set_taborder("23");
            obj.set_binddataset("dsHmTestSubject");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"17\"/><Column size=\"80\"/><Column size=\"113\"/><Column size=\"23\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"No\"/><Cell col=\"1\" style=\"background: ;\" text=\"과목코드\"/><Cell col=\"2\" colspan=\"2\" style=\"background: ;\" text=\"과목명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:subjectCd\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:subjectNm\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"button\" style=\"background:@gradation;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("hostDeptEd", "absolute", "1113", "162", "118", "30", null, null, this);
            obj.set_taborder("24");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("08Stc", "absolute", "792", "161", "86", "30", null, null, this);
            obj.getSetter("taborder").set("25");
            obj.set_text("고용구분");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new TextArea("expArea", "absolute", "792", "580", "444", "126", null, null, this);
            obj.set_taborder("26");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("bold antialias 12 맑은 고딕");
            obj.getSetter("class").set("AreaArea");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "880", "386", "320", "161", null, null, this);
            obj.set_taborder("29");
            obj.set_binddataset("dsHmItver");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"49\"/><Column size=\"83\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"26\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"No\"/><Cell col=\"1\" style=\"color: ;\" text=\"사원번호\"/><Cell col=\"2\" style=\"color: ;\" text=\"사원명\"/><Cell col=\"3\" style=\"color: ;\" text=\"부서코드\"/><Cell col=\"4\" colspan=\"2\" style=\"color: ;\" text=\"부서명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:empNo\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:empNm\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:deptCd\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:deptNm\"/><Cell col=\"5\" displaytype=\"button\" edittype=\"button\" style=\"background:@gradation;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("12Stc", "absolute", "792", "549", "444", "30", null, null, this);
            obj.getSetter("taborder").set("30");
            obj.set_text("설　　　　　　　명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("04Stc", "absolute", "1025", "128", "86", "30", null, null, this);
            obj.getSetter("taborder").set("31");
            obj.set_text("모집정원");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("recurLimitEd", "absolute", "1113", "129", "118", "30", null, null, this);
            obj.set_taborder("32");
            obj.set_inputtype("number");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Calendar("employStartDayCal", "absolute", "880", "194", "116", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.getSetter("class").set("AreaCal");

            obj = new Calendar("employEndDayCal", "absolute", "1024", "194", "116", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.getSetter("class").set("AreaCal");

            obj = new Button("employInfoSch", "absolute", "206", "64", "90", "32", null, null, this);
            obj.set_taborder("37");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("InseSub", "absolute", "1201", "224", "32", "32", null, null, this);
            obj.set_taborder("38");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelSub", "absolute", "1201", "256", "32", "32", null, null, this);
            obj.set_taborder("39");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("InseItver", "absolute", "1202", "386", "32", "32", null, null, this);
            obj.set_taborder("40");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelItver", "absolute", "1202", "418", "32", "32", null, null, this);
            obj.set_taborder("42");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "8", "789", "51", null, null, this);
            obj.set_taborder("43");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.22%", "3", null, "51", "41.25%", null, this);
            obj.getSetter("taborder").set("44");
            obj.set_text("채용정보 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1272, 60, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar2.jpg')");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1280, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HM_RecrutingInfoSystemForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item53","employNameEd","value","dsHmEmployInfo","employNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","employYearSp","value","dsHmEmployInfo","employYear");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","hireDivCombo","value","dsHmEmployInfo","hireDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","hostDeptEd","value","dsHmEmployInfo","hostDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","expArea","value","dsHmEmployInfo","exp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","recurLimitEd","value","dsHmEmployInfo","recruLimit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","employStartDayCal","value","dsHmEmployInfo","employStartDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","employEndDayCal","value","dsHmEmployInfo","employEndDay");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HM_RecrutingInfoSystemForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("HM_RecrutingInfoSystemForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HM_RecrutingInfoSystemForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 입사채용관리                                                    *
        *                                                                   *
        * @Path		    입사채용정보관리        	                        *
        * @Description  채용정보 조회,등록,수정,삭제 화면               *
        * @Author		최창근   					                        *
        * 								                                    *
        * Created on 2016. 6. 21.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonScripts.xjs";

        
        var employSeq; // 채용시퀀스

        //날짜받아오는 구문========================================================================================================================
        var sDate;//지금의 날짜임          여기선언하고 아래에 가져다쓴다
        var sYear;//지금의 년도임
        ///날짜관련부분임 많이쓰임 

        //날짜 가져오는 함수 이부분 좋음 기억합시당
        this.toFormatString = function(dt,fmt) {    
              return fmt.replace(/(Y|y|m|d|h|H|i|s|am|pm)/gi,
                  function($1){
                      switch ($1){	 
                          case 'Y' :   return dt.getFullYear();
                          case 'y' :   return dt.getFullYear().toString().substr(2);
                          case 'm' :   return (dt.getMonth()+1).toString().padLeft(2,"0");//끝자리 01이면 1만 나와서 저렇게 적어주었다
                          case 'd' :   return dt.getDate().toString().padLeft(2,"0");     //끝자리 01이면 1만 나와서 저렇게 적어주었다
                          case 'h' :   return (h = dt.getHours() % 12) ? h : 12;
                          case 'H' :   return dt.getHours();
                          case 'i' :   return dt.getMinutes();
                          case 's' :   return dt.getSeconds();
                          case 'am':   return dt.getHours() < 12 ? 'am' : 'pm';
                          case 'pm':   return dt.getHours() < 12 ? 'am' : 'pm';
                    }
                } 
            );
        }
        this.HM_RecrutingInfoSystemForm_onload = function(obj,e)
        {
        		var objDate = new Date();
            //var sDate = this.toFormatString(objDate,"%Y%m%d");//원래는 이렇게있었다 이렇게 위에다가 선언안하고 여기 적으면 아래서 사용못다고 여기함수부분 다른 실행부분도  다 실행안된다 	                                                                                                                                               
                sDate = this.toFormatString(objDate,"Ymd"); //"Y"+"m"+"d"이렇게 적어도되고 앞처럼적어도되고  현재 또는 지정한 로케일, 지정한 형식의 문자열로 변환된 날짜를 반환합니다
                sYear = this.toFormatString(objDate,"Y");  alert(sYear);     alert(sDate);
                this.applySpin.set_value(sYear);  //년도넣는곳에 지금의 년도를 미리 넣어둔다 
                
        }

        this.employInfoSch_onclick = function(obj,e)
        {
        	
        	employYear = this.applySpin.value;     //화면에 체크한 연도 적은걸 넘긴다 	        
          	var argument = 'employYear='+employYear; //채용년도를 가지고간다
          	this.dsService.setColumn(0,"argument",argument);
            this.gfnService("EmployInfoList");   
        }

        this.employInfo_oncellclick = function(obj,e)
        {
        		
        		//ds_employInfo.filter(seq == 채용시퀀스.value;
        		//Div01.Div02.grdSubject.binddataset=ds_employInfo
        	//	alert("!!!!");
        		
        		this.employSeq = this.dsHmEmployInfo.getColumn(this.dsHmEmployInfo.rowposition,"employSeq");
        		var argument = 'employSeq='+this.employSeq;
        		this.dsService.setColumn(1,"argument",argument);
        		//alert(argument);
        		this.gfnService("TestSubject");
        	
        		var employSeq = this.dsHmEmployInfo.getColumn(this.dsHmEmployInfo.rowposition,"employSeq");
        		var argument = 'employSeq='+employSeq;
        		this.dsService.setColumn(2,"argument",argument);
        		//alert(argument);
        		this.gfnService("ItverList");
        		
        }

        this.btn_insertEmp_onclick = function(obj,e)
        {
        	if(this.dsHmEmployInfo.findRow("employSeq",sDate) == -1){
        	this.dsHmEmployInfo.addRow();
        	this.dsHmEmployInfo.setColumn(this.dsHmEmployInfo.rowposition, "employSeq", sDate);
        	this.dsHmEmployInfo.setColumn(this.dsHmEmployInfo.rowposition, "employYear", sYear);
        									this.employSeq = this.dsHmEmployInfo.getColumn(this.dsHmEmployInfo.rowposition,"employSeq");
        		var argument = 'employSeq='+this.employSeq;
        		this.dsService.setColumn(1,"argument",argument);
        		//alert(argument);
        		this.gfnService("TestSubject");
        	
        		var employSeq = this.dsHmEmployInfo.getColumn(this.dsHmEmployInfo.rowposition,"employSeq");
        		var argument = 'employSeq='+employSeq;
        		this.dsService.setColumn(2,"argument",argument);
        		//alert(argument);
        		this.gfnService("ItverList");
        	} 
        }

        this.btn_deleteEmp_onclick = function(obj,e)
        {
        	this.dsHmEmployInfo.deleteRow(this.dsHmEmployInfo.rowposition); 
        									this.employSeq = this.dsHmEmployInfo.getColumn(this.dsHmEmployInfo.rowposition,"employSeq");
        		var argument = 'employSeq='+this.employSeq;
        		this.dsService.setColumn(1,"argument",argument);
        		//alert(argument);
        		this.gfnService("TestSubject");
        	
        		var employSeq = this.dsHmEmployInfo.getColumn(this.dsHmEmployInfo.rowposition,"employSeq");
        		var argument = 'employSeq='+employSeq;
        		this.dsService.setColumn(2,"argument",argument);
        		//alert(argument);
        		this.gfnService("ItverList");
        }

        this.btn_saveAll_onclick = function(obj,e)
        {
        		confirm("변경된 사항을 적용하시겠습니까?");
        	this.gfnService("mngntEmployInfo");
        }

        this.exitFxAstBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        //과목그리드 추가버튼
        this.InseSub_onclick = function(obj,e)
        {  
        	alert(this.employSeq);
            this.dsHmTestSubject.addRow(); 
        	this.dsHmTestSubject.setColumn(this.dsHmTestSubject.rowposition, "employSeq", this.employSeq);
        }
        //과목그리드 삭제버튼
        this.DelSub_onclick = function(obj,e)
        {
        	this.dsHmTestSubject.deleteRow(this.dsHmTestSubject.rowposition);
        }

        //면접관그리드 추가버튼
        this.InseItver_onclick = function(obj,e)
        { 
        	alert(this.employSeq);
        	this.dsHmItver.addRow(); 
        	this.dsHmItver.setColumn(this.dsHmItver.rowposition, "employSeq", this.employSeq);
        }
        //면접관그리드 삭제버튼
        this.DelItver_onclick = function(obj,e)
        {
        	this.dsHmItver.deleteRow(this.dsHmItver.rowposition);
        }

        
        this.grdSubject_oncellclick = function(obj,e)
        {

        	if(e.cell==3){
        		this.gfnCodePopup("GP214");
        	}
        	this.setCode = function(code,arrRtn,args){
        		this.dsHmTestSubject.setColumn(this.dsHmTestSubject.rowposition,"subjectCd",arrRtn[0]);
        		this.dsHmTestSubject.setColumn(this.dsHmTestSubject.rowposition,"subjectNm",arrRtn[1]);
        	}
        }

        this.Grid02_oncellclick = function(obj,e)
        {
        	if(e.cell==5){
        	this.gfnEmpPopup();
        	this.setEmpInfo = function(arrRtn){
        		this.dsHmItver.setColumn(this.dsHmItver.rowposition,"empNo",arrRtn[0]);
        		this.dsHmItver.setColumn(this.dsHmItver.rowposition,"empNm",arrRtn[1]);
        		this.dsHmItver.setColumn(this.dsHmItver.rowposition,"deptCd",arrRtn[2]);
        		this.dsHmItver.setColumn(this.dsHmItver.rowposition,"deptNm",arrRtn[3]);
        	}
        	}
        }

         this.CallbackFunc = function(trid,errcd,errmsg){
        	
        	if(trid =="EmployInfoList"){ 
        		if(errcd == 1){ 
        								this.employSeq = this.dsHmEmployInfo.getColumn(this.dsHmEmployInfo.rowposition,"employSeq");
        		var argument = 'employSeq='+this.employSeq;
        		this.dsService.setColumn(1,"argument",argument);
        		//alert(argument);
        		this.gfnService("TestSubject");
        	
        		var employSeq = this.dsHmEmployInfo.getColumn(this.dsHmEmployInfo.rowposition,"employSeq");
        		var argument = 'employSeq='+employSeq;
        		this.dsService.setColumn(2,"argument",argument);
        		//alert(argument);
        		this.gfnService("ItverList");
        					
        		}else{                alert("채용정보 불러오기 실패");
        }

        }
        	
        }
        		 

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HM_RecrutingInfoSystemForm_onload, this);
            this.btnClose.addEventHandler("onclick", this.exitFxAstBtn_onclick, this);
            this.mngnt.addEventHandler("onclick", this.btn_saveAll_onclick, this);
            this.btn_employInfoDelete.addEventHandler("onclick", this.btn_deleteEmp_onclick, this);
            this.register.addEventHandler("onclick", this.btn_insertEmp_onclick, this);
            this.employInfo.addEventHandler("oncellclick", this.employInfo_oncellclick, this);
            this.grdSubject.addEventHandler("oncellclick", this.grdSubject_oncellclick, this);
            this.expArea.addEventHandler("oneditclick", this.Div01_Div02_TextArea00_oneditclick, this);
            this.Grid02.addEventHandler("oncellclick", this.Grid02_oncellclick, this);
            this.recurLimitEd.addEventHandler("onkeyup", this.durationEdt_onkeyup, this);
            this.employInfoSch.addEventHandler("onclick", this.employInfoSch_onclick, this);
            this.InseSub.addEventHandler("onclick", this.InseSub_onclick, this);
            this.DelSub.addEventHandler("onclick", this.DelSub_onclick, this);
            this.InseItver.addEventHandler("onclick", this.InseItver_onclick, this);
            this.DelItver.addEventHandler("onclick", this.DelItver_onclick, this);

        };

        this.loadIncludeScript("HM_RecrutingInfoSystemForm.xfdl");

       
    };
}
)();

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
                this.set_name("WH_GooutStayoutMngntForm");
                this.set_classname("WH_GooutStayoutMngntForm");
                this.set_titletext("New Form");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findHosptlzPat</Col><Col id=\"callbackFunc\">findHosptlzPatCallbackFunc</Col><Col id=\"URL\">his::won/hosptlzPat/findHosptlzPat.do</Col><Col id=\"outData\">dsHosptlzPatInfo=dsHosptlzPatInfo</Col></Row><Row><Col id=\"serviceID\">appGooutStayout</Col><Col id=\"URL\">his::won/hosptlzPat/batchProcessGooutStayout.do</Col><Col id=\"inData\">dsGooutStayout=dsGooutStayout:u</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">findGooutStayoutList</Col><Col id=\"URL\">his::won/hosptlzPat/findGooutStayoutList.do</Col><Col id=\"outData\">dsGooutStayout=dsGooutStayout</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">aprvGooutStayout</Col><Col id=\"URL\">his::won/hosptlzPat/batchProcessGooutStayout.do</Col><Col id=\"inData\">dsGooutStayout=dsGooutStayout:u</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">GooutStayout</Col><Col id=\"URL\">his::won/hosptlzPat/batchProcessGooutStayout.do</Col><Col id=\"inData\">dsGooutStayout=dsGooutStayout:u</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">deleteGooutStayout</Col><Col id=\"URL\">his::won/hosptlzPat/batchProcessGooutStayout.do</Col><Col id=\"inData\">dsGooutStayout=dsGooutStayout:u</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("gooutStayoutDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">외출</Col><Col id=\"value\">외출</Col></Row><Row><Col id=\"code\">외박</Col><Col id=\"value\">외박</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHosptlzPatInfo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"respDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"dscgDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGooutStayout", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"appDate\" type=\"STRING\" size=\"256\"/><Column id=\"cfmr\" type=\"STRING\" size=\"256\"/><Column id=\"cfmrState\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"comebackDate\" type=\"STRING\" size=\"256\"/><Column id=\"gooutDate\" type=\"STRING\" size=\"256\"/><Column id=\"gooutStayoutState\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"totalGooutTime\" type=\"STRING\" size=\"256\"/><Column id=\"totalStayoutDay\" type=\"STRING\" size=\"256\"/><Column id=\"trmtdeptnm\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"comebackTime\" type=\"STRING\" size=\"256\"/><Column id=\"gooutTime\" type=\"STRING\" size=\"256\"/><Column id=\"gooutDay\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"state\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "0", "1250", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("           외출외박관리");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "2.24%", "80", null, "27", "90.72%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("환자번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "10%", "80", null, "27", "81.36%", null, this);
            obj.set_taborder("2");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("patNoBtn", "absolute", "18.96%", "80", null, "26", "78.64%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("@gradation URL('img::miniSearch.png')");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "37.04%", "78", null, "27", "55.92%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("승인구분");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Radio("aprvRadio", "absolute", "45.76%", "70", null, "45", "40%", null, this);
            this.addChild(obj.name, obj);
            var aprvRadio_innerdataset = new Dataset("aprvRadio_innerdataset", this.aprvRadio);
            aprvRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미승인</Col></Row></Rows>");
            obj.set_innerdataset(aprvRadio_innerdataset);
            obj.set_taborder("5");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("bold 9 arial");
            obj.set_index("-1");

            obj = new Button("searchBtn", "absolute", "59.92%", "78", null, "26", "35.36%", null, this);
            obj.set_taborder("6");
            obj.getSetter("class").set("SearchBtn");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("appCancelBtn", "absolute", "68.8%", "78", null, "30", "24.16%", null, this);
            obj.set_taborder("7");
            obj.set_text("신청취소");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("approvalBtn", "absolute", "76.4%", "78", null, "30", "18%", null, this);
            obj.set_taborder("8");
            obj.set_text("승 인");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("gooutCfmtBtn", "absolute", "82.56%", "78", null, "30", "10.4%", null, this);
            obj.set_taborder("9");
            obj.set_text("외출확인");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("comebackCfmtBtn", "absolute", "90.16%", "78", null, "30", "2.8%", null, this);
            obj.set_taborder("11");
            obj.set_text("복귀확인");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00", "absolute", "1.52%", "117", null, "617", "64.88%", null, this);
            obj.set_text("외출/외박 신청");
            obj.set_taborder("12");
            obj.style.set_border("1 solid lightslategray");
            obj.style.set_font("11 arial");
            this.addChild(obj.name, obj);

            obj = new Button("patSearchBtn", "absolute", "29.44%", "141", null, "30", "66%", null, this);
            obj.set_taborder("13");
            obj.set_text("조회");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("hosptlzReceiptNoEd", "absolute", "13.84%", "149", null, "27", "83.76%", null, this);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "3.68%", "149", null, "27", "88.16%", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("입원접수번호 ");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc05", "absolute", "4.88%", "186", null, "27", "88.16%", null, this);
            obj.getSetter("taborder").set("16");
            obj.set_text("이  름");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd", "absolute", "13.84%", "186", null, "27", "76.96%", null, this);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc13", "absolute", "4.88%", "223", null, "27", "88.16%", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("퇴원일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("dscgDateCal", "absolute", "13.84%", "223", null, "26", "73.92%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_enable("false");

            obj = new Static("subCodeStc06", "absolute", "4.8%", "260", null, "27", "88.16%", null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("연락처");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("patTelEd", "absolute", "13.84%", "261", null, "26", "73.84%", null, this);
            obj.set_taborder("21");
            obj.set_type("string");
            obj.set_mask(" ### - #### - ####");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc08", "absolute", "4.8%", "297", null, "27", "88.16%", null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("병동/병실");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("wardEd", "absolute", "13.84%", "297", null, "27", "82.8%", null, this);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17.68%", "297", null, "27", "80.64%", null, this);
            obj.getSetter("taborder").set("24");
            obj.set_text("동");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("hroomEd", "absolute", "19.84%", "297", null, "27", "76.8%", null, this);
            obj.set_taborder("25");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "23.76%", "297", null, "27", "74.56%", null, this);
            obj.getSetter("taborder").set("26");
            obj.set_text("실");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("trmtdeptnmEd", "absolute", "13.84%", "334", null, "27", "73.84%", null, this);
            obj.set_taborder("27");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc11", "absolute", "4.8%", "334", null, "27", "88.16%", null, this);
            obj.getSetter("taborder").set("28");
            obj.set_text("진료과");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc12", "absolute", "4.8%", "371", null, "27", "88.16%", null, this);
            obj.getSetter("taborder").set("29");
            obj.set_text("담당의사");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("respDoctNmEd", "absolute", "13.84%", "371", null, "27", "73.84%", null, this);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("applicationBtn", "absolute", "29.44%", "460", null, "30", "66.24%", null, this);
            obj.set_taborder("31");
            obj.set_text("신청");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Combo("gooutStayoutCombo", "absolute", "9.84%", "460", null, "26", "80.16%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_innerdataset("gooutStayoutDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("subCodeStc07", "absolute", "2.8%", "459", null, "27", "90.96%", null, this);
            obj.getSetter("taborder").set("33");
            obj.set_text("구 분");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc09", "absolute", "2.8%", "503", null, "27", "90.96%", null, this);
            obj.getSetter("taborder").set("35");
            obj.set_text("외박날짜");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("gooutDateCal", "absolute", "9.84%", "504", null, "25", "78.64%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_enable("false");

            obj = new Calendar("comebackDateCal", "absolute", "22.8%", "504", null, "25", "66%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_enable("false");

            obj = new Static("Static00", "absolute", "21.2%", "505", null, "22", "76.88%", null, this);
            obj.getSetter("taborder").set("38");
            obj.set_text("~");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("totalStayoutDayEd", "absolute", "22.88%", "534", null, "26", "65.92%", null, this);
            obj.set_taborder("39");
            obj.set_enable("false");
            obj.style.set_color("lightseagreen");
            obj.style.setStyleValue("font", "disabled", "bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Calendar("gooutDayCal", "absolute", "9.84%", "579", null, "25", "79.12%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_enable("false");

            obj = new Static("subCodeStc14", "absolute", "2.96%", "577", null, "27", "90.8%", null, this);
            obj.getSetter("taborder").set("41");
            obj.set_text("외출날짜");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "2.8%", "612", null, "27", "90.96%", null, this);
            obj.getSetter("taborder").set("42");
            obj.set_text("외출시간");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15.12%", "614", null, "22", "82.96%", null, this);
            obj.getSetter("taborder").set("43");
            obj.set_text("~");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("totalGooutTimeEd", "absolute", "22.96%", "611", null, "29", "66.48%", null, this);
            obj.set_taborder("44");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "lightseagreen");
            obj.style.setStyleValue("font", "disabled", "bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new TextArea("NOTE", "absolute", "9.84%", "647", null, "57", "66%", null, this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc10", "absolute", "2.8%", "647", null, "27", "90.96%", null, this);
            obj.getSetter("taborder").set("46");
            obj.set_text("사 유");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("GooutStayoutGrid", "absolute", "36.56%", "122", null, "611", "2.16%", null, this);
            obj.set_taborder("47");
            obj.set_binddataset("dsGooutStayout");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"118\"/><Column size=\"89\"/><Column size=\"69\"/><Column size=\"90\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"94\"/><Column size=\"119\"/><Column size=\"124\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"112\"/><Column size=\"75\"/><Column size=\"116\"/><Column size=\"204\"/><Column size=\"318\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신청일자\"/><Cell col=\"1\" text=\"외출/외박구분\"/><Cell col=\"2\" text=\"환자번호\"/><Cell col=\"3\" text=\"성 명\"/><Cell col=\"4\" text=\"진료과\"/><Cell col=\"5\" text=\"병동\"/><Cell col=\"6\" text=\"병실\"/><Cell col=\"7\" text=\"외출시간\"/><Cell col=\"8\" text=\"외출복귀시간\"/><Cell col=\"9\" text=\"총외출시간\"/><Cell col=\"10\" text=\"외박시작일시\"/><Cell col=\"11\" text=\"외박복귀일시\"/><Cell col=\"12\" text=\"총외박일수\"/><Cell col=\"13\" text=\"확인자\"/><Cell col=\"14\" text=\"확인일시\"/><Cell col=\"15\" text=\"외출/복귀상태\"/><Cell col=\"16\" text=\"사유\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"mask\" text=\"bind:appDate\" mask=\"####/ ##/ ##\"/><Cell col=\"1\" text=\"bind:gooutStayoutState\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:patNo\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:patNm\"/><Cell col=\"4\" text=\"bind:trmtdeptnm\"/><Cell col=\"5\" text=\"bind:ward\"/><Cell col=\"6\" text=\"bind:hroom\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"mask\" text=\"bind:gooutTime\" mask=\"## : ##\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"mask\" text=\"bind:comebackTime\" mask=\"## : ##\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"mask\" text=\"bind:totalGooutTime\" mask=\"##시간 ##분\" suppressalign=\"first\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"mask\" text=\"bind:gooutDate\" mask=\"####/ ##/ ##\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"mask\" text=\"bind:comebackDate\" mask=\"####/ ##/ ##\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"mask\" text=\"bind:totalStayoutDay\" mask=\" ##일\" suppressalign=\"first\"/><Cell col=\"13\" text=\"bind:cfmr\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"mask\" text=\"bind:cfmtDate\" mask=\"####/ ##/ ##\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"none\" text=\"bind:state\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("gooutTimeEd", "absolute", "9.76%", "612", null, "28", "85.68%", null, this);
            obj.set_taborder("48");
            obj.set_value("0000");
            obj.set_type("string");
            obj.set_mask("## : ##");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("comebackTimeEd", "absolute", "17.2%", "611", null, "28", "78.24%", null, this);
            obj.set_taborder("49");
            obj.set_value("1200");
            obj.set_type("string");
            obj.set_mask("## : ##");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WH_GooutStayoutMngntForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item6","hosptlzReceiptNoEd","value","dsHosptlzPatInfo","hosptlzReceiptNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","patNmEd","value","dsHosptlzPatInfo","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","dscgDateCal","value","dsHosptlzPatInfo","dscgDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","patTelEd","value","dsHosptlzPatInfo","tel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","wardEd","value","dsHosptlzPatInfo","ward");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","hroomEd","value","dsHosptlzPatInfo","hroom");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","trmtdeptnmEd","value","dsHosptlzPatInfo","trmtDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","respDoctNmEd","value","dsHosptlzPatInfo","respDoctNm");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WH_GooutStayoutMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("WH_GooutStayoutMngntForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("WH_GooutStayoutMngntForm.xfdl", function() {
        /********************************************************************************

            외출/외박 관리
                                                                           			                        
          @Path			 	원무 - 외출/외박 관리
          @Description   환자 외출/외박하기 위해서 신청서 작성과 정보관리.					
          @Author		   황태경 						 								                
         									 											                        
          Created on 2016. 06. 14.                             		 					        

        ********************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";        

        var gooutStayout; // 외출&외박 선택값
        var hour;   //복귀시간 - 외출시간 (시 계산)
        var patNo;  //환자등록번호

        
        // 환자등록번호 입력
        this.setPatInfo = function(arr){
        	this.patNoEd.set_value(arr[0]);
        }
        this.findHosptlzPatCallbackFunc=function(svcID,errorCode,errorMsg){
        	if(errorCode=="1"){
        		if(this.dsHosptlzPatInfo.rowcount==0){
        			alert("입원등록 된 환자가 아닙니다. 환자등록번호 재확인 하세요.");
        		}else if(this.dsHosptlzPatInfo.rowcount==1){
        			alert("입원환자정보 조회 되었습니다.");					
        		}		
        	}else{
        		alert("입원환자정보 중 오류발생");
        	}	
        }

        this.callbackFunc=function(svcID,errorCode,errorMsg){
        	if(svcID=="appGooutStayout"){
        		if(errorCode=="1") {
        			alert("외출/외박신청서 제출 성공.");			
        		}else{
        			alert("신청 실패");
        		}	
        	}else if(svcID=="findGooutStayoutList"){
        		if(errorCode=="1") {
        			if(this.dsGooutStayout.rowcount==0){
        				alert("검색한 데이터가 없습니다.");
        			}else if(this.dsGooutStayout.rowcount != 0){
        				alert("외출/외박신청 조회 성공.");	
        			}					
        		}else{
        			alert("외출/외박신청 조회 중 오류발생");
        		}	
        	}else if(svcID=="aprvGooutStayout"){
        		if(errorCode=="1"){
        			alert("승인 되었습니다.");
        		}else {
        			alert("승인 진행 중 오류 발생 ");
        		}
        	}else if(svcID=="deleteGooutStayout"){
        		if(errorCode=="1"){
        			alert("신청서 취소 되었습니다.");
        		}else {
        			alert("신청서 취소 중 오류 발생 ");
        		}
        	}
        }
        this.fn_dateTime = function() 
        {
            var dDate = new Date();     
            var sRtn =  dDate.getFullYear()
                  + (dDate.getMonth()+1).toString().padLeft(2, "0")
                  +  dDate.getDate().toString().padLeft(2, "0");
                  alert(sRtn);
            return sRtn;
        }
        this.patNoBtn_onclick = function(obj,e)
        {
        	this.dsGooutStayout.clearData();
        	this.dsHosptlzPatInfo.clearData();
        	
        	this.gooutStayoutCombo.set_value(null);
        	this.totalStayoutDayEd.set_value(null);
        	this.gooutDateCal.set_value(null);
        	this.comebackDateCal.set_value(null);
        	this.NOTE.set_value(null);
        	this.gooutDayCal.set_value(null);
        	
        	this.gooutTimeEd.set_value(null);
        	this.comebackTimeEd.set_value(null);
        	this.totalGooutTimeEd.set_value(null);
        	
        	this.gfnPopup("WS_PatPopupForm","won","");
        }

        this.patSearchBtn_onclick = function(obj,e)
        {
        	if(this.patNoEd.value==null){
        		alert("환자등록번호 먼저 등록하세요.");
        	}else{
        		var patNo = this.patNoEd.value;
        		this.dsService.setColumn(0,"argument",'patNo='+patNo);
        		this.gfnService("findHosptlzPat","false");  //입원환자정보 검색
        	}
        }

        this.applicationBtn_onclick = function(obj,e)
        {
        	if(this.patNmEd.value==null){
        		alert("환자정보 조회 후 신청하세요.");
        	}else if(this.patNmEd.value !=null){
        		this.dsGooutStayout.addRow();

        		if(gooutStayout=="외박"){
        			var gooutDate=this.gooutDateCal.value;  //외박시작일
        			var comebackDate=this.comebackDateCal.value;    //외박복귀일
        			var totalStayoutDay =comebackDate-gooutDate+1; //총 외박일 수
        			
        			if(totalStayoutDay<10){
        				var TotalStayoutDay = '0'+totalStayoutDay;
        			}else if(totalStayoutDay>10){
        				var TotalStayoutDay = totalStayoutDay;
        			}
        			
        			if(gooutDate >comebackDate ){
        				alert("외박복귀일 다시 선택하세요.");	
        			}else if(gooutDate < comebackDate){
        				this.totalStayoutDayEd.set_value("총 외박일 수 : "+TotalStayoutDay+"일");		
        			}		
        			
        		}else if(gooutStayout=="외출"){
        			var gooutTime =this.gooutTimeEd.value; //외출시간
        			var comebackTime=this.comebackTimeEd.value;  //복귀시간
        			
        			var gooutHour = gooutTime.substr(0,2);  //외출 - 시
        			var gooutMinute=gooutTime.substr(2,4);  //외출 - 분
        			
        			var comebackHour=comebackTime.substr(0,2);  //복귀 - 시
        			var comebackMinute=comebackTime.substr(2,4);  //복귀 - 분
        			
        			hour =comebackHour-gooutHour;	//복귀시간 - 외출시간 (시 계산)
        			
        			//시에 '0'붙혀넣기.(한지리 경우)
        			if(hour<10){
        				var Hour ='0'+hour;				
        			}else if(hour>10){
        				var Hour =hour;
        			}
        			
        			//음수 제거함.
        			if(comebackMinute > gooutMinute){
        				var minute =comebackMinute-gooutMinute;				
        			}else if(comebackMinute < gooutMinute){
        				var minute =gooutMinute-comebackMinute;
        			}
        						
        			//분에 '0'붙혀넣기.(한지리 경우)
        			if(minute<10){
        				var Minute = '0'+minute;
        			}else if(minute>10){
        				var Minute =minute;
        			}else if(minute==null){
        				var Minute = '00';
        			}			
        		
        			this.totalGooutTimeEd.set_value(Hour+"시간"+Minute+"분 외출");
        			var totalGooutTime =Hour+Minute;
        		}	
        		var patNo=this.patNoEd.value
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"patNo",patNo);                                 //환자등록번호
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"hosptlzReceiptNo",this.hosptlzReceiptNoEd.value);   //입원접수번호
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"trmtdeptnm",this.trmtdeptnmEd.value);                 //진료과명
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"ward",this.wardEd.value);            //병동
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"hroom",this.hroomEd.value);        //병실
        		
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"gooutDate",this.gooutDateCal.value);         //외박시작일
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"comebackDate",comebackDate);         //외박복귀일
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"totalStayoutDay",TotalStayoutDay);   //총 외박일 수
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"gooutStayoutState",gooutStayout);   //외출외박 상태
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"cfmr",this.respDoctNmEd.value);      //확인자(담당의사)
        		
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"cfmrState","N");                              //확인상태
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"gooutTime",this.gooutTimeEd.value);              //외출시간
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"comebackTime",this.comebackTimeEd.value);  //외출복귀시간
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"note",this.NOTE.value);             //비고란
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"appDate",this.fn_dateTime());   //신청일자(오늘날짜)
        		
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"totalGooutTime",totalGooutTime);        //총 외출시간
        		this.dsGooutStayout.setColumn(this.dsGooutStayout.rowposition,"gooutDay",this.gooutDayCal.value);  //외출날짜.    

        		if(this.confirm( "외출/외박 신청하시겠습니까?", "서울병원 - 외출/외박 신청서 ")){
        			this.gfnService("appGooutStayout", "false");	 
        		}
        	}
        }

        this.searchBtn_onclick = function(obj,e)
        {
        	if(this.patNoEd.value==null){
        		alert("환자등록번호 먼저 등록하세요.");
        	}else{
        		var patNo = this.patNoEd.value;
        		
        		
        		var aprv = this.aprvRadio.value;
        		
        		this.dsService.setColumn(2,"argument",'patNo='+patNo+' aprv='+aprv);
        		this.gfnService("findGooutStayoutList","false");  //입원환자정보 검색
        	}
        }

        this.appCancelBtn_onclick = function(obj,e)
        {
        	if(this.dsGooutStayout.rowcount==0){
        		alert("외출 & 외박 신청서 부터 조회하세요.");
        	}else if(this.dsGooutStayout.rowcount !=0){
        		var row =this.dsGooutStayout.rowposition;  //현재 선택한 row			
        		var patNo=this.dsGooutStayout.getColumn(row,"patNo");
        		
        		if(this.confirm( "외출/외박 취소하시겠습니까?", "서울병원 - 외출/외박 신청서 취소 ")){
        			this.dsGooutStayout.deleteRow(row);
        			this.dsService.setColumn(5,"argument",'patNo='+patNo);
        			this.gfnService("deleteGooutStayout","false"); 
        		}	
        	}
        }

        this.approvalBtn_onclick = function(obj,e)
        {
        	if(this.dsGooutStayout.rowcount==0){
        		alert("외출 & 외박 신청서 부터 조회하세요.");
        	}else if(this.dsGooutStayout.rowcount !=0){
        		var row =this.dsGooutStayout.rowposition;  //현재 선택한 row		
        		this.dsGooutStayout.setColumn(row,"cfmrState","Y");	//외출&외박 승인 상태 변경(N->Y)
        		this.dsGooutStayout.setColumn(row,"cfmtDate",this.fn_dateTime());  //오늘날짜로 승인날짜 입력.
        		
        		var patNo=this.dsGooutStayout.getColumn(row,"patNo");
        		var cfmrStateY=this.dsGooutStayout.getColumn(row,"cfmrState");
        		var cfmtDate=this.dsGooutStayout.getColumn(row,"cfmtDate");
        		
        		this.dsService.setColumn(3,"argument",'patNo='+patNo+' cfmrState='+cfmrStateY+' cfmtDate='+cfmtDate);
        		this.gfnService("aprvGooutStayout","false");
        	}
        }

        this.gooutCfmtBtn_onclick = function(obj,e)
        {
        	if(this.dsGooutStayout.rowcount==0){
        		alert("외출 & 외박 신청서 부터 조회하세요.");
        	}else if(this.dsGooutStayout.rowcount !=0){
        		var row =this.dsGooutStayout.rowposition;  //현재 선택한 row		
        		this.dsGooutStayout.setColumn(row,"state",this.fn_dateTime()+"- 외출확인");

        		var patNo=this.dsGooutStayout.getColumn(row,"patNo");
        		var state=this.dsGooutStayout.getColumn(row,"state");
        		alert("상태 : "+this.dsGooutStayout.getColumn(row,"state"));
        		this.dsService.setColumn(4,"argument",'patNo='+patNo+' state='+state);
        		this.gfnService("GooutStayout","false"); 
        	}
        }

        this.comebackCfmtBtn_onclick = function(obj,e)
        {
        	if(this.dsGooutStayout.rowcount==0){
        		alert("외출 & 외박 신청서 부터 조회하세요.");
        	}else if(this.dsGooutStayout.rowcount !=0){
        		var row =this.dsGooutStayout.rowposition;  //현재 선택한 row		
        		this.dsGooutStayout.setColumn(row,"state",this.fn_dateTime()+"- 복귀확인");

        		var patNo=this.dsGooutStayout.getColumn(row,"patNo");
        		var state=this.dsGooutStayout.getColumn(row,"state");
        		alert("상태 : "+this.dsGooutStayout.getColumn(row,"state"));
        		this.dsService.setColumn(4,"argument",'patNo='+patNo+' state='+state);
        		this.gfnService("GooutStayout","false"); 
        	}
        }

        this.gooutStayoutCombo_oncloseup = function(obj,e)
        {
        	gooutStayout= this.gooutStayoutCombo.value;  // 외출/외박 구분 값

        	if(gooutStayout=="외박"){
        		this.gooutDateCal.set_enable(true);
        		this.comebackDateCal.set_enable(true);
        		
        		this.gooutTimeEd.set_value(null);
        		this.comebackTimeEd.set_value(null);
        		this.gooutDayCal.set_value(null);
        		
        		this.gooutTimeEd.set_enable(false);
        		this.comebackTimeEd.set_enable(false);	
        		this.gooutDayCal.set_enable(false);
        		
        	}else if(gooutStayout=="외출"){
        		this.gooutTimeEd.set_enable(true);
        		this.comebackTimeEd.set_enable(true);		
        		this.gooutDayCal.set_enable(true);
        		
        		this.gooutDateCal.set_value(null);
        		this.comebackDateCal.set_value(null);
        		
        		this.gooutDateCal.set_enable(false);
        		this.comebackDateCal.set_enable(false);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patNoBtn.addEventHandler("onclick", this.patNoBtn_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.appCancelBtn.addEventHandler("onclick", this.appCancelBtn_onclick, this);
            this.approvalBtn.addEventHandler("onclick", this.approvalBtn_onclick, this);
            this.gooutCfmtBtn.addEventHandler("onclick", this.gooutCfmtBtn_onclick, this);
            this.comebackCfmtBtn.addEventHandler("onclick", this.comebackCfmtBtn_onclick, this);
            this.patSearchBtn.addEventHandler("onclick", this.patSearchBtn_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc13.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc12.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.applicationBtn.addEventHandler("onclick", this.applicationBtn_onclick, this);
            this.gooutStayoutCombo.addEventHandler("oncloseup", this.gooutStayoutCombo_oncloseup, this);
            this.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc14.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);

        };

        this.loadIncludeScript("WH_GooutStayoutMngntForm.xfdl");

       
    };
}
)();

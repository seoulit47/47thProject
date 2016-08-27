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
                this.set_name("SD_WorkingJournalForm");
                this.set_classname("SD_WorkingJournalForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMedication", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"medicationDay\" type=\"STRING\" size=\"256\"/><Column id=\"medicationQnt\" type=\"STRING\" size=\"256\"/><Column id=\"flag\" type=\"STRING\" size=\"256\"/><Column id=\"medicationNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"medCd\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"medNm\" type=\"STRING\" size=\"256\"/><Column id=\"returner\" type=\"STRING\" size=\"256\"/><Column id=\"returnDate\" type=\"STRING\" size=\"256\"/><Column id=\"returnQnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findWorkingJournal</Col><Col id=\"URL\">his::sup/drug/findWorkingJournal.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsWorkingJournal=dsWorkingJournal dsPrescError=dsPrescError</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">batchWorkingJournalProcess</Col><Col id=\"URL\">his::sup/drug/batchWorkingJournalProcess.do</Col><Col id=\"inData\">dsWorkingJournal=dsWorkingJournal:U dsPrescError=dsPrescError:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsWorkingJournal", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"workDate\" type=\"STRING\" size=\"256\"/><Column id=\"dayWardHosoutPrescCount\" type=\"STRING\" size=\"256\"/><Column id=\"dayWardPrescCount\" type=\"STRING\" size=\"256\"/><Column id=\"nightOutpaPrescCount\" type=\"STRING\" size=\"256\"/><Column id=\"nightOutpaHosoutPrescCount\" type=\"STRING\" size=\"256\"/><Column id=\"nightWardHosoutPrescCount\" type=\"STRING\" size=\"256\"/><Column id=\"dayOutpaPrescCount\" type=\"STRING\" size=\"256\"/><Column id=\"dayPharmacist2\" type=\"STRING\" size=\"256\"/><Column id=\"nightWardPrescCount\" type=\"STRING\" size=\"256\"/><Column id=\"nightPharmacist2\" type=\"STRING\" size=\"256\"/><Column id=\"nightPharmacist3\" type=\"STRING\" size=\"256\"/><Column id=\"dayPharmacist1\" type=\"STRING\" size=\"256\"/><Column id=\"dayPharmacist3\" type=\"STRING\" size=\"256\"/><Column id=\"dayOutpaHosoutPrescCount\" type=\"STRING\" size=\"256\"/><Column id=\"takingOver\" type=\"STRING\" size=\"256\"/><Column id=\"nightPharmacist1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrescError", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"medicationNo\" type=\"STRING\" size=\"256\"/><Column id=\"etcErrorYn\" type=\"STRING\" size=\"256\"/><Column id=\"workDate\" type=\"STRING\" size=\"256\"/><Column id=\"solveNote\" type=\"STRING\" size=\"256\"/><Column id=\"errorNo\" type=\"STRING\" size=\"256\"/><Column id=\"patErrorYn\" type=\"STRING\" size=\"256\"/><Column id=\"weighingErrorYn\" type=\"STRING\" size=\"256\"/><Column id=\"prescErrorYn\" type=\"STRING\" size=\"256\"/><Column id=\"prescDay\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "1249", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5.12%", "-3", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("약국 근무일지 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("compBox2", "absolute", "2.24%", "117", "1196", "51", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);
            obj = new Edit("dayEd1", "absolute", "9.96%", "10", null, "30", "78.74%", null, this.compBox2);
            obj.set_taborder("15");
            obj.style.set_align("center middle");
            this.compBox2.addChild(obj.name, obj);
            obj = new Edit("dayEd2", "absolute", "21.67%", "10", null, "30", "67.03%", null, this.compBox2);
            obj.set_taborder("16");
            obj.style.set_align("center middle");
            this.compBox2.addChild(obj.name, obj);
            obj = new Edit("dayEd3", "absolute", "33.39%", "10", null, "30", "55.31%", null, this.compBox2);
            obj.set_taborder("17");
            obj.style.set_align("center middle");
            this.compBox2.addChild(obj.name, obj);
            obj = new Edit("nightEd2", "absolute", "75.4%", "10", null, "30", "13.31%", null, this.compBox2);
            obj.set_taborder("19");
            obj.style.set_align("center middle");
            this.compBox2.addChild(obj.name, obj);
            obj = new Edit("nightEd1", "absolute", "63.68%", "10", null, "30", "25.02%", null, this.compBox2);
            obj.set_taborder("20");
            obj.style.set_align("center middle");
            this.compBox2.addChild(obj.name, obj);
            obj = new Edit("nightEd3", "absolute", "87.11%", "10", null, "30", "1.59%", null, this.compBox2);
            obj.set_taborder("21");
            obj.style.set_align("center middle");
            this.compBox2.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "1.59%", "9", null, "30", "90.96%", null, this.compBox2);
            obj.set_taborder("22");
            obj.set_text("주간");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox2.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "55.23%", "10", null, "30", "37.32%", null, this.compBox2);
            obj.set_taborder("23");
            obj.set_text("야간");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox2.addChild(obj.name, obj);

            obj = new Div("compBox4", "absolute", "2.24%", "352", "1196", "118", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "-0.08%", "0", null, "30", "0%", null, this.compBox4);
            obj.getSetter("taborder").set("14");
            obj.set_text("   인계사항");
            obj.style.set_background("gainsboro");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.compBox4.addChild(obj.name, obj);
            obj = new TextArea("takingOverArea", "absolute", "0.75%", "41", "1177", "64", null, null, this.compBox4);
            obj.set_taborder("15");
            obj.style.set_color("black");
            this.compBox4.addChild(obj.name, obj);

            obj = new Div("compBox5", "absolute", "2.08%", "478", "1199", "226", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);
            obj = new Grid("prescErrorGrid", "absolute", "1.42%", "74", null, "137", "63.24%", null, this.compBox5);
            obj.set_taborder("39");
            obj.set_binddataset("dsPrescError");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"오류번호\"/><Cell col=\"1\" text=\"조제번호\"/><Cell col=\"2\" text=\"처방일자\"/><Cell col=\"3\" text=\"환자명\"/></Band><Band id=\"body\"><Cell text=\"bind:errorNo\"/><Cell col=\"1\" text=\"bind:medicationNo\"/><Cell col=\"2\" text=\"bind:prescDay\"/><Cell col=\"3\" text=\"bind:patNm\"/></Band></Format></Formats>");
            this.compBox5.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "59.65%", "79", "100", "30", null, null, this.compBox5);
            obj.getSetter("taborder").set("40");
            obj.set_text("조제번호");
            obj.style.set_background("oldlace");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.compBox5.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "69.92%", "79", "100", "30", null, null, this.compBox5);
            obj.getSetter("taborder").set("41");
            obj.set_text("환자등록번호");
            obj.style.set_background("oldlace");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.compBox5.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "80.2%", "79", "100", "30", null, null, this.compBox5);
            obj.getSetter("taborder").set("42");
            obj.set_text("환자명");
            obj.style.set_background("oldlace");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.compBox5.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "90.48%", "79", "100", "30", null, null, this.compBox5);
            obj.getSetter("taborder").set("43");
            obj.set_text("병동");
            obj.style.set_background("oldlace");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.compBox5.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "49.37%", "79", "100", "30", null, null, this.compBox5);
            obj.getSetter("taborder").set("44");
            obj.set_text("처방일자");
            obj.style.set_background("oldlace");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.compBox5.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "38.51%", "79", "120", "30", null, null, this.compBox5);
            obj.getSetter("taborder").set("45");
            obj.set_text("환자내역");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.compBox5.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "38.51%", "41", "120", "30", null, null, this.compBox5);
            obj.getSetter("taborder").set("46");
            obj.set_text("유형");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.compBox5.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "38.51%", "152", "120", "36", null, null, this.compBox5);
            obj.getSetter("taborder").set("47");
            obj.set_text("내용 및 해결사항");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.compBox5.addChild(obj.name, obj);
            obj = new Edit("medicationNoEd", "absolute", "59.65%", "114", "100", "30", null, null, this.compBox5);
            obj.set_taborder("49");
            obj.style.set_align("center middle");
            this.compBox5.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "69.92%", "114", null, "30", "21.72%", null, this.compBox5);
            obj.set_taborder("50");
            obj.style.set_align("center middle");
            this.compBox5.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "80.2%", "114", null, "30", "11.45%", null, this.compBox5);
            obj.set_taborder("51");
            obj.style.set_align("center middle");
            this.compBox5.addChild(obj.name, obj);
            obj = new Edit("wardEd", "absolute", "90.48%", "114", null, "30", "1.17%", null, this.compBox5);
            obj.set_taborder("52");
            obj.style.set_align("center middle");
            this.compBox5.addChild(obj.name, obj);
            obj = new CheckBox("etcErrorYnCB", "absolute", "86.22%", "41", "100", "28", null, null, this.compBox5);
            obj.set_taborder("53");
            obj.set_text("기타오류");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.compBox5.addChild(obj.name, obj);
            obj = new CheckBox("patErrorYnCB", "absolute", "74.19%", "41", "100", "28", null, null, this.compBox5);
            obj.set_taborder("54");
            obj.set_text("환자오류");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.compBox5.addChild(obj.name, obj);
            obj = new CheckBox("weighingErrorYnCB", "absolute", "61.49%", "41", "100", "28", null, null, this.compBox5);
            obj.set_taborder("55");
            obj.set_text("계수/계량오류");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.compBox5.addChild(obj.name, obj);
            obj = new CheckBox("prescErrorYnCB", "absolute", "49.46%", "41", "100", "28", null, null, this.compBox5);
            obj.set_taborder("56");
            obj.set_text("처방오류");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.compBox5.addChild(obj.name, obj);
            obj = new TextArea("solveNoteText", "absolute", "49.37%", "152", null, "59", "1.17%", null, this.compBox5);
            obj.set_taborder("57");
            obj.style.set_color("black");
            this.compBox5.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "0%", "0", null, "30", "0%", null, this.compBox5);
            obj.getSetter("taborder").set("58");
            obj.set_text("  Medication Error");
            obj.style.set_background("gainsboro");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.compBox5.addChild(obj.name, obj);
            obj = new Button("addErrorBtn", "absolute", "370", "38", "32", "32", null, null, this.compBox5);
            obj.set_taborder("59");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox5.addChild(obj.name, obj);
            obj = new Button("delErrorBtn", "absolute", "410", "38", "32", "32", null, null, this.compBox5);
            obj.set_taborder("60");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox5.addChild(obj.name, obj);
            obj = new Calendar("prescDayCal", "absolute", "49.37%", "114", "100", "30", null, null, this.compBox5);
            this.compBox5.addChild(obj.name, obj);
            obj.set_taborder("61");

            obj = new Div("compBox3", "absolute", "2.24%", "175", "1196", "171", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "18.59%", "42", "100", "30", null, null, this.compBox3);
            obj.getSetter("taborder").set("40");
            obj.set_text("주간");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.compBox3.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "28.39%", "42", "100", "30", null, null, this.compBox3);
            obj.getSetter("taborder").set("41");
            obj.set_text("야간");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.compBox3.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "9.05%", "85", "100", "30", null, null, this.compBox3);
            obj.getSetter("taborder").set("42");
            obj.set_text("처방조제건수");
            obj.style.set_background("oldlace");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.compBox3.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "9.05%", "125", "100", "30", null, null, this.compBox3);
            obj.getSetter("taborder").set("43");
            obj.set_text("원외처방건수");
            obj.style.set_background("oldlace");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.compBox3.addChild(obj.name, obj);
            obj = new Edit("AuthEd1", "absolute", "18.59%", "85", "100", "30", null, null, this.compBox3);
            obj.set_taborder("44");
            obj.style.set_align("center middle");
            this.compBox3.addChild(obj.name, obj);
            obj = new Edit("AuthEd3", "absolute", "28.39%", "85", "100", "30", null, null, this.compBox3);
            obj.set_taborder("45");
            obj.style.set_align("center middle");
            this.compBox3.addChild(obj.name, obj);
            obj = new Edit("AuthEd2", "absolute", "18.59%", "125", "100", "30", null, null, this.compBox3);
            obj.set_taborder("46");
            obj.style.set_align("center middle");
            this.compBox3.addChild(obj.name, obj);
            obj = new Edit("AuthEd4", "absolute", "28.39%", "125", "100", "30", null, null, this.compBox3);
            obj.set_taborder("47");
            obj.style.set_align("center middle");
            this.compBox3.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "79.9%", "42", null, "30", "12.14%", null, this.compBox3);
            obj.getSetter("taborder").set("49");
            obj.set_text("야간");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.compBox3.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "70.1%", "42", null, "30", "21.78%", null, this.compBox3);
            obj.getSetter("taborder").set("50");
            obj.set_text("주간");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.compBox3.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "60.55%", "85", null, "30", "31.32%", null, this.compBox3);
            obj.getSetter("taborder").set("51");
            obj.set_text("처방조제건수");
            obj.style.set_background("oldlace");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.compBox3.addChild(obj.name, obj);
            obj = new Static("subCodeStc09", "absolute", "60.55%", "125", null, "30", "31.32%", null, this.compBox3);
            obj.getSetter("taborder").set("52");
            obj.set_text("원외처방건수");
            obj.style.set_background("oldlace");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.compBox3.addChild(obj.name, obj);
            obj = new Edit("AuthEd5", "absolute", "70.1%", "85", null, "30", "21.78%", null, this.compBox3);
            obj.set_taborder("53");
            obj.style.set_align("center middle");
            this.compBox3.addChild(obj.name, obj);
            obj = new Edit("AuthEd6", "absolute", "70.1%", "125", null, "30", "21.78%", null, this.compBox3);
            obj.set_taborder("54");
            obj.style.set_align("center middle");
            this.compBox3.addChild(obj.name, obj);
            obj = new Edit("AuthEdt8", "absolute", "79.9%", "125", null, "30", "12.14%", null, this.compBox3);
            obj.set_taborder("55");
            obj.style.set_align("center middle");
            this.compBox3.addChild(obj.name, obj);
            obj = new Edit("AuthEdt7", "absolute", "79.9%", "85", null, "30", "12.14%", null, this.compBox3);
            obj.set_taborder("56");
            obj.style.set_align("center middle");
            this.compBox3.addChild(obj.name, obj);
            obj = new Static("subCodeStc10", "absolute", "0%", "0", null, "30", "50%", null, this.compBox3);
            obj.getSetter("taborder").set("57");
            obj.set_text("병동처방 조제현황");
            obj.style.set_background("gainsboro");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.compBox3.addChild(obj.name, obj);
            obj = new Static("subCodeStc11", "absolute", "50%", "0", null, "30", "0%", null, this.compBox3);
            obj.getSetter("taborder").set("58");
            obj.set_text("외래처방 조제현황");
            obj.style.set_background("gainsboro");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.compBox3.addChild(obj.name, obj);

            obj = new Div("compBox1", "absolute", "2.24%", "61", "1196", "51", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "1.59%", "10", null, "30", "90.95%", null, this.compBox1);
            obj.set_taborder("0");
            obj.set_text("근무일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox1.addChild(obj.name, obj);
            obj = new Button("searchBtn", "absolute", "1094", "8", "90", "32", null, null, this.compBox1);
            obj.set_taborder("1");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox1.addChild(obj.name, obj);
            obj = new Calendar("workDayCal", "absolute", "9.97%", "9", null, "30", "76.97%", null, this.compBox1);
            this.compBox1.addChild(obj.name, obj);
            obj.set_taborder("2");

            obj = new Button("batchProcessBtn", "absolute", "1115", "710", "110", "32", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1197, 51, this.compBox2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");
            		p.style.set_bordertype("normal 0 0");

            	}
            );
            this.compBox2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1196, 118, this.compBox4,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");
            		p.style.set_bordertype("normal 0 0");

            	}
            );
            this.compBox4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1199, 226, this.compBox5,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");
            		p.style.set_bordertype("normal 0 0");

            	}
            );
            this.compBox5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1196, 190, this.compBox3,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");
            		p.style.set_bordertype("normal 0 0");

            	}
            );
            this.compBox3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1197, 45, this.compBox1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");
            		p.style.set_bordertype("normal 0 0");

            	}
            );
            this.compBox1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SD_WorkingJournalForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item19","compBox5.prescDayCal","value","dsPrescError","prescDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","compBox2.dayEd1","value","dsWorkingJournal","dayPharmacist1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","compBox2.dayEd2","value","dsWorkingJournal","dayPharmacist2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","compBox2.dayEd3","value","dsWorkingJournal","dayPharmacist3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","compBox2.nightEd1","value","dsWorkingJournal","nightPharmacist1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","compBox2.nightEd2","value","dsWorkingJournal","nightPharmacist2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","compBox2.nightEd3","value","dsWorkingJournal","nightPharmacist3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","compBox3.AuthEd1","value","dsWorkingJournal","dayWardPrescCount");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","compBox3.AuthEd3","value","dsWorkingJournal","nightWardPrescCount");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","compBox3.AuthEd4","value","dsWorkingJournal","nightWardHosoutPrescCount");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","compBox3.AuthEd2","value","dsWorkingJournal","dayWardHosoutPrescCount");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","compBox3.AuthEd6","value","dsWorkingJournal","dayOutpaHosoutPrescCount");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","compBox3.AuthEd5","value","dsWorkingJournal","dayOutpaPrescCount");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","compBox3.AuthEdt7","value","dsWorkingJournal","nightOutpaPrescCount");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","compBox3.AuthEdt8","value","dsWorkingJournal","nightOutpaHosoutPrescCount");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","compBox4.takingOverArea","value","dsWorkingJournal","takingOver");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","compBox5.etcErrorYnCB","value","dsPrescError","etcErrorYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","compBox5.prescErrorYnCB","value","dsPrescError","prescErrorYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","compBox5.weighingErrorYnCB","value","dsPrescError","weighingErrorYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","compBox5.patErrorYnCB","value","dsPrescError","patErrorYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","compBox5.medicationNoEd","value","dsPrescError","medicationNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","compBox5.patNoEd","value","dsPrescError","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","compBox5.patNmEd","value","dsPrescError","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","compBox5.wardEd","value","dsPrescError","ward");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","compBox5.solveNoteText","value","dsPrescError","solveNote");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SD_WorkingJournalForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SD_WorkingJournalForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("SD_WorkingJournalForm.xfdl", function() {
        // 공통 스크립트
        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";

        // 화면로드
        this.SD_WorkingJournalForm_onload = function(obj,e)
        {
        	var today = this.gfnDate("yyyyMMdd");
        	this.compBox1.workDayCal.set_value(today);
        }

        
        // 조회버튼
        this.compBox1_searchBtn_onclick = function(obj,e)
        {
        	var workDate = this.compBox1.workDayCal.value;
        	var argument = 'workDate='+workDate;
        	
        	var row = this.dsService.findRow('serviceID' , "findWorkingJournal");
        	
        	this.dsService.setColumn(row,"argument",argument);
        	this.gfnService("findWorkingJournal");
        }

        
        // 오류 + 버튼
        this.compBox5_addErrorBtn_onclick = function(obj,e)
        {
        	var errorNo = this.dsPrescError.getColumn(this.dsPrescError.rowcount-1,"errorNo");
        	var aRow = this.dsPrescError.addRow();
        	
        	if(errorNo == null){
        		errorNo = 0;
        	}
        	
        	this.dsPrescError.setColumn(aRow,"errorNo",parseInt(errorNo)+1);
        	this.dsPrescError.setColumn(aRow,"workDate",this.compBox1.workDayCal.value);		
        }

        
        // 오류 - 버튼
        this.compBox5_delErrorBtn_onclick = function(obj,e)
        {
        	this.dsPrescError.deleteRow(this.dsPrescError.rowposition);
        }

        // 일괄처리 버튼
        this.batchProcessBtn_onclick = function(obj,e)
        {
        	this.dsWorkingJournal.setColumn(0,"workDate",this.compBox1.workDayCal.value);
        	this.gfnService("batchWorkingJournalProcess");
        }

        
        // 팝업 셋팅
        this.setCode=function(code,arrRtn)
        {
        	this.compBox5.prescDayCal.set_value(arrRtn[0]);
        	this.compBox5.medicationNoEd.set_value(arrRtn[1]);
        	this.compBox5.patNoEd.set_value(arrRtn[2]);
        	this.compBox5.patNmEd.set_value(arrRtn[3]);
        	this.compBox5.wardEd.set_value(arrRtn[4]);
        }

        this.medPresc_oneditclick = function(obj,e)
        {
        	var param = {'':''};
        	
        	this.gfnPopup("SD_MedPrescPopForm","sup",param);	
        }

        // 콜백함수
        this.callBackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {
        		if(svcID=="batchWorkingJournalProcess"){
        			alert("처리되었습니다.");
        		}else{}

         	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMedication.addEventHandler("cancolumnchange", this.dsMedication_cancolumnchange, this);
            this.dsWorkingJournal.addEventHandler("oncolumnchanged", this.dsWorkingJournal_oncolumnchanged, this);
            this.dsWorkingJournal.addEventHandler("onload", this.dsWorkingJournal_onload, this);
            this.dsPrescError.addEventHandler("cancolumnchange", this.dsPrescError_cancolumnchange, this);
            this.addEventHandler("onload", this.SD_WorkingJournalForm_onload, this);
            this.compBox4.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox5.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox5.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox5.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox5.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox5.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox5.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox5.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox5.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox5.medicationNoEd.addEventHandler("oneditclick", this.medPresc_oneditclick, this);
            this.compBox5.patNoEd.addEventHandler("oneditclick", this.medPresc_oneditclick, this);
            this.compBox5.patNmEd.addEventHandler("oneditclick", this.medPresc_oneditclick, this);
            this.compBox5.wardEd.addEventHandler("oneditclick", this.medPresc_oneditclick, this);
            this.compBox5.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox5.addErrorBtn.addEventHandler("onclick", this.compBox5_addErrorBtn_onclick, this);
            this.compBox5.delErrorBtn.addEventHandler("onclick", this.compBox5_delErrorBtn_onclick, this);
            this.compBox5.prescDayCal.addEventHandler("oneditclick", this.medPresc_oneditclick, this);
            this.compBox3.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox3.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox3.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox3.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox3.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox3.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox3.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox3.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox3.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox3.subCodeStc11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox1.searchBtn.addEventHandler("onclick", this.compBox1_searchBtn_onclick, this);
            this.batchProcessBtn.addEventHandler("onclick", this.batchProcessBtn_onclick, this);

        };

        this.loadIncludeScript("SD_WorkingJournalForm.xfdl");

       
    };
}
)();

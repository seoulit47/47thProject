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
                this.set_name("MB_DoctTrmtSchdMngntForm");
                this.set_classname("MC_DoctSchdForm");
                this.set_titletext("의사진료일정");
                this._setFormPosition(0,0,1242,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("trmtStandard", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"day\" type=\"STRING\" size=\"256\"/><Column id=\"a\" type=\"STRING\" size=\"256\"/><Column id=\"p\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTrmtSchdType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTypeNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"amUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"fmUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"amStime\" type=\"STRING\" size=\"256\"/><Column id=\"amEtime\" type=\"STRING\" size=\"256\"/><Column id=\"fmStime\" type=\"STRING\" size=\"256\"/><Column id=\"fmEtime\" type=\"STRING\" size=\"256\"/><Column id=\"amIntv\" type=\"STRING\" size=\"256\"/><Column id=\"fmIntv\" type=\"STRING\" size=\"256\"/><Column id=\"amHandle\" type=\"STRING\" size=\"256\"/><Column id=\"diffDeptReser\" type=\"STRING\" size=\"256\"/><Column id=\"fmHandle\" type=\"INT\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tue\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thurs\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTrmtSchdTypeDetail", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"amFmDiv\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"handle\" type=\"STRING\" size=\"256\"/><Column id=\"diffDeptReser\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTypeNo\" type=\"STRING\" size=\"256\"/><Column id=\"dayOfWeek\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTrmtSchdTypeDetailAM", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"amFmDiv\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"handle\" type=\"STRING\" size=\"256\"/><Column id=\"diffDeptReser\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTypeNo\" type=\"STRING\" size=\"256\"/><Column id=\"dayOfWeek\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTrmtSchdTypeDetailFM", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"amFmDiv\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"handle\" type=\"STRING\" size=\"256\"/><Column id=\"diffDeptReser\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTypeNo\" type=\"STRING\" size=\"256\"/><Column id=\"dayOfWeek\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">batchTrmtTypeProcess</Col><Col id=\"URL\">his::med/base/batchTrmtTypeProcess.do</Col><Col id=\"inData\">dsTrmtSchdType=dsTrmtSchdType:u</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchTrmtTypeDetailAMProcess</Col><Col id=\"URL\">his::med/base/batchTrmtTypeDetailAMProcess.do</Col><Col id=\"inData\">dsTrmtSchdTypeDetail=dsTrmtSchdTypeDetailAM:u</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"inData\">dsTrmtSchdTypeDetail=dsTrmtSchdTypeDetailFM:u</Col><Col id=\"URL\">his::med/base/batchTrmtTypeDetailFMProcess.do</Col><Col id=\"serviceID\">batchTrmtTypeDetailFMProcess</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">findTrmtTypeList</Col><Col id=\"URL\">his::med/base/findTrmtTypeList.do</Col><Col id=\"outData\">dsTrmtSchdType=dsTrmtSchdType dsTrmtSchdTypeDetail=dsTrmtSchdTypeDetail</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">applyType</Col><Col id=\"URL\">his::med/base/callApplyType.do</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">findCalendarList</Col><Col id=\"URL\">his::med/base/findCalendarList.do</Col><Col id=\"outData\">dsCalendar=dsCalendar</Col></Row><Row><Col id=\"serviceID\">findTrmtSchdList</Col><Col id=\"URL\">his::med/base/findTrmtSchdList.do</Col><Col id=\"outData\">dsTrmtSchd=dsTrmtSchd</Col></Row><Row><Col id=\"serviceID\">findApplyHistoryList</Col><Col id=\"URL\">his::med/base/findApplyHistoryList.do</Col><Col id=\"outData\">dsApplyHistory=dsApplyHistory</Col></Row><Row><Col id=\"serviceID\">findDoctResptMsgList</Col><Col id=\"URL\">his::med/request/findDoctResptMsgList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsCfrnTrmt=dsCfrnTrmt</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">[Undefined]</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCalendar", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"thu\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thurs\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTrmtSchd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"dayOfWeek\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTypeNo\" type=\"STRING\" size=\"256\"/><Column id=\"amHandle\" type=\"STRING\" size=\"256\"/><Column id=\"fmHandle\" type=\"STRING\" size=\"256\"/><Column id=\"doctCtRe\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"reser\" type=\"STRING\" size=\"256\"/><Column id=\"day\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsApplyHistory", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"day\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDayOfWeek", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">일</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">월</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">화</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">수</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">목</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">금</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"value\">토</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCfrnTrmt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patDiv\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"cfrnTrmtNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTime\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"mtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"hopeDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"hopeDate\" type=\"STRING\" size=\"256\"/><Column id=\"hopeDoct\" type=\"STRING\" size=\"256\"/><Column id=\"callYN\" type=\"STRING\" size=\"256\"/><Column id=\"adrYN\" type=\"STRING\" size=\"256\"/><Column id=\"emeYN\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"respDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"RespDoct\" type=\"STRING\" size=\"256\"/><Column id=\"respDate\" type=\"STRING\" size=\"256\"/><Column id=\"respCon\" type=\"STRING\" size=\"256\"/><Column id=\"respType\" type=\"STRING\" size=\"256\"/><Column id=\"askingDoct\" type=\"STRING\" size=\"256\"/><Column id=\"askingDept\" type=\"STRING\" size=\"256\"/><Column id=\"askingDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"askingDate\" type=\"STRING\" size=\"256\"/><Column id=\"askingDiv\" type=\"STRING\" size=\"256\"/><Column id=\"askingCon\" type=\"STRING\" size=\"256\"/><Column id=\"askingCau\" type=\"STRING\" size=\"256\"/><Column id=\"askingDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"respDept\" type=\"STRING\" size=\"256\"/><Column id=\"respDeptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0.72%", "2", null, "60", "63.36%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::miniTitleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "14.48%", "5", null, "46", "15.14%", null, this.Div06);
            obj.getSetter("taborder").set("0");
            obj.set_text("의사진료일정");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div06.addChild(obj.name, obj);

            obj = new Div("doctschdDiv", "absolute", "0.48%", "67", null, "701", "0.89%", null, this);
            obj.set_taborder("4");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Button("saveTrmtTypeBtn", "absolute", "15.5%", "147", null, "32", "79.38%", null, this.doctschdDiv);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Grid("typeGrid", "absolute", "1.46%", "183", null, "200", "79.06%", null, this.doctschdDiv);
            obj.set_taborder("9");
            obj.set_binddataset("dsTrmtSchdType");
            obj.set_autofittype("col");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("black");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"등록된 Type명\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" style=\"align:left;color:black;color2:black;\" text=\"bind:trmtTypeNm\" expandshow=\"hide\" expandsize=\"15\"/></Band></Format></Formats>");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Grid("applyHistoryGrid", "absolute", "1.46%", "394", null, "200", "78.98%", null, this.doctschdDiv);
            obj.set_taborder("10");
            obj.set_binddataset("dsApplyHistory");
            obj.set_autofittype("col");
            obj.style.set_border("1px solid #808080ff");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"type적용이력\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:day\" mask=\"@@@@-@@-@@\"/></Band></Format></Formats>");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Calendar("sdayCal", "absolute", "1.87%", "615", null, "29", "89.37%", null, this.doctschdDiv);
            this.doctschdDiv.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.getSetter("class").set("AreaCal");
            obj = new Calendar("edayCal", "absolute", "11.93%", "615", null, "29", "79.22%", null, this.doctschdDiv);
            this.doctschdDiv.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.getSetter("class").set("AreaCal");
            obj = new Static("Static06", "absolute", "10.55%", "614", null, "29", "87.58%", null, this.doctschdDiv);
            obj.getSetter("taborder").set("13");
            obj.set_text("~");
            obj.style.set_background("transparent");
            obj.style.set_font("돋움,15,antialias");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("stDiv01", "absolute", "23.3%", "45", "40", "27", null, null, this.doctschdDiv);
            obj.getSetter("taborder").set("14");
            obj.set_text("오전");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "22.18%", "6", "200", "21", null, null, this.doctschdDiv);
            obj.getSetter("taborder").set("15");
            obj.set_text("진료가능인원");
            obj.style.set_background("#99ccffff");
            obj.style.set_border("3 solid black");
            obj.style.set_color("#000000ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("stDiv02", "absolute", "23.3%", "77", "40", "27", null, null, this.doctschdDiv);
            obj.getSetter("taborder").set("16");
            obj.set_text("오후");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new CheckBox("AMuseCheckBox", "absolute", "27.11%", "45", null, "20", "70.21%", null, this.doctschdDiv);
            obj.set_taborder("17");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonsize("15");
            obj.style.set_color("#223762ff");
            obj.style.set_font("돋움,9,bold");
            obj.getSetter("class").set("AreaCheck");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new CheckBox("FMuseCheckBox", "absolute", "27.11%", "83", null, "20", "70.21%", null, this.doctschdDiv);
            obj.set_taborder("18");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonsize("15");
            obj.style.set_color("#223762ff");
            obj.style.set_font("돋움,9,bold");
            obj.getSetter("class").set("AreaCheck");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("stDiv03", "absolute", "30.44%", "43", "40", "56", null, null, this.doctschdDiv);
            obj.getSetter("taborder").set("19");
            obj.set_text("시간");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new MaskEdit("amStimeMaskEdt", "absolute", "34.58%", "40", null, "32", "61.69%", null, this.doctschdDiv);
            obj.set_taborder("20");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("right middle");
            obj.style.set_font("9 맑은 고딕 Semilight");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new MaskEdit("fmStimeMaskEdt", "absolute", "34.58%", "78", null, "32", "61.69%", null, this.doctschdDiv);
            obj.set_taborder("21");
            obj.set_type("string");
            obj.set_mask("##:##");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new MaskEdit("amEtimeMaskEdt", "absolute", "39.85%", "40", null, "32", "56.41%", null, this.doctschdDiv);
            obj.set_taborder("22");
            obj.set_type("string");
            obj.set_mask("##:##");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new MaskEdit("fmEtimeMaskEdt", "absolute", "39.85%", "77", null, "32", "56.49%", null, this.doctschdDiv);
            obj.set_taborder("23");
            obj.set_type("string");
            obj.set_mask("##:##");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "38.47%", "46", null, "29", "59.66%", null, this.doctschdDiv);
            obj.getSetter("taborder").set("24");
            obj.set_text("~");
            obj.style.set_background("transparent");
            obj.style.set_font("돋움,15,antialias");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "38.47%", "80", null, "29", "59.66%", null, this.doctschdDiv);
            obj.getSetter("taborder").set("25");
            obj.set_text("~");
            obj.style.set_background("transparent");
            obj.style.set_font("돋움,15,antialias");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("stDiv04", "absolute", "44.72%", "43", null, "56", "52.03%", null, this.doctschdDiv);
            obj.getSetter("taborder").set("26");
            obj.set_text("간격");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Edit("AMintvEdt", "absolute", "48.46%", "41", null, "30", "48.46%", null, this.doctschdDiv);
            obj.set_taborder("27");
            obj.style.set_align("right");
            obj.style.set_font("돋움,9,bold antialias");
            obj.getSetter("class").set("AreaEdt");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Edit("FMintvEdt", "absolute", "48.46%", "76", null, "30", "48.46%", null, this.doctschdDiv);
            obj.set_taborder("28");
            obj.style.set_align("right");
            obj.style.set_font("돋움,9,bold antialias");
            obj.getSetter("class").set("AreaEdt");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "51.62%", "41", null, "67", "47.24%", null, this.doctschdDiv);
            obj.getSetter("taborder").set("29");
            obj.set_text("분");
            obj.getSetter("class").set("AreaStc");
            obj.style.set_align("center middle");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("stDiv05", "absolute", "53.81%", "43", null, "56", "42.94%", null, this.doctschdDiv);
            obj.getSetter("taborder").set("30");
            obj.set_text("총원");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "61.36%", "41", null, "67", "37.5%", null, this.doctschdDiv);
            obj.getSetter("taborder").set("31");
            obj.set_text("명");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Edit("AMhandleEdt", "absolute", "57.63%", "41", null, "30", "38.8%", null, this.doctschdDiv);
            obj.set_taborder("32");
            obj.style.set_align("right");
            obj.style.set_font("돋움,9,bold antialias");
            obj.getSetter("class").set("AreaEdt");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Edit("FMhandleEdt", "absolute", "57.63%", "79", null, "30", "38.8%", null, this.doctschdDiv);
            obj.set_taborder("33");
            obj.style.set_align("right");
            obj.style.set_font("돋움,9,bold antialias");
            obj.getSetter("class").set("AreaEdt");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("stDiv06", "absolute", "63.56%", "43", null, "56", "31.74%", null, this.doctschdDiv);
            obj.getSetter("taborder").set("34");
            obj.set_text("타과\r\n예약 가능");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new CheckBox("diffReserCheckBox", "absolute", "69.07%", "61", null, "20", "29.55%", null, this.doctschdDiv);
            obj.set_taborder("35");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonsize("15");
            obj.style.set_color("#223762ff");
            obj.style.set_font("돋움,9,bold");
            obj.getSetter("class").set("AreaCheck");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "22.32%", "141", "200", "21", null, null, this.doctschdDiv);
            obj.getSetter("taborder").set("36");
            obj.set_text("적용할 요일");
            obj.style.set_background("#99ccffff");
            obj.style.set_border("3 solid black");
            obj.style.set_color("#000000ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "22.73%", "270", null, "21", "61%", null, this.doctschdDiv);
            obj.getSetter("taborder").set("49");
            obj.set_text("진료일정 상세 기준");
            obj.style.set_background("#99ccffff");
            obj.style.set_border("3 solid black");
            obj.style.set_color("#000000ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "71.81%", "7", null, "21", "11.94%", null, this.doctschdDiv);
            obj.getSetter("taborder").set("51");
            obj.set_text("일별 예약현황");
            obj.style.set_background("#99ccffff");
            obj.style.set_border("3 solid black");
            obj.style.set_color("#000000ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "72.3%", "34", null, "331", "0.73%", null, this.doctschdDiv);
            obj.set_taborder("52");
            obj.set_text("Div00");
            obj.style.set_background("white");
            obj.style.set_border("1 none darkgray transparent");
            obj.style.set_bordertype("normal 5 5  leftbottom rightbottom");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("stYear", "absolute", "21.02%", "5", null, "41", "53.69%", null, this.doctschdDiv.Div01);
            obj.getSetter("taborder").set("3");
            obj.set_text("2015");
            obj.style.set_background("transparent");
            obj.style.set_align("center");
            obj.style.set_font("Bodoni Bd BT,14,bold");
            this.doctschdDiv.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "44.32%", "5", null, "41", "46.88%", null, this.doctschdDiv.Div01);
            obj.getSetter("taborder").set("4");
            obj.set_text("년");
            obj.style.set_background("transparent");
            obj.style.set_font("Bodoni Bd BT,14,bold");
            this.doctschdDiv.Div01.addChild(obj.name, obj);
            obj = new Static("stMonth", "absolute", "52.27%", "4", null, "43", "30.97%", null, this.doctschdDiv.Div01);
            obj.getSetter("taborder").set("5");
            obj.set_text("06");
            obj.style.set_background("transparent");
            obj.style.set_align("center");
            obj.style.set_font("Bodoni Bd BT,14,bold");
            this.doctschdDiv.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "63.92%", "4", null, "43", "23.01%", null, this.doctschdDiv.Div01);
            obj.getSetter("taborder").set("6");
            obj.set_text("월");
            obj.style.set_background("transparent");
            obj.style.set_align("center");
            obj.style.set_font("Bodoni Bd BT,14,bold");
            this.doctschdDiv.Div01.addChild(obj.name, obj);
            obj = new Button("btnRightMonth", "absolute", "77.84%", "12", null, "27", "11.65%", null, this.doctschdDiv.Div01);
            obj.set_taborder("7");
            obj.set_text(">");
            obj.style.set_background("cornflowerblue stretch");
            obj.style.set_color("black");
            obj.style.set_font("돋움,15,bold");
            obj.getSetter("class").set("Btn_rightArrow_min");
            this.doctschdDiv.Div01.addChild(obj.name, obj);
            obj = new Button("btnLettMonth", "absolute", "10.23%", "12", null, "26", "79.26%", null, this.doctschdDiv.Div01);
            obj.set_taborder("8");
            obj.set_text("<");
            obj.style.set_background("cornflowerblue stretch");
            obj.style.set_color("black");
            obj.style.set_font("돋움,15,bold");
            obj.getSetter("class").set("Btn_leftArrow_min");
            this.doctschdDiv.Div01.addChild(obj.name, obj);
            obj = new Grid("calendarGrid", "absolute", "2.67%", "47", null, "274", "4.45%", null, this.doctschdDiv.Div01);
            obj.set_taborder("9");
            obj.set_binddataset("dsCalendar");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj.style.set_border("1px solid #808080ff");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell style=\"background:salmon;background2:salmon;font: ;\" text=\"일\"/><Cell col=\"1\" style=\"font: ;\" text=\"월\"/><Cell col=\"2\" style=\"font: ;\" text=\"화\"/><Cell col=\"3\" style=\"font: ;\" text=\"수\"/><Cell col=\"4\" style=\"font: ;\" text=\"목\"/><Cell col=\"5\" style=\"font: ;\" text=\"금\"/><Cell col=\"6\" style=\"background:paleturquoise;background2:paleturquoise;font: ;\" text=\"토\"/></Band><Band id=\"body\"><Cell celltype=\"none\" edittype=\"none\" editfilter=\"none\" style=\"background:salmon;background2:salmon;accessibility: ;\" expr=\"expr:sun.substr(6,2)\" wordwrap=\"none\" maskchar=\"_\" editlimit=\"-1\" editscrollbar=\"none\" editautoselect=\"false\" editdisplay=\"edit\" editlimitbymask=\"decimal\" editlengthunit=\"utf16\" suppress=\"0\" suppressalign=\"first\" combodisplayrowcount=\"5\" combodisplay=\"display\" calendardisplay=\"edit\" calendardisplaynulltype=\"default\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"1\" style=\"background:azure;background2:azure;font: ;\" expr=\"expr:mon.substr(6,2)\"/><Cell col=\"2\" style=\"background:azure;background2:azure;font: ;\" expr=\"expr:thu.substr(6,2)\"/><Cell col=\"3\" style=\"background:azure;background2:azure;font: ;\" expr=\"expr:wed.substr(6,2)\"/><Cell col=\"4\" style=\"background:azure;background2:azure;font: ;\" expr=\"expr:thurs.substr(6,2)\"/><Cell col=\"5\" style=\"background:azure;background2:azure;font: ;\" expr=\"expr:fri.substr(6,2)\"/><Cell col=\"6\" style=\"background:paleturquoise;background2:paleturquoise;font: ;\" expr=\"expr:sat.substr(6,2)\"/></Band></Format></Formats>");
            this.doctschdDiv.Div01.addChild(obj.name, obj);
            obj = new Grid("reserGrid", "absolute", "72.3%", "369", null, "306", "0.41%", null, this.doctschdDiv);
            obj.set_taborder("53");
            obj.set_binddataset("dsTrmtSchd");
            obj.set_autofittype("col");
            obj.style.set_border("1px solid #808080ff");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"날짜\"/><Cell col=\"1\" style=\"background: ;\" text=\"시간\"/><Cell col=\"2\" style=\"background: ;\" text=\"오전총원\"/><Cell col=\"3\" style=\"background: ;\" text=\"오후총원\"/><Cell col=\"4\" style=\"background: ;\" text=\"타과예약\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"background2: ;\" text=\"bind:day\" mask=\"@@@@-@@-@@\"/><Cell col=\"1\" displaytype=\"text\" style=\"background2: ;\" text=\"bind:time\" mask=\"@@:@@\"/><Cell col=\"2\" style=\"background2: ;\" expr=\"expr:comp.parent.parent.dsTrmtSchdTypeDetailAM.getColumn(0, &quot;handle&quot;)\"/><Cell col=\"3\" style=\"background2: ;\" expr=\"expr:comp.parent.parent.dsTrmtSchdTypeDetailFM.getColumn(0, &quot;handle&quot;)\"/><Cell col=\"4\" displaytype=\"checkbox\" style=\"background2: ;\" text=\"bind:reser\"/></Band></Format></Formats>");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "1.96%", "23", null, "93", "79.97%", null, this.doctschdDiv);
            obj.set_taborder("54");
            obj.style.set_align("center middle");
            obj.style.set_border("3 solid #808080ff");
            obj.style.set_color("#dcdeffff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            obj.set_cssclass("TStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new CheckBox("allCheckBox", "absolute", "23.38%", "-34", null, "20", "72.18%", null, this.doctschdDiv.Div00);
            obj.set_taborder("17");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonsize("15");
            obj.style.set_color("#223762ff");
            obj.style.set_font("돋움,9,bold");
            obj.getSetter("class").set("AreaCheck");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("sunCheckBox", "absolute", "29.69%", "-34", null, "20", "67.06%", null, this.doctschdDiv.Div00);
            obj.set_taborder("18");
            obj.set_text("일");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("monCheckBox", "absolute", "34.98%", "-34", null, "20", "61.77%", null, this.doctschdDiv.Div00);
            obj.set_taborder("19");
            obj.set_text("월");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("tueCheckBox", "absolute", "40.96%", "-34", null, "20", "55.8%", null, this.doctschdDiv.Div00);
            obj.set_taborder("20");
            obj.set_text("화");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("wedCheckBox", "absolute", "47.78%", "-34", null, "20", "48.81%", null, this.doctschdDiv.Div00);
            obj.set_taborder("21");
            obj.set_text("수");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("thursCheckBox", "absolute", "53.92%", "-34", null, "20", "42.83%", null, this.doctschdDiv.Div00);
            obj.set_taborder("22");
            obj.set_text("목");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("friCheckBox", "absolute", "59.73%", "-34", null, "20", "37.2%", null, this.doctschdDiv.Div00);
            obj.set_taborder("23");
            obj.set_text("금");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("satCheckBox", "absolute", "65.7%", "-34", null, "20", "31.23%", null, this.doctschdDiv.Div00);
            obj.set_taborder("24");
            obj.set_text("토");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "23.89%", "-56", null, "29", "28.33%", null, this.doctschdDiv.Div00);
            obj.set_taborder("33");
            obj.style.set_align("center middle");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#dcdeffff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            obj.set_cssclass("TStc");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("allCheckBox", "absolute", "23.38%", "-34", null, "20", "72.3%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("32");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonsize("15");
            obj.style.set_color("#223762ff");
            obj.style.set_font("돋움,9,bold");
            obj.getSetter("class").set("AreaCheck");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("sunCheckBox", "absolute", "29.86%", "-34", null, "20", "66.91%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("33");
            obj.set_text("일");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("monCheckBox", "absolute", "34.89%", "-34", null, "20", "61.51%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("34");
            obj.set_text("월");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("tueCheckBox", "absolute", "41.01%", "-34", null, "20", "55.76%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("35");
            obj.set_text("화");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("wedCheckBox", "absolute", "47.84%", "-34", null, "20", "48.92%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("36");
            obj.set_text("수");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("thursCheckBox", "absolute", "53.96%", "-34", null, "20", "42.81%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("37");
            obj.set_text("목");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("friCheckBox", "absolute", "59.71%", "-34", null, "20", "37.05%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("38");
            obj.set_text("금");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("satCheckBox", "absolute", "65.83%", "-34", null, "20", "31.29%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("39");
            obj.set_text("토");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("satCheckBox00", "absolute", "86.33%", "6", null, "20", "5.4%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("40");
            obj.set_text("토");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("friCheckBox00", "absolute", "74.82%", "6", null, "20", "16.55%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("41");
            obj.set_text("금");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("thursCheckBox00", "absolute", "63.31%", "6", null, "20", "28.06%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("42");
            obj.set_text("목");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("wedCheckBox00", "absolute", "52.16%", "6", null, "20", "39.57%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("43");
            obj.set_text("수");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("tueCheckBox00", "absolute", "40.65%", "6", null, "20", "50.72%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("44");
            obj.set_text("화");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("monCheckBox00", "absolute", "29.5%", "6", null, "20", "62.23%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("45");
            obj.set_text("월");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("sunCheckBox00", "absolute", "17.99%", "6", null, "20", "73.38%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("46");
            obj.set_text("일");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("allCheckBox00", "absolute", "6.83%", "6", null, "20", "84.89%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("47");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonsize("15");
            obj.style.set_color("#223762ff");
            obj.style.set_font("돋움,9,bold");
            obj.getSetter("class").set("AreaCheck");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new Button("searchEmpBtn", "absolute", "16.93%", "70", "30", "30", null, null, this.doctschdDiv);
            obj.set_taborder("55");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Edit("deptNmEd", "absolute", "7.96%", "36", "100", "30", null, null, this.doctschdDiv);
            obj.set_taborder("57");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Edit("empNmEd", "absolute", "7.96%", "71", "100", "30", null, null, this.doctschdDiv);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("stDiv00", "absolute", "3.17%", "72", "50", "27", null, null, this.doctschdDiv);
            obj.getSetter("taborder").set("59");
            obj.set_text("진료의");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("stDiv14", "absolute", "3.17%", "37", "50", "27", null, null, this.doctschdDiv);
            obj.getSetter("taborder").set("60");
            obj.set_text("진료과");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Button("typeAddBtn", "absolute", "1.54%", "147", null, "32", "93.34%", null, this.doctschdDiv);
            obj.set_taborder("61");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Button("delTypeBtn", "absolute", "6.9%", "147", null, "32", "87.99%", null, this.doctschdDiv);
            obj.set_taborder("62");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Button("createDeatailTypeBtn", "absolute", "58.85%", "168", null, "32", "35.88%", null, this.doctschdDiv);
            obj.set_taborder("63");
            obj.style.set_background("@gradation URL('img::okBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Button("deleteAllDetailBtn", "absolute", "64.45%", "168", null, "32", "29.46%", null, this.doctschdDiv);
            obj.set_taborder("64");
            obj.style.set_background("@gradation URL('img::resetBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Button("DelBtn03", "absolute", "7.47%", "656", null, "32", "85.23%", null, this.doctschdDiv);
            obj.set_taborder("65");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "22.4%", "162", null, "94", "29.03%", null, this.doctschdDiv);
            obj.set_taborder("66");
            obj.style.set_align("center middle");
            obj.style.set_border("3 solid #808080ff");
            obj.style.set_color("#dcdeffff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            obj.set_cssclass("TStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new CheckBox("allCheckBox", "absolute", "23.3%", "-34", null, "20", "72.28%", null, this.doctschdDiv.Div02);
            obj.set_taborder("25");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonsize("15");
            obj.style.set_color("#223762ff");
            obj.style.set_font("돋움,9,bold");
            obj.getSetter("class").set("AreaCheck");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("sunCheckBox", "absolute", "29.76%", "-34", null, "20", "67.01%", null, this.doctschdDiv.Div02);
            obj.set_taborder("26");
            obj.set_text("일");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("monCheckBox", "absolute", "35.03%", "-34", null, "20", "61.73%", null, this.doctschdDiv.Div02);
            obj.set_taborder("27");
            obj.set_text("월");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("tueCheckBox", "absolute", "40.99%", "-34", null, "20", "55.78%", null, this.doctschdDiv.Div02);
            obj.set_taborder("28");
            obj.set_text("화");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("wedCheckBox", "absolute", "47.79%", "-34", null, "20", "48.81%", null, this.doctschdDiv.Div02);
            obj.set_taborder("29");
            obj.set_text("수");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("thursCheckBox", "absolute", "53.91%", "-34", null, "20", "42.86%", null, this.doctschdDiv.Div02);
            obj.set_taborder("30");
            obj.set_text("목");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("friCheckBox", "absolute", "59.69%", "-34", null, "20", "37.24%", null, this.doctschdDiv.Div02);
            obj.set_taborder("31");
            obj.set_text("금");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("satCheckBox", "absolute", "65.82%", "-34", null, "20", "31.12%", null, this.doctschdDiv.Div02);
            obj.set_taborder("32");
            obj.set_text("토");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "23.81%", "-56", null, "29", "28.4%", null, this.doctschdDiv.Div02);
            obj.set_taborder("33");
            obj.style.set_align("center middle");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#dcdeffff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            obj.set_cssclass("TStc");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("allCheckBox", "absolute", "23.3%", "-34", null, "20", "72.4%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("32");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonsize("15");
            obj.style.set_color("#223762ff");
            obj.style.set_font("돋움,9,bold");
            obj.getSetter("class").set("AreaCheck");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("sunCheckBox", "absolute", "29.75%", "-34", null, "20", "67.03%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("33");
            obj.set_text("일");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("monCheckBox", "absolute", "34.77%", "-34", null, "20", "61.65%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("34");
            obj.set_text("월");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("tueCheckBox", "absolute", "40.86%", "-34", null, "20", "55.91%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("35");
            obj.set_text("화");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("wedCheckBox", "absolute", "47.67%", "-34", null, "20", "48.75%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("36");
            obj.set_text("수");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("thursCheckBox", "absolute", "54.12%", "-34", null, "20", "42.65%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("37");
            obj.set_text("목");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("friCheckBox", "absolute", "59.86%", "-34", null, "20", "36.92%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("38");
            obj.set_text("금");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("satCheckBox", "absolute", "65.95%", "-34", null, "20", "31.18%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("39");
            obj.set_text("토");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("satCheckBox00", "absolute", "86.38%", "6", null, "20", "5.38%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("40");
            obj.set_text("토");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("friCheckBox00", "absolute", "74.91%", "6", null, "20", "16.49%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("41");
            obj.set_text("금");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("thursCheckBox00", "absolute", "63.44%", "6", null, "20", "27.96%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("42");
            obj.set_text("목");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("wedCheckBox00", "absolute", "52.33%", "6", null, "20", "39.43%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("43");
            obj.set_text("수");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("tueCheckBox00", "absolute", "40.5%", "6", null, "20", "50.9%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("44");
            obj.set_text("화");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("monCheckBox00", "absolute", "29.39%", "6", null, "20", "62.37%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("45");
            obj.set_text("월");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("sunCheckBox00", "absolute", "17.92%", "6", null, "20", "73.48%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("46");
            obj.set_text("일");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("allCheckBox00", "absolute", "6.81%", "6", null, "20", "84.95%", null, this.doctschdDiv.Div02.Div02);
            obj.set_taborder("47");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonsize("15");
            obj.style.set_color("#223762ff");
            obj.style.set_font("돋움,9,bold");
            obj.getSetter("class").set("AreaCheck");
            this.doctschdDiv.Div02.Div02.addChild(obj.name, obj);
            obj = new CheckBox("allCheckBox00", "absolute", "6.63%", "46", null, "20", "84.69%", null, this.doctschdDiv.Div02);
            obj.set_taborder("34");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonsize("15");
            obj.style.set_color("#223762ff");
            obj.style.set_font("돋움,9,bold");
            obj.getSetter("class").set("AreaCheck");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("sunCheckBox00", "absolute", "18.2%", "46", null, "20", "73.3%", null, this.doctschdDiv.Div02);
            obj.set_taborder("35");
            obj.set_text("일");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("monCheckBox00", "absolute", "29.42%", "46", null, "20", "62.07%", null, this.doctschdDiv.Div02);
            obj.set_taborder("36");
            obj.set_text("월");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("tueCheckBox00", "absolute", "40.82%", "46", null, "20", "50.68%", null, this.doctschdDiv.Div02);
            obj.set_taborder("37");
            obj.set_text("화");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("wedCheckBox00", "absolute", "52.04%", "46", null, "20", "39.46%", null, this.doctschdDiv.Div02);
            obj.set_taborder("38");
            obj.set_text("수");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("thursCheckBox00", "absolute", "63.44%", "46", null, "20", "28.06%", null, this.doctschdDiv.Div02);
            obj.set_taborder("39");
            obj.set_text("목");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("friCheckBox00", "absolute", "74.83%", "46", null, "20", "16.67%", null, this.doctschdDiv.Div02);
            obj.set_taborder("40");
            obj.set_text("금");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);
            obj = new CheckBox("satCheckBox00", "absolute", "86.22%", "46", null, "20", "5.44%", null, this.doctschdDiv.Div02);
            obj.set_taborder("41");
            obj.set_text("토");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "22.88%", "374", null, "364", "65.84%", null, this);
            obj.set_taborder("6");
            obj.set_binddataset("trmtStandard");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"요일\"/><Cell col=\"1\" text=\"A\"/><Cell col=\"2\" text=\"P\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:day\" combodataset=\"dsDayOfWeek\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" expr=\"expr:comp.parent.dsTrmtSchd.getColumn(0, &quot;amHandle&quot;)\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" expr=\"expr:comp.parent.dsTrmtSchd.getColumn(0, &quot;fmHandle&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "52.4%", "374", null, "364", "29.92%", null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsTrmtSchdTypeDetailFM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"오후시간\"/><Cell col=\"1\" text=\"총원\"/><Cell col=\"2\" text=\"타과예약\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" text=\"bind:time\" mask=\"@@:@@\"/><Cell col=\"1\" text=\"bind:handle\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:diffDeptReser\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"오후합계\"/><Cell col=\"2\" expr=\"expr:dataset.getSum(&quot;parseInt(handle)&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "34.32%", "374", null, "363", "47.76%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsTrmtSchdTypeDetailAM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"오전시간\"/><Cell col=\"1\" text=\"총원\"/><Cell col=\"2\" text=\"타과예약\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" text=\"bind:time\" mask=\"@@:@@\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:handle\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:diffDeptReser\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"오전합계\"/><Cell col=\"2\" expr=\"expr:dataset.getSum(&quot;parseInt(handle)&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("cfrnTrmtRespBtn", "absolute", "38.16%", "11", null, "48", "46.94%", null, this);
            obj.set_taborder("9");
            obj.set_text("협의진료 회신 처리 알림");
            obj.style.set_background("#ffcc00ff");
            obj.style.set_border("1 solid #000000ff");
            obj.style.set_color("#999999ff");
            obj.style.set_font("bold 12 휴먼모음T");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::miniTitleBar1.jpg')");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 628, 751, this.doctschdDiv.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("52");
            		p.set_text("Div00");
            		p.style.set_background("white");
            		p.style.set_border("1 none darkgray transparent");
            		p.style.set_bordertype("normal 5 5  leftbottom rightbottom");

            	}
            );
            this.doctschdDiv.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 29, this.doctschdDiv.Div00.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("33");
            		p.style.set_align("center middle");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_color("#dcdeffff");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("9 Dotum");
            		p.set_cssclass("TStc");

            	}
            );
            this.doctschdDiv.Div00.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 93, this.doctschdDiv.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("54");
            		p.style.set_align("center middle");
            		p.style.set_border("3 solid #808080ff");
            		p.style.set_color("#dcdeffff");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("9 Dotum");
            		p.set_cssclass("TStc");

            	}
            );
            this.doctschdDiv.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 29, this.doctschdDiv.Div02.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("33");
            		p.style.set_align("center middle");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_color("#dcdeffff");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("9 Dotum");
            		p.set_cssclass("TStc");

            	}
            );
            this.doctschdDiv.Div02.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 594, 94, this.doctschdDiv.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("66");
            		p.style.set_align("center middle");
            		p.style.set_border("3 solid #808080ff");
            		p.style.set_color("#dcdeffff");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("9 Dotum");
            		p.set_cssclass("TStc");

            	}
            );
            this.doctschdDiv.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1228, 45, this.doctschdDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.doctschdDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1242, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MC_DoctSchdForm");
            		p.set_titletext("의사진료일정");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item38","doctschdDiv.Div02.sunCheckBox00","value","dsTrmtSchdType","sun");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","doctschdDiv.Div02.monCheckBox00","value","dsTrmtSchdType","mon");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","doctschdDiv.Div02.tueCheckBox00","value","dsTrmtSchdType","tue");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","doctschdDiv.Div02.wedCheckBox00","value","dsTrmtSchdType","wed");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","doctschdDiv.Div02.thursCheckBox00","value","dsTrmtSchdType","thurs");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","doctschdDiv.Div02.friCheckBox00","value","dsTrmtSchdType","fri");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","doctschdDiv.Div02.satCheckBox00","value","dsTrmtSchdType","sat");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","doctschdDiv.FMuseCheckBox","value","dsTrmtSchdType","fmUseYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","doctschdDiv.AMuseCheckBox","value","dsTrmtSchdType","amUseYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","doctschdDiv.amStimeMaskEdt","value","dsTrmtSchdType","amStime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","doctschdDiv.amEtimeMaskEdt","value","dsTrmtSchdType","amEtime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","doctschdDiv.fmStimeMaskEdt","value","dsTrmtSchdType","fmStime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","doctschdDiv.fmEtimeMaskEdt","value","dsTrmtSchdType","fmEtime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","doctschdDiv.AMintvEdt","value","dsTrmtSchdType","amIntv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","doctschdDiv.FMintvEdt","value","dsTrmtSchdType","fmIntv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","doctschdDiv.AMhandleEdt","value","dsTrmtSchdType","amHandle");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","doctschdDiv.FMhandleEdt","value","dsTrmtSchdType","fmHandle");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","doctschdDiv.diffReserCheckBox","value","dsTrmtSchdType","diffDeptReser");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MB_DoctTrmtSchdMngntForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("MB_DoctTrmtSchdMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("MB_DoctTrmtSchdMngntForm.xfdl", "scripts::commonUtil.xjs");
        this.addIncludeScript("MB_DoctTrmtSchdMngntForm.xfdl", "scripts::commonPopup.xjs");
        this.addIncludeScript("MB_DoctTrmtSchdMngntForm.xfdl", "scripts::supScripts.xjs");
        this.addIncludeScript("MB_DoctTrmtSchdMngntForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("MB_DoctTrmtSchdMngntForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 진단처방 EMR                                                     *
        *                                                                   *
        * @Path		    병원 EMR                     	                    *
        * @Description  EMR(처방내역, 상병내역)조회및일괄처리 화면     *
        * @Author		진료처방팀 				                        *
        * 								                                    *
        * Created on 2015. 8. 31.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonScripts.xjs";  
        //include "scripts::commonUtil.xjs";
        //include "scripts::commonPopup.xjs";
        //include "scripts::supScripts.xjs";
        //include "scripts::wonScripts.xjs";

        var deptno;
        var deptnm;
        var empno;
        var empnm;

        /********************************************************************************
        @Description 	트랜잭션 콜백
        ********************************************************************************/
        this.CallbackFunc = function(trid,errcd,errmsg)
        {
        	//alert(trid)
        	if(errcd<0)
        	{
        	    alert(errcd+errmsg)
        		//this.gfnErrorPopup(trid, errmsg);
        		return;
        	//}
        	//if(trid=="batchTrmtTypeProcess"){
        	//alert("batchTrmtTypeDetailAMProcess받아오기")
        	//	this.gfnService("batchTrmtTypeDetailAMProcess");
        	}else if(trid=="batchTrmtTypeDetailAMProcess"){
        		this.gfnService("batchTrmtTypeDetailFMProcess");
        	}else if(trid=="batchTrmtTypeDetailFMProcess"){
        		this.gfnService("findTrmtTypeList");
        	}else if(trid=="findTrmtTypeList"){
        		this.dsTrmtSchdTypeDetail.filter("amFmDiv=='오전'");
        		this.dsTrmtSchdTypeDetailAM.copyData(this.dsTrmtSchdTypeDetail,true);
        		this.dsTrmtSchdTypeDetail.filter("amFmDiv=='오후'");
        		this.dsTrmtSchdTypeDetailFM.copyData(this.dsTrmtSchdTypeDetail,true);
        		this.allfilter();
        		
        		
        	}else if(trid=="applyType"){
        		if(empno!=null||empno!=undefined){
        			this.findTrmtSchd();
        			this.findApplyHistory();
        		}
        	}else if(trid=="findCalendarList"){
        	
        	}else if(trid=="findTrmtSchdList"){
        		this.dsTrmtSchd.filter("day=='바보'");
        	}
        }

        
        /********************************************************************************
        @Description 	trmtstandard새로 생성 am,fm필터링
        ********************************************************************************/

        this.allfilter = function()
        {
        	this.trmtStandard.deleteAll();
        	var typeNo=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"trmtTypeNo");
        	this.addTrmtStandard(typeNo);
        	var tsrow=this.trmtStandard.rowposition;
        	if(tsrow==-1)
        		return;
        	var day=this.trmtStandard.getColumn(tsrow,"day");
        	this.dsTrmtSchdTypeDetailAM.filter("trmtTypeNo=='"+typeNo+"' && dayOfWeek=='"+day+"'");
        	this.dsTrmtSchdTypeDetailFM.filter("trmtTypeNo=='"+typeNo+"' && dayOfWeek=='"+day+"'");
        }

        
        /********************************************************************************
        @Description 	trmtstandard 추가
        ********************************************************************************/

        this.addTrmtStandard = function(typeNo)
        {
        	for(var i=1;i<8;i++){
        		this.dsTrmtSchdTypeDetailAM.filter("trmtTypeNo=='"+typeNo+"' && dayOfWeek=='"+i+"'");
        		this.dsTrmtSchdTypeDetailFM.filter("trmtTypeNo=='"+typeNo+"' && dayOfWeek=='"+i+"'");
        		var amCount=this.dsTrmtSchdTypeDetailAM.rowcount;
        		var fmCount=this.dsTrmtSchdTypeDetailFM.rowcount;
        		if(amCount!=0 || fmCount!=0){
        			var addedRow=this.trmtStandard.addRow();
        			this.trmtStandard.setColumn(addedRow,"day",i);
        		}
        	}
        }

        /********************************************************************************
        @Description 	type 추가
        ********************************************************************************/

        this.typeAddBtn_onclick = function(obj,e)
        {

        	//if(deptno==undefined){
        	//	alert("부서를 선택해주세요");
        	//	return;
        	//}
        	if(empno==undefined){
        	//	alert("사원을 선택해주세요");
        	//	return;
        	}
        	var addedrow=this.dsTrmtSchdType.addRow();
        	var date=this.gfnDate("yymmddmiss");
        	var typeno=empno+""+date;
        	this.dsTrmtSchdType.setColumn(addedrow,"trmtTypeNo",typeno);
        	this.dsTrmtSchdType.setColumn(addedrow,"empNo",empno);
        	this.dsTrmtSchdType.setColumn(addedrow,"empNm",empnm);
        	this.dsTrmtSchdType.setColumn(addedrow,"amUseYn","0");
        	this.dsTrmtSchdType.setColumn(addedrow,"fmUseYn","0");
        	this.dsTrmtSchdType.setColumn(addedrow,"diffDeptReser","0");
        	this.dayCheckChange(addedrow,"0");
        	this.dsTrmtSchdType.setColumn(addedrow,"amStime","0900");
        	this.dsTrmtSchdType.setColumn(addedrow,"amEtime","1200");
        	this.dsTrmtSchdType.setColumn(addedrow,"fmStime","1330");
        	this.dsTrmtSchdType.setColumn(addedrow,"fmEtime","1700");
        	this.dsTrmtSchdType.setColumn(addedrow,"amIntv","10");
        	this.dsTrmtSchdType.setColumn(addedrow,"fmIntv","10");
        	this.dsTrmtSchdType.setColumn(addedrow,"amHandle","1");
        	this.dsTrmtSchdType.setColumn(addedrow,"fmHandle","1");
        }

        
        /********************************************************************************
        @Description 	emp 조회 선택된 emp정보 들고오기
        ********************************************************************************/

        this.searchEmpBtn_onclick = function(obj,e)
        {
        		this.gfnDoctPopup();
        		this.setDoct = function(arrRtn){ 
        		empno=arrRtn[0];
        		empnm=arrRtn[1];
        		this.doctschdDiv.empNmEd.set_value(arrRtn[1]);
        		this.doctschdDiv.deptNmEd.set_value(arrRtn[2]);
        		alert(empnm);
        		this.dsService.setColumn(3,"argument","empNo="+empno);
        		this.gfnService("findTrmtTypeList"); //진료일정타입 조회
        		this.findTrmtSchd();
        		this.findApplyHistory();
        		}

        	
        }

        /********************************************************************************
        @Description 	type적용이력 가져오기
        ********************************************************************************/

        this.findApplyHistory = function()
        {
        	if(empno==null||empno==undefined)
        		return;
        	this.dsService.setColumn(7,"argument","empNo="+empno);
        	this.gfnService("findApplyHistoryList"); //날짜조회
        	//trace(this.dsApplyHistory.saveXML());

        
        }

        /********************************************************************************
        @Description 	스케줄 조회
        ********************************************************************************/

        this.findTrmtSchd = function (){
        	 var year=this.doctschdDiv.Div01.stYear.text;
        	var month=this.doctschdDiv.Div01.stMonth.text;
        	var yearMonth=year+""+month;
        	alert(yearMonth);
        	var param="empNo="+empno+" yearMonth="+yearMonth;
        	this.dsService.setColumn(6,"argument",param);
            this.gfnService("findTrmtSchdList");//진료일정 조회
        }

        /********************************************************************************
        @Description 	allCheckBox이벤트
        ********************************************************************************/
        //전체
        this.allCheckBox_onchanged = function(obj,e)
        {
        	var addedrow=this.dsTrmtSchdType.rowposition;
        	if(addedrow==-1)
        		return;
        	if(obj.value==0)
        		this.dayCheckChange(addedrow,"0");
        	else
        		this.dayCheckChange(addedrow,"1");
        }

        /********************************************************************************
        @Description 	월~일 체크박스 체인지
        ********************************************************************************/

        this.dayCheckChange = function (addedrow,value){
        	this.dsTrmtSchdType.setColumn(addedrow,"sun",value);
        	this.dsTrmtSchdType.setColumn(addedrow,"mon",value);
        	this.dsTrmtSchdType.setColumn(addedrow,"tue",value);
        	this.dsTrmtSchdType.setColumn(addedrow,"wed",value);
        	this.dsTrmtSchdType.setColumn(addedrow,"thurs",value);
        	this.dsTrmtSchdType.setColumn(addedrow,"fri",value);
        	this.dsTrmtSchdType.setColumn(addedrow,"sat",value);
        }

        /********************************************************************************
        @Description 	타임 입력시 숫자만 입력하도록 이벤트
        ********************************************************************************/

        this.timeMaskEdt_onkeydown = function(obj,e)
        {
        	var keycode=e.keycode;
        	if(keycode<48||keycode>57)
        		return;
        }

        /********************************************************************************
        @Description 	간격 총원 입력시 숫자만 입력하도록 이벤트
        ********************************************************************************/

        this.edt_onkeydown = function(obj,e)
        {
        	var keycode=e.keycode;
        	if(keycode<48||keycode>57)
        		return;
        }

        /********************************************************************************
        @Description 	상세기준 생성
        ********************************************************************************/
        //확인버튼
        this.createDeatailTypeBtn_onclick = function(obj,e)
        {
        	this.dsTrmtSchdTypeDetailFM.deleteAll();
        	this.dsTrmtSchdTypeDetailAM.deleteAll();
        	this.trmtStandard.deleteAll();
        	var typeRow=this.dsTrmtSchdType.rowposition;
        	//alert("타입로우"+typeRow)
        	if(typeRow==-1)
        		return;
        	var typenm=this.dsTrmtSchdType.getColumn(typeRow,"trmtTypeNm");	
        	var typeno=this.dsTrmtSchdType.getColumn(typeRow,"trmtTypeNo");
        	alert(typenm + typeno)
        	if(typenm==undefined || typenm==""){
        		alert("타입명을 먼저 기입해주세요");
        		return;
        	}
        	var checkam=this.dsTrmtSchdType.getColumn(typeRow,"amUseYn");
        	var checkfm=this.dsTrmtSchdType.getColumn(typeRow,"fmUseYn");
        	var arr=new Array();
        	var index=0;
        	var checksun=this.dsTrmtSchdType.getColumn(typeRow,"sun");
        	var checkmon=this.dsTrmtSchdType.getColumn(typeRow,"mon");
        	var checktue=this.dsTrmtSchdType.getColumn(typeRow,"tue");
        	var checkwed=this.dsTrmtSchdType.getColumn(typeRow,"wed");
        	var checkthurs=this.dsTrmtSchdType.getColumn(typeRow,"thurs");
        	var checkfri=this.dsTrmtSchdType.getColumn(typeRow,"fri");
        	var checksat=this.dsTrmtSchdType.getColumn(typeRow,"sat");
        	if(checksun=="1"){
        		arr[index]=1;
        		var row=this.trmtStandard.addRow();
        		this.trmtStandard.setColumn(row,"day","1");
        	

        		index++;
        	}
        	if(checkmon=="1"){
        		arr[index]=2;
        		var row=this.trmtStandard.addRow();
        		this.trmtStandard.setColumn(row,"day","2");
        		index++;
        	}
        	if(checktue=="1"){
        		arr[index]=3;
        		var row=this.trmtStandard.addRow();
        		this.trmtStandard.setColumn(row,"day","3");
        		index++;
        	}
        	if(checkwed=="1"){
        		arr[index]=4;
        		var row=this.trmtStandard.addRow();
        		this.trmtStandard.setColumn(row,"day","4");
        		index++;
        	}
        	if(checkthurs=="1"){
        		arr[index]=5;
        		var row=this.trmtStandard.addRow();
        		this.trmtStandard.setColumn(row,"day","5");
        		index++;
        	}
        	if(checkfri=="1"){
        		arr[index]=6;
        		var row=this.trmtStandard.addRow();
        		this.trmtStandard.setColumn(row,"day","6");
        		index++;
        	}
        	if(checksat=="1"){
        		arr[index]=7;
        		var row=this.trmtStandard.addRow();
        		this.trmtStandard.setColumn(row,"day","7");
        		index++;
        	}
        	if(checkam=="1")
        		this.createAmGrid(arr);
        	if(checkfm=="1")
        		this.createFmGrid(arr);
        		
        	this.detailFilter();
        	
        	//this.Grid00.setCellProperty("Body", 2, "expr", "expr:comp.parent.dsTrmtSchdTypeDetailFM.getColumn(row2, '2')");
        }

        /********************************************************************************
        @Description 	am fm 필터
        ********************************************************************************/

        this.detailFilter = function(){
        	var day=this.trmtStandard.getColumn(this.trmtStandard.rowposition,"day");
        	alert("데이"+day)
        	var trmtno=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"trmtTypeNo");
        	this.dsTrmtSchdTypeDetailAM.filter("dayOfWeek=='"+day+"' && trmtTypeNo=='"+trmtno+"'");
        	this.dsTrmtSchdTypeDetailFM.filter("dayOfWeek=='"+day+"' && trmtTypeNo=='"+trmtno+"'");
        }

        /********************************************************************************
        @Description 	am생성
        ********************************************************************************/

        this.createAmGrid = function(arr)
         {
        	var len = arr.length;
        	var statTime=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"amStime");
        	var endTime=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"amEtime");
        	var intv=parseInt(this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"amIntv"));
        	if(intv==undefined || intv>60 || intv==0){
        		alert("오전 간격을 수정하십시오");
        		return;
        	}
        	var shour=parseInt(statTime.substr(0,2));
        	var smi=parseInt(statTime.substr(2,2));
        	var ehour=parseInt(endTime.substr(0,2));
        	var emi=parseInt(endTime.substr(2,2));
        	if(shour==undefined || shour>12){
        		alert("오전시작시간을 수정하십시오 0~12");
        		return;
        	}
        	if(ehour==undefined || ehour>12){
        		alert("오전종료시간을 수정하십시오 0~12");
        		return;
        	}
        	if(smi==undefined || smi>60){
        		alert("오전시작 분을 수정하십시오 0~60");
        		return;
        	}
        	if(emi==undefined || emi>60){
        		alert("오전종료 분을 수정하십시오 0~60");
        		return;
        	}
        	var startTime=(shour*60)+smi;
        	var worktime = (ehour*60)+emi-(shour*60)-smi;
        	
        	if(worktime<0 || worktime==0){
        		alert("오전시간설정을 다시 시작해주세용");
        		return;
        	}
        	var handle = this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"amHandle");
        	var trmtTypeNo = this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"trmtTypeNo");
        	if(handle==undefined||handle==""){
        		alert("총원을 설정해주세요");
        		return;
        	}
        	for(var i=0;i<len;i++){
        		for(var incresedTime=0;incresedTime<worktime;incresedTime+=intv){
        			var uptime=startTime+incresedTime;
        			var hour=Math.floor(uptime/60);
        			var mi=uptime%60;
        			
        			var strHour=(hour+"").padLeft(2, "0");
        			var strMi=(mi+"").padLeft(2, "0");
        			var hourmi=strHour+strMi;
        			var amrow=this.dsTrmtSchdTypeDetailAM.addRow();
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"dayOfWeek",arr[i]);
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"time",hourmi);
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"trmtTypeNo",trmtTypeNo);
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"amFmDiv","오전");
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"handle",handle);
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"diffDeptReser","0");
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"empNo",empno);
        		}
        	}
         }

         /********************************************************************************
        @Description 	fm 생성
        ********************************************************************************/

        this.createFmGrid = function (arr)
        {
        	var len = arr.length;
        	var statTime=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"fmStime");
        	var endTime=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"fmEtime");
        	var intv=parseInt(this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"fmIntv"));
        	if(intv==undefined || intv>60 || intv==0){
        		alert("오후 간격을 수정하십시오");
        		return;
        	}
        	var shour=parseInt(statTime.substr(0,2));
        	var smi=parseInt(statTime.substr(2,2));
        	var ehour=parseInt(endTime.substr(0,2));
        	var emi=parseInt(endTime.substr(2,2));
        	if(shour==undefined || shour>23 || shour<12){
        		alert("오후시작시간을 수정하십시오 12~24");
        		return;
        	}
        	if(ehour==undefined || ehour>24 || ehour<12){
        		alert("오후종료시간을 수정하십시오 12~24");
        		return;
        	}
        	if(smi==undefined || smi>60){
        		alert("오후시작 분을 수정하십시오 0~60");
        		return;
        	}
        	if(emi==undefined || emi>60){
        		alert("오후종료 분을 수정하십시오 0~60");
        		return;
        	}
        	var startTime=(shour*60)+smi;
        	var worktime = (ehour*60)+emi-(shour*60)-smi;
        	
        	if(worktime<0 || worktime==0){
        		alert("오전시간설정을 다시 시작해주세용");
        		return;
        	}
        	var handle = this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"fmHandle");
        	var trmtTypeNo = this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"trmtTypeNo");
        	if(handle==undefined||handle==""){
        		alert("총원을 설정해주세요");
        		return;
        	}
        	for(var i=0;i<len;i++){
        		for(var incresedTime=0;incresedTime<worktime;incresedTime+=intv){
        			var uptime=startTime+incresedTime;
        			var hour=Math.floor(uptime/60);
        			var mi=uptime%60;
        			
        			var strHour=(hour+"").padLeft(2, "0");
        			var strMi=(mi+"").padLeft(2, "0");
        			var hourmi=strHour+strMi;
        			var amrow=this.dsTrmtSchdTypeDetailFM.addRow();
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"dayOfWeek",arr[i]);
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"time",hourmi);
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"trmtTypeNo",trmtTypeNo);
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"amFmDiv","오후");
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"handle",handle);
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"diffDeptReser","0");
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"empNo",empno);
        		}
        	}

        }

        /********************************************************************************
        @Description 	clear버튼 클릭 시 이벤트
        ********************************************************************************/
        //요일 초기화
        this.deleteAllDetailBtn_onclick = function(obj,e)
        {
        	this.dsTrmtSchdTypeDetailFM.deleteAll();
        	this.dsTrmtSchdTypeDetailAM.deleteAll();
        	this.trmtStandard.deleteAll();
        }

        /********************************************************************************
        @Description 	그리드 클릭시 필터
        ********************************************************************************/
        //진료별 상세 기준 그리드
        this.dayGrid_oncellclick = function(obj,e)
        {
        	this.detailFilter();
        }

        /********************************************************************************
        @Description 	type베치
        ********************************************************************************/

        this.saveTrmtTypeBtn_onclick = function(obj,e)
        {
            
        	this.gfnService("batchTrmtTypeProcess");
        	trace(this.dsTrmtSchdType.saveXML());
        }

        /********************************************************************************
        @Description 	type삭제
        ********************************************************************************/

        this.delTypeBtn_onclick = function(obj,e)
        {
        	this.dsTrmtSchdType.deleteRow(this.dsTrmtSchdType.rowposition);
        }

        
        /********************************************************************************
        @Description 	type선택시 필터
        ********************************************************************************/

        this.typeGrid_oncellclick = function(obj,e)
        {
        	this.allfilter();
        }

        /********************************************************************************
        @Description 	type을 실 일정에 적용
        ********************************************************************************/

        this.applyTypeBtn_onclick = function(obj,e)
        {
        	var typeNo=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"trmtTypeNo");
        	alert(typeNo)
        	var sday=this.doctschdDiv.sdayCal.value;
        	alert(sday)
        	var eday=this.doctschdDiv.edayCal.value;
        	if(sday>=eday){
        		alert("기간설정을 다시해주세요");
        		return;
        	}
        	if(sday==undefined||eday==undefined){
        		alert("기간설정을 다시해주세요");
        		return;
        	}
        	if(typeNo==undefined){
        		alert("타입을 선택하여 적용하십시오");
        		return;
        	}
        	var param="sday="+sday+" eday="+eday+" typeNo="+typeNo+" empNo="+empno;
        	this.dsService.setColumn(4,"argument",param);
        	this.gfnService("applyType");
        	
        }

        /********************************************************************************
        @Description 	폼 온로드시 이벤트
        ********************************************************************************/
        this.MB_DoctTrmtSchdMngntForm_onload = function(obj,e)
        {
        		var gdsEmpNo = application.gdsEmp.getColumn(0, "empNo");
        		//alert(gdsEmpNo+"gdsEmpNo");
        		var argument = 'gdsEmpNo='+gdsEmpNo;
        		this.dsService.setColumn(8,"argument",argument);
        		this.gfnService("findDoctResptMsgList", false);
        		
        	if(this.dsCfrnTrmt.rowcount==0){
                    alert("조건에 맞는 회신 결과가 없습니다.");
                    this.cfrnTrmtRespBtn.set_visible(false);
                 }else{
        			alert("되는가?");
                    this.cfrnTrmtRespBtn.set_visible(true);
         
                    }
             

        	
        	var yearMonth=this.gfnDate("yyyymm");
        	var year=yearMonth.substr(0,4);
        	var month=yearMonth.substr(4,2);
        	this.doctschdDiv.Div01.stYear.set_text(year);
        	this.doctschdDiv.Div01.stMonth.set_text(month);
        	this.dsService.setColumn(5,"argument","yearMonth="+yearMonth);
        	
        	this.gfnService("findCalendarList");

        }

        /********************************************************************************
        @Description 	달력 변화이벤트
        ********************************************************************************/

        this.Div01_btnLettMonth_onclick = function(obj,e)
        {
        	var year=parseInt(this.doctschdDiv.Div01.stYear.text);
        	var month=parseInt(this.doctschdDiv.Div01.stMonth.text);
        	if(month==1){
        		year=year-1;
        		month=12
        	}else{
        		month=month-1;
        	}
        	year=year+"";
        	month=(month+"").padLeft(2,"0");
        	var ymstr=year+month;
        	this.doctschdDiv.Div01.stYear.set_text(year);
        	this.doctschdDiv.Div01.stMonth.set_text(month);
        	this.dsService.setColumn(5,"argument","yearMonth="+ymstr);
        	this.gfnService("findCalendarList");
        	if(empno!=null||empno!=undefined){
        		this.findTrmtSchd();
        	}
        }

        /********************************************************************************
        @Description 	달력 변화 이벤트
        ********************************************************************************/

        this.Div01_btnRightMonth_onclick = function(obj,e)
        {
        	var year=parseInt(this.doctschdDiv.Div01.stYear.text);
        	var month=parseInt(this.doctschdDiv.Div01.stMonth.text);
        	if(month==12){
        		year=year+1;
        		month=1
        	}else{
        		month=month+1;
        	}
        	year=year+"";
        	month=(month+"").padLeft(2,"0");
        	var ymstr=year+month;
        	this.doctschdDiv.Div01.stYear.set_text(year);
        	this.doctschdDiv.Div01.stMonth.set_text(month);
        	this.dsService.setColumn(5,"argument","yearMonth="+ymstr);
        	this.gfnService("findCalendarList");
        	if(empno!=null||empno!=undefined){
        		this.findTrmtSchd();
        	}
        }

        /********************************************************************************
        @Description 	달력 클릭시 일정 필터
        ********************************************************************************/

        this.Div01_calendarGrid_oncellclick = function(obj,e)
        {
        	
        	var day=obj.getCellText(e.row,e.col);
        	var year=this.doctschdDiv.Div01.stYear.text;
        	var month=this.doctschdDiv.Div01.stMonth.text;
        	var date=year+""+month+day;
        	//alert(date)
        	this.dsTrmtSchd.filter("day=='"+date+"'");
        	trace(this.dsTrmtSchd.saveXML());
        }

        

        

        this.cfrnTrmtRespBtn_onclick = function(obj,e)
        {
          application.open("MQ_CfrnTrmtRespForm","med::MQ_CfrnTrmtRespForm.xfdl",this.parent,{},"showtitlebar=true showstatusbar=false", 0, 0, 800, 443, this);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.MB_DoctTrmtSchdMngntForm_onload, this);
            this.doctschdDiv.saveTrmtTypeBtn.addEventHandler("onclick", this.saveTrmtTypeBtn_onclick, this);
            this.doctschdDiv.typeGrid.addEventHandler("oncellclick", this.typeGrid_oncellclick, this);
            this.doctschdDiv.stDiv01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.doctschdDiv.stDiv02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.doctschdDiv.stDiv03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.doctschdDiv.amStimeMaskEdt.addEventHandler("onkeydown", this.timeMaskEdt_onkeydown, this);
            this.doctschdDiv.fmStimeMaskEdt.addEventHandler("onkeydown", this.timeMaskEdt_onkeydown, this);
            this.doctschdDiv.amEtimeMaskEdt.addEventHandler("onkeydown", this.timeMaskEdt_onkeydown, this);
            this.doctschdDiv.fmEtimeMaskEdt.addEventHandler("onkeydown", this.timeMaskEdt_onkeydown, this);
            this.doctschdDiv.stDiv04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.doctschdDiv.AMintvEdt.addEventHandler("onkeydown", this.edt_onkeydown, this);
            this.doctschdDiv.FMintvEdt.addEventHandler("onkeydown", this.edt_onkeydown, this);
            this.doctschdDiv.stDiv05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.doctschdDiv.AMhandleEdt.addEventHandler("onkeydown", this.edt_onkeydown, this);
            this.doctschdDiv.FMhandleEdt.addEventHandler("onkeydown", this.edt_onkeydown, this);
            this.doctschdDiv.stDiv06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.doctschdDiv.Div01.btnRightMonth.addEventHandler("onclick", this.Div01_btnRightMonth_onclick, this);
            this.doctschdDiv.Div01.btnLettMonth.addEventHandler("onclick", this.Div01_btnLettMonth_onclick, this);
            this.doctschdDiv.Div01.calendarGrid.addEventHandler("oncellclick", this.Div01_calendarGrid_oncellclick, this);
            this.doctschdDiv.Div00.allCheckBox.addEventHandler("onchanged", this.allCheckBox_onchanged, this);
            this.doctschdDiv.Div00.Div02.allCheckBox.addEventHandler("onchanged", this.allCheckBox_onchanged, this);
            this.doctschdDiv.Div00.Div02.allCheckBox00.addEventHandler("onchanged", this.allCheckBox_onchanged, this);
            this.doctschdDiv.searchEmpBtn.addEventHandler("onclick", this.searchEmpBtn_onclick, this);
            this.doctschdDiv.stDiv00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.doctschdDiv.stDiv14.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.doctschdDiv.typeAddBtn.addEventHandler("onclick", this.typeAddBtn_onclick, this);
            this.doctschdDiv.delTypeBtn.addEventHandler("onclick", this.delTypeBtn_onclick, this);
            this.doctschdDiv.createDeatailTypeBtn.addEventHandler("onclick", this.createDeatailTypeBtn_onclick, this);
            this.doctschdDiv.deleteAllDetailBtn.addEventHandler("onclick", this.deleteAllDetailBtn_onclick, this);
            this.doctschdDiv.DelBtn03.addEventHandler("onclick", this.applyTypeBtn_onclick, this);
            this.doctschdDiv.Div02.allCheckBox.addEventHandler("onchanged", this.allCheckBox_onchanged, this);
            this.doctschdDiv.Div02.Div02.allCheckBox.addEventHandler("onchanged", this.allCheckBox_onchanged, this);
            this.doctschdDiv.Div02.Div02.allCheckBox00.addEventHandler("onchanged", this.allCheckBox_onchanged, this);
            this.doctschdDiv.Div02.allCheckBox00.addEventHandler("onchanged", this.allCheckBox_onchanged, this);
            this.Grid00.addEventHandler("oncellclick", this.dayGrid_oncellclick, this);
            this.cfrnTrmtRespBtn.addEventHandler("onclick", this.cfrnTrmtRespBtn_onclick, this);

        };

        this.loadIncludeScript("MB_DoctTrmtSchdMngntForm.xfdl");

       
    };
}
)();

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
                this.set_name("MR_SurgBookInsertForm");
                this.set_classname("MP_SurgBookInsertForm");
                this.set_titletext("수술예약 팝업");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurgTypeDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">정규</Col></Row><Row><Col id=\"value\">응급</Col></Row><Row><Col id=\"value\">재수술</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAnsthsTypeDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">전신</Col></Row><Row><Col id=\"value\">부위</Col></Row><Row><Col id=\"value\">극소</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMpSurgBook", this);
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"undefined\" size=\"100\"/><Column id=\"patType\" type=\"undefined\" size=\"100\"/><Column id=\"remark\" type=\"undefined\" size=\"100\"/><Column id=\"surgHour\" type=\"undefined\" size=\"100\"/><Column id=\"surgDoc3\" type=\"undefined\" size=\"100\"/><Column id=\"surgPrep\" type=\"undefined\" size=\"100\"/><Column id=\"surgNo\" type=\"undefined\" size=\"100\"/><Column id=\"subSurgNm\" type=\"undefined\" size=\"100\"/><Column id=\"bookDate\" type=\"undefined\" size=\"100\"/><Column id=\"surgType\" type=\"undefined\" size=\"100\"/><Column id=\"patNm\" type=\"undefined\" size=\"100\"/><Column id=\"surgDoc2\" type=\"undefined\" size=\"100\"/><Column id=\"surgDoc1\" type=\"undefined\" size=\"100\"/><Column id=\"apprvYn\" type=\"undefined\" size=\"100\"/><Column id=\"bookTime\" type=\"undefined\" size=\"100\"/><Column id=\"beforeSurgDiagn2\" type=\"undefined\" size=\"100\"/><Column id=\"beforeSurgDiagn1\" type=\"undefined\" size=\"100\"/><Column id=\"surgBodyPosi\" type=\"undefined\" size=\"100\"/><Column id=\"ansthsType\" type=\"undefined\" size=\"100\"/><Column id=\"mainSurgNm\" type=\"undefined\" size=\"100\"/><Column id=\"surgRoomNo\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatTypeDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">시각장애</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">청각장애</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">정신장애</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">기타장애</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSurgBodyPosiDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">양와위</Col></Row><Row><Col id=\"value\">쇄석위</Col></Row><Row><Col id=\"value\">우측위</Col></Row><Row><Col id=\"value\">좌측위</Col></Row><Row><Col id=\"value\">좌위</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYN", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">batchMpSurgBookProcess</Col><Col id=\"inData\">dsMpSurgBook=dsMpSurgBook:U</Col><Col id=\"URL\">his::med/recipe/batchMpSurgBookProcess.do</Col><Col id=\"outData\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findMpSurgBookList</Col><Col id=\"URL\">his::med/recipe/findMpSurgBookList.do</Col><Col id=\"inData\">dsSearchCondition=dsSearchCondition</Col><Col id=\"outData\">dsMpSurgBook=dsMpSurgBook</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSurgRoomDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">surgRoom1</Col><Col id=\"value\">수술방1</Col></Row><Row><Col id=\"code\">surgRoom2</Col><Col id=\"value\">수술방2</Col></Row><Row><Col id=\"code\">surgRoom3</Col><Col id=\"value\">수술방3</Col></Row><Row><Col id=\"code\">surgRoom4</Col><Col id=\"value\">수술방4</Col></Row><Row><Col id=\"code\">surgRoom5</Col><Col id=\"value\">수술방5</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSearchCondition", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"tableName\" type=\"STRING\" size=\"256\"/><Column id=\"columnName\" type=\"STRING\" size=\"256\"/><Column id=\"columnValue\" type=\"STRING\" size=\"256\"/><Column id=\"operator\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0.68%", "2", null, "60", "63.38%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::miniTitleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "14.4%", "5", null, "46", "15.22%", null, this.Div06);
            obj.getSetter("taborder").set("0");
            obj.set_text("수술 예약 등록");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div06.addChild(obj.name, obj);

            obj = new Div("taxinvDiv", "absolute", "0.68%", "73", null, "683", "1.95%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("stDiv01", "absolute", "1.01%", "23", null, "27", "84.02%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("수술 예약일");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Calendar("bookDateEd", "absolute", "16.88%", "22", null, "30", "65.23%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj = new Static("subCodeStc00", "absolute", "35.78%", "24", null, "27", "52.66%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("2");
            obj.set_text("수술실");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Combo("surgRoomCombo", "absolute", "48.24%", "22", null, "28", "35.68%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@dsSurgRoomDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Static("stDiv02", "absolute", "68.54%", "24", null, "27", "19.6%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("4");
            obj.set_text("수술 번호");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Edit("surgNoEd", "absolute", "81.21%", "22", null, "30", "0.7%", null, this.taxinvDiv);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv21", "absolute", "1.21%", "58", null, "27", "88.54%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("6");
            obj.set_text("예약시간(시)");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv07", "absolute", "21.91%", "59", null, "27", "67.84%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("8");
            obj.set_text("수술 시간");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Edit("surgHour", "absolute", "33.37%", "57", null, "30", "58.79%", null, this.taxinvDiv);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv05", "absolute", "1.21%", "107", null, "27", "86.93%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("10");
            obj.set_text("담당의 성명");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Edit("surgDoc1Ed", "absolute", "13.87%", "105", null, "30", "67.94%", null, this.taxinvDiv);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv14", "absolute", "1.21%", "141", null, "27", "89.15%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("12");
            obj.set_text("수술의1");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Edit("surgDoc2Ed", "absolute", "11.86%", "140", null, "30", "72.46%", null, this.taxinvDiv);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv15", "absolute", "34.17%", "141", null, "27", "55.98%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("14");
            obj.set_text("수술의2");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Edit("surgDoc3Ed", "absolute", "45.13%", "140", null, "30", "39.3%", null, this.taxinvDiv);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv08", "absolute", "1.01%", "177", null, "27", "84.02%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("16");
            obj.set_text("수술전 진단명");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Edit("beforeSurgDiagn1Ed", "absolute", "16.88%", "176", null, "30", "64.92%", null, this.taxinvDiv);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv10", "absolute", "42.41%", "177", null, "27", "42.71%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("18");
            obj.set_text("수술전 진단명2");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Edit("beforeSurgDiagn2Ed", "absolute", "58.19%", "176", null, "30", "23.62%", null, this.taxinvDiv);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv9", "absolute", "1.01%", "227", null, "27", "86.93%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("20");
            obj.set_text("환자등록번호");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "13.97%", "225", null, "30", "70.65%", null, this.taxinvDiv);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv04", "absolute", "30.55%", "227", null, "27", "58.19%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("22");
            obj.set_text("환자 종류");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Combo("patTypeCombo", "absolute", "42.81%", "228", null, "25", "42.11%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_innerdataset("@dsPatTypeDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");
            obj = new Static("stDiv03", "absolute", "59.4%", "227", null, "27", "27.04%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("24");
            obj.set_text("환자 성명");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "73.87%", "225", null, "30", "9.35%", null, this.taxinvDiv);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv06", "absolute", "1.01%", "279", null, "27", "85.83%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("26");
            obj.set_text("수술 종류");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Combo("surgTypeCombo", "absolute", "15.38%", "280", null, "25", "69.65%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_innerdataset("@dsSurgTypeDiv");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");
            obj = new Static("stDiv11", "absolute", "1.21%", "316", null, "27", "85.73%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("28");
            obj.set_text("수술명");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Edit("mainSurgNmEd", "absolute", "15.28%", "314", null, "30", "66.63%", null, this.taxinvDiv);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv12", "absolute", "42.21%", "316", null, "27", "44.62%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("30");
            obj.set_text("부 수술명");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Edit("subSurgNmEd", "absolute", "56.38%", "315", null, "30", "25.43%", null, this.taxinvDiv);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv13", "absolute", "1.01%", "353", null, "27", "85.73%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("32");
            obj.set_text("마취 종류");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Combo("ansthsTypeCombo", "absolute", "15.18%", "354", null, "25", "69.75%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_innerdataset("@dsAnsthsTypeDiv");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");
            obj = new Static("stDiv17", "absolute", "33.87%", "355", null, "27", "53.07%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("34");
            obj.set_text("수술체위");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Combo("surgBodyPosiCombo", "absolute", "48.24%", "356", null, "25", "36.68%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_innerdataset("@dsSurgBodyPosiDiv");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");
            obj = new Static("stDiv19", "absolute", "1.01%", "408", null, "27", "84.02%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("36");
            obj.set_text("수술준비 사항");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new TextArea("surgPrepTa", "absolute", "17.49%", "408", null, "70", "1.91%", null, this.taxinvDiv);
            obj.set_taborder("37");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv20", "absolute", "1.21%", "485", null, "27", "83.92%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("38");
            obj.set_text("적요");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new TextArea("remarkTa", "absolute", "17.49%", "485", null, "70", "1.91%", null, this.taxinvDiv);
            obj.set_taborder("39");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Static("stDiv00", "absolute", "68.24%", "563", null, "27", "18.69%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("40");
            obj.set_text("수술여부");
            obj.set_wordwrap("char");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Combo("apprvYnCombo", "absolute", "82.71%", "564", null, "25", "2.21%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_value("N");
            obj.set_text("N");
            obj.set_innerdataset("@dsYN");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.set_index("1");
            obj.getSetter("class").set("AreaCombo");
            obj = new Button("searchMainSurgNmBtn", "absolute", "33.77%", "313", null, "32", "63.02%", null, this.taxinvDiv);
            obj.set_taborder("42");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Button("searchSurgDoc1Btn", "absolute", "32.96%", "105", null, "32", "63.82%", null, this.taxinvDiv);
            obj.set_taborder("43");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Button("searchSurgDoc2Btn", "absolute", "28.14%", "137", null, "32", "68.64%", null, this.taxinvDiv);
            obj.set_taborder("44");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Button("searchBeforeSurgDiagn1Btn", "absolute", "35.38%", "177", null, "32", "61.41%", null, this.taxinvDiv);
            obj.set_taborder("45");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Button("searchSurgDoc3Btn", "absolute", "61.11%", "137", null, "32", "35.68%", null, this.taxinvDiv);
            obj.set_taborder("46");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Button("searchBeforeSurgDiagn2Btn", "absolute", "77.19%", "177", null, "32", "19.6%", null, this.taxinvDiv);
            obj.set_taborder("47");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Button("searchPatBtn", "absolute", "90.85%", "225", null, "32", "5.93%", null, this.taxinvDiv);
            obj.set_taborder("48");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Button("searchSubSurgNmBtn", "absolute", "74.77%", "313", null, "32", "22.01%", null, this.taxinvDiv);
            obj.set_taborder("49");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Edit("bookTimeEd", "absolute", "12.36%", "57", null, "30", "79.7%", null, this.taxinvDiv);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.taxinvDiv.addChild(obj.name, obj);

            obj = new Button("allBtn", "absolute", "84.38%", "696", null, "32", "4.88%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("transparent URL('img::miniTitleBar1.jpg')");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1228, 45, this.taxinvDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.taxinvDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MP_SurgBookInsertForm");
            		p.set_titletext("수술예약 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item24","taxinvDiv.bookTimeEd","value","dsMpSurgBook","bookTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div01.bookDateEd","value","dsMpSurgBook","bookDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Div01.surgRoomCombo","value","dsMpSurgBook","surgRoomNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div01.surgNoEd","value","dsMpSurgBook","surgNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div01.bookTimeEd","value","dsMpSurgBook","bookTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div01.surgHour","value","dsMpSurgBook","surgHour");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div01.surgDoc1Ed","value","dsMpSurgBook","surgDoc1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div01.surgDoc2Ed","value","dsMpSurgBook","surgDoc2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div01.surgDoc3Ed","value","dsMpSurgBook","surgDoc3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div01.beforeSurgDiagn1Ed","value","dsMpSurgBook","beforeSurgDiagn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div01.beforeSurgDiagn2Ed","value","dsMpSurgBook","beforeSurgDiagn2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div01.patNoEd","value","dsMpSurgBook","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div01.patTypeCombo","value","dsMpSurgBook","patType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div01.patNmEd","value","dsMpSurgBook","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div01.surgTypeCombo","value","dsMpSurgBook","surgType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div01.mainSurgNmEd","value","dsMpSurgBook","mainSurgNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div01.subSurgNmEd","value","dsMpSurgBook","subSurgNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div01.ansthsTypeCombo","value","dsMpSurgBook","ansthsType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div01.surgBodyPosiCombo","value","dsMpSurgBook","surgBodyPosi");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div01.surgPrepTa","value","dsMpSurgBook","surgPrep");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div01.remarkTa","value","dsMpSurgBook","remark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Div01.apprvYnCombo","value","dsMpSurgBook","apprvYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","taxinvDiv.bookDateEd","value","dsMpSurgBook","bookDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","taxinvDiv.surgRoomCombo","value","dsMpSurgBook","surgRoomNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","taxinvDiv.surgNoEd","value","dsMpSurgBook","surgNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","taxinvDiv.surgHour","value","dsMpSurgBook","surgHour");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","taxinvDiv.surgDoc1Ed","value","dsMpSurgBook","surgDoc1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","taxinvDiv.surgDoc2Ed","value","dsMpSurgBook","surgDoc2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","taxinvDiv.beforeSurgDiagn1Ed","value","dsMpSurgBook","beforeSurgDiagn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","taxinvDiv.surgDoc3Ed","value","dsMpSurgBook","surgDoc3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","taxinvDiv.beforeSurgDiagn2Ed","value","dsMpSurgBook","beforeSurgDiagn2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","taxinvDiv.patNmEd","value","dsMpSurgBook","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","taxinvDiv.patTypeCombo","value","dsMpSurgBook","patType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","taxinvDiv.patNoEd","value","dsMpSurgBook","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","taxinvDiv.surgTypeCombo","value","dsMpSurgBook","surgType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","taxinvDiv.mainSurgNmEd","value","dsMpSurgBook","mainSurgNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","taxinvDiv.subSurgNmEd","value","dsMpSurgBook","subSurgNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","taxinvDiv.surgBodyPosiCombo","value","dsMpSurgBook","surgBodyPosi");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","taxinvDiv.ansthsTypeCombo","value","dsMpSurgBook","ansthsType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","taxinvDiv.surgPrepTa","value","dsMpSurgBook","surgPrep");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","taxinvDiv.remarkTa","value","dsMpSurgBook","remark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","taxinvDiv.apprvYnCombo","value","dsMpSurgBook","apprvYn");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MR_SurgBookInsertForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("MR_SurgBookInsertForm.xfdl", "scripts::commonBind.xjs");
        this.addIncludeScript("MR_SurgBookInsertForm.xfdl", "scripts::wonScripts.xjs");
        this.addIncludeScript("MR_SurgBookInsertForm.xfdl", "scripts::commonPopup.xjs");
        this.addIncludeScript("MR_SurgBookInsertForm.xfdl", "scripts::supScript.xjs");
        this.registerScript("MR_SurgBookInsertForm.xfdl", function() {
         /********************************************************************************
        *                                                                               *
        * 				            												    *
        *                                                                               *
        * @Path		    수술 예약 관리 팝업   							                 	*
        * @Description  수술 예약 관리 팝업							 	                *
        * 																				*
        *																				*
        * @Author	 류재춘    					                             		*
        * 									                                            *
        * Created on 2016. 06. 13                             		                    *
        *									                                            *
        ********************************************************************************/
        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/
        //include "scripts::commonTransaction.xjs"; 
        //include "scripts::commonBind.xjs";
        //include "scripts::wonScripts.xjs";
        //include "scripts::commonPopup.xjs";
        //include "scripts::supScript.xjs";

        /********************************************************************************
          로드 함수
        ********************************************************************************/
        this.No = function ()
        {
        	var sToday = "";
            var objDate = new Date();
            var sToday  = objDate.getFullYear() + "";
            var sMonth = objDate.getMonth()+1;
            var sDate = objDate.getDate();
            var sHours = objDate.getHours();
            var sMinutes = objDate.getMinutes();
            var sSeconds = objDate.getSeconds();
            
            if(sMonth.toString().length == 1){
        		sMonth = "0" + sMonth;
            }
        	if(sDate.toString().length == 1){
        		sDate = "0" + sDate;
            }
            sNo = sToday+sMonth+sDate+sHours+sMinutes+sSeconds;
            return sNo;
        }

        

        this.MP_SurgBookInsertForm_onload = function(obj,e)
        {
        var objDate = new Date();
            //var sDate = this.toFormatString(objDate,"%Y%m%d");//원래는 이렇게있었다 이렇게 위에다가 선언안하고 여기 적으면 아래서 사용못다고 여기함수부분 다른 실행부분도  다 실행안된다 	                                                                                                                                               
             /*   sDate = this.toFormatString(objDate,"Ymd"); //"Y"+"m"+"d"이렇게 적어도되고 앞처럼적어도되고  현재 또는 지정한 로케일, 지정한 형식의 문자열로 변환된 날짜를 반환합니다
                sYear = this.toFormatString(objDate,"Y");  //alert(sYear);     alert(sDate);
                this.taxinvDiv.bookDateEd.set_value(sDate);  //년도넣는곳에 지금의 년도를 미리 넣어둔다 
        */

        	if(this.opener.insertOrUpdate == "insert"){
        	alert("인설트");
        		var surgRoomNo = this.opener.timeDiv.titleBarDiv.surgRoomCombo.value;
        		var bookDate = this.opener.timeDiv.titleBarDiv.surgeDayCal.value;
        		var bookTime = this.opener.timeDiv.startTimeEd.value;
        		var surgHour = this.opener.timeDiv.surgeTimeEd.value;

        		this.dsMpSurgBook.addRow();
        		this.dsMpSurgBook.setColumn(0,"bookDate", bookDate);
        		this.dsMpSurgBook.setColumn(0,"surgRoomNo",surgRoomNo);
        		this.dsMpSurgBook.setColumn(0,"bookTime",bookTime);
        		this.dsMpSurgBook.setColumn(0,"surgHour",surgHour);
        		this.dsMpSurgBook.setColumn(0,"surgNo", this.No());
        	
        	}else if(this.opener.insertOrUpdate == "update"){
        	alert("업데이트");
        		var surgNo = this.opener.surgNo;
        		if(surgNo != null){
        			var row2 = this.dsSearchCondition.addRow();
        			this.dsSearchCondition.setColumn(row2,"tableName","MP_SURG_BOOK");
        			this.dsSearchCondition.setColumn(row2,"columnName","SURG_NO");
        			this.dsSearchCondition.setColumn(row2,"columnValue", surgNo);
        			this.dsSearchCondition.setColumn(row2,"operator","=");
        		}
        		this.gfnService("findMpSurgBookList");
        	}
        }

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

        

        
        /********************************************************************************
          클릭 함수
        ********************************************************************************/
        //의사 찾기
        this.surgDoc = "";
        this.taxinvDiv_searchSurgDocBtn_onclick = function(obj,e)
        {
        	var btnId = obj.id;
        	if(btnId == "searchSurgDoc1Btn"){
        		this.surgDoc = "surgDoc1";
        		this.gfnDoctPopup();
        		this.setDoct = function(arrRtn){ 
        		this.taxinvDiv.surgDoc1Ed.set_value(arrRtn[1]);
        		}
        	}else if(btnId == "searchSurgDoc2Btn"){
        		this.surgDoc = "surgDoc2";
        		this.gfnDoctPopup();
        		this.setDoct = function(arrRtn){ 
        		this.taxinvDiv.surgDoc2Ed.set_value(arrRtn[1]);
        		}
        	}else if(btnId == "searchSurgDoc3Btn"){
        		this.surgDoc = "surgDoc3";
        		this.gfnDoctPopup();
        		this.setDoct = function(arrRtn){ 
        		this.taxinvDiv.surgDoc3Ed.set_value(arrRtn[1]);
        		}
        	}

        

        									
        	
        }

        	
        	

        

        
        //환자 찾기
        this.taxinvDiv_searchPatBtn_onclick = function(obj,e)
        {

        	this.gfnPatPopup();
        	this.setPatInfo = function(arrRtn){ 
        			this.taxinvDiv.patNoEd.set_value(arrRtn[0]);  
        			this.taxinvDiv.patNmEd.set_value(arrRtn[1]);  									
        	}
        }

        

        //일괄처리
        this.allBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchMpSurgBookProcess");
        	this.parent.destroy();
        	this.opener.reload();
        }

        
        //수술, 부수술검색
        this.taxinvDiv_searchMainSurgNmBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("MR_SurgPopupForm","med","");
        	this.setSurgInfo = function(arrRtn){ 
        	this.dsMpSurgBook.setColumn(this.dsMpSurgBook.rowposition,"mainSurgNm",arr[0]);
        		}
        }

        this.taxinvDiv_searchSubSurgNmBtn_onclick = function(obj,e)
        {
           	this.gfnPopup("MR_SurgPopupForm","med","");    	
          	this.setSurgInfo = function(arrRtn){ 
        	this.taxinvDiv.subSurgNmEd.set_value(arrRtn[0]);
        }
        }
        this.taxinvDiv_searchBeforeSurgDiagn1Btn_onclick = function(obj,e)
        {
        	
        	this.gfnPopup("MB_OrdCdPopupForm","med","");
        		
        		this.setDsCode = function(arr, divCode){
           		this.taxinvDiv.beforeSurgDiagn1Ed.set_value(arr[1]);
        		}
        		
        }

        this.taxinvDiv_searchBeforeSurgDiagn2Btn_onclick = function(obj,e)
        {
        		

        		this.gfnPopup("MB_OrdCdPopupForm", "med","");
        		this.setDsCode = function(arr, divCode){
        			this.taxinvDiv.beforeSurgDiagn2Ed.set_value(arr[1]);
        		}

        

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsInsp.addEventHandler("onrowposchanged", this.dsInsp_onrowposchanged, this);
            this.addEventHandler("onload", this.MP_SurgBookInsertForm_onload, this);
            this.taxinvDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv21.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv14.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv15.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv9.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.patTypeCombo.addEventHandler("onitemchanged", this.taxinvDiv_purchSalesComb_onitemchanged, this);
            this.taxinvDiv.stDiv03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.surgTypeCombo.addEventHandler("onitemchanged", this.taxinvDiv_purchSalesComb_onitemchanged, this);
            this.taxinvDiv.stDiv11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.mainSurgNmEd.addEventHandler("oneditclick", this.taxinvDiv_assetNoEd09_oneditclick, this);
            this.taxinvDiv.stDiv12.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv13.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.ansthsTypeCombo.addEventHandler("onitemchanged", this.taxinvDiv_purchSalesComb_onitemchanged, this);
            this.taxinvDiv.stDiv17.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.surgBodyPosiCombo.addEventHandler("onitemchanged", this.taxinvDiv_purchSalesComb_onitemchanged, this);
            this.taxinvDiv.stDiv19.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv20.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.stDiv00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.taxinvDiv.apprvYnCombo.addEventHandler("onitemchanged", this.taxinvDiv_purchSalesComb_onitemchanged, this);
            this.taxinvDiv.searchMainSurgNmBtn.addEventHandler("onclick", this.taxinvDiv_searchMainSurgNmBtn_onclick, this);
            this.taxinvDiv.searchSurgDoc1Btn.addEventHandler("onclick", this.taxinvDiv_searchSurgDocBtn_onclick, this);
            this.taxinvDiv.searchSurgDoc2Btn.addEventHandler("onclick", this.taxinvDiv_searchSurgDocBtn_onclick, this);
            this.taxinvDiv.searchBeforeSurgDiagn1Btn.addEventHandler("onclick", this.taxinvDiv_searchBeforeSurgDiagn1Btn_onclick, this);
            this.taxinvDiv.searchSurgDoc3Btn.addEventHandler("onclick", this.taxinvDiv_searchSurgDocBtn_onclick, this);
            this.taxinvDiv.searchBeforeSurgDiagn2Btn.addEventHandler("onclick", this.taxinvDiv_searchBeforeSurgDiagn2Btn_onclick, this);
            this.taxinvDiv.searchPatBtn.addEventHandler("onclick", this.taxinvDiv_searchPatBtn_onclick, this);
            this.taxinvDiv.searchSubSurgNmBtn.addEventHandler("onclick", this.taxinvDiv_searchSubSurgNmBtn_onclick, this);
            this.allBtn.addEventHandler("onclick", this.allBtn_onclick, this);

        };

        this.loadIncludeScript("MR_SurgBookInsertForm.xfdl");

       
    };
}
)();

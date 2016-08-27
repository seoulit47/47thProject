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
                this.set_name("LW_SplyRmCpntMngntForm");
                this.set_classname("LW_splyRmCpntMngntForm");
                this.set_titletext("공급실 SET 구성품 관리");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GP500</Col><Col id=\"dsName\">dsGP500</Col></Row><Row><Col id=\"dsName\">dsGD010</Col><Col id=\"code\">GD010</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUseYn", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">사용</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSplyRmSetCpnt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"realuseYb\" type=\"STRING\" size=\"256\"/><Column id=\"setNm\" type=\"STRING\" size=\"256\"/><Column id=\"mngntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"mngntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"disuseDate\" type=\"STRING\" size=\"256\"/><Column id=\"disuseCau\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"midGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrpNm\" type=\"STRING\" size=\"256\"/><Column id=\"midGrpCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"setCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findSplyRmSetCpntList</Col><Col id=\"URL\">his::log/csr/findSplyRmSetCpntList.do</Col><Col id=\"outData\">dsSplyRmSetCpnt=dsSplyRmSetCpnt dsSplyRmSetCpntHist=dsSplyRmSetCpntHist</Col><Col id=\"callbackFunc\">findSplyRmSetCpntListCallbackFunc</Col></Row><Row><Col id=\"serviceID\">callSetCdSeq</Col><Col id=\"URL\">his::log/csr/callSetCdSeq.do</Col><Col id=\"outData\">SetCdNo=SetCdNo</Col><Col id=\"callbackFunc\">callSetCdSeqcallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchProcessSetCpntList</Col><Col id=\"URL\">his::log/csr/batchProcessSetCpntList.do</Col><Col id=\"inData\">dsSplyRmSetCpnt=dsSplyRmSetCpnt:u dsSplyRmSetCpntHist=dsSplyRmSetCpntHist:u</Col></Row><Row><Col id=\"serviceID\">findGrpList</Col><Col id=\"URL\">his::log/base/findGrpList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsBigGrpCd=dsBigGrpCd dsMidGrpCd=dsMidGrpCd dsSmGrpCd=dsSmGrpCd</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSplyRmSetCpntHist", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"bigGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpntHistNo\" type=\"STRING\" size=\"256\"/><Column id=\"fmCd\" type=\"STRING\" size=\"256\"/><Column id=\"fmNm\" type=\"STRING\" size=\"256\"/><Column id=\"midGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"qnt\" type=\"STRING\" size=\"256\"/><Column id=\"setCd\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"stand\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsGD010", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMidGrpCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"midGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"midGrpCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYb\" type=\"STRING\" size=\"256\"/><Column id=\"userRegPossYb\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"modDate\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrpCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSmGrpCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"midGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYb\" type=\"STRING\" size=\"256\"/><Column id=\"userRegPossYb\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"modDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBigGrpCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"bigGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrpNm\" type=\"STRING\" size=\"256\"/><Column id=\"grpDiv\" type=\"STRING\" size=\"256\"/><Column id=\"useYb\" type=\"STRING\" size=\"256\"/><Column id=\"userRegPossYb\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindLogCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdDiv\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"secCode\" type=\"STRING\" size=\"256\"/><Column id=\"thrCode\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dsLogName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLogCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.08%", "0", null, "60", "0.16%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "62.24%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("공급실 SET 구성품 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0.64%", "108", null, "660", "0.96%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0.64%", "58", null, "45", "1.12%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Button("searchBtn", "absolute", "91.84%", "9", null, "32", "0.9%", null, this.Div01);
            obj.set_taborder("0");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchBtn");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("ctrtDateSelStc02", "absolute", "2.85%", "6", null, "30", "90.46%", null, this.Div01);
            obj.getSetter("taborder").set("3");
            obj.set_text("SET CODE");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Combo("realuseYbCombo", "absolute", "10.11%", "6", null, "30", "78.3%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@dsUseYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Button("saveSETCdBtn", "absolute", "42.48%", "117", null, "32", "50.4%", null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("saveSETCdBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("setCodeGrid", "absolute", "3.76%", "158", null, "287", "50.4%", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsSplyRmSetCpnt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"no\"/><Cell col=\"1\" text=\"SET코드\"/><Cell col=\"2\" text=\"SET명\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:setCd\"/><Cell col=\"2\" text=\"bind:setNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addSetGridRowBtn", "absolute", "43.76%", "453", null, "32", "53.6%", null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("ArBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delSetGridRowBtn", "absolute", "46.8%", "453", null, "32", "50.72%", null, this);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DrBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addRowBtn", "absolute", "91.76%", "697", null, "32", "5.6%", null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("ArBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delRowBtn", "absolute", "94.8%", "697", null, "32", "2.72%", null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DrBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("bigGrpCdEd", "absolute", "12.56%", "504", null, "27", "76.24%", null, this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc01", "absolute", "4.72%", "504", null, "27", "88.24%", null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("대분류");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("bigGrpBtn", "absolute", "24%", "503", null, "32", "73.44%", null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Button("midGrpBtn", "absolute", "24%", "536", null, "32", "73.44%", null, this);
            obj.set_taborder("16");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("midGrpCdEd", "absolute", "12.56%", "539", null, "27", "76.24%", null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc02", "absolute", "4.72%", "539", null, "27", "88.24%", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("중분류");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc03", "absolute", "4.72%", "574", null, "27", "88.24%", null, this);
            obj.getSetter("taborder").set("19");
            obj.set_text("소분류");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("smGrpCdEd", "absolute", "12.56%", "574", null, "27", "76.24%", null, this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Button("smGrpBtn", "absolute", "24%", "570", null, "32", "73.44%", null, this);
            obj.set_taborder("21");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc00", "absolute", "27.36%", "611", null, "27", "65.68%", null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("실사용 여부");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("useYbCombo", "absolute", "34.88%", "611", null, "30", "53.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_innerdataset("@dsUseYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Edit("SetCdEd", "absolute", "12.56%", "609", null, "27", "73.28%", null, this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc04", "absolute", "4.72%", "609", null, "27", "88.24%", null, this);
            obj.getSetter("taborder").set("26");
            obj.set_text("SET코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc05", "absolute", "4.72%", "644", null, "27", "88.24%", null, this);
            obj.getSetter("taborder").set("27");
            obj.set_text("SET명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("SetCdNmEd", "absolute", "12.56%", "646", null, "27", "53.6%", null, this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc06", "absolute", "4.72%", "679", null, "27", "88.24%", null, this);
            obj.getSetter("taborder").set("29");
            obj.set_text("관리부서");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("deptCdEd", "absolute", "12.56%", "679", null, "27", "76.24%", null, this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Button("mngntDeptBtn", "absolute", "24%", "677", null, "32", "73.44%", null, this);
            obj.set_taborder("31");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("deptNmEd", "absolute", "27.36%", "681", null, "27", "53.52%", null, this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc07", "absolute", "4.64%", "714", null, "27", "88.24%", null, this);
            obj.getSetter("taborder").set("33");
            obj.set_text("불용일자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("disuseDateCal", "absolute", "12.56%", "713", null, "27", "75.44%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Static("ctrtDateSelStc08", "absolute", "27.36%", "716", null, "27", "65.68%", null, this);
            obj.getSetter("taborder").set("35");
            obj.set_text("불용사유");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("cpntCodeGrid", "absolute", "50.56%", "157", null, "531", "2.24%", null, this);
            obj.set_taborder("37");
            obj.set_binddataset("dsSplyRmSetCpntHist");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"90\"/><Column size=\"300\"/><Column size=\"66\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"수량\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:fmCd\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:fmNm\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:stand\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:unit\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:qnt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("disuseCauCombo", "absolute", "35.12%", "716", null, "26", "52.64%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("39");
            obj.set_innerdataset("@dsGD010");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Combo("smGrpNmEd", "absolute", "27.2%", "574", null, "30", "53.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_innerdataset("@dsSmGrpCd");
            obj.set_codecolumn("smGrpCd");
            obj.set_datacolumn("smGrpCdNm");
            obj.set_type("dropdown");

            obj = new Combo("bigGrpNmEd", "absolute", "27.2%", "507", null, "30", "53.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("47");
            obj.set_innerdataset("@dsBigGrpCd");
            obj.set_codecolumn("bigGrpCd");
            obj.set_datacolumn("bigGrpNm");

            obj = new Combo("midGrpCdNmEd", "absolute", "27.2%", "541", null, "30", "53.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("48");
            obj.set_innerdataset("@dsMidGrpCd");
            obj.set_codecolumn("midGrpCd");
            obj.set_datacolumn("midGrpCdNm");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 660, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#edececff");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1228, 45, this.Div01,
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
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LW_splyRmCpntMngntForm");
            		p.set_titletext("공급실 SET 구성품 관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item14","midGrpCdNmEd","value","dsSplyRmSetCpnt","midGrpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","bigGrpNmEd","value","dsSplyRmSetCpnt","bigGrpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","bigGrpCdEd","value","dsSplyRmSetCpnt","bigGrpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","midGrpCdEd","value","dsSplyRmSetCpnt","midGrpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","smGrpCdEd","value","dsSplyRmSetCpnt","smGrpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","useYbCombo","value","dsSplyRmSetCpnt","realuseYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","SetCdEd","value","dsSplyRmSetCpnt","setCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","SetCdNmEd","value","dsSplyRmSetCpnt","setNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","deptCdEd","value","dsSplyRmSetCpnt","mngntDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","deptNmEd","value","dsSplyRmSetCpnt","mngntDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","disuseDateCal","value","dsSplyRmSetCpnt","disuseDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","disuseCauCombo","value","dsSplyRmSetCpnt","disuseCau");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","smGrpNmEd","value","dsSplyRmSetCpnt","smGrpCd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LW_CsrCpntMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("LW_CsrCpntMngntForm.xfdl", "scripts::logScripts.xjs");
        this.addIncludeScript("LW_CsrCpntMngntForm.xfdl", "scripts::commonUtil.xjs");
        this.addIncludeScript("LW_CsrCpntMngntForm.xfdl", "scripts::commonCodePopup");
        this.registerScript("LW_CsrCpntMngntForm.xfdl", function() {

        /****************************************************************************************

            공급실 SET구성품관리
                                                                           			                        
          @Path			 	물류 - 공급실 SET구성품관리
          @Description 	병원 중앙공급실에서 자주 사용되는 물품들을 SET로 묶어 구성품을 등록한다.		
          @Author		   	류재춘 						 								                
         									 											                        
          Created on 2016. 03. 10.                             		 					        

        ****************************************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::logScripts.xjs";
        //include "scripts::commonUtil.xjs";
        //include "scripts::commonCodePopup";	

        
        this.SetCdNo="";

        var bigGrpCd;   //대분류 
        var midGrpCd;  //중분류
        var smGrpCd;   //소분류

        this.LWsplyRmCpntMngntForm_onload = function(obj,e)
        {
        	this.gfnBind();
        	this.gfnService("findGrpList", false);
        	
        	trace(this.dsMidGrpCd.saveXML());
        	//this.logBindCd();
        }

        //조회Btn
        this.searchBtn_onclick = function(obj,e)
        {
        	this.dsSplyRmSetCpnt.clear();		//공급실 SET 구성품 값 제거
        	var realuseYb=this.Div01.realuseYbCombo.value;   //라디오버튼의 값
        	//alert(setCode);
        	var argument ='realuseYb='+realuseYb;
        	
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findSplyRmSetCpntList");
        	
        }

        this.findSplyRmSetCpntListCallbackFunc = function(svcID,errorCode,errorMsg)
        {
        	if(errorCode=="0") {
        		if(this.dsSplyRmSetCpnt.rowcount==0){
        			alert("조회한 데이터가 없습니다.");
        		}else{
        			var setCd=this.dsSplyRmSetCpnt.getColumn(0,"setCd");
        			this.dsSplyRmSetCpntHist.filter("setCd=='"+setCd+"'");
        			alert("조회성공");
        	    }
        	}else{
        		//alert("조회실패");
        	}	
        }

        
        //setCodeGrid Row추가Btn
        this.addSetGridRowBtn_onclick = function(obj,e)
        {
            this.dsSplyRmSetCpntHist.clearData;
        	this.dsSplyRmSetCpnt.addRow();
        }

        //상세Grid Row추가Btn
        this.addRowBtn_onclick = function(obj,e)
        {
        	if(this.dsSplyRmSetCpnt.rowcount==0){
        		alert("Set구성품부터 먼저 선택하세요.");
        	}else{
        		this.dsSplyRmSetCpntHist.addRow();		
        		this.dsSplyRmSetCpntHist.setColumn(this.dsSplyRmSetCpntHist.rowposition,"bigGrpCd",bigGrpCd);
        	    this.dsSplyRmSetCpntHist.setColumn(this.dsSplyRmSetCpntHist.rowposition,"midGrpCd",midGrpCd);
        	    this.dsSplyRmSetCpntHist.setColumn(this.dsSplyRmSetCpntHist.rowposition,"smGrpCd",smGrpCd);
        	    this.dsSplyRmSetCpntHist.setColumn(this.dsSplyRmSetCpntHist.rowposition,"setCd",this.SetCdEd.value);
        	}
        }

        
        //상세Grid Row삭제Btn
        this.delRowBtn_onclick = function(obj,e)
        {
        	this.dsSplyRmSetCpntHist.deleteRow(this.dsSplyRmSetCpntHist.rowposition);
        }

        
        // 대분류코드 팝업Btn
        this.bigGrpBtn_onclick = function(obj,e)
        {
        	this.logOpenCdDialog("searchBigGrp");
        	
        }

        //중분류코드 팝업Btn
        this.midGrpBtn_onclick = function(obj,e)
        {
        	if(this.bigGrpCdEd.value==null){
        		alert("대분류코드를 선택하세요.");
        		return;	
        	}		

        	this.logOpenCdDialog("searchMidGrp","",this.bigGrpCdEd.value,"");		
        }

        //소분류코드 팝업 Btn
        this.smGrpBtn_onclick = function(obj,e)
        {
        	if(this.bigGrpCdEd.value==null){
        		alert("대분류코드를 선택하세요.");
        	}else if(this.midGrpCdEd.value==null){
        		alert("중분류코드를 선택하세요.");			
        	}	
        	this.logOpenCdDialog("searchSmGrp","",this.bigGrpCdEd.value,this.midGrpCdEd.value);		
        }

        

        
        this.setLogCodeArray=function(divCode,logCode,secCode,thrCode,logCdArray)
        {
        	if(divCode=="searchBigGrp"){                        //대분류	
        		this.bigGrpCdEd.set_value(logCdArray[0]);
        		this.dsMidGrpCd.filter("bigGrpCd == '" + this.bigGrpCdEd.value + "'");
        		//this.bigGrpNmEd.set_value(logCdArray[1]);
        	}else if(divCode=="searchMidGrp"){               //중분류
        		this.midGrpCdEd.set_value(logCdArray[0]);
        		//this.midGrpNmEd.set_value(logCdArray[1]);
        	}else if(divCode=="searchSmGrp"){               //소분류
        		this.smGrpCdEd.set_value(logCdArray[0]);
        		//this.smGrpNmEd.set_value(logCdArray[1]);	
        		this.settingSetCd();                                  //SET코드 셋팅
        	}else if(this.gfnIsNull(divCode)){                      //물품
        		this.dsSplyRmSetCpntHist.setColumn(this.dsSplyRmSetCpntHist.rowposition,"fmCd",logCdArray[0]);
        		this.dsSplyRmSetCpntHist.setColumn(this.dsSplyRmSetCpntHist.rowposition,"fmNm",logCdArray[1]);
        		this.dsSplyRmSetCpntHist.setColumn(this.dsSplyRmSetCpntHist.rowposition,"stand",logCdArray[5]);   //규격
        		this.dsSplyRmSetCpntHist.setColumn(this.dsSplyRmSetCpntHist.rowposition,"unit",logCdArray[6]);
        		this.dsSplyRmSetCpntHist.setColumn(this.dsSplyRmSetCpntHist.rowposition,"qnt",logCdArray[8]);	
        	}		
        }

        
        //SET코드 셋팅
        this.settingSetCd=function()
        {
        	
        	application.setVariable("SetCdNo", this.SetCdNo);	
        	this.gfnService("callSetCdSeq",false);   //SET코드 숫자 셋팅

        
        }

        
        this.callSetCdSeqcallbackFunc = function(svcID,errorCode,errorMsg)
        {

        	if(errorCode=="0") {			
        		if(this.SetCdNo.length==1){			
        			 var SetValue="000"+this.SetCdNo;			
        		}else if(this.SetCdNo.length==2){
        			 var SetValue="00"+this.SetCdNo;	
        		}else if(this.SetCdNo.length==3){
        			var SetValue="0"+this.SetCdNo;	
        		}
        		bigGrpCd=this.bigGrpCdEd.value; 
        		midGrpCd=this.midGrpCdEd.value;
        		smGrpCd=this.smGrpCdEd.value;		
        		this.SetCdEd.set_value(bigGrpCd+midGrpCd+smGrpCd+SetValue);   //SET코드 완성
        		
        	}else{
        		//alert("오류발생");
        	}	
        }

        
        this.callSetCdSEQcallbackFunc = function(svcID,errorCode,errorMsg)
        {
        	if(errorCode=="0") {	
        		alert(this.dsSplyRmSetCpnt.getRowCount());
        		alert("====="+this.dsSplyRmSetCpnt.getColumn(1,"setCd"));
        			alert("조회성공");
        	}else{
        		alert("조회실패");
        	}	
        }

        
        //부서코드 PoopupBtn
        this.mngntDeptBtn_onclick = function(obj,e)
        {
        	this.gfnCodePopup("GP500");
        }

        this.setCode=function(code,arr)
        { 
           //부모창에서 셋팅을 완료함.
        	this.deptCdEd.set_value(arr[0]);
        	this.deptNmEd.set_value(arr[1]); 
        }

        
        //그리드를 클랙했을때 상세정보조회
        this.setCodeGrid_oncellclick = function(obj,e)
        {
        	var setCd=this.dsSplyRmSetCpnt.getColumn(e.row,"setCd");
        	this.dsSplyRmSetCpntHist.filter("setCd=='"+setCd+"'");
        	 //trace(this.dsSplyRmSetCpnt.saveXML());
        }

        
        //상세그리드 더블 선택했을때.
        this.cpntCodeGrid_oncelldblclick = function(obj,e)
        {
        	this.logOpenGdsDialog();
        }

        //SET저장 Btn
        this.saveSetCdBtn_onclick = function(obj,e)
        {
        	this.dsSplyRmSetCpnt.setColumn(this.dsSplyRmSetCpnt.rowposition,"disuseDate",this.disuseDateCal.value);
        	this.gfnService("batchProcessSetCpntList", false);
        }

        //SET그리드 Row 삭제.
        this.delSetGridRowBtn_onclick = function(obj,e)
        {
        	this.dsSplyRmSetCpnt.deleteRow(this.dsSplyRmSetCpnt.rowposition);
        }

        

        

        

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LWsplyRmCpntMngntForm_onload, this);
            this.Div01.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.Div01.ctrtDateSelStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.saveSETCdBtn.addEventHandler("onclick", this.saveSetCdBtn_onclick, this);
            this.setCodeGrid.addEventHandler("oncellclick", this.setCodeGrid_oncellclick, this);
            this.addSetGridRowBtn.addEventHandler("onclick", this.addSetGridRowBtn_onclick, this);
            this.delSetGridRowBtn.addEventHandler("onclick", this.delSetGridRowBtn_onclick, this);
            this.addRowBtn.addEventHandler("onclick", this.addRowBtn_onclick, this);
            this.delRowBtn.addEventHandler("onclick", this.delRowBtn_onclick, this);
            this.ctrtDateSelStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.bigGrpBtn.addEventHandler("onclick", this.bigGrpBtn_onclick, this);
            this.midGrpBtn.addEventHandler("onclick", this.midGrpBtn_onclick, this);
            this.ctrtDateSelStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.smGrpBtn.addEventHandler("onclick", this.smGrpBtn_onclick, this);
            this.ctrtDateSelStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.mngntDeptBtn.addEventHandler("onclick", this.mngntDeptBtn_onclick, this);
            this.ctrtDateSelStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.cpntCodeGrid.addEventHandler("oncelldblclick", this.cpntCodeGrid_oncelldblclick, this);

        };

        this.loadIncludeScript("LW_CsrCpntMngntForm.xfdl");

       
    };
}
)();

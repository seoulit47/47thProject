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
                this.set_name("SC_RsvtMgtForm");
                this.set_classname("SC_RsvtMgtForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRsvt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtDate\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtTime\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnTime\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"sms\" type=\"STRING\" size=\"256\"/><Column id=\"aplMan\" type=\"STRING\" size=\"256\"/><Column id=\"aplManTel\" type=\"STRING\" size=\"256\"/><Column id=\"rship\" type=\"STRING\" size=\"256\"/><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"pckNm\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"reducCd\" type=\"STRING\" size=\"256\"/><Column id=\"reducNm\" type=\"STRING\" size=\"256\"/><Column id=\"reducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"payMan\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtResp\" type=\"STRING\" size=\"256\"/><Column id=\"memo\" type=\"STRING\" size=\"256\"/><Column id=\"cancelYn\" type=\"STRING\" size=\"256\"/><Column id=\"choInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"inspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInsp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsChoInsp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/><Column id=\"qnt\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findRsvtList</Col><Col id=\"URL\">his::sup/checkup/findRsvtList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsRsvt=dsRsvt</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findRsvtInspList</Col><Col id=\"URL\">his::sup/checkup/findRsvtInspList.do</Col><Col id=\"outData\">dsInsp=dsInsp dsChoInsp=dsChoInsp</Col><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">findPckInspList</Col><Col id=\"URL\">his::sup/checkup/findPckInspList.do</Col><Col id=\"outData\">dsInsp=dsInsp</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchRsvtProcess</Col><Col id=\"URL\">his::sup/checkup/batchRsvtProcess.do</Col><Col id=\"inData\">dsRsvt=dsRsvt:U dsChoInsp=dsChoInsp:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">supCallBackFunc</Col></Row><Row><Col id=\"serviceID\">findPat</Col><Col id=\"URL\">his::won/outPatMngnt/findPat.do</Col><Col id=\"outData\">dsPat=dsPat</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">cancelRsvt</Col><Col id=\"URL\">his::sup/checkup/cancelRsvt.do</Col><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"outData\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGenderCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">남</Col><Col id=\"value\">남</Col></Row><Row><Col id=\"code\">여</Col><Col id=\"value\">여</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPat", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"barrAss\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" type=\"STRING\" size=\"256\"/><Column id=\"deathDate\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveYb\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveNo\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiver\" type=\"STRING\" size=\"256\"/><Column id=\"recNwDate\" type=\"STRING\" size=\"256\"/><Column id=\"estbGiho\" type=\"STRING\" size=\"256\"/><Column id=\"certfctNo\" type=\"STRING\" size=\"256\"/><Column id=\"insuRrn\" type=\"STRING\" size=\"256\"/><Column id=\"insuNm\" type=\"STRING\" size=\"256\"/><Column id=\"applyStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRece", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtDate\" type=\"STRING\" size=\"256\"/><Column id=\"receDate\" type=\"STRING\" size=\"256\"/><Column id=\"befReceAmt\" type=\"STRING\" size=\"256\"/><Column id=\"payAmt\" type=\"STRING\" size=\"256\"/><Column id=\"cardCashDiv\" type=\"STRING\" size=\"256\"/><Column id=\"aprvNo\" type=\"STRING\" size=\"256\"/><Column id=\"inspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"choInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"reducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"inspDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvDate\" type=\"STRING\" size=\"256\"/><Column id=\"cardCd\" type=\"STRING\" size=\"256\"/><Column id=\"cardNo\" type=\"STRING\" size=\"256\"/><Column id=\"valPrid\" type=\"STRING\" size=\"256\"/><Column id=\"instmPrid\" type=\"STRING\" size=\"256\"/><Column id=\"cashAprvData\" type=\"STRING\" size=\"256\"/><Column id=\"cashAprvDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"cancelYn\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "1670", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5.12%", "-3", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("종합검진 예약관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "35.84%", "658", null, "46", "2.4%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "35.84%", "63", null, "355", "2.4%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Grid("inspGrid", "absolute", "448", "462", "252", "191", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsInsp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"141\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"검사목록\"/><Cell row=\"1\" text=\"검사코드\"/><Cell row=\"1\" col=\"1\" text=\"검사명\"/></Band><Band id=\"body\"><Cell text=\"bind:inspCd\"/><Cell col=\"1\" text=\"bind:inspNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("choInspGrid", "absolute", "710", "462", "510", "189", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("dsChoInsp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"158\"/><Column size=\"38\"/><Column size=\"65\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" text=\"정밀검사 목록\"/><Cell row=\"1\" text=\"코드\"/><Cell row=\"1\" col=\"1\" text=\"검사명\"/><Cell row=\"1\" col=\"2\" text=\"수량\"/><Cell row=\"1\" col=\"3\" text=\"금액\"/><Cell row=\"1\" col=\"4\" text=\"검사예정일\"/></Band><Band id=\"body\"><Cell text=\"bind:inspCd\"/><Cell col=\"1\" text=\"bind:inspNm\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" text=\"bind:qnt\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 3 0 0;\" text=\"bind:sumAmt\" expr=\"expr:qnt*amt\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:inspPlnDate\" mask=\"####-##-##\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합              계\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 3 0 0;\" expr=\"expr:dataset.getSum('qnt*amt')\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("rsvtGrid", "absolute", "28", "99", "408", "605", null, null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsRsvt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"89\"/><Column size=\"72\"/><Column size=\"69\"/><Column size=\"39\"/><Column size=\"78\"/><Column size=\"63\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"예약자 목록\"/><Cell row=\"1\" text=\"검진예정일\"/><Cell row=\"1\" col=\"1\" text=\"예약번호\"/><Cell row=\"1\" col=\"2\" text=\"검진자명\"/><Cell row=\"1\" col=\"3\" text=\"성별\"/><Cell row=\"1\" col=\"4\" text=\"검진시간\"/><Cell row=\"1\" col=\"5\" text=\"예약취소\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:inspPlnDate\"/><Cell col=\"1\" text=\"bind:rsvtNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" text=\"bind:gender\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:inspPlnTime\" mask=\"##:##\"/><Cell col=\"5\" text=\"bind:cancelYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("inspPlnDateCal", "absolute", "11.84%", "64", null, "27", "74.72%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_expr("Date()");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Div("Div01", "absolute", "2.32%", "63", null, "30", "89.04%", null, this);
            obj.set_taborder("9");
            obj.set_text("검진예정일");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "347", "62", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "448", "67", "768", "352", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation");
            obj.style.set_border("0 solid #9f9f9fb3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            obj = new Edit("rsvtDateEd", "absolute", "107", "15", "132", "30", null, null, this.compBox);
            obj.set_taborder("174");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("regNo1Ed", "absolute", "107", "123", "98", "30", null, null, this.compBox);
            obj.set_taborder("175");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "107", "87", "98", "30", null, null, this.compBox);
            obj.set_taborder("176");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "107", "51", "132", "30", null, null, this.compBox);
            obj.set_taborder("177");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ageEd", "absolute", "275", "87", "60", "30", null, null, this.compBox);
            obj.set_taborder("178");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("pckCdEd", "absolute", "437", "123", "92", "30", null, null, this.compBox);
            obj.set_taborder("179");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("reducCdEd", "absolute", "437", "159", "92", "30", null, null, this.compBox);
            obj.set_taborder("180");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("reducNmEd", "absolute", "534", "159", "182", "30", null, null, this.compBox);
            obj.set_taborder("181");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("pckNmEd", "absolute", "534", "123", "183", "30", null, null, this.compBox);
            obj.set_taborder("182");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rsvtNoEd", "absolute", "437", "15", "147", "30", null, null, this.compBox);
            obj.set_taborder("183");
            obj.getSetter("compCheck").set("EsEd");
            obj.set_enable("true");
            this.compBox.addChild(obj.name, obj);
            obj = new Calendar("inspDateCal", "absolute", "437", "87", "147", "30", null, null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("184");
            obj.getSetter("compCheck").set("EsCal");
            obj = new Edit("smsEd", "absolute", "107", "159", "227", "30", null, null, this.compBox);
            obj.set_taborder("185");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("aplMan", "absolute", "107", "195", "75", "30", null, null, this.compBox);
            obj.set_taborder("186");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rlEd", "absolute", "271", "195", "65", "30", null, null, this.compBox);
            obj.set_taborder("187");
            obj.set_imemode("alpha");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rsvtRespEd", "absolute", "437", "49", "147", "30", null, null, this.compBox);
            obj.set_taborder("188");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("phoneEd", "absolute", "107", "231", "227", "30", null, null, this.compBox);
            obj.set_taborder("189");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("payManEd", "absolute", "649", "195", "101", "30", null, null, this.compBox);
            obj.set_taborder("190");
            this.compBox.addChild(obj.name, obj);
            obj = new TextArea("memoArea", "absolute", "107", "267", "229", "64", null, null, this.compBox);
            obj.set_taborder("191");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("regNo2Ed", "absolute", "237", "123", "98", "30", null, null, this.compBox);
            obj.set_taborder("192");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("inspTimeMask", "absolute", "592", "87", "92", "30", null, null, this.compBox);
            obj.set_taborder("193");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.style.set_align("center");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "208", "123", "23", "28", null, null, this.compBox);
            obj.getSetter("taborder").set("194");
            obj.set_text("-");
            obj.style.set_background("transparent");
            obj.style.set_border("0px solid transparent transparent");
            obj.style.set_align("center middle");
            this.compBox.addChild(obj.name, obj);
            obj = new Combo("genderCombo", "absolute", "213", "87", "55", "30", null, null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.getSetter("class").set("AreaCombo");
            obj.set_taborder("195");
            obj.set_innerdataset("dsGenderCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new MaskEdit("basicInspAmtEd", "absolute", "437", "195", "120", "30", null, null, this.compBox);
            obj.set_taborder("198");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("reducAmtEd", "absolute", "437", "231", "120", "30", null, null, this.compBox);
            obj.set_taborder("199");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("basicInspSumAmtEd", "absolute", "437", "303", "151", "30", null, null, this.compBox);
            obj.set_taborder("201");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div07", "absolute", "2.73%", "195", "76", "30", null, null, this.compBox);
            obj.set_taborder("202");
            obj.set_text("신청인");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "2.73%", "231", "76", "30", null, null, this.compBox);
            obj.set_taborder("203");
            obj.set_text("연락처");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "2.73%", "123", "76", "30", null, null, this.compBox);
            obj.set_taborder("204");
            obj.set_text("주민번호");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "2.73%", "87", "76", "30", null, null, this.compBox);
            obj.set_taborder("205");
            obj.set_text("검진자명*");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "2.73%", "51", "76", "30", null, null, this.compBox);
            obj.set_taborder("206");
            obj.set_text("등록번호*");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "2.73%", "15", "76", "30", null, null, this.compBox);
            obj.set_taborder("208");
            obj.set_text("예약일자*");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "45.7%", "15", "76", "30", null, null, this.compBox);
            obj.set_taborder("209");
            obj.set_text("예약번호*");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "45.7%", "51", "76", "30", null, null, this.compBox);
            obj.set_taborder("210");
            obj.set_text("예약담당");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "45.7%", "87", "76", "30", null, null, this.compBox);
            obj.set_taborder("211");
            obj.set_text("검진일시*");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div10", "absolute", "45.7%", "123", "76", "30", null, null, this.compBox);
            obj.set_taborder("212");
            obj.set_text("패키지*");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div11", "absolute", "73.7%", "195", "76", "30", null, null, this.compBox);
            obj.set_taborder("213");
            obj.set_text("입금자");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div12", "absolute", "45.7%", "159", "76", "30", null, null, this.compBox);
            obj.set_taborder("214");
            obj.set_text("감면구분");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div13", "absolute", "45.7%", "195", "76", "30", null, null, this.compBox);
            obj.set_taborder("215");
            obj.set_text("기본금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div14", "absolute", "45.7%", "231", "76", "30", null, null, this.compBox);
            obj.set_taborder("216");
            obj.set_text("감면금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div16", "absolute", "45.7%", "303", "76", "30", null, null, this.compBox);
            obj.set_taborder("218");
            obj.set_text("총기본금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div17", "absolute", "2.73%", "159", "76", "30", null, null, this.compBox);
            obj.set_taborder("219");
            obj.set_text("SMS");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div18", "absolute", "2.73%", "267", "76", "30", null, null, this.compBox);
            obj.set_taborder("220");
            obj.set_text("메모");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div19", "absolute", "24.35%", "195", "76", "30", null, null, this.compBox);
            obj.set_taborder("221");
            obj.set_text("관계");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("pckPopBtn", "absolute", "720", "123", "32", "32", null, null, this.compBox);
            obj.set_taborder("222");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("reducPopBtn", "absolute", "720", "159", "32", "32", null, null, this.compBox);
            obj.set_taborder("223");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("patPopupBtn", "absolute", "245", "50", "32", "32", null, null, this.compBox);
            obj.set_taborder("224");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "73.7%", "231", "76", "30", null, null, this.compBox);
            obj.set_taborder("225");
            obj.set_text("취소여부");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("cancelEd", "absolute", "84.51%", "231", null, "30", "2.34%", null, this.compBox);
            obj.set_taborder("226");
            this.compBox.addChild(obj.name, obj);
            obj = new CheckBox("cancelYnChk", "absolute", "692", "229", "22", "32", null, null, this.compBox);
            obj.set_taborder("227");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("rsvtTimeMask", "absolute", "32.03%", "15", null, "30", "56.64%", null, this.compBox);
            obj.set_taborder("228");
            obj.set_mask("##:##");
            obj.set_type("string");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("rsvtAmtEd", "absolute", "437", "267", "151", "30", null, null, this.compBox);
            obj.set_taborder("232");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div15", "absolute", "45.7%", "267", "76", "30", null, null, this.compBox);
            obj.set_taborder("233");
            obj.set_text("예약금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);

            obj = new Div("btnBox", "absolute", "74.4%", "415", null, "57", "1.52%", null, this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);
            obj = new Button("addBtn", "absolute", "105", "9", "90", "32", null, null, this.btnBox);
            obj.set_taborder("1");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("delBtn", "absolute", "201", "9", "90", "32", null, null, this.btnBox);
            obj.set_taborder("0");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "36.64%", "666", null, "30", "54.72%", null, this);
            obj.set_taborder("13");
            obj.set_text("기본검사금액");
            obj.style.set_background("rosybrown");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "77.44%", "666", null, "30", "13.92%", null, this);
            obj.set_taborder("14");
            obj.set_text("총수납금액");
            obj.style.set_background("rosybrown");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "57.12%", "666", null, "30", "34.24%", null, this);
            obj.set_taborder("15");
            obj.set_text("선택검사금액");
            obj.style.set_background("rosybrown");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("btnBox2", "absolute", "53.12%", "708", null, "52", "1.52%", null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);
            obj = new Button("receBtn", "absolute", "270", "8", "90", "32", null, null, this.btnBox2);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::storeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox2.addChild(obj.name, obj);
            obj = new Button("modiBtn", "absolute", "368", "8", "90", "32", null, null, this.btnBox2);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox2.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "466", "8", "90", "32", null, null, this.btnBox2);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox2.addChild(obj.name, obj);
            obj = new Button("addRsvtBtn", "absolute", "38", "8", "90", "32", null, null, this.btnBox2);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::reserveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox2.addChild(obj.name, obj);
            obj = new Button("cancelBtn", "absolute", "134", "8", "110", "32", null, null, this.btnBox2);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::reserveXBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox2.addChild(obj.name, obj);

            obj = new MaskEdit("basicInspSumAmtEd", "absolute", "45.6%", "666", null, "30", "43.76%", null, this);
            obj.set_taborder("20");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("inspSumAmtEd", "absolute", "86.48%", "666", null, "30", "2.88%", null, this);
            obj.set_taborder("21");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("choInspAmtEd", "absolute", "66.16%", "666", null, "30", "23.6%", null, this);
            obj.set_taborder("22");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 768, 339, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.style.set_background("@gradation");
            		p.style.set_border("0 solid #9f9f9fb3");
            		p.set_enable("false");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 301, 57, this.btnBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");

            	}
            );
            this.btnBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 662, 57, this.btnBox2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("19");

            	}
            );
            this.btnBox2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SC_RsvtMgtForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item14","compBox.rsvtAmtEd","value","dsRsvt","rsvtAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","compBox.cancelYnChk","value","dsRsvt","cancelYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","compBox.rsvtDateEd","value","dsRsvt","rsvtDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","compBox.rsvtTimeMask","value","dsRsvt","rsvtTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","compBox.patNoEd","value","dsRsvt","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","compBox.patNmEd","value","dsRsvt","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","compBox.genderCombo","value","dsRsvt","gender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","compBox.regNo1Ed","value","dsRsvt","rrn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","compBox.regNo2Ed","value","dsRsvt","rrn2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","compBox.ageEd","value","dsRsvt","age");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","compBox.smsEd","value","dsRsvt","sms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","compBox.aplMan","value","dsRsvt","aplMan");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","compBox.rlEd","value","dsRsvt","rship");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","compBox.phoneEd","value","dsRsvt","aplManTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","compBox.memoArea","value","dsRsvt","memo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","compBox.basicInspSumAmtEd","value","dsRsvt","basicInspSumAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","compBox.reducAmtEd","value","dsRsvt","reducAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","compBox.payManEd","value","dsRsvt","payMan");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","compBox.basicInspAmtEd","value","dsRsvt","basicInspAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","compBox.reducCdEd","value","dsRsvt","reducCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","compBox.reducNmEd","value","dsRsvt","reducNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","compBox.pckCdEd","value","dsRsvt","pckCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","compBox.pckNmEd","value","dsRsvt","pckNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","compBox.inspDateCal","value","dsRsvt","inspPlnDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","compBox.inspTimeMask","value","dsRsvt","inspPlnTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","compBox.rsvtRespEd","value","dsRsvt","rsvtResp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","compBox.rsvtNoEd","value","dsRsvt","rsvtNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","basicInspSumAmtEd","value","dsRsvt","basicInspSumAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","inspSumAmtEd","value","dsRsvt","inspSumAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","choInspAmtEd","value","dsRsvt","choInspAmt");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SC_RsvtMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SC_RsvtMgtForm.xfdl", "scripts::supScripts.xjs");
        this.addIncludeScript("SC_RsvtMgtForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("SC_RsvtMgtForm.xfdl", function() {
        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 
        //include "scripts::supScripts.xjs";
        //include "scripts::wonScripts.xjs";

        // 변수
        var rsvtNo;
        var editFlag = false;
        var	addFlag = false;

        // 조회 버튼
        this.searchBtn_onclick = function(obj,e)
        {
        	var fullDate = this.inspPlnDateCal.value+"";
        	var inspDate = fullDate.substr(0,8);
        	
        	if (!this.gfnIsNull(inspDate))
        	{
        		var argument = 'inspPlnDate='+inspDate;
        		var row = this.dsService.findRow('serviceID' , "findRsvtList");
        		this.dsService.setColumn(row, "argument", argument);
        		
        		this.gfnService("findRsvtList",false);
        		
        		this.choInspGrid.setCellProperty("Body", 2, "edittype", "none");
        		
        		editFlag = false;
        		addFlag = false;
        		
        		this.compBox.set_enable(false);
        	}
        		this.btnBox.set_enable(true);
        		this.btnBox2.set_enable(true);

        		trace(this.dsRsvt.saveXML());
        }

        // 예약자목록 선택 시 예약정보 상세조회
        this.dsRsvt_onrowposchanged=function(obj,e)
        {
        	
        	if(obj != null)		
        	{
        		rsvtNo = obj.getColumn(e.newrow, "rsvtNo");
        	}
        	
        	if(rsvtNo != null)
        	{

        		var argument = 'rsvtNo='+rsvtNo;
        		var row = this.dsService.findRow('serviceID' , "findRsvtInspList");
        		this.dsService.setColumn(row, "argument", argument);
        						
        		this.gfnService("findRsvtInspList",false);
        		this.compBox.set_enable(false);
        		
        	}
        	
        	if(obj.getColumn(e.newrow, "cancelYn")=='Y')
        	{
        		this.btnBox2.cancelBtn.set_enable(false);
        	}else{
        		this.btnBox2.cancelBtn.set_enable(true);
        	}
        }

        this.dsRsvt_canrowposchange=function(obj,e)
        {
        	if(addFlag == true || editFlag == true)
        	{
        		var yn = application.confirm("수정하고 있는 작업을  취소 하겠습니까?");
        		if (yn==false)
        		{
        			return false;
        		}
        		else
        		{
        	
        			if(editFlag == true)
        			{
        				this.dsRsvt.reset();
        				editFlag = false;
        				return true;
        				
        			}else if(addFlag == true){
        				addFlag = false;
        				
        				this.dsRsvt.reset();
        				return true;
        			}
        		}
        	}
        	return true;
        }

        // 새예약버튼
        this.btnBox2_addRsvtBtn_onclick = function(obj,e)
        {	
        	if(this.dsRsvt_canrowposchange(null,null))
        	{
        		this.dsRsvt.addRow();	
        		this.newRsvtNo();
        	}
        }

        
        //  새예약시 데이터 초기화
        this.newRsvtNo=function()
        {
        	var row = this.dsRsvt.rowposition;

        	var sysDate = this.gfnDate('yyyy-MM-dd/HHMi',false);

        	var date = sysDate.split("/");
        	
        	this.dsRsvt.setColumn(row, "rsvtDate", date[0]);
        	this.dsRsvt.setColumn(row, "rsvtTime", date[1]);
        	this.dsRsvt.setColumn(row, "rsvtNo", application.rsvtNo);	

        	this.dsInsp.clearData();
        	this.dsChoInsp.clearData();

        	var disArr = ['patNmEd', 'rsvtDateEd','rsvtTimeMask','rsvtNoEd', 'rsvtRespEd',
        				 'regNo1Ed', 'regNo2Ed', 'smsEd', 'ageEd', 'basicInspAmtEd',
        				  'reducAmtEd', 'rsvtAmtEd', 'basicInspSumAmtEd','cancelEd'];
        				  
        	this.compBox.set_enable(true);
        	
        	this.choInspGrid.setCellProperty("Body", 2, "edittype", "normal"); 
        	
        	addFlag = true;
        }

        // 등록번호 팝업
        this.compBox_patPopupBtn_onclick = function(obj,e)
        {
        	this.gfnPatPopup();
        }

        
        this.setPatInfo=function(arry)
        {
        	var patNo = arry[0];
        	var argument = 'patNo='+patNo;
        	var row = this.dsService.findRow('serviceID' , "findPat");
        	this.dsService.setColumn(row, "argument", argument);
        						
        	this.gfnService("findPat",false);
        	this.settingPatInfo();
        }

        this.settingPatInfo=function()
        {
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "patNo", this.dsPat.getColumn(0, "patNo"));
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "patNm", this.dsPat.getColumn(0, "patNm"));
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "gender", this.dsPat.getColumn(0, "gender"));
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "age", this.dsPat.getColumn(0, "age"));
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "rrn1", this.dsPat.getColumn(0, "rrn1"));
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "rrn2", this.dsPat.getColumn(0, "rrn2"));
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "sms", this.dsPat.getColumn(0, "tel"));
        }

        
        // 버튼박스 1 - 추가버튼
        this.btnBox_addBtn_onclick = function(obj,e)
        {	
        	var param = {};
        	this.gfnPopup("SC_PckInspPopForm","sup",param,"");	
        }

        this.pCode=function(retVal)
        {
        	addFlag = true;
        	
        	if(retVal == 1)
        	{	
        		this.autoCalChoInspAmt();
        	}	
        }

        // 추가 검사 선택 후 금액 계산
        this.autoCalChoInspAmt=function()
        {
        	var basicInspSumAmt	= this.dsRsvt.getColumn(this.dsRsvt.rowposition,"basicInspSumAmt");
        	var choInspAmt = this.choInspGrid.getCellText(-2, 3);

        	choInspAmt2 = choInspAmt.replace(",","");    
        	
        	var inspSumAmt;
        	
        	if(!this.gfnIsNull(choInspAmt2))
        	{
        		inspSumAmt	= parseInt(basicInspSumAmt) + parseInt(choInspAmt2);

        	}

        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "inspSumAmt", inspSumAmt);
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "choInspAmt", choInspAmt2);
        	
        }

        // 버튼박스 1 - 삭제버튼
        this.btnBox_delBtn_onclick = function(obj,e)
        {
        	this.dsChoInsp.deleteRow(this.dsChoInsp.rowposition);
        	this.autoCalChoInspAmt();
        }

        // 버튼박스 1 - 수정
        this.choInspGrid_oncelldblclick = function(obj,e)
        {
        	this.choInspGrid.setCellProperty("Body", 2, "edittype", "normal");	
        }

        // 버튼박스 2 - 수정
        this.btnBox2_modiBtn_onclick = function(obj,e)
        {
        	var disArr = ['patNmEd', 'rsvtDateEd','rsvtTimeMask','rsvtNoEd', 'rsvtRespEd',
        				 'regNo1Ed', 'regNo2Ed', 'smsEd', 'ageEd', 'basicInspAmtEd',
        				  'reducAmtEd', 'rsvtAmtEd', 'basicInspSumAmtEd','cancelEd'];
        				  
        	this.compBox.set_enable(true);
        	
        	this.choInspGrid.setCellProperty("Body", 2, "edittype", "normal");  //확인하기
        	editFlag = true;	
        }

        this.choInspGrid_onenterdown = function(obj,e)
        {
        	obj.setCellPos(1);
        	this.autoCalChoInspAmt();
        }

        // 패키지 선택
        this.compBox_pckPopBtn_onclick = function(obj,e)
        {
        	var param = {};
        	this.gfnPopup("SC_PckPopForm","sup",param,"");
        }

        this.pckCode=function(retVal)
        {
        	var pckCd 	= retVal[0];
        	var pckNm 	= retVal[1];
        	var amt 	= retVal[2];
        	
        	this.compBox.pckCdEd.set_value(pckCd);
        	this.compBox.pckNmEd.set_value(pckNm);
        	this.compBox.basicInspAmtEd.set_value(amt);
        	
        	var argument = 'pckCd='+pckCd;
        	var row = this.dsService.findRow('serviceID' , "findPckInspList");
        	this.dsService.setColumn(row, "argument", argument);
        		
        	this.gfnService("findPckInspList",false);	

        	this.autoCalInspAmt();
        	
        }

        // 감면코드 선택

        this.compBox_reducPopBtn_onclick = function(obj,e)
        {
        	var param = {};
        	this.gfnPopup("SC_ReducPopForm","sup",param,"");
        	
        }

        // 팝업 셋팅
        this.setCode=function(code,arrRtn)
        {
        	var reducCd = arrRtn[0];
        	var reducNm = arrRtn[1];
        	var reducAmt = arrRtn[2];
        		
        	this.compBox.reducCdEd.set_value(reducCd);
        	this.compBox.reducNmEd.set_value(reducNm);
        	this.compBox.reducAmtEd.set_value(reducAmt);

        	this.autoCalInspAmt();
        }

        // 검사금액 계산

        this.autoCalInspAmt=function()
        {
        	var reducAmt = this.dsRsvt.getColumn(this.dsRsvt.rowposition,"reducAmt");
        	var basicInspAmt = this.dsRsvt.getColumn(this.dsRsvt.rowposition,"basicInspAmt");
        	var choInspAmt = this.dsRsvt.getColumn(this.dsRsvt.rowposition,"choInspAmt");

        	var inspSumAmt;
        	var basicInspSumAmt;
        	
        	if(!this.gfnIsNull(reducAmt)&&!this.gfnIsNull(basicInspAmt)&&!this.gfnIsNull(choInspAmt)){
        		inspSumAmt = parseInt(basicInspAmt) + parseInt(choInspAmt) - parseInt(reducAmt);
        	}
        	
        	if(!this.gfnIsNull(reducAmt)&&!this.gfnIsNull(basicInspAmt)){
        		inspSumAmt = parseInt(basicInspAmt) - parseInt(reducAmt);
        		basicInspSumAmt = parseInt(basicInspAmt) - parseInt(reducAmt);
        		this.dsRsvt.setColumn(this.dsRsvt.rowposition, "basicInspSumAmt", basicInspSumAmt);	
        		
        	}else if(!this.gfnIsNull(basicInspAmt)&&!this.gfnIsNull(choInspAmt)){
        		inspSumAmt = parseInt(basicInspAmt) + parseInt(choInspAmt);
        		basicInspSumAmt = parseInt(basicInspAmt);
        		this.dsRsvt.setColumn(this.dsRsvt.rowposition, "basicInspSumAmt", basicInspSumAmt);	
        	}

        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "inspSumAmt", inspSumAmt);		
        }

        
        // 버튼박스2 - 저장버튼
        this.btnBox2_saveBtn_onclick = function(obj,e)
        {
        	if(this.supCheckMdData(this.compBox))
        	{
        	
        		var rsvtNo = this.compBox.rsvtNoEd.value;
        		var count = this.dsChoInsp.rowcount;
        		
        		for(i=0; i<count; i++){
        			this.dsChoInsp.setColumn(i,"rsvtNo",rsvtNo);	
        		}
        		
        		trace(this.dsRsvt.saveXML());
        		
        		this.gfnService("batchRsvtProcess",false);
        		this.searchBtn_onclick(null,null);
        	}
        	
        	
        }

        // 	예약취소 버튼
        this.btnBox2_cancelBtn_onclick = function(obj,e)
        {
        	if(confirm("예약을 취소하겠습니까?")){
        		var argument = 'rsvtNo='+rsvtNo+' cancelYn=Y';
        		var row = this.dsService.findRow('serviceID' , "cancelRsvt");
        		this.dsService.setColumn(row, "argument", argument);
        							
        		this.gfnService("cancelRsvt",false);
        		this.searchBtn_onclick(null,null);
        	}

        }

        // 화면로드
        this.SC_RsvtMgtForm_onload = function(obj,e)
        {
        	this.btnBox.set_enable(false);
        	this.btnBox2.set_enable(false);
        }
        	
        // 버튼박스2 - 수납버튼
        this.btnBox2_receBtn_onclick = function(obj,e)
        {
        	this.dsRece.clearData();
        	this.dsRece.addRow();
        	this.dsRece.setColumn(0, "rsvtNo", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "rsvtNo"));
        	this.dsRece.setColumn(0, "rsvtDate", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "rsvtDate"));
        	this.dsRece.setColumn(0, "inspDate", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "inspPlnDate"));
        	this.dsRece.setColumn(0, "basicInspAmt", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "basicInspAmt"));
        	this.dsRece.setColumn(0, "reducAmt", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "reducAmt"));
        	this.dsRece.setColumn(0, "rsvtAmt", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "rsvtAmt"));
        	this.dsRece.setColumn(0, "choInspAmt", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "choInspAmt"));
        	this.dsRece.setColumn(0, "inspSumAmt", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "inspSumAmt"));

        	var param = {dsRece:this.dsRece};
        	this.gfnPopup("SC_RecePopForm","sup",param,"");	
        }

        this.payCo=function(retVal)
        {
        	if(retVal == 1)
        	{	
        			alert("수납이 완료되었습니다.");
        	}
        }

        // 콜백함수
        this.callBackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {

         	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsRsvt.addEventHandler("onrowposchanged", this.dsRsvt_onrowposchanged, this);
            this.dsRsvt.addEventHandler("canrowposchange", this.dsRsvt_canrowposchange, this);
            this.addEventHandler("onload", this.SC_RsvtMgtForm_onload, this);
            this.choInspGrid.addEventHandler("oncelldblclick", this.choInspGrid_oncelldblclick, this);
            this.choInspGrid.addEventHandler("onenterdown", this.choInspGrid_onenterdown, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.compBox.pckPopBtn.addEventHandler("onclick", this.compBox_pckPopBtn_onclick, this);
            this.compBox.reducPopBtn.addEventHandler("onclick", this.compBox_reducPopBtn_onclick, this);
            this.compBox.patPopupBtn.addEventHandler("onclick", this.compBox_patPopupBtn_onclick, this);
            this.btnBox.addBtn.addEventHandler("onclick", this.btnBox_addBtn_onclick, this);
            this.btnBox.delBtn.addEventHandler("onclick", this.btnBox_delBtn_onclick, this);
            this.btnBox2.receBtn.addEventHandler("onclick", this.btnBox2_receBtn_onclick, this);
            this.btnBox2.modiBtn.addEventHandler("onclick", this.btnBox2_modiBtn_onclick, this);
            this.btnBox2.saveBtn.addEventHandler("onclick", this.btnBox2_saveBtn_onclick, this);
            this.btnBox2.addRsvtBtn.addEventHandler("onclick", this.btnBox2_addRsvtBtn_onclick, this);
            this.btnBox2.cancelBtn.addEventHandler("onclick", this.btnBox2_cancelBtn_onclick, this);

        };

        this.loadIncludeScript("SC_RsvtMgtForm.xfdl");

       
    };
}
)();

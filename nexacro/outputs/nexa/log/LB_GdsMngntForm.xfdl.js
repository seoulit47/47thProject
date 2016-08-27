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
                this.set_name("LB_GdsMngntForm");
                this.set_classname("LB_gdsMngntForm");
                this.set_titletext("물품 관리");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGds", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"gdsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ediCd\" type=\"STRING\" size=\"256\"/><Column id=\"vmiYb\" type=\"STRING\" size=\"256\"/><Column id=\"useDept\" type=\"STRING\" size=\"256\"/><Column id=\"stand\" type=\"STRING\" size=\"256\"/><Column id=\"ordUnit\" type=\"STRING\" size=\"256\"/><Column id=\"subulUnit\" type=\"STRING\" size=\"256\"/><Column id=\"cngQnt\" type=\"STRING\" size=\"256\"/><Column id=\"cust\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtPrice\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"spliesDiv\" type=\"STRING\" size=\"256\"/><Column id=\"wh\" type=\"STRING\" size=\"0\"/><Column id=\"rackNo\" type=\"STRING\" size=\"256\"/><Column id=\"insurDiv\" type=\"STRING\" size=\"256\"/><Column id=\"disuseDate\" type=\"STRING\" size=\"256\"/><Column id=\"disuseDiv\" type=\"STRING\" size=\"256\"/><Column id=\"picLoc\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"modDate\" type=\"STRING\" size=\"256\"/><Column id=\"midGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrpCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findGdsList</Col><Col id=\"URL\">his::log/base/findGdsList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsGds=dsGds</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">LCgdsMngtCallbackFunc</Col></Row><Row><Col id=\"serviceID\">saveImg</Col><Col id=\"URL\">his::log/base/saveImg.do</Col><Col id=\"inData\">dsImg=dsImg:u</Col><Col id=\"callbackFunc\">LCgdsMngtCallbackFunc</Col></Row><Row><Col id=\"serviceID\">callGdsCd</Col><Col id=\"URL\">his::log/base/callGdsCd.do</Col><Col id=\"inData\"/><Col id=\"outData\">postCode=postCode</Col><Col id=\"callbackFunc\">LCgdsMngtCallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchGdsProcess</Col><Col id=\"URL\">his::log/base/batchGdsProcess.do</Col><Col id=\"inData\">dsGds=dsGds:u</Col><Col id=\"callbackFunc\">LCgdsMngtCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUseDept", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">기획부</Col></Row><Row><Col id=\"value\">원무팀</Col></Row><Row><Col id=\"value\">연구센터</Col></Row><Row><Col id=\"value\">방사선치료연구팀</Col></Row><Row><Col id=\"value\">비뇨기과</Col></Row><Row><Col id=\"value\">회계팀</Col></Row><Row><Col id=\"value\">정형외과</Col></Row><Row><Col id=\"value\">마취통증의학과</Col></Row><Row><Col id=\"value\">순환기내과</Col></Row><Row><Col id=\"value\">병리과</Col></Row><Row><Col id=\"value\">가정의학과</Col></Row><Row><Col id=\"value\">인사총무팀</Col></Row><Row><Col id=\"value\">안과</Col></Row><Row><Col id=\"value\">피부과</Col></Row><Row><Col id=\"value\">임상연구실</Col></Row><Row><Col id=\"value\">소아청소년과</Col></Row><Row><Col id=\"value\">신경정신과</Col></Row><Row><Col id=\"value\">외과</Col></Row><Row><Col id=\"value\">병동간호과</Col></Row><Row><Col id=\"value\">핵의학과</Col></Row><Row><Col id=\"value\">실험방사선연구실</Col></Row><Row><Col id=\"value\">수술실</Col></Row><Row><Col id=\"value\">흉부외과</Col></Row><Row><Col id=\"value\">산부인과</Col></Row><Row><Col id=\"value\">방사선종양학과</Col></Row><Row><Col id=\"value\">신경과</Col></Row><Row><Col id=\"value\">신경외과</Col></Row><Row><Col id=\"value\">치과</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInsurDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">보험</Col></Row><Row><Col id=\"value\">비보험</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSpliesDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">저장품</Col></Row><Row><Col id=\"value\">비저장품</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDisuseDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">생산중단</Col></Row><Row><Col id=\"value\">일시품절</Col></Row><Row><Col id=\"value\">거래처폐쇄</Col></Row><Row><Col id=\"value\">사용중지</Col></Row><Row><Col id=\"value\">품목대체</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsImg", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"imgName\" type=\"STRING\" size=\"256\"/><Column id=\"imgData\" type=\"BLOB\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new FileDialog("fileDialog", this);
            obj.set_filter("All(*.*)|*.*|");
            obj.set_filterindex("0");
            obj.set_defaultextension("false");
            this.addChild(obj.name, obj);
            obj = new VirtualFile("virtualFile", this);
            this.addChild(obj.name, obj);

            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", "1247", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("물품 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("bigGrpCdStc", "absolute", "17", "61", "87", "27", null, null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("대분류");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("searchGdsCdStc", "absolute", "17", "101", "87", "27", null, null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("물품코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("searchBigGrpCdEd", "absolute", "107", "61", "80", "27", null, null, this);
            obj.set_taborder("4");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("searchGdsCdEd", "absolute", "107", "101", "80", "27", null, null, this);
            obj.set_taborder("5");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("searchBigGrpCdNmEd", "absolute", "225", "61", "150", "27", null, null, this);
            obj.set_taborder("8");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("searchGdsNmStc", "absolute", "225", "101", "87", "27", null, null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("물품명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("searchGdsNmEd", "absolute", "315", "101", "230", "27", null, null, this);
            obj.set_taborder("10");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("midGrpCdStc", "absolute", "386", "61", "87", "27", null, null, this);
            obj.getSetter("taborder").set("11");
            obj.set_text("중분류");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("searchMidGrpCdEd", "absolute", "476", "61", "80", "27", null, null, this);
            obj.set_taborder("12");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("searchMidGrpCdNmEd", "absolute", "594", "61", "150", "27", null, null, this);
            obj.set_taborder("14");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("smGrpCdStc", "absolute", "755", "61", "87", "27", null, null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("소분류");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("searchSmGrpCdEd", "absolute", "845", "61", "80", "27", null, null, this);
            obj.set_taborder("16");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("searchSmGrpCdNmEd", "absolute", "963", "61", "150", "27", null, null, this);
            obj.set_taborder("18");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Grid("gdsGrid", "absolute", "17", "141", "1216", "283", null, null, this);
            obj.set_taborder("20");
            obj.set_binddataset("dsGds");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"대분류\"/><Cell col=\"1\" text=\"중분류\"/><Cell col=\"2\" text=\"소분류\"/><Cell col=\"3\" text=\"물품코드\"/><Cell col=\"4\" text=\"물품명\"/><Cell col=\"5\" text=\"EDI코드\"/><Cell col=\"6\" text=\"수불단위\"/><Cell col=\"7\" text=\"저장품\"/><Cell col=\"8\" text=\"창고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:bigGrpCd\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:midGrpCd\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:smGrpCd\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:gdsCd\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:gdsNm\"/><Cell col=\"5\" text=\"bind:ediCd\"/><Cell col=\"6\" text=\"bind:subulUnit\"/><Cell col=\"7\" text=\"bind:spliesDiv\"/><Cell col=\"8\" text=\"bind:wh\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("gdsBigGrpCdStc", "absolute", "257", "451", "87", "27", null, null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("대분류 코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("gdsBigGrpCdEd", "absolute", "346", "451", "80", "27", null, null, this);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("gdsMidGrpCdStc", "absolute", "481", "451", "87", "27", null, null, this);
            obj.getSetter("taborder").set("25");
            obj.set_text("중분류 코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("gdsMidGrpCdEd", "absolute", "570", "451", "80", "27", null, null, this);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("gdsSmGrpCdStc", "absolute", "705", "451", "87", "27", null, null, this);
            obj.getSetter("taborder").set("28");
            obj.set_text("소분류 코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("gdsSmGrpCdEd", "absolute", "794", "451", "80", "27", null, null, this);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("gdsCdStc", "absolute", "257", "499", "87", "27", null, null, this);
            obj.getSetter("taborder").set("31");
            obj.set_text("물품코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("gdsCdEd", "absolute", "346", "499", "112", "27", null, null, this);
            obj.set_taborder("32");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("gdsNmStc", "absolute", "480", "499", "87", "27", null, null, this);
            obj.getSetter("taborder").set("33");
            obj.set_text("물품명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("gdsNmEd", "absolute", "571", "499", "334", "27", null, null, this);
            obj.set_taborder("34");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("ediCdStc", "absolute", "929", "451", "87", "27", null, null, this);
            obj.getSetter("taborder").set("35");
            obj.set_text("EDI 코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("ediCdEd", "absolute", "1018", "451", "110", "27", null, null, this);
            obj.set_taborder("36");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("vmiCdStc", "absolute", "929", "499", "143", "27", null, null, this);
            obj.getSetter("taborder").set("37");
            obj.set_text("VMI코드 여부");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("standStc", "absolute", "257", "547", "87", "27", null, null, this);
            obj.getSetter("taborder").set("38");
            obj.set_text("규격");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("standEd", "absolute", "346", "547", "112", "27", null, null, this);
            obj.set_taborder("39");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("ordUnitStc", "absolute", "481", "547", "87", "27", null, null, this);
            obj.getSetter("taborder").set("40");
            obj.set_text("발주단위");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("ordUnitEd", "absolute", "570", "547", "112", "27", null, null, this);
            obj.set_taborder("41");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subulUnitStc", "absolute", "257", "595", "87", "27", null, null, this);
            obj.getSetter("taborder").set("42");
            obj.set_text("수불단위");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("subulUnitEd", "absolute", "346", "595", "112", "27", null, null, this);
            obj.set_taborder("43");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("cngQntStc", "absolute", "481", "595", "87", "27", null, null, this);
            obj.getSetter("taborder").set("44");
            obj.set_text("환산수량");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("cngQntEd", "absolute", "570", "595", "112", "27", null, null, this);
            obj.set_taborder("45");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("useDeptStc", "absolute", "704", "547", "88", "27", null, null, this);
            obj.getSetter("taborder").set("46");
            obj.set_text("사용부서");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("useDeptCombo", "absolute", "795", "547", "111", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("47");
            obj.set_innerdataset("dsUseDept");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("insurDivStc", "absolute", "928", "547", "89", "27", null, null, this);
            obj.getSetter("taborder").set("48");
            obj.set_text("보험구분");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("insurDivCombo", "absolute", "1019", "547", "111", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("49");
            obj.set_innerdataset("dsInsurDiv");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("disuseDivStc", "absolute", "928", "595", "89", "27", null, null, this);
            obj.getSetter("taborder").set("50");
            obj.set_text("불용구분");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("disuseDivCombo", "absolute", "1019", "595", "111", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_innerdataset("dsDisuseDiv");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("disuseDateStc", "absolute", "704", "595", "88", "27", null, null, this);
            obj.getSetter("taborder").set("52");
            obj.set_text("불용일자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("spliesDivStc", "absolute", "257", "643", "89", "27", null, null, this);
            obj.getSetter("taborder").set("53");
            obj.set_text("저장품구분");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("spliesDivCombo", "absolute", "348", "643", "111", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("54");
            obj.set_innerdataset("dsSpliesDiv");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("whStc", "absolute", "481", "643", "87", "27", null, null, this);
            obj.getSetter("taborder").set("55");
            obj.set_text("창고");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("whEd", "absolute", "570", "643", "80", "27", null, null, this);
            obj.set_taborder("56");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("goodsImg", "absolute", "1.36%", "440", null, "241", "81.92%", null, this);
            obj.set_taborder("59");
            obj.set_stretch("fit");
            obj.style.set_bordertype("round 25 25");
            this.addChild(obj.name, obj);

            obj = new Button("searchGdsImgBtn", "absolute", "64", "696", "100", "30", null, null, this);
            obj.set_taborder("60");
            obj.set_text("사진 찾아보기");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchBigGrpCdBtn", "absolute", "190", "59", "32", "32", null, null, this);
            obj.set_taborder("62");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchMidGrpCdBtn", "absolute", "559", "59", "32", "32", null, null, this);
            obj.set_taborder("63");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchGdsCdBtn", "absolute", "190", "99", "32", "32", null, null, this);
            obj.set_taborder("64");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchSmGrpCdBtn", "absolute", "928", "59", "32", "32", null, null, this);
            obj.set_taborder("65");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "1144", "59", "90", "32", null, null, this);
            obj.set_taborder("66");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "902", "704", "90", "32", null, null, this);
            obj.set_taborder("67");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "1118", "704", "90", "32", null, null, this);
            obj.set_taborder("68");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "1011", "704", "90", "32", null, null, this);
            obj.set_taborder("69");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchGdsBigGrpBtn", "absolute", "434", "449", "32", "32", null, null, this);
            obj.set_taborder("70");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchGdsMidGrpBtn", "absolute", "658", "448", "32", "32", null, null, this);
            obj.set_taborder("71");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchGdsSmGrpBtn", "absolute", "882", "449", "32", "32", null, null, this);
            obj.set_taborder("72");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchWhBtn", "absolute", "658", "640", "32", "32", null, null, this);
            obj.set_taborder("73");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Calendar("disuseDateCal", "absolute", "795", "595", "111", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("74");

            obj = new CheckBox("vmiCdCheck", "absolute", "1080", "498", "29", "28", null, null, this);
            obj.set_taborder("75");
            obj.style.set_buttonalign("center middle");
            obj.style.set_buttonsize("20");
            obj.style.set_align("center middle");
            obj.style.set_font("12 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LB_gdsMngntForm");
            		p.set_titletext("물품 관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","gdsBigGrpCdEd","value","dsGds","bigGrpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","gdsMidGrpCdEd","value","dsGds","midGrpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","gdsSmGrpCdEd","value","dsGds","smGrpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","gdsCdEd","value","dsGds","gdsCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","gdsNmEd","value","dsGds","gdsNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","standEd","value","dsGds","stand");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","ordUnitEd","value","dsGds","ordUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","subulUnitEd","value","dsGds","subulUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cngQntEd","value","dsGds","cngQnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","useDeptCombo","value","dsGds","useDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","insurDivCombo","value","dsGds","insurDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","disuseDivCombo","value","dsGds","disuseDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","spliesDivCombo","value","dsGds","spliesDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","whEd","value","dsGds","wh");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","disuseDateCal","value","dsGds","disuseDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","vmiCdCheck","value","dsGds","vmiYb");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LB_GdsMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("LB_GdsMngntForm.xfdl", "scripts::logScripts.xjs");
        this.registerScript("LB_GdsMngntForm.xfdl", function() {
        /********************************************************************************                                                                            
        물품 관리 화면                                             						                                                                         
        @Path			물류공통(Logistics Base)              				   				
        @Description	물품을 관리하기 위한 화면							
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 5. 27.                       
              		                    				                                            
        TODO : 물품사진 저장경로 수정하기
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";  		//공통 스크립트
        //include "scripts::logScripts.xjs";			//물류 스크립트

        var saveImageName = "";
        var setGdsCd;								//생성될 물품코드
        var preCode;

        
        this.clickBtn = function(obj,e){
        	switch(obj){ 
        		case this.searchBigGrpCdBtn: 		//대분류 검색
        				this.clickSearchBigGrpCdBtn();	
        				break;
        		case this.searchMidGrpCdBtn:		//중분류 검색
        				this.clickSearchMidGrpCdBtn();
        				break;
        		case this.searchSmGrpCdBtn:			//소분류 검색
        				this.clickSearchSmGrpCdBtn();
        				break;
        		case this.searchGdsCdBtn:			//물품코드 검색
        				this.clickSearchGdsCdBtn();
        				break;
        		case this.searchBtn:				//조회
        				this.clickSearchBtn();
        				break;
        		case this.searchGdsBigGrpCdBtn:		//등록할 대분류 검색
        				this.clickSearchGdsBigGrpGdsBtn();
        				break;
        		case this.searchGdsMidGrpCdBtn:		//등록할 중분류 검색
        				this.clickSearchGdsMidGrpGdsBtn();
        				break;
        		case this.searchGdsSmGrpCdBtn:		//등록할 소분류 검색
        				this.clickSearchGdsSmGrpGdsBtn();
        				break;
        		case this.searchWhBtn:				//창고검색
        				this.clickSearchGdsWhBtn();
        				break;
        		case this.searchGdsImgBtn:			//이미지 저장
        				this.clickSearchgoodsImgBtn();
        				break;		
        		case this.addBtn:					//물품추가
        				this.clickAddBtn();
        				break;
        		case this.delBtn:					//물품삭제
        				this.clickDelBtn();
        				break;				
        		case this.batchBtn:					//저장
        				this.clickBatchBtn();
        				break;		
        	}
        }

        
        this.clickSearchBigGrpCdBtn = function() {	//대분류코드 버튼
        	this.logOpenCdDialog("searchBigGrp");
        }
        this.clickSearchMidGrpCdBtn = function() {	//중분류코드 버튼
        	var secCd = this.searchBigGrpCdEd.value;
        	this.logOpenCdDialog("searchMidGrp", null, secCd);
        }
        this.clickSearchSmGrpCdBtn = function() {	//소분류코드 버튼
        	var secCd = this.searchMidGrpCdEd.value;
        	var thrCd = this.searchBigGrpCdEd.value;
        	this.logOpenCdDialog("searchSmGrp", null, secCd, thrCd);
        }
        this.clickSearchGdsCdBtn = function() {		//물품코드버튼
        	this.logOpenCdDialog("gds");
        }
        this.clickSearchGdsWhBtn = function() {		//창고버튼
        	this.logOpenCdDialog("wh");
        }
        this.clickSearchBtn = function() {			//조회버튼
        	var bGrpCd = this.searchBigGrpCdEd.value;
        	var mGrpCd = this.searchMidGrpCdEd.value;
        	var sGrpCd = this.searchSmGrpCdEd.value;
        	var gdsCd = this.searchGdsCdEd.value;
        	var gdsNm = this.searchGdsNmEd.value;	
        	var argument = 'gdsCd=' + gdsCd + ' gdsNm=' + gdsNm + ' bGrpCd=' + bGrpCd
        					+ ' mGrpCd=' + mGrpCd + ' sGrpCd=' + sGrpCd;
        	this.dsService.setColumn(0, "argument", argument);
        	this.gfnService("findGdsList");		
        }

        
        this.clickAddBtn = function() {				//추가버튼
        	this.dsGds.addRow();
        	this.goodsImg.set_image("");
        	this.searchGdsBigGrpCdBtn.set_visible(true);
        	this.searchGdsMidGrpCdBtn.set_visible(true);
        	this.searchGdsSmGrpCdBtn.set_visible(true);
        	this.searchWhBtn.set_visible(true);
        }
        this.clickSearchGdsBigGrpGdsBtn = function() {  //대분류등록 버튼
        	this.logOpenCdDialog("addBigGrp");
        }
        this.clickSearchGdsMidGrpGdsBtn = function() {	//중분류등록 버튼
        	var secCd = this.gdsBigGrpCdEd.value;
        	if (this.gfnIsNull(secCd)){
        		alert("대분류를 선택하십시오.");
        		return;
        	}
        	this.logOpenCdDialog("addMidGrp", null, secCd);
        }
        this.clickSearchGdsSmGrpGdsBtn = function() {	//소분류등록 버튼
        	var secCd = this.gdsMidGrpCdEd.value;
        	var thrCd = this.gdsBigGrpCdEd.value;
        	if (this.gfnIsNull(thrCd)){					// NULL 체크
        		alert("대분류를 선택하십시오.");
        		return;
        	} else if (this.gfnIsNull(secCd)) {
        		alert("중분류를 선택하십시오.");
        		return;
        	}
        	this.logOpenCdDialog("addSmGrp", null, secCd, thrCd);
        }

        this.setGdsCd = function() {					// 물품코드 생성
        	var bigGrpCd = this.gdsBigGrpCdEd.value;	// 대분류코드 값
        	var midGrpCd = this.gdsMidGrpCdEd.value;	// 중분류코드 값
        	var smGrpCd = this.gdsSmGrpCdEd.value;		// 소분류코드 값
        	preCode = bigGrpCd + midGrpCd + smGrpCd;	// 대중소 합친 코드 값
        	var argument = 'preCode=' + preCode;
        	this.dsService.setColumn(2, "argument", argument);
        	application.setVariable("postCode", "");	// Variable만 던질려면 객체 생성 필요
        	this.gfnService("callGdsCd", false);	
        }

        
        this.clickDelBtn = function() {	//삭제버튼
        	this.dsGds.deleteRow(this.dsGds.rowposition);
        }

        

        this.setLogCodeArray = function(divCode,logCode,secCode,thrCode,arr) {
        	switch (divCode) {
        		case "searchBigGrp":
        			this.searchBigGrpCdEd.set_value(arr[0]);
        			this.searchBigGrpCdNmEd.set_value(arr[1]);
        			break;
        		case "searchMidGrp":
        			this.searchMidGrpCdEd.set_value(arr[0]);
        			this.searchMidGrpCdNmEd.set_value(arr[1]);
        			break;
        		case "searchSmGrp":
        			this.searchSmGrpCdEd.set_value(arr[0]);
        			this.searchSmGrpCdNmEd.set_value(arr[1]);
        			break;
        		case "addBigGrp":
        			this.gdsBigGrpCdEd.set_value(arr[0]);
        			break;
        		case "addMidGrp":
        			this.gdsMidGrpCdEd.set_value(arr[0]);
        			break;
        		case "addSmGrp":
        			this.gdsSmGrpCdEd.set_value(arr[0]);
        			if (this.gfnIsNull(this.gdsSmGrpCdEd.value)) {
        				return;		
        			} else {
        				this.setGdsCd();
        			}
        			break;
        		case "gds":
        			this.searchGdsCdEd.set_value(arr[0]);
        			this.searchGdsNmEd.set_value(arr[1]);
        			break;
        		case "wh":
        			this.whEd.set_value(arr[1]);
        			break;
        	}
        }

        
        // 이미지
        this.clickSearchgoodsImgBtn = function(obj,e) {
        	if (this.gfnIsNull(this.gdsCdEd.value)) {
        		alert("물품 코드를 먼저 등록해 주세요");
        	} else {
        		this.fileDialog.open("FileOpen", FileDialog.LOAD); 
        	}
        }
        this.fileDialog_onclose = function(obj,e)
        {
        	if (e.virtualfiles.length == 0) {
        		alert("사진을 다시 선택해 주세요");
        	} else {
        		var fileName = e.virtualfiles[0].filename; 
        		saveImageName = this.dsGds.getColumn(this.dsGds.rowposition, "gdsCd") + "." + fileName.split(".")[1];
        		var realpath = system.convertRealPath(e.virtualfiles[0].fullpath);
        		this.goodsImg.set_image("file://" + realpath);
        		this.dsGds.setColumn(this.dsGds.rowposition, "picLoc", saveImageName);
        		this.virtualFile.open(e.virtualfiles[0].fullpath, VirtualFile.openRead|VirtualFile.openBinary);
        	}
        }

        //	VirtualFile이 정상적으로 close될 경우 자동 호출
        this.virtualFile_onsuccess = function(obj,e)
        {
        	switch (e.reason) {
        		case 1 : // open
        			this.virtualFile.read();
        			break;
        		case 2 : // close
        			this.gfnService("saveImg", false);
        			this.dsImg.deleteAll();
        			this.dsGds.setColumn(this.dsGds.rowposition, "picLoc", saveImageName);
        			break;
        		case 3 : // read
        			this.dsImgRow = this.dsImg.getRowCount();
        			this.dsImg.addRow();
        			this.dsImg.setColumn(this.dsImgRow, "imgName", saveImageName);
        			this.dsImg.setColumn(this.dsImgRow, "imgData", e.binarydata);
        			obj.getFileSize();
        			this.virtualFile.close();
        			break;
        	}
        }

        this.virtualFile_onerror = function(obj,e)
        {
        	trace(e.errormsg);
        }

        // 일괄처리
        this.clickBatchBtn = function() {
        	var modiTime = this.gfnLocalDate() + " " + this.gfnLocalTime();
        	var modiIp = this.gfnUserIP();
        	var modiId = application.gdsEmp.getColumn(0, "empNo");	
        	for (var i = 0; i < this.dsGds.rowcount; i++) {
        		if (this.dsGds.getRowType(i) == 4) {		//수정일때
        			this.dsGds.setColumn(i, "modWorkerId", modiId);
        			this.dsGds.setColumn(i, "modWorkerIp", modiIp);
        			this.dsGds.setColumn(i, "modDate", modiTime);	
        		} else if (this.dsGds.getRowType(i)==2) {	//추가일때
        			this.dsGds.setColumn(i, "regWorkerId", modiId);
        			this.dsGds.setColumn(i, "regWorkerIp", modiIp);
        			this.dsGds.setColumn(i, "regDate", modiTime);		
        		}
        	}
        	this.gfnService("batchGdsProcess", false);	
        }
        // 물품 그리드 셀 클릭시 이미지 변경
        this.gdsGrid_oncellclick = function(obj,e) {
        	this.img = this.dsGds.getColumn(this.dsGds.rowposition, "picLoc");		
        	if (this.gfnIsNull(this.img)) {
        		this.goodsImg.image = "";
        		this.goodsImg.set_image(null);
        	} else {
        		this.goodsImg.set_image("pic::goods/" + this.img);
        	}	
        }

        // 콤보 이벤트
        this.spliesCombo_oncloseup = function(obj,e) {
        	if (e.postvalue == '저장품') {
        		this.clickSearchGdsWhBtn();
        	}
        }

        
        // 콜백함수
        this.LCgdsMngtCallbackFunc = function(svcID,errorCode,errorMsg) {
        	if (errorCode < 0) {
        		this.gfnErrorPopup(svcID, errorMsg)
        	} else {
        		if (svcID == "findGdsList") {
        			if (this.dsGds.getRowCount()==0) {
        				alert("검색된 결과가 없습니다.");
        			}
        		} else if (svcID == "callGdsCd") {
        			alert(application.postCode);
        			if (application.postCode.length == 1) {
        				setGdsCd = preCode+"000"+application.postCode;
        			} else if (application.postCode.length == 2) {
        				setGdsCd = preCode+"00"+application.postCode;
        			} else if (application.postCode.length == 3) {
        				setGdsCd = preCode+"0"+application.postCode;
        			}
        			alert(setGdsCd);
        			this.gdsCdEd.set_value(setGdsCd);
        		}
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.fileDialog.addEventHandler("onclose", this.fileDialog_onclose, this);
            this.virtualFile.addEventHandler("onsuccess", this.virtualFile_onsuccess, this);
            this.virtualFile.addEventHandler("onerror", this.virtualFile_onerror, this);
            this.bigGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchGdsCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchGdsNmStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.midGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.smGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.gdsGrid.addEventHandler("oncellclick", this.gdsGrid_oncellclick, this);
            this.gdsBigGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.gdsMidGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.gdsSmGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.gdsCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.gdsNmStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ediCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.vmiCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.standStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ordUnitStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subulUnitStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.cngQntStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.useDeptStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.insurDivStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.disuseDivStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.disuseDateStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.spliesDivStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.spliesDivCombo.addEventHandler("oncloseup", this.spliesCombo_oncloseup, this);
            this.whStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchGdsImgBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchBigGrpCdBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchMidGrpCdBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchGdsCdBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchSmGrpCdBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchBtn.addEventHandler("onclick", this.clickBtn, this);
            this.addBtn.addEventHandler("onclick", this.clickBtn, this);
            this.batchBtn.addEventHandler("onclick", this.clickBtn, this);
            this.delBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchGdsBigGrpBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchGdsMidGrpBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchGdsSmGrpBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchWhBtn.addEventHandler("onclick", this.clickBtn, this);

        };

        this.loadIncludeScript("LB_GdsMngntForm.xfdl");

       
    };
}
)();

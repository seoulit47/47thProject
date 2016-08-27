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
                this.set_name("LE_GdsInptMngntForm");
                this.set_classname("LE_GdsInptMngntForm");
                this.set_titletext("물품검수관리");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCtrtList</Col><Col id=\"URL\">his::log/inpt/findCtrtList.do</Col><Col id=\"outData\">dsCtrtInfo=dsCtrtInfo</Col><Col id=\"callbackFunc\">findCtrtListCallback</Col></Row><Row><Col id=\"serviceID\">findCtrtHistList</Col><Col id=\"URL\">his::log/inpt/findCtrtHistList.do</Col><Col id=\"outData\">dsCtrtInfoDetail=dsCtrtInfoDetail</Col></Row><Row><Col id=\"outData\">dsGdsInpt=dsGdsInpt</Col><Col id=\"serviceID\">findGdsInptList</Col><Col id=\"URL\">his::log/inpt/findGdsInptList.do</Col></Row><Row><Col id=\"outData\">dsBuyDemd=dsBuyDemd</Col><Col id=\"URL\">his::log/inpt/findDelivDay.do</Col><Col id=\"serviceID\">findDelivDay</Col></Row><Row><Col id=\"serviceID\">registerGdsInpt</Col><Col id=\"outData\">[Undefined]</Col><Col id=\"URL\">his::log/inpt/registerGdsInpt.do</Col><Col id=\"inData\">dsGdsInpt=dsGdsInpt:u dsCtrtInfo=dsCtrtInfo:u</Col></Row><Row><Col id=\"serviceID\">cancelGdsInpt</Col><Col id=\"URL\">his::log/inpt/cancelGdsInpt.do</Col><Col id=\"inData\">dsGdsInpt=dsGdsInpt:u dsCtrtInfo=dsCtrtInfo:u</Col><Col id=\"outData\">[Undefined]</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGdsInpt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"delayDays\" type=\"STRING\" size=\"256\"/><Column id=\"delayGijunPay\" type=\"STRING\" size=\"256\"/><Column id=\"delayPrzAmt\" type=\"STRING\" size=\"256\"/><Column id=\"delayRate\" type=\"STRING\" size=\"256\"/><Column id=\"delivDay\" type=\"STRING\" size=\"256\"/><Column id=\"gdsInptNo\" type=\"STRING\" size=\"256\"/><Column id=\"inptDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCtrtInfo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("false");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtDate\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtDiv\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtStart\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEnd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtSeq\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtRespoWorker\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtRespoWorkerNm\" type=\"STRING\" size=\"256\"/><Column id=\"cust\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtStat\" type=\"STRING\" size=\"256\"/><Column id=\"buyAprvYb\" type=\"STRING\" size=\"256\"/><Column id=\"signSsYb\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtCon\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtStand\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtQnt\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtPrice\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"buyReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"inptYb\" type=\"STRING\" size=\"256\"/><Column id=\"fm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtGds\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCtrtInfoDetail", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"acntSeq\" type=\"STRING\" size=\"256\"/><Column id=\"asstSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"cngQnt\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtDate\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtPrice\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtQnt\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtSeq\" type=\"STRING\" size=\"256\"/><Column id=\"demdDate\" type=\"STRING\" size=\"256\"/><Column id=\"demdSeq\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"gdsNm\" type=\"STRING\" size=\"256\"/><Column id=\"gdsStand\" type=\"STRING\" size=\"256\"/><Column id=\"mngntAtcCode\" type=\"STRING\" size=\"256\"/><Column id=\"nsNo\" type=\"STRING\" size=\"256\"/><Column id=\"ordUnit\" type=\"STRING\" size=\"256\"/><Column id=\"receiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"respoWorker\" type=\"STRING\" size=\"256\"/><Column id=\"subul\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBuyDemd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"buyDemdDate\" type=\"STRING\" size=\"256\"/><Column id=\"receiptNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.16%", "4", null, "60", "-42%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "3.1%", "-4", null, "60", "83.36%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("물품검수관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "1.28%", "64", null, "30", "93.2%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("게약일자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("startCtrtDateCal", "absolute", "7.52%", "64", null, "30", "81.76%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Static("Static00", "absolute", "18.08%", "68", null, "24", "79.2%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("~");
            obj.style.set_align("middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("endCtrtDateCal", "absolute", "20.48%", "64", null, "30", "68.8%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Static("subCodeStc01", "absolute", "31.84%", "64", null, "30", "63.92%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("검수여부");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Radio("inptRadio", "absolute", "36.56%", "69", null, "22", "52.72%", null, this);
            this.addChild(obj.name, obj);
            var inptRadio_innerdataset = new Dataset("inptRadio_innerdataset", this.inptRadio);
            inptRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">검수</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미검수</Col></Row></Rows>");
            obj.set_innerdataset(inptRadio_innerdataset);
            obj.set_taborder("11");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Div("searchDiv", "absolute", "53.76%", "61", null, "145", "0.96%", null, this);
            obj.set_taborder("12");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "2.66%", "11", null, "30", "84.04%", null, this.searchDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("계약일자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "2.66%", "54", null, "30", "84.04%", null, this.searchDiv);
            obj.getSetter("taborder").set("1");
            obj.set_text("품  명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "2.66%", "97", null, "30", "84.04%", null, this.searchDiv);
            obj.getSetter("taborder").set("2");
            obj.set_text("납품일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Calendar("CtrtDateCal", "absolute", "17.38%", "10", null, "30", "57.27%", null, this.searchDiv);
            this.searchDiv.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.set_innerdataset("@dsCtrtInfo");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_textcolorcolumn("ctrtDate");
            obj = new Edit("ctrtSeqEd", "absolute", "43.44%", "10", null, "28", "47.34%", null, this.searchDiv);
            obj.set_taborder("4");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "55.14%", "11", null, "30", "30.14%", null, this.searchDiv);
            obj.getSetter("taborder").set("5");
            obj.set_text("계약담당자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Edit("ctrtRespoWorkerEd", "absolute", "70.74%", "10", null, "28", "17.2%", null, this.searchDiv);
            obj.set_taborder("6");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Edit("ctrtRespoWorkerNmEd", "absolute", "83.51%", "10", null, "28", "1.6%", null, this.searchDiv);
            obj.set_taborder("7");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Edit("fmNmEd", "absolute", "17.38%", "50", null, "36", "1.6%", null, this.searchDiv);
            obj.set_taborder("8");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Calendar("delivDayCal", "absolute", "17.2%", "96", null, "30", "57.45%", null, this.searchDiv);
            this.searchDiv.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.set_innerdataset("@dsGdsInpt");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_textcolorcolumn("delayDays");
            obj = new Static("subCodeStc04", "absolute", "46.63%", "97", null, "30", "40.07%", null, this.searchDiv);
            obj.getSetter("taborder").set("10");
            obj.set_text("수량");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Edit("ctrtQntEd", "absolute", "61.35%", "97", null, "28", "23.76%", null, this.searchDiv);
            obj.set_taborder("11");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Div("searchDiv00", "absolute", "53.76%", "221", null, "145", "0.96%", null, this);
            obj.set_taborder("13");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "2.66%", "11", null, "30", "84.04%", null, this.searchDiv00);
            obj.getSetter("taborder").set("10");
            obj.set_text("검수일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv00.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "2.84%", "55", null, "30", "83.87%", null, this.searchDiv00);
            obj.getSetter("taborder").set("11");
            obj.set_text("지 체 일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv00.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "2.66%", "97", null, "30", "84.04%", null, this.searchDiv00);
            obj.getSetter("taborder").set("12");
            obj.set_text("지체비율");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv00.addChild(obj.name, obj);
            obj = new Calendar("inptDateCal", "absolute", "17.38%", "10", null, "30", "57.27%", null, this.searchDiv00);
            this.searchDiv00.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.set_innerdataset("@dsGdsInpt");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_textcolorcolumn("inptDate");
            obj = new Static("subCodeStc03", "absolute", "55.14%", "35", null, "38", "30.14%", null, this.searchDiv00);
            obj.getSetter("taborder").set("15");
            obj.set_text("지체기준액");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv00.addChild(obj.name, obj);
            obj = new Edit("delayGijunPayEd", "absolute", "71.81%", "35", null, "36", "4.79%", null, this.searchDiv00);
            obj.set_taborder("16");
            this.searchDiv00.addChild(obj.name, obj);
            obj = new Edit("delayPrzAmtEd", "absolute", "71.63%", "91", null, "36", "4.96%", null, this.searchDiv00);
            obj.set_taborder("17");
            this.searchDiv00.addChild(obj.name, obj);
            obj = new Edit("delayDaysEd", "absolute", "17.38%", "50", null, "36", "56.91%", null, this.searchDiv00);
            obj.set_taborder("18");
            this.searchDiv00.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "55.14%", "91", null, "38", "30.14%", null, this.searchDiv00);
            obj.getSetter("taborder").set("20");
            obj.set_text("지체상금");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "43.26%", "52", null, "36", "53.9%", null, this.searchDiv00);
            obj.getSetter("taborder").set("21");
            obj.set_text("일");
            obj.style.set_font("10 arial");
            this.searchDiv00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "43.26%", "95", null, "36", "53.9%", null, this.searchDiv00);
            obj.getSetter("taborder").set("22");
            obj.set_text("%");
            obj.style.set_font("10 arial");
            this.searchDiv00.addChild(obj.name, obj);
            obj = new Edit("delayRateEd", "absolute", "17.38%", "92", null, "36", "56.91%", null, this.searchDiv00);
            obj.set_taborder("23");
            this.searchDiv00.addChild(obj.name, obj);

            obj = new Grid("inptGrid", "absolute", "1.28%", "103", null, "612", "47.12%", null, this);
            obj.set_taborder("14");
            obj.set_binddataset("dsCtrtInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"116\"/><Column size=\"109\"/><Column size=\"169\"/><Column size=\"89\"/><Column size=\"77\"/><Column size=\"78\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계약번호\"/><Cell col=\"1\" text=\"거래처\"/><Cell col=\"2\" text=\"품  명\"/><Cell col=\"3\" text=\"계약일자\"/><Cell col=\"4\" text=\"검수여부\"/><Cell col=\"5\" text=\"계약금액\"/></Band><Band id=\"body\"><Cell text=\"bind:ctrtNo\"/><Cell col=\"1\" text=\"bind:cust\"/><Cell col=\"2\" text=\"bind:ctrtGds\"/><Cell col=\"3\" text=\"bind:ctrtDate\" mask=\"####/##/##\"/><Cell col=\"4\" text=\"bind:inptYb\"/><Cell col=\"5\" text=\"bind:ctrtAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("CtrtDtlHistGrid", "absolute", "53.52%", "379", null, "333", "1.12%", null, this);
            obj.set_taborder("15");
            obj.set_binddataset("dsCtrtInfoDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"123\"/><Column size=\"206\"/><Column size=\"65\"/><Column size=\"69\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"물품코드\"/><Cell col=\"1\" text=\"물품명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"계약단가\"/></Band><Band id=\"body\"><Cell text=\"bind:gdsCd\"/><Cell col=\"1\" text=\"bind:gdsNm\"/><Cell col=\"2\" text=\"bind:ctrtQnt\"/><Cell col=\"3\" text=\"bind:ordUnit\"/><Cell col=\"4\" text=\"bind:ctrtPrice\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("inptCancelBtn", "absolute", "75.68%", "720", null, "32", "17.12%", null, this);
            obj.set_taborder("16");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("printStateBtn", "absolute", "91.44%", "720", null, "32", "1.36%", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("PrintBtn");
            obj.style.set_background("@gradation URL('img::printBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("PrintBtn");
            this.addChild(obj.name, obj);

            obj = new Button("inptCheckBtn", "absolute", "83.52%", "720", null, "32", "9.28%", null, this);
            obj.set_taborder("18");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "47.28%", "64", null, "32", "46.8%", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("SearchBtn");
            this.addChild(obj.name, obj);

            obj = new Button("inptYnBtn", "absolute", "0.96%", "723", null, "32", "91.76%", null, this);
            obj.set_taborder("20");
            obj.style.set_background("@gradation URL('img::permitBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("InptYnBtn");
            obj.set_cssclass("InptYnBtn");
            this.addChild(obj.name, obj);

            obj = new Button("inptYnCancelBtn", "absolute", "9.28%", "723", null, "32", "83.44%", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("InptYnCancelBtn");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("InptYnCancelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 145, this.searchDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.searchDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 145, this.searchDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.searchDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LE_GdsInptMngntForm");
            		p.set_titletext("물품검수관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","searchDiv.ctrtRespoWorkerEd","value","dsCtrtInfo","ctrtRespoWorker");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","searchDiv.ctrtRespoWorkerNmEd","value","dsCtrtInfo","ctrtRespoWorkerNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","searchDiv.fmNmEd","value","dsCtrtInfo","fm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","searchDiv00.delayDaysEd","value","dsGdsInpt","delayDays");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","searchDiv00.delayRateEd","value","dsGdsInpt","delayRate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","searchDiv00.delayGijunPayEd","value","dsGdsInpt","delayGijunPay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","searchDiv00.delayPrzAmtEd","value","dsGdsInpt","delayPrzAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","searchDiv.ctrtQntEd","value","dsCtrtInfo","ctrtRespoWorkerNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","searchDiv.ctrtQntEd","","dsCtrtInfo","ctrtQnt");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LE_GdsInptMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("LE_GdsInptMngntForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        *물품검수 관리																*
        *                                                                               *
        * @Path		    log-LE_gdsInptMngntForm											*
        *																				*
        * @Description 	물품검수관리에서 구매한 무룸을 수정,삭제,조회 하고		*
        *               등록된 물품을 승인완료,승인취소를 한다.					*
        *               																*
        * @Author	    전보현    						                                *
        * 									                                            *
        * Created on 2016. 05.29                             		                    *
        *									                                            *
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";

        var startDate;   //검색시작일
        var endDate;     //검색종료일
        var radio;  //라디오버튼값
        var selectCtrtNo;  //선택된데이터의 계약번호

        //계약된 물품내역 조회Btn
        this.searchBtn_onclick = function(obj,e)
        {
        	this.dsCtrtInfo.clearData();
            this.dsBuyDemd.clearData();
            this.dsCtrtInfoDetail.clearData();
            this.dsGdsInpt.clearData();
            
        	startDate=this.startCtrtDateCal.value;  	
        	endDate=this.endCtrtDateCal.value;      
        	radio=this.inptRadio.value;      	
        	
        	//조회 검색조건
        	if(startDate==null){   
        	    alert("검색시작일 선택하세요.");		
        	}else if(endDate==null){
        		alert("검색종료일 선택하세요.");
        	}else if(startDate > endDate){
        	    alert("검색종료일이 확인 후 다시 선택하세요.");
        	}else if(radio==null){
        		alert("검수여부 선택하세요");
        	}else{	
        		this.gfnService("findCtrtList", false);
        	}	
        	
        }
        //콜백함수
        this.findCtrtListCallback = function(svcID,errorCode,errorMsg){
        	trace(this.dsCtrtInfo.saveXML());
        	 if(radio == 1){
        		this.dsCtrtInfo.filter("");
        		//this.dsCtrtInfo.filter("ctrtDate >="+startDate+"&& ctrtDate <="+endDate+"&& inptYb=='Y'");
        	    this.inptCancelBtn.set_visible(true);
        	 }else if(radio == 2){
        		
        	    this.dsCtrtInfo.filter("");
        	    //this.dsCtrtInfo.filter("ctrtDate >="+startDate+"&& ctrtDate <="+endDate+"&& inptYb=='N'");
        	    this.inptCheckBtn.set_visible(true);	   
        	    //this.Data(this.dsCtrtInfo,0);  전송 받아오는 데이터셋정보를 alert으로 표시하는 함수.	   
        	 }
        }
        //오늘날짜함수
        this.fn_dateTime = function() 
        {
            var dDate = new Date();     
            var sRtn =  dDate.getFullYear()
                  + (dDate.getMonth()+1).toString().padLeft(2, "0")
                  +  dDate.getDate().toString().padLeft(2, "0");
            return sRtn;
        }

        
        //검수취소Btn
        this.inptCancelBtn_onclick = function(obj,e)
        {
        	this.dsCtrtInfo.setColumn(this.dsCtrtInfo.currentrow,"inptYb","N");  //검수상태(Y->N) 변경
        	this.dsGdsInpt.deleteRow(this.dsCtrtInfo.rowposition);
        	
        	this.gfnService("cancelGdsInpt","false");  //검수확인취소, 검수여부변경.
        }

        //저장 Btn
        this.inptCheckBtn_onclick = function(obj,e)
        {
        	this.dsGdsInpt.addRow();   
        	
            this.dsCtrtInfo.setColumn(this.dsCtrtInfo.rowposition,"inptYb","Y");  //검수상태 currentrow,rowposition 현재 row
            this.dsGdsInpt.setColumn(this.dsCtrtInfo.rowposition,"gdsInptNo",this.ctrtSeqEd.value);   //물품검수번호
            this.dsGdsInpt.setColumn(this.dsCtrtInfo.rowposition,"ctrtNo",selectCtrtNo);    //계약번호
            this.dsGdsInpt.setColumn(this.dsBuyDemd.rowposition,"delivDay",this.delivDayCal.value);  //납품일      
         	this.dsGdsInpt.setColumn(this.dsGdsInpt.rowposition,"inptDate",this.fn_dateTime() ); //오늘날짜검수일자 셋팅   
        	this.dsGdsInpt.setColumn(this.dsCtrtInfo.rowposition,"amt",this.dsCtrtInfo.getColumn(this.dsCtrtInfo.rowposition,"ctrtAmt"));//계약금액 셋팅
            this.dsGdsInpt.setColumn(this.dsCtrtInfo.rowposition,"delayGijunPay",this.dsCtrtInfo.getColumn(this.dsCtrtInfo.rowposition,"ctrtAmt"));//지체기준액  셋팅	
        	this.dsGdsInpt.setColumn(this.dsGdsInpt.rowposition,"delayRate","0.15");//지체비율 셋팅    
               
           //지체일, 지체상금 구하기.
           var delivDay = this.delivDayCal.value;  //납품일
           var inptDay = this.inptDateCal.value;    //검수일
           
           if(delivDay<inptDay){
        		this.dsGdsInpt.setColumn(this.dsGdsInpt.rowposition,"delayDays","0");  //지체일   
        		this.dsGdsInpt.setColumn(this.dsGdsInpt.rowposition,"delayPrzAmt","0");  //지체상금
           }else{
        		this.dsGdsInpt.setColumn(this.dsGdsInpt.rowposition,"delayDays",delivDay-inptDay);  //지체일   		
        		this.dsGdsInpt.setColumn(this.dsGdsInpt.rowposition,"delayPrzAmt",this.delayGijunPayEd.value*0.15*this.delayDaysEd.value);  //지체상금		
           } 
        	this.gfnService("registerGdsInpt","false");   //검수확인등록, 검수여부변경.
        }
        //프린트버튼이벤트
        this.printStateBtn_onclick = function(obj,e)
        {
        	
        }

        //그리드 셀클릭 이벤트
        this.inptGrid_oncelldblclick = function(obj,e)
        {
        	selectCtrtNo = this.dsCtrtInfo.getColumn(this.dsCtrtInfo.rowposition,"ctrtNo");   
        	var selectBuyReceiptNo=this.dsCtrtInfo.getColumn(this.dsCtrtInfo.rowposition,"buyReceiptNo");   //선택된 구매접수번호

        	this.dsService.setColumn(1,"argument","selectCtrtNo="+selectCtrtNo);
        	this.dsService.setColumn(2,"argument","selectCtrtNo="+selectCtrtNo);
        	this.dsService.setColumn(3,"argument","selectBuyReceiptNo="+selectBuyReceiptNo);
        	    
        	this.gfnService("findCtrtHistList","false");   //계약번호에 해당하는 계약상세정보만 불러옴.
        	this.gfnService("findGdsInptList","false");   //계약번호에 해당하는 검수내역만 불러옴.	 
        	this.gfnService("findDelivDay","false");   //계약번호에 해당하는 납품일만 불러옴.
        }

        //승인버튼
        this.inptYnBtn_onclick = function(obj,e)
        {
        	var recStat = "Y";
        	var selCount = this.inptGrid.currentrow;
        	this.dsCtrtInfo.setColumn(selCount, "inptYn", recStat);
        }
        //승인취소버튼
        this.inptYnCancelBtn_onclick = function(obj,e)
        {
        	var recStat = "N";
        	var selCount = this.inptGrid.currentrow;
        	this.dsCtrtInfo.setColumn(selCount, "inptYn", recStat);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv00.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv00.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv00.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv00.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv00.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.inptGrid.addEventHandler("oncelldblclick", this.inptGrid_oncelldblclick, this);
            this.inptCancelBtn.addEventHandler("onclick", this.inptCancelBtn_onclick, this);
            this.printStateBtn.addEventHandler("onclick", this.printStateBtn_onclick, this);
            this.inptCheckBtn.addEventHandler("onclick", this.inptCheckBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.inptYnBtn.addEventHandler("onclick", this.inptYnBtn_onclick, this);
            this.inptYnCancelBtn.addEventHandler("onclick", this.inptYnCancelBtn_onclick, this);

        };

        this.loadIncludeScript("LE_GdsInptMngntForm.xfdl");

       
    };
}
)();

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
                this.set_name("LI_PrcsWhsMngntForm");
                this.set_classname("LI_PrcsWhsMngntForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCtrt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtDiv\" type=\"STRING\" size=\"256\"/><Column id=\"inptYb\" type=\"STRING\" size=\"256\"/><Column id=\"cust\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtDate\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtTel\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtRespoWorker\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtGds\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtPrid\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtCon\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"bussNo\" type=\"STRING\" size=\"256\"/><Column id=\"busCtgNm\" type=\"STRING\" size=\"256\"/><Column id=\"prsdntNm\" type=\"STRING\" size=\"256\"/><Column id=\"buyReceiptNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCtrtList</Col><Col id=\"URL\">his::log/ctrt/findCtrtList.do</Col><Col id=\"outData\">dsCtrt=dsCtrt</Col></Row><Row><Col id=\"serviceID\">findPrcsWhsList</Col><Col id=\"URL\">his::log/store/findPrcsWhsList.do</Col><Col id=\"outData\">dsPrcsWhs=dsPrcsWhs</Col><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">batchPrcsWhsProcess</Col><Col id=\"URL\">his::log/store/batchPrcsWhsProcess.do</Col><Col id=\"inData\">dsPrcsWhs=dsPrcsWhs:u</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"URL\">his::log/store/findPrcsWhsHistList.do</Col><Col id=\"serviceID\">findPrcsWhsHistList</Col><Col id=\"outData\">dsPrcsWhsHist=dsPrcsWhsHist</Col></Row><Row><Col id=\"URL\">his::log/store/batchPrcsWhsHistProcess.do</Col><Col id=\"serviceID\">batchPrcsWhsHistProcess</Col><Col id=\"inData\">dsPrcsWhsHist=dsPrcsWhsHist:u</Col></Row><Row><Col id=\"serviceID\">callPcWhsPstInvenReflect</Col><Col id=\"URL\">his::log/store/callPcWhsPstInvenReflect.do</Col><Col id=\"inData\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInptYn", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"inptYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"inptYn\">Y</Col></Row><Row><Col id=\"inptYn\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrcsWhs", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"buyWhsNo\" type=\"STRING\" size=\"256\"/><Column id=\"buyWhsDate\" type=\"STRING\" size=\"256\"/><Column id=\"monthDlineYb\" type=\"STRING\" size=\"256\"/><Column id=\"cust\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtCon\" type=\"STRING\" size=\"256\"/><Column id=\"fmNm\" type=\"STRING\" size=\"256\"/><Column id=\"signStat\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrcsWhsHist", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"buyWhsNo\" type=\"STRING\" size=\"256\"/><Column id=\"buyWhsHistNo\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"subulUnit\" type=\"STRING\" size=\"256\"/><Column id=\"ordUnit\" type=\"STRING\" size=\"256\"/><Column id=\"cngQnt\" type=\"STRING\" size=\"256\"/><Column id=\"giWhsQnt\" type=\"STRING\" size=\"256\"/><Column id=\"hyunWhsQnt\" type=\"STRING\" size=\"256\"/><Column id=\"price\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"whCd\" type=\"STRING\" size=\"256\"/><Column id=\"signStat\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("ctrtGrid", "absolute", "1.28%", "149", null, "603", "67.04%", null, this);
            obj.set_taborder("7");
            obj.getSetter("class").set("AreaGrid");
            obj.set_binddataset("dsCtrt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"61\"/><Column size=\"76\"/><Column size=\"178\"/><Column size=\"77\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계약번호\"/><Cell col=\"1\" text=\"거래처명\"/><Cell col=\"2\" text=\"계약내용\"/><Cell col=\"3\" text=\"구매접수번호\"/></Band><Band id=\"body\"><Cell text=\"bind:ctrtNo\"/><Cell col=\"1\" text=\"bind:cust\"/><Cell col=\"2\" text=\"bind:ctrtCon\"/><Cell col=\"3\" text=\"bind:buyReceiptNo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "0", null, "60", "0.08%", null, this);
            obj.set_taborder("18");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this);
            obj.getSetter("taborder").set("19");
            obj.set_text("구매입고관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctrtStartCal", "absolute", "9.76%", "90", null, "30", "80.96%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Static("Static02", "absolute", "19.92%", "94", null, "23", "78.48%", null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("~");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 9 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctrtEndCal", "absolute", "21.36%", "90", null, "30", "69.28%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Button("ctrtSearchBtn", "absolute", "31.68%", "89", null, "32", "60.96%", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "2.24%", "90", null, "30", "90.96%", null, this);
            obj.getSetter("taborder").set("25");
            obj.set_text("계약일자");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Div("whsDiv", "absolute", "33.92%", "149", null, "222", "0.88%", null, this);
            obj.set_taborder("89");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Edit("ctrtNoEd", "absolute", "49.57%", "97", null, "30", "41.53%", null, this.whsDiv);
            obj.set_taborder("13");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Edit("gdsCdEd", "absolute", "31.06%", "97", null, "30", "59.56%", null, this.whsDiv);
            obj.set_taborder("15");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Edit("fmNmEd", "absolute", "37.15%", "137", null, "30", "32.52%", null, this.whsDiv);
            obj.set_taborder("18");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Edit("custEd", "absolute", "53.59%", "54", null, "30", "37.15%", null, this.whsDiv);
            obj.set_taborder("19");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Edit("whsNoEd", "absolute", "12.67%", "54", null, "30", "79.21%", null, this.whsDiv);
            obj.set_taborder("21");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "23.39%", "97", null, "30", "69.79%", null, this.whsDiv);
            obj.getSetter("taborder").set("34");
            obj.set_text("물품코드");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc15", "absolute", "22.41%", "54", null, "30", "67.84%", null, this.whsDiv);
            obj.getSetter("taborder").set("42");
            obj.set_text("구매입고일자");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc16", "absolute", "80.51%", "54", null, "30", "10.35%", null, this.whsDiv);
            obj.getSetter("taborder").set("43");
            obj.set_text("월마감여부");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc17", "absolute", "46.29%", "54", null, "30", "47.38%", null, this.whsDiv);
            obj.getSetter("taborder").set("44");
            obj.set_text("거래처명");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc18", "absolute", "60.29%", "97", null, "30", "32.4%", null, this.whsDiv);
            obj.getSetter("taborder").set("45");
            obj.set_text("계약내용");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc19", "absolute", "30.69%", "137", null, "30", "63.82%", null, this.whsDiv);
            obj.getSetter("taborder").set("46");
            obj.set_text("품명");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc20", "absolute", "64.19%", "54", null, "30", "28.87%", null, this.whsDiv);
            obj.getSetter("taborder").set("47");
            obj.set_text("결재상태");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc21", "absolute", "41.9%", "97", null, "30", "51.4%", null, this.whsDiv);
            obj.getSetter("taborder").set("48");
            obj.set_text("계약번호");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc22", "absolute", "1.85%", "8", null, "30", "86.96%", null, this.whsDiv);
            obj.getSetter("taborder").set("49");
            obj.set_text("구매입고 정보");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "1.97%", "54", null, "30", "88.31%", null, this.whsDiv);
            obj.getSetter("taborder").set("51");
            obj.set_text("구매입고번호");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Combo("monthDlineYbCombo", "absolute", "90.5%", "54", null, "30", "2.56%", null, this.whsDiv);
            this.whsDiv.addChild(obj.name, obj);
            obj.set_taborder("55");
            obj = new Combo("inptYbCombo", "absolute", "71.99%", "53", null, "30", "20.46%", null, this.whsDiv);
            this.whsDiv.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_innerdataset("@dsInptYn");
            obj.set_datacolumn("inptYn");
            obj = new TextArea("ctrtConArea", "absolute", "69.18%", "97", null, "107", "2.68%", null, this.whsDiv);
            obj.set_taborder("57");
            this.whsDiv.addChild(obj.name, obj);
            obj = new Calendar("WhsCal", "absolute", "33.13%", "54", null, "30", "55.05%", null, this.whsDiv);
            this.whsDiv.addChild(obj.name, obj);
            obj.set_taborder("58");

            obj = new Div("whsHistDiv", "absolute", "33.92%", "397", null, "179", "0.88%", null, this);
            obj.set_taborder("97");
            obj.set_text("Div01");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "1.83%", "8", null, "30", "86.97%", null, this.whsHistDiv);
            obj.getSetter("taborder").set("1");
            obj.set_text("구매입고 내역");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Edit("giWhsQntEd", "absolute", "11.81%", "112", null, "30", "78.81%", null, this.whsHistDiv);
            obj.set_taborder("7");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Edit("cngQntEd", "absolute", "50.06%", "64", null, "30", "40.84%", null, this.whsHistDiv);
            obj.set_taborder("9");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Edit("ordUnitEd", "absolute", "31.61%", "64", null, "30", "61.38%", null, this.whsHistDiv);
            obj.set_taborder("10");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Edit("subulUntiEd", "absolute", "12.05%", "64", null, "30", "80.44%", null, this.whsHistDiv);
            obj.set_taborder("11");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Edit("amtEd", "absolute", "70.28%", "112", null, "30", "19.37%", null, this.whsHistDiv);
            obj.set_taborder("12");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Edit("priceEd", "absolute", "50.79%", "112", null, "30", "39.95%", null, this.whsHistDiv);
            obj.set_taborder("13");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Edit("hyunWhsQntEd", "absolute", "32.28%", "112", null, "30", "58.34%", null, this.whsHistDiv);
            obj.set_taborder("14");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "63.22%", "112", null, "30", "31.43%", null, this.whsHistDiv);
            obj.getSetter("taborder").set("16");
            obj.set_text("금액");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc09", "absolute", "3.08%", "64", null, "30", "89.67%", null, this.whsHistDiv);
            obj.getSetter("taborder").set("19");
            obj.set_text("수불단위");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc10", "absolute", "41.21%", "66", null, "30", "51.78%", null, this.whsHistDiv);
            obj.getSetter("taborder").set("20");
            obj.set_text("환산수량");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc11", "absolute", "22.51%", "64", null, "30", "70.23%", null, this.whsHistDiv);
            obj.getSetter("taborder").set("21");
            obj.set_text("발주단위");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc12", "absolute", "3.05%", "112", null, "30", "89.89%", null, this.whsHistDiv);
            obj.getSetter("taborder").set("22");
            obj.set_text("기입고량");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc13", "absolute", "23.51%", "112", null, "30", "69.43%", null, this.whsHistDiv);
            obj.getSetter("taborder").set("23");
            obj.set_text("현입고량");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc14", "absolute", "43.85%", "112", null, "30", "50.91%", null, this.whsHistDiv);
            obj.getSetter("taborder").set("24");
            obj.set_text("단가");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "60.89%", "66", null, "30", "32.1%", null, this.whsHistDiv);
            obj.getSetter("taborder").set("25");
            obj.set_text("창고코드");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Edit("whCdEd", "absolute", "69.74%", "64", null, "30", "21.16%", null, this.whsHistDiv);
            obj.set_taborder("26");
            this.whsHistDiv.addChild(obj.name, obj);
            obj = new Combo("inptYbCombo", "absolute", "88.44%", "65", null, "30", "3.94%", null, this.whsHistDiv);
            this.whsHistDiv.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_innerdataset("@dsInptYn");
            obj.set_datacolumn("inptYn");
            obj = new Static("subCodeStc20", "absolute", "80.69%", "66", null, "30", "12.42%", null, this.whsHistDiv);
            obj.getSetter("taborder").set("28");
            obj.set_text("결재상태");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.whsHistDiv.addChild(obj.name, obj);

            obj = new Button("whsBatchBtn", "absolute", "82.48%", "111", null, "32", "10.4%", null, this);
            obj.set_taborder("100");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("callBtn", "absolute", "90.24%", "111", null, "32", "0.96%", null, this);
            obj.set_taborder("101");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 222, this.whsDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("89");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.whsDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 179, this.whsHistDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("97");
            		p.set_text("Div01");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.whsHistDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LI_PrcsWhsMngntForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","whsDiv.whsNoEd","value","dsPrcsWhs","buyWhsNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","whsDiv.WhsCal","value","dsPrcsWhs","buyWhsDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","whsDiv.custEd","value","dsPrcsWhs","cust");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","whsDiv.inptYbCombo","value","dsPrcsWhs","signStat");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","whsDiv.monthDlineYbCombo","value","dsPrcsWhs","monthDlineYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","whsDiv.gdsCdEd","value","dsPrcsWhs","gdsCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","whsDiv.ctrtNoEd","value","dsPrcsWhs","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","whsDiv.fmNmEd","value","dsPrcsWhs","fmNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","whsDiv.ctrtConArea","value","dsPrcsWhs","ctrtCon");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","whsHistDiv.inptYbCombo","value","dsPrcsWhs","signStat");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","whsHistDiv.subulUntiEd","value","dsPrcsWhsHist","subulUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","whsHistDiv.ordUnitEd","value","dsPrcsWhsHist","ordUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","whsHistDiv.cngQntEd","value","dsPrcsWhsHist","cngQnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","whsHistDiv.whCdEd","value","dsPrcsWhsHist","whCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","whsHistDiv.inptYbCombo","text","dsPrcsWhsHist","signStat");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","whsHistDiv.giWhsQntEd","value","dsPrcsWhsHist","giWhsQnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","whsHistDiv.hyunWhsQntEd","value","dsPrcsWhsHist","hyunWhsQnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","whsHistDiv.priceEd","value","dsPrcsWhsHist","price");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","whsHistDiv.amtEd","value","dsPrcsWhsHist","amt");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LI_PrcsWhsMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("LI_PrcsWhsMngntForm.xfdl", "scripts::logScripts.xjs");
        this.registerScript("LI_PrcsWhsMngntForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 구매입고 관리																*
        *                                                                               *
        * @Path		    LI_PrcsWhsMngntForm						    			    	*
        *																				*
        * @Description 	구매입고 관리에서 계약물품을 입고 조회, 등록,수정,삭제한다*
        * @Author	    강찬모    						                                *
        * 									                                            *
        * Created on 2016. 06. 02                            		                    *
        *									                                            *
        ********************************************************************************/

        /***************************************************************************************************
        *                                         공통 Script Include                                      *
        ***************************************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include	"scripts::logScripts.xjs";

        /***************************************************************************************************
        *                                      폼 EVENT START                                        	   *
        /*-------------------------------------------------------------------------------------------------+
        >>  onload 이벤트
        +-------------------------------------------------------------------------------------------------*/
        this.LI_PrcsWhsMngntForm_onload = function(obj,e)
        {
        	
        }

        /***************************************************************************************************
        *                                            계약 조회                                            *
        ***************************************************************************************************/
        this.anspListBtn_onclick = function(obj,e)
        {
        	var ctrtStartCal = this.ctrtStartCal.value;
        	var ctrtEndCal = this.ctrtEndCal.value;
        	var ctrtCal = "ctrtStartCal='"+ctrtStartCal+"' ctrtEndCal='"+ctrtEndCal+"'";
        	this.dsService.setColumn(0, "argument", ctrtCal);
        	this.gfnService("findCtrtList", false);
        }

        /***************************************************************************************************
        *                                           구매입고 및 내역 조회                                *
        ***************************************************************************************************/

        this.ctrtGrid_oncellclick = function(obj,e)
        {	
        	var ctrtCount = this.ctrtGrid.currentrow;
         	var ctrtNo = this.dsCtrt.getColumn(ctrtCount, "ctrtNo");
         	var cust = this.dsCtrt.getColumn(ctrtCount, "cust");
         	var ctrtCon = this.dsCtrt.getColumn(ctrtCount, "ctrtCon");
         	var ctrtGds = this.dsCtrt.getColumn(ctrtCount, "ctrtGds");
         	var gdsCd = this.dsCtrt.getColumn(ctrtCount, "gdsCd");

         	var setCtrtNo = "ctrtNo='"+ctrtNo+"'";
         	this.dsService.setColumn(1, "argument", setCtrtNo);
        	this.gfnService("findPrcsWhsList", false); 			// 계약번호로 구매입고 조회

        	if(this.dsPrcsWhs.rowcount!=0){		// 구매입고 데이터 있을 시 입고내역 조회
        		var buyWhsNo = this.dsPrcsWhs.getColumn(0, "buyWhsNo");
        		var setWhsNo = "buyWhsNo='"+buyWhsNo+"'";
        		this.dsService.setColumn(3, "argument", setWhsNo);
        		this.dsService.setColumn(5, "argument", setWhsNo); // call 프로시저 세팅
        		this.gfnService("findPrcsWhsHistList", false);
        	}else if(this.dsPrcsWhs.rowcount==0){						// 구매입고 데이터 없을 시
        		trace(this.dsPrcsWhs.saveXML());
        		this.dsPrcsWhs.addRow(); // 구매입고 행 추가
        		var ctrtNo = this.dsCtrt.getColumn(ctrtCount, "ctrtNo");
        		var buyWhsNo = "WHS"+ctrtNo.substr(4,7);
        		var setWhsNo = "buyWhsNo='"+buyWhsNo+"'";
        		this.dsService.setColumn(5, "argument", setWhsNo); // call 프로시저 세팅
        		var count = this.whsGrid.currentrow;
        		this.dsPrcsWhs.setColumn(count, "buyWhsNo", buyWhsNo);
        		this.dsPrcsWhs.setColumn(count, "ctrtNo", ctrtNo);
        		this.dsPrcsWhs.setColumn(count, "cust", cust);
        		this.dsPrcsWhs.setColumn(0, "ctrtCon", ctrtCon);
        		this.dsPrcsWhs.setColumn(0, "fmNm", ctrtGds);
        		this.dsPrcsWhs.setColumn(0, "gdsCd", gdsCd);
        		this.dsPrcsWhs.setColumn(0, "buyWhsDate", this.Today());
        		this.dsPrcsWhs.setColumn(0, "monthDlineYb", "N");
        		this.dsPrcsWhs.setColumn(0, "signStat", "N");
        		
        		var buyWhsNo = this.dsPrcsWhs.getColumn(0, "buyWhsNo");
        		var setWhsNo = "buyWhsNo='"+buyWhsNo+"'";
        		var setSignStat = this.dsPrcsWhs.getColumn(0, "signStat");
        		this.dsService.setColumn(3, "argument", setWhsNo);
        		this.gfnService("findPrcsWhsHistList", false);	// 입고내역 조회 
        		this.dsPrcsWhsHist.addRow();	// 입고내역 행 추가
        		this.dsPrcsWhsHist.setColumn(0, "signStat", setSignStat);	    
        		this.dsPrcsWhsHist.setColumn(0, "buyWhsNo", buyWhsNo);	    
        		this.dsPrcsWhsHist.setColumn(0, "gdsCd", gdsCd);
        		this.dsPrcsWhsHist.setColumn(0, "buyWhsHistNo", 1);
        	}	

        }

        /***************************************************************************************************
        *                                           구매입고 및 내역 저장                                *
        ***************************************************************************************************/
        this.whsBatchBtn_onclick = function(obj,e)
        {
        	var strXml = this.dsPrcsWhs.saveXML("dsPrcsWhs");
        	trace(strXml);
        	this.gfnService("batchPrcsWhsProcess",false);
        	this.gfnService("batchPrcsWhsHistProcess",false);
        }

        

        

        
        this.Today = function ()
        {
            var sToday = "";
            var objDate = new Date();
            var sToday  = objDate.getFullYear() + "";
            var sMonth = objDate.getMonth()+1;
            var sDate = objDate.getDate();
            
            if(sMonth.toString().length == 1){
              sMonth = "0" + sMonth;
            }
           if(sDate.toString().length == 1){
              sDate = "0" + sDate;
            }
            sToday = sToday+sMonth+sDate;
            return sToday;
        }

        /***************************************************************************************************
        *                                      구매입고 및 내역 현재고 반영                             *
        ***************************************************************************************************/
        this.callBtn_onclick = function(obj,e)
        {
        	this.gfnService("callPcWhsPstInvenReflect","false");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LI_PrcsWhsMngntForm_onload, this);
            this.ctrtGrid.addEventHandler("oncellclick", this.ctrtGrid_oncellclick, this);
            this.ctrtEndCal.addEventHandler("onchanged", this.menuDiv_ctrtEndPridCal_onchanged, this);
            this.ctrtEndCal.addEventHandler("oneditclick", this.menuDiv_ctrtEndPridCal_oneditclick, this);
            this.ctrtSearchBtn.addEventHandler("onclick", this.anspListBtn_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsDiv.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsDiv.subCodeStc15.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsDiv.subCodeStc16.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsDiv.subCodeStc17.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsDiv.subCodeStc18.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsDiv.subCodeStc19.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsDiv.subCodeStc20.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsDiv.subCodeStc21.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsDiv.subCodeStc22.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsHistDiv.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsHistDiv.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsHistDiv.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsHistDiv.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsHistDiv.subCodeStc11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsHistDiv.subCodeStc12.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsHistDiv.subCodeStc13.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsHistDiv.subCodeStc14.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsHistDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsHistDiv.subCodeStc20.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whsBatchBtn.addEventHandler("onclick", this.whsBatchBtn_onclick, this);
            this.callBtn.addEventHandler("onclick", this.callBtn_onclick, this);

        };

        this.loadIncludeScript("LI_PrcsWhsMngntForm.xfdl");

       
    };
}
)();

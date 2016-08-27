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
                this.set_name("SN_IngredMgt");
                this.set_classname("SN_음식관리");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCodeList</Col><Col id=\"URL\">his::sup/nutritive/findCodeList.do</Col><Col id=\"outData\">dsCode=dsCode</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findIngredList</Col><Col id=\"URL\">his::sup/nutritive/findIngredList.do</Col><Col id=\"outData\">dsIngred=dsIngred</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchIngredProcess</Col><Col id=\"URL\">his::sup/nutritive/batchIngredProcess.do</Col><Col id=\"inData\">dsIngred=dsIngred:U</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"smallCode1\" type=\"STRING\" size=\"256\"/><Column id=\"fullName1\" type=\"STRING\" size=\"256\"/><Column id=\"smallCode2\" type=\"STRING\" size=\"256\"/><Column id=\"fullName2\" type=\"STRING\" size=\"256\"/><Column id=\"smallCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsIngred", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"ingredGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"ingredCd\" type=\"STRING\" size=\"256\"/><Column id=\"ingredNm\" type=\"STRING\" size=\"256\"/><Column id=\"spec\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"chngQty\" type=\"STRING\" size=\"256\"/><Column id=\"chngQty2\" type=\"STRING\" size=\"256\"/><Column id=\"chngQty3\" type=\"STRING\" size=\"256\"/><Column id=\"ingredFlag\" type=\"STRING\" size=\"256\"/><Column id=\"minOrdQty\" type=\"STRING\" size=\"256\"/><Column id=\"saftyStkQty\" type=\"STRING\" size=\"256\"/><Column id=\"itemMclasCd\" type=\"STRING\" size=\"256\"/><Column id=\"autoOrderYn\" type=\"STRING\" size=\"256\"/><Column id=\"autoOutYn\" type=\"STRING\" size=\"256\"/><Column id=\"stockYn\" type=\"STRING\" size=\"256\"/><Column id=\"addYn\" type=\"STRING\" size=\"256\"/><Column id=\"meatYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rate\" type=\"STRING\" size=\"256\"/><Column id=\"roundFlag\" type=\"STRING\" size=\"256\"/><Column id=\"roundDec\" type=\"STRING\" size=\"256\"/><Column id=\"roundNum\" type=\"STRING\" size=\"256\"/><Column id=\"notes\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit1\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit2\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit3\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit4\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit5\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit7\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit8\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit9\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit11\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit16\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit17\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit18\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit22\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit23\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit25\" type=\"STRING\" size=\"256\"/><Column id=\"spliesDiv\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtPrice\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"subulUnit\" type=\"STRING\" size=\"256\"/><Column id=\"ordUnit\" type=\"STRING\" size=\"256\"/><Column id=\"hospcls\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "1250", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4%", "-3", null, "60", "72.32%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("식품관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("codeGrid", "absolute", "2.24%", "107", null, "316", "67.92%", null, this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCode");
            obj.style.set_border("2 solid #808080ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"97\"/><Column size=\"80\"/><Column size=\"143\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"중분류\"/><Cell col=\"2\" text=\"세분류\"/><Cell col=\"3\" text=\"분류명\"/></Band><Band id=\"body\"><Cell style=\"background:white;background2:white;\" text=\"bind:smallCode1\" suppress=\"1\"/><Cell col=\"1\" style=\"background:white;background2:white;\" text=\"bind:fullName1\" suppress=\"1\"/><Cell col=\"2\" style=\"background:white;background2:white;\" text=\"bind:smallCode2\"/><Cell col=\"3\" style=\"background:white;background2:white;\" text=\"bind:smallCode\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("IngredGrid", "absolute", "33.12%", "107", null, "316", "2.08%", null, this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsIngred");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"129\"/><Column size=\"212\"/><Column size=\"124\"/><Column size=\"132\"/><Column size=\"111\"/><Column size=\"100\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"식품코드\"/><Cell col=\"1\" text=\"식품명\"/><Cell col=\"2\" text=\"계약단가\"/><Cell col=\"3\" text=\"품목코드\"/><Cell col=\"4\" text=\"재고단위\"/><Cell col=\"5\" text=\"구매단위\"/></Band><Band id=\"body\"><Cell text=\"bind:ingredCd\"/><Cell col=\"1\" text=\"bind:ingredNm\"/><Cell col=\"2\" text=\"bind:ctrtPrice\"/><Cell col=\"3\" text=\"bind:gdsCd\"/><Cell col=\"4\" text=\"bind:subulUnit\"/><Cell col=\"5\" text=\"bind:ordUnit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("ingredCdEd", "absolute", "42.24%", "72", null, "30", "47.68%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "33.12%", "72", null, "30", "58.4%", null, this);
            obj.set_taborder("5");
            obj.set_text("식품코드");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("ingredNmEd", "absolute", "52.96%", "72", null, "30", "31.52%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "1134", "70", "90", "32", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "1134", "712", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("modBtn", "absolute", "1035", "712", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "2.24%", "72", null, "30", "67.92%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("  식품분류");
            obj.style.set_background("gainsboro");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "2.32%", "432", null, "273", "2.08%", null, this);
            obj.set_taborder("17");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc10", "absolute", "0%", "0", null, "30", "0%", null, this.compBox);
            obj.getSetter("taborder").set("70");
            obj.set_text("  음식 상세정보");
            obj.style.set_background("gainsboro");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "1.34%", "42", null, "30", "91.34%", null, this.compBox);
            obj.set_taborder("71");
            obj.set_text("식품분류");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ingredGrpCdEd", "absolute", "9.16%", "42", null, "30", "78.99%", null, this.compBox);
            obj.set_taborder("72");
            obj.set_enable("false");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("unitEd", "absolute", "30.17%", "42", null, "30", "57.98%", null, this.compBox);
            obj.set_taborder("73");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "22.27%", "42", null, "30", "70.42%", null, this.compBox);
            obj.set_taborder("74");
            obj.set_text("단위");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "1.34%", "79", null, "30", "91.34%", null, this.compBox);
            obj.set_taborder("80");
            obj.set_text("식품코드");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ingredCdEd", "absolute", "9.16%", "79", null, "30", "78.99%", null, this.compBox);
            obj.set_taborder("81");
            obj.set_enable("false");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("minOrdQtyEd", "absolute", "30.17%", "79", null, "30", "57.98%", null, this.compBox);
            obj.set_taborder("82");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "22.27%", "79", null, "30", "70.42%", null, this.compBox);
            obj.set_taborder("83");
            obj.set_text("최소발주량");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "1.34%", "116", null, "30", "91.34%", null, this.compBox);
            obj.set_taborder("89");
            obj.set_text("식품명");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ingredNmEd", "absolute", "9.16%", "116", null, "30", "78.99%", null, this.compBox);
            obj.set_taborder("90");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("chngQty3Ed", "absolute", "30.17%", "116", null, "30", "57.98%", null, this.compBox);
            obj.set_taborder("91");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div07", "absolute", "22.27%", "116", null, "30", "70.42%", null, this.compBox);
            obj.set_taborder("92");
            obj.set_text("영양환산량");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "1.34%", "153", null, "30", "91.34%", null, this.compBox);
            obj.set_taborder("98");
            obj.set_text("견적구분");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("chngQtyEd", "absolute", "30.17%", "153", null, "30", "57.98%", null, this.compBox);
            obj.set_taborder("100");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div10", "absolute", "22.27%", "153", null, "30", "70.42%", null, this.compBox);
            obj.set_taborder("101");
            obj.set_text("구매환산량");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div12", "absolute", "1.34%", "190", null, "30", "91.34%", null, this.compBox);
            obj.set_taborder("107");
            obj.set_text("규격");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("specEd", "absolute", "9.16%", "190", null, "30", "57.98%", null, this.compBox);
            obj.set_taborder("108");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div15", "absolute", "1.34%", "227", null, "30", "91.34%", null, this.compBox);
            obj.set_taborder("116");
            obj.set_text("반올림");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rateEd", "absolute", "30.17%", "227", null, "30", "57.98%", null, this.compBox);
            obj.set_taborder("125");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div13", "absolute", "22.27%", "227", null, "30", "70.42%", null, this.compBox);
            obj.set_taborder("126");
            obj.set_text("단가");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "43.87%", "79", null, "30", "48.82%", null, this.compBox);
            obj.set_taborder("129");
            obj.set_text("에너지");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "43.87%", "116", null, "30", "48.82%", null, this.compBox);
            obj.set_taborder("130");
            obj.set_text("비타민E");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "43.87%", "153", null, "30", "48.82%", null, this.compBox);
            obj.set_taborder("131");
            obj.set_text("당질");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div11", "absolute", "43.87%", "190", null, "30", "48.82%", null, this.compBox);
            obj.set_taborder("132");
            obj.set_text("비타민B1");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div14", "absolute", "43.87%", "227", null, "30", "48.82%", null, this.compBox);
            obj.set_taborder("133");
            obj.set_text("칼슘");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit7Ed", "absolute", "52.02%", "227", null, "30", "41.34%", null, this.compBox);
            obj.set_taborder("134");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit16Ed", "absolute", "52.02%", "190", null, "30", "41.34%", null, this.compBox);
            obj.set_taborder("135");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit4Ed", "absolute", "52.02%", "153", null, "30", "41.34%", null, this.compBox);
            obj.set_taborder("136");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit22Ed", "absolute", "52.02%", "116", null, "30", "41.34%", null, this.compBox);
            obj.set_taborder("137");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit1Ed", "absolute", "52.02%", "79", null, "30", "41.34%", null, this.compBox);
            obj.set_taborder("138");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div16", "absolute", "62.61%", "79", null, "30", "30.08%", null, this.compBox);
            obj.set_taborder("139");
            obj.set_text("단백질");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div17", "absolute", "62.61%", "116", null, "30", "30.08%", null, this.compBox);
            obj.set_taborder("140");
            obj.set_text("철");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div18", "absolute", "62.61%", "153", null, "30", "30.08%", null, this.compBox);
            obj.set_taborder("141");
            obj.set_text("칼륨");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div19", "absolute", "62.61%", "190", null, "30", "30.08%", null, this.compBox);
            obj.set_taborder("142");
            obj.set_text("비타민B2");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div20", "absolute", "62.61%", "227", null, "30", "30.08%", null, this.compBox);
            obj.set_taborder("143");
            obj.set_text("콜레스테롤");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit23Ed", "absolute", "70.59%", "227", null, "30", "22.77%", null, this.compBox);
            obj.set_taborder("144");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit17Ed", "absolute", "70.59%", "190", null, "30", "22.77%", null, this.compBox);
            obj.set_taborder("145");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit11Ed", "absolute", "70.59%", "153", null, "30", "22.77%", null, this.compBox);
            obj.set_taborder("146");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit9Ed", "absolute", "70.59%", "116", null, "30", "22.77%", null, this.compBox);
            obj.set_taborder("147");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit2Ed", "absolute", "70.59%", "79", null, "30", "22.77%", null, this.compBox);
            obj.set_taborder("148");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div21", "absolute", "80.92%", "79", null, "30", "11.76%", null, this.compBox);
            obj.set_taborder("149");
            obj.set_text("인");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div22", "absolute", "80.92%", "116", null, "30", "11.76%", null, this.compBox);
            obj.set_taborder("150");
            obj.set_text("지질");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div23", "absolute", "80.92%", "153", null, "30", "11.76%", null, this.compBox);
            obj.set_taborder("151");
            obj.set_text("식이섬유");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div24", "absolute", "80.92%", "190", null, "30", "11.76%", null, this.compBox);
            obj.set_taborder("152");
            obj.set_text("비타민B6");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div25", "absolute", "80.92%", "227", null, "30", "11.76%", null, this.compBox);
            obj.set_taborder("153");
            obj.set_text("총지방산");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit25Ed", "absolute", "88.74%", "227", null, "30", "4.62%", null, this.compBox);
            obj.set_taborder("154");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit18Ed", "absolute", "88.74%", "190", null, "30", "4.62%", null, this.compBox);
            obj.set_taborder("155");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit5Ed", "absolute", "88.74%", "153", null, "30", "4.62%", null, this.compBox);
            obj.set_taborder("156");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit3Ed", "absolute", "88.74%", "116", null, "30", "4.62%", null, this.compBox);
            obj.set_taborder("157");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit8Ed", "absolute", "88.74%", "79", null, "30", "4.62%", null, this.compBox);
            obj.set_taborder("158");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "43.19%", "42", null, "30", "1.6%", null, this.compBox);
            obj.getSetter("taborder").set("159");
            obj.set_text("음식 영양소 정보");
            obj.style.set_background("lightgrey");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "58.99%", "79", null, "30", "38.74%", null, this.compBox);
            obj.getSetter("taborder").set("160");
            obj.set_text("Kcal");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "58.99%", "116", null, "30", "38.74%", null, this.compBox);
            obj.getSetter("taborder").set("161");
            obj.set_text("mg");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "58.99%", "153", null, "30", "38.74%", null, this.compBox);
            obj.getSetter("taborder").set("162");
            obj.set_text("g");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "58.99%", "190", null, "30", "38.74%", null, this.compBox);
            obj.getSetter("taborder").set("163");
            obj.set_text("mg");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "58.99%", "227", null, "30", "38.74%", null, this.compBox);
            obj.getSetter("taborder").set("164");
            obj.set_text("mg");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "77.56%", "79", null, "30", "20.17%", null, this.compBox);
            obj.getSetter("taborder").set("165");
            obj.set_text("g");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "77.56%", "116", null, "30", "20.17%", null, this.compBox);
            obj.getSetter("taborder").set("166");
            obj.set_text("mg");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "77.56%", "153", null, "30", "20.17%", null, this.compBox);
            obj.getSetter("taborder").set("167");
            obj.set_text("mg");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "77.56%", "190", null, "30", "20.17%", null, this.compBox);
            obj.getSetter("taborder").set("168");
            obj.set_text("mg");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "77.56%", "227", null, "30", "20.17%", null, this.compBox);
            obj.getSetter("taborder").set("169");
            obj.set_text("mg");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "95.71%", "80", null, "30", "2.02%", null, this.compBox);
            obj.getSetter("taborder").set("170");
            obj.set_text("mg");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "95.71%", "117", null, "30", "2.02%", null, this.compBox);
            obj.getSetter("taborder").set("171");
            obj.set_text("g");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "95.71%", "154", null, "30", "2.02%", null, this.compBox);
            obj.getSetter("taborder").set("172");
            obj.set_text("g");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "95.71%", "191", null, "30", "2.02%", null, this.compBox);
            obj.getSetter("taborder").set("173");
            obj.set_text("mg");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "95.71%", "228", null, "30", "2.02%", null, this.compBox);
            obj.getSetter("taborder").set("174");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("roundFlagEd", "absolute", "9.14%", "227", null, "30", "78.96%", null, this.compBox);
            obj.set_taborder("175");
            obj.set_enable("true");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ingredFlagEd", "absolute", "9.14%", "153", null, "30", "78.96%", null, this.compBox);
            obj.set_taborder("176");
            obj.set_enable("true");
            this.compBox.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 106, 30, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("식품코드");
            		p.style.set_background("wheat");
            		p.style.set_color("black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("10 다음_Regular");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1192, 273, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");
            		p.set_enable("false");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SN_음식관리");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","compBox.nutrit7Ed","value","dsIngred","nutrit7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","compBox.nutrit16Ed","value","dsIngred","nutrit16");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","compBox.nutrit4Ed","value","dsIngred","nutrit4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","compBox.nutrit22Ed","value","dsIngred","nutrit22");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","compBox.nutrit1Ed","value","dsIngred","nutrit1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","compBox.nutrit23Ed","value","dsIngred","nutrit23");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","compBox.nutrit17Ed","value","dsIngred","nutrit17");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","compBox.nutrit11Ed","value","dsIngred","nutrit11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","compBox.nutrit9Ed","value","dsIngred","nutrit9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","compBox.nutrit2Ed","value","dsIngred","nutrit2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","compBox.nutrit25Ed","value","dsIngred","nutrit25");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","compBox.nutrit18Ed","value","dsIngred","nutrit18");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","compBox.nutrit5Ed","value","dsIngred","nutrit5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","compBox.nutrit3Ed","value","dsIngred","nutrit3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","compBox.nutrit8Ed","value","dsIngred","nutrit8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","compBox.rateEd","value","dsIngred","rate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","compBox.specEd","value","dsIngred","spec");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","compBox.chngQtyEd","value","dsIngred","chngQty");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","compBox.ingredNmEd","value","dsIngred","ingredNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","compBox.chngQty3Ed","value","dsIngred","chngQty3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","compBox.minOrdQtyEd","value","dsIngred","minOrdQty");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","compBox.ingredCdEd","value","dsIngred","ingredCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","compBox.unitEd","value","dsIngred","unit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","compBox.ingredGrpCdEd","value","dsIngred","ingredGrpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","compBox.roundFlagEd","value","dsIngred","roundFlag");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","compBox.ingredFlagEd","value","dsIngred","ingredFlag");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SN_IngredMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SN_IngredMgtForm.xfdl", function() {
        // 공통 스크립트
        //include "scripts::commonScripts.xjs";

        // 변수
        var ingredGrpCd;

        // 화면로드
        this.SN_IngredMgt_onload = function(obj,e)
        {
        	var argument = 'formDiv='+"ingred";
        	var row = this.dsService.findRow("serviceID", "findCodeList");

        	this.dsService.setColumn(row, "argument", argument);
        	
        	this.gfnService("findCodeList", false);
        }

        // 코드그리드 클릭
        this.dsCode_onrowposchanged = function(obj,e)
        {
        	this.compBox.set_enable(false);
        	
        	ingredGrpCd=obj.getColumn(e.newrow , "smallCode");
        	
        	this.codeClick();
        	
        }

        // 조회버튼
        this.searchBtn_onclick = function(obj,e)
        {
        	this.compBox.set_enable(false);
        	
        	var ingredCd = this.ingredCdEd.value;
        	var ingredNm = this.ingredNmEd.value;
        	
        	var argument = 'ingredCd='+ingredCd+' ingredNm='+ingredNm;
        	
        	var row = this.dsService.findRow("serviceID", "findIngredList");

        	this.dsService.setColumn(row, "argument", argument);
        	
        	this.gfnService("findIngredList", false);

        	alert("조회되었습니다.");
        }

        // 조회버튼
        this.codeClick=function()
        {	
        	var argument = 'ingredGrpCd='+ingredGrpCd;
        	
        	var row = this.dsService.findRow("serviceID", "findIngredList");

        	this.dsService.setColumn(row, "argument", argument);
        	
        	this.gfnService("findIngredList", false);
        		
        }

        // 콜백함수
        this.callBackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {

         	}
        }

        // 수정버튼
        this.modBtn_onclick = function(obj,e)
        {
        	this.compBox.set_enable(true);	
        }

        // 저장버튼
        this.saveBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchIngredProcess");
        	alert("저장되었습니다.");
        	
        	this.searchBtn_onclick(null,null);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCode.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.addEventHandler("onload", this.SN_IngredMgt_onload, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.modBtn.addEventHandler("onclick", this.modBtn_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);

        };

        this.loadIncludeScript("SN_IngredMgtForm.xfdl");

       
    };
}
)();

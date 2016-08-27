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
                this.set_name("SN_FoodAddPopForm");
                this.set_classname("SN_음식관리");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,746,743);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findIngredList</Col><Col id=\"URL\">his::sup/nutritive/findIngredList.do</Col><Col id=\"inData\">[Undefined]</Col><Col id=\"outData\">dsFood=dsFood:u dsIngred=dsIngred</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchFoodAddFormProcess</Col><Col id=\"URL\">his::sup/nutritive/batchFoodAddFormProcess.do</Col><Col id=\"outData\"/><Col id=\"inData\">dsFood=dsFood:U dsFoodDtl=dsFoodDtl:U</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFood", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"foodGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodType\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/><Column id=\"notes\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit1\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit2\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit3\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit4\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit5\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit7\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit8\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit9\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit11\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit16\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit17\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit18\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit22\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit23\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit25\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFoodDtl", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"ingredCd\" type=\"STRING\" size=\"256\"/><Column id=\"ingredNm\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"mainmenuYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Div("compBox", "absolute", "3.75%", "59", null, "102", "3.75%", null, this);
            obj.set_taborder("74");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "0", "731", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar2.jpg')");
            this.addChild(obj.name, obj);

            obj = new Edit("foodGrpCdEd", "absolute", "18.9%", "76", null, "30", "68.9%", null, this);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "5.9%", "76", null, "30", "82.17%", null, this);
            obj.set_taborder("5");
            obj.set_text("음식 분류");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "7.24%", "-3", null, "60", "69.03%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("음식 등록");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("foodMemoEd", "absolute", "18.9%", "115", null, "30", "19.17%", null, this);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "33.78%", "76", null, "30", "54.29%", null, this);
            obj.set_taborder("9");
            obj.set_text("음식코드");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("foodCdEd", "absolute", "46.78%", "76", null, "30", "38.87%", null, this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("foodNmEd", "absolute", "76.81%", "76", null, "30", "6.03%", null, this);
            obj.set_taborder("11");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "63.81%", "76", null, "30", "24.26%", null, this);
            obj.set_taborder("12");
            obj.set_text("음식명");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "5.9%", "115", null, "30", "82.17%", null, this);
            obj.set_taborder("13");
            obj.set_text("비고");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("ingredDtlGrid", "absolute", "3.75%", "203", null, "124", "3.75%", null, this);
            obj.set_taborder("15");
            obj.set_binddataset("dsFoodDtl");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"251\"/><Column size=\"96\"/><Column size=\"99\"/><Column size=\"104\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"식품코드\"/><Cell col=\"1\" text=\"식품명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"구분\"/></Band><Band id=\"body\"><Cell text=\"bind:ingredCd\"/><Cell col=\"1\" text=\"bind:ingredNm\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:qty\"/><Cell col=\"3\" text=\"bind:unit\"/><Cell col=\"4\" text=\"bind:mainmenuYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("ingredGrid", "absolute", "3.75%", "408", null, "124", "3.75%", null, this);
            obj.set_taborder("17");
            obj.set_binddataset("dsIngred");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"196\"/><Column size=\"75\"/><Column size=\"104\"/><Column size=\"78\"/><Column size=\"95\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"식품코드\"/><Cell col=\"1\" text=\"식품명\"/><Cell col=\"2\" text=\"규격\"/><Cell col=\"3\" text=\"계약단가\"/><Cell col=\"4\" text=\"구매단위\"/><Cell col=\"5\" text=\"구매환산량\"/></Band><Band id=\"body\"><Cell text=\"bind:ingredCd\"/><Cell col=\"1\" text=\"bind:ingredNm\"/><Cell col=\"2\" text=\"bind:spec\"/><Cell col=\"3\" text=\"bind:ctrtPrice\"/><Cell col=\"4\" text=\"bind:ordUnit\"/><Cell col=\"5\" text=\"bind:chngQty3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "3.89%", "540", null, "30", "84.85%", null, this);
            obj.set_taborder("19");
            obj.set_text("에너지");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "3.89%", "577", null, "30", "84.85%", null, this);
            obj.set_taborder("20");
            obj.set_text("비타민E");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div08", "absolute", "3.89%", "614", null, "30", "84.85%", null, this);
            obj.set_taborder("21");
            obj.set_text("당질");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div11", "absolute", "3.89%", "651", null, "30", "84.85%", null, this);
            obj.set_taborder("22");
            obj.set_text("비타민B1");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div14", "absolute", "3.89%", "688", null, "30", "84.85%", null, this);
            obj.set_taborder("23");
            obj.set_text("칼슘");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit7Ed", "absolute", "16.09%", "688", null, "30", "70.91%", null, this);
            obj.set_taborder("24");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit16Ed", "absolute", "16.09%", "651", null, "30", "70.91%", null, this);
            obj.set_taborder("25");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit4Ed", "absolute", "16.09%", "614", null, "30", "70.91%", null, this);
            obj.set_taborder("26");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit22Ed", "absolute", "16.09%", "577", null, "30", "70.91%", null, this);
            obj.set_taborder("27");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit1Ed", "absolute", "16.09%", "540", null, "30", "70.91%", null, this);
            obj.set_taborder("28");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "30.03%", "540", null, "30", "64.88%", null, this);
            obj.getSetter("taborder").set("29");
            obj.set_text("Kcal");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "30.03%", "577", null, "30", "67.69%", null, this);
            obj.getSetter("taborder").set("30");
            obj.set_text("mg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "30.03%", "614", null, "30", "67.69%", null, this);
            obj.getSetter("taborder").set("31");
            obj.set_text("g");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "30.03%", "651", null, "30", "67.69%", null, this);
            obj.getSetter("taborder").set("32");
            obj.set_text("mg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "30.03%", "688", null, "30", "67.69%", null, this);
            obj.getSetter("taborder").set("33");
            obj.set_text("mg");
            this.addChild(obj.name, obj);

            obj = new Div("Div20", "absolute", "36.6%", "688", null, "30", "52.14%", null, this);
            obj.set_taborder("34");
            obj.set_text("콜레스테롤");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div19", "absolute", "36.6%", "651", null, "30", "52.14%", null, this);
            obj.set_taborder("35");
            obj.set_text("비타민B2");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div18", "absolute", "36.6%", "614", null, "30", "52.14%", null, this);
            obj.set_taborder("36");
            obj.set_text("칼륨");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div17", "absolute", "36.6%", "577", null, "30", "52.14%", null, this);
            obj.set_taborder("37");
            obj.set_text("철");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div16", "absolute", "36.6%", "540", null, "30", "52.14%", null, this);
            obj.set_taborder("38");
            obj.set_text("단백질");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit2Ed", "absolute", "48.79%", "540", null, "30", "38.61%", null, this);
            obj.set_taborder("39");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit9Ed", "absolute", "48.79%", "577", null, "30", "38.61%", null, this);
            obj.set_taborder("40");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit11Ed", "absolute", "48.79%", "614", null, "30", "38.61%", null, this);
            obj.set_taborder("41");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit17Ed", "absolute", "48.79%", "651", null, "30", "38.61%", null, this);
            obj.set_taborder("42");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit23Ed", "absolute", "48.79%", "688", null, "30", "38.61%", null, this);
            obj.set_taborder("43");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "62.6%", "688", null, "30", "35.12%", null, this);
            obj.getSetter("taborder").set("44");
            obj.set_text("mg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "62.6%", "651", null, "30", "35.12%", null, this);
            obj.getSetter("taborder").set("45");
            obj.set_text("mg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "62.6%", "614", null, "30", "35.12%", null, this);
            obj.getSetter("taborder").set("46");
            obj.set_text("mg");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "62.6%", "577", null, "30", "35.12%", null, this);
            obj.getSetter("taborder").set("47");
            obj.set_text("mg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "62.6%", "540", null, "30", "35.12%", null, this);
            obj.getSetter("taborder").set("48");
            obj.set_text("g");
            this.addChild(obj.name, obj);

            obj = new Div("Div21", "absolute", "67.83%", "540", null, "30", "21.05%", null, this);
            obj.set_taborder("49");
            obj.set_text("인");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div22", "absolute", "67.83%", "577", null, "30", "21.05%", null, this);
            obj.set_taborder("50");
            obj.set_text("지질");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div23", "absolute", "67.83%", "614", null, "30", "21.05%", null, this);
            obj.set_taborder("51");
            obj.set_text("식이섬유");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div24", "absolute", "67.83%", "651", null, "30", "21.05%", null, this);
            obj.set_taborder("52");
            obj.set_text("비타민B6");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div25", "absolute", "67.83%", "688", null, "30", "21.05%", null, this);
            obj.set_taborder("53");
            obj.set_text("총지방산");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit25Ed", "absolute", "79.76%", "688", null, "30", "7.24%", null, this);
            obj.set_taborder("54");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit18Ed", "absolute", "79.76%", "651", null, "30", "7.24%", null, this);
            obj.set_taborder("55");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit5Ed", "absolute", "79.76%", "614", null, "30", "7.24%", null, this);
            obj.set_taborder("56");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit3Ed", "absolute", "79.76%", "577", null, "30", "7.24%", null, this);
            obj.set_taborder("57");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit8Ed", "absolute", "79.76%", "540", null, "30", "7.24%", null, this);
            obj.set_taborder("58");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "93.7%", "541", null, "30", "4.02%", null, this);
            obj.getSetter("taborder").set("59");
            obj.set_text("mg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "93.7%", "578", null, "30", "4.02%", null, this);
            obj.getSetter("taborder").set("60");
            obj.set_text("g");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "93.7%", "615", null, "30", "4.02%", null, this);
            obj.getSetter("taborder").set("61");
            obj.set_text("g");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "93.7%", "652", null, "30", "4.02%", null, this);
            obj.getSetter("taborder").set("62");
            obj.set_text("mg");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "92.63%", "689", null, "30", "5.09%", null, this);
            obj.getSetter("taborder").set("63");
            this.addChild(obj.name, obj);

            obj = new Div("Div07", "absolute", "3.62%", "371", null, "30", "84.45%", null, this);
            obj.set_taborder("64");
            obj.set_text("식품코드");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("ingredCdEd", "absolute", "16.35%", "371", null, "30", "67.96%", null, this);
            obj.set_taborder("65");
            this.addChild(obj.name, obj);

            obj = new Edit("ingredNmEd", "absolute", "32.71%", "371", null, "30", "51.61%", null, this);
            obj.set_taborder("66");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "364", "370", "32", "32", null, null, this);
            obj.set_taborder("69");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("okBtn", "absolute", "611", "115", "90", "32", null, null, this);
            obj.set_taborder("70");
            obj.style.set_background("@gradation URL('img::okBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "3.75%", "333", null, "30", "68.23%", null, this);
            obj.getSetter("taborder").set("71");
            obj.set_text("  식품정보");
            obj.style.set_background("gainsboro");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "3.75%", "168", null, "30", "68.23%", null, this);
            obj.getSetter("taborder").set("72");
            obj.set_text("  음식 별 식품 정보");
            obj.style.set_background("gainsboro");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("btnBox", "absolute", "83.91%", "361", null, "50", "0.8%", null, this);
            obj.set_taborder("73");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);
            obj = new Button("plusBtn", "absolute", "24", "9", "32", "32", null, null, this.btnBox);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("minusBtn", "absolute", "61", "9", "32", "32", null, null, this.btnBox);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 89, 30, this.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.set_text("비고");
            		p.style.set_background("wheat");
            		p.style.set_color("black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("10 다음_Regular");

            	}
            );
            this.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 104, 50, this.btnBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("73");
            		p.set_enableevent("false");

            	}
            );
            this.btnBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 746, 743, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SN_음식관리");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","nutrit7Ed","value","dsIngred","nutrit7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","nutrit16Ed","value","dsIngred","nutrit16");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","nutrit4Ed","value","dsIngred","nutrit4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","nutrit22Ed","value","dsIngred","nutrit22");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","nutrit1Ed","value","dsIngred","nutrit1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","nutrit2Ed","value","dsIngred","nutrit2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","nutrit9Ed","value","dsIngred","nutrit9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","nutrit11Ed","value","dsIngred","nutrit11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","nutrit17Ed","value","dsIngred","nutrit17");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","nutrit23Ed","value","dsIngred","nutrit23");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","nutrit25Ed","value","dsIngred","nutrit25");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","nutrit18Ed","value","dsIngred","nutrit18");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","nutrit5Ed","value","dsIngred","nutrit5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","nutrit3Ed","value","dsIngred","nutrit3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","nutrit8Ed","value","dsIngred","nutrit8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","foodCdEd","value","dsFood","foodCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","foodNmEd","value","dsFood","foodNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","foodMemoEd","value","dsFood","notes");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","foodGrpCdEd","value","dsFood","foodGrpCd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SN_FoodAddPopForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SN_FoodAddPopForm.xfdl", "scripts::supScripts.xjs");
        this.registerScript("SN_FoodAddPopForm.xfdl", function() {
        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 
        //include "scripts::supScripts.xjs";

        // 변수
        var state;
        var foodGrpCd;

        // 화면 로드
        this.SN_FoodAddPopForm_onload = function(obj,e)
        {	
        	state= this.parent.state;
        	foodGrpCd= this.parent.foodGrpCd;

        	if(state=="insert"){
        		this.dsFood.addRow();
        		this.dsFood.setColumn(0,"foodGrpCd",foodGrpCd);
        		
        		this.foodCdEd.set_enable(true);
        		this.foodNmEd.set_enable(true);
        		
        	}else if(state=="update"){
        		this.dsFood.addRow();
        		this.dsFood.setColumn(0, "foodGrpCd", foodGrpCd);
        		this.dsFood.setColumn(0, "foodCd", this.parent.foodCd);
        		this.dsFood.setColumn(0, "foodNm", this.parent.foodNm);
        		this.dsFood.setColumn(0, "notes", this.parent.foodMemo);
        		
        		this.dsFoodDtl.copyData(this.parent.dataSet);
        	}
        }

        // 식품조회
        this.searchBtn_onclick = function(obj,e)
        {
        	var ingredCd = this.ingredCdEd.value;
        	var ingredNm = this.ingredNmEd.value;
        	
        	var argument = 'ingredCd='+ingredCd+' ingredNm='+ingredNm;
        	
        	var row = this.dsService.findRow("serviceID", "findIngredList");

        	this.dsService.setColumn(row, "argument", argument);
        	
        	this.gfnService("findIngredList", false);
        }

        // 플러스 버튼
        this.plusBtn_onclick = function(obj,e)
        {
        	var ingredCd=this.dsIngred.getColumn(this.ingredGrid.currentrow, "ingredCd");
        	var ingredNm=this.dsIngred.getColumn(this.ingredGrid.currentrow, "ingredNm");	
        	var unit=this.dsIngred.getColumn(this.ingredGrid.currentrow, "unit");
        	var mainmenuYn=this.dsIngred.getColumn(this.ingredGrid.currentrow, "mainmenuYn");

        	var count=this.dsFoodDtl.addRow();
        	
        	this.dsFoodDtl.setColumn(count, "foodCd", this.foodCdEd.value);
        	this.dsFoodDtl.setColumn(count, "ingredCd", ingredCd);
        	this.dsFoodDtl.setColumn(count, "ingredNm", ingredNm);
        	this.dsFoodDtl.setColumn(count, "unit", unit);
        	this.dsFoodDtl.setColumn(count, "mainmenuYn", mainmenuYn);
        }

        // 마이너스 버튼
        this.minusBtn_onclick = function(obj,e)
        {
        	this.dsFoodDtl.deleteRow(this.ingredDtlGrid.currentrow);
        }

        // 확인버튼
        this.okBtn_onclick = function(obj,e)
        {
        	//alert(this.dsFoodDtl.getColumn(0,"ingredNm"));
        	//alert(this.dsFoodDtl.getColumn(0,"foodCd"));

        	this.gfnService("batchFoodAddFormProcess");
        	
        }

        //콜백함수
        this.callBackFunc=function(svcID,errorCode,errorMsg)
        {
        	if(errorCode<0)
        	{
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	}else{
        		if(svcID == "batchFoodAddFormProcess")
        		{
        			this.opener.pCode(1);
        			this.close();
        		}
        		else{
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SN_FoodAddPopForm_onload, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.okBtn.addEventHandler("onclick", this.okBtn_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.btnBox.plusBtn.addEventHandler("onclick", this.plusBtn_onclick, this);
            this.btnBox.minusBtn.addEventHandler("onclick", this.minusBtn_onclick, this);

        };

        this.loadIncludeScript("SN_FoodAddPopForm.xfdl");

       
    };
}
)();

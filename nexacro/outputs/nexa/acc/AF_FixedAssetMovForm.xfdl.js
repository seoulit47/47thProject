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
                this.set_name("AF_FixedAssetMovForm");
                this.set_classname("AF_FixedAssetMovForm");
                this.set_titletext("고정자산 이동관리 화면");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRespoWorker", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetCdDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAsset", this);
            obj._setContents("<ColumnInfo><Column id=\"equipCd\" type=\"STRING\" size=\"256\"/><Column id=\"mngntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acquFinanCd\" type=\"STRING\" size=\"256\"/><Column id=\"inOutCapitalCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"depreMthd\" type=\"STRING\" size=\"256\"/><Column id=\"assetNo\" type=\"STRING\" size=\"256\"/><Column id=\"acquDate\" type=\"STRING\" size=\"256\"/><Column id=\"dproDate\" type=\"STRING\" size=\"256\"/><Column id=\"profitCd\" type=\"STRING\" size=\"256\"/><Column id=\"depreYears\" type=\"STRING\" size=\"256\"/><Column id=\"depreRate\" type=\"STRING\" size=\"256\"/><Column id=\"assetNm\" type=\"STRING\" size=\"256\"/><Column id=\"acnt\" type=\"STRING\" size=\"256\"/><Column id=\"asstAcnt\" type=\"STRING\" size=\"256\"/><Column id=\"acquAmt\" type=\"STRING\" size=\"256\"/><Column id=\"monUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"disposalDate\" type=\"STRING\" size=\"256\"/><Column id=\"disposalCd\" type=\"STRING\" size=\"256\"/><Column id=\"assetGrp\" type=\"STRING\" size=\"256\"/><Column id=\"splyComp\" type=\"STRING\" size=\"256\"/><Column id=\"cashBuyYn\" type=\"STRING\" size=\"256\"/><Column id=\"prodComp\" type=\"STRING\" size=\"256\"/><Column id=\"modelNm\" type=\"STRING\" size=\"256\"/><Column id=\"prodNo\" type=\"STRING\" size=\"256\"/><Column id=\"prodCtry\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"receiver\" type=\"STRING\" size=\"256\"/><Column id=\"ownDept\" type=\"STRING\" size=\"256\"/><Column id=\"pstLoc\" type=\"STRING\" size=\"256\"/><Column id=\"respoWorker\" type=\"STRING\" size=\"256\"/><Column id=\"fixedAssetPhoto\" type=\"STRING\" size=\"256\"/><Column id=\"assetCd\" type=\"STRING\" size=\"256\"/><Column id=\"acquCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetMov", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOwnDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPstLocCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findUsingFixedAssetCdDtlList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/fixedasset/findUsingFixedAssetCdDtlList.do</Col><Col id=\"callbackFunc\">fixedAssetMovCallBack</Col><Col id=\"outData\">dsFixedAssetCdDtl=dsFixedAssetCdDtl</Col></Row><Row><Col id=\"serviceID\">findFixedAssetList</Col><Col id=\"URL\">his::acc/fixedasset/findFixedAssetList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsFixedAsset=dsFixedAsset</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">fixedAssetMovCallBack</Col></Row><Row><Col id=\"serviceID\">findFixedAsset</Col><Col id=\"URL\">his::acc/fixedasset/findFixedAsset.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsFixedAsset=dsFixedAsset</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">fixedAssetMovCallBack</Col></Row><Row><Col id=\"serviceID\">findFixedAssetMovList</Col><Col id=\"URL\">his::acc/fixedasset/findFixedAssetMovList.do</Col><Col id=\"outData\">dsFixedAssetMov=dsFixedAssetMov</Col><Col id=\"callbackFunc\">fixedAssetMovCallBack</Col></Row><Row><Col id=\"serviceID\">batchFixedAssetMovProcess</Col><Col id=\"URL\">his::acc/fixedasset/batchFixedAssetMovProcess.do</Col><Col id=\"inData\">dsFixedAssetMov=dsFixedAssetMov:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">fixedAssetMovCallBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GP500</Col><Col id=\"dsName\">dsOwnDept</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAcquCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsProfit", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">수익</Col><Col id=\"data\">수익</Col></Row><Row><Col id=\"code\">비수익</Col><Col id=\"data\">비수익</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDepreMthd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAcquFinanCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInOutCapitalCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAcntCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAssetCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMngntCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEquipCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "0%", "0", "1232", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.79%", "-4", null, "60", "71.43%", null, this.titleBarDiv);
            obj.getSetter("taborder").set("5");
            obj.set_text("고정자산이동 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "756", "67", "86", "26", null, null, this.titleBarDiv);
            obj.getSetter("taborder").set("6");
            obj.set_text("자산번호");
            obj.getSetter("class").set("AreaStc");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Edit("assetNoEdit", "absolute", "845", "67", "105", "26", null, null, this.titleBarDiv);
            obj.set_taborder("7");
            obj.getSetter("class").set("AreaEdt");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Edit("assetNmEdit", "absolute", "1040", "67", "105", "26", null, null, this.titleBarDiv);
            obj.set_taborder("8");
            obj.getSetter("class").set("AreaEdt");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "952", "67", "86", "26", null, null, this.titleBarDiv);
            obj.getSetter("taborder").set("9");
            obj.set_text("자산이름");
            obj.getSetter("class").set("AreaStc");
            this.titleBarDiv.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "2%", "59", null, "37", "1.2%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "2.64%", "64", null, "27", "89.76%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("고정자산 검색");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("searchAssetNoEd", "absolute", "11.04%", "63", "96", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("searchAssetNmEd", "absolute", "22.24%", "62", "121", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "33.12%", "64", null, "27", "60.16%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("자산구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("searchAssetCombo", "absolute", "40.64%", "62", "100", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("dsAssetCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Static("subCodeStc01", "absolute", "49.36%", "64", null, "27", "43.92%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("관리구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("searchMngntCombo", "absolute", "56.56%", "62", "114", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("dsMngntCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Static("subCodeStc03", "absolute", "66.8%", "64", null, "27", "26.48%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("보유부서");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("searchOwnDeptCombo", "absolute", "74.32%", "62", "100", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("dsOwnDept");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Button("comboResetBtn", "absolute", "1034", "62", "102", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::resetBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchFixedAssetMovBtn", "absolute", "1139", "63", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchFixedAssetBtn", "absolute", "238", "63", "32", "32", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("fixedAssetGrid", "absolute", "2.4%", "102", null, "617", "82.56%", null, this);
            obj.set_taborder("14");
            obj.set_binddataset("dsFixedAsset");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산번호\"/><Cell col=\"1\" text=\"자산명\"/></Band><Band id=\"body\"><Cell text=\"bind:assetNo\"/><Cell col=\"1\" text=\"bind:assetNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("grpDiv", "absolute", "17.68%", "100", null, "200", "20.48%", null, this);
            obj.set_taborder("15");
            obj.style.set_background("#edececff");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Calendar("acquDateCal", "absolute", "47.99%", "34", null, "30", "28.59%", null, this.grpDiv);
            this.grpDiv.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_expr("expr:Date()");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            obj = new Calendar("dproDateCal", "absolute", "47.99%", "66", null, "30", "28.59%", null, this.grpDiv);
            this.grpDiv.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_expr("expr:Date()");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            obj = new Button("comboResetBtn", "absolute", "999", "-35", "76", "26", null, null, this.grpDiv);
            obj.set_taborder("13");
            obj.set_text("조건초기화");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.grpDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc33", "absolute", "24.19%", "706", null, "27", "70.12%", null, this.grpDiv);
            obj.getSetter("taborder").set("14");
            obj.set_text("수령자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.grpDiv.addChild(obj.name, obj);
            obj = new Edit("receiverEd", "absolute", "30.66%", "704", "140", "30", null, null, this.grpDiv);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.grpDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc35", "absolute", "24.19%", "773", null, "27", "70.12%", null, this.grpDiv);
            obj.getSetter("taborder").set("16");
            obj.set_text("현위치");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.grpDiv.addChild(obj.name, obj);
            obj = new Combo("pstLocCombo", "absolute", "30.66%", "772", "181", "30", null, null, this.grpDiv);
            this.grpDiv.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_innerdataset("@dsPstLocCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");
            obj = new Static("subCodeStc36", "absolute", "24.19%", "806", null, "27", "70.12%", null, this.grpDiv);
            obj.getSetter("taborder").set("18");
            obj.set_text("담당자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.grpDiv.addChild(obj.name, obj);
            obj = new Edit("respoWorkerEd", "absolute", "30.66%", "805", "140", "30", null, null, this.grpDiv);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.grpDiv.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "17.68%", "100", null, "27", "20.56%", null, this);
            obj.getSetter("taborder").set("16");
            obj.set_text("분 류 내 역");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc06", "absolute", "18.56%", "134", null, "27", "75.68%", null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("자산번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc07", "absolute", "18.56%", "166", null, "27", "75.68%", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("자산구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc08", "absolute", "18.56%", "198", null, "27", "75.68%", null, this);
            obj.getSetter("taborder").set("19");
            obj.set_text("장비구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc09", "absolute", "18.56%", "230", null, "27", "75.68%", null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("관리구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc10", "absolute", "18.56%", "262", null, "27", "75.68%", null, this);
            obj.getSetter("taborder").set("21");
            obj.set_text("취득재원");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("acquFinanCombo", "absolute", "25.28%", "264", "181", "30", null, null, this);
            this.addChild(obj.name, obj);
            var acquFinanCombo_innerdataset = new Dataset("acquFinanCombo_innerdataset", this.acquFinanCombo);
            acquFinanCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">동남권원자력의학원장</Col><Col id=\"datacolumn\">동남권원자력의학원장</Col></Row><Row><Col id=\"codecolumn\">원장</Col><Col id=\"datacolumn\">원장</Col></Row><Row><Col id=\"codecolumn\">원장 직무대행</Col><Col id=\"datacolumn\">원장 직무대행</Col></Row><Row><Col id=\"codecolumn\">주임과장</Col><Col id=\"datacolumn\">주임과장</Col></Row><Row><Col id=\"codecolumn\">실장</Col><Col id=\"datacolumn\">실장</Col></Row><Row><Col id=\"codecolumn\">센터장</Col><Col id=\"datacolumn\">센터장</Col></Row><Row><Col id=\"codecolumn\">병원장</Col><Col id=\"datacolumn\">병원장</Col></Row><Row><Col id=\"codecolumn\">병원장 직무대행</Col><Col id=\"datacolumn\">병원장 직무대행</Col></Row><Row><Col id=\"codecolumn\">연구센터장</Col><Col id=\"datacolumn\">연구센터장</Col></Row><Row><Col id=\"codecolumn\">연구센터장 직무대행</Col><Col id=\"datacolumn\">연구센터장 직무대행</Col></Row><Row><Col id=\"codecolumn\">부장</Col><Col id=\"datacolumn\">부장</Col></Row><Row><Col id=\"codecolumn\">부장대우</Col><Col id=\"datacolumn\">부장대우</Col></Row><Row><Col id=\"codecolumn\">부장 직무대행</Col><Col id=\"datacolumn\">부장 직무대행</Col></Row><Row><Col id=\"codecolumn\">실장(부장급)</Col><Col id=\"datacolumn\">실장(부장급)</Col></Row><Row><Col id=\"codecolumn\">실장(부장급)대우</Col><Col id=\"datacolumn\">실장(부장급)대우</Col></Row><Row><Col id=\"codecolumn\">실장(부장급) 직무대행</Col><Col id=\"datacolumn\">실장(부장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급)</Col><Col id=\"datacolumn\">센터장(부장급)</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급)대우</Col><Col id=\"datacolumn\">센터장(부장급)대우</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급) 직무대행</Col><Col id=\"datacolumn\">센터장(부장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">팀장</Col><Col id=\"datacolumn\">팀장</Col></Row><Row><Col id=\"codecolumn\">팀장대우</Col><Col id=\"datacolumn\">팀장대우</Col></Row><Row><Col id=\"codecolumn\">팀장 직무대행</Col><Col id=\"datacolumn\">팀장 직무대행</Col></Row><Row><Col id=\"codecolumn\">과장</Col><Col id=\"datacolumn\">과장</Col></Row><Row><Col id=\"codecolumn\">과장대우</Col><Col id=\"datacolumn\">과장대우</Col></Row><Row><Col id=\"codecolumn\">과장 직무대행</Col><Col id=\"datacolumn\">과장 직무대행</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급)</Col><Col id=\"datacolumn\">실장(팀장급)</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급)대우</Col><Col id=\"datacolumn\">실장(팀장급)대우</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급) 직무대행</Col><Col id=\"datacolumn\">실장(팀장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급)</Col><Col id=\"datacolumn\">센터장(팀장급)</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급)대우</Col><Col id=\"datacolumn\">센터장(팀장급)대우</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급) 직무대행</Col><Col id=\"datacolumn\">센터장(팀장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">수간호사</Col><Col id=\"datacolumn\">수간호사</Col></Row><Row><Col id=\"codecolumn\">정책위원</Col><Col id=\"datacolumn\">정책위원</Col></Row></Rows>");
            obj.set_innerdataset(acquFinanCombo_innerdataset);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_innerdataset("@dsAcquFinanCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Combo("mngntCombo", "absolute", "25.28%", "231", "181", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_innerdataset("@dsMngntCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Combo("equipCombo", "absolute", "25.28%", "198", "181", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_innerdataset("@dsEquipCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Combo("assetCombo", "absolute", "25.28%", "165", "181", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_innerdataset("@dsAssetCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Edit("assetNoEd", "absolute", "25.28%", "132", null, "30", "60.24%", null, this);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc14", "absolute", "40.96%", "134", null, "27", "53.28%", null, this);
            obj.getSetter("taborder").set("27");
            obj.set_text("취득일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc13", "absolute", "40.96%", "166", null, "27", "53.28%", null, this);
            obj.getSetter("taborder").set("28");
            obj.set_text("전산일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc12", "absolute", "40.96%", "198", null, "27", "53.28%", null, this);
            obj.getSetter("taborder").set("29");
            obj.set_text("내/외자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc11", "absolute", "40.96%", "230", null, "27", "53.28%", null, this);
            obj.getSetter("taborder").set("30");
            obj.set_text("계정구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc15", "absolute", "40.96%", "262", null, "27", "53.28%", null, this);
            obj.getSetter("taborder").set("31");
            obj.set_text("취득구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("acquCombo", "absolute", "47.44%", "264", "181", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_innerdataset("@dsAcquCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Combo("acntCdCombo", "absolute", "47.44%", "231", "181", "30", null, null, this);
            this.addChild(obj.name, obj);
            var acntCdCombo_innerdataset = new Dataset("acntCdCombo_innerdataset", this.acntCdCombo);
            acntCdCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">동남권원자력의학원장</Col><Col id=\"datacolumn\">동남권원자력의학원장</Col></Row><Row><Col id=\"codecolumn\">원장</Col><Col id=\"datacolumn\">원장</Col></Row><Row><Col id=\"codecolumn\">원장 직무대행</Col><Col id=\"datacolumn\">원장 직무대행</Col></Row><Row><Col id=\"codecolumn\">주임과장</Col><Col id=\"datacolumn\">주임과장</Col></Row><Row><Col id=\"codecolumn\">실장</Col><Col id=\"datacolumn\">실장</Col></Row><Row><Col id=\"codecolumn\">센터장</Col><Col id=\"datacolumn\">센터장</Col></Row><Row><Col id=\"codecolumn\">병원장</Col><Col id=\"datacolumn\">병원장</Col></Row><Row><Col id=\"codecolumn\">병원장 직무대행</Col><Col id=\"datacolumn\">병원장 직무대행</Col></Row><Row><Col id=\"codecolumn\">연구센터장</Col><Col id=\"datacolumn\">연구센터장</Col></Row><Row><Col id=\"codecolumn\">연구센터장 직무대행</Col><Col id=\"datacolumn\">연구센터장 직무대행</Col></Row><Row><Col id=\"codecolumn\">부장</Col><Col id=\"datacolumn\">부장</Col></Row><Row><Col id=\"codecolumn\">부장대우</Col><Col id=\"datacolumn\">부장대우</Col></Row><Row><Col id=\"codecolumn\">부장 직무대행</Col><Col id=\"datacolumn\">부장 직무대행</Col></Row><Row><Col id=\"codecolumn\">실장(부장급)</Col><Col id=\"datacolumn\">실장(부장급)</Col></Row><Row><Col id=\"codecolumn\">실장(부장급)대우</Col><Col id=\"datacolumn\">실장(부장급)대우</Col></Row><Row><Col id=\"codecolumn\">실장(부장급) 직무대행</Col><Col id=\"datacolumn\">실장(부장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급)</Col><Col id=\"datacolumn\">센터장(부장급)</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급)대우</Col><Col id=\"datacolumn\">센터장(부장급)대우</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급) 직무대행</Col><Col id=\"datacolumn\">센터장(부장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">팀장</Col><Col id=\"datacolumn\">팀장</Col></Row><Row><Col id=\"codecolumn\">팀장대우</Col><Col id=\"datacolumn\">팀장대우</Col></Row><Row><Col id=\"codecolumn\">팀장 직무대행</Col><Col id=\"datacolumn\">팀장 직무대행</Col></Row><Row><Col id=\"codecolumn\">과장</Col><Col id=\"datacolumn\">과장</Col></Row><Row><Col id=\"codecolumn\">과장대우</Col><Col id=\"datacolumn\">과장대우</Col></Row><Row><Col id=\"codecolumn\">과장 직무대행</Col><Col id=\"datacolumn\">과장 직무대행</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급)</Col><Col id=\"datacolumn\">실장(팀장급)</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급)대우</Col><Col id=\"datacolumn\">실장(팀장급)대우</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급) 직무대행</Col><Col id=\"datacolumn\">실장(팀장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급)</Col><Col id=\"datacolumn\">센터장(팀장급)</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급)대우</Col><Col id=\"datacolumn\">센터장(팀장급)대우</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급) 직무대행</Col><Col id=\"datacolumn\">센터장(팀장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">수간호사</Col><Col id=\"datacolumn\">수간호사</Col></Row><Row><Col id=\"codecolumn\">정책위원</Col><Col id=\"datacolumn\">정책위원</Col></Row></Rows>");
            obj.set_innerdataset(acntCdCombo_innerdataset);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_innerdataset("@dsAcntCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Combo("inOutCapitalCombo", "absolute", "47.44%", "198", "181", "30", null, null, this);
            this.addChild(obj.name, obj);
            var inOutCapitalCombo_innerdataset = new Dataset("inOutCapitalCombo_innerdataset", this.inOutCapitalCombo);
            inOutCapitalCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">동남권원자력의학원장</Col><Col id=\"datacolumn\">동남권원자력의학원장</Col></Row><Row><Col id=\"codecolumn\">원장</Col><Col id=\"datacolumn\">원장</Col></Row><Row><Col id=\"codecolumn\">원장 직무대행</Col><Col id=\"datacolumn\">원장 직무대행</Col></Row><Row><Col id=\"codecolumn\">주임과장</Col><Col id=\"datacolumn\">주임과장</Col></Row><Row><Col id=\"codecolumn\">실장</Col><Col id=\"datacolumn\">실장</Col></Row><Row><Col id=\"codecolumn\">센터장</Col><Col id=\"datacolumn\">센터장</Col></Row><Row><Col id=\"codecolumn\">병원장</Col><Col id=\"datacolumn\">병원장</Col></Row><Row><Col id=\"codecolumn\">병원장 직무대행</Col><Col id=\"datacolumn\">병원장 직무대행</Col></Row><Row><Col id=\"codecolumn\">연구센터장</Col><Col id=\"datacolumn\">연구센터장</Col></Row><Row><Col id=\"codecolumn\">연구센터장 직무대행</Col><Col id=\"datacolumn\">연구센터장 직무대행</Col></Row><Row><Col id=\"codecolumn\">부장</Col><Col id=\"datacolumn\">부장</Col></Row><Row><Col id=\"codecolumn\">부장대우</Col><Col id=\"datacolumn\">부장대우</Col></Row><Row><Col id=\"codecolumn\">부장 직무대행</Col><Col id=\"datacolumn\">부장 직무대행</Col></Row><Row><Col id=\"codecolumn\">실장(부장급)</Col><Col id=\"datacolumn\">실장(부장급)</Col></Row><Row><Col id=\"codecolumn\">실장(부장급)대우</Col><Col id=\"datacolumn\">실장(부장급)대우</Col></Row><Row><Col id=\"codecolumn\">실장(부장급) 직무대행</Col><Col id=\"datacolumn\">실장(부장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급)</Col><Col id=\"datacolumn\">센터장(부장급)</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급)대우</Col><Col id=\"datacolumn\">센터장(부장급)대우</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급) 직무대행</Col><Col id=\"datacolumn\">센터장(부장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">팀장</Col><Col id=\"datacolumn\">팀장</Col></Row><Row><Col id=\"codecolumn\">팀장대우</Col><Col id=\"datacolumn\">팀장대우</Col></Row><Row><Col id=\"codecolumn\">팀장 직무대행</Col><Col id=\"datacolumn\">팀장 직무대행</Col></Row><Row><Col id=\"codecolumn\">과장</Col><Col id=\"datacolumn\">과장</Col></Row><Row><Col id=\"codecolumn\">과장대우</Col><Col id=\"datacolumn\">과장대우</Col></Row><Row><Col id=\"codecolumn\">과장 직무대행</Col><Col id=\"datacolumn\">과장 직무대행</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급)</Col><Col id=\"datacolumn\">실장(팀장급)</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급)대우</Col><Col id=\"datacolumn\">실장(팀장급)대우</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급) 직무대행</Col><Col id=\"datacolumn\">실장(팀장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급)</Col><Col id=\"datacolumn\">센터장(팀장급)</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급)대우</Col><Col id=\"datacolumn\">센터장(팀장급)대우</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급) 직무대행</Col><Col id=\"datacolumn\">센터장(팀장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">수간호사</Col><Col id=\"datacolumn\">수간호사</Col></Row><Row><Col id=\"codecolumn\">정책위원</Col><Col id=\"datacolumn\">정책위원</Col></Row></Rows>");
            obj.set_innerdataset(inOutCapitalCombo_innerdataset);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_innerdataset("@dsInOutCapitalCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Static("subCodeStc16", "absolute", "62.8%", "134", null, "27", "31.44%", null, this);
            obj.getSetter("taborder").set("35");
            obj.set_text("수익구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Radio("profitRadio", "absolute", "69.04%", "139", null, "22", "21.12%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_columncount("2");
            obj.set_innerdataset("@dsProfit");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonly("true");
            obj.style.set_color("black");
            obj.style.set_font("8 arial");

            obj = new Edit("ownDeptEd", "absolute", "69.28%", "166", "117", "30", null, null, this);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc34", "absolute", "62.8%", "166", null, "27", "31.44%", null, this);
            obj.getSetter("taborder").set("38");
            obj.set_text("보유부서");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc35", "absolute", "62.8%", "198", null, "27", "31.44%", null, this);
            obj.getSetter("taborder").set("39");
            obj.set_text("현위치");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("pstLocCombo", "absolute", "69.28%", "198", "117", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.set_innerdataset("@dsPstLocCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Edit("respoWorkerEd", "absolute", "69.28%", "231", "117", "30", null, null, this);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc36", "absolute", "62.8%", "230", null, "27", "31.44%", null, this);
            obj.getSetter("taborder").set("42");
            obj.set_text("담당자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "80.32%", "100", null, "200", "1.12%", null, this);
            obj.set_taborder("43");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc05", "absolute", "80.32%", "100", null, "27", "1.12%", null, this);
            obj.getSetter("taborder").set("44");
            obj.set_text("상 각 내 역");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc17", "absolute", "80.64%", "134", null, "27", "13.6%", null, this);
            obj.getSetter("taborder").set("45");
            obj.set_text("상각방법");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc18", "absolute", "80.64%", "191", null, "27", "13.6%", null, this);
            obj.getSetter("taborder").set("46");
            obj.set_text("상각년수");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc19", "absolute", "80.64%", "248", null, "27", "13.6%", null, this);
            obj.getSetter("taborder").set("47");
            obj.set_text("상각율");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("depreRateEd", "absolute", "87.28%", "245", null, "30", "2.08%", null, this);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("depreYearsEd", "absolute", "87.28%", "191", null, "30", "2.08%", null, this);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("depreMthdCombo", "absolute", "87.28%", "133", "133", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_innerdataset("@dsDepreMthd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Div("assetDiv", "absolute", "17.68%", "309", null, "70", "1.2%", null, this);
            obj.set_taborder("51");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc20", "absolute", "17.68%", "304", null, "27", "1.2%", null, this);
            obj.getSetter("taborder").set("52");
            obj.set_text("자 산 내 역");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc21", "absolute", "18.8%", "340", null, "27", "75.44%", null, this);
            obj.getSetter("taborder").set("53");
            obj.set_text("자산명");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNmEd", "absolute", "25.52%", "338", null, "30", "26.08%", null, this);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc27", "absolute", "75.68%", "340", null, "27", "18.56%", null, this);
            obj.getSetter("taborder").set("55");
            obj.set_text("취득금액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("acquAmtMaskEd", "absolute", "82.48%", "337", null, "30", "3.04%", null, this);
            obj.set_taborder("56");
            obj.set_mask("9,999,999,999,999");
            this.addChild(obj.name, obj);

            obj = new Grid("fixedAssetMovGrid", "absolute", "17.68%", "384", null, "344", "1.12%", null, this);
            obj.set_taborder("57");
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj.set_binddataset("dsFixedAssetMov");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이동일자\"/><Cell col=\"1\" text=\"관리구분\"/><Cell col=\"2\" text=\"보유부서\"/><Cell col=\"3\" text=\"현위치\"/><Cell col=\"4\" text=\"담당자\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"none\" text=\"bind:movDate\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:mngntCd\" combodataset=\"dsMngntCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:ownDept\" combodataset=\"dsOwnDept\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:pstLoc\" combodataset=\"dsPstLocCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:respoWorker\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:note\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이동일자\"/><Cell col=\"1\" text=\"관리구분\"/><Cell col=\"2\" text=\"보유부서\"/><Cell col=\"3\" text=\"현위치\"/><Cell col=\"4\" text=\"담당자\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" text=\"bind:movDate\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:mngntCd\" combodataset=\"dsMngntCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:ownDept\" combodataset=\"dsOwnDept\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:pstLoc\" combodataset=\"dsPstLocCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:respoWorker\" combodataset=\"dsRespoWorker\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"5\" edittype=\"normal\" style=\"align:left;\" text=\"bind:note\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addFixedAssetMovBtn", "absolute", "924", "731", "90", "32", null, null, this);
            obj.set_taborder("58");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deleteFixedAssetMovBtn", "absolute", "1022", "731", "90", "32", null, null, this);
            obj.set_taborder("59");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchFixedAssetMovBtn", "absolute", "1120", "731", "110", "32", null, null, this);
            obj.set_taborder("60");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1232, 60, this.titleBarDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar4.jpg')");
            		p.set_scrollbars("none");

            	}
            );
            this.titleBarDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 200, this.grpDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.style.set_background("#edececff");
            		p.set_scrollbars("none");

            	}
            );
            this.grpDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AF_FixedAssetMovForm");
            		p.set_titletext("고정자산 이동관리 화면");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","searchOwnDeptCombo","value","dsHmEmp","jobtt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","acquFinanCombo","value","dsFixedAsset","acquFinanCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","mngntCombo","value","dsFixedAsset","mngntCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","equipCombo","value","dsFixedAsset","equipCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","assetCombo","value","dsFixedAsset","assetCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","assetNoEd","value","dsFixedAsset","assetNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","acquCombo","value","dsFixedAsset","acquCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","acntCdCombo","value","dsFixedAsset","acntCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","inOutCapitalCombo","value","dsFixedAsset","inOutCapitalCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","profitRadio","value","dsFixedAsset","profitCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ownDeptBind","ownDeptEd","value","dsFixedAsset","ownDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","pstLocCombo","value","dsFixedAsset","pstLoc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","respoWorkerEd","value","dsFixedAsset","respoWorker");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","depreRateEd","value","dsFixedAsset","depreRate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","depreYearsEd","value","dsFixedAsset","depreYears");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","depreMthdCombo","value","dsFixedAsset","depreMthd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","assetNmEd","value","dsFixedAsset","assetNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","acquAmtMaskEd","value","dsFixedAsset","acquAmt");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AF_FixedAssetMovForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("AF_FixedAssetMovForm.xfdl", "scripts::accScripts.xjs");
        this.registerScript("AF_FixedAssetMovForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";
        //include "scripts::accScripts.xjs"; 

        

        // 폼 온로드 이벤트
        this.AF_FixedAssetMovForm_onload = function(obj,e)
        {
        	this.gfnService("findUsingFixedAssetCdDtlList");
        	this.gfnBind();
        }

        // 고정자산검색 팝업 생성
        this.searchFixedAssetBtn_onclick = function(obj,e)
        {
        	this.gfnFixedAssetPopup('searchFixedAsset');
        }

        // 콤보리셋버튼 
        this.comboResetBtn_onclick = function(obj,e)
        {
        	this.searchAssetCombo.set_index(-1);
        	this.searchMngntCombo.set_index(-1);
        	this.searchOwnDeptCombo.set_index(-1);
        	this.searchAssetNoEd.set_value(null);
        	this.searchAssetNmEd.set_value(null);
        }

        // 고정자산이동검색 버튼
        this.searchFixedAssetMovBtn_onclick = function(obj,e)
        {
        	if(this.searchAssetNoEd.value == null){
        		var acquStartDate = "19000101";
        		var acquEndDate = "21000101";

        		var argument = "acquStartDate='"+acquStartDate+"' acquEndDate='"+acquEndDate+"' assetCd='"+this.searchAssetCombo.value+"' equipCd='undefined' mngntCd='"+this.searchMngntCombo.value+"' depreMthd='undefined' ownDept='"+this.searchOwnDeptCombo.value+"'";
        		this.dsService.setColumn(1,"argument",argument);
        		this.gfnService("findFixedAssetList");
        	}else{
        		var argument = "assetNo='"+this.searchAssetNoEd.value+"'";
        		this.dsService.setColumn(2,"argument",argument);
        		this.gfnService("findFixedAsset");
        		
        	}
        	this.gfnService("findFixedAssetMovList");
        }

        //  그리드 클릭 이벤트
        this.fixedAssetGrid_oncellclick = function(obj,e)
        {
        	var assetNo = this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"assetNo");
        	this.dsFixedAssetMov.filter("assetNo=='"+assetNo+"'");
        	this.fixedAssetMovGrid.set_binddataset("dsFixedAssetMov");
        	
        }

        this.fixedAssetMovGrid_oncellclick = function(obj,e)
        {
        	var selectRow = this.dsFixedAssetMov.getRowType(this.dsFixedAssetMov.rowposition);
        	if(selectRow == 2){
        		this.fixedAssetMovGrid.set_formatid("insert");
        	}else{
        	    if(this.dsFixedAssetMov.rowposition == this.dsFixedAssetMov.rowcount-1){
        			this.fixedAssetMovGrid.set_formatid("insert");
        	    }else{
        			this.fixedAssetMovGrid.set_formatid("default");
        	    }
        	}
        }

        this.fixedAssetMovGrid_oncelldblclick = function(obj,e)
        {
        	if(e.cell == 4){
        		this.gfnEmpPopup();
        		this.setEmpInfo = function(arrRtn){ 
        			this.dsFixedAssetMov.setColumn(e.row,"respoWorker",arrRtn[1]);
        		}
        	}
        }

        //  그리드 내용변경 이벤트
        this.fixedAssetGrid_onselectchanged = function(obj,e)
        {
        	this.fixedAssetGrid_oncellclick(obj,e);
        }

        // 고정자산이동 추가 이벤트
        this.addFixedAssetMovBtn_onclick = function(obj,e)
        {
        	var nRow = this.dsFixedAssetMov.addRow();
        	this.dsFixedAssetMov.setColumn(nRow,"assetNo",this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"assetNo"));
        	this.dsFixedAssetMov.setColumn(nRow,"movDate",this.gfnGetTime());
        }

        this.deleteFixedAssetMovBtn_onclick = function(obj,e)
        {
        	this.dsFixedAssetMov.deleteMultiRows(this.fixedAssetMovGrid.getSelectedDatasetRows());
        }

        this.batchFixedAssetMovBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchFixedAssetMovProcess");
        }

        
        //  콜백 함수
        this.fixedAssetMovCallBack = function fixedAssetMovCallBack(strSvcID,nErrorCode,strErrorMag)
        {
        	if(strSvcID == "findUsingFixedAssetCdDtlList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZFG'");
        			this.dsAssetCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");

        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZBG'");
        			this.dsEquipCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZBK'");
        			this.dsMngntCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZSA'");
        			this.dsDepreMthd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZGJ'");
        			this.dsAcquFinanCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZYG'");
        			this.dsInOutCapitalCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZAG'");
        			this.dsAcntCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZGE'");
        			this.dsAcquCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZLC'");
        			this.dsPstLocCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        		}
        	}else if(strSvcID == "findFixedAssetList" || strSvcID == "findFixedAsset"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			this.fixedAssetGrid_oncellclick(this,0);
        		}
        	}else if(strSvcID == "findFixedAssetMovList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			
        		}
        	}else if(strSvcID == "batchFixedAssetMovProcess"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			alert("정상 처리 되었습니다.");
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFixedAsset.addEventHandler("oncolumnchanged", this.dsFixedAsset_oncolumnchanged, this);
            this.addEventHandler("onload", this.AF_FixedAssetMovForm_onload, this);
            this.titleBarDiv.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.titleBarDiv.Static00.addEventHandler("onclick", this.Static06_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.comboResetBtn.addEventHandler("onclick", this.comboResetBtn_onclick, this);
            this.searchFixedAssetMovBtn.addEventHandler("onclick", this.searchFixedAssetMovBtn_onclick, this);
            this.searchFixedAssetBtn.addEventHandler("onclick", this.searchFixedAssetBtn_onclick, this);
            this.fixedAssetGrid.addEventHandler("oncellclick", this.fixedAssetGrid_oncellclick, this);
            this.fixedAssetGrid.addEventHandler("onselectchanged", this.fixedAssetGrid_onselectchanged, this);
            this.grpDiv.comboResetBtn.addEventHandler("onclick", this.comboResetBtn_onclick, this);
            this.grpDiv.subCodeStc33.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.grpDiv.subCodeStc35.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.grpDiv.subCodeStc36.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc14.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc13.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc12.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc15.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc16.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc34.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc35.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc36.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc17.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc18.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc19.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc20.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc21.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc27.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.fixedAssetMovGrid.addEventHandler("oncellclick", this.fixedAssetMovGrid_oncellclick, this);
            this.fixedAssetMovGrid.addEventHandler("oncelldblclick", this.fixedAssetMovGrid_oncelldblclick, this);
            this.addFixedAssetMovBtn.addEventHandler("onclick", this.addFixedAssetMovBtn_onclick, this);
            this.deleteFixedAssetMovBtn.addEventHandler("onclick", this.deleteFixedAssetMovBtn_onclick, this);
            this.batchFixedAssetMovBtn.addEventHandler("onclick", this.batchFixedAssetMovBtn_onclick, this);

        };

        this.loadIncludeScript("AF_FixedAssetMovForm.xfdl");

       
    };
}
)();

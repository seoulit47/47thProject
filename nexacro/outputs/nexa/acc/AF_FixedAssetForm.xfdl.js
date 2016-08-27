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
                this.set_name("AF_FixedAssetForm");
                this.set_classname("AF_FixedAssetForm");
                this.set_titletext("고정자산 관리화면");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }
            this.style.set_font("9 돋움");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFixedAssetSequence", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYearDepre", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDepreRate", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new FileDialog("fileDialog", this);
            obj.set_filter("All(*.*)|*.*|");
            obj.set_filterindex("0");
            obj.set_defaultextension("false");
            this.addChild(obj.name, obj);
            obj = new VirtualFile("virtualFile", this);
            this.addChild(obj.name, obj);
            obj = new Dataset("dsMonUnitCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsProdCtryCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInOutCapitalCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAcntCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsProfit", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">수익</Col><Col id=\"data\">수익</Col></Row><Row><Col id=\"code\">비수익</Col><Col id=\"data\">비수익</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCashButYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">Y</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"data\">N</Col><Col id=\"code\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDepreMthd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findMaxAssetNo</Col><Col id=\"URL\">his::acc/fixedasset/findMaxAssetNo.do</Col><Col id=\"outData\">dsFixedAssetSequence=dsFixedAssetSequence</Col><Col id=\"callbackFunc\">fixedAssetCallBack</Col></Row><Row><Col id=\"serviceID\">findUsingFixedAssetCdDtlList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/fixedasset/findUsingFixedAssetCdDtlList.do</Col><Col id=\"callbackFunc\">fixedAssetCallBack</Col><Col id=\"outData\">dsFixedAssetCdDtl=dsFixedAssetCdDtl</Col></Row><Row><Col id=\"serviceID\">findDepreRateList</Col><Col id=\"URL\">his::acc/fixedasset/findDepreRateList.do</Col><Col id=\"outData\">dsDepreRate=dsDepreRate</Col><Col id=\"callbackFunc\">fixedAssetCallBack</Col></Row><Row><Col id=\"serviceID\">findFixedAsset</Col><Col id=\"URL\">his::acc/fixedasset/findFixedAsset.do</Col><Col id=\"outData\">dsFixedAsset=dsFixedAsset</Col><Col id=\"callbackFunc\">fixedAssetCallBack</Col></Row><Row><Col id=\"serviceID\">findFixedAssetYearDepreList</Col><Col id=\"URL\">his::acc/fixedasset/findFixedAssetYearDepreList.do</Col><Col id=\"outData\">dsYearDepre=dsYearDepre</Col><Col id=\"callbackFunc\">fixedAssetCallBack</Col></Row><Row><Col id=\"serviceID\">batchFixedAssetProcess</Col><Col id=\"URL\">his::acc/fixedasset/batchFixedAssetProcess.do</Col><Col id=\"inData\">dsFixedAsset=dsFixedAsset:U dsFixedAssetPhoto=dsFixedAssetPhoto</Col><Col id=\"callbackFunc\">fixedAssetCallBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAsset", this);
            obj._setContents("<ColumnInfo><Column id=\"equipCd\" type=\"STRING\" size=\"256\"/><Column id=\"mngntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acquFinanCd\" type=\"STRING\" size=\"256\"/><Column id=\"inOutCapitalCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"depreMthd\" type=\"STRING\" size=\"256\"/><Column id=\"assetNo\" type=\"STRING\" size=\"256\"/><Column id=\"acquDate\" type=\"STRING\" size=\"256\"/><Column id=\"dproDate\" type=\"STRING\" size=\"256\"/><Column id=\"profitCd\" type=\"STRING\" size=\"256\"/><Column id=\"depreYears\" type=\"STRING\" size=\"256\"/><Column id=\"depreRate\" type=\"STRING\" size=\"256\"/><Column id=\"assetNm\" type=\"STRING\" size=\"256\"/><Column id=\"acnt\" type=\"STRING\" size=\"256\"/><Column id=\"asstAcnt\" type=\"STRING\" size=\"256\"/><Column id=\"acquAmt\" type=\"STRING\" size=\"256\"/><Column id=\"monUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"disposalDate\" type=\"STRING\" size=\"256\"/><Column id=\"disposalCd\" type=\"STRING\" size=\"256\"/><Column id=\"assetGrp\" type=\"STRING\" size=\"256\"/><Column id=\"splyComp\" type=\"STRING\" size=\"256\"/><Column id=\"cashBuyYn\" type=\"STRING\" size=\"256\"/><Column id=\"prodComp\" type=\"STRING\" size=\"256\"/><Column id=\"modelNm\" type=\"STRING\" size=\"256\"/><Column id=\"prodNo\" type=\"STRING\" size=\"256\"/><Column id=\"prodCtry\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"receiver\" type=\"STRING\" size=\"256\"/><Column id=\"ownDept\" type=\"STRING\" size=\"256\"/><Column id=\"pstLoc\" type=\"STRING\" size=\"256\"/><Column id=\"respoWorker\" type=\"STRING\" size=\"256\"/><Column id=\"fixedAssetPhoto\" type=\"STRING\" size=\"256\"/><Column id=\"assetCd\" type=\"STRING\" size=\"256\"/><Column id=\"acquCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEquipCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetCdDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMngntCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAssetCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAcquFinanCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAcquCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPstLocCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDisposalCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetPhoto", this);
            obj._setContents("<ColumnInfo><Column id=\"assetNo\" type=\"STRING\" size=\"256\"/><Column id=\"fixedAssetPhoto\" type=\"BLOB\" size=\"256\"/><Column id=\"fileFullPath\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "0%", "0", "1232", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.76%", "-4", null, "60", "77.69%", null, this.titleBarDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("고정자산 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "756", "67", "86", "26", null, null, this.titleBarDiv);
            obj.getSetter("taborder").set("1");
            obj.set_text("자산번호");
            obj.getSetter("class").set("AreaStc");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Edit("assetNoEdit", "absolute", "845", "67", "105", "26", null, null, this.titleBarDiv);
            obj.set_taborder("2");
            obj.getSetter("class").set("AreaEdt");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Edit("assetNmEdit", "absolute", "1040", "67", "105", "26", null, null, this.titleBarDiv);
            obj.set_taborder("3");
            obj.getSetter("class").set("AreaEdt");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "952", "67", "86", "26", null, null, this.titleBarDiv);
            obj.getSetter("taborder").set("4");
            obj.set_text("자산이름");
            obj.getSetter("class").set("AreaStc");
            this.titleBarDiv.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "2.16%", "54", null, "37", "1.44%", null, this);
            obj.set_taborder("7");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Edit("searchAssetNmEd", "absolute", "23.52%", "58", "118", "28", null, null, this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("searchAssetNoEd", "absolute", "10.16%", "59", "118", "28", null, null, this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "2.64%", "59", null, "28", "90.56%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("고정자산 검색");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("searchFixedAssetBtn", "absolute", "254", "58", "32", "28", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchFixedAssetInfoBtn", "absolute", "420", "57", "90", "33", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("grpDiv", "absolute", "2.32%", "97", null, "219", "45.6%", null, this);
            obj.set_taborder("13");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Calendar("acquDateCal", "absolute", "48.54%", "36", null, "27", "31.18%", null, this.grpDiv);
            this.grpDiv.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            obj = new Calendar("dproDateCal", "absolute", "48.54%", "67", null, "27", "31.18%", null, this.grpDiv);
            this.grpDiv.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Static("subCodeStc00", "absolute", "2.16%", "97", null, "27", "45.68%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("분 류 내 역");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc05", "absolute", "2.72%", "131", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("자산번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd", "absolute", "9.28%", "129", null, "27", "80.08%", null, this);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("assetCombo", "absolute", "9.28%", "162", "133", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_innerdataset("@dsAssetCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Static("subCodeStc06", "absolute", "2.72%", "163", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("자산구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc07", "absolute", "2.72%", "195", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("19");
            obj.set_text("장비구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("equipCombo", "absolute", "9.28%", "195", "133", "27", null, null, this);
            this.addChild(obj.name, obj);
            var equipCombo_innerdataset = new Dataset("equipCombo_innerdataset", this.equipCombo);
            equipCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">동남권원자력의학원장</Col><Col id=\"datacolumn\">동남권원자력의학원장</Col></Row><Row><Col id=\"codecolumn\">원장</Col><Col id=\"datacolumn\">원장</Col></Row><Row><Col id=\"codecolumn\">원장 직무대행</Col><Col id=\"datacolumn\">원장 직무대행</Col></Row><Row><Col id=\"codecolumn\">주임과장</Col><Col id=\"datacolumn\">주임과장</Col></Row><Row><Col id=\"codecolumn\">실장</Col><Col id=\"datacolumn\">실장</Col></Row><Row><Col id=\"codecolumn\">센터장</Col><Col id=\"datacolumn\">센터장</Col></Row><Row><Col id=\"codecolumn\">병원장</Col><Col id=\"datacolumn\">병원장</Col></Row><Row><Col id=\"codecolumn\">병원장 직무대행</Col><Col id=\"datacolumn\">병원장 직무대행</Col></Row><Row><Col id=\"codecolumn\">연구센터장</Col><Col id=\"datacolumn\">연구센터장</Col></Row><Row><Col id=\"codecolumn\">연구센터장 직무대행</Col><Col id=\"datacolumn\">연구센터장 직무대행</Col></Row><Row><Col id=\"codecolumn\">부장</Col><Col id=\"datacolumn\">부장</Col></Row><Row><Col id=\"codecolumn\">부장대우</Col><Col id=\"datacolumn\">부장대우</Col></Row><Row><Col id=\"codecolumn\">부장 직무대행</Col><Col id=\"datacolumn\">부장 직무대행</Col></Row><Row><Col id=\"codecolumn\">실장(부장급)</Col><Col id=\"datacolumn\">실장(부장급)</Col></Row><Row><Col id=\"codecolumn\">실장(부장급)대우</Col><Col id=\"datacolumn\">실장(부장급)대우</Col></Row><Row><Col id=\"codecolumn\">실장(부장급) 직무대행</Col><Col id=\"datacolumn\">실장(부장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급)</Col><Col id=\"datacolumn\">센터장(부장급)</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급)대우</Col><Col id=\"datacolumn\">센터장(부장급)대우</Col></Row><Row><Col id=\"codecolumn\">센터장(부장급) 직무대행</Col><Col id=\"datacolumn\">센터장(부장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">팀장</Col><Col id=\"datacolumn\">팀장</Col></Row><Row><Col id=\"codecolumn\">팀장대우</Col><Col id=\"datacolumn\">팀장대우</Col></Row><Row><Col id=\"codecolumn\">팀장 직무대행</Col><Col id=\"datacolumn\">팀장 직무대행</Col></Row><Row><Col id=\"codecolumn\">과장</Col><Col id=\"datacolumn\">과장</Col></Row><Row><Col id=\"codecolumn\">과장대우</Col><Col id=\"datacolumn\">과장대우</Col></Row><Row><Col id=\"codecolumn\">과장 직무대행</Col><Col id=\"datacolumn\">과장 직무대행</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급)</Col><Col id=\"datacolumn\">실장(팀장급)</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급)대우</Col><Col id=\"datacolumn\">실장(팀장급)대우</Col></Row><Row><Col id=\"codecolumn\">실장(팀장급) 직무대행</Col><Col id=\"datacolumn\">실장(팀장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급)</Col><Col id=\"datacolumn\">센터장(팀장급)</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급)대우</Col><Col id=\"datacolumn\">센터장(팀장급)대우</Col></Row><Row><Col id=\"codecolumn\">센터장(팀장급) 직무대행</Col><Col id=\"datacolumn\">센터장(팀장급) 직무대행</Col></Row><Row><Col id=\"codecolumn\">수간호사</Col><Col id=\"datacolumn\">수간호사</Col></Row><Row><Col id=\"codecolumn\">정책위원</Col><Col id=\"datacolumn\">정책위원</Col></Row></Rows>");
            obj.set_innerdataset(equipCombo_innerdataset);
            obj.set_taborder("20");
            obj.set_innerdataset("@dsEquipCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Combo("mngntCombo", "absolute", "9.28%", "228", "133", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_innerdataset("@dsMngntCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Static("subCodeStc08", "absolute", "2.72%", "227", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("관리구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc09", "absolute", "2.72%", "259", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("취득재원");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("acquFinanCombo", "absolute", "9.28%", "261", "133", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_innerdataset("@dsAcquFinanCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Static("subCodeStc14", "absolute", "21.2%", "259", null, "27", "73.04%", null, this);
            obj.getSetter("taborder").set("25");
            obj.set_text("취득구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc10", "absolute", "21.2%", "227", null, "27", "73.04%", null, this);
            obj.getSetter("taborder").set("26");
            obj.set_text("계정구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc11", "absolute", "21.2%", "195", null, "27", "73.04%", null, this);
            obj.getSetter("taborder").set("27");
            obj.set_text("내/외자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc12", "absolute", "21.2%", "163", null, "27", "73.04%", null, this);
            obj.getSetter("taborder").set("28");
            obj.set_text("전산일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc13", "absolute", "21.2%", "131", null, "27", "73.04%", null, this);
            obj.getSetter("taborder").set("29");
            obj.set_text("취득일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("inOutCapitalCombo", "absolute", "27.6%", "195", "133", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_innerdataset("@dsInOutCapitalCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Combo("acntCdCombo", "absolute", "27.6%", "228", "133", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_innerdataset("@dsAcntCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Combo("acquCombo", "absolute", "27.6%", "261", "133", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_innerdataset("@dsAcquCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Static("subCodeStc16", "absolute", "39.04%", "131", null, "27", "55.2%", null, this);
            obj.getSetter("taborder").set("33");
            obj.set_text("수익구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Radio("profitRadio", "absolute", "45.84%", "131", null, "23", "46%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_columncount("2");
            obj.set_innerdataset("@dsProfit");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_color("black");
            obj.style.set_font("8 Dotum");

            obj = new Div("Div02", "absolute", "54.72%", "96", null, "219", "26.64%", null, this);
            obj.set_taborder("35");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "54.72%", "96", null, "27", "26.56%", null, this);
            obj.getSetter("taborder").set("36");
            obj.set_text("상 각 내 역");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc17", "absolute", "55.36%", "130", null, "27", "38.88%", null, this);
            obj.getSetter("taborder").set("37");
            obj.set_text("상각방법");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc18", "absolute", "55.36%", "187", null, "27", "38.88%", null, this);
            obj.getSetter("taborder").set("38");
            obj.set_text("상각년수");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc19", "absolute", "55.36%", "244", null, "27", "38.88%", null, this);
            obj.getSetter("taborder").set("39");
            obj.set_text("상각율");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("depreRateEd", "absolute", "62%", "241", null, "27", "27.36%", null, this);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("depreYearsEd", "absolute", "62%", "187", null, "27", "27.36%", null, this);
            obj.set_taborder("41");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.set_enable("false");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("depreMthdCombo", "absolute", "62%", "129", "133", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("42");
            obj.set_innerdataset("@dsDepreMthd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Static("subCodeStc39", "absolute", "74.4%", "96", "302", "27", null, null, this);
            obj.getSetter("taborder").set("43");
            obj.set_text("상 각 이 력");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("depreGrid", "absolute", "74.4%", "121", null, "603", "1.44%", null, this);
            obj.set_taborder("44");
            obj.set_binddataset("dsYearDepre");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.set_suppresslevel("allskip");
            obj.style.set_border("2 solid #9f8f71ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"130\"/></Columns><Rows><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/></Rows><Band id=\"body\"><Cell text=\"년도\"/><Cell col=\"1\" text=\"bind:depreYear\"/><Cell row=\"1\" style=\"background2:#edececff;\" text=\"취득가액\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" style=\"align:center;background2:#edececff;\" text=\"bind:basicAssetAmt\"/><Cell row=\"2\" style=\"background2:#edececff;\" text=\"누적상각\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" style=\"align:center;background2:#edececff;\" text=\"bind:depreSum\"/><Cell row=\"3\" style=\"background2:#edececff;\" text=\"이월금액\"/><Cell row=\"3\" col=\"1\" displaytype=\"number\" style=\"align:center;background2:#edececff;\" text=\"bind:residDepreAmt\"/><Cell row=\"4\" style=\"background2:#edececff;\" text=\"감가상각\"/><Cell row=\"4\" col=\"1\" displaytype=\"number\" style=\"align:center;background2:#edececff;\" text=\"bind:thatyearDepreAmt\"/><Cell row=\"5\" style=\"background2:#edececff;\" text=\"잔존가액\"/><Cell row=\"5\" col=\"1\" displaytype=\"number\" style=\"align:center;background2:#edececff;\" text=\"bind:residAmt\"/><Cell row=\"6\" style=\"background2:#edececff;\" text=\"마감여부\"/><Cell row=\"6\" col=\"1\" displaytype=\"combo\" style=\"background2:#edececff;\" text=\"bind:yearDepreDlineYn\" combodataset=\"dsCashButYn\" combocodecol=\"code\" combodatacol=\"data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("assetDiv", "absolute", "2.4%", "329", null, "200", "26.4%", null, this);
            obj.set_taborder("45");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "2.16%", "325", null, "27", "26.56%", null, this);
            obj.getSetter("taborder").set("46");
            obj.set_text("자 산 내 역");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc15", "absolute", "2.72%", "357", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("47");
            obj.set_text("자산명");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc20", "absolute", "2.72%", "391", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("48");
            obj.set_text("계정과목");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc22", "absolute", "2.72%", "424", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("49");
            obj.set_text("자산분류");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc23", "absolute", "2.72%", "457", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("50");
            obj.set_text("매각일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc24", "absolute", "2.72%", "490", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("51");
            obj.set_text("매각구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("disposalCdEd", "absolute", "9.2%", "490", "151", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_readonly("true");
            obj.set_innerdataset("@dsDisposalCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Calendar("disposalDateCal", "absolute", "9.2%", "456", null, "27", "78.72%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("53");
            obj.set_expr("expr:Date()");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Edit("assetGrpCdEd", "absolute", "9.2%", "424", "114", "27", null, null, this);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("acntEd", "absolute", "9.2%", "389", "114", "27", null, null, this);
            obj.set_taborder("55");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNmEd", "absolute", "9.2%", "356", null, "27", "27.04%", null, this);
            obj.set_taborder("56");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc21", "absolute", "24.56%", "389", null, "27", "69.52%", null, this);
            obj.getSetter("taborder").set("57");
            obj.set_text("보조과목");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("assetGrpNmEd", "absolute", "24.56%", "424", "232", "27", null, null, this);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("asstAcntEd", "absolute", "31.12%", "391", null, "27", "56.8%", null, this);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc25", "absolute", "47.36%", "392", null, "27", "46.72%", null, this);
            obj.getSetter("taborder").set("60");
            obj.set_text("취득금액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc27", "absolute", "47.44%", "429", null, "27", "46.64%", null, this);
            obj.getSetter("taborder").set("61");
            obj.set_text("통화단위");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("monUnitCombo", "absolute", "53.84%", "426", "151", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("62");
            obj.set_innerdataset("@dsMonUnitCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new MaskEdit("acquAmtMaskEd", "absolute", "53.76%", "391", null, "27", "34.16%", null, this);
            obj.set_taborder("63");
            obj.set_mask("9,999,999,999,999");
            this.addChild(obj.name, obj);

            obj = new Div("purDiv", "absolute", "2.16%", "537", null, "225", "26.4%", null, this);
            obj.set_taborder("66");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new ImageViewer("fixedAssetImgView", "absolute", "64.95%", "64", null, "156", "0.9%", null, this.purDiv);
            obj.set_taborder("0");
            obj.set_stretch("fit");
            obj.style.set_border("0 solid #e5e5e5ff");
            this.purDiv.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "2.08%", "535", null, "27", "26.4%", null, this);
            obj.getSetter("taborder").set("67");
            obj.set_text("구 입 내 역");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc26", "absolute", "2.72%", "566", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("68");
            obj.set_text("공급처");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc28", "absolute", "2.72%", "602", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("69");
            obj.set_text("제조회사");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc29", "absolute", "2.72%", "635", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("70");
            obj.set_text("모델명");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc30", "absolute", "2.72%", "667", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("71");
            obj.set_text("제조번호");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc31", "absolute", "2.72%", "701", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("72");
            obj.set_text("제조국");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc32", "absolute", "2.72%", "735", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("73");
            obj.set_text("등급");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("gradeEd", "absolute", "9.6%", "735", null, "27", "75.92%", null, this);
            obj.set_taborder("74");
            obj.set_inputmode("upper");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("prodCtryCombo", "absolute", "9.6%", "702", "181", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("75");
            obj.set_innerdataset("@dsProdCtryCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Edit("prodNoEd", "absolute", "9.6%", "668", null, "27", "75.92%", null, this);
            obj.set_taborder("76");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("modelNmEd", "absolute", "9.6%", "634", null, "27", "75.92%", null, this);
            obj.set_taborder("77");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("prodCompEd", "absolute", "9.6%", "600", "140", "27", null, null, this);
            obj.set_taborder("78");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("splyCompEd", "absolute", "9.6%", "566", "140", "27", null, null, this);
            obj.set_taborder("79");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc33", "absolute", "25.84%", "566", null, "27", "68.24%", null, this);
            obj.getSetter("taborder").set("80");
            obj.set_text("수령자");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc34", "absolute", "25.84%", "600", null, "27", "68.24%", null, this);
            obj.getSetter("taborder").set("81");
            obj.set_text("보유부서");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc35", "absolute", "25.84%", "633", null, "27", "68.24%", null, this);
            obj.getSetter("taborder").set("82");
            obj.set_text("현위치");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc36", "absolute", "25.84%", "666", null, "27", "68.24%", null, this);
            obj.getSetter("taborder").set("83");
            obj.set_text("담당자");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc37", "absolute", "25.84%", "701", null, "27", "68.24%", null, this);
            obj.getSetter("taborder").set("84");
            obj.set_text("현금구매여부");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 8 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Radio("cashButYnRadio", "absolute", "33.28%", "707", null, "22", "58.56%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("85");
            obj.set_columncount("2");
            obj.set_innerdataset("@dsCashButYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_color("black");
            obj.style.set_font("9 Dotum");

            obj = new Edit("respoWorkerEd", "absolute", "32.4%", "666", "140", "27", null, null, this);
            obj.set_taborder("86");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("pstLocCombo", "absolute", "32.4%", "634", "181", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("87");
            obj.set_innerdataset("@dsPstLocCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Edit("ownDeptEd", "absolute", "32.4%", "602", "140", "27", null, null, this);
            obj.set_taborder("88");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("receiverEd", "absolute", "32.4%", "570", "140", "27", null, null, this);
            obj.set_taborder("89");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc38", "absolute", "48.56%", "567", null, "27", "45.52%", null, this);
            obj.getSetter("taborder").set("90");
            obj.set_text("자산사진");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("searchAcntBtn", "absolute", "234", "388", "32", "28", null, null, this);
            obj.set_taborder("91");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchassetGrpBtn", "absolute", "234", "423", "32", "28", null, null, this);
            obj.set_taborder("92");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchProdCompBtn", "absolute", "268", "602", "32", "28", null, null, this);
            obj.set_taborder("93");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchSplyCompBtn", "absolute", "268", "567", "32", "28", null, null, this);
            obj.set_taborder("94");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchReceiverBtn", "absolute", "554", "570", "32", "28", null, null, this);
            obj.set_taborder("95");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchOwnDeptBtn", "absolute", "554", "602", "32", "28", null, null, this);
            obj.set_taborder("96");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchRespoWorkerBtn", "absolute", "554", "672", "32", "28", null, null, this);
            obj.set_taborder("97");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addFixedAssetBtn", "absolute", "1043", "730", "90", "32", null, null, this);
            obj.set_taborder("98");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn05", "absolute", "1144", "728", "90", "32", null, null, this);
            obj.set_taborder("99");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addAssetPhotoBtn", "absolute", "834", "566", "78", "28", null, null, this);
            obj.set_taborder("100");
            obj.style.set_background("@gradation URL('img::attachBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "49.44%", "56", null, "32", "41.12%", null, this);
            obj.set_taborder("101");
            obj.set_value("2016");
            obj.getSetter("class").set("AreaSpin");
            obj.set_visible("false");
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
            obj = new Layout("default", "", 0, 219, this.grpDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.style.set_background("#edececff");

            	}
            );
            this.grpDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 225, this.purDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("66");
            		p.style.set_background("#edececff");

            	}
            );
            this.purDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AF_FixedAssetForm");
            		p.set_titletext("고정자산 관리화면");
            		p.style.set_font("9 돋움");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("assetNoBind","assetNoEd","value","dsFixedAsset","assetNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","assetCombo","value","dsFixedAsset","assetCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("equipCdBind","equipCombo","value","dsFixedAsset","equipCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mngntCdBind","mngntCombo","value","dsFixedAsset","mngntCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("acquFinanCdBind","acquFinanCombo","value","dsFixedAsset","acquFinanCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("inOutCapitalCdBind","inOutCapitalCombo","value","dsFixedAsset","inOutCapitalCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("acntCdBind","acntCdCombo","value","dsFixedAsset","acntCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("acquCdBind","acquCombo","value","dsFixedAsset","acquCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("profitCdBind","profitRadio","value","dsFixedAsset","profitCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("depreRateBind","depreRateEd","value","dsFixedAsset","depreRate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("depreYearsBind","depreYearsEd","value","dsFixedAsset","depreYears");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("depreMthdBind","depreMthdCombo","value","dsFixedAsset","depreMthd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","disposalCdEd","value","dsFixedAsset","disposalCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("disposalDateBind","disposalDateCal","value","dsFixedAsset","disposalDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("assetGrpBind","assetGrpCdEd","value","dsFixedAsset","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("acntBind","acntEd","value","dsFixedAsset","acnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("assetNmBind","assetNmEd","value","dsFixedAsset","assetNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","assetGrpNmEd","value","dsFixedAsset","assetGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("asstAcntBind","asstAcntEd","value","dsFixedAsset","asstAcnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("monUnitCdBind","monUnitCombo","value","dsFixedAsset","monUnitCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","acquAmtMaskEd","value","dsFixedAsset","acquAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("gradeBind","gradeEd","value","dsFixedAsset","grade");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("prodCtryBind","prodCtryCombo","value","dsFixedAsset","prodCtry");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("prodNoBind","prodNoEd","value","dsFixedAsset","prodNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("modelNmBind","modelNmEd","value","dsFixedAsset","modelNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("prodCompBind","prodCompEd","value","dsFixedAsset","prodComp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("splyCompBind","splyCompEd","value","dsFixedAsset","splyComp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cashBuyYnBind","cashButYnRadio","value","dsFixedAsset","cashBuyYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("respoWorkerBind","respoWorkerEd","value","dsFixedAsset","respoWorker");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("pstLocBind","pstLocCombo","value","dsFixedAsset","pstLoc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ownDeptBind","ownDeptEd","value","dsFixedAsset","ownDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("receiverBind","receiverEd","value","dsFixedAsset","receiver");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AF_FixedAssetForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("AF_FixedAssetForm.xfdl", "scripts::accScripts.xjs");
        this.registerScript("AF_FixedAssetForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";
        //include "scripts::accScripts.xjs"; 

        
        this.AF_FixedAssetForm_onload = function(obj,e)
        {
        	this.gfnService("findMaxAssetNo");
         	this.gfnService("findUsingFixedAssetCdDtlList");
         	this.gfnService("findDepreRateList");
        	
         	this.searchSplyCompBtn.set_enableevent(false);
         	this.searchProdCompBtn.set_enableevent(false);
         	this.searchReceiverBtn.set_enableevent(false);
         	this.searchOwnDeptBtn.set_enableevent(false);
         	this.searchRespoWorkerBtn.set_enableevent(false);
         	this.searchAcntBtn.set_enableevent(false);
        }

        

        

        //콜백함수
        this.fixedAssetCallBack = function fixedAssetCallBack(strSvcID,nErrorCode,strErrorMag)
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
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZDW'");
        			this.dsMonUnitCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZNA'");
        			this.dsProdCtryCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZLC'");
        			this.dsPstLocCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZMG'");
        			this.dsDisposalCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        		
        		}
        	}else if(strSvcID == "findDepreRateList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        		}
        	}else if(strSvcID == "findFixedAsset"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			var assetNo = this.searchAssetNoEd.value;
        			var argument = "assetNo='"+assetNo+"'";
        			this.dsService.setColumn(4,"argument",argument);
        			this.gfnService("findFixedAssetYearDepreList");
        		}
        	}else if(strSvcID == "findFixedAssetYearDepreList"){
        		if(nErrorCode==-1)
        				alert(strErrorMag);
        		else{		
        			alert("고정자산 상세 조회 완료");
        		}
        	}else if(strSvcID == "batchFixedAssetProcess"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			alert("정상 처리 되었습니다.");
        			this.gfnService("findMaxAssetNo");
        		}
        	}
        }

        // 고정자산검색 팝업생성
        this.searchFixedAssetBtn_onclick = function(obj,e)
        {
        	this.gfnFixedAssetPopup('searchFixedAsset');
        }

        //고정자산 상세내역 조회 버튼
        this.searchFixedAssetInfoBtn_onclick = function(obj,e)
        {
        	var assetNo = this.searchAssetNoEd.value;
        	if(assetNo == null){
        		alert("고정자산을 검색한 후 조회하십시오. ");
        	}else{
        		this.acquAmtMaskEd.set_readonly(true);
        		this.depreMthdCombo.set_readonly(true);
        		this.depreYearsEd.set_readonly(true);
        		this.assetNoEd.set_readonly(true);
        	
        		var argument = "assetNo='"+assetNo+"'";
        		this.dsService.setColumn(3,"argument",argument);
        		this.gfnService("findFixedAsset");
        		
        		this.searchassetGrpBtn.set_enableevent(true);
        		this.addAssetPhotoBtn.set_enableevent(true);
        		
        		this.searchSplyCompBtn.set_enableevent(true);
        		this.searchProdCompBtn.set_enableevent(true);
        		this.searchReceiverBtn.set_enableevent(true);
        		this.searchOwnDeptBtn.set_enableevent(true);
        		this.searchRespoWorkerBtn.set_enableevent(true);
        		this.searchAcntBtn.set_enableevent(true);
        	}
        }

        //고정자산 추가
        this.addFixedAssetBtn_onclick = function(obj,e)
        {
        	if(this.dsFixedAsset.getRowType(this.dsFixedAsset.rowposition) == 4){
        		alert("수정사항을 저장한 후 추가 하시오.");
        	}else if(this.dsFixedAsset.getRowType(this.dsFixedAsset.rowposition) == 2){
        		alert("추가중인 정보가 존재합니다.");
        	}else{
        		this.acquAmtMaskEd.set_readonly(false);
        		this.depreMthdCombo.set_readonly(false);
        		this.depreYearsEd.set_readonly(false);
        		//this.assetNoEd.set_readonly(false);
        		this.searchassetGrpBtn.set_enableevent(true);
        		this.addAssetPhotoBtn.set_enableevent(true);		
        		this.searchSplyCompBtn.set_enableevent(true);
        		this.searchProdCompBtn.set_enableevent(true);
        		this.searchReceiverBtn.set_enableevent(true);
        		this.searchOwnDeptBtn.set_enableevent(true);
        		this.searchRespoWorkerBtn.set_enableevent(true);
        		this.searchAcntBtn.set_enableevent(true);
        		this.dsYearDepre.deleteAll();

        		var nRow = this.dsFixedAsset.addRow();
        		var maxAssetNo = this.dsFixedAssetSequence.getColumn(0,"assetNo");
        		if(maxAssetNo != null){
        			var newAssetNo = nexacro.toNumber(maxAssetNo.substr(9))+1;
        			this.dsFixedAsset.setColumn(nRow,"assetNo",maxAssetNo.substr(0,9)+newAssetNo.toString());
        		}else{
        			this.dsFixedAsset.setColumn(nRow,"assetNo","1-1-2016-1");
        		}
        		
        	}
        }

        //자산분류검색 팝업
        this.searchassetGrpBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("AF_FixedAssetGrpCodePopupForm", "acc", "", "");
        	//application.open("fixedAssetGrpCdPopup","acc::AFassetGrpCdPopupForm.xfdl",this.parent,{parentReason:'searchFixedAssetGrpCd'},"showtitlebar=true showstatusbar=false",0,0,780,550);
        }

        //계정과목 조회 팝업생성
        this.searchAcntBtn_onclick = function(obj,e)
        {
        	application.open("계정과목조회","acc::AE_AcntCodePopupForm.xfdl",this.parent,{gubun:'acntCD'},"showtitlebar=true showstatusbar=false",110,110,this);
        	this.setCode = function(code,arrRtn){
        		this.acntEd.set_value(arrRtn[1]);
        	}
        }

        // 공급처&제조회사 검색 팝업생성 이벤트
        this.searchSplyCompBtn_onclick = function(obj,e)
        {
        	this.gfnCodePopup('CM001');
        	switch(obj.name){
        		case "searchSplyCompBtn" :
        			this.setCode = function(code,arrRtn,codeSeq){
        				this.splyCompEd.set_value(arrRtn[1]);									
        			}; break;
        		case "searchProdCompBtn" :
        			this.setCode = function(code,arrRtn,codeSeq){
        				this.prodCompEd.set_value(arrRtn[1]);									
        			}; break;
        	}
        }

        // 수령자&담당자 검색 팝업생성 이벤트
        this.searchReceiverBtn_onclick = function(obj,e)
        {
        	this.gfnEmpPopup();
        	switch(obj.name){
        		case "searchReceiverBtn" : 
        			this.setEmpInfo = function(arrRtn){ 
        				this.receiverEd.set_value(arrRtn[1]);  
        				//this.respoWorkerEd.set_value(arrRtn[1]);
        			}; break;
        			
        		case "searchRespoWorkerBtn" : 
        			this.setEmpInfo = function(arrRtn){
        				//this.receiverEd.set_value(arrRtn[1]);  
        				this.respoWorkerEd.set_value(arrRtn[1]);
        			}; break;	
        		}
        }

        
        // 보유부서검색 팝업생성 이벤트
        this.searchOwnDeptBtn_onclick = function(obj,e)
        {
        	this.gfnCodePopup("GP500"); 
        	this.setCode = function(arrRtn){
        		this.ownDeptEd.set_value(arrRtn[1]);											
        	}
        }

        this.addAssetPhotoBtn_onclick = function(obj,e)
        {
        	this.fileDialog.open("파일찾기",FileDialog.LOAD);
        }
        var realpath;
        this.fileDialog_onclose = function(obj,e)
        {
        	if(e.virtualfiles.length == 0){
        		alert("사진을 다시 선택해 주세요!");
        	}else{
        		var fullpath = e.virtualfiles[0].fullpath;
        	    realpath = system.convertRealPath(fullpath);
        		this.purDiv.fixedAssetImgView.set_image("file://"+realpath);
        		this.dsFixedAsset.setColumn(this.dsFixedAsset.rowposition,"fixedAssetPhoto",this.purDiv.fixedAssetImgView.image);
        		this.virtualFile.open(realpath,VirtualFile.openRead|VirtualFile.openBinary);
        	}
        }

        this.virtualFile_onsuccess = function(obj,e)
        {
        	switch(e.reason){
        		case 1: alert("open 발생"); this.virtualFile.read(); break;
        		case 2: alert("close 완료"); break;
        		case 3:
        			var nRow = this.dsFixedAssetPhoto.addRow();
        			this.dsFixedAssetPhoto.setColumn(nRow,"fileFullPath",realpath);
        			this.dsFixedAssetPhoto.setColumn(nRow,"assetNo",this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"assetNo"));
        			this.dsFixedAssetPhoto.setColumn(nRow,"fixedAssetPhoto",e.binarydata);
        			this.virtualFile.close();
        			break;
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.fileDialog.addEventHandler("onclose", this.fileDialog_onclose, this);
            this.virtualFile.addEventHandler("onsuccess", this.virtualFile_onsuccess, this);
            this.dsFixedAsset.addEventHandler("oncolumnchanged", this.dsFixedAsset_oncolumnchanged, this);
            this.addEventHandler("onload", this.AF_FixedAssetForm_onload, this);
            this.titleBarDiv.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.titleBarDiv.Static00.addEventHandler("onclick", this.Static06_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchFixedAssetBtn.addEventHandler("onclick", this.searchFixedAssetBtn_onclick, this);
            this.searchFixedAssetInfoBtn.addEventHandler("onclick", this.searchFixedAssetInfoBtn_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc14.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc12.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc13.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc16.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc17.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc18.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc19.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc39.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc15.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc20.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc22.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc23.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc24.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc21.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc25.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc27.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc26.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc28.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc29.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc30.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc31.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc32.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc33.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc34.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc35.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc36.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc37.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.cashButYnRadio.addEventHandler("onitemclick", this.cashButYnRadio_onitemclick, this);
            this.subCodeStc38.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchAcntBtn.addEventHandler("onclick", this.searchAcntBtn_onclick, this);
            this.searchassetGrpBtn.addEventHandler("onclick", this.searchassetGrpBtn_onclick, this);
            this.searchProdCompBtn.addEventHandler("onclick", this.searchSplyCompBtn_onclick, this);
            this.searchSplyCompBtn.addEventHandler("onclick", this.searchSplyCompBtn_onclick, this);
            this.searchReceiverBtn.addEventHandler("onclick", this.searchReceiverBtn_onclick, this);
            this.searchOwnDeptBtn.addEventHandler("onclick", this.searchOwnDeptBtn_onclick, this);
            this.searchRespoWorkerBtn.addEventHandler("onclick", this.searchReceiverBtn_onclick, this);
            this.addFixedAssetBtn.addEventHandler("onclick", this.addFixedAssetBtn_onclick, this);
            this.DelBtn05.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.addAssetPhotoBtn.addEventHandler("onclick", this.addAssetPhotoBtn_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);

        };

        this.loadIncludeScript("AF_FixedAssetForm.xfdl");

       
    };
}
)();

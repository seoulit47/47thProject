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
                this.set_name("WH_HosptlzMngntForm");
                this.set_classname("WH_HosptlzMngntForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHosptlzReceipt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"rship\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzRsvtYb\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzRoute\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzDate\" type=\"STRING\" size=\"256\"/><Column id=\"grtorTel\" type=\"STRING\" size=\"256\"/><Column id=\"grtorRrn\" type=\"STRING\" size=\"256\"/><Column id=\"grtorNm\" type=\"STRING\" size=\"256\"/><Column id=\"grtorAddr\" type=\"STRING\" size=\"256\"/><Column id=\"dscgDiv\" type=\"STRING\" size=\"256\"/><Column id=\"dscgDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"respDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"respDoctCd\" type=\"STRING\" size=\"256\"/><Column id=\"patTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"patTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"patRship\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGS007", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHosptlzRsvt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"hosptlzPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzRsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hopeRoom\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prdtFinanDate\" type=\"STRING\" size=\"256\"/><Column id=\"respDoctCd\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"uniqueNtc\" type=\"STRING\" size=\"256\"/><Column id=\"hopeWard\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GP080</Col><Col id=\"dsName\">dsGP080</Col></Row><Row><Col id=\"code\">SC070</Col><Col id=\"dsName\">dsSC070</Col></Row><Row><Col id=\"code\">SC071</Col><Col id=\"dsName\">dsSC071</Col></Row><Row><Col id=\"dsName\">dsGS007</Col><Col id=\"code\">GS007</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSC070", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSC071", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGP080", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPat", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"barrAss\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" type=\"STRING\" size=\"256\"/><Column id=\"deathDate\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveYb\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveNo\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiver\" type=\"STRING\" size=\"256\"/><Column id=\"recNwDate\" type=\"STRING\" size=\"256\"/><Column id=\"estbGiho\" type=\"STRING\" size=\"256\"/><Column id=\"certfctNo\" type=\"STRING\" size=\"256\"/><Column id=\"insuRrn\" type=\"STRING\" size=\"256\"/><Column id=\"insuNm\" type=\"STRING\" size=\"256\"/><Column id=\"applyStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzReceiptNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"URL\">his::won/hosptlzPat/findHosptlzYB.do</Col><Col id=\"serviceID\">findHosptlzYB</Col><Col id=\"outData\">dsOutpaReceipt=dsOutpaReceipt</Col><Col id=\"callbackFunc\">findHosptlzYBCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findPat</Col><Col id=\"URL\">his::won/outPatMngnt/findPat.do</Col><Col id=\"outData\">dsPat=dsPat</Col></Row><Row><Col id=\"serviceID\">findReceipt</Col><Col id=\"URL\">his::won/hosptlzPat/findReceipt.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsHosptlzReceipt=dsHosptlzReceipt</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">findReceiptCallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchProcessHosptlzReceipt</Col><Col id=\"URL\">his::won/hosptlzPat/batchProcessHosptlzReceipt.do</Col><Col id=\"outData\"/><Col id=\"callbackFunc\">batchProcessHosptlzReceiptCallbackFunc</Col><Col id=\"inData\">dsHosptlzReceipt=dsHosptlzReceipt:u</Col></Row><Row><Col id=\"serviceID\">callHosptlzReceiptSeq</Col><Col id=\"URL\">his::won/hosptlzPat/callHosptlzReceiptSeq.do</Col><Col id=\"outData\">hosptlzReceiptNo=hosptlzReceiptNo</Col><Col id=\"callbackFunc\">findReceiptCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findHosptlzReceipt</Col><Col id=\"URL\">his::won/hosptlzPat/findHosptlzReceipt.do</Col><Col id=\"outData\">dsHosptlzReceipt=dsHosptlzReceipt</Col><Col id=\"callbackFunc\">batchProcessHosptlzReceiptCallbackFunc</Col></Row><Row><Col id=\"serviceID\">CancelHosptlzReceipt</Col><Col id=\"URL\">his::won/hosptlzPat/batchProcessHosptlzReceipt.do</Col><Col id=\"inData\">dsHosptlzReceipt=dsHosptlzReceipt:u</Col><Col id=\"callbackFunc\">batchProcessHosptlzReceiptCallbackFunc</Col><Col id=\"outData\"/></Row><Row><Col id=\"serviceID\">findHosptlzRsvt</Col><Col id=\"URL\">his::won/hosptlzPat/findHosptlzRsvt.do</Col><Col id=\"outData\">dsHosptlzRsvt=dsHosptlzRsvt</Col><Col id=\"callbackFunc\">findHosptlzRsvtCallbackFunc</Col><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">changeHosptlzRsvtYb</Col><Col id=\"URL\">his::won/hosptlzPat/changeHosptlzRsvtYb.do</Col><Col id=\"inData\">dsOutpaReceipt=dsOutpaReceipt:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOutpaReceipt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzYb\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzRsvtYb\" type=\"STRING\" size=\"256\"/><Column id=\"patType\" type=\"STRING\" size=\"256\"/><Column id=\"trmtCostCalcuYb\" type=\"STRING\" size=\"256\"/><Column id=\"trmtYb\" type=\"STRING\" size=\"256\"/><Column id=\"prescYb\" type=\"STRING\" size=\"256\"/><Column id=\"regDept\" type=\"STRING\" size=\"256\"/><Column id=\"cngDept\" type=\"STRING\" size=\"256\"/><Column id=\"receiptDate\" type=\"STRING\" size=\"256\"/><Column id=\"dgnsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntTtYb\" type=\"STRING\" size=\"256\"/><Column id=\"expCd\" type=\"STRING\" size=\"256\"/><Column id=\"expNm\" type=\"STRING\" size=\"256\"/><Column id=\"nwDiv\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "0", "1250", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("           입원관리");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "2%", "56", null, "39", "63.76%", null, this);
            obj.set_taborder("1");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "2.96%", "61", null, "27", "88.48%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("환자등록번호");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "12.16%", "61", null, "27", "81.12%", null, this);
            obj.set_taborder("3");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("patNoBtn", "absolute", "19.28%", "61", null, "26", "78.32%", null, this);
            obj.set_taborder("4");
            obj.getSetter("class").set("AddBtn");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "30.8%", "62", null, "26", "64.4%", null, this);
            obj.set_taborder("5");
            obj.getSetter("class").set("SearchBtn");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("HosptlzReceiptNo", "absolute", "38.32%", "59", null, "27", "53.76%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("입원등록번호");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("hosptlzReceiptNoEdt", "absolute", "46.8%", "59", null, "27", "50.72%", null, this);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("outpaReceiptNo", "absolute", "51.04%", "59", null, "27", "41.04%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("외래접수번호");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("outpaReceiptNoEdt", "absolute", "59.52%", "59", null, "27", "37.68%", null, this);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("hosptlzSearchBtn", "absolute", "75.04%", "56", null, "30", "17.92%", null, this);
            obj.set_taborder("10");
            obj.set_text("입원조회");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("hosptlzRegisterBtn", "absolute", "82.64%", "56", null, "30", "10.32%", null, this);
            obj.set_taborder("11");
            obj.set_text("입원등록");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("hosptlzCancelBtn", "absolute", "90.24%", "56", null, "30", "2.72%", null, this);
            obj.set_taborder("12");
            obj.set_text("입원취소");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "37.04%", "100", null, "443", "2.64%", null, this);
            obj.set_taborder("13");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "2%", "101", null, "442", "63.76%", null, this);
            obj.set_taborder("14");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00", "absolute", "1.52%", "551", null, "183", "2.24%", null, this);
            obj.set_text("입원예약정보");
            obj.set_taborder("15");
            obj.style.set_border("1 solid lightslategray");
            obj.style.set_font("10 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("hosptlzRsvtGrid", "absolute", "2.56%", "582", null, "98", "3.6%", null, this);
            obj.set_taborder("16");
            obj.set_binddataset("dsHosptlzRsvt");
            obj.set_treeuseline("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"129\"/><Column size=\"124\"/><Column size=\"114\"/><Column size=\"105\"/><Column size=\"92\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"395\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"입원예약번호\"/><Cell col=\"1\" text=\"입원예정일\"/><Cell col=\"2\" text=\"예상재원일\"/><Cell col=\"3\" text=\"진료과\"/><Cell col=\"4\" text=\"담당의사\"/><Cell col=\"5\" text=\"희망병동\"/><Cell col=\"6\" text=\"희망병실\"/><Cell col=\"7\" text=\"특기사항\"/></Band><Band id=\"body\"><Cell text=\"bind:hosptlzRsvtNo\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:hosptlzPlnDate\" mask=\"####/ ##/ ##\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:prdtFinanDate\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:trmtDeptCd\" combodataset=\"dsGP080\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"4\" text=\"bind:respDoctCd\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:hopeWard\" combodataset=\"dsSC070\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:hopeRoom\" combodataset=\"dsSC071\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"7\" text=\"bind:uniqueNtc\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "3.36%", "130", null, "27", "89.6%", null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("성  명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEdt", "absolute", "11.84%", "130", null, "27", "81.44%", null, this);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("rrn1Ed", "absolute", "11.84%", "181", null, "26", "78.64%", null, this);
            obj.set_taborder("19");
            obj.set_type("string");
            obj.set_mask("##년 ##월 ##일");
            obj.set_enable("false");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "3.36%", "181", null, "27", "89.6%", null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("생년월일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc05", "absolute", "3.36%", "232", null, "27", "89.6%", null, this);
            obj.getSetter("taborder").set("21");
            obj.set_text("연락처");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("phonNoEdt", "absolute", "11.84%", "232", null, "27", "70.96%", null, this);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc06", "absolute", "3.36%", "283", null, "27", "89.6%", null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("나  이");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("ageEdt", "absolute", "11.84%", "283", null, "27", "81.44%", null, this);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc07", "absolute", "20.48%", "283", null, "27", "72.48%", null, this);
            obj.getSetter("taborder").set("25");
            obj.set_text("성  별");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("addrEdt", "absolute", "11.84%", "334", null, "27", "65.12%", null, this);
            obj.set_taborder("27");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc08", "absolute", "3.36%", "334", null, "27", "89.6%", null, this);
            obj.getSetter("taborder").set("28");
            obj.set_text("주  소");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("dtlAddrEdt", "absolute", "11.84%", "376", null, "27", "65.12%", null, this);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("zipNoEdt", "absolute", "11.84%", "415", null, "27", "77.92%", null, this);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc09", "absolute", "3.36%", "415", null, "27", "89.6%", null, this);
            obj.getSetter("taborder").set("31");
            obj.set_text("우편번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc10", "absolute", "3.36%", "451", null, "27", "89.6%", null, this);
            obj.getSetter("taborder").set("32");
            obj.set_text("메  모");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("memoTextArea", "absolute", "11.84%", "451", null, "78", "65.12%", null, this);
            obj.set_taborder("33");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "40%", "121", null, "27", "52.96%", null, this);
            obj.getSetter("taborder").set("34");
            obj.set_text("입원일시");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("hosptlzDateCal", "absolute", "50.56%", "121", null, "25", "39.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_enable("false");

            obj = new Calendar("dscgDateCal", "absolute", "50.56%", "163", null, "25", "39.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_enable("false");

            obj = new Static("subCodeStc11", "absolute", "40%", "163", null, "27", "52.96%", null, this);
            obj.getSetter("taborder").set("37");
            obj.set_text("퇴원일시");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "68.08%", "161", null, "27", "24.88%", null, this);
            obj.getSetter("taborder").set("38");
            obj.set_text("입원경로");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("hosptlzRouteCdEdt", "absolute", "76.24%", "161", null, "27", "17.04%", null, this);
            obj.set_taborder("39");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("hosptlzRoutePBtn", "absolute", "83.2%", "161", null, "26", "14.4%", null, this);
            obj.set_taborder("40");
            obj.set_enable("false");
            obj.style.set_background("@gradation URL('img::miniSearch.png')");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("hosptlzRouteNmEdt", "absolute", "86%", "161", null, "27", "4.48%", null, this);
            obj.set_taborder("41");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("resetBtn", "absolute", "83.84%", "112", null, "30", "11.04%", null, this);
            obj.set_taborder("42");
            obj.set_text("Reset");
            obj.set_visible("false");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "89.28%", "112", null, "30", "3.68%", null, this);
            obj.set_taborder("43");
            obj.set_visible("false");
            obj.getSetter("class").set("DelBtn");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Edit("trmtDeptNmEdt", "absolute", "60.8%", "205", null, "27", "29.68%", null, this);
            obj.set_taborder("44");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("trmtDeptPBtn", "absolute", "57.6%", "205", null, "26", "40%", null, this);
            obj.set_taborder("45");
            obj.set_enable("false");
            obj.style.set_background("@gradation URL('img::miniSearch.png')");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("trmtDeptCdEdt", "absolute", "50.56%", "205", null, "27", "42.72%", null, this);
            obj.set_taborder("46");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc00", "absolute", "40%", "205", null, "27", "52.96%", null, this);
            obj.getSetter("taborder").set("47");
            obj.set_text("진료과");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc01", "absolute", "39.92%", "246", null, "27", "52.4%", null, this);
            obj.getSetter("taborder").set("48");
            obj.set_text("담당의사");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("respDoctCdEdt", "absolute", "50.56%", "246", null, "27", "42.72%", null, this);
            obj.set_taborder("49");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("respDoctPBtn", "absolute", "57.6%", "246", null, "26", "40%", null, this);
            obj.set_taborder("50");
            obj.set_enable("false");
            obj.style.set_background("@gradation URL('img::miniSearch.png')");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("respDoctNmEdt", "absolute", "60.8%", "246", null, "27", "29.68%", null, this);
            obj.set_taborder("51");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("hroomNmEdt", "absolute", "65.92%", "287", null, "27", "25.68%", null, this);
            obj.set_taborder("52");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("hroomBtn", "absolute", "74.88%", "287", null, "26", "22.72%", null, this);
            obj.set_taborder("53");
            obj.set_enable("false");
            obj.style.set_background("@gradation URL('img::miniSearch.png')");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("hroomEdt", "absolute", "58.64%", "287", null, "27", "35.28%", null, this);
            obj.set_taborder("54");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("wardEdt", "absolute", "50.56%", "287", null, "27", "46.72%", null, this);
            obj.set_taborder("56");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc05", "absolute", "40%", "287", null, "27", "52.96%", null, this);
            obj.getSetter("taborder").set("57");
            obj.set_text("병동병실");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc07", "absolute", "40%", "331", null, "27", "52.96%", null, this);
            obj.getSetter("taborder").set("58");
            obj.set_text("환자유형");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("patTypeCdEdt", "absolute", "50.56%", "331", null, "27", "42.72%", null, this);
            obj.set_taborder("59");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("patTypePBtn", "absolute", "57.76%", "331", null, "26", "39.84%", null, this);
            obj.set_taborder("60");
            obj.set_enable("false");
            obj.style.set_background("@gradation URL('img::miniSearch.png')");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("patTypeNmEdt", "absolute", "60.96%", "331", null, "27", "29.52%", null, this);
            obj.set_taborder("61");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc08", "absolute", "40%", "373", null, "27", "52.96%", null, this);
            obj.getSetter("taborder").set("62");
            obj.set_text("보증인성명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("grtorNmEdt", "absolute", "50.56%", "373", null, "27", "39.92%", null, this);
            obj.set_taborder("63");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc03", "absolute", "71.44%", "373", null, "27", "19.6%", null, this);
            obj.getSetter("taborder").set("64");
            obj.set_text("환자와의관계");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("patRshipCombo", "absolute", "81.28%", "373", null, "26", "4.96%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("65");
            obj.set_innerdataset("@dsGS007");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");

            obj = new MaskEdit("grtorRrnEdt", "absolute", "50.56%", "414", null, "28", "33.84%", null, this);
            obj.set_taborder("66");
            obj.set_type("string");
            obj.set_mask(" ###### - #######");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc09", "absolute", "40%", "415", null, "27", "50.72%", null, this);
            obj.getSetter("taborder").set("67");
            obj.set_text("보증인주민번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc04", "absolute", "40%", "457", null, "27", "51.52%", null, this);
            obj.getSetter("taborder").set("68");
            obj.set_text("보증인연락처");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("grtorTelEdt", "absolute", "50.56%", "456", null, "28", "33.84%", null, this);
            obj.set_taborder("69");
            obj.set_type("string");
            obj.set_mask(" ### - #### - ####");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc10", "absolute", "40%", "499", null, "27", "52.96%", null, this);
            obj.getSetter("taborder").set("70");
            obj.set_text("보증인주소");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("grtorAddrEdt", "absolute", "50.56%", "499", null, "27", "18.64%", null, this);
            obj.set_taborder("71");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("grtorAddrBtn", "absolute", "82.08%", "499", null, "26", "15.52%", null, this);
            obj.set_taborder("72");
            obj.set_enable("false");
            obj.style.set_background("@gradation URL('img::miniSearch.png')");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Button("hosptlzRsvtBtn", "absolute", "89.36%", "690", null, "30", "3.6%", null, this);
            obj.set_taborder("73");
            obj.set_text("입원예약");
            obj.set_visible("false");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 39, this.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 443, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 442, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WH_HosptlzMngntForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item11","hosptlzReceiptNoEdt","value","dsHosptlzReceipt","hosptlzReceiptNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","outpaReceiptNoEdt","value","dsOutpaReceipt","outpaReceiptNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","patNmEdt","value","dsPat","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","rrn1Ed","value","dsPat","rrn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","phonNoEdt","value","dsPat","tel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","ageEdt","value","dsPat","age");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","addrEdt","value","dsPat","addr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","dtlAddrEdt","value","dsPat","dtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","zipNoEdt","value","dsPat","zip");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","memoTextArea","value","dsPat","note");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","hosptlzDateCal","value","dsHosptlzReceipt","hosptlzDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","dscgDateCal","value","dsHosptlzReceipt","dscgDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","hosptlzRouteCdEdt","value","dsHosptlzReceipt","hosptlzRoute");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","trmtDeptNmEdt","value","dsHosptlzReceipt","trmtDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","trmtDeptCdEdt","value","dsHosptlzReceipt","trmtDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","respDoctCdEdt","value","dsHosptlzReceipt","respDoctCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","respDoctNmEdt","value","dsHosptlzReceipt","respDoctNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","hroomEdt","value","dsHosptlzReceipt","hroom");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","wardEdt","value","dsHosptlzReceipt","ward");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","patTypeCdEdt","value","dsHosptlzReceipt","patTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","patTypeNmEdt","value","dsHosptlzReceipt","patTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","grtorNmEdt","value","dsHosptlzReceipt","grtorNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","patRshipCombo","value","dsHosptlzReceipt","rship");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","grtorRrnEdt","value","dsHosptlzReceipt","grtorRrn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","grtorTelEdt","value","dsHosptlzReceipt","grtorTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","grtorAddrEdt","value","dsHosptlzReceipt","grtorAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WH_HosptlzMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("WH_HosptlzMngntForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("WH_HosptlzMngntForm.xfdl", function() {
        /********************************************************************************
        *                                               			                    *
        * 환자 등록 번호  팝업  			                               		        *
        *                                                                   			*
        * @Path			입원관리               							 	 		*
        * @Description 	                                                               	*
        * @Author		황태경  						 								*
        * 									 											*
        * Created on	2016. 6. 5.                           		 					*
        *									 											*
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";

        
        var patNo; 
        this.hosptlzReceiptNo ="";

        this.setPatInfo = function(arr){
        	patNo=arr[0];
        	this.patNoEd.set_value(arr[0]);
        }

        //입원예정자관리 창에서 입원등록 했을때 환자등록번호 받아 옴.
        this.WHhosptlzMngntForm_onload = function(obj,e)
        {	
        	this.patNoEd.set_value(this.parent.patNo);
        }

        
        this.patNoBtn_onclick = function(obj,e)
        {
        	
        	this.dsPat.clear();
        	this.dsOutpaReceipt.clear();
        	this.dsHosptlzRsvt.clear();
        	this.outpaReceiptNo.set_visible(false);
        	this.outpaReceiptNoEdt.set_visible(false);	
        	this.saveBtn.set_visible(false);
        	this.HosptlzReceiptNo.set_visible(false);
        	this.hosptlzReceiptNoEdt.set_visible(false);
        	
        	this.gfnPopup("WS_PatPopupForm","won","");
        }

        this.searchBtn_onclick = function(obj,e)
        {
        	if(this.patNoEd.value==null){
        		alert("환자등록번호 먼저 입력하세요.");
        	}else{
        		patNo=this.patNoEd.value;   
        	
        		this.dsService.setColumn(1,"argument",'patNo='+patNo);
        		this.gfnService("findPat","false");
        	}
        }
        this.findHosptlzYBCallbackFunc = function(svcID,errorCode,errorMsg)
        {
        	
        	if(errorCode=="1") {	
        		
        		var hosptlzYb=this.dsOutpaReceipt.getColumn(0,"hosptlzYb");
        		var hosptlzRsvtYb=this.dsOutpaReceipt.getColumn(0,"hosptlzRsvtYb");
        		
        		if(hosptlzYb=='Y' && hosptlzRsvtYb=='N'){
        			alert("입원승인 확인 했습니다.");			
        			this.dsService.setColumn(2,"argument",'patNo='+patNo);
        			this.gfnService("findReceipt","false"); 	//	입원접수 확인하기
        		}else if(hosptlzYb=='N'){
        			alert("입원승인 되지 않았습니다.");
        		}else if(hosptlzRsvtYb=='Y'){
        			alert("입원 예약 등록된 환자입니다.");
        		}
        	}else{
        		alert("입원 승인 여부 검색 중 오류발생");
        	}	
        }
        this.resetBtn_onclick = function(obj,e)
        {
        	this.dsHosptlzReceipt.clearData();
        }

        this.hosptlzSearchBtn_onclick = function(obj,e)
        {
        	this.hosptlzDateCal.set_enable(true);
        	this.dscgDateCal.set_enable(true);
        	this.hroomBtn.set_enable(true);
        	this.HosptlzReceiptNo.set_visible(true);
        	this.hosptlzReceiptNoEdt.set_visible(true);
        	this.saveBtn.set_visible(true);
        	
        	this.dsService.setColumn(5,"argument",'patNo='+patNo);
        	this.gfnService("findHosptlzReceipt","false"); 	//	입원접수 확인하기
        	
        }
        	
        this.findReceiptCallbackFunc=function(svcID,errorCode,errorMsg){

        	if(svcID=="findReceipt"){
        	
        			if(errorCode=="1"){	
        		
        			
        				if(this.dsHosptlzReceipt.rowcount==0){
        					if(this.confirm( "입원등록을 하시겠습니까?", "서울병원 - 입원등록")){
        						this.hosptlzRsvtBtn.set_visible(true);  //입원예약Btn 생성					
        						this.fn_register();   //입원등록 
        					}
        				}else if(this.dsHosptlzReceipt.rowcount==1){
        					alert("이미 입원등록 된 환자입니다.");
        				}	
        			}else{
        				alert("입원등록 정보 검색 중 오류발생");
        			}		
        	}else if(svcID="callHosptlzReceiptSeq"){
        			if(errorCode=="1"){
        				this.hosptlzReceiptNoEdt.set_value(this.hosptlzReceiptNo);
        				this.dsHosptlzReceipt.setColumn(0,"hosptlzReceiptNo",this.hosptlzReceiptNoEdt.value);   //입원등록번호
        								
        				this.gfnService("batchProcessHosptlzReceipt","false");  //입원등록	
        			}else{
        				alert("입원등록번호에서 오류 발생");
        			}	
        	}
        }
        this.calculationSalBtn_onclick = function(obj,e)
        {
        	if(patNo==null){
        		alert("환자등록번호를 먼저 입력하세요.");
        	}else{		
        		
        		this.dsService.setColumn(0,"argument",'patNo='+patNo);
        		this.gfnService("findHosptlzYB","false");  //외래접수번호와 입원여부 확인하기. 입원예약 여부 확인
        		
        		this.outpaReceiptNo.set_visible(true);
        		this.outpaReceiptNoEdt.set_visible(true);	
        		this.saveBtn.set_visible(true);
        		this.HosptlzReceiptNo.set_visible(true);
        		this.hosptlzReceiptNoEdt.set_visible(true);
        		this.resetBtn.set_visible(true);
        	}	
        }

        this.hosptlzCancelBtn_onclick = function(obj,e)
        {
        	this.dsHosptlzReceipt.deleteRow();
        	this.gfnService("CancelHosptlzReceipt","false"); 	
        }

        //입원조회, 등록, 취소 Btn callbackFunc
        this.batchProcessHosptlzReceiptCallbackFunc=function(svcID,errorCode,errorMsg){
        	if(svcID=="batchProcessHosptlzReceipt"){
        		if(errorCode=="1"){					
        			alert("입원등록 되었습니다.");
        		}else{
        			alert("입원등록 중 오류발생");
        		}	
        	}else if(svcID=="findHosptlzReceipt"){
        		
        		if(errorCode=="1"){	
        			if(this.dsHosptlzReceipt.rowcount==0){
        				alert("입원등록 된 내역이 없습니다.");
        			}
        			this.dsService.setColumn(7,"argument",'patNo='+this.patNoEd.value);
        			this.gfnService("findHosptlzRsvt");
        			
        		}else{
        			alert("입원조회  중 오류발생");
        		}	
        	}else if(svcID=="CancelHosptlzReceipt"){
        		if(errorCode=="1"){	
        			alert("입원취소 되었습니다.");
        		}else{
        			alert("입원취소 중 오류발생");
        		}	
        	}
        }
        this.findHosptlzRsvtCallbackFunc=function(svcID,errorCode,errorMsg){
        		if(errorCode=="1"){				
        			var outpaReceiptNo = this.outpaReceiptNoEdt.value;

        			this.dsOutpaReceipt.setColumn(this.dsOutpaReceipt.rowposition,"hosptlzRsvtYb","");
        			this.dsService.setColumn(8,"argument",'outpaReceiptNo='+outpaReceiptNo+' patNo='+patNo);
        			this.gfnService("changeHosptlzRsvtYb","false");  //입원예약여부 변경 (N->Y)
        		}else{
        			alert("실패");
        		}	
        }

        //입원예약 Popup에서 전달 받은 값
        this.registerHosptlzRsvtInfo= function(arr){	
        	var rsvtNo = arr[1];
        	this.dsService.setColumn(7,"argument",'rsvtNo='+rsvtNo);
        	this.gfnService("findHosptlzRsvt","false");   //조회	
        }

        this.saveBtn_onclick = function(obj,e)
        {
        	application.setVariable("hosptlzReceiptNo", this.hosptlzReceiptNo);	
        	this.gfnService("callHosptlzReceiptSeq","false");   //입원등록번호 구하기.
        	 
            this.dsHosptlzReceipt.setColumn(0,"patNo",this.patNoEd.value);	                               //환자번호
        	this.dsHosptlzReceipt.setColumn(0,"outpaReceiptNo",this.outpaReceiptNoEdt.value);	   //외래접수번호
        	this.dsHosptlzReceipt.setColumn(0,"hosptlzDate",this.hosptlzDateCal.value);	               //입원일시
        	this.dsHosptlzReceipt.setColumn(0,"dscgDate",this.dscgDateCal.value);	                   //퇴원일시
        	this.dsHosptlzReceipt.setColumn(0,"hosptlzRoute",this.hosptlzRouteCdEdt.value);	       //입원경로
        	this.dsHosptlzReceipt.setColumn(0,"ward",this.wardEdt.value);	                               //병동
        	this.dsHosptlzReceipt.setColumn(0,"hroom",this.hroomEdt.value);                               //병실
        	
        	this.dsHosptlzReceipt.setColumn(0,"patTypeCd",this.patTypeCdEdt.value);         //환자유형코드
        	this.dsHosptlzReceipt.setColumn(0,"patTypeNm",this.patTypeNmEdt.value);	     //환자유형명
        	this.dsHosptlzReceipt.setColumn(0,"trmtDeptNm",this.trmtDeptNmEdt.value);   //진료과명
        	this.dsHosptlzReceipt.setColumn(0,"trmtDeptCd",this.trmtDeptCdEdt.value);	 //진료과코드
        	this.dsHosptlzReceipt.setColumn(0,"respDoctNm",this.respDoctNmEdt.value);    //담당의사코드
        	this.dsHosptlzReceipt.setColumn(0,"respDoctCd",this.respDoctCdEdt.value);	     //담당의사코드
        	
        	this.dsHosptlzReceipt.setColumn(0,"grtorNm",this.grtorNmEdt.value);           //보증인서명
        	this.dsHosptlzReceipt.setColumn(0,"grtorRrn",this.grtorRrnEdt.value);	         //보증인주민번호
        	this.dsHosptlzReceipt.setColumn(0,"grtorTel",this.grtorTelEdt.value);             //보증인연락처
        	this.dsHosptlzReceipt.setColumn(0,"grtorAddr",this.grtorAddrEdt.value);        //보증인주소
        	this.dsHosptlzReceipt.setColumn(0,"patRship",this.patRshipCombo.value);     //환자외의 관계
        }

        //입원등록 
        this.fn_register=function(){
        		this.dsHosptlzReceipt.addRow();   //입력추가
        		this.gfnBind(); 			
        		this.fn_enable();	//사용상태허용 함수
        }

         // 사용상태 허용
        this.fn_enable = function(){
        	this.hosptlzDateCal.set_enable(true);
        	this.dscgDateCal.set_enable(true);
        	this.wardEdt.set_enable(true);
        	this.hroomEdt.set_enable(true);
        	this.hroomNmEdt.set_enable(true);	

        	this.grtorNmEdt.set_enable(true);			
        	this.grtorRrnEdt.set_enable(true);
        	this.grtorAddrEdt.set_enable(true);	
        	this.patRshipCombo.set_enable(true);
        	this.grtorTelEdt.set_enable(true);
        	
        	this.hosptlzCancelBtn.set_enable(true);
        	this.respDoctPBtn.set_enable(true);
        	this.trmtDeptPBtn.set_enable(true);	
        	this.hroomBtn.set_enable(true);
        	this.patTypePBtn.set_enable(true);
        	
        	this.grtorAddrBtn.set_enable(true);
        	this.hosptlzRoutePBtn.set_enable(true);

        }
        this.setDoct=function(arr){
        	this.respDoctCdEdt.set_value(arr[0]);
        	this.respDoctNmEdt.set_value(arr[1]);
        }

        //병실조회 Popup
        this.hroomBtn_onclick = function(obj,e)
        {
        	this.openHroomDialog();
        }

        //입원경로 Popup
        this.hosptlzRoutePBtn_onclick = function(obj,e)
        {
        	 this.gfnCodePopup("MD020");	
        }

        //진료과 Popup
        this.trmtDeptPBtn_onclick = function(obj,e)
        {
        	this.gfnCodePopup("GP080");	
        }

        //환자 유형 Popup
        this.patTypePBtn_onclick = function(obj,e)
        {
        	this.gfnCodePopup("GA043");
        }

        //담당의사 Popup
        this.respDoctPBtn_onclick = function(obj,e)
        {
        	
        	if(this.trmtDeptCdEdt.text==""){
        				alert("진료받을과를 먼저 선택해주세요.");
        	}else{	
        	    
        		this.gfnDoctPopup(this.trmtDeptCdEdt.text);
        	}
        }

        this.setHroomInfo= function(arr){
        	this.wardEdt.set_value(arr[1]);
        	this.hroomEdt.set_value(arr[0]);
        	this.hroomNmEdt.set_value(arr[2]);
        }
        this.setCode=function(code,arr)
        { 
           //부모창에서 셋팅을 완료함.
           if(code == "MD020"){
        		this.hosptlzRouteCdEdt.set_value(arr[0]);
        		this.hosptlzRouteNmEdt.set_value(arr[1]);
           }else if(code == "GP080"){
        		this.trmtDeptCdEdt.set_value(arr[0]);
        		this.trmtDeptNmEdt.set_value(arr[1]);
           }else if(code == "GA043"){
        		this.patTypeCdEdt.set_value(arr[0]);
        		this.patTypeNmEdt.set_value(arr[1]);
           }
        }

        this.hosptlzRsvtBtn_onclick = function(obj,e)
        {
        	if(this.hosptlzReceiptNoEdt.value != null){
        		alert("이미 입원 등록 된 환자입니다.");
        		
        	}else if(this.dsHosptlzRsvt.rowcount==1){
        		alert("이미 입원예약 된 환자입니다.");
        		this.dsService.setColumn(7,"argument",'patNo='+this.patNoEd.value);
        		this.gfnService("findHosptlzRsvt");
        	}else{
        		if(this.confirm( "입원예약을 하시겠습니까?", "서울병원 - 입원예약")){
        			var outpaReceiptNo=this.outpaReceiptNoEdt.value;
        			param = {patNo:patNo, outpaReceiptNo:outpaReceiptNo};
        		
        			this.gfnPopup("WH_HosptlzPatSearchForm","won",param);
        		}	
        	}	
        }

        this.grtorAddrBtn_onclick = function(obj,e)
        {
        	this.gfnPostPopup();
        }
        this.setPost = function(arrRtn){ 
        	this.grtorAddrEdt.set_value(arrRtn[2]+" "+arrRtn[0]+" "+arrRtn[1]); 
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patNoBtn.addEventHandler("onclick", this.patNoBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.HosptlzReceiptNo.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.outpaReceiptNo.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.hosptlzSearchBtn.addEventHandler("onclick", this.hosptlzSearchBtn_onclick, this);
            this.hosptlzRegisterBtn.addEventHandler("onclick", this.calculationSalBtn_onclick, this);
            this.hosptlzCancelBtn.addEventHandler("onclick", this.hosptlzCancelBtn_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.hosptlzRoutePBtn.addEventHandler("onclick", this.hosptlzRoutePBtn_onclick, this);
            this.resetBtn.addEventHandler("onclick", this.resetBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.trmtDeptPBtn.addEventHandler("onclick", this.trmtDeptPBtn_onclick, this);
            this.ctrtDateSelStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.respDoctPBtn.addEventHandler("onclick", this.respDoctPBtn_onclick, this);
            this.hroomNmEdt.addEventHandler("onchar", this.hroomNmEdt_onchar, this);
            this.hroomBtn.addEventHandler("onclick", this.hroomBtn_onclick, this);
            this.ctrtDateSelStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patTypePBtn.addEventHandler("onclick", this.patTypePBtn_onclick, this);
            this.ctrtDateSelStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.grtorAddrBtn.addEventHandler("onclick", this.grtorAddrBtn_onclick, this);
            this.hosptlzRsvtBtn.addEventHandler("onclick", this.hosptlzRsvtBtn_onclick, this);

        };

        this.loadIncludeScript("WH_HosptlzMngntForm.xfdl");

       
    };
}
)();

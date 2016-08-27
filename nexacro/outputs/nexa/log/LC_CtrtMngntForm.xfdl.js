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
                this.set_name("LC_CtrtMngntForm");
                this.set_classname("LC_CtrtMngntForm");
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
            obj._setContents("<ColumnInfo><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtDiv\" type=\"STRING\" size=\"256\"/><Column id=\"inptYb\" type=\"STRING\" size=\"256\"/><Column id=\"cust\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtDate\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtTel\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtRespoWorker\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtGds\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtCon\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"bussNo\" type=\"STRING\" size=\"256\"/><Column id=\"busCtgNm\" type=\"STRING\" size=\"256\"/><Column id=\"prsdntNm\" type=\"STRING\" size=\"256\"/><Column id=\"buyReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtQnt\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtPrice\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtStart\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEnd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCtrtList</Col><Col id=\"URL\">his::log/ctrt/findCtrtList.do</Col><Col id=\"outData\">dsCtrt=dsCtrt</Col></Row><Row><Col id=\"serviceID\">batchCtrtProcess</Col><Col id=\"URL\">his::log/ctrt/batchCtrtProcess.do</Col><Col id=\"outData\"/><Col id=\"inData\">dsCtrt=dsCtrt:u</Col></Row><Row><Col id=\"serviceID\">findCustInfo</Col><Col id=\"URL\">his::log/base/findCustList.do</Col><Col id=\"outData\">dsCust=dsCust</Col><Col id=\"callbackFunc\">custCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findPrcsReceiptList</Col><Col id=\"URL\">his::log/prcs/findPrcsReceiptList.do</Col><Col id=\"inData\">[Undefined]</Col><Col id=\"outData\">gdsPrcsReceipt=dsPrcsReceipt</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">[Undefined]</Col></Row></Rows>");
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

            obj = new Dataset("dsCtrtDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"ctrtDiv\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ctrtDiv\">약품</Col></Row><Row><Col id=\"ctrtDiv\">재료</Col></Row><Row><Col id=\"ctrtDiv\">도서</Col></Row><Row><Col id=\"ctrtDiv\">사무</Col></Row><Row><Col id=\"ctrtDiv\">전산</Col></Row><Row><Col id=\"ctrtDiv\">수입</Col></Row><Row><Col id=\"ctrtDiv\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCust", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"custNm\" type=\"STRING\" size=\"256\"/><Column id=\"bussNo\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"busCtgNm\" type=\"STRING\" size=\"256\"/><Column id=\"prsdntNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrcsReceipt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"gdsAnspNo\" type=\"STRING\" size=\"256\"/><Column id=\"anspHistNo\" type=\"STRING\" size=\"256\"/><Column id=\"buyReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"buyReceiptDate\" type=\"STRING\" size=\"256\"/><Column id=\"buyReceiptRespoWorker\" type=\"STRING\" size=\"256\"/><Column id=\"cust\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"buyKind\" type=\"STRING\" size=\"256\"/><Column id=\"inptYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcsQnt\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"gdsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "60", "0.24%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.79%", "-4", null, "60", "81.67%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("계약관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("ctrtGrid", "absolute", "1.36%", "520", null, "230", "1.44%", null, this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCtrt");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"71\"/><Column size=\"99\"/><Column size=\"73\"/><Column size=\"109\"/><Column size=\"93\"/><Column size=\"299\"/><Column size=\"61\"/><Column size=\"210\"/><Column size=\"99\"/><Column size=\"20\"/><Column size=\"106\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계약번호\"/><Cell col=\"1\" text=\"계약구분\"/><Cell col=\"2\" text=\"구매접수번호\"/><Cell col=\"3\" text=\"거래처\"/><Cell col=\"4\" text=\"계약일\"/><Cell col=\"5\" text=\"연락처\"/><Cell col=\"6\" text=\"거래처 주소\"/><Cell col=\"7\" text=\"담당자\"/><Cell col=\"8\" text=\"계약물품\"/><Cell col=\"9\" colspan=\"3\" text=\"계약기간\"/></Band><Band id=\"body\"><Cell text=\"bind:ctrtNo\"/><Cell col=\"1\" text=\"bind:ctrtDiv\"/><Cell col=\"2\" text=\"bind:buyReceiptNo\"/><Cell col=\"3\" text=\"bind:cust\"/><Cell col=\"4\" text=\"bind:ctrtDate\" mask=\"####년##월##일\"/><Cell col=\"5\" text=\"bind:ctrtTel\"/><Cell col=\"6\" text=\"bind:ctrtAddr\"/><Cell col=\"7\" text=\"bind:ctrtRespoWorker\"/><Cell col=\"8\" text=\"bind:ctrtGds\"/><Cell col=\"9\" text=\"bind:ctrtStart\" mask=\"####년##월##일\"/><Cell col=\"10\" text=\"~\"/><Cell col=\"11\" text=\"bind:ctrtEnd\" mask=\"####년##월##일\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("menuDiv", "absolute", "1.44%", "70", null, "186", "1.52%", null, this);
            obj.set_taborder("6");
            obj.style.set_border("1 solid cadetblue");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "0.41%", "4", null, "30", "93.31%", null, this.menuDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("거래처");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 다음_Regular");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.41%", "40", null, "30", "93.31%", null, this.menuDiv);
            obj.getSetter("taborder").set("1");
            obj.set_text("계약물품");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "0.41%", "76", null, "30", "93.31%", null, this.menuDiv);
            obj.getSetter("taborder").set("2");
            obj.set_text("물품코드");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc14", "absolute", "22.46%", "112", null, "30", "71.26%", null, this.menuDiv);
            obj.getSetter("taborder").set("3");
            obj.set_text("계약구분");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc11", "absolute", "22.46%", "76", null, "30", "71.35%", null, this.menuDiv);
            obj.getSetter("taborder").set("4");
            obj.set_text("계약담당자");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("custCd", "absolute", "22.46%", "40", null, "30", "71.35%", null, this.menuDiv);
            obj.getSetter("taborder").set("5");
            obj.set_text("거래처코드");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "22.46%", "4", null, "30", "71.35%", null, this.menuDiv);
            obj.getSetter("taborder").set("6");
            obj.set_text("계약일");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("busCtGnm", "absolute", "41.21%", "112", null, "30", "52.6%", null, this.menuDiv);
            obj.getSetter("taborder").set("7");
            obj.set_text("업종명");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("prsdntnm", "absolute", "41.21%", "76", null, "30", "52.52%", null, this.menuDiv);
            obj.getSetter("taborder").set("9");
            obj.set_text("대표자명");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "41.21%", "40", null, "30", "52.52%", null, this.menuDiv);
            obj.getSetter("taborder").set("10");
            obj.set_text("연락처");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "41.21%", "4", null, "30", "52.52%", null, this.menuDiv);
            obj.getSetter("taborder").set("11");
            obj.set_text("계약기간");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "60.78%", "40", null, "30", "31.63%", null, this.menuDiv);
            obj.getSetter("taborder").set("12");
            obj.set_text("거래처 주소");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc12", "absolute", "60.78%", "76", null, "30", "31.63%", null, this.menuDiv);
            obj.getSetter("taborder").set("13");
            obj.set_text("계약내용");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("bussNo", "absolute", "70.27%", "4", null, "30", "21.64%", null, this.menuDiv);
            obj.getSetter("taborder").set("14");
            obj.set_text("사업자등록번호");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Edit("custEd", "absolute", "7.35%", "4", null, "30", "85.47%", null, this.menuDiv);
            obj.set_taborder("15");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Edit("busCtgNmEd", "absolute", "48.06%", "112", null, "30", "40.71%", null, this.menuDiv);
            obj.set_taborder("16");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Edit("ctrtGdsEd", "absolute", "7.35%", "40", null, "30", "85.47%", null, this.menuDiv);
            obj.set_taborder("17");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Edit("gdsCdEd", "absolute", "7.35%", "76", null, "30", "81.42%", null, this.menuDiv);
            obj.set_taborder("18");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Edit("custCdEd", "absolute", "29.31%", "40", null, "30", "59.45%", null, this.menuDiv);
            obj.set_taborder("19");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Edit("ctrtRespoWorkerEd", "absolute", "29.31%", "76", null, "30", "59.45%", null, this.menuDiv);
            obj.set_taborder("20");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Edit("telNoEd", "absolute", "48.14%", "40", null, "30", "40.55%", null, this.menuDiv);
            obj.set_taborder("21");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Edit("prsdntNmEd", "absolute", "48.14%", "76", null, "30", "40.55%", null, this.menuDiv);
            obj.set_taborder("22");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "58.22%", "9", null, "23", "40.3%", null, this.menuDiv);
            obj.getSetter("taborder").set("23");
            obj.set_text("~");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 9 다음_Regular");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Edit("ctrtAddrEd", "absolute", "69.03%", "40", null, "30", "1.32%", null, this.menuDiv);
            obj.set_taborder("24");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Combo("ctrtDivCombo", "absolute", "29.4%", "111", null, "30", "59.37%", null, this.menuDiv);
            this.menuDiv.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_innerdataset("@dsCtrtDiv");
            obj.set_codecolumn("ctrtDiv");
            obj = new Calendar("ctrtCal", "absolute", "29.31%", "4", null, "30", "59.45%", null, this.menuDiv);
            this.menuDiv.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj = new Calendar("ctrtStartPridCal", "absolute", "48.14%", "4", null, "30", "42.44%", null, this.menuDiv);
            this.menuDiv.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj = new Calendar("ctrtEndPridCal", "absolute", "59.79%", "4", null, "30", "30.8%", null, this.menuDiv);
            this.menuDiv.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj = new Button("searchCtrtGdsBtn", "absolute", "14.95%", "39", null, "32", "77.87%", null, this.menuDiv);
            obj.set_taborder("36");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Button("searchCustBtn", "absolute", "14.95%", "3", null, "32", "77.87%", null, this.menuDiv);
            obj.set_taborder("37");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.menuDiv.addChild(obj.name, obj);
            obj = new MaskEdit("bussNoEd", "absolute", "79.03%", "4", null, "30", "9%", null, this.menuDiv);
            obj.set_taborder("38");
            obj.set_type("string");
            obj.set_mask("##-###-#####");
            obj.style.set_align("left middle");
            this.menuDiv.addChild(obj.name, obj);
            obj = new TextArea("ctrtConArea", "absolute", "69.12%", "78", null, "101", "1.32%", null, this.menuDiv);
            obj.set_taborder("39");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("inptYb", "absolute", "0.41%", "113", null, "30", "93.31%", null, this.menuDiv);
            obj.getSetter("taborder").set("40");
            obj.set_text("계약수량");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("inptYb00", "absolute", "0.41%", "150", null, "30", "93.31%", null, this.menuDiv);
            obj.getSetter("taborder").set("42");
            obj.set_text("계약단가");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "22.46%", "149", null, "30", "71.26%", null, this.menuDiv);
            obj.getSetter("taborder").set("44");
            obj.set_text("계약금액");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Edit("ctrtQntEd", "absolute", "7.43%", "113", null, "30", "85.47%", null, this.menuDiv);
            obj.set_taborder("45");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Edit("ctrtAmt", "absolute", "29.31%", "149", null, "30", "59.45%", null, this.menuDiv);
            obj.set_taborder("47");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Edit("ctrtPrice", "absolute", "7.43%", "150", null, "30", "81.34%", null, this.menuDiv);
            obj.set_taborder("48");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Static("inptYb01", "absolute", "41.21%", "149", null, "30", "52.52%", null, this.menuDiv);
            obj.getSetter("taborder").set("49");
            obj.set_text("승인여부");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.menuDiv.addChild(obj.name, obj);
            obj = new Combo("inptYbCombo", "absolute", "48.06%", "148", null, "30", "46%", null, this.menuDiv);
            this.menuDiv.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_enable("false");

            obj = new Button("ctrtBatchBtn", "absolute", "8.96%", "487", null, "32", "83.84%", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("ctrtBatchBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addCtrtBtn", "absolute", "1.28%", "487", null, "32", "91.52%", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("addCtrtBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delCtrtBtn", "absolute", "1.28%", "450", null, "32", "91.52%", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("delCtrtBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Calendar("buyReceiptStartCal", "absolute", "1.68%", "305", null, "30", "89.04%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Calendar("buyReceiptEndCal", "absolute", "4.72%", "343", null, "30", "85.92%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Button("ctrtSearchBtn", "absolute", "9.28%", "263", null, "32", "83.36%", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "2.88%", "347", null, "23", "95.52%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("~");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 9 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "1.84%", "265", null, "30", "91.36%", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("구매접수일");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("prcsReceiptGrid", "absolute", "17.28%", "267", null, "245", "1.6%", null, this);
            obj.set_taborder("16");
            obj.set_binddataset("gdsPrcsReceipt");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"66\"/><Column size=\"102\"/><Column size=\"98\"/><Column size=\"83\"/><Column size=\"136\"/><Column size=\"83\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"221\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"청구번호\"/><Cell col=\"1\" text=\"상세번호\"/><Cell col=\"2\" text=\"접수번호\"/><Cell col=\"3\" text=\"접수일\"/><Cell col=\"4\" text=\"접수담당\"/><Cell col=\"5\" text=\"거래처\"/><Cell col=\"6\" text=\"구매종류\"/><Cell col=\"7\" text=\"수량\"/><Cell col=\"8\" text=\"물품코드\"/><Cell col=\"9\" text=\"물품명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:gdsAnspNo\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:anspHistNo\"/><Cell col=\"2\" text=\"bind:buyReceiptNo\"/><Cell col=\"3\" text=\"bind:buyReceiptDate\"/><Cell col=\"4\" text=\"bind:buyReceiptRespoWorker\"/><Cell col=\"5\" text=\"bind:cust\"/><Cell col=\"6\" text=\"bind:buyKind\"/><Cell col=\"7\" text=\"bind:prcsQnt\"/><Cell col=\"8\" text=\"bind:gdsCd\"/><Cell col=\"9\" text=\"bind:gdsNm\"/></Band></Format></Formats>");
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
            obj = new Layout("default", "", 0, 186, this.menuDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.style.set_border("1 solid cadetblue");

            	}
            );
            this.menuDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LC_CtrtMngntForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","menuDiv.ctrtCal","value","dsCtrt","ctrtDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","menuDiv.ctrtGdsEd","value","dsCtrt","ctrtGds");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","menuDiv.custCdEd","value","dsCtrt","custCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","menuDiv.prsdntNmEd","value","dsCtrt","prsdntNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","menuDiv.ctrtRespoWorkerEd","value","dsCtrt","ctrtRespoWorker");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","menuDiv.ctrtAddrEd","value","dsCtrt","ctrtAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","menuDiv.busCtgNmEd","value","dsCtrt","busCtgNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","menuDiv.telNoEd","value","dsCtrt","ctrtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","menuDiv.ctrtDivCombo","value","dsCtrt","ctrtDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","menuDiv.custEd","value","dsCtrt","cust");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","menuDiv.gdsCdEd","value","dsCtrt","gdsCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","menuDiv.bussNoEd","value","dsCtrt","bussNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","menuDiv.ctrtQntEd","value","dsCtrt","ctrtQnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","menuDiv.ctrtPrice","value","dsCtrt","ctrtPrice");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","menuDiv.ctrtAmt","value","dsCtrt","ctrtAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","menuDiv.ctrtConArea","value","dsCtrt","ctrtCon");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","menuDiv.inptYbCombo","value","dsCtrt","inptYb");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LC_CtrtMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("LC_CtrtMngntForm.xfdl", "scripts::logScripts.xjs");
        this.registerScript("LC_CtrtMngntForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 물품 계약관리																*
        *                                                                               *
        * @Path		    LC_CtrtMngntForm											*
        *																				*
        * @Description 	물품 계약관리에서 물품 계약 등록,수정,삭제,조회한다.		*
        *               																*
        * @Author	    강찬모    						                                *
        * 									                                            *
        * Created on 2016. 05. 26	                          		                    *
        *									                                            *
        ********************************************************************************/

        /***************************************************************************************************
        *                                         공통 Script Include                                      *
        ***************************************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include "scripts::logScripts.xjs";

        /***************************************************************************************************
        *                                           구매접수 조회                                         *
        ***************************************************************************************************/

        this.anspListBtn_onclick = function(obj,e)
        {
        	var buyReceiptStartCal = this.buyReceiptStartCal.value;
        	var buyReceiptEndCal = this.buyReceiptEndCal.value;
        	var buyReceiptCal = "buyReceiptStartCal='"+buyReceiptStartCal+"' buyReceiptEndCal='"+buyReceiptEndCal+"'";
        	this.dsService.setColumn(3, "argument", buyReceiptCal);
        	this.gfnService("findPrcsReceiptList", false);
        }

        
        /***************************************************************************************************
        *                                         계약관리  조회                                          *
        ***************************************************************************************************/
        var buyReceiptNo;
        this.prcsReceiptGrid_oncellclick = function(obj,e)
        {
        	var prcsReceiptCount = this.prcsReceiptGrid.currentrow;
         	buyReceiptNo = application.gdsPrcsReceipt.getColumn(prcsReceiptCount, "buyReceiptNo");
         	alert(buyReceiptNo);
         	var setDsPrcsReceipt = "buyReceiptNo='"+buyReceiptNo+"'";
         	this.dsService.setColumn(0, "argument", setDsPrcsReceipt);
         	alert(this.dsService.getColumn(0, "argument"));
        	this.gfnService("findCtrtList", false);	
        	this.ctrtSet();	
        }

        /***************************************************************************************************
        *                                         계약관리  추가                                          *
        ***************************************************************************************************/
        var count;

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

        this.addCtrtBtn_onclick = function(obj,e)
        {
        	this.dsCtrt.addRow();
        	var ctrtNo = this.ctrtGrid.currentrow;
        	count = this.ctrtGrid.currentrow;

        	var objDate = new Date();
        	var year = objDate.getFullYear() +"";
        	var cutYear = year.substr(2,3);
        	var setDownCount = "CTRT"+cutYear+"0"+ctrtNo;
        	var setUpCount = "CTRT"+cutYear+ctrtNo;
        	if(ctrtNo < 10){
        		this.dsCtrt.setColumn(count, "ctrtNo", setDownCount);
        	}else{
        		this.dsCtrt.setColumn(count, "ctrtNo", setUpCount);
        	}
        	this.dsCtrt.setColumn(count, "buyReceiptNo", buyReceiptNo);
        	this.dsCtrt.setColumn(count, "ctrtDate", this.Today());
        	this.dsCtrt.setColumn(count, "inptYb", "N");
        }

        /***************************************************************************************************
        *                                         계약관리  삭제                                          *
        ***************************************************************************************************/
        this.delCtrtBtn_onclick = function(obj,e)
        {
        	this.dsCtrt.deleteRow(this.ctrtGrid.currentrow);
        }

        /***************************************************************************************************
        *                                        계약관리 일괄저장                                       *
        ***************************************************************************************************/
        this.ctrtBatchBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchCtrtProcess", "false");
        }

        /***************************************************************************************************
        *                                          달력 값 변경                                           *
        ***************************************************************************************************/
        this.menuDiv_ctrtCal_onchanged = function(obj,e)
        {
        	var no = this.ctrtGrid.currentrow;
        	var setCalendar = this.menuDiv.ctrtCal.value;
        	this.dsCtrt.setColumn(no, "ctrtDate", setCalendar)	
        }

        this.menuDiv_ctrtStartPridCal_onchanged = function(obj,e)
        {
        	var count = this.ctrtGrid.currentrow;
        	var frontValue = this.menuDiv.ctrtStartPridCal.value;
        	this.dsCtrt.setColumn(count, "ctrtStart", frontValue);
        }

        this.menuDiv_ctrtEndPridCal_onchanged = function(obj,e)
        {
        	var count = this.ctrtGrid.currentrow;
        	var backValue = this.menuDiv.ctrtEndPridCal.value;		
        	this.dsCtrt.setColumn(count, "ctrtEnd", backValue);
        }

        /***************************************************************************************************
        *                                         거래처 조회                                             *
        ***************************************************************************************************/
        this.menuDiv_searchCustBtn_onclick = function(obj,e)
         {
         	this.logOpenCdDialog("cust");
         }

        /***************************************************************************************************
        *                                        계약물품 조회                                            *
        ***************************************************************************************************/
        this.menuDiv_searchCtrtGdsBtn_onclick = function(obj,e)
        {
         	this.logOpenGdsDialog("gds");
         	
        	var custCd = this.menuDiv.custCdEd.value;
        	var bussNo = this.menuDiv.bussNoEd.value;
        	var busCtgNm = this.menuDiv.busCtgNmEd.value;
        	var prsdntNm = this.menuDiv.prsdntNmEd.value;
        	var ctrtTel = this.menuDiv.telNoEd.value;
        	var ctrtAddr = this.menuDiv.ctrtAddrEd.value;
        	
        	this.dsCtrt.setColumn(count, "custCd", custCd);
        	this.dsCtrt.setColumn(count, "bussNo", bussNo);
        	this.dsCtrt.setColumn(count, "busCtgNm", busCtgNm);
        	this.dsCtrt.setColumn(count, "prsdntNm", prsdntNm);
        	this.dsCtrt.setColumn(count, "ctrtTel", ctrtTel);
        	this.dsCtrt.setColumn(count, "ctrtAddr", ctrtAddr);
        }
        // 계약물품 조회역할 자식 팝업창에서 호출
         this.setLogCodeArray = function(divCode,logCode,secCode,thrCode,arr){
        //  	trace(arr[0]+"aasdfas="+divCode);
          	switch(divCode){
          		case "cust" :
        // 			alert("aa");
          			this.menuDiv.custEd.set_value(arr[1]);
          			var custCd = "custCd='"+arr[0]+"'";
          			this.dsService.setColumn(2, "argument", custCd);
        			this.gfnService("findCustInfo");
        			
        			
          			break;
          		case "gds" :
        // 			trace("+++++++"+arr);
           			this.menuDiv.ctrtGdsEd.set_value(arr[1]);
           			this.menuDiv.gdsCdEd.set_value(arr[0]);
           			break;
         	}
        }
        this.addAuthBtn_onclick = function(obj,e)
        { 
        	var custCd = this.menuDiv.custCdEd.value;
         	this.dsCtrt.setColumn(count, "custCd", custCd);
        }
        /***************************************************************************************************
        *                                          계약 기간 출력                                         *
        ***************************************************************************************************/
        this.ctrtGrid_oncellclick = function(obj,e){
        	this.ctrtSet();
        }

        this.ctrtSet = function() {
        	var count = this.ctrtGrid.currentrow;
        	this.menuDiv.ctrtStartPridCal.set_value("");
        	this.menuDiv.ctrtEndPridCal.set_value("");
        	var ctrtPridStart = this.dsCtrt.getColumn(count, "ctrtStart");
        	var ctrtPridEnd = this.dsCtrt.getColumn(count, "ctrtEnd");
        	this.menuDiv.ctrtStartPridCal.set_value(ctrtPridStart);
        	this.menuDiv.ctrtEndPridCal.set_value(ctrtPridEnd);
        }

        
        this.custCallbackFunc = function()
        {
        	this.menuDiv.bussNoEd.set_value(this.dsCust.getColumn(0, "bussNo"));
        	this.menuDiv.custCdEd.set_value(this.dsCust.getColumn(0, "custCd"));
        	this.menuDiv.prsdntNmEd.set_value(this.dsCust.getColumn(0, "prsdntNm"));
        	this.menuDiv.ctrtAddrEd.set_value(this.dsCust.getColumn(0, "addr"));
        	this.menuDiv.busCtgNmEd.set_value(this.dsCust.getColumn(0, "busCtgNm"));
        	this.menuDiv.telNoEd.set_value(this.dsCust.getColumn(0, "telNo"));
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LC_CtrtMngntForm_onload, this);
            this.ctrtGrid.addEventHandler("oncellclick", this.ctrtGrid_oncellclick, this);
            this.menuDiv.ctrtCal.addEventHandler("onchanged", this.menuDiv_ctrtCal_onchanged, this);
            this.menuDiv.ctrtStartPridCal.addEventHandler("onchanged", this.menuDiv_ctrtStartPridCal_onchanged, this);
            this.menuDiv.ctrtEndPridCal.addEventHandler("onchanged", this.menuDiv_ctrtEndPridCal_onchanged, this);
            this.menuDiv.searchCtrtGdsBtn.addEventHandler("onclick", this.menuDiv_searchCtrtGdsBtn_onclick, this);
            this.menuDiv.searchCustBtn.addEventHandler("onclick", this.menuDiv_searchCustBtn_onclick, this);
            this.ctrtBatchBtn.addEventHandler("onclick", this.ctrtBatchBtn_onclick, this);
            this.addCtrtBtn.addEventHandler("onclick", this.addCtrtBtn_onclick, this);
            this.delCtrtBtn.addEventHandler("onclick", this.delCtrtBtn_onclick, this);
            this.buyReceiptEndCal.addEventHandler("onchanged", this.menuDiv_ctrtEndPridCal_onchanged, this);
            this.buyReceiptEndCal.addEventHandler("oneditclick", this.menuDiv_ctrtEndPridCal_oneditclick, this);
            this.ctrtSearchBtn.addEventHandler("onclick", this.anspListBtn_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.prcsReceiptGrid.addEventHandler("oncellclick", this.prcsReceiptGrid_oncellclick, this);

        };

        this.loadIncludeScript("LC_CtrtMngntForm.xfdl");

       
    };
}
)();

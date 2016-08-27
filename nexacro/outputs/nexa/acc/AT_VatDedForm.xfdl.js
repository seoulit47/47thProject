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
                this.set_name("AT_VatDedForm");
                this.set_classname("AT_VatDedForm");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsVatDecl", this);
            obj._setContents("<ColumnInfo><Column id=\"purchPlnDeclOmi\" type=\"undefined\" size=\"100\"/><Column id=\"salesPlnDeclOmi\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesBdtc\" type=\"undefined\" size=\"100\"/><Column id=\"vatPurchEtcDeduct\" type=\"undefined\" size=\"100\"/><Column id=\"buyerTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatPurchNonDeduct\" type=\"undefined\" size=\"100\"/><Column id=\"salesZtrEtc\" type=\"undefined\" size=\"100\"/><Column id=\"salesBuyerTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"salesZtrTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatPlnNoti\" type=\"undefined\" size=\"100\"/><Column id=\"salesTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"purchTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"salesCcardDeduct\" type=\"undefined\" size=\"100\"/><Column id=\"vatBuyerTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatPurchTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesEtc\" type=\"undefined\" size=\"100\"/><Column id=\"purchEtcDeduct\" type=\"undefined\" size=\"100\"/><Column id=\"purchNonDeduct\" type=\"undefined\" size=\"100\"/><Column id=\"vatSumTaxdef\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"salesEtc\" type=\"undefined\" size=\"100\"/><Column id=\"declYear\" type=\"undefined\" size=\"100\"/><Column id=\"declPrid\" type=\"undefined\" size=\"100\"/><Column id=\"purchFixedAssetTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatEtcDeductReduct\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesCcardDeduct\" type=\"undefined\" size=\"100\"/><Column id=\"vatPlnDeclNonRefund\" type=\"undefined\" size=\"100\"/><Column id=\"vatPurchFixedAssetTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatPurchPlnDeclOmi\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesCcardCreceipt\" type=\"undefined\" size=\"100\"/><Column id=\"salesCcardCreceipt\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesBuyerTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesPlnDeclOmi\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findTaxInvList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/vat/findTaxInvList.do</Col><Col id=\"callbackFunc\">texinvCallBack</Col><Col id=\"outData\">dsTaxInv=dsTaxInv dsDetailTaxInv=dsDetailTaxInv</Col></Row><Row><Col id=\"serviceID\">batchAtTaxInvProcess</Col><Col id=\"URL\">his::acc/vat/batchAtTaxInvProcess.do</Col><Col id=\"inData\">dsTaxInv=dsTaxInv:U dsDetailTaxInv=dsDetailTaxInv:U</Col><Col id=\"callbackFunc\">texinvCallBack</Col></Row><Row><Col id=\"serviceID\">findCustList</Col><Col id=\"URL\">his::log/baseInfo/findCustList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsCust=dsCust</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA074</Col><Col id=\"dsName\">dsBillDiv</Col></Row><Row><Col id=\"dsName\">dsAnspDiv</Col><Col id=\"code\">GA087</Col></Row><Row><Col id=\"code\">GA073</Col><Col id=\"dsName\">dsPubDiv</Col></Row><Row><Col id=\"code\">GA075</Col><Col id=\"dsName\">dsPurchSalesDiv</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBillDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSearchCondition", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"tableName\" type=\"STRING\" size=\"256\"/><Column id=\"columnName\" type=\"STRING\" size=\"256\"/><Column id=\"columnValue\" type=\"STRING\" size=\"256\"/><Column id=\"operator\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPurchSalesDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDeclPrid", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"declPrid\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"declPrid\">1</Col></Row><Row><Col id=\"declPrid\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCheckBox", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"select\">전체</Col></Row><Row><Col id=\"select\">매입</Col></Row><Row><Col id=\"select\">매출</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPubDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTaxInv", this);
            obj._setContents("<ColumnInfo><Column id=\"pubDate\" type=\"undefined\" size=\"100\"/><Column id=\"taxAmt\" type=\"undefined\" size=\"100\"/><Column id=\"splyPrice\" type=\"undefined\" size=\"100\"/><Column id=\"pubNo\" type=\"undefined\" size=\"100\"/><Column id=\"custCd\" type=\"undefined\" size=\"100\"/><Column id=\"pubDiv\" type=\"undefined\" size=\"100\"/><Column id=\"abs\" type=\"undefined\" size=\"100\"/><Column id=\"anspDiv\" type=\"undefined\" size=\"100\"/><Column id=\"sumPrice\" type=\"undefined\" size=\"100\"/><Column id=\"slipNo\" type=\"undefined\" size=\"100\"/><Column id=\"gipyoDate\" type=\"undefined\" size=\"100\"/><Column id=\"resolNo\" type=\"undefined\" size=\"100\"/><Column id=\"billDiv\" type=\"undefined\" size=\"100\"/><Column id=\"purchSalesDiv\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAnspDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDetailTaxInv", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"undefined\" size=\"100\"/><Column id=\"pubDate\" type=\"undefined\" size=\"100\"/><Column id=\"taxAmt\" type=\"undefined\" size=\"100\"/><Column id=\"splyPrice\" type=\"undefined\" size=\"100\"/><Column id=\"stand\" type=\"undefined\" size=\"100\"/><Column id=\"pubNo\" type=\"undefined\" size=\"100\"/><Column id=\"dedYn\" type=\"undefined\" size=\"100\"/><Column id=\"qnt\" type=\"undefined\" size=\"100\"/><Column id=\"fm\" type=\"undefined\" size=\"100\"/><Column id=\"price\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "0%", "4", "1237", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("       부가가치세 신고");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.style.set_font("bold 15 Dotum");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Div("taxinvDiv", "absolute", "1.52%", "69", null, "643", "1.28%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Spin("declYearSpin", "absolute", "8.33%", "11", null, "28", "82.61%", null, this.taxinvDiv);
            obj.set_taborder("9");
            obj.set_value("0");
            obj.set_max("2020");
            obj.set_min("2016");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Combo("declPridCombo", "absolute", "25.39%", "11", null, "28", "65.54%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("dsDeclPrid");
            obj.set_codecolumn("declPrid");
            obj.set_datacolumn("declPrid");
            obj = new Calendar("sDayCal", "absolute", "8.33%", "46", null, "28", "82.61%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj = new Static("stc_acnt_sub01", "absolute", "17.72%", "45", null, "31", "80.13%", null, this.taxinvDiv);
            obj.getSetter("taborder").set("12");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 15 Dotum");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Calendar("eDayCal", "absolute", "19.54%", "46", null, "28", "71.39%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj = new Edit("salesTaxAmtEd", "absolute", "5.61%", "84", null, "28", "87.63%", null, this.taxinvDiv);
            obj.set_taborder("14");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Button("searchAtaxinvBtn", "absolute", "499", "118", "90", "32", null, null, this.taxinvDiv);
            obj.set_taborder("15");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.99%", "156", null, "476", "51.53%", null, this.taxinvDiv);
            obj.set_taborder("16");
            obj.set_binddataset("dsTaxInv");
            obj.set_autofittype("col");
            obj.set_suppresslevel("allcompare");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"발행일자\"/><Cell col=\"1\" text=\"발행번호\"/><Cell col=\"2\" text=\"발행구분\"/><Cell col=\"3\" text=\"계산서구분\"/><Cell col=\"4\" text=\"매입/매출\"/></Band><Band id=\"body\"><Cell text=\"bind:pubDate\"/><Cell col=\"1\" text=\"bind:pubNo\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:pubDiv\" combodataset=\"dsPubDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:billDiv\" combodataset=\"dsBillDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:purchSalesDiv\" combodataset=\"dsPurchSalesDiv\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.taxinvDiv.addChild(obj.name, obj);

            obj = new Static("stc_state_divide06", "absolute", "2.56%", "81", null, "28", "91.04%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("신고년도");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stc_state_divide05", "absolute", "19.2%", "81", null, "28", "74.4%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("신고기수");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ask_date01", "absolute", "2.56%", "116", null, "28", "91.04%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("신고기간");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ask_date02", "absolute", "2.56%", "153", null, "28", "92.96%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("매출세");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ask_date03", "absolute", "14%", "153", null, "28", "81.52%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("매입세");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("purchTaxAmtEd", "absolute", "18.96%", "153", null, "28", "74.48%", null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ask_date04", "absolute", "37.52%", "153", null, "28", "58%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("부가율");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("vatRateEd", "absolute", "41.68%", "153", null, "28", "51.76%", null, this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Grid("AtVatDeclGrid", "absolute", "49.76%", "110", null, "591", "2.48%", null, this);
            obj.set_taborder("11");
            obj.set_binddataset("dsVatDecl");
            obj.set_selecttype("area");
            obj.set_enable("false");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"70\"/><Column size=\"212\"/><Column size=\"34\"/><Column size=\"130\"/><Column size=\"45\"/><Column size=\"136\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"23\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"30\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"24\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" style=\"background:cornsilk;\" text=\"구분\"/><Cell col=\"4\" style=\"background:cornsilk;\" text=\"금액\"/><Cell col=\"5\" style=\"background:cornsilk;\" text=\"세율\"/><Cell col=\"6\" style=\"background:cornsilk;\" text=\"세액\"/></Band><Band id=\"body\"><Cell rowspan=\"8\" celltype=\"head\" displaytype=\"normal\"><Cell celltype=\"head\" displayexpdec=\"-1\"/><Cell row=\"1\" celltype=\"head\" text=\"과세\" displayexpdec=\"-1\"/><Cell row=\"2\" celltype=\"head\" text=\"표준\" displayexpdec=\"-1\"/><Cell row=\"3\" celltype=\"head\" text=\"및\" displayexpdec=\"-1\"/><Cell row=\"4\" celltype=\"head\" text=\"매출\" displayexpdec=\"-1\"/><Cell row=\"5\" celltype=\"head\" text=\"세액\" displayexpdec=\"-1\"/><Cell row=\"6\" celltype=\"head\" displayexpdec=\"-1\"/><Cell row=\"7\" celltype=\"head\" displayexpdec=\"-1\"/></Cell><Cell col=\"1\" rowspan=\"4\" celltype=\"head\" displaytype=\"normal\" text=\"과세\"/><Cell col=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"세금계산서 발급분\"/><Cell col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"1\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:salesTaxinv\"/><Cell col=\"5\" celltype=\"head\" displaytype=\"normal\" text=\"10/100\"/><Cell col=\"6\" celltype=\"body\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatSalesTaxinv\"/><Cell row=\"1\" col=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"매입자발행 세금계산서\"/><Cell row=\"1\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"2\"/><Cell row=\"1\" col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:salesBuyerTaxinv\"/><Cell row=\"1\" col=\"5\" celltype=\"head\" displaytype=\"normal\" text=\"10/100\"/><Cell row=\"1\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatSalesBuyerTaxinv\"/><Cell row=\"2\" col=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"신용카드ㆍ현금영수증 발행분\"/><Cell row=\"2\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"3\"/><Cell row=\"2\" col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:salesCcardCreceipt\"/><Cell row=\"2\" col=\"5\" celltype=\"head\" displaytype=\"normal\" text=\"10/100\"/><Cell row=\"2\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatSalesCcardCreceipt\"/><Cell row=\"3\" col=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"기타(정규영수증 외 매출분)\"/><Cell row=\"3\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"4\"/><Cell row=\"3\" col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:salesEtc\"/><Cell row=\"3\" col=\"5\" celltype=\"head\" displaytype=\"normal\" text=\"10/100\"/><Cell row=\"3\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatSalesEtc\"/><Cell row=\"4\" col=\"1\" rowspan=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"영세율\"/><Cell row=\"4\" col=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"세금계산서 발급분\"/><Cell row=\"4\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"5\"/><Cell row=\"4\" col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:salesZtrTaxinv\"/><Cell row=\"4\" col=\"5\" celltype=\"head\" displaytype=\"normal\" text=\"0/100\"/><Cell row=\"4\" col=\"6\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"5\" col=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"기               타\"/><Cell row=\"5\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"6\"/><Cell row=\"5\" col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:salesZtrEtc\"/><Cell row=\"5\" col=\"5\" celltype=\"head\" displaytype=\"normal\" text=\"0/100\"/><Cell row=\"5\" col=\"6\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"6\" col=\"1\" colspan=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"예  정  신  고      누  락  분\"/><Cell row=\"6\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"7\"/><Cell row=\"6\" col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:salesPlnDeclOmi\"/><Cell row=\"6\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"6\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatSalesPlnDeclOmi\"/><Cell row=\"7\" col=\"1\" colspan=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"대  손  세  액      가       감\"/><Cell row=\"7\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"8\"/><Cell row=\"7\" col=\"4\" celltype=\"head\" displaytype=\"normal\" edittype=\"none\" style=\"background:silver;\"/><Cell row=\"7\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"7\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatSalesBdtc\"/><Cell row=\"8\" colspan=\"3\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"합                                계\"/><Cell row=\"8\" col=\"3\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"9\"/><Cell row=\"8\" col=\"4\" celltype=\"summary\" displaytype=\"normal\" style=\"background:cornsilk;\" expr=\"expr:parseInt(!isNaN(salesTaxinv)? salesTaxinv: 0)+parseInt(!isNaN(salesBuyerTaxinv)? salesBuyerTaxinv: 0)+parseInt(!isNaN(salesCcardCreceipt)? salesCcardCreceipt:0)+parseInt(!isNaN(salesEtc)? salesEtc:0)+parseInt(!isNaN(salesZtrTaxinv)? salesZtrTaxinv: 0)+parseInt(!isNaN(salesZtrEtc)? salesZtrEtc: 0)+parseInt(!isNaN(salesPlnDeclOmi)? salesPlnDeclOmi: 0)\"/><Cell row=\"8\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"㉮\"/><Cell row=\"8\" col=\"6\" celltype=\"summary\" displaytype=\"normal\" style=\"background:cornsilk;\" expr=\"expr:parseInt(!isNaN(vatSalesTaxinv)? vatSalesTaxinv: 0)+parseInt(!isNaN(vatSalesBuyerTaxinv)? vatSalesBuyerTaxinv: 0)+parseInt(!isNaN(vatSalesCcardCreceipt)? vatSalesCcardCreceipt:0)+parseInt(!isNaN(vatSalesEtc)? vatSalesEtc:0)+parseInt(!isNaN(vatSalesPlnDeclOmi)? vatSalesPlnDeclOmi: 0)+parseInt(!isNaN(vatSalesBdtc)? vatSalesBdtc: 0)\"/><Cell row=\"9\" rowspan=\"8\" celltype=\"head\" displaytype=\"normal\"><Cell celltype=\"head\"/><Cell row=\"1\" celltype=\"head\"/><Cell row=\"2\" celltype=\"head\"/><Cell row=\"3\" celltype=\"head\" text=\"매입\"/><Cell row=\"4\" celltype=\"head\" text=\"세액\"/><Cell row=\"5\" celltype=\"head\"/><Cell row=\"6\" celltype=\"head\"/><Cell row=\"7\" celltype=\"head\"/></Cell><Cell row=\"9\" col=\"1\" rowspan=\"2\" celltype=\"head\" displaytype=\"normal\"><Cell celltype=\"head\" text=\"세금계산서\"/><Cell row=\"1\" celltype=\"head\" text=\"수  취  분\"/></Cell><Cell row=\"9\" col=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"일   반   매   입\"/><Cell row=\"9\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"10\"/><Cell row=\"9\" col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:purchTaxinv\"/><Cell row=\"9\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"9\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatPurchTaxinv\"/><Cell row=\"10\" col=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"고정자산   매입\"/><Cell row=\"10\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"11\"/><Cell row=\"10\" col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:purchFixedAssetTaxinv\"/><Cell row=\"10\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"10\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatPurchFixedAssetTaxinv\"/><Cell row=\"11\" col=\"1\" colspan=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"예  정  신  고      누  락  분\"/><Cell row=\"11\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"12\"/><Cell row=\"11\" col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:purchPlnDeclOmi\"/><Cell row=\"11\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"11\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatPurchPlnDeclOmi\"/><Cell row=\"12\" col=\"1\" colspan=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"매입자발행       세금계산서\"/><Cell row=\"12\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"13\"/><Cell row=\"12\" col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:buyerTaxinv\"/><Cell row=\"12\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"12\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatBuyerTaxinv\"/><Cell row=\"13\" col=\"1\" colspan=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"기 타 공 제        매 입 세 액\"/><Cell row=\"13\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"14\"/><Cell row=\"13\" col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:purchEtcDeduct\"/><Cell row=\"13\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"13\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatPurchEtcDeduct\"/><Cell row=\"14\" col=\"1\" colspan=\"2\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"합   계 ( 10 + 11 + 12 + 13 + 14 )\"/><Cell row=\"14\" col=\"3\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"15\"/><Cell row=\"14\" col=\"4\" celltype=\"summary\" displaytype=\"normal\" style=\"background:cornsilk;\" expr=\"expr:parseInt(!isNaN(purchTaxinv)? purchTaxinv: 0)+parseInt(!isNaN(purchFixedAssetTaxinv)? purchFixedAssetTaxinv: 0)+parseInt(!isNaN(purchPlnDeclOmi)? purchPlnDeclOmi:0)+parseInt(!isNaN(buyerTaxinv)? buyerTaxinv:0)+parseInt(!isNaN(purchEtcDeduct)? purchEtcDeduct: 0)\"/><Cell row=\"14\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"14\" col=\"6\" celltype=\"summary\" displaytype=\"normal\" style=\"background:cornsilk;\" expr=\"expr:parseInt(!isNaN(vatPurchTaxinv)? vatPurchTaxinv: 0)+parseInt(!isNaN(vatPurchFixedAssetTaxinv)? vatPurchFixedAssetTaxinv: 0)+parseInt(!isNaN(vatPurchPlnDeclOmi)? vatPurchPlnDeclOmi:0)+parseInt(!isNaN(vatBuyerTaxinv)? vatBuyerTaxinv:0)+parseInt(!isNaN(vatPurchEtcDeduct)? vatPurchEtcDeduct: 0)\"/><Cell row=\"15\" col=\"1\" colspan=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"공제받지못할     매 입 세 액\"/><Cell row=\"15\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"16\"/><Cell row=\"15\" col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:purchNonDeduct\"/><Cell row=\"15\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"15\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatPurchNonDeduct\"/><Cell row=\"16\" col=\"1\" colspan=\"2\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"차  감  계 ( 15 - 16 )\"/><Cell row=\"16\" col=\"3\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"17\"/><Cell row=\"16\" col=\"4\" celltype=\"summary\" displaytype=\"normal\" style=\"background:cornsilk;\" expr=\"expr:(parseInt(!isNaN(purchTaxinv)? purchTaxinv: 0)+parseInt(!isNaN(purchFixedAssetTaxinv)? purchFixedAssetTaxinv: 0)+parseInt(!isNaN(purchPlnDeclOmi)? purchPlnDeclOmi:0)+parseInt(!isNaN(buyerTaxinv)? buyerTaxinv:0)+parseInt(!isNaN(purchEtcDeduct)? purchEtcDeduct: 0))-(!isNaN(this.grid.getCellValue(0,82))?this.grid.getCellValue(0,82):0)\"/><Cell row=\"16\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"㉯\"/><Cell row=\"16\" col=\"6\" celltype=\"summary\" displaytype=\"normal\" style=\"background:cornsilk;\" expr=\"expr:(parseInt(!isNaN(vatPurchTaxinv)? vatPurchTaxinv: 0)+parseInt(!isNaN(vatPurchFixedAssetTaxinv)? vatPurchFixedAssetTaxinv: 0)+parseInt(!isNaN(vatPurchPlnDeclOmi)? vatPurchPlnDeclOmi:0)+parseInt(!isNaN(vatBuyerTaxinv)? vatBuyerTaxinv:0)+parseInt(!isNaN(vatPurchEtcDeduct)? vatPurchEtcDeduct: 0))-(!isNaN(this.grid.getCellValue(0,84))?this.grid.getCellValue(0,84):0)\"/><Cell row=\"17\" colspan=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"납부(환급) 세액   ( 매출세액 ㉮- 매입세액 ㉯ )\"/><Cell row=\"17\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"㉰\"/><Cell row=\"17\" col=\"6\" celltype=\"summary\" displaytype=\"normal\" style=\"background:cornsilk;\" expr=\"expr:this.grid.getCellText(0,47)-this.grid.getCellText(0,89)\"/><Cell row=\"18\" rowspan=\"3\" celltype=\"head\" displaytype=\"normal\"><Cell celltype=\"head\" text=\"경감\"/><Cell row=\"1\" celltype=\"head\" text=\"공제\"/><Cell row=\"2\" celltype=\"head\" text=\"세액\"/></Cell><Cell row=\"18\" col=\"1\" colspan=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"기  타  공  제  .  경  감  세  액\"/><Cell row=\"18\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"18\"/><Cell row=\"18\" col=\"4\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\" text=\"bind:etcDeductReductTaxAmt\"/><Cell row=\"18\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"18\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatEtcDeductReduct\"/><Cell row=\"19\" col=\"1\" colspan=\"2\" celltype=\"head\" displaytype=\"normal\" text=\"신용카드  매출전표  발행공제\"/><Cell row=\"19\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"19\"/><Cell row=\"19\" col=\"4\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"19\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"19\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatSalesCcardDeduct\"/><Cell row=\"20\" col=\"1\" colspan=\"2\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"합                                계\"/><Cell row=\"20\" col=\"3\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"20\"/><Cell row=\"20\" col=\"4\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\"/><Cell row=\"20\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"㉱\"/><Cell row=\"20\" col=\"6\" celltype=\"summary\" displaytype=\"normal\" style=\"background:cornsilk;\" expr=\"expr:parseInt(!isNaN(vatEtcDeductReduct)? vatEtcDeductReduct: 0)+parseInt(!isNaN(vatSalesCcardDeduct)? vatSalesCcardDeduct: 0)\"/><Cell row=\"21\" colspan=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"예 정 신 고 미 환 급 세 액\"/><Cell row=\"21\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"21\"/><Cell row=\"21\" col=\"4\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"21\" col=\"5\" celltype=\"head\" displaytype=\"normal\" text=\"㉲\"/><Cell row=\"21\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatPlnDeclNonRefund\"/><Cell row=\"22\" colspan=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"예  정  고  지  세  액\"/><Cell row=\"22\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"22\"/><Cell row=\"22\" col=\"4\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\"/><Cell row=\"22\" col=\"5\" celltype=\"head\" displaytype=\"normal\" text=\"㉳\"/><Cell row=\"22\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatPlnNoti\"/><Cell row=\"23\" colspan=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"가   산   세   액   계\"/><Cell row=\"23\" col=\"3\" celltype=\"head\" displaytype=\"normal\" text=\"23\"/><Cell row=\"23\" col=\"4\" celltype=\"head\" displaytype=\"normal\" style=\"background:silver;\" text=\"bind:sumTaxdef\"/><Cell row=\"23\" col=\"5\" celltype=\"head\" displaytype=\"normal\" text=\"㉴\"/><Cell row=\"23\" col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:vatSumTaxdef\"/><Cell row=\"24\" colspan=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"차감ㆍ가감하여 납부할 세액(환급받을 세액) (㉰-㉱-㉲-㉳+㉴)\"/><Cell row=\"24\" col=\"5\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"24\"/><Cell row=\"24\" col=\"6\" celltype=\"none\" displaytype=\"normal\" style=\"background:cornsilk;\" expr=\"expr:(!isNaN(this.grid.getCellText(0,92))? this.grid.getCellText(0,92): 0)-(!isNaN(this.grid.getCellText(0,108))? this.grid.getCellText(0,108): 0)-(!isNaN(this.grid.getCellText(0,113))? this.grid.getCellText(0,113): 0)-(!isNaN(this.grid.getCellText(0,118))? this.grid.getCellText(0,118): 0)+(!isNaN(this.grid.getCellText(0,123))? this.grid.getCellText(0,123): 0)\"/><Cell row=\"25\" colspan=\"6\" celltype=\"head\" displaytype=\"normal\" style=\"background:cornsilk;\" text=\"총괄 납부 사업자가 납부할 세액 (환급받을 세액)\"/><Cell row=\"25\" col=\"6\" celltype=\"summary\" displaytype=\"normal\" style=\"background:cornsilk;\" expr=\"expr:(!isNaN(this.grid.getCellText(0,92))? this.grid.getCellText(0,92): 0)-(!isNaN(this.grid.getCellText(0,108))? this.grid.getCellText(0,108): 0)-(!isNaN(this.grid.getCellText(0,113))? this.grid.getCellText(0,113): 0)-(!isNaN(this.grid.getCellText(0,118))? this.grid.getCellText(0,118): 0)+(!isNaN(this.grid.getCellText(0,123))? this.grid.getCellText(0,123): 0)\"/><Cell row=\"26\" celltype=\"summary\" expr=\"expr:this.grid.getCellText(0,45)\"/><Cell row=\"26\" col=\"1\" celltype=\"summary\" expr=\"expr:this.grid.getCellValue(0,2)\"/><Cell row=\"26\" col=\"2\" celltype=\"summary\" expr=\"expr:this.grid.getCellText(0,92)\"/><Cell row=\"26\" col=\"3\" celltype=\"summary\"/><Cell row=\"26\" col=\"4\" celltype=\"none\" expr=\"expr:this.grid.getCellText(0,92)\"/><Cell row=\"26\" col=\"5\" celltype=\"summary\"/><Cell row=\"26\" col=\"6\" celltype=\"summary\" expr=\"expr:parseInt(this.grid.getCellText(0,89))\"/><Cell row=\"27\" celltype=\"summary\" text=\"expr:this.grid.getCellValue(0,10)\"/><Cell row=\"27\" col=\"1\" celltype=\"summary\" expr=\"expr:this.grid.getCellValue(0,20)\"/><Cell row=\"27\" col=\"2\" celltype=\"summary\" expr=\"expr:(!isNaN(this.grid.getCellText(0,92))? this.grid.getCellText(0,92): 0)\"/><Cell row=\"27\" col=\"3\" celltype=\"summary\"/><Cell row=\"27\" col=\"4\" celltype=\"summary\" expr=\"expr:this.grid.getCellText(0,47)\"/><Cell row=\"27\" col=\"5\" celltype=\"summary\"/><Cell row=\"27\" col=\"6\" celltype=\"summary\" expr=\"expr:this.grid.getCellText(0,89)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ask_date00", "absolute", "49.76%", "82", null, "28", "41.92%", null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("세금계산서");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv2", "absolute", "2.56%", "190", null, "28", "91.12%", null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("매입/매출");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("purchSaleCombo", "absolute", "9.76%", "190", null, "28", "81.44%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("dsPurchSalesDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Button("batchVATDeclBtn", "absolute", "1144", "720", "90", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addVATDeclBtn", "absolute", "1040", "720", "90", "32", null, null, this);
            obj.set_taborder("16");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("subtracTaxAmtEd", "absolute", "30.4%", "153", null, "28", "63.04%", null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ask_date05", "absolute", "25.84%", "153", null, "28", "69.68%", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("차감세");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 643, this.taxinvDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.taxinvDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AT_VatDedForm");
            		p.set_titletext("New Form");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AT_VatDedForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("AT_VatDedForm.xfdl", "scripts::commonBind.xjs");
        this.registerScript("AT_VatDedForm.xfdl", function() {
         /*******************************************************************************
        *                                                                               *
        * @Path		    세금계산서 관리							                 	*
        * @Description  부가가치세                                 	                *
        * 																				*
        *																				*
        * @Author	 정재욱    					                             		*
        * 									                                            *
        * Created on 2016. 06. 07                             		                    *
        *									                                            *
        ********************************************************************************/

        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/
        //include "scripts::commonTransaction.xjs";  
        //include "scripts::commonBind.xjs";

        /********************************************************************************
          폼 로드 이벤트
        ********************************************************************************/

        this.AT_VatDedForm_onload = function(obj,e)
        {
        	this.gfnBind();
        }

        /********************************************************************************
          세금 계산서 조회
        ********************************************************************************/

        this.taxinvDiv_declYearSpin_ontextchanged = function(obj,e)
        {
        	this.setPeriod();
        }

        this.taxinvDiv_declPridCombo_onitemchanged = function(obj,e)
        {
        	this.setPeriod();
        }

        //신고년도 기수 입력시 기간 설정
        this.setPeriod = function(){
            var declYear = this.taxinvDiv.declYearSpin.value;
            var declPrid = this.taxinvDiv.declPridCombo.value;
            var sDay;
            var eDay;
            if(declYear != null && declPrid == 1){
        		sDay = declYear+"0101";
        		eDay = declYear+"0630";
        	}else if(declYear != null && declPrid == 2){
        		sDay = declYear+"0701";
        		eDay = declYear+"1231";
        	}
        	this.dsVatDecl.setColumn(0,"declYear",declYear);
        	this.dsVatDecl.setColumn(0,"declPrid",declPrid);
        	this.taxinvDiv.sDayCal.set_value(sDay);
        	this.taxinvDiv.eDayCal.set_value(eDay);
        }

        //Checked Box 클릭 이벤트
        this.taxinvDiv_Radio00_onitemchanged = function(obj,e)
        {
        	if(obj.value == "전체"){
        		this.dsAtTaxinv.filter("");
        	}else if(obj.value == "매입"){
        		this.dsAtTaxinv.filter("purchSalesDiv == 2");
        	}else if(obj.value == "매출"){
        		this.dsAtTaxinv.filter("purchSalesDiv == 1");
        	}
        }

        //조회 기간에 따른 조회
        this.taxinvDiv_searchAtaxinvBtn_onclick = function(obj,e)
        {
        	var argument = "";
        	if(this.taxinvDiv.sDayCal.value != null){
        		var startDay = this.taxinvDiv.sDayCal.value;
        		argument = "startPubDate='"+startDay+"'";
        	}
        	if(this.taxinvDiv.eDayCal.value != null){
        		var endDay = this.taxinvDiv.eDayCal.value;
        		argument = argument+" endPubDate='"+endDay+"'";
        	}		
        	if(this.purchSaleCombo.value != null){
        		var purchSales = this.purchSaleCombo.value;
        		argument = argument+" purchSalesDiv='"+purchSales+"'";
        	}
        	if(argument != ""){
        		this.dsService.setColumn(0,"argument",argument);
        	}
        	this.gfnService("findTaxInvList");

        }

        /********************************************************************************
          부가가치세 계산
        ********************************************************************************/

        // 세금 계산서 조회에 따른 부가가치세 계산
        this.texinvCallBack = function(strSvcID,nErrorCode,strErrorMag){
        	if(strSvcID == "findTaxInvList" && nErrorCode == 1){
        		if(this.dsTaxInv.rowcount == 0){
        			alert("조회된 세금 계산서가 없습니다.");
        		}
        		else{
        			this.dsVatDecl.deleteAll();
        			this.dsVatDecl.addRow();
        			//매입 계산
        			this.dsTaxInv.filter("purchSalesDiv == '2'");
        			this.dsVatDecl.setColumn(0,"purchTaxinv",this.dsTaxInv.getCaseSum("1>0","splyPrice"));
        			this.dsVatDecl.setColumn(0,"vatPurchTaxinv",this.dsTaxInv.getCaseSum("1>0","taxAmt"));

        			//매출 계산
        			this.dsTaxInv.filter("purchSalesDiv == '1'");
        			this.dsVatDecl.setColumn(0,"salesTaxinv",this.dsTaxInv.getCaseSum("1>0","splyPrice"));
        			this.dsVatDecl.setColumn(0,"vatSalesTaxinv",this.dsTaxInv.getCaseSum("1>0","taxAmt"));
        			
        			this.dsVatDecl.filter("");
        			trace(this.dsVatDecl.saveXML());
        		}
        	}
        }

        /*******************************************************1*************************
          매출세/매입세/차감세/부가율을 구하는 함수
        *********************************************************************************/
        this.fnSetTaxAmt = function()
        {
        	var salesTaxAmt = this.AtVatDeclGrid.getCellText(0,47);
        	var purchTaxAmt = this.AtVatDeclGrid.getCellText(0,79);
        	var subtracTaxAmt = this.AtVatDeclGrid.getCellText(0,89);
        	var vatRate = !isNaN(salesTaxAmt-purchTaxAmt)/(salesTaxAmt*100)?(salesTaxAmt-purchTaxAmt)/(salesTaxAmt*100):0;
        	vatRate.toFixed(5);
        	this.taxinvDiv.salesTaxAmtEd.set_value(salesTaxAmt);
        	this.purchTaxAmtEd.set_value(purchTaxAmt);
        	this.subtracTaxAmtEd.set_value(subtracTaxAmt);
        	this.vatRateEd.set_value(vatRate);

        }

        
        /*******************************************************1*************************
         부가가치세신고 그리드 등록 상태로 변경
        *********************************************************************************/
        this.addVATDeclBtn_onclick = function(obj,e)
        {
        	this.AtVatDeclGrid.set_enable(true);
        }

        this.taxinvDiv_searchAtaxinvBtn_onmouseleave = function(obj,e)
        {
        	this.fnSetTaxAmt();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsDetailTaxInv.addEventHandler("onvaluechanged", this.dsDetailTaxInv_onvaluechanged, this);
            this.addEventHandler("onload", this.AT_VatDedForm_onload, this);
            this.taxinvDiv.declPridCombo.addEventHandler("onitemchanged", this.taxinvDiv_declPridCombo_onitemchanged, this);
            this.taxinvDiv.searchAtaxinvBtn.addEventHandler("onclick", this.taxinvDiv_searchAtaxinvBtn_onclick, this);
            this.taxinvDiv.searchAtaxinvBtn.addEventHandler("onmouseleave", this.taxinvDiv_searchAtaxinvBtn_onmouseleave, this);
            this.taxinvDiv.Grid00.addEventHandler("oncellclick", this.taxinvDiv_Grid00_oncellclick, this);
            this.addVATDeclBtn.addEventHandler("onclick", this.addVATDeclBtn_onclick, this);

        };

        this.loadIncludeScript("AT_VatDedForm.xfdl");

       
    };
}
)();

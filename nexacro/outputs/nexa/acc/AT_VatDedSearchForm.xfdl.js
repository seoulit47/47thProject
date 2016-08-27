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
                this.set_name("AT_VatDedSearchForm");
                this.set_classname("AT_VatDedSearchForm");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findVATDeclList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/VAT/findVATDeclList.do</Col><Col id=\"callbackFunc\">vatCallBack</Col><Col id=\"outData\">dsVATDecl=dsVATDecl</Col></Row><Row><Col id=\"serviceID\">batchAtVatDeclProcess</Col><Col id=\"URL\">his::acc/vat/batchAtVatDeclProcess.do</Col><Col id=\"inData\">dsAtVatDecl=dsAtVatDecl:U</Col><Col id=\"callbackFunc\">vatCallBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVATDecl", this);
            obj._setContents("<ColumnInfo><Column id=\"purchPlnDeclOmi\" type=\"undefined\" size=\"100\"/><Column id=\"salesPlnDeclOmi\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesBdtc\" type=\"undefined\" size=\"100\"/><Column id=\"vatPurchEtcDeduct\" type=\"undefined\" size=\"100\"/><Column id=\"buyerTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatPurchNonDeduct\" type=\"undefined\" size=\"100\"/><Column id=\"salesZtrEtc\" type=\"undefined\" size=\"100\"/><Column id=\"salesBuyerTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"salesZtrTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatPlnNoti\" type=\"undefined\" size=\"100\"/><Column id=\"salesTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"purchTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"salesCcardDeduct\" type=\"undefined\" size=\"100\"/><Column id=\"vatBuyerTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatPurchTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesEtc\" type=\"undefined\" size=\"100\"/><Column id=\"purchEtcDeduct\" type=\"undefined\" size=\"100\"/><Column id=\"purchNonDeduct\" type=\"undefined\" size=\"100\"/><Column id=\"vatSumTaxdef\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"salesEtc\" type=\"undefined\" size=\"100\"/><Column id=\"declYear\" type=\"undefined\" size=\"100\"/><Column id=\"declPrid\" type=\"undefined\" size=\"100\"/><Column id=\"purchFixedAssetTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatEtcDeductReduct\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesCcardDeduct\" type=\"undefined\" size=\"100\"/><Column id=\"vatPlnDeclNonRefund\" type=\"undefined\" size=\"100\"/><Column id=\"vatPurchFixedAssetTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatPurchPlnDeclOmi\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesCcardCreceipt\" type=\"undefined\" size=\"100\"/><Column id=\"salesCcardCreceipt\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesBuyerTaxinv\" type=\"undefined\" size=\"100\"/><Column id=\"vatSalesPlnDeclOmi\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Div("aTVATDeclDiv", "absolute", "1.52%", "69", null, "691", "1.28%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Button("searchATVATDeclBtn", "absolute", "442", "9", "90", "32", null, null, this.aTVATDeclDiv);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.aTVATDeclDiv.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "1.24%", "46", null, "588", "56.06%", null, this.aTVATDeclDiv);
            obj.set_taborder("13");
            obj.set_binddataset("dsVATDecl");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신고년도\"/><Cell col=\"1\" text=\"신고기간\"/><Cell col=\"2\" text=\"매출 세금\"/><Cell col=\"3\" text=\"매입 세금\"/></Band><Band id=\"body\"><Cell text=\"bind:declYear\"/><Cell col=\"1\" text=\"bind:declPrid\"/><Cell col=\"2\" text=\"bind:salesTaxinv\"/><Cell col=\"3\" text=\"bind:purchTaxinv\"/></Band></Format></Formats>");
            this.aTVATDeclDiv.addChild(obj.name, obj);
            obj = new Grid("AtVatDeclGrid", "absolute", "46.58%", "46", null, "588", "1.07%", null, this.aTVATDeclDiv);
            obj.set_taborder("16");
            obj.set_binddataset("dsVATDecl");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"20\"/><Column size=\"54\"/><Column size=\"133\"/><Column size=\"25\"/><Column size=\"160\"/><Column size=\"45\"/><Column size=\"139\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell colspan=\"8\" style=\"background:white;background2:white;\" text=\"신고내용\"/><Cell row=\"1\" colspan=\"5\" style=\"background:white;background2:white;\" text=\"구분\"/><Cell row=\"1\" col=\"5\" style=\"background:white;background2:white;\" text=\"금액\"/><Cell row=\"1\" col=\"6\" style=\"background:white;background2:white;\" text=\"세율\"/><Cell row=\"1\" col=\"7\" style=\"background:white;background2:white;\" text=\"세액\"/></Band><Band id=\"body\"><Cell rowspan=\"9\" style=\"background: ;background2:#e0e0e0ff;\" text=\"과세표준및매출세액\" wordwrap=\"char\"/><Cell col=\"1\" rowspan=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"과세\" wordwrap=\"char\"/><Cell col=\"2\" colspan=\"2\" style=\"background: ;background2:#e0e0e0ff;\" text=\"세금계산서 교부분\"/><Cell col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"1\"/><Cell col=\"5\" style=\"background: ;\" text=\"bind:salesTaxinv\"/><Cell col=\"6\" style=\"background: ;background2:#e0e0e0ff;\" text=\"1/10\"/><Cell col=\"7\" style=\"background: ;\" text=\"bind:vatSalesTaxinv\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" style=\"background: ;background2:#e0e0e0ff;\" text=\"매입자발행세금계산서\"/><Cell row=\"1\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"2\"/><Cell row=\"1\" col=\"5\" style=\"background: ;\" text=\"bind:salesBuyerTaxinv\"/><Cell row=\"1\" col=\"6\" style=\"background: ;background2:#e0e0e0ff;\" text=\"1/10\"/><Cell row=\"1\" col=\"7\" style=\"background: ;\" text=\"bind:vatSalesBuyerTaxinv\"/><Cell row=\"2\" col=\"2\" colspan=\"2\" style=\"background: ;background2:#e0e0e0ff;\" text=\"신용카드-현금영수증발행분\"/><Cell row=\"2\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"3\"/><Cell row=\"2\" col=\"5\" style=\"background: ;\" text=\"bind:salesCcardCreceipt\"/><Cell row=\"2\" col=\"6\" rowspan=\"2\" style=\"background: ;background2:#e0e0e0ff;\" text=\"1/10\"/><Cell row=\"2\" col=\"7\" style=\"background: ;\" text=\"bind:vatSalesCcardCreceipt\"/><Cell row=\"3\" col=\"2\" colspan=\"2\" style=\"background: ;background2:#e0e0e0ff;\" text=\"기타(정규영수증외매출분)\"/><Cell row=\"3\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"4\"/><Cell row=\"3\" col=\"5\" style=\"background: ;\" text=\"bind:salesEtc\"/><Cell row=\"3\" col=\"7\" style=\"background: ;\" text=\"bind:vatSalesEtc\"/><Cell row=\"4\" col=\"1\" rowspan=\"2\" style=\"background: ;background2:#e0e0e0ff;\" text=\"영세율\" wordwrap=\"char\"/><Cell row=\"4\" col=\"2\" colspan=\"2\" style=\"background: ;background2:#e0e0e0ff;\" text=\"세금계산서교부분\"/><Cell row=\"4\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"5\"/><Cell row=\"4\" col=\"5\" style=\"background: ;\" text=\"bind:salesZtrTaxinv\"/><Cell row=\"4\" col=\"6\" style=\"background: ;background2:#e0e0e0ff;\" text=\"1/10\"/><Cell row=\"4\" col=\"7\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"5\" col=\"2\" colspan=\"2\" style=\"background: ;background2:#e0e0e0ff;\" text=\"기타\"/><Cell row=\"5\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"6\"/><Cell row=\"5\" col=\"5\" style=\"background: ;\" text=\"bind:salesZtrEtc\"/><Cell row=\"5\" col=\"6\" style=\"background: ;background2:#e0e0e0ff;\" text=\"1/10\"/><Cell row=\"5\" col=\"7\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"6\" col=\"1\" colspan=\"3\" style=\"background: ;background2:#e0e0e0ff;\" text=\"예정신고누락분\"/><Cell row=\"6\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"7\"/><Cell row=\"6\" col=\"5\" style=\"background: ;\" text=\"bind:salesPlnDeclOmi\"/><Cell row=\"6\" col=\"6\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"6\" col=\"7\" style=\"background: ;\" text=\"bind:vatSalesPlnDeclOmi\"/><Cell row=\"7\" col=\"1\" colspan=\"3\" style=\"background: ;background2:#e0e0e0ff;\" text=\"대손세액가감\"/><Cell row=\"7\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"8\"/><Cell row=\"7\" col=\"5\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"7\" col=\"6\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"7\" col=\"7\" style=\"background: ;\" text=\"bind:vatSalesBdtc\"/><Cell row=\"8\" col=\"1\" colspan=\"3\" style=\"background: ;background2:#e0e0e0ff;\" text=\"합계\"/><Cell row=\"8\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"9\"/><Cell row=\"8\" col=\"5\" style=\"background: ;\" expr=\"expr:parseInt(!isNaN(salesTaxinv)? salesTaxinv: 0)+parseInt(!isNaN(salesBuyerTaxinv)? salesBuyerTaxinv: 0)+parseInt(!isNaN(salesCcardCreceipt)? salesCcardCreceipt:0)+parseInt(!isNaN(salesEtc)? salesEtc:0)+parseInt(!isNaN(salesZtrTaxinv)? salesZtrTaxinv: 0)+parseInt(!isNaN(salesZtrEtc)? salesZtrEtc: 0)+parseInt(!isNaN(salesPlnDeclOmi)? salesPlnDeclOmi: 0)\"/><Cell row=\"8\" col=\"6\" style=\"background: ;\" text=\"가\"/><Cell row=\"8\" col=\"7\" style=\"background: ;\" expr=\"expr:parseInt(!isNaN(vatSalesTaxinv)? vatSalesTaxinv: 0)+parseInt(!isNaN(vatSalesBuyerTaxinv)? vatSalesBuyerTaxinv: 0)+parseInt(!isNaN(vatSalesCcardCreceipt)? vatSalesCcardCreceipt:0)+parseInt(!isNaN(vatSalesEtc)? vatSalesEtc:0)+parseInt(!isNaN(vatSalesPlnDeclOmi)? vatSalesPlnDeclOmi: 0)+parseInt(!isNaN(vatSalesBdtc)? vatSalesBdtc: 0)\"/><Cell row=\"9\" rowspan=\"8\" style=\"background: ;background2:#e0e0e0ff;\" text=\"매입세액\" wordwrap=\"char\"/><Cell row=\"9\" col=\"1\" rowspan=\"2\" colspan=\"2\" style=\"background: ;background2:#e0e0e0ff;\" text=\"세금계산서 수취분\" wordwrap=\"english\"/><Cell row=\"9\" col=\"3\" style=\"background: ;background2:#e0e0e0ff;\" text=\"일반매입\"/><Cell row=\"9\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"10\"/><Cell row=\"9\" col=\"5\" style=\"background: ;\" text=\"bind:purchTaxinv\"/><Cell row=\"9\" col=\"6\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"9\" col=\"7\" style=\"background: ;\" text=\"bind:vatPurchTaxinv\"/><Cell row=\"10\" col=\"3\" style=\"background: ;background2:#e0e0e0ff;\" text=\"고정자산매입\"/><Cell row=\"10\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"11\"/><Cell row=\"10\" col=\"5\" style=\"background: ;\" text=\"bind:purchFixedAssetTaxinv\"/><Cell row=\"10\" col=\"6\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"10\" col=\"7\" style=\"background: ;\" text=\"bind:vatPurchFixedAssetTaxinv\"/><Cell row=\"11\" col=\"1\" colspan=\"3\" style=\"background: ;background2:#e0e0e0ff;\" text=\"예정신고누락분\"/><Cell row=\"11\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"12\"/><Cell row=\"11\" col=\"5\" style=\"background: ;\" text=\"bind:purchPlnDeclOmi\"/><Cell row=\"11\" col=\"6\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"11\" col=\"7\" style=\"background: ;\" text=\"bind:vatPurchPlnDeclOmi\"/><Cell row=\"12\" col=\"1\" colspan=\"3\" style=\"background: ;background2:#e0e0e0ff;\" text=\"매입자발행세금계산서\"/><Cell row=\"12\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"13\"/><Cell row=\"12\" col=\"5\" style=\"background: ;\" text=\"bind:buyerTaxinv\"/><Cell row=\"12\" col=\"6\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"12\" col=\"7\" style=\"background: ;\" text=\"bind:vatBuyerTaxinv\"/><Cell row=\"13\" col=\"1\" colspan=\"3\" style=\"background: ;background2:#e0e0e0ff;\" text=\"기타공제매입세액\"/><Cell row=\"13\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"14\"/><Cell row=\"13\" col=\"5\" style=\"background: ;\" text=\"bind:purchEtcDeduct\"/><Cell row=\"13\" col=\"6\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"13\" col=\"7\" style=\"background: ;\" text=\"bind:vatPurchEtcDeduct\"/><Cell row=\"14\" col=\"1\" colspan=\"3\" style=\"background: ;background2:#e0e0e0ff;\" text=\"합계(10+11+12+13+14)\"/><Cell row=\"14\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"15\"/><Cell row=\"14\" col=\"5\" style=\"background: ;\" expr=\"expr:parseInt(!isNaN(purchTaxinv)? purchTaxinv: 0)+parseInt(!isNaN(purchFixedAssetTaxinv)? purchFixedAssetTaxinv: 0)+parseInt(!isNaN(purchPlnDeclOmi)? purchPlnDeclOmi:0)+parseInt(!isNaN(buyerTaxinv)? buyerTaxinv:0)+parseInt(!isNaN(purchEtcDeduct)? purchEtcDeduct: 0)\"/><Cell row=\"14\" col=\"6\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"14\" col=\"7\" style=\"background: ;\" expr=\"expr:parseInt(!isNaN(vatPurchTaxinv)? vatPurchTaxinv: 0)+parseInt(!isNaN(vatPurchPlnDeclOmi)? vatPurchPlnDeclOmi:0)+parseInt(!isNaN(vatBuyerTaxinv)? vatBuyerTaxinv:0)+parseInt(!isNaN(vatPurchEtcDeduct)? vatPurchEtcDeduct: 0)\"/><Cell row=\"15\" col=\"1\" colspan=\"3\" style=\"background: ;background2:#e0e0e0ff;\" text=\"공제받지못할 매입세액\"/><Cell row=\"15\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"16\"/><Cell row=\"15\" col=\"5\" style=\"background: ;\" text=\"bind:purchNonDeduct\"/><Cell row=\"15\" col=\"6\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"15\" col=\"7\" style=\"background: ;\" text=\"bind:vatPurchNonDeduct\"/><Cell row=\"16\" col=\"1\" colspan=\"3\" style=\"background: ;background2:#e0e0e0ff;\" text=\"차감계\"/><Cell row=\"16\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"17\"/><Cell row=\"16\" col=\"5\" style=\"background: ;\" expr=\"expr:(parseInt(!isNaN(purchTaxinv)? purchTaxinv: 0)+parseInt(!isNaN(purchFixedAssetTaxinv)? purchFixedAssetTaxinv: 0)+parseInt(!isNaN(purchPlnDeclOmi)? purchPlnDeclOmi:0)+parseInt(!isNaN(buyerTaxinv)? buyerTaxinv:0)+parseInt(!isNaN(purchEtcDeduct)? purchEtcDeduct: 0))-(!isNaN(this.grid.getCellValue(0,82))?this.grid.getCellValue(0,82):0)\"/><Cell row=\"16\" col=\"6\" style=\"background: ;\" text=\"나\"/><Cell row=\"16\" col=\"7\" style=\"background: ;\" expr=\"expr:(parseInt(!isNaN(vatPurchTaxinv)? vatPurchTaxinv: 0)+parseInt(!isNaN(vatPurchFixedAssetTaxinv)? vatPurchFixedAssetTaxinv: 0)+parseInt(!isNaN(vatPurchPlnDeclOmi)? vatPurchPlnDeclOmi:0)+parseInt(!isNaN(vatBuyerTaxinv)? vatBuyerTaxinv:0)+parseInt(!isNaN(vatPurchEtcDeduct)? vatPurchEtcDeduct: 0))-(!isNaN(this.grid.getCellValue(0,84))?this.grid.getCellValue(0,84):0)\"/><Cell row=\"17\" colspan=\"6\" style=\"background: ;background2:#e0e0e0ff;\" text=\"납부(환급)세액 (매출세액 가 - 매입세액 나)\"/><Cell row=\"17\" col=\"6\" style=\"background: ;\" text=\"다\"/><Cell row=\"17\" col=\"7\" style=\"background: ;\" expr=\"expr:parseInt(!isNaN(this.grid.getCellText(0,46))? this.grid.getCellText(0,46): 0)-parseInt(!isNaN(this.grid.getCellText(0,88))? this.grid.getCellText(0,88): 0)\"/><Cell row=\"18\" rowspan=\"3\" colspan=\"2\" style=\"background: ;background2:#e0e0e0ff;\" text=\"경감 공제세액\" wordwrap=\"english\"/><Cell row=\"18\" col=\"2\" colspan=\"2\" style=\"background: ;background2:#e0e0e0ff;\" text=\"기타경감 -공제세액\"/><Cell row=\"18\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"18\"/><Cell row=\"18\" col=\"5\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"18\" col=\"6\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"18\" col=\"7\" style=\"background: ;\" text=\"bind:vatEtcDeductReduct\"/><Cell row=\"19\" col=\"2\" colspan=\"2\" style=\"background: ;background2:#e0e0e0ff;\" text=\"신용카드 매출전표 등 발행공제등\"/><Cell row=\"19\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"19\"/><Cell row=\"19\" col=\"5\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"19\" col=\"6\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"19\" col=\"7\" style=\"background: ;\" text=\"bind:vatSalesCcardDeduct\"/><Cell row=\"20\" col=\"2\" colspan=\"2\" style=\"background: ;background2:#e0e0e0ff;\" text=\"합계\"/><Cell row=\"20\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"20\"/><Cell row=\"20\" col=\"5\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"20\" col=\"6\" style=\"background: ;\" text=\"라\"/><Cell row=\"20\" col=\"7\" style=\"background: ;\" text=\"0\"/><Cell row=\"21\" colspan=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"예정신고미환금세액\"/><Cell row=\"21\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"21\"/><Cell row=\"21\" col=\"5\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"21\" col=\"6\" style=\"background: ;\" text=\"마\"/><Cell row=\"21\" col=\"7\" style=\"background: ;\" text=\"bind:vatPlnDeclNonRefund\"/><Cell row=\"22\" colspan=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"예정고지세액\"/><Cell row=\"22\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"22\"/><Cell row=\"22\" col=\"5\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"22\" col=\"6\" style=\"background: ;\" text=\"바\"/><Cell row=\"22\" col=\"7\" style=\"background: ;\" text=\"bind:vatPlnNoti\"/><Cell row=\"23\" colspan=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"금지금 매입자 납부특례 기납부세액\"/><Cell row=\"23\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"23\"/><Cell row=\"23\" col=\"5\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"23\" col=\"6\" style=\"background: ;\" text=\"사\"/><Cell row=\"23\" col=\"7\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"24\" colspan=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"가산세액계\"/><Cell row=\"24\" col=\"4\" style=\"background: ;background2:#e0e0e0ff;\" text=\"24\"/><Cell row=\"24\" col=\"5\" celltype=\"summary\" style=\"background: ;\"/><Cell row=\"24\" col=\"6\" style=\"background: ;\" text=\"아\"/><Cell row=\"24\" col=\"7\" style=\"background: ;\" text=\"bind:vatSumTaxdef\"/><Cell row=\"25\" colspan=\"6\" style=\"background: ;background2:#e0e0e0ff;\" text=\"차가감하여 납부할 세액(환급받을 세액)(다-라-마-바-사+아)\"/><Cell row=\"25\" col=\"6\" style=\"background: ;background2:#e0e0e0ff;\" text=\"25\"/><Cell row=\"25\" col=\"7\" style=\"background: ;\" expr=\"expr:parseInt(!isNaN(this.grid.getCellText(0,46))? this.grid.getCellText(0,46): 0)-parseInt(!isNaN(this.grid.getCellText(0,88))? this.grid.getCellText(0,88): 0)\"/><Cell row=\"26\" colspan=\"7\" style=\"background: ;background2:#e0e0e0ff;\" text=\"총괄납부사업자 납부할 세액(환급받을 세액)\"/><Cell row=\"26\" col=\"7\" style=\"background: ;\" expr=\"expr:(parseInt(!isNaN(this.grid.getCellText(0,46))? this.grid.getCellText(0,46): 0)-parseInt(!isNaN(this.grid.getCellText(0,88))? this.grid.getCellText(0,88): 0))*-1\"/><Cell row=\"27\"/><Cell row=\"27\" col=\"1\"/><Cell row=\"27\" col=\"2\"/><Cell row=\"27\" col=\"3\"/><Cell row=\"27\" col=\"4\"/><Cell row=\"27\" col=\"5\"/><Cell row=\"27\" col=\"6\"/><Cell row=\"27\" col=\"7\"/></Band></Format></Formats>");
            this.aTVATDeclDiv.addChild(obj.name, obj);
            obj = new Spin("declYearSpin", "absolute", "8.9%", "10", null, "28", "81.37%", null, this.aTVATDeclDiv);
            obj.set_taborder("17");
            obj.set_value("2016");
            obj.set_max("2017");
            obj.set_min("2000");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 11 Dotum");
            this.aTVATDeclDiv.addChild(obj.name, obj);
            obj = new Combo("declPridCombo", "absolute", "27.04%", "8", null, "28", "67.35%", null, this.aTVATDeclDiv);
            this.aTVATDeclDiv.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_innerdataset("dsDeclPrid");
            obj.set_codecolumn("declPrid");
            obj.set_datacolumn("declPrid");
            obj.style.set_align("center middle");

            obj = new Div("titleBarDiv", "absolute", "0%", "4", "1237", "60", null, null, this);
            obj.set_taborder("1");
            obj.set_text("       부가가치세 조회");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.style.set_font("bold 15 Dotum");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Static("stc_state_divide06", "absolute", "2.8%", "81", null, "27", "90.24%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("신고 년도");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("stc_state_divide05", "absolute", "20.16%", "81", null, "27", "72.72%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("신고 기수");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("stc_state_divide02", "absolute", "46.8%", "90", null, "27", "46.08%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("부가가치세");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5  lefttop righttop");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("printStateBtn", "absolute", "1130", "720", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::printBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 691, this.aTVATDeclDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.aTVATDeclDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AT_VatDedSearchForm");
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
        this.addIncludeScript("AT_VatDedSearchForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("AT_VatDedSearchForm.xfdl", "scripts::commonBind.xjs");
        this.registerScript("AT_VatDedSearchForm.xfdl", function() {
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

        this.AT_VatDedSearchForm_onload = function(obj,e)
        {
        	//this.gfnBind();
        }

        /********************************************************************************
          세금 계산서 조회
        ********************************************************************************/

        //조회 기간 & 회계기수에 따른 조회
        this.aTVATDeclDiv_searchATVATDeclBtn_onclick = function(obj,e)
        {
        	var declYear = this.aTVATDeclDiv.declYearSpin.value;
        	var argument = "";
        	if(declYear != null){
        		argument = "DECL_YEAR='"+declYear+"'";
        	}
        	var declPrid = this.aTVATDeclDiv.declPridCombo.value;
        	if(declPrid != null){
        		argument = argument+" DECL_PRID='"+declPrid+"'";
        	}		
        	if(argument != ""){
        		this.dsService.setColumn(0,"argument",argument);
        	}
        	this.gfnService("findVATDeclList");
        }

        /********************************************************************************
          부가가치세 계산
        ********************************************************************************/

        // 세금 계산서 조회에 따른 부가가치세 계산
        this.vatCallBack = function(strSvcID,nErrorCode,strErrorMag){
        	if(strSvcID == "findVATDeclList" && nErrorCode == 1){
        		alert(this.dsVATDecl.rowcount);
        		if(this.dsVATDecl.rowcount == 0){
        			alert("조회된 세금 계산서가 없습니다.");
        		}
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AT_VatDedSearchForm_onload, this);
            this.aTVATDeclDiv.searchATVATDeclBtn.addEventHandler("onclick", this.aTVATDeclDiv_searchATVATDeclBtn_onclick, this);
            this.aTVATDeclDiv.declYearSpin.addEventHandler("ontextchanged", this.taxinvDiv_declYearSpin_ontextchanged, this);
            this.aTVATDeclDiv.declPridCombo.addEventHandler("onitemchanged", this.taxinvDiv_declPridCombo_onitemchanged, this);
            this.stc_state_divide06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_state_divide05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_state_divide02.addEventHandler("onclick", this.subCodeStc_onclick, this);

        };

        this.loadIncludeScript("AT_VatDedSearchForm.xfdl");

       
    };
}
)();

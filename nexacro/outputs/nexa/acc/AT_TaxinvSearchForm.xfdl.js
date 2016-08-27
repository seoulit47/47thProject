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
                this.set_name("AT_TaxinvSearchForm");
                this.set_classname("AT_TaxinvSearchForm");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearchCondition", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"tableName\" type=\"STRING\" size=\"256\"/><Column id=\"columnName\" type=\"STRING\" size=\"256\"/><Column id=\"columnValue\" type=\"STRING\" size=\"256\"/><Column id=\"operator\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTaxInv", this);
            obj._setContents("<ColumnInfo><Column id=\"pubDate\" type=\"undefined\" size=\"100\"/><Column id=\"taxAmt\" type=\"undefined\" size=\"100\"/><Column id=\"splyPrice\" type=\"undefined\" size=\"100\"/><Column id=\"pubNo\" type=\"undefined\" size=\"100\"/><Column id=\"custCd\" type=\"undefined\" size=\"100\"/><Column id=\"pubDiv\" type=\"undefined\" size=\"100\"/><Column id=\"abs\" type=\"undefined\" size=\"100\"/><Column id=\"anspDiv\" type=\"undefined\" size=\"100\"/><Column id=\"sumPrice\" type=\"undefined\" size=\"100\"/><Column id=\"slipNo\" type=\"undefined\" size=\"100\"/><Column id=\"gipyoDate\" type=\"undefined\" size=\"100\"/><Column id=\"resolNo\" type=\"undefined\" size=\"100\"/><Column id=\"billDiv\" type=\"undefined\" size=\"100\"/><Column id=\"purchSalesDiv\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
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

            obj = new Dataset("dsPubDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsCust", this);
            obj._setContents("<ColumnInfo><Column id=\"accNo\" type=\"undefined\" size=\"100\"/><Column id=\"telNo\" type=\"undefined\" size=\"100\"/><Column id=\"bussNo\" type=\"undefined\" size=\"100\"/><Column id=\"bankCd\" type=\"undefined\" size=\"100\"/><Column id=\"busCtgNm\" type=\"undefined\" size=\"100\"/><Column id=\"faxNo\" type=\"undefined\" size=\"100\"/><Column id=\"prsdntNm\" type=\"undefined\" size=\"100\"/><Column id=\"custCd\" type=\"undefined\" size=\"100\"/><Column id=\"adptDt\" type=\"undefined\" size=\"100\"/><Column id=\"addr\" type=\"undefined\" size=\"100\"/><Column id=\"resNo\" type=\"undefined\" size=\"100\"/><Column id=\"busShpNm\" type=\"undefined\" size=\"100\"/><Column id=\"custNm\" type=\"undefined\" size=\"100\"/><Column id=\"zipCd\" type=\"undefined\" size=\"100\"/><Column id=\"dpstr\" type=\"undefined\" size=\"100\"/><Column id=\"cardYn\" type=\"undefined\" size=\"100\"/><Column id=\"gpUseYn\" type=\"undefined\" size=\"100\"/><Column id=\"riUseYn\" type=\"undefined\" size=\"100\"/><Column id=\"hospCls\" type=\"undefined\" size=\"100\"/><Column id=\"useYn\" type=\"undefined\" size=\"100\"/><Column id=\"gdUseYn\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYN", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN\">Y</Col></Row><Row><Col id=\"YN\">N</Col></Row></Rows>");
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

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findTaxInvList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/vat/findTaxInvList.do</Col><Col id=\"callbackFunc\">texinvCallBack</Col><Col id=\"outData\">dsTaxInv=dsTaxInv dsDetailTaxInv=dsDetailTaxInv</Col></Row><Row><Col id=\"serviceID\">batchAtTaxInvProcess</Col><Col id=\"URL\">his::acc/vat/batchAtTaxInvProcess.do</Col><Col id=\"inData\">dsTaxInv=dsTaxInv:U dsDetailTaxInv=dsDetailTaxInv:U</Col><Col id=\"callbackFunc\">texinvCallBack</Col></Row><Row><Col id=\"serviceID\">findCustList</Col><Col id=\"URL\">his::log/base/findCustList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsCust=dsCust</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDetailTaxInv", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"undefined\" size=\"100\"/><Column id=\"pubDate\" type=\"undefined\" size=\"100\"/><Column id=\"taxAmt\" type=\"undefined\" size=\"100\"/><Column id=\"splyPrice\" type=\"undefined\" size=\"100\"/><Column id=\"stand\" type=\"undefined\" size=\"100\"/><Column id=\"pubNo\" type=\"undefined\" size=\"100\"/><Column id=\"dedYn\" type=\"undefined\" size=\"100\"/><Column id=\"qnt\" type=\"undefined\" size=\"100\"/><Column id=\"fm\" type=\"undefined\" size=\"100\"/><Column id=\"price\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "0%", "4", "1229", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("       세금계산서 관리");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.style.set_font("bold 15 Dotum");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv2", "absolute", "1.92%", "153", null, "28", "91.76%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("매입/매출");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("purchSaleCombo", "absolute", "8.96%", "153", null, "28", "83.68%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("dsPurchSalesDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Static("stDiv4", "absolute", "1.92%", "117", null, "28", "91.68%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("발행구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("pubCombo", "absolute", "8.96%", "118", null, "28", "83.68%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("dsPubDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Combo("billCombo", "absolute", "24%", "120", null, "28", "68.64%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("dsBillDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Static("stDiv1", "absolute", "16.96%", "119", null, "28", "76.64%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("계산서 구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ask_date", "absolute", "1.92%", "81", null, "28", "91.68%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("신청일자");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("startDayCal", "absolute", "8.96%", "81", null, "28", "81.36%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");

            obj = new Calendar("endDayCal", "absolute", "21.68%", "81", null, "28", "68.64%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");

            obj = new Static("stc_acnt_sub01", "absolute", "19.44%", "82", null, "31", "78.4%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("searchAtaxinvBtn", "absolute", "280", "152", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("taxinvGrid", "absolute", "2%", "194", null, "524", "68.72%", null, this);
            obj.set_taborder("12");
            obj.set_binddataset("dsTaxInv");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"발행일자\"/><Cell col=\"1\" text=\"발행번호\"/><Cell col=\"2\" text=\"발행구분\"/><Cell col=\"3\" text=\"계산서구분\"/><Cell col=\"4\" text=\"매입/매출\"/></Band><Band id=\"body\"><Cell text=\"bind:pubDate\"/><Cell col=\"1\" text=\"bind:pubNo\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:pubDiv\" combodataset=\"dsPubDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:billDiv\" combodataset=\"dsBillDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:purchSalesDiv\" combodataset=\"dsPurchSalesDiv\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("taxinvDiv", "absolute", "31.84%", "77", null, "640", "0.64%", null, this);
            obj.set_taborder("13");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Combo("billCombo", "absolute", "11.52%", "11", null, "28", "74.11%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@dsBillDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Combo("pubCombo", "absolute", "37.17%", "11", null, "28", "48.46%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@dsPubDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Combo("purchSalesComb", "absolute", "62.83%", "11", null, "28", "22.8%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@dsPurchSalesDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Edit("slipNoEd", "absolute", "11.52%", "47", null, "28", "74.23%", null, this.taxinvDiv);
            obj.set_taborder("3");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Edit("ResolNoEd", "absolute", "37.17%", "46", null, "28", "48.57%", null, this.taxinvDiv);
            obj.set_taborder("4");
            this.taxinvDiv.addChild(obj.name, obj);
            obj = new Calendar("gipyoDateCal", "absolute", "83.37%", "82", null, "28", "1.66%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("5");

            obj = new Static("stDiv03", "absolute", "32.64%", "88", null, "28", "60.96%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("계산서 구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv05", "absolute", "67.36%", "89", null, "28", "26.32%", null, this);
            obj.getSetter("taborder").set("16");
            obj.set_text("매입/매출");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv06", "absolute", "50%", "89", null, "28", "43.6%", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("발행구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv07", "absolute", "32.56%", "124", null, "28", "61.04%", null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("전표 번호");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv08", "absolute", "49.92%", "128", null, "28", "43.76%", null, this);
            obj.getSetter("taborder").set("21");
            obj.set_text("결의 번호");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv5", "absolute", "32.72%", "160", null, "60", "21.84%", null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("세금계산서");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv01", "absolute", "32.8%", "229", null, "125", "64.16%", null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("         공            급            받            는            자      ");
            obj.set_wordwrap("english");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv12", "absolute", "36.56%", "229", null, "28", "55.44%", null, this);
            obj.getSetter("taborder").set("24");
            obj.set_text("상호(법인명)");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "53.92%", "229", null, "28", "38.4%", null, this);
            obj.getSetter("taborder").set("25");
            obj.set_text("성명(대표자)");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "36.56%", "278", null, "28", "55.44%", null, this);
            obj.getSetter("taborder").set("26");
            obj.set_text("사업장 주소 ");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "36.72%", "323", null, "28", "55.28%", null, this);
            obj.getSetter("taborder").set("27");
            obj.set_text("업태");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc05", "absolute", "54%", "323", null, "28", "38.4%", null, this);
            obj.getSetter("taborder").set("28");
            obj.set_text("종목");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc07", "absolute", "32.88%", "363", null, "28", "53.28%", null, this);
            obj.getSetter("taborder").set("29");
            obj.set_text("작성일자");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc12", "absolute", "47.68%", "363", null, "28", "31.84%", null, this);
            obj.getSetter("taborder").set("30");
            obj.set_text("공급가액");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("pubDateCal", "absolute", "32.88%", "399", null, "28", "53.2%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("31");

            obj = new Static("subCodeStc13", "absolute", "68.88%", "363", null, "28", "10.48%", null, this);
            obj.getSetter("taborder").set("32");
            obj.set_text("세액");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc14", "absolute", "90.24%", "363", null, "28", "2%", null, this);
            obj.getSetter("taborder").set("33");
            obj.set_text("비고");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("AtDetailTaxinvGrid", "absolute", "32.88%", "434", null, "156", "2.08%", null, this);
            obj.set_taborder("34");
            obj.set_binddataset("dsDetailTaxInv");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"발행일자\"/><Cell col=\"2\" text=\"공제여부\"/><Cell col=\"3\" colspan=\"2\" text=\"품목\"/><Cell col=\"5\" text=\"규격\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"수량\"/><Cell col=\"8\" text=\"공급가액\"/><Cell col=\"9\" text=\"세액\"/></Band><Band id=\"body\"><Cell text=\"bind:no\"/><Cell col=\"1\" edittype=\"date\" text=\"bind:pubDate\"/><Cell col=\"2\" edittype=\"combo\" text=\"bind:dedYn\"/><Cell col=\"3\" text=\"bind:fm\"/><Cell col=\"4\" displaytype=\"image\"/><Cell col=\"5\" text=\"bind:stand\"/><Cell col=\"6\" text=\"bind:price\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:qnt\"/><Cell col=\"8\" text=\"bind:splyPrice\"/><Cell col=\"9\" text=\"bind:taxAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc10", "absolute", "33.04%", "638", null, "28", "55.6%", null, this);
            obj.getSetter("taborder").set("35");
            obj.set_text("합계금액");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc16", "absolute", "45.12%", "638", null, "28", "46.72%", null, this);
            obj.getSetter("taborder").set("36");
            obj.set_text("현금");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc11", "absolute", "54.08%", "638", null, "28", "37.76%", null, this);
            obj.getSetter("taborder").set("37");
            obj.set_text("수표");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc15", "absolute", "62.88%", "638", null, "28", "28.96%", null, this);
            obj.getSetter("taborder").set("38");
            obj.set_text("어음");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc06", "absolute", "71.76%", "638", null, "28", "20.8%", null, this);
            obj.getSetter("taborder").set("39");
            obj.set_text("외상미수금");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc17", "absolute", "80%", "638", null, "62", "2.16%", null, this);
            obj.getSetter("taborder").set("40");
            obj.set_text("이 금액을                       함");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("anspDivCombo", "absolute", "1083", "654", "77", "28", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_innerdataset("dsAnspDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Button("checkBtn", "absolute", "1574", "746", "90", "32", null, null, this);
            obj.set_taborder("42");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::okBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv3", "absolute", "78.8%", "160", null, "28", "12.64%", null, this);
            obj.getSetter("taborder").set("43");
            obj.set_text("기표일자");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv02", "absolute", "78.88%", "191", null, "28", "12.72%", null, this);
            obj.getSetter("taborder").set("44");
            obj.set_text("발행번호 ");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("addDetailTaxInvBtn", "absolute", "1033", "597", "90", "32", null, null, this);
            obj.set_taborder("46");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deleteDetailTaxInvBtn", "absolute", "1136", "597", "90", "32", null, null, this);
            obj.set_taborder("47");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd05", "absolute", "47.6%", "399", null, "28", "31.68%", null, this);
            obj.set_taborder("52");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("salesCustnmEd", "absolute", "45.36%", "229", null, "28", "46.56%", null, this);
            obj.set_taborder("54");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("salesPrsdntnmEd", "absolute", "62.24%", "229", null, "28", "29.68%", null, this);
            obj.set_taborder("55");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("salesAddrEd", "absolute", "45.36%", "278", null, "28", "29.76%", null, this);
            obj.set_taborder("56");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("salesBusctgnmEd", "absolute", "62.24%", "323", null, "28", "18.8%", null, this);
            obj.set_taborder("57");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("salesBussHpnmEd", "absolute", "45.36%", "323", null, "28", "46.56%", null, this);
            obj.set_taborder("58");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd07", "absolute", "68.96%", "399", null, "28", "10.48%", null, this);
            obj.set_taborder("59");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd08", "absolute", "90.16%", "399", null, "28", "2%", null, this);
            obj.set_taborder("60");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd09", "absolute", "33.04%", "674", null, "28", "55.52%", null, this);
            obj.set_taborder("61");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd19", "absolute", "45.12%", "674", null, "28", "46.64%", null, this);
            obj.set_taborder("62");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd10", "absolute", "54.08%", "674", null, "28", "37.68%", null, this);
            obj.set_taborder("63");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd18", "absolute", "62.96%", "674", null, "28", "28.8%", null, this);
            obj.set_taborder("64");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd11", "absolute", "71.84%", "674", null, "28", "20.72%", null, this);
            obj.set_taborder("65");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("searchCustBtn", "absolute", "886", "227", "32", "32", null, null, this);
            obj.set_taborder("66");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            obj.set_cssclass("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Button("printStateBtn", "absolute", "1038", "726", "90", "32", null, null, this);
            obj.set_taborder("67");
            obj.style.set_background("@gradation URL('img::printBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deleteTaxInvBtn", "absolute", "302", "726", "90", "32", null, null, this);
            obj.set_taborder("69");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("pubNoEd", "absolute", "88.08%", "192", null, "28", "1.84%", null, this);
            obj.set_taborder("70");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("batchTaxInvBtn", "absolute", "1132", "726", "110", "32", null, null, this);
            obj.set_taborder("71");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addTaxInvBtn", "absolute", "207", "726", "90", "32", null, null, this);
            obj.set_taborder("72");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1229, 60, this.titleBarDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("       세금계산서 관리");
            		p.style.set_align("left middle");
            		p.style.set_background("transparent URL('img::titleBar6.jpg')");
            		p.style.set_font("bold 15 Dotum");
            		p.set_cssclass("TStc");

            	}
            );
            this.titleBarDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 640, this.taxinvDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
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
            		p.set_classname("AT_TaxinvSearchForm");
            		p.set_titletext("New Form");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","taxinvDiv.billCombo","value","dsTaxInv","billDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","taxinvDiv.pubCombo","value","dsTaxInv","pubDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","taxinvDiv.purchSalesComb","value","dsTaxInv","purchSalesDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","taxinvDiv.slipNoEd","value","dsTaxInv","slipNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","taxinvDiv.ResolNoEd","value","dsTaxInv","resolNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","pubDateCal","value","dsDetailTaxInv","pubDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","assetNoEd05","value","dsTaxInv","splyPrice");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","assetNoEd07","value","dsTaxInv","taxAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","assetNoEd08","value","dsTaxInv","abs");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","taxinvDiv.gipyoDateCal","value","dsTaxInv","gipyoDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","pubNoEd","value","dsTaxInv","pubNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","assetNoEd09","value","dsTaxInv","sumPrice");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","anspDivCombo","value","dsTaxInv","anspDiv");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AT_TaxinvSearchForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("AT_TaxinvSearchForm.xfdl", "scripts::commonPopup.xjs");
        this.registerScript("AT_TaxinvSearchForm.xfdl", function() {
         /********************************************************************************
        *                                                                               *
        * 자산분류 코드            												    *
        *                                                                               *
        * @Path		    세금계산서 관리							                 	*
        * @Description  부가가치세 신고를 위한 세금계산서 관리 	                *
        * 																				*
        *																				*
        * @Author	 정재욱    					                             		*
        * 									                                            *
        * Created on 2016. 06. 07                           		                    *
        *									                                            *
        ********************************************************************************/

        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include "scripts::commonTransaction.xjs";	// 트랜잭션 스크립트
        //include "scripts::commonPopup.xjs";

        /********************************************************************************
          폼 로드 이벤트
        ********************************************************************************/
        this.AT_TaxinvSearchForm_onload = function(obj,e)
        {
        	this.gfnBind();
        	this.gfnService("findCustList");
        	this.gfnService("findTaxInvList");
        }

        // 조회버튼 클릭이벤트
        this.searchAtaxinvBtn_onclick = function(obj,e)
        {	
        	var argument = "";
        	if(this.startDayCal.value != null){
        		var startDay = this.startDayCal.value;
        		argument = "startPubDate='"+startDay+"'";
        	}
        	if(this.endDayCal.value != null){
        		var endDay = this.endDayCal.value;
        		argument = argument+" endPubDate='"+endDay+"'";
        	}
        	if(this.pubCombo.value != null){
        		var pub = this.pubCombo.value;	
        		argument = argument+" pubDiv='"+pub+"'";
        	}
        	if(this.billCombo.value != null){
        		var bill = this.billCombo.value;
        		argument = argument+" billDiv='"+bill+"'";
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

        // dsDetailTaxInv 데이터값 변경시 실행 함수(수량 선택, 품목 선택시 세금 공급가액 계산)
        this.dsDetailTaxInv_onvaluechanged = function(obj,e)
        {
        	var totalSplyPrice = 0;
        	var totalTaxAmt = 0;
        	for(i=0;i<this.dsDetailTaxInv.rowcount;i++){
        		var price = this.dsDetailTaxInv.getColumn(i,"price");
        		var qnt = this.dsDetailTaxInv.getColumn(i,"qnt");
        		if(price != null && qnt != null){
        			var toIntPrice = parseInt(price);
        			var tointQnt = parseInt(qnt);
        			this.dsDetailTaxInv.setColumn(i,"splyPrice",toIntPrice*tointQnt);
        			this.dsDetailTaxInv.setColumn(i,"taxAmt",toIntPrice*tointQnt/10);
        			var totalSplyPrice = totalSplyPrice+(toIntPrice*tointQnt);
        			var totalTaxAmt = totalTaxAmt+(toIntPrice*tointQnt/10);
        		}
        	}
        	this.dsTaxInv.setColumn(this.dsTaxInv.rowposition,"splyPrice",totalSplyPrice);
        	this.dsTaxInv.setColumn(this.dsTaxInv.rowposition,"taxAmt",totalTaxAmt);
        	this.dsTaxInv.setColumn(this.dsTaxInv.rowposition,"sumPrice",totalTaxAmt+totalSplyPrice);
        }

        // taxinvGrid 그리드 셀 클릭이벤트
        this.taxinvGrid_oncellclick = function(obj,e)
        {
        	var row = this.dsTaxInv.rowposition;
        	var ps = this.dsTaxInv.getColumn(row,"purchSalesDiv");
        	if(ps == 1){//매출
        		this.stDiv01.set_text("         공            급            받            는            자      ");
        	}else if(ps == 2){//매입
        		this.stDiv01.set_text("  공            급          자 ");
        	}
        	var custCd = this.dsTaxInv.getColumn(row,"custCd");
        	var findRow = this.dsCust.findRow("custCd",custCd);
        	this.dsCust.set_rowposition(findRow);
        }

        //  taxinvGrid 그리드 선택영역 변경시 이벤트
        this.taxinvGrid_onselectchanged = function(obj,e)
        {
        	var pubNo = this.dsTaxInv.getColumn(this.dsTaxInv.rowposition,'pubNo');
        	this.dsDetailTaxInv.filter("pubNo == '" + pubNo + "'");
        }

        // 거래처 조회 버튼 클릭이벤트
        this.searchCustBtn_onclick = function(obj,e)
        {
        	var searchSalesFrame = new ChildFrame();  
        	searchSalesFrame.init("searchSalesFrame", "absolute", 30, 30, 500, 450, null, null, "acc::CM_CustSubForm.xfdl");
        	this.addChild("searchSalesFrame", searchSalesFrame);
        	searchSalesFrame.show(application.getActiveFrame());
        }

        // 상세그리드 셀 더블클릭이벤트
        this.AtDetailTaxinvGrid_oncelldblclick = function(obj,e)
        {
        // 	if(obj.getCellPos() == 4){
        // 		application.open("searchGdsForm","acc::LC_GdsSubForm.xfdl",this.parent,{},"showtitlebar=true showstatusbar=false", 0, 0, 736, 443, this);
        // 	}
        }

        // 상세추가 버튼 클릭이벤트
        this.addDetailTaxInvBtn_onclick = function(obj,e)
        {
        	var row = this.dsDetailTaxInv.addRow();
        	this.dsDetailTaxInv.setColumn(row,"no",row+1);
        	this.dsDetailTaxInv.setColumn(row,"pubNo",this.pubNoEd.value);	
        }

        // 상세삭제 버튼 클릭이벤트
        this.deleteDetailTaxInvBtn_onclick = function(obj,e)
        {
        	this.dsDetailTaxInv.deleteRow(this.dsDetailTaxInv.rowposition);	
        }

        // 세금계산서 삭제 클릭이벤트
        this.deleteTaxInvBtn_onclick = function(obj,e)
        {
        	this.dsTaxInv.deleteRow(this.dsTaxInv.rowposition);
        }

        

        // 세금계산서 출력버튼 클릭이벤트
        this.printStateBtn_onclick = function(obj,e)
        {
        	alert("출력합니다~");
        }

        // 세금계산서 일괄처리버튼 클릭이벤트
        this.batchTaxInvBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchAtTaxInvProcess");
        }

        // 세금계산서 추가버튼 클릭이벤트
        this.addTaxInvBtn_onclick = function(obj,e)
        {
        	
        }

        

        

        

        

        

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsDetailTaxInv.addEventHandler("onvaluechanged", this.dsDetailTaxInv_onvaluechanged, this);
            this.addEventHandler("onload", this.AT_TaxinvSearchForm_onload, this);
            this.pubCombo.addEventHandler("onitemchanged", this.grpDiv_cardKndCB01_onitemchanged, this);
            this.searchAtaxinvBtn.addEventHandler("onclick", this.searchAtaxinvBtn_onclick, this);
            this.taxinvGrid.addEventHandler("oncellclick", this.taxinvGrid_oncellclick, this);
            this.taxinvGrid.addEventHandler("onselectchanged", this.taxinvGrid_onselectchanged, this);
            this.taxinvDiv.gipyoDateCal.addEventHandler("onchanged", this.taxinvDiv_gipyoDateCal_onchanged, this);
            this.AtDetailTaxinvGrid.addEventHandler("oncelldblclick", this.AtDetailTaxinvGrid_oncelldblclick, this);
            this.checkBtn.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.addDetailTaxInvBtn.addEventHandler("onclick", this.addDetailTaxInvBtn_onclick, this);
            this.deleteDetailTaxInvBtn.addEventHandler("onclick", this.deleteDetailTaxInvBtn_onclick, this);
            this.searchCustBtn.addEventHandler("onclick", this.searchCustBtn_onclick, this);
            this.printStateBtn.addEventHandler("onclick", this.printStateBtn_onclick, this);
            this.deleteTaxInvBtn.addEventHandler("onclick", this.deleteTaxInvBtn_onclick, this);
            this.batchTaxInvBtn.addEventHandler("onclick", this.batchTaxInvBtn_onclick, this);
            this.addTaxInvBtn.addEventHandler("onclick", this.addTaxInvBtn_onclick, this);

        };

        this.loadIncludeScript("AT_TaxinvSearchForm.xfdl");

       
    };
}
)();

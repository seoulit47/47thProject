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
                this.set_name("AT_TaxinvForm");
                this.set_classname("AT_TaxinvForm");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYN", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN\">Y</Col></Row><Row><Col id=\"YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDetailTaxInv", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"undefined\" size=\"100\"/><Column id=\"pubDate\" type=\"undefined\" size=\"100\"/><Column id=\"taxAmt\" type=\"undefined\" size=\"100\"/><Column id=\"splyPrice\" type=\"undefined\" size=\"100\"/><Column id=\"stand\" type=\"undefined\" size=\"100\"/><Column id=\"pubNo\" type=\"undefined\" size=\"100\"/><Column id=\"dedYn\" type=\"undefined\" size=\"100\"/><Column id=\"qnt\" type=\"undefined\" size=\"100\"/><Column id=\"fm\" type=\"undefined\" size=\"100\"/><Column id=\"price\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
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

            obj = new Dataset("dsAnspDiv", this);
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

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findTaxInvList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/vat/findTaxInvList.do</Col><Col id=\"callbackFunc\">texinvCallBack</Col><Col id=\"outData\">dsTaxInv=dsTaxInv dsDetailTaxInv=dsDetailTaxInv</Col></Row><Row><Col id=\"serviceID\">batchAtTaxInvProcess</Col><Col id=\"URL\">his::acc/vat/batchAtTaxInvProcess.do</Col><Col id=\"inData\">dsTaxInv=dsTaxInv:U dsDetailTaxInv=dsDetailTaxInv:U</Col><Col id=\"callbackFunc\">texinvCallBack</Col></Row><Row><Col id=\"serviceID\">findAccount</Col><Col id=\"URL\">his::acc/resol/findAccount.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAccount=dsAccount</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAccount", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"custNm\" type=\"STRING\" size=\"256\"/><Column id=\"adptdt\" type=\"STRING\" size=\"256\"/><Column id=\"bussNo\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"faxNo\" type=\"STRING\" size=\"256\"/><Column id=\"bankCd\" type=\"STRING\" size=\"256\"/><Column id=\"accNo\" type=\"STRING\" size=\"256\"/><Column id=\"busctgNm\" type=\"STRING\" size=\"256\"/><Column id=\"busshpNm\" type=\"STRING\" size=\"256\"/><Column id=\"prsdntNm\" type=\"STRING\" size=\"256\"/><Column id=\"resNo\" type=\"STRING\" size=\"256\"/><Column id=\"dpstr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"gpuseYn\" type=\"STRING\" size=\"256\"/><Column id=\"gduseYn\" type=\"STRING\" size=\"256\"/><Column id=\"cardYn\" type=\"STRING\" size=\"256\"/><Column id=\"riuseYn\" type=\"STRING\" size=\"256\"/><Column id=\"hospcls\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "0%", "4", "1224", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("       세금계산서 등록");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.style.set_font("bold 15 Dotum");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Div("taxinvDiv", "absolute", "1.76%", "77", null, "643", "1.68%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Combo("billComb", "absolute", "11.95%", "10", null, "28", "74.61%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@dsBillDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Combo("purchSalesComb", "absolute", "40.75%", "10", null, "28", "45.81%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@dsPurchSalesDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Combo("pubComb", "absolute", "69.79%", "10", null, "28", "16.76%", null, this.taxinvDiv);
            this.taxinvDiv.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@dsPubDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Edit("ResolNoEd", "absolute", "40.66%", "50", null, "28", "45.89%", null, this.taxinvDiv);
            obj.set_taborder("3");
            this.taxinvDiv.addChild(obj.name, obj);

            obj = new Static("stDiv1", "absolute", "2.96%", "88", null, "28", "87.44%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("계산서 구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv2", "absolute", "30.88%", "88", null, "28", "59.6%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("매입/매출");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv4", "absolute", "58.96%", "88", null, "28", "31.44%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("발행구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv00", "absolute", "2.96%", "128", null, "28", "87.44%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("전표 번호");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv03", "absolute", "30.88%", "128", null, "28", "59.6%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("결의 번호");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv5", "absolute", "2.96%", "163", null, "60", "27.52%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("세금계산서");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv8", "absolute", "3.04%", "232", null, "125", "93.92%", null, this);
            obj.getSetter("taborder").set("11");
            obj.set_text("         공           급        자");
            obj.set_wordwrap("english");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv9", "absolute", "6.96%", "232", null, "28", "85.04%", null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("상호(법인명)");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "6.96%", "281", null, "28", "85.04%", null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("사업장 주소 ");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "7.04%", "326", null, "28", "84.96%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("업태");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc08", "absolute", "26.56%", "232", null, "28", "65.44%", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("성명(대표자)");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc09", "absolute", "26.56%", "326", null, "28", "65.44%", null, this);
            obj.getSetter("taborder").set("16");
            obj.set_text("종목");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv01", "absolute", "49.92%", "232", null, "125", "47.04%", null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("         공           급           받           는        자");
            obj.set_wordwrap("english");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv12", "absolute", "53.68%", "232", null, "28", "38.32%", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("상호(법인명)");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "73.36%", "232", null, "28", "18.64%", null, this);
            obj.getSetter("taborder").set("19");
            obj.set_text("성명(대표자)");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "53.68%", "281", null, "28", "38.32%", null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("사업장 주소 ");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "53.84%", "326", null, "28", "38.16%", null, this);
            obj.getSetter("taborder").set("21");
            obj.set_text("업태");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc05", "absolute", "73.36%", "326", null, "28", "18.64%", null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("종목");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc07", "absolute", "3.12%", "365", null, "28", "84.96%", null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("작성일자");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc12", "absolute", "15.76%", "365", null, "28", "54.8%", null, this);
            obj.getSetter("taborder").set("24");
            obj.set_text("공급가액");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("pubDateCal", "absolute", "3.12%", "401", null, "28", "84.88%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");

            obj = new Static("subCodeStc13", "absolute", "50%", "365", null, "28", "20.48%", null, this);
            obj.getSetter("taborder").set("26");
            obj.set_text("세액");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc14", "absolute", "80.24%", "365", null, "28", "3.04%", null, this);
            obj.getSetter("taborder").set("27");
            obj.set_text("비고");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("AtDetailTaxinvGrid", "absolute", "3.12%", "436", null, "164", "3.04%", null, this);
            obj.set_taborder("28");
            obj.set_binddataset("dsAtDetailTaxinv");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"발행일자\"/><Cell col=\"2\" text=\"공제여부\"/><Cell col=\"3\" colspan=\"2\" text=\"품목\"/><Cell col=\"5\" text=\"규격\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"수량\"/><Cell col=\"8\" text=\"공급가액\"/><Cell col=\"9\" text=\"세액\"/></Band><Band id=\"body\"><Cell text=\"bind:no\"/><Cell col=\"1\" edittype=\"date\" text=\"bind:pubDate\"/><Cell col=\"2\" edittype=\"combo\" text=\"bind:dedYn\" combodataset=\"dsYN\" combocodecol=\"YN\" combodatacol=\"YN\"/><Cell col=\"3\" text=\"bind:fm\"/><Cell col=\"4\" displaytype=\"image\"/><Cell col=\"5\" text=\"bind:stand\"/><Cell col=\"6\" text=\"bind:price\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:qnt\"/><Cell col=\"8\" text=\"bind:splyPrice\"/><Cell col=\"9\" text=\"bind:taxAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc10", "absolute", "3.2%", "647", null, "28", "81.6%", null, this);
            obj.getSetter("taborder").set("29");
            obj.set_text("합계금액");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc16", "absolute", "19.2%", "647", null, "28", "69.44%", null, this);
            obj.getSetter("taborder").set("30");
            obj.set_text("현금");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc11", "absolute", "31.36%", "647", null, "28", "57.28%", null, this);
            obj.getSetter("taborder").set("31");
            obj.set_text("수표");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc15", "absolute", "43.36%", "647", null, "28", "45.28%", null, this);
            obj.getSetter("taborder").set("32");
            obj.set_text("어음");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc06", "absolute", "55.44%", "647", null, "28", "33.2%", null, this);
            obj.getSetter("taborder").set("33");
            obj.set_text("외상미수금");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc17", "absolute", "67.6%", "647", null, "62", "3.12%", null, this);
            obj.getSetter("taborder").set("34");
            obj.set_text("이 금액을                       함");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("pubComb00", "absolute", "1000", "663", "102", "28", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_innerdataset("dsAnspDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Static("stDiv3", "absolute", "73.44%", "163", null, "28", "18.56%", null, this);
            obj.getSetter("taborder").set("37");
            obj.set_text("기표일자");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv02", "absolute", "73.44%", "195", null, "28", "18.56%", null, this);
            obj.getSetter("taborder").set("38");
            obj.set_text("발행번호 ");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("gipyoDateCal", "absolute", "82.16%", "163", null, "28", "7.84%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("39");

            obj = new Button("ATDetailTaxinAddBtn", "absolute", "1017", "608", "90", "32", null, null, this);
            obj.set_taborder("40");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("ATDetailTaxinDelBtn", "absolute", "1120", "608", "90", "32", null, null, this);
            obj.set_taborder("41");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("slipNoEd", "absolute", "13.28%", "129", null, "28", "73.68%", null, this);
            obj.set_taborder("42");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("searchSlipNoBtn", "absolute", "341", "127", "32", "32", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchResolNoBtn", "absolute", "687", "127", "32", "32", null, null, this);
            obj.set_taborder("45");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("salesCustnmEd", "absolute", "15.68%", "232", null, "28", "74.24%", null, this);
            obj.set_taborder("46");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("salesPrsdntnmEd", "absolute", "35.28%", "232", null, "28", "54.64%", null, this);
            obj.set_taborder("47");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("searchSalesBtn", "absolute", "573", "230", "32", "32", null, null, this);
            obj.set_taborder("48");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("salesAddrEd", "absolute", "15.68%", "281", null, "28", "54.64%", null, this);
            obj.set_taborder("49");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("salesBussHpnmEd", "absolute", "15.68%", "327", null, "28", "74.24%", null, this);
            obj.set_taborder("50");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("salesBusctgnmEd", "absolute", "35.28%", "327", null, "28", "54.64%", null, this);
            obj.set_taborder("51");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("splyPriceEd", "absolute", "15.68%", "401", null, "28", "54.64%", null, this);
            obj.set_taborder("52");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("pubNoEd", "absolute", "82.16%", "195", null, "28", "7.84%", null, this);
            obj.set_taborder("53");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("purchCustnmEd", "absolute", "62.48%", "232", null, "28", "27.44%", null, this);
            obj.set_taborder("54");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("purchPrsdntnmEd", "absolute", "82.16%", "232", null, "28", "7.76%", null, this);
            obj.set_taborder("55");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("purchAddrEd", "absolute", "62.48%", "281", null, "28", "7.84%", null, this);
            obj.set_taborder("56");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("purchBusctgnmEd", "absolute", "82.16%", "326", null, "28", "7.76%", null, this);
            obj.set_taborder("57");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("purchBussHpnmEd", "absolute", "62.48%", "326", null, "28", "27.44%", null, this);
            obj.set_taborder("58");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("taxAmtEd", "absolute", "50.08%", "401", null, "28", "20.4%", null, this);
            obj.set_taborder("59");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("absEd", "absolute", "80.16%", "401", null, "28", "3.04%", null, this);
            obj.set_taborder("60");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd09", "absolute", "3.2%", "683", null, "28", "81.52%", null, this);
            obj.set_taborder("61");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd19", "absolute", "19.2%", "683", null, "28", "69.36%", null, this);
            obj.set_taborder("62");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd10", "absolute", "31.36%", "683", null, "28", "57.2%", null, this);
            obj.set_taborder("63");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd18", "absolute", "43.44%", "683", null, "28", "45.12%", null, this);
            obj.set_taborder("64");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("assetNoEd11", "absolute", "55.52%", "683", null, "28", "33.04%", null, this);
            obj.set_taborder("65");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("searchPurchasBtn", "absolute", "1157", "230", "32", "32", null, null, this);
            obj.set_taborder("66");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addTaxInvBtn", "absolute", "1139", "728", "90", "32", null, null, this);
            obj.set_taborder("67");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
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
            		p.set_classname("AT_TaxinvForm");
            		p.set_titletext("New Form");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","slipNoEd","value","dsAtTaxinv","slipNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","taxinvDiv.ResolNoEd","value","dsAtTaxinv","resolNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","taxinvDiv.billComb","value","dsAtTaxinv","billDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","taxinvDiv.purchSalesComb","value","dsAtTaxinv","purchSalesDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","taxinvDiv.pubComb","value","dsAtTaxinv","pubDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","salesCustnmEd","value","dsAtDetailTaxinv","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AT_TaxinvForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AT_TaxinvForm.xfdl", function() {
         /********************************************************************************
        *                                                                               *
        * 세금계산서 관리           												    *
        *                                                                               *
        * @Path		    세금계산서 관리							                 	*
        * @Description  부가가치세 신고를 위한 세금계산서 관리 	                *
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

        //include "scripts::commonScripts.xjs";  

        /********************************************************************************
          폼 로드 이벤트
        ********************************************************************************/
        this.AT_TaxinvForm_onload = function(obj,e)
        {
        	//등록을 위한 DS의 열을 추가한다.
        	this.dsTaxInv.addRow();
        	//코드 정보를 가지고 온다.
        	this.gfnBind();
        	// 계정 정보를 가지고 온다.
        	this.gfnService("findAccount");
        	// 작성일자에 오늘 날짜를 등록한다.
        	this.dsTaxInv.setColumn(0,"pubDate",this.gfnLocalDate());
        }

        /********************************************************************************
          세금 계산서 종류 선택에 따른 변화
        ********************************************************************************/
        // 세금 계산서 구분
        this.taxinvDiv_billComb_onitemchanged = function(obj,e)
        {
        	// 따로 처리해야 할 사항 없음.
        }

        //매출인지 매입인지에 따라 정보를 다르게 한다.
        this.taxinvDiv_purchSalesComb_onitemchanged = function(obj,e)
        {
        	if(obj.value == 2){// 매입
        		this.purchAddrEd.set_value(this.dsAccount.getColumn(0,"addr"));
        		this.purchBusctgnmEd.set_value(this.dsAccount.getColumn(0,"busCtgNm"));
        		this.purchBussHpnmEd.set_value(this.dsAccount.getColumn(0,"busShpNm"));
        		this.purchCustnmEd.set_value(this.dsAccount.getColumn(0,"custNm"));
        		this.purchPrsdntnmEd.set_value(this.dsAccount.getColumn(0,"prsdntNm"));
        		
        		this.salesAddrEd.set_value("");
        		this.salesBusctgnmEd.set_value("");
        		this.salesBussHpnmEd.set_value("");
        		this.salesCustnmEd.set_value("");
        		this.salesPrsdntnmEd.set_value("");
        		
        		this.searchPurchasBtn.set_visible(false);
        		this.searchSalesBtn.set_visible(true);
        	}else if(obj.value == 1){//매출 선택
        		this.purchAddrEd.set_value("");
        		this.purchBusctgnmEd.set_value("");
        		this.purchBussHpnmEd.set_value("");
        		this.purchCustnmEd.set_value("");
        		this.purchPrsdntnmEd.set_value("");
        	
        		this.salesAddrEd.set_value(this.dsAccount.getColumn(0,"addr"));
        		this.salesBusctgnmEd.set_value(this.dsAccount.getColumn(0,"busCtgNm"));
        		this.salesBussHpnmEd.set_value(this.dsAccount.getColumn(0,"busShpNm"));
        		this.salesCustnmEd.set_value(this.dsAccount.getColumn(0,"custNm"));
        		this.salesPrsdntnmEd.set_value(this.dsAccount.getColumn(0,"prsdntNm"));
        	
        		this.searchPurchasBtn.set_visible(true);
        		this.searchSalesBtn.set_visible(false);
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsDetailTaxInv.addEventHandler("onvaluechanged", this.dsAtDetailTaxinv_onvaluechanged, this);
            this.addEventHandler("onload", this.AT_TaxinvForm_onload, this);
            this.taxinvDiv.purchSalesComb.addEventHandler("onitemchanged", this.taxinvDiv_purchSalesComb_onitemchanged, this);
            this.AtDetailTaxinvGrid.addEventHandler("oncellclick", this.AtDetailTaxinvGrid_oncellclick, this);
            this.gipyoDateCal.addEventHandler("onchanged", this.gipyoDateCal_onchanged, this);
            this.ATDetailTaxinAddBtn.addEventHandler("onclick", this.ATDetailTaxinAddBtn_onclick, this);
            this.ATDetailTaxinDelBtn.addEventHandler("onclick", this.ATDetailTaxinDelBtn_onclick, this);
            this.searchSlipNoBtn.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.searchResolNoBtn.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.searchSalesBtn.addEventHandler("onclick", this.searchSalesBtn_onclick, this);
            this.searchPurchasBtn.addEventHandler("onclick", this.searchPurchasBtn_onclick, this);
            this.addTaxInvBtn.addEventHandler("onclick", this.addTaxInvBtn_onclick, this);

        };

        this.loadIncludeScript("AT_TaxinvForm.xfdl");

       
    };
}
)();

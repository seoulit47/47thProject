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
                this.set_name("LP_PrcsReceiptMngntForm");
                this.set_classname("LP_PrcsReceiptMngntForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAnsp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"gdsAnspNo\" type=\"STRING\" size=\"256\"/><Column id=\"anspDate\" type=\"STRING\" size=\"256\"/><Column id=\"anspDept\" type=\"STRING\" size=\"256\"/><Column id=\"progStat\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAnspList</Col><Col id=\"URL\">his::log/prcs/findAnspList.do</Col><Col id=\"outData\">dsAnsp=dsGdsAnsp</Col></Row><Row><Col id=\"serviceID\">findAnspHistList</Col><Col id=\"URL\">his::log/prcs/findAnspHistList.do</Col><Col id=\"outData\">dsAnspHist=dsGdsAnspHist</Col></Row><Row><Col id=\"serviceID\">batchPrcsReceiptProcess</Col><Col id=\"URL\">his::log/prcs/batchPrcsReceiptProcess.do</Col><Col id=\"inData\">dsPrcsReceipt=gdsPrcsReceipt:u</Col></Row><Row><Col id=\"serviceID\">findPrcsReceiptList</Col><Col id=\"URL\">his::log/prcs/findPrcsReceiptList.do</Col><Col id=\"outData\">gdsPrcsReceipt=dsPrcsReceipt</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInptYn", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN\">Y</Col></Row><Row><Col id=\"YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrcsKind", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"kind\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"kind\">위생재료</Col></Row><Row><Col id=\"kind\">사무용품</Col></Row><Row><Col id=\"kind\">인쇄품</Col></Row><Row><Col id=\"kind\">전산소모품</Col></Row><Row><Col id=\"kind\">의약품</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAnspHist", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"anspHistNo\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"gdsNm\" type=\"STRING\" size=\"256\"/><Column id=\"histRespoWorker\" type=\"STRING\" size=\"256\"/><Column id=\"histAnspQnt\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"histAnspDiv\" type=\"STRING\" size=\"256\"/><Column id=\"histAnspCon\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GP500</Col><Col id=\"dsName\">dsDept</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDept", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "60", "0.8%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.76%", "-4", null, "60", "68.55%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("구매접수관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("formDiv", "absolute", "0.56%", "64", null, "701", "1.28%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent");
            obj.style.set_color("#444444ff");
            this.addChild(obj.name, obj);
            obj = new Div("menuDiv", "absolute", "29.42%", "5", null, "81", "0.49%", null, this.formDiv);
            obj.set_taborder("25");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.formDiv.addChild(obj.name, obj);
            obj = new Calendar("prcsReceiptNoCal", "absolute", "10.49%", "2", null, "30", "77.62%", null, this.formDiv.menuDiv);
            this.formDiv.menuDiv.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj = new Button("searchCustBtn", "absolute", "44.64%", "2", null, "32", "48.02%", null, this.formDiv.menuDiv);
            obj.set_taborder("5");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.formDiv.menuDiv.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "81.24%", "41", null, "30", "10.72%", null, this.formDiv.menuDiv);
            obj.set_taborder("6");
            this.formDiv.menuDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "29.75%", "8", null, "30", "63.41%", null, this.formDiv);
            obj.getSetter("taborder").set("26");
            obj.set_text("구매접수일");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "79.63%", "47", null, "30", "14.51%", null, this.formDiv);
            obj.getSetter("taborder").set("27");
            obj.set_text("구매수량");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "45.72%", "47", null, "30", "48.41%", null, this.formDiv);
            obj.getSetter("taborder").set("28");
            obj.set_text("구매종류");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "60.39%", "47", null, "30", "30.81%", null, this.formDiv);
            obj.getSetter("taborder").set("29");
            obj.set_text("구매접수 담당자");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Edit("prcsReResWorkerEd", "absolute", "69.85%", "47", null, "30", "21.84%", null, this.formDiv);
            obj.set_taborder("30");
            this.formDiv.addChild(obj.name, obj);
            obj = new Grid("prcsReceiptGrid", "absolute", "29.42%", "93", null, "279", "0.57%", null, this.formDiv);
            obj.set_taborder("31");
            obj.set_binddataset("gdsPrcsReceipt");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"86\"/><Column size=\"80\"/><Column size=\"141\"/><Column size=\"93\"/><Column size=\"101\"/><Column size=\"105\"/><Column size=\"92\"/><Column size=\"67\"/><Column size=\"69\"/><Column size=\"64\"/><Column size=\"107\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"청구번호\"/><Cell col=\"1\" text=\"청구상세\"/><Cell col=\"2\" text=\"구매접수번호\"/><Cell col=\"3\" text=\"구매접수일\"/><Cell col=\"4\" text=\"접수담당자\"/><Cell col=\"5\" text=\"거래처\"/><Cell col=\"6\" text=\"거래처코드\"/><Cell col=\"7\" text=\"구매종류\"/><Cell col=\"8\" text=\"수량\"/><Cell col=\"9\" text=\"물품코드\"/><Cell col=\"10\" text=\"물품명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:gdsAnspNo\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:anspHistNo\"/><Cell col=\"2\" text=\"bind:buyReceiptNo\"/><Cell col=\"3\" text=\"bind:buyReceiptDate\"/><Cell col=\"4\" text=\"bind:buyReceiptRespoWorker\"/><Cell col=\"5\" text=\"bind:cust\"/><Cell col=\"6\" text=\"bind:custCd\"/><Cell col=\"7\" text=\"bind:buyKind\"/><Cell col=\"8\" text=\"bind:prcsQnt\"/><Cell col=\"9\" text=\"bind:gdsCd\"/><Cell col=\"10\" text=\"bind:gdsNm\"/></Band></Format></Formats>");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "45.72%", "7", null, "30", "48.41%", null, this.formDiv);
            obj.getSetter("taborder").set("32");
            obj.set_text("거래처");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Edit("custEd", "absolute", "51.92%", "8", null, "30", "39.69%", null, this.formDiv);
            obj.set_taborder("33");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "66.42%", "9", null, "30", "27.71%", null, this.formDiv);
            obj.getSetter("taborder").set("35");
            obj.set_text("거래처코드");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Edit("custCdEd", "absolute", "72.78%", "9", null, "30", "18.91%", null, this.formDiv);
            obj.set_taborder("36");
            this.formDiv.addChild(obj.name, obj);
            obj = new Grid("anspHistGrid", "absolute", "29.42%", "415", null, "279", "0.57%", null, this.formDiv);
            obj.set_taborder("41");
            obj.set_binddataset("dsAnspHist");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"107\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"74\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"청구상세번호\"/><Cell col=\"1\" text=\"물품코드\"/><Cell col=\"2\" text=\"물품명\"/><Cell col=\"3\" text=\"청구담당자\"/><Cell col=\"4\" text=\"청구수량\"/><Cell col=\"5\" text=\"청구단위\"/><Cell col=\"6\" text=\"청구구분\"/><Cell col=\"7\" text=\"청구내용\"/></Band><Band id=\"body\"><Cell text=\"bind:anspHistNo\"/><Cell col=\"1\" text=\"bind:gdsCd\"/><Cell col=\"2\" text=\"bind:gdsNm\"/><Cell col=\"3\" text=\"bind:histRespoWorker\"/><Cell col=\"4\" text=\"bind:histAnspQnt\"/><Cell col=\"5\" text=\"bind:unit\"/><Cell col=\"6\" text=\"bind:histAnspDiv\"/><Cell col=\"7\" text=\"bind:histAnspCon\"/></Band></Format></Formats>");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "29.75%", "48", null, "30", "63.41%", null, this.formDiv);
            obj.getSetter("taborder").set("42");
            obj.set_text("구매접수번호");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Edit("prcsReceiptNoEd", "absolute", "36.84%", "48", null, "30", "54.85%", null, this.formDiv);
            obj.set_taborder("43");
            this.formDiv.addChild(obj.name, obj);
            obj = new Button("batchBtn", "absolute", "92.01%", "380", null, "32", "0.81%", null, this.formDiv);
            obj.set_taborder("49");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.formDiv.addChild(obj.name, obj);
            obj = new Grid("anspGrid", "absolute", "0.49%", "45", null, "650", "71.23%", null, this.formDiv);
            obj.set_taborder("52");
            obj.set_binddataset("dsAnsp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"물품청구번호\"/><Cell col=\"1\" text=\"청구일\"/><Cell col=\"2\" text=\"청구부서\"/><Cell col=\"3\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell text=\"bind:gdsAnspNo\"/><Cell col=\"1\" text=\"bind:anspDate\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:anspDept\" combodataset=\"dsDept\" combocodecol=\"code\" combodatacol=\"bigValue\" combodisplay=\"edit\"/><Cell col=\"3\" text=\"bind:progStat\"/></Band></Format></Formats>");
            this.formDiv.addChild(obj.name, obj);
            obj = new Button("anspListBtn", "absolute", "21.6%", "7", null, "32", "71.07%", null, this.formDiv);
            obj.set_taborder("53");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.formDiv.addChild(obj.name, obj);
            obj = new Button("addBtn", "absolute", "29.26%", "380", null, "32", "63.41%", null, this.formDiv);
            obj.set_taborder("54");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.formDiv.addChild(obj.name, obj);
            obj = new Button("DelBtn", "absolute", "36.84%", "380", null, "32", "55.99%", null, this.formDiv);
            obj.set_taborder("55");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "-45.64%", "-71", null, "23", "145.56%", null, this.formDiv);
            obj.getSetter("taborder").set("56");
            obj.set_text("~");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 9 다음_Regular");
            this.formDiv.addChild(obj.name, obj);
            obj = new Calendar("ctrtStartPridCal", "absolute", "-51.26%", "-76", null, "30", "150.94%", null, this.formDiv);
            this.formDiv.addChild(obj.name, obj);
            obj.set_taborder("57");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj = new Calendar("ctrtEndPridCal", "absolute", "-41.16%", "-76", null, "30", "139.28%", null, this.formDiv);
            this.formDiv.addChild(obj.name, obj);
            obj.set_taborder("58");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj = new Static("Static00", "absolute", "-23.31%", "97", null, "23", "123.31%", null, this.formDiv);
            obj.getSetter("taborder").set("59");
            obj.set_text("~");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 9 다음_Regular");
            this.formDiv.addChild(obj.name, obj);
            obj = new Calendar("ctrtStartPridCal00", "absolute", "-28.85%", "92", null, "30", "128.77%", null, this.formDiv);
            this.formDiv.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj = new Calendar("ctrtEndPridCal00", "absolute", "-18.74%", "92", null, "30", "117.11%", null, this.formDiv);
            this.formDiv.addChild(obj.name, obj);
            obj.set_taborder("61");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj = new Static("Static02", "absolute", "10.51%", "13", null, "23", "87.94%", null, this.formDiv);
            obj.getSetter("taborder").set("62");
            obj.set_text("~");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 9 다음_Regular");
            this.formDiv.addChild(obj.name, obj);
            obj = new Calendar("prcsStartCal", "absolute", "0.57%", "8", null, "30", "90.14%", null, this.formDiv);
            this.formDiv.addChild(obj.name, obj);
            obj.set_taborder("63");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj = new Calendar("prcsEndCal", "absolute", "11.98%", "8", null, "30", "78.65%", null, this.formDiv);
            this.formDiv.addChild(obj.name, obj);
            obj.set_taborder("64");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Combo("prcsKindCombo", "absolute", "51.52%", "110", null, "30", "40.88%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@dsPrcsKind");
            obj.set_codecolumn("kind");


            
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
            obj = new Layout("default", "", 0, 81, this.formDiv.menuDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("25");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.formDiv.menuDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1232, 701, this.formDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("transparent");
            		p.style.set_color("#444444ff");

            	}
            );
            this.formDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LP_PrcsReceiptMngntForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","formDiv.prcsReceiptNoEd","value","gdsPrcsReceipt","buyReceiptNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","formDiv.prcsReResWorkerEd","value","gdsPrcsReceipt","buyReceiptRespoWorker");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","formDiv.custCdEd","value","gdsPrcsReceipt","custCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","formDiv.custEd","value","gdsPrcsReceipt","cust");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","formDiv.menuDiv.prcsReceiptNoCal","value","gdsPrcsReceipt","buyReceiptDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","prcsKindCombo","value","gdsPrcsReceipt","buyKind");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","formDiv.menuDiv.Edit00","value","gdsPrcsReceipt","prcsQnt");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LP_PrcsReceiptMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("LP_PrcsReceiptMngntForm.xfdl", "scripts::logScripts.xjs");
        this.registerScript("LP_PrcsReceiptMngntForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 구매접수  관리																*
        *                                                                               *
        * @Path		    LP_PrcsReceiptMngntform											*
        *																				*
        * @Description 	구매접수 관리에서 구매접수 물품을 등록,수정,삭제,조회한다*
        * @Author	    강찬모    						                                *
        * 									                                            *
        * Created on 2016. 05. 27                            		                    *
        *									                                            *
        ********************************************************************************/

        /***************************************************************************************************
        *                                         공통 Script Include                                      *
        ***************************************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include	"scripts::logScripts.xjs";

        /***************************************************************************************************
        *                                      폼 EVENT START                                        	   *
        /*-------------------------------------------------------------------------------------------------+
        >>  onload 이벤트
        +-------------------------------------------------------------------------------------------------*/
        this.LP_PrcsReceiptMngntForm_onload = function(obj,e)
        {
        	application.gdsPrcsReceipt.clear();
        	this.gfnBind();
        	
        }
        /***************************************************************************************************
        *                                         물품청구 조회                                            *
        ***************************************************************************************************/
        this.anspListBtn_onclick = function(obj,e)
        {
        	application.gdsPrcsReceipt.clear();
        	this.dsAnspHist.clear();
        	var prcsStartCal = this.formDiv.prcsStartCal.value;
        	var prcsEndCal = this.formDiv.prcsEndCal.value;
        	var prcsCal = "prcsStartCal='"+prcsStartCal+"' prcsEndCal='"+prcsEndCal+"'";
        //	var progStat = "progStat='"+'접수대기'+"'";
        	this.dsService.setColumn(0, "argument", prcsCal);
        	this.gfnService("findAnspList", false);
        	
        	
        }
        /***************************************************************************************************
        *                                         물품청구 상세 조회                                       *
        ***************************************************************************************************/

        this.anspGrid_oncellclick = function(obj,e)
        {
        	application.gdsPrcsReceipt.clear();
        	var gdsAnspNo = this.dsAnsp.getColumn(this.formDiv.anspGrid.currentrow, "gdsAnspNo");
        	var setGdsAnspNo = "GDS_ANSP_NO='"+gdsAnspNo+"'";

        	this.dsService.setColumn(1, "argument", setGdsAnspNo);
        	this.gfnService("findAnspHistList", "false");
        	

        }

        /***************************************************************************************************
        *                                         구매접수 추가                                            *
        ***************************************************************************************************/
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

        this.addBtn_onclick = function(obj,e)
        {
        	application.gdsPrcsReceipt.addRow();
        	
        	var receiptNo = this.formDiv.prcsReceiptGrid.currentrow+1;
        	var no = this.formDiv.prcsReceiptGrid.currentrow;
        	
        	var objDate = new Date();
        	var year = objDate.getFullYear() +"";
        	var cutYear = year.substr(2,3);
        	
        	var anspNo = this.formDiv.anspGrid.currentrow;
        	var anspHistNo = this.formDiv.anspHistGrid.currentrow;
        	
        	var setGdsAnspNo = this.dsAnsp.getColumn(anspNo,"gdsAnspNo");
        	var cutGdsAnspNo = setGdsAnspNo.substr(3,5);
        	var setGdsAnspHistNo = this.dsAnspHist.getColumn(anspHistNo, "anspHistNo");
        	var setDownNo = "BUY"+cutGdsAnspNo+setGdsAnspHistNo+cutYear+"0"+receiptNo;
        	var setUpNo = "BUY"+cutGdsAnspNo+setGdsAnspHistNo+cutYear+receiptNo;
        		
        	var setGdsCd = this.dsAnspHist.getColumn(anspHistNo, "gdsCd");
        	var setGdsNm = this.dsAnspHist.getColumn(anspHistNo, "gdsNm");
        	if(receiptNo < 10){
        		application.gdsPrcsReceipt.setColumn(no, "buyReceiptNo", setDownNo);
        	}else{
        		application.gdsPrcsReceipt.setColumn(no, "buyReceiptNo", setUpNo);
        	}
        	
        	application.gdsPrcsReceipt.setColumn(no, "buyReceiptDate", this.Today());
        	application.gdsPrcsReceipt.setColumn(no, "gdsAnspNo", setGdsAnspNo);
        	application.gdsPrcsReceipt.setColumn(no, "anspHistNo", setGdsAnspHistNo);
        	application.gdsPrcsReceipt.setColumn(no, "gdsCd", setGdsCd);
        	application.gdsPrcsReceipt.setColumn(no, "gdsNm", setGdsNm);
        }

        this.prcsReceiptNoCal_OnChanged = function(obj,e)
        {
        	var prcsReceiptCalendar = this.formDiv.menuDiv.prcsReceiptNoCal.value;
        //	alert(buyReceiptCalendar);
        	var count = this.formDiv.prcsReceiptGrid.currentrow;
        	application.gdsPrcsReceipt.setColumn(count, "buyReceiptDate", prcsReceiptCalendar);
        }
        /***************************************************************************************************
        *                                         구매접수 삭제                                            *
        ***************************************************************************************************/
        this.DelBtn_onclick = function(obj,e)
        {
        	application.gdsPrcsReceipt.deleteRow(this.formDiv.prcsReceiptGrid.currentrow);
        }

        /***************************************************************************************************
        *                                         구매접수 일괄처리                                        *
        ***************************************************************************************************/
        this.batchBtn_OnClick = function(obj,e)
        {
        	this.gfnService("batchPrcsReceiptProcess","false");
        }

        /***************************************************************************************************
        *                                         구매접수 조회                                           *
        ***************************************************************************************************/
        this.formDiv_anspHistGrid_oncellclick = function(obj,e)
        {
         	var count = this.formDiv.anspGrid.currentrow;
         	var histCount = this.formDiv.anspHistGrid.currentrow;
         	var gdsAnspNo = this.dsAnsp.getColumn(count, "gdsAnspNo");
         	var anspHistNo = this.dsAnspHist.getColumn(histCount, "anspHistNo");
         	var setGdsAnsp = "gdsAnspNo='"+gdsAnspNo+"' "+"anspHistNo='"+anspHistNo+"'";
         	this.dsService.setColumn(3, "argument", setGdsAnsp);
         	alert(this.dsService.getColumn(3, "argument"));
        	this.gfnService("findPrcsReceiptList");	
        }

        this.formDiv_searchCustBtn_onclick = function(obj,e)
        {
        	this.logOpenCdDialog("cust");
        }

        this.setLogCodeArray = function(divCode,logCode,secCode,thrCode,arr){
         	switch(divCode){
         		case "cust" :
         			this.formDiv.custEd.set_value(arr[1]);
         			this.formDiv.custCdEd.set_value(arr[0]);
        	}
        }

        

        

        this.prcsKindCombo_onitemchanged = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LP_PrcsReceiptMngntForm_onload, this);
            this.formDiv.menuDiv.prcsReceiptNoCal.addEventHandler("onchanged", this.prcsReceiptNoCal_OnChanged, this);
            this.formDiv.menuDiv.searchCustBtn.addEventHandler("onclick", this.formDiv_searchCustBtn_onclick, this);
            this.formDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.anspHistGrid.addEventHandler("oncellclick", this.formDiv_anspHistGrid_oncellclick, this);
            this.formDiv.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.batchBtn.addEventHandler("onclick", this.batchBtn_OnClick, this);
            this.formDiv.anspGrid.addEventHandler("oncellclick", this.anspGrid_oncellclick, this);
            this.formDiv.anspListBtn.addEventHandler("onclick", this.anspListBtn_onclick, this);
            this.formDiv.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.formDiv.DelBtn.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.formDiv.ctrtEndPridCal.addEventHandler("onchanged", this.menuDiv_ctrtEndPridCal_onchanged, this);
            this.formDiv.ctrtEndPridCal.addEventHandler("oneditclick", this.menuDiv_ctrtEndPridCal_oneditclick, this);
            this.formDiv.ctrtEndPridCal00.addEventHandler("onchanged", this.menuDiv_ctrtEndPridCal_onchanged, this);
            this.formDiv.ctrtEndPridCal00.addEventHandler("oneditclick", this.menuDiv_ctrtEndPridCal_oneditclick, this);
            this.formDiv.prcsEndCal.addEventHandler("onchanged", this.menuDiv_ctrtEndPridCal_onchanged, this);
            this.formDiv.prcsEndCal.addEventHandler("oneditclick", this.menuDiv_ctrtEndPridCal_oneditclick, this);

        };

        this.loadIncludeScript("LP_PrcsReceiptMngntForm.xfdl");

       
    };
}
)();

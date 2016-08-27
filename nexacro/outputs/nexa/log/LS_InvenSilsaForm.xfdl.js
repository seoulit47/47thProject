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
                this.set_name("LS_InvenSilsaForm");
                this.set_classname("LM_invenSilsaForm");
                this.set_titletext("중앙공급실재고실사관리");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInvenDline", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">전체</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">반영</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">미반영</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GD041</Col><Col id=\"dsName\">dsWh</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsWh", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("invenRfltYb", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">전체</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">반영</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">미반영</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInvenSilsa", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"whCd\" type=\"STRING\" size=\"256\"/><Column id=\"whNm\" type=\"STRING\" size=\"256\"/><Column id=\"invenRflt\" type=\"STRING\" size=\"256\"/><Column id=\"ioCfmtCd\" type=\"STRING\" size=\"256\"/><Column id=\"ioTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"silsaDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInvenSilsaDtlInfo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"whCd\" type=\"STRING\" size=\"256\"/><Column id=\"diffQnt\" type=\"STRING\" size=\"256\"/><Column id=\"midGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"dproQnt\" type=\"STRING\" size=\"256\"/><Column id=\"invenRflt\" type=\"STRING\" size=\"256\"/><Column id=\"invenDlineYb\" type=\"STRING\" size=\"256\"/><Column id=\"silsaQnt\" type=\"STRING\" size=\"256\"/><Column id=\"subulUnit\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"priceCtrt\" type=\"STRING\" size=\"256\"/><Column id=\"price\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPstInven", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"whCd\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"midGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstInvenQnt\" type=\"STRING\" size=\"256\"/><Column id=\"ioTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ioCfmtCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"whCd\">0</Col><Col id=\"smGrpCd\">1</Col><Col id=\"midGrpCd\">2</Col><Col id=\"bigGrpCd\">3</Col><Col id=\"pstInvenQnt\">4</Col><Col id=\"ioTypeCd\">5</Col><Col id=\"gdsCd\">6</Col><Col id=\"ioCfmtCd\">7</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindLogCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"cdDiv\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dsLogName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdDiv\">wh</Col><Col id=\"dsLogName\">dsWh</Col><Col id=\"code\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findInvenSilsaList</Col><Col id=\"URL\">his::log/inven/findInvenSilsaList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsInvenSilsa=dsInvenSilsa dsInvenSilsaDtlInfo=dsInvenSilsaDtlInfo</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">batchInvenSilsaListProcess</Col><Col id=\"URL\">his::log/inven/batchInvenSilsaListProcess.do</Col><Col id=\"inData\">dsInvenSilsa=dsInvenSilsa:u dsInvenSilsaDtlInfo=dsInvenSilsaDtlInfo:u</Col><Col id=\"outData\">dsInvenSilsa=dsInvenSilsa dsInvenSilsaDtlInfo=dsInvenSilsaDtlInfo</Col></Row><Row><Col id=\"serviceID\">findPstInvenList</Col><Col id=\"URL\">his::log/inven/findPstInvenList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsPstInven=dsPstInven</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findGdsList</Col><Col id=\"URL\">his::log/base/findGdsList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsGds=dsGds</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">collbackLogBind</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGds", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"gdsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ediCd\" type=\"STRING\" size=\"256\"/><Column id=\"vmiYb\" type=\"STRING\" size=\"256\"/><Column id=\"useDept\" type=\"STRING\" size=\"256\"/><Column id=\"stand\" type=\"STRING\" size=\"256\"/><Column id=\"ordUnit\" type=\"STRING\" size=\"256\"/><Column id=\"subulUnit\" type=\"STRING\" size=\"256\"/><Column id=\"cngQnt\" type=\"STRING\" size=\"256\"/><Column id=\"cust\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtPrice\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"spliesDiv\" type=\"STRING\" size=\"256\"/><Column id=\"wh\" type=\"STRING\" size=\"256\"/><Column id=\"rackNo\" type=\"STRING\" size=\"256\"/><Column id=\"insurDiv\" type=\"STRING\" size=\"256\"/><Column id=\"disuseDate\" type=\"STRING\" size=\"256\"/><Column id=\"disuseDiv\" type=\"STRING\" size=\"256\"/><Column id=\"picLoc\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"modDate\" type=\"STRING\" size=\"256\"/><Column id=\"midGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrpCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "4.79%", "-4", null, "60", "62.21%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("공급실 SET 구성품 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0.1%", "0", null, "60", "0.2%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "62.19%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("재고실사");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0.68%", "58", null, "45", "1.07%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0.72%", "107", null, "660", "0.8%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);

            obj = new Static("ctrtDateSelStc00", "absolute", "2.08%", "62", null, "30", "91.28%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("창고");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("whCombo", "absolute", "9.36%", "62", null, "30", "79.12%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@dsWh");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Static("ctrtDateSelStc01", "absolute", "24.08%", "64", null, "30", "68.96%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("청구일자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("startSilsaDateCal", "absolute", "31.36%", "65", null, "27", "56.56%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Static("ctrtDateSelStc03", "absolute", "44.48%", "64", null, "30", "52.4%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("~");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("endSilsaDateCal", "absolute", "48.48%", "65", null, "27", "39.36%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Static("ctrtDateSelStc02", "absolute", "64.24%", "62", null, "30", "29.12%", null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("재고반영");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("invenRfltCombo", "absolute", "71.44%", "62", null, "30", "16.96%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_innerdataset("@invenRfltYb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Button("invenSilsaSearchBtn", "absolute", "91.2%", "65", null, "32", "1.52%", null, this);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("SearchBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("invenSilsaGrid", "absolute", "1.2%", "174", null, "533", "55.68%", null, this);
            obj.set_taborder("15");
            obj.set_binddataset("dsInvenSilsa");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"no\"/><Cell col=\"1\" text=\"창고코드\"/><Cell col=\"2\" text=\"창고명\"/><Cell col=\"3\" text=\"실사일자\"/><Cell col=\"4\" text=\"재고반영\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:whCd\"/><Cell col=\"2\" text=\"bind:whNm\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:silsaDate\" mask=\"####-##-##\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:invenRflt\" combodataset=\"invenRfltYb\" combocodecol=\"code\" combodatacol=\"value\" combodisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("invenSilsaDtlGrid", "absolute", "46.88%", "174", null, "535", "0.72%", null, this);
            obj.set_taborder("16");
            obj.set_binddataset("dsInvenSilsaDtlInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"107\"/><Column size=\"96\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"물품코드\"/><Cell col=\"1\" text=\"물품명\"/><Cell col=\"2\" text=\"전산수량\"/><Cell col=\"3\" text=\"실사수량\"/><Cell col=\"4\" text=\"차이수량\"/><Cell col=\"5\" text=\"수불단위\"/><Cell col=\"6\" text=\"계약단가\"/><Cell col=\"7\" text=\"금액\"/><Cell col=\"8\" text=\"마감여부\"/></Band><Band id=\"body\"><Cell text=\"bind:gdsCd\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:gdsCd\" combodataset=\"dsGds\" combocodecol=\"gdsCd\" combodatacol=\"gdsNm\" combodisplay=\"edit\" calendardisplay=\"edit\"/><Cell col=\"2\" text=\"bind:dproQnt\"/><Cell col=\"3\" text=\"bind:silsaQnt\"/><Cell col=\"4\" text=\"bind:diffQnt\" expr=\"expr:nexacro.toNumber(dproQnt,0)-nexacro.toNumber(silsaQnt,0)\"/><Cell col=\"5\" text=\"bind:subulUnit\"/><Cell col=\"6\" text=\"bind:priceCtrt\"/><Cell col=\"7\" text=\"bind:amt\" expr=\"expr:nexacro.toNumber(dproQnt,0)*nexacro.toNumber(priceCtrt,0)\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:invenDlineYb\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("invenRfltBtn", "absolute", "72.32%", "130", null, "30", "22.88%", null, this);
            obj.set_taborder("17");
            obj.set_text("재고반영");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("RfltCancelBtn", "absolute", "77.76%", "132", null, "30", "17.44%", null, this);
            obj.set_taborder("18");
            obj.set_text("반영취소");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("modifyBtn", "absolute", "84%", "130", null, "32", "8.72%", null, this);
            obj.set_taborder("19");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("ModiBtn");
            this.addChild(obj.name, obj);

            obj = new Button("insertBtn", "absolute", "91.92%", "130", null, "32", "0.72%", null, this);
            obj.set_taborder("20");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delInvenSilsaDtlInfoBtn", "absolute", "96.72%", "721", null, "32", "0.72%", null, this);
            obj.set_taborder("21");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DrBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addInvenSilsaDtlInfoBtn", "absolute", "93.84%", "721", null, "32", "3.68%", null, this);
            obj.set_taborder("22");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("ArBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addInvenSilsaBtn", "absolute", "38.8%", "713", null, "32", "58.72%", null, this);
            obj.set_taborder("23");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("ArBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delInvenSilsaBtn", "absolute", "41.68%", "713", null, "32", "55.76%", null, this);
            obj.set_taborder("24");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DrBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 45, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 660, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("#edececff");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LM_invenSilsaForm");
            		p.set_titletext("중앙공급실재고실사관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LS_InvenSilsaForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("LS_InvenSilsaForm.xfdl", "scripts::commonUtil.xjs");
        this.addIncludeScript("LS_InvenSilsaForm.xfdl", "scripts::logScripts.xjs");
        this.addIncludeScript("LS_InvenSilsaForm.xfdl", "scripts::commonBind.xjs");
        this.addIncludeScript("LS_InvenSilsaForm.xfdl", "scripts::commonPopup.xjs");
        this.registerScript("LS_InvenSilsaForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 재고실사 등록																*
        *                                                                               *
        * @Path		    log-LSinvenSilsaMngntForm										*
        *                                                                               *
        * @Description 	재고실사내역 등록                                             *
        *			     																*
        * @Author	  류재춘 						                                	*
        * 									                                            *
        * Created on                              		                    *
        *									                                            *
        ********************************************************************************/

        
        /***************************************************************************************************
        *                                      공통 Script Include                                         *
        ***************************************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include "scripts::commonUtil.xjs";
        //include "scripts::logScripts.xjs";
        //include "scripts::commonBind.xjs";
        //include "scripts::commonPopup.xjs";

        

        
        /***************************************************************************************************
        *                                      화면 변수 선언부                                          *
        ***************************************************************************************************/
        var dateCal;
        var code;
        var value;
        /***************************************************************************************************
        *                                      폼 EVENT START                                        	   *
        /*-------------------------------------------------------------------------------------------------+
        >>  onload 이벤트
        +-------------------------------------------------------------------------------------------------*/
        this.LS_InvenSilsaMngntForm_onload = function(obj,e)
        {

        
        	//this.logBindCd();
        	//dateCal = this.gfnDate("yyyymmdd");
        	//this.offEnableBtn();
        	//this.findInvenSilsaList();
        	this.gfnBind(); 
        	this.gfnService("findGdsList");
        	 

        }

        /*-------------------------------------------------------------------------------------------------+
        *                                      폼 EVENT END                                               *
        ***************************************************************************************************/

        

        /***************************************************************************************************
        *                                      버튼 EVENT START                                            *
        /*-------------------------------------------------------------------------------------------------+
        >>  Button 이벤트
        +-------------------------------------------------------------------------------------------------*/

        this.button_onclick = function (obj,e)
        {
        	var btnName=obj.name;
        	
        	switch(obj){	
        		
        		case this.invenSilsaSearchBtn :
        			this.findInvenSilsaList();   				// 재고실사 조회버튼
        		break;
        		
        		case this.addInvenSilsaBtn : 					// 재고실사 Grid Row 추가
        			this.addInvenSilsa();
        		break;
        		
        		case this.delInvenSilsaBtn : 					// 재고실사 Grid Row 삭제
        			 this.delInvenSilsa();
        		break;		
        				
        		case this.addInvenSilsaDtlInfoBtn : 				// 재고실사상세 Grid Row 추가
        			this.addInvenSilsaDtlInfo();
        		break;
        		
        		case this.delInvenSilsaDtlInfoBtn : 				// 재고실사상세 Grid Row 삭제
        			 this.delInvenSilsaDtlInfo();
        		break;
        		
        		case this.invenRfltBtn : 						// 재고반영 버튼
        			  this.invenRflt();			 
        		break;
        		
        		case this.RfltCancelBtn : 						// 반영취소 버튼
        		 	  this.RfltCancel();
        		break;
        		
        		case this.insertBtn : 							// 재고실사 등록버튼
        			  this.batchInvenSilsaListProcess();
        		break;
        		
        		case this.modifyBtn : 							// 재고실사 수정버튼
        			  this.batchInvenSilsaListProcess();
        		break;
        			
        		case this.closeBtn : 							// 재고실사 종료버튼
        			  this.close();
        		break;
        	}
        }	

        
        /*-------------------------------------------------------------------------------------------------+
        >>  조회 버튼 이벤트
        +-------------------------------------------------------------------------------------------------*/

        
        this.findInvenSilsaList = function ()
        {
        	alert("조회버튼누름");
        	
        	//var bigGrpCd=this.bigGrpCdEd.value;
        	//var bigGrpNm=this.bigGrpCdNmEd.value;	
        	//var argument = 'bigGrpCd='+bigGrpCd+' bigGrpNm='+bigGrpNm;
        	//this.dsService.setColumn(0,"argument",argument);
        	//this.gfnService("findGrpList","true");
        	

        	var whCd=this.whCombo.value;
        	alert(whCd);
        	var startSilsaDate=this.startSilsaDateCal.value;
        	var endSilsaDate=this.endSilsaDateCal.value;
        	var invenRflt=this.invenRfltCombo.value;
        	var argument = 'whCd='+whCd+' startSilsaDate='+startSilsaDate+' endSilsaDate='+endSilsaDate+' invenRflt='+invenRflt;
        	//var row = this.dsService.findRow('serviceID',"findInvenSilsaList");
        	//this.dsService.setColumn(row,"argument",argument);
        	//this.gfnService("findInvenSilsaList","true");
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findInvenSilsaList",false);
        	this.oncell();

        //조회 후 해당 버튼 활성화
        	this.onEnableBtn();	
        }

        //조회 전 비활성화 하고자 하는 버튼
        this.offEnableBtn = function (){
        	this.invenRfltBtn.set_enable(false);
        	this.RfltCancelBtn.set_enable(false);
        	this.insertBtn.set_enable(false);
        	this.modifyBtn.set_enable(false);	
        	this.addInvenSilsaDtlInfoBtn.set_enable(false);
        	this.delInvenSilsaDtlInfoBtn.set_enable(false);	
        }

        //조회 후 비활성화 된 버튼 활성화
        this.onEnableBtn = function (){
        	this.invenRfltBtn.set_enable(true);	
        	this.modifyBtn.set_enable(true);	
        	this.addInvenSilsaDtlInfoBtn.set_enable(true);	
        	this.delInvenSilsaDtlInfoBtn.set_enable(true);		
        }

        /***************************************************************************************************
        *                                 	트랜젝션 실행 후 콜백함수 START                            *
        *-------------------------------------------------------------------------------------------------*/
        this.CallbackFunc = function (trid,errcd,errmsg)
        {
        	if(trid=="findInvenSilsaList"){
        		if(errcd<0){
        			alert(errmsg+"재고실사 정보를 불러오는데 실패했습니다");
        			return;
        		}
        	}else if(trid=="batchInvenSilsaListProcess"){
        		if(errcd<0){
        			//alert(errmsg+"재고실사 정보 일괄처리를 실패했습니다");
        		}else{
        			this.findInvenSilsaList();
        		}
        	}
        }
        /*-------------------------------------------------------------------------------------------------+
        *                         	  	 트랜젝션 실행 후 콜백함수 END                        	   *
        ***************************************************************************************************/

        
        /*-------------------------------------------------------------------------------------------------+
        >>  그리드 행 버튼 이벤트
        +-------------------------------------------------------------------------------------------------*/

        // 재고실사 행 추가
        this.addInvenSilsa = function (obj,e)
        {
        	var dsCnt=this.dsInvenSilsa.getRowCount();
        	/*if(dsCnt>4){
        		alert("모든 창고가 실사 대상에 등록 되었습니다");
        		return;
        	}*/
        	
        	this.dsInvenSilsa.addRow();
        	this.insertBtn.set_enable(true);
        	this.addInvenSilsaDtlInfoBtn.set_enable(true);
        	this.delInvenSilsaDtlInfoBtn.set_enable(true);
        	this.logOpenCdDialog("wh");
        }

        // 재고실사 행 삭제
        this.delInvenSilsa = function (obj,e)
        {	
        	this.dsInvenSilsa.deleteRow(this.dsInvenSilsa.rowposition);
        }

        
        // 상세 그리드 행 추가
        this.addInvenSilsaDtlInfo = function (obj,e)
        {
        	this.insertBtn.set_enable(true);

        	
        		this.logOpenGdsDialog("gds");

        	
        }

        this.delInvenSilsaDtlInfo = function (obj,e)
        {	
        	this.dsInvenSilsaDtlInfo.deleteRow(this.dsInvenSilsaDtlInfo.rowposition);
        }

        
        /***************************************************************************************************
        *                                   그리드 EVENT START                                    	       *
        /*-------------------------------------------------------------------------------------------------+
        >>  oncellclick 이벤트
        +-------------------------------------------------------------------------------------------------*/

        this.invenSilsaGrid_oncellclick = function (obj,e)
        {	
        	//if(e.col==1)
        	//this.openLogCdDialog('wh');	
        	var whCd=this.dsInvenSilsa.getColumn(e.row,"whCd");
        	this.dsInvenSilsaDtlInfo.filter("whCd=='"+whCd+"'");
        	trace(this.dsInvenSilsa.saveXML());

        }

        this.setLogCodeArray = function(divCode,logCode,secCode,thrCode,logCdArray){
        	switch(divCode){
        		case "wh":
        			this.dsInvenSilsa.setColumn(this.dsInvenSilsa.rowposition, "whCd", logCdArray[0]);
        			this.dsInvenSilsa.setColumn(this.dsInvenSilsa.rowposition, "whNm", logCdArray[1]);		
        			this.dsInvenSilsa.setColumn(this.dsInvenSilsa.rowposition, "silsaDate", dateCal); // 오늘날짜
        			this.dsInvenSilsa.setColumn(this.dsInvenSilsa.rowposition, "invenRflt", 2);	 //미반영	
        			this.oncell();
        			break;
        		case "gds":
        			this.dsInvenSilsaDtlInfo.addRow();
        			var row=this.dsInvenSilsaDtlInfo.rowposition;
        			alert(logCdArray);
        			this.dsInvenSilsaDtlInfo.setColumn(row, "gdsCd", logCdArray[0]);
        			this.dsInvenSilsaDtlInfo.setColumn(row, "bigGrpCd", logCdArray[2]);
        			this.dsInvenSilsaDtlInfo.setColumn(row, "midGrpCd", logCdArray[3]);
        			this.dsInvenSilsaDtlInfo.setColumn(row, "smGrpCd", logCdArray[4]);
        			this.dsInvenSilsaDtlInfo.setColumn(row, "subulUnit", logCdArray[7]);
        			this.dsInvenSilsaDtlInfo.setColumn(row, "priceCtrt", logCdArray[14]);
        			
        			var rand=Math.ceil(Math.random()*123);					//입고에서 현재고 테이블에 재고량을 반영해 주지 않아 랜덤사용
        			//this.dsInvenSilsaDtlInfo.setColumn(row, "dproQnt", rand);
        			var whCd=this.dsInvenSilsa.getColumn(this.dsInvenSilsa.rowposition,"whCd");
        			this.dsInvenSilsaDtlInfo.setColumn(this.dsInvenSilsaDtlInfo.rowposition,"whCd",whCd);
        			this.dsInvenSilsaDtlInfo.setColumn(this.dsInvenSilsaDtlInfo.rowposition,"invenDlineYb",0);
        	}

        	
        	
        	
        	
        	
        	
        	
        }

        this.oncell = function (){
        	var whCd = this.dsInvenSilsa.getColumn(this.dsInvenSilsa.rowposition, "whCd");	 
        	//this.dsInvenSilsaDtlInfo.filter("whCd=='"+whCd+"'");
        	this.gridReload();
        }

        this.invenSilsaDtlGrid_ontextchange = function (obj,e)
        {
        	var currow=this.dsInvenSilsaDtlInfo.rowposition;	
        		if(e.col == 5){      
        	       var dproQnt=this.dsInvenSilsaDtlInfo.getColumn(currow,"dproQnt");
        		   this.dsInvenSilsaDtlInfo.setColumn(currow,"diffQnt",(e.posttext-dproQnt));
        	}
        }

        
        this.invenSilsaDtlGrid_oncellclick = function (obj,e)
        {
        	var checkYb=this.dsInvenSilsaDtlInfo.getColumn(this.dsInvenSilsaDtlInfo.rowposition,"invenDlineYb");	
        	if(e.col==11&&checkYb==1){
        		alert("마감된 정보는 수정이 불가능합니다!");		
        	}else if(e.col==11&&checkYb==0){
        		alert("미반영 자료는 마감처리를 할 수 없습니다");		
        	}
        }

        
        /*-------------------------------------------------------------------------------------------------+
        *                                   그리드 EVENT END                                    	       *
        ***************************************************************************************************/

        

        

        // 등록, 수정, 삭제 처리
        this.batchInvenSilsaListProcess = function (){
        		var whCd=this.dsInvenSilsa.getColumn(this.dsInvenSilsa.rowposition,"whCd");
        		if(this.gfnIsNull(whCd)){
        			alert("창고코드를 입력해 주세요");
        		}else{
        			this.gfnService("batchInvenSilsaListProcess");
        		}
        		this.gridReload();			
        }

        
        // 재고반영
        this.invenRflt = function ()				
        {							
        		//미반영 상태에서 재고반영을 눌렀는지 검사
        	var currow=this.dsInvenSilsa.rowposition;
        	var invenRflt=this.dsInvenSilsa.getColumn(currow,"invenRflt");
        	if(invenRflt!=1){
        		this.dsInvenSilsa.setColumn(currow,"invenRflt",1);
        	}
        	this.gridReload();	
        }

        // 반영취소
        this.RfltCancel = function ()				
        {							
        	var currow=this.dsInvenSilsa.rowposition;
        	var invenRflt=this.dsInvenSilsa.getColumn(currow,"invenRflt");
        	if(invenRflt==1){
        		this.dsInvenSilsa.setColumn(currow,"invenRflt",2);
        	}
        	this.gridReload();
        }

        this.gridReload = function (){
        	var invenRflt=this.dsInvenSilsa.getColumn(this.dsInvenSilsa.rowposition,"invenRflt");
        	var invenDlineYb=this.dsInvenSilsaDtlInfo.getColumn(0,"invenDlineYb");
        			
        		if(invenRflt == 1){                               									// ******재고반영******	
        			if(invenDlineYb != 1){
        			var onarr = new Array(this.RfltCancelBtn);               							// 반영취소 가능
        			this.on(onarr,1);                                      													// 재고반영 불가능  
        			var offarr = new Array(this.invenRfltBtn,this.addInvenSilsaDtlInfoBtn,this.delInvenSilsaDtlInfoBtn);	// 행추가,삭제 불가능
        			this.on(offarr,0);			
        			}else{
        			var onarr = new Array();               																					// 반영취소 가능
        			this.on(onarr,1);                                      																	// 재고반영 불가능  
        			var offarr = new Array(this.invenRfltBtn,this.RfltCancelBtn,this.addInvenSilsaDtlInfoBtn,this.delInvenSilsaDtlInfoBtn);	// 행추가,삭제 불가능
        			this.on(offarr,0);
        			}																				// 자식 테이블 수정 불가능			
        			for(var i=0; i<this.invenSilsaDtlGrid.getCellCount("Body"); i++){
        				if(invenDlineYb != 1&&i==11){
        					this.invenSilsaDtlGrid.setCellProperty("Body",11,"edittype","checkbox");
        				}else{	
        					this.invenSilsaDtlGrid.setCellProperty("Body",i,"edittype","none");
        				}
        			}
        		}				
        		if(invenRflt == 2){      
        																						// ******반영취소******
        		var onarr = new Array(this.invenRfltBtn,this.addInvenSilsaDtlInfoBtn,this.delInvenSilsaDtlInfoBtn);	// 재고반영 가능
                this.on(onarr,1);                                      								// 반영취소 불가능  
         		var offarr = new Array(this.RfltCancelBtn);     										// 행추가,삭제 가능
                this.on(offarr,0);							          								// 자식 테이블 수정 가능
        			for(var i=0; i<this.invenSilsaDtlGrid.getCellCount("Body"); i++){
        				if(invenDlineYb != 1&&i==11){
        					this.invenSilsaDtlGrid.setCellProperty("Body",11,"edittype","none");
        				}else{
        					this.invenSilsaDtlGrid.setCellProperty("Body",i,"edittype","text");
        				}
        			}
        		}
        	
        }

        /*-------------------------------------------------------------------------------------------------+
        *                                         버튼 Event End                                          *
        ***************************************************************************************************/

        
        //*****************************************************
        // 컴포넌트 활성/비활성화
        //*****************************************************
        this.on = function (onlist,flag){
        	var flagValue=new Array(false," dimgray ");
        	if(flag==1){
        		flagValue=new Array(true," blue ");
        	}
        	for(var i=0; i<onlist.length; i++){
        		onlist[i].set_enable(flagValue[0]);
        		//onlist[i].style.background.set_color(flagValue[1]); 
        		onlist[i].style.set_color(flagValue[1]); 
        	}
        }

        

        
        this.invenSilsaGrid_onselectchanged = function(obj,e)
        {
        	var whCd = this.dsInvenSilsa.getColumn(this.dsInvenSilsa.rowposition, "whCd");	 
        	this.dsInvenSilsaDtlInfo.filter("whCd=='"+whCd+"'");
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LS_InvenSilsaMngntForm_onload, this);
            this.ctrtDateSelStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ctrtDateSelStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.invenSilsaSearchBtn.addEventHandler("onclick", this.button_onclick, this);
            this.invenSilsaGrid.addEventHandler("oncellclick", this.invenSilsaGrid_oncellclick, this);
            this.invenSilsaDtlGrid.addEventHandler("oncellclick", this.invenSilsaDtlGrid_oncellclick, this);
            this.invenRfltBtn.addEventHandler("onclick", this.button_onclick, this);
            this.RfltCancelBtn.addEventHandler("onclick", this.button_onclick, this);
            this.modifyBtn.addEventHandler("onclick", this.button_onclick, this);
            this.insertBtn.addEventHandler("onclick", this.button_onclick, this);
            this.delInvenSilsaDtlInfoBtn.addEventHandler("onclick", this.button_onclick, this);
            this.addInvenSilsaDtlInfoBtn.addEventHandler("onclick", this.button_onclick, this);
            this.addInvenSilsaBtn.addEventHandler("onclick", this.button_onclick, this);
            this.delInvenSilsaBtn.addEventHandler("onclick", this.button_onclick, this);

        };

        this.loadIncludeScript("LS_InvenSilsaForm.xfdl");

       
    };
}
)();

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
                this.set_name("LD_GdsReturnMngntForm");
                this.set_classname("LR_GdsReturnMngntForm");
                this.set_titletext("반품관리");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGdsReturn", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"returnSeq\" type=\"STRING\" size=\"256\"/><Column id=\"returnDate\" type=\"STRING\" size=\"256\"/><Column id=\"returnWhCd\" type=\"STRING\" size=\"256\"/><Column id=\"regdsDept\" type=\"STRING\" size=\"256\"/><Column id=\"regdsAnspName\" type=\"STRING\" size=\"256\"/><Column id=\"returnCau\" type=\"STRING\" size=\"256\"/><Column id=\"whsSeq\" type=\"STRING\" size=\"256\"/><Column id=\"whsDate\" type=\"STRING\" size=\"256\"/><Column id=\"vaildPrid\" type=\"STRING\" size=\"256\"/><Column id=\"returnDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"returnStatCd\" type=\"STRING\" size=\"256\"/><Column id=\"regdsUnit\" type=\"STRING\" size=\"256\"/><Column id=\"regdsQnt\" type=\"STRING\" size=\"256\"/><Column id=\"regdsPrice\" type=\"STRING\" size=\"256\"/><Column id=\"regdsCau\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"AprvWorker\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findGdsReturnList</Col><Col id=\"URL\">his::log/demd/findGdsReturnList.do</Col><Col id=\"outData\">dsGdsReturn=dsGdsReturn</Col><Col id=\"callbackFunc\">findGdsReturnListCallback</Col></Row><Row><Col id=\"serviceID\">batchGdsReturnProcess</Col><Col id=\"URL\">his::log/demd/batchGdsReturnProcess.do</Col><Col id=\"inData\">dsGdsReturn=dsGdsReturn:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGdsReturnHist", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"returnSeq\" type=\"STRING\" size=\"256\"/><Column id=\"returnHistSeq\" type=\"STRING\" size=\"256\"/><Column id=\"returnDate\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"gdsNm\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"qnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.08%", "4", null, "60", "-42.08%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "3.1%", "-4", null, "60", "83.37%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("반품 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("searchDiv", "absolute", "1.28%", "61", null, "177", "0.48%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Radio("GdsRadio", "absolute", "80.75%", "6", null, "22", "8.48%", null, this.searchDiv);
            this.searchDiv.addChild(obj.name, obj);
            var GdsRadio_innerdataset = new Dataset("GdsRadio_innerdataset", this.searchDiv.GdsRadio);
            GdsRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미결</Col></Row></Rows>");
            obj.set_innerdataset(GdsRadio_innerdataset);
            obj.set_taborder("0");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Static("subCodeStc01", "absolute", "74.47%", "3", null, "30", "19.98%", null, this.searchDiv);
            obj.getSetter("taborder").set("1");
            obj.set_text("승인여부");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Edit("reGdsDeptEd", "absolute", "6.93%", "10", null, "32", "83.61%", null, this.searchDiv);
            obj.set_taborder("2");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "1.06%", "13", null, "30", "93.39%", null, this.searchDiv);
            obj.getSetter("taborder").set("3");
            obj.set_text("반품부서");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Button("DelBtn10", "absolute", "16.97%", "12", null, "32", "80.51%", null, this.searchDiv);
            obj.set_taborder("4");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Edit("regdsAnspNmEd", "absolute", "29.28%", "8", null, "32", "58.97%", null, this.searchDiv);
            obj.set_taborder("5");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "22.59%", "10", null, "30", "71.21%", null, this.searchDiv);
            obj.getSetter("taborder").set("6");
            obj.set_text("반품물품명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Edit("returnCauEd", "absolute", "28.87%", "49", null, "32", "60.03%", null, this.searchDiv);
            obj.set_taborder("7");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "22.59%", "50", null, "30", "71.86%", null, this.searchDiv);
            obj.getSetter("taborder").set("8");
            obj.set_text("반품사유");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Calendar("whsDateEd", "absolute", "28.96%", "92", null, "30", "60.85%", null, this.searchDiv);
            this.searchDiv.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("@dsGdsReturn");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_textcolorcolumn("whsDate");
            obj = new Static("subCodeStc06", "absolute", "22.68%", "91", null, "30", "71.78%", null, this.searchDiv);
            obj.getSetter("taborder").set("15");
            obj.set_text("입고일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "22.68%", "131", null, "30", "71.78%", null, this.searchDiv);
            obj.getSetter("taborder").set("16");
            obj.set_text("유효기간");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Calendar("vaildPridEd", "absolute", "28.96%", "132", null, "30", "60.85%", null, this.searchDiv);
            this.searchDiv.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_innerdataset("@dsGdsReturn");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_textcolorcolumn("vaildPrid");
            obj = new Edit("renGdsUnitEd", "absolute", "49.51%", "6", null, "32", "43.31%", null, this.searchDiv);
            obj.set_taborder("18");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "43.31%", "7", null, "30", "51.14%", null, this.searchDiv);
            obj.getSetter("taborder").set("19");
            obj.set_text("반품단위");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Edit("reGdsQntEd", "absolute", "49.51%", "46", null, "32", "43.31%", null, this.searchDiv);
            obj.set_taborder("20");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc09", "absolute", "43.31%", "47", null, "30", "51.14%", null, this.searchDiv);
            obj.getSetter("taborder").set("21");
            obj.set_text("반품수량");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc10", "absolute", "43.31%", "90", null, "30", "51.14%", null, this.searchDiv);
            obj.getSetter("taborder").set("22");
            obj.set_text("반품단가");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Edit("edGdsPriceEd", "absolute", "49.51%", "89", null, "32", "43.31%", null, this.searchDiv);
            obj.set_taborder("23");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Edit("reGdsCauEd", "absolute", "49.51%", "129", null, "32", "26.35%", null, this.searchDiv);
            obj.set_taborder("24");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc11", "absolute", "43.31%", "129", null, "30", "51.14%", null, this.searchDiv);
            obj.getSetter("taborder").set("25");
            obj.set_text("반품내용");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc12", "absolute", "1.06%", "53", null, "30", "91.44%", null, this.searchDiv);
            obj.getSetter("taborder").set("26");
            obj.set_text("반품부서코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Edit("reGdsDeptCdEd", "absolute", "8.97%", "51", null, "32", "81.57%", null, this.searchDiv);
            obj.set_taborder("27");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "91.6%", "64", null, "32", "1.2%", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("searchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("mainDiv", "absolute", "0.72%", "238", null, "508", "0.24%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);
            obj = new Button("delBtn", "absolute", "95.23%", "429", null, "32", "2.26%", null, this.mainDiv);
            obj.set_taborder("0");
            obj.set_cssclass("delBtn");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("delBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("addBtn", "absolute", "92.16%", "429", null, "32", "5.49%", null, this.mainDiv);
            obj.set_taborder("1");
            obj.set_cssclass("addBtn");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("addBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("batchBtn", "absolute", "83.6%", "429", null, "32", "9.37%", null, this.mainDiv);
            obj.set_taborder("2");
            obj.set_cssclass("batchBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("batchBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Grid("gdsReturnGrid", "absolute", "0.97%", "12", null, "408", "0.65%", null, this.mainDiv);
            obj.set_taborder("3");
            obj.set_binddataset("dsGdsReturn");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"79\"/><Column size=\"117\"/><Column size=\"105\"/><Column size=\"81\"/><Column size=\"89\"/><Column size=\"87\"/><Column size=\"81\"/><Column size=\"84\"/><Column size=\"80\"/><Column size=\"87\"/><Column size=\"88\"/><Column size=\"105\"/><Column size=\"112\"/><Column size=\"83\"/><Column size=\"106\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"반품순번\"/><Cell col=\"1\" text=\"반품일\"/><Cell col=\"2\" text=\"반품창고 코드\"/><Cell col=\"3\" text=\"반품부서코드\"/><Cell col=\"4\" text=\"반품부서\"/><Cell col=\"5\" text=\"반품 물품명\"/><Cell col=\"6\" text=\"반품 사유\"/><Cell col=\"7\" text=\"입고순번\"/><Cell col=\"8\" text=\"입고일\"/><Cell col=\"9\" text=\"유효기간\"/><Cell col=\"10\" text=\"반품단위\"/><Cell col=\"11\" text=\"반품수량\"/><Cell col=\"12\" edittype=\"normal\" text=\"반품단가\"/><Cell col=\"13\" edittype=\"normal\" text=\"반품내용\"/><Cell col=\"14\" text=\"승인처리\"/><Cell col=\"15\" text=\"승인자\"/></Band><Band id=\"body\"><Cell text=\"bind:returnSeq\"/><Cell col=\"1\" text=\"bind:returnDate\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:returnWhCd\"/><Cell col=\"3\" text=\"bind:returnDeptCd\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:regdsDept\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:regdsAnspName\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:returnCau\"/><Cell col=\"7\" text=\"bind:whsSeq\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:whsDate\"/><Cell col=\"9\" edittype=\"none\" text=\"bind:vaildPrid\"/><Cell col=\"10\" edittype=\"none\" text=\"bind:regdsUnit\"/><Cell col=\"11\" edittype=\"none\" text=\"bind:regdsQnt\"/><Cell col=\"12\" text=\"bind:regdsPrice\"/><Cell col=\"13\" text=\"bind:regdsCau\"/><Cell col=\"14\" text=\"bind:aprvYn\"/><Cell col=\"15\" text=\"bind:AprvWorker\"/></Band></Format></Formats>");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("gdsSuccesBtn", "absolute", "0.97%", "432", null, "32", "91.76%", null, this.mainDiv);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::permitBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("GdsSuccesBtn");
            obj.set_cssclass("GdsSuccesBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("gdsReturnBtn", "absolute", "9.29%", "432", null, "32", "83.44%", null, this.mainDiv);
            obj.set_taborder("5");
            obj.set_cssclass("GdsReturnBtn");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("gdsReturnBtn");
            this.mainDiv.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 0, 177, this.searchDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.searchDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 508, this.mainDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");

            	}
            );
            this.mainDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LR_GdsReturnMngntForm");
            		p.set_titletext("반품관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","searchDiv.reGdsDeptEd","value","dsGdsReturn","regdsDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","searchDiv.reGdsDeptCdEd","value","dsGdsReturn","returnDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","searchDiv.regdsAnspNmEd","value","dsGdsReturn","regdsAnspName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","searchDiv.returnCauEd","value","dsGdsReturn","returnCau");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","searchDiv.renGdsUnitEd","value","dsGdsReturn","regdsUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","searchDiv.reGdsQntEd","value","dsGdsReturn","regdsQnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","searchDiv.edGdsPriceEd","value","dsGdsReturn","regdsPrice");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","searchDiv.reGdsCauEd","value","dsGdsReturn","regdsCau");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","searchDiv.whsDateEd","value","dsGdsReturn","whsDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","searchDiv.vaildPridEd","value","dsGdsReturn","vaildPrid");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LD_GdsReturnMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("LD_GdsReturnMngntForm.xfdl", function() {

        
        /********************************************************************************
        *                                                                               *
        * 물품 반납관리																	*
        *                                                                               *
        * @Path		    log-LD_gdsReturnMngntForm										*
        *																				*
        * @Description 	물품 반납관리에서 물품 반납 등록,수정,삭제,조회한다.			*
        *               																*
        * @Author	    전보현    						                                *
        * 									                                            *
        * Created on 2016. 05. 30                            		                    *
        *									                                            *
        ********************************************************************************/

        
        /***************************************************************************************************
        *                                         공통 Script Include                                      *
        ***************************************************************************************************/
        //include "scripts::commonScripts.xjs";

        
        var radio;

        this.searchReDeptBtn_onclick = function(obj,e)
        {
        	this.gfnCodePopup("GP500", "false");
        }

        this.searchBtn_onclick = function(obj,e)
        {
        	//var regds = this.mainDiv.reDeptEd.value;
        	//var regdsDept = "REGDS_DEPT='"+regds+"'";
        	//trace("test="+regdsDept);
        //	this.dsLrGdsReturn.setColumn(0, "regdsDept", regdsDept);
        	//this.dsService.setColumn(0, "argument", regdsDept);
        	
        	radio=this.searchDiv.GdsRadio.value;
        	this.gfnService("findGdsReturnList",false);
        }

        this.findGdsReturnListCallback = function(svcID,errorCode,errorMsg)
        {
        	
        	//trace(this.dsGdsReturn.saveXML());
        	if(radio == 1)
        	{
        		this.dsGdsReturn.filter("");
        		this.dsGdsReturn.filter("aprvYn=='Y'");
        	}
        	else if(radio == 2)
        	{
        	    this.dsGdsReturn.filter("");
        	    this.dsGdsReturn.filter("aprvYn=='N'");  
        	}
        	
        	
        }

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
        	this.dsGdsReturn.addRow();
        	var count = this.mainDiv.gdsReturnGrid.currentrow;
        	var setNo = this.mainDiv.gdsReturnGrid.currentrow+1;
        	
        	var objDate = new Date();
        	var year = objDate.getFullYear() +"";
        	var cutYear = year.substr(2,3);
        	
        	var setDownCount = "RE"+cutYear+"0"+setNo;
        	var setUpCount = "RE"+cutYear+setNo;
        	
        	var setSeq = this.mainDiv.gdsReturnGrid.currentrow+1;
        	
        	
        	if(setNo < 10){
        		this.dsGdsReturn.setColumn(count, "returnSeq", setDownCount);
        	}else{
        		this.dsGdsReturn.setColumn(count, "returnSeq", setUpCount);
        	}
        		
        	if(setSeq < 10){
        		var setWhsSeq = "WHS"+"000"+setSeq;
        		this.dsGdsReturn.setColumn(count, "whsSeq", setWhsSeq);
        	}else if(setSeq < 100){
        		var setWhsSeq = "WHS"+"00"+setSeq;
        		this.dsGdsReturn.setColumn(count, "whsSeq", setWhsSeq);
        	}else if(setSeq < 1000){
        		var setWhsSeq = "WHS"+"0"+setSeq;
        		this.dsGdsReturn.setColumn(count, "whsSeq", setWhsSeq);
        	}else if(setSeq >= 1000){
        		var setWhsSeq = "WHS"+setSeq;
        		this.dsGdsReturn.setColumn(count, "whsSeq", setWhsSeq);
        	}

        	
        	this.dsGdsReturn.setColumn(count, "returnDate", this.Today());
        	this.dsGdsReturn.setColumn(count, "returnHistSeq", setNo+1);
        	this.dsGdsReturn.setColumn(count, "aprvYn", "N");
        }

        

        this.delBtn_onclick = function(obj,e)
        {
        	this.dsGdsReturn.deleteRow(this.mainDiv.gdsReturnGrid.currentrow);
        }

        this.mainDiv_batchBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchGdsReturnProcess", "false");
        }

        this.mainDiv_gdsSuccesBtn_onclick = function(obj,e)
        {
        	var selCount = this.mainDiv.gdsReturnGrid.currentrow;
        	this.dsGdsReturn.setColumn(selCount,"aprvYn", "Y");
        }

        this.mainDiv_gdsReturnBtn_onclick = function(obj,e)
        {
        	var cancelCount = this.mainDiv.gdsReturnGrid.currentrow;
        	this.dsGdsReturn.setColumn(cancelCount,"aprvYn", "N");
        }

        this.searchDiv_whsDateEd_onchanged = function(obj,e)
        {
        	var no = this.mainDiv.gdsReturnGrid.currentrow;
        	var setCalendar = this.searchDiv.whsDateEd.value;
        	this.dsGdsReturn.setColumn(no, "whsDate", setCalendar)
        }

        this.searchDiv_vaildPridEd_onchanged = function(obj,e)
        {
        	var no = this.mainDiv.gdsReturnGrid.currentrow;
        	var setCalendar = this.searchDiv.vaildPridEd.value;
        	this.dsGdsReturn.setColumn(no, "vaildPrid", setCalendar)
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.searchDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.DelBtn10.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.searchDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.whsDateEd.addEventHandler("onchanged", this.searchDiv_whsDateEd_onchanged, this);
            this.searchDiv.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.vaildPridEd.addEventHandler("onchanged", this.searchDiv_vaildPridEd_onchanged, this);
            this.searchDiv.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.subCodeStc11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDiv.subCodeStc12.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.mainDiv.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.mainDiv.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.mainDiv.batchBtn.addEventHandler("onclick", this.mainDiv_batchBtn_onclick, this);
            this.mainDiv.gdsSuccesBtn.addEventHandler("onclick", this.mainDiv_gdsSuccesBtn_onclick, this);
            this.mainDiv.gdsReturnBtn.addEventHandler("onclick", this.mainDiv_gdsReturnBtn_onclick, this);

        };

        this.loadIncludeScript("LD_GdsReturnMngntForm.xfdl");

       
    };
}
)();

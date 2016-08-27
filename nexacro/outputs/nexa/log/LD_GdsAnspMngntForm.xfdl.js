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
                this.set_name("LD_GdsAnspMngntForm");
                this.set_classname("LW_GdsAnspMngntForm");
                this.set_titletext("물품청구관리");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGdsAnsp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"gdsAnspNo\" type=\"STRING\" size=\"256\"/><Column id=\"anspDate\" type=\"STRING\" size=\"256\"/><Column id=\"anspDept\" type=\"STRING\" size=\"256\"/><Column id=\"progStat\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGdsAnspHist", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"gdsAnspNo\" type=\"STRING\" size=\"256\"/><Column id=\"anspHistNo\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"gdsNm\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"price\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"histAnspQnt\" type=\"STRING\" size=\"256\"/><Column id=\"histAnspDiv\" type=\"STRING\" size=\"256\"/><Column id=\"histRlsWh\" type=\"STRING\" size=\"256\"/><Column id=\"histAnspCon\" type=\"STRING\" size=\"256\"/><Column id=\"histRespoWorker\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findGdsAnspList</Col><Col id=\"URL\">his::log/demd/findGdsAnspList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsGdsAnsp=dsGdsAnsp</Col></Row><Row><Col id=\"serviceID\">findGdsAnspHistList</Col><Col id=\"URL\">his::log/demd/findGdsAnspHistList.do</Col><Col id=\"outData\">dsGdsAnspHist=dsGdsAnspHist</Col></Row><Row><Col id=\"serviceID\">batchGdsAnspProcess</Col><Col id=\"URL\">his::log/demd/batchGdsAnspProcess.do</Col><Col id=\"outData\"/><Col id=\"inData\">dsGdsAnsp=dsGdsAnsp:u</Col></Row><Row><Col id=\"serviceID\">batchGdsAnspHistProcess</Col><Col id=\"URL\">his::log/demd/batchGdsAnspHistProcess.do</Col><Col id=\"outData\"/><Col id=\"inData\">dsGdsAnspHist=dsGdsAnspHist:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAnspDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">위생재료</Col></Row><Row><Col id=\"value\">사무용품</Col></Row><Row><Col id=\"value\">전산소모품</Col></Row><Row><Col id=\"value\">인쇄물</Col></Row><Row><Col id=\"value\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.16%", "4", null, "60", "-42.08%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "3.1%", "-4", null, "60", "83.37%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("물품청구 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("formDiv", "absolute", "0.4%", "63", null, "701", "0.24%", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Div("searchDiv", "absolute", "0.81%", "-3", null, "39", "0.97%", null, this.formDiv);
            obj.set_taborder("0");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.formDiv.addChild(obj.name, obj);
            obj = new Div("subDiv", "absolute", "40.1%", "41", null, "132", "0.97%", null, this.formDiv);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.formDiv.addChild(obj.name, obj);
            obj = new Calendar("anspCalendar", "absolute", "9.98%", "1", null, "30", "79.95%", null, this.formDiv);
            this.formDiv.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj = new Static("subCodeStc00", "absolute", "1.85%", "1", null, "30", "90.74%", null, this.formDiv);
            obj.getSetter("taborder").set("3");
            obj.set_text("청구일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "22.95%", "1", null, "30", "69.57%", null, this.formDiv);
            obj.getSetter("taborder").set("4");
            obj.set_text("청구부서");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Edit("anspDeptEd", "absolute", "31.08%", "1", null, "30", "61.51%", null, this.formDiv);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            this.formDiv.addChild(obj.name, obj);
            obj = new Button("addDeptBtn", "absolute", "38.97%", "1", null, "32", "58.45%", null, this.formDiv);
            obj.set_taborder("5");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("AddBtn");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "41.22%", "51", null, "30", "51.37%", null, this.formDiv);
            obj.getSetter("taborder").set("6");
            obj.set_text("물품코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "41.22%", "91", null, "30", "51.37%", null, this.formDiv);
            obj.getSetter("taborder").set("7");
            obj.set_text("물품명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "41.22%", "131", null, "30", "51.37%", null, this.formDiv);
            obj.getSetter("taborder").set("8");
            obj.set_text("청구구분");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "60.06%", "51", null, "30", "32.45%", null, this.formDiv);
            obj.getSetter("taborder").set("9");
            obj.set_text("담당자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "78.66%", "51", null, "30", "13.93%", null, this.formDiv);
            obj.getSetter("taborder").set("10");
            obj.set_text("물품청구번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "60.06%", "92", null, "30", "32.45%", null, this.formDiv);
            obj.getSetter("taborder").set("11");
            obj.set_text("청구수량");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "78.66%", "92", null, "30", "13.93%", null, this.formDiv);
            obj.getSetter("taborder").set("12");
            obj.set_text("단위");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.formDiv.addChild(obj.name, obj);
            obj = new Edit("gdsCodeEd", "absolute", "49.19%", "51", null, "30", "43.48%", null, this.formDiv);
            obj.set_taborder("14");
            obj.style.set_align("middle");
            this.formDiv.addChild(obj.name, obj);
            obj = new Edit("respoWorkerEd", "absolute", "68.36%", "51", null, "30", "22.3%", null, this.formDiv);
            obj.set_taborder("15");
            obj.style.set_align("middle");
            this.formDiv.addChild(obj.name, obj);
            obj = new Edit("gdsAnspNoEd", "absolute", "86.96%", "51", null, "30", "4.43%", null, this.formDiv);
            obj.set_taborder("16");
            obj.style.set_align("middle");
            this.formDiv.addChild(obj.name, obj);
            obj = new Button("addGdsCodeBtn", "absolute", "57%", "49", null, "32", "40.42%", null, this.formDiv);
            obj.set_taborder("17");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("AddBtn");
            this.formDiv.addChild(obj.name, obj);
            obj = new Edit("gdsNmEd", "absolute", "49.19%", "91", null, "30", "40.9%", null, this.formDiv);
            obj.set_taborder("18");
            obj.style.set_align("middle");
            this.formDiv.addChild(obj.name, obj);
            obj = new Edit("unitEd", "absolute", "86.96%", "91", null, "30", "4.43%", null, this.formDiv);
            obj.set_taborder("19");
            obj.style.set_align("middle");
            this.formDiv.addChild(obj.name, obj);
            obj = new Edit("anspQntEd", "absolute", "68.36%", "91", null, "30", "22.3%", null, this.formDiv);
            obj.set_taborder("20");
            obj.style.set_align("middle");
            this.formDiv.addChild(obj.name, obj);
            obj = new Combo("anspDivCombo", "absolute", "48.95%", "132", null, "30", "44.77%", null, this.formDiv);
            this.formDiv.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_innerdataset("@dsAnspDiv");
            obj.set_datacolumn("value");
            obj = new Edit("anspConEd", "absolute", "55.88%", "131", null, "30", "4.43%", null, this.formDiv);
            obj.set_taborder("22");
            obj.style.set_align("middle");
            this.formDiv.addChild(obj.name, obj);
            obj = new Grid("lwGdsAnspGrid", "absolute", "0.72%", "41", null, "572", "60.39%", null, this.formDiv);
            obj.set_taborder("23");
            obj.set_binddataset("dsGdsAnsp");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"116\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"물품청구번호\"/><Cell col=\"1\" text=\"청구일\"/><Cell col=\"2\" text=\"청구부서\"/><Cell col=\"3\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:gdsAnspNo\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:anspDate\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:anspDept\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:progStat\"/></Band></Format></Formats>");
            this.formDiv.addChild(obj.name, obj);
            obj = new Grid("lwGdsAnspHistGrid", "absolute", "40.1%", "181", null, "433", "0.81%", null, this.formDiv);
            obj.set_taborder("24");
            obj.set_binddataset("dsGdsAnspHist");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"115\"/><Column size=\"109\"/><Column size=\"74\"/><Column size=\"82\"/><Column size=\"62\"/><Column size=\"40\"/><Column size=\"74\"/><Column size=\"75\"/><Column size=\"99\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"물품청구번호\"/><Cell col=\"1\" text=\"청구상세번호\"/><Cell col=\"2\" text=\"물품코드\"/><Cell col=\"3\" text=\"물품명\"/><Cell col=\"4\" text=\"담당자\"/><Cell col=\"5\" text=\"단위\"/><Cell col=\"6\" text=\"청구수량\"/><Cell col=\"7\" text=\"청구구분\"/><Cell col=\"8\" text=\"청구내용\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:gdsAnspNo\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:anspHistNo\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:gdsCd\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:gdsNm\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:histRespoWorker\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:unit\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:histAnspQnt\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:histAnspDiv\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:histAnspCon\"/></Band></Format></Formats>");
            this.formDiv.addChild(obj.name, obj);
            obj = new Button("searchBtn", "absolute", "91.06%", "1", null, "32", "1.77%", null, this.formDiv);
            obj.set_taborder("25");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("SearchBtn");
            this.formDiv.addChild(obj.name, obj);
            obj = new Button("aprvSucsBtn", "absolute", "1.53%", "621", null, "30", "93.32%", null, this.formDiv);
            obj.set_taborder("26");
            obj.set_text("승인완료");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.formDiv.addChild(obj.name, obj);
            obj = new Button("aprvCanBtn", "absolute", "6.92%", "621", null, "30", "87.84%", null, this.formDiv);
            obj.set_taborder("27");
            obj.set_text("승인취소");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.formDiv.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "33.84%", "680", null, "32", "63.6%", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn", "absolute", "37.04%", "680", null, "32", "60.4%", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("histAddBtn", "absolute", "93.2%", "680", null, "32", "4.24%", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("histAddBtn");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("histAddBtn");
            this.addChild(obj.name, obj);

            obj = new Button("histDelBtn", "absolute", "96.4%", "680", null, "32", "1.04%", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("histDelBtn");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("histDelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "25.28%", "682", null, "32", "67.52%", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn02", "absolute", "85.36%", "680", null, "32", "7.44%", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("histBatchBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("histBatchBtn");
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
            obj = new Layout("default", "", 0, 39, this.formDiv.searchDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.formDiv.searchDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 132, this.formDiv.subDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.formDiv.subDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 701, this.formDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.formDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LW_GdsAnspMngntForm");
            		p.set_titletext("물품청구관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","formDiv.gdsCodeEd","value","dsGdsAnspHist","gdsCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","formDiv.respoWorkerEd","value","dsGdsAnspHist","histRespoWorker");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","formDiv.gdsAnspNoEd","value","dsGdsAnspHist","gdsAnspNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","formDiv.gdsNmEd","value","dsGdsAnspHist","gdsNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","formDiv.anspQntEd","value","dsGdsAnspHist","histAnspQnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","formDiv.unitEd","value","dsGdsAnspHist","unit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","formDiv.anspConEd","value","dsGdsAnspHist","histAnspCon");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","formDiv.respoWorkerEd","","dsGdsAnspHist","histRespoWorker");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LD_GdsAnspMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("LD_GdsAnspMngntForm.xfdl", "scripts::logScripts.xjs");
        this.addIncludeScript("LD_GdsAnspMngntForm.xfdl", "scripts::commonUtil.xjs");
        this.addIncludeScript("LD_GdsAnspMngntForm.xfdl", "scripts::commonPopup.xjs");
        this.registerScript("LD_GdsAnspMngntForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        *물품청구 관리																*
        *                                                                               *
        * @Path		    log-LW_gdsAnspMngntForm											*
        *																				*
        * @Description 	물품청구관리에서 물품청구 등록,수정,삭제,조회 하고		*
        *               등록한 물품을 승인완료,승인취소를 한다.					*
        *               																*
        * @Author	    전보현    						                                *
        * 									                                            *
        * Created on 2016. 05.29                             		                    *
        *									                                            *
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include "scripts::logScripts.xjs";
        //include "scripts::commonUtil.xjs";
        //include "scripts::commonPopup.xjs";	
        /***************************************************************************************************
        *                                         물품청구  조회                                     *
        ***************************************************************************************************/
        var calValue;
        var anspDept;

        this.formDiv_searchBtn_onclick = function(obj,e)
        {
        	calValue = this.formDiv.anspCalendar.value;
        	//alert(calValue);
        	var searchCalValue = calValue+""
        	var anspDate = searchCalValue.substring(0, 6);
        	anspDept = this.formDiv.anspDeptEd.value;
        	var findGdsAnsp = "ANSP_DATE='"+anspDate+"'"+"ANSP_DEPT='"+anspDept+"'";
        //	alert(findLwGdsAnsp);
        	
        	if(anspDept == null){
        		alert("청구부서를 선택해주세요!");
        	}
        	this.dsService.setColumn(0, "argument", findGdsAnsp);
        //	trace(this.gfnService);
        	this.gfnService("findGdsAnspList", "false");
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

        
        this.LW_GdsAnspMngntForm_onload = function(obj,e)
        {
        	this.formDiv.anspCalendar.set_value(this.Today());
        }

        this.formDiv_addGdsCodeBtn_onclick = function(obj,e)
        {
        	this.openLogCdDialog("gds");
        }

        
        /***************************************************************************************************
        *                                         청구목록 선택                                     *
        ***************************************************************************************************/
        this.formDiv_lwGdsAnspGrid_oncelldblclick = function(obj,e)
        {
        	var cellVal = this.dsGdsAnsp.getColumn(this.formDiv.lwGdsAnspGrid.currentrow, "gdsAnspNo");
        //	alert(val);
        	var gdsAnspNo = "GDS_ANSP_NO='"+cellVal+"'";
        //	alert(gdsAnspNo);
        	this.dsService.setColumn(1, "argument", gdsAnspNo);
        //	trace(this.gfnService);
        	this.gfnService("findGdsAnspHistList", "false");
        }

        
        /***************************************************************************************************
        *                                         물품청구 추가                                     *
        ***************************************************************************************************/
        this.addBtn_onclick = function(obj,e)
        {
        	this.dsGdsAnsp.addRow();
        	
        	var gdsAnspNo;
        	var count = this.formDiv.lwGdsAnspGrid.currentrow;
        	var codeNo = this.formDiv.lwGdsAnspGrid.currentrow+1;
        	var code = this.formDiv.lwGdsAnspGrid.currentrow-1;
        	
        	var setDept = this.formDiv.anspDeptEd.value;
        	var defStat = "접수대기";
        	
        	var objDate = new Date();
        	var year = objDate.getFullYear() +"";
        	var cutYear = year.substr(2,3);
        		
        	var lastCol = this.dsGdsAnsp.getColumn(code ,"gdsAnspNo");
        	
        	if(codeNo < 10){
        		gdsAnspNo = "GDS"+cutYear+"00"+codeNo;
        	}else if(codeNo < 100){
        		gdsAnspNo = "GDS"+cutYear+"0"+codeNo;
        	}else if(codeNo < 1000){
        		gdsAnspNo = "GDS"+cutYear+codeNo;
        	}
        	
        	
        	
        	if(lastCol == gdsAnspNo){
        		var setAnspNo = this.formDiv.lwGdsAnspGrid.currentrow+2;
        		
        		if(code < 10){
        			gdsAnspNo = "GDS"+cutYear+"00"+setAnspNo;
        		}else if(code <100){
        			gdsAnspNo = "GDS"+cutYear+"0"+setAnspNo;
        		}else if(code <1000){
        			gdsAnspNo = "GDS"+cutYear+setAnspNo;
        		}
        	} 
        	this.dsGdsAnsp.setColumn(count, "gdsAnspNo", gdsAnspNo)
        	this.dsGdsAnsp.setColumn(count, "anspDate", calValue);
        	this.dsGdsAnsp.setColumn(count, "anspDept", setDept);
        }
        /***************************************************************************************************
        *                                         물품청구 삭제                                    	 *
        ***************************************************************************************************/
        this.DelBtn_onclick = function(obj,e)
        {
        	this.dsGdsAnsp.deleteRow(this.formDiv.lwGdsAnspGrid.currentrow);
        }

        
        /***************************************************************************************************
        *                                         진행상태 변경(승인)                                   *
        ***************************************************************************************************/
        this.formDiv_aprvSucsBtn_onclick = function(obj,e)
        {
        	var recStat = "접수대기";
        	var selCount = this.formDiv.lwGdsAnspGrid.currentrow;
        	this.dsGdsAnsp.setColumn(selCount, "progStat", recStat);
        }

        
        /***************************************************************************************************
        *                                         진행상태 취소(반려)                                     *
        ***************************************************************************************************/
        this.formDiv_aprvCanBtn_onclick = function(obj,e)
        {
        	var cancleStat = "반려";
        	var cancleCount = this.formDiv.lwGdsAnspGrid.currentrow;
        	this.dsGdsAnsp.setColumn(cancleCount, "progStat", cancleStat);
        }

        /***************************************************************************************************
        *                                         물품청구 일괄처리                                     *
        ***************************************************************************************************/
        this.batchBtn_onclick = function(obj,e)
        {
        	alert("완료");
        	this.gfnService("batchGdsAnspProcess", "false");
        }

        /***************************************************************************************************
        *                                         물품청구 상세정보 추가                                   *
        ***************************************************************************************************/
        this.histAddBtn_onclick = function(obj,e)
        {
        	this.dsGdsAnspHist.addRow();
        	var selCount = this.formDiv.lwGdsAnspHistGrid.currentrow;
        	var setAnspHistNo = this.formDiv.lwGdsAnspHistGrid.currentrow+1;
        	
        	var test = this.formDiv.lwGdsAnspGrid.currentrow;
        //	alert("aaa==="+test);
        	var setGdsAnspNo = this.dsGdsAnsp.getColumn(test, "gdsAnspNo");
        //	alert(setGdsAnspNo);
        	              
        	     
        	this.dsGdsAnspHist.setColumn(selCount, "gdsAnspNo", setGdsAnspNo);
        	this.dsGdsAnspHist.setColumn(selCount, "anspHistNo", setAnspHistNo);
        }

        /***************************************************************************************************
        *                                         물품청구 상세정보 삭제                                *
        ***************************************************************************************************/

        this.histDelBtn_onclick = function(obj,e)
        {
        	this.dsGdsAnspHist.deleteRow(this.formDiv.lwGdsAnspHistGrid.currentrow);
        }
        /***************************************************************************************************
        *                                         물품청구 상세정보 일괄처리                            *
        ***************************************************************************************************/
        this.DelBtn02_onclick = function(obj,e)
        {
        	this.gfnService("batchGdsAnspHistProcess", "false");
        }

        this.formDiv_addDeptBtn_onclick = function(obj,e)
        {
        	this.gfnCodePopup("GP500", "false");
        	
        }
        this.setCode=function(code,arr)
        { 
           //부모창에서 셋팅을 완료함.
        	this.formDiv.anspDeptEd.set_value(arr[0]);
        	//this.deptNmEd.set_value(arr[1]); 
        }

        this.formDiv_anspDivCombo_onitemchanged = function(obj,e)
        {
        	var selCount = this.formDiv.lwGdsAnspHistGrid.currentrow;
        	this.dsGdsAnspHist.setColumn(selCount,"histAnspDiv", this.formDiv.anspDivCombo.value);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LW_GdsAnspMngntForm_onload, this);
            this.formDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.addDeptBtn.addEventHandler("onclick", this.formDiv_addDeptBtn_onclick, this);
            this.formDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.formDiv.addGdsCodeBtn.addEventHandler("onclick", this.formDiv_addGdsCodeBtn_onclick, this);
            this.formDiv.anspDivCombo.addEventHandler("onitemchanged", this.formDiv_anspDivCombo_onitemchanged, this);
            this.formDiv.lwGdsAnspGrid.addEventHandler("oncelldblclick", this.formDiv_lwGdsAnspGrid_oncelldblclick, this);
            this.formDiv.searchBtn.addEventHandler("onclick", this.formDiv_searchBtn_onclick, this);
            this.formDiv.aprvSucsBtn.addEventHandler("onclick", this.formDiv_aprvSucsBtn_onclick, this);
            this.formDiv.aprvCanBtn.addEventHandler("onclick", this.formDiv_aprvCanBtn_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.DelBtn.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.histAddBtn.addEventHandler("onclick", this.histAddBtn_onclick, this);
            this.histDelBtn.addEventHandler("onclick", this.histDelBtn_onclick, this);
            this.batchBtn.addEventHandler("onclick", this.batchBtn_onclick, this);
            this.DelBtn02.addEventHandler("onclick", this.DelBtn02_onclick, this);

        };

        this.loadIncludeScript("LD_GdsAnspMngntForm.xfdl");

       
    };
}
)();

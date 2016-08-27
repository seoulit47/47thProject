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
                this.set_name("SN_CarteMgtForm");
                this.set_classname("SN_MenuMgtForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findDivList</Col><Col id=\"URL\">his::sup/nutritive/findDivList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsCode=dsCode</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findCarteList</Col><Col id=\"URL\">his::sup/nutritive/findCarteList.do</Col><Col id=\"outData\">dsCarte=dsCarte</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findDCarteList</Col><Col id=\"URL\">his::sup/nutritive/findDCarteList.do</Col><Col id=\"inData\">[Undefined]</Col><Col id=\"outData\">dsDCarte=dsDCarte</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchCarteProces</Col><Col id=\"URL\">his::sup/nutritive/batchCarteProcess.do</Col><Col id=\"inData\">dsBreakfast=dsBreakfast:U dsLunch=dsLunch:U dsDinner=dsDinner:U</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"smallCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCode2", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"smallCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCarte", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"menuGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"carteDate\" type=\"STRING\" size=\"256\"/><Column id=\"carteTime\" type=\"STRING\" size=\"256\"/><Column id=\"rNum\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBreakfast", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"menuGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"carteDate\" type=\"STRING\" size=\"256\"/><Column id=\"carteTime\" type=\"STRING\" size=\"256\"/><Column id=\"rNum\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLunch", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"menuGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"carteDate\" type=\"STRING\" size=\"256\"/><Column id=\"carteTime\" type=\"STRING\" size=\"256\"/><Column id=\"rNum\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDinner", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"menuGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"carteDate\" type=\"STRING\" size=\"256\"/><Column id=\"carteTime\" type=\"STRING\" size=\"256\"/><Column id=\"rNum\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDCarte", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"breakfast1\" type=\"STRING\" size=\"256\"/><Column id=\"lunch1\" type=\"STRING\" size=\"256\"/><Column id=\"dinner1\" type=\"STRING\" size=\"256\"/><Column id=\"breakfast2\" type=\"STRING\" size=\"256\"/><Column id=\"lunch2\" type=\"STRING\" size=\"256\"/><Column id=\"dinner2\" type=\"STRING\" size=\"256\"/><Column id=\"breakfast3\" type=\"STRING\" size=\"256\"/><Column id=\"lunch3\" type=\"STRING\" size=\"256\"/><Column id=\"dinner3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "2.16%", "407", null, "311", "2.32%", null, this);
            obj.set_taborder("30");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "2.16%", "61", null, "338", "2.32%", null, this);
            obj.set_taborder("29");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "2.24%", "61", null, "30", "79.04%", null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("  식단등록");
            obj.style.set_background("gainsboro");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "0", "1250", "60", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("transparent URL('img::titleBar2.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5.12%", "-3", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("식단관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "3.52%", "98", null, "30", "88%", null, this);
            obj.set_taborder("3");
            obj.set_text("급식일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Calendar("dateCal", "absolute", "12.56%", "98", null, "31", "73.12%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Div("Div02", "absolute", "38.24%", "98", null, "30", "53.28%", null, this);
            obj.set_taborder("5");
            obj.set_text("식단분류");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Combo("divCombo", "absolute", "47.12%", "98", null, "31", "38.56%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@dsCode");
            obj.set_datacolumn("fullName");
            obj.set_codecolumn("smallCode");

            obj = new Button("searchBtn", "absolute", "1115", "98", "90", "32", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Grid("breakfastGrid", "absolute", "3.52%", "136", null, "218", "66%", null, this);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("dsBreakfast");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"200\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"조식\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell row=\"1\" text=\"음식코드\"/><Cell row=\"1\" col=\"1\" text=\"음식명\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/></Band><Band id=\"body\"><Cell text=\"bind:foodCd\"/><Cell col=\"1\" text=\"bind:foodNm\"/><Cell col=\"2\" text=\"bind:carteDate\"/><Cell col=\"3\" text=\"bind:carteTime\"/><Cell col=\"4\" text=\"bind:menuGrpCd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("lunchGrid", "absolute", "34.64%", "136", null, "218", "34.88%", null, this);
            obj.set_taborder("9");
            obj.set_binddataset("dsLunch");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"158\"/><Column size=\"192\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"중식\"/><Cell row=\"1\" text=\"음식코드\"/><Cell row=\"1\" col=\"1\" text=\"음식명\"/></Band><Band id=\"body\"><Cell text=\"bind:foodCd\"/><Cell col=\"1\" text=\"bind:foodNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("dinnerGrid", "absolute", "65.76%", "136", null, "218", "3.76%", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("dsDinner");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"190\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"석식\"/><Cell row=\"1\" text=\"음식코드\"/><Cell row=\"1\" col=\"1\" text=\"음식명\"/></Band><Band id=\"body\"><Cell text=\"bind:foodCd\"/><Cell col=\"1\" text=\"bind:foodNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "2.16%", "407", null, "30", "79.12%", null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("  식단조회");
            obj.style.set_background("gainsboro");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "1131", "728", "90", "32", null, null, this);
            obj.set_taborder("19");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "3.52%", "445", null, "30", "88%", null, this);
            obj.set_taborder("21");
            obj.set_text("급식일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Calendar("startDateCal", "absolute", "12.4%", "445", null, "31", "75.04%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Div("Div04", "absolute", "51.92%", "445", null, "30", "39.6%", null, this);
            obj.set_taborder("23");
            obj.set_text("식단분류");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Combo("divCombo2", "absolute", "60.8%", "445", null, "31", "24.88%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_innerdataset("@dsCode2");
            obj.set_datacolumn("fullName");
            obj.set_codecolumn("smallCode");

            obj = new Button("searchBtn2", "absolute", "1115", "445", "90", "32", null, null, this);
            obj.set_taborder("25");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Calendar("endDateCal", "absolute", "27.76%", "445", null, "31", "59.68%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_enable("false");
            obj.set_readonly("false");
            obj.set_editformat("yyyy-m-d");

            obj = new Static("Static01", "absolute", "25.92%", "447", null, "31", "71.76%", null, this);
            obj.getSetter("taborder").set("27");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("menuCopyBtn", "absolute", "28", "728", "110", "32", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("@gradation URL('img::menuCopyBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Div("btnBox", "absolute", "2.72%", "353", null, "45", "2.56%", null, this);
            obj.set_taborder("31");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            obj = new Button("dinnerMinusBtn", "absolute", "1139", "5", "32", "32", null, null, this.btnBox);
            obj.set_taborder("0");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("dinnerPlusBtn", "absolute", "1105", "5", "32", "32", null, null, this.btnBox);
            obj.set_taborder("1");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("lunchMinusBtn", "absolute", "750", "5", "32", "32", null, null, this.btnBox);
            obj.set_taborder("2");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("lunchPlusBtn", "absolute", "716", "5", "32", "32", null, null, this.btnBox);
            obj.set_taborder("3");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("bfPlusBtn", "absolute", "326", "5", "32", "32", null, null, this.btnBox);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("bfMinusBtn", "absolute", "361", "5", "32", "32", null, null, this.btnBox);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);

            obj = new Grid("menuGrid", "absolute", "2.24%", "483", null, "221", "3.6%", null, this);
            obj.set_taborder("32");
            obj.set_autofittype("col");
            obj.set_suppresslevel("allskip");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsDCarte");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" mask=\"####-##-##\"/><Cell col=\"3\" colspan=\"3\" mask=\"####-##-##\"/><Cell col=\"6\" colspan=\"3\" mask=\"####-##-##\"/><Cell row=\"1\" text=\"조식\"/><Cell row=\"1\" col=\"1\" text=\"중식\"/><Cell row=\"1\" col=\"2\" text=\"석식\"/><Cell row=\"1\" col=\"3\" text=\"조식\"/><Cell row=\"1\" col=\"4\" text=\"중식\"/><Cell row=\"1\" col=\"5\" text=\"석식\"/><Cell row=\"1\" col=\"6\" text=\"조식\"/><Cell row=\"1\" col=\"7\" text=\"중식\"/><Cell row=\"1\" col=\"8\" text=\"석식\"/></Band><Band id=\"body\"><Cell text=\"bind:breakfast1\"/><Cell col=\"1\" text=\"bind:lunch1\"/><Cell col=\"2\" text=\"bind:dinner1\"/><Cell col=\"3\" text=\"bind:breakfast2\"/><Cell col=\"4\" text=\"bind:lunch2\"/><Cell col=\"5\" text=\"bind:dinner2\"/><Cell col=\"6\" text=\"bind:breakfast3\"/><Cell col=\"7\" text=\"bind:lunch3\"/><Cell col=\"8\" text=\"bind:dinner3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1184, 45, this.btnBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("31");
            		p.set_enable("false");

            	}
            );
            this.btnBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SN_MenuMgtForm");
            		p.set_titletext("New Form");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divCombo","codecolumn","dsService","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SN_CarteMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SN_CarteMgtForm.xfdl", "scripts::supScripts.xjs");
        this.registerScript("SN_CarteMgtForm.xfdl", function() {
        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 
        //include "scripts::supScripts.xjs";

        
        // 변수
        var btnName;
        var date;
        var partMonth;
        var partDay;
        var threeDate;
        var twoDate;

        
        // 화면로드
        this.SN_CarteMgtForm_onload = function(obj,e)
        {
        	this.gfnService("findDivList", false);	
        }

        // 식단등록 - 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	var carteDate = this.dateCal.value;
        	var menuGrpCd = this.divCombo.value;
        	
        	if(this.gfnIsNull(carteDate)){
        		alert("급식일자를 선택해주세요.");
        	}else if(this.gfnIsNull(menuGrpCd)){
        		alert("식단분류를 선택해주세요.");
        	}else{
        		var argument = 'carteDate='+carteDate+' menuGrpCd='+menuGrpCd;
        		
        		var row = this.dsService.findRow("serviceID", "findCarteList");

        		this.dsService.setColumn(row, "argument", argument);
        		this.gfnService("findCarteList", false);
        			
        		
        	}
        }

        this.bindData=function()
        {
        	this.dsBreakfast.copyData(this.dsCarte);
        	this.dsBreakfast.filter("carteTime == '1'");

        	this.dsLunch.copyData(this.dsCarte);
        	this.dsLunch.filter("carteTime == '2'");
        	
        	this.dsDinner.copyData(this.dsCarte);
        	this.dsDinner.filter("carteTime == '3'");
        	
        	this.btnBox.set_enable(true);
        }

        
        // 세팅
        this.btnBox_bfPlusBtn_onsetfocus = function(obj,e)
        {
        	this.btnName = obj;
        }

        this.btnBox_lunchPlusBtn_onsetfocus = function(obj,e)
        {
        	this.btnName = obj;
        }

        this.btnBox_dinnerPlusBtn_onsetfocus = function(obj,e)
        {
        	this.btnName = obj;
        }

        this.btnBox_dinnerMinusBtn_onsetfocus = function(obj,e)
        {
        	this.btnName = obj;
        }

        this.btnBox_lunchMinusBtn_onsetfocus = function(obj,e)
        {
        	this.btnName = obj;
        }

        this.btnBox_bfMinusBtn_onsetfocus = function(obj,e)
        {
        	this.btnName = obj;
        }

        
        // 식단 추가, 삭제
        this.plusMinusBtn_onclick = function(obj,e)
        {
        	if( nexacro.toNumber(this.dateCal.value) <= this.gfnDate("yyyymmdd")){
        		alert("오늘 날짜를 포함한 이전 날짜의 식단은 추가, 삭제 할 수 없습니다.");
        	}else{
        		switch(this.btnName.name)
        		{
        			case "bfPlusBtn" : 
        				var param = {btnDiv:"Breakfast",carteTime:1,carteDate:this.dateCal.value, menuGrpCd:this.divCombo.value};	
        				this.gfnPopup("SN_FoodPopForm","sup",param,"");
        				
        				break;

        			case "bfMinusBtn" :
        				this.dsBreakfast.deleteRow(this.breakfastGrid.currentrow);
        				break;
        						
        			case "lunchPlusBtn" : 
        				var param = {btnDiv:"Lunch",carteTime:2,carteDate:this.dateCal.value, menuGrpCd:this.divCombo.value};	
        				this.gfnPopup("SN_FoodPopForm","sup",param,"");
        				
        				break;

        			case "lunchMinusBtn" :
        				this.dsLunch.deleteRow(this.lunchGrid.currentrow);
        				break;
        			
        			case "dinnerPlusBtn" : 
        				var param = {btnDiv:"Dinner",carteTime:3,carteDate:this.dateCal.value, menuGrpCd:this.divCombo.value};	
        				this.gfnPopup("SN_FoodPopForm","sup",param,"");
        																
        				break;

        			case "dinnerMinusBtn" :
        				this.dsDinner.deleteRow(this.dinnerGrid.currentrow);
        				break;
        		}
        	}
        }

        
        this.searchBtn2_onclick = function(obj,e)
        {	
        	var startDate = this.startDateCal.value;
        	var endDate = this.endDateCal.value;
        	var menuGrpCd = this.divCombo2.value;
        	
        	if(this.gfnIsNull(startDate)){
        		alert("급식 날짜를 선택해주세요.");
        	}else if(this.gfnIsNull(endDate)){
        		alert("급식 날짜를 선택해주세요.");
        	}else if(this.gfnIsNull(menuGrpCd)){
        		alert("식단분류를 선택해주세요.");
        	}else{
        		var argument = 'startDate='+startDate+' menuGrpCd='+menuGrpCd+' endDate='+threeDate+' middleDate='+twoDate;
        		var row = this.dsService.findRow("serviceID", "findDCarteList");
        	
        		this.dsService.setColumn(row, "argument", argument);
        		this.gfnService("findDCarteList", false);

         	}

        }

        
        // 기간별 조회 날짜 자동 설정
        this.startDateCal_onchanged = function(obj,e)
        {
        	var date = this.startDateCal.text;
        	var objDate1 = new Date(date);
        	var objDate2 = new Date(date);
        	
        	objDate1.addDate(2);
        	objDate2.addDate(1);
        	
        	var date1 = objDate1.toFormatString("yyyy-mm-dd");
        	var date2 = objDate2.toFormatString("yyyy-mm-dd");
        	
        	threeDate = this.getDate(date1);
        	twoDate = this.getDate(date2);
        		
        	this.endDateCal.set_value(threeDate);

        }

        this.getDate=function(date)
        {
        	var dateArr = date.split("-"); 

        	if(dateArr[1].length==1){
        		partMonth="0"+dateArr[1];
        	}else{
        		partMonth = dateArr[1];
        	}
        	
        	if(dateArr[2].length==1){
        		partDay = "0"+dateArr[2];
        	}else{
        		partDay = dateArr[2];
        	}
        	
        	return dateArr[0]+partMonth+partDay;

        }

        Date.prototype.toFormatString = function(fmt) {
            if (!this.valueOf()){ 
        		return "";
        	}
         
            var dt = this;
            
            return fmt.replace(/(yyyy|yy|mm|dd)/gi,
                function($1){
                    switch ($1){
                        case 'yyyy': return dt.getFullYear();
                        case 'yy':   return dt.getFullYear().toString().substr(2);
                        case 'mm':   return dt.getMonth() + 1;
                        case 'dd':   return dt.getDate();
                    }
                } 
            );
        }
            
        // 콜백함수
        this.callBackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {
        		if(svcID=="findDivList"){
        			this.dsCode2.copyData(this.dsCode);	
        		}else if(svcID=="findCarteList"){
        			this.bindData();
        		}else if(svcID=="findDCarteList"){
        			var date1 = this.startDateCal.value;
        			var date3 = this.endDateCal.value;
        			
        			this.menuGrid.setCellProperty("head",0,"text",date1);
        			this.menuGrid.setCellProperty("head",1,"text",twoDate);
        			this.menuGrid.setCellProperty("head",2,"text",threeDate);
        		
        		}else if(svcID=="batchCarteProces"){
        			alert("저장되었습니다.");
        		}
         	}
        }

        // 저장버튼
        this.saveBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchCarteProces");	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCode.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.dsCode2.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.dsCarte.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.dsBreakfast.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.dsLunch.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.dsDinner.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.dsDCarte.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.addEventHandler("onload", this.SN_CarteMgtForm_onload, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.divCombo.addEventHandler("onitemchanged", this.divCombo_onitemchanged, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.startDateCal.addEventHandler("onchanged", this.startDateCal_onchanged, this);
            this.startDateCal.addEventHandler("oneditclick", this.startDateCal_oneditclick, this);
            this.searchBtn2.addEventHandler("onclick", this.searchBtn2_onclick, this);
            this.btnBox.dinnerMinusBtn.addEventHandler("onclick", this.plusMinusBtn_onclick, this);
            this.btnBox.dinnerMinusBtn.addEventHandler("onsetfocus", this.btnBox_dinnerMinusBtn_onsetfocus, this);
            this.btnBox.dinnerPlusBtn.addEventHandler("onclick", this.plusMinusBtn_onclick, this);
            this.btnBox.dinnerPlusBtn.addEventHandler("onsetfocus", this.btnBox_dinnerPlusBtn_onsetfocus, this);
            this.btnBox.lunchMinusBtn.addEventHandler("onclick", this.plusMinusBtn_onclick, this);
            this.btnBox.lunchMinusBtn.addEventHandler("onsetfocus", this.btnBox_lunchMinusBtn_onsetfocus, this);
            this.btnBox.lunchPlusBtn.addEventHandler("onclick", this.plusMinusBtn_onclick, this);
            this.btnBox.lunchPlusBtn.addEventHandler("onsetfocus", this.btnBox_lunchPlusBtn_onsetfocus, this);
            this.btnBox.bfPlusBtn.addEventHandler("onsetfocus", this.btnBox_bfPlusBtn_onsetfocus, this);
            this.btnBox.bfPlusBtn.addEventHandler("onclick", this.plusMinusBtn_onclick, this);
            this.btnBox.bfMinusBtn.addEventHandler("onclick", this.plusMinusBtn_onclick, this);
            this.btnBox.bfMinusBtn.addEventHandler("onsetfocus", this.btnBox_bfMinusBtn_onsetfocus, this);

        };

        this.loadIncludeScript("SN_CarteMgtForm.xfdl");

       
    };
}
)();

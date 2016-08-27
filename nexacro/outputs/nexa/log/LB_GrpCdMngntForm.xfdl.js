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
                this.set_name("LB_GrpCdMngntForm");
                this.set_classname("LB_GrpCdMngntForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBigGrpCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"bigGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrpNm\" type=\"STRING\" size=\"256\"/><Column id=\"grpDiv\" type=\"STRING\" size=\"256\"/><Column id=\"useYb\" type=\"STRING\" size=\"256\"/><Column id=\"userRegPossYb\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSmGrpCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"midGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYb\" type=\"STRING\" size=\"256\"/><Column id=\"userRegPossYb\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"modDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYb", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"yn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"yn\">Y</Col></Row><Row><Col id=\"yn\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMidGrpCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"midGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"midGrpCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYb\" type=\"STRING\" size=\"256\"/><Column id=\"userRegPossYb\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"modDate\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrpCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findGrpList</Col><Col id=\"URL\">his::log/base/findGrpList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsBigGrpCd=dsBigGrpCd dsMidGrpCd=dsMidGrpCd dsSmGrpCd=dsSmGrpCd</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">batchGdsGrpCdProcess</Col><Col id=\"URL\">his::log/base/batchGdsGrpCdProcess.do</Col><Col id=\"inData\">dsBigGrpCd=dsBigGrpCd:u dsMidGrpCd=dsMidGrpCd:u dsSmGrpCd=dsSmGrpCd:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("idsGrpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"2\"/><Column id=\"value\" type=\"STRING\" size=\"2\"/></ColumnInfo><Rows><Row/><Row><Col id=\"code\">A</Col><Col id=\"value\">A</Col></Row><Row><Col id=\"code\">B</Col><Col id=\"value\">B</Col></Row><Row><Col id=\"code\">C</Col><Col id=\"value\">C</Col></Row><Row><Col id=\"code\">D</Col><Col id=\"value\">D</Col></Row><Row><Col id=\"code\">E</Col><Col id=\"value\">E</Col></Row><Row><Col id=\"code\">F</Col><Col id=\"value\">F</Col></Row><Row><Col id=\"code\">G</Col><Col id=\"value\">G</Col></Row><Row><Col id=\"code\">H</Col><Col id=\"value\">H</Col></Row><Row><Col id=\"code\">I</Col><Col id=\"value\">I</Col></Row><Row><Col id=\"code\">J</Col><Col id=\"value\">J</Col></Row><Row><Col id=\"code\">K</Col><Col id=\"value\">K</Col></Row><Row><Col id=\"code\">L</Col><Col id=\"value\">L</Col></Row><Row><Col id=\"code\">M</Col><Col id=\"value\">M</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">N</Col></Row><Row><Col id=\"code\">O</Col><Col id=\"value\">O</Col></Row><Row><Col id=\"code\">P</Col><Col id=\"value\">P</Col></Row><Row><Col id=\"code\">Q</Col><Col id=\"value\">Q</Col></Row><Row><Col id=\"code\">R</Col><Col id=\"value\">R</Col></Row><Row><Col id=\"code\">S</Col><Col id=\"value\">S</Col></Row><Row><Col id=\"code\">T</Col><Col id=\"value\">T</Col></Row><Row><Col id=\"code\">U</Col><Col id=\"value\">U</Col></Row><Row><Col id=\"code\">V</Col><Col id=\"value\">V</Col></Row><Row><Col id=\"code\">W</Col><Col id=\"value\">W</Col></Row><Row><Col id=\"code\">X</Col><Col id=\"value\">X</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"code\">Z</Col><Col id=\"value\">Z</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div05", "absolute", "0%", "0", "1248", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "73.12%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("물품 분류코드 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("bigGrpCdStc", "absolute", "49", "71", null, "27", "1115", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("대분류");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("bigGrpCdEd", "absolute", "140", "71", "100", "27", null, null, this);
            obj.set_taborder("3");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("bigGrpCdNmEd", "absolute", "283", "71", "166", "27", null, null, this);
            obj.set_taborder("4");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Grid("bigGrpGrid", "absolute", "49", "155", "334", "549", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsBigGrpCd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"대분류\"/><Cell col=\"1\" text=\"분류\"/><Cell col=\"2\" text=\"분류구분\"/><Cell col=\"3\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:bigGrpCd\" combodataset=\"idsGrpCd\" combocodecol=\"code\" combodatacol=\"value\" combodisplay=\"edit\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:bigGrpNm\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:grpDiv\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:useYb\" combodataset=\"dsYb\" combocodecol=\"yn\" combodatacol=\"yn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("midGrpGrid", "absolute", "421", "155", "318", "549", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("dsMidGrpCd");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"중분류\"/><Cell col=\"1\" text=\"분류명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:midGrpCd\" combodataset=\"idsGrpCd\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:midGrpCdNm\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:useYb\" combodataset=\"dsYb\" combocodecol=\"yn\" combodatacol=\"yn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("smGrpGrid", "absolute", "777", "155", "430", "549", null, null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsSmGrpCd");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"250\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소분류\"/><Cell col=\"1\" text=\"분류명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:smGrpCd\" combodataset=\"idsGrpCd\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:smGrpCdNm\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:useYb\" combodataset=\"dsYb\" combocodecol=\"yn\" combodatacol=\"yn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "475", "68", "90", "32", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "1115", "69", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addBigGrpBtn", "absolute", "312", "115", "32", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delBigGrpBtn", "absolute", "351", "115", "32", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addMidGrpBtn", "absolute", "668", "115", "32", "32", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delMidGrpBtn", "absolute", "707", "115", "32", "32", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addSmGrpBtn", "absolute", "1134", "115", "32", "32", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delSmGrpBtn", "absolute", "1173", "115", "32", "32", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchBigGrpBtn", "absolute", "245", "68", "32", "32", null, null, this);
            obj.set_taborder("16");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LB_GrpCdMngntForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LB_GrpCdMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("LB_GrpCdMngntForm.xfdl", "scripts::logScripts.xjs");
        this.registerScript("LB_GrpCdMngntForm.xfdl", function() {
        /********************************************************************************                                                                            
        물품 분류코드 관리                                               						                                                                         
        @Path			물류공통(Logistics Base)              				   				
        @Description	구매재고관리에 필요한 물품 분류코드를 관리하는 화면
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 5. 27.                             		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";  		//공통 스크립트
        //include "scripts::logScripts.xjs";			//물류 스크립트

        this.edOnkeyDown = function(obj,e)
        {
        	if (e.keycode == 13 ) {		
        		this.clickSearchBtn();
        	}				
        }

        this.clickBtn = function(obj)
        {	
        	switch (obj) { 
        		case this.searchBigGrpBtn: 		//대분류 검색
        			this.clickSearchBigGrpBtn();
        			break;
        		case this.searchBtn:			//조회
        			this.clickSearchBtn();
        			break;
        		case this.addBigGrpBtn:			//대분류 행추가
        			this.clickAddBigGrpBtn();
        			break;
        		case this.delBigGrpBtn:			//대분류 행삭제
        			this.clickDelBigGrpBtn();
        			break;
        		case this.addMidGrpBtn:			//중분류 행추가
        			this.clickAddMidGrpBtn();
        			break;
        		case this.delMidGrpBtn:			//중분류 행삭제
        			this.clickDelMidGrpBtn();
        			break;
        		case this.addSmGrpBtn:			//소분류 행추가
        			this.clickAddSmGrpBtn();
        			break;
        		case this.delSmGrpBtn:			//소분류 행삭제
        			this.clickDelSmGrpBtn();
        			break;
        		case this.batchBtn:				//저장
        			this.clickSBatchBtn();
        			break;
        		case this.closeBtn:				//닫기
        			this.close();
        			break;
        	}
        }

        // 대분류 검색 팝업의 그리드를 더블클릭할때 호출하는 함수
        this.setLogCodeArray = function(divCode,logCode,secCode,thrCode,arr)
        {
        	switch (divCode) {
        		case "searchBigGrp": 
        			this.bigGrpCdEd.set_value(arr[0]);
        			this.bigGrpCdNmEd.set_value(arr[1]);
        			break;
        	}
        }

        // 대분류 조회
        this.clickSearchBigGrpBtn = function()
        {
        	this.logOpenCdDialog("searchBigGrp");
        }

        // 조회
        this.clickSearchBtn = function()
        {
        	this.dsBigGrpCd.filter();
        	this.dsMidGrpCd.filter();
        	this.dsSmGrpCd.filter();
        	
        	var bigGrpCd=this.bigGrpCdEd.value;
        	var bigGrpNm=this.bigGrpCdNmEd.value;	
        	var argument = 'bigGrpCd=' + bigGrpCd + ' bigGrpNm=' + bigGrpNm;
        	this.dsService.setColumn(0, "argument", argument);
        	this.gfnService("findGrpList");
        	if (bigGrpCd == null && bigGrpNm == null) {
        		alert("대분류 코드 전체를 검색합니다.");
        	} else if (this.dsBigGrpCd.getRowCount() == 0) {
        		alert("검색결과가 없습니다.");
        		this.dsBigGrpCd.clearData();
        		this.dsMidGrpCd.clearData();
        		this.dsSmGrpCd.clearData();
        	} else if (this.dsBigGrpCd.getRowCount() == 1) {		
        		this.dsSmGrpCd.filter("midGrpCd=='" + this.dsMidGrpCd.getColumn(0, "midGrpCd") + "' && bigGrpCd=='" + this.dsMidGrpCd.getColumn(0, "bigGrpCd") + "'");	
        		this.midVisible(true);
        		this.smVisible(true);
        	} else {
        		this.midVisible(false);
        		this.smVisible(false);
        	}	
        }

        // 행추가
        this.clickAddBigGrpBtn = function()
        {
        	var dsBigGrpCdLast = this.dsBigGrpCd.addRow();
        	//this.bigGrpGrid.setCellProperty("body", 0, "edittype", "text");		
        	this.dsBigGrpCd.setColumn(dsBigGrpCdLast, "userRegPossYb", "Y");	
        	this.dsBigGrpCd.setColumn(dsBigGrpCdLast, "useYb", "Y");	
        }
        this.clickAddMidGrpBtn = function()
        {
        	var dsMidGrpCdLast = this.dsMidGrpCd.addRow();
        	//this.midGrpGrid.setCellProperty("body", 0, "edittype", "text");
        	this.dsMidGrpCd.setColumn(dsMidGrpCdLast, "bigGrpCd", this.dsBigGrpCd.getColumn(this.dsBigGrpCd.rowposition, "bigGrpCd"));
        	this.dsMidGrpCd.setColumn(dsMidGrpCdLast, "userRegPossYb", "Y");
        	this.dsMidGrpCd.setColumn(dsMidGrpCdLast, "useYb", "Y");	
        }
        this.clickAddSmGrpBtn = function()
        {
        	var dsSmGrpCdLast = this.dsSmGrpCd.addRow();
        	//this.smGrpGrid.setCellProperty("body", 0, "edittype", "text");
        	this.dsSmGrpCd.setColumn(dsSmGrpCdLast, "bigGrpCd", this.dsBigGrpCd.getColumn(this.dsBigGrpCd.rowposition, "bigGrpCd"));
        	this.dsSmGrpCd.setColumn(dsSmGrpCdLast, "midGrpCd", this.dsMidGrpCd.getColumn(this.dsMidGrpCd.rowposition, "midGrpCd"));
        	this.dsSmGrpCd.setColumn(dsSmGrpCdLast, "userRegPossYb", "Y");
        	this.dsSmGrpCd.setColumn(dsSmGrpCdLast, "useYb", "Y");
        }

        
        // 행삭제
        this.clickDelBigGrpBtn = function()
        {
        	if (application.confirm("하위항목인 중분류, 소분류가 모두 삭제됩니다. 진행하시겠습니까?")) {
        		this.dsBigGrpCd.deleteRow(this.dsBigGrpCd.rowposition);
        	}
        }
        this.clickDelMidGrpBtn = function()
        {
        	if (application.confirm("하위항목인 소분류가 모두 삭제됩니다. 진행하시겠습니까?")) {
        		this.dsMidGrpCd.deleteRow(this.dsMidGrpCd.rowposition);
        	}
        }
        this.clickDelSmGrpBtn = function()
        {
        	this.dsSmGrpCd.deleteRow(this.dsSmGrpCd.rowposition);
        }

        // 일괄처리
        this.clickSBatchBtn = function()
        {
        	this.gfnService("batchGdsGrpCdProcess");	
        }

        
        // 그리드 이벤트
        this.bigGrpGrid_oncellclick = function(obj,e)
        {
        	this.dsMidGrpCd.filter("bigGrpCd=='" + this.dsBigGrpCd.getColumn(e.row, "bigGrpCd") + "'");
        	this.midVisible(true);
        	this.smVisible(false);
        }

        this.midGrpGrid_oncellclick = function(obj,e)
        {
        	this.dsSmGrpCd.filter("midGrpCd=='" + this.dsMidGrpCd.getColumn(e.row, "midGrpCd") + "' && bigGrpCd=='" + this.dsMidGrpCd.getColumn(e.row, "bigGrpCd") + "'");	
        	this.smVisible(true);
        }

        this.ontextchanged = function(obj,e) 	//텍스트 수정할 때 발생하는 이벤트
        {
         	switch (obj) {
         		case bigGrpGrid:
         			checkBigGrpRowType(e.row);
         			break;
         		case midGrpGrid:
         			checkMidGrpRowType(e.row);
         			break;
         		case smGrpGrid:
         			checkSmGrpRowType(e.row);
         			break;
         	}	
        }

        this.oncloseup = function(obj,e)					//콤보박스 닫힐때 발생하는 이벤트
        {
        	switch (obj) {
        		case this.bigGrpGrid:
        			this.checkBigGrpRowType(e.row);
        			break;
        		case this.midGrpGrid:
        			this.checkMidGrpRowType(e.row);
        			break;
        		case this.smGrpGrid:
        			this.checkSmGrpRowType(e.row);
        			break;
        	}
        }

        this.getModiItems = function()
        {
        	var mogiArray = new Array();
        	 mogiArray[0] = this.getModiTime();						  	    //등록(수정)시간
        	 mogiArray[1] = this.getModiIp();							    //등록(수정)IP
        	 mogiArray[2] = application.gdsEmp.getColumn(0, "empNo");		//등록(수정)ID
        	return mogiArray;
        }

        this.checkBigGrpRowType = function(row)
        {
        	var mogiArray=getModiItems();		
        	if (this.dsBigGrpCd.getRowType(row) == 4) {			//수정일때
        		this.dsBigGrpCd.setColumn(row, "modWorkerId", mogiArray[2]);
        		this.dsBigGrpCd.setColumn(row, "modWorkerIp", mogiArray[1]);
        		this.dsBigGrpCd.setColumn(row, "modDate", mogiArray[0]);	
        	} else if (this.dsBigGrpCd.getRowType(row) == 2) {	//추가일때
        		this.dsBigGrpCd.setColumn(row, "regWorkerId", mogiArray[2]);
        		this.dsBigGrpCd.setColumn(row, "regWorkerIp", mogiArray[1]);
        		this.dsBigGrpCd.setColumn(row, "regDate", mogiArray[0]);		
        	}	
        }

        this.checkMidGrpRowType = function(row){
        	var mogiArray=getModiItems();
        	if(this.dsMidGrpCd.getRowType(row)==4) {			//수정일때
        		this.dsMidGrpCd.setColumn(row,"modWorkerId",mogiArray[2]);
        		this.dsMidGrpCd.setColumn(row,"modWorkerIp",mogiArray[1]);
        		this.dsMidGrpCd.setColumn(row,"modDate",mogiArray[0]);	
        	}else if(dsMidGrpCd.getRowType(row)==2) {		//추가일때
        		this.dsMidGrpCd.setColumn(row,"regWorkerId",mogiArray[2]);
        		this.dsMidGrpCd.setColumn(row,"regWorkerIp",mogiArray[1]);
        		this.dsMidGrpCd.setColumn(row,"regDate",mogiArray[0]);		
        	}
        }
        this.checkSmGrpRowType = function(row){
        	var mogiArray=getModiItems();
        	if(this.dsSmGrpCd.getRowType(row)==4) {				//수정일때
        		this.dsSmGrpCd.setColumn(row,"modWorkerId",mogiArray[2]);
        		this.dsSmGrpCd.setColumn(row,"modWorkerIp",mogiArray[1]);
        		this.dsSmGrpCd.setColumn(row,"modDate",mogiArray[0]);
        	}else if(this.dsSmGrpCd.getRowType(row)==2) {		//추가일때
        		this.dsSmGrpCd.setColumn(row,"regWorkerId",mogiArray[2]);
        		this.dsSmGrpCd.setColumn(row,"regWorkerIp",mogiArray[1]);
        		this.dsSmGrpCd.setColumn(row,"regDate",mogiArray[0]);
        	}
        }

        // Visible 이벤트
        this.midVisible = function(trueFalse){
        	this.addMidGrpBtn.set_visible(trueFalse);
        	this.delMidGrpBtn.set_visible(trueFalse);
        	this.midGrpGrid.set_visible(trueFalse);
        }
        this.smVisible = function(trueFalse){
        	this.addSmGrpBtn.set_visible(trueFalse);
        	this.delSmGrpBtn.set_visible(trueFalse);
        	this.smGrpGrid.set_visible(trueFalse);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.bigGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.bigGrpCdEd.addEventHandler("onkeydown", this.edOnkeyDown, this);
            this.bigGrpGrid.addEventHandler("oncellclick", this.bigGrpGrid_oncellclick, this);
            this.bigGrpGrid.addEventHandler("oncloseup", this.oncloseup, this);
            this.bigGrpGrid.addEventHandler("ontextchanged", this.ontextchanged, this);
            this.midGrpGrid.addEventHandler("oncellclick", this.midGrpGrid_oncellclick, this);
            this.midGrpGrid.addEventHandler("oncloseup", this.oncloseup, this);
            this.searchBtn.addEventHandler("onclick", this.clickBtn, this);
            this.batchBtn.addEventHandler("onclick", this.clickBtn, this);
            this.addBigGrpBtn.addEventHandler("onclick", this.clickBtn, this);
            this.delBigGrpBtn.addEventHandler("onclick", this.clickBtn, this);
            this.addMidGrpBtn.addEventHandler("onclick", this.clickBtn, this);
            this.delMidGrpBtn.addEventHandler("onclick", this.clickBtn, this);
            this.addSmGrpBtn.addEventHandler("onclick", this.clickBtn, this);
            this.delSmGrpBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchBigGrpBtn.addEventHandler("onclick", this.clickBtn, this);

        };

        this.loadIncludeScript("LB_GrpCdMngntForm.xfdl");

       
    };
}
)();

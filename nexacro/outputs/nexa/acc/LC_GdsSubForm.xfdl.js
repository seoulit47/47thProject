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
                this.set_name("LC_GdsSubForm");
                this.set_classname("LC_GdsSubForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDisuseDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">생산중단</Col></Row><Row><Col id=\"value\">일시품절</Col></Row><Row><Col id=\"value\">거래처폐쇄</Col></Row><Row><Col id=\"value\">사용중지</Col></Row><Row><Col id=\"value\">품목대체</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGds", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"gdsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ediCd\" type=\"STRING\" size=\"256\"/><Column id=\"vmiYb\" type=\"STRING\" size=\"256\"/><Column id=\"useDept\" type=\"STRING\" size=\"256\"/><Column id=\"stand\" type=\"STRING\" size=\"256\"/><Column id=\"ordUnit\" type=\"STRING\" size=\"256\"/><Column id=\"subulUnit\" type=\"STRING\" size=\"256\"/><Column id=\"cngQnt\" type=\"STRING\" size=\"256\"/><Column id=\"cust\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtPrice\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"spliesDiv\" type=\"STRING\" size=\"256\"/><Column id=\"wh\" type=\"STRING\" size=\"0\"/><Column id=\"rackNo\" type=\"STRING\" size=\"256\"/><Column id=\"insurDiv\" type=\"STRING\" size=\"256\"/><Column id=\"disuseDate\" type=\"STRING\" size=\"256\"/><Column id=\"disuseDiv\" type=\"STRING\" size=\"256\"/><Column id=\"picLoc\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"modDate\" type=\"STRING\" size=\"256\"/><Column id=\"midGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrpCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInsurDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">보험</Col></Row><Row><Col id=\"value\">비보험</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSpliesDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">저장품</Col></Row><Row><Col id=\"value\">비저장품</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUseDept", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">기획부</Col></Row><Row><Col id=\"value\">원무팀</Col></Row><Row><Col id=\"value\">연구센터</Col></Row><Row><Col id=\"value\">방사선치료연구팀</Col></Row><Row><Col id=\"value\">비뇨기과</Col></Row><Row><Col id=\"value\">회계팀</Col></Row><Row><Col id=\"value\">정형외과</Col></Row><Row><Col id=\"value\">마취통증의학과</Col></Row><Row><Col id=\"value\">순환기내과</Col></Row><Row><Col id=\"value\">병리과</Col></Row><Row><Col id=\"value\">가정의학과</Col></Row><Row><Col id=\"value\">인사총무팀</Col></Row><Row><Col id=\"value\">안과</Col></Row><Row><Col id=\"value\">피부과</Col></Row><Row><Col id=\"value\">임상연구실</Col></Row><Row><Col id=\"value\">소아청소년과</Col></Row><Row><Col id=\"value\">신경정신과</Col></Row><Row><Col id=\"value\">외과</Col></Row><Row><Col id=\"value\">병동간호과</Col></Row><Row><Col id=\"value\">핵의학과</Col></Row><Row><Col id=\"value\">실험방사선연구실</Col></Row><Row><Col id=\"value\">수술실</Col></Row><Row><Col id=\"value\">흉부외과</Col></Row><Row><Col id=\"value\">산부인과</Col></Row><Row><Col id=\"value\">방사선종양학과</Col></Row><Row><Col id=\"value\">신경과</Col></Row><Row><Col id=\"value\">신경외과</Col></Row><Row><Col id=\"value\">치과</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"ServiceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ServiceID\">findGdsList</Col><Col id=\"URL\">his::log/base/findGdsList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsGds=dsGds</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">LCgdsMngtCallbackFunc</Col></Row><Row><Col id=\"ServiceID\">callGdsCd</Col><Col id=\"URL\">his::log/base/callGdsCd.do</Col><Col id=\"inData\"/><Col id=\"outData\">postCode=postCode</Col><Col id=\"callbackFunc\">LCgdsMngtCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div05", "absolute", "0%", "4", "1014", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.style.set_font("bold 15 Dotum");
            obj.set_text("       물품관리");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "1.56%", "69", null, "691", "1.27%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("bigGrpCdStc", "absolute", "3.52%", "81", null, "28", "90.14%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("대분류");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("searchBigGrpCdEd", "absolute", "10.64%", "81", null, "28", "75.1%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("midGrpCdStc", "absolute", "3.52%", "116", null, "28", "90.14%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("중분류");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("searchMidGrpCdEd", "absolute", "10.64%", "116", null, "28", "75.1%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("smGrpCdStc", "absolute", "3.52%", "151", null, "28", "90.14%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("소분류");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("searchSmGrpCdEd", "absolute", "10.64%", "151", null, "28", "75.1%", null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("searchBigGrpCdBtn", "absolute", "262", "79", "32", "32", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchMidGrpCdBtn", "absolute", "262", "114", "32", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchSmGrpCdBtn", "absolute", "262", "149", "32", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("searchBigGrpCdNmEd", "absolute", "29.39%", "81", null, "28", "56.35%", null, this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("searchMidGrpCdNmEd", "absolute", "29.39%", "116", null, "28", "56.35%", null, this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("searchSmGrpCdNmEd", "absolute", "29.39%", "151", null, "28", "56.35%", null, this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ask_date02", "absolute", "44.34%", "81", null, "28", "49.32%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("물품코드");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ask_date03", "absolute", "44.34%", "116", null, "28", "49.32%", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("물품명");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("searchGdsCdEd", "absolute", "51.37%", "81", null, "28", "34.38%", null, this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("searcGgdsNmEd", "absolute", "51.37%", "116", null, "28", "30.66%", null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn02", "absolute", "678", "78", "32", "32", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("gdsGrid", "absolute", "3.42%", "194", null, "553", "3.03%", null, this);
            obj.set_taborder("19");
            obj.set_autofittype("col");
            obj.set_binddataset("dsGds");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"대분류\"/><Cell col=\"1\" text=\"중분류\"/><Cell col=\"2\" text=\"소분류\"/><Cell col=\"3\" text=\"물품코드\"/><Cell col=\"4\" text=\"물품명\"/><Cell col=\"5\" text=\"EDI코드\"/><Cell col=\"6\" text=\"수불단위\"/><Cell col=\"7\" text=\"저장품\"/><Cell col=\"8\" text=\"창고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:bigGrpCd\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:midGrpCd\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:smGrpCd\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:gdsCd\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:gdsNm\"/><Cell col=\"5\" text=\"bind:ediCd\"/><Cell col=\"6\" text=\"bind:subulUnit\"/><Cell col=\"7\" text=\"bind:spliesDiv\"/><Cell col=\"8\" text=\"bind:wh\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "622", "149", "90", "32", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 691, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LC_GdsSubForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LC_GdsSubForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("LC_GdsSubForm.xfdl", "scripts::logScripts.xjs");
        this.registerScript("LC_GdsSubForm.xfdl", function() {

        //include "scripts::commonScripts.xjs";  		//공통 스크립트
        //include "scripts::logScripts.xjs";			//물류 스크립트

        

        this.clickBtn = function(obj,e){
        	switch(obj){ 
        		case this.searchBigGrpCdBtn: 	//대분류 검색
        				this.clickSearchBigGrpCdBtn();	
        				break;
        		case this.searchMidGrpCdBtn:		//중분류 검색
        				this.clickSearchMidGrpCdBtn();
        				break;
        		case this.searchSmGrpCdBtn:		//소분류 검색
        				this.clickSearchSmGrpCdBtn();
        				break;
        		case this.searchGdsCdBtn:		//물품코드 검색
        				this.clickSearchGdsCdBtn();
        				break;
        		case this.searchBtn:		//조회
        				this.clickSearchBtn();
        				break;
        		case this.searchGdsBigGrpCdBtn:	//등록할 대분류 검색
        				this.clickSearchGdsBigGrpGdsBtn();
        				break;
        		case this.searchGdsMidGrpCdBtn:	//등록할 중분류 검색
        				this.clickSearchGdsMidGrpGdsBtn();
        				break;
        		case this.searchGdsSmGrpCdBtn:	//등록할 소분류 검색
        				this.clickSearchGdsSmGrpGdsBtn();
        				break;
        		case this.searchWhBtn:			//창고검색
        				this.clickSearchGdsWhBtn();
        				break;
        		case this.searchGdsImgBtn:		//이미지 저장
        				this.clickImgBtn();
        				break;		
        	}
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  조회
        +-------------------------------------------------------------------------------------------------*/

        this.clickSearchBigGrpCdBtn = function(){	//대분류코드 버튼
        	this.openLogCdDialog("searchBigGrp");
        }
        this.clickSearchMidGrpCdBtn = function(){	//중분류코드 버튼
        	var secCd=this.searchBigGrpCdEd.value;
        	this.openLogCdDialog("searchMidGrp",null,secCd);
        }
        this.clickSearchSmGrpCdBtn = function(){	//소분류코드 버튼
        	var secCd=this.searchMidGrpCdEd.value;
        	var thrCd=this.searchBigGrpCdEd.value;
        	this.openLogCdDialog("searchSmGrp",null,secCd,thrCd);
        }
        this.clickSearchGdsCdBtn = function(){	//물품코드버튼
        	this.openLogCdDialog("gds");
        }
        this.clickSearchBtn = function(){	//조회버튼
        	var bGrpCd=this.searchBigGrpCdEd.value;
        	var mGrpCd=this.searchMidGrpCdEd.value;
        	var sGrpCd=this.searchSmGrpCdEd.value;
        	var gdsCd=this.searchGdsCdEd.value;
        	var gdsNm=this.searcGgdsNmEd.value;	
        	var argument = 'gdsCd='+gdsCd+' gdsNm='+gdsNm+' bGrpCd='+bGrpCd+' mGrpCd='+mGrpCd+' sGrpCd='+sGrpCd;
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findGdsList","true");		
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  추가
        +-------------------------------------------------------------------------------------------------*/

        this.clickSearchGdsBigGrpGdsBtn = function(){	//대분류등록 버튼
        	this.openLogCdDialog("addBigGrp");
        }
        this.clickSearchGdsMidGrpGdsBtn = function(){	//중분류등록 버튼
        	var secCd=this.gdsBigGrpCdEd.value;
        	if(this._isNull(secCd)){
        		alert("대분류를 선택하십시오.");
        		return;
        	}
        	this.openLogCdDialog("addMidGrp",null,secCd);
        }
        this.clickSearchGdsSmGrpGdsBtn = function(){	//소분류등록 버튼
        	var secCd=this.gdsMidGrpCdEd.value;
        	var thrCd=this.gdsBigGrpCdEd.value;
        	if(this._isNull(thrCd)){			//null검사 함수
        		alert("대분류를 선택하십시오.");
        		return;
        	}else if(this._isNull(secCd)){
        		alert("중분류를 선택하십시오.");
        		return;
        	}
        	this.openLogCdDialog("addSmGrp",null,secCd,thrCd);
        }

        this.clickSearchGdsWhBtn = function(){		//창고버튼
        	this.openLogCdDialog("wh");
        }

        this.setGdsCd = function(){	//물품코드 생성
        	var setGdsCd;		//생성될 물품코드
        	var bigGrpCd=this.searchBigGrpCdEd.value;	//대분류코드 값
        	var midGrpCd=this.searchMidGrpCdEd.value;	//중분류코드 값
        	var smGrpCd=this.searchSmGrpCdEd.value;	//소분류코드 값
        	var preCode=bigGrpCd+midGrpCd+smGrpCd;	//대중소 합친 코드 값
        	var argument = 'preCode='+preCode;
        	this.dsService.setColumn(2,"argument",argument);
        	application.setVariable("postCode", "");	//Variable만 던질려면 객체 생성 필요
        	this.gfnService("callGdsCd","false");	
        	alert(application.postCode);
        	if(application.postCode.length == 1){
        		setGdsCd = preCode+"000"+application.postCode;
        	}else if(application.postCode.length == 2){
        		setGdsCd = preCode+"00"+application.postCode;
        	}else if(application.postCode.length == 3){
        		setGdsCd = preCode+"0"+application.postCode;
        	}
        	alert(setGdsCd);
        	this.gdsCdEd.set_value(setGdsCd);
        }

        
        /*-------------------------------------------------------------------------------------------------+
        >> 검색 팝업의 그리드를 더블클릭할때 호출하는 함수
        +-------------------------------------------------------------------------------------------------*/

        this.setLogCodeArray = function(divCode,logCode,secCode,thrCode,arr){
        	switch (divCode){
        		case "searchBigGrp":
        			this.searchBigGrpCdEd.set_value(arr[0]);
        			this.searchBigGrpCdNmEd.set_value(arr[1]);
        			break;
        		case "searchMidGrp":
        			this.searchMidGrpCdEd.set_value(arr[0]);
        			this.searchMidGrpCdNmEd.set_value(arr[1]);
        			break;
        		case "searchSmGrp":
        			this.searchSmGrpCdEd.set_value(arr[0]);
        			this.searchSmGrpCdNmEd.set_value(arr[1]);
        			break;
        		case "addBigGrp":
        			this.gdsBigGrpCdEd.set_value(arr[0]);
        			break;
        		case "addMidGrp":
        			this.gdsMidGrpCdEd.set_value(arr[0]);
        			break;
        		case "addSmGrp":
        			this.gdsSmGrpCdEd.set_value(arr[0]);
        			if(this._isNull(this.gdsSmGrpCdEd.value)){
        				return;		
        			}else{
        				this.setGdsCd();
        			}
        			break;
        		case "gds":
        			this.searchGdsCdEd.set_value(arr[0]);
        			this.searchGdsCdNmEd.set_value(arr[1]);
        			break;
        		case "wh":
        			this.whEd.set_value(arr[1]);
        			break;
        	}
        }

        /***************************************************************************************************
        *                                         Area EVENT START                                         *
        /*-------------------------------------------------------------------------------------------------+
        >>  grid EVENT
        +-------------------------------------------------------------------------------------------------*/

        this.gdsGrid_oncelldblclick = function(obj,e)
        {
        	if(this.opener.name == "ATtaxinvForm" || this.opener.name == "ATtaxinvSearchForm"){
        		
        		var row = this.dsGds.rowposition;
        		var fm = this.dsGds.getColumn(row,"gdsNm");
        		var stand = this.dsGds.getColumn(row,"ordUnit");
        		var price = this.dsGds.getColumn(row,"ctrtPrice");
        		
        		var no = this.opener.dsAtDetailTaxinv.rowposition;
        		this.opener.dsAtDetailTaxinv.setColumn(no,"fm",fm);
        		this.opener.dsAtDetailTaxinv.setColumn(no,"stand",stand);
        		this.opener.dsAtDetailTaxinv.setColumn(no,"price",price);
        		
        		this.close();
        	}
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  combo 이벤트
        +-------------------------------------------------------------------------------------------------*/

        this.spliesCombo_oncloseup = function(obj,e){
        	if(e.postvalue=='저장품'){
        		this.clickSearchGdsWhBtn();
        	}
        }

        /*-------------------------------------------------------------------------------------------------+
        *                                         Area EVENT END                                           *
        ***************************************************************************************************/

        /***************************************************************************************************
        *                                       CallBack Function Start                                    *
        ***************************************************************************************************/

        this.LCgdsMngtCallbackFunc = function(svcID,errorCode,errorMsg){
        	if(errorCode<0) {
        		this.gfn_errorPopup(svcID, errorMsg)
        	}else{
        		if(svcID=="findGdsList"){
        			if(this.dsGds.getRowCount()==0){
        				alert("검색된 결과가 없습니다.");
        			}
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.searchBigGrpCdBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchMidGrpCdBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchSmGrpCdBtn.addEventHandler("onclick", this.clickBtn, this);
            this.DelBtn02.addEventHandler("onclick", this.clickBtn, this);
            this.gdsGrid.addEventHandler("oncelldblclick", this.gdsGrid_oncelldblclick, this);
            this.searchBtn.addEventHandler("onclick", this.clickBtn, this);

        };

        this.loadIncludeScript("LC_GdsSubForm.xfdl");

       
    };
}
)();

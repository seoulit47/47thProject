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
                this.set_name("LB_GdsPopupForm");
                this.set_classname("LB_GdsPopupForm");
                this.set_titletext("물품 정보");
                this._setFormPosition(0,0,1000,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findGdsList</Col><Col id=\"URL\">his::log/base/findGdsList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsGds=dsGds</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">collbackLogBind</Col></Row></Rows>");
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
            obj = new Div("Div00", "absolute", "0%", "0", "985", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("cdDiv", "absolute", "10", "59", null, "430", "12", null, this);
            obj.set_taborder("2");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new Static("gdsCdStc", "absolute", "12", "10", "88", "27", null, null, this.cdDiv);
            obj.getSetter("taborder").set("5");
            obj.set_text("물품코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.cdDiv.addChild(obj.name, obj);
            obj = new Edit("gdsCdEd", "absolute", "110", "10", "100", "27", null, null, this.cdDiv);
            obj.set_taborder("6");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.cdDiv.addChild(obj.name, obj);
            obj = new Static("gdsCdNmStc", "absolute", "260", "10", "88", "27", null, null, this.cdDiv);
            obj.getSetter("taborder").set("7");
            obj.set_text("물품명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.cdDiv.addChild(obj.name, obj);
            obj = new Edit("gdsCdNmEd", "absolute", "358", "10", "230", "27", null, null, this.cdDiv);
            obj.set_taborder("8");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.cdDiv.addChild(obj.name, obj);
            obj = new Grid("cdGrid", "absolute", "0.92%", "47", null, "366", "1.23%", null, this.cdDiv);
            obj.set_taborder("9");
            obj.set_binddataset("dsGds");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"330\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"물품코드\"/><Cell col=\"1\" text=\"물품명\"/><Cell col=\"2\" text=\"대분류\"/><Cell col=\"3\" text=\"중분류\"/><Cell col=\"4\" text=\"소분류\"/><Cell col=\"5\" text=\"EDI코드\"/><Cell col=\"6\" text=\"VMI여부\"/><Cell col=\"7\" text=\"규격\"/><Cell col=\"8\" text=\"발주단위\"/><Cell col=\"9\" text=\"수불단위\"/><Cell col=\"10\" text=\"환산수량\"/><Cell col=\"11\" text=\"거래처\"/></Band><Band id=\"body\"><Cell text=\"bind:gdsCd\"/><Cell col=\"1\" text=\"bind:gdsNm\"/><Cell col=\"2\" text=\"bind:bigGrpCd\"/><Cell col=\"3\" text=\"bind:midGrpCd\"/><Cell col=\"4\" text=\"bind:smGrpCd\"/><Cell col=\"5\" text=\"bind:ediCd\"/><Cell col=\"6\" text=\"bind:vmiYb\"/><Cell col=\"7\" text=\"bind:stand\"/><Cell col=\"8\" text=\"bind:ordUnit\"/><Cell col=\"9\" text=\"bind:subulUnit\"/><Cell col=\"10\" text=\"bind:cngQnt\"/><Cell col=\"11\" text=\"bind:cust\"/></Band></Format></Formats>");
            this.cdDiv.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "883", "64", "90", "32", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "81.7%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("물품 정보");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 430, this.cdDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("transparent");

            	}
            );
            this.cdDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1000, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LB_GdsPopupForm");
            		p.set_titletext("물품 정보");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LB_GdsPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("LB_GdsPopupForm.xfdl", "scripts::logScripts.xjs");
        this.registerScript("LB_GdsPopupForm.xfdl", function() {
        /********************************************************************************                                                                            
        물품정보 팝업                                               						                                                                         
        @Path			물류공통(Logistics Base)              				   				
        @Description	물품정보를 검색하기 위한 팝업									
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 5. 27.                             		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";  		// 시스템공통 스크립트
        //include "scripts::logScripts.xjs";			// 물류 스크립트

        
        var gridCurRow;		//Grid의 현재 Row를 담는 변수

        // 버튼클릭 공통함수
        this.clickBtn = function(obj) 
        {	
        	switch (obj) { 
        		case this.searchBtn : 	// 검색버튼
        			this.searchBtn_onclick();				
        			break;
        	}
        }

        
        // 조회버튼을 눌렀을 때 실행하는 함수
        this.searchBtn_onclick = function() 
        {
        	var gdsCd = this.cdDiv.gdsCdEd.value;
        	var gdsNm = this.cdDiv.gdsCdNmEd.value;	
        	var argument = "gdsCd=" + gdsCd + " gdsNm=" + gdsNm;
        	this.dsService.setColumn(0, "argument", argument);
        	this.gfnService("findGdsList");
        }

        // 그리드 이벤트
        this.cdGrid_oncelldblclick = function(obj,e) {
        	var gdsArray = new Array();
        	gdsArray[0]  = this.dsGds.getColumn(e.row, "gdsCd");			// 물품코드
        	gdsArray[1]  = this.dsGds.getColumn(e.row, "gdsNm");			// 물품명
        	gdsArray[2]  = this.dsGds.getColumn(e.row, "bigGrpCd");			// 대분류
        	gdsArray[3]  = this.dsGds.getColumn(e.row, "midGrpCd");			// 중분류
        	gdsArray[4]  = this.dsGds.getColumn(e.row, "smGrpCd");			// 소분류
        	gdsArray[5]  = this.dsGds.getColumn(e.row, "stand");			// 규격
        	gdsArray[6]  = this.dsGds.getColumn(e.row, "ordUnit");			// 발주단위
        	gdsArray[7]  = this.dsGds.getColumn(e.row, "subulUnit");		// 수불단위
        	gdsArray[8]  = this.dsGds.getColumn(e.row, "cngQnt");			// 환산수량
        	gdsArray[9]  = this.dsGds.getColumn(e.row, "cust");				// 거래처
        	gdsArray[10] = this.dsGds.getColumn(e.row, "spliesDiv");		// 저장품구분
        	gdsArray[11] = this.dsGds.getColumn(e.row, "wh");				// 창고
        	gdsArray[12] = this.dsGds.getColumn(e.row, "ediCd");			// EDI코드
        	gdsArray[13] = this.dsGds.getColumn(e.row, "vmiYb");			// VMI여부
        	gdsArray[14] = this.dsGds.getColumn(e.row, "ctrtPrice");		// 계약단가
        	
        	// 부모에게 물품정보 보내기
        	this.opener.setLogCodeArray(this.parent.gdsCode,null,null,null,gdsArray);
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.cdDiv.gdsCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.cdDiv.gdsCdNmStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.cdDiv.gdsCdNmEd.addEventHandler("onkeydown", this.edOnkeyDown, this);
            this.cdDiv.cdGrid.addEventHandler("oncelldblclick", this.cdGrid_oncelldblclick, this);
            this.searchBtn.addEventHandler("onclick", this.clickBtn, this);

        };

        this.loadIncludeScript("LB_GdsPopupForm.xfdl");

       
    };
}
)();

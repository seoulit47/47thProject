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
                this.set_name("LB_LogCdPopupForm");
                this.set_classname("LB_LogCdPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,399,442);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBindLogCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdDiv\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"secCode\" type=\"STRING\" size=\"256\"/><Column id=\"thrCode\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dsLogName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLogCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">bindLogCd</Col><Col id=\"URL\">his::log/base/bindLogCd.do</Col><Col id=\"inData\">dsBindLogCd=dsBindLogCd</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callbackLogBind</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "-2.76%", "0", null, "49", "2.26%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Grid("cdGrid", "absolute", "2.01%", "101", null, "331", "1.75%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsLogCd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"171\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("cdStc", "absolute", "2.01%", "59", null, "26", "85.96%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("코드");
            obj.style.set_background("cornflowerblue");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 다음_Regular");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("cdNmStc", "absolute", "35.34%", "59", null, "26", "49.87%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("코드명");
            obj.style.set_background("cornflowerblue");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 다음_Regular");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("cdEd", "absolute", "16.04%", "57", null, "30", "66.67%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("cdNmEd", "absolute", "52.13%", "57", null, "30", "24.31%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("titleStc", "absolute", "12.28%", "9", null, "36", "48.62%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("물류 코드 도움");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 16 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "76.69%", "56", null, "32", "0.75%", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 49, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 399, 442, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LB_LogCdPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LB_LogCdPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("LB_LogCdPopupForm.xfdl", "scripts::logScripts.xjs");
        this.registerScript("LB_LogCdPopupForm.xfdl", function() {
        /********************************************************************************
        *                                               			                    *
        * 물품관련 코드 팝업  			                               		        *
        *                                                                   			*
        * @Path			물류 기초정보관리             					 	 		*
        * @Description 	물류업무에 필요한 물품관련 코드를 선택하기 위한 팝업  	*
        * @Author		강찬모 						 								*
        * 									 											*
        * Created on	2016. 5. 27.                           		 					*
        *									 											*
        ********************************************************************************/

        
        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/

        //include "scripts::commonScripts.xjs";  		//공통 스크립트
        //include "scripts::logScripts.xjs";  		//물류 공통 스크립트

        /**************************************************************************************************
        *                                         화면 변수 선언부                                      *
        ***************************************************************************************************/

        var titleNm;	//팝업창 타이틀 변수
        var cd;			//Grid Head, Static Text를 해당 코드로 변경 하는 변수
        var cdNm;		//Grid Head, Static Text를 해당 코드명으로 변경 하는 변수

        /***************************************************************************************************
        *                                         폼 EVENT START                                      	   *
        /*-------------------------------------------------------------------------------------------------+
        >>  onload EVENT
        +-------------------------------------------------------------------------------------------------*/

        this.LB_LogCdPopupForm_onload = function(obj,e){	
        	this.dsBindLogCd.clearData();
        	switch(this.parent.divCode){ 
        		case "wh": 
        				titleNm="창고";
        				cd="창고코드";
        				cdNm="창고명";
        				this.findWhGdsCustCd();
        				break;
        		case "gds": 
        				titleNm="물품";
        				cd="물품코드";
        				cdNm="물품명";
        				this.findWhGdsCustCd();
        				break;
        		case "cust": 
        				titleNm="거래처";
        				cd="거래처코드";
        				cdNm="거래처명";
        				this.findWhGdsCustCd();
        				break;
        		case "searchBigGrp": 
        				titleNm="대분류";
        				cd="대분류코드";
        				cdNm="대분류명";
        				this.findGrpCd();
        				break;
        		case "searchMidGrp": 
        				titleNm="중분류";
        				cd="중분류코드";
        				cdNm="중분류명";
        				this.findGrpCd();
        				break;
        		case "searchSmGrp": 
        				titleNm="소분류";
        				cd="소분류코드";
        				cdNm="소분류명";
        				this.findGrpCd();
        				break;
        		case "addBigGrp": 
        				titleNm="대분류";
        				cd="대분류코드";
        				cdNm="대분류명";
        				this.findGrpCd();
        				break;
        		case "addMidGrp": 
        				titleNm="중분류";
        				cd="중분류코드";
        				cdNm="중분류명";
        				this.findGrpCd();
        				break;
        		case "addSmGrp": 
        				titleNm="소분류";
        				cd="소분류코드";
        				cdNm="소분류명";
        				this.findGrpCd();
        				break;	
        	}
        	this.titleStc.set_text(titleNm);
        	this.cdStc.set_text(cd);
        	this.cdNmStc.set_text(cdNm);
        	this.cdGrid.setCellProperty("Head",0,"text",cd);		//Grid Head 변경
        	this.cdGrid.setCellProperty("Head",1,"text",cdNm);		//Grid Head 변경
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  onload시 호출 함수
        +-------------------------------------------------------------------------------------------------*/
        this.findWhGdsCustCd = function(){			//찾는 코드가 창고나 물품, 거래처일 경우, 검색 조건창을 띄워주는 함수
        		this.titleStc.set_visible(true);
        		this.cdStc.set_visible(true);
        		this.cdNmStc.set_visible(true);
        		this.cdEd.set_visible(true);
        		this.cdNmEd.set_visible(true);
        		this.cdEd.set_value(this.parent.logCode);
        		this.cdNmEd.set_value(this.parent.logCdNm);
        }

        this.findGrpCd = function(){			//물품분류코드를 찾을 경우, 조회 조건없이 바로 조회하는 함수 
        	var currRow=this.dsBindLogCd.addRow();
        	this.dsBindLogCd.setColumn(currRow,"cdDiv",this.parent.divCode);	
        	this.dsBindLogCd.setColumn(currRow,"code",this.parent.logCode);
        	this.dsBindLogCd.setColumn(currRow,"secCode",this.parent.secCode);
        	this.dsBindLogCd.setColumn(currRow,"thrCode",this.parent.thrCode);
        	this.dsBindLogCd.setColumn(currRow,"dsLogName","dsLogCd");	
        	this.logBindCd("bindLogCd");				//물류코드를 Bind시키기 위한 메서드 호출(물류스크립트)
        }

        /*-------------------------------------------------------------------------------------------------+
        *                                         폼 EVENT END                                            *
        ***************************************************************************************************/

        
        /***************************************************************************************************
        *                                         조회조건 EVENT START                                    *
        /*-------------------------------------------------------------------------------------------------+
        >>  onkeyDown EVENT
        +-------------------------------------------------------------------------------------------------*/
        this.edOnkeyDown = function(obj,e)
        {
        	if(e.keycode==13){		
        		this.clickSearchBtn();
        	}				
        }

        /*-------------------------------------------------------------------------------------------------+
        *                                         조회조건 EVENT END                                      *
        ***************************************************************************************************/

        
        /***************************************************************************************************
        *                                          버튼 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/
        this.clickBtn = function(obj){	
        	switch(obj){ 
        		case this.searchBtn: 	//조회
        				this.clickSearchBtn();				
        				break;
        	}
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  조회
        +-------------------------------------------------------------------------------------------------*/
        this.clickSearchBtn = function(){		//조회버튼을 눌렀을 때 실행하는 함수
        	this.dsBindLogCd.clearData();
        	this.dsLogCd.clearData();
        				
        	var logCd=this.cdEd.value; 
        	var logCdNm=this.cdNmEd.value;
        	var currRow=this.dsBindLogCd.addRow();

        	this.dsBindLogCd.setColumn(currRow,"cdDiv",this.parent.divCode);	
        	this.dsBindLogCd.setColumn(currRow,"code",logCd);
        	this.dsBindLogCd.setColumn(currRow,"cdNm",logCdNm);
        	this.dsBindLogCd.setColumn(currRow,"dsLogName","dsLogCd");
        	
        	this.logBindCd("bindLogCd");
        }

        
        /*-------------------------------------------------------------------------------------------------+
        *                                         버튼 EVENT END                                           *
        ***************************************************************************************************/

        
        /***************************************************************************************************
        *                                         Area EVENT START                                         *
        /*-------------------------------------------------------------------------------------------------+
        >>  grid 이벤트
        +-------------------------------------------------------------------------------------------------*/

        this.dbClickSelect = function(obj,e)
        {
        	var logCdArray = new Array;
        	var i=0;
        	
        	logCdArray[i++] = this.dsLogCd.getColumn(e.row,"code");
        	logCdArray[i++] = this.dsLogCd.getColumn(e.row,"value");	
        	//alert(logCdArray[0]+logCdArray[1])
        	this.opener.setLogCodeArray(this.parent.divCode,this.parent.logCode,this.parent.secCode,this.parent.thrCode,logCdArray);
        	this.close();		//창이 닫히면서 선택된 Grid의 값을 배열로 Return
        }

        /*-------------------------------------------------------------------------------------------------+
        *                                         Area EVENT END                                           *
        ***************************************************************************************************/
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LB_LogCdPopupForm_onload, this);
            this.cdGrid.addEventHandler("oncelldblclick", this.dbClickSelect, this);
            this.titleStc.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.clickBtn, this);

        };

        this.loadIncludeScript("LB_LogCdPopupForm.xfdl");

       
    };
}
)();

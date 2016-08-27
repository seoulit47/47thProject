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
                this.set_name("HG_DayGuntaeForm");
                this.set_classname("HG_DayGuntaeForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">searchDayGuntaeList</Col><Col id=\"URL\">his::hrs/guntae/findDayGuntaeList.do</Col><Col id=\"outData\">dsDayGuntae=dsDayGuntae</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">createGuntae</Col><Col id=\"URL\">his::hrs/guntae/callDayGuntae.do</Col><Col id=\"inData\">dsDayGuntae=dsDayGuntae:u</Col><Col id=\"outData\">dsDayGuntae=dsDayGuntae</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDayGuntae", this);
            obj._setContents("<ColumnInfo><Column id=\"belongDay\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"guntaeDay\" type=\"STRING\" size=\"256\"/><Column id=\"inTime\" type=\"STRING\" size=\"256\"/><Column id=\"outTime\" type=\"STRING\" size=\"256\"/><Column id=\"basicTime\" type=\"STRING\" size=\"256\"/><Column id=\"overTime\" type=\"STRING\" size=\"256\"/><Column id=\"guntaeCd\" type=\"STRING\" size=\"256\"/><Column id=\"guntaeOutCd\" type=\"STRING\" size=\"256\"/><Column id=\"closeYn\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"goOutTime\" type=\"STRING\" size=\"256\"/><Column id=\"returnTime\" type=\"STRING\" size=\"256\"/><Column id=\"aleryOutTime\" type=\"STRING\" size=\"256\"/><Column id=\"goOutHour\" type=\"STRING\" size=\"256\"/><Column id=\"latelessTime\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGuntaeGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">100</Col><Col id=\"value\">유급</Col></Row><Row><Col id=\"cd\">200</Col><Col id=\"value\">기본</Col></Row><Row><Col id=\"cd\">300</Col><Col id=\"value\">결근</Col></Row><Row><Col id=\"cd\">400</Col><Col id=\"value\">휴직</Col></Row><Row><Col id=\"cd\">500</Col><Col id=\"value\">연차</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGuntaeOutGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">10</Col><Col id=\"value\">조퇴</Col></Row><Row><Col id=\"cd\">20</Col><Col id=\"value\">외출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this.titleDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("일근태조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("mainDiv", "absolute", "0.8%", "55", null, "697", "1.12%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);
            obj = new Grid("holidayRequestGrid", "absolute", "0.65%", "40", null, "649", "3.59%", null, this.mainDiv);
            obj.set_taborder("43");
            obj.set_binddataset("dsDayGuntae");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"78\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"날짜\"/><Cell col=\"2\" text=\"요일\"/><Cell col=\"3\" text=\"사번\"/><Cell col=\"4\" text=\"출근시간\"/><Cell col=\"5\" text=\"퇴근시간\"/><Cell col=\"6\" text=\"외출시간\"/><Cell col=\"7\" text=\"귀사시간\"/><Cell col=\"8\" text=\"기본시간\"/><Cell col=\"9\" text=\"연장시간\"/><Cell col=\"10\" text=\"지각시간\"/><Cell col=\"11\" text=\"외출시각\"/><Cell col=\"12\" text=\"조퇴시간\"/><Cell col=\"13\" text=\"근태구분\"/><Cell col=\"14\" text=\"근태외구분\"/><Cell col=\"15\" text=\"마감여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:belongDay\"/><Cell col=\"2\" text=\"bind:guntaeDay\"/><Cell col=\"3\" text=\"bind:empNo\"/><Cell col=\"4\" edittype=\"masknumber\" text=\"bind:inTime\" mask=\"##:00\"/><Cell col=\"5\" edittype=\"masknumber\" text=\"bind:outTime\" mask=\"##:00\"/><Cell col=\"6\" edittype=\"masknumber\" text=\"bind:goOutTime\" mask=\"##:00\"/><Cell col=\"7\" edittype=\"masknumber\" text=\"bind:returnTime\" mask=\"##:00\"/><Cell col=\"8\" text=\"bind:basicTime\" mask=\"##시간\"/><Cell col=\"9\" text=\"bind:overTime\" mask=\"##시간\"/><Cell col=\"10\" text=\"bind:latelessTime\" mask=\"##시간\"/><Cell col=\"11\" edittype=\"normal\" text=\"bind:goOutHour\" mask=\"##시간\"/><Cell col=\"12\" edittype=\"masknumber\" text=\"bind:aleryOutTime\" mask=\"##:00\"/><Cell col=\"13\" text=\"bind:guntaeCd\" combodataset=\"dsGuntaeGubun\" combocodecol=\"cd\" combodatacol=\"value\"/><Cell col=\"14\" text=\"bind:guntaeOutCd\" combodataset=\"dsGuntaeOutGubun\" combocodecol=\"cd\" combodatacol=\"value\"/><Cell col=\"15\" text=\"bind:closeYn\"/></Band></Format></Formats>");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("empnoStc", "absolute", "58.32%", "7", null, "27", "38.17%", null, this.mainDiv);
            obj.getSetter("taborder").set("45");
            obj.set_text("사번");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Edit("empnoEdt", "absolute", "62.15%", "7", null, "26", "33.12%", null, this.mainDiv);
            obj.set_taborder("46");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Edit("empnmEdt", "absolute", "75.37%", "7", null, "26", "19.74%", null, this.mainDiv);
            obj.set_taborder("48");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("empnmStc", "absolute", "71.37%", "7", null, "27", "25.12%", null, this.mainDiv);
            obj.getSetter("taborder").set("49");
            obj.set_text("성명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("empSearchBtn", "absolute", "67.54%", "5", null, "32", "29.85%", null, this.mainDiv);
            obj.set_taborder("50");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("searchDayGuntaeBtn", "absolute", "89.07%", "5", null, "32", "3.59%", null, this.mainDiv);
            obj.set_taborder("51");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("hdateStc", "absolute", "0.57%", "6", null, "30", "92.41%", null, this.mainDiv);
            obj.getSetter("taborder").set("52");
            obj.set_text("기간");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Calendar("startCal", "absolute", "7.34%", "6", null, "30", "81.4%", null, this.mainDiv);
            this.mainDiv.addChild(obj.name, obj);
            obj.set_taborder("53");
            obj = new Static("Static04", "absolute", "18.35%", "6", null, "31", "79.04%", null, this.mainDiv);
            obj.getSetter("taborder").set("54");
            obj.set_text("   ~");
            obj.style.set_color("#46463dff");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Calendar("endCal", "absolute", "20.15%", "6", null, "30", "68.6%", null, this.mainDiv);
            this.mainDiv.addChild(obj.name, obj);
            obj.set_taborder("55");

            obj = new Button("Button00guntaeCreateBtn", "absolute", "80.56%", "60", null, "30", "12.48%", null, this);
            obj.set_taborder("3");
            obj.set_text("일근태생성");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.titleDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.titleDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1233, 721, this.mainDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");
            		p.set_enableevent("false");

            	}
            );
            this.mainDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HG_DayGuntaeForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HG_DayGuntaeForm.xfdl", "scripts::commonScript.xjs");
        this.addIncludeScript("HG_DayGuntaeForm.xfdl", "scripts::hrsScripts.xjs");
        this.addIncludeScript("HG_DayGuntaeForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("HG_DayGuntaeForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 일근퇴 관리                                                              	*
        *                                                                               *
        * @Path		    hrs-HG_DayGuntaeForm                        	                *
        * @Description 	일근퇴 조회                            		   	            *
        * @Author	    이병민					                                		*
        * 									                                            *
        * Created on 2016. 5. 29.                             		                    *
        *									                                            *
        ********************************************************************************/

        /***************************************************************************************************
        *                                         공통 Script Include                                      *
        ***************************************************************************************************/
        //include "scripts::commonScript.xjs";
        //include "scripts::hrsScripts.xjs";
        //include "scripts::commonTransaction.xjs";

        
        /***************************************************************************************************
        *                                          화면 변수 선언부                                        *
        ***************************************************************************************************/

        var startDate;
        var endDate;
        var empNo;
        var empNm;

        /***************************************************************************************************
        *                                         콜백 함수 셋팅                                           *
        ***************************************************************************************************/
        this.CallbackFunc = function CallbackFunc(svcID,errorCode,errorMsg)
        {
        	if(errorCode<0)
        	{
        		
        		this.gfn_errorPopup(svcID, errorMsg);
        		return;
        	
        	}else{
        		
        		
        		if(svcID=="searchDayGuntaeList")
        		{
        			
        			var rowCount = this.dsDayGuntae.getRowCount();
        			
        			if(rowCount== 0)
        			{
        			
        				alert("조회 내용이 없습니다.");
        				return;
        		
        			}else
        			{
        			
        				alert("조회성공");
        			
        			}
        		
        		
        		}
        		if(svcID=="createGuntae")
        		{
        		
        			alert("정상 처리되었습니다.");
        		
        		}
        	
        	}
        	
        }

        /***************************************************************************************************
        *                                         onload Event                                      	   *
        ***************************************************************************************************/
        this.HG_DayGuntaeForm_onload = function(obj,e)
        {
        	this.mainDiv.startCal.set_value(this.fn-Today());
        	this.mainDiv.endCal.set_value(this.fn_Today())
        	
        	this.mainDiv.empnoEdt.set_value(application.gdsEmp.getColumn(0,"empNo"));
        	this.mainDiv.empnmEdt.set_value(application.gdsEmp.getColumn(0,"empNm"));
        	
        	empNo = this.mainDiv.empnoEdt.value;
        	empNm = this.mainDiv.empnmEdt.value;
        	
        	var pms = application.gdsEmp.getColumn(0,"pms");
        	var deptNm = application.gdsEmp.getColumn(0,"deptNm");
        	
        	if(pms == 'admin' && deptNm == '인사팀'){
        		
        		this.guntaeCreateBtn.set_enable(true);
        	}
        }

        
        /***************************************************************************************************
        *                                         현재 날짜 셋팅 FUNCTION                          	   	   *
        ***************************************************************************************************/
        this.fn_Today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0");
        	    sToday += objDate.getDate().toString().padLeft(2, "0"); 

        	return sToday;
        }

        
        /***************************************************************************************************
        *                                         사원 조회 버튼 클릭 Event                            	*
        ***************************************************************************************************/
        this.mainDiv_empSearchBtn_onclick = function(obj,e)
        {
        	this.gfn_EmpPopup();
        }

        
        /***************************************************************************************************
        *                                        사원 셋팅 				    		                    *
        ***************************************************************************************************/
        /*this.setEmpInfo = function(hrs,arrRtn){

        	this.mainDiv.empnoEdt.set_value(arrRtn[0]);
        	this.mainDiv.empnmEdt.set_value(arrRtn[1]);

        }*/

        this.setEmpInfo = function(arrRtn){//set_value 해야 들어감
            this.mainDiv.empnoEdt.set_value(arrRtn[0]);
            this.mainDiv.empnmEdt.set_value(arrRtn[1]);
        }

        /***************************************************************************************************
        *                                         조회 버튼 클릭 Event     		                       *
        ***************************************************************************************************/
        this.mainDiv_searchDayGuntaeBtn_onclick = function(obj,e)
        {
        	empNo = this.mainDiv.empnoEdt.value;
        	startDate = this.mainDiv.startCal.value;
        	endDate = this.mainDiv.endCal.value;
        	var argument = 'empNo='+empNo+' startDate='+startDate+' endDate='+endDate;
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("searchDayGuntaeList");
        }

        
        /***************************************************************************************************
        *                                         일근태생성 버튼 클릭 Event	                       	   *
        ***************************************************************************************************/
        this.guntaeCreateBtn_onclick = function(obj,e)
        {

        	this.gfnService("createGuntae");
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HG_DayGuntaeForm_onload, this);
            this.mainDiv.holidayRequestGrid.addEventHandler("oncellclick", this.mainDiv_holidayRequestGrid_oncellclick, this);
            this.mainDiv.empnoStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.mainDiv.empSearchBtn.addEventHandler("onclick", this.mainDiv_empSearchBtn_onclick, this);
            this.mainDiv.searchDayGuntaeBtn.addEventHandler("onclick", this.mainDiv_searchDayGuntaeBtn_onclick, this);
            this.Button00guntaeCreateBtn.addEventHandler("onclick", this.guntaeCreateBtn_onclick, this);

        };

        this.loadIncludeScript("HG_DayGuntaeForm.xfdl");

       
    };
}
)();

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
                this.set_name("HG_InoutTimeForm");
                this.set_classname("HG_InoutTimeForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInoutWorkTime", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"inOutTime\" type=\"STRING\" size=\"256\"/><Column id=\"reason\" type=\"STRING\" size=\"256\"/><Column id=\"inoutGubun\" type=\"STRING\" size=\"256\"/><Column id=\"inoutTimeNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"overTime\" type=\"STRING\" size=\"256\"/><Column id=\"belongDay\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInoutGubun", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">출근</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">퇴근</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">외출</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">귀사</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">searchInoutTimeList</Col><Col id=\"URL\">his::hrs/inoutTime/findInoutTimeList.do</Col><Col id=\"inData\">[Undefined]</Col><Col id=\"outData\">dsInoutWorkTime=dsInoutWorkTime</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchInoutTimeProcess</Col><Col id=\"URL\">his::hrs/inoutTime/batchInoutWorkTimeProcess.do</Col><Col id=\"inData\">dsInoutWorkTime=dsInoutWorkTime:u</Col><Col id=\"outData\">dsInoutWorkTime=dsInoutWorkTime</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this.titleDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("출퇴근등록");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("mainDiv", "absolute", "1.36%", "61", null, "700", "0.96%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Calendar("startCal", "absolute", "7.7%", "1", null, "32", "80.26%", null, this.mainDiv);
            this.mainDiv.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj = new Static("hdateStc", "absolute", "0.33%", "1", null, "32", "92.63%", null, this.mainDiv);
            obj.getSetter("taborder").set("2");
            obj.set_text("기간");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "20.07%", "1", null, "32", "77.31%", null, this.mainDiv);
            obj.getSetter("taborder").set("3");
            obj.set_text("   ~");
            obj.style.set_color("#46463dff");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Calendar("endCal", "absolute", "23.01%", "1", null, "32", "64.95%", null, this.mainDiv);
            this.mainDiv.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj = new Static("deptStc", "absolute", "35.38%", "1", null, "32", "57.58%", null, this.mainDiv);
            obj.getSetter("taborder").set("5");
            obj.set_text("부서");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Edit("deptnoEdt", "absolute", "42.75%", "1", null, "32", "52.5%", null, this.mainDiv);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Edit("deptnmEdt", "absolute", "50.78%", "1", null, "32", "44.31%", null, this.mainDiv);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("empnoStc", "absolute", "56.02%", "1", null, "32", "40.46%", null, this.mainDiv);
            obj.getSetter("taborder").set("8");
            obj.set_text("사번");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Edit("empnoEdt", "absolute", "59.87%", "1", null, "32", "35.38%", null, this.mainDiv);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("empnmStc", "absolute", "67.9%", "1", null, "32", "28.58%", null, this.mainDiv);
            obj.getSetter("taborder").set("10");
            obj.set_text("성명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Edit("empnmEdt", "absolute", "71.74%", "1", null, "32", "23.34%", null, this.mainDiv);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("deptSearchBtn", "absolute", "47.83%", "1", null, "32", "49.55%", null, this.mainDiv);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            obj.set_cssclass("AddBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("empSearchBtn", "absolute", "64.95%", "1", null, "32", "32.43%", null, this.mainDiv);
            obj.set_taborder("13");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "76.99%", "1", null, "32", "15.64%", null, this.mainDiv);
            obj.set_taborder("14");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::permitBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("addInoutTimeBtn", "absolute", "84.68%", "1", null, "32", "7.94%", null, this.mainDiv);
            obj.set_taborder("15");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("searchInoutTimeBtn", "absolute", "92.38%", "1", null, "32", "0.33%", null, this.mainDiv);
            obj.set_taborder("16");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Grid("holidayRequestGrid", "absolute", "0.33%", "41", null, "652", "0.33%", null, this.mainDiv);
            obj.set_taborder("17");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("body");
            obj.set_binddataset("dsInoutWorkTime");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"136\"/><Column size=\"146\"/><Column size=\"116\"/><Column size=\"206\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"사원명\"/><Cell col=\"2\" text=\"출/퇴근\"/><Cell col=\"3\" colspan=\"2\" text=\"출입시간\"/><Cell col=\"5\" text=\"시간외근무시간\"/><Cell col=\"6\" text=\"사유\"/></Band><Band id=\"body\"><Cell text=\"bind:empNo\"/><Cell col=\"1\" text=\"bind:empNm\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:inoutGubun\" combodataset=\"dsInoutGubun\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:belongDay\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:inOutTime\" mask=\"##:##\"/><Cell col=\"5\" edittype=\"mask\" text=\"bind:overTime\" mask=\"#시간\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:reason\"/></Band></Format></Formats>");
            this.mainDiv.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 0, 700, this.mainDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");

            	}
            );
            this.mainDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HG_InoutTimeForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HG_InoutTimeForm.xfdl", "scripts::commonScript.xjs");
        this.addIncludeScript("HG_InoutTimeForm.xfdl", "scripts::hrsScripts.xjs");
        this.addIncludeScript("HG_InoutTimeForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("HG_InoutTimeForm.xfdl", "scripts::commonPopup.xjs");
        this.registerScript("HG_InoutTimeForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 출퇴근 등록 관리                                                          	*
        *                                                                               *
        * @Path		    hrs-HG_InoutTimeForm                        	                *
        * @Description 	출퇴근 등록 정보 조회,등록,수정 화면 		   	            *
        * @Author	    이병민					                                		*
        * 									                                            *
        * Created on 2016. 5. 27.                             		                    *
        *									                                            *
        ********************************************************************************/

        
        /***************************************************************************************************
        *                                         공통 Script Include                                      *
        ***************************************************************************************************/
        //include "scripts::commonScript.xjs";
        //include "scripts::hrsScripts.xjs";
        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonPopup.xjs";

        /***************************************************************************************************
        *                                         화면 변수 선언부                                       *
        ***************************************************************************************************/

        var deptCd;			//부서코드
        var deptNm;			//부서명
        var empNo;			//사원번호
        var empNm;			//사원명
        var belongDay;		//기준일
        var time;			//현재시간
        var startDate;		//출퇴근등록 시작날짜
        var endDate;		//출퇴근등록 마지막날짜
        var pms;			//권한
        var code;
        var hrs;

        
        /***************************************************************************************************
        *                                         콜백 함수 셋팅                                           *
        ***************************************************************************************************/

        this.CallbackFunc = function CallbackFunc(svcID,errorCode,errorMsg)
        {
        	if(errorCode<0)
        	{
        		alert(errorMsg);
        		return;
        	}
        	
        	if(svcID=="searchInoutTimeList")
        	{
        		var rowCount = this.dsInoutWorkTime.getRowCount();
        			
        			if(rowCount== 0)
        			{
        			
        				alert("조회 내용이 없습니다.");
        				return;
        		
        			}else
        			{
        			
        				alert("조회성공");
        			
        			}
        		
        	}
        	
        	if(svcID=="batchInoutTimeProcess")
        	{
        		alert("정상 처리되었습니다.");
        		
        	}
        	
        	
        }

        
        /***************************************************************************************************
        *                                         onload Event                                      	   *
        ***************************************************************************************************/
        this.HG_InoutTimeForm_onload = function(obj,e)
        {
        	this.startCal.set_value(this.fn_Today());
        	this.endCal.set_value(this.fn_Today());
        	
        	belongDay = this.fn_Today().substr(0,6);
        	
        	deptCd = application.gdsEmp.getColumn(0,"deptCd");
        	deptNm = application.gdsEmp.getColumn(0,"deptNm");
        	empNo = application.gdsEmp.getColumn(0,"empNo");
        	empNm = application.gdsEmp.getColumn(0,"empNm");
        	pms = application.gdsEmp.getColumn(0,"pms");
        		
        		if(pms == "admin" && deptNm == "인사팀"){
        		
        			this.mainDiv.addInoutTimeBtn.set_enable(true);
        			this.mainDiv.saveBtn.set_enable(true);
        		
        		}
        	
        	this.mainDiv.deptnoEdt.set_value(deptCd);
        	this.mainDiv.deptnmEdt.set_value(deptNm);
        	this.mainDiv.empnoEdt.set_value(empNo);
        	this.mainDiv.empnmEdt.set_value(empNm);
        	
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
        *                                         현재 시간 셋팅 FUNCTION                          	   	   *
        ***************************************************************************************************/
        this.fn_ThisTime = function()
        {
        	var objDate = new Date();
        	var sTime  = objDate.getHours().toString().padLeft(2, "0");
        	    sTime += objDate.getMinutes().toString().padLeft(2, "0");

        	return sTime;

        }

        
        /***************************************************************************************************
        *                                         부서 조회 버튼 클릭 Event                            	   *
        ***************************************************************************************************/
        this.mainDiv_deptSearchBtn_onclick = function(obj,e)
        {
           var param = {code:"GP500"};
           this.gfnPopup("codePopupForm","com",param);
        }

        
        /***************************************************************************************************
        *                                         사원 조회 버튼 클릭 Event                            	   *
        ***************************************************************************************************/

        this.mainDiv_empSearchBtn_onclick = function(obj,e)
        {
        	this.gfnEmpPopup();
        }

        
        /***************************************************************************************************
        *                                         조회 버튼 클릭 Event     		                       	   *
        ***************************************************************************************************/
        this.mainDiv_searchInoutTimeBtn_onclick = function(obj,e)
        {
        	deptNm = this.mainDiv.deptnmEdt.value;
        	empNo = this.mainDiv.empnoEdt.value;
        	
        	startDate = this.mainDiv.startCal.value;
        	endDate = this.mainDiv.endCal.value;
        	alert("사원번호:"+empNo);
        	alert(deptNm);
        	if(deptNm == '인사팀'){
        		this.mainDiv.addInoutTimeBtn.set_enable(true);
        		this.mainDiv.saveBtn.set_enable(true);
        	}
        	var argument = 'empNo='+empNo+' sDate='+startDate+' eDate='+endDate;
        	
        	this.dsService.setColumn(0,"argument",argument);
        	
        	this.gfnService("searchInoutTimeList");	
        	
        }

        
        /***************************************************************************************************
        *                                        부서 셋팅     						                   	   *
        ***************************************************************************************************/
        this.setCodeArray = function(code,arrRtn,codeSeq){

        	this.mainDiv.deptnoEdt.set_value(arrRtn[0]);
        	this.mainDiv.deptnmEdt.set_value(arrRtn[1]);
        	
        }

        /***************************************************************************************************
        *                                        사원 셋팅 				    		                       *
        ***************************************************************************************************/
        this.setEmpInfo = function(arrRtn){

        	this.mainDiv.empnoEdt.set_value(arrRtn[0]);
        	this.mainDiv.empnmEdt.set_value(arrRtn[1]);
        	this.mainDiv.deptnoEdt.set_value(arrRtn[2]);
        	this.mainDiv.deptnmEdt.set_value(arrRtn[3]);

        }

        
        /***************************************************************************************************
        *                                         추가 버튼 클릭 Event     		                       	   *
        ***************************************************************************************************/
        this.mainDiv_addInoutTimeBtn_onclick = function(obj,e)
        {
        	
        	
        	empNo = this.mainDiv.empnoEdt.value;
        	empNm = this.mainDiv.empnmEdt.value;
        	deptCd = this.mainDiv.deptnoEdt.value;
        	deptNm = this.mainDiv.deptnmEdt.value;
        	belongDay = this.fn_Today();
        	time = this.fn_ThisTime();
        	
        	this.dsInoutWorkTime.addRow();
        	
        	var inoutTimeNo = this.dsInoutWorkTime.getColumn(this.dsInoutWorkTime.rowposition-1,"inoutTimeNo");
        	var count=0;
        	count = count+1;	
        	
        	this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition,"empNo",empNo);
        	this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition,"empNm",empNm);
        	this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition,"deptCd",deptCd);
        	this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition,"deptNm",deptNm);
        	this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition,"belongDay",belongDay);
        	this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition,"inOutTime",time);
        	
        	if(inoutTimeNo == undefined){
        		
        		inoutTimeNo = parseInt(this.fn_Today()+"00")+count;
        		this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition,"inoutTimeNo",inoutTimeNo);

        	}else if(belongDay == this.dsInoutWorkTime.getColumn(this.dsInoutWorkTime.rowposition-1,"belongDay")){
        		inoutTimeNo = parseInt(inoutTimeNo)+count;
        		this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition,"inoutTimeNo",inoutTimeNo);

        	}else if(belongDay != this.dsInoutWorkTime.getColumn(this.dsInoutWorkTime.rowposition-1,"belongDay")){
        		inoutTimeNo = parseInt(this.fn_Today()+"00")+count;
        		this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition,"inoutTimeNo",inoutTimeNo);

        	}
        }

        
        /***************************************************************************************************
        *                                         일괄처리 버튼 클릭 Event 		                        *
        ***************************************************************************************************/

        
        this.mainDiv_saveBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchInoutTimeProcess");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HG_InoutTimeForm_onload, this);
            this.mainDiv.endCal.addEventHandler("oneditclick", this.mainDiv_Calendar00_oneditclick, this);
            this.mainDiv.deptStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.mainDiv.empnoStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.mainDiv.empnmStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.mainDiv.deptSearchBtn.addEventHandler("onclick", this.mainDiv_deptSearchBtn_onclick, this);
            this.mainDiv.empSearchBtn.addEventHandler("onclick", this.mainDiv_empSearchBtn_onclick, this);
            this.mainDiv.saveBtn.addEventHandler("onclick", this.mainDiv_saveBtn_onclick, this);
            this.mainDiv.addInoutTimeBtn.addEventHandler("onclick", this.mainDiv_addInoutTimeBtn_onclick, this);
            this.mainDiv.searchInoutTimeBtn.addEventHandler("onclick", this.mainDiv_searchInoutTimeBtn_onclick, this);

        };

        this.loadIncludeScript("HG_InoutTimeForm.xfdl");

       
    };
}
)();

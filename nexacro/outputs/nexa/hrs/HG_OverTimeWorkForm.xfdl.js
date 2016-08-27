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
                this.set_name("HG_OverTimeWorkForm");
                this.set_classname("HG_OverTimeWorkForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">searchOverTimeList</Col><Col id=\"URL\">his::/hrs/overtime/findOverTimeWorkList.do</Col><Col id=\"outData\">dsOverTimeWork=dsOverTimeWork</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">searchApproverOverTimeList</Col><Col id=\"URL\">his::/hrs/overtime/findApproverOverTimeWorkList.do</Col><Col id=\"outData\">dsOverTimeWork=dsOverTimeWork</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchOverTimeProcess</Col><Col id=\"URL\">his::/hrs/overtime/batchOverTimeWorkProcess.do</Col><Col id=\"inData\">dsOverTimeWork=dsOverTimeWork:u</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOverTimeWork", this);
            obj._setContents("<ColumnInfo><Column id=\"startOvertime\" type=\"STRING\" size=\"256\"/><Column id=\"endOvertime\" type=\"STRING\" size=\"256\"/><Column id=\"totalOvertime\" type=\"STRING\" size=\"256\"/><Column id=\"overStatus\" type=\"STRING\" size=\"256\"/><Column id=\"reason\" type=\"STRING\" size=\"256\"/><Column id=\"approvalReason\" type=\"STRING\" size=\"256\"/><Column id=\"overtimeNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"startOvertimeDate\" type=\"STRING\" size=\"256\"/><Column id=\"endOvertimeDate\" type=\"STRING\" size=\"256\"/><Column id=\"beforeOvertimeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this.titleDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("시간외근무");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("mainDiv", "absolute", "2.08%", "55", null, "697", "4%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Grid("holidayRequestGrid", "absolute", "0.68%", "40", null, "649", "0.68%", null, this.mainDiv);
            obj.set_taborder("45");
            obj.set_binddataset("dsOverTimeWork");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"91\"/><Column size=\"83\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"사원명\"/><Cell col=\"2\" text=\"부서번호\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" colspan=\"4\" text=\"시간외근무시간\"/><Cell col=\"8\" text=\"총근무시간\"/><Cell col=\"9\" text=\"사유\"/><Cell col=\"10\" text=\"결재상태\"/></Band><Band id=\"body\"><Cell text=\"bind:empNo\"/><Cell col=\"1\" text=\"bind:empNm\"/><Cell col=\"2\" text=\"bind:deptCd\"/><Cell col=\"3\" text=\"bind:deptNm\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:startOvertimeDate\"/><Cell col=\"5\" edittype=\"masknumber\" text=\"bind:startOvertime\" mask=\"##:00\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:endOvertimeDate\"/><Cell col=\"7\" edittype=\"masknumber\" text=\"bind:endOvertime\" mask=\"##:00\"/><Cell col=\"8\" edittype=\"masknumber\" text=\"bind:totalOvertime\" mask=\"##시간\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" text=\"bind:reason\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" text=\"bind:overStatus\"/></Band></Format></Formats>");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("empnoStc", "absolute", "33.56%", "7", null, "27", "62.95%", null, this.mainDiv);
            obj.getSetter("taborder").set("47");
            obj.set_text("사번");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Edit("empnoEdt", "absolute", "37.39%", "7", null, "26", "57.92%", null, this.mainDiv);
            obj.set_taborder("48");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Edit("empnmEdt", "absolute", "49.23%", "6", null, "26", "42.25%", null, this.mainDiv);
            obj.set_taborder("50");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("empnmStc", "absolute", "45.23%", "7", null, "27", "51.19%", null, this.mainDiv);
            obj.getSetter("taborder").set("51");
            obj.set_text("성명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("hdateStc", "absolute", "0.6%", "6", null, "30", "92.08%", null, this.mainDiv);
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
            obj = new Calendar("startCal", "absolute", "8.6%", "6", null, "30", "79.64%", null, this.mainDiv);
            this.mainDiv.addChild(obj.name, obj);
            obj.set_taborder("53");
            obj = new Calendar("endCal", "absolute", "21.47%", "6", null, "30", "66.78%", null, this.mainDiv);
            this.mainDiv.addChild(obj.name, obj);
            obj.set_taborder("54");
            obj = new Static("Static04", "absolute", "19.51%", "6", null, "31", "77.77%", null, this.mainDiv);
            obj.getSetter("taborder").set("55");
            obj.set_text("   ~");
            obj.style.set_color("#46463dff");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("apBtn", "absolute", "61.07%", "4", null, "30", "33.9%", null, this.mainDiv);
            obj.set_taborder("56");
            obj.set_text("결재");
            obj.set_enable("false");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("addOverTimeBtn", "absolute", "75.98%", "3", null, "32", "16.35%", null, this.mainDiv);
            obj.set_taborder("58");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("delOverTimeBtn", "absolute", "83.9%", "3", null, "32", "8.43%", null, this.mainDiv);
            obj.set_taborder("59");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("searchOverTimeWorkBtn", "absolute", "91.82%", "3", null, "32", "0.51%", null, this.mainDiv);
            obj.set_taborder("60");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("empSearchBtn", "absolute", "42.25%", "4", null, "32", "55.03%", null, this.mainDiv);
            obj.set_taborder("61");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "66.35%", "3", null, "32", "24.28%", null, this.mainDiv);
            obj.set_taborder("62");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
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
            obj = new Layout("default", "", 1233, 721, this.mainDiv,
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
            		p.set_classname("HG_OverTimeWorkForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HG_OverTimeWorkForm.xfdl", "scripts::commonScript.xjs");
        this.addIncludeScript("HG_OverTimeWorkForm.xfdl", "scripts::hrsScripts.xjs");
        this.addIncludeScript("HG_OverTimeWorkForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("HG_OverTimeWorkForm.xfdl", "scripts::commonPopup.xjs");
        this.registerScript("HG_OverTimeWorkForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 시간외근무 관리                                                 *
        *                                                                   *
        * @Path		    시간외근무 관리      	                        	*
        * @Description  시간외근무 등록 정보 조회,등록,수정,삭제 화면	*
        * @Author		이병민 					                        *
        * 								                                    *
        * Created on 2016. 06. 06.                             		        *
        *								                                    *
        ********************************************************************/

        
        /***************************************************************************************************
        *                                         공통 Script Include                                      *
        ***************************************************************************************************/
        //include "scripts::commonScript.xjs";
        //include "scripts::hrsScripts.xjs";
        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonPopup.xjs";

        /***************************************************************************************************
        *                                         화면 변수 선언부                                         *
        ***************************************************************************************************/
        var deptCd;			//부서코드
        var deptNm;			//부서명
        var empNo;			//사원번호
        var empNm;			//사원명
        var pms;			//권한코드
        var sDate;			//시간외근무 시작일
        var eDate;			//시간외근무 종료일
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
        	
        	if(svcID=="searchOverTimeList")
        	{
        		var rowCount = this.dsOverTimeWork.getRowCount();
        			
        			if(rowCount== 0)
        			{
        			
        				alert("조회 내용이 없습니다.");
        				return;
        		
        			}else
        			{
        			
        				alert("조회성공");
        			
        			}
        		
        	}
        	
        	if(svcID=="searchApproverOverTimeList")
        	{
        		var rowCount = this.dsOverTimeWork.getRowCount();
        			
        			if(rowCount== 0)
        			{
        			
        				alert("조회 내용이 없습니다.");
        				return;
        		
        			}else
        			{
        			
        				alert("조회성공");
        			
        			}
        		
        	}
        	
        	if(svcID=="batchOverTimeProcess")
        	{
        		alert("정상 처리되었습니다.");
        		
        	}
        	
        	
        }

        
        /***************************************************************************************************
        *                                         onload Event                                      	   *
        ***************************************************************************************************/
        this.HG_OverTimeWorkForm_onload = function(obj,e)
        {
        	empNo = application.gdsEmp.getColumn(0,"empNo");
        	empNm = application.gdsEmp.getColumn(0,"empNm");
        	deptCd = application.gdsEmp.getColumn(0,"deptCd");
        	deptNm = application.gdsEmp.getColumn(0,"deptNm");
        	pms = application.gdsEmp.getColumn(0,"pms");

        	this.mainDiv.startCal.set_value(this.fn_Today());
        	this.mainDiv.endCal.set_value(this.fn_Today());
        	this.mainDiv.empnoEdt.set_value(empNo);
        	this.mainDiv.empnmEdt.set_value(empNm);
        	
        	if(pms == "admin" && deptNm == "인사팀"){
        	
        		this.mainDiv.apBtn.set_enable(true);
        		this.mainDiv.delOverTimeBtn.set_enable(true);
        	
        	}
        }

        
        /***************************************************************************************************
        *                                         현재 날짜 셋팅 FUNCTION                          	    *
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
        	empNo = this.mainDiv.empnoEdt.value;
        	empNm = this.mainDiv.empnmEdt.value;
        	pms = application.gdsEmp.getColumn(application.gdsEmp.rowposition,"pms");
        	deptCd = application.gdsEmp.getColumn(application.gdsEmp.rowposition,"deptCd");
        	deptNm = application.gdsEmp.getColumn(application.gdsEmp.rowposition,"deptNm");
        }

        
        /***************************************************************************************************
        *                                        사원 셋팅 				    		                    *
        ***************************************************************************************************/
        this.setEmpInfo = function(arrRtn){

        	this.mainDiv.empnoEdt.set_value(arrRtn[0]);
        	this.mainDiv.empnmEdt.set_value(arrRtn[1]);
        	deptCd = arrRtn[2];
        	deptNm = arrRtn[3];
        	alert("부서명:"+deptNm+"권한:"+pms);

        }

        
        /***************************************************************************************************
        *                                         조회 버튼 클릭 Event     		                       	   *
        ***************************************************************************************************/
        this.mainDiv_searchOverTimeWorkBtn_onclick = function(obj,e)
        {
        	
        	if(pms == "admin" && deptNm == "인사팀"){
        		
        		this.gfnService("searchApproverOverTimeList");
        		
        	}else{
        	
        		sDate = this.mainDiv.startCal.value;
        		eDate = this.mainDiv.endCal.value;
        		var argument = 'empNo='+empNo+' sDate='+sDate+' eDate='+eDate;
        		
        		this.dsService.setColumn(0,"argument",argument);
        		
        		this.gfnService("searchOverTimeList");
        	
        	}
        	
        }

        
        /***************************************************************************************************
        *                                         추가 버튼 클릭 Event     		                       	*
        ***************************************************************************************************/
        this.mainDiv_addOverTimeBtn_onclick = function(obj,e)
        {

        	var toDate = this.fn_Today();
        	alert("현재날짜:"+toDate);
        	/*deptCd = application.gdsEmp.getColumn(0,"deptCd");
        	deptNm = application.gdsEmp.getColumn(0,"deptNm");
        	empNo = application.gdsEmp.getColumn(0,"empNo");
        	empNm = application.gdsEmp.getColumn(0,"empNm");*/
        	
        	var beforeOvertimeNo;
        	alert("시간외근무코드:"+this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"overtimeNo"));
        	if(pms == "admin" && deptNm == "인사팀"){
        	
        		empNo = this.mainDiv.empnoEdt.value;
        		empNm = this.mainDiv.empnmEdt.value;
        	
        	}else{
        		if(this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"overtimeNo") == undefined){
        		
        			alert('신청할 시간외근무 정보가 존재하지 않습니다.');
        			return;
        		
        		}else if(this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"overStatus") == "신청"){
        		
        			alert('결재완료가 되지않은 시간외근무 정보에 대하여 다시 신청할 수 없습니다.');
        			return;
        		
        		}
        		
        		beforeOvertimeNo = this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"overtimeNo");
        	
        	}
        	
        	this.dsOverTimeWork.addRow();
        	
        	var overtimeNo = this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition-1,"overtimeNo");
        	var count=0;
        	count = count+1;

        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"startOvertimeDate",toDate);
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"endOvertimeDate",toDate);
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"deptCd",deptCd);
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"deptNm",deptNm);
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"empNo",empNo);
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"empNm",empNm);
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"overStatus","신청");
        	
        	if(overtimeNo == undefined){
        		
        		overtimeNo = parseInt(this.fn_Today()+"00")+count;
        		this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"overtimeNo",overtimeNo);

        
        	}else if(overtimeNo.substring(0,8) != toDate){
        		
        		overtimeNo = parseInt(toDate.substr(0,8)+"00")+count;
        		this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"overtimeNo",overtimeNo);

        
        	}else if(overtimeNo.substring(0,8) == toDate){
        	
        		overtimeNo = parseInt(overtimeNo)+count;
        		this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"overtimeNo",overtimeNo);

        	}
        	
        	if(pms == "admin" && deptNm == "인사팀"){
        		
        	}else{
        	
        		this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"overStatus","신청");
        		this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"beforeOvertimeNo",beforeOvertimeNo);
        	//alert(this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"beforeOvertimeNo"));
        	
        	}
        	
        }

        
        /***************************************************************************************************
        *                                         삭제 버튼 클릭 Event     		                       	   *
        ***************************************************************************************************/
        this.mainDiv_delOverTimeBtn_onclick = function(obj,e)
        {
        	var status = this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"overStatus");
        	
        	if(status == undefined){
        	
        		this.dsOverTimeWork.deleteRow(this.dsOverTimeWork.rowposition);
        	
        	}else{
        	
        		alert("결재완료되었거나 신청된 내용은 삭제가 불가능합니다.");
        	
        	}
        	
        }

        
        /***************************************************************************************************
        *                                         결재 버튼 클릭 Event                             	    *
        ***************************************************************************************************/
        this.mainDiv_apBtn_onclick = function(obj,e)
        {
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"overStatus","결재완료");
        }

        

        /***************************************************************************************************
        *                                         일괄처리 버튼 클릭 Event                                 *
        ***************************************************************************************************/
        this.mainDiv_saveBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchOverTimeProcess");
        }

        
        /***************************************************************************************************
        *                                         그리드 onenterdown Event                                 *
        ***************************************************************************************************/
        this.mainDiv_holidayRequestGrid_onenterdown = function(obj,e)
        {

        	if(e.cell == 7){
        	
        		var endTime = this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"endOvertime");
        		var startTime = this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"startOvertime");
        	
        		var workHours = (parseInt(endTime) - parseInt(startTime))/100;
        		
        		this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"totalOvertime",workHours);	
        	
        	}
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HG_OverTimeWorkForm_onload, this);
            this.mainDiv.holidayRequestGrid.addEventHandler("oncellclick", this.mainDiv_holidayRequestGrid_oncellclick, this);
            this.mainDiv.holidayRequestGrid.addEventHandler("onenterdown", this.mainDiv_holidayRequestGrid_onenterdown, this);
            this.mainDiv.empnoStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.mainDiv.empnmStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.mainDiv.apBtn.addEventHandler("onclick", this.mainDiv_apBtn_onclick, this);
            this.mainDiv.addOverTimeBtn.addEventHandler("onclick", this.mainDiv_addOverTimeBtn_onclick, this);
            this.mainDiv.delOverTimeBtn.addEventHandler("onclick", this.mainDiv_delOverTimeBtn_onclick, this);
            this.mainDiv.searchOverTimeWorkBtn.addEventHandler("onclick", this.mainDiv_searchOverTimeWorkBtn_onclick, this);
            this.mainDiv.empSearchBtn.addEventHandler("onclick", this.mainDiv_empSearchBtn_onclick, this);
            this.mainDiv.saveBtn.addEventHandler("onclick", this.mainDiv_saveBtn_onclick, this);

        };

        this.loadIncludeScript("HG_OverTimeWorkForm.xfdl");

       
    };
}
)();

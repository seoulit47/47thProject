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
                this.set_name("HG_HolidayForm");
                this.set_classname("HG_HolidayForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGuntaeGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"gubunNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"gubunNm\">연차</Col></Row><Row><Col id=\"gubunNm\">근속</Col></Row><Row><Col id=\"gubunNm\">병가</Col></Row><Row><Col id=\"gubunNm\">경조사</Col></Row><Row><Col id=\"gubunNm\">공가</Col></Row><Row><Col id=\"gubunNm\">생리</Col></Row><Row><Col id=\"gubunNm\">분만</Col></Row><Row><Col id=\"gubunNm\">유산</Col></Row><Row><Col id=\"gubunNm\">임신중 검진휴가</Col></Row><Row><Col id=\"gubunNm\">휴직</Col></Row><Row><Col id=\"gubunNm\">육아휴직</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTotalInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalHoliday\" type=\"STRING\" size=\"256\"/><Column id=\"useDay\" type=\"STRING\" size=\"256\"/><Column id=\"remainDay\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHoliday", this);
            obj._setContents("<ColumnInfo><Column id=\"appType\" type=\"STRING\" size=\"256\"/><Column id=\"guntaeGubun\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"holidayStatus\" type=\"STRING\" size=\"256\"/><Column id=\"holidayNo\" type=\"STRING\" size=\"256\"/><Column id=\"totalDays\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"useDays\" type=\"STRING\" size=\"256\"/><Column id=\"remainDays\" type=\"STRING\" size=\"256\"/><Column id=\"reqTotalDays\" type=\"STRING\" size=\"256\"/><Column id=\"belongYear\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">searchHolidayList</Col><Col id=\"URL\">his::hrs/holiday/findHolidayList.do</Col><Col id=\"outData\">dsHoliday=dsHoliday</Col></Row><Row><Col id=\"serviceID\">searchAdminHolidayList</Col><Col id=\"URL\">his::hrs/holiday/findAdminHolidayList.do</Col><Col id=\"outData\">dsHoliday=dsHoliday</Col></Row><Row><Col id=\"inData\">dsHoliday=dsHoliday:u</Col><Col id=\"serviceID\">batchHoliday</Col><Col id=\"URL\">his::hrs/holiday/batchHolidayProcess.do</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAppType", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">1</Col><Col id=\"nm\">신청</Col></Row><Row><Col id=\"cd\">2</Col><Col id=\"nm\">취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this.titleDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("휴가신청");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("mainDiv", "absolute", "0.8%", "55", null, "697", "1.12%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Button("apBtn", "absolute", "65.99%", "6", null, "30", "29.2%", null, this.mainDiv);
            obj.set_taborder("17");
            obj.set_text("결재");
            obj.set_enable("false");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Grid("holidayRequestGrid", "absolute", "0.65%", "40", null, "649", "0.65%", null, this.mainDiv);
            obj.set_taborder("18");
            obj.set_binddataset("dsHoliday");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"72\"/><Column size=\"68\"/><Column size=\"99\"/><Column size=\"107\"/><Column size=\"99\"/><Column size=\"111\"/><Column size=\"91\"/><Column size=\"73\"/><Column size=\"76\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"normal\" text=\"선택\"/><Cell col=\"1\" text=\"신청구분\"/><Cell col=\"2\" text=\"근태종류\"/><Cell col=\"3\" colspan=\"2\"><Cell colspan=\"2\" text=\"기간\"/></Cell><Cell col=\"5\" text=\"휴가신청일수\"/><Cell col=\"6\" text=\"총휴가일수\"/><Cell col=\"7\" text=\"사용일수\"/><Cell col=\"8\" text=\"잔여일수\"/><Cell col=\"9\" text=\"결제상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:appType\" combodataset=\"dsAppType\" combocodecol=\"cd\" combodatacol=\"nm\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:guntaeGubun\" combodataset=\"dsGuntaeGubun\" combocodecol=\"gubunNm\" combodatacol=\"gubunNm\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:startDate\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:endDate\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" text=\"bind:reqTotalDays\" mask=\"##.#일\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" text=\"bind:totalDays\" mask=\"##.#일\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" text=\"bind:useDays\" mask=\"##.#일\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" text=\"bind:remainDays\" mask=\"##.#일\"/><Cell col=\"9\" text=\"bind:holidayStatus\"/></Band></Format></Formats>");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Spin("yearSpin", "absolute", "5.55%", "5", null, "30", "88.34%", null, this.mainDiv);
            obj.set_taborder("19");
            obj.set_value("2016");
            obj.getSetter("class").set("AreaSpin");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "1.31%", "7", null, "27", "95.68%", null, this.mainDiv);
            obj.getSetter("taborder").set("21");
            obj.set_text("년도");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("searchHolidayBtn", "absolute", "90.54%", "5", null, "32", "2.12%", null, this.mainDiv);
            obj.set_taborder("22");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("addHolidayBtn", "absolute", "82.06%", "5", null, "32", "10.6%", null, this.mainDiv);
            obj.set_taborder("23");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "71.94%", "5", null, "32", "19.09%", null, this.mainDiv);
            obj.set_taborder("25");
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
            		p.set_classname("HG_HolidayForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HG_HolidayForm.xfdl", "scripts::commonScript.xjs");
        this.addIncludeScript("HG_HolidayForm.xfdl", "scripts::hrsScripts.xjs");
        this.addIncludeScript("HG_HolidayForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("HG_HolidayForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 휴가신청관리                                               		*
        *                                                                   *
        * @Path		    hrs-HG_HolidayForm     	                        	*
        * @Description  휴가신청 정보 조회,등록(신청,취소),결재 화면   *
        * @Author		이병민  					                        *
        * 								                                    *
        * Created on 2016. 5. 31.                             		        *
        *								                                    *
        ********************************************************************/

        
        /***************************************************************************************************
        *                                         공통 Script Include                                      *
        ***************************************************************************************************/
        //include "scripts::commonScript.xjs";
        //include "scripts::hrsScripts.xjs";
        //include "scripts::commonTransaction.xjs";

        
        /***************************************************************************************************
        *                                         화면 변수 선언부                                         *
        ***************************************************************************************************/
        var pms;//권한
        var belongYear;//기준년
        var empNo;//사원번호
        var deptNm;//부서명
        var holidayNo;//휴가신청번호

        
        /***************************************************************************************************
        *                                         콜백 함수 셋팅                                           *
        ***************************************************************************************************/
        // 콜백
        /*
        this.CallbackFunc = function(trid,errcd,errmsg){
           
           if(trid =="findAppmtEmpList"){
           
              if(errcd == 0){
                 alert("부서목록 검색 성공");
              }else{
                 alert("부서목록 검색 실패");
              }
           }else if(trid == "findEmpList"){
              if(errcd == 0){
                 alert("사원목록이 검색 성공");
                 }else{
                 alert("사원목록이 검색 실패");
              }      
           }else if(trid == "findAppmtList"){
              if(errcd == 0){
                 alert("발령정보 검색 성공");
                 }else{
                 alert("발령정보 검색 실패");
              }
           }else if(trid == "insertAppointDetail"){
              if(errcd == 0){                    //alert(global.http.RecvHttpStr); //받을때  //SendHttpStr 이건 보낼때
                 alert("발령상세 저장");
                 }else{                           //    alert(global.http.RecvHttpStr);
                 alert("발령상세 저장 실패");
              }
           }else if(trid == "modifyAppointEmp"){
              if(errcd == 0){
                 alert(" 되었습니다");
                 }else{
                 alert(" 않습니다");
              }
           }else if(trid == "insertAppoint"){
              if(errcd == 0){
                 alert("발령 저장 성공");
                 }else{
                 alert("발령 실패");
              }
           }
        }
        */

        this.CallbackFunc = function CallbackFunc(svcID,errorCode,errorMsg)
        {
        	if(errorCode<0)
        	{
        		alert(errorMsg);
        		return;
        	}
        	
        	if(svcID=="searchHolidayList" || svcID=="searchAdminHolidayList")
        	{
        		var rowCount = this.dsHoliday.getRowCount();
        			
        			if(rowCount== 0)
        			{
        			
        				alert("조회 내용이 없습니다.");
        				return;
        		
        			}else
        			{
        				alert("조회성공");
        			
        			}
        		
        	}
        	
        	if(svcID=="batchHoliday")
        	{
        		alert("정상 처리되었습니다.");
        		
        	}
        	
        	
        }

        
        /***************************************************************************************************
        *                                         onload Event                                      	   *
        ***************************************************************************************************/
        this.HG_HolidayForm_onload = function(obj,e)
        {
        	
        	var argument;
        	deptNm = application.gdsEmp.getColumn(0,"deptNm");
        	pms = application.gdsEmp.getColumn(0,"pms");
        	belongYear = this.mainDiv.yearSpin.value;
        	empNo = application.gdsEmp.getColumn(0,"empNo");

        	if(pms == 'admin' && deptNm == '인사팀')
        	{

        		this.mainDiv.apBtn.set_enable(true);
        		
        		argument = 'belongYear='+belongYear;
        		this.dsService.setColumn(1,"argument",argument);
        		this.gfnService("searchAdminHolidayList");

        		
        	}else
        	{
        		
        		argument = 'belongYear='+belongYear+' empNo='+empNo;
        		this.dsService.setColumn(0,"argument",argument);
        		this.gfnService("searchHolidayList");

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
        *                                         조회 버튼 클릭 Event                             	   	   *
        ***************************************************************************************************/
        this.mainDiv_searchHolidayBtn_onclick = function(obj,e)
        {
        	//alert(pms);
        	//alert(empNo);
        	alert("부서이름:"+deptNm);
        	var argument;
        	belongYear = this.mainDiv.yearSpin.value;

        	if(pms == 'admin' && deptNm == '인사팀')
        	{
        		
        		argument = 'belongYear='+belongYear;
        		this.dsService.setColumn(1,"argument",argument);
        		this.gfnService("searchAdminHolidayList");

        		
        	}else
        	{
        		
        		argument = 'belongYear='+belongYear+' empNo='+empNo;
        		this.dsService.setColumn(0,"argument",argument);
        		this.gfnService("searchHolidayList");

        	}
        	
        }

        
        /***************************************************************************************************
        *                                         추가 버튼 클릭 Event                             	   	   *
        ***************************************************************************************************/
        this.mainDiv_addHolidayBtn_onclick = function(obj,e)
        {	
        	var count=0;
        	count=count+1;
        	var status = this.dsHoliday.getColumn(this.dsHoliday.rowcount-1,"holidayStatus");
        	holidayNo = this.dsHoliday.getColumn(this.dsHoliday.rowcount-1,"holidayNo");
        	var toDate = this.fn_Today();

        	if(status == undefined || status == "결재완료" ){
        	
        		this.dsHoliday.addRow();
        		this.dsHoliday.setColumn(this.dsHoliday.rowcount-1,"startDate",this.fn_Today());
        		this.dsHoliday.setColumn(this.dsHoliday.rowcount-1,"endDate",this.fn_Today());
        		this.dsHoliday.setColumn(this.dsHoliday.rowcount-1,"empNo",empNo);
        		this.dsHoliday.setColumn(this.dsHoliday.rowcount-1,"belongYear",belongYear);
        		this.dsHoliday.setColumn(this.dsHoliday.rowcount-1,"belongYear",belongYear);
        		
        		//휴일번호 좀더 디테일하게
        		if(holidayNo == undefined){
        		
        			holidayNo = parseInt(this.fn_Today()+"00")+count;
        			this.dsHoliday.setColumn(this.dsHoliday.rowcount-1,"holidayNo",holidayNo);
        			alert(holidayNo);
        		}else{
        		
        			holidayNo = parseInt(holidayNo)+count;
        			this.dsHoliday.setColumn(this.dsHoliday.rowcount-1,"holidayNo",holidayNo);
        			
        		}
        	
        	}else{
        	
        		alert("이전 휴가신청이 결재되지 않은 상태입니다.");
        		return;
        	}
        	
        	
        }

        
        /***************************************************************************************************
        *                                         결재 버튼 클릭 Event                             	    *
        ***************************************************************************************************/
        this.mainDiv_apBtn_onclick = function(obj,e)
        {
        	this.dsHoliday.setColumn(this.dsHoliday.rowposition,"holidayStatus","결재완료");
        }

        
        /***************************************************************************************************
        *                                         휴가신청 그리드 클릭 Event                             *
        ***************************************************************************************************/
        this.mainDiv_holidayRequestGrid_oncellclick = function(obj,e)
        {

        	if(pms == 'admin' && deptNm == '인사팀'){}
        	else
        	{
        	
        		var status = this.dsHoliday.getColumn(e.row,"holidayStatus");
        		
        		if(status == "결재완료")
        		{
        		
        			alert("결재완료된 내용입니다.");
        			return;
        		
        		}else if(status == "요청"){
        		
        			this.mainDiv.holidayRequestGrid.setCellProperty("body", 2, "edittype", "none");	
        			this.mainDiv.holidayRequestGrid.setCellProperty("body", 3, "edittype", "none");	
        			this.mainDiv.holidayRequestGrid.setCellProperty("body", 4, "edittype", "none");
        		
        		}
        	
        	}
        	
        	
        }

        
        /***************************************************************************************************
        *                                         일괄처리 버튼 클릭 Event                               *
        ***************************************************************************************************/
        this.mainDiv_saveBtn_onclick = function(obj,e)
        {
        	
        	this.gfnService("batchHoliday");
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HG_HolidayForm_onload, this);
            this.mainDiv.apBtn.addEventHandler("onclick", this.mainDiv_apBtn_onclick, this);
            this.mainDiv.holidayRequestGrid.addEventHandler("oncellclick", this.mainDiv_holidayRequestGrid_oncellclick, this);
            this.mainDiv.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.mainDiv.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.mainDiv.searchHolidayBtn.addEventHandler("onclick", this.mainDiv_searchHolidayBtn_onclick, this);
            this.mainDiv.addHolidayBtn.addEventHandler("onclick", this.mainDiv_addHolidayBtn_onclick, this);
            this.mainDiv.saveBtn.addEventHandler("onclick", this.mainDiv_saveBtn_onclick, this);

        };

        this.loadIncludeScript("HG_HolidayForm.xfdl");

       
    };
}
)();

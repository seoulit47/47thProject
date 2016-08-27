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
                this.set_name("HG_HdayForm");
                this.set_classname("HG_HdayForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHday", this);
            obj._setContents("<ColumnInfo><Column id=\"hdayDate\" type=\"STRING\" size=\"256\"/><Column id=\"hdayNm\" type=\"STRING\" size=\"256\"/><Column id=\"hdayNm2\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">searchHdayList</Col><Col id=\"URL\">his::hrs/hday/findHday.do</Col><Col id=\"outData\">dsHday=dsHday</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchHday</Col><Col id=\"URL\">his::hrs/hday/batchHdayProcess.do</Col><Col id=\"inData\">dsHday=dsHday:u</Col><Col id=\"outData\">dsHday=dsHday</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"payDate\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"loginIp\" type=\"STRING\" size=\"256\"/><Column id=\"loginTime\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"empNo\">43001</Col><Col id=\"empNm\">나이팅게일</Col><Col id=\"jobcl\">간호직</Col><Col id=\"jobtt\">실장(부장급)</Col><Col id=\"jobrk\">매니저1급간호사</Col><Col id=\"rrn\">220512-2345678</Col><Col id=\"birthday\">19220512</Col><Col id=\"gender\">W</Col><Col id=\"mateYn\">1</Col><Col id=\"addr\">진주시 가좌동 639-1번지</Col><Col id=\"zipCd\">660-330</Col><Col id=\"permaddr\">영국 어딘가</Col><Col id=\"tel\">055-753-3677</Col><Col id=\"phone\">010-3672-6182</Col><Col id=\"extsn\">7001</Col><Col id=\"fax\">055-753-3676</Col><Col id=\"password\">1</Col><Col id=\"image\">430013.jpg</Col><Col id=\"natnt\">영국</Col><Col id=\"localYn\">1</Col><Col id=\"forinNum\">[Undefined]</Col><Col id=\"deptCd\">80000</Col><Col id=\"hireDiv\">정규직</Col><Col id=\"workStatus\">재직</Col><Col id=\"retMonthWorkingdays\">[Undefined]</Col><Col id=\"payStep\">13</Col><Col id=\"hireDate\">20061201</Col><Col id=\"pms\">admin</Col><Col id=\"detailAddr\">나이팅빌라 1004호</Col><Col id=\"email\">woojung0284</Col><Col id=\"bankNm\">하나은행</Col><Col id=\"accountNm\">805-12-214984</Col><Col id=\"retDate\">[Undefined]</Col><Col id=\"payDate\">25</Col><Col id=\"workPeriod\">8</Col><Col id=\"deptNm\">인사팀</Col><Col id=\"frignSingleTxrate\">[Undefined]</Col><Col id=\"sts\">[Undefined]</Col><Col id=\"loginIp\"/><Col id=\"loginTime\">20151230-002654</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this.titleDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("휴일관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("mainDiv", "absolute", "0.88%", "56", null, "704", "0.64%", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Calendar("startCal", "absolute", "9.28%", "5", null, "30", "79.5%", null, this.mainDiv);
            this.mainDiv.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj = new Calendar("endCal", "absolute", "22.7%", "5", null, "30", "66.07%", null, this.mainDiv);
            this.mainDiv.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj = new Static("hdateStc", "absolute", "1.23%", "6", null, "30", "91.78%", null, this.mainDiv);
            obj.getSetter("taborder").set("4");
            obj.set_text("기간");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Grid("hdayGrid", "absolute", "1.23%", "42", null, "654", "2.88%", null, this.mainDiv);
            obj.set_taborder("9");
            obj.set_binddataset("dsHday");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"383\"/><Column size=\"383\"/><Column size=\"383\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"날짜\"/><Cell col=\"2\" text=\"휴일명\"/><Cell col=\"3\" text=\"공휴일명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:hdayDate\"/><Cell col=\"2\" text=\"bind:hdayNm\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:hdayNm2\"/></Band></Format></Formats>");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "20.26%", "6", null, "31", "77.14%", null, this.mainDiv);
            obj.getSetter("taborder").set("10");
            obj.set_text("   ~");
            obj.style.set_color("#46463dff");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("serchHdayBtn", "absolute", "62.82%", "7", null, "32", "29.86%", null, this.mainDiv);
            obj.set_taborder("11");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("addHdayBtn", "absolute", "71.52%", "7", null, "32", "21.16%", null, this.mainDiv);
            obj.set_taborder("12");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("delHdayBtn", "absolute", "80.23%", "7", null, "32", "12.45%", null, this.mainDiv);
            obj.set_taborder("13");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "88.93%", "7", null, "32", "2.12%", null, this.mainDiv);
            obj.set_taborder("15");
            obj.set_cssclass("saveBtn");
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
            obj = new Layout("default", "", 0, 704, this.mainDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div01");
            		p.style.set_background("whitesmoke");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.mainDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HG_HdayForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HG_HdayForm.xfdl", "scripts::commonScript.xjs");
        this.addIncludeScript("HG_HdayForm.xfdl", "scripts::hrsScripts.xjs");
        this.addIncludeScript("HG_HdayForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("HG_HdayForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 휴일관리                                                  		*
        *                                                                   *
        * @Path		    휴일관리        	                        		*
        * @Description  휴일정보 조회,등록,수정,삭제 화면          		*
        * @Author	    이병민   					                        *
        * 								                                    *
        * Created on 2016. 5. 30.                             		        *
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
        var startDate;//시작일자
        var endDate;//마지막일자
        var pms;
        var deptNm;

        
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
        		
        		
        		if(svcID=="searchHdayList")
        		{
        			
        			var rowCount = this.dsHday.getRowCount();
        			
        			if(rowCount== 0)
        			{
        			
        				alert("조회 내용이 없습니다.");
        				return;
        		
        			}else
        			{
        			
        				alert("조회성공");
        			
        			}
        		
        		
        		}
        		if(svcID=="batchHday")
        		{
        		
        			alert("정상 처리되었습니다.");
        		
        		}
        	
        	}
        	
        }

        /***************************************************************************************************
        *                                         onload Event                                      	   *
        ***************************************************************************************************/
        this.HGhdayForm_onload = function(obj,e)
        {
        	
        	this.mainDiv.startCal.set_value(this.fn_Today());
        	this.mainDiv.endCal.set_value(this.fn_Today());
        	pms = application.gdsEmp.getColumn(0,"pms");
        	deptNm = application.gdsEmp.getColumn(0,"deptNm");
        	//alert(pms);
        	
        	if(pms == 'admin' && deptNm == '인사팀'){
        		
        		this.addHdayBtn.set_enable(true);
        		this.delHdayBtn.set_enable(true);
        		this.saveBtn.set_enable(true);
        	
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
        *                                         조회 버튼 클릭 Event                                 	   *
        ***************************************************************************************************/
        this.mainDiv.serchHdayBtn_onclick = function(obj,e)
        {
        	startDate = this.mainDiv.startCal.value;
        	endDate = this.mainDiv.endCal.value;
        	
        	var argument = 'sDate='+startDate+' eDate='+endDate;
        	this.dsService.setColumn(0,"argument",argument);
        	
        	this.gfnService("searchHdayList");
        	
        	this.mainDiv.hdayGrid.setCellProperty("body","edittype","none");
        	
        	//alert("날짜:"+this.dsHday.hdayDate);
        }

        
        /***************************************************************************************************
        *                                         추가 버튼 클릭 Event                                 	   *
        ***************************************************************************************************/
        this.mainDiv.addHdayBtn_onclick = function(obj,e)
        {
        	this.dsHday.addRow();
        	this.dsHday.setColumn(this.dsHday.rowcount-1,"hdayDate",this.fn_Today());
        	this.mainDiv.hdayGrid.setCellProperty("body","edittype","normal");
        }

        

        /***************************************************************************************************
        *                                         삭제 버튼 클릭 Event                                 	   *
        ***************************************************************************************************/
        this.mainDiv.delHdayBtn_onclick = function(obj,e)
        {
        	this.dsHday.deleteRow(this.dsHday.rowposition);
        }

        
        /***************************************************************************************************
        *                                         일괄처리 버튼 클릭 Event                                 *
        ***************************************************************************************************/
        this.mainDiv.saveBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchHday");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.mainDiv.serchHdayBtn.addEventHandler("onclick", this.mainDiv.serchHdayBtn_onclick, this);
            this.mainDiv.addHdayBtn.addEventHandler("onclick", this.mainDiv.addHdayBtn_onclick, this);
            this.mainDiv.delHdayBtn.addEventHandler("onclick", this.mainDiv.delHdayBtn_onclick, this);
            this.mainDiv.saveBtn.addEventHandler("onclick", this.mainDiv.saveBtn_onclick, this);

        };

        this.loadIncludeScript("HG_HdayForm.xfdl");

       
    };
}
)();

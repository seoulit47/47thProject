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
                this.set_name("HG_MonGuntaeForm");
                this.set_classname("HG_MonGuntaeForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMonGuntaeClose", this);
            obj._setContents("<ColumnInfo><Column id=\"monGuntaeNo\" type=\"STRING\" size=\"256\"/><Column id=\"belongYearMon\" type=\"STRING\" size=\"256\"/><Column id=\"closeYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMonGuntae", this);
            obj._setContents("<ColumnInfo><Column id=\"belongYearMon\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"basicTime\" type=\"STRING\" size=\"256\"/><Column id=\"overTime\" type=\"STRING\" size=\"256\"/><Column id=\"basicDay\" type=\"STRING\" size=\"256\"/><Column id=\"absenteeismDay\" type=\"STRING\" size=\"256\"/><Column id=\"paidDay\" type=\"STRING\" size=\"256\"/><Column id=\"absenceDay\" type=\"STRING\" size=\"256\"/><Column id=\"yeonchaDay\" type=\"STRING\" size=\"256\"/><Column id=\"aleryDay\" type=\"STRING\" size=\"256\"/><Column id=\"latelessDay\" type=\"STRING\" size=\"256\"/><Column id=\"goOutDay\" type=\"STRING\" size=\"256\"/><Column id=\"closeYn\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">searchMonGuntaeList</Col><Col id=\"URL\">his::hrs/guntae/findMonGuntaeList.do</Col><Col id=\"outData\">dsMonGuntae=dsMonGuntae</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">createGuntae</Col><Col id=\"URL\">his::hrs/guntae/callMonGuntae.do</Col><Col id=\"inData\">dsMonGuntae=dsMonGuntae:u</Col><Col id=\"outData\">dsMonGuntae=dsMonGuntae</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">monGuntaeClose</Col><Col id=\"URL\">his::hrs/guntae/callCloseMonGuntae.do</Col><Col id=\"outData\">dsMonGuntaeClose=dsMonGuntaeClose</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMonth", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col></Row><Row><Col id=\"code\">02</Col></Row><Row><Col id=\"code\">03</Col></Row><Row><Col id=\"code\">04</Col></Row><Row><Col id=\"code\">05</Col></Row><Row><Col id=\"code\">06</Col></Row><Row><Col id=\"code\">07</Col></Row><Row><Col id=\"code\">08</Col></Row><Row><Col id=\"code\">09</Col></Row><Row><Col id=\"code\">10</Col></Row><Row><Col id=\"code\">11</Col></Row><Row><Col id=\"code\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this.titleDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("월근태조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("mainDiv", "absolute", "0.8%", "55", null, "697", "1.12%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);
            obj = new Grid("holidayRequestGrid", "absolute", "1.31%", "40", null, "649", "3.51%", null, this.mainDiv);
            obj.set_taborder("50");
            obj.set_binddataset("dsMonGuntae");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"날짜\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"기본시간\"/><Cell col=\"4\" text=\"연장시간\"/><Cell col=\"5\" text=\"기본일\"/><Cell col=\"6\" text=\"결근일\"/><Cell col=\"7\" text=\"유급일\"/><Cell col=\"8\" text=\"휴직일\"/><Cell col=\"9\" text=\"연차일\"/><Cell col=\"10\" text=\"조퇴일\"/><Cell col=\"11\" text=\"지각일\"/><Cell col=\"12\" text=\"외출일\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:belongYearMon\"/><Cell col=\"2\" text=\"bind:empNo\"/><Cell col=\"3\" text=\"bind:basicTime\"/><Cell col=\"4\" text=\"bind:overTime\"/><Cell col=\"5\" text=\"bind:basicDay\"/><Cell col=\"6\" text=\"bind:absenteeismDay\"/><Cell col=\"7\" text=\"bind:paidDay\"/><Cell col=\"8\" text=\"bind:absenceDay\"/><Cell col=\"9\" text=\"bind:yeonchaDay\"/><Cell col=\"10\" text=\"bind:aleryDay\"/><Cell col=\"11\" text=\"bind:latelessDay\"/><Cell col=\"12\" text=\"bind:goOutDay\"/></Band></Format></Formats>");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "33.2%", "8", null, "27", "62.07%", null, this.mainDiv);
            obj.getSetter("taborder").set("52");
            obj.set_text("사번");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Edit("empnoEdt", "absolute", "38.25%", "8", null, "26", "54.08%", null, this.mainDiv);
            obj.set_taborder("53");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Edit("empnmEdt", "absolute", "56.93%", "8", null, "26", "35.15%", null, this.mainDiv);
            obj.set_taborder("55");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "50.57%", "8", null, "27", "43.72%", null, this.mainDiv);
            obj.getSetter("taborder").set("56");
            obj.set_text("성명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("hdateStc", "absolute", "1.22%", "6", null, "30", "91.76%", null, this.mainDiv);
            obj.getSetter("taborder").set("57");
            obj.set_text("기간");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Spin("yearSpin", "absolute", "8.32%", "5", null, "30", "85.48%", null, this.mainDiv);
            obj.set_taborder("58");
            obj.set_value("2016");
            obj.getSetter("class").set("AreaSpin");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15.09%", "7", null, "24", "82.71%", null, this.mainDiv);
            obj.getSetter("taborder").set("59");
            obj.set_text("년");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Combo("monthCombo", "absolute", "16.97%", "7", null, "26", "78.63%", null, this.mainDiv);
            this.mainDiv.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_innerdataset("dsMonth");
            obj.set_codecolumn("code");
            obj.set_datacolumn("code");
            obj = new Button("monGuntaeCloseBtn", "absolute", "68.43%", "7", null, "30", "22.19%", null, this.mainDiv);
            obj.set_taborder("61");
            obj.set_text("월근태마감");
            obj.set_enable("false");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("guntaeCreateBtn", "absolute", "80.1%", "7", null, "30", "12.4%", null, this.mainDiv);
            obj.set_taborder("62");
            obj.set_text("월근태생성");
            obj.set_enable("false");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("searchMonGuntaeBtn", "absolute", "89.23%", "6", null, "32", "4.08%", null, this.mainDiv);
            obj.set_taborder("64");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Button("empSearchBtn", "absolute", "46.72%", "60", null, "32", "50.72%", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
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
            		p.set_classname("HG_MonGuntaeForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HG_MonGuntaeForm.xfdl", "scripts::commonScript.xjs");
        this.addIncludeScript("HG_MonGuntaeForm.xfdl", "scripts::hrsScripts.xjs");
        this.addIncludeScript("HG_MonGuntaeForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("HG_MonGuntaeForm.xfdl", "scripts::commonPopup.xjs");
        this.registerScript("HG_MonGuntaeForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 월근태 관리                                               		*
        *                                                                   *
        * @Path		    hrs-HG_MonGuntaeForm     	                       	*
        * @Description  월근태  정보 조회,생성,마감  화면               *
        * @Author		이병민  					                        *
        * 								                                    *
        * Created on 2016. 6. 02.                             		        *
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
        *                                          화면 변수 선언부                                        *
        ***************************************************************************************************/

        var startDate;
        var endDate;
        var empNo;
        var empNm;
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
        		
        		
        		if(svcID=="searchMonGuntaeList")
        		{
        			
        			var rowCount = this.dsMonGuntae.getRowCount();
        			
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
        		if(svcID=="monGuntaeClose")
        		{
        		
        			alert("정상 처리되었습니다.");
        		
        		}
        	
        	}
        	
        }

        /***************************************************************************************************
        *                                         onload Event                                      	   *
        ***************************************************************************************************/
        this.HG_MonGuntaeForm_onload = function(obj,e)
        {
        	this.mainDiv.empnoEdt.set_value(application.gdsEmp.getColumn(0,"empNo"));
        	this.mainDiv.empnmEdt.set_value(application.gdsEmp.getColumn(0,"empNm"));
        	
        	empNo = this.mainDiv.empnoEdt.value;
        	empNm = this.mainDiv.empnmEdt.value;
        	
        	pms = application.gdsEmp.getColumn(0,"pms");
        	deptNm = application.gdsEmp.getColumn(0,"deptNm");
        	
        	if(pms == 'admin' && deptNm == '인사팀'){
        		
        		this.mainDiv.guntaeCreateBtn.set_enable(true);
        		this.mainDiv.monGuntaeCloseBtn.set_enable(true);
        	
        	}
        	
        }

        
        /***************************************************************************************************
        *                                         사원 조회 버튼 클릭 Event                            	   *
        ***************************************************************************************************/
        this.mainDiv_empSearchBtn_onclick = function(obj,e)
        {
        	this.gfn_EmpPopup();
        }

        
        /***************************************************************************************************
        *                                        사원 셋팅 				    		                       *
        ***************************************************************************************************/

        this.setEmpInfo = function(arrRtn){

        	this.mainDiv.empnoEdt.set_value(arrRtn[0]);
        	this.mainDiv.empnmEdt.set_value(arrRtn[1]);
        	deptNm=arrRtn[3];
        	alert("부서명:"+deptNm);
        }

        /***************************************************************************************************
        *                                         조회 버튼 클릭 Event     		                       	   *
        ***************************************************************************************************/
        this.mainDiv_searchMonGuntaeBtn_onclick = function(obj,e)
        {
        	
        	empNo = this.mainDiv.empnoEdt.value;
        	var belongYearMon = this.mainDiv.yearSpin.value;
        	belongYearMon += this.mainDiv.monthCombo.value;
        	
        	if(this.mainDiv.monthCombo.value == undefined){
        	
        		alert("월을 선택하세요.");
        		return;
        	}
        	
        	if(pms == 'admin' && deptNm == '인사팀'){
        		var argument = 'belongYearMon='+belongYearMon;
        	}else{
        		var argument = 'empNo='+empNo+' belongYearMon='+belongYearMon;	
        	}
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("searchMonGuntaeList");
        	
        }

        
        /***************************************************************************************************
        *                                         월근태생성 버튼 클릭 Event	                       	   *
        ***************************************************************************************************/
        this.mainDiv.guntaeCreateBtn_onclick = function(obj,e)
        {
        	if(this.mainDiv.monthCombo.value == undefined){
        	
        		alert("월을 선택하세요.");
        		return;
        	}
        	
        	var count = this.dsMonGuntae.rowcount;

        	if(count == 0){
        	
        		alert("조회 후 월근태를 생성하세요.");
        		return;
        	}else{
        	
        		var closeYn = this.dsMonGuntae.getColumn(0,"closeYn");
        		
        		if(closeYn == "Y"){
        		
        			alert("이미 마감된 데이터입니다.");
        			return;
        		
        		}
        	
        	}
        	
        	this.gfnService("createGuntae");
        }

        
        /***************************************************************************************************
        *                                         월근태마감 버튼 클릭 Event	                       	   *
        ***************************************************************************************************/
        this.mainDiv.monGuntaeCloseBtn_onclick = function(obj,e)
        {
        	var belongYearMon = this.mainDiv.yearSpin.value;
        	belongYearMon += this.mainDiv.monthCombo.value;
        	
        	if(this.mainDiv.monthCombo.value == undefined){
        	
        		alert("월을 선택하세요.");
        		return;
        	}

        	var count = this.dsMonGuntae.rowcount;

        	if(count == 0){
        	
        		alert("조회 후 월근태를 마감하세요.");
        		return;
        	}
        	
        	var argument = 'belongYearMon='+belongYearMon;
        	this.dsService.setColumn(2,"argument",argument);
        	
        	var closeYn = this.dsMonGuntaeClose.getColumn(0,"closeYn");
        	
        	if(closeYn == "Y"){
        	
        		alert("이미 마감된 월근태입니다.");
        		return;
        	}
        	
        	this.gfnService("monGuntaeClose");
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HG_MonGuntaeForm_onload, this);
            this.mainDiv.holidayRequestGrid.addEventHandler("oncellclick", this.mainDiv_holidayRequestGrid_oncellclick, this);
            this.mainDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.mainDiv.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.mainDiv.monGuntaeCloseBtn.addEventHandler("onclick", this.mainDiv.monGuntaeCloseBtn_onclick, this);
            this.mainDiv.guntaeCreateBtn.addEventHandler("onclick", this.mainDiv.guntaeCreateBtn_onclick, this);
            this.mainDiv.searchMonGuntaeBtn.addEventHandler("onclick", this.mainDiv_searchMonGuntaeBtn_onclick, this);
            this.empSearchBtn.addEventHandler("onclick", this.mainDiv_empSearchBtn_onclick, this);

        };

        this.loadIncludeScript("HG_MonGuntaeForm.xfdl");

       
    };
}
)();

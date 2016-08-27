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
                this.set_name("HT_RetireeForm");
                this.set_classname("HT_RetireeForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1239,764);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRetApproPay", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"th\" type=\"STRING\" size=\"256\"/><Column id=\"paymentMonth\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"myselfBurdenAmount\" type=\"STRING\" size=\"256\"/><Column id=\"retirementBeforeSalary\" type=\"STRING\" size=\"256\"/><Column id=\"payYN\" type=\"STRING\" size=\"256\"/><Column id=\"paymentDate\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"userBurdenAmount\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">retApproPayInfo</Col><Col id=\"URL\">his::hrs/ret/findRetApproPayList.do</Col><Col id=\"inData\">dsRetApproPay=dsRetApproPay</Col><Col id=\"outData\">dsRetApproPay=dsRetApproPay</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">empInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsHmEmp=gdsEmp</Col></Row><Row><Col id=\"serviceID\">batchRetApproPayProcess</Col><Col id=\"URL\">his::hrs/ret/batchRetApproPayProcess.do</Col><Col id=\"inData\">dsRetApproPay=dsRetApproPay:U</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmEmp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "62", "1230", "42", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "1.95%", "6", null, "27", "90.72%", null, this.Div00);
            obj.getSetter("taborder").set("15");
            obj.set_text("사원명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("empNoEdt", "absolute", "9.61%", "6", null, "26", "80.62%", null, this.Div00);
            obj.set_taborder("16");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("empNameEdt", "absolute", "19.87%", "6", null, "26", "70.36%", null, this.Div00);
            obj.set_taborder("17");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0%", "105", "1230", "599", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Grid("empGrid", "absolute", "1.22%", "6", null, "586", "74.51%", null, this.Div01);
            obj.set_binddataset("dsHmEmp");
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"87\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"성명\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:empNo\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:empNm\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("retApproPayGrid", "absolute", "26.06%", "6", null, "586", "0.81%", null, this.Div01);
            obj.set_taborder("3");
            obj.set_binddataset("dsRetApproPay");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"87\"/><Column size=\"100\"/><Column size=\"86\"/><Column size=\"67\"/><Column size=\"128\"/><Column size=\"149\"/><Column size=\"152\"/><Column size=\"94\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" text=\"납부월\"/><Cell col=\"2\" text=\"납부일\"/><Cell col=\"3\" text=\"등급\"/><Cell col=\"4\" text=\"본인부담금\"/><Cell col=\"5\" text=\"사용자부담금\"/><Cell col=\"6\" text=\"퇴직전임금\"/><Cell col=\"7\" text=\"납부여부\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:th\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:paymentMonth\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:paymentDate\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:grade\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:myselfBurdenAmount\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:userBurdenAmount\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:retirementBeforeSalary\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:payYN\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0%", "706", "1230", "50", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Button("empNoSearchBtn", "absolute", "368", "66", "32", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("empSearchBtn", "absolute", "1123", "66", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "1104", "715", "110", "32", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0%", "0", "1229", "58", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5.21%", "0", null, "48", "41.01%", null, this.Div02);
            obj.getSetter("taborder").set("0");
            obj.set_text("퇴직충당금 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.Div02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1230, 42, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1230, 599, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1230, 50, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1229, 58, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1239, 764, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HT_RetireeForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HT_RetireeForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HT_RetireeForm.xfdl", "scripts::commonHrsPopup.xjs");
        this.registerScript("HT_RetireeForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 사원의 퇴직충당금을 관리                                       *
        *                                                                   *
        * @Path		    사원의 퇴직충당금 관리   	                    *
        * @Description  사원의 퇴직충당금을 조회한다                    *
        * @Author		조현진   					                        *
        * 								                                    *
        * Created on 2016. 3. 12.                             		        *
        *								                                    *
        ********************************************************************/

        
        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/
        //include "scripts::commonScripts.xjs"; 
        //include "scripts::commonHrsPopup.xjs";

        /********************************************************************************
         검색 조건 변수
        ********************************************************************************/

        
        /********************************************************************************
          부서 조회 버튼 이벤트
        ********************************************************************************/
        this.empNoSearchBtn_onclick = function(obj,e)
        {
        	var arr = this.gfnEmpPopup();
        	
        	this.setEmpInfo = function(arrRtn)
            { 
        		empNo = arrRtn[0];
        		this.Div00.empNoEdt.set_value(arrRtn[0]);
        		this.Div00.empNameEdt.set_value(arrRtn[1]);
        	}	
        	
        }

        
        /********************************************************************************
          사원 조회 버튼 이벤트
        ********************************************************************************/
        this.empSearchBtn_onclick = function(obj,e)
        {
        	var empNm = this.Div00.empNameEdt.value;
        	var empNo = this.Div00.empNoEdt.value;
        	
        	if(empNo == null){
        	 if(confirm("전체조회를 하시겠습니까?")){
        	 }
        	 else{
        	 alert('사원번호를 입력하세요');return;}}
        	var argument = "empNo="+empNo;
        	this.dsService.setColumn(1, "argument", argument);
        	this.gfnService("empInfo");
        	this.gfnService("retApproPayInfo",true);
        	this.dsRetApproPay.filter("empNo=='"+empNo+"'");
        }

        
        /********************************************************************************
          사원목록 셀클릭 이벤트
        ********************************************************************************/
        this.empGrid_oncellclick = function(obj,e)
        {
        	empNo = this.dsHmEmp.getColumn(e.row,"empNo");
        	empNm = this.dsHmEmp.getColumn(e.row,"empNm");
        	this.dsRetApproPay.filter("empNo=='"+empNo+"'");
        	
        	//cell 클릭한 행의 값이 0 일때 addRow
        	var count = this.dsRetApproPay.rowcount;
        	
        	if(count == 0)
        	{
        		this.dsRetApproPay.addRow();
        		this.dsRetApproPay.setColumn(this.dsRetApproPay.rowposition,"empNo",empNo);
        		this.dsRetApproPay.setColumn(this.dsRetApproPay.rowposition,"empNm",empNm);
        		
        		//회차 ex) 2016.substring(4,2) = 16
        		var th = this.gfnGetTime().substring(4,2);
        		this.dsRetApproPay.setColumn(this.dsRetApproPay.rowposition,"th",th);
        	}
        }

        

        /********************************************************************************
          일괄처리 버튼 이벤트
        ********************************************************************************/
        this.saveBtn_onclick = function(obj,e)
        {
        		if(confirm("저장하시겠습니까?"))
        	{
        		this.gfnService("batchRetApproPayProcess");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHmEmp.addEventHandler("onrowposchanged", this.ds_emp_onrowposchanged, this);
            this.Div00.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.empGrid.addEventHandler("oncellclick", this.empGrid_oncellclick, this);
            this.empNoSearchBtn.addEventHandler("onclick", this.empNoSearchBtn_onclick, this);
            this.empSearchBtn.addEventHandler("onclick", this.empSearchBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);

        };

        this.loadIncludeScript("HT_RetireeForm.xfdl");

       
    };
}
)();

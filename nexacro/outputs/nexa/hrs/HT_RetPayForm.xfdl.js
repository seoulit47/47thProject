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
                this.set_name("HT_RetPayForm");
                this.set_classname("HT_RetPayForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1244,644);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findRetPayList</Col><Col id=\"URL\">his::hrs/ret/findRetPayList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsRetPay=dsRetPay</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRetPay", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"retIncomeAmt\" type=\"STRING\" size=\"256\"/><Column id=\"retIncomeDeduction\" type=\"STRING\" size=\"256\"/><Column id=\"retIncomeAsseStandard\" type=\"STRING\" size=\"256\"/><Column id=\"retIncomeDecidedTaxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"residenceTax\" type=\"STRING\" size=\"256\"/><Column id=\"actualRetPay\" type=\"STRING\" size=\"256\"/><Column id=\"retIncomeAppropriation\" type=\"STRING\" size=\"256\"/><Column id=\"workingdays\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"retIncomeCalcTaxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"salAmount\" type=\"STRING\" size=\"256\"/><Column id=\"salDays\" type=\"STRING\" size=\"256\"/><Column id=\"recentWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"recentSalAmount\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"taxRate\" type=\"STRING\" size=\"256\"/><Column id=\"progressiveTaxDeduction\" type=\"STRING\" size=\"256\"/><Column id=\"singleRateDeduction\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "62", "1230", "42", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "1.95%", "6", "90", "27", null, null, this.Div00);
            obj.getSetter("taborder").set("10");
            obj.set_text("사원명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("empNoEdt", "absolute", "9.61%", "6", "120", "26", null, null, this.Div00);
            obj.set_taborder("11");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("empNameEdt", "absolute", "19.87%", "6", "120", "26", null, null, this.Div00);
            obj.set_taborder("12");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0%", "105", "1230", "471", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Grid("retEmpGrid", "absolute", "2.04%", "7", null, "453", "0.73%", null, this.Div01);
            obj.set_taborder("0");
            obj.set_binddataset("dsRetPay");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"98\"/><Column size=\"98\"/><Column size=\"142\"/><Column size=\"112\"/><Column size=\"160\"/><Column size=\"139\"/><Column size=\"109\"/><Column size=\"126\"/><Column size=\"92\"/><Column size=\"129\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"사원명\"/><Cell col=\"2\" text=\"퇴직소득금액\"/><Cell col=\"3\" text=\"퇴직소득공제\"/><Cell col=\"4\" text=\"퇴직소득과세표준\"/><Cell col=\"5\" text=\"퇴직소득결정세액\"/><Cell col=\"6\" text=\"주민세\"/><Cell col=\"7\" text=\"실지급 퇴직금\"/><Cell col=\"8\" text=\"퇴직충당금\"/><Cell col=\"9\" text=\"근속일수\"/></Band><Band id=\"body\"><Cell text=\"bind:empNo\"/><Cell col=\"1\" text=\"bind:empNm\"/><Cell col=\"2\" text=\"bind:retIncomeAmt\"/><Cell col=\"3\" text=\"bind:retIncomeDeduction\"/><Cell col=\"4\" text=\"bind:retIncomeAsseStandard\"/><Cell col=\"5\" text=\"bind:retIncomeDecidedTaxAmt\"/><Cell col=\"6\" text=\"bind:residenceTax\"/><Cell col=\"7\" text=\"bind:actualRetPay\"/><Cell col=\"8\" text=\"bind:retIncomeAppropriation\"/><Cell col=\"9\" text=\"bind:workingdays\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0%", "582", "1230", "50", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Button("empSearchBtn", "absolute", "368", "66", "32", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0%", "0", "1229", "58", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5.21%", "0", null, "48", "41.01%", null, this.Div02);
            obj.getSetter("taborder").set("0");
            obj.set_text("퇴직금 지급내역 확인");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("DelBtn07", "absolute", "1120", "66", "90", "32", null, null, this);
            obj.set_taborder("7");
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
            obj = new Layout("default", "", 1230, 471, this.Div01,
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
            obj = new Layout("default", "", 1229, 58, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1244, 644, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HT_RetPayForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HT_RetPayForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HT_RetPayForm.xfdl", "scripts::commonHrsPopup.xjs");
        this.registerScript("HT_RetPayForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 퇴직금 지급내역확인                                            *
        *                                                                   *
        * @Path		    퇴직금 지급내역 확인     	                        *
        * @Description  사원의 퇴직금지급내역과, 지급여부를 조회한다  *
        * @Author		조현진 					                        *
        * 								                                    *
        * Created on 2016. 2. 20.                             		        *
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
        var empNo;

        
        /********************************************************************************
          사원 조회 버튼 이벤트
        ********************************************************************************/
        this.empSearchBtn_onclick = function(obj,e)
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
          퇴직금지금내역 조회 버튼 이벤트
        ********************************************************************************/
        this.searchBtn_onclick = function(obj,e)
        {
        	var argument = "empNo="+empNo;
        	
        	this.dsService.setColumn(0, "argument", argument);
        	
        	this.gfnService("findRetPayList");

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.empSearchBtn.addEventHandler("onclick", this.empSearchBtn_onclick, this);
            this.DelBtn07.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("HT_RetPayForm.xfdl");

       
    };
}
)();

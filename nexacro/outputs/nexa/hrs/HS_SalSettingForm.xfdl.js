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
                this.set_name("HS_SalSettingForm");
                this.set_classname("HS_SalSettingForm");
                this.set_titletext("HS_SalSettingForm");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findSalStandardList</Col><Col id=\"URL\">his::hrs/salBase/findSalStandardList.do</Col><Col id=\"outData\">dsSalStandard=dsSalStandard</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchSalStanSetProcess</Col><Col id=\"URL\">his::hrs/salBase/batchSalStanSetProcess.do</Col><Col id=\"inData\">dsSalStandard=dsSalStandard:u</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSalStandard", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"jobfm\" type=\"STRING\" size=\"256\"/><Column id=\"belongMonthSect\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"ibsajaSalStanDay\" type=\"STRING\" size=\"256\"/><Column id=\"pepr\" type=\"STRING\" size=\"256\"/><Column id=\"pesc\" type=\"STRING\" size=\"256\"/><Column id=\"pepRate\" type=\"STRING\" size=\"256\"/><Column id=\"reEmpSalCal\" type=\"STRING\" size=\"256\"/><Column id=\"bonusTaxCalStan\" type=\"STRING\" size=\"256\"/><Column id=\"frnTaxFreeRate\" type=\"STRING\" size=\"256\"/><Column id=\"pcscs\" type=\"STRING\" size=\"256\"/><Column id=\"stanDay\" type=\"STRING\" size=\"256\"/><Column id=\"stanHour\" type=\"STRING\" size=\"256\"/><Column id=\"hourOfOneDay\" type=\"STRING\" size=\"256\"/><Column id=\"countDayOfMonth\" type=\"STRING\" size=\"256\"/><Column id=\"jobfmCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBelongMonthSect", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">당월</Col></Row><Row><Col id=\"value\">전월</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "8", "1200", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "4", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("급여/근태 기준일 설정");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "2.24%", "72", "1201", "682", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("0 none lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Grid("salstanGrid", "absolute", "3.84%", "92", null, "383", "62.96%", null, this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSalStandard");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"출결마감기준\"/><Cell row=\"1\" text=\"직종\"/><Cell row=\"1\" col=\"1\" text=\"귀속월구분\"/><Cell row=\"1\" col=\"2\" text=\"시작일\"/></Band><Band id=\"body\"><Cell text=\"bind:jobfm\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:belongMonthSect\" combodataset=\"dsBelongMonthSect\" combocodecol=\"value\" combodatacol=\"value\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:startDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "379", "480", "32", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("addBtn");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("addBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "419", "480", "32", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("delBtn");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("delBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "4.32%", "540", null, "28", "73.84%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("-  본란에서 지정된 기간에 대한 근태실적으로 ");
            obj.style.set_font("10 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "4.32%", "564", null, "28", "73.92%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("   급여가 계산됩니다.");
            obj.style.set_font("10 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("salStanDetailGrid", "absolute", "37.76%", "92", null, "484", "2.64%", null, this);
            obj.set_taborder("9");
            obj.set_binddataset("dsSalStandard");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\"/><Cell col=\"1\" colspan=\"3\" text=\"인사급여환경설정\"/><Cell row=\"1\" col=\"1\" text=\"환경요소\"/><Cell row=\"1\" col=\"2\" text=\"기준\"/><Cell row=\"1\" col=\"3\" text=\"기준일(월)\"/></Band><Band id=\"body\"><Cell rowspan=\"8\" text=\"급여계산기준\"/><Cell col=\"1\" text=\"입사자 급여계산\"/><Cell col=\"2\" text=\"월일\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"mask\" style=\"align:right;\" text=\"bind:ibsajaSalStanDay\" mask=\"##일\"/><Cell row=\"1\" col=\"1\" text=\"수급자 지급기간\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" edittype=\"mask\" style=\"align:right;\" text=\"bind:pepr\" mask=\"#개월\"/><Cell row=\"2\" col=\"1\" text=\"수급자 급여계산\"/><Cell row=\"2\" col=\"2\" text=\"일\"/><Cell row=\"2\" col=\"3\" edittype=\"normal\" style=\"align:right;\" text=\"bind:pesc\"/><Cell row=\"3\" col=\"1\" text=\"수습직 지급율\"/><Cell row=\"3\" col=\"2\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" edittype=\"mask\" style=\"align:right;\" text=\"bind:pepRate\" mask=\"###%\"/><Cell row=\"4\" col=\"1\" text=\"퇴사자 급여계산\"/><Cell row=\"4\" col=\"2\" text=\"일\"/><Cell row=\"4\" col=\"3\" edittype=\"normal\" style=\"align:right;\" text=\"bind:reEmpSalCal\"/><Cell row=\"5\" col=\"1\" text=\"상여세액 계산기준\"/><Cell row=\"5\" col=\"2\" text=\"당해년일\"/><Cell row=\"5\" col=\"3\" edittype=\"normal\" style=\"align:right;\" text=\"bind:bonusTaxCalStan\"/><Cell row=\"6\" col=\"1\" text=\"외국인 비과세율\"/><Cell row=\"6\" col=\"2\"/><Cell row=\"6\" col=\"3\" edittype=\"normal\" style=\"align:right;\" text=\"bind:frnTaxFreeRate\"/><Cell row=\"7\" col=\"1\" text=\"근속기간 계산기준\"/><Cell row=\"7\" col=\"2\" text=\"입사일\"/><Cell row=\"7\" col=\"3\" edittype=\"normal\" style=\"align:right;\" text=\"bind:pcscs\"/><Cell row=\"8\" rowspan=\"4\" text=\"근태기준설정\"/><Cell row=\"8\" col=\"1\" text=\"한달 정상일\"/><Cell row=\"8\" col=\"2\"/><Cell row=\"8\" col=\"3\" displaytype=\"number\" edittype=\"mask\" style=\"align:right;\" text=\"bind:stanDay\" mask=\"##일\"/><Cell row=\"9\" col=\"1\" text=\"한달 정상시간\"/><Cell row=\"9\" col=\"2\"/><Cell row=\"9\" col=\"3\" displaytype=\"number\" edittype=\"mask\" style=\"align:right;\" text=\"bind:stanHour\" mask=\"###시간\"/><Cell row=\"10\" col=\"1\" text=\"하루시간\"/><Cell row=\"10\" col=\"2\"/><Cell row=\"10\" col=\"3\" displaytype=\"number\" edittype=\"mask\" style=\"align:right;\" text=\"bind:hourOfOneDay\" mask=\"##시간\"/><Cell row=\"11\" col=\"1\" text=\"월일수 산정\"/><Cell row=\"11\" col=\"2\" text=\"당월일\"/><Cell row=\"11\" col=\"3\" edittype=\"normal\" style=\"align:right;\" text=\"bind:countDayOfMonth\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "1116", "584", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("batchBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("batchBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1201, 682, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#edececff");
            		p.style.set_border("0 none lightsteelblue");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HS_SalSettingForm");
            		p.set_titletext("HS_SalSettingForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HS_SalSettingForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HS_SalSettingForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사 급여/근태 기준일 설정 관리                  				*
        *                                                                   *
        * @Path		    급여/근태 기준일 설정      						*
        * @Description  급여/근태 기준 일수와 시간을 설정할 수 있다.	*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 5.  31.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";

        this.HS_SalSettingForm_onload = function(obj,e){
        	this.gfnService("findSalStandardList", false);
        	
        	if(this.dsSalStandard.getRowCount() != 0){
        		this.addBtn.set_enable(false);
        	}
        }

        //출결마감기준추가
        this.addBtn_onclick = function(obj,e){
        	if(this.dsSalStandard.getRowCount() == 0){
        		this.dsSalStandard.addRow();
        		this.dsSalStandard.setColumn(this.salstanGrid.currentrow,"jobfm","전체");
        		this.dsSalStandard.setColumn(this.salstanGrid.currentrow,"jobfmCd","all");
        	}
        }

        //출결마감기준삭제
        this.delBtn_onclick = function(obj,e){
        	if(confirm("출결마감기준을 삭제하시겠습니까?")){
        		this.dsSalStandard.deleteRow(this.salstanGrid.currentrow);
        		this.addBtn.set_enable(true);
        	}
        }

        //환경설정저장
        this.batchBtn_onclick = function(obj,e){
        	if(confirm("일괄처리 하시겠습니까?")){
        		this.gfnService("batchSalStanSetProcess");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HS_SalSettingForm_onload, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static00_onclick, this);

        };

        this.loadIncludeScript("HS_SalSettingForm.xfdl");

       
    };
}
)();

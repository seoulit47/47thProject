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
                this.set_name("AC_ClosJourHelpForm");
                this.set_classname("AC_ClosJourHelpForm");
                this.set_titletext("결산분개");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,700,420);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCreDebDivCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dlSlip", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"slipNo\" type=\"STRING\" size=\"256\"/><Column id=\"gipyoDate\" type=\"STRING\" size=\"256\"/><Column id=\"slipDiv\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"operNo\" type=\"STRING\" size=\"256\"/><Column id=\"abs\" type=\"STRING\" size=\"256\"/><Column id=\"demdDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"resolDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"regWorker\" type=\"STRING\" size=\"256\"/><Column id=\"danDiv\" type=\"STRING\" size=\"256\"/><Column id=\"prfYb\" type=\"STRING\" size=\"256\"/><Column id=\"receiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"sakNo\" type=\"STRING\" size=\"256\"/><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/><Column id=\"msg\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">registerClosJour</Col><Col id=\"URL\">his::acc/closing/registerClosJour.do</Col><Col id=\"inData\">dsResolLet=dlResolLet dsSlip=dlSlip dsJour=dlJour</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/><Col id=\"msg\">this.MSG_ACC_CLOS_JOUR</Col><Col id=\"callbackFunc2\"/></Row><Row><Col id=\"serviceID\">findClosAcntList</Col><Col id=\"URL\">his::acc/closing/findClosAcntList.do</Col><Col id=\"outData\">dlJour=dsClosAcnt</Col><Col id=\"msg\"/><Col id=\"callbackFunc2\"/><Col id=\"callbackFunc\">this.setJourAmt</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dlJour", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"creDebDiv\" type=\"STRING\" size=\"256\"/><Column id=\"debAmt\" type=\"STRING\" size=\"256\"/><Column id=\"creAmt\" type=\"STRING\" size=\"256\"/><Column id=\"taxDiv\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"slipNo\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntAbs\" type=\"STRING\" size=\"256\"/><Column id=\"artiCd\" type=\"STRING\" size=\"256\"/><Column id=\"closYb\" type=\"STRING\" size=\"256\"/><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dlResolLet", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/><Column id=\"resolDiv\" type=\"STRING\" size=\"256\"/><Column id=\"resolDate\" type=\"STRING\" size=\"256\"/><Column id=\"resoler\" type=\"STRING\" size=\"256\"/><Column id=\"resolDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"progStatDiv\" type=\"STRING\" size=\"256\"/><Column id=\"sakNo\" type=\"STRING\" size=\"256\"/><Column id=\"receiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"operNo\" type=\"STRING\" size=\"256\"/><Column id=\"resolAmt\" type=\"STRING\" size=\"256\"/><Column id=\"brCau\" type=\"STRING\" size=\"256\"/><Column id=\"abs\" type=\"STRING\" size=\"256\"/><Column id=\"demdDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"autoJourYb\" type=\"STRING\" size=\"256\"/><Column id=\"modWorker\" type=\"STRING\" size=\"256\"/><Column id=\"modDate\" type=\"STRING\" size=\"256\"/><Column id=\"danDiv\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"surtaxYb\" type=\"STRING\" size=\"256\"/><Column id=\"resolDeptExtsn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA049</Col><Col id=\"dsName\">dsCreDebDivCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("closJourGrid", "absolute", "2.14%", "62", null, "300", "1.71%", null, this);
            obj.set_taborder("1");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj.set_binddataset("dlJour");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"206\"/><Column size=\"67\"/><Column size=\"144\"/><Column size=\"142\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정코드\"/><Cell col=\"1\" text=\"계정명\"/><Cell col=\"2\" text=\"대차\"/><Cell col=\"3\" text=\"차변\"/><Cell col=\"4\" text=\"대변\"/><Cell col=\"5\" text=\"적요\"/></Band><Band id=\"body\"><Cell text=\"bind:acntCd\"/><Cell col=\"1\" text=\"bind:acntNm\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:creDebDiv\" combodataset=\"dsCreDebDivCd\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 8 0 0;\" text=\"bind:debAmt\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 8 0 0;\" text=\"bind:creAmt\"/><Cell col=\"5\" text=\"bind:acntAbs\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "2.29%", "367", null, "44", "1.71%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Button("slipPubBtn", "absolute", "64.93%", "4", null, "35", "17.16%", null, this.Div02);
            obj.set_taborder("0");
            obj.set_text("전표발행");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "-1.43%", "0", "698", "60", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "7.31%", "-3", null, "60", "69.63%", null, this.Div05);
            obj.getSetter("taborder").set("0");
            obj.set_text("결산분개");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div05.addChild(obj.name, obj);

            obj = new Button("cancelBtn", "absolute", "590", "373", "90", "32", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 44, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 698, 60, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("transparent URL('img::titleBar6.jpg')");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 700, 420, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AC_ClosJourHelpForm");
            		p.set_titletext("결산분개");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AC_ClosJourHelpForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AC_ClosJourHelpForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";  

        /********************************************************************************
          화면변수
        ********************************************************************************/
        var dsClosJourData;
        var accPrid;
        var endDate;

        
        /********************************************************************************
          코드바인드 / 파라미터 셋팅 및 결산계정 조회 
        ********************************************************************************/
        this.AC_ClosJourHelpForm_onload = function(obj,e)
        {
        	accPrid = this.opener.accPridEd.value;
        	dsClosJourData = this.opener.dsClosJourData;
        	endDate = this.opener.endDateEd.value;

        	var artiCdArr=new Array();
        	//var l = this.dsClosJourData.rowcount;
        	
        	this.dlResolLet.clearData();
        	this.dlSlip.clearData();
        	
        	for(var i = 0 ; i < dsClosJourData.rowcount ; i++)
        	{
        		artiCdArr[i] = dsClosJourData.getColumn(i,"artiCd");
        		//alert("artiCdArr"+i+artiCdArr[i]);
        		this.resolAndSlip(i);
        	}

        	var argument = 'accPrid='+accPrid+' artiCd='+artiCdArr;
        	var rowPos = this.dsService.findRow("serviceID", "findClosAcntList");
        	this.dsService.setColumn(rowPos,"argument",argument);
        	this.gfnService("findClosAcntList");
        	
        	
        }

        this.resolAndSlip=function(i)
        {
        	this.dlResolLet.addRow();
        	this.dlResolLet.setColumn(i, "resolDate", this.gfnDate('YYYY-MM-DD'));
        	this.dlResolLet.setColumn(i, "closYb", 'Y');
        	this.dlResolLet.setColumn(i, "accPrid", this.accPrid);			//resolNo 셋팅해야함.
        	
        	this.dlSlip.addRow();			
        		
        	this.dlSlip.setColumn(i, "gipyoDate", this.endDate);
        // 	var dateArr=this.endDate.split("-");
        // 	//this.endDate=dateArr[0]+dateArr[1]+dateArr[2]; 
        // 	
        // 	var closDate=dateArr[0]+dateArr[1]+dateArr[2]; 
        // 	alert(this.gfn_date("yymm"));
        // 	
        // 	this.dlSlip.setColumn(i, "gipyoDate", closDate);
        	this.dlSlip.setColumn(i, "abs", '결산분개');
        	this.dlSlip.setColumn(i, "regWorker", application.gdsEmp.getColumn(0, "empNo"));
        	this.dlSlip.setColumn(i, "closYb", 'Y');
        	this.dlSlip.setColumn(i, "accPrid", this.accPrid);			//resolNo, slipNo 셋팅해야함.
        	this.dlSlip.setColumn(i, "slipNo", this.gfnDate('YYMM'));	
        	this.dlSlip.setColumn(i, "danDiv", "서울병원");
        	
        }

        /********************************************************************************
          결산계정에 분개금액 셋팅
        ********************************************************************************/
        this.setJourAmt=function()
        {
        	//alert("setJourAmt");
        	var l = this.dlJour.rowcount;
        	for(var i = 0 ; i < l ; i++)
        	{
        		var artiCd = this.dlJour.getColumn(i, "artiCd");
        		var creDebDiv = this.dlJour.getColumn(i, "creDebDiv");
        		var jourAmt = this.dlClosJourData.lookup("artiCd", artiCd, "jourAmt");
        		//차변대변 구분
        		var creDebCol = "debAmt"; 
        		if (creDebDiv == '2') 
        		{
        			creDebCol = "creAmt"; 
        		}
        		this.dlJour.setColumn(i, creDebCol, jourAmt);
        		this.dlJour.setColumn(i, "closYb", "Y");
        		
        	}

        }

        
        /***************************************************************************************************
        *                                          버튼 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  전표 발행버튼 클릭
        +-------------------------------------------------------------------------------------------------*/

        this.Div02_slipPubBtn_onclick = function(obj,e){
        	this.gfnService("registerClosJour");
        	this.close();
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  닫기 버튼 클릭
        +-------------------------------------------------------------------------------------------------*/

        this.cancelBtn_onclick = function(obj,e){
        	this.close();
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AC_ClosJourHelpForm_onload, this);
            this.Div02.slipPubBtn.addEventHandler("onclick", this.Div02_slipPubBtn_onclick, this);
            this.cancelBtn.addEventHandler("onclick", this.cancelBtn_onclick, this);

        };

        this.loadIncludeScript("AC_ClosJourHelpForm.xfdl");

       
    };
}
)();

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
                this.set_name("AC_ClosedDataForm");
                this.set_classname("AC_ClosedDataForm");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsClosJourData", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"artiCd\" type=\"STRING\" size=\"256\"/><Column id=\"jourAmt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findClosDataLis</Col><Col id=\"URL\">his::acc/closing/findClosDataList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsClosData=dsClosData</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">closDataFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsClosData", this);
            obj._setContents("<ColumnInfo><Column id=\"artiCd\" type=\"STRING\" size=\"256\"/><Column id=\"artiNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"sumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"jourAmt\" type=\"STRING\" size=\"256\"/><Column id=\"cellInputDiv\" type=\"STRING\" size=\"256\"/><Column id=\"autoCalYn\" type=\"STRING\" size=\"256\"/><Column id=\"sumArtiCd\" type=\"STRING\" size=\"256\"/><Column id=\"deductYn\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div05", "absolute", "0%", "0", "1238", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "78.88%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("결산자료 조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("ACclosDataDiv", "absolute", "2.32%", "63", null, "37", "1.12%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "38.72%", "10", null, "19", "60.21%", null, this.ACclosDataDiv);
            obj.getSetter("taborder").set("2");
            obj.set_text("~");
            this.ACclosDataDiv.addChild(obj.name, obj);

            obj = new Grid("closDataGrid", "absolute", "2.16%", "113", null, "638", "1.12%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsClosData");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"159\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"과목\"/><Cell col=\"2\" text=\"금액\"/><Cell col=\"3\" text=\"합계\"/><Cell col=\"4\" text=\"분개대상금액\"/></Band><Band id=\"body\"><Cell text=\"bind:artiCd\"/><Cell col=\"1\" style=\"align:left;padding:0 0 0 50;\" text=\"bind:artiNm\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 20 0 0;\" text=\"bind:amt\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 20 0 0;\" text=\"bind:sumAmt\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"expr:cellInputDiv==&quot;I&quot;?&quot;normal&quot;:&quot;none&quot;\" editfilter=\"number\" style=\"align:right;padding:0 20 0 0;background:EXPR(cellInputDiv!=null?&quot;#696969c5&quot;:null);background2:EXPR(cellInputDiv!=null?&quot;#696969c5&quot;:null);\" text=\"bind:jourAmt\" editlimitbymask=\"decimal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("accPridStc", "absolute", "3.52%", "69", null, "27", "90.16%", null, this);
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("taborder").set("4");
            obj.set_text("회계기수");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("accPridEd", "absolute", "12.16%", "68", null, "30", "81.6%", null, this);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "middle");
            this.addChild(obj.name, obj);

            obj = new Static("accPridStc01", "absolute", "19.2%", "69", "29", "27", null, null, this);
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("taborder").set("7");
            obj.set_text("기");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("startDateEd", "absolute", "29.2%", "67", null, "30", "60.56%", null, this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("endDateEd", "absolute", "41.36%", "67", null, "30", "48.4%", null, this);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("accPridPopupBtn", "absolute", "282", "67", "32", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "659", "65", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("resetBtn", "absolute", "1122", "65", "102", "32", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::resetBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closJourBtn", "absolute", "78.4%", "64", null, "29", "12%", null, this);
            obj.set_taborder("13");
            obj.set_text("결산분개");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 37, this.ACclosDataDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.ACclosDataDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AC_ClosedDataForm");
            		p.set_titletext("New Form");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AC_ClosDataForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AC_ClosDataForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";  

        /********************************************************************************
          화면변수
        ********************************************************************************/
        this.accPrid=""; //  검색할 회계기수 
        this.endDate=""; // 마지막 날 회계기수 말일 

        /*-------------------------------------------------------------------------------------------------+
        >>  회계기수 도움 검색버튼 클릭
        +-------------------------------------------------------------------------------------------------*/
        this.accPridPopupBtn_onclick = function(obj,e){
        	this.gfnPopup("findAccPrid","acc::AE_AccPridHelpForm.xfdl","","");
        }

        
        /********************************************************************************
         선택한 회계기수 셋팅
        ********************************************************************************/
        this.setArrRtn=function(arrRtn)		
        {
        	var i = 0;
        	
        	this.accPridEd.set_value(arrRtn[i++]);
        	//alert(arrRtn[i]);
        	this.startDateEd.set_value(arrRtn[i++]);
        	//alert(arrRtn[i]);
        	this.endDateEd.set_value(arrRtn[i++]);
        	//alert(arrRtn[i]);
        	this.endDate = this.endDateEd.value ;
        }

        
        /********************************************************************************
         조회
        ********************************************************************************/
        this.searchBtn_onclick=function(obj,e)
        {
        	this.accPrid = this.accPridEd.value; //회계기수 세팅 
        	var argument = 'accPrid='+this.accPrid; 
        	var rowPos = this.dsService.findRow("serviceID", "findClosDataLis");
        	this.dsService.setColumn(rowPos,"argument",argument);
        	this.gfnService("findClosDataLis");
        }

        
        /********************************************************************************
          결산분개
        ********************************************************************************/
        this.closJourBtn_onclick = function(obj,e)
        {
        	this.dsClosJourData.clearData();
        	var jourAmtArr = new Array();
        	var i = 0;
        	
        	var artiCdArr = new Array("2210", "2220", "2230");
        	
        	for (var j = 0 ; j < 3 ; j++)
        	{
        		var jourAmt = this.dsClosData.lookup("artiCd", artiCdArr[j],"sumAmt");
        		if(jourAmt!=null)
        		{
        			this.dsClosJourData.addRow();
        			this.dsClosJourData.setColumn(j, "artiCd", artiCdArr[j]);
        			this.dsClosJourData.setColumn(j, "jourAmt", jourAmt);
        		}
        	}
        	
        	var retVal = this.gfnPopup("closingJourHelp","acc::AC_ClosJourHelpForm.xfdl","","");
        	//alert(this.MSG_ACC_CLOS_JOUR);
        }

        
        /********************************************************************************
          초기화
        ********************************************************************************/	
        this.resetBtn_onclick=function(obj,e)
        {
        	this.searchBtn_onclick(null,null);
        }

        

        /********************************************************************************
          결산자료입력시
        ********************************************************************************/
        this.dsClosData_oncolumnchanged = function(obj,e)
        {
        	var cellInputDiv = obj.getColumn(e.row, "cellInputDiv");
        	
        	if(e.columnid == "jourAmt" && cellInputDiv!=null)
        	{
        		this.closDataGrid.setCellPos(1);
        		if(!isNaN(e.newvalue)){
        			
        			this.dsClosData.setColumn(e.row, "amt", e.newvalue);
        			var startStockQ = this.dsClosData.getColumn(e.row-2, "amt");
        			var endStockQ = this.dsClosData.getColumn(e.row-1, "amt");
        			var amt = parseInt(isNaN(startStockQ) == true? 0: startStockQ)
        						+parseInt(isNaN(endStockQ) == true? 0: endStockQ)-e.newvalue;
        			this.dsClosData.setColumn(e.row-3, "jourAmt", amt);
        			this.dsClosData.setColumn(e.row-3, "sumAmt", amt);
        			this.autoCal('2200');
        		}		
        	}
        }
        /********************************************************************************
          그리드 내 자동계산
        ********************************************************************************/

        this.autoCal=function(sumArtiCd){
        	var sumAmt= this.dsClosData.getSum("sumArtiCd =='"+sumArtiCd+
        							"'? (deductYn =='Y' ? sumAmt*-1 : sumAmt) : 0");
        	var row = this.dsClosData.findRow("artiCd", sumArtiCd);
        	this.dsClosData.setColumn(row, "sumAmt", sumAmt);
        	var sumArtiCd = this.dsClosData.getColumn(row, "sumArtiCd", sumArtiCd);
        	if(sumArtiCd!=null)
        	{
        		this.autoCal(sumArtiCd);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsClosData.addEventHandler("oncolumnchanged", this.dsClosData_oncolumnchanged, this);
            this.addEventHandler("onload", this.AC_ClosedDataForm_onload, this);
            this.accPridStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.accPridStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.accPridPopupBtn.addEventHandler("onclick", this.accPridPopupBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.resetBtn.addEventHandler("onclick", this.resetBtn_onclick, this);
            this.closJourBtn.addEventHandler("onclick", this.closJourBtn_onclick, this);

        };

        this.loadIncludeScript("AC_ClosDataForm.xfdl");

       
    };
}
)();

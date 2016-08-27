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
                this.set_name("AC_TotalBalForm");
                this.set_classname("AC_TotalBalForm");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findTotalBalStat</Col><Col id=\"URL\">his::acc/closing/findTotalBalStat.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsTotalBal=dsTotalBal</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">totalBalFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTotalBal", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"debBal\" type=\"STRING\" size=\"256\"/><Column id=\"debSum\" type=\"STRING\" size=\"256\"/><Column id=\"creSum\" type=\"STRING\" size=\"256\"/><Column id=\"creBal\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"totalDebBal\" type=\"STRING\" size=\"256\"/><Column id=\"totalDebSum\" type=\"STRING\" size=\"256\"/><Column id=\"totalCreBal\" type=\"STRING\" size=\"256\"/><Column id=\"totalCreSum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTotalBalSum", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div05", "absolute", "0%", "0", "1242", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.75%", "-4", null, "60", "73.03%", null, this.Div05);
            obj.getSetter("taborder").set("0");
            obj.set_text("합계잔액 시산표");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div05.addChild(obj.name, obj);

            obj = new Div("ActotalBalDiv", "absolute", "1.6%", "62", null, "37", "0.96%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "2.24%", "67", null, "27", "91.44%", null, this);
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("taborder").set("3");
            obj.set_text("회계기수");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("accPridEd", "absolute", "9.92%", "65", null, "30", "79.68%", null, this);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("ACtotalBalDiv", "absolute", "1.6%", "104", null, "655", "0.96%", null, this);
            obj.set_taborder("5");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Grid("totalBalGrid", "absolute", "0.66%", "6", null, "640", "0.66%", null, this.ACtotalBalDiv);
            obj.set_taborder("0");
            obj.set_binddataset("dsTotalBal");
            obj.set_cellsizingtype("row");
            obj.set_autofittype("col");
            obj.set_createcellasync("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"137\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"차변\"/><Cell col=\"2\" rowspan=\"2\" text=\"계정과목\"/><Cell col=\"3\" colspan=\"2\" text=\"대변\"/><Cell row=\"1\" text=\"잔액\"/><Cell row=\"1\" col=\"1\" text=\"합계\"/><Cell row=\"1\" col=\"3\" text=\"합계\"/><Cell row=\"1\" col=\"4\" text=\"잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" style=\"align:right;padding:0 20 0 0;background:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:(level==&quot;2&quot;?&quot;gainsboro&quot;:null));background2:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:(level==&quot;2&quot;?&quot;gainsboro&quot;:null));color:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);color2:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);\" text=\"bind:debBal\" calendardisplaynulltext=\"0\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;padding:0 20 0 0;background:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:(level==&quot;2&quot;?&quot;gainsboro&quot;:null));background2:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:(level==&quot;2&quot;?&quot;gainsboro&quot;:null));color:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);color2:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);\" text=\"bind:debSum\"/><Cell col=\"2\" style=\"background:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:(level==&quot;2&quot;?&quot;gainsboro&quot;:null));background2:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:(level==&quot;2&quot;?&quot;gainsboro&quot;:null));color:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);color2:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);\" text=\"bind:acntNm\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 20 0 0;background:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:(level==&quot;2&quot;?&quot;gainsboro&quot;:null));background2:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:(level==&quot;2&quot;?&quot;gainsboro&quot;:null));color:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);color2:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);\" text=\"bind:creSum\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 20 0 0;background:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:(level==&quot;2&quot;?&quot;gainsboro&quot;:null));background2:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:(level==&quot;2&quot;?&quot;gainsboro&quot;:null));color:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);color2:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);\" text=\"bind:creBal\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"총합계\"/><Cell col=\"3\"/><Cell col=\"4\" celltype=\"summary\"/></Band></Format></Formats>");
            this.ACtotalBalDiv.addChild(obj.name, obj);

            obj = new Edit("startDateEd", "absolute", "28.48%", "65", null, "30", "61.12%", null, this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "39.44%", "72", null, "19", "59.44%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Edit("endDateEd", "absolute", "40.64%", "65", null, "30", "48.96%", null, this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("accPridPopupBtn", "absolute", "263", "64", "32", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "648", "64", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("printTotalBalBtn", "absolute", "1140", "64", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::printBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1242, 60, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar6.jpg')");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 37, this.ActotalBalDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.ActotalBalDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1218, 655, this.ACtotalBalDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.style.set_background("#edececff");

            	}
            );
            this.ACtotalBalDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AC_TotalBalForm");
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
        this.addIncludeScript("AC_TotalBalForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AC_TotalBalForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";  		

        
        /*-------------------------------------------------------------------------------------------------+
        >>  회계기수 도움 검색버튼 클릭
        +-------------------------------------------------------------------------------------------------*/
        this.accPridPopupBtn_onclick = function(obj,e){
        	application.open("findAccPrid","acc::AE_AccPridHelpForm.xfdl",this.parent,{},"showtitlebar=true showstatusbar=false",0,0,500,350);
        }

        /********************************************************************************
         선택한 회계기수 셋팅
        ********************************************************************************/
        this.setArrRtn=function(arrRtn)		
        {
        	var i = 0;
        	this.accPridEd.set_value(arrRtn[i++]);
        	this.startDateEd.set_value(arrRtn[i++]);
        	this.endDateEd.set_value(arrRtn[i++]);
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  합계잔액시산표 조회버튼 클릭
        +-------------------------------------------------------------------------------------------------*/
        this.searchBtn_onclick = function(obj,e){
        	var accPrid = this.accPridEd.value;
        	var argument = 'accPrid='+accPrid;
        	var rowPos = this.dsService.findRow("serviceID", "findTotalBalStat");
        	this.dsService.setColumn(rowPos,"argument",argument);
        	this.gfnService("findTotalBalStat");
        	this.printTotalBalBtn.set_enable(true);
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  출력버튼 클릭
        +-------------------------------------------------------------------------------------------------*/
        this.printTotalBalBtn_onclick = function(obj,e)
        {
        	application.open("finanStatsPrint","acc::AC_TotalBalPrintForm.xfdl",this.parent,{},"showtitlebar=true showstatusbar=false",0,0,1250,750);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.ACtotalBalDiv.totalBalGrid.addEventHandler("oncelldblclick", this.ACtotalBalDiv_totalBalGrid_oncelldblclick, this);
            this.accPridPopupBtn.addEventHandler("onclick", this.accPridPopupBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.printTotalBalBtn.addEventHandler("onclick", this.printTotalBalBtn_onclick, this);

        };

        this.loadIncludeScript("AC_TotalBalForm.xfdl");

       
    };
}
)();

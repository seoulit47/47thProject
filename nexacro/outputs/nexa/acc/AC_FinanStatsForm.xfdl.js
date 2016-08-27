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
                this.set_name("AC_FinanStatsForm");
                this.set_classname("AC_FinanStatsForm");
                this.set_titletext("재무제표");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFinanStatsCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">A</Col><Col id=\"value\">재무상태표</Col></Row><Row><Col id=\"code\">B</Col><Col id=\"value\">손익계산서</Col></Row><Row><Col id=\"code\">C</Col><Col id=\"value\">현금흐름표</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findFinanStats</Col><Col id=\"URL\">his::acc/closing/findFinanStats.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsFinanStats=dsFinanStats</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">finanStatsFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFinanStats", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"artiCd\" type=\"STRING\" size=\"256\"/><Column id=\"artiNm\" type=\"STRING\" size=\"256\"/><Column id=\"dangiAmt\" type=\"STRING\" size=\"256\"/><Column id=\"dangiSum\" type=\"STRING\" size=\"256\"/><Column id=\"jungiAmt\" type=\"STRING\" size=\"256\"/><Column id=\"jungiSum\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"acntDiv\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA088</Col><Col id=\"dsName\">dsFinanStatsCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div05", "absolute", "0%", "0", "1235", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "78.88%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("재무제표");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("ACfinanStatsDiv", "absolute", "1.84%", "62", null, "37", "1.44%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Combo("finanStatsDivCombo", "absolute", "59.72%", "3", null, "28", "26.42%", null, this.ACfinanStatsDiv);
            this.ACfinanStatsDiv.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsFinanStatsCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Grid("finanStatsGrid", "absolute", "1.84%", "108", null, "644", "1.44%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsFinanStats");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"182\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구       분\"/><Cell col=\"1\" colspan=\"2\" text=\"당   기\"/><Cell col=\"3\" colspan=\"2\" text=\"전   기\"/><Cell row=\"1\" col=\"1\" text=\"금  액\"/><Cell row=\"1\" col=\"2\" text=\"합  계\"/><Cell row=\"1\" col=\"3\" text=\"금  액\"/><Cell row=\"1\" col=\"4\" text=\"합  계\"/></Band><Band id=\"body\"><Cell style=\"align:left;padding:0 0 0 30;background:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:null);background2:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:null);color:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);color2:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);\" text=\"bind:artiNm\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;padding:0 20 0 0;background:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:null);background2:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:null);color:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);color2:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);\" text=\"bind:dangiAmt\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 20 0 0;background:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:null);background2:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:null);color:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);color2:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);\" text=\"bind:dangiSum\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 20 0 0;background:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:null);background2:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:null);color:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);color2:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);\" text=\"bind:jungiAmt\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 20 0 0;background:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:null);background2:EXPR(level==&quot;1&quot;?&quot;#696969c5&quot;:null);color:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);color2:EXPR(level==&quot;1&quot;?&quot;white&quot;:null);\" text=\"bind:jungiSum\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("finanStatDivisionStc", "absolute", "50.32%", "67", null, "27", "40.96%", null, this);
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("taborder").set("4");
            obj.set_text("재무제표 구분");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("accPridStc", "absolute", "2.16%", "68", null, "27", "91.44%", null, this);
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("taborder").set("5");
            obj.set_text("회계기수");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("accPridEd", "absolute", "9.92%", "66", null, "30", "79.68%", null, this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("startDateEd", "absolute", "25.2%", "66", null, "30", "64.4%", null, this);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("endDateEd", "absolute", "38.16%", "66", null, "30", "51.44%", null, this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "36.48%", "72", null, "19", "62.4%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("accPridPopupBtn", "absolute", "262", "65", "32", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "927", "62", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("printFinanStatBtn", "absolute", "1032", "62", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::printBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 37, this.ACfinanStatsDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.ACfinanStatsDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AC_FinanStatsForm");
            		p.set_titletext("재무제표");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AC_FinanStatsForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AC_FinanStatsForm.xfdl", function() {
        //include "scripts::commonScripts.xjs"; 

        
        this.accPrid;
        this.finanStatsCd;

        /********************************************************************************
          코드 바인드
        ********************************************************************************/
        this.AC_FinanStatsForm_onload = function(obj,e)
        {
        	this.gfnBind();
        }

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

        
        /*-------------------------------------------------------------------------------------------------+
        >>  재무제표 조회버튼 클릭
        +-------------------------------------------------------------------------------------------------*/
        this.searchBtn_onclick = function(obj,e)
        {
        	var accPrid = this.accPridEd.value;
        	var finanStatsCd = this.ACfinanStatsDiv.finanStatsDivCombo.value;

        	if(accPrid==null){
        		alert("회계기수를 선택하세요");
        		return;  FinanStatBtn.set_enable(true);
        	}	
        }

        

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AC_FinanStatsForm_onload, this);
            this.finanStatsGrid.addEventHandler("oncelldblclick", this.finanStatsGrid_oncelldblclick, this);
            this.finanStatDivisionStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.accPridStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.accPridPopupBtn.addEventHandler("onclick", this.accPridPopupBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.printFinanStatBtn.addEventHandler("onclick", this.printFinanStatBtn_onclick, this);

        };

        this.loadIncludeScript("AC_FinanStatsForm.xfdl");

       
    };
}
)();

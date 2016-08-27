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
                this.set_name("HS_IncomeTaxSettingForm");
                this.set_classname("hs_incomeTaxSettingForm");
                this.set_titletext("HS_IncomeTaxSettingForm");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findTaxChartList</Col><Col id=\"URL\">his::hrs/salBase/findTaxChartList.do</Col><Col id=\"outData\">dsTaxChart=dsTaxChart</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findDeduChartList</Col><Col id=\"URL\">his::hrs/salBase/findDeduChartList.do</Col><Col id=\"outData\">dsDeductionChart=dsDeductionChart</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">setTaxDeduCopy</Col><Col id=\"URL\">his::hrs/salBase/setTaxDeduCopy.do</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchTaxChartProcess</Col><Col id=\"URL\">his::hrs/salBase/batchTaxChartProcess.do</Col><Col id=\"outData\"/><Col id=\"callbackFunc\">gfnCallbackFunc</Col><Col id=\"inData\">dsTaxChart=dsTaxChart:u</Col></Row><Row><Col id=\"inData\">dsDeductionChart=dsDeductionChart:u</Col><Col id=\"serviceID\">batchDeduChartProcess</Col><Col id=\"URL\">his::hrs/salBase/batchDeduChartProcess.do</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsIncomeTaxS", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GS006</Col><Col id=\"name\">퇴직소득공제율</Col><Col id=\"gubun\">퇴직소득</Col></Row><Row><Col id=\"code\">GS007</Col><Col id=\"name\">표준공제</Col><Col id=\"gubun\">소득공제</Col></Row><Row><Col id=\"code\">GS008</Col><Col id=\"name\">비과세항목</Col><Col id=\"gubun\">소득공제</Col></Row><Row><Col id=\"code\">GS009</Col><Col id=\"name\">인적공제</Col><Col id=\"gubun\">소득공제</Col></Row><Row><Col id=\"code\">GS010</Col><Col id=\"name\">특별공제</Col><Col id=\"gubun\">소득공제</Col></Row><Row><Col id=\"code\">GS011</Col><Col id=\"name\">농특세 및 주민세</Col><Col id=\"gubun\">농특세/주민세</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsIncomeTaxR", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GS001</Col><Col id=\"name\">기본세율조견표</Col><Col id=\"gubun\">근로소득</Col></Row><Row><Col id=\"code\">GS002</Col><Col id=\"name\">소득공제</Col><Col id=\"gubun\">근로소득</Col></Row><Row><Col id=\"code\">GS003</Col><Col id=\"name\">세액공제</Col><Col id=\"gubun\">근로소득</Col></Row><Row><Col id=\"code\">GS004</Col><Col id=\"name\">간이세액수입금액조정</Col><Col id=\"gubun\">근로소득</Col></Row><Row><Col id=\"code\">GS005</Col><Col id=\"name\">퇴직소득공제조견표</Col><Col id=\"gubun\">퇴직소득</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTaxChart", this);
            obj._setContents("<ColumnInfo><Column id=\"taxRangeFrom\" type=\"STRING\" size=\"256\"/><Column id=\"taxRate\" type=\"STRING\" size=\"256\"/><Column id=\"acmltDdt\" type=\"STRING\" size=\"256\"/><Column id=\"limitAmt\" type=\"STRING\" size=\"256\"/><Column id=\"artcCd\" type=\"STRING\" size=\"256\"/><Column id=\"taxRangeTo\" type=\"STRING\" size=\"256\"/><Column id=\"belongYear\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDeductionChart", this);
            obj._setContents("<ColumnInfo><Column id=\"division\" type=\"STRING\" size=\"256\"/><Column id=\"deductAmt\" type=\"STRING\" size=\"256\"/><Column id=\"artcCd\" type=\"STRING\" size=\"256\"/><Column id=\"belongYear\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "8", "1200", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "4", null, "60", "74.4%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("소득/세액 공제설정");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("incomeGrid", "absolute", "2.24%", "128", null, "303", "64.16%", null, this);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("dsIncomeTaxR");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"항목명\"/></Band><Band id=\"body\"><Cell text=\"bind:gubun\"/><Cell col=\"1\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("taxChartGrid", "absolute", "36.48%", "128", null, "273", "1.92%", null, this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTaxChart");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"88\"/><Column size=\"88\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" colspan=\"2\" text=\"과세표준\"/><Cell col=\"3\" text=\"세율\"/><Cell col=\"4\" text=\"누진공제\"/><Cell col=\"5\" text=\"한도액\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:taxRangeFrom\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" text=\"bind:taxRangeTo\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:taxRate\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"normal\" text=\"bind:acmltDdt\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"normal\" text=\"bind:limitAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("deduGrid", "absolute", "2.24%", "441", null, "304", "64.16%", null, this);
            obj.set_taborder("10");
            obj.set_autofittype("col");
            obj.set_binddataset("dsIncomeTaxS");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"88\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"항목명\"/></Band><Band id=\"body\"><Cell text=\"bind:gubun\"/><Cell col=\"1\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("deductionChartGrid", "absolute", "36.48%", "441", null, "274", "1.92%", null, this);
            obj.set_taborder("11");
            obj.set_autofittype("col");
            obj.set_binddataset("dsDeductionChart");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"항목\"/><Cell col=\"2\" text=\"공제율\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:division\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:deductAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.24%", "69", null, "51", "1.68%", null, this);
            obj.set_taborder("13");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("belongStc", "absolute", "2.64%", "80", null, "28", "87.76%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("귀속년도");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("taxRateCopyBtn", "absolute", "1000", "81", "110", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("taxRateCopyBtn");
            obj.style.set_background("@gradation URL('img::taxCopyBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("taxRateCopyBtn");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "12.64%", "80", "85", "34", null, null, this);
            obj.set_taborder("16");
            obj.set_value("2016");
            obj.getSetter("class").set("yearSpin");
            this.addChild(obj.name, obj);

            obj = new Button("incomTaxSearchBtn", "absolute", "254", "81", "90", "32", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("SearchBtn");
            this.addChild(obj.name, obj);

            obj = new Button("taxAddBtn", "absolute", "1136", "403", "32", "32", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("taxAddBtn");
            this.addChild(obj.name, obj);

            obj = new Button("taxDelBtn", "absolute", "1176", "403", "32", "32", null, null, this);
            obj.set_taborder("19");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("taxDelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DeduAddBtn", "absolute", "1136", "718", "32", "32", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DeduAddBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DeduDelBtn", "absolute", "1176", "718", "32", "32", null, null, this);
            obj.set_taborder("21");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DeduDelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "1115", "81", "90", "32", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("saveBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("saveBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 51, this.baseDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.baseDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("hs_incomeTaxSettingForm");
            		p.set_titletext("HS_IncomeTaxSettingForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HS_IncomeTaxSettingForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HS_IncomeTaxSettingForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사 소득/세액 공제설정관리                           			*
        *                                                                   *
        * @Path		    소득/세액 환경설정 관리							*
        * @Description  각 소득세액공제 항목별 환경을 설정할 수 있다.	*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  28.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";

        var taxRowCount, deduRowCount;
        this.incomTaxSearchBtn_onclick = function(obj,e) {
        	var year = this.yearSpin.text;	
        	this.dsService.setColumn(0,4,"year="+year);
        	this.gfnService("findTaxChartList",false);
        	this.dsService.setColumn(1,4,"year="+year);
        	this.gfnService("findDeduChartList",false);
        		
        	taxRowCount=this.dsTaxChart.getRowCount();
        	deduRowCount=this.dsDeductionChart.getRowCount();
        	
        	var code1 = this.dsIncomeTaxR.getColumn(0,"code");
        	this.dsTaxChart.filter("artcCd=='"+code1+"'");
        	var code2 = this.dsIncomeTaxS.getColumn(0,"code");
        	this.dsDeductionChart.filter("artcCd=='"+code2+"'");
        }

        this.incomeGrid_oncellclick = function(obj,e) {
        	var code = this.dsIncomeTaxR.getColumn(this.incomeGrid.currentrow,"code");
        	this.dsTaxChart.filter("artcCd=='"+code+"'");
        }

        this.deduGrid_oncellclick = function(obj,e) {
        	var code = this.dsIncomeTaxS.getColumn(this.deduGrid.currentrow,"code");
        	this.dsDeductionChart.filter("artcCd=='"+code+"'");
        }

        //세율복사
        this.taxRateCopyBtn_onclick = function(obj,e) {	
        	if (confirm("직전년도 세율 데이터를 복사하시겠습니까?")) {
        		if (this.dsTaxChart.getRowCount() == 0) {			
        			var year = this.yearSpin.text -1;	
        			this.dsService.setColumn(2,4,"year="+year);
        			this.gfnService("setTaxDeduCopy");
        		}else{
        			alert("해당년도 세율 데이터가 이미 존재합니다.");
        		}
        	}
        }

        this.taxAddBtn_onclick = function(obj,e){
        	var year = this.yearSpin.text;	
        	var cd=this.dsIncomeTaxR.getColumn(this.dsIncomeTaxR.rowposition,"code");
        	
        	var seqArr = new Array; 
        	var arrIndex = 0;
        	for(var i=0; i<taxRowCount; i++){
        		seqArr[arrIndex++]=this.dsTaxChart.getColumn(i,"seq");
        	}
        	
        	this.dsTaxChart.addRow();	
        	this.dsTaxChart.setColumn(this.dsTaxChart.rowposition,"belongYear",year);
        	this.dsTaxChart.setColumn(this.dsTaxChart.rowposition,"artcCd",cd);
        	this.dsTaxChart.setColumn(this.dsTaxChart.rowposition,"seq",arrIndex+1);
        }

        this.taxDelBtn_onclick = function(obj,e){
        	this.dsTaxChart.deleteRow(this.dsTaxChart.rowposition);
        }

        this.DeduAddBtn_onclick = function(obj,e){
        	var year = this.yearSpin.text;	
        	var cd=this.dsIncomeTaxS.getColumn(this.dsIncomeTaxS.rowposition,"code");
        	
        	var seqArr = new Array; 
        	var arrIndex = 0;
        	for(var i=0; i<deduRowCount; i++){
        		seqArr[arrIndex++]=this.dsDeductionChart.getColumn(i,"seq");
        	}
        	
        	this.dsDeductionChart.addRow();
        	this.dsDeductionChart.setColumn(this.dsDeductionChart.rowposition,"belongYear",year);
        	this.dsDeductionChart.setColumn(this.dsDeductionChart.rowposition,"artcCd",cd);
        	this.dsDeductionChart.setColumn(this.dsDeductionChart.rowposition,"seq",arrIndex+1);
        }

        this.DeduDelBtn_onclick = function(obj,e){
        	this.dsDeductionChart.deleteRow(this.dsDeductionChart.rowposition);
        }

        //세율저장
        this.saveBtn_onclick = function(obj,e){	
        	if(confirm("저장하시겠습니까?")){
        		if(this.taxChartGrid.rowcount != 0){
        			this.gfnService("batchTaxChartProcess");	
        		}
        		
        		if(this.deductionChartGrid.rowcount != 0){
        			this.gfnService("batchDeduChartProcess");	
        		}
        	}		
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.incomeGrid.addEventHandler("oncellclick", this.incomeGrid_oncellclick, this);
            this.deduGrid.addEventHandler("oncellclick", this.deduGrid_oncellclick, this);
            this.taxRateCopyBtn.addEventHandler("onclick", this.taxRateCopyBtn_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.incomTaxSearchBtn.addEventHandler("onclick", this.incomTaxSearchBtn_onclick, this);
            this.taxAddBtn.addEventHandler("onclick", this.taxAddBtn_onclick, this);
            this.taxDelBtn.addEventHandler("onclick", this.taxDelBtn_onclick, this);
            this.DeduAddBtn.addEventHandler("onclick", this.DeduAddBtn_onclick, this);
            this.DeduDelBtn.addEventHandler("onclick", this.DeduDelBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);

        };

        this.loadIncludeScript("HS_IncomeTaxSettingForm.xfdl");

       
    };
}
)();

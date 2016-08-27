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
                this.set_name("HS_PayrollForm");
                this.set_classname("HS_PayrollForm");
                this.set_titletext("New Form");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPayrollList</Col><Col id=\"URL\">his::hrs/salMng/findPayrollList.do</Col><Col id=\"outData\">dsPayRoll=dsPayRoll</Col><Col id=\"callbackFunc\">findPayrollCB</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMonth", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">01</Col></Row><Row><Col id=\"value\">02</Col></Row><Row><Col id=\"value\">03</Col></Row><Row><Col id=\"value\">04</Col></Row><Row><Col id=\"value\">05</Col></Row><Row><Col id=\"value\">06</Col></Row><Row><Col id=\"value\">07</Col></Row><Row><Col id=\"value\">08</Col></Row><Row><Col id=\"value\">09</Col></Row><Row><Col id=\"value\">10</Col></Row><Row><Col id=\"value\">11</Col></Row><Row><Col id=\"value\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsJibGe", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">개인별</Col></Row><Row><Col id=\"value\">부서별</Col></Row><Row><Col id=\"value\">직종별</Col></Row><Row><Col id=\"value\">사업장별</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPayRoll", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"title1\" type=\"STRING\" size=\"256\"/><Column id=\"title2\" type=\"STRING\" size=\"256\"/><Column id=\"title3\" type=\"STRING\" size=\"256\"/><Column id=\"paymAmt\" type=\"STRING\" size=\"256\"/><Column id=\"deducTitle\" type=\"STRING\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPayRollPaym", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"title1\" type=\"STRING\" size=\"256\"/><Column id=\"title2\" type=\"STRING\" size=\"256\"/><Column id=\"title3\" type=\"STRING\" size=\"256\"/><Column id=\"paymAmt\" type=\"STRING\" size=\"256\"/><Column id=\"deducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPayRollDeduc", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"title1\" type=\"STRING\" size=\"256\"/><Column id=\"title2\" type=\"STRING\" size=\"256\"/><Column id=\"title3\" type=\"STRING\" size=\"256\"/><Column id=\"paymAmt\" type=\"STRING\" size=\"256\"/><Column id=\"deducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "8", "1200", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "4", null, "60", "85.28%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("급여대장");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.24%", "77", null, "59", "1.68%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("belongStc", "absolute", "2.88%", "88", null, "28", "88.24%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("귀속연월");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("businessStc", "absolute", "50.88%", "88", null, "28", "40.24%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("사업장");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "12.48%", "88", null, "30", "1010", null, this);
            obj.set_taborder("6");
            obj.set_value("2016");
            obj.getSetter("class").set("yearSpin");
            this.addChild(obj.name, obj);

            obj = new Static("yearStatic", "absolute", "19.28%", "89", null, "28", "78.96%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("년");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Combo("monthCombo", "absolute", "20.8%", "89", null, "28", "73.76%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("dsMonth");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.style.set_background("transparent");

            obj = new Static("monthStatic", "absolute", "26.32%", "89", null, "28", "71.92%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("월");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Static("payStc", "absolute", "28.8%", "89", null, "28", "62.48%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("지급일");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("payDayEd", "absolute", "38.08%", "89", null, "28", "52.72%", null, this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Button("searchPaydayBtn", "absolute", "595", "88", "32", "32", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("searchPaydayBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchPaydayBtn");
            this.addChild(obj.name, obj);

            obj = new Static("sumTypeStc", "absolute", "70.4%", "89", null, "28", "20.88%", null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("집계");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("searchPayrollBtn", "absolute", "1129", "89", "74", "32", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchChangeSalBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("besinessNmEd", "absolute", "60.48%", "89", null, "28", "30.32%", null, this);
            obj.set_taborder("15");
            obj.set_value("서울병원");
            this.addChild(obj.name, obj);

            obj = new Combo("sumTypeCombo", "absolute", "79.68%", "89", null, "28", "11.12%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.style.set_background("transparent");
            obj.set_innerdataset("@dsJibGe");
            obj.set_datacolumn("value");
            obj.set_codecolumn("value");

            obj = new Div("Div00", "absolute", "2.24%", "144", "1201", "594", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("#edececff");
            obj.style.set_border("0 none lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Grid("mainGrid", "absolute", "3.28%", "158", null, "558", "65.52%", null, this);
            obj.set_taborder("18");
            obj.set_binddataset("dsPayRoll");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"20\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\"/><Cell col=\"2\" text=\"사원코드\"/><Cell col=\"3\" text=\"사원명\"/><Cell col=\"4\" text=\"부서\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:select\"/><Cell col=\"2\" text=\"bind:title1\"/><Cell col=\"3\" text=\"bind:title2\"/><Cell col=\"4\" text=\"bind:title3\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"인원\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("paymGrid", "absolute", "34.64%", "158", null, "558", "34.16%", null, this);
            obj.set_taborder("19");
            obj.set_binddataset("dsPayRollPaym");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"지급항목\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"지급합계\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:paymAmt\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"지급합계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;parseInt(paymAmt)&quot;)\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("deducGrid", "absolute", "66%", "158", null, "534", "2.8%", null, this);
            obj.set_taborder("20");
            obj.set_binddataset("dsPayRollDeduc");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공제항목\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"공제합계\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:deducAmt\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"공제합계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;parseInt(deducAmt)&quot;)\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("paymDiffEd", "absolute", "82.96%", "692", "180", "24", null, null, this);
            obj.set_taborder("21");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("1 solid darkgray");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "66%", "692", null, "24", "16.88%", null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("차인지급액");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("1 solid darkgray");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1201, 594, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.style.set_background("#edececff");
            		p.style.set_border("0 none lightsteelblue");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HS_PayrollForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HS_PayrollForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("HS_PayrollForm.xfdl", "scripts::commonPopup.xjs");
        this.addIncludeScript("HS_PayrollForm.xfdl", "scripts::hrsScripts.xjs");
        this.registerScript("HS_PayrollForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사 급여대장 관리                           					*
        *                                                                   *
        * @Path		    급여대장      										*
        * @Description  급여를 지급한 내용을 조회조건에 맞게 통계낼 	*
        				수 있다.											*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 5.  30.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonPopup.xjs";
        //include "scripts::hrsScripts.xjs";

        this.searchPaydayBtn_onclick = function(obj,e){
        	var yearMonth = this.yearSpin.text + this.monthCombo.text;
        	if(this.yearSpin.text == '' || this.monthCombo.text == ''){
        		alert("귀속연월 선택 후 조회하십시오.");
        	}else{
        		//팝업창
        		this.hrsOpenPaydayDialog(yearMonth);
        	}
        }

        //집계항목 변경시 그리드 셀 이름 자동 셋팅
        this.sumTypeCombo_onitemchanged = function(obj,e){
        	var jibGeType=obj.value;
        	if(jibGeType=="개인별"){
        		this.mainGrid.setCellProperty("head","2","text","사원코드");
        		this.mainGrid.setCellProperty("head","3","text","사원명");
        		this.mainGrid.setCellProperty("head","4","text","부서");
        	}else if(jibGeType=="부서별"){
        		this.mainGrid.setCellProperty("head","2","text","부서코드");
        		this.mainGrid.setCellProperty("head","3","text","부서명");
        		this.mainGrid.setCellProperty("head","4","text","인원");
        	}else if(jibGeType=="직종별"){
        		this.mainGrid.setCellProperty("head","2","text","직종코드");
        		this.mainGrid.setCellProperty("head","3","text","직종명");
        		this.mainGrid.setCellProperty("head","4","text","인원");
        	}else if(jibGeType=="사업장별"){
        		this.mainGrid.setCellProperty("head","2","text","사업장코드");
        		this.mainGrid.setCellProperty("head","3","text","사업장명");
        		this.mainGrid.setCellProperty("head","4","text","인원");
        	}
        }

        this.searchPayrollBtn_onclick = function(obj,e){
        	if(this.payDayEd.text == ''){
        		alert("지급일을 선택하십시오.");
        	}else if(this.sumTypeCombo.text == ''){
        		alert("집계를 선택하십시오.");
        	}else{
        		var belongYm = this.yearSpin.text + this.monthCombo.text;
        		var paymDate = this.payDayEd.text;
        		var jibGeType = this.sumTypeCombo.text;
        		this.dsService.setColumn(0,4,"belongYm="+belongYm+" paymDate="+paymDate+" jibGeType="+jibGeType);
        		this.gfnService("findPayrollList", false);
        		
        		var title2 = this.dsPayRoll.getColumn(0,"title2");
        		
        		//copyData 필터링된 행만을 복사할 것인지 여부를 설정한다. Default : false                                                                       
        		this.dsPayRollPaym.copyData(this.dsPayRoll,true);
        		this.dsPayRollPaym.filter("title2=='"+title2+"'");
        		this.dsPayRollDeduc.copyData(this.dsPayRoll,true);
        		this.dsPayRollDeduc.filter("title2=='"+title2+"'");
        		
        		//차인지급액셋팅
        		var paymAmt = this.dsPayRoll.getColumn(0,"paymAmt");
        		var deducAmt = this.dsPayRoll.getColumn(0,"deducAmt");
        		var sum1 = parseInt(paymAmt);
        		var sum2 = parseInt(deducAmt);
        		this.paymDiffEd.set_mask("###,###");
        		this.paymDiffEd.set_value(sum1-sum2);
        	}
        }

        this.findPayrollCB = function(svcID,errorCode,errorMsg){
        	if (errorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
              this.gfnErrorPopup(svcID, errorMsg);
           } else {
              // 트랜잭션 완료
              trace("===== " + svcID + " 트랜잭션 성공 =====\n");
              if(this.dsPayRoll.getRowCount()==0){
        			alert("해당연월에 조회된 데이터가 없습니다.");
        	  }
           }
        }

        //지급일셋팅
        this.setCode=function(code,arr){ 
        	this.payDayEd.set_value(arr[0]);
        }

        //상세정보변경
        this.mainGrid_oncellclick = function(obj,e){
        	var title2 = this.dsPayRoll.getColumn(this.mainGrid.currentrow,"title2");
        	this.dsPayRollPaym.copyData(this.dsPayRoll,true);
        	this.dsPayRollPaym.filter("title2=='"+title2+"'");
        	this.dsPayRollDeduc.copyData(this.dsPayRoll,true);
        	this.dsPayRollDeduc.filter("title2=='"+title2+"'");
        	
        	//차인지급액셋팅
        	var paymAmt = this.dsPayRoll.getColumn(e.row,"paymAmt");
        	var deducAmt = this.dsPayRoll.getColumn(e.row,"deducAmt");
        	var sum1 = parseInt(paymAmt);
        	var sum2 = parseInt(deducAmt);
        	this.paymDiffEd.set_mask("###,###");
        	this.paymDiffEd.set_value(sum1-sum2);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.searchPaydayBtn.addEventHandler("onclick", this.searchPaydayBtn_onclick, this);
            this.searchPayrollBtn.addEventHandler("onclick", this.searchPayrollBtn_onclick, this);
            this.sumTypeCombo.addEventHandler("onitemchanged", this.sumTypeCombo_onitemchanged, this);
            this.mainGrid.addEventHandler("oncellclick", this.mainGrid_oncellclick, this);
            this.paymGrid.addEventHandler("oncellclick", this.paymDeducGrid_oncellclick, this);
            this.deducGrid.addEventHandler("oncellclick", this.paymDeducGrid_oncellclick, this);

        };

        this.loadIncludeScript("HS_PayrollForm.xfdl");

       
    };
}
)();

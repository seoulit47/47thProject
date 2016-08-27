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
                this.set_name("HS_SalStatementForm");
                this.set_classname("HS_SalStatementForm");
                this.set_titletext("HS_SalStatementForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findSalCalEmpList</Col><Col id=\"URL\">his::hrs/salMng/findSalCalEmpList.do</Col><Col id=\"outData\">dsSalCalEmp=dsSalCalEmp dsSalCalPayDed=dsSalCalPayDed</Col><Col id=\"callbackFunc\">salCalEmpListCB</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMonth", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">01</Col></Row><Row><Col id=\"value\">02</Col></Row><Row><Col id=\"value\">03</Col></Row><Row><Col id=\"value\">04</Col></Row><Row><Col id=\"value\">05</Col></Row><Row><Col id=\"value\">06</Col></Row><Row><Col id=\"value\">07</Col></Row><Row><Col id=\"value\">08</Col></Row><Row><Col id=\"value\">09</Col></Row><Row><Col id=\"value\">10</Col></Row><Row><Col id=\"value\">11</Col></Row><Row><Col id=\"value\">12</Col></Row><Row><Col id=\"value\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSalCalEmp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobClass\" type=\"STRING\" size=\"256\"/><Column id=\"paymentDate\" type=\"STRING\" size=\"256\"/><Column id=\"belongYm\" type=\"STRING\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/><Column id=\"aap\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSalCalPayDed", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"paymDeducDiv\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPayment", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"paymDeducDiv\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDeducation", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"paymDeducDiv\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "8", "1200", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "4", null, "60", "81.68%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("급여명세");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "2.24%", "126", "1201", "610", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#edececff");
            obj.style.set_border("0 none lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Grid("empGrid", "absolute", "3.2%", "133", null, "558", "65.6%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsSalCalEmp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"20\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"1\"/><Cell col=\"2\" text=\"사원코드\"/><Cell col=\"3\" text=\"사원명\"/><Cell col=\"4\" text=\"부서\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:select\"/><Cell col=\"2\" text=\"bind:empNo\"/><Cell col=\"3\" text=\"bind:empNm\"/><Cell col=\"4\" text=\"bind:jobClass\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"인원\"/><Cell col=\"3\" expr=\"expr:dataset.getRowCount()+&quot;명&quot;\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("paymGrid", "absolute", "34.56%", "133", null, "558", "34.24%", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsPayment");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"지급항목\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:paymDeducNm\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:amt\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"지급합계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;parseInt(amt)&quot;)\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("deducGrid", "absolute", "65.92%", "133", null, "534", "2.88%", null, this);
            obj.set_taborder("6");
            obj.set_binddataset("dsDeducation");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공제항목\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:paymDeducNm\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:amt\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"공제합계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;parseInt(amt)&quot;)\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "65.92%", "667", null, "24", "16.96%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("차인지급액");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("1 solid darkgray");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("paymDiffEd", "absolute", "82.88%", "667", "180", "24", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("1 solid darkgray");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.24%", "69", null, "51", "1.68%", null, this);
            obj.set_taborder("22");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Button("printStateBtn", "absolute", "1096", "80", "90", "32", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("printStateBtn");
            obj.style.set_background("@gradation URL('img::printBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("printBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchSalStateBtn", "absolute", "1005", "80", "90", "32", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("searchSalStateBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchSalStateBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("deptNmEd", "absolute", "69.2%", "81", null, "28", "22.16%", null, this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Button("searchDeptBtn", "absolute", "829", "81", "32", "32", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchDeptBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("deptCdEd", "absolute", "60.16%", "81", null, "28", "33.76%", null, this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("deptStc", "absolute", "50.96%", "81", null, "28", "40.4%", null, this);
            obj.getSetter("taborder").set("28");
            obj.set_text("부서");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("paydayBtn", "absolute", "588", "81", "32", "32", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("paydayBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("payDayEd", "absolute", "37.68%", "81", null, "28", "53.12%", null, this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Static("comStc", "absolute", "28.56%", "81", null, "28", "62.72%", null, this);
            obj.getSetter("taborder").set("31");
            obj.set_text("지급일");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("monthStatic", "absolute", "25.84%", "81", null, "28", "72.24%", null, this);
            obj.getSetter("taborder").set("32");
            obj.set_text("월");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Combo("monthCombo", "absolute", "20.72%", "81", null, "28", "74.08%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_innerdataset("dsMonth");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.style.set_background("transparent");

            obj = new Static("yearStatic", "absolute", "19.04%", "81", null, "28", "79.12%", null, this);
            obj.getSetter("taborder").set("34");
            obj.set_text("년");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "13.04%", "81", null, "30", "1011", null, this);
            obj.set_taborder("35");
            obj.set_value("2016");
            obj.getSetter("class").set("yearSpin");
            this.addChild(obj.name, obj);

            obj = new Static("belongStc", "absolute", "3.2%", "81", null, "28", "87.28%", null, this);
            obj.getSetter("taborder").set("36");
            obj.set_text("귀속연월");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 51, this.baseDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("22");
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
            		p.set_classname("HS_SalStatementForm");
            		p.set_titletext("HS_SalStatementForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HS_SalStatementForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HS_SalStatementForm.xfdl", "scripts::hrsScripts.xjs");
        this.registerScript("HS_SalStatementForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사 급여명세 관리                  							*
        *                                                                   *
        * @Path		    급여명세      										*
        * @Description  급여명세 조회 및 출력할 수 있다.				*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  10.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::hrsScripts.xjs";

        this.paydayBtn_onclick = function(obj,e){
        	var yearMonth = this.yearSpin.text + this.monthCombo.text;
        	if(this.yearSpin.text == '' || this.monthCombo.text == ''){
        		alert("귀속연월 선택 후 조회하십시오.");
        	}else{
        		this.hrsOpenPaydayDialog(yearMonth);
        	}
        }

        //코드셋팅
        this.setCode=function(code,arr){ 
        	if(code == "GP070"){
        		this.deptCdEd.set_value(arr[0]);
        		this.deptNmEd.set_value(arr[1]);
        	}else{
        		this.payDayEd.set_value(arr[0]);
        	}
        }

        //부서선택
        this.searchDeptBtn_onclick = function(obj,e){
        	this.gfnCodePopup("GP070");
        }

        //조회
        this.searchSalStateBtn_onclick = function(obj,e){
        	if(this.payDayEd.text == '' ){
        		alert("지급일을 선택하십시오.");
        	}else{
        		this.dsPayment.clearData();
        		this.dsDeducation.clearData();
        		
        		var belongYm = this.yearSpin.text + this.monthCombo.text;
        		var pamDate = this.payDayEd.text;
        		var deptNm = this.deptNmEd.text;
        		
        		this.dsService.setColumn(0,4,"belongYm="+belongYm+" pamDate="+pamDate+" deptNm="+deptNm);
        		this.gfnService("findSalCalEmpList");
        	}
        }

        this.empGrid_oncellclick = function(obj,e){
        	var empNo = this.dsSalCalEmp.getColumn(this.empGrid.currentrow,"empNo");
        		this.dsSalCalPayDed.filter("empNo=='"+empNo+"' && paymDeducDiv=='지급'");
        		this.dsPayment.copyData(this.dsSalCalPayDed,true);
        		
        		//총지급액
        		var sum = 0; 
        		for(var i = 0; i < this.dsPayment.getRowCount(); i++){
        			if(i<this.dsPayment.getRowCount()){
        				var s = this.dsPayment.getColumn(i,"amt");
        				sum += parseInt(s);
        			}
        		}
        		this.dsSalCalPayDed.filter("empNo=='"+empNo+"' && paymDeducDiv=='공제'");
        		this.dsDeducation.copyData(this.dsSalCalPayDed,true);
        		
        		//총공제액
        		var sum1 = 0; 
        		for(var i = 0; i < this.dsDeducation.getRowCount(); i++){
        			if(i<this.dsDeducation.getRowCount()){
        				var s = this.dsDeducation.getColumn(i,"amt");
        				sum1 += parseInt(s);
        			}
        		}
        		
        		this.paymDiffEd.set_mask("###,###");
        		this.paymDiffEd.set_value(sum-sum1);
        }

        //급여명세출력
        this.printStateBtn_onclick = function(obj,e){
        	//체크된 사원 배열로 보낸다.
        	var empArr = new Array; 
        	var arrIndex = 0;
        	//체크된 사원만 보낸다.
        	for(var i=0; i<this.dsSalCalEmp.getRowCount(); i++){
        		var select = this.dsSalCalEmp.getColumn(i,"select");
        		if(select == 1){
        			empArr[arrIndex++] = this.dsSalCalEmp.getColumn(i,"empNo");
        		}
        	}
        	
        	//alert("empArr.length : "+empArr.length);
        	
        	var paymentDate = this.payDayEd.text;
        	var belongYm = this.yearSpin.text + this.monthCombo.text;
        	
        	if(this.yearSpin.text == '' || this.monthCombo.text == '' || paymentDate == ''){
        		alert("조회 후 출력하십시오.");
        	}else if(arrIndex == 0){
        			alert("선택된 사원이 존재하지 않습니다.");
        	}else{
        		//PDFForm 호출한다.
        		application.open(
        			"PDFForm",
        			"hrs::HS_SalStatePDFForm.xfdl",
        			this.parent,
        			{empNo:empArr, belongYm:belongYm, paymentDate:paymentDate},
        			"showtitlebar=true showstatusbar=false",
        			0,0,
        			640,480
        		);	
        	}
        }

        this.salCalEmpListCB = function(svcID,errorCode,errorMsg){
        	if (errorCode < 1) {
        		trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
        		this.gfnErrorPopup(svcID, errorMsg);
        	} else {
        		// 트랜잭션 완료
        		trace("===== " + svcID + " 트랜잭션 성공 =====\n");
        		if(this.dsSalCalEmp.getRowCount() == 0){
        			alert("해당연월에 조회된 사원데이터가 없습니다.");
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.empGrid.addEventHandler("oncellclick", this.empGrid_oncellclick, this);
            this.printStateBtn.addEventHandler("onclick", this.printStateBtn_onclick, this);
            this.searchSalStateBtn.addEventHandler("onclick", this.searchSalStateBtn_onclick, this);
            this.searchDeptBtn.addEventHandler("onclick", this.searchDeptBtn_onclick, this);
            this.paydayBtn.addEventHandler("onclick", this.paydayBtn_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);

        };

        this.loadIncludeScript("HS_SalStatementForm.xfdl");

       
    };
}
)();

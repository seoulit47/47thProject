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
                this.set_name("HS_SalTransferForm");
                this.set_classname("HS_SalTransferForm");
                this.set_titletext("HS_SalTransferForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findSalTransfList</Col><Col id=\"URL\">his::hrs/salMng/findSalTransfList.do</Col><Col id=\"outData\">dsSalTransf=dsSalTransf</Col><Col id=\"callbackFunc\">findSalTransfCB</Col></Row></Rows>");
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

            obj = new Dataset("dsSalTransf", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"aap\" type=\"STRING\" size=\"256\"/><Column id=\"paymentDate\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "4.8%", "4", null, "60", "81.68%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("급여명세");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.24%", "61", null, "91", "1.68%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Button("printTransBtn", "absolute", "875", "110", "90", "32", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("printTransBtn");
            obj.style.set_background("@gradation URL('img::printBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("printTransBtn");
            this.addChild(obj.name, obj);

            obj = new Button("transSearchBtn", "absolute", "779", "110", "90", "32", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("transSearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("transSearchBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("deptNmEd", "absolute", "22%", "112", null, "28", "69.36%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("searchDeptBtn", "absolute", "239", "112", "32", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("searchDeptBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchDeptBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("deptCdEd", "absolute", "12.96%", "112", null, "28", "80.96%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("deptStc", "absolute", "3.2%", "112", null, "28", "87.28%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("부서");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("paydayBtn", "absolute", "588", "73", "32", "32", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("paydayBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("payDayEd", "absolute", "37.68%", "73", null, "28", "53.12%", null, this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("comStc", "absolute", "28.56%", "73", null, "28", "62.72%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("지급일");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("monthStatic", "absolute", "25.84%", "73", null, "28", "72.24%", null, this);
            obj.getSetter("taborder").set("11");
            obj.set_text("월");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Combo("monthCombo", "absolute", "20.72%", "73", null, "28", "74.08%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("dsMonth");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.style.set_background("transparent");

            obj = new Static("yearStatic", "absolute", "19.04%", "73", null, "28", "79.12%", null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("년");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "13.04%", "73", null, "30", "1011", null, this);
            obj.set_taborder("14");
            obj.set_value("2016");
            obj.getSetter("class").set("yearSpin");
            this.addChild(obj.name, obj);

            obj = new Static("belongStc", "absolute", "3.2%", "73", null, "28", "87.28%", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("귀속연월");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0%", "0", "1670", "60", null, null, this);
            obj.set_taborder("16");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "5.44%", "-4", null, "60", "76.32%", null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("급/상여 이체현황");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "2.24%", "159", "1201", "569", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("#edececff");
            obj.style.set_border("0 none lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Grid("salTransfGrid", "absolute", "2.72%", "163", null, "558", "2.08%", null, this);
            obj.set_taborder("19");
            obj.set_binddataset("dsSalTransf");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"은행\"/><Cell col=\"2\" text=\"사원코드\"/><Cell col=\"3\" text=\"사원명\"/><Cell col=\"4\" text=\"계좌번호\"/><Cell col=\"5\" text=\"예금주명\"/><Cell col=\"6\" text=\"실지급액\"/><Cell col=\"7\" text=\"지급일자\"/></Band><Band id=\"body\"><Cell style=\"background:transparent;background2:transparent;\" expr=\"expr:currow+1\" suppress=\"0\"/><Cell col=\"1\" style=\"background:transparent;background2:transparent;\" text=\"bind:bankNm\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"2\" style=\"background:transparent;background2:transparent;\" text=\"bind:empNo\"/><Cell col=\"3\" style=\"background:transparent;background2:transparent;\" text=\"bind:empNm\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"4\" style=\"background:transparent;background2:transparent;\" text=\"bind:accountNm\" suppress=\"1\"/><Cell col=\"5\" style=\"background:transparent;background2:transparent;\" text=\"bind:empNm\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"6\" displaytype=\"number\" style=\"background:transparent;background2:transparent;\" text=\"bind:aap\"/><Cell col=\"7\" edittype=\"none\" style=\"background:transparent;background2:transparent;\" text=\"bind:paymentDate\" suppress=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("bankNmEd", "absolute", "52.08%", "112", null, "28", "39.28%", null, this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Button("searchBankBtn", "absolute", "615", "112", "32", "32", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("searchBankBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchBankBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("bankCdEd", "absolute", "43.04%", "112", null, "28", "50.88%", null, this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("deptStc00", "absolute", "33.28%", "112", null, "28", "57.2%", null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("은행코드");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HS_SalTransferForm");
            		p.set_titletext("HS_SalTransferForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HS_SalTransferForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HS_SalTransferForm.xfdl", "scripts::hrsScripts.xjs");
        this.registerScript("HS_SalTransferForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사 급/상여이체 관리                  							*
        *                                                                   *
        * @Path		    급/상여이체      									*
        * @Description  급여이체 조회 및 출력할 수 있다.				*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  3.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::hrsScripts.xjs";

        this.paydayBtn_onclick = function(obj,e){
        	var yearMonth = this.yearSpin.text + this.monthCombo.text;
        	if(this.yearSpin.text == '' || this.monthCombo.text == ''){
        		alert("귀속연월 선택 후 조회하십시오.");
        	}else{
        		//팝업창
        		this.hrsOpenPaydayDialog(yearMonth);
        	}
        }

        //지급일셋팅
        this.setCode=function(code,arr){ 
        	if(code == "GP070"){
        		this.deptCdEd.set_value(arr[0]);
        		this.deptNmEd.set_value(arr[1]);
        	}else if(code == "GP015"){
        		this.bankCdEd.set_value(arr[0]);
        		this.bankNmEd.set_value(arr[1]);
        	}else{
        		this.payDayEd.set_value(arr[0]);
        	}
        }

        //부서선택
        this.searchDeptBtn_onclick = function(obj,e){
        	this.gfnCodePopup("GP070");
        }

        //은행선택
        this.searchBankBtn_onclick = function(obj,e){
        	this.gfnCodePopup("GP015");
        }

        //조회
        this.transSearchBtn_onclick = function(obj,e){ 
        	if(this.payDayEd.text == '' ){
        		alert("지급일을 선택하십시오.");
        	}else{
        		var belongYm = this.yearSpin.text + this.monthCombo.text;
        		var paymentDate = this.payDayEd.text;
        		var deptNm = this.deptNmEd.text;
        		var bankNm= this.bankNmEd.text;
        		
        		this.dsService.setColumn(0,4,"belongYm="+belongYm+" paymentDate="+paymentDate+" deptNm="+deptNm+" bankNm="+bankNm);
        		this.gfnService("findSalTransfList", false);
        		
        		this.salTransfGrid.setCellProperty();
        	}
        }

        //콜백함수
        this.findSalTransfCB = function(svcID,errorCode,errorMsg){
        	if (errorCode < 1) {
        		trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
        		this.gfnErrorPopup(svcID, errorMsg);
        	} else {
        		// 트랜잭션 완료
        		trace("===== " + svcID + " 트랜잭션 성공 =====\n");
        		if(this.dsSalTransf.getRowCount()==0){
        			alert("해당조건에 조회된 데이터가 없습니다.");
        		}
        	}
        }

        //출력
        this.printTransBtn_onclick = function(obj,e){
        	if(this.payDayEd.text == ''){
        		alert("조회 후 출력하십시오.");
        	}else{
        		// 작성예정
            }
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.printTransBtn.addEventHandler("onclick", this.printTransBtn_onclick, this);
            this.transSearchBtn.addEventHandler("onclick", this.transSearchBtn_onclick, this);
            this.searchDeptBtn.addEventHandler("onclick", this.searchDeptBtn_onclick, this);
            this.paydayBtn.addEventHandler("onclick", this.paydayBtn_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.searchBankBtn.addEventHandler("onclick", this.searchBankBtn_onclick, this);

        };

        this.loadIncludeScript("HS_SalTransferForm.xfdl");

       
    };
}
)();

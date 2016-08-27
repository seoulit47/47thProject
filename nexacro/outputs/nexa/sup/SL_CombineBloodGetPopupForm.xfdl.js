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
                this.set_name("SL_combineBloodGetPopupForm");
                this.set_classname("SL_combineBloodGetPopupForm");
                this.set_titletext("미접수검체검색");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,725,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExmntCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">혈액</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">소변</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">세포</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">조직</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsClinspeSequence", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findClinspeList</Col><Col id=\"inData\"/><Col id=\"URL\">his::sup/laboratoryMedicine/findClinspeList.do</Col><Col id=\"callbackFunc\"/><Col id=\"outData\">dsClinspe=dsClinspe</Col></Row><Row><Col id=\"serviceID\">batchClinspeProcess</Col><Col id=\"URL\">his::sup/laboratoryMedicine/batchClinspeProcess.do</Col><Col id=\"inData\">dsClinspe=dsClinspe:U</Col><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findMaxClinspeNo</Col><Col id=\"URL\">his::sup/laboratoryMedicine/findMaxClinspeNo.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsClinspeSequence=dsClinspeSequence</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsClinspe", this);
            obj._setContents("<ColumnInfo><Column id=\"clinspeNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"respDoct\" type=\"STRING\" size=\"256\"/><Column id=\"dgnsNm\" type=\"STRING\" size=\"256\"/><Column id=\"exmntCd\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bloodgetDate\" type=\"STRING\" size=\"256\"/><Column id=\"bloodgetEmp\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"receiptCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHroomCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">일반</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">신생아</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">응급</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">격리</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">중환자</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">무균실</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsWardCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">41병동</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">51병동</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">52병동</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">61병동</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">62병동</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">71병동</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">72병동</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">81병동</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">중환자실</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsClinspeNm", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">혈액</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">수액</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">흉수</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">복수</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">관절액</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">농</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">분비액</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">담</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">인두점액</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">요</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">담즙</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"data\">대변</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.55%", "8", "711", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "8.02%", "-4", null, "60", "56.68%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("미접수 검체 검색");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "1.01%", "73", null, "27", "90.72%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("환자검색");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("bloodGetEndDateCal", "absolute", "29.72%", "109", "100", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Static("Static00", "absolute", "26.68%", "117", null, "19", "69.03%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 11 arial");
            this.addChild(obj.name, obj);

            obj = new Calendar("bloodGetStartDateCal", "absolute", "10.45%", "109", "100", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Static("subCodeStc04", "absolute", "1.4%", "112", null, "27", "90.33%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("채취일자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "45.24%", "109", null, "27", "46.41%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("검체명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("searchPatNoEd", "absolute", "10.53%", "73", "100", "30", null, null, this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("searchPatNmEd", "absolute", "29.41%", "73", "100", "30", null, null, this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "45.55%", "73", null, "27", "41.89%", null, this);
            obj.getSetter("taborder").set("11");
            obj.set_text("채취자 검색");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("searchDoctNoEd", "absolute", "58.58%", "73", "100", "30", null, null, this);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("searchDoctNmEd", "absolute", "77.38%", "73", "100", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("clinspeNmCombo", "absolute", "55.15%", "108", "130", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("dsClinspeNm");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Button("comboResetBtn", "absolute", "544", "109", "76", "26", null, null, this);
            obj.set_taborder("16");
            obj.set_text("조건초기화");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("clinspeGrid", "absolute", "0.83%", "144", null, "529", "1.38%", null, this);
            obj.set_taborder("17");
            obj.set_autofittype("col");
            obj.set_binddataset("dsClinspe");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검체번호\"/><Cell col=\"1\" text=\"진료의사\"/><Cell col=\"2\" text=\"검사항목\"/><Cell col=\"3\" text=\"검체명\"/><Cell col=\"4\" text=\"채혈일시\"/><Cell col=\"5\" text=\"채혈자\"/><Cell col=\"6\" text=\"환자\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:clinspeNo\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:respDoct\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:exmntCd\" combodataset=\"dsExmntCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:clinspeNm\" combodataset=\"dsClinspeNm\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" text=\"bind:bloodgetDate\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:bloodgetEmp\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:patNo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchPatBtn", "absolute", "176", "72", "32", "32", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchDoctBtn", "absolute", "528", "71", "32", "32", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchClinspeBtn", "absolute", "625", "109", "90", "32", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("cancelBtn", "absolute", "376", "688", "90", "32", null, null, this);
            obj.set_taborder("22");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("completeBtn", "absolute", "277", "688", "90", "32", null, null, this);
            obj.set_taborder("23");
            obj.style.set_background("@gradation URL('img::okBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 711, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 725, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SL_combineBloodGetPopupForm");
            		p.set_titletext("미접수검체검색");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SL_CombineBloodGetPopupForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("SL_CombineBloodGetPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SL_CombineBloodGetPopupForm.xfdl", "scripts::Scripts.xjs");
        this.registerScript("SL_CombineBloodGetPopupForm.xfdl", function() {
         /********************************************************************************
        *                                                                               *
        * 검체채취 팝업            												    *
        *                                                                               *
        * @Path		    진단검사의학 - 검체채취 팝업									*
        * @Description  환자 검체중 검체접수 되지않은 검체를 확인, 선택한다.      *
        * 																				*
        *																				*
        * @Author		정재욱						                             		*
        * 									                                            *
        * Created on 2016. 06. 20                             		                    *
        *									                                            *
        ********************************************************************************/

        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/

        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonScripts.xjs";
        //include "scripts::Scripts.xjs";

        /********************************************************************************
          폼 로드 이벤트
        ********************************************************************************/

        
        /********************************************************************************
          콜백 함수
        ********************************************************************************/
        this.clinspeCallBack = function clinspeCallBack(strSvcID,nErrorCode,strErrorMag)
        {
        	if(strSvcID == "findClinspeList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			this.dsClinspe.filter("receiptCd==null");
        			this.clinspeGrid.set_binddataset("dsClinspe");
        		}
        	}
        }	
        this.comboResetBtn_onclick = function(obj,e)
        {
        	this.searchPatNoEd.set_value(null);
        	this.searchPatNmEd.set_value(null);
        	this.searchDoctNoEd.set_value(null);
        	this.searchDoctNmEd.set_value(null);
        	this.clinspeNmCombo.set_value(null);
        	this.bloodGetStartDateCal.set_value(null);
        	this.bloodGetEndDateCal.set_value(null);
        }

        this.searchClinspeBtn_onclick = function(obj,e)
        {
        	var bloodGetStartDate = "19000101";
        	var bloodGetEndDate = "21000101";

        	if(this.bloodGetStartDateCal.value != null){
        		bloodGetStartDate = this.bloodGetStartDateCal.value;
        	}
        	if(this.bloodGetEndDateCal.value != null){
        		bloodGetEndDate = this.bloodGetEndDateCal.value;
        	}

        	var argument = "bloodGetStartDate='"+bloodGetStartDate+"' bloodGetEndDate='"+bloodGetEndDate+"' exmntCd='"+null+"' clinspeNm='"+this.clinspeNmCombo.value+"' patNo='"+this.searchPatNoEd.value+"' bloodgetEmp='"+this.searchDoctNmEd.value+"'";
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findClinspeList");
        }

        this.clinspeGrid_oncelldblclick = function(obj,e)
        {
        	if(e.row == null){
        		alert("미접수 검체를 선택하시오.");
        	}else{
        		if(this.parent.parentReason == "searchClinspe"){
        			this.opener.dsClinspeReceipt.setColumn(this.opener.dsClinspeReceipt.rowcount-1,"clinspeNo",this.dsClinspe.getColumn(e.row,"clinspeNo"));
        			this.opener.dsClinspeReceipt.setColumn(this.opener.dsClinspeReceipt.rowcount-1,"dgnsNm",this.dsClinspe.getColumn(e.row,"dgnsNm"));
        			this.opener.dsClinspeReceipt.setColumn(this.opener.dsClinspeReceipt.rowcount-1,"exmntCd",this.dsClinspe.getColumn(e.row,"exmntCd"));
        			this.opener.dsClinspeReceipt.setColumn(this.opener.dsClinspeReceipt.rowcount-1,"clinspeNm",this.dsClinspe.getColumn(e.row,"clinspeNm"));
        			this.opener.dsClinspeReceipt.setColumn(this.opener.dsClinspeReceipt.rowcount-1,"bloodgetDate",this.dsClinspe.getColumn(e.row,"bloodgetDate"));
        			this.opener.dsClinspeReceipt.setColumn(this.opener.dsClinspeReceipt.rowcount-1,"bloodgetEmp",this.dsClinspe.getColumn(e.row,"bloodgetEmp"));
        			this.opener.dsClinspeReceipt.setColumn(this.opener.dsClinspeReceipt.rowcount-1,"receiptCd","RE000");
        			this.close();
        		} 
        	}
        }

        this.cancelBtn_onclick = function(obj,e)
        {
        	if(this.parent.parentReason == "searchClinspe"){
        		this.opener.dsClinspeReceipt.deleteRow(this.opener.dsClinspeReceipt.rowcount-1);
        		this.close();	
        	} 
        }

        this.searchPatBtn_onclick = function(obj,e)
        {
         	this.gfnPopup("WS_PatPopupForm","won","","");
        	
        		this.setPatInfo= function(arrRtn){ 
        		this.searchPatNoEd.set_value(arrRtn[0]);  	
        		this.searchPatNmEd.set_value(arrRtn[1]);  
        	}
        }

        this.searchDoctBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("CM_DoctPopupForm","com","","");

        		this.setDoct= function(arr){ 
        		this.searchDoctNoEd.set_value(arr[0]); 
        		this.searchDoctNmEd.set_value(arr[1]);  
        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.comboResetBtn.addEventHandler("onclick", this.comboResetBtn_onclick, this);
            this.clinspeGrid.addEventHandler("oncelldblclick", this.clinspeGrid_oncelldblclick, this);
            this.searchPatBtn.addEventHandler("onclick", this.searchPatBtn_onclick, this);
            this.searchDoctBtn.addEventHandler("onclick", this.searchDoctBtn_onclick, this);
            this.searchClinspeBtn.addEventHandler("onclick", this.searchClinspeBtn_onclick, this);
            this.cancelBtn.addEventHandler("onclick", this.cancelBtn_onclick, this);
            this.completeBtn.addEventHandler("onclick", this.clinspeGrid_oncelldblclick, this);

        };

        this.loadIncludeScript("SL_CombineBloodGetPopupForm.xfdl");

       
    };
}
)();

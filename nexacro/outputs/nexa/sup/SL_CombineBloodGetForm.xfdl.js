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
                this.set_name("SL_CombineBloodGetForm");
                this.set_classname("SL_CombineBloodGetForm");
                this.set_titletext("검체채취관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }
            this.style.set_border("3 solid black");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findClinspeList</Col><Col id=\"URL\">his::sup/laboratoryMedicine/findClinspeList.do</Col><Col id=\"outData\">dsClinspe=dsClinspe</Col><Col id=\"callbackFunc\">clinspeCallBack</Col></Row><Row><Col id=\"serviceID\">findMaxClinspeNo</Col><Col id=\"URL\">his::sup/laboratoryMedicine/findMaxClinspeNo.do</Col><Col id=\"outData\">dsClinspeSequence=dsClinspeSequence</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">clinspeCallBack</Col></Row><Row><Col id=\"serviceID\">batchClinspeProcess</Col><Col id=\"URL\">his::sup/laboratoryMedicine/batchClinspeProcess.do</Col><Col id=\"inData\">dsClinspe=dsClinspe:U</Col><Col id=\"callbackFunc\">clinspeCallBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsClinspe", this);
            obj._setContents("<ColumnInfo><Column id=\"clinspeNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"respDoct\" type=\"STRING\" size=\"256\"/><Column id=\"dgnsNm\" type=\"STRING\" size=\"256\"/><Column id=\"exmntCd\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bloodgetDate\" type=\"STRING\" size=\"256\"/><Column id=\"bloodgetEmp\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"receiptCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsClinspeSequence", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsExmntCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">혈액</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">소변</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">세포</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">조직</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsClinspeNm", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">혈액</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">수액</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">흉수</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">복수</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">관절액</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">농</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">분비액</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">담</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">인두점액</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">요</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">담즙</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"data\">대변</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "1.76%", "77", null, "91", "1.68%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("patNoStatic", "absolute", "2.64%", "88", null, "28", "87.76%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("환자 검색");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "2.64%", "128", null, "28", "87.76%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("검사 항목");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("searchPatNoEd", "absolute", "12.88%", "88", null, "28", "75.92%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("searchPatNmEd", "absolute", "27.6%", "88", null, "28", "61.2%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Combo("exmntCombo", "absolute", "12.88%", "128", null, "28", "75.76%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.style.set_background("transparent");
            obj.set_innerdataset("@dsExmntCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");

            obj = new Static("bloodgetEmpStatic", "absolute", "40.72%", "88", null, "28", "49.68%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("채취자 검색");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("searchDoctNoEd", "absolute", "50.96%", "88", null, "28", "37.84%", null, this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("searchDoctNmEd", "absolute", "65.68%", "88", null, "28", "23.12%", null, this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("patNoStatic01", "absolute", "25.44%", "128", null, "28", "64.96%", null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("검체명");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("clinspeNmCombo", "absolute", "35.76%", "128", null, "28", "52.88%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.style.set_background("transparent");
            obj.set_innerdataset("@dsClinspeNm");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");

            obj = new Static("patNoStatic02", "absolute", "48.96%", "128", null, "28", "41.44%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("채취일자");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("bloodGetStartDateCal", "absolute", "59.2%", "129", null, "28", "30.08%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");

            obj = new Calendar("bloodGetEndDateCal", "absolute", "72.32%", "129", null, "28", "16.96%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");

            obj = new Static("Static02", "absolute", "70.4%", "130", null, "31", "27.44%", null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("comboResetBtn", "absolute", "83.68%", "129", null, "28", "10.56%", null, this);
            obj.set_taborder("18");
            obj.set_text("조건초기화");
            this.addChild(obj.name, obj);

            obj = new Grid("clinspeGrid", "absolute", "1.76%", "185", null, "524", "1.76%", null, this);
            obj.set_taborder("26");
            obj.set_binddataset("dsClinspe");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검체번호\"/><Cell col=\"1\" text=\"처방번호\"/><Cell col=\"2\" text=\"진료의사\"/><Cell col=\"3\" text=\"검사항목\"/><Cell col=\"4\" text=\"검체명\"/><Cell col=\"5\" text=\"채취일시\"/><Cell col=\"6\" text=\"채취자\"/><Cell col=\"7\" text=\"환자등록번호\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:clinspeNo\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:prescNo\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:respDoct\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:exmntCd\" combodataset=\"dsExmntCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:clinspeNm\" combodataset=\"dsClinspeNm\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"date\" text=\"bind:bloodgetDate\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:bloodgetEmp\"/><Cell col=\"7\" edittype=\"text\" text=\"bind:patNo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("deleteClinspeBtn", "absolute", "1027", "723", "90", "32", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchClinspeBtn", "absolute", "1138", "723", "90", "32", null, null, this);
            obj.set_taborder("29");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchClinspeBtn", "absolute", "1119", "127", "90", "32", null, null, this);
            obj.set_taborder("30");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addClinspeBtn", "absolute", "918", "723", "90", "32", null, null, this);
            obj.set_taborder("32");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchPatBtn", "absolute", "307", "86", "32", "32", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchDoctBtn", "absolute", "783", "86", "32", "32", null, null, this);
            obj.set_taborder("34");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0.48%", "8", "1670", "60", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "3.83%", "-4", null, "60", "82.63%", null, this.Div01);
            obj.getSetter("taborder").set("0");
            obj.set_text("검체채취관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 91, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1670, 60, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("35");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SL_CombineBloodGetForm");
            		p.set_titletext("검체채취관리");
            		p.style.set_border("3 solid black");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SL_CombineBloodGetForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("SL_CombineBloodGetForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SL_CombineBloodGetForm.xfdl", "scripts::Scripts.xjs");
        this.registerScript("SL_CombineBloodGetForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 검체채취 관리            												    	*
        *                                                                               *
        * @Path		    진단검사의학 - 검체채취									   		*
        *																				*
        * @Description  의사의 처방에 의해 필요한 검체를 채취하고 관리한다.				*																	*
        *																				*
        * @Author		정재욱	 						                             	*
        * 									                                            *
        * Created on 2016. 06. 13                                		                *
        *									                                            *
        ********************************************************************************/

        /********************************************************************************
          공통 Script Include                 
        *********************************************************************************/

        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonScripts.xjs";
        //include "scripts::Scripts.xjs";

        /********************************************************************************
          폼 로드 이벤트
        ********************************************************************************/
         this.SL_CombineBloodGetForm_onload = function(obj,e)
         {
         	this.gfnService("findMaxClinspeNo");
        }

        /********************************************************************************
          콜백 함수
        ********************************************************************************/
         this.clinspeCallBack = function clinspeCallBack(strSvcID,nErrorCode,strErrorMag)
         {
         	if(strSvcID == "findClinspeList"){
         		if(nErrorCode==-1)
         			alert(strErrorMag);
         		else{
         				
         		}
         	}else if(strSvcID == "batchClinspeProcess"){
         		if(nErrorCode==-1)
         			alert(strErrorMag);
         		else{
         			alert("정상처리 되었습니다.");	
         		}
         	}
         }	

        /********************************************************************************
        	검체채취 조회
        ********************************************************************************/

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
        	var argument = "bloodGetStartDate='"+bloodGetStartDate+"' bloodGetEndDate='"+bloodGetEndDate+"' exmntCd='"+this.exmntCombo.value+"' clinspeNm='"+this.clinspeNmCombo.value+"' patNo='"+this.searchPatNoEd.value+"' bloodgetEmp='"+this.searchDoctNmEd.value+"'";
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findClinspeList",false);
        	//alert(this.dsClinspe.getColCount());
        	trace(this.dsClinspe.saveXML());
        	

        }

        /********************************************************************************
        	검체채취 추가
        ********************************************************************************/

        this.addClinspeBtn_onclick = function(obj,e)
        {
        	var nRow = this.dsClinspe.addRow();
        	var maxClinspeNo = this.dsClinspeSequence.getColumn(0,"clinspeNo");
        		if(maxClinspeNo != null){
        			var newClinspeNo = nexacro.toNumber(maxClinspeNo.substr(4))+1;
        			this.dsClinspe.setColumn(nRow,"clinspeNo",maxClinspeNo.substr(0,4)+newClinspeNo.toString());
        			this.dsClinspeSequence.setColumn(0,"clinspeNo",maxClinspeNo.substr(0,4)+newClinspeNo.toString());
        		}else{
        			this.dsClinspe.setColumn(nRow,"clinspeNo","CL001");
        		}
        	 this.dsClinspe.setColumn(nRow,"receiptCd","RE000");
        	//처방전 팝업 후  의사, 환자 정보 셋팅
        	
        	this.gfnPopup("MB_PrscDtlPopupForm","med","","");
        	this.setPrscInfo = function(arrRtn){
        	     this.dsClinspe.setColumn(nRow,"prescNo",arrRtn[0]);
        	     this.dsClinspe.setColumn(nRow,"patNo",arrRtn[1]);
        	     this.dsClinspe.setColumn(nRow,"respDoct",arrRtn[2]);
        	}
        }

        /********************************************************************************
        	검체채취 삭제
        ********************************************************************************/

        this.deleteClinspeBtn_onclick = function(obj,e)
        {
        	var receiptCd = this.dsClinspe.getColumn(this.dsClinspe.rowposition,"receiptCd");
        	if(receiptCd == "RE001"){
        		alert("검수처리중인 검체는 삭제할 수 없습니다.");
        	}else if(receiptCd == "RE000" || receiptCd == null){
        		this.dsClinspe.deleteRow(this.dsClinspe.rowposition);
        	}
        }

        /********************************************************************************
        	검체채취 저장
        ********************************************************************************/

        this.batchClinspeBtn_onclick = function(obj,e)
        {
        	var flag = 0;
        	
        	for(var i=0; i<this.dsClinspe.rowcount; i++){
        		var bloodgetDate = this.dsClinspe.getColumn(i,"bloodgetDate");
        		var clinspeNm = this.dsClinspe.getColumn(i,"clinspeNm");

        		if(clinspeNm == null || bloodgetDate == null ){
        			flag = 1;
        			break;
        		}
        	}
        	if(flag == 1){
        		alert("검체명 및 채취일시를 입력하시오.");
        	}else{
        		this.gfnService("batchClinspeProcess");
        	}
        	
        	
        }

        /********************************************************************************
        	환자검색 이벤트
        ********************************************************************************/

        this.searchPatBtn_onclick = function(obj,e)
        {	
        	this.gfnPopup("WS_PatPopupForm","won","","");
        		this.setPatInfo= function(arrRtn){ 
        		this.searchPatNoEd.set_value(arrRtn[0]);  	
        		this.searchPatNmEd.set_value(arrRtn[1]);  
        	}
        }

        /********************************************************************************
        	채취자검색 이벤트
        ********************************************************************************/

        this.searchDoctBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("CM_DoctPopupForm","com","","");

        		this.setDoct= function(arr){ 
        		this.searchDoctNoEd.set_value(arr[0]); 
        		this.searchDoctNmEd.set_value(arr[1]);  
        	}
        }

        /********************************************************************************
        	조건초기화 
        ********************************************************************************/

        this.comboResetBtn_onclick = function(obj,e)
        {
        	this.searchPatNoEd.set_value(null);
        	this.searchPatNmEd.set_value(null);
        	this.searchDoctNoEd.set_value(null);
        	this.searchDoctNmEd.set_value(null);
        	this.exmntCombo.set_value(null);
        	this.clinspeNmCombo.set_value(null);
        	this.bloodGetStartDateCal.set_value(null);
        	this.bloodGetEndDateCal.set_value(null);
        }

        /********************************************************************************
        	Grid 이벤트
        ********************************************************************************/

        this.clinspeGrid_oncelldblclick = function(obj,e)
        {
        	if(e.cell == 6 ){
        		this.gfnPopup("HM_EmpSearchPopup","hrs","","");
        		this.setEmpInfo = function(hrs,arrRtn){ 
        			this.dsClinspe.setColumn(this.dsClinspe.rowposition,"bloodgetEmp",arrRtn[1]);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SL_CombineBloodGetForm_onload, this);
            this.comboResetBtn.addEventHandler("onclick", this.comboResetBtn_onclick, this);
            this.clinspeGrid.addEventHandler("oncelldblclick", this.clinspeGrid_oncelldblclick, this);
            this.deleteClinspeBtn.addEventHandler("onclick", this.deleteClinspeBtn_onclick, this);
            this.batchClinspeBtn.addEventHandler("onclick", this.batchClinspeBtn_onclick, this);
            this.searchClinspeBtn.addEventHandler("onclick", this.searchClinspeBtn_onclick, this);
            this.addClinspeBtn.addEventHandler("onclick", this.addClinspeBtn_onclick, this);
            this.searchPatBtn.addEventHandler("onclick", this.searchPatBtn_onclick, this);
            this.searchDoctBtn.addEventHandler("onclick", this.searchDoctBtn_onclick, this);

        };

        this.loadIncludeScript("SL_CombineBloodGetForm.xfdl");

       
    };
}
)();

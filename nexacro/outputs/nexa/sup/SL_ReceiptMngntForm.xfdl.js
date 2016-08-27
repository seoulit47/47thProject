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
                this.set_name("SL_receiptMngnt");
                this.set_classname("SL_receiptMngnt");
                this.set_titletext("검체접수관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1267,828);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExmntCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">혈액</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">소변</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">세포</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">조직</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findClinspeReceiptList</Col><Col id=\"inData\"/><Col id=\"URL\">his::sup/laboratoryMedicine/findClinspeReceiptList.do</Col><Col id=\"callbackFunc\"/><Col id=\"outData\">dsClinspeReceipt=dsClinspeReceipt</Col></Row><Row><Col id=\"serviceID\">batchClinspeReceiptProcess</Col><Col id=\"URL\">his::sup/laboratoryMedicine/batchClinspeReceiptProcess.do</Col><Col id=\"inData\">dsClinspeReceipt=dsClinspeReceipt:U</Col><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsClinspeNm", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">혈액</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">수액</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">흉수</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">복수</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">관절액</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">농</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">분비액</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">담</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">인두점액</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">요</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">담즙</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"data\">대변</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReceiptCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">RE000</Col><Col id=\"data\">접수</Col></Row><Row><Col id=\"code\">RE001</Col><Col id=\"data\">검사중</Col></Row><Row><Col id=\"code\">RE002</Col><Col id=\"data\">접수취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmeYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">비응급</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">응급</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsClinspeReceipt", this);
            obj._setContents("<ColumnInfo><Column id=\"clinspeNo\" type=\"STRING\" size=\"256\"/><Column id=\"dgnsNm\" type=\"STRING\" size=\"256\"/><Column id=\"exmntCd\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bloodgetDate\" type=\"STRING\" size=\"256\"/><Column id=\"bloodgetEmp\" type=\"STRING\" size=\"256\"/><Column id=\"receiptCd\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeReceiptDate\" type=\"STRING\" size=\"256\"/><Column id=\"emeYn\" type=\"STRING\" size=\"256\"/><Column id=\"receiptCancelCau\" type=\"STRING\" size=\"256\"/><Column id=\"receiptCancelDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHroomCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">일반</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">신생아</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">응급</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">격리</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">중환자</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">무균실</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsWardCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">41병동</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">51병동</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">52병동</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">61병동</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">62병동</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">71병동</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">72병동</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">81병동</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">중환자실</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsClinspeSequence", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.49%", "8", "1670", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "3.35%", "-4", null, "60", "83.59%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("검체접수관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "1.5%", "75", null, "27", "90.13%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("접수일자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("clinspeReceiptStartDateCal", "absolute", "10.73%", "73", "130", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Static("Static00", "absolute", "22.26%", "80", null, "19", "76.8%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 11 arial");
            this.addChild(obj.name, obj);

            obj = new Calendar("clinspeReceiptEndDateCal", "absolute", "24.15%", "73", "130", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Static("subCodeStc00", "absolute", "38.2%", "73", null, "27", "53.43%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("응급여부");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("emeYnCombo", "absolute", "47.04%", "72", "100", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@dsEmeYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Static("subCodeStc01", "absolute", "57.38%", "73", null, "27", "34.33%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("접수상태");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("receiptCombo", "absolute", "66.14%", "72", "100", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("@dsReceiptCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Button("comboResetBtn", "absolute", "75.53%", "73", "76", "26", null, null, this);
            obj.set_taborder("10");
            obj.set_text("조건초기화");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchFixedAssetMovBtn", "absolute", "1158", "72", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("clinspeReceiptGrid", "absolute", "1.03%", "112", null, "634", "1.18%", null, this);
            obj.set_taborder("12");
            obj.set_binddataset("dsClinspeReceipt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검체번호\"/><Cell col=\"1\" text=\"검사항목\"/><Cell col=\"2\" text=\"검체명\"/><Cell col=\"3\" text=\"채취일시\"/><Cell col=\"4\" text=\"채취자\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"응급여부\"/><Cell col=\"6\" text=\"검체접수일\"/><Cell col=\"7\" text=\"접수구분\"/><Cell col=\"8\" text=\"접수 취소사유\"/><Cell col=\"9\" text=\"접수 취소일\"/></Band><Band id=\"body\"><Cell text=\"bind:clinspeNo\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:exmntCd\" combodataset=\"dsExmntCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:clinspeNm\" combodataset=\"dsClinspeNm\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:bloodgetDate\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:bloodgetEmp\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:emeYn\" combodataset=\"dsEmeYn\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:clinspeReceiptDate\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:receiptCd\" combodataset=\"dsReceiptCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:receiptCancelCau\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"none\" text=\"bind:receiptCancelDate\" calendardisplaynulltype=\"none\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검체번호\"/><Cell col=\"1\" text=\"검사항목\"/><Cell col=\"2\" text=\"검체명\"/><Cell col=\"3\" text=\"채취일시\"/><Cell col=\"4\" text=\"채취자\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"응급여부\"/><Cell col=\"6\" text=\"검체접수일\"/><Cell col=\"7\" text=\"접수구분\"/><Cell col=\"8\" text=\"접수 취소사유\"/><Cell col=\"9\" text=\"접수 취소일\"/></Band><Band id=\"body\"><Cell text=\"bind:clinspeNo\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:exmntCd\" combodataset=\"dsExmntCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:clinspeNm\" combodataset=\"dsClinspeNm\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:bloodgetDate\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:bloodgetEmp\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:emeYn\" combodataset=\"dsEmeYn\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:clinspeReceiptDate\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"none\" text=\"bind:receiptCd\" combodataset=\"dsReceiptCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:receiptCancelCau\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"none\" text=\"bind:receiptCancelDate\" calendardisplaynulltype=\"none\"/></Band></Format><Format id=\"cancel\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검체번호\"/><Cell col=\"1\" text=\"검사항목\"/><Cell col=\"2\" text=\"검체명\"/><Cell col=\"3\" text=\"채취일시\"/><Cell col=\"4\" text=\"채취자\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"응급여부\"/><Cell col=\"6\" text=\"검체접수일\"/><Cell col=\"7\" text=\"접수구분\"/><Cell col=\"8\" text=\"접수 취소사유\"/><Cell col=\"9\" text=\"접수 취소일\"/></Band><Band id=\"body\"><Cell text=\"bind:clinspeNo\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:exmntCd\" combodataset=\"dsExmntCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:clinspeNm\" combodataset=\"dsClinspeNm\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:bloodgetDate\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:bloodgetEmp\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:emeYn\" combodataset=\"dsEmeYn\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:clinspeReceiptDate\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:receiptCd\" combodataset=\"dsReceiptCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:receiptCancelCau\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"date\" text=\"bind:receiptCancelDate\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("batchClinspeReceiptBtn", "absolute", "1162", "760", "90", "32", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addClinspeReceiptBtn", "absolute", "954", "761", "90", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deleteClinspeReceiptBtn", "absolute", "1058", "760", "90", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1670, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1267, 828, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SL_receiptMngnt");
            		p.set_titletext("검체접수관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SL_ReceiptMngntForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("SL_ReceiptMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SL_ReceiptMngntForm.xfdl", "scripts::Scripts.xjs");
        this.registerScript("SL_ReceiptMngntForm.xfdl", function() {
         /********************************************************************************
        *                                                                               *
        * 검체접수             												        	*
        *                                                                               *
        * @Path		    진단검사의학 - 검체접수									    	*
        * @Description  검체의 정밀검사를 위해 병리과로 접수 또는 취소한다.       		*
        * 																				*
        *																				*
        * @Author		정재욱	 						                             	*
        * 									                                            *
        * Created on 2016. 6. 17                             		                    *
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

        this.SLreceiptMngnt_onload = function(obj,e)
        {
        	
        }

        
        /********************************************************************************
          콜백 함수
        ********************************************************************************/
        this.clinspeReceiptCallBack = function clinspeReceiptCallBack(strSvcID,nErrorCode,strErrorMag)
        {
        	if(strSvcID == "findClinspeReceiptList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        				
        		}
        	}else if(strSvcID == "batchClinspeReceiptProcess"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			alert("정상처리 되었습니다.");	
        		}
        	}
        }
        	
        /********************************************************************************
          버튼 클릭 이벤트
        ********************************************************************************/

        /********************************************************************************
          조건초기화 이벤트
        ********************************************************************************/

        this.comboResetBtn_onclick = function(obj,e)
        {
        	this.clinspeReceiptStartDateCal.set_value(null);
        	this.clinspeReceiptEndDateCal.set_value(null);
        	this.emeYnCombo.set_value(null);
        	this.receiptCombo.set_value(null);
        }

        /********************************************************************************
          검체접수 조회
        ********************************************************************************/

        this.searchFixedAssetMovBtn_onclick = function(obj,e)
        {
        	var receiptStartDate = "19000101";
        	var receiptEndDate = "21000101";

        	if(this.clinspeReceiptStartDateCal.value != null){
        		receiptStartDate = this.clinspeReceiptStartDateCal.value;
        	}
        	if(this.clinspeReceiptEndDateCal.value != null){
        		receiptEndDate = this.clinspeReceiptEndDateCal.value;
        	}

        	var argument = "receiptStartDate='"+receiptStartDate+"' receiptEndDate='"+receiptEndDate+"' emeYn='"+this.emeYnCombo.value+"' receiptCd='"+this.receiptCombo.value+"'";
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findClinspeReceiptList");
        }

        /********************************************************************************
          검체접수 추가
        ********************************************************************************/

        this.addClinspeReceiptBtn_onclick = function(obj,e)
        {
        	this.nRow = this.dsClinspeReceipt.addRow();
        	//this.gfnPopup("SL_CombineBloodGetPopupForm","sup","","");
        	application.open("combineBloodGetPopup","sup::SL_CombineBloodGetPopupForm.xfdl",this.parent,{parentReason:'searchClinspe'},"showtitlebar=true showstatusbar=false",0,0,780,550);
        }

        /********************************************************************************
          검체접수 삭제
        ********************************************************************************/

        this.deleteClinspeReceiptBtn_onclick = function(obj,e)
        {
             var receiptCd = this.dsClinspeReceipt.getColumn(this.dsClinspeReceipt.rowposition,"receiptCd");
             if(receiptCd == "RE001"){
        		alert("검사중인 접수정보는 삭제할 수 없습니다.");
             }else{
        		this.dsClinspeReceipt.deleteRow(this.dsClinspeReceipt.rowposition);
             }
        }

        /********************************************************************************
          검체접수 일괄처리
        ********************************************************************************/

        this.batchClinspeReceiptBtn_onclick = function(obj,e)
        {
        	var flag = 0;
        		
        	for(var i=0; i<this.dsClinspeReceipt.rowcount; i++){
        		var clinspeReceiptDate = this.dsClinspeReceipt.getColumn(i,"clinspeReceiptDate");
        		var emeYn = this.dsClinspeReceipt.getColumn(i,"emeYn");
        		var receiptCd = this.dsClinspeReceipt.getColumn(i,"receiptCd");
        		var receiptCancelCau = this.dsClinspeReceipt.getColumn(i,"receiptCancelCau");
        		var receiptCancelDate = this.dsClinspeReceipt.getColumn(i,"receiptCancelDate");

        		if(clinspeReceiptDate == null || emeYn == null ){
        			flag = 1;
        			break;
        		}
        		
        		if(receiptCd == "RE002"){
        			if(receiptCancelCau == null || receiptCancelDate == null){
        				flag = 2;
        				break;
        			}
        		}
        	}
        	
        	if(flag == 1){
        		alert("검체접수일 및 응급여부를 입력하시오.");
        	}else if(flag == 2){
        		alert("접수취소 사유 및 일자를 입력하시오.");
        	}else{
        		this.gfnService("batchClinspeReceiptProcess");
        	}

        }

        /********************************************************************************
          그리드 클릭 이벤트
        ********************************************************************************/

        this.clinspeReceiptGrid_oncellclick = function(obj,e)
        {
        		var selectRow = this.dsClinspeReceipt.getRowType(e.row);
        		if(selectRow == 2){
        			this.clinspeReceiptGrid.set_formatid("insert");
        		}else{
        			var receiptCd = this.dsClinspeReceipt.getColumn(e.row,"receiptCd");
        			
        			if(receiptCd == "RE002"){
        					this.clinspeReceiptGrid.set_formatid("cancel");
        			}else{
        					this.clinspeReceiptGrid.set_formatid("default");
        			}
        		}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.comboResetBtn.addEventHandler("onclick", this.comboResetBtn_onclick, this);
            this.searchFixedAssetMovBtn.addEventHandler("onclick", this.searchFixedAssetMovBtn_onclick, this);
            this.clinspeReceiptGrid.addEventHandler("oncellclick", this.clinspeReceiptGrid_oncellclick, this);
            this.batchClinspeReceiptBtn.addEventHandler("onclick", this.batchClinspeReceiptBtn_onclick, this);
            this.addClinspeReceiptBtn.addEventHandler("onclick", this.addClinspeReceiptBtn_onclick, this);
            this.deleteClinspeReceiptBtn.addEventHandler("onclick", this.deleteClinspeReceiptBtn_onclick, this);

        };

        this.loadIncludeScript("SL_ReceiptMngntForm.xfdl");

       
    };
}
)();

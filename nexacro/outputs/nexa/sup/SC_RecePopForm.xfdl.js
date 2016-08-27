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
                this.set_name("SC_RecePopForm");
                this.set_classname("SC_RecePopForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,689,660);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findReceList</Col><Col id=\"URL\">his::sup/checkup/findReceList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dlRece=dsRece</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">supCallBackFunc</Col></Row><Row><Col id=\"serviceID\">cancelRece</Col><Col id=\"URL\">his::sup/checkup/cancelRece.do</Col><Col id=\"callbackFunc\">supCallBackFunc</Col><Col id=\"inData\">dsRece=dsRece:U</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dlRece", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"receDate\" type=\"STRING\" size=\"256\"/><Column id=\"payAmt\" type=\"STRING\" size=\"256\"/><Column id=\"cardCashDiv\" type=\"STRING\" size=\"256\"/><Column id=\"aprvNo\" type=\"STRING\" size=\"256\"/><Column id=\"valPrid\" type=\"STRING\" size=\"256\"/><Column id=\"instmPrid\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">SC006</Col><Col id=\"dsName\">dsCardCashDivCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCardCashDivCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRece", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtDate\" type=\"STRING\" size=\"256\"/><Column id=\"receDate\" type=\"STRING\" size=\"256\"/><Column id=\"befReceAmt\" type=\"STRING\" size=\"256\"/><Column id=\"payAmt\" type=\"STRING\" size=\"256\"/><Column id=\"cardCashDiv\" type=\"STRING\" size=\"256\"/><Column id=\"aprvNo\" type=\"STRING\" size=\"256\"/><Column id=\"inspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"choInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"reducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"inspDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvDate\" type=\"STRING\" size=\"256\"/><Column id=\"cardCd\" type=\"STRING\" size=\"256\"/><Column id=\"cardNo\" type=\"STRING\" size=\"256\"/><Column id=\"valPrid\" type=\"STRING\" size=\"256\"/><Column id=\"instmPrid\" type=\"STRING\" size=\"256\"/><Column id=\"cashAprvData\" type=\"STRING\" size=\"256\"/><Column id=\"cashAprvDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"cancelYn\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", "674", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "7.4%", "-2", null, "60", "22.06%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("종합검진 진료비 수납");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("receGrid", "absolute", "28", "353", "636", "226", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dlRece");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"83\"/><Column size=\"59\"/><Column size=\"191\"/><Column size=\"75\"/><Column size=\"58\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"7\" text=\"수납내역\"/><Cell row=\"1\" text=\"수납일자\"/><Cell row=\"1\" col=\"1\" text=\"결제금액\"/><Cell row=\"1\" col=\"2\" text=\"지불구분\"/><Cell row=\"1\" col=\"3\" text=\"승인번호\"/><Cell row=\"1\" col=\"4\" text=\"유효기간\"/><Cell row=\"1\" col=\"5\" text=\"할부\"/><Cell row=\"1\" col=\"6\"/></Band><Band id=\"body\"><Cell text=\"bind:receDate\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:payAmt\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:cardCashDiv\" combodataset=\"dsCardCashDivCd\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" text=\"bind:aprvNo\"/><Cell col=\"4\" text=\"bind:valPrid\"/><Cell col=\"5\" text=\"bind:instmPrid\"/><Cell col=\"6\" text=\"bind:userId\"/></Band><Band id=\"summary\"><Cell text=\"합  계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" expr=\"expr:dataset.getSum(&quot;payAmt*1&quot;)\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "4.35%", "66", null, "277", "3.63%", null, this);
            obj.set_taborder("7");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "30", "80", "631", "252", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation");
            obj.style.set_border("0 solid #9f9f9fb3");
            this.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "3.96%", "199", "99", "30", null, null, this.compBox);
            obj.set_taborder("204");
            obj.set_text("총금액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "3.96%", "153", "99", "30", null, null, this.compBox);
            obj.set_taborder("205");
            obj.set_text("선택금액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "3.96%", "107", "99", "30", null, null, this.compBox);
            obj.set_taborder("206");
            obj.set_text("감면금액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "3.96%", "61", "99", "30", null, null, this.compBox);
            obj.set_taborder("207");
            obj.set_text("기본금액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "3.96%", "15", "99", "30", null, null, this.compBox);
            obj.set_taborder("208");
            obj.set_text("수납일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "52.14%", "15", "99", "30", null, null, this.compBox);
            obj.set_taborder("209");
            obj.set_text("예약일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "52.14%", "61", "99", "30", null, null, this.compBox);
            obj.set_taborder("210");
            obj.set_text("검진일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "52.14%", "107", "99", "30", null, null, this.compBox);
            obj.set_taborder("211");
            obj.set_text("예약금액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div10", "absolute", "52.14%", "153", "99", "30", null, null, this.compBox);
            obj.set_taborder("212");
            obj.set_text("이전수납액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div12", "absolute", "52.14%", "199", "99", "30", null, null, this.compBox);
            obj.set_taborder("214");
            obj.set_text("수납할금액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("basicInspAmtMask", "absolute", "21.24%", "61", null, "30", "52.93%", null, this.compBox);
            obj.set_taborder("215");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("reducAmtMask", "absolute", "21.24%", "107", null, "30", "52.93%", null, this.compBox);
            obj.set_taborder("216");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("choInspAmtMask", "absolute", "21.24%", "153", null, "30", "52.93%", null, this.compBox);
            obj.set_taborder("217");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("inspSumAmtMask", "absolute", "21.24%", "199", null, "30", "52.93%", null, this.compBox);
            obj.set_taborder("218");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("refReceAmtMask", "absolute", "69.26%", "153", null, "30", "5.07%", null, this.compBox);
            obj.set_taborder("219");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("payAmtMask", "absolute", "69.26%", "199", null, "30", "5.07%", null, this.compBox);
            obj.set_taborder("220");
            obj.set_mask("###,###");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("rsvtAmtMask", "absolute", "69.26%", "107", null, "30", "5.07%", null, this.compBox);
            obj.set_taborder("222");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rsvtDateEd", "absolute", "69.26%", "15", null, "30", "5.07%", null, this.compBox);
            obj.set_taborder("223");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.compBox.addChild(obj.name, obj);
            obj = new Calendar("inspPlnDateCal", "absolute", "21.24%", "15", null, "30", "52.93%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("225");
            obj.set_readonly("true");
            obj = new MaskEdit("inspDateEd", "absolute", "69.41%", "61", null, "30", "5.23%", null, this.compBox);
            obj.set_taborder("227");
            obj.set_enable("false");
            obj.set_mask("####-##-##");
            obj.set_type("string");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.compBox.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "572", "592", "90", "32", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("cardPayBtn", "absolute", "28", "592", "110", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::cardBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("cashPayBtn", "absolute", "145", "592", "110", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::cashBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 76, 30, this.compBox.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("209");
            		p.set_text("예약일자");
            		p.style.set_background("wheat");
            		p.style.set_color("black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("10 다음_Regular");

            	}
            );
            this.compBox.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 660, 266, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.style.set_background("@gradation");
            		p.style.set_border("0 solid #9f9f9fb3");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 689, 660, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SC_RecePopForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","compBox.rsvtDateEd","value","dsRece","rsvtDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","compBox.rsvtAmtMask","value","dsRece","rsvtAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","compBox.refReceAmtMask","value","dsRece","befReceAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","compBox.inspSumAmtMask","value","dsRece","inspSumAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","compBox.choInspAmtMask","value","dsRece","choInspAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","compBox.reducAmtMask","value","dsRece","reducAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","compBox.basicInspAmtMask","value","dsRece","basicInspAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","compBox.inspDateEd","value","dsRece","inspDate");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SC_RecePopForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SC_RecePopForm.xfdl", "scripts::supScripts.xjs");
        this.registerScript("SC_RecePopForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 종합검진 수납 																*
        *                                                                               *
        * @Path		    종합검진 - 종합검진관리 - 예약 / 접수 - 수납			  		*
        * @Description 	종합검진 수납관리 						  	    				*
        * 																				*
        *																				*
        * @Author	  한수정   						                                *
        * 									                                            *
        * Created on 2016. 05. 31.                             		                    *
        *									                                            *
        ********************************************************************************/

        
        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 
        //include "scripts::supScripts.xjs";

        // 화면변수
        var rsvtNo;
        var param;

        
        // 화면 로드
        this.SC_RecePopForm_onload = function(obj,e)
        {

        	this.compBox.inspPlnDateCal.set_value(this.gfnDate("yyyymmdd"));
        	this.dsRece.copyData(this.parent.dsRece);
        	rsvtNo = this.dsRece.getColumn(0, "rsvtNo");

        	this.gfnBind();
        	
        	var argument = 'rsvtNo='+rsvtNo;
        	var row = this.dsService.findRow('serviceID' , "findReceList");
        	this.dsService.setColumn(row, "argument", argument);
        	
        	this.gfnService("findReceList",false);
        	this.setBefReceAmt();
        }

        this.setBefReceAmt=function()
        {
        	var count = this.dlRece.rowcount;

        	var befEeceAmt=0;
        	for(i=0; i<count; i++){
        		befEeceAmt = parseInt(befEeceAmt) + parseInt(this.dlRece.getColumn(i,"payAmt"));
        	}

        	this.dsRece.setColumn(0,"befReceAmt",befEeceAmt);

        	var payAmt = parseInt(this.dsRece.getColumn(0,"inspSumAmt")) - befEeceAmt;

        	this.compBox.payAmtMask.set_value(payAmt);
        }

        
        //	카드결제
        this.cardPayBtn_onclick=function(obj,e)
        {
        	if(!this.gfnIsNull(this.compBox.payAmtMask.value))
        	{
        		if(this.compBox.payAmtMask.value=='0'){
        			alert("수납이 이미 완료되었습니다.");
        			return;
        		}else{
        			this.dsRece.setColumn(0,"cardCashDiv", "1");
        			this.dsRece.setColumn(0, "receDate", this.compBox.inspPlnDateCal.value);
        			
        			var payAmt = this.compBox.payAmtMask.value;
        			var param = { param : this.dsRece, payAmt : payAmt };
        		
        			this.gfnPopup("SC_CardPayPopForm","sup",param,"");
        		}
        	}	
        }

        
        //	현금결제					
        this.cashPayBtn_onclick=function(obj,e)
        {	
        	if(!this.gfnIsNull(this.compBox.payAmtMask.value))
        	{
        		if(this.compBox.payAmtMask.value=='0'){
        			alert("수납이 이미 완료되었습니다.");
        			return;
        		}else{
        			this.dsRece.setColumn(0, "cardCashDiv", "0");
        			this.dsRece.setColumn(0, "receDate", this.compBox.inspPlnDateCal.value);

        			var payAmt = this.compBox.payAmtMask.value;
        			var param = { param : this.dsRece, payAmt : payAmt };
        			this.gfnPopup("SC_CashPayPopForm","sup", param, "");
        		}
        	}
        }

        this.checkSc=function(retVal)
        {
        	if(retVal == 1)
        		{	
        			this.opener.payCo(1);
        			
        			this.SC_RecePopForm_onload(null,null);
        		}
        }

        
        //	결제취소
        this.cancelBtn_onclick=function(obj,e)
        {
        	var aprvNo = this.dlRece.getColumn(this.dlRece.rowposition, "aprvNo");
        	var bool = application.confirm("승인번호 ["+aprvNo+"] 결제건을 취소하겠습니까?");
        	if(bool)
        	{
        		this.dlRece.setColumn(this.dlRece.rowposition, "cancelYn",'Y');
        		this.dlRece.setColumn(this.dlRece.rowposition, "rsvtNo", rsvtNo);

        		this.fn_setUserData(this.dlRece);	
        		
        		this.gfnService("cancelRece");
        		this.reload();

        	}else{
        		return;
        	}
        }

        
        //	닫기
        this.closeBtn_onclick=function(obj,e)
        {
        	this.close();
        }

        
        // 콜백함수
        this.callBackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {

         	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SC_RecePopForm_onload, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.compBox.inspPlnDateCal.addEventHandler("ondrop", this.compBox_inspPlnDateCal_ondrop, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);
            this.cardPayBtn.addEventHandler("onclick", this.cardPayBtn_onclick, this);
            this.cashPayBtn.addEventHandler("onclick", this.cashPayBtn_onclick, this);

        };

        this.loadIncludeScript("SC_RecePopForm.xfdl");

       
    };
}
)();

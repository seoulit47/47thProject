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
                this.set_name("SC_CardPayPopForm");
                this.set_classname("SC_ocsPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,528,387);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA012</Col><Col id=\"dsName\">dsCardCd</Col></Row></Rows>");
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

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/><Column id=\"msg\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">registerRece</Col><Col id=\"URL\">his::sup/checkup/registerRece.do</Col><Col id=\"inData\">dsRece=dsRece</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"msg\"/><Col id=\"callbackFunc\"/><Col id=\"callbackFunc2\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCardCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "5.3%", "66", null, "254", "5.49%", null, this);
            obj.set_taborder("10");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "0%", "0", "511", "60", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10.8%", "-2", null, "60", "28.41%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("카드승인 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Button("aprvBtn", "absolute", "173", "331", "110", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::askBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("resetBtn", "absolute", "296", "331", "102", "32", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::resetBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "411", "331", "90", "32", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "5.68%", "75", null, "239", "7.2%", null, this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "2.41%", "10", "99", "30", null, null, this.compBox);
            obj.set_taborder("13");
            obj.set_text("카드구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "2.41%", "56", "99", "30", null, null, this.compBox);
            obj.set_taborder("14");
            obj.set_text("카드번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "2.41%", "102", "99", "30", null, null, this.compBox);
            obj.set_taborder("15");
            obj.set_text("잔     액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "2.41%", "148", "99", "30", null, null, this.compBox);
            obj.set_taborder("16");
            obj.set_text("결제금액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "2.41%", "194", "99", "30", null, null, this.compBox);
            obj.set_taborder("17");
            obj.set_text("할     부");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div12", "absolute", "46.48%", "194", "99", "30", null, null, this.compBox);
            obj.set_taborder("18");
            obj.set_text("유효기간");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Combo("cardCdCombo", "absolute", "26.96%", "10", null, "30", "49.5%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_innerdataset("@dsCardCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("compCheck").set("EsCombo");
            obj.style.set_align("center middle");
            obj = new MaskEdit("cardNoMask", "absolute", "26.96%", "56", null, "30", "1.41%", null, this.compBox);
            obj.set_taborder("20");
            obj.set_type("string");
            obj.set_mask("####-####-####-####");
            obj.getSetter("compCheck").set("EsMaskEd");
            obj.style.set_align("center middle");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("payBalMask", "absolute", "26.96%", "102", null, "30", "1.41%", null, this.compBox);
            obj.set_taborder("21");
            obj.set_mask("###,###");
            obj.style.set_align("center middle");
            obj.set_enable("false");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("payAmtMask", "absolute", "26.96%", "148", null, "30", "1.41%", null, this.compBox);
            obj.set_taborder("22");
            obj.set_mask("###,###");
            obj.set_autoselect("true");
            obj.getSetter("compCheck").set("EsMaskEd");
            obj.style.set_align("center middle");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("valPridMask", "absolute", "70.82%", "194", null, "30", "1.41%", null, this.compBox);
            obj.set_taborder("23");
            obj.set_type("string");
            obj.set_mask("##/##");
            obj.getSetter("compCheck").set("EsMaskEd");
            obj.style.set_align("center middle");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("instmPridEd", "absolute", "26.96%", "194", null, "30", "62.98%", null, this.compBox);
            obj.set_taborder("24");
            obj.style.set_align("center middle");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "38.23%", "194", null, "31", "53.92%", null, this.compBox);
            obj.getSetter("taborder").set("25");
            obj.set_text("개월");
            this.compBox.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 254, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 239, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 528, 387, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SC_ocsPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","compBox.payAmtMask","value","dsRece","payAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","compBox.cardNoMask","value","dsRece","cardCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","compBox.instmPridEd","value","dsRece","instmPrid");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","compBox.valPridMask","value","dsRece","valPrid");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SC_CardPayPopForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SC_CardPayPopForm.xfdl", "scripts::supScripts.xjs");
        this.registerScript("SC_CardPayPopForm.xfdl", function() {

        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 
        //include "scripts::supScripts.xjs";

        //	화면 로드
        this.SC_CardPayPopForm_onload = function(obj,e)
        {
        	this.gfnBind();
        	
        	this.dsRece.copyData(this.parent.param);

        	this.compBox.payBalMask.set_value(this.parent.payAmt);	
        }

        // 초기화 버튼

        this.resetBtn_onclick = function(obj,e)
        {
        	this.compBox.cardCdCombo.set_value("");
        	this.compBox.cardNoMask.set_value("");
        	this.compBox.payAmtMask.set_value("");
        	this.compBox.instmPridEd.set_value("");
        	this.compBox.valPridMask.set_value("");
        }

        // 승인요청 버튼

        this.aprvBtn_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.compBox.cardCdCombo.value))
        	{
        		alert("카드구분을 선택하세요");
        		return;
        	}
        	if(this.gfnIsNull(this.compBox.cardNoMask.value))
        	{
        		
        		alert("카드번호를 입력하세요");
        		return;
        	}
        	
        	if(this.gfnIsNull(this.compBox.payAmtMask.value))
        	{
        		alert("결제금액을 입력하세요");
        		return;
        	}

        	if(this.gfnIsNull(this.compBox.payAmtMask.value))
        	{
        		alert("카드의 유효기간을 입력하세요");
        		return;
        	}	
        	
        	if(this.gfnIsNull(this.compBox.payAmtMask.value))
        	{
        		alert("카드할부를 입력하세요");
        		return;
        	}
        	
        	if(parseInt(this.compBox.payBalMask.value) < parseInt(this.compBox.payAmtMask.value)){
        		alert("승인금액이 승인잔액보다 초과합니다.");
        		return;
        	}
        	
        	trace(this.dsRece.saveXML());
        	this.gfnService("registerRece");
        	this.opener.checkSc(1);
        	
        	this.close();
        }

        
        // 취소버튼
        this.closeBtn_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SC_CardPayPopForm_onload, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.aprvBtn.addEventHandler("onclick", this.aprvBtn_onclick, this);
            this.resetBtn.addEventHandler("onclick", this.resetBtn_onclick, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);

        };

        this.loadIncludeScript("SC_CardPayPopForm.xfdl");

       
    };
}
)();

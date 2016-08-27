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
                this.set_name("SC_RsltMgtForm");
                this.set_classname("SC_RsltMgtForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPckInsp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsChoInsp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findReceiptList</Col><Col id=\"URL\">his::sup/checkup/findReceiptList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsRsvt=dsReceipt</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">supCallBackFunc</Col></Row><Row><Col id=\"serviceID\">findRsltList</Col><Col id=\"URL\">his::sup/checkup/findRsltList.do</Col><Col id=\"outData\">dsRslt=dsRslt</Col><Col id=\"callbackFunc\"/><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">registerRslt</Col><Col id=\"URL\">his::sup/checkup/registerRslt.do</Col><Col id=\"inData\">dsRslt=dsRslt:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">supCallBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRsvt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtDate\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtTime\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnTime\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"sms\" type=\"STRING\" size=\"256\"/><Column id=\"aplMan\" type=\"STRING\" size=\"256\"/><Column id=\"aplManTel\" type=\"STRING\" size=\"256\"/><Column id=\"rship\" type=\"STRING\" size=\"256\"/><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"pckNm\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"reducCd\" type=\"STRING\" size=\"256\"/><Column id=\"reducNm\" type=\"STRING\" size=\"256\"/><Column id=\"reducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"payMan\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtResp\" type=\"STRING\" size=\"256\"/><Column id=\"memo\" type=\"STRING\" size=\"256\"/><Column id=\"cancelYn\" type=\"STRING\" size=\"256\"/><Column id=\"choInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"inspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRslt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlInspCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlInspNm\" type=\"STRING\" size=\"256\"/><Column id=\"inspRslt\" type=\"STRING\" size=\"256\"/><Column id=\"ocsDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"refLowFig\" type=\"STRING\" size=\"256\"/><Column id=\"refHighFig\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "1250", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "5.12%", "-3", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("종합검진 결과 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "2.24%", "72", null, "30", "90.4%", null, this);
            obj.set_taborder("2");
            obj.set_text("검진자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "10.08%", "72", null, "30", "82.72%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd", "absolute", "17.76%", "72", null, "30", "69.28%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Grid("receiptGrid", "absolute", "27", "159", "465", "539", null, null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsRsvt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"33\"/><Column size=\"34\"/><Column size=\"142\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검진일자\"/><Cell col=\"1\" text=\"등록번호\"/><Cell col=\"2\" text=\"환자명\"/><Cell col=\"3\" text=\"나이\"/><Cell col=\"4\" text=\"성별\"/><Cell col=\"5\" text=\"패키지\"/></Band><Band id=\"body\"><Cell text=\"bind:inspPlnDate\"/><Cell col=\"1\" text=\"bind:patNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" text=\"bind:age\"/><Cell col=\"4\" text=\"bind:gender\"/><Cell col=\"5\" text=\"bind:pckNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "2.24%", "112", null, "30", "90.4%", null, this);
            obj.set_taborder("8");
            obj.set_text("검진예정일");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Calendar("inspPlnDateCal", "absolute", "10.08%", "112", null, "30", "75.12%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Button("searchBtn", "absolute", "402", "111", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);

            obj = new Tab("rsltTab", "absolute", "40%", "72", null, "626", "2.24%", null, this);
            obj.set_taborder("11");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tpgHOM", this.rsltTab);
            obj.set_text("기본검사");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Tabpage("tpgNMR", this.rsltTab);
            obj.set_text("핵체외");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Tabpage("tpgMAT", this.rsltTab);
            obj.set_text("산모진찰");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Tabpage("tpgCPL", this.rsltTab);
            obj.set_text("임상병리");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Tabpage("tpgEND", this.rsltTab);
            obj.set_text("내시경");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Tabpage("tpgXRT", this.rsltTab);
            obj.set_text("진단방사선");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Tabpage("tpgAPC", this.rsltTab);
            obj.set_text("세포병리");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Tabpage("tpgIMA", this.rsltTab);
            obj.set_text("폐기능");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Tabpage("tpgEKK", this.rsltTab);
            obj.set_text("안과상담");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Tabpage("tpgAPS", this.rsltTab);
            obj.set_text("조직병리");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Tabpage("tpgHPO", this.rsltTab);
            obj.set_text("외과");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Tabpage("tpgHP1", this.rsltTab);
            obj.set_text("채혈실");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Tabpage("tpgHAT", this.rsltTab);
            obj.set_text("청력검사");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Tabpage("tpgDRG", this.rsltTab);
            obj.set_text("약국");
            this.rsltTab.addChild(obj.name, obj);

            obj = new Grid("rsltGrid", "absolute", "512", "109", "696", "576", null, null, this);
            obj.set_taborder("12");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"검    사    명\"/><Cell col=\"2\" text=\"검   사   결   과\"/><Cell col=\"3\" text=\"하한\"/><Cell col=\"4\" text=\"상한\"/><Cell col=\"5\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "1131", "707", "90", "32", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("patPopupBtn", "absolute", "388", "71", "32", "32", null, null, this);
            obj.set_taborder("16");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SC_RsltMgtForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SC_RsltMgtForm.xfdl", "scripts::supScripts.xjs");
        this.addIncludeScript("SC_RsltMgtForm.xfdl", "scripts::wonScripts.xjs");
        this.addIncludeScript("SC_RsltMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SC_RsltMgtForm.xfdl", function() {

        // 공통 스크립트
        //include "scripts::supScripts.xjs";
        //include "scripts::wonScripts.xjs";
        //include "scripts::commonScripts.xjs"; 

        // 공통 변수
        var rsvtNo;
        var editFlag = false;
        var	addFlag = false;

        // 검진자 버튼 
        this.patPopupBtn_onclick = function(obj,e)
        {
        	this.gfnPatPopup();
        }

        this.setPatInfo=function(arry)
        {	
        	this.patNoEd.set_value(arry[0]);
        	this.patNmEd.set_value(arry[1]);
        }

        // 조회버튼
        this.searchBtn_onclick = function(obj,e)
        {
        	var inspDate = this.inspPlnDateCal.value;
        	if (!this.gfnIsNull(inspDate))
        	{
        		var patNo = this.patNoEd.value;
        		var argument = 'inspPlnDate='+inspDate+' patNo='+patNo;
        		var row = this.dsService.findRow('serviceID' , "findReceiptList");
        		this.dsService.setColumn(row, "argument", argument);
        		
        		this.gfnService("findReceiptList", false);
        		
        		editFlag = false;
        		addFlag = false;
        	}else{
        		alert("검진자와 검진일을 입력해 주세요.");
        	}
        }

        // 결과 조회
        this.receiptGrid_oncellclick = function(obj,e)
        {
        	var rsvtNo = this.dsRsvt.getColumn(this.dsRsvt.rowposition, "rsvtNo");
        	var argument = 'rsvtNo='+rsvtNo;
        	var row = this.dsService.findRow('serviceID' , "findRsltList");
        	this.dsService.setColumn(row, "argument", argument);
        	
        	this.gfnService("findRsltList", false);
        	
        	this.rsltGrid.setCellProperty("Body", 2, "edittype", "none");
        	
        	this.setBaseInspRslt();
        }

        this.setBaseInspRslt=function()
        {
        	this.rsltTab_onchanged(null,null);
        }

        this.rsltTab_onchanged=function(obj,e)
        {
        	
        	if(this.gfnIsNull(obj))
        	{
        		rsltDeptCd = 'HOM';
        	}
        	else
        	{
        		var rsltDeptCd = obj.tabpages[e.postindex].name.substr(3);
        	}
        	this.dsRslt.filter("rsltDeptCd == '"+rsltDeptCd+"'");
        }

        // 등록, 수정
        this.rsltGrid_oncelldblclick = function(obj,e)
        {
        	this.rsltGrid.setCellProperty("Body", 2, "edittype", "normal");
        }

        this.rsltGrid_onenterdown = function(obj,e)
        {
        	//this.fn_setUserData(this.dsRslt);
        	var bool = this.rsltGrid.moveToNextCell();
        	if(!bool)
        	{
        		this.rsltGrid.setCellPos(0);
        	}
        }

        // 저장버튼
        this.saveBtn_onclick = function(obj,e)
        {
        	this.gfnService("registerRslt",false);
        	
        	alert(this.MSG_SUP_SAVE);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsRsvt.addEventHandler("canrowposchange", this.dsRsvt_canrowposchange, this);
            this.dsRsvt.addEventHandler("onrowposchanged", this.dsRsvt_onrowposchanged, this);
            this.receiptGrid.addEventHandler("oncellclick", this.receiptGrid_oncellclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.rsltTab.addEventHandler("onchanged", this.rsltTab_onchanged, this);
            this.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.patPopupBtn.addEventHandler("onclick", this.patPopupBtn_onclick, this);

        };

        this.loadIncludeScript("SC_RsltMgtForm.xfdl");

       
    };
}
)();

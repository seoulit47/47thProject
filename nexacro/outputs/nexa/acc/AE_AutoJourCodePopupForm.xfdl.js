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
                this.set_name("AE_autoJourCodePopupForm");
                this.set_classname("AE_autoJourCodePopupForm");
                this.set_titletext("자동분개규칙 관리");
                this._setFormPosition(0,0,877,309);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findChildAutoJourRuleList</Col><Col id=\"URL\">his::/acc/resol/findAutoJourRuleList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsChildAutoJourRule=dsAutoJourRule</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findParentAutoJourRuleList</Col><Col id=\"URL\">his::/acc/resol/findAutoJourRuleList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsParentAutoJourRule=dsAutoJourRule</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsParentAutoJourRule", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"busiDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"jourDivNm\" type=\"STRING\" size=\"256\"/><Column id=\"creDebDiv\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"jourCd\" type=\"STRING\" size=\"256\"/><Column id=\"parentJourCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCreDebDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSearchAutoJourRule", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"busiDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"jourDivNm\" type=\"STRING\" size=\"256\"/><Column id=\"creDebDiv\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"jourCd\" type=\"STRING\" size=\"256\"/><Column id=\"parentJourCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA052</Col><Col id=\"dsName\">dsBusiDiv</Col></Row><Row><Col id=\"dsName\">dsCreDebDiv</Col><Col id=\"code\">GA049</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBusiDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsChildAutoJourRule", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"busiDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"jourDivNm\" type=\"STRING\" size=\"256\"/><Column id=\"creDebDiv\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"jourCd\" type=\"STRING\" size=\"256\"/><Column id=\"parentJourCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "-2.39%", "0", "893", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "6.27%", "13", null, "35", "60.66%", null, this.titleBarDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("계정과목 조회");
            obj.style.set_font("bold 20 나눔스퀘어 Bold");
            this.titleBarDiv.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "0.91%", "56", null, "250", "0.11%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsChildAutoJourRule");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분개구분명\"/><Cell col=\"1\" text=\"계정과목코드\"/><Cell col=\"2\" text=\"계정과목명\"/><Cell col=\"3\" text=\"보조과목코드\"/><Cell col=\"4\" text=\"보조과목명\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:jourDivNm\"/><Cell col=\"1\" text=\"bind:acntCd\"/><Cell col=\"2\" text=\"bind:acntCdNm\"/><Cell col=\"3\" text=\"bind:assiSubCd\"/><Cell col=\"4\" text=\"bind:assiSubCdNm\"/><Cell col=\"5\" text=\"bind:note\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 893, 60, this.titleBarDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.titleBarDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 877, 309, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AE_autoJourCodePopupForm");
            		p.set_titletext("자동분개규칙 관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AE_AutoJourCodePopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AE_AutoJourCodePopupForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        // 폼 로드 이벤트
        this.AE_autoJourCodePopupForm_onload = function(obj,e)
        {
        	this.gfnBind();
        	this.dsSearchAutoJourRule.setColumn(0,"accYear","2016");
        	this.dsSearchAutoJourRule.setColumn(0,"parentJourCd","Y");	
        	this.dsSearchAutoJourRule.setColumn(0,"busiDivCd",this.parent.busiDivCd);	
        	
        	var argument = 'accYear=2016'+' parentJourCd=Y'+' busiDivCd='+this.parent.busiDivCd;
        	var findChildAutoJourRuleListnRow = this.dsService.findRow( "serviceID", "findChildAutoJourRuleList");	
        	this.dsService.setColumn(findChildAutoJourRuleListnRow,"argument",argument);
        	this.gfnService("findChildAutoJourRuleList",false);	
        	this.dsChildAutoJourRule.filter("creDebDiv=='1'");
        	
        	this.dsSearchAutoJourRule.setColumn(0,"parentJourCd",null);
        	this.gfnService("findParentAutoJourRuleList");
        }

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var parentJourCd=this.dsChildAutoJourRule.getColumn(e.row,"parentJourCd");
        	this.dsParentAutoJourRule.filter("jourCd=='"+parentJourCd+"'");
        	
        	var arrRtn = new Array;
        	var i=0;
        	//차변 셋팅
        	arrRtn[i++] = this.dsChildAutoJourRule.getColumn(e.row,"acntCd");
        	arrRtn[i++] = this.dsChildAutoJourRule.getColumn(e.row,"acntCdNm");
        	arrRtn[i++] = this.dsChildAutoJourRule.getColumn(e.row,"assiSubCd");
        	arrRtn[i++] = this.dsChildAutoJourRule.getColumn(e.row,"assiSubCdNm");
        	arrRtn[i++] = this.dsChildAutoJourRule.getColumn(e.row,"bimokCd");
        	//대변 셋팅
        	arrRtn[i++] = this.dsParentAutoJourRule.getColumn(0,"acntCd");
        	arrRtn[i++] = this.dsParentAutoJourRule.getColumn(0,"acntCdNm");
        	arrRtn[i++] = this.dsParentAutoJourRule.getColumn(0,"assiSubCd");
        	arrRtn[i++] = this.dsParentAutoJourRule.getColumn(0,"assiSubCdNm");

        	this.opener.setCode("ACCK",arrRtn); 
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AE_autoJourCodePopupForm_onload, this);
            this.titleBarDiv.titleStc.addEventHandler("onclick", this.Div04_Static00_onclick, this);
            this.Grid00.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);

        };

        this.loadIncludeScript("AE_AutoJourCodePopupForm.xfdl");

       
    };
}
)();

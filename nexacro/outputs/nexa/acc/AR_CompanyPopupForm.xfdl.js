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
                this.set_name("AR_CompanyPopupForm");
                this.set_classname("AR_CompanyPopupForm");
                this.set_titletext("거래처조회");
                this._setFormPosition(0,0,625,488);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCompany</Col><Col id=\"URL\">his::acc/resol/findAccount.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAccount=dsAccount</Col><Col id=\"argument\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAccount", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"custNm\" type=\"STRING\" size=\"256\"/><Column id=\"adptdt\" type=\"STRING\" size=\"256\"/><Column id=\"bussNo\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"faxNo\" type=\"STRING\" size=\"256\"/><Column id=\"bankCd\" type=\"STRING\" size=\"256\"/><Column id=\"accNo\" type=\"STRING\" size=\"256\"/><Column id=\"busctgNm\" type=\"STRING\" size=\"256\"/><Column id=\"busshpNm\" type=\"STRING\" size=\"256\"/><Column id=\"prsdntNm\" type=\"STRING\" size=\"256\"/><Column id=\"resNo\" type=\"STRING\" size=\"256\"/><Column id=\"dpstr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"gpuseYn\" type=\"STRING\" size=\"256\"/><Column id=\"gduseYn\" type=\"STRING\" size=\"256\"/><Column id=\"cardYn\" type=\"STRING\" size=\"256\"/><Column id=\"riuseYn\" type=\"STRING\" size=\"256\"/><Column id=\"hospcls\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "-2.72%", "-4", "627", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "9.41%", "-2", null, "60", "59.17%", null, this.Div00);
            obj.getSetter("taborder").set("3");
            obj.set_text("거래처조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("companyGrid", "absolute", "1.6%", "55", null, "425", "1.92%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsAccount");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"171\"/><Column size=\"102\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"거래처명\"/><Cell col=\"2\" text=\"사업자번호\"/></Band><Band id=\"body\"><Cell celltype=\"none\" text=\"bind:custCd\" editautoselect=\"false\"/><Cell col=\"1\" text=\"bind:custNm\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:bussNo\" maskchar=\" \"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 627, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 625, 488, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AR_CompanyPopupForm");
            		p.set_titletext("거래처조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AR_CompanyPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AR_CompanyPopupForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        //   폼 로드 함수
        this.AR_CompanyPopupForm_onload = function(obj,e)
        {
        	this.gfnService("findCompany");
        }

        this.Div01_companyGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array;
        	var i=0;
        	arrRtn[i++] = this.dsAccount.getColumn(e.row,"custCd");
        	arrRtn[i++] = this.dsAccount.getColumn(e.row,"custNm");
        	arrRtn[i++] = this.dsAccount.getColumn(e.row,"bussNo");	 
        	
        	this.opener.setCode(this.parent.code,arrRtn);
        	
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AR_CompanyPopupForm_onload, this);
            this.companyGrid.addEventHandler("oncelldblclick", this.Div01_companyGrid_oncelldblclick, this);

        };

        this.loadIncludeScript("AR_CompanyPopupForm.xfdl");

       
    };
}
)();

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
                this.set_name("AE_AcntCodePopupForm");
                this.set_classname("AE_AcntCodePopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,449,596);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCodePopup", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAccAcntCode</Col><Col id=\"URL\">his::acc/elementary/findAccAcntList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAccAcnt=dsAccAcnt</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAccAcnt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntDiv\" type=\"STRING\" size=\"256\"/><Column id=\"assiTypeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGA050", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA050</Col><Col id=\"dsName\">dsGA050</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "-4.23%", "-4", "459", "44", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "13.4%", "15", null, "29", "41.94%", null, this.Div06);
            obj.getSetter("taborder").set("0");
            obj.set_text("계정과목 조회");
            obj.style.set_font("bold 20 나눔스퀘어 Bold");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "10", "46", "70", "26", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("계정과목명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("acntNmEd", "absolute", "90", "46", "86", "26", null, null, this);
            obj.set_taborder("2");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "184", "46", "61", "26", null, null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("계정구분");
            obj.style.set_background("#c4d2daff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("acntDivCombo", "absolute", "253", "46", "91", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("dsGA050");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Grid("accAcntGrid", "absolute", "8", "80", null, "503", "8", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsAccAcnt");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정과목코드\"/><Cell col=\"1\" text=\"계정과목명\"/><Cell col=\"2\" text=\"계정구분\"/></Band><Band id=\"body\"><Cell text=\"bind:acntCd\"/><Cell col=\"1\" text=\"bind:acntNm\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:acntDiv\" combodataset=\"dsGA050\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "353", "43", "88", "29", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 459, 44, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar7.jpg')");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 449, 596, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AE_AcntCodePopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AE_AcntCodePopupForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("AE_AcntCodePopupForm.xfdl", "scripts::commonBind.xjs");
        this.addIncludeScript("AE_AcntCodePopupForm.xfdl", "scripts::commonUtil.xjs");
        this.registerScript("AE_AcntCodePopupForm.xfdl", function() {
        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonBind.xjs";
        //include "scripts::commonUtil.xjs";

        
        this.AE_AcntCodePopupForm_onload = function(obj,e)
        {
        	this.gfnBind();
        }

        
        this.searchBtn_onclick = function(obj,e)
        {
        	var accYear = this.opener.yearSpin.value;
        	var acntDiv = this.acntDivCombo.value;

        	if(this.parent.gubun=='acntCD'){	//gubun 은 open 할때 주는 인자 값
        		argument = 'accYear='+accYear;
        			  +' acntNm='+acntNm
        			  +' acntDiv='+acntDiv
        		this.dsService.setColumn(0,"argument",argument);
        		this.gfnService("findAccAcntCode");
        	}else if(this.opener.gubun=='autoJourHelp'){
        		var acntNm=this.acntNmEd.value;
        		argument = 'accYear='+accYear
        				+' acntNm='+acntNm
        				+' acntDiv='+acntDiv
        				+' creDebDiv=2';//creDebDiv 부모창에서 넘겨주는 변수				
        		this.dsService.setColumn(0,"argument",argument);
        		this.gfnService("findAccAcntCode");
        	}else if(this.opener.gubun=='sudongJourHelp'){
        		var acntNm=this.acntNmEd.value;
        		argument = 'accYear='+accYear
        				+' acntNm='+acntNm
        				+' acntDiv='+acntDiv
        				+' creDebDiv=1';//creDebDiv 부모창에서 넘겨주는 변수				
        		this.dsService.setColumn(0,"argument",argument);
        		this.gfnService("findAccAcntCode");
        	}
        }

        this.accAcntGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array;
        	var i=0;
        	
        	arrRtn[i++] = this.dsAccAcnt.getColumn(e.row,"acntCd");
        	arrRtn[i++] = this.dsAccAcnt.getColumn(e.row,"acntNm");
        	arrRtn[i++] = this.dsAccAcnt.getColumn(e.row,"assiTypeCd");
        	
        	this.opener.setCode(this.parent.code,arrRtn);
        	
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AE_AcntCodePopupForm_onload, this);
            this.acntDivCombo.addEventHandler("onitemchanged", this.resolDivCombo_onitemchanged, this);
            this.accAcntGrid.addEventHandler("oncelldblclick", this.accAcntGrid_oncelldblclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("AE_AcntCodePopupForm.xfdl");

       
    };
}
)();

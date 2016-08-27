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
                this.set_name("AE_DebAcntCodePopupForm");
                this.set_classname("AE_DebAcntCodePopupForm");
                this.set_titletext("예산비목 조회화면");
                this._setFormPosition(0,0,548,595);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findBimokDetail</Col><Col id=\"URL\">his::acc/budget/findBudgBimokList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsBudgBimok=dsBudgBimok</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBudgBimok", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"bimokNm\" type=\"STRING\" size=\"256\"/><Column id=\"parentBimok\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokLevel\" type=\"STRING\" size=\"256\"/><Column id=\"finYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"goveAprcYn\" type=\"STRING\" size=\"256\"/><Column id=\"budgGuide\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "-3.65%", "-4", "565", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "13.51%", "15", null, "29", "42.05%", null, this.Div06);
            obj.getSetter("taborder").set("0");
            obj.set_text("예산비목 조회");
            obj.style.set_font("bold 20 나눔스퀘어 Bold");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", "53", "86", "27", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("예산비목명");
            obj.style.set_background("wheat");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("bimokNmEd", "absolute", "100", "53", "116", "27", null, null, this);
            obj.set_taborder("2");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("s", "absolute", "233", "53", "86", "27", null, null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("계정코드명");
            obj.style.set_background("wheat");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("acntNmEd", "absolute", "325", "53", "116", "27", null, null, this);
            obj.set_taborder("4");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "8", "87", "529", "513", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsBudgBimok");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"80\"/><Column size=\"170\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"예산비목명\"/><Cell col=\"1\" text=\"계정코드\"/><Cell col=\"2\" text=\"계정코드명\"/><Cell col=\"3\" text=\"보조과목명\"/></Band><Band id=\"body\"><Cell text=\"bind:bimokNm\"/><Cell col=\"1\" text=\"bind:acntCd\"/><Cell col=\"2\" text=\"bind:acntNm\"/><Cell col=\"3\" text=\"bind:assiSubNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchAcntBtn", "absolute", "453", "53", "84", "29", null, null, this);
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
            obj = new Layout("default", "", 565, 60, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar7.jpg')");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 548, 595, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AE_DebAcntCodePopupForm");
            		p.set_titletext("예산비목 조회화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AE_DebAcntCodePopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AE_DebAcntCodePopupForm.xfdl", function() {
        //include "scripts::commonScripts.xjs"; 

        //조회버튼 클릭이벤트
        this.searchAcntBtn_onclick = function(obj,e)
        {
        	var accYear = '2016';
        	var bimokNm = this.bimokNmEd.value;
        	var accAcntNm = this.acntNmEd.value;	
        	var finYn = "Y";
        	var argument = 'accYear='+accYear+' bimokNm='+bimokNm+' accAcntNm='+accAcntNm+' finYn='+finYn+' deptCd='+this.parent.deptCd;//deptCd부모창에서 보낸값
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findBimokDetail");
        }

        //그리드 클릭이벤트
        this.Grid00_oncellclick=function(obj,e)
        {
        	var arrRtn = new Array;
        	var i=0;
        	
        	arrRtn[i++] = this.dsBudgBimok.getColumn(e.row,"bimokCd");
        	arrRtn[i++] = this.dsBudgBimok.getColumn(e.row,"acntCd");
        	arrRtn[i++] = this.dsBudgBimok.getColumn(e.row,"acntNm");
        	arrRtn[i++] = this.dsBudgBimok.getColumn(e.row,"assiSubCd");
        	arrRtn[i++] = this.dsBudgBimok.getColumn(e.row,"assiSubNm");

        	this.opener.setCode("ACCD",arrRtn);
        	this.close();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.searchAcntBtn.addEventHandler("onclick", this.searchAcntBtn_onclick, this);

        };

        this.loadIncludeScript("AE_DebAcntCodePopupForm.xfdl");

       
    };
}
)();

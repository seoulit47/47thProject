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
                this.set_name("SD_MedPrescPopForm");
                this.set_classname("SC_ocsPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,657,445);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMedPresc", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"medicationNo\" type=\"STRING\" size=\"256\"/><Column id=\"medicationDay\" type=\"STRING\" size=\"256\"/><Column id=\"flag\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findMedPrescList</Col><Col id=\"URL\">his::sup/drug/findMedPrescList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsMedPresc=dsMedicationPresc</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("medPrescGrid", "absolute", "4.26%", "104", null, "312", "4.26%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMedPresc");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"163\"/><Column size=\"131\"/><Column size=\"127\"/><Column size=\"83\"/><Column size=\"79\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"조제일자\"/><Cell col=\"1\" text=\"조제번호\"/><Cell col=\"2\" text=\"환자등록번호\"/><Cell col=\"3\" text=\"환자명\"/><Cell col=\"4\" text=\"병동\"/></Band><Band id=\"body\"><Cell text=\"bind:medicationDay\" mask=\"####-##-##\"/><Cell col=\"1\" text=\"bind:medicationNo\"/><Cell col=\"2\" style=\"font:8 arial;\" text=\"bind:patNo\"/><Cell col=\"3\" text=\"bind:patNm\"/><Cell col=\"4\" text=\"expr:flag=='1' ? '외래' : '병동'\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "291", "66", "32", "32", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "4.26%", "66", null, "30", "80.37%", null, this);
            obj.set_taborder("6");
            obj.set_text("조제일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0%", "0", "639", "60", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("transparent URL('img::titleBar3.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "9.13%", "0", null, "60", "42.77%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("조제 목록 조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Calendar("medicationDayCal", "absolute", "20.55%", "66", null, "30", "56.47%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");

            obj = new Div("Div00", "absolute", "50.84%", "66", null, "30", "33.79%", null, this);
            obj.set_taborder("11");
            obj.set_text("처방일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Calendar("prescDateCal", "absolute", "67.12%", "66", null, "30", "9.89%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");

            obj = new Button("searchBtn00", "absolute", "597", "64", "32", "32", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 657, 445, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SC_ocsPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SD_MedPrescPopForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("SD_MedPrescPopForm.xfdl", function() {
        // 공통 스크립트
        //include "scripts::commonTransaction.xjs"; 

        
        // 화면 로드시
        this.SD_MedPrescPopForm_onload = function(obj,e)
        {
        	this.gfnService("findMedPrescList", false);		
        }

        
        // 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	var medicationDay = this.medicationDayCal.value; 
        	var prescDate = this.prescDateCal.value; 
        		
        	var row = this.dsService.findRow("serviceID", "findMedPrescList");
        	var argument = 'medicationDay='+medicationDay+' prescDate='+prescDate;
        	
        	this.dsService.setColumn(row,"argument",argument);
        	this.gfnService("findMedPrescList", false);		
        }

        this.medPrescGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array;
        	
        	arrRtn[0] = this.dsMedPresc.getColumn(e.row,"prescDate");
        	arrRtn[1] = this.dsMedPresc.getColumn(e.row,"medicationNo");
        	arrRtn[2] = this.dsMedPresc.getColumn(e.row,"patNo");
        	arrRtn[3] = this.dsMedPresc.getColumn(e.row,"patNm");
        	arrRtn[4] = this.dsMedPresc.getColumn(e.row,"flag");
        	
        	this.opener.setCode(this.parent.code,arrRtn);

        	this.close();	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SD_MedPrescPopForm_onload, this);
            this.medPrescGrid.addEventHandler("oncelldblclick", this.medPrescGrid_oncelldblclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.searchBtn00.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("SD_MedPrescPopForm.xfdl");

       
    };
}
)();

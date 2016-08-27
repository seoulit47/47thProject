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
                this.set_name("WH_DscgPatSearchForm");
                this.set_classname("WH_DscgPatSearchForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findDscgPatList</Col><Col id=\"URL\">his::won/hosptlzPat/findDscgPatList.do</Col><Col id=\"outData\">dsDscgPat=dsDscgPat</Col><Col id=\"callbackFunc\">findDscgPatListCallbackFunc</Col></Row><Row><Col id=\"URL\">his::won/hosptlzPat/modDscgDay.do</Col><Col id=\"inData\">dsDscgPat=dsDscgPat:u</Col><Col id=\"serviceID\">modDscgDay</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDscgPat", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzDate\" type=\"STRING\" size=\"256\"/><Column id=\"dscgDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"dscgGubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "0", "1250", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("           퇴원환자관리");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "1.92%", "65", null, "27", "88.88%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("환자등록번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "11.6%", "65", null, "27", "77.28%", null, this);
            obj.set_taborder("2");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("patNoBtn", "absolute", "23.2%", "65", null, "26", "74.4%", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearch.png')");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "29.12%", "65", null, "27", "63.84%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("조회기간");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("startDateCal", "absolute", "36.56%", "66", null, "25", "53.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");

            obj = new Static("Static00", "absolute", "47.12%", "68", null, "22", "50.96%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("~");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Calendar("endDateCal", "absolute", "49.52%", "66", null, "25", "40.32%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");

            obj = new Button("searchBtn", "absolute", "86.4%", "66", null, "26", "8.88%", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("SearchBtn");
            obj.getSetter("class").set("SearchBtn");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("modBtn", "absolute", "91.44%", "64", null, "30", "1.36%", null, this);
            obj.set_taborder("9");
            obj.set_text("퇴원일수정");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("dscgPatGrid", "absolute", "1.68%", "105", null, "619", "2.16%", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("dsDscgPat");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"138\"/><Column size=\"93\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"102\"/><Column size=\"51\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"환자등록번호\"/><Cell col=\"2\" text=\"성 명\"/><Cell col=\"3\" text=\"입원일자\"/><Cell col=\"4\" text=\"퇴원일자\"/><Cell col=\"5\" text=\"진료과\"/><Cell col=\"6\" text=\"병실\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:patNo\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:patNm\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:hosptlzDate\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:dscgDate\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:trmtDept\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:hroom\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WH_DscgPatSearchForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WH_DscgPatSearchForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("WH_DscgPatSearchForm.xfdl", "scripts::wonPopup.xjs");
        this.registerScript("WH_DscgPatSearchForm.xfdl", function() {
        /****************************************************************************************

            퇴원환자 조회
                                                                           			                        
          @Path			 	원무 - 퇴원환자 조회
          @Description 	퇴원할 환자를 조회하여 퇴원일을 변경할 수 있다.
          @Author		    황태경					 								                
         									 											                        
          Created on 2016. 06. 15.                             		 					        

        ****************************************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::wonPopup.xjs";	

        
        this.patNoBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("WS_PatPopupForm","won","");
        }
        this.setPatInfo = function(arr){
        	this.patNoEd.set_value(arr[0]);
        }

        
        this.findDscgPatList = function(svcID,errorCode,errorMsg)
        {
        	if(errorCode=="0") {
        		if(this.dsDscgPat.rowcount==0){
        			alert("조회한 데이터가 없습니다.");
        		}else{
        			alert("조회성공");
        	    }
        	}else{
        		alert("조회실패");
        	}	
        }
        this.searchBtn_onclick = function(obj,e)
        {
        	var patNo = this.patNoEd.value;            //환자등록번호
        	var startDay=this.startDateCal.value;    // 조회시작일
        	var endDay =this.endDateCal.value;     // 조회 마지막일
        	
        	
        	this.dsService.setColumn(0,"argument","patNo="+patNo+" startDay="+startDay+" endDay="+endDay );
        	this.gfnService("findDscgPatList", "false"); 
        }

        this.modBtn_onclick = function(obj,e)
        {
        	this.gfnService("modDscgDay", "false"); 
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patNoBtn.addEventHandler("onclick", this.patNoBtn_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.modBtn.addEventHandler("onclick", this.modBtn_onclick, this);

        };

        this.loadIncludeScript("WH_DscgPatSearchForm.xfdl");

       
    };
}
)();

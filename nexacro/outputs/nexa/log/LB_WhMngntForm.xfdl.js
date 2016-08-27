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
                this.set_name("LB_WhMngntForm");
                this.set_classname("LB_WhMngntForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findWhList</Col><Col id=\"URL\">his::log/base/findWhList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsWh=dsWh</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">batchWhProcess</Col><Col id=\"URL\">his::log/base/batchWhProcess.do</Col><Col id=\"inData\">dsWh=dsWh:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYb", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"yn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"yn\">Y</Col></Row><Row><Col id=\"yn\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsWh", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"whCd\" type=\"STRING\" size=\"0\"/><Column id=\"whNm\" type=\"STRING\" size=\"256\"/><Column id=\"ioCfmtCd\" type=\"STRING\" size=\"256\"/><Column id=\"ioCfmt\" type=\"STRING\" size=\"0\"/><Column id=\"ioTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"ioType\" type=\"STRING\" size=\"0\"/><Column id=\"useYb\" type=\"STRING\" size=\"0\"/><Column id=\"applyStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div02", "absolute", "0%", "0", "1248", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar3.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("창고 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("whCdStc", "absolute", "20", "69", "87", "27", null, null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("창고코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("whCdEd", "absolute", "115", "69", "100", "27", null, null, this);
            obj.set_taborder("3");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("whCdNmEd", "absolute", "264", "69", "166", "27", null, null, this);
            obj.set_taborder("4");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Grid("whGrid", "absolute", "20", "105", "1189", "591", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsWh");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"창고코드\"/><Cell col=\"1\" text=\"창고명\"/><Cell col=\"2\" text=\"입출형태코드\"/><Cell col=\"3\" text=\"입출형태\"/><Cell col=\"4\" text=\"입출유형코드\"/><Cell col=\"5\" text=\"입출유형\"/><Cell col=\"6\" text=\"사용여부\"/><Cell col=\"7\" text=\"적용시작일자\"/><Cell col=\"8\" text=\"적용종료일자\"/><Cell col=\"9\" text=\"적요\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:whCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:whNm\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:ioCfmtCd\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:ioCfmt\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:ioTypeCd\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:ioType\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:useYb\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:applyStartDate\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:applyEndDate\"/><Cell col=\"9\" edittype=\"normal\" text=\"bind:note\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("whBtn", "absolute", "224", "65", "32", "32", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "1120", "65", "90", "32", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "902", "704", "90", "32", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "1118", "704", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "1011", "704", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            obj.set_visible("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LB_WhMngntForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LB_WhMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("LB_WhMngntForm.xfdl", "scripts::logScripts.xjs");
        this.registerScript("LB_WhMngntForm.xfdl", function() {
        /********************************************************************************                                                                            
        창고 관리 화면                                             						                                                                         
        @Path			물류공통(Logistics Base)              				   				
        @Description	병원의 창고들을 관리하기 위한 폼							
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 5. 27.                             		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";  		//공통 스크립트
        //include "scripts::logScripts.xjs";			//물류 스크립트

        this.clickBtn = function(obj){	
        	switch(obj){ 		
        		case this.whBtn: 		//창고검색
        				this.clickWhBtn();
        				break;
        		case this.searchBtn:	//창고 조회
        				this.clickSearchBtn();
        				break;		
        		case this.batchBtn:		//저장
        				this.clickSaveBtn();
        				break;	
        	}
        }

        
        this.clickWhBtn = function(){
        	this.logOpenCdDialog("wh");
        }

        this.clickSearchBtn = function()
        {		
        	var whCd = this.whCdEd.value;
        	var whNm = this.whCdNmEd.value;	
        	var argument = "whCd=" + whCd + " whNm=" + whNm;
        	this.dsService.setColumn(0, "argument", argument);
        	this.gfnService("findWhList", false);		
        }

        this.clickSaveBtn = function(){
        	this.gfnService("batchWhProcess");
        }

        this.setLogCodeArray = function(divCode,logCode,secCode,thrCode,arr){
        	switch (divCode){
        		case "wh":
        			this.whCdEd.set_value(arr[0]);
        			this.whCdNmEd.set_value(arr[1]);
        			break;
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.whCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.whGrid.addEventHandler("oncellclick", this.bigGrpGrid_oncellclick, this);
            this.whGrid.addEventHandler("oncloseup", this.oncloseup, this);
            this.whGrid.addEventHandler("ontextchanged", this.ontextchanged, this);
            this.whBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchBtn.addEventHandler("onclick", this.clickBtn, this);
            this.addBtn.addEventHandler("onclick", this.clickBtn, this);
            this.batchBtn.addEventHandler("onclick", this.clickBtn, this);
            this.delBtn.addEventHandler("onclick", this.clickBtn, this);

        };

        this.loadIncludeScript("LB_WhMngntForm.xfdl");

       
    };
}
)();

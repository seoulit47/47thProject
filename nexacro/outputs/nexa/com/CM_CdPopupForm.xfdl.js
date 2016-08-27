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
                this.set_name("CM_CdPopupForm");
                this.set_classname("CM_CdPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,400,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCodePopupList</Col><Col id=\"URL\">his::com/findCodePopupList.do</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">callback</Col><Col id=\"outData\">dsCode=dsCode</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "396", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "13.83%", "-4", null, "60", "58.77%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("코드도움");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Div("codeDiv", "absolute", "0%", "64", null, "430", "3%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("0");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "18.04%", "8", "87", "27", null, null, this.codeDiv);
            obj.getSetter("taborder").set("10");
            obj.set_text("코드명");
            obj.style.set_background("papayawhip");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.codeDiv.addChild(obj.name, obj);
            obj = new Edit("codeNameEd", "absolute", "46.91%", "8", null, "26", "14.18%", null, this.codeDiv);
            obj.set_taborder("11");
            obj.getSetter("class").set("AreaEdt");
            this.codeDiv.addChild(obj.name, obj);
            obj = new Grid("codeGrid", "absolute", "3.61%", "46", null, "334", "0.26%", null, this.codeDiv);
            obj.set_taborder("12");
            obj.set_binddataset("dsCode");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"132\"/><Column size=\"240\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:codeName\"/></Band></Format></Formats>");
            this.codeDiv.addChild(obj.name, obj);
            obj = new Button("cancelBtn", "absolute", "217", "393", "90", "32", null, null, this.codeDiv);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.codeDiv.addChild(obj.name, obj);
            obj = new Button("okBtn", "absolute", "94", "393", "90", "32", null, null, this.codeDiv);
            obj.set_taborder("15");
            obj.style.set_background("@gradation URL('img::permitBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.codeDiv.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 430, this.codeDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("0");

            	}
            );
            this.codeDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 400, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CM_CdPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CM_CdPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("CM_CdPopupForm.xfdl", function() {
        /********************************************************************************                                                                            
        시스템 공통 코드 팝업화면                         						                                                                         
        @Path			시스템공통            				   				
        @Description	입력편의를 위한 시스템 공통 코드 팝업
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 5. 30.                             		                    				                                            
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";

        
        this.CM_CdPopupForm_onload = function(obj,e)
        {
           
            
        	this.dsService.setColumn(0, "argument", "code=" + this.parent.code);
            //this.dsService.setColumn(0,"argument","code=GP500");  // test code
            this.gfnService("findCodePopupList");
        }

        //그리드 더블클릭
        this.codeDiv_codeGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array();
        	arrRtn[0] = this.dsCode.getColumn(e.row, "code");
        	arrRtn[1] = this.dsCode.getColumn(e.row, "codeName");
        	this.opener.setCode(this.parent.code, arrRtn,this.parent.args);
        	this.close();
        }

        // 확인버튼 클릭시
        this.okBtn_onclick = function(obj,e)
        {
           var arrRtn = new Array();
           arrRtn[0] = this.dsCode.getColumn(this.codeDiv.codeGrid.currentrow, "code");
           arrRtn[1] = this.dsCode.getColumn(this.codeDiv.codeGrid.currentrow, "codeName");
           this.opener.setCode(this.parent.code, arrRtn,this.parent.args);
           this.close();
        }

        // 취소버튼 클릭시
        this.cancelBtn_onclick = function(obj,e)
        {
        	if(confirm("코드도움창을 닫으시겠습니까?")){
        		this.close();
        	}
        }

        
        // 코드명 입력시 LIKE 상세 조회
        this.codeDiv_codeNameEd_onchar = function(obj,e)
        {
        	if (e.posttext == "") {
        		this.dsCode.filter("");
        	} else {
        		this.dsCode.filter(this.gfnLike("codeName", e.posttext));
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.CM_CdPopupForm_onload, this);
            this.codeDiv.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.codeDiv.codeNameEd.addEventHandler("onchar", this.codeDiv_codeNameEd_onchar, this);
            this.codeDiv.codeGrid.addEventHandler("oncelldblclick", this.codeDiv_codeGrid_oncelldblclick, this);
            this.codeDiv.cancelBtn.addEventHandler("onclick", this.cancelBtn_onclick, this);
            this.codeDiv.okBtn.addEventHandler("onclick", this.okBtn_onclick, this);

        };

        this.loadIncludeScript("CM_CdPopupForm.xfdl");

       
    };
}
)();

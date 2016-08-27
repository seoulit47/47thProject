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
                this.set_name("CM_CdMngntForm");
                this.set_classname("CM_CdMngntForm");
                this.set_titletext("코드관리");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCodeOnly", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"detailCode\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"subCode\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"editId\" type=\"STRING\" size=\"256\"/><Column id=\"editIp\" type=\"STRING\" size=\"256\"/><Column id=\"regId\" type=\"STRING\" size=\"256\"/><Column id=\"regIp\" type=\"STRING\" size=\"256\"/><Column id=\"detailCodeName\" type=\"STRING\" size=\"256\"/><Column id=\"modiyn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSubCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"subcode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"subcode\">GD</Col></Row><Row><Col id=\"subcode\">HS</Col></Row><Row><Col id=\"subcode\">GF</Col></Row><Row><Col id=\"subcode\">SP</Col></Row><Row><Col id=\"subcode\">AC</Col></Row><Row><Col id=\"subcode\">MD</Col></Row><Row><Col id=\"subcode\">GA</Col></Row><Row><Col id=\"subcode\">GP</Col></Row><Row><Col id=\"subcode\">GB</Col></Row><Row><Col id=\"subcode\">GS</Col></Row><Row><Col id=\"subcode\">SC</Col></Row><Row><Col id=\"subcode\">CM</Col></Row><Row><Col id=\"subcode\">SL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCodeList</Col><Col id=\"URL\">his::com/findCodeList.do</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">findCodeListCallback</Col><Col id=\"outData\">dsCode=dsCode</Col></Row><Row><Col id=\"serviceID\">batchCodeProcess</Col><Col id=\"URL\">his::com/batchCodeProcess.do</Col><Col id=\"inData\">dsCode=dsCode:u</Col><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findCode</Col><Col id=\"URL\">his::com/findCode.do</Col><Col id=\"outData\">dsCodeOnly=dsCodeNm</Col><Col id=\"callbackFunc\">findCodeCallback</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUse", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">Y</Col></Row><Row><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div05", "absolute", "0%", "0", "1249", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "74.4%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("코드 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Radio("useRadio", "absolute", "69.28%", "67", null, "27", "23.84%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_columncount("2");
            obj.set_innerdataset("dsUse");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");

            obj = new Edit("codeNameEd", "absolute", "49.12%", "67", null, "27", "40.88%", null, this);
            obj.set_taborder("3");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Combo("subCodeCombo", "absolute", "9.52%", "67", null, "27", "80.64%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("dsSubCode");
            obj.set_codecolumn("subcode");
            obj.set_datacolumn("subcode");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("subCodeStc02", "absolute", "21.76%", "67", null, "27", "71.2%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("코드");
            obj.style.set_background("moccasin");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "41.44%", "67", null, "27", "51.52%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("코드명");
            obj.style.set_background("moccasin");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "61.28%", "67", null, "27", "31.68%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("사용여부");
            obj.style.set_background("moccasin");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("codeCombo", "absolute", "29.44%", "67", null, "27", "60.72%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("dsCodeOnly");
            obj.set_codecolumn("code");
            obj.set_datacolumn("code");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("subCodeStc01", "absolute", "1.92%", "67", null, "27", "91.04%", null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("그룹코드");
            obj.style.set_background("moccasin");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("codeGrid", "absolute", "1.68%", "105", null, "611", "1.44%", null, this);
            obj.set_taborder("14");
            obj.set_binddataset("dsCode");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"71\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"240\"/><Column size=\"226\"/><Column size=\"85\"/><Column size=\"99\"/><Column size=\"84\"/><Column size=\"87\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"상세코드\"/><Cell col=\"3\" text=\"코드명\"/><Cell col=\"4\" text=\"상세코드명\"/><Cell col=\"5\" text=\"등록자ID\"/><Cell col=\"6\" text=\"등록자IP\"/><Cell col=\"7\" text=\"수정가능여부\"/><Cell col=\"8\" text=\"사용가능여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" text=\"bind:subCode\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" text=\"bind:code\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:detailCode\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:codeName\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:detailCodeName\"/><Cell col=\"5\" text=\"bind:regId\"/><Cell col=\"6\" text=\"bind:regIp\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:modiYn\" combodataset=\"dsUse\" combocodecol=\"value\" combodatacol=\"value\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:useYn\" combodataset=\"dsUse\" combocodecol=\"value\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "1147", "64", "90", "32", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "1031", "724", "90", "32", null, null, this);
            obj.set_taborder("16");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "915", "724", "90", "32", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "1147", "724", "90", "32", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CM_CdMngntForm");
            		p.set_titletext("코드관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CM_CdMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("CM_CdMngntForm.xfdl", function() {
        /********************************************************************************                                                                            
        코드관리 화면                                           						                                                                         
        @Path			시스템공통            				   				
        @Description	시스템 공통 코드 관리하는 화면
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 5. 27.    
        @LastUpdated    2016. 5. 31. 
        	코드명 LIKE 검색기능 추가
        	상세코드 직접입력하도록 변경
                                 		                    				                                           
        TODO : 등록자, 수정자 정보(IP / 일자) 처리기능 추가할 것!                         		                    				                                           
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";

        // 코드 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	if (this.subCodeCombo.text == ""){
        		alert("그룹코드를 선택해주세요");
        	} else {
        		var subCode = this.subCodeCombo.text;
        		var code = this.codeCombo.text;
        		var codeName = this.codeNameEd.value;
        		var use = this.useRadio.value;
        		var argument = "subCode=" + subCode + " code=" + code 
        						+ " codeName=" + codeName + " use=" + use;
        	
        		this.dsService.setColumn(0, 4, argument);
        		this.gfnService("findCodeList");
        	}
        }
           
        // 코드 추가
        this.addBtn_onclick = function(obj,e)
        {
        	if (this.subCodeCombo.text == "" || this.codeCombo.text == "") {
        		alert("그룹코드와 코드를 선택하고 추가해주십시오.");
        	} else {
        		this.dsCode.addRow();
        		this.dsCode.setColumn(this.codeGrid.currentrow, "subCode", this.subCodeCombo.text);
        		this.dsCode.setColumn(this.codeGrid.currentrow, "code", this.codeCombo.text);
        		// this.dsCode.setColumn(this.codeGrid.currentrow, "detailCode", this.dsCode.getRowCount());
        	}
        }

        
        // 코드삭제
        this.delBtn_onclick = function(obj,e)
        {
        	if (confirm("선택한 코드를 삭제하시겠습니까?")) {
        		this.dsCode.deleteRow(this.dsCode.rowposition);
        	}
        }

        // 코드 일괄처리
        this.batchBtn_onclick = function(obj,e)
        {
        	if(confirm("일괄처리 하시겠습니까?")){
        		this.gfnService("batchCodeProcess");
        		this.successCB();
        	}
        }

        
        this.codeCombo_ondropdown = function(obj,e)
        {
        	if (this.subCodeCombo.text == '') {
        		alert("서브코드를 먼저 선택해주세요");
        	}
        }

        this.findCodeCallback = function(svcID,errorCode,errorMsg) {
        	trace(this.dsCodeOnly.saveXML());
        }

        this.subCodeCombo_onitemclick = function(obj,e)
        {
        	this.dsService.setColumn(2, 4, "subCode=" + e.itemtext);
        	this.gfnService("findCode");
        }

        
        this.codeNameEd_onchar = function(obj,e)
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
            this.codeNameEd.addEventHandler("onchar", this.codeNameEd_onchar, this);
            this.subCodeCombo.addEventHandler("onitemclick", this.subCodeCombo_onitemclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.codeCombo.addEventHandler("ondropdown", this.codeCombo_ondropdown, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.batchBtn.addEventHandler("onclick", this.batchBtn_onclick, this);

        };

        this.loadIncludeScript("CM_CdMngntForm.xfdl");

       
    };
}
)();

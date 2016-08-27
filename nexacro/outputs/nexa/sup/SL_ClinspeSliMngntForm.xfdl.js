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
                this.set_name("SL_clinspeSliMngntForm");
                this.set_classname("SL_clinspeSliMngntForm");
                this.set_titletext("검체슬라이드관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1269,792);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findClinspeSliList</Col><Col id=\"URL\">his::sup/pathology/findClinspeSliList.do</Col><Col id=\"outData\">dsSlClinspeSli=dsSlClinspeSli</Col><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">batchClinspeSliProcess</Col><Col id=\"URL\">his::sup/pathology/batchClinspeSliProcess.do</Col><Col id=\"inData\">dsSlClinspeSli=dsSlClinspeSli:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSlClinspeSli", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"clinspeNo\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeBlokCode\" type=\"STRING\" size=\"256\"/><Column id=\"sliCode\" type=\"STRING\" size=\"256\"/><Column id=\"sliProdDay\" type=\"STRING\" size=\"256\"/><Column id=\"sliQnt\" type=\"STRING\" size=\"256\"/><Column id=\"sliCon\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.49%", "8", "1670", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "3.83%", "-4", null, "60", "82.63%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("검체슬라이드관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "0.87%", "72", "74", "30", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("검체번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("clinspeNoEd", "absolute", "7.33%", "72", "104", "30", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "205", "70", "32", "32", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn07", "absolute", "1174", "72", "90", "32", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("clinspeSliGrid", "absolute", "0.87%", "108", "1247", "617", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsSlClinspeSli");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"92\"/><Column size=\"138\"/><Column size=\"135\"/><Column size=\"152\"/><Column size=\"135\"/><Column size=\"136\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검체번호\"/><Cell col=\"1\" text=\"검체블록 코드\"/><Cell col=\"2\" text=\"슬라이드 코드\"/><Cell col=\"3\" text=\"슬라이드 제작일\"/><Cell col=\"4\" text=\"슬라이드 수량\"/><Cell col=\"5\" text=\"슬라이드 내용\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:clinspeNo\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:clinspeBlokCode\"/><Cell col=\"2\" text=\"bind:sliCode\"/><Cell col=\"3\" edittype=\"date\" text=\"bind:sliProdDay\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:sliQnt\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:sliCon\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "1168", "740", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "961", "740", "90", "32", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "1064", "740", "90", "32", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1670, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1269, 792, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SL_clinspeSliMngntForm");
            		p.set_titletext("검체슬라이드관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SL_ClinspeSliMngntForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("SL_ClinspeSliMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SL_ClinspeSliMngntForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 검체 슬라이드 관리															*
        *                                                                               *
        * @Path		    sup-SLclinspeSliMngntForm										*
        *																				*
        * @Description 	검체 슬라이드 관리에서 슬라이드 등록,수정,삭제,조회한다. *
        *               																*
        * @Author	    정재욱    						                                *
        * 									                                            *
        * Created on 2016. 06. 13                            		                    *
        *									                                            *
        ********************************************************************************/

        /***************************************************************************************************
        *                                         공통 Script Include                                      *
        ***************************************************************************************************/

        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonScripts.xjs";

        /***************************************************************************************************
        * 검체번호 조회                                     
        ***************************************************************************************************/

        this.searchBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("SL_clinspeBlokPopupForm","sup","","");
        }

        /***************************************************************************************************
        * 검체번호 조회                                     
        ***************************************************************************************************/

        this.setClinspeNoArray = function(cliNo){
        	this.clinspeNoEd.set_value(cliNo);
        }

        this.DelBtn07_onclick = function(obj,e)
        {
        	var clinspeNo = this.clinspeNoEd.value;
         	var searchNo = "CLINSPE_NO='"+clinspeNo+"'";
         	
         	this.dsService.setColumn(0, "argument", searchNo);
        	this.gfnService("findClinspeSliList", "false");
        }

        this.addBtn_onclick = function(obj,e)
        {
        	this.dsSlClinspeSli.addRow();
        	
        	var sliCode;
        	var count = this.clinspeSliGrid.currentrow;
        	var codeNo = this.clinspeSliGrid.currentrow-1;
        	var code = this.clinspeSliGrid.currentrow+1;
        	
          	var test = this.dsSlClinspeSli.getColumn(codeNo, "sliCode");
        	//슬라이드 코드 셋팅
        	if(code<10){
        		sliCode = "CS"+"00"+code;
        	}else if(code <100){
        		sliCode = "CS"+"0"+code;
        	}else if(code <1000){
        		sliCode = "CS"+code;
        	}
        	//슬라이드 코드 추가, 중복값 방지
        	if(test == sliCode){
        		var setAdd = this.clinspeSliGrid.currentrow+2;
        		if(codeNo <10){
        			sliCode = "CS"+"00"+setAdd;
        		}else if(codeNo <100){
        			sliCode = "CS"+"0"+setAdd;
        		}else if(test <1000){
        			sliCode = "CS"+setAdd;
        		}
        	}
        	
        	this.dsSlClinspeSli.setColumn(count, "clinspeNo", this.clinspeNoEd.value);
        	this.dsSlClinspeSli.setColumn(count, "sliCode", sliCode);
        }

        this.delBtn_onclick = function(obj,e)
        {
        	this.dsSlClinspeSli.deleteRow(this.clinspeSliGrid.currentrow);
        }

        this.batchBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchClinspeSliProcess", "false");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.DelBtn07.addEventHandler("onclick", this.DelBtn07_onclick, this);
            this.clinspeSliGrid.addEventHandler("oncellclick", this.test_OnCellClick, this);
            this.batchBtn.addEventHandler("onclick", this.batchBtn_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);

        };

        this.loadIncludeScript("SL_ClinspeSliMngntForm.xfdl");

       
    };
}
)();

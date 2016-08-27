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
                this.set_name("SL_ClinspeBlockMngntForm");
                this.set_classname("SL_clinspeBlockMngntForm");
                this.set_titletext("검체블록관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1261,779);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findClinspeBlokList</Col><Col id=\"URL\">his::sup/pathology/findClinspeBlokList.do</Col><Col id=\"outData\">dsSlClinspeBlok=dsSlClinspeBlok</Col></Row><Row><Col id=\"serviceID\">batchClinspeBlokProcess</Col><Col id=\"URL\">his::sup/pathology/batchClinspeBlokProcess.do</Col><Col id=\"inData\">dsSlClinspeBlok=dsSlClinspeBlok:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSlClinspeBlok", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"clinspeNo\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeBlokCode\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeBlokProdDay\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeBlokProdTime\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeBlokQnt\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("clinspeBlokGrid", "absolute", "0.87%", "114", "1226", "611", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsSlClinspeBlok");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"126\"/><Column size=\"144\"/><Column size=\"174\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검체번호\"/><Cell col=\"1\" text=\"검체블록코드\"/><Cell col=\"2\" text=\"검체블록 제작일\"/><Cell col=\"3\" text=\"검체블록 제작시간\"/><Cell col=\"4\" text=\"검체블록 수량\"/><Cell col=\"5\" text=\"환자번호\"/><Cell col=\"6\" text=\"환자명\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:clinspeNo\"/><Cell col=\"1\" text=\"bind:clinspeBlokCode\"/><Cell col=\"2\" edittype=\"date\" text=\"bind:clinspeBlokProdDay\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:clinspeBlokProdTime\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:clinspeBlokQnt\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:patNo\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:patNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0.48%", "8", "1670", "60", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.79%", "-4", null, "60", "81.68%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("검체블록관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "1.98%", "76", "74", "30", null, null, this);
            obj.getSetter("taborder").set("11");
            obj.set_text("검체번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("clinspeNoEd", "absolute", "8.41%", "76", "104", "30", null, null, this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Button("searchClinspeNo", "absolute", "216", "76", "32", "32", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "1131", "76", "90", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "1147", "736", "90", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "939", "736", "90", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "1043", "736", "90", "32", null, null, this);
            obj.set_taborder("17");
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
            		p.set_taborder("10");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1261, 779, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SL_clinspeBlockMngntForm");
            		p.set_titletext("검체블록관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SL_ClinspeBlockMngntForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("SL_ClinspeBlockMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SL_ClinspeBlockMngntForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        *검체블록  관리																*
        *                                                                               *
        * @Path		    sup-SL_ClinspeBlokMngntForm										*
        *																				*
        * @Description 	검체블록 관리에서 검체블록 등록,수정,삭제,조회한다.		*
        *               																*
        * @Author	    정재욱    						                                *
        * 									                                            *
        * Created on 2016. 06. 08                              		                    *
        *									                                            *
        ********************************************************************************/

        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/

        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonScripts.xjs";

        /***************************************************************************************************
        * 검체정보 조회                                     
        ***************************************************************************************************/

        this.searchBtn_onclick = function(obj,e)
        {
        	var aa = this.clinspeNoEd.value;
        	var searchNo = "clinspeNo='"+aa+"'";
        	//alert(aa);
        	this.dsService.setColumn(0, "argument", searchNo);
        	this.gfnService("findClinspeBlokList", "false");
        }

        /***************************************************************************************************
        * 검체번호 조회                                                                      
        ***************************************************************************************************/

        this.searchClinspeNo_onclick = function(obj,e)
        {
        	this.gfnPopup("SL_ClinspeBlokPopupForm","sup","","");
        }

        /***************************************************************************************************
        * 검체번호 조회 click 이벤트 때 사용                                                          
        ***************************************************************************************************/

        this.setClinspeNoArray = function(cliNo){
        	this.clinspeNoEd.set_value(cliNo);
        }

        /***************************************************************************************************
        * 검체블록 추가                                                                   
        ***************************************************************************************************/

        this.addBtn_onclick = function(obj,e)
        {
        	this.dsSlClinspeBlok.addRow();
        	
        	var setBlokCode;
        	var count = this.clinspeBlokGrid.currentrow;
        	var blokNo = this.clinspeBlokGrid.currentrow-1;
        	var blokCode = this.clinspeBlokGrid.currentrow+1;
        	
        	var lastCol = this.dsSlClinspeBlok.getColumn(blokNo, "clinspeBlokCode");
        	
        	if(blokCode <10){
        		setBlokCode = "CB"+"00"+blokCode;
        	}else if(blokCode <100){
        		setBlokCode = "CB"+"0"+blokCode;
        	}else if(blokCode <1000){
        		setBlokCode = "CB"+blokCode;
        	}
        	
        	//코드 중복방지
        	if(lastCol == setBlokCode){
        		var setBlok = this.clinspeBlokGrid.currentrow+2;
        		if(blokNo <10){
        			setBlokCode = "CB"+"00"+setBlok;
        		}else if(blokNo <100){
        			setBlokCode = "CB"+"0"+setBlok;
        		}else if(blokNo <1000){
        			setBlokCode = "CB"+setBlok;
        		}
        	}
        	
        	
        	this.dsSlClinspeBlok.setColumn(count , "clinspeNo", this.clinspeNoEd.value);
        	this.dsSlClinspeBlok.setColumn(count , "clinspeBlokCode", setBlokCode);
        //	this.dsSlClinspeBlok.setColumn(count, "clinspeBlokProdTime", this.nowTime());
        }

        /***************************************************************************************************
        * 검체블록 삭제                                                                   
        ***************************************************************************************************/

        this.delBtn_onclick = function(obj,e)
        {
        	this.dsSlClinspeBlok.deleteRow(this.clinspeBlokGrid.currentrow);
        }

        /***************************************************************************************************
        * 검체블록 저장                                                                   
        ***************************************************************************************************/

        this.batchBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchClinspeBlokProcess", "false");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchClinspeNo.addEventHandler("onclick", this.searchClinspeNo_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.batchBtn.addEventHandler("onclick", this.batchBtn_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);

        };

        this.loadIncludeScript("SL_ClinspeBlockMngntForm.xfdl");

       
    };
}
)();

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
                this.set_name("SL_ClinspeBlokPopupForm");
                this.set_classname("SL_clinspeBlokPopupForm");
                this.set_titletext("검체번호 검색");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,318,522);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsClinspe", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"clinspeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findClinspeNoList</Col><Col id=\"URL\">his::sup/pathology/findClinspeNoList.do</Col><Col id=\"outData\">dsClinspe=dsClinspe</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "1.9%", "110", "304", "404", null, null, this);
            obj.set_taborder("2");
            obj.set_binddataset("dsClinspe");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"128\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검체번호\"/></Band><Band id=\"body\"><Cell text=\"bind:clinspeNo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0.31%", "8", "311", "60", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15.11%", "-4", null, "60", "3.54%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("검체번호 검색");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "219", "70", "90", "32", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 311, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 318, 522, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SL_clinspeBlokPopupForm");
            		p.set_titletext("검체번호 검색");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SL_ClinspeBlokPopupForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("SL_ClinspeBlokPopupForm.xfdl", function() {
        /************************************************************************************
        *                                                                               	*
        * 검체번호 코드 팝업																*
        *                                                                              		*
        * @Path		    sup-SL_ClinspeBlokPopupForm											*
        *																					*
        * @Description 	검체정보 관리에 필요한 검체 관련 코드를 선택하기 위한 팝업 	*
        *               																	*
        * @Author	    정재욱    						                                	*
        * 									                                            	*
        * Created on 2016. 06. 10                            		                    	*
        *									                                           	 	*
        ************************************************************************************/

        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/

        //include "scripts::commonTransaction.xjs";

        /***************************************************************************************************
        * 검체번호 코드 Grid 이벤트                                  
        ***************************************************************************************************/

        this.clinspeGrid_OnCelldblClick = function(obj,e)
        {
        	var cliNo = this.dsClinspe.getColumn(e.row, "clinspeNo");
        	//alert(cliNo);
        	this.opener.setClinspeNoArray(cliNo);
            //this.opener.clinspeNoEd.value(cliNo);
        	this.close();
        }

        /***************************************************************************************************
        * 검체번호 조회                                
        ***************************************************************************************************/

        this.searchBtn_onclick = function(obj,e)
        {
        	this.gfnService("findClinspeNoList", "false");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncelldblclick", this.clinspeGrid_OnCelldblClick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("SL_ClinspeBlokPopupForm.xfdl");

       
    };
}
)();

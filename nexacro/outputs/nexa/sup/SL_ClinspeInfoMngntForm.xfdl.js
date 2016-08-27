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
                this.set_name("SL_clinspeInfoMngntForm");
                this.set_classname("SL_clinspeInfoMngntForm");
                this.set_titletext("검체정보조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1267,783);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSlClinspeInfo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"clinspeNo\" type=\"STRING\" size=\"256\"/><Column id=\"bloodGetDate\" type=\"STRING\" size=\"256\"/><Column id=\"bloodGetEmp\" type=\"STRING\" size=\"256\"/><Column id=\"exmntCd\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"respDoct\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeBlokCode\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeBlokProdDay\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeBlokProdTime\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeBlokQnt\" type=\"STRING\" size=\"256\"/><Column id=\"sliCode\" type=\"STRING\" size=\"256\"/><Column id=\"sliProdDay\" type=\"STRING\" size=\"256\"/><Column id=\"sliQnt\" type=\"STRING\" size=\"256\"/><Column id=\"sliCon\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findClinspeInfoList</Col><Col id=\"URL\">his::sup/pathology/findClinspeInfoList.do</Col><Col id=\"outData\">dsSlClinspeInfo=dsSlClinspeInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.49%", "8", "1670", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "3.83%", "-4", null, "60", "82.63%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("검체정보 조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "1.5%", "80", "74", "30", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("검체번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("clinspeNoEd", "absolute", "7.97%", "80", "104", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "1147", "80", "90", "32", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("clinspeSearchBtn", "absolute", "213", "79", "32", "32", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "1.5%", "124", "1223", "649", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsSlClinspeInfo");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"127\"/><Column size=\"148\"/><Column size=\"173\"/><Column size=\"133\"/><Column size=\"134\"/><Column size=\"146\"/><Column size=\"128\"/><Column size=\"127\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검체번호\"/><Cell col=\"1\" text=\"채혈일\"/><Cell col=\"2\" text=\"채혈자\"/><Cell col=\"3\" text=\"검사코드\"/><Cell col=\"4\" text=\"진료과\"/><Cell col=\"5\" text=\"처방의\"/><Cell col=\"6\" text=\"검체블록코드\"/><Cell col=\"7\" text=\"검체블록 제작일\"/><Cell col=\"8\" text=\"검체블록 제작시간\"/><Cell col=\"9\" text=\"검체블록 수량\"/><Cell col=\"10\" text=\"슬라이드 코드\"/><Cell col=\"11\" text=\"슬라이드 제작일\"/><Cell col=\"12\" text=\"슬라이드 수량\"/><Cell col=\"13\" text=\"슬라이드 내용\"/><Cell col=\"14\" text=\"환자번호\"/><Cell col=\"15\" text=\"환자명\"/></Band><Band id=\"body\"><Cell text=\"bind:clinspeNo\"/><Cell col=\"1\" text=\"bind:bloodGetDate\"/><Cell col=\"2\" text=\"bind:bloodGetEmp\"/><Cell col=\"3\" text=\"bind:exmntCd\"/><Cell col=\"4\" text=\"bind:trmtDept\"/><Cell col=\"5\" text=\"bind:respDoct\"/><Cell col=\"6\" text=\"bind:clinspeBlokCode\"/><Cell col=\"7\" text=\"bind:clinspeBlokProdDay\"/><Cell col=\"8\" text=\"bind:clinspeBlokProdTime\"/><Cell col=\"9\" text=\"bind:clinspeBlokQnt\"/><Cell col=\"10\" text=\"bind:sliCode\"/><Cell col=\"11\" text=\"bind:sliProdDay\"/><Cell col=\"12\" text=\"bind:sliQnt\"/><Cell col=\"13\" text=\"bind:sliCon\"/><Cell col=\"14\" text=\"bind:patNo\"/><Cell col=\"15\" text=\"bind:patNm\"/></Band></Format></Formats>");
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
            obj = new Layout("default", "", 1267, 783, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SL_clinspeInfoMngntForm");
            		p.set_titletext("검체정보조회");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SL_ClinspeInfoMngntForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("SL_ClinspeInfoMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SL_ClinspeInfoMngntForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 검체 정보 관리																*
        *                                                                               *
        * @Path		    sup-SL_ClinspeInfoMngntForm								        *
        *																				*
        * @Description 	검체 정보 관리에서 검체 정보를 조회한다.				 	*
        *               																*
        * @Author	    정재욱    						                                *
        * 									                                            *
        * Created on 2016. 06.11                           		                   		*
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

        this.clinspeSearchBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("SL_clinspeBlokPopupForm","sup","","");
        }

        this.setClinspeNoArray = function(cliNo){
        	this.clinspeNoEd.set_value(cliNo);
        }

        /***************************************************************************************************
        * 검체정보 조회                                
        ***************************************************************************************************/

        this.searchBtn_onclick = function(obj,e)
        {
        	var clinspeNo = this.clinspeNoEd.value;
         	var searchNo = "clinspeNo='"+clinspeNo+"'";
         	
        /* 	alert(searchNo);*/
         	this.dsService.setColumn(0, "argument", searchNo);
        	this.gfnService("findClinspeInfoList", "false");
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.clinspeSearchBtn.addEventHandler("onclick", this.clinspeSearchBtn_onclick, this);

        };

        this.loadIncludeScript("SL_ClinspeInfoMngntForm.xfdl");

       
    };
}
)();

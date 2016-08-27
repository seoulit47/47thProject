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
                this.set_name("SC_ReducPopForm");
                this.set_classname("SC_ocsPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,360,445);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReduc", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"reducCd\" type=\"STRING\" size=\"256\"/><Column id=\"reducNm\" type=\"STRING\" size=\"256\"/><Column id=\"reducAmt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findReducList</Col><Col id=\"URL\">his::sup/checkup/findReducList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsReduc=dsReduc</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div04", "absolute", "0%", "0", "358", "60", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("transparent URL('img::miniTitleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Grid("codeGrid", "absolute", "7.5%", "104", null, "312", "7.5%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsReduc");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"131\"/><Column size=\"174\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"감면코드\"/><Cell col=\"1\" text=\"감면명\"/></Band><Band id=\"body\"><Cell text=\"bind:reducCd\"/><Cell col=\"1\" style=\"font:8 arial;\" text=\"bind:reducNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15.28%", "-2", null, "60", "23.89%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("감면코드 조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "303", "66", "32", "32", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("reducCdEd", "absolute", "35.56%", "66", null, "30", "16.67%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "7.5%", "66", null, "30", "66.39%", null, this);
            obj.set_taborder("6");
            obj.set_text("감면코드/명");
            obj.style.set_background("thistle");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 360, 445, this,
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
        this.addIncludeScript("SC_ReducPopForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("SC_ReducPopForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 진료지원 처방코드 팝업                                                        	*
        *                                                                               *
        * @Path		                       	                        *
        * @Description 									   	*
        * @Author	    한수정					                                		*
        * 									                                            *
        * Created on 2016. 5. 27.                             		                    *
        *									                                            *
        ********************************************************************************/

        // 공통 스크립트
        //include "scripts::commonTransaction.xjs"; 

        // 공통 변수
        var rsltDeptCd

        // 화면 로드시
        this.SC_ReducPopForm_onload = function(obj,e)
        {
        	this.gfnService("findReducList", false);	
        }

        // 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	var reducCd = this.reducCdEd.value;
        	var argument = 'reducCd='+reducCd;
        	
        	var row = this.dsService.findRow("serviceID", "findReducList");
        	this.dsService.setColumn(row,"argument",argument);

        	this.gfnService("findReducList", false);	
        }

        
        this.reducGrid_oncelldblclick = function(obj,e)
        {
        	alert(e.row);
        	var arrRtn = new Array;
        	
        	arrRtn[0] = this.dsReduc.getColumn(e.row,"reducCd");
        	arrRtn[1] = this.dsReduc.getColumn(e.row,"reducNm");
        	arrRtn[2] = this.dsReduc.getColumn(e.row,"reducAmt");
        	
        	this.opener.setCode('',arrRtn);

        	this.close();		
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SC_ReducPopForm_onload, this);
            this.codeGrid.addEventHandler("oncelldblclick", this.reducGrid_oncelldblclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("SC_ReducPopForm.xfdl");

       
    };
}
)();

﻿(function()
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
                this.set_name("CM_DoctPopupForm");
                this.set_classname("CM_DoctPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,400,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("gdsEmp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findEmpList</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">callback</Col><Col id=\"outData\">gdsEmp=gdsEmp</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "396", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            obj.set_text("                 의사검색");
            this.addChild(obj.name, obj);

            obj = new Static("deptStc", "absolute", "3.25%", "64", "87", "27", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("진료부서코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("deptNmEd", "absolute", "32.5%", "64", null, "26", "28.5%", null, this);
            obj.set_taborder("2");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "74.25%", "65", null, "25", "6.75%", null, this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("doctGrid", "absolute", "3.25%", "96", null, "389", "2.5%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("gdsEmp");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"사원명\"/><Cell col=\"2\" text=\"진료과\"/></Band><Band id=\"body\"><Cell text=\"bind:empNo\"/><Cell col=\"1\" text=\"bind:empNm\"/><Cell col=\"2\" text=\"bind:deptNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CM_DoctPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CM_DoctPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("CM_DoctPopupForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 의사검색팝업                                                                *
        *                                                                               *
        * @Path		    의사검색팝업                     	         		            *
        * @Description  의사검색팝업                    
        *               								                                *
        * @Author	    황태경						                 		          	*
        * 									                                            *
        * Created on 	2016.6.9  	                           		                    *
        *									                                            *
        ********************************************************************************/
        //include "scripts::commonScripts.xjs"

        
        this.searchBtn_onclick = function(obj,e)
        {
        	this.dsService.setColumn(0,"argument","deptCd="+this.deptNmEd.value+" jobrk=의사");
        	this.gfnService("findEmpList");
        }

        this.CM_DoctPopupForm_onload = function(obj,e)
        {
        	

        	this.deptNmEd.set_value(this.parent.deptCd);
        	
        }

        this.doctGrid_oncelldblclick = function(obj,e)
        {
        	var arr = new Array;
        	var i=0;
        	arr[i++] = this.gdsEmp.getColumn(e.row,"empNo");
        	arr[i++] = this.gdsEmp.getColumn(e.row,"empNm");
        	arr[i++] = this.gdsEmp.getColumn(e.row,"deptNm");
        	this.opener.setDoct(arr);
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.CM_DoctPopupForm_onload, this);
            this.deptStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.doctGrid.addEventHandler("oncelldblclick", this.doctGrid_oncelldblclick, this);

        };

        this.loadIncludeScript("CM_DoctPopupForm.xfdl");

       
    };
}
)();

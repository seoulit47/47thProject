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
                this.set_name("MB_DoctPopupForm");
                this.set_classname("MB_DoctPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,324,426);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findEmpList</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">callback</Col><Col id=\"outData\">gdsEmp=gdsEmp</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("gdsEmp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0.62%", "2", null, "60", "1.54%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::miniTitleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "14.83%", "-3", null, "60", "46.37%", null, this.titleDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("의사검색");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("docDiv", "absolute", "2.47%", "60", null, "359", "1.85%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Static("deptStc", "absolute", "2.58%", "8", null, "27", "69.35%", null, this.docDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("부서명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.docDiv.addChild(obj.name, obj);
            obj = new Edit("deptNmEd", "absolute", "31.94%", "8", null, "26", "29.03%", null, this.docDiv);
            obj.set_taborder("1");
            obj.getSetter("class").set("AreaEdt");
            this.docDiv.addChild(obj.name, obj);
            obj = new Grid("doctGrid", "absolute", "2.9%", "40", null, "311", "1.94%", null, this.docDiv);
            obj.set_taborder("2");
            obj.set_binddataset("gdsEmp");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj.set_scrollpixel("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"사원명\"/><Cell col=\"2\" text=\"진료과\"/></Band><Band id=\"body\"><Cell text=\"bind:empNo\"/><Cell col=\"1\" text=\"bind:empNm\"/><Cell col=\"2\" text=\"bind:deptNm\"/></Band></Format></Formats>");
            this.docDiv.addChild(obj.name, obj);
            obj = new Button("searchBtn", "absolute", "70.97%", "6", null, "32", "0.65%", null, this.docDiv);
            obj.set_taborder("3");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.docDiv.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.titleDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::miniTitleBar1.jpg')");

            	}
            );
            this.titleDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 359, this.docDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");

            	}
            );
            this.docDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 324, 426, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MB_DoctPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MB_DoctPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("MB_DoctPopupForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("MB_DoctPopupForm.xfdl", "scripts::commonPopup.xjs");
        this.registerScript("MB_DoctPopupForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 의사검색팝업                                                                *
        *                                                                               *
        * @Path		    의사검색팝업                     	         		            *
        * @Description  의사검색팝업      											*              
        *               								                                *
        * @Author	    이병민						                 		          	*
        * 									                                            *
        * Created on 	2016.06.20		                           		                *
        *									                                            *
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonPopup.xjs";

        this.MB_DoctPopupForm_onload = function(obj,e)
        {
        	this.docDiv.deptNmEd.set_value(this.parent.deptNm);
        	this.dsService.setColumn(0,"argument","deptCd="+this.parent.deptCd);
        }

        this.docDiv.doctGrid_oncelldblclick = function(obj,e){
        	var arr = new Array;
        	var i=0;
        	arr[i++] = this.gdsEmp.getColumn(e.row,"empNo");
        	arr[i++] = this.gdsEmp.getColumn(e.row,"empNm");
        	arr[i++] = this.gdsEmp.getColumn(e.row,"deptNm");
        	this.opener.setDoct(arr);
        	this.close();
        }

        this.docDiv.searchBtn_onclick = function(obj,e){
        	this.gfnService("findEmpList");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.MB_DoctPopupForm_onload, this);
            this.docDiv.deptStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.docDiv.doctGrid.addEventHandler("oncelldblclick", this.docDiv.doctGrid_oncelldblclick, this);
            this.docDiv.searchBtn.addEventHandler("onclick", this.docDiv.searchBtn_onclick, this);

        };

        this.loadIncludeScript("MB_DoctPopupForm.xfdl");

       
    };
}
)();

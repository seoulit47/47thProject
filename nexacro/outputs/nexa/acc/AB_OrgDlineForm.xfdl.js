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
                this.set_name("AB_OrgDlineForm");
                this.set_classname("AB_OrgDlineForm");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGB100", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findOrgDlineList</Col><Col id=\"URL\">his::acc/budget/findOrgDlineList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsOrgDline=dsOrgDline</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">registerOrgDline</Col><Col id=\"URL\">his::acc/budget/registerOrgDline.do</Col><Col id=\"inData\">dsOrgDline=dsOrgDline:U</Col><Col id=\"outData\">dsOrgDline=dsOrgDline</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">registerOrgDlineCallback</Col></Row><Row><Col id=\"serviceID\">copyBimok</Col><Col id=\"URL\">his::acc/budget/copyBimok.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsBudgBimok=dsBudgBimok</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOrgDline", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"reason\" type=\"STRING\" size=\"256\"/><Column id=\"procDay\" type=\"STRING\" size=\"256\"/><Column id=\"procPerson\" type=\"STRING\" size=\"256\"/><Column id=\"dlineDiv\" type=\"STRING\" size=\"256\"/><Column id=\"modifier\" type=\"STRING\" size=\"256\"/><Column id=\"procDiv\" type=\"STRING\" size=\"256\"/><Column id=\"modiDay\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GB100</Col><Col id=\"dsName\">dsGB100</Col></Row><Row><Col id=\"code\">GB101</Col><Col id=\"dsName\">dsGB101</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGB101", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "4", "1246", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);
            obj = new Static("titleEdt02", "absolute", "4.41%", "6", null, "44", "77.77%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("예산편성 마감관리");
            obj.set_cssclass("TStc");
            obj.style.set_font("bold 15 Dotum");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_year", "absolute", "1.52%", "76", null, "27", "91.44%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("회계년도");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "9.28%", "74", null, "30", "81.28%", null, this);
            obj.set_taborder("2");
            obj.set_value("2016");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "248", "72", "90", "32", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("orgDlineGrid", "absolute", "1.36%", "161", null, "591", "1.12%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsOrgDline");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"311\"/><Column size=\"97\"/><Column size=\"131\"/><Column size=\"80\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회계연도\"/><Cell col=\"1\" text=\"마감구분\"/><Cell col=\"2\" text=\"처리구분\"/><Cell col=\"3\" text=\"사유\"/><Cell col=\"4\" text=\"처리자\"/><Cell col=\"5\" text=\"처리일자\"/><Cell col=\"6\" text=\"수정자\"/><Cell col=\"7\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:accYear\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:dlineDiv\" combodataset=\"dsGB100\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:procDiv\" combodataset=\"dsGB101\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" text=\"bind:reason\"/><Cell col=\"4\" text=\"bind:procPerson\"/><Cell col=\"5\" text=\"bind:procDay\"/><Cell col=\"6\" text=\"bind:modifier\"/><Cell col=\"7\" text=\"bind:modiDay\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_card_sort", "absolute", "1.52%", "119", null, "27", "91.44%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("마감구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("dlineDivCombo", "absolute", "9.28%", "119", null, "26", "80.88%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("dsGB100");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("stc_card_sort00", "absolute", "19.76%", "119", null, "27", "73.2%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("처리구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("procDivCombo", "absolute", "27.44%", "119", null, "26", "62.72%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("dsGB101");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("stc_emp", "absolute", "37.92%", "119", null, "27", "55.04%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("사유");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("reasonEd", "absolute", "45.6%", "119", null, "26", "16%", null, this);
            obj.set_taborder("10");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "352", "72", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1246, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar6.jpg')");
            		p.set_cssclass("TStc");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AB_OrgDlineForm");
            		p.set_titletext("New Form");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AB_OrgDlineForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AB_OrgDlineForm.xfdl", function() {

        //include "scripts::commonScripts.xjs";  

        //*******
        //onload
        //*******
        this.AB_OrgDlineForm_onload = function(obj,e)
        {
        	this.gfnBind();
        }

        //*****
        //조회
        //*****
        this.orgDlineSearch_btn_onclick = function(obj,e)
        {
        	var accYear = this.yearSpin.value;
        	var argument = "accYear="+accYear;
        	
        	this.dsService.setColumn(0, "argument", argument);
        	this.gfnService("findOrgDlineList");
        }

        //*****
        //저장
        //*****
        this.dlineRegBtn_onclick = function(obj,e)
        {
        	var aRow = this.dsOrgDline.addRow();
        	var accYear = this.yearSpin.value;
        	var dlineDiv = this.dlineDivCombo.value;
        	var procDiv = this.procDivCombo.value;
        	var reason = this.reasonEd.value;
        	var procPerson = application.gdsEmp.getColumn(0,"empNm")
        	
        	this.dsOrgDline.setColumn(aRow,"accYear",accYear);
        	this.dsOrgDline.setColumn(aRow,"dlineDiv",dlineDiv);
        	this.dsOrgDline.setColumn(aRow,"procDiv",procDiv);
        	this.dsOrgDline.setColumn(aRow,"reason",reason);
        	this.dsOrgDline.setColumn(aRow,"procPerson",procPerson);
        	//alert(aRow);
        	//alert(accYear);
        	//alert(dlineDiv);
        	//alert(procDiv);
        	//alert(reason);
        	//alert(procPerson);
        	
        	this.gfnService("registerOrgDline");
        	
        }

        //*********
        //callback
        //*********
        this.registerOrgDlineCallback = function(svcID,errorCode,errorMsg){
        	if(errorCode==-1)
        	{
        	alert(errorMsg);
        	this.dsOrgDline.deleteRow(this.dsOrgDline.rowcount-1);
        	}else
        	{
        	alert("마감 성공");
        	}

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AB_OrgDlineForm_onload, this);
            this.stc_year.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.searchBtn.addEventHandler("onclick", this.orgDlineSearch_btn_onclick, this);
            this.stc_card_sort.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_card_sort00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_emp.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.dlineRegBtn_onclick, this);

        };

        this.loadIncludeScript("AB_OrgDlineForm.xfdl");

       
    };
}
)();

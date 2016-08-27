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
                this.set_name("EX_TestForm");
                this.set_classname("EX_TestForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGds", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"gdsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ediCd\" type=\"STRING\" size=\"256\"/><Column id=\"vmiYb\" type=\"STRING\" size=\"256\"/><Column id=\"useDept\" type=\"STRING\" size=\"256\"/><Column id=\"stand\" type=\"STRING\" size=\"256\"/><Column id=\"ordUnit\" type=\"STRING\" size=\"256\"/><Column id=\"subulUnit\" type=\"STRING\" size=\"256\"/><Column id=\"cngQnt\" type=\"STRING\" size=\"256\"/><Column id=\"cust\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtPrice\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"spliesDiv\" type=\"STRING\" size=\"256\"/><Column id=\"wh\" type=\"STRING\" size=\"0\"/><Column id=\"rackNo\" type=\"STRING\" size=\"256\"/><Column id=\"insurDiv\" type=\"STRING\" size=\"256\"/><Column id=\"disuseDate\" type=\"STRING\" size=\"256\"/><Column id=\"disuseDiv\" type=\"STRING\" size=\"256\"/><Column id=\"picLoc\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"regWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerId\" type=\"STRING\" size=\"256\"/><Column id=\"modWorkerIp\" type=\"STRING\" size=\"256\"/><Column id=\"modDate\" type=\"STRING\" size=\"256\"/><Column id=\"midGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrpCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"handle\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"handle\">1</Col></Row><Row><Col id=\"handle\">2</Col></Row><Row><Col id=\"handle\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTest2", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "3.91%", "63", null, "50", "84.38%", null, this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "26.56%", "63", null, "465", "39.26%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsGds");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"gdsCd\"/><Cell col=\"1\" disptype=\"normal\" text=\"gdsNm\"/><Cell col=\"2\" disptype=\"normal\" text=\"ediCd\"/><Cell col=\"3\" disptype=\"normal\" text=\"vmiYb\"/><Cell col=\"4\" disptype=\"normal\" text=\"useDept\"/><Cell col=\"5\" disptype=\"normal\" text=\"stand\"/><Cell col=\"6\" disptype=\"normal\" text=\"ordUnit\"/><Cell col=\"7\" disptype=\"normal\" text=\"subulUnit\"/><Cell col=\"8\" disptype=\"normal\" text=\"cngQnt\"/><Cell col=\"9\" disptype=\"normal\" text=\"cust\"/><Cell col=\"10\" disptype=\"normal\" text=\"ctrtPrice\"/><Cell col=\"11\" disptype=\"normal\" text=\"ctrtStartDate\"/><Cell col=\"12\" disptype=\"normal\" text=\"ctrtEndDate\"/><Cell col=\"13\" disptype=\"normal\" text=\"spliesDiv\"/><Cell col=\"14\" disptype=\"normal\" text=\"wh\"/><Cell col=\"15\" disptype=\"normal\" text=\"rackNo\"/><Cell col=\"16\" disptype=\"normal\" text=\"insurDiv\"/><Cell col=\"17\" disptype=\"normal\" text=\"disuseDate\"/><Cell col=\"18\" disptype=\"normal\" text=\"disuseDiv\"/><Cell col=\"19\" disptype=\"normal\" text=\"picLoc\"/><Cell col=\"20\" disptype=\"normal\" text=\"note\"/><Cell col=\"21\" disptype=\"normal\" text=\"regWorkerId\"/><Cell col=\"22\" disptype=\"normal\" text=\"regWorkerIp\"/><Cell col=\"23\" disptype=\"normal\" text=\"regDate\"/><Cell col=\"24\" disptype=\"normal\" text=\"modWorkerId\"/><Cell col=\"25\" disptype=\"normal\" text=\"modWorkerIp\"/><Cell col=\"26\" disptype=\"normal\" text=\"modDate\"/><Cell col=\"27\" disptype=\"normal\" text=\"midGrpCd\"/><Cell col=\"28\" disptype=\"normal\" text=\"smGrpCd\"/><Cell col=\"29\" disptype=\"normal\" text=\"bigGrpCd\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:gdsCd\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:gdsNm\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:ediCd\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:vmiYb\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:useDept\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:stand\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:ordUnit\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:subulUnit\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:cngQnt\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:cust\"/><Cell col=\"10\" disptype=\"normal\" text=\"bind:ctrtPrice\"/><Cell col=\"11\" disptype=\"normal\" text=\"bind:ctrtStartDate\"/><Cell col=\"12\" disptype=\"normal\" text=\"bind:ctrtEndDate\"/><Cell col=\"13\" disptype=\"normal\" text=\"bind:spliesDiv\"/><Cell col=\"14\" disptype=\"normal\" text=\"bind:wh\"/><Cell col=\"15\" disptype=\"normal\" text=\"bind:rackNo\"/><Cell col=\"16\" disptype=\"normal\" text=\"bind:insurDiv\"/><Cell col=\"17\" disptype=\"normal\" text=\"bind:disuseDate\"/><Cell col=\"18\" disptype=\"normal\" text=\"bind:disuseDiv\"/><Cell col=\"19\" disptype=\"normal\" text=\"bind:picLoc\"/><Cell col=\"20\" disptype=\"normal\" text=\"bind:note\"/><Cell col=\"21\" disptype=\"normal\" text=\"bind:regWorkerId\"/><Cell col=\"22\" disptype=\"normal\" text=\"bind:regWorkerIp\"/><Cell col=\"23\" disptype=\"normal\" text=\"bind:regDate\"/><Cell col=\"24\" disptype=\"normal\" text=\"bind:modWorkerId\"/><Cell col=\"25\" disptype=\"normal\" text=\"bind:modWorkerIp\"/><Cell col=\"26\" disptype=\"normal\" text=\"bind:modDate\"/><Cell col=\"27\" disptype=\"normal\" text=\"bind:midGrpCd\"/><Cell col=\"28\" disptype=\"normal\" text=\"bind:smGrpCd\"/><Cell col=\"29\" disptype=\"normal\" text=\"bind:bigGrpCd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "66.41%", "128", null, "180", "8.98%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("dsTest2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"key\"/><Cell col=\"1\" text=\"value\"/></Band><Band id=\"body\"><Cell text=\"bind:key\"/><Cell col=\"1\" expr=\"expr:comp.parent.dsTest.getColumn(0, &quot;handle&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("EX_TestForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("EX_TestForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("EX_TestForm.xfdl", function() {
        //include "scripts::commonScripts.xjs"

        this.Button00_onclick = function(obj,e)
        {
        	//this.gfnCodePopup("GP500");
        	
        	this.transaction(
        		"test",
        		"his::com/test.do",
        		"",
        		"dsGds=dsGds",
        		"gdsCd=godseop gdsNm=aaa",
        		""	
        	);
        }

        this.EX_TestForm_onload = function(obj,e)
        {
        	alert(this.dsTest.getColumn(0, "handle"));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.EX_TestForm_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("EX_TestForm.xfdl");

       
    };
}
)();

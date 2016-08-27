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
                this.set_name("SC_PckPopForm");
                this.set_classname("SC_ocsPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,608,584);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">SC031</Col><Col id=\"dsName\">dsGenderCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPckList</Col><Col id=\"URL\">his::sup/checkup/findPckList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsPck=dsPck</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPck", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"pckNm\" type=\"STRING\" size=\"256\"/><Column id=\"genderCd\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"inspDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGenderCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", "588", "60", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "12.06%", "-2", null, "60", "27.08%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("종합검진 패키지");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("pckGrid", "absolute", "28", "109", "550", "403", null, null, this);
            obj.set_taborder("11");
            obj.set_binddataset("dsPck");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"205\"/><Column size=\"62\"/><Column size=\"80\"/><Column size=\"57\"/><Column size=\"50\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"패키지코드\"/><Cell col=\"1\" text=\"패키지명\"/><Cell col=\"2\" text=\"성별\"/><Cell col=\"3\" text=\"금액\"/><Cell col=\"4\" text=\"검진구분\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:pckCd\"/><Cell col=\"1\" text=\"bind:pckNm\"/><Cell col=\"2\" text=\"bind:genderCd\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:amt\"/><Cell col=\"4\" text=\"bind:inspDivCd\"/><Cell col=\"5\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "4.77%", "66", null, "30", "72.53%", null, this);
            obj.set_taborder("12");
            obj.set_text("패키지코드/명");
            obj.style.set_background("thistle");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("pckCdEd", "absolute", "28.45%", "66", null, "30", "26.32%", null, this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Button("pckSearchBtn", "absolute", "490", "66", "90", "32", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 608, 584, this,
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
        this.addIncludeScript("SC_PckPopForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SC_PckPopForm.xfdl", function() {
        //include "scripts::commonScripts.xjs"; 

        // 코드 바인드
        this.SC_PckPopForm_onload = function(obj,e)
        {
        	this.gfnBind();
        	this.pckSearchBtn_onclick(null,null);
        }

        // 조회
        this.pckSearchBtn_onclick = function(obj,e)
        {
        	var pckCd = this.pckCdEd.value;
        	var useYn = 'Y';
        	var argument = 'pckCd='+pckCd+' useYn='+useYn;
        	this.dsService.setColumn(0, "argument", argument);
        	
        	this.gfnService("findPckList");	
        }

        // 
        this.pckGrid_oncelldblclick = function(obj,e)
        {

        	var pckCd = this.dsPck.getColumn(e.row, "pckCd");
        	var pckNm = this.dsPck.getColumn(e.row, "pckNm");
        	var amt =  this.dsPck.getColumn(e.row, "amt");

        	var pckArr = [pckCd, pckNm, amt];
        	
        	this.opener.pckCode(pckArr);

        	this.close();
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SC_PckPopForm_onload, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.pckGrid.addEventHandler("oncelldblclick", this.pckGrid_oncelldblclick, this);
            this.pckSearchBtn.addEventHandler("onclick", this.pckSearchBtn_onclick, this);

        };

        this.loadIncludeScript("SC_PckPopForm.xfdl");

       
    };
}
)();

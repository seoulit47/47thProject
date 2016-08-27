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
                this.set_name("AE_AccPridHelpForm");
                this.set_classname("AE_AccPridHelpForm");
                this.set_titletext("회계기수 도움 화면");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,347,501);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAccPridList</Col><Col id=\"URL\">his::acc/elementary/findAccPridList.do</Col><Col id=\"inData\">dsAccPrid=dsAccPrid</Col><Col id=\"outData\">dsAccPrid=dsAccPrid</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAccPrid", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"dlineYn\" type=\"STRING\" size=\"256\"/><Column id=\"dlineDate\" type=\"STRING\" size=\"256\"/><Column id=\"dlineManCd\" type=\"STRING\" size=\"256\"/><Column id=\"carrforYn\" type=\"STRING\" size=\"256\"/><Column id=\"carrforManCd\" type=\"STRING\" size=\"256\"/><Column id=\"carrforDate\" type=\"STRING\" size=\"256\"/><Column id=\"regId\" type=\"STRING\" size=\"256\"/><Column id=\"regIp\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"modId\" type=\"STRING\" size=\"256\"/><Column id=\"modIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div04", "absolute", "-3.17%", "0", "358", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::miniTitleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11.53%", "-4", null, "60", "27.67%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("회계기수 도움");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("accPridGrid", "absolute", "17", "62", "316", "430", null, null, this);
            obj.set_taborder("2");
            obj.set_binddataset("dsAccPrid");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"85\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회계기수\"/><Cell col=\"1\" text=\"시작일자\"/><Cell col=\"2\" text=\"종료일자\"/></Band><Band id=\"body\"><Cell text=\"bind:accPrid\"/><Cell col=\"1\" text=\"bind:startDate\"/><Cell col=\"2\" text=\"bind:endDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 347, 501, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AE_AccPridHelpForm");
            		p.set_titletext("회계기수 도움 화면");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AE_AccPridHelpForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AE_AccPridHelpForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";  

        /********************************************************************************
        	폼 온로드 이벤트
        ********************************************************************************/
        this.AE_AccPridHelpForm_onload = function(obj,e)
        {
        	this.gfnService("findAccPridList");
        }

        /********************************************************************************
         그리드 셀 더블클릭 이벤트
        ********************************************************************************/
        this.accPridGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array;
        	var i=0;

        	arrRtn[i++] = this.dsAccPrid.getColumn(e.row,"accPrid");
        	arrRtn[i++] = this.dsAccPrid.getColumn(e.row,"startDate");
        	arrRtn[i++] = this.dsAccPrid.getColumn(e.row,"endDate");
        	
        	this.opener.setArrRtn(arrRtn);
        	this.close();
        }

        
        /********************************************************************************
         트렌젝션 검사
        ********************************************************************************/

        this.callBack=function(serviceID,errorCode,errorMsg){
        	if(serviceID="findAccPridList"){
        		if(errorCode < 0){
        			alert(errorMsg+"회계기수목록을 불러오는데 실패했습니다");
        		}
        	}
        }

        
        	
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAccPrid.addEventHandler("onrowposchanged", this.dsAccYear_onrowposchanged, this);
            this.addEventHandler("onload", this.AE_AccPridHelpForm_onload, this);
            this.accPridGrid.addEventHandler("oncelldblclick", this.accPridGrid_oncelldblclick, this);

        };

        this.loadIncludeScript("AE_AccPridHelpForm.xfdl");

       
    };
}
)();

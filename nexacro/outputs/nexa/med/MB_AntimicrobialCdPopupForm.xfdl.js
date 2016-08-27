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
                this.set_name("MB_AntimicrobialCdPopupForm");
                this.set_classname("MB_AntimicrobialCdPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,600,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAntimicrobialList</Col><Col id=\"URL\">his::med/base/findAntimicrobialList.do</Col><Col id=\"outData\">dsAntimicrobial=dsAntimicrobial</Col><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAntimicrobial", this);
            obj._setContents("<ColumnInfo><Column id=\"anticd\" type=\"STRING\" size=\"256\"/><Column id=\"antinm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", null, "60", "0.5%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11.83%", "-4", null, "60", "51.5%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("항생제 조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Grid("grid", "absolute", "2.67%", "80", null, "309", "2.17%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("dsAntimicrobial");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항생제 코드\"/><Cell col=\"1\" text=\"항생제명\"/></Band><Band id=\"body\"><Cell text=\"bind:anticd\"/><Cell col=\"1\" text=\"bind:antinm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MB_AntimicrobialCdPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MB_AntimicrobialCdPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("MB_AntimicrobialCdPopupForm.xfdl", function() {
        /********************************************************************************                                                                            
        항생제 조회화면                                           						                                                                         
        @Path			진료처방 공통(Medication Base)              				   				
        @Description	항생제 조회 다이얼로그						
        @Author	  		강찬모				    			                        								                                            
        @Create         2016. 6. 29.                             		                    				                                            
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";  

        this.MB_AntimicrobialCdPopupForm_onload = function(obj,e)
        {
        	var speciesVirusCd = "bacgencd="+this.parent.speciesVirus;
        	this.dsService.setColumn(0, "argument", speciesVirusCd);
        	this.gfnService("findAntimicrobialList", false);
        }

        this.grid_oncelldblclick = function(obj,e)
        {
        	var arr = new Array();
        	arr[0] = this.dsAntimicrobial.getColumn(this.dsAntimicrobial.rowposition, "anticd");
        	arr[1] = this.dsAntimicrobial.getColumn(this.dsAntimicrobial.rowposition, "antinm");
        	this.opener.setDsCode(arr,"antimicrobial");
        	this.close();	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.MB_AntimicrobialCdPopupForm_onload, this);
            this.grid.addEventHandler("oncelldblclick", this.grid_oncelldblclick, this);

        };

        this.loadIncludeScript("MB_AntimicrobialCdPopupForm.xfdl");

       
    };
}
)();

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
                this.set_name("MB_DiseaseCdPopupForm");
                this.set_classname("MB_DiseasePopupForm");
                this.set_titletext("상병코드 조회");
                this._setFormPosition(0,0,500,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDisease", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"lv\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findFeeCdList</Col><Col id=\"URL\">his::won/baseInfo/findFeeList.do</Col><Col id=\"outData\">dsFeeCd=dsFeeCd</Col></Row><Row><Col id=\"serviceID\">batchFeeCdProcess</Col><Col id=\"URL\">his::won/baseInfo/batchFeeProcess.do</Col><Col id=\"inData\">dsFeeCd=dsFeeCd:u</Col></Row><Row><Col id=\"serviceID\">findDiseaseCdList</Col><Col id=\"URL\">his::med/base/findDiseaseCdList.do</Col><Col id=\"outData\">dsDisease=dsDisease</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div02", "absolute", "1.2%", "0", "490", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::miniTitleBar4.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "11.84%", "-4", null, "60", "51.43%", null, this.Div02);
            obj.getSetter("taborder").set("0");
            obj.set_text("상병코드 선택");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("diseaseGrid", "absolute", "11", "67", "481", "423", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsDisease");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"376\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"상병명\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:codeNm\" treelevel=\"bind:lv\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 490, 60, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::miniTitleBar4.jpg')");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MB_DiseasePopupForm");
            		p.set_titletext("상병코드 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MB_DiseaseCdPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("MB_DiseaseCdPopupForm.xfdl", function() {
        /********************************************************************************                                                                            
        상병코드 조회화면                                           						                                                                         
        @Path			진료처방 공통(Medication Base)              				   				
        @Description	상병코드 조회 다이얼로그						
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 6. 9.                             		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";  
         
        this.MB_DiseaseCdPopupForm_onload = function(obj,e)
        {
        	this.gfnService("findDiseaseCdList");
        }
         
        this.diseaseGrid_oncelldblclick = function(obj,e)
        {
        	if(this.dsDisease.getColumn(this.dsDisease.rowposition, "lv") != 0){
        		var arrRtn = new Array();
        		arrRtn[0] = this.dsDisease.getColumn(this.dsDisease.rowposition, "code");
        		arrRtn[1] = this.dsDisease.getColumn(this.dsDisease.rowposition, "codeNm");
        		
        		this.opener.setCodeArray("DG", arrRtn);
        		this.close();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.MB_DiseaseCdPopupForm_onload, this);
            this.diseaseGrid.addEventHandler("oncelldblclick", this.diseaseGrid_oncelldblclick, this);

        };

        this.loadIncludeScript("MB_DiseaseCdPopupForm.xfdl");

       
    };
}
)();

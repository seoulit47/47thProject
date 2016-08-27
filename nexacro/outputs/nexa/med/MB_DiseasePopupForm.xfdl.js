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
                this.set_name("MB_DiseasePopupForm");
                this.set_classname("MB_DiseasePopupForm");
                this.set_titletext("상병 조회");
                this._setFormPosition(0,0,600,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDisease", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"lv\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPCodeDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">a1</Col><Col id=\"value\">G-I</Col></Row><Row><Col id=\"code\">h1</Col><Col id=\"value\">Mental &amp; Behavioral</Col></Row><Row><Col id=\"code\">d1</Col><Col id=\"value\">CAROI</Col></Row><Row><Col id=\"code\">g1</Col><Col id=\"value\">Hematology, endo &amp; metabolism</Col></Row><Row><Col id=\"code\">l1</Col><Col id=\"value\">타박상</Col></Row><Row><Col id=\"code\">b1</Col><Col id=\"value\">SKIN AND APPENDAGE</Col></Row><Row><Col id=\"code\">c1</Col><Col id=\"value\">Resp</Col></Row><Row><Col id=\"code\">k1</Col><Col id=\"value\">외과</Col></Row><Row><Col id=\"code\">f1</Col><Col id=\"value\">MUSCULO-SKELETAL</Col></Row><Row><Col id=\"code\">j1</Col><Col id=\"value\">EYE</Col></Row><Row><Col id=\"code\">e1</Col><Col id=\"value\">GENITOUIRNARY</Col></Row><Row><Col id=\"code\">i1</Col><Col id=\"value\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findDiseaseList</Col><Col id=\"URL\">his::med/base/findDiseaseList.do</Col><Col id=\"outData\">dsDisease=dsDisease</Col><Col id=\"callbackFunc\">diseaseCallback</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", "597", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11.83%", "-4", null, "60", "51.5%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("상병 조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv08", "absolute", "2.83%", "66", null, "27", "83.67%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("분류");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("#000000ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("pCodeCombo", "absolute", "17.5%", "67", null, "25", "61.5%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("dsPCodeDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("stDiv4", "absolute", "42.33%", "66", null, "27", "44.17%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("상병 이름");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("#000000ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("diseaseNmEd", "absolute", "56.83%", "65", null, "30", "20.67%", null, this);
            obj.set_taborder("5");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("diseaseGrid", "absolute", "2.67%", "104", null, "285", "2.17%", null, this);
            obj.set_taborder("6");
            obj.set_binddataset("dsDisease");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"상병코드\"/><Cell col=\"1\" text=\"상병 이름\"/><Cell col=\"2\" text=\"분류코드\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:codeNm\"/><Cell col=\"2\" text=\"bind:pCode\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchDiseaseBtn", "absolute", "497", "64", "90", "32", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MB_DiseasePopupForm");
            		p.set_titletext("상병 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","pCodeCombo","value","dsAtTaxinv","purchSalesDiv");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MB_DiseasePopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("MB_DiseasePopupForm.xfdl", function() {
        /********************************************************************************                                                                            
        상병 조회화면                                           						                                                                         
        @Path			진료처방 공통(Medication Base)              				   				
        @Description	상병 조회 다이얼로그						
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 6. 11.                             		                    				                                            
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";  

        this.searchDiseaseBtn_onclick = function(obj,e)
        {
        	this.dsService.setColumn(0, 4, "pCode=" + this.pCodeCombo.value + " codeNm=" + this.diseaseNmEd.value);
        	
        	this.gfnService("findDiseaseList");
        }

        this.diseaseGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array();
        	arrRtn[0] = this.dsDisease.getColumn(this.dsDisease.rowposition, "code");
        	arrRtn[1] = this.dsDisease.getColumn(this.dsDisease.rowposition, "codeNm");
        	this.opener.setDsCode(arrRtn, "disease");
        	this.close();
        //	var object = application.getActiveForm();	
        // 	if(application.getActiveForm().name == "MpPrescSearchForm"){
        // 		var inOut = application.getActiveForm().dsPaientDiv.getColumn(application.getActiveForm().dsPaientDiv.rowposition,"inOut");
        // 		if(inOut == "내래"){
        // 			object = application.getActiveForm().prescTab.inTab;
        // 		}else if(inOut == "외래"){
        // 			object = application.getActiveForm().prescTab.outTab;
        // 		}
        // 	}
        // 	object.mpPrescDtlDiv.diseaseCdEd.set_value(code);
        // 	object.mpPrescDtlDiv.diseaseNmEd.set_value(codeName);
        // 	
        // 	this.parent.destroy();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.stDiv08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.pCodeCombo.addEventHandler("onitemchanged", this.taxinvDiv_purchSalesComb_onitemchanged, this);
            this.diseaseGrid.addEventHandler("oncelldblclick", this.diseaseGrid_oncelldblclick, this);
            this.searchDiseaseBtn.addEventHandler("onclick", this.searchDiseaseBtn_onclick, this);

        };

        this.loadIncludeScript("MB_DiseasePopupForm.xfdl");

       
    };
}
)();

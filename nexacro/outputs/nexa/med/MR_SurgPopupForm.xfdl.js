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
                this.set_name("MR_SurgPopupForm");
                this.set_classname("MP_SurgPopupForm");
                this.set_titletext("수술 명");
                this._setFormPosition(0,0,800,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMpSurgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"undefined\" size=\"100\"/><Column id=\"codeDetail\" type=\"undefined\" size=\"100\"/><Column id=\"codeRange\" type=\"undefined\" size=\"100\"/><Column id=\"surgNm\" type=\"undefined\" size=\"100\"/><Column id=\"surgName\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSearchCondition", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"tableName\" type=\"STRING\" size=\"256\"/><Column id=\"columnName\" type=\"STRING\" size=\"256\"/><Column id=\"columnValue\" type=\"STRING\" size=\"256\"/><Column id=\"operator\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSurgRangDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">일반외과 수술</Col></Row><Row><Col id=\"value\">신경외과 수술</Col></Row><Row><Col id=\"value\">정형외과 수술</Col></Row><Row><Col id=\"value\">성형외과 수술</Col></Row><Row><Col id=\"value\">흉부외과 수술</Col></Row><Row><Col id=\"value\">비뇨기과 수술</Col></Row><Row><Col id=\"value\">안과 수술</Col></Row><Row><Col id=\"value\">이비인후과 수술</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findMpSurgCdList</Col><Col id=\"inData\">dsSearchCondition=dsSearchCondition</Col><Col id=\"URL\">his::med/recipe/findMpSurgCdList.do</Col><Col id=\"outData\">dsMpSurgCd=dsMpSurgCd</Col><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0.68%", "2", null, "60", "63.38%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::miniTitleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "14.4%", "5", null, "46", "15.22%", null, this.Div06);
            obj.getSetter("taborder").set("0");
            obj.set_text("수술 명");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("stDiv08", "absolute", "3.25%", "70", "80", "27", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("분류");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("#000000ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("rangeCombo", "absolute", "14.88%", "71", "150", "25", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSurgRangDiv");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("stDiv4", "absolute", "36.88%", "70", "80", "27", null, null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("수술 명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("#000000ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("surgName", "absolute", "48.25%", "69", "150", "30", null, null, this);
            obj.set_taborder("4");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("surgGrid", "absolute", "3%", "113", null, "383", "3.13%", null, this);
            obj.set_taborder("6");
            obj.set_binddataset("dsMpSurgCd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"63\"/><Column size=\"80\"/><Column size=\"116\"/><Column size=\"143\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드 상세\"/><Cell col=\"2\" text=\"범위\"/><Cell col=\"3\" text=\"수술 명\"/><Cell col=\"4\" text=\"수술 이름\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:codeDetail\"/><Cell col=\"2\" text=\"bind:codeRange\"/><Cell col=\"3\" text=\"bind:surgNm\"/><Cell col=\"4\" text=\"bind:surgName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "69%", "66", null, "32", "19.75%", null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::miniTitleBar1.jpg')");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MP_SurgPopupForm");
            		p.set_titletext("수술 명");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","rangeCombo","value","dsAtTaxinv","purchSalesDiv");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MR_SurgPopupForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("MR_SurgPopupForm.xfdl", "scripts::commonBind.xjs");
        this.registerScript("MR_SurgPopupForm.xfdl", function() {
         /********************************************************************************
        *                                                                               *
        * 				            												    *
        *                                                                               *
        * @Path		    수술 코드 조회   							                 	*
        * @Description  수술 코드 조회							 	                *
        * 																				*
        *																				*
        * @Author	 류재춘    					                             		*
        * 									                                            *
        * Created on 2016. 06. 14                             		                    *
        *									                                            *
        ********************************************************************************/
        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/
        //include "scripts::commonTransaction.xjs"; 
        //include "scripts::commonBind.xjs";
        /********************************************************************************
          클릭 함수
        ********************************************************************************/
        // 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	this.dsSearchCondition.deleteAll();
        	
        	var rage = this.rangeCombo.value;
        	var name = this.surgName.value;
        	if(rage != null){
        		var row1 = this.dsSearchCondition.addRow();
        		this.dsSearchCondition.setColumn(row1,"tableName","MP_SURG_CD");
        		this.dsSearchCondition.setColumn(row1,"columnName","CODE_RANGE");
        		this.dsSearchCondition.setColumn(row1,"columnValue", rage);
        		this.dsSearchCondition.setColumn(row1,"operator","=");
        	}
        	
        	if(name != null){
        		var row2 = this.dsSearchCondition.addRow();
        		this.dsSearchCondition.setColumn(row2,"tableName","MP_SURG_CD");
        		this.dsSearchCondition.setColumn(row2,"columnName","SURG_NAME");
        		this.dsSearchCondition.setColumn(row2,"columnValue", "%"+name+"%");
        		this.dsSearchCondition.setColumn(row2,"operator","LIKE");
        	}
        	
        	this.gfnService("findMpSurgCdList");
        }

        this.surgGrid_oncelldblclick = function(obj,e)
        {
        	var surgName = this.dsMpSurgCd.getColumn(this.dsMpSurgCd.rowposition,"surgName");
        	var object = application.getActiveForm();
        	object.dsMpSurgBook.setColumn(0,object.surgNm, surgName);
        	this.parent.destroy();
        	
        	/*var arrRtn = new Array;
        	var i=0;
        	
        	arrRtn[i++] = this.dsMpSurgBook.getColumn(e.row,"surgNm"); //수술코드

        	this.opener.setSurgInfo(arrRtn);
        	this.close();*/
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.stDiv08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.rangeCombo.addEventHandler("onitemchanged", this.taxinvDiv_purchSalesComb_onitemchanged, this);
            this.surgGrid.addEventHandler("oncelldblclick", this.setColumn, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("MR_SurgPopupForm.xfdl");

       
    };
}
)();

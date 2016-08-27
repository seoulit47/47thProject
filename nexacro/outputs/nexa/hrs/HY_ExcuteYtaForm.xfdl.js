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
                this.set_name("HY_ExcuteYtaForm");
                this.set_classname("HY_ExcuteYtaForm");
                this._setFormPosition(0,0,483,160);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">executeYta</Col><Col id=\"URL\">his::hrs/yeta/executeYta.do</Col><Col id=\"outData\"/><Col id=\"callbackFunc\">callback</Col><Col id=\"inData\"/><Col id=\"argument\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHireType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"hireType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hireType\">정규직</Col></Row><Row><Col id=\"hireType\">비정규직</Col></Row><Row><Col id=\"hireType\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "0", "478", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("            연말정산 실행");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Radio("hireTypeRadio", "absolute", "4.97%", "43.75%", null, "21.25%", "0%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@dsHireType");
            obj.set_codecolumn("hireType");
            obj.set_datacolumn("hireType");
            obj.style.set_font("bold 10 맑은고딕");
            obj.set_direction("vertical");
            obj.set_index("-1");

            obj = new Spin("yearSpin", "absolute", "5.04%", "70%", null, "20%", "55.44%", null, this);
            obj.set_taborder("2");
            obj.set_value("2015");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 15 맑은고딕");
            this.addChild(obj.name, obj);

            obj = new Button("executeBtn", "absolute", "59.68%", "113", null, "31", "5.84%", null, this);
            obj.set_taborder("3");
            obj.set_text("실행");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 483, 160, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HY_ExcuteYtaForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HY_ExcuteYtaForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HY_ExcuteYtaForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 공통 스트립트관리                                                          	*
        *                                                                               *
        * @Path		    hrs-HY_ExcuteYtaForm                   	                        *
        * @Description 	연말정산 실행									   	            *
        * @Author	    황태경					                                		*
        * 									                                            *
        * Created on 2016.5.30                          		                        *
        *									                                            *
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";
        this.executeBtn_onclick = function(obj,e)
        {
        	var hireType = this.hireTypeRadio.text;
        	var belongYear = this.yearSpin.value;
        	var argument="hireType='"+hireType+"' caculation_year='"+belongYear+"'";
        	this.dsService.setColumn(0, "argument", argument);
        	this.gfnService("executeYta");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.executeBtn.addEventHandler("onclick", this.executeBtn_onclick, this);

        };

        this.loadIncludeScript("HY_ExcuteYtaForm.xfdl");

       
    };
}
)();

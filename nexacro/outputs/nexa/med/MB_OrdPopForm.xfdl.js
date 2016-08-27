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
                this.set_name("MB_OrdPopForm");
                this.set_classname("MB_OrdPopForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,600,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOrd", this);
            obj._setContents("<ColumnInfo><Column id=\"ordcd\" type=\"STRING\" size=\"256\"/><Column id=\"ordnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findOrdList</Col><Col id=\"URL\">his::med/base/findOrdList.do</Col><Col id=\"outData\">dsOrd=dsOrd</Col><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", null, "60", "0.5%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11.83%", "-4", null, "60", "51.5%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("처방 조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv08", "absolute", "2.83%", "66", null, "27", "83.67%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("처방코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("#000000ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv4", "absolute", "42.33%", "66", null, "27", "44.17%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("처방 이름");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("#000000ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("codeNmEd", "absolute", "56.83%", "65", null, "30", "20.67%", null, this);
            obj.set_taborder("4");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grid", "absolute", "2.67%", "104", null, "285", "2.17%", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsOrd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"처방코드\"/><Cell col=\"1\" text=\"처방명\"/></Band><Band id=\"body\"><Cell text=\"bind:ordcd\"/><Cell col=\"1\" text=\"bind:ordnm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchOrdBtn", "absolute", "82.83%", "64", null, "32", "2.17%", null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("codeEd", "absolute", "17.17%", "65", null, "30", "60.33%", null, this);
            obj.set_taborder("7");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MB_OrdPopForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MB_OrdPopForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("MB_OrdPopForm.xfdl", function() {
        /********************************************************************************                                                                            
        처방 조회화면                                           						                                                                         
        @Path			진료처방 공통(Medication Base)              				   				
        @Description	처방 조회 다이얼로그						
        @Author	  		강찬모				    			                        								                                            
        @Create         2016. 6. 29.                             		                    				                                            
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";  

        this.searchOrdBtn_onclick = function(obj,e)
        {
        	this.dsService.setColumn(0, "argument", "ordcd=" + this.codeEd.value + " ordnm=" + this.codeNmEd.value);
        	this.gfnService("findOrdList");
        }

        this.grid_oncelldblclick = function(obj,e)
        {
        	var arr = new Array();
        	arr[0] = this.dsOrd.getColumn(this.dsOrd.rowposition, "ordcd");
        	arr[1] = this.dsOrd.getColumn(this.dsOrd.rowposition, "ordnm");
        	this.opener.setDsCode(arr, "ord");
        	this.close();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.stDiv08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.grid.addEventHandler("oncelldblclick", this.grid_oncelldblclick, this);
            this.searchOrdBtn.addEventHandler("onclick", this.searchOrdBtn_onclick, this);

        };

        this.loadIncludeScript("MB_OrdPopForm.xfdl");

       
    };
}
)();

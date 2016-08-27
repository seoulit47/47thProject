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
                this.set_name("AB_JobLimitForm");
                this.set_classname("AB_JobLimitForm");
                this.set_titletext("부서별 적정인원 관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findJobLimitList</Col><Col id=\"URL\">his::acc/budget/findJobLimitList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsJobLimit=dsJobLimit</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">modifyJobLimit</Col><Col id=\"URL\">his::acc/budget/modifyJobLimit.do</Col><Col id=\"inData\">dsJobLimit=dsJobLimit:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsJobLimit", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"chgCau\" type=\"STRING\" size=\"256\"/><Column id=\"chgDay\" type=\"STRING\" size=\"256\"/><Column id=\"modifier\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"prePersonnel\" type=\"STRING\" size=\"256\"/><Column id=\"preLimit\" type=\"STRING\" size=\"256\"/><Column id=\"preDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "4", "1246", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);
            obj = new Static("titleEdt02", "absolute", "4.41%", "6", null, "44", "77.77%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("부서별 적정인원 관리");
            obj.set_cssclass("TStc");
            obj.style.set_font("bold 15 Dotum");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("preDateCal", "absolute", "9.92%", "72", null, "26", "78.24%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");

            obj = new Static("stc_receive_date", "absolute", "1.6%", "72", null, "27", "91.36%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("기준일자");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "289", "69", "90", "32", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("job_grid", "absolute", "1.36%", "115", null, "613", "1.36%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsJobLimit");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"96\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"98\"/><Column size=\"191\"/><Column size=\"254\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"직종\"/><Cell col=\"1\" text=\"정원\"/><Cell col=\"2\" text=\"현원\"/><Cell col=\"3\" text=\"정원대비\"/><Cell col=\"4\" text=\"수정자\"/><Cell col=\"5\" text=\"수정일\"/><Cell col=\"6\" text=\"수정사유\"/></Band><Band id=\"body\"><Cell text=\"bind:jobcl\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:limit\"/><Cell col=\"2\" text=\"bind:prePersonnel\"/><Cell col=\"3\" text=\"bind:preLimit\"/><Cell col=\"4\" text=\"bind:modifier\"/><Cell col=\"5\" text=\"bind:chgDay\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:chgCau\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "392", "69", "90", "32", null, null, this);
            obj.set_taborder("5");
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
            		p.set_classname("AB_JobLimitForm");
            		p.set_titletext("부서별 적정인원 관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AB_JobLimitForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AB_JobLimitForm.xfdl", function() {
        //include "scripts::commonScripts.xjs"; 

        //*****
        //조회
        //*****
        this.searchBtn_onclick = function(obj,e){
        	this.gfnService("findJobLimitList");
        }

        //*****
        //저장
        //*****
        this.saveBtn_onclick = function(obj,e){
        alert(1);
        	var empNm = application.gdsEmp.getColumn(0,"empNm");
        	alert(empNm);
        	for(var i=-0; i<this.dsJobLimit.rowcount; i++){
        		var rowType = this.dsJobLimit.getRowType(i);
        		if(rowType == '4'){
        			this.dsJobLimit.setColumn(i, "modifier", empNm);
        		}
        	}
        	this.gfnService("modifyJobLimit");
        }

        //********
        //그리드
        //********
        this.dsJobLimit_oncolumnchanged = function(obj,e){
        	if(e.col=='1'){
        		var limit = this.dsJobLimit.getColumn(e.row,"limit");
        		var prePersonnel = this.dsJobLimit.getColumn(e.row,"prePersonnel");
        		
        		this.dsJobLimit.setColumn(e.row,"preLimit",parseInt(limit)-parseInt(prePersonnel));
        	}
        	this.dsJobLimit.setColumn(e.row,"modifier", application.gdsEmp.getColumn(0,"empNm"));
        }

        //*************
        //Callback함수
        //*************
        this.CallbackFunc = function(serviceID,errorCode,errorMsg){
        	if(serviceID == "ModifyJobMit"){
        		if(errorCode < 0){
        			alert("저장실패 : "+errorMsg);
        		}else{
        			alert("성공!");
        			this.searchBtn_onclick();
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsJobLimit.addEventHandler("oncolumnchanged", this.dsJobLimit_oncolumnchanged, this);
            this.stc_receive_date.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);

        };

        this.loadIncludeScript("AB_JobLimitForm.xfdl");

       
    };
}
)();

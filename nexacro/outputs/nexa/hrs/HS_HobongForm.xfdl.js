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
                this.set_name("HS_HobongForm");
                this.set_classname("HS_HobongForm");
                this.set_titletext("HS_HobongForm");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findJobList</Col><Col id=\"URL\">his::hrs/salBase/findJobList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsJob=dsJob</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findHobongList</Col><Col id=\"URL\">his::hrs/salBase/findHobongList.do</Col><Col id=\"outData\">dsHobong=dsHobong</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findHobongHistoryList</Col><Col id=\"URL\">his::hrs/salBase/findHobongHistoryList.do</Col><Col id=\"outData\">dsHobongHistory=dsHobongHistory</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchHobongProcess</Col><Col id=\"URL\">his::hrs/salBase/batchHobongProcess.do</Col><Col id=\"inData\">dsHobong=dsHobong:u dsHobongHistory=dsHobongHistory:u</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsJob", this);
            obj._setContents("<ColumnInfo><Column id=\"detailCodeName\" type=\"STRING\" size=\"256\"/><Column id=\"detailCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHobong", this);
            obj._setContents("<ColumnInfo><Column id=\"positionCd\" type=\"STRING\" size=\"256\"/><Column id=\"hobong\" type=\"STRING\" size=\"256\"/><Column id=\"basicSal\" type=\"STRING\" size=\"256\"/><Column id=\"gubhoAllowance\" type=\"STRING\" size=\"256\"/><Column id=\"overWorkAllowance\" type=\"STRING\" size=\"256\"/><Column id=\"applyStartDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHobongHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"applyStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"detailCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "8", "1200", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "4", null, "60", "81.68%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("호봉관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "1099", "74", "90", "32", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("saveBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("saveBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("hobongHistoryGrid", "absolute", "2.4%", "410", null, "287", "59.28%", null, this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("dsHobongHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"88\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"호봉이력\"/><Cell row=\"1\" text=\"적용시작\"/><Cell row=\"1\" col=\"1\" text=\"적용종료\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" text=\"bind:applyStartDate\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:applyEndDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("hobongGrid", "absolute", "42.4%", "114", null, "542", "4%", null, this);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_binddataset("dsHobong");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"88\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"호봉\"/><Cell col=\"1\" colspan=\"3\" text=\"호봉테이블\"/><Cell col=\"4\" rowspan=\"2\" text=\"합계\"/><Cell row=\"1\" col=\"1\" text=\"기본급\"/><Cell row=\"1\" col=\"2\" text=\"급호수당\"/><Cell row=\"1\" col=\"3\" text=\"연장수당\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:hobong\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"normal\" text=\"bind:basicSal\" mask=\"###,###\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" text=\"bind:gubhoAllowance\" mask=\"###,###\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"normal\" text=\"bind:overWorkAllowanceo\" mask=\"###,###\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"normal\" text=\"expr:parseInt(basicSal)+ parseInt(gubhoAllowance)+parseInt(overWorkAllowance)\" mask=\"###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("jobGrid", "absolute", "2.4%", "114", null, "287", "59.04%", null, this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_binddataset("dsJob");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"88\"/><Column size=\"101\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"대상직급\"/><Cell row=\"1\" text=\"순번\"/><Cell row=\"1\" col=\"1\" colspan=\"2\" text=\"직급\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" colspan=\"2\" text=\"bind:detailCodeName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addHisBtn", "absolute", "427", "704", "32", "32", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("addHisBtn");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("addHisBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delHisBtn", "absolute", "467", "704", "32", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("delHisBtn");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("delHisBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addHoBtn", "absolute", "1083", "660", "32", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("addHoBtn");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("addHoBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delHoBtn", "absolute", "1123", "660", "32", "32", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("delHoBtn");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("delHoBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HS_HobongForm");
            		p.set_titletext("HS_HobongForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HS_HobongForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HS_HobongForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사 호봉관리                                         			*
        *                                                                   *
        * @Path		    호봉 관리      									*
        * @Description  각 직급별 호봉을 관리할 수 있다.				*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  2.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";

        
        this.HS_HobongForm_onload = function(obj,e){
        	this.gfnService("findJobList");
        }

        this.jobGrid_oncellclick = function(obj,e) {
        	//필터로 처리한다.
        	var positionCd=this.dsJob.getColumn(this.jobGrid.currentrow,"detailCodeName");
        	this.dsService.setColumn(1,4,"positionCd="+positionCd);
        	this.gfnService("findHobongList",false);	
        		
        	var detailCode=this.dsJob.getColumn(this.jobGrid.currentrow,"detailCode");
        	this.dsService.setColumn(2,4,"detailCode="+detailCode);
        	this.gfnService("findHobongHistoryList",false);
        }

        //호봉이력추가
        this.addHisBtn_onclick = function(obj,e) {
        	this.dsHobongHistory.addRow();
        }

        //호봉이력삭제
        this.delHisBtn_onclick = function(obj,e) {
        	this.dsHobongHistory.deleteRow(this.hobongHistoryGrid.currentrow);
        }

        //호봉추가
        this.addHoBtn_onclick = function(obj,e) { 
        	this.dsHobong.addRow();
        }

        //호봉삭제
        this.delHoBtn_onclick = function(obj,e) {
        	this.dsHobong.deleteRow(this.hobongGrid.currentrow);
        }

        //일괄처리
        this.saveBtn_onclick = function(obj,e) {
        	if(confirm("일괄처리 하시겠습니까?")){
        		var detailCode= this.dsJob.getColumn(this.jobGrid.currentrow,"detailCode");
        		this.dsService.setColumn(3,4,"detailCode="+detailCode);
        		this.gfnService("batchHobongProcess");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HS_HobongForm_onload, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.jobGrid.addEventHandler("oncellclick", this.jobGrid_oncellclick, this);
            this.addHisBtn.addEventHandler("onclick", this.addHisBtn_onclick, this);
            this.delHisBtn.addEventHandler("onclick", this.delHisBtn_onclick, this);
            this.addHoBtn.addEventHandler("onclick", this.addHoBtn_onclick, this);
            this.delHoBtn.addEventHandler("onclick", this.delHoBtn_onclick, this);

        };

        this.loadIncludeScript("HS_HobongForm.xfdl");

       
    };
}
)();

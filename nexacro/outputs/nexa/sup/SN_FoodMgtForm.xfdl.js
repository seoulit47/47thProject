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
                this.set_name("SN_FoodMgt");
                this.set_classname("SN_음식관리");
                this.set_titletext("New Form");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findFoodList</Col><Col id=\"URL\">his::sup/nutritive/findFoodList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsFood=dsFood</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findFoodDtlList</Col><Col id=\"URL\">his::sup/nutritive/findFoodDtlList.do</Col><Col id=\"outData\">dsFoodDtl=dsFoodDtl</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findCodeList</Col><Col id=\"URL\">his::sup/nutritive/findCodeList.do</Col><Col id=\"outData\">dsCode=dsCode</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchFoodMgtFormProcess</Col><Col id=\"URL\">his::sup/nutritive/batchFoodMgtFormProcess.do</Col><Col id=\"inData\">dsFood=dsFood:U dsFoodDtl=dsFoodDtl:U</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFood", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"foodGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodType\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/><Column id=\"notes\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit1\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit2\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit3\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit4\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit5\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit7\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit8\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit9\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit11\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit16\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit17\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit18\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit22\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit23\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit25\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFoodDtl", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"ingredCd\" type=\"STRING\" size=\"256\"/><Column id=\"ingredNm\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"mainmenuYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"smallCode1\" type=\"STRING\" size=\"256\"/><Column id=\"fullName1\" type=\"STRING\" size=\"256\"/><Column id=\"smallCode2\" type=\"STRING\" size=\"256\"/><Column id=\"fullName2\" type=\"STRING\" size=\"256\"/><Column id=\"smallCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "1250", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar2.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5.12%", "-3", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("음식관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("codeGrid", "absolute", "2.24%", "107", null, "316", "67.92%", null, this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"232\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell text=\"bind:smallCode1\"/><Cell col=\"1\" text=\"bind:fullName1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("foodGrid", "absolute", "33.12%", "107", null, "598", "2.08%", null, this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsFood");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"217\"/><Column size=\"409\"/><Column size=\"185\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"음식코드\"/><Cell col=\"1\" text=\"음식명\"/><Cell col=\"2\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:foodCd\"/><Cell col=\"1\" text=\"bind:foodNm\"/><Cell col=\"2\" text=\"bind:notes\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("foodCdEd", "absolute", "42.24%", "72", null, "30", "47.68%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "33.12%", "72", null, "30", "58.4%", null, this);
            obj.set_taborder("5");
            obj.set_text("음식코드");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("foodNmEd", "absolute", "52.96%", "72", null, "30", "31.52%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "1134", "70", "90", "32", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "737", "712", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("modBtn", "absolute", "935", "712", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("printBtn", "absolute", "1133", "712", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::printBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "2.24%", "72", null, "30", "67.92%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("  음식분류");
            obj.style.set_background("gainsboro");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Grid("foodDtlGrid", "absolute", "2.24%", "472", null, "233", "67.92%", null, this);
            obj.set_taborder("15");
            obj.set_binddataset("dsFoodDtl");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"79\"/><Column size=\"210\"/><Column size=\"48\"/><Column size=\"42\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"음식별 식품 정보\"/><Cell row=\"1\" text=\"식품코드\"/><Cell row=\"1\" col=\"1\" text=\"식품명\"/><Cell row=\"1\" col=\"2\" text=\"수량\"/><Cell row=\"1\" col=\"3\" text=\"단위\"/></Band><Band id=\"body\"><Cell text=\"bind:ingredCd\"/><Cell col=\"1\" text=\"bind:ingredNm\"/><Cell col=\"2\" text=\"bind:qty\"/><Cell col=\"3\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc10", "absolute", "2.24%", "434", null, "30", "67.92%", null, this);
            obj.getSetter("taborder").set("16");
            obj.set_text("  음식 상세정보");
            obj.style.set_background("gainsboro");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "836", "712", "90", "32", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "1034", "712", "90", "32", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SN_음식관리");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SN_FoodMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SN_FoodMgtForm.xfdl", function() {
        // 공통 스크립트
        //include "scripts::commonScripts.xjs";

        // 변수
        var foodGrpCd;
        var mainGrid;

        // 화면로드
        this.SN_FoodMgt_onload = function(obj,e)
        {
         	var argument = 'formDiv='+"food";
         	var row = this.dsService.findRow("serviceID", "findCodeList");
          	this.dsService.setColumn(row, "argument", argument);

         	this.gfnService("findCodeList", false);
        }

        // 코드 그리드 클릭시
        this.dsCode_onrowposchanged = function(obj,e)
        {
        	foodGrpCd=obj.getColumn(e.newrow , "smallCode1");

        	this.codeClick();
        }

        

        // 콜백함수
        this.callBackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {

         	}
        }

        // 조회버튼
        this.searchBtn_onclick = function(obj,e)
        {	 
        	var foodCd = this.foodCdEd.value;
        	var foodNm = this.foodNmEd.value;
        	
        	var argument = 'foodCd='+foodCd+' foodNm='+foodNm;
        	
        	var row = this.dsService.findRow("serviceID", "findFoodList");

        	this.dsService.setColumn(row, "argument", argument);
        	
        	this.gfnService("findFoodList", false);
        	
        	alert("조회되었습니다.");
        	
        	
        }
        // 조회버튼
        this.codeClick=function()
        {	 
        	
        	var argument = 'foodGrpCd='+foodGrpCd;
        	
        	var row = this.dsService.findRow("serviceID", "findFoodList");

        	this.dsService.setColumn(row, "argument", argument);
        	
        	this.gfnService("findFoodList", false);
        	
        }

        // 상세조회
        this.dsFood_onrowposchanged = function(obj,e)
        {
        	var argument = 'foodCd='+obj.getColumn(e.newrow , "foodCd");
        	var row = this.dsService.findRow('serviceID' , "findFoodDtlList");
        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findFoodDtlList",false);
        }

        // 추가버튼
        this.addBtn_onclick = function(obj,e)
        {

        	var param = {state:"insert", foodGrpCd:foodGrpCd};
        	
        	this.gfnPopup("SN_FoodAddPopForm","sup",param);
        }

        // 수정버튼
        this.modBtn_onclick = function(obj,e)
        {

        	var foodCd = this.dsFood.getColumn(this.foodGrid.currentrow, "foodCd");
        	var foodNm = this.dsFood.getColumn(this.foodGrid.currentrow, "foodNm");
        	var memo = this.dsFood.getColumn(this.foodGrid.currentrow, "notes");

        	var param = {state:"update", foodGrpCd:foodGrpCd, foodCd:foodCd, foodNm:foodNm, foodMemo:memo, dataSet:this.dsFoodDtl};
        	this.gfnPopup("SN_FoodAddPopForm","sup",param);	
        }

        this.pCode=function(retVal)
        {
        	if(retVal == 1){
        		this.SN_FoodMgt_onload(null,null);
        	}
        }

        

        // 삭제버튼
        this.delBtn_onclick = function(obj,e)
        {
        	switch(this.mainGrid.name)
        	{
        		case "foodDtlGrid" : 
        			this.dsFoodDtl.deleteRow(this.foodDtlGrid.currentrow);
        			break;

        		case "foodGrid" :
        			this.dsFood.deleteRow(this.foodGrid.currentrow);
        			break;
        	}
        }

        this.foodDtlGrid_onsetfocus = function(obj,e)
        {
        	this.mainGrid = obj;
        }

        this.foodGrid_onsetfocus = function(obj,e)
        {
        	this.mainGrid = obj;
        }

        // 저장버튼
        this.saveBtn_onclick = function(obj,e)
        {	
        	this.gfnService("batchFoodMgtFormProcess");
        }

        //콜백함수
        this.callBackFunc=function(svcID,errorCode,errorMsg)
        {
        	if(errorCode<0)
        	{
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	}else{
        		if(svcID=="batchFoodMgtFormProcess"){
        			alert("저장되었습니다.");
        		}else{
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFood.addEventHandler("onrowposchanged", this.dsFood_onrowposchanged, this);
            this.dsCode.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.addEventHandler("onload", this.SN_FoodMgt_onload, this);
            this.foodGrid.addEventHandler("oncellclick", this.foodGrid_oncellclick, this);
            this.foodGrid.addEventHandler("onsetfocus", this.foodGrid_onsetfocus, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.modBtn.addEventHandler("onclick", this.modBtn_onclick, this);
            this.printBtn.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.foodDtlGrid.addEventHandler("onsetfocus", this.foodDtlGrid_onsetfocus, this);
            this.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);

        };

        this.loadIncludeScript("SN_FoodMgtForm.xfdl");

       
    };
}
)();

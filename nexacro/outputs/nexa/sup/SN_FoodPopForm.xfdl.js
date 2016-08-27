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
                this.set_name("SN_FoodPopForm");
                this.set_classname("SN_음식관리");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,415,476);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findFoodList</Col><Col id=\"URL\">his::sup/nutritive/findFoodList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsFood=dsFood</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFood", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"foodGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodType\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/><Column id=\"notes\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit1\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit2\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit3\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit4\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit5\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit7\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit8\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit9\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit11\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit16\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit17\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit18\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit22\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit23\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit25\" type=\"STRING\" size=\"256\"/><Column id=\"checkDiv\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFoodCopy", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"foodGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodType\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/><Column id=\"notes\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit1\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit2\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit3\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit4\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit5\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit7\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit8\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit9\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit11\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit16\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit17\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit18\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit22\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit23\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit25\" type=\"STRING\" size=\"256\"/><Column id=\"checkDiv\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "2", "403", "60", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Grid("foodGrid", "absolute", "6.99%", "104", null, "308", "6.75%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsFood");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"81\"/><Column size=\"222\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"v\"/><Cell col=\"1\" text=\"음식\"/><Cell col=\"2\" text=\"음식명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:checkDiv\" tooltiptext=\"bind:checkDiv\"/><Cell col=\"1\" text=\"bind:foodCd\"/><Cell col=\"2\" style=\"font:8 arial;\" text=\"bind:foodNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "12.53%", "-2", null, "60", "26.51%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("음식 조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("foodCdEd", "absolute", "30.6%", "66", null, "30", "46.02%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "6.99%", "66", null, "30", "70.6%", null, this);
            obj.set_taborder("5");
            obj.set_text("음식코드/명");
            obj.style.set_background("thistle");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("foodNmEd", "absolute", "54.94%", "66", null, "30", "15.18%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "355", "65", "32", "32", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("okBtn", "absolute", "200", "424", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::okBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "296", "424", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 415, 476, this,
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
        this.addIncludeScript("SN_FoodPopForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SN_FoodPopForm.xfdl", "scripts::supScripts.xjs");
        this.registerScript("SN_FoodPopForm.xfdl", function() {
        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 
        //include "scripts::supScripts.xjs";

        // 조회버튼
        this.searchBtn_onclick = function(obj,e)
        {
        	var foodCd = this.foodCdEd.value;
        	var foodNm = this.foodNmEd.value;
        	
        	var argument = 'foodCd='+foodCd+' foodNm='+foodNm;
        	
        	var row = this.dsService.findRow("serviceID", "findFoodList");

        	this.dsService.setColumn(row, "argument", argument);
        	
        	this.gfnService("findFoodList", false);
        	
        }

        //콜백함수
        this.callBackFunc=function(svcID,errorCode,errorMsg)
        {
        	if(errorCode<0)
        	{
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	}else{
        // 		if()
        // 		{
        // 	
        // 		}
        // 		else{
        // 		}
        	}
        }

        
        // 확인버튼
        this.okBtn_onclick = function(obj,e)
        {
        	var btnDiv = this.parent.btnDiv;
        	alert(btnDiv);
        	this.dsFoodCopy.copyData(this.dsFood);
        	this.dsFoodCopy.filter("checkDiv == 1");
        	
        	for( var i = 0 ; i < this.dsFoodCopy.rowcount ; i++){
        		
        		switch(btnDiv){
        			case "Breakfast" : 
        				this.opener.dsBreakfast.addRow();
        				var row = this.opener.dsBreakfast.rowposition;
        				this.opener.dsBreakfast.setColumn(row, "foodCd", this.dsFoodCopy.getColumn(i, "foodCd"));
        				this.opener.dsBreakfast.setColumn(row, "foodNm", this.dsFoodCopy.getColumn(i, "foodNm"));
        				this.opener.dsBreakfast.setColumn(row, "carteDate", this.parent.carteDate);
        				this.opener.dsBreakfast.setColumn(row, "carteTime", this.parent.carteTime);	
        				this.opener.dsBreakfast.setColumn(row, "menuGrpCd", this.parent.menuGrpCd);

        				break;	

        			case "Lunch" :
        				this.opener.dsLunch.addRow();
        				var row = this.opener.dsLunch.rowposition;
        				this.opener.dsLunch.setColumn(row, "foodCd", this.dsFoodCopy.getColumn(i, "foodCd"));
        				this.opener.dsLunch.setColumn(row, "foodNm", this.dsFoodCopy.getColumn(i, "foodNm"));
        				this.opener.dsLunch.setColumn(row, "carteDate", this.parent.carteDate);
        				this.opener.dsLunch.setColumn(row, "carteTime", this.parent.carteTime);	
        				this.opener.dsLunch.setColumn(row, "menuGrpCd", this.parent.menuGrpCd);
        				
        				break;
        						
        			case "Dinner" : 
        				this.opener.dsDinner.addRow();
        				var row = this.opener.dsDinner.rowposition;
        				this.opener.dsDinner.setColumn(row, "foodCd", this.dsFoodCopy.getColumn(i, "foodCd"));
        				this.opener.dsDinner.setColumn(row, "foodNm", this.dsFoodCopy.getColumn(i, "foodNm"));
        				this.opener.dsDinner.setColumn(row, "carteDate", this.parent.carteDate);
        				this.opener.dsDinner.setColumn(row, "carteTime", this.parent.carteTime);	
        				this.opener.dsDinner.setColumn(row, "menuGrpCd", this.parent.menuGrpCd);
        				
        				break;

        		}

        	}
        			
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFood.addEventHandler("onrowposchanged", this.dsFood_onrowposchanged, this);
            this.dsFoodCopy.addEventHandler("onrowposchanged", this.dsFood_onrowposchanged, this);
            this.foodGrid.addEventHandler("oncelldblclick", this.codeGrid_oncelldblclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.okBtn.addEventHandler("onclick", this.okBtn_onclick, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);

        };

        this.loadIncludeScript("SN_FoodPopForm.xfdl");

       
    };
}
)();

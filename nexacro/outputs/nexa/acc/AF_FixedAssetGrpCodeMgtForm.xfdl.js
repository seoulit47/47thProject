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
                this.set_name("AF_FixedAssetGrpCodeMgtForm");
                this.set_classname("AF_FixedAssetGrpCodeMgtForm");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAssetLgGrpCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAssetMidGrpCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findFixedAssetGrpCdList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/fixedasset/findFixedAssetGrpCdList.do</Col><Col id=\"callbackFunc\">fixedAssetGrpCdCallBack</Col><Col id=\"outData\">dsAssetLgGrpCd=dsAssetLgGrpCd dsAssetMidGrpCd=dsAssetMidGrpCd dsAssetSmGrpCd=dsAssetSmGrpCd</Col></Row><Row><Col id=\"serviceID\">batchFixedAssetGrpCdProcess</Col><Col id=\"URL\">his::acc/fixedasset/batchFixedAssetGrpCdProcess.do</Col><Col id=\"inData\">dsAssetLgGrpCd=dsAssetLgGrpCd:U dsAssetMidGrpCd=dsAssetMidGrpCd:U dsAssetSmGrpCd=dsAssetSmGrpCd:U</Col><Col id=\"callbackFunc\">fixedAssetGrpCdCallBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAssetSmGrpCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "0%", "0", "1232", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.79%", "-4", null, "60", "64.94%", null, this.titleBarDiv);
            obj.getSetter("taborder").set("10");
            obj.set_text("고정자산 분류코드 관리화면");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "756", "67", "86", "26", null, null, this.titleBarDiv);
            obj.getSetter("taborder").set("11");
            obj.set_text("자산번호");
            obj.getSetter("class").set("AreaStc");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Edit("assetNoEdit", "absolute", "845", "67", "105", "26", null, null, this.titleBarDiv);
            obj.set_taborder("12");
            obj.getSetter("class").set("AreaEdt");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Edit("assetNmEdit", "absolute", "1040", "67", "105", "26", null, null, this.titleBarDiv);
            obj.set_taborder("13");
            obj.getSetter("class").set("AreaEdt");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "952", "67", "86", "26", null, null, this.titleBarDiv);
            obj.getSetter("taborder").set("14");
            obj.set_text("자산이름");
            obj.getSetter("class").set("AreaStc");
            this.titleBarDiv.addChild(obj.name, obj);

            obj = new Div("fixedAssetGrpCdDiv", "absolute", "2.16%", "58", null, "702", "1.36%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Static("fixedAssetLgGrpCdStc", "absolute", "1.24%", "12", null, "35", "91.71%", null, this.fixedAssetGrpCdDiv);
            obj.getSetter("taborder").set("6");
            obj.set_text("대분류 코드");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Static("fixedAssetMidGrpCdStc", "absolute", "34.58%", "12", null, "35", "58.37%", null, this.fixedAssetGrpCdDiv);
            obj.getSetter("taborder").set("7");
            obj.set_text("중분류 코드");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Static("fixedAssetSmGrpCdStc", "absolute", "67.91%", "12", null, "35", "25.04%", null, this.fixedAssetGrpCdDiv);
            obj.getSetter("taborder").set("8");
            obj.set_text("소분류 코드");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Grid("fixedAssetLgGrpCdGrid", "absolute", "1.24%", "54", null, "590", "68.74%", null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("9");
            obj.set_binddataset("dsAssetLgGrpCd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"대분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell text=\"bind:lgGrpCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:lgGrpCdNm\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"대분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:lgGrpCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:lgGrpCdNm\"/></Band></Format></Formats>");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Grid("fixedAssetMidGrpCdGrid", "absolute", "34.58%", "54", null, "590", "35.41%", null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("10");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"중분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell text=\"bind:midGrpCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:midGrpCdNm\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"중분류 코드\"/><Cell col=\"1\" text=\"분류명\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:midGrpCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:midGrpCdNm\"/></Band></Format></Formats>");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Grid("fixedAssetSmGrpCdGrid", "absolute", "67.91%", "54", null, "590", "1.99%", null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("11");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소분류 코드\"/><Cell col=\"1\" text=\"분류명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:smGrpCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:smGrpCdNm\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:useYn\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소분류 코드\"/><Cell col=\"1\" text=\"분류명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:smGrpCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:smGrpCdNm\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Button("addFixedAssetLgGrpCdBtn", "absolute", "185", "12", "90", "35", null, null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Button("deleteFixedAssetLgGrpCdBtn", "absolute", "283", "12", "90", "35", null, null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Button("addFixedAssetMidGrpCdBtn", "absolute", "597", "12", "90", "35", null, null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Button("deleteFixedAssetMidGrpCdBtn", "absolute", "695", "12", "90", "35", null, null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("15");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Button("addFixedAssetSmGrpCdBtn", "absolute", "995", "12", "90", "35", null, null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("16");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);
            obj = new Button("deleteFixedAssetSmGrpCdBtn", "absolute", "1093", "12", "90", "35", null, null, this.fixedAssetGrpCdDiv);
            obj.set_taborder("17");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.fixedAssetGrpCdDiv.addChild(obj.name, obj);

            obj = new Button("batchFixedAssetGrpCdBtn", "absolute", "1099", "712", "110", "38", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1232, 60, this.titleBarDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar4.jpg')");
            		p.set_scrollbars("none");

            	}
            );
            this.titleBarDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 702, this.fixedAssetGrpCdDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");

            	}
            );
            this.fixedAssetGrpCdDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AF_FixedAssetGrpCodeMgtForm");
            		p.set_titletext("New Form");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AF_FixedAssetGrpCodeMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AF_FixedAssetGrpCodeMgtForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        // 폼 로드 이벤트
        this.AF_FixedAssetGrpCodeMgtForm_onload = function(obj,e)
        {
        	this.gfnService("findFixedAssetGrpCdList");
        }

        // 그리드 클릭 이벤트
        this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_oncellclick = function(obj,e)
        {
        	var lgGrpCd = this.dsAssetLgGrpCd.getColumn(this.dsAssetLgGrpCd.rowposition,"lgGrpCd");
        	this.dsAssetMidGrpCd.filter("lgGrpCd=='"+lgGrpCd+"'");
        	this.fixedAssetGrpCdDiv.fixedAssetMidGrpCdGrid.set_binddataset("dsAssetMidGrpCd");
        	this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_oncellclick(this,0);
        	var selectRow = this.dsAssetLgGrpCd.getRowType(this.dsAssetLgGrpCd.rowposition);
        	if(selectRow == 2){
        		this.fixedAssetGrpCdDiv.fixedAssetLgGrpCdGrid.set_formatid("insert");
        	}else{
        		this.fixedAssetGrpCdDiv.fixedAssetLgGrpCdGrid.set_formatid("default");
        	}

        }

        this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_oncellclick = function(obj,e)
        {
        	var lgGrpCd = this.dsAssetLgGrpCd.getColumn(this.dsAssetLgGrpCd.rowposition,"lgGrpCd");
        	var midGrpCd = this.dsAssetMidGrpCd.getColumn(e.row,"midGrpCd");
        	
        	this.dsAssetSmGrpCd.filter("lgGrpCd=='"+lgGrpCd+"'"+"&& midGrpCd=='"+midGrpCd+"'");
        	
        	this.fixedAssetGrpCdDiv.fixedAssetSmGrpCdGrid.set_binddataset("dsAssetSmGrpCd");
        	
        	var selectRow = this.dsAssetMidGrpCd.getRowType(this.dsAssetMidGrpCd.rowposition);
        	if(selectRow == 2){
        		this.fixedAssetGrpCdDiv.fixedAssetMidGrpCdGrid.set_formatid("insert");
        	}else{
        		this.fixedAssetGrpCdDiv.fixedAssetMidGrpCdGrid.set_formatid("default");
        	}
        }

        this.fixedAssetGrpCdDiv_fixedAssetSmGrpCdGrid_oncellclick = function(obj,e)
        {
        	var selectRow = this.dsAssetSmGrpCd.getRowType(this.dsAssetSmGrpCd.rowposition);
        	if(selectRow == 2){
        		this.fixedAssetGrpCdDiv.fixedAssetSmGrpCdGrid.set_formatid("insert");
        	}else{
        		this.fixedAssetGrpCdDiv.fixedAssetSmGrpCdGrid.set_formatid("default");
        	}
        }

        // 그리드 내용변경 이벤트
        this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_onselectchanged = function(obj,e)
        {
        	this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_oncellclick(obj,e);
        }

        this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_onselectchanged = function(obj,e)
        {
        	this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_oncellclick(obj,e);
        }

        // 대분류코드 추가버튼 클릭이벤트
        this.fixedAssetGrpCdDiv_addFixedAssetLgGrpCdBtn_onclick = function(obj,e)
        {
        	var nRow = this.dsAssetLgGrpCd.addRow();
        }

        // 중분류코드 추가버튼 클릭이벤트
        this.fixedAssetGrpCdDiv_addFixedAssetMidGrpCdBtn_onclick = function(obj,e)
        {
        	var lgGrpCd = this.dsAssetLgGrpCd.getColumn(this.dsAssetLgGrpCd.rowposition,"lgGrpCd");
        	if(lgGrpCd != null && lgGrpCd != ""){
        		var nRow = this.dsAssetMidGrpCd.addRow();
        		this.dsAssetMidGrpCd.setColumn(nRow,"lgGrpCd",lgGrpCd);
        	}else{
        		alert("대분류 코드 입력 후 추가하시오.");
        	}
        }

        // 소분류코드 추가버튼 클릭이벤트
        this.fixedAssetGrpCdDiv_addFixedAssetSmGrpCdBtn_onclick = function(obj,e)
        {
        	var lgGrpCd = this.dsAssetLgGrpCd.getColumn(this.dsAssetLgGrpCd.rowposition,"lgGrpCd");
        	var midGrpCd = this.dsAssetMidGrpCd.getColumn(this.dsAssetMidGrpCd.rowposition,"midGrpCd");
        	
        	if((lgGrpCd != null && lgGrpCd != "") && (midGrpCd != null && midGrpCd != "")){
        		var nRow = this.dsAssetSmGrpCd.addRow();
        		this.dsAssetSmGrpCd.setColumn(nRow,"lgGrpCd",lgGrpCd);
        		this.dsAssetSmGrpCd.setColumn(nRow,"midGrpCd",midGrpCd);
        		this.dsAssetSmGrpCd.setColumn(nRow,"useYn",1);
        	}else{
        		alert("중분류 코드 입력 후 추가하시오.");
        	}
        }

        // 대분류코드 삭제버튼 클릭이벤트
        this.fixedAssetGrpCdDiv_deleteFixedAssetLgGrpCdBtn_onclick = function(obj,e)
        {
        	var conResult = confirm("해당 중,소분류 코드가 함께 삭제됩니다. 진행하시겠습니까?");
        	if(conResult == true){
        		this.dsAssetMidGrpCd.deleteAll();
        		this.dsAssetSmGrpCd.deleteAll();
        		this.dsAssetLgGrpCd.deleteRow(this.dsAssetLgGrpCd.rowposition);
        		
        		var lgGrpCd = this.dsAssetLgGrpCd.getColumn(this.dsAssetLgGrpCd.rowposition,"lgGrpCd");
        		this.dsAssetMidGrpCd.filter("lgGrpCd=='"+lgGrpCd+"'");
        	    this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_oncellclick(this,0);
        	}
        }

        // 중분류코드 삭제버튼 클릭이벤트
        this.fixedAssetGrpCdDiv_deleteFixedAssetMidGrpCdBtn_onclick = function(obj,e)
        {
        	var conResult = confirm("해당 소분류 코드가 함께 삭제됩니다. 진행하시겠습니까?");
        	if(conResult == true){
        		this.dsAssetSmGrpCd.deleteAll();
        		this.dsAssetMidGrpCd.deleteRow(this.dsAssetMidGrpCd.rowposition);
        		
        		var lgGrpCd = this.dsAssetLgGrpCd.getColumn(this.dsAssetLgGrpCd.rowposition,"lgGrpCd");
        	    var midGrpCd = this.dsAssetMidGrpCd.getColumn(this.dsAssetMidGrpCd.rowposition,"midGrpCd");
        		this.dsAssetSmGrpCd.filter("lgGrpCd=='"+lgGrpCd+"'"+"&& midGrpCd=='"+midGrpCd+"'");
        		//this.fixedAssetGrpCdDiv_fixedAssetSmGrpCdGrid_oncellclick(this,0);
        	}
        }

        // 소분류코드 삭제버튼 클릭이벤트
        this.fixedAssetGrpCdDiv_deleteFixedAssetSmGrpCdBtn_onclick = function(obj,e)
        {
        	this.dsAssetSmGrpCd.deleteRow(this.dsAssetSmGrpCd.rowposition);
        }

        

        // 일괄처리 버튼 클릭이벤트
        this.batchFixedAssetGrpCdBtn_onclick = function(obj,e)
        {
        	var flag = 0;
            for(var i=0; i < this.dsAssetLgGrpCd.getRowCount(); i++){
        		var rowType = this.dsAssetLgGrpCd.getRowType(i);
        		var lgGrpCd = this.dsAssetLgGrpCd.getColumn(i,"lgGrpCd");
        		if(rowType == 2 && (lgGrpCd == null || lgGrpCd == "")){
        			flag = 1;
        			break;
        		}
        	}
        	
        	if(flag == 0){
        		this.dsAssetMidGrpCd.filter("");
        			for(var i=0; i < this.dsAssetMidGrpCd.getRowCount(); i++){
        				var rowType = this.dsAssetMidGrpCd.getRowType(i);
        				var midGrpCd = this.dsAssetMidGrpCd.getColumn(i,"midGrpCd");
        				if(rowType == 2 && (midGrpCd == null || midGrpCd == "")){
        					flag = 1;
        					break;
        				}
        			}
        	}
        	
        	if(flag == 0){
        		this.dsAssetSmGrpCd.filter("");
        			for(var i=0; i < this.dsAssetSmGrpCd.getRowCount(); i++){
        				var rowType = this.dsAssetSmGrpCd.getRowType(i);
        				var smGrpCd = this.dsAssetSmGrpCd.getColumn(i,"smGrpCd");
        				if(rowType == 2 && (smGrpCd == null || smGrpCd == "")){
        					flag = 1;
        					break;
        				}
        			}
        	}
        	
        	if(flag == 1){
        		var lgGrpCd = this.dsAssetLgGrpCd.getColumn(this.dsAssetLgGrpCd.rowposition,"lgGrpCd");
        		this.dsAssetMidGrpCd.filter("lgGrpCd=='"+lgGrpCd+"'");
        		var midGrpCd = this.dsAssetMidGrpCd.getColumn(this.dsAssetMidGrpCd.rowposition,"midGrpCd");
        		this.dsAssetSmGrpCd.filter("lgGrpCd=='"+lgGrpCd+"'"+"&& midGrpCd=='"+midGrpCd+"'");	
        		alert("소분류 코드 입력사항을 확인 하십시오.");
        	}else{
        		this.gfnService("batchFixedAssetGrpCdProcess");
        	}
        }

        // 콜백 함수
        this.fixedAssetGrpCdCallBack = function fixedAssetGrpCdCallBack(strSvcID,nErrorCode,strErrorMag)
        {
        	if(strSvcID == "findFixedAssetGrpCdList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_oncellclick(this,0);
        		}
        	}else if(strSvcID == "batchFixedAssetGrpCdProcess"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			alert("정상처리 되었습니다.");
        			
        			var lgGrpCd = this.dsAssetLgGrpCd.getColumn(this.dsAssetLgGrpCd.rowposition,"lgGrpCd");
        			this.dsAssetMidGrpCd.filter("lgGrpCd=='"+lgGrpCd+"'");
        			var midGrpCd = this.dsAssetMidGrpCd.getColumn(this.dsAssetMidGrpCd.rowposition,"midGrpCd");
        			this.dsAssetSmGrpCd.filter("lgGrpCd=='"+lgGrpCd+"'"+"&& midGrpCd=='"+midGrpCd+"'");
        			
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAssetLgGrpCd.addEventHandler("oncolumnchanged", this.dsAssetLgGrpCd_oncolumnchanged, this);
            this.dsAssetMidGrpCd.addEventHandler("oncolumnchanged", this.dsAssetMidGrpCd_oncolumnchanged, this);
            this.dsAssetSmGrpCd.addEventHandler("oncolumnchanged", this.dsAssetSmGrpCd_oncolumnchanged, this);
            this.addEventHandler("onload", this.AF_FixedAssetGrpCodeMgtForm_onload, this);
            this.titleBarDiv.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.titleBarDiv.Static00.addEventHandler("onclick", this.Static06_onclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetLgGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetMidGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetSmGrpCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetLgGrpCdGrid.addEventHandler("oncellclick", this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_oncellclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetLgGrpCdGrid.addEventHandler("onselectchanged", this.fixedAssetGrpCdDiv_fixedAssetLgGrpCdGrid_onselectchanged, this);
            this.fixedAssetGrpCdDiv.fixedAssetMidGrpCdGrid.addEventHandler("oncellclick", this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_oncellclick, this);
            this.fixedAssetGrpCdDiv.fixedAssetMidGrpCdGrid.addEventHandler("onselectchanged", this.fixedAssetGrpCdDiv_fixedAssetMidGrpCdGrid_onselectchanged, this);
            this.fixedAssetGrpCdDiv.fixedAssetSmGrpCdGrid.addEventHandler("oncellclick", this.fixedAssetGrpCdDiv_fixedAssetSmGrpCdGrid_oncellclick, this);
            this.fixedAssetGrpCdDiv.addFixedAssetLgGrpCdBtn.addEventHandler("onclick", this.fixedAssetGrpCdDiv_addFixedAssetLgGrpCdBtn_onclick, this);
            this.fixedAssetGrpCdDiv.deleteFixedAssetLgGrpCdBtn.addEventHandler("onclick", this.fixedAssetGrpCdDiv_deleteFixedAssetLgGrpCdBtn_onclick, this);
            this.fixedAssetGrpCdDiv.addFixedAssetMidGrpCdBtn.addEventHandler("onclick", this.fixedAssetGrpCdDiv_addFixedAssetMidGrpCdBtn_onclick, this);
            this.fixedAssetGrpCdDiv.deleteFixedAssetMidGrpCdBtn.addEventHandler("onclick", this.fixedAssetGrpCdDiv_deleteFixedAssetMidGrpCdBtn_onclick, this);
            this.fixedAssetGrpCdDiv.addFixedAssetSmGrpCdBtn.addEventHandler("onclick", this.fixedAssetGrpCdDiv_addFixedAssetSmGrpCdBtn_onclick, this);
            this.fixedAssetGrpCdDiv.deleteFixedAssetSmGrpCdBtn.addEventHandler("onclick", this.fixedAssetGrpCdDiv_deleteFixedAssetSmGrpCdBtn_onclick, this);
            this.batchFixedAssetGrpCdBtn.addEventHandler("onclick", this.batchFixedAssetGrpCdBtn_onclick, this);

        };

        this.loadIncludeScript("AF_FixedAssetGrpCodeMgtForm.xfdl");

       
    };
}
)();

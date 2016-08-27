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
                this.set_name("AF_FixedAssetCodeMgtForm");
                this.set_classname("AF_FixedAssetCodeMgtForm");
                this.set_titletext("고정자산코드 관리화면");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findFixedAssetCdList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/fixedasset/findFixedAssetCdList.do</Col><Col id=\"callbackFunc\">fixedAssetCdCallBack</Col><Col id=\"outData\">dsFixedAssetCd=dsFixedAssetCd dsFixedAssetCdDtl=dsFixedAssetCdDtl</Col></Row><Row><Col id=\"serviceID\">batchFixedAssetCdProcess</Col><Col id=\"URL\">his::acc/fixedasset/batchFixedAssetCdProcess.do</Col><Col id=\"inData\">dsFixedAssetCd=dsFixedAssetCd:U dsFixedAssetCdDtl=dsFixedAssetCdDtl:U</Col><Col id=\"callbackFunc\">fixedAssetCdCallBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetCdDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetCd", this);
            obj.set_enableevent("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "0%", "0", "1232", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.79%", "-4", null, "60", "64.94%", null, this.titleBarDiv);
            obj.getSetter("taborder").set("15");
            obj.set_text("고정자산기초코드 관리화면");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "756", "67", "86", "26", null, null, this.titleBarDiv);
            obj.getSetter("taborder").set("16");
            obj.set_text("자산번호");
            obj.getSetter("class").set("AreaStc");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Edit("assetNoEdit", "absolute", "845", "67", "105", "26", null, null, this.titleBarDiv);
            obj.set_taborder("17");
            obj.getSetter("class").set("AreaEdt");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Edit("assetNmEdit", "absolute", "1040", "67", "105", "26", null, null, this.titleBarDiv);
            obj.set_taborder("18");
            obj.getSetter("class").set("AreaEdt");
            this.titleBarDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "952", "67", "86", "26", null, null, this.titleBarDiv);
            obj.getSetter("taborder").set("19");
            obj.set_text("자산이름");
            obj.getSetter("class").set("AreaStc");
            this.titleBarDiv.addChild(obj.name, obj);

            obj = new Div("fixedAssetCdDiv", "absolute", "2.24%", "61", null, "698", "1.36%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Grid("fixedAssetCdDtlGrid", "absolute", "51.45%", "51", null, "587", "3.4%", null, this.fixedAssetCdDiv);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:fixedAssetCdDtl\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:cdDtlNm\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:cdDtlUseYn\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:fixedAssetCdDtl\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:cdDtlNm\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:cdDtlUseYn\"/></Band></Format></Formats>");
            this.fixedAssetCdDiv.addChild(obj.name, obj);
            obj = new Static("fixedAssetCdDtlStc", "absolute", "51.45%", "11", null, "35", "41.41%", null, this.fixedAssetCdDiv);
            obj.getSetter("taborder").set("8");
            obj.set_text("코드상세");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.fixedAssetCdDiv.addChild(obj.name, obj);
            obj = new Static("fixedAssetCdStc", "absolute", "3.07%", "11", null, "35", "89.88%", null, this.fixedAssetCdDiv);
            obj.getSetter("taborder").set("9");
            obj.set_text("코 드");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.fixedAssetCdDiv.addChild(obj.name, obj);
            obj = new Grid("fixedAssetCdGrid", "absolute", "3.07%", "51", null, "587", "51.78%", null, this.fixedAssetCdDiv);
            obj.set_taborder("10");
            obj.set_binddataset("dsFixedAssetCd");
            obj.set_formatid("default");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드유형\"/><Cell col=\"1\" text=\"코드유형 명칭\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:fixedAssetCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:cdNm\"/><Cell col=\"2\" displaytype=\"checkbox\" text=\"bind:cdUseYn\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드유형\"/><Cell col=\"1\" text=\"코드유형 명칭\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:fixedAssetCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:cdNm\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:cdUseYn\"/></Band></Format><Format id=\"admin\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드유형\"/><Cell col=\"1\" text=\"코드유형 명칭\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:fixedAssetCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:cdNm\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:cdUseYn\"/></Band></Format></Formats>");
            this.fixedAssetCdDiv.addChild(obj.name, obj);

            obj = new Button("batchFixedAssetCdBtn", "absolute", "1084", "712", "110", "38", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deleteFixedAssetCdBtn", "absolute", "520", "72", "90", "35", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addFixedAssetCdBtn", "absolute", "422", "72", "90", "35", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deleteFixedAssetCdDtlBtn", "absolute", "1104", "72", "90", "35", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addFixedAssetCdDtlBtn", "absolute", "1006", "72", "90", "35", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
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
            obj = new Layout("default", "", 0, 698, this.fixedAssetCdDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");

            	}
            );
            this.fixedAssetCdDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AF_FixedAssetCodeMgtForm");
            		p.set_titletext("고정자산코드 관리화면");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AF_FixedAssetCodeMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AF_FixedAssetCodeMgtForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        
        // 폼 로드 이벤트
        this.AF_FixedAssetCodeMgtForm_onload = function(obj,e)
        {
        	this.gfnService("findFixedAssetCdList");
        }

        // 콜백 함수
        this.fixedAssetCdCallBack = function fixedAssetCdCallBack(strSvcID,nErrorCode,strErrorMag)
        {
        	if(strSvcID == "findFixedAssetCdList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			this.fixedAssetCdDiv_fixedAssetCdGrid_oncellclick(this,0);
        		}
        	}else if(strSvcID == "batchFixedAssetCdProcess"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			this.exefilter();
        			alert("정상처리 되었습니다.");
        		}
        	}
        }

        // 그리드 클릭 이벤트(코드)
        this.fixedAssetCdDiv_fixedAssetCdGrid_oncellclick = function(obj,e)
        {
        	this.exefilter();
        	this.fixedAssetCdDiv.fixedAssetCdDtlGrid.set_binddataset("dsFixedAssetCdDtl");
        	var selectRow = this.dsFixedAssetCd.getRowType(this.dsFixedAssetCd.rowposition);
        	if(selectRow == 2){	 
        		this.fixedAssetCdDiv.fixedAssetCdGrid.set_formatid("insert");
        	}else{
        		// 나중에 접속자의 권한에 따른 수정항목 나누기 ex) if(application.gdsLoginEmp.getColumn(0,"권한코드") == "AU-01(상위권한))" 
        		this.fixedAssetCdDiv.fixedAssetCdGrid.set_formatid("default");
        	 }
        }

        // 그리드 클릭 이벤트(코드상세)
        this.fixedAssetCdDiv_fixedAssetCdDtlGrid_oncellclick = function(obj,e)
        {
        	var selectRow = this.dsFixedAssetCdDtl.getRowType(this.dsFixedAssetCdDtl.rowposition);
        	if(selectRow == 2){
        		this.fixedAssetCdDiv.fixedAssetCdDtlGrid.set_formatid("insert");
        	}else{
        		this.fixedAssetCdDiv.fixedAssetCdDtlGrid.set_formatid("default");
        	}
        }

        // 그리드 내용변경 이벤트
        this.fixedAssetCdDiv_fixedAssetCdGrid_onselectchanged = function(obj,e)
        {
        	this.fixedAssetCdDiv_fixedAssetCdGrid_oncellclick(obj,e);
        }

        //  페이지전용 함수
        this.exefilter = function()
        {
        	var fixedAssetCd = this.dsFixedAssetCd.getColumn(this.dsFixedAssetCd.rowposition,"fixedAssetCd");
        	this.dsFixedAssetCdDtl.filter("fixedAssetCd=='"+fixedAssetCd+"'");
        }

        //  데이터셋 이벤트(코드)
        this.dsFixedAssetCd_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "fixedAssetCd"){
        		for(var i=0; i < this.dsFixedAssetCd.getRowCount(); i++){
        			var fixedAssetCd = this.dsFixedAssetCd.getColumn(i,"fixedAssetCd");
        			if(this.dsFixedAssetCd.rowposition != i){
        				if(fixedAssetCd == e.newvalue){
        					alert("이미 등록된 코드유형입니다.");
        					this.dsFixedAssetCd.setColumn(this.dsFixedAssetCd.rowposition,"fixedAssetCd","");
        					break;
        				}
        			}
        		}
        	}
        }

        //  데이터셋 이벤트(코드상세)
        this.dsFixedAssetCdDtl_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "fixedAssetCdDtl"){
        		for(var i=0; i < this.dsFixedAssetCdDtl.getRowCount(); i++){
        			var fixedAssetCdDtl = this.dsFixedAssetCdDtl.getColumn(i,"fixedAssetCdDtl");
        			if(this.dsFixedAssetCdDtl.rowposition != i){	
        				if(fixedAssetCdDtl == e.newvalue){
        					alert("이미 등록된 코드입니다.");
        					this.dsFixedAssetCdDtl.setColumn(this.dsFixedAssetCdDtl.rowposition,"fixedAssetCdDtl","");
        					break;
        				}
        			}
        		}
        	}
        }

        // 고정자산 추가(코드)
        this.addFixedAssetCdBtn_onclick = function(obj,e)
        {
        	var nRow = this.dsFixedAssetCd.addRow();
        	this.dsFixedAssetCd.setColumn(nRow,"cdUseYn",1);
        }

        // 고정자산 추가(코드상세)
        this.addFixedAssetCdDtlBtn_onclick = function(obj,e)
        {
        	var fixedAssetCd = this.dsFixedAssetCd.getColumn(this.dsFixedAssetCd.rowposition,"fixedAssetCd");
        	if(fixedAssetCd != null && fixedAssetCd != ""){
        		var nRow = this.dsFixedAssetCdDtl.addRow();
        		this.dsFixedAssetCdDtl.setColumn(nRow,"fixedAssetCd",fixedAssetCd);
        		this.dsFixedAssetCdDtl.setColumn(nRow,"cdDtlUseYn",1);
        	}else{
        		alert("코드유형 입력 후 추가하시오.");
        	}
        }

        // 고정자산 삭제(코드)
        this.deleteFixedAssetCdBtn_onclick = function(obj,e)
        {
        	var conResult = confirm("해당 상세코드가 함께 삭제됩니다. 진행하시겠습니까?");
        	if(conResult == true){
        		alert(this.dsFixedAssetCdDtl.deleteAll());
        		this.dsFixedAssetCdDtl.deleteAll()
        		this.dsFixedAssetCd.deleteRow(this.dsFixedAssetCd.rowposition);
        		this.exefilter();
        	}
        }

        // 고정자산 삭제(코드상세)
        this.deleteFixedAssetCdDtlBtn_onclick = function(obj,e)
        {
        	this.dsFixedAssetCdDtl.deleteRow(this.dsFixedAssetCdDtl.rowposition);
        }

        // 고정자산코드 일괄처리
        this.batchFixedAssetCdBtn_onclick = function(obj,e)
        {
        	var flag = 0;
        	for(var i=0; i < this.dsFixedAssetCd.getRowCount(); i++){
        		var rowType = this.dsFixedAssetCd.getRowType(i);
        		var fixedAssetCd = this.dsFixedAssetCd.getColumn(i,"fixedAssetCd");
        		if(rowType == 2 && (fixedAssetCd == null || fixedAssetCd == "")){
        			flag = 1;
        			break;
        		}
        	}
        	
        	if(flag == 0){
        		this.dsFixedAssetCdDtl.filter("");
        		for(var i=0; i < this.dsFixedAssetCdDtl.getRowCount(); i++){
        			var rowType = this.dsFixedAssetCdDtl.getRowType(i);
        			var fixedAssetCdDtl = this.dsFixedAssetCdDtl.getColumn(i,"fixedAssetCdDtl");
        				if(rowType == 2 && (fixedAssetCdDtl == null || fixedAssetCdDtl == "")){
        					flag = 1;
        					break;
        				}
        		}
        	}
        	
        	if(flag == 1){
        		this.exefilter();
        		alert("코드 유형 및 코드 입력사항을 확인 하십시오.");
        	}else{
        		this.gfnService("batchFixedAssetCdProcess");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFixedAssetCdDtl.addEventHandler("oncolumnchanged", this.dsFixedAssetCdDtl_oncolumnchanged, this);
            this.dsFixedAssetCd.addEventHandler("oncolumnchanged", this.dsFixedAssetCd_oncolumnchanged, this);
            this.addEventHandler("onload", this.AF_FixedAssetCodeMgtForm_onload, this);
            this.titleBarDiv.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.titleBarDiv.Static00.addEventHandler("onclick", this.Static06_onclick, this);
            this.fixedAssetCdDiv.fixedAssetCdDtlGrid.addEventHandler("oncellclick", this.fixedAssetCdDiv_fixedAssetCdDtlGrid_oncellclick, this);
            this.fixedAssetCdDiv.fixedAssetCdDtlStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.fixedAssetCdDiv.fixedAssetCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.fixedAssetCdDiv.fixedAssetCdGrid.addEventHandler("oncellclick", this.fixedAssetCdDiv_fixedAssetCdGrid_oncellclick, this);
            this.fixedAssetCdDiv.fixedAssetCdGrid.addEventHandler("onselectchanged", this.fixedAssetCdDiv_fixedAssetCdGrid_onselectchanged, this);
            this.batchFixedAssetCdBtn.addEventHandler("onclick", this.batchFixedAssetCdBtn_onclick, this);
            this.deleteFixedAssetCdBtn.addEventHandler("onclick", this.deleteFixedAssetCdBtn_onclick, this);
            this.addFixedAssetCdBtn.addEventHandler("onclick", this.addFixedAssetCdBtn_onclick, this);
            this.deleteFixedAssetCdDtlBtn.addEventHandler("onclick", this.deleteFixedAssetCdDtlBtn_onclick, this);
            this.addFixedAssetCdDtlBtn.addEventHandler("onclick", this.addFixedAssetCdDtlBtn_onclick, this);

        };

        this.loadIncludeScript("AF_FixedAssetCodeMgtForm.xfdl");

       
    };
}
)();

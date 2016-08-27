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
                this.set_name("AE_assiSubForm");
                this.set_classname("AE_assiSubForm");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAssiType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"assiTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("useYN", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\"/><Col id=\"code\">전체</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAssiSub", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"assiTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAssiTypeList</Col><Col id=\"URL\">his::acc/elementary/findAssiTypeList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAssiType=dsAssiType</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">findAssiSubList</Col><Col id=\"URL\">his::acc/elementary/findAssiSubList.do</Col><Col id=\"outData\">dsAssiSub=dsAssiSub</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchAssiTypeList</Col><Col id=\"URL\">his::acc/elementary/batchAssiTypeList.do</Col><Col id=\"inData\">dsAssiType=dsAssiType:U dsAssiSub=dsAssiSub:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">lastYearAssiCodeCopy</Col><Col id=\"URL\">his::acc/elementary/lastYearAssiCodeCopy.do</Col><Col id=\"inData\">dsAssiType=dsAssiType:U dsAssiSub=dsAssiSub</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "0.16%", "0", "1240", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.11%", "13", null, "35", "71.13%", null, this.titleBarDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("보조과목 및 보조유형 관리");
            obj.style.set_font("bold 20 나눔스퀘어 Bold");
            this.titleBarDiv.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "11.92%", "65", null, "32", "78.64%", null, this);
            obj.set_taborder("1");
            obj.set_value("2016");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Div("yearDiv", "absolute", "2.48%", "65", null, "32", "89.52%", null, this);
            obj.set_taborder("2");
            obj.set_text("회계년도");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("acntDiv", "absolute", "25.2%", "65", null, "32", "66.8%", null, this);
            obj.set_taborder("3");
            obj.set_text("보조유형명");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("subNmEd", "absolute", "34.8%", "65", null, "32", "43.92%", null, this);
            obj.set_taborder("4");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "721", "65", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "2.48%", "102", null, "606", "0.72%", null, this);
            obj.set_taborder("6");
            obj.style.set_background("#edececff");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Grid("subGrid", "absolute", "50.16%", "111", null, "551", "1.28%", null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsAssiSub");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"230\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"보조과목코드\"/><Cell col=\"1\" text=\"보조유형코드\"/><Cell col=\"2\" text=\"보조유형명\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:assiTypeCd\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"text\" text=\"bind:assiSubCd\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:assiSubNm\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:useYn\" combodataset=\"useYN\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("typeGrid", "absolute", "2.72%", "111", null, "551", "50.72%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsAssiType");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"보조유형코드\"/><Cell col=\"1\" text=\"보조유형명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:assiTypeCd\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:assiTypeNm\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:useYn\" combodataset=\"useYN\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("typeAddRow", "absolute", "430", "670", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("copyBtn", "absolute", "1040", "716", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::copyBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("typeDelRow", "absolute", "526", "670", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "1142", "716", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("subAddRow", "absolute", "1046", "670", "90", "32", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("subDelRow", "absolute", "1142", "670", "90", "32", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1240, 60, this.titleBarDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.titleBarDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AE_assiSubForm");
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
        this.addIncludeScript("AE_AssiSubForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("AE_AssiSubForm.xfdl", function() {
        //include "scripts::commonTransaction.xjs";

        //보조과목,유형 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	var accYear=this.yearSpin.value;
        	var argument = 'accYear='+accYear;
        	this.dsService.setColumn(0,"argument",argument);
        	this.dsService.setColumn(1,"argument",argument);

        	this.gfnService("findAssiTypeList");
        	this.gfnService("findAssiSubList");
        	this.dsAssiSub.filter("assiTypeCd=='xx'");
        }

        //보조유형 추가
        this.typeAddRow_onclick = function(obj,e)
        {
        	var aRow=this.dsAssiType.addRow();
        	this.dsAssiType.setColumn(aRow,"accYear",this.yearSpin.value);
        }

        //보조유형 삭제
        this.typeDelRow_onclick = function(obj,e)
        {
        	this.dsAssiType.deleteRow(this.typeGrid.currentrow);
        }

        
        //보조유형에 대한 보조과목 조회(보조유형코드그리드 클릭)
        this.typeGrid_oncellclick = function(obj,e)
        {
        	assiTypefilter=this.dsAssiType.getColumn(e.row,"assiTypeCd");
        	this.dsAssiSub.filter("assiTypeCd=='"+assiTypefilter+"'");
        }

        //보조과목 등록
        this.subAddRow_onclick = function(obj,e)
        {
        	var assiTypeCode=this.dsAssiType.getColumn(this.dsAssiType.rowposition,"assiTypeCd");//보조과목 명 얻어오기
        	var aRow = this.dsAssiSub.addRow();
        	this.dsAssiSub.setColumn(aRow,"accYear",this.yearSpin.value);
        	this.dsAssiSub.setColumn(aRow,"assiTypeCd",assiTypeCode);
        }

        //보조과목 삭제
        this.subDelRow_onclick = function(obj,e)
        {
        	this.dsAssiSub.deleteRow(this.subGrid.currentrow);
        }

        
        //보조과목,유형 일괄처리
        this.batchBtn_onclick = function(obj,e)
        {
        	var row=this.dsAssiType.rowcount;
          	for(var i=0; i<row; i++){
        		var NewCode=this.dsAssiType.getColumn(i,"assiTypeCd");
          	
        		if(NewCode==null){
        			alert("보조유형코드는 필수입력사항입니다");
        			return ;
        		}
        	}
        	this.gfnService("batchAssiTypeList");
        }

        
        //전년도 복사
        this.copyBtn_onclick = function(obj,e)
        {
        	var year = this.yearSpin.value-1
        	
        	var Cdcopy = application.confirm(year + "년도 계정과목코드를 복사해오시겠습니까?","전년도회계코드복사");
        	
        	if(Cdcopy==true){
        		var year = this.yearSpin.value;
        		this.dsService.setColumn(3,"argument","year="+year);
        		this.gfnService("lastYearAssiCodeCopy");
        	}else{
        		return ;
        	}
        }

        
        //Callback함수
        this.CallbackFunc=function(serviceID,errorCode,errorMsg){
        	if(serviceID =="findAssiTypeList"){
        		if(errorCode < 0)
        			{
        			alert(errorMsg+"보조유형을 불러오는데 실패했습니다");
        			}
        	}else if(serviceID=="findAssiSubList"){
        		if(errorCode < 0)
        			{
        			alert("보조과목을 불러오는데 실패했습니다.");
        			}
        	}else if(serviceID=="saveAssiTypeList"){
        		if(errorCode == 0){
        			alert("보조코드 정보저장 완료");
        			this.reload();
        			//form.reload();
        		}else if(errorCode < 0){
        			alert(errorMsg+"보조코드 정보저장 실패.");
        	}else if(serviceID=="lastYearAssiCodeCopy"){
        		if(errorCode == 0){
        			alert("전년도 보조코드 복사 성공");
        			this.reload();
        			form.reload();
        		}else if(errorCode < 0){
        			alert(errorMsg+"전년도 보조코드 복사 실패.")
        			}

        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAssiType.addEventHandler("cancolumnchange", this.dsAssiType_cancolumnchange, this);
            this.titleBarDiv.titleStc.addEventHandler("onclick", this.Div04_Static00_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.typeGrid.addEventHandler("oncellclick", this.typeGrid_oncellclick, this);
            this.typeAddRow.addEventHandler("onclick", this.typeAddRow_onclick, this);
            this.copyBtn.addEventHandler("onclick", this.copyBtn_onclick, this);
            this.typeDelRow.addEventHandler("onclick", this.typeDelRow_onclick, this);
            this.batchBtn.addEventHandler("onclick", this.batchBtn_onclick, this);
            this.subAddRow.addEventHandler("onclick", this.subAddRow_onclick, this);
            this.subDelRow.addEventHandler("onclick", this.subDelRow_onclick, this);

        };

        this.loadIncludeScript("AE_AssiSubForm.xfdl");

       
    };
}
)();

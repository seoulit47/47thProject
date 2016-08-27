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
                this.set_name("AE_AcntNumForm");
                this.set_classname("AE_AcntNumForm");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("useYN", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\"/><Col id=\"code\">전체</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAccntNo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"accntNo\" type=\"STRING\" size=\"256\"/><Column id=\"accntNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"assiTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bankDiv\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAccntNoList</Col><Col id=\"URL\">his::acc/elementary/findAccntNoList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAccntNo=dsAccntNo</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">batchAccntNoList</Col><Col id=\"URL\">his::acc/elementary/batchAccntNoListProcess.do</Col><Col id=\"inData\">dsAccntNo=dsAccntNo:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">lastYearAccntNoCopy</Col><Col id=\"URL\">his::acc/elementary/lastYearAccntNoCopy.do</Col><Col id=\"inData\">dsAccntNo=dsAccntNo</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA003</Col><Col id=\"dsName\">dsGA003</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGA003", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "0%", "-4", "1240", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "3.71%", "11", null, "35", "71.61%", null, this.titleBarDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("법인계좌번호 관리");
            obj.style.set_font("bold 20 나눔스퀘어 Bold");
            this.titleBarDiv.addChild(obj.name, obj);

            obj = new Div("yearDiv", "absolute", "2.24%", "74", null, "32", "89.76%", null, this);
            obj.set_taborder("1");
            obj.set_text("회계년도");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "11.68%", "74", null, "32", "78.88%", null, this);
            obj.set_taborder("2");
            obj.set_value("2016");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Div("acntDiv", "absolute", "24.96%", "74", null, "32", "67.04%", null, this);
            obj.set_taborder("3");
            obj.set_text("보조유형명");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("acntSubEd", "absolute", "34.56%", "74", null, "32", "44.16%", null, this);
            obj.set_taborder("4");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "718", "74", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("acntNoGrid", "absolute", "2.24%", "139", null, "570", "1.12%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsAccntNo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"159\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"61\"/><Column size=\"166\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\"><Cell/><Cell col=\"1\" style=\"align:left;\" text=\"계정정보\"/></Cell><Cell col=\"2\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"보조유형코드\"/><Cell row=\"1\"/></Cell><Cell col=\"3\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"계좌번호\"/><Cell row=\"1\"/></Cell><Cell col=\"4\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"계좌명\"/><Cell row=\"1\"/></Cell><Cell col=\"5\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"은행\"/><Cell row=\"1\"/></Cell><Cell col=\"6\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"샤용여부\"/><Cell row=\"1\"/></Cell><Cell col=\"7\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"비고\"/><Cell row=\"1\"/></Cell><Cell row=\"1\" text=\"계정코드\"/><Cell row=\"1\" col=\"1\" text=\"계정명\"/></Band><Band id=\"body\"><Cell edittype=\"expand\" text=\"bind:acntCd\" expandshow=\"show\" expandimage=\"URL('theme://images\\ico_menu_check.png')\"/><Cell col=\"1\" text=\"bind:acntNm\"/><Cell col=\"2\" edittype=\"expand\" text=\"bind:assiTypeNm\" expandshow=\"show\" expandimage=\"URL('theme://images\\ico_menu_check.png')\"/><Cell col=\"3\" text=\"bind:accntNo\"/><Cell col=\"4\" text=\"bind:accntNm\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:bankDiv\" combodataset=\"dsGA003\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"6\" text=\"bind:useYn\" combodataset=\"useYN\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"7\" text=\"bind:note\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "1051", "99", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "1147", "99", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("copyBtn", "absolute", "1044", "720", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::copyBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "1146", "720", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
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
            		p.set_classname("AE_AcntNumForm");
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
        this.addIncludeScript("AE_AccntNumForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("AE_AccntNumForm.xfdl", "scripts::commonBind.xjs");
        this.registerScript("AE_AccntNumForm.xfdl", function() {
        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonBind.xjs";	

        
        // 화면 로드시
        this.AE_AcntNoForm_onload = function(obj,e)
        {
        	this.gfnBind();
        }

        //계좌 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	var accYear = this.yearSpin.value;
        	var argument = "accYear="+accYear;
        	this.dsService.setColumn(0, "argument", argument);
        	this.gfnService("findAccntNoList");
        }

        //계좌 추가
        this.subAddRow_onclick = function(obj,e)
        {
        	var newRow = this.dsAccntNo.addRow();	
        	this.dsAccntNo.setColumn(newRow, "accYear", this.yearSpin.value);
        }

        //계좌 삭제
        this.subDelRow_onclick = function(obj,e)
        {
        	this.dsAccntNo.deleteRow(this.acntNoGrid.currentrow);
        }

        // 그리드함수
        this.acntNoGrid_onexpanddown = function(obj,e)
        {
        	var accYear = this.yearSpin.value;
        	if(e.cell == 0){
        		application.open("계정과목검색","acc::AE_AcntCodePopupForm.xfdl",this.parent,{gubun:"acntCD"},'',e.screenX,e.screenY);
        	}else if(e.cell == 2){
        		application.open("보조유형과목검색","acc::AE_AssiTypePopupForm.xfdl",this.parent,{accYear:accYear},'',e.screenX,e.screenY);	
        	}
        }

        // 팝업함수
        this.setCode=function(pCode,accCodeArr)
        {
        		this.dsAccntNo.setColumn(this.dsAccntNo.rowposition,"acntCd",accCodeArr[0]);
        		this.dsAccntNo.setColumn(this.dsAccntNo.rowposition,"acntNm",accCodeArr[1]);
        }
        this.assicode=function(assiType)
        {
        		this.dsAccntNo.setColumn(this.dsAccntNo.rowposition,"assiTypeCd",assiType[0]);
        		this.dsAccntNo.setColumn(this.dsAccntNo.rowposition,"assiTypeNm",assiType[1]);
        }

        
        //계좌 저장
        this.batchBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchAccntNoList");
        }

        //전년도 복사
        this.copyBtn_onclick = function(obj,e)
        {
        	var year = this.yearSpin.value-1
        	var Cdcopy = application.confirm(year + "년도 계좌번호를 복사해오시겠습니까?","전년도 계좌번호복사");
        	
        	if(Cdcopy==true){
        		var year = this.yearSpin.value;
        		this.dsService.setColumn(2,"argument","year="+year);
        		this.gfnService("lastYearAccntNoCopy");
        	}else{
        		return ;
        	}
        }

        
        //Callback함수
        this.CalbackFunc = function(serviceID,errorCode,errorMsg){
        	if(ServiceID=="findAccntNoList"){
        		if(errorCode < 0){
        			alert(errorMsg+"계좌번호목록을 불러오는데 실패했습니다");
        		}
        	}else if(ServiceID=="batchAccntNoList"){
        		if(errorCode == 0){
        			alert("계좌번호정보 일괄처리를 완료했습니다.");
        			form.reload();
        		}else if(errorCode < 0){
        			alert(errorMsg+"계좌번호정보 일괄처리를 실패했습니다.");
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AE_AcntNoForm_onload, this);
            this.titleBarDiv.titleStc.addEventHandler("onclick", this.Div04_Static00_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.acntNoGrid.addEventHandler("onexpanddown", this.acntNoGrid_onexpanddown, this);
            this.addBtn.addEventHandler("onclick", this.subAddRow_onclick, this);
            this.delBtn.addEventHandler("onclick", this.subDelRow_onclick, this);
            this.copyBtn.addEventHandler("onclick", this.copyBtn_onclick, this);
            this.batchBtn.addEventHandler("onclick", this.batchBtn_onclick, this);

        };

        this.loadIncludeScript("AE_AccntNumForm.xfdl");

       
    };
}
)();

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
                this.set_name("AE_accCodeForm");
                this.set_classname("AE_accCodeForm");
                this.set_titletext("계정과목 코드 관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA050</Col><Col id=\"dsName\">dsGA050</Col></Row><Row><Col id=\"code\">GB049</Col><Col id=\"dsName\">dsGB049</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAccAcnt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"parentAcntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntDiv\" type=\"STRING\" size=\"256\"/><Column id=\"creDebDiv\" type=\"STRING\" size=\"256\"/><Column id=\"assiTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"budgYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"incomArtiCd\" type=\"STRING\" size=\"256\"/><Column id=\"cashArtiCd\" type=\"STRING\" size=\"256\"/><Column id=\"inputYn\" type=\"STRING\" size=\"256\"/><Column id=\"deductYn\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAccAcnt</Col><Col id=\"URL\">his::acc/elementary/findAccAcntList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAccAcnt=dsAccAcnt</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">batchAccAcntListProcess</Col><Col id=\"URL\">his::acc/elementary/batchAccAcntProcess.do</Col><Col id=\"inData\">dsAccAcnt=dsAccAcnt:U</Col><Col id=\"outData\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">lastYearAcntCopy</Col><Col id=\"URL\">his::acc/elementary/lastYearAcntCopy.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAccAcnt=dsAccAcnt</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
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

            obj = new Dataset("dsGB049", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGA050", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "0.16%", "0", "1238", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.13%", "13", null, "35", "77.49%", null, this.titleBarDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("계정과목 코드 관리");
            obj.style.set_font("bold 20 나눔스퀘어 Bold");
            this.titleBarDiv.addChild(obj.name, obj);

            obj = new Div("yearDiv", "absolute", "2.24%", "65", null, "32", "89.76%", null, this);
            obj.set_taborder("1");
            obj.set_text("회계년도");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("acntDiv", "absolute", "24.96%", "65", null, "32", "67.04%", null, this);
            obj.set_taborder("2");
            obj.set_text("계정과목명");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "11.68%", "65", null, "32", "78.88%", null, this);
            obj.set_taborder("3");
            obj.set_value("2016");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Edit("acntNmEd", "absolute", "34.56%", "65", null, "32", "44.16%", null, this);
            obj.set_taborder("4");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "718", "65", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("threeGrid", "absolute", "2.56%", "119", null, "601", "75.28%", null, this);
            obj.set_taborder("6");
            obj.set_binddataset("dsAccAcnt");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"293\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:acntNm\" expandshow=\"hide\" treestartlevel=\"1\" treelevel=\"bind:lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("acntGrid", "absolute", "25.6%", "117", null, "603", "1.04%", null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsAccAcnt");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj.set_treeinitstatus("collapse,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"150\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"83\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"계정과목\"/><Cell col=\"2\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"상위계정\"/><Cell row=\"1\"/></Cell><Cell col=\"3\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"계정구분\"/><Cell row=\"1\"/></Cell><Cell col=\"4\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"차대\"/><Cell row=\"1\"/></Cell><Cell col=\"5\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"보조유형\"/><Cell row=\"1\"/></Cell><Cell col=\"6\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"예산여부\"/><Cell row=\"1\"/></Cell><Cell col=\"7\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"차감여부\"/><Cell row=\"1\"/></Cell><Cell col=\"8\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"사용여부\"/><Cell row=\"1\"/></Cell><Cell row=\"1\" text=\"코드\"/><Cell row=\"1\" col=\"1\" text=\"계정과목명\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:acntCd\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:acntNm\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:parentAcntCd\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:acntDiv\" combodataset=\"dsGA050\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:creDebDiv\" combodataset=\"dsGB049\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"expand\" text=\"bind:assiTypeCd\" expandshow=\"show\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:budgYn\" combodataset=\"useYN\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:deductYn\" combodataset=\"useYN\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:useYn\" combodataset=\"useYN\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "1143", "724", "90", "32", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("removeBtn", "absolute", "1034", "724", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("regBtn", "absolute", "925", "724", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("copyBtn", "absolute", "816", "724", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::copyBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1238, 60, this.titleBarDiv,
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
            		p.set_classname("AE_accCodeForm");
            		p.set_titletext("계정과목 코드 관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AE_AccCodeForm.xfdl", "scripts::commonTransaction.Xjs");
        this.addIncludeScript("AE_AccCodeForm.xfdl", "scripts::commonBind.xjs");
        this.registerScript("AE_AccCodeForm.xfdl", function() {
        //include "scripts::commonTransaction.Xjs";
        //include "scripts::commonBind.xjs";

        var accYear;

        //Onload
        this.AE_accCodeForm_onload = function(obj,e)
        {
        	this.gfnBind();
        }

        

        //계정과목 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	accYear = this.yearSpin.value;
        	var acntNm = this.acntNmEd.value;
        	var argument = 'accYear='+accYear+' acntNm='+acntNm;
        	this.dsService.setColumn(0, "argument", argument);
        	this.gfnService("findAccAcnt");
        }

        // 전년도 코드복사
        this.copyBtn_onclick = function(obj,e)
        {
        	var year = this.yearSpin.value-1;
        	var codeCp = application.confirm(year + "년도 계정과목코드를 복사하시겠습니까?", "전년도코드복사");
        	
        	if(codeCp == true){
        		year++;
        		this.dsService.setColumn(2, "argument", "year="+year);
        		this.gfnService("lastYearAcntCopy");
        	}else{
        		return;
        	}
        }

        // 코드추가
        this.regBtn_onclick = function(obj,e)
        {
        	var acntNm = this.dsAccAcnt.getColumn(this.dsAccAcnt.rowposition, "acntNm");	//계정과목명 얻기
        	var acntCd = this.dsAccAcnt.getColumn(this.dsAccAcnt.rowposition, "acntCd");	//계정과목코드 얻기
        	var lev = this.dsAccAcnt.getColumn(this.dsAccAcnt.rowposition, "lev");			//계정레벨 얻기
        	var parentAcntCd = this.dsAccAcnt.getColumn(this.dsAccAcnt.rowposition, "parentAcntCd");	//부모코드 얻기
        	//alert(parentAcntCd);
        	
        	if( acntNm == null){
        		alert("계정과목을 선택해주세요~");
        		return;
        	}else{
        		application.open("CodePupupForm"
        						, "acc::AE_accCodePopupForm.xfdl"
        						, obj.parent
        						, {acntNm:acntNm,acntCd:acntCd,lev:lev,parentAcntCd:parentAcntCd, accYear:accYear, dsAccAcnt:this.dsAccAcnt}
        						, ''
        						, 100
        						, 100);
        	}
        }

        // 코드삭제
        this.removeBtn_onclick = function(obj,e)
        {
        	var acntNm=this.dsAccAcnt.getColumn(this.dsAccAcnt.rowposition ,"acntNm");
        	var inputYN=this.dsAccAcnt.getColumn(this.dsAccAcnt.rowposition ,"inputYn");
        	
        	if(inputYN=='N'){
        		alert("하위데이터가 있는 코드는 삭제할수 없습니다");
        	}else{
        		var codeDel=application.confirm(acntNm +" 을 삭제하시겠습니까?","코드삭제");
        		if(codeDel){
        			this.dsAccAcnt.deleteRow(this.acntGrid.currentrow);
        		}
        	}
        }

        

        this.acntGrid_oncelldblclick = function(obj,e)
        {
        	if(e.cell == 5){
        		application.open("보조유형과목검색", "acc::AE_assiTypePopupForm.xfdl", this.parent,{}, '');
        	}
        }

        this.assicode=function(assiType)
        {
        	this.dsAccAcnt.setColumn(this.dsAccAcnt.rowposition,"assiTypeNm",assiType[1]);
        	this.dsAccAcnt.setColumn(this.dsAccAcnt.rowposition,"assiTypeCd",assiType[0]);
        }

        
        // 코드저장
        this.batchBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchAccAcntListProcess");
        }

        

        

        
        //Callback함수

        this.CalbackFunc = function(serviceID,errorCode,errorMsg){
        	if(serviceID=="findAccAcnt"){
        		if(errorCode < 0){
        			alert(errorMsg+"회계계정과목을 불러오는데 실패했습니다");
        		}
        	}else if(serviceID=="batchAccAcntListProcess"){
        		if(errorCode == 0){
        			alert("회계계정과목 일괄처리를 완료했습니다.");
        			this.reload();
        			//form.reload();
        		}else if(errorCode < 0){
        			alert(errorMsg+"회계계정과목 일괄처리를 실패했습니다.");
        		}
        	}else if(serviceID=="lastYearAcntCopy"){
        		if(errorCode == 0){
        			alert("전년도 회계계정과목코드 복사 성공");
        			this.reload();
        			//form.reload();
        		}else if(errorCode < 0){
        			alert(errorMsg+"전년도 회계계정과목코드 복사 실패.")
        		}

        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AE_accCodeForm_onload, this);
            this.titleBarDiv.titleStc.addEventHandler("onclick", this.Div04_Static00_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.acntGrid.addEventHandler("onexpanddown", this.acntGrid_onexpanddown, this);
            this.acntGrid.addEventHandler("oncelldblclick", this.acntGrid_oncelldblclick, this);
            this.batchBtn.addEventHandler("onclick", this.batchBtn_onclick, this);
            this.removeBtn.addEventHandler("onclick", this.removeBtn_onclick, this);
            this.regBtn.addEventHandler("onclick", this.regBtn_onclick, this);
            this.copyBtn.addEventHandler("onclick", this.copyBtn_onclick, this);

        };

        this.loadIncludeScript("AE_AccCodeForm.xfdl");

       
    };
}
)();

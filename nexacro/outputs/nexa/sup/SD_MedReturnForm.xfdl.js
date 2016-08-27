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
                this.set_name("SD_MedReturnForm");
                this.set_classname("SD_MedReturnForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">외래</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">병동</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findMedicationList</Col><Col id=\"URL\">his::sup/drug/findMedicationList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsMedication=dsMedication </Col><Col id=\"argument\"/><Col id=\"callbackFunc\">medCallback</Col></Row><Row><Col id=\"serviceID\">processMedReturn</Col><Col id=\"URL\">his::sup/drug/processMedReturn.do</Col><Col id=\"inData\">dsMedication=dsMedication:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">medCallback</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMedication", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"medicationDay\" type=\"STRING\" size=\"256\"/><Column id=\"medicationQnt\" type=\"STRING\" size=\"256\"/><Column id=\"flag\" type=\"STRING\" size=\"256\"/><Column id=\"medicationNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"medCd\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"medNm\" type=\"STRING\" size=\"256\"/><Column id=\"returner\" type=\"STRING\" size=\"256\"/><Column id=\"returnDate\" type=\"STRING\" size=\"256\"/><Column id=\"returnQnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMedReturn", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "1249", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar2.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5.12%", "-3", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("약반납 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "2.24%", "72", null, "30", "89.76%", null, this);
            obj.set_taborder("2");
            obj.set_text("환자등록번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "10.88%", "72", null, "30", "79.76%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "38.96%", "72", null, "30", "53.04%", null, this);
            obj.set_taborder("4");
            obj.set_text("조제번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("medicationEd", "absolute", "47.76%", "72", null, "30", "41.04%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "1128", "71", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "63.36%", "72", null, "30", "28.64%", null, this);
            obj.set_taborder("7");
            obj.set_text("처방기간");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd", "absolute", "20.64%", "72", null, "30", "68.56%", null, this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("patPopupBtn", "absolute", "397", "71", "32", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Calendar("prescDateCal", "absolute", "72.16%", "72", null, "30", "12.4%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");

            obj = new Grid("medicationGrid", "absolute", "2.32%", "112", null, "606", "2.56%", null, this);
            obj.set_taborder("11");
            obj.set_binddataset("dsMedication");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"66\"/><Column size=\"70\"/><Column size=\"72\"/><Column size=\"107\"/><Column size=\"90\"/><Column size=\"78\"/><Column size=\"198\"/><Column size=\"115\"/><Column size=\"61\"/><Column size=\"97\"/><Column size=\"71\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"조제번호\"/><Cell col=\"1\" text=\"환자번호\"/><Cell col=\"2\" text=\"환자이름\"/><Cell col=\"3\" text=\"조제일자\"/><Cell col=\"4\" text=\"병동/외래구분\"/><Cell col=\"5\" text=\"약품코드\"/><Cell col=\"6\" text=\"약품명\"/><Cell col=\"7\" text=\"처방일자\"/><Cell col=\"8\" text=\"조제수량\"/><Cell col=\"9\" text=\"확인자\"/><Cell col=\"10\" text=\"반납수량\"/></Band><Band id=\"body\"><Cell text=\"bind:medicationNo\"/><Cell col=\"1\" text=\"bind:patNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" text=\"bind:medicationDay\" mask=\"####-##-##\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:flag\" combodataset=\"dsDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"5\" text=\"bind:medCd\"/><Cell col=\"6\" text=\"bind:medNm\"/><Cell col=\"7\" text=\"bind:prescDate\" mask=\"####-##-##\"/><Cell col=\"8\" text=\"bind:medicationQnt\"/><Cell col=\"9\" text=\"bind:returner\"/><Cell col=\"10\" edittype=\"normal\" text=\"bind:returnQnt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("returnBtn", "absolute", "1128", "723", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::returnBtn2.png') stretch");
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
            		p.set_classname("SD_MedReturnForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SD_MedReturnForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SD_MedReturnForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("SD_MedReturnForm.xfdl", function() {
        // 공통 스크립트
        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";

        // 공통변수
        var today;
        var empName;

        // 화면로드
        this.SD_MedReturnForm_onload = function(obj,e)
        {
        	today = this.gfnDate("yyyyMMdd");
        	empName=application.gdsEmp.getColumn(0,'empNm');
        	//this.prescDateCal.set_value(today);
        }

        // 환자등록 버튼
        this.patPopupBtn_onclick = function(obj,e)
        {
        	this.gfnPatPopup();
        }

        this.setPatInfo=function(arr){
        	this.patNoEd.set_value(arr[0]);
        	this.patNmEd.set_value(arr[1]);
        }

        // 조회버튼
        this.searchBtn_onclick = function(obj,e)
        {
        	var patNo = this.patNoEd.value;
        	var medicationNo = this.medicationEd.value;
        	var prescDate = this.prescDateCal.value;
        	
        	if(patNo==null){
        		alert("환자번호를 입력하세요");
        	}else{
        		var argument = 'patNo='+patNo+' medicationNo='+medicationNo + ' prescDate='+prescDate;
        		var row = this.dsService.findRow('serviceID' , "findMedicationList");
        	
        		this.dsService.setColumn(row,"argument",argument);
        		this.gfnService("findMedicationList",false);
        	}
        }

        // 반납버튼
        this.returnBtn_onclick = function(obj,e)
        {
        	var rowSize =  this.dsMedication.rowcount;

        	for(i=0; i<rowSize; i++){
        		if(this.dsMedication.getRowType(i)=='4'){
        			this.dsMedication.setColumn(e.row,"returner",empName);
        			this.dsMedication.setColumn(e.row,"returnDate",today);
        			
        		}
        	}
        	this.gfnService("processMedReturn",false);	
        }

        this.dsMedication_cancolumnchange = function(obj,e)
        {
        	if(e.columnid=='returnQnt'){
        		var medicationQnt = this.dsMedication.getColumn(e.row,'medicationQnt');
        		
        		if(medicationQnt-e.newvalue<0){
        			alert('반납수량이 너무 많습니다.');
        			return false;
        		}
        	
        	}	
        }

        // 콜백함수
        this.medCallback=function(svcID,errorCode,errorMsg){
        	if(svcID=="findMedicationList"){
        		alert("조회되었습니다.");
        	}else if(svcID=="processMedReturn"){
        		if(errorCode<0){
        			alert("반납이 실패하였습니다.");

        		}else{
        			alert("반납이 완료되었습니다");
        			
        			this.searchBtn_onclick(null,null);
        		}
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMedication.addEventHandler("cancolumnchange", this.dsMedication_cancolumnchange, this);
            this.addEventHandler("onload", this.SD_MedReturnForm_onload, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.patPopupBtn.addEventHandler("onclick", this.patPopupBtn_onclick, this);
            this.returnBtn.addEventHandler("onclick", this.returnBtn_onclick, this);

        };

        this.loadIncludeScript("SD_MedReturnForm.xfdl");

       
    };
}
)();

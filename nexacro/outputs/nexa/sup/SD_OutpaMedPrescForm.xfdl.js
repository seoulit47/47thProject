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
                this.set_name("SD_OutpaMedPrescForm");
                this.set_classname("SD_OutpaMedPrescForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findMedPresc</Col><Col id=\"URL\">his::sup/drug/findMedPresc.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsMedPresc=dsMedPresc dsPrescInfo=dsPrescInfo</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">processMedication</Col><Col id=\"URL\">his::sup/drug/processMedication.do</Col><Col id=\"inData\">dsMedPresc=dsMedPresc:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMedPresc", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseNm\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"doctNm\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"flag\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrescInfo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"feeCd\" type=\"STRING\" size=\"256\"/><Column id=\"feeNm\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "1249", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar3.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5.12%", "-3", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("외래약 처방관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "2.24%", "64", null, "261", "2.4%", null, this);
            obj.set_taborder("9");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Grid("outpaPatInfoGrid", "absolute", "2.32%", "336", null, "374", "52.08%", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("dsMedPresc");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"113\"/><Column size=\"94\"/><Column size=\"125\"/><Column size=\"197\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"v\"/><Cell col=\"1\" text=\"환자번호\"/><Cell col=\"2\" text=\"환자명\"/><Cell col=\"3\" text=\"처방일\"/><Cell col=\"4\" text=\"상병명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:check\"/><Cell col=\"1\" text=\"bind:patNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" text=\"bind:prescDate\" mask=\"####-##-##\"/><Cell col=\"4\" text=\"bind:diseaseNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("prescInfoGrid", "absolute", "48.8%", "336", null, "374", "2.4%", null, this);
            obj.set_taborder("11");
            obj.set_binddataset("dsPrescInfo");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"320\"/><Column size=\"190\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"처방코드\"/><Cell col=\"1\" text=\"처방명\"/><Cell col=\"2\" text=\"상병명\"/></Band><Band id=\"body\"><Cell text=\"bind:feeCd\"/><Cell col=\"1\" text=\"bind:feeNm\"/><Cell col=\"2\" text=\"bind:diseaseNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("processMedicationBtn", "absolute", "1131", "716", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::medicineBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "12.16%", "85", null, "30", "78.56%", null, this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd", "absolute", "21.92%", "85", null, "30", "65.68%", null, this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Button("patPopupBtn", "absolute", "433", "83", "32", "32", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Div("Div07", "absolute", "52.96%", "85", null, "30", "39.04%", null, this);
            obj.set_taborder("16");
            obj.set_text("처방기간");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Calendar("prescDateCal", "absolute", "61.76%", "85", null, "30", "22.8%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");

            obj = new Div("Div06", "absolute", "3.92%", "85", null, "30", "88.48%", null, this);
            obj.set_taborder("18");
            obj.set_text("환자등록번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "1105", "86", "90", "32", null, null, this);
            obj.set_taborder("19");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "2.24%", "150", null, "170", "3.2%", null, this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "1.7%", "12", null, "30", "90.31%", null, this.compBox);
            obj.set_taborder("23");
            obj.set_text("환자등록번호");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "10.42%", "12", null, "30", "79.73%", null, this.compBox);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.style.set_background("white");
            obj.style.set_border("1 solid silver");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "20.76%", "12", null, "30", "66.07%", null, this.compBox);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.style.set_background("white");
            obj.style.set_border("1 solid silver");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "37.08%", "12", null, "30", "55.01%", null, this.compBox);
            obj.set_taborder("26");
            obj.set_text("처방일자");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Calendar("prescDateCal", "absolute", "45.72%", "12", null, "30", "38.93%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.style.set_background("white");
            obj.style.set_border("1 solid silver");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj = new Div("Div00", "absolute", "1.7%", "65", null, "30", "90.31%", null, this.compBox);
            obj.set_taborder("28");
            obj.set_text("연락처");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "1.7%", "119", null, "30", "90.31%", null, this.compBox);
            obj.set_taborder("29");
            obj.set_text("주소");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "23.69%", "65", null, "30", "68.27%", null, this.compBox);
            obj.set_taborder("30");
            obj.set_text("진료과");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "42.97%", "65", null, "30", "48.95%", null, this.compBox);
            obj.set_taborder("31");
            obj.set_text("진료의");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("telEd", "absolute", "10.41%", "65", null, "30", "77.5%", null, this.compBox);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.style.set_background("white");
            obj.style.set_border("1 solid silver");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("trmtDocEd", "absolute", "51.78%", "65", null, "30", "38.93%", null, this.compBox);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.style.set_background("white");
            obj.style.set_border("1 solid silver");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("trmtDeptEd", "absolute", "32.4%", "65", null, "30", "58.29%", null, this.compBox);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.style.set_background("white");
            obj.style.set_border("1 solid silver");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("addrEd", "absolute", "10.34%", "119", null, "30", "38.93%", null, this.compBox);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.style.set_background("white");
            obj.style.set_border("1 solid silver");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "62.92%", "12", null, "30", "29%", null, this.compBox);
            obj.set_taborder("36");
            obj.set_text("상병명");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new TextArea("diseaseNm", "absolute", "71.57%", "12", null, "137", "1.21%", null, this.compBox);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.style.set_background("white");
            obj.style.set_border("1 solid silver");
            this.compBox.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1192, 285, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1182, 175, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SD_OutpaMedPrescForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div01.patNoEd","value","dsOutpaPatInfo","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","compBox.patNoEd","value","dsMedPresc","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","compBox.patNmEd","value","dsMedPresc","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","compBox.prescDateCal","value","dsMedPresc","prescDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","compBox.diseaseNm","value","dsMedPresc","diseaseNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","compBox.telEd","value","dsMedPresc","tel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","compBox.trmtDeptEd","value","dsMedPresc","dept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","compBox.trmtDocEd","value","dsMedPresc","doctNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","compBox.addrEd","value","dsMedPresc","addr");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SD_OutpaMedPrescForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SD_OutpaMedPrescForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("SD_OutpaMedPrescForm.xfdl", function() {
        // 공통 스크립트
        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";

        // 환자등록 버튼
        this.patPopupBtn_onclick = function(obj,e)
        {
        	this.gfnPatPopup();
        }

        this.setPatInfo=function(arr){
        	this.patNoEd.set_value(arr[0]);
        	this.patNmEd.set_value(arr[1]);
        }

        // 화면로드
        this.SD_OutpaMedPrescForm_onload = function(obj,e)
        {
        	var today = this.gfnDate("yyyyMMdd");
        	this.prescDateCal.set_value(today);

        }

        // 조회버튼
        this.searchBtn_onclick = function(obj,e)
        {
        	var prescDate = this.prescDateCal.value;
        	var patNo = this.patNoEd.value;
        	var flag = '1' // 외래
        	
        	if(prescDate==null){
        		alert("처방일자를 선택해주세요.");
        	}else{
        		var argument = 'prescDate='+prescDate+" patNo="+patNo+" flag="+flag;
        		var row = this.dsService.findRow('serviceID' , "findMedPresc");
        	
        		this.dsService.setColumn(row,"argument",argument);
        		this.gfnService("findMedPresc",false);	
        	}
        }

        this.outpaPatInfoGrid_oncellclick = function(obj,e)
        {
        	this.dsPrescInfo.filter("diseaseNm=='"+this.dsMedPresc.getColumn(e.row,"diseaseNm")+"'&& patNo=='"+this.dsMedPresc.getColumn(e.row,"patNo")+"'");	
        }

        // 조제버튼
        this.processMedicationBtn_onclick = function(obj,e)
        {
        	this.gfnService("processMedication",false);
        	
        }

        // 콜백함수
        this.callBackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {
        		if(svcID=="findMedPresc"){
        			alert("조회되었습니다.");
        		}else if(svcID=="processMedication"){
        			alert("조제되었습니다.");
        		}
         	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SD_OutpaMedPrescForm_onload, this);
            this.outpaPatInfoGrid.addEventHandler("oncellclick", this.outpaPatInfoGrid_oncellclick, this);
            this.processMedicationBtn.addEventHandler("onclick", this.processMedicationBtn_onclick, this);
            this.patPopupBtn.addEventHandler("onclick", this.patPopupBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("SD_OutpaMedPrescForm.xfdl");

       
    };
}
)();

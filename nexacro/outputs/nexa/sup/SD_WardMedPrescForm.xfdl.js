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
                this.set_name("SD_WardMedPrescForm");
                this.set_classname("SD_WardMedPrescForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPrescInfo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"feeCd\" type=\"STRING\" size=\"256\"/><Column id=\"feeNm\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMedPresc", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseNm\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"doctNm\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"flag\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findMedPresc</Col><Col id=\"URL\">his::sup/drug/findMedPresc.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsMedPresc=dsMedPresc dsPrescInfo=dsPrescInfo</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">processMedication</Col><Col id=\"URL\">his::sup/drug/processMedication.do</Col><Col id=\"inData\">dsMedPresc=dsMedPresc:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "1249", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5.12%", "-3", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("병동약 처방관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "2.24%", "64", null, "261", "2.4%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Grid("outpaPatInfoGrid", "absolute", "2.32%", "336", null, "374", "52.08%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMedPresc");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"환자번호\"/><Cell col=\"2\" text=\"환자명\"/><Cell col=\"3\" text=\"처방일\"/><Cell col=\"4\" text=\"상병명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:check\"/><Cell col=\"1\" text=\"bind:patNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" text=\"bind:prescDate\"/><Cell col=\"4\" text=\"bind:diseaseNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("prescInfoGrid", "absolute", "48.8%", "336", null, "374", "2.4%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsPrescInfo");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"157\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"환자번호\"/><Cell col=\"1\" text=\"처방코드\"/><Cell col=\"2\" text=\"처방명\"/><Cell col=\"3\" text=\"처방일\"/><Cell col=\"4\" text=\"상병명\"/></Band><Band id=\"body\"><Cell text=\"bind:patNo\"/><Cell col=\"1\" text=\"bind:feeCd\"/><Cell col=\"2\" text=\"bind:feeNm\"/><Cell col=\"3\" text=\"bind:prescDate\"/><Cell col=\"4\" text=\"bind:diseaseNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("processMedicationBtn", "absolute", "1131", "716", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::medicineBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "12.16%", "85", null, "30", "78.56%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd", "absolute", "21.92%", "85", null, "30", "65.68%", null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("patPopupBtn", "absolute", "433", "83", "32", "32", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Div("Div07", "absolute", "52.96%", "85", null, "30", "39.04%", null, this);
            obj.set_taborder("9");
            obj.set_text("처방기간");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Calendar("prescDateCal", "absolute", "61.76%", "85", null, "30", "22.8%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");

            obj = new Div("Div06", "absolute", "3.92%", "85", null, "30", "88.48%", null, this);
            obj.set_taborder("11");
            obj.set_text("환자등록번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "1105", "86", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "2.24%", "152", null, "170", "3.36%", null, this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "1.7%", "12", null, "30", "90.23%", null, this.compBox);
            obj.set_taborder("46");
            obj.set_text("환자등록번호");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "10.42%", "12", null, "30", "79.73%", null, this.compBox);
            obj.set_taborder("47");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "20.76%", "12", null, "30", "66.07%", null, this.compBox);
            obj.set_taborder("48");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "35.7%", "12", null, "30", "56.3%", null, this.compBox);
            obj.set_taborder("49");
            obj.set_text("처방일자");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Calendar("prescDateCal", "absolute", "44.35%", "12", null, "30", "40.31%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj = new Div("Div00", "absolute", "42.97%", "119", null, "30", "48.95%", null, this.compBox);
            obj.set_taborder("51");
            obj.set_text("연락처");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "1.7%", "119", null, "30", "90.23%", null, this.compBox);
            obj.set_taborder("52");
            obj.set_text("주소");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "22.29%", "65", null, "30", "69.63%", null, this.compBox);
            obj.set_taborder("53");
            obj.set_text("진료과");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "42.97%", "65", null, "30", "48.95%", null, this.compBox);
            obj.set_taborder("54");
            obj.set_text("진료의");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("telEd", "absolute", "51.78%", "119", null, "30", "34.25%", null, this.compBox);
            obj.set_taborder("55");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("trmtDocEd", "absolute", "51.78%", "65", null, "30", "38.93%", null, this.compBox);
            obj.set_taborder("56");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("trmtDeptEd", "absolute", "31.02%", "65", null, "30", "59.61%", null, this.compBox);
            obj.set_taborder("57");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("addrEd", "absolute", "10.34%", "119", null, "30", "59.61%", null, this.compBox);
            obj.set_taborder("58");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "62.92%", "65", null, "30", "29%", null, this.compBox);
            obj.set_taborder("59");
            obj.set_text("상병명");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new TextArea("diseaseNm", "absolute", "71.57%", "65", null, "84", "1.21%", null, this.compBox);
            obj.set_taborder("60");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div07", "absolute", "80.78%", "12", null, "30", "11.15%", null, this.compBox);
            obj.set_taborder("61");
            obj.set_text("병실");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("hroomEd", "absolute", "89.5%", "12", null, "30", "1.21%", null, this.compBox);
            obj.set_taborder("62");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("wardEd", "absolute", "69.95%", "12", null, "30", "20.76%", null, this.compBox);
            obj.set_taborder("63");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "61.23%", "12", null, "30", "30.69%", null, this.compBox);
            obj.set_taborder("64");
            obj.set_text("병동");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "1.7%", "65", null, "30", "90.31%", null, this.compBox);
            obj.set_taborder("65");
            obj.set_text("입원일자");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("hosptlzDateEd", "absolute", "10.42%", "65", null, "30", "80.29%", null, this.compBox);
            obj.set_taborder("66");
            this.compBox.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1192, 285, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1182, 175, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SD_WardMedPrescForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","compBox.patNoEd","value","dsMedPresc","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","compBox.patNmEd","value","dsMedPresc","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","compBox.prescDateCal","value","dsMedPresc","prescDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","compBox.wardEd","value","dsMedPresc","ward");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","compBox.hroomEd","value","dsMedPresc","hroom");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","compBox.diseaseNm","value","dsMedPresc","diseaseNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","compBox.trmtDocEd","value","dsMedPresc","doctNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","compBox.trmtDeptEd","value","dsMedPresc","dept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","compBox.hosptlzDateEd","value","dsMedPresc","hosptlzDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","compBox.addrEd","value","dsMedPresc","addr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","compBox.telEd","value","dsMedPresc","tel");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SD_WardMedPrescForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SD_WardMedPrescForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("SD_WardMedPrescForm.xfdl", function() {
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
        this.SD_WardMedPrescForm_onload = function(obj,e)
        {
        드
        }

        // 조회버튼
        this.searchBtn_onclick = function(obj,e)
        {
        	var prescDate = this.prescDateCal.value;
        	var patNo = this.patNoEd.value;
        	var flag = '2' // 병동
        	
        	if(prescDate==null){
        		alert("처방일자를 선택해주세요.");
        	}else{
        		var argument = 'prescDate='+prescDate+" patNo="+patNo+' flag='+flag;
        		var row = this.dsService.findRow('serviceID' , "findMedPresc");
        		
        		this.dsService.setColumn(0,"argument",argument);
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
            this.addEventHandler("onload", this.SD_WardMedPrescForm_onload, this);
            this.outpaPatInfoGrid.addEventHandler("oncellclick", this.outpaPatInfoGrid_oncellclick, this);
            this.processMedicationBtn.addEventHandler("onclick", this.processMedicationBtn_onclick, this);
            this.patPopupBtn.addEventHandler("onclick", this.patPopupBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("SD_WardMedPrescForm.xfdl");

       
    };
}
)();

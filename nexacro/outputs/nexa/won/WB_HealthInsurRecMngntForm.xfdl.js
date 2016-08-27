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
                this.set_name("WB_HealthInsurRecMngntForm");
                this.set_classname("WB_HealthInsurRecMngntForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findHealthInsurList</Col><Col id=\"URL\">his::won/base/findHealthInsurList.do</Col><Col id=\"outData\">dsHealthInsur=dsHealthInsur</Col><Col id=\"callbackFunc\">healthInsurCallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchHealthInsurProcess</Col><Col id=\"URL\">his::won/base/batchHealthInsurProcess.do</Col><Col id=\"inData\">dsHealthInsur=dsHealthInsur:u</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">건강보험</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">의료급여 1급</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">의료급여 2급</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHealthInsur", this);
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"insuNm\" type=\"STRING\" size=\"256\"/><Column id=\"patRrn\" type=\"STRING\" size=\"256\"/><Column id=\"patType\" type=\"STRING\" size=\"256\"/><Column id=\"applyPridStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyPridEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"certfctNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", "1200", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "71.84%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("환자 건강보험 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.24%", "69", null, "51", "1.68%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("patStc00", "absolute", "47.44%", "81", null, "28", "44.96%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("환자유형");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("patTypeCombo", "absolute", "55.36%", "81", null, "28", "36.24%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@dsPatType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_background("transparent");

            obj = new Button("comboResetBtn", "absolute", "1018", "81", "102", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("comboResetBtn");
            obj.style.set_background("@gradation URL('img::resetBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("comboResetBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchHealthInsurBtn", "absolute", "1122", "81", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("searchHealthInsurBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchHealthInsurBtn");
            this.addChild(obj.name, obj);

            obj = new Static("patStc", "absolute", "2.88%", "81", null, "28", "89.52%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("환자 검색");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("cerStc", "absolute", "65.04%", "81", null, "28", "27.36%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("증번호");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("healthInsurGrid", "absolute", "2.24%", "129", null, "575", "1.68%", null, this);
            obj.set_taborder("9");
            obj.set_binddataset("dsHealthInsur");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"환자등록번호\"/><Cell col=\"1\" text=\"피보험자명\"/><Cell col=\"2\" text=\"주민등록번호\"/><Cell col=\"3\" text=\"환자유형\"/><Cell col=\"4\" text=\"적용 시작일\"/><Cell col=\"5\" text=\"적용 종료일\"/><Cell col=\"6\" text=\"증번호\"/></Band><Band id=\"body\"><Cell text=\"bind:patNo\"/><Cell col=\"1\" text=\"bind:insuNm\"/><Cell col=\"2\" text=\"bind:patRrn\" mask=\"######'-'#######\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:patType\" combodataset=\"dsPatType\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:applyPridStartDate\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:applyPridEndDate\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:certfctNo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addHealthInsurBtn", "absolute", "816", "720", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("addHealthInsurBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("addHealthInsurBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deleteHealthInsurBtn", "absolute", "914", "720", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("deleteHealthInsurBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("deleteHealthInsurBtn");
            this.addChild(obj.name, obj);

            obj = new Button("cancelHealthInsurBtn", "absolute", "1012", "720", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("cancelHealthInsurBtn");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("cancelHealthInsurBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchHealthInsurBtn", "absolute", "1110", "720", "110", "32", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("batchHealthInsurBtn");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("batchHealthInsurBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "10.88%", "81", null, "30", "81.2%", null, this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("patRrnMaskEd", "absolute", "38.72%", "81", null, "30", "53.44%", null, this);
            obj.set_taborder("17");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("rnnStc", "absolute", "30.8%", "81", null, "28", "61.6%", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("주민등록번호");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("certfctNoEd", "absolute", "73.04%", "81", null, "30", "19.04%", null, this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Button("searchEmpBtn", "absolute", "236", "81", "32", "32", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("searchEmpBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchEmpBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd", "absolute", "21.52%", "81", null, "30", "70.56%", null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1200, 60, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar4.jpg')");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WB_HealthInsurRecMngntForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WB_HealthInsurRecMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("WB_HealthInsurRecMngntForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("WB_HealthInsurRecMngntForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 원무 환자 건강보험 관리                       					*
        *                                                                   *
        * @Path		    환자 건강보험 관리		      					*
        * @Description  환자 건강보험정보를 관리한다.					*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  9.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";

        //환자검색
        this.searchEmpBtn_onclick = function(obj,e){
        	this.gfnPatPopup();
        	this.setPatInfo = function(arrRtn){ 
        		this.patNoEd.set_value(arrRtn[0]);  
        		this.patNmEd.set_value(arrRtn[1]); 
        		this.patRrnMaskEd.set_value(arrRtn[2]+arrRtn[3]);
        		this.patRrnMaskEd.set_mask("######-#######");
        	}
        }

        //조건초기화
        this.comboResetBtn_onclick = function(obj,e){
        	this.patNoEd.set_value(null);
        	this.patNmEd.set_value(null);
        	this.patRrnMaskEd.set_value(null);
        	this.patTypeCombo.set_value(null);
        	this.certfctNoEd.set_value(null);
        }

        //환자건강보험조회
        this.searchHealthInsurBtn_onclick = function(obj,e){
        	if(this.patNoEd.value == null || this.patNmEd.value == null){
        		alert("환자 검색 후 조회하십시오.");		
        	}else{
        		var argument = "insuNm ='"+this.patNmEd.value+"' patRrn='"+this.patRrnMaskEd.text
        						+"' patType='"+this.patTypeCombo.value+"' certfctNo='"+this.certfctNoEd.value+"'"; 		
        		var row = this.dsService.findRow('serviceID' , "findHealthInsurList");
        		this.dsService.setColumn(row, "argument", argument);
        		this.gfnService("findHealthInsurList", false);
        	}
        }

        //환자건강보험추가
        this.addHealthInsurBtn_onclick = function(obj,e){
        	this.dsHealthInsur.addRow();
        }

        //환자건강보험삭제
        this.deleteHealthInsurBtn_onclick = function(obj,e){
        	this.dsHealthInsur.deleteMultiRows(this.healthInsurGrid.getSelectedDatasetRows());
        }

        //작성취소
        this.cancelHealthInsurBtn_onclick = function(obj,e){
        	if(confirm("작성중인 데이터는 저장되지 않습니다. 취소하시겠습니까?")){
        		this.reload();
        	}
        }

        //일괄처리
        this.batchHealthInsurBtn_onclick = function(obj,e){
        	if(confirm("일괄처리 하시겠습니까?")){
        		for(var i=0; i<this.dsHealthInsur.rowcount; i++){
        			var patNo = this.dsHealthInsur.getColumn(i,"patNo");
        			var patType = this.dsHealthInsur.getColumn(i,"patType");
        			var certfctNo = this.dsHealthInsur.getColumn(i,"certfctNo");
        			
        			if(patNo == null || patType == null){				
        				alert("환자정보 및 환자유형을 확인 하십시오.");
        			}else if(patType != null && certfctNo == null ){
        				alert("환자 증번호 필수입력 사항입니다.");
        			}else{
        				this.gfnService("batchHealthInsurProcess");
        			}
        		}
        	}
        }

        this.healthInsurGrid_oncelldblclick = function(obj,e){
        	var nRow = this.dsHealthInsur.rowposition;
        	if(e.cell == 0 || e.cell == 1){			
        		this.gfnPatPopup();
        		this.setPatInfo = function(arrRtn){ 
        			this.dsHealthInsur.setColumn(nRow,"patNo",arrRtn[0]);			
        			this.dsHealthInsur.setColumn(nRow,"insuNm",arrRtn[1]);
        			this.dsHealthInsur.setColumn(nRow,"patRrn",arrRtn[2]+"-"+arrRtn[3]);										
        		}
        	}
        }

        this.healthInsurCallbackFunc = function(svcID,errorCode,errorMsg){
           if (errorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
              this.gfnErrorPopup(svcID, errorMsg);
           } else {
              // 트랜잭션 완료
              trace("===== " + svcID + " 트랜잭션 성공 =====\n");
              if(this.dsHealthInsur.getRowCount() == 0){
        		alert("해당 조건에 검색된 데이터가 없습니다.");
              }
           }
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.comboResetBtn.addEventHandler("onclick", this.comboResetBtn_onclick, this);
            this.searchHealthInsurBtn.addEventHandler("onclick", this.searchHealthInsurBtn_onclick, this);
            this.healthInsurGrid.addEventHandler("oncelldblclick", this.healthInsurGrid_oncelldblclick, this);
            this.addHealthInsurBtn.addEventHandler("onclick", this.addHealthInsurBtn_onclick, this);
            this.deleteHealthInsurBtn.addEventHandler("onclick", this.deleteHealthInsurBtn_onclick, this);
            this.cancelHealthInsurBtn.addEventHandler("onclick", this.cancelHealthInsurBtn_onclick, this);
            this.batchHealthInsurBtn.addEventHandler("onclick", this.batchHealthInsurBtn_onclick, this);
            this.searchEmpBtn.addEventHandler("onclick", this.searchEmpBtn_onclick, this);

        };

        this.loadIncludeScript("WB_HealthInsurRecMngntForm.xfdl");

       
    };
}
)();

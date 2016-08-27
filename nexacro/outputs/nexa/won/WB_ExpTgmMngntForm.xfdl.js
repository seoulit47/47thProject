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
                this.set_name("WB_ExpTgmMngntForm");
                this.set_classname("WB_ExpTgmMngntForm");
                this.set_titletext("WB_ExpTgmMngntForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findExpTgmList</Col><Col id=\"URL\">his::won/base/findExpTgmList.do</Col><Col id=\"outData\">dsExpTgm=dsExpTgm</Col><Col id=\"callbackFunc\">expTgmCallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchExpTgmProcess</Col><Col id=\"URL\">his::won/base/batchExpTgmProcess.do</Col><Col id=\"inData\">dsExpTgm=dsExpTgm:u</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsExpTgm", this);
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"patRrn\" type=\"STRING\" size=\"256\"/><Column id=\"applyPridStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyPridEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"expCd\" type=\"STRING\" size=\"256\"/><Column id=\"rshipCd\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRshipCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">본인</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">배우자</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">조부</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">조모</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">부</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">모</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">장인</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">장모</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">자</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">지인</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsExpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">직원감면(50%)</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">가족감면(30%)</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">직원지인(10%)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", "1670", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "75.04%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("감면대상자 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.24%", "69", null, "51", "1.68%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Button("searchExpTgmBtn", "absolute", "1106", "80", "90", "32", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("searchExpTgmBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchExpTgmBtn");
            this.addChild(obj.name, obj);

            obj = new Static("empStc", "absolute", "2.64%", "80", null, "28", "87.76%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("사원 검색");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("comboResetBtn", "absolute", "1002", "80", "102", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("comboResetBtn");
            obj.style.set_background("@gradation URL('img::resetBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("comboResetBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchEmpBtn", "absolute", "248", "80", "32", "32", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("searchEmpBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchEmpBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("searchEmpNoEd", "absolute", "12.48%", "80", null, "30", "80.16%", null, this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("patStc", "absolute", "32.64%", "80", null, "28", "57.76%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("대상환자 검색");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("expStc", "absolute", "61.76%", "80", null, "28", "28.64%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("감면코드");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("searchEmpNmEd", "absolute", "22.56%", "80", null, "30", "70.08%", null, this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("searchPatNoEd", "absolute", "42.48%", "80", null, "30", "50.16%", null, this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("searchPatNmEd", "absolute", "52.72%", "80", null, "30", "39.92%", null, this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Button("searchPatBtn", "absolute", "624", "80", "32", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("searchPatBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchPatBtn");
            this.addChild(obj.name, obj);

            obj = new Combo("expCombo", "absolute", "71.92%", "80", null, "28", "20.96%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.style.set_background("transparent");
            obj.set_innerdataset("@dsExpCd");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");

            obj = new Button("addExpTgmBtn", "absolute", "816", "720", "90", "32", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("addExpTgmBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("addExpTgmBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deleteExpTgmBtn", "absolute", "914", "720", "90", "32", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("deleteExpTgmBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("deleteExpTgmBtn");
            this.addChild(obj.name, obj);

            obj = new Button("cancelExpTgmBtn", "absolute", "1012", "720", "90", "32", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("cancelExpTgmBtn");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("cancelExpTgmBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchExpTgmBtn", "absolute", "1110", "720", "110", "32", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("batchExpTgmBtn");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("batchExpTgmBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("expTgmGrid", "absolute", "2.24%", "129", null, "575", "1.68%", null, this);
            obj.set_taborder("21");
            obj.set_autofittype("col");
            obj.set_binddataset("dsExpTgm");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"환자등록번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"적용 시작일\"/><Cell col=\"3\" text=\"적용 종료일\"/><Cell col=\"4\" text=\"감면구분\"/><Cell col=\"5\" text=\"관계\"/><Cell col=\"6\" text=\"사원번호\"/><Cell col=\"7\" text=\"사원명\"/><Cell col=\"8\" text=\"부서명\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:patNo\"/><Cell col=\"1\" text=\"bind:patNm\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:applyPridStartDate\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:applyPridEndDate\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:expCd\" combodataset=\"dsExpCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:rshipCd\" combodataset=\"dsRshipCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"6\" text=\"bind:empNo\"/><Cell col=\"7\" text=\"bind:empNm\"/><Cell col=\"8\" text=\"bind:deptNm\"/><Cell col=\"9\" edittype=\"normal\" text=\"bind:note\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WB_ExpTgmMngntForm");
            		p.set_titletext("WB_ExpTgmMngntForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WB_ExpTgmMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("WB_ExpTgmMngntForm.xfdl", "scripts::hrsScripts.xjs");
        this.addIncludeScript("WB_ExpTgmMngntForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("WB_ExpTgmMngntForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 원무 감면대상자 관리                           					*
        *                                                                   *
        * @Path		    감면대상자 관리      								*
        * @Description  감면대상자를 관리한다.							*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  7.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::hrsScripts.xjs";
        //include "scripts::wonScripts.xjs";

        //사원검색
        this.searchEmpBtn_onclick = function(obj,e){
        	this.gfnEmpPopup();
        	this.setEmpInfo = function(arrRtn){ 
        		this.searchEmpNoEd.set_value(arrRtn[0]);  
        		this.searchEmpNmEd.set_value(arrRtn[1]);  	
        	}
        }

        //대상환자검색
        this.searchPatBtn_onclick = function(obj,e){
        	this.gfnPatPopup();
        	this.setPatInfo = function(arrRtn){ 
        			this.searchPatNoEd.set_value(arrRtn[0]);  
        			this.searchPatNmEd.set_value(arrRtn[1]);  									
        	}
        }

        //조건초기화
        this.comboResetBtn_onclick = function(obj,e){
        	this.searchEmpNoEd.set_value(null);
        	this.searchEmpNmEd.set_value(null);
        	this.searchPatNoEd.set_value(null);
        	this.searchPatNmEd.set_value(null);
        	this.expCombo.set_value(null);
        }

        //감면대상자조회
        this.searchExpTgmBtn_onclick = function(obj,e){
        	var searchPatNoEd = this.searchPatNoEd.value;
        	var searchEmpNoEd = this.searchEmpNoEd.value;
        	var expCombo = this.expCombo.value;
        	
        	if(searchEmpNoEd == null || searchEmpNoEd == null){
        		alert("사원 검색 후 조회하십시오.");		
        	}else{
        		var argument = "patNo='"+searchPatNoEd+"' empNo='"+searchEmpNoEd+"' expCd='"+expCombo+"'"; 
        		var row = this.dsService.findRow('serviceID' , "findExpTgmList");
        		this.dsService.setColumn(row, "argument", argument);
        		this.gfnService("findExpTgmList");
        	}
        }

        //감면대상자추가
        this.addExpTgmBtn_onclick = function(obj,e){
        	this.dsExpTgm.addRow();	
        }

        //감면대상자삭제
        this.deleteExpTgmBtn_onclick = function(obj,e){
        	this.dsExpTgm.deleteMultiRows(this.expTgmGrid.getSelectedDatasetRows());
        }

        //작성취소
        this.cancelExpTgmBtn_onclick = function(obj,e){
        	if(confirm("작성중인 데이터는 저장되지 않습니다. 취소하시겠습니까?")){
        		this.reload();
        	}
        }

        //일괄처리
        this.batchExpTgmBtn_onclick = function(obj,e){
        	if(confirm("일괄처리 하시겠습니까?")){
        		//expCd 50% 1, 30% 2, 10% 1이다.
        		for(var i=0; i<this.dsExpTgm.rowcount; i++){
        			var empNo = this.dsExpTgm.getColumn(i,"empNo");
        			var expCd = this.dsExpTgm.getColumn(i,"expCd");
        			var rshipCd = this.dsExpTgm.getColumn(i,"rshipCd");
        			
        			if(empNo == null){			
        				alert("직원정보를 확인 하십시오.");
        			}else if(expCd == null || rshipCd == null ){
        				alert("감면구분 및 관계를 확인 하십시오.");
        			}else{
        				this.gfnService("batchExpTgmProcess");
        			}
        		}
        	}
        }

        //그리드클릭이벤트
        this.expTgmGrid_oncelldblclick = function(obj,e){
        	var nRow = this.dsExpTgm.rowposition;
        	if(e.cell == 0 || e.cell == 1){
        		this.gfnPatPopup();
        		this.setPatInfo = function(arrRtn){ 
        			this.dsExpTgm.setColumn(nRow,"patNo",arrRtn[0]);			
        			this.dsExpTgm.setColumn(nRow,"patNm",arrRtn[1]);									
        		}
        	}else if(e.cell == 6 || e.cell == 7 || e.cell == 8){
        		this.gfn_EmpPopup();
        		this.setEmpInfo = function(arrRtn){ 
        			this.dsExpTgm.setColumn(nRow,"empNo",arrRtn[0]);
        			this.dsExpTgm.setColumn(nRow,"empNm",arrRtn[1]);
        			this.dsExpTgm.setColumn(nRow,"deptNm",arrRtn[3]);
        		}
        	}
        }

        this.expTgmCallbackFunc = function(svcID,errorCode,errorMsg){
           if (errorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
              this.gfnErrorPopup(svcID, errorMsg);
           } else {
              // 트랜잭션 완료
              trace("===== " + svcID + " 트랜잭션 성공 =====\n");
              if(this.dsExpTgm.getRowCount() == 0){
        		alert("해당 조건에 검색된 데이터가 없습니다.");
              }
           }
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.searchExpTgmBtn.addEventHandler("onclick", this.searchExpTgmBtn_onclick, this);
            this.comboResetBtn.addEventHandler("onclick", this.comboResetBtn_onclick, this);
            this.searchEmpBtn.addEventHandler("onclick", this.searchEmpBtn_onclick, this);
            this.searchPatBtn.addEventHandler("onclick", this.searchPatBtn_onclick, this);
            this.addExpTgmBtn.addEventHandler("onclick", this.addExpTgmBtn_onclick, this);
            this.deleteExpTgmBtn.addEventHandler("onclick", this.deleteExpTgmBtn_onclick, this);
            this.cancelExpTgmBtn.addEventHandler("onclick", this.cancelExpTgmBtn_onclick, this);
            this.batchExpTgmBtn.addEventHandler("onclick", this.batchExpTgmBtn_onclick, this);
            this.expTgmGrid.addEventHandler("oncelldblclick", this.expTgmGrid_oncelldblclick, this);

        };

        this.loadIncludeScript("WB_ExpTgmMngntForm.xfdl");

       
    };
}
)();

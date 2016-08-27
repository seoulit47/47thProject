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
                this.set_name("MB_CutnInfoMngntForm");
                this.set_classname("abc");
                this.set_titletext("환자 주의사항 정보 관리");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPatCutnHist", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"histNo\" type=\"STRING\" size=\"256\"/><Column id=\"modifyLog\" type=\"STRING\" size=\"256\"/><Column id=\"amender\" type=\"STRING\" size=\"256\"/><Column id=\"modifyDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatCutnB", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("reset");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patCautionNo\" type=\"STRING\" size=\"256\"/><Column id=\"cutnCategoryCd\" type=\"STRING\" size=\"256\"/><Column id=\"cutnCategoryNm\" type=\"STRING\" size=\"256\"/><Column id=\"cautionCd\" type=\"STRING\" size=\"256\"/><Column id=\"cautionNm\" type=\"STRING\" size=\"256\"/><Column id=\"abbr\" type=\"STRING\" size=\"256\"/><Column id=\"choiceYb\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatCutn", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("false");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("reset");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patCautionNo\" type=\"STRING\" size=\"256\"/><Column id=\"cutnCategoryCd\" type=\"STRING\" size=\"256\"/><Column id=\"cutnCategoryNm\" type=\"STRING\" size=\"256\"/><Column id=\"cautionCd\" type=\"STRING\" size=\"256\"/><Column id=\"cautionNm\" type=\"STRING\" size=\"256\"/><Column id=\"abbr\" type=\"STRING\" size=\"256\"/><Column id=\"choiceYb\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPatCutnList</Col><Col id=\"URL\">his::med/base/findPatCutnList.do</Col><Col id=\"outData\">dsPatCutn=dsPatCutn</Col></Row><Row><Col id=\"serviceID\">findPatCutnHistList</Col><Col id=\"URL\">his::med/base/findPatCutnHistList.do</Col><Col id=\"outData\">dsPatCutnHist=dsPatCutnHist</Col></Row><Row><Col id=\"serviceID\">batchPatCutnProcess</Col><Col id=\"URL\">his::med/base/batchPatCutnProcess.do</Col><Col id=\"inData\">dsPatCutn=dsPatCutn:u dsPatCutnHist=dsPatCutnHist:u</Col><Col id=\"callbackFunc\">callbackBatchPatCutnProcessFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatCutnA", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("reset");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patCautionNo\" type=\"STRING\" size=\"256\"/><Column id=\"cutnCategoryCd\" type=\"STRING\" size=\"256\"/><Column id=\"cutnCategoryNm\" type=\"STRING\" size=\"256\"/><Column id=\"cautionCd\" type=\"STRING\" size=\"256\"/><Column id=\"cautionNm\" type=\"STRING\" size=\"256\"/><Column id=\"abbr\" type=\"STRING\" size=\"256\"/><Column id=\"choiceYb\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div04", "absolute", "0%", "4", null, "60", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "68.64%", null, this.Div04);
            obj.getSetter("taborder").set("0");
            obj.set_text("환자 주의사항 정보 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div04.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2.64%", "600", null, "117", "2.72%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsPatCutnHist");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"수정번호\"/><Cell col=\"1\" text=\"수정이력\"/><Cell col=\"2\" text=\"수정자\"/><Cell col=\"3\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell text=\"bind:histNo\"/><Cell col=\"1\" text=\"bind:modifyLog\"/><Cell col=\"2\" text=\"bind:amender\"/><Cell col=\"3\" text=\"bind:modifyDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("patCutnAGrid", "absolute", "2.88%", "170", null, "400", "50.72%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("dsPatCutnA");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"135\"/><Column size=\"67\"/><Column size=\"34\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류\"/><Cell col=\"1\" text=\"Caution명\"/><Cell col=\"2\" text=\"약어\"/><Cell col=\"3\" text=\"해당여부\"/></Band><Band id=\"body\"><Cell text=\"bind:cutnCategoryNm\"/><Cell col=\"1\" text=\"bind:cautionNm\"/><Cell col=\"2\" text=\"bind:abbr\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:choiceYb\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("patCutnBGrid", "absolute", "50.56%", "170", null, "400", "2.88%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsPatCutnB");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"167\"/><Column size=\"80\"/><Column size=\"36\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류\"/><Cell col=\"1\" text=\"Caution명\"/><Cell col=\"2\" text=\"약어\"/><Cell col=\"3\" text=\"해당여부\"/></Band><Band id=\"body\"><Cell text=\"bind:cutnCategoryNm\"/><Cell col=\"1\" text=\"bind:cautionNm\"/><Cell col=\"2\" text=\"bind:abbr\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:choiceYb\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "67.68%", "84", null, "64", "18%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("환자 등록번호");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 15 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "82.48%", "84", null, "30", "3.12%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd", "absolute", "82.48%", "118", null, "30", "10.4%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("patNoSearchBtn", "absolute", "89.84%", "118", null, "32", "2.96%", null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "3.04%", "84", null, "64", "82.64%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("Caution 정보");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 15 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "17.84%", "84", null, "64", "33.28%", null, this);
            obj.set_taborder("9");
            obj.set_value("MR");
            obj.style.set_color("red");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 26 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("abc");
            		p.set_titletext("환자 주의사항 정보 관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","patNoEd","value","dsCntnArticle","cautionCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","patNmEd","value","dsCntnArticle","cautionCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit02","value","dsCntnArticle","cautionCd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MB_PatCutnMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("MB_PatCutnMngntForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("MB_PatCutnMngntForm.xfdl", function() {
        /*******************************************************************************************
        *                                                                               			*
        * 주의사항 관련검사 관리  																*
        *                                                                               			*
        * @Path		    MB_CntnArticleMngntForm														*
        *																							*
        * @Description 	환자 주의사항 관련검사관리에에서   등록,삭제,조회한다.				*
        *               																			*
        * @Author	    강찬모    						                                			*
        * 									                                            			*
        * Created on 2016. 06. 26	                          		                    			*
        *									                                            			*
        ********************************************************************************************/

        /***************************************************************************************************
        *                                         공통 Script Include                                      *
        ***************************************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";

        /***************************************************************************************************
        *                                      폼 EVENT START                                        	   *
        /*-------------------------------------------------------------------------------------------------+
        >>  onload 이벤트
        +-------------------------------------------------------------------------------------------------*/

        
        /***************************************************************************************************
        *                                         기타 	바인딩                                             *
        ***************************************************************************************************/

        	//this.dsCutnRltnExmnt.deleteRow(this.cutnRltnExmntGrid.currentrow);
        	//this.gfnService("batchCutnRltnExmntProcess", false);

        /***************************************************************************************************
        *                               	환자등록번호조회 POPUP		                                *
        ***************************************************************************************************/
        var setPatNo = "";
        this.patNoSearchBtn_onclick = function(obj,e)
        {
        	this.gfnPatPopup();
        }

        var patNo = "";
        this.setPatInfo = function(arrRtn){
        	this.patNoEd.set_value(arrRtn[0]);
        	this.patNmEd.set_value(arrRtn[1]);
        	patNo = arrRtn[0];
        	setPatNo = "patNo="+arrRtn[0];
        	this.dsService.setColumn(0, "argument", setPatNo);
        	this.dsService.setColumn(1, "argument", setPatNo);
        	this.findFunc();
        }

        /***************************************************************************************************
        *                              그리드 check 시 발생 이벤트		                                *
        ***************************************************************************************************/
        // 값 변경 여부를 확인해서 수정이력에 추가, 해당 수정 행을 인설트한다 
        // 첫번째 주의사항 그리드
        this.patCutnAGrid_oncellclick = function(obj,e)
        {
        	this.dsPatCutn.copyData(this.dsPatCutnA);
        	for(i=0; i<this.dsPatCutnA.rowcount; i++ ){
        		var nRowType = this.dsPatCutnA.getRowType(i);
        		if(nRowType = 4){
        			if(this.dsPatCutnA.getColumn(i, "choiceYb")==1)
        				this.dsPatCutn.setRowType(i, 2, "insert");
        			else if(this.dsPatCutnA.getColumn(i, "choiceYb") == 0){
        				this.dsPatCutn.setRowType(i, 8);
        				var setModifyLog = "삭제 : " + this.dsPatCutnA.getColumn(i, "cautionNm");
        				this.patCutnHistRegist(setModifyLog, "A");
        			}
        		}
        		this.dsPatCutn.setColumn(i, "patCautionNo", i+1);
        	}
        	//var strXml = this.dsPatCutn.saveXML("dsPatCutn","update");
        	//trace(strXml);
        	this.gfnService("batchPatCutnProcess");
        }
        // 두번째 주의사항 그리드
        this.patCutnBGrid_oncellclick = function(obj,e)
        {
        	this.dsPatCutn.copyData(this.dsPatCutnB);
        	this.dsPatCutn.set_filterstr("cutnCategoryCd=='T'");
        	for(i=0; i<this.dsPatCutnB.rowcount; i++ ){
        		var nRowType = this.dsPatCutnB.getRowType(i);
        		if(nRowType = 4){
        			if(this.dsPatCutnB.getColumn(i, "choiceYb")==1)
        				this.dsPatCutn.setRowType(i, 2, "insert");
        			else if(this.dsPatCutnB.getColumn(i, "choiceYb") == 0){
        				this.dsPatCutn.setRowType(i, 8);
        				var setModifyLog = "삭제 : " + this.dsPatCutnB.getColumn(i, "cautionNm");
        				this.patCutnHistRegist(setModifyLog, "B");
        			}
        		}
        		this.dsPatCutn.setColumn(i, "patCautionNo", this.dsPatCutn.rowcount+1+i);
        	}
        	var strXml = this.dsPatCutn.saveXML("dsPatCutn","update");
        	trace(strXml);
        	this.gfnService("batchPatCutnProcess");
        }

        
        // 수정로그 등록
        this.patCutnHistRegist = function(setModifyLog,division){
        	var setModifyDate = this.gfnFormatDate("y-m-d h:i:s");
            this.dsPatCutnHist.addRow();
            this.dsPatCutnHist.setColumn(this.dsPatCutnHist.rowcount-1, "patNo", patNo);
            if(this.dsPatCutnHist.rowcount<10)
        		this.dsPatCutnHist.setColumn(this.dsPatCutnHist.rowcount-1, "histNo", "0"+this.dsPatCutnHist.rowcount);
        	else
        		this.dsPatCutnHist.setColumn(this.dsPatCutnHist.rowcount-1, "histNo", this.dsPatCutnHist.rowcount);
            this.dsPatCutnHist.setColumn(this.dsPatCutnHist.rowcount-1, "modifyLog", setModifyLog);
            //this.dsPatCutnHist.setColumn(this.dsPatCutnHist.rowcount-1, "amender", application.gdsEmp.getColumn(0, "empNm"));  // 전체 프로젝트 동작 시 주석 해제
            this.dsPatCutnHist.setColumn(this.dsPatCutnHist.rowcount-1, "modifyDate", setModifyDate);
        }

        // 트렌젝션 호출
        this.findFunc = function(){
              this.gfnService("findPatCutnList", false);
              this.dsPatCutnA.copyData(this.dsPatCutn);
        	  this.dsPatCutnB.copyData(this.dsPatCutn);
        	  this.dsPatCutnA.set_filterstr("cutnCategoryCd!='T'");
        	  this.dsPatCutnB.set_filterstr("cutnCategoryCd=='T'");
        	  this.gfnService("findPatCutnHistList", false);
        }

        // 리로드 콜백함수
        this.callbackBatchPatCutnProcessFunc = function(svcID,errorCode,errorMsg){
           if (errorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
              this.gfnErrorPopup(svcID, errorMsg);
           } else {
              // 트랜잭션 완료
              trace("===== " + svcID + " 트랜잭션 성공 =====\n");
              this.findFunc();
           }
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.patCutnAGrid.addEventHandler("oncellclick", this.patCutnAGrid_oncellclick, this);
            this.patCutnBGrid.addEventHandler("oncellclick", this.patCutnBGrid_oncellclick, this);
            this.patNoSearchBtn.addEventHandler("onclick", this.patNoSearchBtn_onclick, this);

        };

        this.loadIncludeScript("MB_PatCutnMngntForm.xfdl");

       
    };
}
)();

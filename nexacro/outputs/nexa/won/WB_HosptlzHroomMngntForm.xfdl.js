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
                this.set_name("WB_HosptlzHroomMngntForm");
                this.set_classname("WB_HosptlzHroomMngntForm");
                this.set_titletext("WB_HosptlzHroomMngntForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findHroomList</Col><Col id=\"URL\">his::won/base/findHroomList.do</Col><Col id=\"outData\">dsHroom=dsHroom</Col><Col id=\"callbackFunc\">hroomCallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchHroomProcess</Col><Col id=\"URL\">his::won/base/batchHroomProcess.do</Col><Col id=\"inData\">dsHroom=dsHroom:u</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsWardCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">41</Col><Col id=\"data\">41병동</Col></Row><Row><Col id=\"code\">51</Col><Col id=\"data\">51병동</Col></Row><Row><Col id=\"code\">52</Col><Col id=\"data\">52병동</Col></Row><Row><Col id=\"code\">61</Col><Col id=\"data\">61병동</Col></Row><Row><Col id=\"code\">62</Col><Col id=\"data\">62병동</Col></Row><Row><Col id=\"code\">71</Col><Col id=\"data\">71병동</Col></Row><Row><Col id=\"code\">72</Col><Col id=\"data\">72병동</Col></Row><Row><Col id=\"code\">81</Col><Col id=\"data\">81병동</Col></Row><Row><Col id=\"code\">E</Col><Col id=\"data\">응급병동</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHroomCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1A</Col><Col id=\"data\">1인실</Col></Row><Row><Col id=\"code\">2A</Col><Col id=\"data\">2인실</Col></Row><Row><Col id=\"code\">4A</Col><Col id=\"data\">4인실</Col></Row><Row><Col id=\"code\">6A</Col><Col id=\"data\">6인실</Col></Row><Row><Col id=\"code\">I</Col><Col id=\"data\">중환자실</Col></Row><Row><Col id=\"code\">S</Col><Col id=\"data\">특실</Col></Row><Row><Col id=\"code\">V</Col><Col id=\"data\">VIP실</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGenderCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">남자</Col><Col id=\"code\">남자</Col></Row><Row><Col id=\"data\">여자</Col><Col id=\"code\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHroom", this);
            obj._setContents("<ColumnInfo><Column id=\"hroomNo\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"applyPridStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyPridEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"hroomGrade\" type=\"STRING\" size=\"256\"/><Column id=\"hroomdiffAmt\" type=\"STRING\" size=\"256\"/><Column id=\"feeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sibdCnt\" type=\"STRING\" size=\"256\"/><Column id=\"pmsnSibd\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"sibdTel\" type=\"STRING\" size=\"256\"/><Column id=\"finanCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFeeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ABZ11</Col><Col id=\"data\">vip실</Col></Row><Row><Col id=\"code\">ABZ06</Col><Col id=\"data\">6인실</Col></Row><Row><Col id=\"code\">ABZ05</Col><Col id=\"data\">4인실</Col></Row><Row><Col id=\"code\">ABZ04</Col><Col id=\"data\">2인실</Col></Row><Row><Col id=\"code\">ABZ03</Col><Col id=\"data\">1인실</Col></Row><Row><Col id=\"code\">ABZ02</Col><Col id=\"data\">중환자실</Col></Row><Row><Col id=\"code\">ABZ01</Col><Col id=\"data\">특실</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHroomGradeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">특실</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">1인실</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">2인실</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">4인실</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">6인실</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", "1200", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("병실 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.24%", "69", null, "51", "1.68%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("hroomStc", "absolute", "23.36%", "80", null, "28", "67.04%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("병실");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("searchHroomCombo", "absolute", "33.52%", "80", null, "28", "58.08%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@dsHroomCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_background("transparent");

            obj = new Button("comboResetBtn", "absolute", "810", "80", "102", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("comboResetBtn");
            obj.style.set_background("@gradation URL('img::resetBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("comboResetBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchHroomBtn", "absolute", "914", "80", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("searchHroomBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchHroomBtn");
            this.addChild(obj.name, obj);

            obj = new Static("wardStc", "absolute", "3.52%", "80", null, "28", "86.88%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("병동");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("searchWardCombo", "absolute", "13.68%", "80", null, "28", "77.92%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("@dsWardCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_background("transparent");

            obj = new Static("genderStc", "absolute", "43.2%", "80", null, "28", "47.2%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("성별");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Radio("genderRadio", "absolute", "54.08%", "82", null, "24", "36.64%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("@dsGenderCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_columncount("2");

            obj = new Grid("hroomGrid", "absolute", "2.24%", "129", null, "575", "1.68%", null, this);
            obj.set_taborder("11");
            obj.set_binddataset("dsHroom");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"병실일련번호\"/><Cell col=\"1\" text=\"병동\"/><Cell col=\"2\" text=\"병실\"/><Cell col=\"3\" text=\"등급\"/><Cell col=\"4\" text=\"적용 시작일\"/><Cell col=\"5\" text=\"적용 종료일\"/><Cell col=\"6\" text=\"수가코드\"/><Cell col=\"7\" text=\"병상수\"/><Cell col=\"8\" text=\"허가병상\"/><Cell col=\"9\" text=\"성별\"/><Cell col=\"10\" text=\"병상전화번호\"/><Cell col=\"11\" text=\"재원자수\"/></Band><Band id=\"body\"><Cell text=\"bind:hroomNo\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:ward\" combodataset=\"dsWardCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:hroom\" combodataset=\"dsHroomCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:hroomGrade\" combodataset=\"dsHroomGradeCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:applyPridStartDate\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:applyPridEndDate\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:feeCd\" combodataset=\"dsFeeCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:sibdCnt\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:pmsnSibd\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:gender\" combodataset=\"dsGenderCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"10\" edittype=\"normal\" text=\"bind:sibdTel\"/><Cell col=\"11\" edittype=\"normal\" text=\"bind:finanCnt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addHroomBtn", "absolute", "816", "720", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("addHroomBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("addHroomBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deleteHroomBtn", "absolute", "914", "720", "90", "32", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("deleteHroomBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("deleteHroomBtn");
            this.addChild(obj.name, obj);

            obj = new Button("cancelHroomBtn", "absolute", "1012", "720", "90", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("cancelHroomBtn");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("cancelHroomBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchHroomBtn", "absolute", "1110", "720", "110", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("batchHroomBtn");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("batchHroomBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WB_HosptlzHroomMngntForm");
            		p.set_titletext("WB_HosptlzHroomMngntForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WB_HosptlzHroomMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("WB_HosptlzHroomMngntForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 원무 병실 관리                           						*
        *                                                                   *
        * @Path		    병실 관리		      								*
        * @Description  병실정보를 관리한다.								*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  9.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";

        //조건초기화
        this.comboResetBtn_onclick = function(obj,e){
        	this.searchWardCombo.set_value(null);
        	this.searchHroomCombo.set_value(null);
        	this.genderRadio.set_value(null);
        }

        //병실조회
        this.searchHroomBtn_onclick = function(obj,e){
        	var wardCombo = this.searchWardCombo.value;
        	var hroomCombo = this.searchHroomCombo.value;
        	var genderRadio = this.genderRadio.value;
        	
        	if(wardCombo == null){
        		alert("병동 선택 후 조회하십시오.");
        	}else{
        		var argument = "ward ='"+wardCombo+"' hroom='"+hroomCombo+"' gender='"+genderRadio+"'"; 		
        		var row = this.dsService.findRow('serviceID' , "findHroomList");
        		this.dsService.setColumn(row, "argument", argument);
        		this.gfnService("findHroomList", false);
        		trace(this.dsHroom.saveXML());
        	}
        }

        //병실추가
        this.addHroomBtn_onclick = function(obj,e){
        	var nRow = this.dsHroom.addRow();
        	
        	var hroomNo = this.dsHroomSequence.getColumn(0,"hroomNo");
        		if(hroomNo != null){
        			var newHroomNo = nexacro.toNumber(hroomNo)+1;
        			this.dsHroomSequence.setColumn(0,"hroomNo",newHroomNo);
        			this.dsHroom.setColumn(nRow,"hroomNo",newHroomNo.toString());
        		}else{
        			this.dsHroom.setColumn(nRow,"hroomNo","1");
        		}
        }

        //병실삭제
        this.deleteHroomBtn_onclick = function(obj,e){
        	this.dsHroom.deleteMultiRows(this.hroomGrid.getSelectedDatasetRows());
        }

        //작성취소
        this.cancelHroomBtn_onclick = function(obj,e){
        	if(confirm("작성중인 데이터는 저장되지 않습니다. 취소하시겠습니까?")){
        		this.reload();
        	}
        }

        //일괄처리
        this.batchHroomBtn_onclick = function(obj,e){
        	if(confirm("일괄처리 하시겠습니까?")){
        		for(var i=0; i<this.dsHroom.rowcount; i++){
        			var hroomNo = this.dsHroom.getColumn(i,"hroomNo");
        			var ward = this.dsHroom.getColumn(i,"ward");
        			var hroom = this.dsHroom.getColumn(i,"hroom");
        			var feeCd = this.dsHroom.getColumn(i,"feeCd");
        			
        			if(hroomNo == null){			
        				alert("병실 번호를 입력하시오.");
        			}else if(ward == null || feeCd == null){
        				alert("병동,병실,수가코드는 필수입력 사항입니다.");
        			}else{
        				this.gfnService("batchHroomProcess");
        			}
        		}
        	}
        }

        this.hroomCallbackFunc = function(svcID,errorCode,errorMsg){
           if (errorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
              this.gfnErrorPopup(svcID, errorMsg);
           } else {
              // 트랜잭션 완료
              trace("===== " + svcID + " 트랜잭션 성공 =====\n");
              if(this.dsHroom.getRowCount() == 0){
        		alert("해당 조건에 검색된 데이터가 없습니다.");	
              }
           }
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.comboResetBtn.addEventHandler("onclick", this.comboResetBtn_onclick, this);
            this.searchHroomBtn.addEventHandler("onclick", this.searchHroomBtn_onclick, this);
            this.genderRadio.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.addHroomBtn.addEventHandler("onclick", this.addHroomBtn_onclick, this);
            this.deleteHroomBtn.addEventHandler("onclick", this.deleteHroomBtn_onclick, this);
            this.cancelHroomBtn.addEventHandler("onclick", this.cancelHroomBtn_onclick, this);
            this.batchHroomBtn.addEventHandler("onclick", this.batchHroomBtn_onclick, this);

        };

        this.loadIncludeScript("WB_HosptlzHroomMngntForm.xfdl");

       
    };
}
)();

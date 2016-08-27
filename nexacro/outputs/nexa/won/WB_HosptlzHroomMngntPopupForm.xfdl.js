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
                this.set_name("WB_HosptlzHroomMngntPopupForm");
                this.set_classname("WB_HosptlzHroomMngntPopupForm");
                this.set_titletext("WB_HosptlzHroomMngntPopupForm");
                this._setFormPosition(0,0,770,768);
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

            obj = new Dataset("dsHroomCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1A</Col><Col id=\"data\">1인실</Col></Row><Row><Col id=\"code\">2A</Col><Col id=\"data\">2인실</Col></Row><Row><Col id=\"code\">4A</Col><Col id=\"data\">4인실</Col></Row><Row><Col id=\"code\">6A</Col><Col id=\"data\">6인실</Col></Row><Row><Col id=\"code\">I</Col><Col id=\"data\">중환자실</Col></Row><Row><Col id=\"code\">S</Col><Col id=\"data\">특실</Col></Row><Row><Col id=\"code\">V</Col><Col id=\"data\">VIP실</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsWardCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">41</Col><Col id=\"data\">41병동</Col></Row><Row><Col id=\"code\">51</Col><Col id=\"data\">51병동</Col></Row><Row><Col id=\"code\">52</Col><Col id=\"data\">52병동</Col></Row><Row><Col id=\"code\">61</Col><Col id=\"data\">61병동</Col></Row><Row><Col id=\"code\">62</Col><Col id=\"data\">62병동</Col></Row><Row><Col id=\"code\">71</Col><Col id=\"data\">71병동</Col></Row><Row><Col id=\"code\">72</Col><Col id=\"data\">72병동</Col></Row><Row><Col id=\"code\">81</Col><Col id=\"data\">81병동</Col></Row><Row><Col id=\"code\">AA</Col><Col id=\"data\">중환자실</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHroom", this);
            obj._setContents("<ColumnInfo><Column id=\"hroomNo\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"applyPridStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyPridEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"hroomGrade\" type=\"STRING\" size=\"256\"/><Column id=\"hroomdiffAmt\" type=\"STRING\" size=\"256\"/><Column id=\"feeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sibdCnt\" type=\"STRING\" size=\"256\"/><Column id=\"pmsnSibd\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"sibdTel\" type=\"STRING\" size=\"256\"/><Column id=\"finanCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHroomGradeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">특실</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">1인실</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">2인실</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">4인실</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">6인실</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFeeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ABZ11</Col><Col id=\"data\">vip실</Col></Row><Row><Col id=\"code\">ABZ06</Col><Col id=\"data\">6인실</Col></Row><Row><Col id=\"code\">ABZ05</Col><Col id=\"data\">4인실</Col></Row><Row><Col id=\"code\">ABZ04</Col><Col id=\"data\">2인실</Col></Row><Row><Col id=\"code\">ABZ03</Col><Col id=\"data\">1인실</Col></Row><Row><Col id=\"code\">ABZ02</Col><Col id=\"data\">중환자실</Col></Row><Row><Col id=\"code\">ABZ01</Col><Col id=\"data\">특실</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGenderCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">남자</Col><Col id=\"code\">남자</Col></Row><Row><Col id=\"data\">여자</Col><Col id=\"code\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", "760", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "6.88%", "-4", null, "60", "72.99%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("병실 검색");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.21%", "69", null, "51", "1.69%", null, this);
            obj.set_taborder("10");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("wardStc", "absolute", "3.51%", "80", null, "28", "86.88%", null, this);
            obj.getSetter("taborder").set("11");
            obj.set_text("병동");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("searchWardCombo", "absolute", "13.64%", "80", null, "28", "77.92%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("dsWardCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_background("transparent");

            obj = new Static("hroomStc", "absolute", "23.38%", "80", null, "28", "67.01%", null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("병실");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("searchHroomCombo", "absolute", "33.51%", "80", null, "28", "58.05%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("dsHroomCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_background("transparent");

            obj = new Static("genderStc", "absolute", "43.25%", "80", null, "28", "47.14%", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("성별");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Radio("genderRadio", "absolute", "54.03%", "82", null, "24", "31.95%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_columncount("2");
            obj.set_innerdataset("@dsGenderCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");

            obj = new Button("comboResetBtn", "absolute", "538", "80", "102", "32", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("comboResetBtn");
            obj.style.set_background("@gradation URL('img::resetBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("comboResetBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchHroomBtn", "absolute", "642", "80", "90", "32", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("searchHroomBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchHroomBtn");
            this.addChild(obj.name, obj);

            obj = new Button("completeBtn", "absolute", "284", "720", "90", "32", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("completeBtn");
            obj.style.set_background("@gradation URL('img::okBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("completeBtn");
            this.addChild(obj.name, obj);

            obj = new Button("cancelBtn", "absolute", "383", "720", "90", "32", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("cancelBtn");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("cancelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("hroomGrid", "absolute", "2.21%", "129", null, "575", "1.69%", null, this);
            obj.set_taborder("22");
            obj.set_binddataset("dsHroom");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"병실일련번호\"/><Cell col=\"1\" text=\"병동\"/><Cell col=\"2\" text=\"병실\"/><Cell col=\"3\" text=\"병상수\"/><Cell col=\"4\" text=\"허가병상\"/><Cell col=\"5\" text=\"성별\"/><Cell col=\"6\" text=\"병상전화번호\"/><Cell col=\"7\" text=\"재원자수\"/></Band><Band id=\"body\"><Cell text=\"bind:hroomNo\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:ward\" combodataset=\"dsWardCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:hroom\" combodataset=\"dsHroomCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:sibdCnt\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:pmsnSibd\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" text=\"bind:gender\" combodataset=\"dsGenderCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:sibdTel\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:finanCnt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 770, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WB_HosptlzHroomMngntPopupForm");
            		p.set_titletext("WB_HosptlzHroomMngntPopupForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WB_HosptlzHroomMngntPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("WB_HosptlzHroomMngntPopupForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 원무 병실 검색 팝업                         					*
        *                                                                   *
        * @Path		    병실 검색		      								*
        * @Description  병실정보를 검색하기 위한 팝업화면을 관리한다.	*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  7.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";

        //조건초기화
        this.comboResetBtn_onclick = function(obj,e){
        	this.searchWardCombo.set_value(null);
        	this.searchHroomCombo.set_value(null);
        	this.genderRadio.set_value(null);
        }

        //병실정보조회
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
        		this.gfnService("findHroomList");
        	}
        }

        //확인
        this.completeBtn_onclick = function(obj,e){
        	var arrRtn = new Array;
        	
        	var i=0;
        	arrRtn[i++] = this.dsHroom.getColumn(e.row,"hroomNo");
        	arrRtn[i++] = this.dsHroom.getColumn(e.row,"ward");  // 1 병동
        	arrRtn[i++] = this.dsHroom.getColumn(e.row,"hroom");
        	arrRtn[i++] = this.opener.setHroomInfo(arrRtn);
        	
        	this.close();
        }

        //취소
        this.cancelBtn_onclick = function(obj,e){
        	if(confirm("병실 검색 팝업창을 닫으시겠습니까?")){
        		this.close();
        	}
        }

        //더블클릭이벤트
        this.hroomGrid_oncelldblclick = function(obj,e){
        	var arrRtn = new Array;
        	var i=0;
        	arrRtn[i++] = this.dsHroom.getColumn(e.row,"hroomNo");
        	arrRtn[i++] = this.dsHroom.getColumn(e.row,"ward");  	// 1 병동
        	arrRtn[i++] = this.dsHroom.getColumn(e.row,"hroom");	// 2 병실
        	arrRtn[i++] = this.opener.setHroomInfo(arrRtn);
        	
        	this.close();
        }

        //콜백함수
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
            this.genderRadio.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.comboResetBtn.addEventHandler("onclick", this.comboResetBtn_onclick, this);
            this.searchHroomBtn.addEventHandler("onclick", this.searchHroomBtn_onclick, this);
            this.completeBtn.addEventHandler("onclick", this.completeBtn_onclick, this);
            this.cancelBtn.addEventHandler("onclick", this.cancelBtn_onclick, this);
            this.hroomGrid.addEventHandler("oncelldblclick", this.hroomGrid_oncelldblclick, this);

        };

        this.loadIncludeScript("WB_HosptlzHroomMngntPopupForm.xfdl");

       
    };
}
)();

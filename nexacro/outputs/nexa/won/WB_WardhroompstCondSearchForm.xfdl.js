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
                this.set_name("WB_WardhroompstCondSearchForm");
                this.set_classname("WB_WardhroompstCondSearchForm");
                this.set_titletext("WB_WardhroompstCondSearchForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">getHroomList</Col><Col id=\"URL\">his::won/base/getHroomList.do</Col><Col id=\"outData\">dsHroomList=dsHroomList</Col><Col id=\"callbackFunc\">hroomListCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findHroomList</Col><Col id=\"URL\">his::won/base/findHroomList.do</Col><Col id=\"outData\">dsHroom=dsHroom</Col><Col id=\"callbackFunc\">hroomCallbackFunc</Col></Row></Rows>");
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

            obj = new Dataset("dsHroomList", this);
            obj._setContents("<ColumnInfo><Column id=\"hroomNo\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzDate\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzFinalDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"hroomGrade\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"sibdCnt\" type=\"STRING\" size=\"256\"/><Column id=\"pmsnSibd\" type=\"STRING\" size=\"256\"/><Column id=\"finanCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHroomPat", this);
            obj._setContents("<ColumnInfo><Column id=\"hroomNo\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzDate\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzFinalDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"hroomGrade\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"sibdCnt\" type=\"STRING\" size=\"256\"/><Column id=\"pmsnSibd\" type=\"STRING\" size=\"256\"/><Column id=\"finanCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("병실 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0%", "0", "1200", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "5.44%", "-4", null, "60", "80.16%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("병동병실조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("hroomListGrid", "absolute", "32.96%", "66", null, "670", "1.68%", null, this);
            obj.set_taborder("28");
            obj.set_autofittype("col");
            obj.set_binddataset("dsHroomList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"병실\"/><Cell col=\"1\" text=\"진료과\"/><Cell col=\"2\" text=\"성별\"/><Cell col=\"3\" text=\"등급\"/><Cell col=\"4\" text=\"재원자\"/><Cell col=\"5\" text=\"공병상\"/><Cell col=\"6\" text=\"입원예정일\"/><Cell col=\"7\" text=\"퇴원예정일\"/></Band><Band id=\"body\"><Cell text=\"bind:hroom\"/><Cell col=\"1\" text=\"bind:trmtDeptCd\"/><Cell col=\"2\" text=\"bind:gender\"/><Cell col=\"3\" text=\"bind:hroomGrade\"/><Cell col=\"4\" text=\"bind:finanCnt\"/><Cell col=\"5\" text=\"bind:pmsnSibd\"/><Cell col=\"6\" text=\"bind:hosptlzPlnDate\"/><Cell col=\"7\" text=\"bind:hosptlzFinalDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("hroomGrid", "absolute", "2.24%", "66", null, "670", "67.36%", null, this);
            obj.set_taborder("30");
            obj.set_binddataset("dsHroom");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"병동\"/><Cell col=\"1\" text=\"병실\"/><Cell col=\"2\" text=\"등급\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"none\" text=\"bind:ward\" combodataset=\"dsWardCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:hroom\" combodataset=\"dsHroomCd\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:hroomGrade\" combodataset=\"dsHroomGradeCd\" combocodecol=\"code\" combodatacol=\"data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WB_WardhroompstCondSearchForm");
            		p.set_titletext("WB_WardhroompstCondSearchForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WB_WardhroompstCondSearchForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("WB_WardhroompstCondSearchForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 원무 병동병실 조회                         						*
        *                                                                   *
        * @Path		    병동병실 조회		      							*
        * @Description  병동병실정보를 조회한다.							*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  16.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";

        var ward, hroomNo;
        this.WB_WardhroompstCondSearchForm_onload = function(obj,e){
        	this.gfnService("findHroomList",false);
        }

        this.hroomGrid_oncellclick = function(obj,e){
        	ward = this.dsHroom.getColumn(this.hroomGrid.currentrow,"ward");
        	hroom = this.dsHroom.getColumn(this.hroomGrid.currentrow,"hroom");
        		
        	var argument = "ward ='"+ward+"' hroom='"+hroom+"'"; 			
        	var row = this.dsService.findRow('serviceID' , "getHroomList");
        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("getHroomList",false);
        	
        	//trace(this.dsHroomList.saveXML());
        }

        this.hroomListCallbackFunc = function(svcID,errorCode,errorMsg){
           if (errorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
              this.gfnErrorPopup(svcID, errorMsg);
           } else {
              // 트랜잭션 완료
              trace("===== " + svcID + " 트랜잭션 성공 =====\n");
              if(this.dsHroomList.getRowCount() == 0){
        		alert("해당 조건에 검색된 데이터가 없습니다.");	
              }
           }
        }
        this.hroomListGrid_oncellclick = function(obj,e){
        	this.dsHroomPat.copyData(this.dsHroomList,true);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.WB_WardhroompstCondSearchForm_onload, this);
            this.hroomListGrid.addEventHandler("oncellclick", this.hroomListGrid_oncellclick, this);
            this.hroomGrid.addEventHandler("oncellclick", this.hroomGrid_oncellclick, this);

        };

        this.loadIncludeScript("WB_WardhroompstCondSearchForm.xfdl");

       
    };
}
)();

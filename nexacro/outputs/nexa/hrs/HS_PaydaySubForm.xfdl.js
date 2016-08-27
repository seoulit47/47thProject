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
                this.set_name("HS_PaydaySubForm");
                this.set_classname("HS_PaydaySubForm");
                this.set_titletext("HS_PaydaySubForm");
                this._setFormPosition(0,0,550,360);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPaydaySubList</Col><Col id=\"URL\">his::hrs/salBase/findPaydaySubList.do</Col><Col id=\"outData\">dsPayday=dsPayday</Col><Col id=\"callbackFunc\">findPaydayListDB</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPayday", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"belongYm\" type=\"STRING\" size=\"256\"/><Column id=\"paymentDate\" type=\"STRING\" size=\"256\"/><Column id=\"sameTimePublish\" type=\"STRING\" size=\"256\"/><Column id=\"targetChoice\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"locationCode\" type=\"STRING\" size=\"256\"/><Column id=\"jobClass\" type=\"STRING\" size=\"256\"/><Column id=\"salSact\" type=\"STRING\" size=\"256\"/><Column id=\"salType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "8", "550", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "9.09%", "4", null, "60", "42.91%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("급/상여 지급일자");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("paydaySubGrid", "absolute", "4.91%", "65", null, "240", "3.64%", null, this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPayday");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"지급일자\"/><Cell col=\"2\" text=\"동시발행\"/><Cell col=\"3\" text=\"급여구분\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:paymentDate\"/><Cell col=\"2\" text=\"bind:sameTimePublish\"/><Cell col=\"3\" text=\"bind:salSact\"/><Cell col=\"4\" text=\"bind:note\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("subOkBtn", "absolute", "339", "312", "90", "32", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("subOkBtn");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("subOkBtn");
            this.addChild(obj.name, obj);

            obj = new Button("subCancelBtn", "absolute", "432", "312", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("subCancelBtn");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("subCancelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 550, 360, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HS_PaydaySubForm");
            		p.set_titletext("HS_PaydaySubForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HS_PaydaySubForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HS_PaydaySubForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사 급/상여 지급일자 팝업창                          			*
        *                                                                   *
        * @Path		    급/상여 지급일자 팝업창      					*
        * @Description  급/상여 지급일자 팝업창 화면						*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 5.  30.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";

        //선택한 연월에 대한 지급일자 가져오기
        this.HS_PaydaySubForm_onload = function(obj,e){
        	var belongYm = this.parent.belongYm;
        	this.dsService.setColumn(0,4,"yearMonth=" + belongYm);
        	this.gfnService("findPaydaySubList");
        }

        this.findPaydayListDB = function(svcID,errorCode,errorMsg){
        	if (errorCode < 1) {
        		trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
        		this.gfnErrorPopup(svcID, errorMsg);
        	} else {
        		// 트랜잭션 완료
        		trace("===== " + svcID + " 트랜잭션 성공 =====\n");
        		if(this.dsPayday.getRowCount() == 0){
        			alert("해당연월에 등록된 지급일자가 없습니다.");
        		}
        	}
        }

        this.subCancelBtn_onclick = function(obj,e){
        	if(confirm("창을 닫으시겠습니까?")){
        		this.close();
        	}
        }

        this.subOkBtn_onclick = function(obj,e){
        	var arrRtn = new Array;
        	var i=0;
        	arrRtn[i++] = this.dsPayday.getColumn(e.row,"paymentDate");
        	arrRtn[i++] = this.dsPayday.getColumn(e.row,"sameTimePublish");
        	arrRtn[i++] = this.dsPayday.getColumn(e.row,"salSact");
        	
        	this.opener.setCode(this.parent.belongYm,arrRtn);
        	this.close();
        }

        this.paydaySubGrid_oncelldblclick = function(obj,e){
        	var arrRtn = new Array;
        	var i=0;
        	arrRtn[i++] = this.dsPayday.getColumn(e.row,"paymentDate");
        	arrRtn[i++] = this.dsPayday.getColumn(e.row,"sameTimePublish");
        	arrRtn[i++] = this.dsPayday.getColumn(e.row,"salSact");
        	
        	this.opener.setCode(this.parent.belongYm,arrRtn);
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HS_PaydaySubForm_onload, this);
            this.paydaySubGrid.addEventHandler("oncelldblclick", this.paydaySubGrid_oncelldblclick, this);
            this.subOkBtn.addEventHandler("onclick", this.subOkBtn_onclick, this);
            this.subCancelBtn.addEventHandler("onclick", this.subCancelBtn_onclick, this);

        };

        this.loadIncludeScript("HS_PaydaySubForm.xfdl");

       
    };
}
)();

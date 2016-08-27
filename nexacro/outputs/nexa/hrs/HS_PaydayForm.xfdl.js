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
                this.set_name("HS_PaydayForm");
                this.set_classname("hs_paydayForm");
                this.set_titletext("HS_PaydayForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPaydayList</Col><Col id=\"URL\">his::hrs/salBase/findPaydayList.do</Col><Col id=\"outData\">dsPayday=dsPayday</Col><Col id=\"callbackFunc\">findPaydayListCB</Col></Row><Row><Col id=\"serviceID\">batchPaydayProcess</Col><Col id=\"URL\">his::hrs/salBase/batchPaydayProcess.do</Col><Col id=\"inData\">dsPayday=dsPayday:u</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
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

            obj = new Dataset("dsPublishType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">동시</Col></Row><Row><Col id=\"value\">분리</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTagetChoice", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">직종및급여형태별</Col></Row><Row><Col id=\"value\">사용자직접등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsJobClass", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">기관장</Col></Row><Row><Col id=\"value\">의무직</Col></Row><Row><Col id=\"value\">연구의무직</Col></Row><Row><Col id=\"value\">연구직</Col></Row><Row><Col id=\"value\">임상연구직</Col></Row><Row><Col id=\"value\">약무직</Col></Row><Row><Col id=\"value\">간호직</Col></Row><Row><Col id=\"value\">보건직</Col></Row><Row><Col id=\"value\">행정직</Col></Row><Row><Col id=\"value\">기술직</Col></Row><Row><Col id=\"value\">별정직</Col></Row><Row><Col id=\"value\">외부인력</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSalType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">연봉</Col></Row><Row><Col id=\"value\">월급</Col></Row><Row><Col id=\"value\">일급</Col></Row><Row><Col id=\"value\">시급</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSalGubun", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">급여</Col></Row><Row><Col id=\"value\">상여</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMonth", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">01</Col></Row><Row><Col id=\"value\">02</Col></Row><Row><Col id=\"value\">03</Col></Row><Row><Col id=\"value\">04</Col></Row><Row><Col id=\"value\">05</Col></Row><Row><Col id=\"value\">06</Col></Row><Row><Col id=\"value\">07</Col></Row><Row><Col id=\"value\">08</Col></Row><Row><Col id=\"value\">09</Col></Row><Row><Col id=\"value\">10</Col></Row><Row><Col id=\"value\">11</Col></Row><Row><Col id=\"value\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "4.8%", "4", null, "60", "76.32%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("급/상여 변동현황");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0%", "8", "1670", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "4.8%", "4", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("급/상여 지급일자 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.24%", "69", null, "51", "1.68%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("belongStc", "absolute", "2.64%", "80", null, "28", "87.76%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("귀속연월");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "12.48%", "80", null, "30", "1010", null, this);
            obj.set_taborder("5");
            obj.set_value("2016");
            obj.getSetter("class").set("yearSpin");
            this.addChild(obj.name, obj);

            obj = new Static("yearStatic", "absolute", "19.28%", "81", null, "28", "78.96%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("년");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Combo("monthCombo", "absolute", "20.8%", "81", null, "28", "73.76%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("dsMonth");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.style.set_background("transparent");

            obj = new Static("monthStatic", "absolute", "26.32%", "81", null, "28", "71.92%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("월");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("payDayGrid", "absolute", "2.24%", "129", null, "586", "1.76%", null, this);
            obj.set_taborder("9");
            obj.set_binddataset("dsPayday");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"4\" text=\"지급회수\"/><Cell col=\"5\" colspan=\"4\" text=\"지급직종및급여형태\"/><Cell row=\"1\" col=\"1\" text=\"지급일자\"/><Cell row=\"1\" col=\"2\" text=\"동시발행\"/><Cell row=\"1\" col=\"3\" text=\"대상자선정\"/><Cell row=\"1\" col=\"4\" text=\"비고\"/><Cell row=\"1\" col=\"5\" text=\"사업장\"/><Cell row=\"1\" col=\"6\" text=\"직종\"/><Cell row=\"1\" col=\"7\" text=\"급여구분\"/><Cell row=\"1\" col=\"8\" text=\"급여형태\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:paymentDate\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:sameTimePublish\" combodataset=\"dsPublishType\" combocodecol=\"value\" combodatacol=\"value\"/><Cell col=\"3\" edittype=\"combo\" text=\"bind:targetChoice\" combodataset=\"dsTagetChoice\" combocodecol=\"value\" combodatacol=\"value\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:note\"/><Cell col=\"5\" edittype=\"text\" text=\"서울병원\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:jobClass\" combodataset=\"dsJobClass\" combocodecol=\"value\" combodatacol=\"value\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:salSact\" combodataset=\"dsSalGubun\" combocodecol=\"value\" combodatacol=\"value\"/><Cell col=\"8\" edittype=\"combo\" text=\"bind:salType\" combodataset=\"dsSalType\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("payDayAddBtn", "absolute", "816", "720", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("payDayAddBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("payDayDelBtn", "absolute", "914", "720", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("payDayDelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("payDayCancelBtn", "absolute", "1012", "720", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("payDayCancelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchPaydayBtn", "absolute", "355", "81", "90", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("searchPaydayBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchPaydayBtn");
            this.addChild(obj.name, obj);

            obj = new Button("paydayBatchBtn", "absolute", "1110", "720", "110", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("paydayBatchBtn");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("paydayBatchBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1670, 60, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("transparent URL('img::titleBar4.jpg')");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 51, this.baseDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.baseDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("hs_paydayForm");
            		p.set_titletext("HS_PaydayForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HS_PaydayForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HS_PaydayForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사 급/상여 지급일자 관리                           			*
        *                                                                   *
        * @Path		    급/상여 지급일자 관리      						*
        * @Description  급/상여 지급일자 조회, 등록, 수정, 삭제할 수 	*
        				있다. 단, 수정은 지급일자만 가능하다.			*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 5.  29.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";

        //지급일자조회
        this.searchPaydayBtn_onclick = function(obj,e){
        	var yearMonth = this.yearSpin.text + this.monthCombo.text;
        	this.dsService.setColumn(0,4,"yearMonth="+yearMonth);
        	this.gfnService("findPaydayList", false);		
        }

        this.findPaydayListCB = function(svcID,errorCode,errorMsg){
        	if (errorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
              this.gfnErrorPopup(svcID, errorMsg);
        	} else {
              // 트랜잭션 완료
              trace("===== " + svcID + " 트랜잭션 성공 =====\n");
        		if(this.dsPayday.getRowCount() == 0 ){
        			alert("해당연월의 급/상여지급일자 데이터가 없습니다.");
        		}
        	}
        }

        //지급일자추가
        this.payDayAddBtn_onclick = function(obj,e){
        	var yearMonth = this.yearSpin.text + this.monthCombo.text;
        	
        	var year = this.yearSpin.text;
        	var month = parseInt(this.monthCombo.text)+1;	
        	if(month < 10){		
        		var paymentDate = year + 0 + month + 15; 
        	}else if(month == 13){
        		var year = parseInt(this.yearSpin.text)+1+"";
        		var month = 1;
        		var paymentDate = year + 0 + month + 15; 
        	}else{
        		var paymentDate = year + month + 15; 	
        	}
        	
        	this.dsPayday.addRow();
        	this.dsPayday.setColumn(this.payDayGrid.currentrow, "belongYm", yearMonth);
        	this.dsPayday.setColumn(this.payDayGrid.currentrow, "locationCode", "서울병원");	
        	this.dsPayday.setColumn(this.payDayGrid.currentrow, "jobClass", "전체");	
        	this.dsPayday.setColumn(this.payDayGrid.currentrow, "paymentDate",paymentDate);
        }

        //지급일자삭제
        this.payDayDelBtn_onclick = function(obj,e){
        	this.dsPayday.deleteRow(this.payDayGrid.currentrow);
        }

        //지급일자취소
        this.payDayCancelBtn_onclick = function(obj,e){
        	if(confirm("작성중인 데이터는 저장되지 않습니다. 취소하시겠습니까?")){
        		this.reload();
        	}
        }

        //일괄처리
        this.paydayBatchBtn_onclick = function(obj,e){
        	if(confirm("일괄처리 하시겠습니까? 단, 수정사항은 지급일자만 적용됩니다.")){	
        		this.gfnService("batchPaydayProcess");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.payDayAddBtn.addEventHandler("onclick", this.payDayAddBtn_onclick, this);
            this.payDayDelBtn.addEventHandler("onclick", this.payDayDelBtn_onclick, this);
            this.payDayCancelBtn.addEventHandler("onclick", this.payDayCancelBtn_onclick, this);
            this.searchPaydayBtn.addEventHandler("onclick", this.searchPaydayBtn_onclick, this);
            this.paydayBatchBtn.addEventHandler("onclick", this.paydayBatchBtn_onclick, this);

        };

        this.loadIncludeScript("HS_PaydayForm.xfdl");

       
    };
}
)();

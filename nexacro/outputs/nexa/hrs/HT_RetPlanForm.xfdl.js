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
                this.set_name("HT_RetPlanForm");
                this.set_classname("HT_RetPlanForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1243,737);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRetPlanEmp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturnYN", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">확인</Col><Col id=\"code\">Y</Col></Row><Row><Col id=\"value\">미확인</Col><Col id=\"code\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmEmp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturnItem", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"returnItemNo\" type=\"STRING\" size=\"256\"/><Column id=\"returnYn\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"returnItemNm\" type=\"STRING\" size=\"256\"/><Column id=\"responsivilityDept\" type=\"STRING\" size=\"256\"/><Column id=\"confirmor\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findreturnItem</Col><Col id=\"URL\">his::hrs/ret/findReturnItemList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsReturnItem=dsReturnItem</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">findCodeList</Col><Col id=\"URL\">his::com/findCodePopupList.do</Col><Col id=\"inData\">[Undefined]</Col><Col id=\"outData\">dsCode=dsCode</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">[Undefined]</Col></Row><Row><Col id=\"serviceID\">batchReturnItemProcess</Col><Col id=\"URL\">his::hrs/ret/batchReturnItemProcess.do</Col><Col id=\"inData\">dsReturnItem=dsReturnItem:U</Col><Col id=\"outData\">[Undefined]</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">[Undefined]</Col></Row><Row><Col id=\"serviceID\">findRetPlanEmpList</Col><Col id=\"URL\">his::hrs/ret/findRetPlanEmpList.do</Col><Col id=\"outData\">dsRetPlanEmp=dsRetPlanEmp</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTempReturnInfo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">인수인계</Col><Col id=\"code\">RI100</Col><Col id=\"dept\">인사과</Col></Row><Row><Col id=\"value\">주차권</Col><Col id=\"code\">RI200</Col><Col id=\"dept\">중앙공급실</Col></Row><Row><Col id=\"value\">PC</Col><Col id=\"code\">RI300</Col><Col id=\"dept\">회계팀</Col></Row><Row><Col id=\"value\">유니폼</Col><Col id=\"code\">RI400</Col><Col id=\"dept\">홍보실</Col></Row><Row><Col id=\"value\">식대권</Col><Col id=\"code\">RI500</Col><Col id=\"dept\">회계팀</Col></Row><Row><Col id=\"value\">복지카드</Col><Col id=\"code\">RI600</Col><Col id=\"dept\">감사과</Col></Row><Row><Col id=\"value\">사원카드</Col><Col id=\"code\">RI700</Col><Col id=\"dept\">인사과</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.08%", "62", "1230", "40", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            obj.set_dragscrolltype("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "56.43%", "4", null, "30", "40.39%", null, this.Div00);
            obj.getSetter("taborder").set("10");
            obj.set_text("~");
            obj.style.set_align("center");
            obj.style.set_font("bold 12 Arial");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "0.57%", "4", null, "27", "92.35%", null, this.Div00);
            obj.getSetter("taborder").set("11");
            obj.set_text("부서코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("deptnoEdt", "absolute", "7.82%", "4", null, "26", "82.25%", null, this.Div00);
            obj.set_taborder("12");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("deptnmEdt", "absolute", "28.5%", "4", null, "26", "61.56%", null, this.Div00);
            obj.set_taborder("14");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "40.15%", "4", null, "27", "52.93%", null, this.Div00);
            obj.getSetter("taborder").set("15");
            obj.set_text("퇴직예정일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("sDateCal", "absolute", "47.23%", "4", null, "25", "42.92%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj = new Calendar("eDateCal", "absolute", "59.28%", "4", null, "25", "31.03%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj = new Static("subCodeStc01", "absolute", "21.25%", "4", null, "27", "71.66%", null, this.Div00);
            obj.getSetter("taborder").set("19");
            obj.set_text("부서명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("DelBtn10", "absolute", "392", "305", "32", "32", null, null, this.Div00);
            obj.set_taborder("20");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0.08%", "105", "1230", "617", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Grid("empGrid", "absolute", "1.95%", "48", null, "407", "60.1%", null, this.Div01);
            obj.set_taborder("15");
            obj.set_binddataset("dsRetPlanEmp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"사원명\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"직급\"/><Cell col=\"4\" text=\"퇴직예정일\"/></Band><Band id=\"body\"><Cell text=\"bind:empNo\"/><Cell col=\"1\" text=\"bind:empNm\"/><Cell col=\"2\" text=\"bind:deptNm\"/><Cell col=\"3\" text=\"bind:jobtt\"/><Cell col=\"4\" text=\"bind:retMonthWorkingdays\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("returnItemGrid", "absolute", "42.83%", "48", null, "284", "1.3%", null, this.Div01);
            obj.set_taborder("16");
            obj.set_binddataset("dsReturnItem");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"139\"/><Column size=\"95\"/><Column size=\"78\"/><Column size=\"67\"/><Column size=\"79\"/><Column size=\"127\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"반납항목일련번호\"/><Cell col=\"1\" text=\"반납항목명\"/><Cell col=\"2\" text=\"담당부서\"/><Cell col=\"3\" text=\"반납유무\"/><Cell col=\"4\" text=\"확인자\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"반납사원번호\"/></Band><Band id=\"body\"><Cell text=\"bind:returnItemNo\"/><Cell col=\"1\" text=\"bind:returnItemNm\"/><Cell col=\"2\" text=\"bind:responsivilityDept\"/><Cell col=\"3\" edittype=\"combo\" text=\"bind:returnYn\" combodataset=\"dsReturnYN\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"4\" text=\"bind:confirmor\"/><Cell col=\"5\" text=\"bind:note\"/><Cell col=\"6\" text=\"bind:empNo\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new TextArea("noteArea", "absolute", "50.57%", "444", null, "97", "23.94%", null, this.Div01);
            obj.set_taborder("17");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "1.87%", "13", null, "27", "81.11%", null, this.Div01);
            obj.getSetter("taborder").set("18");
            obj.set_text("퇴직예정자 리스트");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "42.75%", "13", null, "27", "40.23%", null, this.Div01);
            obj.getSetter("taborder").set("19");
            obj.set_text("반납 리스트");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "42.83%", "339", null, "27", "50.08%", null, this.Div01);
            obj.getSetter("taborder").set("20");
            obj.set_text("확인사항");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "42.83%", "374", null, "27", "50.08%", null, this.Div01);
            obj.getSetter("taborder").set("21");
            obj.set_text("담당부서");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "42.83%", "409", null, "27", "50.08%", null, this.Div01);
            obj.getSetter("taborder").set("22");
            obj.set_text("확인자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "42.83%", "444", null, "27", "50.08%", null, this.Div01);
            obj.getSetter("taborder").set("23");
            obj.set_text("비고");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("returnItemEdt", "absolute", "50.57%", "339", null, "26", "39.5%", null, this.Div01);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("deptEdt", "absolute", "50.57%", "374", null, "26", "39.5%", null, this.Div01);
            obj.set_taborder("25");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("resolverEdt", "absolute", "50.57%", "409", null, "26", "39.5%", null, this.Div01);
            obj.set_taborder("26");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("appointBtn", "absolute", "83.96%", "566", null, "30", "8.96%", null, this.Div01);
            obj.set_taborder("27");
            obj.set_text("퇴직발령");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("empSearchBtn", "absolute", "864", "64", "90", "32", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "1131", "671", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deptSearchBtn", "absolute", "224", "64", "32", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0%", "0", "1229", "58", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5.21%", "0", null, "48", "41.01%", null, this.Div02);
            obj.getSetter("taborder").set("0");
            obj.set_text("퇴직예정자 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.Div02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1230, 40, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");
            		p.set_dragscrolltype("none");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1230, 617, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1229, 58, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1243, 737, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HT_RetPlanForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div01.deptEdt","value","dsReturnItem","responsivilityDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div01.resolverEdt","value","dsReturnItem","confirmor");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div01.noteArea","value","dsReturnItem","note");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div01.returnItemEdt","value","dsReturnItem","returnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HT_RetPlanForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HT_RetPlanForm.xfdl", function() {
        /************************************************************************
        *                                                                       *
        * 퇴직예정자 관리                                                     *
        *                                                                       *
        * @Path		    퇴직예정자 관리        	                            *
        * @Description  퇴직예정자가 반납해야될 물품들은 관리하며          *
        *				반납확인이 완료된 사원은 퇴직발령이가능하다	     *
        *				추가적으로 퇴직예정자의 퇴직금계산실행이 가능하다 *
        * @Author		최창근  					                             *
        * 								                                         *
        * Created on 2016. 6. 4.                             		             *
        *								                                         *
        *************************************************************************/

        
        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";  

        
        /********************************************************************************
          변수 선언
        ********************************************************************************/
        var deptCd;
        var deptNm;
        var empNo;
        var empNm;
        var sDate;
        var dDate;
        var currentRow;

        
        /********************************************************************************
          부서 조회 버튼 이벤트
        ********************************************************************************/
        this.deptSearchBtn_onclick = function(obj,e)
        {
        	this.gfnCodePopup("GP500");
        	
        }

        this.setCode = function(code,arrRtn)
        {
        	this.Div00.deptnoEdt.set_value(arrRtn[0]);  
        	this.Div00.deptnmEdt.set_value(arrRtn[1]);
        }

        /********************************************************************************
          퇴직예정자 조회 버튼 이벤트
        ********************************************************************************/
        this.empSearchBtn_onclick = function(obj,e)
        {
        	deptCd = this.Div00.deptnoEdt.value;
        	deptNm = this.Div00.deptnmEdt.value;
        	sDate = this.Div00.sDateCal.value;
        	eDate = this.Div00.eDateCal.value;
        	
        	var argument = "deptCd="+deptCd +" sDate="+sDate +" eDate="+eDate;
        	
        	this.dsService.setColumn(3,"argument",argument);	//퇴직예정사원
        	this.gfnService("findRetPlanEmpList");

        	this.dsService.setColumn(0,"argument",argument);	//반납목록리스트
        	this.gfnService("findreturnItem");

        

        }

        
        /********************************************************************************
          퇴직발령 버튼 이벤트
        ********************************************************************************/
        this.appointBtn_onclick = function(obj,e)
        {
        	//반납완료 확인
        	for(var i = 0 ; i < this.dsReturnItem.getRowCount() ; i++){
        		
        		if(this.dsReturnItem.getColumn(i,"returnYn") == 'N'){
        			alert('반납되지 않은 항목이 있습니다.');
        			return;
        		}
        	}
        	
        	var param = {deptCd:deptCd,deptNm:deptNm,empNo:empNo,empNm:empNm};
        	this.gfnPopup("HT_PopupRetAppForm", "hrs", param); 
        	
        	//application.open("HT_PopupRetAppForm","hrs::HT_PopupRetAppForm.xfdl", this.getOwnerFrame(), {deptCd:deptCd,deptNm:deptNm,empNo:empNo,empNm:empNm} );
        }

        
        /********************************************************************************
          일괄처리 버튼 이벤트
        ********************************************************************************/
        this.saveBtn_onclick = function(obj,e)
        {
        		if(confirm("변경된 사항을 저장하시겠습니까?"))
        	{
        		alert(33);
        		//var returnItemNo = this.dsReturnItem.getColumn(this.dsReturnItem.rowposition, "returnItemNo");
        		//var argument = "empNo="+empNo+" returnItemNo="+returnItemNo;
        		
        		//this.dsService.setColumn(3, "argument", argument);
        		this.gfnService("batchReturnItemProcess");
        	}
        }

        
        /********************************************************************************
          퇴직예정자리스트 셀클릭 이벤트
        ********************************************************************************/
        this.Div01_empGrid_oncellclick = function(obj,e)
        {
        	//변수 = row(행)의 값 담기
        	//this.dsHmEmp 에 있는것 가지고 오는거임
        	deptCd = this.dsRetPlanEmp.getColumn(e.row, "deptCd");		//부서번호
        	deptNm = this.dsRetPlanEmp.getColumn(e.row, "deptNm");		//부서명
        	empNo = this.dsRetPlanEmp.getColumn(e.row, "empNo");		//사원번호
        	empNm = this.dsRetPlanEmp.getColumn(e.row, "empNm");		//사원명
        	
        	//글로벌 dsHmEmp 에 set 해줌(다른 폼에서 글로벌 변수에 있는 사원정보를 사용할 수 있도록 만듬)
        	//application.dsHmEmp.setColumn(0, "deptCd", deptCd);
        	//application.dsHmEmp.setColumn(0, "deptNm", deptNm);
        	//application.dsHmEmp.setColumn(0, "empNo", empNo);
        	//application.dsHmEmp.setColumn(0, "empNm", empNm);
        	
        	//반납리스트 dsReturnItem 필터(사원번호)
        	this.dsReturnItem.filter("empNo=='"+empNo+"'");	
        	var rowCount = this.dsReturnItem.getRowCount();
        	
        	if(rowCount == 0)
        	{
        		alert("정보가 입력되지 않았습니다");
        		this.dsReturnItemGridFilter();
        	}
        }

        
        /********************************************************************************
          반납목록필터 함수
        ********************************************************************************/
        this.dsReturnItemGridFilter = function()
        {
        	//반납아이템 항목 갯수
        	var index = this.dsTempReturnInfo.getRowCount();
        	
        	for(var i=0; i<index; i++)
        	{
        		currentRow = this.dsReturnItem.addRow();
        		
        		var value = this.dsTempReturnInfo.getColumn(i, "value");
        		var code = this.dsTempReturnInfo.getColumn(i, "code");
        		var dept = this.dsTempReturnInfo.getColumn(i, "dept");
        		var returnYn = this.dsReturnItem.getColumn(i, "returnYn");
        		
        		this.dsReturnItem.setColumn(currentRow, "empNo", empNo);
        		this.dsReturnItem.setColumn(currentRow, "returnItemNm", value);
        		this.dsReturnItem.setColumn(currentRow, "returnItemNo", code);
        		this.dsReturnItem.setColumn(currentRow, "responsivilityDept", dept);
        		
        		if(returnYn == null)
        		{
        			this.dsReturnItem.setColumn(currentRow, "returnYn", "N");
        		}
        	}
        	
        }

        this.Div01_returnItemGrid_oncellclick = function(obj,e)
        {
        	
        }
        /********************************************************************************
          콜백 함수
        ********************************************************************************/
        this.CallbackFunc=function(trid,errcd,errmsg){	
        	if(trid =="findreturnItem"){
        		if(errcd == 1){ 
        		
        	//변수 = row(행)의 값 담기
        	//this.dsHmEmp 에 있는것 가지고 오는거임
        	deptCd = this.dsRetPlanEmp.getColumn(this.dsRetPlanEmp.rowposition, "deptCd");		//부서번호
        	deptNm = this.dsRetPlanEmp.getColumn(this.dsRetPlanEmp.rowposition, "deptNm");		//부서명
        	empNo = this.dsRetPlanEmp.getColumn(this.dsRetPlanEmp.rowposition, "empNo");		//사원번호
        	empNm = this.dsRetPlanEmp.getColumn(this.dsRetPlanEmp.rowposition, "empNm");		//사원명
        	

        	//반납리스트 dsReturnItem 필터(사원번호)
        	this.dsReturnItem.filter("empNo=='"+empNo+"'");	
        	var rowCount = this.dsReturnItem.getRowCount();
        	
        	if(rowCount == 0)
        	{
        		alert("정보가 입력되지 않았습니다");
        		this.dsReturnItemGridFilter();
        	}
                       
        		}else{
        			alert("반납항목 불러오기 에러");
        		}
        }

        	if(trid =="batchReturnItemProcess"){
        		if(errcd == 1){
        				alert("성공");
        		}
        		else{ 
        				alert("실패");
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.DelBtn10.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.Div01.empGrid.addEventHandler("oncellclick", this.Div01_empGrid_oncellclick, this);
            this.Div01.returnItemGrid.addEventHandler("oncellclick", this.Div01_returnItemGrid_oncellclick, this);
            this.Div01.returnItemGrid.addEventHandler("onselectchanged", this.Div01_returnItemGrid_onselectchanged, this);
            this.Div01.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.appointBtn.addEventHandler("onclick", this.appointBtn_onclick, this);
            this.empSearchBtn.addEventHandler("onclick", this.empSearchBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.deptSearchBtn.addEventHandler("onclick", this.deptSearchBtn_onclick, this);

        };

        this.loadIncludeScript("HT_RetPlanForm.xfdl");

       
    };
}
)();

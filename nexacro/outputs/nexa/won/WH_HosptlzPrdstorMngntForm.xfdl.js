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
                this.set_name("WH_HosptlzPrdstorMngntForm");
                this.set_classname("WH_HosptlzPrdstorMngntForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findHosptlzPrdstorList</Col><Col id=\"outData\">dsHosptlzPrdstor=dsHosptlzPrdstor</Col><Col id=\"callbackFunc\">findHosptlzPrdstorListCallbackFunc</Col><Col id=\"URL\">his::won/hosptlzPat/findHosptlzPrdstorList.do</Col></Row><Row><Col id=\"serviceID\">empInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\"/><Col id=\"outData\">gdsEmp=gdsEmp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">hosptlzPlnDate</Col><Col id=\"URL\">his::won/hosptlzPat/batchProcessHosptlzRsvt.do</Col><Col id=\"inData\">dsHosptlzPrdstor=dsHosptlzPrdstor:u</Col><Col id=\"callbackFunc\">batchProcessHosptlzRsvtCallbackFunc</Col></Row><Row><Col id=\"serviceID\">WardRoom</Col><Col id=\"URL\">his::won/hosptlzPat/batchProcessHosptlzRsvt.do</Col><Col id=\"inData\">dsHosptlzPrdstor=dsHosptlzPrdstor:u</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">batchProcessHosptlzRsvtCallbackFunc</Col></Row><Row><Col id=\"serviceID\">cancelHosptlzRsvt</Col><Col id=\"URL\">his::won/hosptlzPat/batchProcessHosptlzRsvt.do</Col><Col id=\"inData\">dsHosptlzPrdstor=dsHosptlzPrdstor:u</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">batchProcessHosptlzRsvtCallbackFunc</Col></Row><Row><Col id=\"serviceID\">changeHosptlzRsvtYb</Col><Col id=\"URL\">his::won/hosptlzPat/chanHosptlzRsvtYb.do</Col><Col id=\"inData\">dsHosptlzPrdstor=dsHosptlzPrdstor:u</Col><Col id=\"callbackFunc\">batchProcessHosptlzRsvtCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHosptlzPrdstor", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"trmtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzRsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"uniqueNtc\" type=\"STRING\" size=\"256\"/><Column id=\"hopeRoom\" type=\"STRING\" size=\"256\"/><Column id=\"hopeWard\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzRsvtYb\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GP080</Col><Col id=\"dsName\">dsGP080</Col></Row><Row><Col id=\"code\">SC070</Col><Col id=\"dsName\">dsSC070</Col></Row><Row><Col id=\"code\">SC071</Col><Col id=\"dsName\">dsSC071</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGP080", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSC070", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSC071", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("gdsEmp", this);
            obj._setContents("<ColumnInfo><Column id=\"payDate\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"lunar\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "0", "1250", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("           입원예정자관리");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "2.57%", "59", null, "27", "90.38%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("적용기간");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("applyStartDateCal", "absolute", "10%", "60", null, "25", "78.95%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");

            obj = new Calendar("applyEndDateCal", "absolute", "22.95%", "60", null, "25", "65.62%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");

            obj = new Static("subCodeStc02", "absolute", "35.71%", "59", null, "27", "55.05%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("환자등록번호");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "45.71%", "59", null, "27", "47.52%", null, this);
            obj.set_taborder("5");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("patNoBtn", "absolute", "52.86%", "59", null, "26", "44.76%", null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::miniSearch.png')");
            obj.getSetter("class").set("AddBtn");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "78.57%", "60", null, "26", "16.76%", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("SearchBtn");
            obj.getSetter("class").set("SearchBtn");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("hosptlzMngntSaveBtn", "absolute", "83.52%", "58", null, "30", "9.43%", null, this);
            obj.set_taborder("8");
            obj.set_text("입원등록");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("hosptlzMngntCancelBtn", "absolute", "90.76%", "58", null, "30", "2.19%", null, this);
            obj.set_taborder("9");
            obj.set_text("입원취소");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("hosptlzPrdstorGrid", "absolute", "1.68%", "112", null, "447", "2.16%", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("dsHosptlzPrdstor");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"94\"/><Column size=\"69\"/><Column size=\"48\"/><Column size=\"51\"/><Column size=\"74\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"88\"/><Column size=\"92\"/><Column size=\"273\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"환자번호\"/><Cell col=\"2\" text=\"성 명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"나이\"/><Cell col=\"5\" text=\"진료과\"/><Cell col=\"6\" text=\"희망병동\"/><Cell col=\"7\" text=\"희망병실\"/><Cell col=\"8\" text=\"진료일자\"/><Cell col=\"9\" text=\"입원예정일\"/><Cell col=\"10\" text=\"입원일\"/><Cell col=\"11\" text=\"담당의사\"/><Cell col=\"12\" text=\"특이사항\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:patNo\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:patNm\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:gender\"/><Cell col=\"4\" text=\"bind:age\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" text=\"bind:trmtDept\" combodataset=\"dsGP080\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:hopeWard\" combodataset=\"dsSC070\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:hopeRoom\" combodataset=\"dsSC071\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"8\" displaytype=\"normal\" text=\"bind:trmtDate\" mask=\"####/ ##/ ##\"/><Cell col=\"9\" displaytype=\"normal\" text=\"bind:hosptlzPlnDate\" mask=\"####/ ##/ ##\"/><Cell col=\"10\" displaytype=\"normal\"/><Cell col=\"11\" displaytype=\"combo\" text=\"bind:trmtDoct\" combodataset=\"gdsEmp\" combocodecol=\"empNo\" combodatacol=\"empNm\"/><Cell col=\"12\" text=\"bind:uniqueNtc\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00", "absolute", "1.68%", "569", null, "161", "50.72%", null, this);
            obj.set_text("예약일변경");
            obj.set_taborder("11");
            obj.style.set_border("1 solid lightslategray");
            obj.style.set_font("11 arial");
            this.addChild(obj.name, obj);

            obj = new Button("rsvtCngBtn", "absolute", "39.36%", "592", null, "30", "52%", null, this);
            obj.set_taborder("12");
            obj.set_text("예약일변경");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Calendar("hosptlzPlnDateModAfterCal", "absolute", "27.12%", "676", null, "25", "60.48%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");

            obj = new Edit("oPatNoNmEdt", "absolute", "19.84%", "635", null, "27", "72.48%", null, this);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("oPatNoCdEdt", "absolute", "11.52%", "635", null, "27", "80.8%", null, this);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "3.84%", "635", null, "27", "89.12%", null, this);
            obj.getSetter("taborder").set("16");
            obj.set_text("환자번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc05", "absolute", "3.84%", "675", null, "27", "89.12%", null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("입원예정일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("hosptlzPlnDateModBeforeCal", "absolute", "11.52%", "676", null, "25", "76.08%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_enable("false");

            obj = new GroupBox("GroupBox01", "absolute", "50.4%", "569", null, "161", "2.16%", null, this);
            obj.set_text("병동/병실수정");
            obj.set_taborder("19");
            obj.style.set_border("1 solid lightslategray");
            obj.style.set_font("11 arial");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "53.6%", "603", null, "27", "39.36%", null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("환자번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("tPatNoCdEdt", "absolute", "61.44%", "603", null, "27", "31.28%", null, this);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("tPatNoNmEdt", "absolute", "69.36%", "603", null, "27", "23.36%", null, this);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("hroomAllotBtn", "absolute", "89.04%", "592", null, "30", "3.36%", null, this);
            obj.set_taborder("23");
            obj.set_text("병실변경");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Calendar("hosptlzPlnDateCal", "absolute", "61.44%", "644", null, "25", "26.16%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_enable("false");

            obj = new Static("subCodeStc04", "absolute", "53.6%", "643", null, "27", "39.36%", null, this);
            obj.getSetter("taborder").set("25");
            obj.set_text("입원예정일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc08", "absolute", "53.6%", "683", null, "27", "39.36%", null, this);
            obj.getSetter("taborder").set("26");
            obj.set_text("병동/병실");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("wardCombo", "absolute", "61.44%", "684", null, "26", "30.72%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_innerdataset("dsSC070");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("Static01", "absolute", "69.68%", "683", null, "27", "28.64%", null, this);
            obj.getSetter("taborder").set("28");
            obj.set_text("동");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Combo("hroomCombo", "absolute", "72.72%", "684", null, "26", "19.52%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_innerdataset("dsSC071");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("");

            obj = new Static("Static02", "absolute", "81.04%", "683", null, "27", "17.28%", null, this);
            obj.getSetter("taborder").set("30");
            obj.set_text("실");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("hroomBtn", "absolute", "83.36%", "684", null, "26", "14.24%", null, this);
            obj.set_taborder("31");
            obj.style.set_background("@gradation URL('img::miniSearch.png')");
            obj.getSetter("class").set("AddBtn");
            obj.set_text("검색");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WH_HosptlzPrdstorMngntForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","oPatNoNmEdt","value","dsHosptlzPrdstor","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","oPatNoCdEdt","value","dsHosptlzPrdstor","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","hosptlzPlnDateModBeforeCal","value","dsHosptlzPrdstor","hosptlzPlnDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","tPatNoCdEdt","value","dsHosptlzPrdstor","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","tPatNoNmEdt","value","dsHosptlzPrdstor","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","hosptlzPlnDateCal","value","dsHosptlzPrdstor","hosptlzPlnDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","wardCombo","value","dsHosptlzPrdstor","hopeWard");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","hroomCombo","value","dsHosptlzPrdstor","hopeRoom");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WH_HosptlzPrdstorMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("WH_HosptlzPrdstorMngntForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("WH_HosptlzPrdstorMngntForm.xfdl", function() {
        /********************************************************************************

            입원예정자관리
                                                                           			                        
          @Path			 	원무 - 입원예정자관리
          @Description   병실이 부족하여 입원예약한 환자 관리.						
          @Author		    황태경						 								                
         									 											                        
          Created on 2016. 06. 13.                             		 					        

        ********************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";
        var patNo; //환자등록번호
        var hosptlzRsvtNo; //입원예약번호 

        this.patNoBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("WS_PatPopupForm","won","");
        }
        this.setPatInfo = function(arr){
        	patNo=arr[0];
        	this.patNoEd.set_value(arr[0]);
        	
        }

        this.searchBtn_onclick = function(obj,e)
        {
        	this.gfnBind();  
        	this.gfnService("empInfo","false");
        	
        	this.dsHosptlzPrdstor.clear();
        	this.hosptlzPlnDateModAfterCal.set_value(null);
        	
        	//적용일 값구하기.
        	var patNo=this.patNoEd.value;  
        	var startDate=this.applyStartDateCal.value;
        	var endDate =this.applyEndDateCal.value;
        	
            //조회 검색조건
        	if(startDate > endDate){
        	    alert("날짜 확인 후 다시 선택하세요.");
        	}else{	
        		this.dsService.setColumn(0,"argument",'patNo='+patNo+' startDate='+startDate+' endDate='+endDate);
        		this.gfnService("findHosptlzPrdstorList","false");
        	}	
        }

        this.hosptlzMngntSaveBtn_onclick = function(obj,e)
        {
        	
        	if(this.dsHosptlzPrdstor.rowcount==0){
        		alert("입원예정자 선택 후 등록하세요.");
        	}else	if(this.confirm( "입원등록 하시겠습니까?", "서울병원 - 입원예약")){
        		patNo=this.dsHosptlzPrdstor.getColumn(this.dsHosptlzPrdstor.rowposition,"patNo");	 //환자번호	
        		var outpaReceiptNo= this.dsHosptlzPrdstor.getColumn(this.dsHosptlzPrdstor.rowposition,"outpaReceiptNo");  //외래접수번호
        					
        		this.dsHosptlzPrdstor.setColumn(this.dsHosptlzPrdstor.rowposition,"hosptlzRsvtYb","");	
        		
        		this.dsService.setColumn(5,"argument",'patNo='+patNo+' outpaReceiptNo='+outpaReceiptNo); 
        	    this.gfnService("changeHosptlzRsvtYb","false"); //입원예약상태 변경 (Y->N) 
        		var param = {patNo:patNo}
        	    this.gfnPopup("WH_HosptlzMngntForm","won",param);
            
        	}	
        }

        this.hosptlzMngntCancelBtn_onclick = function(obj,e)
        {
        	patNo=this.dsHosptlzPrdstor.getColumn(this.dsHosptlzPrdstor.rowposition,"patNo");	 //환자번호
        	var outpaReceiptNo= this.dsHosptlzPrdstor.getColumn(this.dsHosptlzPrdstor.rowposition,"outpaReceiptNo");  //외래접수번호
        				
        	this.dsHosptlzPrdstor.setColumn(this.dsHosptlzPrdstor.rowposition,"hosptlzRsvtYb","");	
        		
        	this.dsService.setColumn(5,"argument",'patNo='+patNo+' outpaReceiptNo='+outpaReceiptNo); 
        	this.gfnService("changeHosptlzRsvtYb","false"); //입원예약상태 변경 (Y->N) 
        }

        this.rsvtCngBtn_onclick = function(obj,e)
        {
        	var hosptlzPlnDate= this.hosptlzPlnDateModAfterCal.value;  //예약예정일 변경.
        	var pastHosptlzPlnDate=this.hosptlzPlnDateModBeforeCal.value;  //변경전 예약예정일	

        	patNo=this.dsHosptlzPrdstor.getColumn(this.dsHosptlzPrdstor.rowposition,"patNo");  //환자번호
        	hosptlzRsvtNo=this.dsHosptlzPrdstor.getColumn(this.dsHosptlzPrdstor.rowposition,"hosptlzRsvtNo");  //입원예약번호
        	
        	
        	if(pastHosptlzPlnDate==hosptlzPlnDate){
        		alert("동일한 날짜 선택할 수 없습니다.");
        	}else{
        		this.dsHosptlzPrdstor.setColumn(this.dsHosptlzPrdstor.rowposition,"hosptlzPlnDate",hosptlzPlnDate);
        		this.dsService.setColumn(2,"argument",'patNo='+patNo+' hosptlzRsvtNo='+hosptlzRsvtNo);
        		this.gfnService("hosptlzPlnDate","false");
        	}
        }

        this.hroomAllotBtn_onclick = function(obj,e)
        {
        	 this.dsHosptlzPrdstor.setColumn(this.dsHosptlzPrdstor.rowposition,"hopeWard",this.wardCombo.value);
        	 this.dsHosptlzPrdstor.setColumn(this.dsHosptlzPrdstor.rowposition,"hopeRoom",this.hroomCombo.value);
        	 
        	 this.dsService.setColumn(2,"argument",'patNo='+patNo+' hosptlzRsvtNo='+hosptlzRsvtNo);
        	 this.gfnService("WardRoom","false");
        }

        this.hroomBtn_onclick = function(obj,e)
        {
        	this.openHroomDialog();
        }
        this.setHroomInfo= function(arr){
        	this.wardCombo.set_value(arr[1]);
        	this.hroomCombo.set_value(arr[2]);
        }

        //Callback함수
        this.batchProcessHosptlzRsvtCallbackFunc=function(svcID,errorCode,errorMsg){
        	
        	if(svcID=='hosptlzPlnDate'){
        		if(errorCode=="1"){
        			alert("입원예정일 변경 완료");
        		}else{
        			alert("입원예정일 변경 중 오류 발생");
        		}
        	}else if(svcID=='WardRoom'){
        		if(errorCode=="1"){
        			alert("입원 병동/병실 변경 완료");
        		}else{
        			alert("입원병동/병실 변경 중 오류 발생");
        		}

        	}else if(svcID=='changeHosptlzRsvtYb'){
        		if(errorCode=="1"){
        			var hosptlzRsvtNo= this.dsHosptlzPrdstor.getColumn(this.dsHosptlzPrdstor.rowposition,"hosptlzRsvtNo");  //예약번호	
        			
        			this.dsHosptlzPrdstor.deleteRow(this.dsHosptlzPrdstor.rowposition);
        			this.dsService.setColumn(4,"argument",'hosptlzRsvtNo='+hosptlzRsvtNo); 
        			this.gfnService("cancelHosptlzRsvt","false"); //입원예약삭제.	
        		}else{
        			alert("입원 등록 중 오류 발생");
        		}
        		
        	}else if(svcID=='cancelHosptlzRsvt'){
        		if(errorCode!="1"){		
        			alert("입원예약 삭제 중 오류 발생");
        		}	
        	}	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.gdsEmp.addEventHandler("onrowposchanged", this.dsHmEmp_onrowposchanged, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patNoBtn.addEventHandler("onclick", this.patNoBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.hosptlzMngntSaveBtn.addEventHandler("onclick", this.hosptlzMngntSaveBtn_onclick, this);
            this.hosptlzMngntCancelBtn.addEventHandler("onclick", this.hosptlzMngntCancelBtn_onclick, this);
            this.rsvtCngBtn.addEventHandler("onclick", this.rsvtCngBtn_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.hroomAllotBtn.addEventHandler("onclick", this.hroomAllotBtn_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.hroomBtn.addEventHandler("onclick", this.hroomBtn_onclick, this);

        };

        this.loadIncludeScript("WH_HosptlzPrdstorMngntForm.xfdl");

       
    };
}
)();

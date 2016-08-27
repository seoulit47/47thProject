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
                this.set_name("HS_PayChangePresentForm");
                this.set_classname("hs_payChangePresentForm");
                this.set_titletext("HS_PayChangePresentForm");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findSalChangeList</Col><Col id=\"URL\">his::hrs/salMng/findSalChangeList.do</Col><Col id=\"outData\">dsSalChange=dsSalChange</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findSalEmpList</Col><Col id=\"URL\">his::hrs/salMng/findSalEmpList.do</Col><Col id=\"outData\">dsSalEmp=dsSalEmp</Col><Col id=\"callbackFunc\">salEmpCallbackFunc</Col></Row><Row><Col id=\"callbackFunc\">payDeduCallbackFunc</Col><Col id=\"serviceID\">findPayDeduList</Col><Col id=\"URL\">his::hrs/salMng/findPayDeduList.do</Col><Col id=\"outData\">dsPayDedu=dsPayDedu</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSalChange", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"basicSal\" type=\"STRING\" size=\"256\"/><Column id=\"taxSum\" type=\"STRING\" size=\"256\"/><Column id=\"freeTaxSum\" type=\"STRING\" size=\"256\"/><Column id=\"bonus\" type=\"STRING\" size=\"256\"/><Column id=\"compShare\" type=\"STRING\" size=\"256\"/><Column id=\"gookmin\" type=\"STRING\" size=\"256\"/><Column id=\"gungang\" type=\"STRING\" size=\"256\"/><Column id=\"goyong\" type=\"STRING\" size=\"256\"/><Column id=\"janggi\" type=\"STRING\" size=\"256\"/><Column id=\"sodeuk\" type=\"STRING\" size=\"256\"/><Column id=\"jumin\" type=\"STRING\" size=\"256\"/><Column id=\"chainSum\" type=\"STRING\" size=\"256\"/><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSalEmp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPayDedu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"paymDeducDiv\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducNm\" type=\"STRING\" size=\"256\"/><Column id=\"basicSal\" type=\"STRING\" size=\"256\"/><Column id=\"compSal\" type=\"STRING\" size=\"256\"/><Column id=\"basicAap\" type=\"STRING\" size=\"256\"/><Column id=\"compAap\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPaym", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"paymDeducNm\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducDiv\" type=\"STRING\" size=\"256\"/><Column id=\"basicSal\" type=\"STRING\" size=\"256\"/><Column id=\"compSal\" type=\"STRING\" size=\"256\"/><Column id=\"basicAap\" type=\"STRING\" size=\"256\"/><Column id=\"compAap\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDeduc", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"paymDeducNm\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducDiv\" type=\"STRING\" size=\"256\"/><Column id=\"basicSal\" type=\"STRING\" size=\"256\"/><Column id=\"compSal\" type=\"STRING\" size=\"256\"/><Column id=\"basicAap\" type=\"STRING\" size=\"256\"/><Column id=\"compAap\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMonth", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">01</Col></Row><Row><Col id=\"value\">02</Col></Row><Row><Col id=\"value\">03</Col></Row><Row><Col id=\"value\">04</Col></Row><Row><Col id=\"value\">05</Col></Row><Row><Col id=\"value\">06</Col></Row><Row><Col id=\"value\">07</Col></Row><Row><Col id=\"value\">08</Col></Row><Row><Col id=\"value\">09</Col></Row><Row><Col id=\"value\">10</Col></Row><Row><Col id=\"value\">11</Col></Row><Row><Col id=\"value\">12</Col></Row><Row><Col id=\"value\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "8", "1200", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "4", null, "60", "76.32%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("급/상여 변동현황");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "1.92%", "77", null, "91", "1.68%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Grid("compareGrid", "absolute", "1.92%", "185", null, "176", "1.76%", null, this);
            obj.set_taborder("19");
            obj.set_binddataset("dsSalChange");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"15\" text=\"급/상여 변동현황\"/><Cell row=\"1\" text=\"인원\"/><Cell row=\"1\" col=\"1\" text=\"기본급\"/><Cell row=\"1\" col=\"2\" text=\"과세\"/><Cell row=\"1\" col=\"3\" text=\"비과세\"/><Cell row=\"1\" col=\"4\" text=\"상여\"/><Cell row=\"1\" col=\"5\" text=\"사업자부담\"/><Cell row=\"1\" col=\"6\" text=\"국민연금\"/><Cell row=\"1\" col=\"7\" text=\"건강보험\"/><Cell row=\"1\" col=\"8\" text=\"고용보험\"/><Cell row=\"1\" col=\"9\" text=\"장기요양보험\"/><Cell row=\"1\" col=\"10\" text=\"소득세\"/><Cell row=\"1\" col=\"11\" text=\"주민세\"/><Cell row=\"1\" col=\"12\" text=\"지급합계\"/><Cell row=\"1\" col=\"13\" text=\"공제합계\"/><Cell row=\"1\" col=\"14\" text=\"차인지급액\"/></Band><Band id=\"body\"><Cell text=\"bind:cnt\" expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"number\" text=\"bind:basicSal\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:taxSum\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:freeTaxSum\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:bonus\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:compShare\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:gookmin\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:gungang\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:goyong\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:janggi\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:sodeuk\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:jumin\"/><Cell col=\"12\" displaytype=\"number\" text=\"bind:chainSum\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:parseInt(gookmin)+parseInt(gungang)+parseInt(goyong)+parseInt(janggi)+parseInt(sodeuk)+parseInt(jumin)\"/><Cell col=\"14\" displaytype=\"number\" text=\"bind:chainSum\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("compareStc", "absolute", "2.64%", "128", null, "28", "88.48%", null, this);
            obj.getSetter("taborder").set("25");
            obj.set_text("비교연월");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Spin("comYearSpin", "absolute", "12.48%", "128", null, "30", "1010", null, this);
            obj.set_taborder("26");
            obj.set_value("2016");
            obj.getSetter("class").set("yearSpin");
            this.addChild(obj.name, obj);

            obj = new Static("yearStc00", "absolute", "19.28%", "129", null, "28", "78.96%", null, this);
            obj.getSetter("taborder").set("27");
            obj.set_text("년");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Combo("monCombo", "absolute", "20.8%", "129", null, "28", "73.76%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.style.set_background("transparent");
            obj.set_innerdataset("@dsMonth");
            obj.set_datacolumn("value");
            obj.set_codecolumn("value");

            obj = new Static("monStc", "absolute", "26.32%", "129", null, "28", "71.92%", null, this);
            obj.getSetter("taborder").set("29");
            obj.set_text("월");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Static("comStc", "absolute", "29.44%", "129", null, "28", "61.84%", null, this);
            obj.getSetter("taborder").set("31");
            obj.set_text("지급일");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("compareEd", "absolute", "38.72%", "129", null, "28", "52.08%", null, this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("gijunStc", "absolute", "2.64%", "88", null, "28", "88.48%", null, this);
            obj.getSetter("taborder").set("34");
            obj.set_text("기준연월");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Spin("gijunYearSpin", "absolute", "12.48%", "88", null, "30", "1010", null, this);
            obj.set_taborder("35");
            obj.set_value("2016");
            obj.getSetter("class").set("yearSpin");
            this.addChild(obj.name, obj);

            obj = new Combo("monthCombo", "absolute", "20.8%", "89", null, "28", "73.76%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.style.set_background("transparent");
            obj.set_innerdataset("@dsMonth");
            obj.set_datacolumn("value");
            obj.set_codecolumn("value");

            obj = new Static("monthStc", "absolute", "26.32%", "89", null, "28", "71.92%", null, this);
            obj.getSetter("taborder").set("37");
            obj.set_text("월");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Static("yearStc", "absolute", "19.28%", "89", null, "28", "78.96%", null, this);
            obj.getSetter("taborder").set("38");
            obj.set_text("년");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Static("payStc", "absolute", "29.44%", "89", null, "28", "61.84%", null, this);
            obj.getSetter("taborder").set("40");
            obj.set_text("지급일");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("payDayEd", "absolute", "38.72%", "89", null, "28", "52.08%", null, this);
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Edit("deptCdEd", "absolute", "65.6%", "129", null, "28", "28.32%", null, this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Edit("deptNmEd", "absolute", "75.2%", "129", null, "28", "15.6%", null, this);
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Button("searchChangeSalBtn", "absolute", "1137", "126", "74", "32", null, null, this);
            obj.set_taborder("47");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchChangeSalBtn");
            this.addChild(obj.name, obj);

            obj = new Static("deptStc", "absolute", "56.32%", "129", null, "28", "34.96%", null, this);
            obj.getSetter("taborder").set("48");
            obj.set_text("부서");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("empGrid", "absolute", "1.92%", "370", null, "371", "53.68%", null, this);
            obj.set_taborder("49");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSalEmp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"50\"/><Column size=\"45\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"사원코드\"/><Cell col=\"2\" text=\"사원명\"/><Cell col=\"3\" text=\"부서코드\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"직종\"/><Cell col=\"6\" text=\"직급\"/><Cell col=\"7\" text=\"입사일\"/><Cell col=\"8\" text=\"주민번호\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:empNo\"/><Cell col=\"2\" text=\"bind:empNm\"/><Cell col=\"3\" text=\"bind:deptCd\"/><Cell col=\"4\" text=\"bind:deptNm\"/><Cell col=\"5\" text=\"bind:jobcl\"/><Cell col=\"6\" text=\"bind:jobrk\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:hireDate\"/><Cell col=\"8\" displaytype=\"normal\" text=\"bind:rrn\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" text=\"인원\"/><Cell col=\"6\" colspan=\"3\" expr=\"expr:dataset.getRowCount()+&quot;명&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("deducGrid", "absolute", "72.72%", "430", null, "314", "2.16%", null, this);
            obj.set_taborder("51");
            obj.set_binddataset("dsDeduc");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공제항목\"/><Cell col=\"2\" text=\"기준연월\"/><Cell col=\"3\" text=\"비교연월\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:paymDeducNm\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:basicSal\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:compSal\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"지급합계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;parseInt(basicSal)&quot;)\" mask=\"###,###,###\"/><Cell col=\"3\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;parseInt(compSal)&quot;)\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("comStc00", "absolute", "47.12%", "397", null, "28", "44.16%", null, this);
            obj.getSetter("taborder").set("53");
            obj.set_text("기준연월");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("comStc01", "absolute", "66.96%", "397", null, "28", "24.32%", null, this);
            obj.getSetter("taborder").set("55");
            obj.set_text("비교연월");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("paymGrid", "absolute", "46.72%", "430", null, "314", "27.44%", null, this);
            obj.set_taborder("57");
            obj.set_binddataset("dsPaym");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"지급항목\"/><Cell col=\"2\" text=\"기준연월\"/><Cell col=\"3\" text=\"비교연월\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:paymDeducNm\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:basicSal\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:compSal\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"지급합계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;parseInt(basicSal)&quot;)\" mask=\"###,###,###\"/><Cell col=\"3\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;parseInt(compSal)&quot;)\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("comStc02", "absolute", "47.12%", "365", null, "28", "44.16%", null, this);
            obj.getSetter("taborder").set("58");
            obj.set_text("차인지급액");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("payDayBtn", "absolute", "603", "88", "32", "32", null, null, this);
            obj.set_taborder("59");
            obj.set_cssclass("payDayBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("payDayBtn");
            this.addChild(obj.name, obj);

            obj = new Button("compareBtn", "absolute", "603", "128", "32", "32", null, null, this);
            obj.set_taborder("60");
            obj.set_cssclass("compareBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("compareBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchDeptBtn", "absolute", "899", "128", "32", "32", null, null, this);
            obj.set_taborder("61");
            obj.set_cssclass("searchDeptBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchDeptBtn");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("appStanMaskEd", "absolute", "56.4%", "396", null, "30", "34.4%", null, this);
            obj.set_taborder("62");
            obj.set_type("number");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("appCompareMaskEd", "absolute", "76.24%", "396", null, "30", "14.56%", null, this);
            obj.set_taborder("63");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 91, this.baseDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
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
            		p.set_classname("hs_payChangePresentForm");
            		p.set_titletext("HS_PayChangePresentForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HS_PayChangePresentForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HS_PayChangePresentForm.xfdl", "scripts::hrsScripts.xjs");
        this.registerScript("HS_PayChangePresentForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사 급/상여 변동현황 관리                           			*
        *                                                                   *
        * @Path		    급/상여 변동현황 관리      						*
        * @Description  기준급여연월과 비교급여연월의 조회조건별 		*
        				통계내역을 통해 변동사항 표시할 수 있다.		*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  10.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::hrsScripts.xjs";

        this.btnObj = '';

        //기준연월 지급일검색
        this.payDayBtn_onclick = function(obj,e){
        	var yearMonth = this.gijunYearSpin.text + this.monthCombo.text;
        	if(this.gijunYearSpin.text == '' || this.monthCombo.text == ''){
        		alert("귀속연월 선택 후 조회하십시오.");
        	}else if(this.gijunYearSpin.text == this.comYearSpin.text && this.monthCombo.text == this.monCombo.text){
        		alert("비교할 조건이 같습니다. 변경 후 조회하십시오.");
        	}else{
        		this.hrsOpenPaydayDialog(yearMonth);
        		this.btnObj = obj.name;
        	}
        }

        //비교연월 지급일검색
        this.compareBtn_onclick = function(obj,e){
        	var yearMonth = this.comYearSpin.text + this.monCombo.text;
        	if(this.comYearSpin.text == '' || this.monCombo.text == ''){
        		alert("귀속연월 선택 후 조회하십시오.");
        	}else if(this.gijunYearSpin.text == this.comYearSpin.text && this.monthCombo.text == this.monCombo.text){
        		alert("비교할 조건이 같습니다. 변경 후 조회하십시오.");
        	}else{
        		this.hrsOpenPaydayDialog(yearMonth);
        		this.btnObj = obj.name;
        	}
        }

        //코드셋팅
        this.setCode=function(code,arr){ 
        	if(code == "GP070"){
        		this.deptCdEd.set_value(arr[0]);
        		this.deptNmEd.set_value(arr[1]);
        	}else if(this.btnObj == 'payDayBtn'){
        		this.payDayEd.set_value(arr[0]);
        	}else{
        		this.compareEd.set_value(arr[0]);
        	}
        }

        //부서검색
        this.searchDeptBtn_onclick = function(obj,e){
        	this.gfnCodePopup("GP070");
        }

        //조회
        this.searchChangeSalBtn_onclick = function(obj,e){
        	this.dsSalEmp.clear();
        	this.dsPaym.clear();
        	this.dsDeduc.clear();

        	var belongYm = this.gijunYearSpin.text + this.monthCombo.text;
        	var compBelongYm = this.comYearSpin.text + this.monCombo.text;
        	var paymDate = this.payDayEd.text;
        	var compPaymDate = this.compareEd.text;
        	var deptNm = this.deptNmEd.text;
        	
        	if(paymDate == '' && compPaymDate== ''){
        		alert("지급일 선택 후 조회하십시오.");		
        	}else{		
        		this.dsService.setColumn(0,4,"belongYm="+belongYm+" compBelongYm="+compBelongYm
        								+" paymDate="+paymDate+" compPaymDate="+compPaymDate+" deptNm="+deptNm);
        		this.gfnService("findSalChangeList", false);
        		this.dsService.setColumn(1,4,"belongYm="+belongYm+" paymDate="+paymDate+" deptNm="+deptNm);
        		this.gfnService("findSalEmpList", false);
        		
        		//유효하지 않은 행 삭제한다.
        		this.gfnClearInvalidData(this.dsSalChange, "compShare");
        	}
        }

        this.empGrid_oncellclick = function(obj,e)
        {
        	var empNo = this.dsSalEmp.getColumn(this.empGrid.currentrow,"empNo");
        	var belongYm = this.gijunYearSpin.text + this.monthCombo.text;
        	var compBelongYm = this.comYearSpin.text + this.monCombo.text;
        	var paymDate = this.payDayEd.text;
        	var compPaymDate = this.compareEd.text;
        	
        	//alert(empNo+" "+belongYm+" "+compBelongYm+" "+paymDate+" "+compPaymDate);
        	
        	this.dsService.setColumn(2,4,"belongYm="+belongYm+" compBelongYm="+compBelongYm+" empNo="+empNo
        							+" paymDate="+paymDate+" compPaymDate="+compPaymDate);
        	this.gfnService("findPayDeduList");
        }

        this.salEmpCallbackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 1) {
        		trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
        		this.gfnErrorPopup(svcID, errorMsg);
        	} else {
        		// 트랜잭션 완료
        		trace("===== " + svcID + " 트랜잭션 성공 =====\n");
        		if(this.dsSalEmp.getRowCount() == 0){
        			alert("해당 조건에 검색된 데이터가 없습니다.");	
        		}
        	}
        }

        //지급공제 필터걸기
        this.payDeduCallbackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 1) {
        		trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
        		this.gfnErrorPopup(svcID, errorMsg);
        	} else {
                this.dsPayDedu.filter("paymDeducDiv == '지급'");
        		this.dsPaym.copyData(this.dsPayDedu,true);		
        		this.dsPayDedu.filter("paymDeducDiv == '공제'");
        		this.dsDeduc.copyData(this.dsPayDedu,true);
        		
        		//총지급액
        		var sum = 0; 
        		var comSum = 0; 
        		for(var i = 0; i < this.dsPaym.getRowCount(); i++){
        			if(i<this.dsPaym.getRowCount()){
        				var s = this.dsPaym.getColumn(i,"basicSal");
        				var ss = this.dsPaym.getColumn(i,"compSal");
        				sum += parseInt(s);
        				comSum += parseInt(ss);
        			}
        		}
        		
        		//총공제액
        		var sum1 = 0; 
        		var comSum1 = 0; 
        		for(var i = 0; i < this.dsDeduc.getRowCount(); i++){
        			if(i<this.dsDeduc.getRowCount()){
        				var s = this.dsDeduc.getColumn(i,"basicSal");
        				var ss = this.dsDeduc.getColumn(i,"compSal");
        				sum1 += parseInt(s);
        				comSum1 += parseInt(ss);
        			}
        		}
        		
        		var basicSal=sum-sum1;
        		var compSal=comSum-comSum1;
        				
        		this.appStanMaskEd.set_mask("###,###");
        		this.appStanMaskEd.set_value(basicSal);
        		this.appCompareMaskEd.set_mask("###,###");
        		this.appCompareMaskEd.set_value(compSal);		
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.comYearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.gijunYearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.searchChangeSalBtn.addEventHandler("onclick", this.searchChangeSalBtn_onclick, this);
            this.empGrid.addEventHandler("oncellclick", this.empGrid_oncellclick, this);
            this.payDayBtn.addEventHandler("onclick", this.payDayBtn_onclick, this);
            this.compareBtn.addEventHandler("onclick", this.compareBtn_onclick, this);
            this.searchDeptBtn.addEventHandler("onclick", this.searchDeptBtn_onclick, this);

        };

        this.loadIncludeScript("HS_PayChangePresentForm.xfdl");

       
    };
}
)();

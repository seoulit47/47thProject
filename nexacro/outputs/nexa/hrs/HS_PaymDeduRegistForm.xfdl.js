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
                this.set_name("HS_PaymDeduRegistForm");
                this.set_classname("hs_paymDeduRegistForm");
                this.set_titletext("HS_PaymDeduRegistForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPayDeduList</Col><Col id=\"URL\">his::hrs/salBase/findPayDeduList.do</Col><Col id=\"outData\">dsPayDedu=dsPayDedu dsPayDeduSect=dsPayDeduSect</Col><Col id=\"callbackFunc\">findPayDeduListCB</Col></Row><Row><Col id=\"serviceID\">magam</Col><Col id=\"URL\">his::hrs/salBase/magam.do</Col><Col id=\"inData\">dsPayDedu=dsPayDedu dsPayDeduSect=dsPayDeduSect</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">magamCancel</Col><Col id=\"URL\">his::hrs/salBase/magamCancel.do</Col><Col id=\"inData\">dsPayDedu=dsPayDedu dsPayDeduSect=dsPayDeduSect</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchPayDeduProcess</Col><Col id=\"URL\">his::hrs/salBase/batchPayDeduProcess.do</Col><Col id=\"inData\">dsPayDedu=dsPayDedu:u dsPayDeduSect=dsPayDeduSect:u</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSalGubun", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">급여</Col></Row><Row><Col id=\"value\">상여</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPayDeduGubun", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">지급</Col></Row><Row><Col id=\"value\">공제</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTaxGubun", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">과세</Col></Row><Row><Col id=\"value\">비과세</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsApplyItem", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">환경등록적용</Col></Row><Row><Col id=\"value\">정상적용</Col></Row><Row><Col id=\"value\">일할적용</Col></Row><Row><Col id=\"value\">미지급</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMonthSal", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">포함</Col></Row><Row><Col id=\"value\">제외</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYnGubun", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">분류</Col></Row><Row><Col id=\"value\">무분류</Col><Col id=\"code\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInOutApply", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">환경등록적용</Col></Row><Row><Col id=\"value\">정상적용</Col></Row><Row><Col id=\"value\">일할적용</Col></Row><Row><Col id=\"value\">미지급</Col></Row><Row><Col id=\"value\">미지급(입사자만)</Col></Row><Row><Col id=\"value\">미지급(퇴사자만)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPayDedu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"salDiv\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducDiv\" type=\"STRING\" size=\"256\"/><Column id=\"belongYear\" type=\"STRING\" size=\"256\"/><Column id=\"taxDiv\" type=\"STRING\" size=\"256\"/><Column id=\"probationApply\" type=\"STRING\" size=\"256\"/><Column id=\"inOutApply\" type=\"STRING\" size=\"256\"/><Column id=\"monthSal\" type=\"STRING\" size=\"256\"/><Column id=\"hireInsur\" type=\"STRING\" size=\"256\"/><Column id=\"divYn\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducCd\" type=\"STRING\" size=\"256\"/><Column id=\"divSectCd\" type=\"STRING\" size=\"256\"/><Column id=\"dicSectNm\" type=\"STRING\" size=\"256\"/><Column id=\"dline\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducNm\" type=\"STRING\" size=\"256\"/><Column id=\"taxType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPayDeduSect", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"paymDeducCd\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducNm\" type=\"STRING\" size=\"256\"/><Column id=\"divSectCd\" type=\"STRING\" size=\"256\"/><Column id=\"divSectCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"divCd\" type=\"STRING\" size=\"256\"/><Column id=\"divNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHangmok", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"paymDeducNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"paymDeducNm\">기본급</Col></Row><Row><Col id=\"paymDeducNm\">상여</Col></Row><Row><Col id=\"paymDeducNm\">자격수당</Col></Row><Row><Col id=\"paymDeducNm\">연장근로수당</Col></Row><Row><Col id=\"paymDeducNm\">식대보조비</Col></Row><Row><Col id=\"paymDeducNm\">야간근로수당</Col></Row><Row><Col id=\"paymDeducNm\">국민연금</Col></Row><Row><Col id=\"paymDeducNm\">건강보험</Col></Row><Row><Col id=\"paymDeducNm\">고용보험</Col></Row><Row><Col id=\"paymDeducNm\">장기요양보험료</Col></Row><Row><Col id=\"paymDeducNm\">소득세</Col></Row><Row><Col id=\"paymDeducNm\">주민세</Col></Row><Row><Col id=\"paymDeducNm\">농특세</Col></Row><Row><Col id=\"paymDeducNm\">사우회비</Col></Row><Row><Col id=\"paymDeducNm\">교통비</Col></Row><Row><Col id=\"paymDeducNm\">퇴직충당금</Col></Row><Row><Col id=\"paymDeducNm\">상여</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "4.8%", "4", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("급/상여 지급일자 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0%", "8", "1200", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "4", null, "60", "73.76%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("지급/공제항목 등록");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Static("belongStatic", "absolute", "2.64%", "80", null, "28", "87.76%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("귀속연월");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.24%", "69", null, "51", "1.68%", null, this);
            obj.set_taborder("4");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "50.88%", "80", null, "30", "530", null, this);
            obj.set_taborder("5");
            obj.set_value("2016");
            obj.getSetter("class").set("yearSpin");
            this.addChild(obj.name, obj);

            obj = new Static("yearStatic", "absolute", "57.68%", "80", null, "28", "40.56%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("년");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Button("searchPayDeduBtn", "absolute", "747", "80", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("searchPayDeduBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchPayDeduBtn");
            this.addChild(obj.name, obj);

            obj = new Static("slaStc", "absolute", "2.64%", "80", null, "28", "87.76%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("급여구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("deducCombo", "absolute", "31.84%", "80", null, "28", "60.16%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.style.set_background("transparent");
            obj.set_innerdataset("@dsPayDeduGubun");
            obj.set_datacolumn("value");
            obj.set_codecolumn("value");

            obj = new Static("deducStc", "absolute", "21.6%", "80", null, "28", "68.8%", null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("지급공제구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("belongStc", "absolute", "40.88%", "80", null, "28", "49.52%", null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("귀속년도");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("salCombo", "absolute", "12.8%", "80", null, "28", "79.2%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.style.set_background("transparent");
            obj.set_innerdataset("@dsSalGubun");
            obj.set_datacolumn("value");
            obj.set_codecolumn("value");

            obj = new Div("Div00", "absolute", "2.24%", "127", "1201", "627", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("#edececff");
            obj.style.set_border("0 none lightsteelblue");
            this.addChild(obj.name, obj);
            obj = new GroupBox("GroupBox00", "absolute", "35.64%", "16", "759", "555", null, null, this.Div00);
            obj.set_text("지급/공제항목설정");
            obj.set_taborder("1");
            obj.style.set_border("1 solid lightslategray");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("addPayDaduBtn", "absolute", "355", "656", "32", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("addPayDaduBtn");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("addPayDaduBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delPayDaduBtn", "absolute", "395", "656", "32", "32", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("delPayDaduBtn");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("delPayDaduBtn");
            this.addChild(obj.name, obj);

            obj = new Static("taxStc", "absolute", "40.8%", "184", null, "28", "49.6%", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("과세구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("taxCombo", "absolute", "51.04%", "184", null, "28", "37.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.style.set_background("transparent");
            obj.set_innerdataset("@dsTaxGubun");
            obj.set_datacolumn("value");
            obj.set_codecolumn("value");

            obj = new Static("taxTypeNmStc", "absolute", "40.8%", "216", null, "28", "49.6%", null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("과세유형");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("probationApplyStc", "absolute", "40.8%", "248", null, "28", "49.6%", null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("수습적용");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("probationApplyCombo", "absolute", "51.04%", "248", null, "28", "37.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.style.set_background("transparent");
            obj.set_innerdataset("@dsApplyItem");
            obj.set_datacolumn("value");
            obj.set_codecolumn("value");

            obj = new Static("monthSalStc", "absolute", "40.8%", "280", null, "28", "49.6%", null, this);
            obj.getSetter("taborder").set("24");
            obj.set_text("월정급여");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("monthSalCombo", "absolute", "51.04%", "280", null, "28", "37.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.style.set_background("transparent");
            obj.set_innerdataset("@dsMonthSal");
            obj.set_datacolumn("value");
            obj.set_codecolumn("value");

            obj = new Static("divYnStc", "absolute", "40.8%", "312", null, "28", "49.6%", null, this);
            obj.getSetter("taborder").set("26");
            obj.set_text("분류여부");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("divYnCombo", "absolute", "51.04%", "312", null, "28", "37.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.style.set_background("transparent");
            obj.set_innerdataset("@dsYnGubun");
            obj.set_datacolumn("value");
            obj.set_codecolumn("value");

            obj = new Static("inOutApplyStc", "absolute", "73.44%", "280", null, "28", "16.96%", null, this);
            obj.getSetter("taborder").set("30");
            obj.set_text("입퇴사자적용");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("hireInsurStc", "absolute", "73.44%", "312", null, "28", "16.96%", null, this);
            obj.getSetter("taborder").set("32");
            obj.set_text("고용보험(임금)");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("inOutApplyCombo", "absolute", "83.68%", "280", null, "28", "4.96%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.style.set_background("transparent");
            obj.set_innerdataset("@dsInOutApply");
            obj.set_datacolumn("value");
            obj.set_codecolumn("value");

            obj = new Static("divStc", "absolute", "40.8%", "372", null, "28", "49.6%", null, this);
            obj.getSetter("taborder").set("35");
            obj.set_text("분류항목");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("addPayDaduSectBtn", "absolute", "1099", "651", "32", "32", null, null, this);
            obj.set_taborder("36");
            obj.set_cssclass("addPayDaduSectBtn");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("addPayDaduSectBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delPayDaduSectBtn", "absolute", "1139", "651", "32", "32", null, null, this);
            obj.set_taborder("37");
            obj.set_cssclass("delPayDaduSectBtn");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("delPayDaduSectBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("taxTypeNmEd", "absolute", "51.04%", "216", null, "30", "37.76%", null, this);
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Button("searchTaxTypeBtn", "absolute", "779", "216", "32", "32", null, null, this);
            obj.set_taborder("42");
            obj.set_cssclass("searchTaxTypeBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchTaxTypeBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("paymDeducGrid", "absolute", "3.44%", "144", null, "501", "64.72%", null, this);
            obj.set_taborder("45");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPayDedu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"88\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"항목명\"/></Band><Band id=\"body\"><Cell text=\"bind:paymDeducCd\"/><Cell col=\"1\" text=\"bind:paymDeducNm\" combodataset=\"dsHangmok\" combocodecol=\"paymDeducNm\" combodatacol=\"paymDeducNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("paymDeducSectGrid", "absolute", "40.88%", "420", null, "222", "5.12%", null, this);
            obj.set_taborder("46");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPayDeduSect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류구분코드명\"/><Cell col=\"1\" text=\"분류코드\"/><Cell col=\"2\" text=\"분류명\"/><Cell col=\"3\" text=\"금액\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:divSectCdNm\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:divCd\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:divNm\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"normal\" text=\"bind:amt\" mask=\"###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("hireInsurEd", "absolute", "83.68%", "312", null, "30", "5.12%", null, this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Button("deducBatchBtn", "absolute", "776", "706", "110", "32", null, null, this);
            obj.set_taborder("48");
            obj.set_cssclass("deducBatchBtn");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("deducBatchBtn");
            this.addChild(obj.name, obj);

            obj = new Button("dlineBtn", "absolute", "892", "706", "90", "32", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("dlineBtn");
            obj.style.set_background("@gradation URL('img::dLineBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("dlineBtn");
            this.addChild(obj.name, obj);

            obj = new Button("dlineCancelBtn", "absolute", "988", "706", "110", "32", null, null, this);
            obj.set_taborder("50");
            obj.set_cssclass("dlineCancelBtn");
            obj.style.set_background("@gradation URL('img::dLineXBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("dlineCancelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("payDeduCancelBtn", "absolute", "1104", "706", "90", "32", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("payDeduCancelBtn");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("payDeduCancelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1201, 627, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.style.set_background("#edececff");
            		p.style.set_border("0 none lightsteelblue");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("hs_paymDeduRegistForm");
            		p.set_titletext("HS_PaymDeduRegistForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HS_PaymDeduRegistForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HS_PaymDeduRegistForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사 지급/공제항목 등록 관리                          			*
        *                                                                   *
        * @Path		    지급/공제항목 등록      							*
        * @Description  지급/공제항목 등록과 세부 설정을 할 수 있다.	*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  29.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";

        this.searchPaydayBtn_onclick = function(obj,e){
        	var salDiv = this.salCombo.text;
        	var payDeduDiv = this.deducCombo.text;	
        	var year = this.yearSpin.text;
        	
        	this.dsService.setColumn(0,4,"salDiv="+salDiv+" payDeduDiv="+payDeduDiv+" year="+year);
        	this.gfnService("findPayDeduList", false);
        	
        	var paymDeducCd = this.dsPayDedu.getColumn(0,"paymDeducCd");
        	this.dsPayDeduSect.filter(this.gfnLike("paymDeducCd", paymDeducCd));
        	
        	this.setValue(0);
        }

        this.findPayDeduListCB = function(svcID,errorCode,errorMsg){
        	if (errorCode < 1) {
        		trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
        		this.gfnErrorPopup(svcID, errorMsg);
        	} else {
        		// 트랜잭션 완료
        		trace("===== " + svcID + " 트랜잭션 성공 =====\n");
        		var dline = this.dsPayDedu.getColumn(this.paymDeducGrid.currentrow,"dline");
        		if(this.dsPayDedu.getRowCount() == 0){
        			alert("등록된 지급/공제 항목이 없습니다.");
        		}
        		
        		//해당연월의 지급공제항목이 마감되지 않은 상태
        		if( dline == 0 || dline == null){ 		
        			var code=true;
        			this.setBoolean(code);
        		}else{
        			var code=false;
        			this.setBoolean(code);
        		}
        	}
        }

        //버튼비활성화여부
        this.setBoolean=function(code){ 
        	this.taxCombo.set_enable(code); 					//과세구분	
        	this.taxTypeNmEd.set_enable(code); 					//과세유형
        	this.searchTaxTypeBtn.set_enable(code);  			//과세유형버튼
        	this.probationApplyCombo.set_enable(code);  		//수습적용
        	this.monthSalCombo.set_enable(code);				//월정급여
        	this.divYnCombo.set_enable(code);					//분류여부
        	this.inOutApplyCombo.set_enable(code);				//입퇴사자적용
        	this.hireInsurEd.set_enable(code);					//고용보험
        	this.dlineBtn.set_enable(code);
        	this.addPayDaduSectBtn.set_enable(code);
        	this.delPayDaduSectBtn.set_enable(code);
        	this.paymDeducSectGrid.set_enable(code);
        	this.addPayDaduBtn.set_enable(code);
        	this.delPayDaduBtn.set_enable(code);
        	this.deducBatchBtn.set_enable(code);	
        }

        this.paymDeducGrid_oncellclick = function(obj,e){
        	if(e.keycode!=113){	
        		if(this.dsPayDedu.getColumn(e.row, "paymDeducCd") == null){
        			if(this.deducCombo.text == "지급"){
        					this.gfnCodePopup("HS001");	
        			}else if(this.deducCombo.text == "공제"){				
        				this.gfnCodePopup("HS002");
        			}
        		}
        	}
        }

        //과세구분에 따른 활성화여부
        this.taxCombo_oncloseup = function(obj,e){
        	if(this.taxCombo.text == "비과세"){
        		this.searchTaxTypeBtn.set_enable(true);
        	}else{
        		this.searchTaxTypeBtn.set_enable(false);
        	}
        }

        //과세유형선택
        this.searchTaxTypeBtn_onclick = function(obj,e){
        	//수당구분
        	this.gfnCodePopup("GP127");
        }

        //payDedu add
        this.addPayDaduBtn_onclick = function(obj,e){
        	if(this.salCombo.text == "" && this.deducCombo.text == ""){
        		alert("조회 후 추가 하십시오.");
        	}else{
        		var aRow = this.dsPayDedu.addRow();
        		this.dsPayDedu.setColumn(aRow,"salDiv",this.salCombo.text);
        		this.dsPayDedu.setColumn(aRow,"paymDeducDiv",this.deducCombo.text);
        		this.dsPayDedu.setColumn(aRow,"belongYear",this.yearSpin.text);	
        	}
        }

        //코드셋팅
        this.setCode=function(code,arr){ 
        	if(code == "GP127"){
        		this.taxTypeNmEd.set_value(arr[0]+" "+arr[1]);
        	}else if(code == "HS003"){
        		this.dsPayDedu.setColumn(this.dsPayDedu.rowposition,"divSectCd",arr[0]);
        		this.dsPayDedu.setColumn(this.dsPayDedu.rowposition,"divSectCdNm",arr[1]);
        		this.dsPayDeduSect.setColumn(this.dsPayDeduSect.rowposition,"divSectCd",arr[0]);
        		this.dsPayDeduSect.setColumn(this.dsPayDeduSect.rowposition,"divSectCdNm",arr[1]);
        	}else if(code == "GP025"){
        		this.dsPayDedu.setColumn(this.dsPayDedu.rowposition,"divCd",arr[0]);
        		this.dsPayDedu.setColumn(this.dsPayDedu.rowposition,"divNm",arr[1]);	
        		this.dsPayDeduSect.setColumn(this.dsPayDeduSect.rowposition,"divCd",arr[0]);
        		this.dsPayDeduSect.setColumn(this.dsPayDeduSect.rowposition,"divNm",arr[1]);
        	}else{
        		this.dsPayDedu.setColumn(this.dsPayDedu.rowposition,"paymDeducCd",arr[0]);
        		this.dsPayDedu.setColumn(this.dsPayDedu.rowposition,"paymDeducNm",arr[1]);
        	}
        }

        //값셋팅
        this.setValue=function(row){ 
        	this.taxCombo.set_value(this.dsPayDedu.getColumn(row, "taxDiv")); 							//과세구분
        	this.taxTypeNmEd.set_value(this.dsPayDedu.getColumn(row, "taxType"));						//과세유형
        	this.probationApplyCombo.set_value(this.dsPayDedu.getColumn(row, "probationApply"));  		//수습적용
        	this.monthSalCombo.set_value(this.dsPayDedu.getColumn(row, "monthSal"));					//월정급여
        	this.divYnCombo.set_value(this.dsPayDedu.getColumn(row, "divYn"));							//분류여부
        	this.inOutApplyCombo.set_value(this.dsPayDedu.getColumn(row, "inOutApply"));				//입퇴사자적용
        	this.hireInsurEd.set_value(this.dsPayDedu.getColumn(row, "hireInsur"));						//고용보험		
        }

        //payDedu del
        this.delPayDaduBtn_onclick = function(obj,e){
        	this.dsPayDedu.deleteRow(this.paymDeducGrid.currentrow);
        }

        //구분그리드추가
        this.addPayDaduSectBtn_onclick = function(obj,e){
        	var divYn=this.divYnCombo.value;
        	if(this.salCombo.text == "" && this.deducCombo.text == ""){
        		alert("조회 후 추가 하십시오.");
        	}else if(divYn!="분류"){
        		alert("무분류항목입니다.");
        	}else{
        		this.dsPayDeduSect.addRow();
        		var paymDeducCd = this.dsPayDedu.getColumn(this.paymDeducGrid.currentrow,"paymDeducCd");
        		var paymDeducNm = this.dsPayDedu.getColumn(this.paymDeducGrid.currentrow,"paymDeducNm");
        		
        		this.dsPayDeduSect.setColumn(this.paymDeducSectGrid.currentrow,"paymDeducCd",paymDeducCd);
        		this.dsPayDeduSect.setColumn(this.paymDeducSectGrid.currentrow,"paymDeducNm",paymDeducNm);		
        	}
        }

        //구분그리드삭제
        this.delPayDaduSectBtn_onclick = function(obj,e){
        	this.dsPayDeduSect.deleteRow(this.paymDeducSectGrid.currentrow);
        }

        //구분그리드 코드팝업
        this.paymDeducSectGrid_onkeydown = function(obj,e){
        	var col=this.paymDeducSectGrid.getCellPos();
        	if(col == 0){
        		//지급공제분류구분
        		this.gfnCodePopup("HS003");
        	}else if(col == 1 || col == 2){
        		//자격/면허코드
        		this.gfnCodePopup("GP025");
        	}
        }

        //일괄처리
        this.deducBatchBtn_onclick = function(obj,e){
        	if(confirm("일괄처리 하시겠습니까?")){
        		this.dsPayDedu.setColumn(this.paymDeducGrid.currentrow,"taxDiv",this.taxCombo.text);
        		this.dsPayDedu.setColumn(this.paymDeducGrid.currentrow,"taxType",this.taxTypeNmEd.text);
        		this.dsPayDedu.setColumn(this.paymDeducGrid.currentrow,"probationApply",this.probationApplyCombo.text);
        		this.dsPayDedu.setColumn(this.paymDeducGrid.currentrow,"monthSal",this.monthSalCombo.text);
        		this.dsPayDedu.setColumn(this.paymDeducGrid.currentrow,"divYn",this.divYnCombo.text);
        		this.dsPayDedu.setColumn(this.paymDeducGrid.currentrow,"inOutApply",this.inOutApplyCombo.text);
        		this.dsPayDedu.setColumn(this.paymDeducGrid.currentrow,"hireInsur",this.hireInsurEd.text);
        	
        		if(this.deducCombo.text == "지급"){
        			if(this.taxCombo.text == ""){
        				alert("과세구분을 설정한 후 진행할 수 있습니다.");
        			}else{
        				this.gfnService("batchPayDeduProcess");
        			}
        		}else{
        			this.gfnService("batchPayDeduProcess");
        		}
        	}
        }

        //마감
        this.dlineBtn_onclick = function(obj,e){
        	if(confirm("변경된 정보를 저장 후 마감등록 하여주십시오.")){
        		if(confirm("해당연월에 등록된 지급/공제항목에 대한 마감을 등록하시겠습니까?")){
        			this.gfnService("magam");
        		}
        	}
        }

        //마감취소
        this.dlineCancelBtn_onclick = function(obj,e){
        	if(confirm("해당연월에 등록된 지급/공제항목에 대한 마감을 취소하시겠습니까?")){
        		this.gfnService("magamCancel");
        	}
        }

        //취소
        this.payDeduCancleBtn_onclick = function(obj,e){
        	if(confirm("작성중인 데이터는 저장되지 않습니다. 취소하시겠습니까?")){
        		this.reload();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.searchPayDeduBtn.addEventHandler("onclick", this.searchPaydayBtn_onclick, this);
            this.addPayDaduBtn.addEventHandler("onclick", this.addPayDaduBtn_onclick, this);
            this.delPayDaduBtn.addEventHandler("onclick", this.delPayDaduBtn_onclick, this);
            this.taxCombo.addEventHandler("oncloseup", this.taxCombo_oncloseup, this);
            this.addPayDaduSectBtn.addEventHandler("onclick", this.addPayDaduSectBtn_onclick, this);
            this.delPayDaduSectBtn.addEventHandler("onclick", this.delPayDaduSectBtn_onclick, this);
            this.searchTaxTypeBtn.addEventHandler("onclick", this.searchTaxTypeBtn_onclick, this);
            this.paymDeducGrid.addEventHandler("oncellclick", this.paymDeducGrid_oncellclick, this);
            this.paymDeducSectGrid.addEventHandler("onkeydown", this.paymDeducSectGrid_onkeydown, this);
            this.deducBatchBtn.addEventHandler("onclick", this.deducBatchBtn_onclick, this);
            this.dlineBtn.addEventHandler("onclick", this.dlineBtn_onclick, this);
            this.dlineCancelBtn.addEventHandler("onclick", this.dlineCancelBtn_onclick, this);
            this.payDeduCancelBtn.addEventHandler("onclick", this.payDeduCancleBtn_onclick, this);

        };

        this.loadIncludeScript("HS_PaymDeduRegistForm.xfdl");

       
    };
}
)();

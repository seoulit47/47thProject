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
                this.set_name("HS_SalaryCalculationForm");
                this.set_classname("HS_SalaryCalculationForm");
                this.set_titletext("HS_SalaryCalculationForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findSalCalList</Col><Col id=\"URL\">his::hrs/salMng/findSalCalList.do</Col><Col id=\"outData\">dsSalCalcul=dsSalCalcul dsPayDedu=dsPayDedu</Col><Col id=\"callbackFunc\">salCalculCB</Col></Row><Row><Col id=\"serviceID\">findSalCalSumList</Col><Col id=\"URL\">his::hrs/salMng/findSalCalSumList.do</Col><Col id=\"outData\">dsSalCalculSum=dsSalCalculSum</Col><Col id=\"callbackFunc\">salCalculCB</Col></Row><Row><Col id=\"serviceID\">salCalculationList</Col><Col id=\"URL\">his::hrs/salMng/salCalculationList.do</Col><Col id=\"inData\">dsSalCalcul=dsSalCalcul:u</Col><Col id=\"callbackFunc\">salCalculCB</Col></Row><Row><Col id=\"serviceID\">magamSalCalList</Col><Col id=\"URL\">his::hrs/salMng/magamSalCalList.do</Col><Col id=\"inData\"/><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">salCalculCB</Col></Row><Row><Col id=\"serviceID\">magamCancelSalCalList</Col><Col id=\"URL\">his::hrs/salMng/magamCancelSalCalList.do</Col><Col id=\"inData\"/><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">salCalculCB</Col></Row></Rows>");
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

            obj = new Dataset("dsSalCalcul", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"taxationTaxSum\" type=\"STRING\" size=\"256\"/><Column id=\"compShare\" type=\"STRING\" size=\"256\"/><Column id=\"aap\" type=\"STRING\" size=\"256\"/><Column id=\"belongYm\" type=\"STRING\" size=\"256\"/><Column id=\"dline\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobClass\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/><Column id=\"freeTaxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"calYn\" type=\"STRING\" size=\"256\"/><Column id=\"paymentDate\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPayDedu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"paymDeducDiv\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPaym", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"paymDeducDiv\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDeduc", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"paymDeducDiv\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSalCalculSum", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"taxationTaxSum\" type=\"STRING\" size=\"256\"/><Column id=\"freeTaxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"compShare\" type=\"STRING\" size=\"256\"/><Column id=\"gookmin\" type=\"STRING\" size=\"256\"/><Column id=\"goyoung\" type=\"STRING\" size=\"256\"/><Column id=\"gungang\" type=\"STRING\" size=\"256\"/><Column id=\"nongteuk\" type=\"STRING\" size=\"256\"/><Column id=\"sodeuk\" type=\"STRING\" size=\"256\"/><Column id=\"jibang\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmpInfo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"taxationTaxSum\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducCd\" type=\"STRING\" size=\"256\"/><Column id=\"aap\" type=\"STRING\" size=\"256\"/><Column id=\"belongYm\" type=\"STRING\" size=\"256\"/><Column id=\"dline\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobClass\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/><Column id=\"freeTaxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"calYn\" type=\"STRING\" size=\"256\"/><Column id=\"paymentDate\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"compShare\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTotalInfo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"taxationTaxSum\" type=\"STRING\" size=\"256\"/><Column id=\"compShare\" type=\"STRING\" size=\"256\"/><Column id=\"gookmin\" type=\"STRING\" size=\"256\"/><Column id=\"goyoung\" type=\"STRING\" size=\"256\"/><Column id=\"gungang\" type=\"STRING\" size=\"256\"/><Column id=\"nongteuk\" type=\"STRING\" size=\"256\"/><Column id=\"sodeuk\" type=\"STRING\" size=\"256\"/><Column id=\"jibang\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComShare", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"belongYm\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducDiv\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducCd\" type=\"STRING\" size=\"256\"/><Column id=\"paymDeducNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"compShare\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "8", "1200", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "2.24%", "168", "1201", "586", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#edececff");
            obj.style.set_border("0 none lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.24%", "69", null, "91", "1.68%", null, this);
            obj.set_taborder("4");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Grid("empGrid", "absolute", "3.28%", "174", null, "374", "65.52%", null, this);
            obj.set_taborder("12");
            obj.set_binddataset("dsSalCalcul");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"20\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\"/><Cell col=\"2\" text=\"사원코드\"/><Cell col=\"3\" text=\"사원명\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:select\"/><Cell col=\"2\" text=\"bind:empNo\"/><Cell col=\"3\" text=\"bind:empNm\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"인원\"/><Cell col=\"3\" expr=\"expr:dataset.getRowCount()+&quot;명&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("paymGrid", "absolute", "34.32%", "181", null, "374", "34.48%", null, this);
            obj.set_taborder("13");
            obj.set_binddataset("dsPaym");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"지급항목\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:paymDeducNm\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:amt\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"지급합계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;parseInt(amt)&quot;)\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("deducGrid", "absolute", "66%", "174", null, "247", "2.8%", null, this);
            obj.set_taborder("14");
            obj.set_binddataset("dsDeduc");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공제항목\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:paymDeducNm\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:amt\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"공제합계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;parseInt(amt)&quot;)\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("compShareGrid", "absolute", "66%", "424", null, "124", "2.8%", null, this);
            obj.set_taborder("15");
            obj.set_binddataset("dsComShare");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"회사부담금항목\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"사회보험부담금\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:compShare\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"회사부담금합계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;parseInt(compShare)&quot;)\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("infoTab", "absolute", "3.44%", "557", null, "187", "2.88%", null, this);
            obj.set_taborder("16");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("empInfo", this.infoTab);
            obj.set_text("개인정보");
            this.infoTab.addChild(obj.name, obj);
            obj = new Static("Stc", "absolute", "2.4%", "18", null, "28", "88.02%", null, this.infoTab.empInfo);
            obj.getSetter("taborder").set("0");
            obj.set_text("사업장");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Static("Stc00", "absolute", "2.48%", "66", null, "28", "87.94%", null, this.infoTab.empInfo);
            obj.getSetter("taborder").set("1");
            obj.set_text("부서");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Static("Stc01", "absolute", "2.48%", "114", null, "28", "87.94%", null, this.infoTab.empInfo);
            obj.getSetter("taborder").set("2");
            obj.set_text("직종");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Edit("workTypeEd", "absolute", "12.32%", "114", null, "30", "76.48%", null, this.infoTab.empInfo);
            obj.set_taborder("3");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Edit("deptNmEd", "absolute", "12.32%", "66", null, "30", "76.48%", null, this.infoTab.empInfo);
            obj.set_taborder("4");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Edit("hosNmEd", "absolute", "12.32%", "18", null, "30", "76.48%", null, this.infoTab.empInfo);
            obj.set_taborder("5");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Static("Stc02", "absolute", "25.66%", "18", null, "28", "64.76%", null, this.infoTab.empInfo);
            obj.getSetter("taborder").set("6");
            obj.set_text("급여형태");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Static("Stc03", "absolute", "25.66%", "66", null, "28", "64.76%", null, this.infoTab.empInfo);
            obj.getSetter("taborder").set("7");
            obj.set_text("입사일자");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Static("Stc04", "absolute", "25.66%", "115", null, "28", "64.76%", null, this.infoTab.empInfo);
            obj.getSetter("taborder").set("8");
            obj.set_text("퇴사일자");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new MaskEdit("retMaskEd", "absolute", "35.5%", "115", null, "30", "53.38%", null, this.infoTab.empInfo);
            obj.set_taborder("9");
            obj.set_mask("####-##-##");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new MaskEdit("hireMaskEd", "absolute", "35.5%", "66", null, "30", "53.38%", null, this.infoTab.empInfo);
            obj.set_taborder("10");
            obj.set_mask("####-##-##");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Edit("salTypeEdt", "absolute", "35.5%", "18", null, "30", "53.38%", null, this.infoTab.empInfo);
            obj.set_taborder("11");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Static("Stc05", "absolute", "48.85%", "18", null, "28", "41.57%", null, this.infoTab.empInfo);
            obj.getSetter("taborder").set("12");
            obj.set_text("과세총액");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Static("Stc06", "absolute", "48.85%", "66", null, "28", "41.57%", null, this.infoTab.empInfo);
            obj.getSetter("taborder").set("13");
            obj.set_text("비과세신고분");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Static("Stc07", "absolute", "48.85%", "115", null, "28", "41.57%", null, this.infoTab.empInfo);
            obj.getSetter("taborder").set("14");
            obj.set_text("회사부담금");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new MaskEdit("comMaskEd", "absolute", "58.68%", "115", null, "30", "30.2%", null, this.infoTab.empInfo);
            obj.set_taborder("15");
            obj.set_mask("###,###,###");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new MaskEdit("freeTaxMaskEd", "absolute", "58.68%", "66", null, "30", "30.2%", null, this.infoTab.empInfo);
            obj.set_taborder("16");
            obj.set_mask("###,###,###");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new MaskEdit("taxMaskEd", "absolute", "58.68%", "18", null, "30", "30.2%", null, this.infoTab.empInfo);
            obj.set_taborder("17");
            obj.set_mask("###,###,###");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Static("Stc08", "absolute", "72.03%", "18", null, "28", "18.48%", null, this.infoTab.empInfo);
            obj.getSetter("taborder").set("18");
            obj.set_text("차인지급액");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new MaskEdit("aapMaskEd", "absolute", "81.86%", "18", null, "30", "7.1%", null, this.infoTab.empInfo);
            obj.set_taborder("19");
            obj.set_mask("###,###,###");
            this.infoTab.empInfo.addChild(obj.name, obj);
            obj = new Tabpage("totalInfo", this.infoTab);
            obj.set_text("급여총액");
            this.infoTab.addChild(obj.name, obj);
            obj = new Static("Stc08", "absolute", "48.67%", "114", null, "28", "41.75%", null, this.infoTab.totalInfo);
            obj.getSetter("taborder").set("0");
            obj.set_text("소득세");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new MaskEdit("nongMaskEd", "absolute", "58.68%", "67", null, "30", "30.2%", null, this.infoTab.totalInfo);
            obj.set_taborder("1");
            obj.set_mask("###,###,###");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new MaskEdit("gunMaskEd", "absolute", "58.68%", "18", null, "30", "30.2%", null, this.infoTab.totalInfo);
            obj.set_taborder("2");
            obj.set_mask("###,###,###");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new MaskEdit("goMaskEd", "absolute", "35.41%", "114", null, "30", "53.46%", null, this.infoTab.totalInfo);
            obj.set_taborder("3");
            obj.set_mask("###,###,###");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new Static("Stc05", "absolute", "25.58%", "114", null, "28", "64.84%", null, this.infoTab.totalInfo);
            obj.getSetter("taborder").set("4");
            obj.set_text("고용보험");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new Static("Stc06", "absolute", "48.85%", "18", null, "28", "41.57%", null, this.infoTab.totalInfo);
            obj.getSetter("taborder").set("5");
            obj.set_text("건강보험");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new Static("Stc07", "absolute", "48.85%", "67", null, "28", "41.57%", null, this.infoTab.totalInfo);
            obj.getSetter("taborder").set("6");
            obj.set_text("농특세");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new MaskEdit("goonMaskEd", "absolute", "35.5%", "67", null, "30", "53.38%", null, this.infoTab.totalInfo);
            obj.set_taborder("7");
            obj.set_mask("###,###,###");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new MaskEdit("comMaskEd", "absolute", "35.5%", "18", null, "30", "53.38%", null, this.infoTab.totalInfo);
            obj.set_taborder("8");
            obj.set_mask("###,###,###");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new Static("Stc03", "absolute", "25.66%", "18", null, "28", "64.76%", null, this.infoTab.totalInfo);
            obj.getSetter("taborder").set("11");
            obj.set_text("회사부담금");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new Static("Stc04", "absolute", "25.66%", "67", null, "28", "64.76%", null, this.infoTab.totalInfo);
            obj.getSetter("taborder").set("12");
            obj.set_text("국민연금");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new Static("Stc01", "absolute", "2.48%", "114", null, "28", "87.94%", null, this.infoTab.totalInfo);
            obj.getSetter("taborder").set("13");
            obj.set_text("비과세");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new Edit("countMaskEd", "absolute", "12.32%", "18", null, "30", "76.48%", null, this.infoTab.totalInfo);
            obj.set_taborder("16");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new Static("Stc", "absolute", "2.48%", "18", null, "28", "87.94%", null, this.infoTab.totalInfo);
            obj.getSetter("taborder").set("17");
            obj.set_text("총인원");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new Static("Stc00", "absolute", "2.48%", "66", null, "28", "87.94%", null, this.infoTab.totalInfo);
            obj.getSetter("taborder").set("18");
            obj.set_text("과세");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new MaskEdit("soMaskEd", "absolute", "58.6%", "114", null, "30", "30.37%", null, this.infoTab.totalInfo);
            obj.set_taborder("19");
            obj.set_mask("###,###,###");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new MaskEdit("taxMaskEd", "absolute", "12.32%", "66", null, "30", "76.56%", null, this.infoTab.totalInfo);
            obj.set_taborder("20");
            obj.set_mask("###,###,###");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new MaskEdit("freeTaxMaskEd", "absolute", "12.32%", "114", null, "30", "76.56%", null, this.infoTab.totalInfo);
            obj.set_taborder("21");
            obj.set_mask("###,###,###");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new Static("Stc09", "absolute", "71.94%", "18", null, "28", "18.48%", null, this.infoTab.totalInfo);
            obj.getSetter("taborder").set("22");
            obj.set_text("지방세");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.infoTab.totalInfo.addChild(obj.name, obj);
            obj = new MaskEdit("jiMaskEd", "absolute", "81.86%", "18", null, "30", "7.1%", null, this.infoTab.totalInfo);
            obj.set_taborder("23");
            obj.set_mask("###,###,###");
            this.infoTab.totalInfo.addChild(obj.name, obj);

            obj = new Static("belongStc", "absolute", "2.56%", "120", null, "28", "87.84%", null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("귀속연월");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "12.4%", "120", null, "30", "1018", null, this);
            obj.set_taborder("18");
            obj.set_value("2016");
            obj.getSetter("class").set("yearSpin");
            this.addChild(obj.name, obj);

            obj = new Combo("monthCombo", "absolute", "20.08%", "121", null, "28", "74.64%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_innerdataset("dsMonth");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.style.set_background("transparent");

            obj = new Static("comStc", "absolute", "27.92%", "121", null, "28", "63.36%", null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("지급일");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("payDayEd", "absolute", "37.12%", "121", null, "28", "53.68%", null, this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Button("paydayBtn", "absolute", "581", "120", "32", "32", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("paydayBtn");
            this.addChild(obj.name, obj);

            obj = new Static("deptStc", "absolute", "50.32%", "121", null, "28", "40.96%", null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("직종");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("deptCdEd", "absolute", "59.52%", "121", null, "28", "34.4%", null, this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Button("searchDeptBtn", "absolute", "822", "120", "32", "32", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchDeptBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("deptNmEd", "absolute", "68.64%", "121", null, "28", "22.8%", null, this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Button("searchSalCalculBtn", "absolute", "985", "121", "90", "32", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("searchSalCalculBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchSalCalculBtn");
            this.addChild(obj.name, obj);

            obj = new Static("monthStatic", "absolute", "25.28%", "121", null, "28", "72.88%", null, this);
            obj.getSetter("taborder").set("28");
            obj.set_text("월");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Static("yearStatic", "absolute", "18.48%", "121", null, "28", "79.76%", null, this);
            obj.getSetter("taborder").set("29");
            obj.set_text("년");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "4", null, "60", "76.96%", null, this);
            obj.getSetter("taborder").set("30");
            obj.set_text("급여입력 및 계산");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Button("calculationSalBtn", "absolute", "881", "80", "110", "32", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("calculationSalBtn");
            obj.style.set_background("@gradation URL('img::sallBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("calculationSalBtn");
            this.addChild(obj.name, obj);

            obj = new Button("dlineBtn", "absolute", "998", "80", "90", "32", null, null, this);
            obj.set_taborder("32");
            obj.set_cssclass("dlineBtn");
            obj.style.set_background("@gradation URL('img::dLineBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("dlineBtn");
            this.addChild(obj.name, obj);

            obj = new Button("dlineCancelBtn", "absolute", "1095", "80", "110", "32", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("dlineCancelBtn");
            obj.style.set_background("@gradation URL('img::dLineXBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("dlineCancelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1200, 60, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar4.jpg')");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1201, 586, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("#edececff");
            		p.style.set_border("0 none lightsteelblue");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 91, this.baseDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.baseDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.infoTab.empInfo,
            	//-- Layout function
            	function(p) {
            		p.set_text("개인정보");

            	}
            );
            this.infoTab.empInfo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.infoTab.totalInfo,
            	//-- Layout function
            	function(p) {
            		p.set_text("급여총액");

            	}
            );
            this.infoTab.totalInfo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HS_SalaryCalculationForm");
            		p.set_titletext("HS_SalaryCalculationForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","infoTab.empInfo.salTypeEdt","value","dsPaym","paymDeducNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","infoTab.empInfo.hireMaskEd","value","dsEmpInfo","hireDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","infoTab.empInfo.retMaskEd","value","dsEmpInfo","retDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","infoTab.empInfo.taxMaskEd","value","dsEmpInfo","taxationTaxSum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","infoTab.empInfo.freeTaxMaskEd","value","dsEmpInfo","freeTaxAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","infoTab.empInfo.comMaskEd","value","dsEmpInfo","compShare");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","infoTab.empInfo.aapMaskEd","value","dsEmpInfo","aap");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","infoTab.totalInfo.taxMaskEd","value","dsTotalInfo","taxationTaxSum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","infoTab.totalInfo.freeTaxMaskEd","value","dsEmpInfo","freeTaxAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","infoTab.totalInfo.comMaskEd","value","dsEmpInfo","compShare");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","infoTab.totalInfo.goonMaskEd","value","dsTotalInfo","gookmin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","infoTab.totalInfo.goMaskEd","value","dsTotalInfo","goyoung");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","infoTab.totalInfo.gunMaskEd","value","dsTotalInfo","gungang");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","infoTab.totalInfo.nongMaskEd","value","dsTotalInfo","nongteuk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","infoTab.totalInfo.soMaskEd","value","dsTotalInfo","sodeuk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","infoTab.totalInfo.jiMaskEd","value","dsTotalInfo","jibang");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","infoTab.empInfo.deptNmEd","value","dsEmpInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","infoTab.empInfo.workTypeEd","value","dsEmpInfo","jobClass");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HS_SalaryCalculationForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HS_SalaryCalculationForm.xfdl", "scripts::hrsScripts.xjs");
        this.registerScript("HS_SalaryCalculationForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사 급여입력 및 계산 관리                        				*
        *                                                                   *
        * @Path		    급여입력 및 계산      							*
        * @Description  급/상여지급일자 관리에서 생성된 사원들을  		*
        				조회하여 계산 수정 작업을 할 수 있다.			*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  29.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::hrsScripts.xjs";

        var belongYm, paymDate, deptNm;

        //지급일조회
        this.paydayBtn_onclick = function(obj,e){
        	var yearMonth = this.yearSpin.text + this.monthCombo.text;
        	if(this.yearSpin.text == "" || this.monthCombo.text == ""){
        		alert("귀속연월 선택 후 조회하십시오.");
        	}else{
        		this.hrsOpenPaydayDialog(yearMonth);
        	}
        }

        //코드셋팅
        this.setCode=function(code,arr){ 
        	if(code == "GP070"){
        		this.deptCdEd.set_value(arr[0]);
        		this.deptNmEd.set_value(arr[1]);
        	}else{
        		this.payDayEd.set_value(arr[0]);
        	}
        }

        //직종조회
        this.searchDeptBtn_onclick = function(obj,e){
        	this.gfnCodePopup("GP070");
        }

        //조회
        this.searchSalCalculBtn_onclick = function(obj,e){
        	this.dsPayDedu.clearData();
        	this.dsPaym.clearData();
        	this.dsPayDedu.clearData();
        	this.dsDeduc.clearData();
        	this.dsComShare.clearData();
        	this.dsEmpInfo.clearData();
        	this.dsTotalInfo.clearData();
        	
        	if(this.payDayEd.text == ""){
        		alert("지급일자를 설정하십시오.");
        	}else{
        		belongYm = this.yearSpin.text + this.monthCombo.text;
        		paymDate = this.payDayEd.text;
        		deptNm = this.deptNmEd.text;
        		
        		var row = this.dsService.findRow('serviceID' , "findSalCalList");
        		this.dsService.setColumn(row,4,"belongYm="+belongYm+" paymDate="+paymDate+" deptNm="+deptNm);
        		this.gfnService("findSalCalList", false);		
        		
        		this.infoTab.empInfo.hosNmEd.set_value("");	
        		this.infoTab.totalInfo.countMaskEd.set_value("");
        	}
        }

        //사원선택
        this.empGrid_oncellclick = function(obj,e){
        	var empNo = this.dsSalCalcul.getColumn(this.empGrid.currentrow,"empNo");
        	
        	this.dsService.setColumn(1,4,"belongYm="+belongYm+" paymDate="+paymDate+" deptNm="+deptNm+" empNo="+empNo);
        	this.gfnService("findSalCalSumList", false);
        			
        	var calYn = this.dsSalCalcul.getColumn(this.empGrid.currentrow,"calYn");
        	var dline = this.dsSalCalcul.getColumn(this.empGrid.currentrow,"dline");
        	if(calYn == "Y" && dline == 1){
        		this.dlineBtn.set_enable(false);
        		this.dlineCancelBtn.set_enable(true);
        		this.calculationSalBtn.set_enable(false);				
        		this.dataCopy(empNo);				
        	}else if(dline == 0){
        		this.dlineBtn.set_enable(true);
        		this.dlineCancelBtn.set_enable(false);
        		this.calculationSalBtn.set_enable(true);		
        		this.dataCopy(empNo);
        	}
        }

        //데이터복사
        this.dataCopy = function(empNo){	
        	this.dsPayDedu.filter("empNo=='"+empNo+"' && paymDeducDiv=='지급'");
        	this.dsPaym.copyData(this.dsPayDedu,true);
        	this.dsPayDedu.filter("empNo=='"+empNo+"' && paymDeducDiv=='공제'");
        	this.dsDeduc.copyData(this.dsPayDedu,true);	
        	this.dsComShare.copyData(this.dsSalCalculSum,true);
        	
        	//infoTab셋팅
        	this.dsSalCalcul.filter("empNo=='"+empNo+"'");
        	this.dsEmpInfo.copyData(this.dsSalCalcul,true);
        	this.dsTotalInfo.copyData(this.dsSalCalculSum,true);
        			
        	this.infoTab.empInfo.hosNmEd.set_value("서울병원");	
        	this.dsSalCalcul.filter("");
        	this.infoTab.totalInfo.countMaskEd.set_value(this.dsSalCalcul.getRowCount()+"명");
        }

        //급여계산
        this.calculationSalBtn_onclick = function(obj,e){
        	var aleadyCalcul =	false;
        	var aleadyMagam = false
        	//체크된 사원 배열로 보낸다.
        	empArr = new Array; 
        	var arrIndex = 0;
        	//체크된 사원만 보낸다.
        	for(var i=0; i<this.dsSalCalcul.getRowCount(); i++){
        		var select = this.dsSalCalcul.getColumn(i,"select");
        		if(select == 1){
        			empArr[arrIndex++] = this.dsSalCalcul.getColumn(i,"empNo");
        		}
        	}
        		
        	if(arrIndex == 0){
        		alert("체크된 사원이 존재하지 않습니다.");
        	}else{			
        		var year=this.yearSpin.text;
        		if(confirm("해당사원의 급여계산을 진행하시겠습니까?")){
        			var argument="belongYm='"+belongYm+"' empNo='"+empArr+"' year='"+year+"' paymentDate='"+paymDate+"'";
        			var row = this.dsService.findRow('serviceID' , "salCalculationList");
        			this.dsService.setColumn(row,"argument", argument);
        			this.gfnService("salCalculationList");
        		}
        	}
        }

        this.salCalculCB = function(svcID,errorCode,errorMsg){
        	if (errorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
              this.gfnErrorPopup(svcID, errorMsg);
        	}else{
        		// 트랜잭션 완료
        		trace("===== " + svcID + " 트랜잭션 성공 =====\n");
        		if(this.dsSalCalcul.getRowCount() == 0 && this.dsSalCalculSum.getRowCount() == 0){
        			alert("해당연월에 조회된 급여데이터가 없습니다.");
        		}
        		if(svcID == "salCalculationList"){
        			alert("급여계산이 완료되었습니다.");
        		}
        	}
        }

        //마감취소
        this.dlineCancelBtn_onclick = function(obj,e){
        	if(confirm("마감취소하시겠습니까?")){
        		if(this.monthCombo.text == null){
        			alert("급여달을 선택해주세요");
        		}else{
        			//체크된 사원 배열로 보낸다.
        			var empArr = new Array; 
        			var arrIndex = 0;
        			//체크된 사원만 보낸다.
        			for(var i=0; i<this.dsSalCalcul.getRowCount(); i++){
        				var select = this.dsSalCalcul.getColumn(i,"select");
        				if(select == 1){
        					empArr[arrIndex++] = this.dsSalCalcul.getColumn(i,"empNo");
        				}
        			}
        			
        			if(arrIndex == 0){
        					alert("체크된 사원이 존재하지 않습니다.");
        			}
        									
        			var argument="belongYm='"+belongYm+"' empNo='"+empArr+"'";
        			var row = this.dsService.findRow('serviceID' , "magamCancelSalCalList");
        			this.dsService.setColumn(row,"argument", argument);
        			this.gfnService("magamCancelSalCalList");
        		}
        	}	
        }

        //마감
        this.dlineBtn_onclick = function(obj,e){
        	if(confirm("마감하시겠습니까?")){
        		var empArr = new Array; 
        			var arrIndex = 0;
        			//체크된 사원만 보낸다.
        			for(var i=0; i<this.dsSalCalcul.getRowCount(); i++){
        				var select = this.dsSalCalcul.getColumn(i,"select");
        				if(select == 1){
        					empArr[arrIndex++] = this.dsSalCalcul.getColumn(i,"empNo");
        				}
        			}
        			
        			if(arrIndex == 0){
        					alert("체크된 사원이 존재하지 않습니다.");
        			}
        			
        		var row = this.dsService.findRow('serviceID' , "magamSalCalList");
        		this.dsService.setColumn(row,"argument","belongYm='"+belongYm+"' empNo='"+empArr+"'");
        		this.gfnService("magamSalCalList");
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.empGrid.addEventHandler("oncellclick", this.empGrid_oncellclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.paydayBtn.addEventHandler("onclick", this.paydayBtn_onclick, this);
            this.searchDeptBtn.addEventHandler("onclick", this.searchDeptBtn_onclick, this);
            this.searchSalCalculBtn.addEventHandler("onclick", this.searchSalCalculBtn_onclick, this);
            this.calculationSalBtn.addEventHandler("onclick", this.calculationSalBtn_onclick, this);
            this.dlineBtn.addEventHandler("onclick", this.dlineBtn_onclick, this);
            this.dlineCancelBtn.addEventHandler("onclick", this.dlineCancelBtn_onclick, this);

        };

        this.loadIncludeScript("HS_SalaryCalculationForm.xfdl");

       
    };
}
)();

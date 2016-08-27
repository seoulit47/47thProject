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
                this.set_name("HY_YtaResultForm");
                this.set_classname("HY_YtaResultForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findHyYtaResultList</Col><Col id=\"URL\">his::hrs/yeta/findHyYtaResultList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsHyYtaResult=dsHyYtaResult</Col></Row><Row><Col id=\"serviceID\">findEmpInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsHmEmp=gdsEmp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callback</Col></Row></Rows>");
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

            obj = new Dataset("dsEmpType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">정규직</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">별정직</Col></Row><Row><Col id=\"data\">기타</Col><Col id=\"code\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHyYtaResult", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"belongYear\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"preTotalSalary\" type=\"STRING\" size=\"256\"/><Column id=\"rwYearTaxationTotal\" type=\"STRING\" size=\"256\"/><Column id=\"decidedTaxIncomeAmt\" type=\"STRING\" size=\"256\"/><Column id=\"decidedTaxLocalAmt\" type=\"STRING\" size=\"256\"/><Column id=\"paidIncomeTaxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"paidLocalIncomeTaxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"balIncomeTaxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"balLocalTaxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"dependentCnt\" type=\"STRING\" size=\"256\"/><Column id=\"senior70yearoverDdt\" type=\"STRING\" size=\"256\"/><Column id=\"handicappedPersonDdt\" type=\"STRING\" size=\"256\"/><Column id=\"womanDdt\" type=\"STRING\" size=\"256\"/><Column id=\"singleParentDdt\" type=\"STRING\" size=\"256\"/><Column id=\"perosnalDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"nationalPensionAmt\" type=\"STRING\" size=\"256\"/><Column id=\"etcPensionAmt\" type=\"STRING\" size=\"256\"/><Column id=\"pensionDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"insuranceDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"housingFundDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"housingLeaseDebtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"mbsDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"mbsRepaymentPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"mbsRate\" type=\"STRING\" size=\"256\"/><Column id=\"mbsRepaymentType\" type=\"STRING\" size=\"256\"/><Column id=\"housingSubDepositAmt\" type=\"STRING\" size=\"256\"/><Column id=\"personalPensionAmt\" type=\"STRING\" size=\"256\"/><Column id=\"creditcardDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"tmDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"ptDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"debitDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"cashReceiptDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"cardddtExceptDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"addDdtUsedDdtAmt1\" type=\"STRING\" size=\"256\"/><Column id=\"addDdtUsedDdtAmt2\" type=\"STRING\" size=\"256\"/><Column id=\"creditcardEtcDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"smallBusinessDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"invAssociationDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"invVentureDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"empSharePensionDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"mesbwDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"nrsliDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"lssDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"ddtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"specialDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"incomeDdtTotalOverAmt\" type=\"STRING\" size=\"256\"/><Column id=\"incomeTaxationStandard\" type=\"STRING\" size=\"256\"/><Column id=\"calTaxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"sbeDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"earnedIncomeTaxDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"childTaxDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"pensionTotalDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"guaranteedInsuranceDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"guaranteedInsuranceDdt\" type=\"STRING\" size=\"256\"/><Column id=\"guaranteedHandicappedDdt\" type=\"STRING\" size=\"256\"/><Column id=\"medicalCostDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"eduCostDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"eduOwnCostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"eduUnder20CostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"eduOver20CostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"eduHandicappedCostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"donationDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"donationPfDdt\" type=\"STRING\" size=\"256\"/><Column id=\"donationCourtDdt\" type=\"STRING\" size=\"256\"/><Column id=\"donationEsoaDdt\" type=\"STRING\" size=\"256\"/><Column id=\"donationReligionDdt\" type=\"STRING\" size=\"256\"/><Column id=\"donationDesignatedDdt\" type=\"STRING\" size=\"256\"/><Column id=\"taxAssociationDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"housingLeaseDdt\" type=\"STRING\" size=\"256\"/><Column id=\"foreignPaymentDdt\" type=\"STRING\" size=\"256\"/><Column id=\"monthlyRentDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"specialTaxDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"standardTaxDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"taxDdtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"cutoffFlag\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "0", "1250", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("            연말정산 결과 조회");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("belongYearStc", "absolute", "0.72%", "8.59%", null, "3.26%", "92.24%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("정산년도");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "9.6%", "8.72%", null, "3.39%", "84.24%", null, this);
            obj.set_taborder("2");
            obj.set_value("2015");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Combo("hireTypeCombo", "absolute", "8.96%", "13.67%", null, "3.39%", "83.84%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_value("0");
            obj.set_text("전체");
            obj.set_innerdataset("@dsEmpType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_index("0");

            obj = new Static("belongYearStc00", "absolute", "0.4%", "13.54%", null, "3.39%", "92.56%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("고용구분");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "2.8%", "18.62%", null, "3.26%", "84.08%", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("SearchBtn");
            obj.getSetter("class").set("SearchBtn");
            obj.set_text("고용구분별 전체조회");
            this.addChild(obj.name, obj);

            obj = new Grid("empGrid", "absolute", "0.64%", "29.17%", null, "70.57%", "82.4%", null, this);
            obj.set_taborder("6");
            obj.set_binddataset("dsHmEmp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"사원명\"/></Band><Band id=\"body\"><Cell text=\"bind:empNo\"/><Cell col=\"1\" text=\"bind:empNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("belongYearStc01", "absolute", "18.24%", "9.11%", null, "3.39%", "74.72%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("기본공제");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("basicDdtGrid", "absolute", "18.56%", "12.89%", null, "37.11%", "61.12%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsHyYtaResult");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공제항목\"/><Cell col=\"1\" text=\"공제개수\"/></Band><Band id=\"body\"><Cell text=\"본인\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:center middle;font:10 맑은고딕;\" text=\"1\"/><Cell row=\"1\" text=\"부양가족\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:dependentCnt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("belongYearStc02", "absolute", "18.56%", "50.78%", null, "3.39%", "74.4%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("추가공제");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("additionalDdtGrid", "absolute", "18.56%", "55.21%", null, "20.05%", "61.12%", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("dsHyYtaResult");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공제항목\"/><Cell col=\"1\" text=\"공제수\"/></Band><Band id=\"body\"><Cell text=\"경로우대(70세이상)\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:senior70yearoverDdt\"/><Cell row=\"1\" text=\"장애인\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:handicappedPersonDdt\"/><Cell row=\"2\" text=\"부녀자\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:womanDdt\"/><Cell row=\"3\" text=\"한부모\"/><Cell row=\"3\" col=\"1\" displaytype=\"number\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:singleParentDdt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("belongYearStc03", "absolute", "18.56%", "76.43%", null, "3.39%", "74.4%", null, this);
            obj.getSetter("taborder").set("11");
            obj.set_text("연금보험료공제");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("pensionDdtGrid", "absolute", "18.56%", "80.86%", null, "18.75%", "61.12%", null, this);
            obj.set_taborder("12");
            obj.set_binddataset("dsHyYtaResult");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공제항목\"/><Cell col=\"1\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"국민연금\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:nationalPensionAmt\"/><Cell row=\"1\" text=\"기타연금\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:etcPensionAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("belongYearStc04", "absolute", "40.96%", "8.85%", null, "3.39%", "52%", null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("특별소득공제");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("specialDdtGrid", "absolute", "40.4%", "12.76%", null, "20.05%", "28.32%", null, this);
            obj.set_taborder("14");
            obj.set_binddataset("dsHyYtaResult");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"230\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"공제항목\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"보험료\"/><Cell col=\"1\" text=\"건강,고용,노인 보험료\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" text=\"bind:nationalPensionAmt\"/><Cell row=\"1\" rowspan=\"2\" text=\"주택&#13;&#10;자금공제\"/><Cell row=\"1\" col=\"1\" text=\"주택임차차입금 원리금상환액\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"none\" text=\"bind:housingLeaseDdt\"/><Cell row=\"2\" col=\"1\" text=\"장기주택저당차입금 이자상환액\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"none\" text=\"bind:mbsDdtAmt\"/><Cell row=\"3\" colspan=\"2\" text=\"계\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" edittype=\"none\" text=\"bind:insuranceDdtAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("belongYearStc05", "absolute", "40.4%", "34.77%", null, "3.39%", "51.36%", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("그 밖의 소득공제");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("etcDdtGrid", "absolute", "40.32%", "40.63%", null, "59.11%", "28.4%", null, this);
            obj.set_taborder("16");
            obj.set_binddataset("dsHyYtaResult");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"220\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공제항목\"/><Cell col=\"1\" text=\"공제개수\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell colspan=\"2\" text=\"개인연금저축\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:personalPensionAmt\"/><Cell row=\"1\" colspan=\"2\" text=\"주택마련저축\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" text=\"bind:housingSubDepositAmt\"/><Cell row=\"2\" colspan=\"2\" text=\"신용카드 등 사용공제금액\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" text=\"bind:creditcardEtcDdtAmt\"/><Cell row=\"3\" rowspan=\"7\" text=\"기타&#13;&#10;공제항목\"/><Cell row=\"3\" col=\"1\" text=\"소기업·소상공인 공제부금\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" text=\"bind:smallBusinessDdtAmt\"/><Cell row=\"4\" col=\"1\" text=\"투자조합 출자공제\"/><Cell row=\"4\" col=\"2\" displaytype=\"number\" text=\"bind:invAssociationDdtAmt\"/><Cell row=\"5\" col=\"1\" text=\"우리사주출연금소득공제\"/><Cell row=\"5\" col=\"2\" displaytype=\"number\" text=\"bind:empSharePensionDdtAmt\"/><Cell row=\"6\" col=\"1\" text=\"우리사주조합기부금\"/><Cell row=\"6\" col=\"2\" displaytype=\"number\" text=\"bind:donationEsoaDdt\"/><Cell row=\"7\" col=\"1\" text=\"고용유지 중소기업 근로자\"/><Cell row=\"7\" col=\"2\" displaytype=\"number\" text=\"bind:mesbwDdtAmt\"/><Cell row=\"8\" col=\"1\" text=\"목돈 안드는 전세 이자상환액\"/><Cell row=\"8\" col=\"2\" displaytype=\"number\" text=\"bind:nrsliDdtAmt\"/><Cell row=\"9\" col=\"1\" text=\"장기집합투자증권저축\"/><Cell row=\"9\" col=\"2\" displaytype=\"number\" text=\"bind:lssDdtAmt\"/><Cell row=\"10\" colspan=\"2\" text=\"소득공제 종합한도 초과액\"/><Cell row=\"10\" col=\"2\" displaytype=\"number\" text=\"bind:incomeDdtTotalOverAmt\"/><Cell row=\"11\" colspan=\"2\" text=\"종합소득과세표준\"/><Cell row=\"11\" col=\"2\" displaytype=\"number\" text=\"bind:incomeTaxationStandard\"/><Cell row=\"12\" colspan=\"2\" text=\"산출세액\"/><Cell row=\"12\" col=\"2\" displaytype=\"number\" text=\"bind:calTaxAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("belongYearStc06", "absolute", "75.52%", "8.85%", null, "3.39%", "17.44%", null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("세액공제");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("rdtGrid", "absolute", "72.32%", "12.76%", null, "55.21%", "0.96%", null, this);
            obj.set_taborder("18");
            obj.set_binddataset("dsHyYtaResult");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"140\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"12\"/><Row size=\"12\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"12\"/><Row size=\"12\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"공제항목\"/><Cell col=\"3\" text=\"금액\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" text=\"감면&#13;&#10;세액\"/><Cell col=\"1\" colspan=\"2\" text=\"소득세법\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" text=\"조세특례&#13;&#10;제한법\"/><Cell row=\"1\" col=\"2\" text=\"중소기업 취업자\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:sbeDdtAmt\"/><Cell row=\"2\" col=\"2\" text=\"외국인 기술자 등\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" edittype=\"none\"/><Cell row=\"3\" rowspan=\"19\" text=\"세액&#13;&#10;공제\"/><Cell row=\"3\" col=\"1\" colspan=\"2\" text=\"근로소득세액공제\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:earnedIncomeTaxDdtAmt\"/><Cell row=\"4\" col=\"1\" colspan=\"2\" text=\"자녀세액공제\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:childTaxDdtAmt\"/><Cell row=\"5\" col=\"1\" rowspan=\"2\" colspan=\"2\" text=\"연금계좌세액공제\"/><Cell row=\"5\" col=\"3\" rowspan=\"2\" displaytype=\"number\" edittype=\"none\" text=\"bind:pensionTotalDdtAmt\"/><Cell row=\"7\" col=\"1\" rowspan=\"10\" text=\"특별&#13;&#10;세액&#13;&#10;공제\"/><Cell row=\"7\" col=\"2\" text=\"보장성보험료\"/><Cell row=\"7\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:guaranteedInsuranceDdtAmt\"/><Cell row=\"8\" col=\"2\" text=\"의료비\"/><Cell row=\"8\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:medicalCostDdtAmt\"/><Cell row=\"9\" col=\"2\" text=\"교육비\"/><Cell row=\"9\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:eduCostDdtAmt\"/><Cell row=\"10\" col=\"2\" rowspan=\"2\" text=\"정치자금기부금\"/><Cell row=\"10\" col=\"3\" rowspan=\"2\" displaytype=\"number\" edittype=\"none\" text=\"bind:donationPfDdt\"/><Cell row=\"12\" col=\"2\" text=\"법정기부금\"/><Cell row=\"12\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:donationCourtDdt\"/><Cell row=\"13\" col=\"2\" text=\"지정기부금\"/><Cell row=\"13\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:donationDesignatedDdt\"/><Cell row=\"14\" col=\"2\" text=\"기부금세액공제계\"/><Cell row=\"14\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:donationDdtAmt\"/><Cell row=\"15\" col=\"2\" text=\"특별세액공제계\"/><Cell row=\"15\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:specialTaxDdtAmt\"/><Cell row=\"16\" col=\"2\" text=\"표준세액공제\"/><Cell row=\"16\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:standardTaxDdtAmt\"/><Cell row=\"17\" col=\"1\" colspan=\"2\" text=\"납세조합공제\"/><Cell row=\"17\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:taxAssociationDdtAmt\"/><Cell row=\"18\" col=\"1\" colspan=\"2\" text=\"주택차입금\"/><Cell row=\"18\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:housingLeaseDdt\"/><Cell row=\"19\" col=\"1\" colspan=\"2\" text=\"외국납부\"/><Cell row=\"19\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:foreignPaymentDdt\"/><Cell row=\"20\" col=\"1\" colspan=\"2\" text=\"월세액\"/><Cell row=\"20\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:monthlyRentDdtAmt\"/><Cell row=\"21\" col=\"1\" colspan=\"2\" text=\"세액공제계\"/><Cell row=\"21\" col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:taxDdtAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("belongYearStc07", "absolute", "72.24%", "70.18%", null, "3.39%", "20.88%", null, this);
            obj.getSetter("taborder").set("19");
            obj.set_text("세액공제");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("paidTaxGrid", "absolute", "72.24%", "74.61%", null, "25%", "0.96%", null, this);
            obj.set_taborder("20");
            obj.set_binddataset("dsHyYtaResult");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공제항목\"/><Cell col=\"1\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"결정세액\"/><Cell col=\"1\" displaytype=\"number\" text=\"bind:decidedTaxIncomeAmt\"/><Cell row=\"1\" text=\"기납부세액\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" text=\"bind:paidIncomeTaxAmt\"/><Cell row=\"2\" text=\"차감징수세액\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" text=\"bind:balIncomeTaxAmt\"/><Cell row=\"3\" text=\"차감지방소득세\"/><Cell row=\"3\" col=\"1\" displaytype=\"number\" text=\"bind:balLocalTaxAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchEmpBtn", "absolute", "2.16%", "180", null, "22", "84.08%", null, this);
            obj.set_taborder("21");
            obj.set_text("사원개인별 조회");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HY_YtaResultForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HY_YtaResultForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HY_YtaResultForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 공통 스트립트관리                                                          	*
        *                                                                               *
        * @Path		    hrs-HY_ExcuteYtaForm                   	                        *
        * @Description 	연말정산 결과조회									   	        *
        * @Author	    황태경					                                		*
        * 									                                            *
        * Created on 2016. 6.1                             		                        *
        *									                                            *
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";

        var belongYear;
        var hireType;
        var empNo;
        this.HY_YtaResultForm_onload = function(obj,e)
        {
        	belongYear = this.yearSpin.value;
        	
        	
        }

        this.empGrid_oncellclick = function(obj,e)
        {
        	
        	var currentRow = this.empGrid.currentrow;
        	this.searchResultYta(currentRow);
        	
        }

        this.searchBtn_onclick = function(obj,e)
        {
        	belongYear = this.yearSpin.value;
        	hireType = this.hireTypeCombo.text;

        	var argument = "hireDiv="+hireType;
        	this.dsService.setColumn(1, "argument", argument);
        	if(hireType=="전체"){
        		this.dsService.setColumn(1, "argument", "");
        	}
        	this.gfnService("findEmpInfo");
        }
        this.callback = function(svcID,errorCode,errorMsg){

        	if(svcID == "findEmpInfo"){

        		this.searchResultYta(0);
        	
        	} 
        	
        }
        this.searchResultYta = function(row) {
        	empNo = this.dsHmEmp.getColumn(row, "empNo");
        	
        	belongYear = this.yearSpin.value;
        	var argument = "empNo="+empNo+" belongYear="+belongYear;
        	this.dsService.setColumn(0, "argument", argument);
        	this.gfnService("findHyYtaResultList");
        }
        this.searchEmpBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("HM_EmpSearchPopup","hrs","");
        }

        this.setEmpInfo = function(arrRtn ){

        	
        	var argument = "empNo="+arrRtn[0];
        	this.dsService.setColumn(1, "argument", argument);
        	this.gfnService("findEmpInfo");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHmEmp.addEventHandler("onrowposchanged", this.ds_emp_onrowposchanged, this);
            this.addEventHandler("onload", this.HY_YtaResultForm_onload, this);
            this.belongYearStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.belongYearStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.empGrid.addEventHandler("oncellclick", this.empGrid_oncellclick, this);
            this.belongYearStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.belongYearStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.belongYearStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.belongYearStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.belongYearStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.belongYearStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.belongYearStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchEmpBtn.addEventHandler("onclick", this.searchEmpBtn_onclick, this);

        };

        this.loadIncludeScript("HY_YtaResultForm.xfdl");

       
    };
}
)();

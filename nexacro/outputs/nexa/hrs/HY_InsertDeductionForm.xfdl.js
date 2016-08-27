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
                this.set_name("HY_InsertDeductionForm");
                this.set_classname("HY_InsertDeductionForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHyDeductionData", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"spouseDdt\" type=\"STRING\" size=\"256\"/><Column id=\"linAscDdt\" type=\"STRING\" size=\"256\"/><Column id=\"linDescChdDdt\" type=\"STRING\" size=\"256\"/><Column id=\"sibilingDdt\" type=\"STRING\" size=\"256\"/><Column id=\"pensionerDdt\" type=\"STRING\" size=\"256\"/><Column id=\"foChdDdt\" type=\"STRING\" size=\"256\"/><Column id=\"senior70yearoverDdt\" type=\"STRING\" size=\"256\"/><Column id=\"handicappedPersonDdt\" type=\"STRING\" size=\"256\"/><Column id=\"womanDdt\" type=\"STRING\" size=\"256\"/><Column id=\"singleParentDdt\" type=\"STRING\" size=\"256\"/><Column id=\"nationalPensionDdt\" type=\"STRING\" size=\"256\"/><Column id=\"publicOfficialPensionDdt\" type=\"STRING\" size=\"256\"/><Column id=\"militaryPensionDdt\" type=\"STRING\" size=\"256\"/><Column id=\"privateSchoolDdt\" type=\"STRING\" size=\"256\"/><Column id=\"specialPostofficeDdt\" type=\"STRING\" size=\"256\"/><Column id=\"healthInsuranceDdt\" type=\"STRING\" size=\"256\"/><Column id=\"empInsuranceDdt\" type=\"STRING\" size=\"256\"/><Column id=\"housingLeaseDebtDdt\" type=\"STRING\" size=\"256\"/><Column id=\"mbsUnder15yearDdt\" type=\"STRING\" size=\"256\"/><Column id=\"mbs15to29yearDdt\" type=\"STRING\" size=\"256\"/><Column id=\"mbsOver30yearDdt\" type=\"STRING\" size=\"256\"/><Column id=\"mbsFrmDdt\" type=\"STRING\" size=\"256\"/><Column id=\"mbsEtcDdt\" type=\"STRING\" size=\"256\"/><Column id=\"personalPensionDdt\" type=\"STRING\" size=\"256\"/><Column id=\"subDepositDdt\" type=\"STRING\" size=\"256\"/><Column id=\"empHmlDdt\" type=\"STRING\" size=\"256\"/><Column id=\"housingSubDepositDdt\" type=\"STRING\" size=\"256\"/><Column id=\"creditcardDdt\" type=\"STRING\" size=\"256\"/><Column id=\"cashReceiptDdt\" type=\"STRING\" size=\"256\"/><Column id=\"debitcardDdt\" type=\"STRING\" size=\"256\"/><Column id=\"tradMarketDdt\" type=\"STRING\" size=\"256\"/><Column id=\"publicTransportationDdt\" type=\"STRING\" size=\"256\"/><Column id=\"own2013CreditcardUsedDdt\" type=\"STRING\" size=\"256\"/><Column id=\"own2014CreditcardUsedDdt\" type=\"STRING\" size=\"256\"/><Column id=\"own2013AdditionalDdt\" type=\"STRING\" size=\"256\"/><Column id=\"own2014SecondHalfDdt\" type=\"STRING\" size=\"256\"/><Column id=\"smallBusinessDdt\" type=\"STRING\" size=\"256\"/><Column id=\"inv2012AssociationDdt\" type=\"STRING\" size=\"256\"/><Column id=\"inv2013AssociationDdt\" type=\"STRING\" size=\"256\"/><Column id=\"inv2014AssociationDdt\" type=\"STRING\" size=\"256\"/><Column id=\"empSharePensionDdt\" type=\"STRING\" size=\"256\"/><Column id=\"empShareDonationDdt\" type=\"STRING\" size=\"256\"/><Column id=\"sbeSalaryDdt\" type=\"STRING\" size=\"256\"/><Column id=\"noMokdonHousingDdt\" type=\"STRING\" size=\"256\"/><Column id=\"longtermSavingStockDdt\" type=\"STRING\" size=\"256\"/><Column id=\"incomeTaxLawDdt\" type=\"STRING\" size=\"256\"/><Column id=\"sbeDdt\" type=\"STRING\" size=\"256\"/><Column id=\"sbcOwnWorkingPersonDdt\" type=\"STRING\" size=\"256\"/><Column id=\"foreignTechnicianDdt\" type=\"STRING\" size=\"256\"/><Column id=\"taxTreatyDdt\" type=\"STRING\" size=\"256\"/><Column id=\"earnedIncomeTaxDdtAuto\" type=\"STRING\" size=\"256\"/><Column id=\"chdTaxDdt\" type=\"STRING\" size=\"256\"/><Column id=\"scientistDdt\" type=\"STRING\" size=\"256\"/><Column id=\"retirementPensionDdt\" type=\"STRING\" size=\"256\"/><Column id=\"annuitySavingDdt\" type=\"STRING\" size=\"256\"/><Column id=\"guaranteedInsuranceDdt\" type=\"STRING\" size=\"256\"/><Column id=\"guaranteedHandicappedDdt\" type=\"STRING\" size=\"256\"/><Column id=\"ownMedicalCostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"medical65overCostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"etcMedicalCostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"medicalOwnCostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"medicalBasicCostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"eduOwnCostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"familyEduCostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"eduHandicappedCostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"eduCostTotal\" type=\"STRING\" size=\"256\"/><Column id=\"eduCostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"campaigningDonationDdt\" type=\"STRING\" size=\"256\"/><Column id=\"legalDonationDdtLast\" type=\"STRING\" size=\"256\"/><Column id=\"legalDonationDdt\" type=\"STRING\" size=\"256\"/><Column id=\"chaTrustDonationDdtLast\" type=\"STRING\" size=\"256\"/><Column id=\"chaTrustDonationDdt\" type=\"STRING\" size=\"256\"/><Column id=\"empSharePensionDonationDdt\" type=\"STRING\" size=\"256\"/><Column id=\"desDonationDdtLast\" type=\"STRING\" size=\"256\"/><Column id=\"desDonationDdt\" type=\"STRING\" size=\"256\"/><Column id=\"desDonationReligionDdtLast\" type=\"STRING\" size=\"256\"/><Column id=\"desDonationReligionDdt\" type=\"STRING\" size=\"256\"/><Column id=\"standardTaxDdtAuto\" type=\"STRING\" size=\"256\"/><Column id=\"taxAssociationDdt\" type=\"STRING\" size=\"256\"/><Column id=\"housingLeaseDdt\" type=\"STRING\" size=\"256\"/><Column id=\"foreignIncomeDdt\" type=\"STRING\" size=\"256\"/><Column id=\"foreignPaymentDdt\" type=\"STRING\" size=\"256\"/><Column id=\"monthlyRentDdt\" type=\"STRING\" size=\"256\"/><Column id=\"belongYear\" type=\"STRING\" size=\"256\"/><Column id=\"cutoffFlag\" type=\"STRING\" size=\"256\"/><Column id=\"seniorLongtermDdt\" type=\"STRING\" size=\"256\"/><Column id=\"mbsRepaymentType\" type=\"STRING\" size=\"256\"/><Column id=\"mbsRepaymentPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"mbsDdt\" type=\"STRING\" size=\"256\"/><Column id=\"housingFundDdt\" type=\"STRING\" size=\"256\"/><Column id=\"mbsRate\" type=\"STRING\" size=\"256\"/><Column id=\"adu2014Amt\" type=\"STRING\" size=\"256\"/><Column id=\"adu2015FhyAmt\" type=\"STRING\" size=\"256\"/><Column id=\"adu2015ShyAmt\" type=\"STRING\" size=\"256\"/><Column id=\"adu2013Amt\" type=\"STRING\" size=\"256\"/><Column id=\"inv2015AssociationDdt\" type=\"STRING\" size=\"256\"/><Column id=\"inv2013VentureDdt\" type=\"STRING\" size=\"256\"/><Column id=\"inv2014VentureDdt\" type=\"STRING\" size=\"256\"/><Column id=\"inv2015VentureDdt\" type=\"STRING\" size=\"256\"/><Column id=\"mesbwDdt\" type=\"STRING\" size=\"256\"/><Column id=\"nrsliDdt\" type=\"STRING\" size=\"256\"/><Column id=\"sbeDdtRate\" type=\"STRING\" size=\"256\"/><Column id=\"childUnder6Ddt\" type=\"STRING\" size=\"256\"/><Column id=\"childBirthAdoptDdt\" type=\"STRING\" size=\"256\"/><Column id=\"eduUnder20CostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"eduOver20CostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"eduOver20Cnt\" type=\"STRING\" size=\"256\"/><Column id=\"eduUnder20Cnt\" type=\"STRING\" size=\"256\"/><Column id=\"medicalHandicappedCostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"medicalIgCostDdt\" type=\"STRING\" size=\"256\"/><Column id=\"housingDepositWorkerDdt\" type=\"STRING\" size=\"256\"/><Column id=\"medicalInfertilityCostDdt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHyDependent", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"regiNo\" type=\"STRING\" size=\"256\"/><Column id=\"basicDdt\" type=\"STRING\" size=\"256\"/><Column id=\"womenDdt\" type=\"STRING\" size=\"256\"/><Column id=\"handicappedPersonDdt\" type=\"STRING\" size=\"256\"/><Column id=\"singleParentDdt\" type=\"STRING\" size=\"256\"/><Column id=\"senior70yearoverDdt\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"belongYear\" type=\"STRING\" size=\"256\"/><Column id=\"relationGubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHyCreditcard", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"occGubun\" type=\"STRING\" size=\"256\"/><Column id=\"creditcardAmt\" type=\"INT\" size=\"256\"/><Column id=\"cashReceiptAmt\" type=\"INT\" size=\"256\"/><Column id=\"debitcardAmt\" type=\"INT\" size=\"256\"/><Column id=\"trdMarketAmt\" type=\"INT\" size=\"256\"/><Column id=\"publicTransportationAmt\" type=\"INT\" size=\"256\"/><Column id=\"regiNo\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHyDependentMedical", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"occGubun\" type=\"STRING\" size=\"256\"/><Column id=\"medicalProofCode\" type=\"STRING\" size=\"256\"/><Column id=\"medicalCompanyName\" type=\"STRING\" size=\"256\"/><Column id=\"medicalGubun\" type=\"STRING\" size=\"256\"/><Column id=\"medicalAmt\" type=\"STRING\" size=\"256\"/><Column id=\"regiNo\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHyDependentDonation", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"occGubun\" type=\"STRING\" size=\"256\"/><Column id=\"donationType\" type=\"STRING\" size=\"256\"/><Column id=\"donationDate\" type=\"STRING\" size=\"256\"/><Column id=\"donationCompanyName\" type=\"STRING\" size=\"256\"/><Column id=\"donationAmt\" type=\"STRING\" size=\"256\"/><Column id=\"regiNo\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHyFormerCompany", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"crNumber\" type=\"STRING\" size=\"256\"/><Column id=\"companyName\" type=\"STRING\" size=\"256\"/><Column id=\"totalSalary\" type=\"STRING\" size=\"256\"/><Column id=\"bonus\" type=\"STRING\" size=\"256\"/><Column id=\"deemedBonus\" type=\"STRING\" size=\"256\"/><Column id=\"etcTaxFree\" type=\"STRING\" size=\"256\"/><Column id=\"nationalPension\" type=\"STRING\" size=\"256\"/><Column id=\"healthInsurance\" type=\"STRING\" size=\"256\"/><Column id=\"empInsurance\" type=\"STRING\" size=\"256\"/><Column id=\"totalDonation\" type=\"STRING\" size=\"256\"/><Column id=\"desDonation\" type=\"STRING\" size=\"256\"/><Column id=\"workingIncomeTax\" type=\"STRING\" size=\"256\"/><Column id=\"incomeTax\" type=\"STRING\" size=\"256\"/><Column id=\"residenceTax\" type=\"STRING\" size=\"256\"/><Column id=\"totalIncome\" type=\"STRING\" size=\"256\"/><Column id=\"totalDdt\" type=\"STRING\" size=\"256\"/><Column id=\"totalTax\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRateType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">fixed</Col><Col id=\"data\">고정식</Col></Row><Row><Col id=\"code\">non-fixed</Col><Col id=\"data\">비고정식</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findHyDeductionData</Col><Col id=\"URL\">his::hrs/yeta/findHyDeductionData.do</Col><Col id=\"outData\">dsHyDeductionData=dsHyDeductionData dsHyDependent=dsHyDependent dsHyDependentInsurance=dsHyDependentInsurance dsHyCreditcard=dsHyCreditcard dsHyDependentMedical=dsHyDependentMedical dsHyDependentEducation=dsHyDependentEducation dsHyDependentDonation=dsHyDependentDonation dsHyFormerCompany=dsHyFormerCompany</Col><Col id=\"callbackFunc\">callback_findHyDeductionData</Col><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">batchHyDeductionData</Col><Col id=\"URL\">his::hrs/yeta/batchHyDeductionData.do</Col><Col id=\"inData\">dsHyDeductionData=dsHyDeductionData:U dsHyDependent=dsHyDependent:U dsHyDependentInsurance=dsHyDependentInsurance:U dsHyCreditcard=dsHyCreditcard:U dsHyDependentMedical=dsHyDependentMedical:U dsHyDependentEducation=dsHyDependentEducation:U dsHyDependentDonation=dsHyDependentDonation:U dsHyFormerCompany=dsHyFormerCompany:U</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHyDependentInsurance", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"occGubun\" type=\"STRING\" size=\"256\"/><Column id=\"insuranceName\" type=\"STRING\" size=\"256\"/><Column id=\"guaranteedInsuranceAmt\" type=\"STRING\" size=\"256\"/><Column id=\"handicappedInsuranceAmt\" type=\"STRING\" size=\"256\"/><Column id=\"regiNo\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHyDependentEducation", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"occGubun\" type=\"STRING\" size=\"256\"/><Column id=\"eduGubun\" type=\"STRING\" size=\"256\"/><Column id=\"eduAmt\" type=\"STRING\" size=\"256\"/><Column id=\"regiNo\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRepaymentType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"mbsRepaymentType\" type=\"STRING\" size=\"256\"/><Column id=\"displayText\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"mbsRepaymentType\">deferment</Col><Col id=\"displayText\">거치식</Col></Row><Row><Col id=\"mbsRepaymentType\">non-deferment</Col><Col id=\"displayText\">비거치식</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "0", "1250", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            obj.set_text("            연말정산 실행");
            this.addChild(obj.name, obj);

            obj = new Div("topDiv", "absolute", "0%", "7.29%", null, "5.34%", "0.16%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.04%", "10", null, "23", "93.82%", null, this.topDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("사원번호");
            this.topDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "18.82%", "7", null, "23", "76.07%", null, this.topDiv);
            obj.getSetter("taborder").set("1");
            obj.set_text("사원명");
            this.topDiv.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "41.65%", "7", null, "23", "53.21%", null, this.topDiv);
            obj.getSetter("taborder").set("2");
            obj.set_text("귀속년도");
            this.topDiv.addChild(obj.name, obj);
            obj = new Spin("yearSpin", "absolute", "47.11%", "4", null, "30", "39.97%", null, this.topDiv);
            obj.set_taborder("3");
            obj.set_value("2015");
            obj.set_max("2100");
            obj.set_min("1900");
            this.topDiv.addChild(obj.name, obj);
            obj = new Button("executeYtaBtn", "absolute", "91.57%", "6", null, "32", "0.64%", null, this.topDiv);
            obj.set_taborder("4");
            obj.set_text("연말정산 실행");
            this.topDiv.addChild(obj.name, obj);
            obj = new Button("batchBtn", "absolute", "82.74%", "4", null, "30", "9.15%", null, this.topDiv);
            obj.set_taborder("5");
            obj.set_text("일괄처리");
            this.topDiv.addChild(obj.name, obj);

            obj = new Edit("empNoEd", "absolute", "6.72%", "61", null, "30", "82.08%", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("empNameEd", "absolute", "22.4%", "61", null, "30", "66.4%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("searchEmpBtn", "absolute", "428", "61", "32", "32", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchYetaBtn", "absolute", "760", "62", "32", "32", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "-0.08%", "13.67%", null, "85.03%", "0.32%", null, this);
            obj.set_taborder("8");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Tab("deductionTab", "absolute", "0.8%", "11", null, "628", "0.48%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.Div00.addChild(obj.name, obj);
            obj = new Tabpage("perosnalDdtTP", this.Div00.deductionTab);
            obj.set_text("인적공제");
            this.Div00.deductionTab.addChild(obj.name, obj);
            obj = new Grid("basicDdtGrid", "absolute", "0.41%", "7.62%", null, "39.57%", "0.49%", null, this.Div00.deductionTab.perosnalDdtTP);
            obj.set_taborder("0");
            obj.set_binddataset("dsHyDeductionData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"90\"/><Column size=\"61\"/><Column size=\"890\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"64\"/><Row size=\"64\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"공제항목\"/><Cell col=\"2\" style=\"font:10 맑은고딕;\" text=\"공제수\"/><Cell col=\"3\" text=\"요약 설명 및 공제 조건\"/></Band><Band id=\"body\"><Cell colspan=\"2\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"배우자\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:spouseDdt\"/><Cell col=\"3\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 근로자의 배우자가 연간 소득금액이 없거나 연간 소득금액의 합계액이 100만원 이하인 경우 연 150만원을 공제\"/><Cell row=\"1\" rowspan=\"5\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"부양가족공제\"/><Cell row=\"1\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"직계존속\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:linAscDdt\"/><Cell row=\"1\" col=\"3\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 만 60세 이상 (1955.12.31. 이전 출생)\"/><Cell row=\"2\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"직계비속\"/><Cell row=\"2\" col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:linDescChdDdt\"/><Cell row=\"2\" col=\"3\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 만 20세 이하 (1995.1.1. 이후 출생)\"/><Cell row=\"3\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"형제자매\"/><Cell row=\"3\" col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:sibilingDdt\"/><Cell row=\"3\" col=\"3\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 만 20세 이하 (1995.1.1. 이후 출생) 또는 만 60세 이상 (1955.12.31. 이전 출생)\"/><Cell row=\"4\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"수급자\"/><Cell row=\"4\" col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:pensionerDdt\"/><Cell row=\"4\" col=\"3\" rowspan=\"2\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - ｢국민기초생활보장법｣ 제2조 제2호의 수급자&#13;&#10; - 직계비속 또는 입양자와 그 배우자가 모두 쟁애인에 해당하는 경우 그 배우자&#13;&#10; - 「아동복지법」에 따른 가정위탁을 받아 양육하는 아동으로서 해당 과세기간에 6개월 이상 직접 양육한 위탁아동&#13;&#10;(만 18세 미만, 1998.1.1 이후 출생)&#13;&#10;다만, 직전 과세기간에 소득공제를 받지 아니한 경우에는 해당 위탁아동에 대한 직접 과세기간의 위탁기간을 포함하&#13;&#10;여 계산한다.\"/><Cell row=\"5\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"위탁아동\"/><Cell row=\"5\" col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:foChdDdt\"/></Band></Format></Formats>");
            this.Div00.deductionTab.perosnalDdtTP.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "16.61%", "45.86%", "83.31%", "8.11%", null, null, this.Div00.deductionTab.perosnalDdtTP);
            obj.getSetter("taborder").set("1");
            obj.set_text("단, 부양가족은 연간 소득금액의 합계액이 100만원(근로소득만 있는 자는 총급여 500만원) 이하인 경우에 해당하며 한명당 연 150만원을 공제한다");
            this.Div00.deductionTab.perosnalDdtTP.addChild(obj.name, obj);
            obj = new Grid("additionalDdtGrid", "absolute", "0.65%", "60.1%", null, "37.42%", "0.73%", null, this.Div00.deductionTab.perosnalDdtTP);
            obj.set_taborder("2");
            obj.set_binddataset("dsHyDeductionData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"61\"/><Column size=\"981\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"48\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell style=\"font:10 맑은고딕;\" text=\"공제항목\"/><Cell col=\"1\" style=\"font:10 맑은고딕;\" text=\"공제수\"/><Cell col=\"2\" style=\"font:10 맑은고딕;\" text=\"요약 설명 및 공제 조건\"/></Band><Band id=\"body\"><Cell celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"경로우대\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:senior70yearoverDdt\"/><Cell col=\"2\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 경로우대자(70세 이상)인 경우 1명당 연 100만원\"/><Cell row=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"장애인\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:handicappedPersonDdt\"/><Cell row=\"1\" col=\"2\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 장애인인 경우 1명당 연 200만원\"/><Cell row=\"2\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"부녀자\"/><Cell row=\"2\" col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:womanDdt\"/><Cell row=\"2\" col=\"2\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 근로소득금액이 3천만원 이하인 거주자가 배우자가 없는 여성으로서 기본공제대상부양&#13;&#10;가족이 있는 세대주이거나, 배우자가 있는 여성근로자인 경우 연 50만원\"/><Cell row=\"3\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"한부모\"/><Cell row=\"3\" col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:singleParentDdt\"/><Cell row=\"3\" col=\"2\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 배우자가 없는 근로자가 기본공제대상 직계비속 또는 입양자를 부양하는 경우 연 100만원&#13;&#10;(부녀자공제와 중복 배제 한부모 공제를 우선 적용)\"/></Band></Format></Formats>");
            this.Div00.deductionTab.perosnalDdtTP.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0.41%", "10", null, "23", "94.46%", null, this.Div00.deductionTab.perosnalDdtTP);
            obj.getSetter("taborder").set("3");
            obj.set_text("기본공제");
            this.Div00.deductionTab.perosnalDdtTP.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0.65%", "326", null, "23", "94.22%", null, this.Div00.deductionTab.perosnalDdtTP);
            obj.getSetter("taborder").set("4");
            obj.set_text("추가공제");
            this.Div00.deductionTab.perosnalDdtTP.addChild(obj.name, obj);
            obj = new Button("addFamilyBtn", "absolute", "91.94%", "17", null, "22", "0.57%", null, this.Div00.deductionTab.perosnalDdtTP);
            obj.set_taborder("5");
            obj.set_text("부양가족등록");
            this.Div00.deductionTab.perosnalDdtTP.addChild(obj.name, obj);
            obj = new Tabpage("insuranceDdtTp", this.Div00.deductionTab);
            obj.set_text("연금/보험");
            this.Div00.deductionTab.addChild(obj.name, obj);
            obj = new Grid("insuranceDdtGrid", "absolute", "0.73%", "8.11%", null, "41.39%", "0%", null, this.Div00.deductionTab.insuranceDdtTp);
            obj.set_taborder("0");
            obj.set_binddataset("dsHyDeductionData");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"190\"/><Column size=\"120\"/><Column size=\"800\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"34\"/><Row size=\"30\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"공제항목\"/><Cell col=\"2\" text=\"금액\"/><Cell col=\"3\" text=\"요약 설명 및 공제 조건\"/></Band><Band id=\"body\"><Cell rowspan=\"5\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"공적&#13;&#10;연금&#13;&#10;보험료\"/><Cell col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"국민연금\"/><Cell col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:nationalPensionDdt\"/><Cell col=\"3\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"국민연금법에 따라 부담하는 연금보험료(사용자 부담금은 제외)로 전액공제\"/><Cell row=\"1\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"공무원연금\"/><Cell row=\"1\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:publicOfficialPensionDdt\"/><Cell row=\"1\" col=\"3\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"공무원연금법에 따라 근로자가 부담하는 기여금(또는 부담금)으로 전액공제\"/><Cell row=\"2\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"군인연금\"/><Cell row=\"2\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:militaryPensionDdt\"/><Cell row=\"2\" col=\"3\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"군인연금법에 따라 근로자가 부담하는 기여금(또는 부담금)으로 전액공제\"/><Cell row=\"3\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"사립학교&#13;&#10;교직원염금\"/><Cell row=\"3\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:privateSchoolDdt\"/><Cell row=\"3\" col=\"3\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"사립학교교직원연금법에 따라 근로자가 부담하는 기여금(또는 부담금)으로 전액공제\"/><Cell row=\"4\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"별정우체국연금\"/><Cell row=\"4\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:specialPostofficeDdt\"/><Cell row=\"4\" col=\"3\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"별정우체국법에 따라 근로자가 부담하는 기여금(또는 부담금)으로 전액공제\"/><Cell row=\"5\" rowspan=\"3\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"일반&#13;&#10;보험료&#13;&#10;(특별&#13;&#10;소득공제)\"/><Cell row=\"5\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"국민건강보험료\"/><Cell row=\"5\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:healthInsuranceDdt\"/><Cell row=\"5\" col=\"3\" rowspan=\"3\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"근로소득자(일용근로자 제외)가 해당 과세기간에 「국민건강보험법」, 「고용보험법」 또는 「노인장기요양&#13;&#10;보험법」에 따라 근로자가 부담하는 보험료를 지급한 경우 그 금액을 해당 과세기간의 근로소득금액에&#13;&#10;서 공제한다.\"/><Cell row=\"6\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"고용보험료\"/><Cell row=\"6\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:empInsuranceDdt\"/><Cell row=\"7\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"노인장기요양보험료\"/><Cell row=\"7\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:seniorLongtermDdt\"/></Band></Format></Formats>");
            this.Div00.deductionTab.insuranceDdtTp.addChild(obj.name, obj);
            obj = new Grid("insuranceRdtGrid", "absolute", "0.73%", "67.05%", null, "30.13%", "0.33%", null, this.Div00.deductionTab.insuranceDdtTp);
            obj.set_taborder("1");
            obj.set_binddataset("dsHyDeductionData");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"190\"/><Column size=\"120\"/><Column size=\"810\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"공제항목\"/><Cell col=\"2\" text=\"금액\"/><Cell col=\"3\" text=\"요약 설명 및 공제 조건\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"보험료&#13;&#10;세액공제\"/><Cell col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"보장성보험료\"/><Cell col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:guaranteedInsuranceDdt\"/><Cell col=\"3\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"기본공제대상자를 피보험자로 하는 보장성보험료 : 연 100만원 공제대상 한도\"/><Cell row=\"1\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"장애인전용보장성보험료\"/><Cell row=\"1\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:guaranteedHandicappedDdt\"/><Cell row=\"1\" col=\"3\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"기본공제대상자 중 장애인을 피보험자로 하는 장애인전용보장성보험료 : 연 100만원 공제대상 한도\"/></Band></Format></Formats>");
            this.Div00.deductionTab.insuranceDdtTp.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.06%", "10", null, "23", "93.81%", null, this.Div00.deductionTab.insuranceDdtTp);
            obj.getSetter("taborder").set("2");
            obj.set_text("보험료공제");
            this.Div00.deductionTab.insuranceDdtTp.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "1.06%", "370", null, "23", "93.81%", null, this.Div00.deductionTab.insuranceDdtTp);
            obj.getSetter("taborder").set("3");
            obj.set_text("세액공제");
            this.Div00.deductionTab.insuranceDdtTp.addChild(obj.name, obj);
            obj = new Button("addinsuranceBtn", "absolute", "90.64%", "378", null, "23", "0.57%", null, this.Div00.deductionTab.insuranceDdtTp);
            obj.set_taborder("4");
            obj.set_text("보험료 내역 등록");
            this.Div00.deductionTab.insuranceDdtTp.addChild(obj.name, obj);
            obj = new Tabpage("housingFundDdtTp", this.Div00.deductionTab);
            obj.set_text("주택자금");
            this.Div00.deductionTab.addChild(obj.name, obj);
            obj = new Grid("housingFundDdtGrid", "absolute", "0.65%", "9.6%", null, "87.91%", "1.3%", null, this.Div00.deductionTab.housingFundDdtTp);
            obj.set_taborder("0");
            obj.set_binddataset("dsHyDeductionData");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"180\"/><Column size=\"110\"/><Column size=\"67\"/><Column size=\"67\"/><Column size=\"67\"/><Column size=\"616\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"48\"/><Row size=\"48\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"공제항목\"/><Cell col=\"2\" colspan=\"4\" text=\"금액\"/><Cell col=\"6\" text=\"요약 설명 및 공제 조건\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"주택자금\"/><Cell col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"주택임차차입금&#13;&#10;원리금상환액\"/><Cell col=\"2\" colspan=\"4\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:housingLeaseDebtDdt\"/><Cell col=\"6\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 주택임차차입금 원리금상환액의 40% 공제 : 주택마련저축과 합하여 연 300만원&#13;&#10;한도\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"장기주택저당차입금&#13;&#10;이자상환액\"/><Cell row=\"1\" col=\"2\" rowspan=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:mbsDdt\"/><Cell row=\"1\" col=\"3\" celltype=\"head\" style=\"align:center middle;font:10 맑은고딕;\" text=\"상환방식\"/><Cell row=\"1\" col=\"4\" celltype=\"head\" style=\"align:center middle;font:10 맑은고딕;\" text=\"상환기간\"/><Cell row=\"1\" col=\"5\" celltype=\"head\" style=\"align:center middle;\" text=\"이자형식\"/><Cell row=\"1\" col=\"6\" celltype=\"head\" style=\"align:left;\" text=\" - 장기주택저당차입금 이자상환액 공제 : 연 300만원~1800만원 한도\"/><Cell row=\"2\" col=\"3\" celltype=\"none\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center middle;font:10 .맑은고딕;\" text=\"bind:mbsRepaymentType\" combodataset=\"dsRepaymentType\" combocodecol=\"mbsRepaymentType\" combodatacol=\"displayText\" combodisplayrowcount=\"-1\"/><Cell row=\"2\" col=\"4\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 .맑은고딕;\" text=\"bind:mbsRepaymentPeriod\"/><Cell row=\"2\" col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center middle;font:10 .맑은고딕;\" text=\"bind:mbsRate\" combodataset=\"dsRateType\" combocodecol=\"code\" combodatacol=\"data\"/><Cell row=\"2\" col=\"6\" celltype=\"head\" style=\"align:left;\" text=\" - 상환방식 : 거치식, 비거치식, 기타 / 상환기간: -년\"/><Cell row=\"3\" rowspan=\"3\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"주택마련&#13;&#10;저축공제\"/><Cell row=\"3\" col=\"1\" rowspan=\"2\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"청약저축·&#13;&#10;주택청약종합저축\"/><Cell row=\"3\" col=\"2\" rowspan=\"2\" colspan=\"4\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:housingSubDepositDdt\"/><Cell row=\"3\" col=\"6\" rowspan=\"2\" celltype=\"head\" style=\"align:left;\" text=\" - 「주택법」에 따른 청약저축·주택청약종합저축 납입 금액의 40% 공제(연 납입액&#13;&#10;240만원 이하의 금액)\"/><Cell row=\"5\" col=\"1\" celltype=\"head\" text=\"근로자주택마련저축\"/><Cell row=\"5\" col=\"2\" colspan=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;\" text=\"bind:housingDepositWorkerDdt\"/><Cell row=\"5\" col=\"6\" celltype=\"head\" style=\"align:left;\" text=\" - 폐지된 「근로자의 주거안정과 목돈마련지원에 관한 법률」에 따른 근로자주택마련&#13;&#10;저축 납입 금액의 40% 공제(월 납입액 15만원 이하)\"/></Band></Format></Formats>");
            this.Div00.deductionTab.housingFundDdtTp.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.06%", "10", null, "23", "91.29%", null, this.Div00.deductionTab.housingFundDdtTp);
            obj.getSetter("taborder").set("1");
            obj.set_text("주택자금공제");
            this.Div00.deductionTab.housingFundDdtTp.addChild(obj.name, obj);
            obj = new Tabpage("savingDdtTp", this.Div00.deductionTab);
            obj.set_text("저축");
            this.Div00.deductionTab.addChild(obj.name, obj);
            obj = new Grid("savingDdtGrid", "absolute", "0.65%", "9.93%", null, "88.08%", "1.55%", null, this.Div00.deductionTab.savingDdtTp);
            obj.set_taborder("0");
            obj.set_binddataset("dsHyDeductionData");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"120\"/><Column size=\"920\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"공제항목\"/><Cell col=\"1\" text=\"금액\"/><Cell col=\"2\" text=\"요약 설명 및 공제 조건\"/></Band><Band id=\"body\"><Cell celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"개인연금저축\"/><Cell col=\"1\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:left;font:10 맑은고딕;\" text=\"bind:personalPensionDdt\"/><Cell col=\"2\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 거주자가 본인 명의로 개인연금저축에 가입한 경우 해당 과세기간의 저축납입액에 대해 해당 가세기간의 종합소득&#13;&#10;금액에서 공제한다.\"/></Band></Format></Formats>");
            this.Div00.deductionTab.savingDdtTp.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.06%", "10", null, "23", "93.81%", null, this.Div00.deductionTab.savingDdtTp);
            obj.getSetter("taborder").set("1");
            obj.set_text("저축공제");
            this.Div00.deductionTab.savingDdtTp.addChild(obj.name, obj);
            obj = new Tabpage("creditCardDdtTp", this.Div00.deductionTab);
            obj.set_text("신용카드등사용");
            this.Div00.deductionTab.addChild(obj.name, obj);
            obj = new Grid("creditcardDdtGrid", "absolute", "0.73%", "9.6%", null, "88.91%", "1.22%", null, this.Div00.deductionTab.creditCardDdtTp);
            obj.set_taborder("0");
            obj.set_binddataset("dsHyDeductionData");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"260\"/><Column size=\"120\"/><Column size=\"687\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\"/><Row size=\"30\"/><Row size=\"48\"/><Row size=\"30\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"공제항목\"/><Cell col=\"2\" text=\"금액\"/><Cell col=\"3\" text=\"요약 설명 및 공제 조건\"/></Band><Band id=\"body\"><Cell rowspan=\"11\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"신용카드&#13;&#10;사용액&#13;&#10;공제\"/><Cell col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"신용카드사용분\"/><Cell col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:creditcardDdt\"/><Cell col=\"3\" rowspan=\"7\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"사용금액의 연간 합계액이 해당 과세연도의 총급여액의 100분의 25를 초과하는 경우 그 초&#13;&#10;과금액의 100분의 15(현금영수증, 직불카드 또는 선불카드, 전통시장사용분, 대중교통이용분&#13;&#10;의 경우 100분의 30, '14년 하반기('15년 상반기) 직불카드 등 본인 추가공제율사용분 증가액&#13;&#10;의 경우 10% 추가, '15년 하반기('16년 상반기) 직불카드 등 본인 추가공제율사용분 증가액의&#13;&#10;경우 20% 추가)에 해당하는 금액을 해당 과세연도의 근로소득금액에서 공제한다.&#13;&#10;공제한도는 총급여액의 20%와 300만원 중 적은 금액을 한도로 하되, 한도초과금액이 있는&#13;&#10;경우 한도초과금액과 전통시장사용금액·대중교통이용액의 합계액 중 적은 금액(전통시장사용금액과&#13;&#10;대중교통이용액 각각 연간 100만원 한도)을 신용카드 등 소득 공제금액에 추가한다.&#13;&#10;(최대 500만원 한도)\"/><Cell row=\"1\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"현금영수증\"/><Cell row=\"1\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:cashReceiptDdt\"/><Cell row=\"2\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"직불·선불카드 사용분\"/><Cell row=\"2\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:debitcardDdt\"/><Cell row=\"3\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"전통시장사용분\"/><Cell row=\"3\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:tradMarketDdt\"/><Cell row=\"4\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"대중교통이용분\"/><Cell row=\"4\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:publicTransportationDdt\"/><Cell row=\"5\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"'14년 신용카드 사용금액\"/><Cell row=\"5\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:own2014CreditcardUsedDdt\"/><Cell row=\"6\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"'13년 신용카드 사용금액\"/><Cell row=\"6\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:own2013CreditcardUsedDdt\"/><Cell row=\"7\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"'15년 상반기 추가공제율 사용분\"/><Cell row=\"7\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:adu2015FhyAmt\"/><Cell row=\"7\" col=\"3\" rowspan=\"4\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"추가공제율사용분 : 전통시장사용분, 대중교통이용분 및 직불카드 등 사용분&#13;&#10;(신용카드 사용분 제외)\"/><Cell row=\"8\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"'15년 하반기 추가공제율 사용분\"/><Cell row=\"8\" col=\"2\" displaytype=\"number\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:adu2015ShyAmt\"/><Cell row=\"9\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"'14년 추가공제율사용분\"/><Cell row=\"9\" col=\"2\" displaytype=\"number\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:adu2014Amt\"/><Cell row=\"10\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"'13년 추가공제율사용분\"/><Cell row=\"10\" col=\"2\" displaytype=\"number\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:adu2013Amt\"/></Band></Format></Formats>");
            this.Div00.deductionTab.creditCardDdtTp.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.06%", "10", null, "23", "85.99%", null, this.Div00.deductionTab.creditCardDdtTp);
            obj.getSetter("taborder").set("1");
            obj.set_text("신용카드 사용액 공제");
            this.Div00.deductionTab.creditCardDdtTp.addChild(obj.name, obj);
            obj = new Button("addCreditCardBtn", "absolute", "84.53%", "17", null, "28", "1.22%", null, this.Div00.deductionTab.creditCardDdtTp);
            obj.set_taborder("2");
            obj.set_text("신용카드 사용내역 등록");
            this.Div00.deductionTab.creditCardDdtTp.addChild(obj.name, obj);
            obj = new Tabpage("medicalEducationDdtTp", this.Div00.deductionTab);
            obj.set_text("의료비/교육비");
            this.Div00.deductionTab.addChild(obj.name, obj);
            obj = new Grid("medicalRdtGrid", "absolute", "0.81%", "8.44%", null, "32.12%", "1.3%", null, this.Div00.deductionTab.medicalEducationDdtTp);
            obj.set_taborder("0");
            obj.set_binddataset("dsHyDeductionData");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"190\"/><Column size=\"120\"/><Column size=\"780\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"48\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"공제항목\"/><Cell col=\"2\" text=\"금액\"/><Cell col=\"3\" text=\"요약 설명 및 공제 조건\"/></Band><Band id=\"body\"><Cell rowspan=\"5\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"의료비&#13;&#10;세액공제\"/><Cell col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"근로자 본인\"/><Cell col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:medicalOwnCostDdt\"/><Cell col=\"3\" rowspan=\"5\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 기본공제대상자(소득·나이 제한 없음)를 위해 지출한 총급여액의 3%를 초과하는 의료비 : 연 700만원&#13;&#10;공제대상 한도.&#13;&#10;다만, 본인, 65세 이상자, 장애인을 위해 지출한 의료비, 난임시술비는 한도 없음&#13;&#10;※ 미용·성형수술비용 및 건강증진 의약품 구입비용 : 공제대상에서 제외\"/><Cell row=\"1\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"65세 이상 부양가족\"/><Cell row=\"1\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:medical65overCostDdt\"/><Cell row=\"2\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"장애인\"/><Cell row=\"2\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:medicalHandicappedCostDdt\"/><Cell row=\"3\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"난임시술비\"/><Cell row=\"3\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:medicalInfertilityCostDdt\"/><Cell row=\"4\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"그 외 부양가족\"/><Cell row=\"4\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:medicalBasicCostDdt\"/></Band></Format></Formats>");
            this.Div00.deductionTab.medicalEducationDdtTp.addChild(obj.name, obj);
            obj = new Grid("eduRdtGrid", "absolute", "0.81%", "52.65%", null, "44.87%", "1.3%", null, this.Div00.deductionTab.medicalEducationDdtTp);
            obj.set_taborder("1");
            obj.set_binddataset("dsHyDeductionData");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"111\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"803\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"font:10 맑은고딕;\" text=\"공제항목\"/><Cell col=\"2\" style=\"font:10 맑은고딕;\" text=\"금액\"/><Cell col=\"3\" style=\"font:10 맑은고딕;\" text=\"공제수\"/><Cell col=\"4\" style=\"font:10 맑은고딕;\" text=\"요약 설명 및 공제 조건\"/></Band><Band id=\"body\"><Cell rowspan=\"4\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"교육비&#13;&#10;세액공제\"/><Cell col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"근로자 본인\"/><Cell col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:eduOwnCostDdt\"/><Cell col=\"3\" edittype=\"readonly\" style=\"align:center middle;font:10 맑은고딕;\" text=\"1\"/><Cell col=\"4\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 근로자 본인을 위해 대학·대학원 1학기 이상의 교육과정 등에 지출한 교육비 : 전액 공제대상\"/><Cell row=\"1\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"초중고생\"/><Cell row=\"1\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:eduUnder20CostDdt\"/><Cell row=\"1\" col=\"3\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:eduUnder20Cnt\"/><Cell row=\"1\" col=\"4\" rowspan=\"2\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 직계존을 제외한 기본공제대상자(나이 제한 없음)를 위해 교육기관(대학원 제외) 등에 지출한 교육비&#13;&#10;: 취학전 아동 및 초·중·고생 1명당 연 300망원, 대학생 1명당 연 900만원 한도\"/><Cell row=\"2\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"대학생\"/><Cell row=\"2\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:eduOver20CostDdt\"/><Cell row=\"2\" col=\"3\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:eduOver20Cnt\"/><Cell row=\"2\" col=\"4\" celltype=\"head\" style=\"font:10 맑은고딕;\"/><Cell row=\"3\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"장애인\"/><Cell row=\"3\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:eduHandicappedCostDdt\"/><Cell row=\"3\" col=\"3\" edittype=\"readonly\" style=\"align:center middle;font:10 맑은고딕;\" text=\"-\"/><Cell row=\"3\" col=\"4\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 기본공제대상자인 장애인(소득 제한 없음. 직계존속 포함)의 재활교육을 위하여 지출한 특수교육비&#13;&#10;: 전액 공제대상\"/></Band></Format></Formats>");
            this.Div00.deductionTab.medicalEducationDdtTp.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.06%", "10", null, "23", "88.36%", null, this.Div00.deductionTab.medicalEducationDdtTp);
            obj.getSetter("taborder").set("2");
            obj.set_text("의료비 세액공제");
            this.Div00.deductionTab.medicalEducationDdtTp.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0.9%", "285", null, "23", "88.52%", null, this.Div00.deductionTab.medicalEducationDdtTp);
            obj.getSetter("taborder").set("3");
            obj.set_text("교육비 세액공제");
            this.Div00.deductionTab.medicalEducationDdtTp.addChild(obj.name, obj);
            obj = new Button("addMedicalBtn", "absolute", "86.32%", "15", null, "23", "1.3%", null, this.Div00.deductionTab.medicalEducationDdtTp);
            obj.set_taborder("6");
            obj.set_text("의료비 내역 등록");
            this.Div00.deductionTab.medicalEducationDdtTp.addChild(obj.name, obj);
            obj = new Button("addEducationBtn", "absolute", "85.91%", "283", null, "23", "1.3%", null, this.Div00.deductionTab.medicalEducationDdtTp);
            obj.set_taborder("7");
            obj.set_text("교육비 내역 등록");
            this.Div00.deductionTab.medicalEducationDdtTp.addChild(obj.name, obj);
            obj = new Tabpage("donationDdtTp", this.Div00.deductionTab);
            obj.set_text("기부금");
            this.Div00.deductionTab.addChild(obj.name, obj);
            obj = new Grid("donationRdtGrid", "absolute", "0.73%", "9.77%", null, "83.28%", "1.71%", null, this.Div00.deductionTab.donationDdtTp);
            obj.set_taborder("0");
            obj.set_binddataset("dsHyDeductionData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"190\"/><Column size=\"120\"/><Column size=\"790\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"공제항목\"/><Cell col=\"2\" text=\"금액\"/><Cell col=\"3\" text=\"요약 설명 및 공제 조건\"/></Band><Band id=\"body\"><Cell rowspan=\"5\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"기부금&#13;&#10;세액공제\"/><Cell col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"정치자금 기부금\"/><Cell col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:campaigningDonationDdt\"/><Cell col=\"3\" rowspan=\"5\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"거주자 및 기본공제를 적용받는 부양가족이 해당 과세기간에 지급한 공제한도 내의 기부금의 15%&#13;&#10;(3천만원 초과분은 25%)은 해당 과세기간의 합산과세되는 종합소득산출세액에서 공제한다.&#13;&#10;&lt;&lt;세액공제율&gt;&gt;&#13;&#10; · 정치자금기부금&#13;&#10; - 10만원 이하 : 100/110&#13;&#10; - 10만원 초과 : 15%(3천만원 초과분 25%)&#13;&#10; · 법정기부금&#13;&#10; - 법정기부금 + 지정기부금 + 우리사주조합기부금 : 15%(3천만원 초과분 25%)&#13;&#10; · 우리사주조합기부금, 지정기부금&#13;&#10; - 법정기부금 + 지정기부금 + 우리사주조합기부금 : 15%(3천만원 초과분 25%)\"/><Cell row=\"1\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"법정 기부금\"/><Cell row=\"1\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:legalDonationDdt\"/><Cell row=\"2\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"우리사주조합 기부금\"/><Cell row=\"2\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:empShareDonationDdt\"/><Cell row=\"3\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"종교단체 지정 기부금\"/><Cell row=\"3\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:desDonationReligionDdt\"/><Cell row=\"4\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"지정기부금(비종교단체)\"/><Cell row=\"4\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:desDonationDdt\"/></Band></Format></Formats>");
            this.Div00.deductionTab.donationDdtTp.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.06%", "10", null, "23", "86.56%", null, this.Div00.deductionTab.donationDdtTp);
            obj.getSetter("taborder").set("1");
            obj.set_text("기부금 세액 공제");
            this.Div00.deductionTab.donationDdtTp.addChild(obj.name, obj);
            obj = new Button("addDonationBtn", "absolute", "83.71%", "23", null, "22", "1.79%", null, this.Div00.deductionTab.donationDdtTp);
            obj.set_taborder("2");
            obj.set_text("기부금 내역 등록");
            this.Div00.deductionTab.donationDdtTp.addChild(obj.name, obj);
            obj = new Tabpage("formerCompanyDdtTp", this.Div00.deductionTab);
            obj.set_text("전근무지");
            this.Div00.deductionTab.addChild(obj.name, obj);
            obj = new Grid("formerCompanyDdtGrid", "absolute", "0.73%", "63", null, "412", "53.58%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("0");
            obj.set_binddataset("dsHyFormerCompany");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell style=\"font:10 맑은고딕;\" text=\"사업자등록번호\"/><Cell col=\"1\" style=\"font:10 맑은고딕;\" text=\"법인명\"/><Cell col=\"2\" text=\"소득계\"/><Cell col=\"3\" text=\"공제계\"/><Cell col=\"4\" text=\"세액계\"/></Band><Band id=\"body\"><Cell celltype=\"none\" edittype=\"text\" style=\"font:10 맑은고딕;\" text=\"bind:crNumber\"/><Cell col=\"1\" celltype=\"none\" edittype=\"text\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:companyName\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:totalIncome\" expr=\"expr:nexacro.toNumber(totalSalary)+nexacro.toNumber(bonus)+nexacro.toNumber(deemedBonus)+nexacro.toNumber(etcTaxFree)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:totalDdt\" expr=\"expr:nexacro.toNumber(nationalPension)+nexacro.toNumber(empInsurance)+nexacro.toNumber(healthInsurance)+nexacro.toNumber(workingIncomeTax)+nexacro.toNumber(totalDonation)+nexacro.toNumber(desDonation)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:totalTax\" expr=\"expr:totaltax=nexacro.toNumber(incomeTax)+nexacro.toNumber(residenceTax)\"/></Band></Format></Formats>");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Edit("crNumberEd", "absolute", "68.4%", "8.11%", null, "5.13%", "8.47%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("1");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Edit("cNameEd", "absolute", "68.4%", "14.4%", null, "5.13%", "8.47%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("2");
            obj.style.set_align("center middle");
            obj.getSetter("mask").set("##,###,###");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new MaskEdit("totalSalaryEd", "absolute", "68.4%", "26.99%", null, "5.13%", "8.47%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("3");
            obj.set_mask("##,###,###");
            obj.style.set_color("black");
            obj.getSetter("inputtype").set("number");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new MaskEdit("bonusTotalEd", "absolute", "68.4%", "33.28%", null, "5.13%", "8.47%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("4");
            obj.set_mask("##,###,###");
            obj.style.set_color("black");
            obj.getSetter("inputtype").set("number");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new MaskEdit("deemEd", "absolute", "68.4%", "39.57%", null, "5.13%", "8.47%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("5");
            obj.set_mask("##,###,###");
            obj.style.set_color("black");
            obj.getSetter("inputtype").set("number");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new MaskEdit("etcFreeTaxEd", "absolute", "68.4%", "45.86%", null, "5.13%", "8.47%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("6");
            obj.set_mask("##,###,###");
            obj.style.set_color("black");
            obj.getSetter("inputtype").set("number");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new MaskEdit("pensionEd", "absolute", "68.4%", "58.44%", null, "5.13%", "8.47%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("7");
            obj.set_mask("##,###,###");
            obj.style.set_color("black");
            obj.getSetter("inputtype").set("number");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new MaskEdit("healthEd", "absolute", "68.4%", "64.74%", null, "5.13%", "8.47%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("8");
            obj.set_mask("##,###,###");
            obj.style.set_color("black");
            obj.getSetter("inputtype").set("number");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new MaskEdit("empInsuranceEd", "absolute", "68.4%", "71.03%", null, "5.13%", "8.47%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("9");
            obj.set_mask("##,###,###");
            obj.style.set_color("black");
            obj.getSetter("inputtype").set("number");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new MaskEdit("tDonationEd", "absolute", "68.4%", "77.32%", null, "5.13%", "8.47%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("10");
            obj.set_mask("##,###,###");
            obj.style.set_color("black");
            obj.getSetter("inputtype").set("number");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new MaskEdit("dDonationEd", "absolute", "68.4%", "83.61%", null, "5.13%", "8.47%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("11");
            obj.set_mask("##,###,###");
            obj.style.set_color("black");
            obj.getSetter("inputtype").set("number");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new MaskEdit("regidenceEd", "absolute", "16.86%", "91.39%", null, "5.13%", "60.02%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("12");
            obj.set_mask("##,###,###");
            obj.style.set_color("black");
            obj.getSetter("inputtype").set("number");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new MaskEdit("incomeEd", "absolute", "16.86%", "85.1%", null, "5.13%", "60.02%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("13");
            obj.set_mask("##,###,###");
            obj.style.set_color("black");
            obj.getSetter("inputtype").set("number");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.06%", "10", null, "23", "86.32%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("14");
            obj.set_text("전 근무지 정보 공제");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Button("addBefWorkPlaceBtn", "absolute", "35.91%", "30", null, "22", "59.2%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("15");
            obj.set_text("추가");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Button("delBefWorkPlaceBtn", "absolute", "41.37%", "30", null, "22", "53.75%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("16");
            obj.set_text("삭제");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "52.93%", "91", null, "23", "34.45%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("18");
            obj.set_text("법인명(회사)");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "53.18%", "54", null, "23", "34.2%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("19");
            obj.set_text("사업자등록번호");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "52.69%", "403", null, "23", "34.69%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("20");
            obj.set_text("건강보험");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "52.93%", "202", null, "23", "34.45%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("21");
            obj.set_text("상여총액");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "52.93%", "167", null, "23", "34.45%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("22");
            obj.set_text("급여총액");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "52.93%", "440", null, "23", "34.45%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("23");
            obj.set_text("고용보험");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "52.69%", "474", null, "23", "34.69%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("24");
            obj.set_text("전액기부금");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "52.93%", "511", null, "23", "34.45%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("25");
            obj.set_text("지정기부금");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "52.93%", "547", null, "23", "34.45%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("26");
            obj.set_text("근로세액공제");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "53.18%", "246", null, "23", "34.2%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("27");
            obj.set_text("인정상여");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "53.18%", "280", null, "23", "34.2%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("28");
            obj.set_text("기타비과세");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "1.38%", "513", null, "23", "85.99%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("29");
            obj.set_text("소득세");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "1.47%", "554", null, "23", "85.91%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("30");
            obj.set_text("주민세");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "1.71%", "486", null, "23", "85.67%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("31");
            obj.set_text("세액 명세");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new MaskEdit("widEdt", "absolute", "68.4%", "90.07%", null, "5.13%", "8.47%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.set_taborder("32");
            obj.set_mask("##,###,###");
            obj.style.set_color("black");
            obj.getSetter("inputtype").set("number");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "53.18%", "362", null, "23", "34.2%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("33");
            obj.set_text("국민연금");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "52.77%", "325", null, "23", "34.61%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("34");
            obj.set_text("공제");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "52.93%", "136", null, "23", "34.45%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("35");
            obj.set_text("소득");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "53.18%", "26", null, "23", "34.2%", null, this.Div00.deductionTab.formerCompanyDdtTp);
            obj.getSetter("taborder").set("36");
            obj.set_text("기본정보");
            this.Div00.deductionTab.formerCompanyDdtTp.addChild(obj.name, obj);
            obj = new Tabpage("etcDdtTp", this.Div00.deductionTab);
            obj.set_text("기타");
            this.Div00.deductionTab.addChild(obj.name, obj);
            obj = new Grid("etcDdtGrid", "absolute", "0.73%", "45", null, "240", "1.3%", null, this.Div00.deductionTab.etcDdtTp);
            obj.set_taborder("0");
            obj.set_binddataset("dsHyDeductionData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"638\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"35\"/><Row size=\"35\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"공제항목\"/><Cell col=\"2\" colspan=\"3\" text=\"금액\"/><Cell col=\"5\" text=\"요약 설명 및 공제 조건\"/></Band><Band id=\"body\"><Cell rowspan=\"8\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"그 밖의&#13;&#10;소득공제\"/><Cell col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"소기업·소상공인 공제부금\"/><Cell col=\"2\" colspan=\"3\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:smallBusinessDdt\"/><Cell col=\"5\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"소기업·소상공인공제에 가입하여 해당 연도에 납입한 금액(연 300만원 한도)\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"중소기업창업투자조합 출자\"/><Cell row=\"1\" col=\"2\" celltype=\"head\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"'13\"/><Cell row=\"1\" col=\"3\" celltype=\"head\" style=\"align:center middle;font:10 맑은고딕;\" text=\"'14\"/><Cell row=\"1\" col=\"4\" celltype=\"head\" style=\"align:center middle;font:10 맑은고딕;\" text=\"'15\"/><Cell row=\"1\" col=\"5\" rowspan=\"3\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"출자·투자분에 대해 투자금액의 10%(벤처기업에 직접투자 15백만원이하 100%, 5천&#13;&#10;만원이하 50% 초과 30%) 공제(종합소득금액의 50% 한도, 다만 2013년 투자분은 종합&#13;&#10;소득금액의 40%한도)\"/><Cell row=\"2\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:inv2013AssociationDdt\"/><Cell row=\"2\" col=\"3\" celltype=\"none\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:inv2014AssociationDdt\"/><Cell row=\"2\" col=\"4\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:inv2015AssociationDdt\"/><Cell row=\"3\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"벤처기업 직접투자금\"/><Cell row=\"3\" col=\"2\" style=\"font:10 맑은고딕;\" text=\"bind:inv2013VentureDdt\"/><Cell row=\"3\" col=\"3\" style=\"font:10 맑은고딕;\" text=\"bind:inv2014VentureDdt\"/><Cell row=\"3\" col=\"4\" style=\"font:10 맑은고딕;\" text=\"bind:inv2015VentureDdt\"/><Cell row=\"4\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"우리사주조합출연금\"/><Cell row=\"4\" col=\"2\" colspan=\"3\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:empSharePensionDdt\"/><Cell row=\"4\" col=\"5\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"우리사주조합원이 우리사주를 취득하기 위해 우리사주조합에 출연한 금액(400만원&#13;&#10;한도)\"/><Cell row=\"5\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"고용유지중소기업 근로자\"/><Cell row=\"5\" col=\"2\" colspan=\"3\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:mesbwDdt\"/><Cell row=\"5\" col=\"5\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"고용유지 중소기업에 근무하는 상시 근로자의 임금삭감액의 50%를 소득공제&#13;&#10;(연 1000만원 한도)\"/><Cell row=\"6\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"목돈 안드는 전세 이자상환액\"/><Cell row=\"6\" col=\"2\" colspan=\"3\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:nrsliDdt\"/><Cell row=\"6\" col=\"5\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"목돈 안드는 전세 차입금 이자상환액의 40% 소득공제(연 300만원 한도)\"/><Cell row=\"7\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"장기집합투자증권저축\"/><Cell row=\"7\" col=\"2\" colspan=\"3\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:longtermSavingStockDdt\"/><Cell row=\"7\" col=\"5\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"장기집합투자증권저축 납입액의 40% 소득공제(연 240만원 한도)\"/></Band></Format></Formats>");
            this.Div00.deductionTab.etcDdtTp.addChild(obj.name, obj);
            obj = new Grid("etcDdtGrid00", "absolute", "0.73%", "328", null, "308", "1.3%", null, this.Div00.deductionTab.etcDdtTp);
            obj.set_taborder("1");
            obj.set_binddataset("dsHyDeductionData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"670\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"24\"/><Row size=\"48\"/><Row size=\"30\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"공제항목\"/><Cell col=\"2\" colspan=\"2\" text=\"금액\"/><Cell col=\"4\" text=\"요약 설명 및 공제 조건\"/></Band><Band id=\"body\"><Cell rowspan=\"9\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"기타&#13;&#10;세액공제\"/><Cell col=\"1\" rowspan=\"2\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"중소기업 취업자 소득세 감면\"/><Cell col=\"2\" rowspan=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:sbeSalaryDdt\"/><Cell col=\"3\" celltype=\"head\" style=\"align:center middle;font:10 맑은고딕;\" text=\"취업연도\"/><Cell col=\"4\" rowspan=\"2\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\"29세 이하 청년, 60세 이상 사람, 등록장애인이 중소기업에 취업하는 경우 취업일로부터&#13;&#10;3년간 근로소득세 50% 감면('13년 취업한 청년이 해당 중소기업에 계속 근무 시 100% 감면)\"/><Cell row=\"1\" col=\"3\" style=\"align:center middle;font:10 맑은고딕;\"/><Cell row=\"2\" col=\"1\" rowspan=\"2\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"자녀세액공제\"/><Cell row=\"2\" col=\"2\" celltype=\"head\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"6세 이하 자녀\"/><Cell row=\"2\" col=\"3\" celltype=\"head\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"출생, 입양\"/><Cell row=\"2\" col=\"4\" rowspan=\"2\" celltype=\"head\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:left;font:10 맑은고딕;\" text=\"기본공제대상 자녀 1명 15만원, 2명 30만원, 3명 이상(30만원 + 2명 초과 1명당 30만원)&#13;&#10;6세 이하 자녀 : 1명 초과 1명당 15만원, 출생·입양 : 1명당 30만원\"/><Cell row=\"3\" col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:childUnder6Ddt\"/><Cell row=\"3\" col=\"3\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:childBirthAdoptDdt\"/><Cell row=\"4\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"연금계좌세액공제\"/><Cell row=\"4\" col=\"2\" colspan=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:annuitySavingDdt\"/><Cell row=\"4\" col=\"4\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 퇴직연금·연금저축 납입액의 12% 세액공제(총급여액 55백만원 이하는 15%)\"/><Cell row=\"5\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"납세조합세액공제\"/><Cell row=\"5\" col=\"2\" colspan=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:taxAssociationDdt\"/><Cell row=\"5\" col=\"4\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 납세조합에 의하여 원천징수된 근로소득에 대해 종합소득산출세액의 10%를 세액공제\"/><Cell row=\"6\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"주택자금차입금이자세액공제\"/><Cell row=\"6\" col=\"2\" colspan=\"2\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:housingLeaseDdt\"/><Cell row=\"6\" col=\"4\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - ('95.11.1.~'97.12.31. 취득) 주택자금차입금에 대한 이자상환액의 30% 세액공제\"/><Cell row=\"7\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"외국납부세액공제\"/><Cell row=\"7\" col=\"2\" colspan=\"2\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:foreignIncomeDdt\"/><Cell row=\"7\" col=\"4\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 거주자의 외국소득세액을 당해연도의 종합소득산출세액에서 공제\"/><Cell row=\"8\" col=\"1\" celltype=\"head\" style=\"font:10 맑은고딕;\" text=\"월세세액공제\"/><Cell row=\"8\" col=\"2\" colspan=\"2\" style=\"align:center middle;font:10 맑은고딕;\" text=\"bind:monthlyRentDdt\"/><Cell row=\"8\" col=\"4\" celltype=\"head\" style=\"align:left;font:10 맑은고딕;\" text=\" - 총급여액 7천만원 이하 무주택 세대주가 지급한 월세액(연 750만원 한도)의 10% 세액&#13;&#10;공제\" calendardisplay=\"edit\"/></Band></Format></Formats>");
            this.Div00.deductionTab.etcDdtTp.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.07%", "10", null, "23", "93.83%", null, this.Div00.deductionTab.etcDdtTp);
            obj.getSetter("taborder").set("2");
            obj.set_text("사원번호");
            this.Div00.deductionTab.etcDdtTp.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 60, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_align("left middle");
            		p.style.set_background("transparent URL('img::titleBar7.jpg')");
            		p.set_text("            연말정산 실행");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.topDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.topDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00.deductionTab.perosnalDdtTP,
            	//-- Layout function
            	function(p) {
            		p.set_text("인적공제");

            	}
            );
            this.Div00.deductionTab.perosnalDdtTP.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00.deductionTab.insuranceDdtTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("연금/보험");

            	}
            );
            this.Div00.deductionTab.insuranceDdtTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00.deductionTab.housingFundDdtTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("주택자금");

            	}
            );
            this.Div00.deductionTab.housingFundDdtTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00.deductionTab.savingDdtTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("저축");

            	}
            );
            this.Div00.deductionTab.savingDdtTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00.deductionTab.creditCardDdtTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("신용카드등사용");

            	}
            );
            this.Div00.deductionTab.creditCardDdtTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00.deductionTab.medicalEducationDdtTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("의료비/교육비");

            	}
            );
            this.Div00.deductionTab.medicalEducationDdtTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00.deductionTab.donationDdtTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("기부금");

            	}
            );
            this.Div00.deductionTab.donationDdtTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00.deductionTab.formerCompanyDdtTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("전근무지");

            	}
            );
            this.Div00.deductionTab.formerCompanyDdtTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00.deductionTab.etcDdtTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("기타");

            	}
            );
            this.Div00.deductionTab.etcDdtTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.style.set_background("#edececff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HY_InsertDeductionForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.deductionTab.formerCompanyDdtTp.crNumberEd","value","dsHyFormerCompany","crNumber");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.deductionTab.formerCompanyDdtTp.cNameEd","value","dsHyFormerCompany","companyName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div00.deductionTab.formerCompanyDdtTp.totalSalaryEd","value","dsHyFormerCompany","totalSalary");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div00.deductionTab.formerCompanyDdtTp.bonusTotalEd","value","dsHyFormerCompany","bonus");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.deductionTab.formerCompanyDdtTp.deemEd","value","dsHyFormerCompany","deemedBonus");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.deductionTab.formerCompanyDdtTp.etcFreeTaxEd","value","dsHyFormerCompany","etcTaxFree");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div00.deductionTab.formerCompanyDdtTp.pensionEd","value","dsHyFormerCompany","nationalPension");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div00.deductionTab.formerCompanyDdtTp.healthEd","value","dsHyFormerCompany","healthInsurance");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div00.deductionTab.formerCompanyDdtTp.empInsuranceEd","value","dsHyFormerCompany","empInsurance");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div00.deductionTab.formerCompanyDdtTp.tDonationEd","value","dsHyFormerCompany","totalDonation");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div00.deductionTab.formerCompanyDdtTp.dDonationEd","value","dsHyFormerCompany","desDonation");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div00.deductionTab.formerCompanyDdtTp.regidenceEd","value","dsHyFormerCompany","residenceTax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div00.deductionTab.formerCompanyDdtTp.incomeEd","value","dsHyFormerCompany","incomeTax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div00.deductionTab.formerCompanyDdtTp.widEdt","value","dsHyFormerCompany","workingIncomeTax");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HY_InsertDeductionForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HY_InsertDeductionForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 공통 스트립트관리                                                          	*
        *                                                                               *
        * @Path		    hrs-HY_insertDeductionForm                   	                *
        * @Description 	연말정산 입력									   	            *
        * @Author	    황태경					                                		*
        * 									                                            *
        * Created on 2016. 2. 26.                             		                    *
        *									                                            *
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";

        var empNo;
        var belongYear;
        var param;

        this.searchEmpBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("HM_EmpSearchPopup","hrs","");
        }

        this.setEmpInfo = function(arrRtn ){

        	this.empNoEd.set_value(arrRtn[0]);
        	this.empNameEd.set_value(arrRtn[1]);
        	empNo = this.empNoEd.value;
        	
        }

        this.searchYetaBtn_onclick = function(obj,e)
        {
        	
        	var argument = "empNo="+empNo+" belongYear="+belongYear;
        	this.dsService.setColumn(0, "argument", argument);
        	//trace(this.dsService.saveXML());
        	this.gfnService("findHyDeductionData");
        }

        
        this.addFamilyBtn_onclick = function(obj,e)
        {
        	
        	param = {empNo:empNo, belongYear:belongYear, dsHyDependent:this.dsHyDependent, dsHyDeductionData:this.dsHyDeductionData};
        	this.gfnPopup("HY_AddDependentForm","hrs",param);
        }

        this.HY_InsertDeductionForm_onload = function(obj,e)
        {
        	belongYear = this.topDiv.yearSpin.value;
        	
        }

        
        this.yearSpin_onchanged = function(obj,e)
        {
        	belongYear = this.topDiv.yearSpin.value;
        }

        this.addinsuranceBtn_onclick = function(obj,e)
        {
        	param = {empNo:empNo, belongYear:belongYear, dsHyDependentInsurance:this.dsHyDependentInsurance, dsHyDeductionData:this.dsHyDeductionData};
        	this.gfnPopup("HY_AddInsuranceForm","hrs",param);	
        }

        this.addCreditCardBtn_onclick = function(obj,e)
        {
        	param = {empNo:empNo, belongYear:belongYear, dsHyCreditcard:this.dsHyCreditcard, dsHyDeductionData:this.dsHyDeductionData};
        	this.gfnPopup("HY_AddCreditcardForm","hrs",param);		
        }

        this.addMedicalBtn_onclick = function(obj,e)
        {
        	param = {empNo:empNo, belongYear:belongYear, dsHyDependentMedical:this.dsHyDependentMedical, dsHyDeductionData:this.dsHyDeductionData};
        	this.gfnPopup("HY_AddMedicalForm","hrs",param);	
        }

        this.addDonationBtn_onclick = function(obj,e)
        {
        	param = {empNo:empNo, belongYear:belongYear, dsHyDependentDonation:this.dsHyDependentDonation, dsHyDeductionData:this.dsHyDeductionData};
        	this.gfnPopup("HY_AddDonationForm","hrs",param);	
        }

        this.addEducationBtn_onclick = function(obj,e)
        {
        	param = {empNo:empNo, belongYear:belongYear, dsHyDependentEducation:this.dsHyDependentEducation, dsHyDeductionData:this.dsHyDeductionData};
        	this.gfnPopup("HY_AddEducationForm","hrs",param);	
        }

        
        this.addBefWorkPlaceBtn_onclick = function(obj,e)
        {
        	this.dsHyFormerCompany.addRow();
        	var lastRow = this.dsHyFormerCompany.rowcount-1;	
        	this.dsHyFormerCompany.setColumn(lastRow, "empNo", empNo);
        	this.dsHyFormerCompany.setColumn(lastRow, "crNumber", "");
        	this.dsHyFormerCompany.setColumn(lastRow, "companyName", "");
        	this.dsHyFormerCompany.setColumn(lastRow, "totalSalary", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "bonus", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "deemedBonus", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "etcTaxFree", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "nationalPension", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "healthInsurance", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "empInsurance", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "totalDonation", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "desDonation", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "workingIncomeTax", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "incomeTax", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "residenceTax", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "totalIncome", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "totalDdt", 0);
        	this.dsHyFormerCompany.setColumn(lastRow, "totalTax", 0);
        	
        	
        }

        this.delBefWorkPlaceBtn_onclick = function(obj,e)
        {
        	var currentRow = this.deductionTab.formerCompanyDdtTp.formerCompanyDdtGrid.currentrow;
        	if(currentRow!=-1){
        		this.dsHyFormerCompany.deleteRow(currentRow);
        	} else {
        		alert("선택한 행이 없습니다.");
        	}
        }

        

        this.batchBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchHyDeductionData");
        }

        

        this.executeYtaBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("HY_ExcuteYtaForm","hrs","");	
        }
        this.callback_findHyDeductionData = function(svcID,errorCode,errorMsg){
        	
        	if(this.dsHyDeductionData.rowcount==0){
        	
        		this.dsHyDeductionData.addRow();
        		
        		this.dsHyDeductionData.setColumn(0, "empNo",empNo);
        		this.dsHyDeductionData.setColumn(0, "belongYear", belongYear);
        		
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HY_InsertDeductionForm_onload, this);
            this.topDiv.yearSpin.addEventHandler("onchanged", this.yearSpin_onchanged, this);
            this.topDiv.executeYtaBtn.addEventHandler("onclick", this.executeYtaBtn_onclick, this);
            this.topDiv.batchBtn.addEventHandler("onclick", this.batchBtn_onclick, this);
            this.searchEmpBtn.addEventHandler("onclick", this.searchEmpBtn_onclick, this);
            this.searchYetaBtn.addEventHandler("onclick", this.searchYetaBtn_onclick, this);
            this.Div00.deductionTab.perosnalDdtTP.addFamilyBtn.addEventHandler("onclick", this.addFamilyBtn_onclick, this);
            this.Div00.deductionTab.insuranceDdtTp.addinsuranceBtn.addEventHandler("onclick", this.addinsuranceBtn_onclick, this);
            this.Div00.deductionTab.creditCardDdtTp.addCreditCardBtn.addEventHandler("onclick", this.addCreditCardBtn_onclick, this);
            this.Div00.deductionTab.medicalEducationDdtTp.addMedicalBtn.addEventHandler("onclick", this.addMedicalBtn_onclick, this);
            this.Div00.deductionTab.medicalEducationDdtTp.addEducationBtn.addEventHandler("onclick", this.addEducationBtn_onclick, this);
            this.Div00.deductionTab.donationDdtTp.addDonationBtn.addEventHandler("onclick", this.addDonationBtn_onclick, this);
            this.Div00.deductionTab.formerCompanyDdtTp.addBefWorkPlaceBtn.addEventHandler("onclick", this.addBefWorkPlaceBtn_onclick, this);
            this.Div00.deductionTab.formerCompanyDdtTp.delBefWorkPlaceBtn.addEventHandler("onclick", this.delBefWorkPlaceBtn_onclick, this);

        };

        this.loadIncludeScript("HY_InsertDeductionForm.xfdl");

       
    };
}
)();

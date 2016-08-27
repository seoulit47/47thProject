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
                this.set_name("AR_ResolReceiptMgtForm");
                this.set_classname("AR_ResolReceiptMgtForm");
                this.set_titletext("결의서 접수 관리화면");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSlip", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"slipNo\" type=\"STRING\" size=\"256\"/><Column id=\"gipyoDate\" type=\"STRING\" size=\"256\"/><Column id=\"slipDiv\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"operNo\" type=\"STRING\" size=\"256\"/><Column id=\"abs\" type=\"STRING\" size=\"256\"/><Column id=\"demdDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"resolDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"regWorker\" type=\"STRING\" size=\"256\"/><Column id=\"danDiv\" type=\"STRING\" size=\"256\"/><Column id=\"prfYb\" type=\"STRING\" size=\"256\"/><Column id=\"receiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"sakNo\" type=\"STRING\" size=\"256\"/><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/><Column id=\"closYb\" type=\"STRING\" size=\"256\"/><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRunBudg", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"cngAmount\" type=\"STRING\" size=\"256\"/><Column id=\"allotPlanAmount\" type=\"STRING\" size=\"256\"/><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"causeAmount\" type=\"STRING\" size=\"256\"/><Column id=\"budgAmount\" type=\"STRING\" size=\"256\"/><Column id=\"budgBal\" type=\"STRING\" size=\"256\"/><Column id=\"bimokNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokLevel\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsJibulDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBank", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPurchSalesDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBillDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsCreDebDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPayRec", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"cardNo\" type=\"STRING\" size=\"256\"/><Column id=\"payDiv\" type=\"STRING\" size=\"256\"/><Column id=\"stdTask\" type=\"STRING\" size=\"256\"/><Column id=\"stdBimok\" type=\"STRING\" size=\"256\"/><Column id=\"cardUseDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvNo\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"operNo\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"depoOwner\" type=\"STRING\" size=\"256\"/><Column id=\"transDate\" type=\"STRING\" size=\"256\"/><Column id=\"transBank\" type=\"STRING\" size=\"256\"/><Column id=\"accountNo\" type=\"STRING\" size=\"256\"/><Column id=\"price\" type=\"STRING\" size=\"256\"/><Column id=\"att\" type=\"STRING\" size=\"256\"/><Column id=\"cttInwon\" type=\"STRING\" size=\"256\"/><Column id=\"users\" type=\"STRING\" size=\"256\"/><Column id=\"foodCostYb\" type=\"STRING\" size=\"256\"/><Column id=\"taxinvYb\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/><Column id=\"slipNo\" type=\"STRING\" size=\"256\"/><Column id=\"exePurp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTaxInv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"pubNo\" type=\"STRING\" size=\"256\"/><Column id=\"pubDate\" type=\"STRING\" size=\"256\"/><Column id=\"pubDiv\" type=\"STRING\" size=\"256\"/><Column id=\"slipNo\" type=\"STRING\" size=\"256\"/><Column id=\"billDiv\" type=\"STRING\" size=\"256\"/><Column id=\"purchSalesDiv\" type=\"STRING\" size=\"256\"/><Column id=\"anspDiv\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"aBS\" type=\"STRING\" size=\"256\"/><Column id=\"splyPrice\" type=\"STRING\" size=\"256\"/><Column id=\"taxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/><Column id=\"gipyoDate\" type=\"STRING\" size=\"256\"/><Column id=\"sumPrice\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAppendFile", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"fileSaveLoc\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/><Column id=\"fileSaveName\" type=\"STRING\" size=\"256\"/><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/><Column id=\"slipNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDept", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsProgDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsJour", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"creDebDiv\" type=\"STRING\" size=\"256\"/><Column id=\"debAmt\" type=\"STRING\" size=\"256\"/><Column id=\"creAmt\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/><Column id=\"slipNo\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/><Column id=\"closYb\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsResolLet", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/><Column id=\"resolDiv\" type=\"STRING\" size=\"256\"/><Column id=\"resolDate\" type=\"STRING\" size=\"256\"/><Column id=\"resoler\" type=\"STRING\" size=\"256\"/><Column id=\"resolDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"progStatDiv\" type=\"STRING\" size=\"256\"/><Column id=\"sakNo\" type=\"STRING\" size=\"256\"/><Column id=\"receiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"operNo\" type=\"STRING\" size=\"256\"/><Column id=\"resolAmt\" type=\"STRING\" size=\"256\"/><Column id=\"brCau\" type=\"STRING\" size=\"256\"/><Column id=\"abs\" type=\"STRING\" size=\"256\"/><Column id=\"demdDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"autoJourYb\" type=\"STRING\" size=\"256\"/><Column id=\"modWorker\" type=\"STRING\" size=\"256\"/><Column id=\"modDate\" type=\"STRING\" size=\"256\"/><Column id=\"danDiv\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"surtaxYb\" type=\"STRING\" size=\"256\"/><Column id=\"resolDeptExtsn\" type=\"STRING\" size=\"256\"/><Column id=\"closYb\" type=\"STRING\" size=\"256\"/><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"resolerNm\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"acntCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAccPrid", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"dlineYn\" type=\"STRING\" size=\"256\"/><Column id=\"dlineDate\" type=\"STRING\" size=\"256\"/><Column id=\"dlineManCd\" type=\"STRING\" size=\"256\"/><Column id=\"carrforYn\" type=\"STRING\" size=\"256\"/><Column id=\"carrforManCd\" type=\"STRING\" size=\"256\"/><Column id=\"carrforDate\" type=\"STRING\" size=\"256\"/><Column id=\"regId\" type=\"STRING\" size=\"256\"/><Column id=\"regIp\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"modId\" type=\"STRING\" size=\"256\"/><Column id=\"modIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCust", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAccPridList</Col><Col id=\"URL\">his::acc/elementary/findAccPridList.do</Col><Col id=\"inData\">dsAccPrid=dsAccPrid</Col><Col id=\"outData\">dsAccPrid=dsAccPrid</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findResolLetList</Col><Col id=\"outData\">dsResolLet=dsResolLet</Col><Col id=\"URL\">his::acc/resol/findResolLetList.do</Col><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findResolLetDetail</Col><Col id=\"URL\">his::acc/resol/findResolLetDetailList.do</Col><Col id=\"outData\">dsJour=dsJour dsPayRec=dsPayRec dsAppendFile=dsAppendFile</Col><Col id=\"callbackFunc\">callback</Col></Row><Row><Col id=\"serviceID\">findRunBimok</Col><Col id=\"URL\">his::acc/budget/findRunBimok.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsRunBudg=dsRunBudg</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">searchTaxInvoiceList</Col><Col id=\"URL\">his::acc/vat/findTaxInvList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsTaxInv=dsTaxInv dsDetailTaxInv=dsDetailTaxInv</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findAccount</Col><Col id=\"URL\">his::acc/resol/findAccount.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAccount=dsAccount</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">empInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\">dsHmEmp=dsHmEmp</Col><Col id=\"outData\">dsHmEmp=dsHmEmp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">modifyResolLet</Col><Col id=\"URL\">his::acc/resol/modifyResolLet.do</Col><Col id=\"inData\">dsResolLet=dsResolLet:u</Col></Row><Row><Col id=\"serviceID\">removeResolLet</Col><Col id=\"URL\">his::acc/resol/removeResolLet.do</Col><Col id=\"inData\">dsResolLet=dsResolLet:u</Col></Row><Row><Col id=\"serviceID\">batchResolLetProcess</Col><Col id=\"URL\">his::acc/resol/batchResolLetProcess.do</Col><Col id=\"inData\">dsResolLet=dsResolLet:a dsJour=dsJour:a dsPayRec=dsPayRec:a dsTaxInv=dsTaxInv:a dsDetailTaxInv=dsDetailTaxInv:a </Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">registerSlipList</Col><Col id=\"URL\">his::acc/slip/registerSlipList.do</Col><Col id=\"inData\">dsSlip=dsSlip:a</Col><Col id=\"callbackFunc\">callback</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA039</Col><Col id=\"dsName\">dsResolDiv</Col></Row><Row><Col id=\"code\">CM001</Col><Col id=\"dsName\">dsCust</Col></Row><Row><Col id=\"code\">GP500</Col><Col id=\"dsName\">dsDept</Col></Row><Row><Col id=\"code\">GB010</Col><Col id=\"dsName\">dsProgDiv</Col></Row><Row><Col id=\"code\">GA061</Col><Col id=\"dsName\">dsJibulDiv</Col></Row><Row><Col id=\"code\">GA003</Col><Col id=\"dsName\">dsBank</Col></Row><Row><Col id=\"code\">GA075</Col><Col id=\"dsName\">dsPurchSalesDiv</Col></Row><Row><Col id=\"code\">GA074</Col><Col id=\"dsName\">dsBillDiv</Col></Row><Row><Col id=\"code\">GA049</Col><Col id=\"dsName\">dsCreDebDiv</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsResolDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAccount", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"custNm\" type=\"STRING\" size=\"256\"/><Column id=\"adptdt\" type=\"STRING\" size=\"256\"/><Column id=\"bussNo\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"faxNo\" type=\"STRING\" size=\"256\"/><Column id=\"bankCd\" type=\"STRING\" size=\"256\"/><Column id=\"accNo\" type=\"STRING\" size=\"256\"/><Column id=\"busctgNm\" type=\"STRING\" size=\"256\"/><Column id=\"busshpNm\" type=\"STRING\" size=\"256\"/><Column id=\"prsdntNm\" type=\"STRING\" size=\"256\"/><Column id=\"resNo\" type=\"STRING\" size=\"256\"/><Column id=\"dpstr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"gpuseYn\" type=\"STRING\" size=\"256\"/><Column id=\"gduseYn\" type=\"STRING\" size=\"256\"/><Column id=\"cardYn\" type=\"STRING\" size=\"256\"/><Column id=\"riuseYn\" type=\"STRING\" size=\"256\"/><Column id=\"hospcls\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "1242", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.81%", "-4", null, "60", "77.56%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("결의서접수 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "1.2%", "60", null, "702", "0.88%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "34.09%", "7", null, "27", "0.57%", null, this.Div01);
            obj.getSetter("taborder").set("209");
            obj.set_text("결의서 상세정보");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "1.22%", "39", null, "27", "91.7%", null, this.Div01);
            obj.getSetter("taborder").set("210");
            obj.set_text("결의구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "17.33%", "39", null, "27", "75.67%", null, this.Div01);
            obj.getSetter("taborder").set("211");
            obj.set_text("회계기수");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "1.22%", "127", null, "27", "91.7%", null, this.Div01);
            obj.getSetter("taborder").set("212");
            obj.set_text("결의부서");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "1.22%", "98", null, "27", "91.7%", null, this.Div01);
            obj.getSetter("taborder").set("213");
            obj.set_text("결의번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "1.22%", "68", null, "27", "91.7%", null, this.Div01);
            obj.getSetter("taborder").set("214");
            obj.set_text("결의일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "34.09%", "36", null, "25", "58.91%", null, this.Div01);
            obj.getSetter("taborder").set("215");
            obj.set_text("결의번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "34.09%", "63", null, "25", "58.91%", null, this.Div01);
            obj.getSetter("taborder").set("216");
            obj.set_text("결의일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "34.09%", "91", null, "25", "58.91%", null, this.Div01);
            obj.getSetter("taborder").set("217");
            obj.set_text("거래처");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "50.45%", "63", null, "25", "42.47%", null, this.Div01);
            obj.getSetter("taborder").set("218");
            obj.set_text("결의금액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc09", "absolute", "50.45%", "36", null, "25", "42.47%", null, this.Div01);
            obj.getSetter("taborder").set("219");
            obj.set_text("결의구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc10", "absolute", "34.09%", "119", null, "25", "58.91%", null, this.Div01);
            obj.getSetter("taborder").set("220");
            obj.set_text("진행상태");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc11", "absolute", "66.8%", "36", null, "25", "26.2%", null, this.Div01);
            obj.getSetter("taborder").set("221");
            obj.set_text("요구부서");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc12", "absolute", "50.45%", "91", null, "25", "42.47%", null, this.Div01);
            obj.getSetter("taborder").set("222");
            obj.set_text("사업자번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc13", "absolute", "83.08%", "36", null, "25", "9.85%", null, this.Div01);
            obj.getSetter("taborder").set("223");
            obj.set_text("결의부서");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc14", "absolute", "83.08%", "90", null, "25", "9.85%", null, this.Div01);
            obj.getSetter("taborder").set("224");
            obj.set_text("결의부서전화");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc15", "absolute", "83.08%", "117", null, "25", "9.85%", null, this.Div01);
            obj.getSetter("taborder").set("225");
            obj.set_text("원인번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc16", "absolute", "83.08%", "63", null, "25", "9.85%", null, this.Div01);
            obj.getSetter("taborder").set("226");
            obj.set_text("결의자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc17", "absolute", "1.22%", "7", null, "27", "66.56%", null, this.Div01);
            obj.getSetter("taborder").set("227");
            obj.set_text("전표대기 결의서 목록");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc18", "absolute", "66.8%", "63", null, "25", "26.2%", null, this.Div01);
            obj.getSetter("taborder").set("229");
            obj.set_text("계약번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc19", "absolute", "66.8%", "90", null, "25", "26.2%", null, this.Div01);
            obj.getSetter("taborder").set("230");
            obj.set_text("접수번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Combo("resolDivCombo", "absolute", "8.62%", "37", null, "27", "82.91%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("231");
            obj.set_innerdataset("@dsResolDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("accPridCombo", "absolute", "24.65%", "36", null, "27", "66.88%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("232");
            obj.set_innerdataset("@dsAccPrid");
            obj.set_codecolumn("accPrid");
            obj.set_datacolumn("accPrid");
            obj.getSetter("class").set("AreaCombo");
            obj = new Edit("endResolNoEd", "absolute", "23.11%", "98", null, "27", "66.88%", null, this.Div01);
            obj.set_taborder("233");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("startResolNoEd", "absolute", "8.71%", "98", null, "27", "81.29%", null, this.Div01);
            obj.set_taborder("234");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("resolDeptCdEd", "absolute", "8.71%", "128", null, "27", "82.75%", null, this.Div01);
            obj.set_taborder("235");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("resolNoEd", "absolute", "41.58%", "35", null, "25", "49.8%", null, this.Div01);
            obj.set_taborder("236");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("resolDate", "absolute", "41.58%", "62", null, "25", "49.8%", null, this.Div01);
            obj.set_taborder("237");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("AuthEdt09", "absolute", "57.85%", "90", null, "25", "33.44%", null, this.Div01);
            obj.set_taborder("238");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("AuthEdt10", "absolute", "57.85%", "63", null, "25", "33.44%", null, this.Div01);
            obj.set_taborder("239");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("AuthEdt12", "absolute", "72.66%", "90", null, "25", "18.55%", null, this.Div01);
            obj.set_taborder("240");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("AuthEdt13", "absolute", "72.66%", "63", null, "25", "18.55%", null, this.Div01);
            obj.set_taborder("241");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("resolerCdEd", "absolute", "90.64%", "63", null, "25", "0.73%", null, this.Div01);
            obj.set_taborder("242");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("AuthEdt17", "absolute", "90.64%", "90", null, "25", "0.57%", null, this.Div01);
            obj.set_taborder("243");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("AuthEdt18", "absolute", "90.64%", "117", null, "25", "0.57%", null, this.Div01);
            obj.set_taborder("244");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc20", "absolute", "19.37%", "98", null, "27", "77.79%", null, this.Div01);
            obj.getSetter("taborder").set("245");
            obj.set_text("~");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc21", "absolute", "19.37%", "68", null, "27", "77.79%", null, this.Div01);
            obj.getSetter("taborder").set("246");
            obj.set_text("~");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Calendar("resolStartDateCal", "absolute", "8.71%", "68", null, "27", "81.45%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("247");
            obj = new Calendar("resolEndDateCal", "absolute", "23.11%", "68", null, "27", "67.05%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("248");
            obj = new Grid("resolLiGrid", "absolute", "1.22%", "186", null, "509", "66.88%", null, this.Div01);
            obj.set_taborder("249");
            obj.set_binddataset("dsResolLet");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"결의번호\"/><Cell col=\"2\" text=\"결의구분\"/><Cell col=\"3\" text=\"결의부서\"/><Cell col=\"4\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell celltype=\"none\" displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"bind:check\" editautoselect=\"false\"/><Cell col=\"1\" text=\"bind:resolNo\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" style=\"align:right;\" text=\"bind:resolDiv\" maskchar=\" \" combodataset=\"dsResolDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:resolDeptCd\" combodataset=\"dsDept\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:progStatDiv\" combodataset=\"dsProgDiv\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "34.09%", "201", null, "50", "0.57%", null, this.Div01);
            obj.set_taborder("250");
            obj.set_binddataset("dsRunBudg");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"비목명\"/><Cell col=\"2\" text=\"배정예산금액\"/><Cell col=\"3\" text=\"예산금액\"/><Cell col=\"4\" text=\"결의가능금액\"/></Band><Band id=\"body\"><Cell text=\"bind:bimokCd\"/><Cell col=\"1\" text=\"bind:bimokNm\"/><Cell col=\"2\" text=\"bind:allotPlanAmount\"/><Cell col=\"3\" text=\"bind:budgAmount\"/><Cell col=\"4\" text=\"bind:budgBal\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("payGrid", "absolute", "34.09%", "345", null, "173", "0.57%", null, this.Div01);
            obj.set_taborder("251");
            obj.set_binddataset("dsPayRec");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"순번\"/><Cell col=\"1\" text=\"지불구분\"/><Cell col=\"2\" colspan=\"2\" text=\"연구과제\"/><Cell col=\"4\" text=\"연구비목\"/><Cell col=\"5\" text=\"카드번호\"/><Cell col=\"6\" text=\"카드사용일\"/><Cell col=\"7\" text=\"승인번호\"/><Cell col=\"8\" text=\"거래처명\"/><Cell col=\"9\" colspan=\"2\" text=\"사업자번호\"/><Cell col=\"11\" text=\"주소\"/><Cell row=\"1\" col=\"1\" text=\"예금주\"/><Cell row=\"1\" col=\"2\" text=\"이체일\"/><Cell row=\"1\" col=\"3\" text=\"이체은행\"/><Cell row=\"1\" col=\"4\" text=\"계좌번호\"/><Cell row=\"1\" col=\"5\" colspan=\"6\" text=\"집행목적\"/><Cell row=\"1\" col=\"11\" text=\"금액\"/><Cell row=\"2\" col=\"1\" text=\"사용자\"/><Cell row=\"2\" col=\"2\" text=\"참석인원\"/><Cell row=\"2\" col=\"3\" colspan=\"6\" text=\"참석자\"/><Cell row=\"2\" col=\"9\" text=\"식비\"/><Cell row=\"2\" col=\"10\" text=\"계산서\"/><Cell row=\"2\" col=\"11\" text=\"사유/비고\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" text=\"bind:seq\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:payDiv\" combodataset=\"dsJibulDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" colspan=\"2\" text=\"bind:stdTask\"/><Cell col=\"4\" text=\"bind:stdBimok\"/><Cell col=\"5\" edittype=\"expand\" text=\"bind:cardNo\"/><Cell col=\"6\" text=\"bind:cardUseDate\"/><Cell col=\"7\" text=\"bind:aprvNo\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"custnm\"/><Cell col=\"9\" colspan=\"2\" edittype=\"normal\" text=\"bind:operNo\"/><Cell col=\"11\" edittype=\"normal\" text=\"bind:addr\"/><Cell row=\"1\" col=\"1\" text=\"bind:depoOwner\"/><Cell row=\"1\" col=\"2\" edittype=\"date\" text=\"bind:transDate\"/><Cell row=\"1\" col=\"3\" displaytype=\"combo\" text=\"bind:transBank\" combodataset=\"dsBank\" combocodecol=\"code\" combodatacol=\"value\"/><Cell row=\"1\" col=\"4\" text=\"bind:accountNo\"/><Cell row=\"1\" col=\"5\" colspan=\"6\" edittype=\"normal\" text=\"bind:exePurp\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" edittype=\"normal\" text=\"bind:price\"/><Cell row=\"2\" col=\"1\" displaytype=\"combo\" edittype=\"expand\" text=\"bind:users\" combodataset=\"dsHmEmp\" combocodecol=\"empNo\" combodatacol=\"empNm\"/><Cell row=\"2\" col=\"2\" edittype=\"normal\" text=\"bind:cttInwon\"/><Cell row=\"2\" col=\"3\" colspan=\"6\" text=\"bind:att\"/><Cell row=\"2\" col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:foodCostYb\"/><Cell row=\"2\" col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:taxinvYb\"/><Cell row=\"2\" col=\"11\" edittype=\"normal\" text=\"bind:note\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"10\" text=\"합계\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:getSum(&quot;price*1&quot;)\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("taxInvGrid", "absolute", "34.09%", "523", null, "172", "0.65%", null, this.Div01);
            obj.set_taborder("252");
            obj.set_binddataset("dsTaxInv");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"순번\"/><Cell col=\"1\" text=\"발행일\"/><Cell col=\"2\" text=\"계산서구분\"/><Cell col=\"3\" text=\"매입/매출\"/><Cell col=\"4\" colspan=\"2\" text=\"금액\"/><Cell col=\"6\" text=\"공금가액\"/><Cell col=\"7\" text=\"세액\"/><Cell row=\"1\" col=\"1\" text=\"거래처\"/><Cell row=\"1\" col=\"2\" text=\"거래처명\"/><Cell row=\"1\" col=\"3\" text=\"사업자번호\"/><Cell row=\"1\" col=\"4\" text=\"대표자\"/><Cell row=\"1\" col=\"5\" text=\"업태\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" text=\"종목\"/><Cell row=\"2\" col=\"1\" colspan=\"7\" text=\"품목\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:pubDate\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:billDiv\" combodataset=\"dsBillDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:purchSalesDiv\" combodataset=\"dsPurchSalesDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"4\" colspan=\"2\" displaytype=\"number\" text=\"bind:sumPrice\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:splyPrice\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:taxAmt\"/><Cell row=\"1\" col=\"1\" text=\"bind:custCd\"/><Cell row=\"1\" col=\"2\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"custnm\"/><Cell row=\"1\" col=\"3\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"bussno\"/><Cell row=\"1\" col=\"4\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"prsdntnm\"/><Cell row=\"1\" col=\"5\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"busshpnm\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"busctgnm\"/><Cell row=\"2\" col=\"1\" colspan=\"7\" edittype=\"normal\" text=\"bind:aBS\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\"/><Cell col=\"4\" colspan=\"2\" displaytype=\"number\" expr=\"expr:getSum(&quot;sumPrice*1&quot;)\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:getSum(&quot;splyPrice*1&quot;)\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:getSum(&quot;taxAmt*1&quot;)\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc22", "absolute", "34.09%", "147", null, "25", "58.91%", null, this.Div01);
            obj.getSetter("taborder").set("253");
            obj.set_text("출력양식");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc23", "absolute", "50.45%", "119", null, "25", "42.47%", null, this.Div01);
            obj.getSetter("taborder").set("254");
            obj.set_text("계정과목");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc24", "absolute", "50.45%", "147", null, "25", "42.47%", null, this.Div01);
            obj.getSetter("taborder").set("255");
            obj.set_text("보조과목");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc25", "absolute", "34.09%", "175", null, "25", "58.91%", null, this.Div01);
            obj.getSetter("taborder").set("256");
            obj.set_text("적요");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc26", "absolute", "66.8%", "145", null, "25", "26.2%", null, this.Div01);
            obj.getSetter("taborder").set("257");
            obj.set_text("반려사유");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("resolBrCauEd", "absolute", "74.04%", "145", null, "25", "0.57%", null, this.Div01);
            obj.set_taborder("258");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("assiSubNmEd", "absolute", "57.85%", "146", null, "25", "33.44%", null, this.Div01);
            obj.set_taborder("259");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("AuthEdt20", "absolute", "57.85%", "118", null, "25", "33.44%", null, this.Div01);
            obj.set_taborder("260");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("AuthEdt21", "absolute", "41.58%", "145", null, "25", "49.8%", null, this.Div01);
            obj.set_taborder("261");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("acntNmEd", "absolute", "66.8%", "118", null, "25", "17.17%", null, this.Div01);
            obj.set_taborder("262");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("JourGrid", "absolute", "34.09%", "253", null, "90", "0.65%", null, this.Div01);
            obj.set_taborder("266");
            obj.set_binddataset("dsJour");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"106\"/><Column size=\"39\"/><Column size=\"179\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"167\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"차대구분\"/><Cell col=\"2\" colspan=\"2\" text=\"계정코드\"/><Cell col=\"4\" text=\"계정코드명\"/><Cell col=\"5\" colspan=\"2\" text=\"보조과목코드\"/><Cell col=\"7\" text=\"보조과목명\"/><Cell col=\"8\" text=\"차변금액\"/><Cell col=\"9\" text=\"대변금액\"/></Band><Band id=\"body\"><Cell text=\"bind:seq\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;combo&quot;\" text=\"bind:creDebDiv\" combodataset=\"dsCreDebDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" text=\"bind:acntCd\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;button&quot;\"/><Cell col=\"4\" text=\"bind:acntNm\"/><Cell col=\"5\" text=\"bind:assiSubCd\"/><Cell col=\"6\" displaytype=\"button\" edittype=\"button\"/><Cell col=\"7\" text=\"bind:assiSubNm\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:debAmt\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:creAmt\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"7\" text=\"합계\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:getSum('!isNaN(debAmt)== true? debAmt: &quot;0&quot;')\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:getSum('!isNaN(creAmt)== true? creAmt: &quot;0&quot;')\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "41.58%", "174", null, "25", "0.57%", null, this.Div01);
            obj.set_taborder("268");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("slipRegBtn", "absolute", "1.22%", "159", null, "25", "89.99%", null, this.Div01);
            obj.set_taborder("269");
            obj.set_text("결의서 전표등록");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("resolBrBtn", "absolute", "10.41%", "159", null, "25", "80.23%", null, this.Div01);
            obj.set_taborder("270");
            obj.set_text("결의서 접수반려");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("resolDeptNameEd", "absolute", "19.93%", "129", null, "27", "71.52%", null, this.Div01);
            obj.set_taborder("271");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Combo("resolDivCombo02", "absolute", "57.85%", "36", null, "25", "33.52%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("272");
            obj.set_innerdataset("@dsResolDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("resolDivCombo00", "absolute", "72.66%", "36", null, "25", "18.71%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("273");
            obj.set_innerdataset("@dsDept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("resolDeptCdCombo", "absolute", "90.64%", "36", null, "25", "0.73%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("274");
            obj.set_innerdataset("@dsDept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");

            obj = new Combo("resolDivCombo02", "absolute", "41.68%", "149", null, "25", "49.68%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@dsCust");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");

            obj = new Combo("progStatDiv", "absolute", "41.68%", "177", null, "25", "49.68%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@dsProgDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");

            obj = new Button("searchDeptBtn", "absolute", "227", "188", "29", "26", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchResolBtn", "absolute", "368", "189", "54", "29", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1242, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 702, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AR_ResolReceiptMgtForm");
            		p.set_titletext("결의서 접수 관리화면");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","resolDivCombo02","value","dsResolLet","custCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","progStatDiv","value","dsResolLet","custCd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AR_ResolReceiptMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AR_ResolReceiptMgtForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        //자동분개 여부
        var autoJourYes;
        //회계년도
        var accYear;

        
        //  폼 로드 이벤트
        this.AR_ResolReceiptMgtForm_onload = function(obj,e)
        {
        	this.gfnBind();
        	//회계기수 호출 메서드
        	this.gfnService("findAccPridList",false);
        	//회계기수 현재 회계기수로 셋팅
        	//this.Div01.accPridCombo.displaynulltext=application.gdsAccPrid.getColumn(0,"accPrid");
        	this.Div01.accPridCombo.displaynulltext='4';
        	//회계기수 accPrid변수에 셋팅
        	var accPrid=this.Div01.accPridCombo.displaynulltext;
        	//회계기수 argument에 셋팅
        	var argument ='accPrid='+accPrid;
        	//결의서 조회 메서드
        	var findResolLetnRow = this.dsService.findRow( "serviceID", "findResolLetList");
        	this.dsService.setColumn(findResolLetnRow,"argument",argument);
        	this.gfnService("findResolLetList");
        	//거래처 조회 메서드
        	this.gfnService("findAccount",false);//거래처 데이터셋
        	this.dsAccount.filter("custcd==''");	
        	this.gfnService("empInfo");//사원정보 데이터셋
        }

        // 부서검색 팝업
        this.searchDeptBtn_onclick = function(obj,e)
        {
        	this.gfnCodePopup('GP500');
        }
        //setCode 함수
        this.setCode=function(code,array){
        	this.Div01.resolDeptCdEd.set_value(array[0]);
        	this.Div01.resolDeptNameEd.set_value(array[1]);
        }

        // 결의서 조회 버튼 클릭이벤트
        this.searchResolBtn_onclick = function(obj,e)
        {
        	//회계기수 셋팅
        	var accPrid = this.Div01.accPridCombo.displaynulltext;	
        	//결의구분 셋팅
        	var resolDiv = this.Div01.resolDivCombo.value;		
        	//결의부서 셋팅
        	var resolDeptCd = this.Div01.resolDeptCdEd.value;
        	//argument에 변수들 셋팅
        	var argument ='accPrid='+accPrid;
        		argument +=' resolDiv='+resolDiv;
        		argument +=' resolDeptCd='+resolDeptCd;
        		//진행상태가 예산원인등록, 결의접수결재신청만 조회
        		argument +=' resolutionReceipt=Y';				
        	
        	var nRow = this.dsService.findRow( "serviceID", "findResolLetList" );
        	this.dsService.setColumn(nRow,"argument",argument);
        	//조회 메서드 호출
        	this.gfnService("findResolLetList");
        }

        
        //결의서반려 버튼 클릭이벤트
        this.Div01_resolBrBtn_onclick = function(obj,e)
        {
        	var alr=confirm("선택된 결의번호'"+this.Div01.resolNoEd.value+"' 결의서를 접수반려 하시겠습니까?");
        	if(alr==true){
        		//반려사유 등록 화면
        		var resolBrCau = application.open("resolBrCauPopupForm"
        											,"acc::AR_ResolBrCauPopupForm.xfdl"
        											,this.parent
        											,""
        											,"showtitlebar=true showstatusbar=false"
        											, 250
        											,300);
        		alert("반려사유:"+resolBrCau);
        		//팝업창에서 넘겨받은 반려사유에 값이 있을 때 실행
        		if(resolBrCau!=null){
        			//반려사유 셋팅
        			this.Div01.resolBrCauEd.value=resolBrCau;
        			//진행상태 결의접수반려로 셋팅
        			this.Div01.progStatDiv.value="52";
        		}		
        	}	
        }

        
        //결의서등록 버튼 클릭이벤트
        this.Div01_slipRegBtn_onclick = function(obj,e)
        {
        	var date=this.gfnDate("yymm");
        	var gipyoDate=this.gfnDate("yyyymmdd");
        	//체크된 결의서가 있을때 실행
        	if(this.dsResolLet.lookup("check","1","check")!=null){
        		//dsResolLet row수 만큼 for문 실행
        		for(var i=0; i<this.dsResolLet.getRowCount();i++){			
        			//체크된 결의서에 한해 실행
        			if(this.dsResolLet.getColumn(i,"check")==1){
        				//dsSlip row생성
        				var row=this.dsSlip.addRow();
        				//전표번호 셋팅
        				this.dsSlip.setColumn(row,"slipNo",date);
        				//기표일자 셋팅				
        				this.dsSlip.setColumn(row,"gipyoDate",gipyoDate);
        				//전표구분 셋팅
        				this.dsSlip.setColumn(row,"slipDiv",this.dsResolLet.getColumn(i,"resolDiv"));
        				//계약번호 셋팅
        				this.dsSlip.setColumn(row,"ctrtNo",this.dsResolLet.getColumn(i,"ctrtNo"));
        				//거래처코드 셋팅
        				this.dsSlip.setColumn(row,"custCd",this.dsResolLet.getColumn(i,"custCd"));
        				//사업자번호 셋팅
        				this.dsSlip.setColumn(row,"operNo",this.dsResolLet.getColumn(i,"operNo"));
        				//적요 셋팅
        				this.dsSlip.setColumn(row,"abs",this.dsResolLet.getColumn(i,"abs"));
        				//요구부서코드 셋팅
        				this.dsSlip.setColumn(row,"demdDeptCd",this.dsResolLet.getColumn(i,"demdDeptCd"));
        				//결의부서코드 셋팅
        				this.dsSlip.setColumn(row,"resolDeptCd",this.dsResolLet.getColumn(i,"resolDeptCd"));
        				//등록자 셋팅
        				this.dsSlip.setColumn(row,"regWorker",application.gdsEmp.getColumn(0,"empNo"));
        				//단구분 셋팅
        				this.dsSlip.setColumn(row,"danDiv","사삼병원");
        				//접수번호 셋팅
        				this.dsSlip.setColumn(row,"receiptNo",this.dsResolLet.getColumn(i,"receiptNo"));
        				//원인번호 셋팅
        				this.dsSlip.setColumn(row,"sakNo",this.dsResolLet.getColumn(i,"sakNo"));
        				//결의번호 셋팅
        				this.dsSlip.setColumn(row,"resolNo",this.dsResolLet.getColumn(i,"resolNo"));
        				//결산여부 셋팅
        				this.dsSlip.setColumn(row,"closYb","N");
        				//회계기수 셋팅
        				this.dsSlip.setColumn(row,"accPrid",this.dsResolLet.getColumn(i,"accPrid"));
        				//전표 등록  메서드 호출
        				this.gfnService("registerSlipList");
        			}
        		}
        	//체크된 결의서가 없을때 실행		
        	}else{
        		alert("전표로 등록할 결의서를 선택하시기 바랍니다.");
        	}
        }

        // 그리드 셀 클릭이벤트
        this.grid_oncellclick = function(obj,e)
        {
        	if(e.cell=="0"){
        		var check="0";	
        		var obj=this.dsResolLet.getColumn(e.row,"check");
        		if(obj==0){
        			this.dsResolLet.setColumn(e.row,"check","1");
        			}else if(obj==1){
        			this.dsResolLet.setColumn(e.row,"check","0");
        			}
        		
        	//다른 셀 클릭시
        	}else{
        		//자동분개 된 결의서
        		if(this.dsResolLet.getColumn(e.row,"autoJourYb")){
        			//자동분개 여부
        			autoJourYes=this.dsResolLet.getColumn(e.row,"autoJourYb");
        			//회계년도
        			var year=this.dsResolLet.getColumn(e.row,"resolDate");
        			//전역변수에 회계년도 셋팅
        			accYear = 2016;		
        		}	
        		//클릭한 결의변호 변수에 셋팅	
        		var resolNo=this.dsResolLet.getColumn(this.dsResolLet.rowposition,"resolNo");
        		//argument에 변수 셋팅
        		var argument ='resolNo='+resolNo;		
        		//dsService에서 findResolLetDetail 메서드 row 얻기
        		var nRow = this.dsService.findRow( "serviceID", "findResolLetDetail");
        		//findResolLetDetail메서드에 argument 셋팅
        		this.dsService.setColumn(nRow,"argument",argument);
        		//findResolLetDetail메서드 호출
        		this.gfnService("findResolLetDetail");
        	
        		//부가세 조회	
        		var argument = 'resolNo='+resolNo;
        		var nRow = this.dsService.findRow( "serviceID", "searchTaxInvoiceList" );
        		this.dsService.setColumn(nRow,"argument",argument);
        		this.gfnService("searchTaxInvoiceList");
        	}	
        }

        // 콜백함수
        this.callback = function(trid,ErrorCode,ErrorMsg){
        	//결의서 상세 메서드 호출 이후
        	if(trid=="findResolLetDetailList"){
        		//자동부개 일시 실행		
        		if(autoJourYes=="true"){			
        			//분개의 차변 예산비목 값을 bimokCd 셋팅
        			var bimokCd = this.dsJour.getColumn(0,"bimokCd");			
        			this.acntNmEd.value=this.dsJour.getColumn(0,"acntNm");
        			//보조과목명이 있을 때만 실행
        			if(this.dsJour.getColumn(0,"assiSubNm")!=null){
        				//보조과목명 assiSubNmEd에 셋팅				
        				this.Div01.assiSubNmEd.value=dsJour.getColumn(0,"assiSubNm");
        			}
        			//회계년도 
        			var argument ='accYear='+accYear;
        			//비목코드
        			argument +=' bimokCd='+bimokCd;
        			var nRow = this.dsService.findRow( "serviceID", "findRunBimok" );
        			this.dsService.setColumn(nRow,"argument",argument);
        			//예산비목 조회 메서드 호출
        			this.gfnService("findRunBimok");	
        		}
        	//전표등록 메서드 호출 이후
        	}else if(trid=="registerSlipList"){
        		alert("등록완료");
        		this.reload();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHmEmp.addEventHandler("onrowposchanged", this.ds_emp_onrowposchanged, this);
            this.dsTaxInv.addEventHandler("canrowposchange", this.dsTaxInv_canrowposchange, this);
            this.dsAccPrid.addEventHandler("onrowposchanged", this.dsAccYear_onrowposchanged, this);
            this.addEventHandler("onload", this.AR_ResolReceiptMgtForm_onload, this);
            this.Div01.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc12.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc13.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc14.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc15.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc16.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc17.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc18.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc19.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc20.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc21.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.resolLiGrid.addEventHandler("oncellclick", this.grid_oncellclick, this);
            this.Div01.subCodeStc22.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc23.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc24.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc25.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc26.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.slipRegBtn.addEventHandler("onclick", this.Div01_slipRegBtn_onclick, this);
            this.Div01.resolBrBtn.addEventHandler("onclick", this.Div01_resolBrBtn_onclick, this);
            this.searchDeptBtn.addEventHandler("onclick", this.searchDeptBtn_onclick, this);
            this.searchResolBtn.addEventHandler("onclick", this.searchResolBtn_onclick, this);

        };

        this.loadIncludeScript("AR_ResolReceiptMgtForm.xfdl");

       
    };
}
)();

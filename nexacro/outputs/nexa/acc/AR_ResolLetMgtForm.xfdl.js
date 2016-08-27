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
                this.set_name("AR_ResolLetMgtForm");
                this.set_classname("AR_ResolLetMgtForm");
                this.set_titletext("결의서 관리 화면");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAccount", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"custNm\" type=\"STRING\" size=\"256\"/><Column id=\"adptdt\" type=\"STRING\" size=\"256\"/><Column id=\"bussNo\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"faxNo\" type=\"STRING\" size=\"256\"/><Column id=\"bankCd\" type=\"STRING\" size=\"256\"/><Column id=\"accNo\" type=\"STRING\" size=\"256\"/><Column id=\"busctgNm\" type=\"STRING\" size=\"256\"/><Column id=\"busshpNm\" type=\"STRING\" size=\"256\"/><Column id=\"prsdntNm\" type=\"STRING\" size=\"256\"/><Column id=\"resNo\" type=\"STRING\" size=\"256\"/><Column id=\"dpstr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"gpuseYn\" type=\"STRING\" size=\"256\"/><Column id=\"gduseYn\" type=\"STRING\" size=\"256\"/><Column id=\"cardYn\" type=\"STRING\" size=\"256\"/><Column id=\"riuseYn\" type=\"STRING\" size=\"256\"/><Column id=\"hospcls\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsBillDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsCust", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAccPridList</Col><Col id=\"URL\">his::acc/elementary/findAccPridList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAccPrid=dsAccPrid</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findResolLetList</Col><Col id=\"outData\">dsResolLet=dsResolLet</Col><Col id=\"URL\">his::acc/resol/findResolLetList.do</Col><Col id=\"callbackFunc\">callback</Col></Row><Row><Col id=\"serviceID\">findResolLetDetail</Col><Col id=\"URL\">his::acc/resol/findResolLetDetailList.do</Col><Col id=\"outData\">dsJour=dsJour dsPayRec=dsPayRec dsAppendFile=dsAppendFile</Col><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findRunBimok</Col><Col id=\"URL\">his::acc/budget/findRunBimok.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsRunBudg=dsRunBudg</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">searchTaxInvoiceList</Col><Col id=\"URL\">his::acc/vat/findTaxInvList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsTaxInv=dsTaxinv dsDetailTaxInv=dsDetailTaxinv</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findAccount</Col><Col id=\"URL\">his::acc/resol/findAccount.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAccount=dsAccount</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">empInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsHmEmp=gdsEmp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">modifyResolLet</Col><Col id=\"URL\">his::acc/resol/modifyResolLet.do</Col><Col id=\"inData\">dsResolLet=dsResolLet:u</Col></Row><Row><Col id=\"serviceID\">removeResolLet</Col><Col id=\"URL\">his::acc/resol/removeResolLet.do</Col><Col id=\"inData\">dsResolLet=dsResolLet:u</Col></Row></Rows>");
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

            obj = new Dataset("dsDept", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsRunBudg", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"cngAmount\" type=\"STRING\" size=\"256\"/><Column id=\"allotPlanAmount\" type=\"STRING\" size=\"256\"/><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"causeAmount\" type=\"STRING\" size=\"256\"/><Column id=\"budgAmount\" type=\"STRING\" size=\"256\"/><Column id=\"budgBal\" type=\"STRING\" size=\"256\"/><Column id=\"bimokNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokLevel\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsHmEmp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsAccPrid54654", this);
            obj._setContents("<ColumnInfo><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"dlineYn\" type=\"STRING\" size=\"256\"/><Column id=\"dlineDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "1240", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.79%", "-4", null, "60", "81.68%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("결의서 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("DelBtn02", "absolute", "1132", "728", "90", "32", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn15", "absolute", "939", "728", "90", "32", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn00", "absolute", "1034", "728", "90", "32", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("resolMngmt", "absolute", "2%", "58", null, "702", "1.2%", null, this);
            obj.set_taborder("5");
            obj.style.set_background("#edececff");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "33.72%", "7", null, "27", "1.07%", null, this.resolMngmt);
            obj.getSetter("taborder").set("214");
            obj.set_text("결의서 상세정보");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "0.25%", "39", null, "27", "92.73%", null, this.resolMngmt);
            obj.getSetter("taborder").set("215");
            obj.set_text("결의구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "16.28%", "39", null, "27", "76.69%", null, this.resolMngmt);
            obj.getSetter("taborder").set("216");
            obj.set_text("회계기수");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "0.25%", "134", null, "30", "92.73%", null, this.resolMngmt);
            obj.getSetter("taborder").set("217");
            obj.set_text("결의부서");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "0.25%", "104", null, "27", "92.73%", null, this.resolMngmt);
            obj.getSetter("taborder").set("218");
            obj.set_text("결의번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "0.25%", "71", null, "27", "92.73%", null, this.resolMngmt);
            obj.getSetter("taborder").set("219");
            obj.set_text("결의일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "33.72%", "36", null, "25", "59.34%", null, this.resolMngmt);
            obj.getSetter("taborder").set("220");
            obj.set_text("결의번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "33.72%", "63", null, "25", "59.34%", null, this.resolMngmt);
            obj.getSetter("taborder").set("221");
            obj.set_text("결의일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "33.72%", "91", null, "25", "59.34%", null, this.resolMngmt);
            obj.getSetter("taborder").set("222");
            obj.set_text("거래처");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "50.08%", "63", null, "25", "42.98%", null, this.resolMngmt);
            obj.getSetter("taborder").set("223");
            obj.set_text("결의금액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc09", "absolute", "50.08%", "36", null, "25", "42.98%", null, this.resolMngmt);
            obj.getSetter("taborder").set("224");
            obj.set_text("결의구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc10", "absolute", "33.72%", "119", null, "25", "59.34%", null, this.resolMngmt);
            obj.getSetter("taborder").set("225");
            obj.set_text("진행상태");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc11", "absolute", "66.45%", "36", null, "25", "26.61%", null, this.resolMngmt);
            obj.getSetter("taborder").set("226");
            obj.set_text("요구부서");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc12", "absolute", "50.08%", "91", null, "25", "42.98%", null, this.resolMngmt);
            obj.getSetter("taborder").set("227");
            obj.set_text("사업자번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc13", "absolute", "82.73%", "36", null, "25", "10.25%", null, this.resolMngmt);
            obj.getSetter("taborder").set("228");
            obj.set_text("결의부서");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc14", "absolute", "82.73%", "90", null, "25", "10.25%", null, this.resolMngmt);
            obj.getSetter("taborder").set("229");
            obj.set_text("결의부서전화");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc15", "absolute", "82.73%", "117", null, "25", "10.25%", null, this.resolMngmt);
            obj.getSetter("taborder").set("230");
            obj.set_text("원인번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc16", "absolute", "82.73%", "63", null, "25", "10.25%", null, this.resolMngmt);
            obj.getSetter("taborder").set("231");
            obj.set_text("결의자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc17", "absolute", "0.25%", "7", null, "27", "68.1%", null, this.resolMngmt);
            obj.getSetter("taborder").set("232");
            obj.set_text("결의서 목록");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc18", "absolute", "66.45%", "63", null, "25", "26.61%", null, this.resolMngmt);
            obj.getSetter("taborder").set("233");
            obj.set_text("계약번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc19", "absolute", "66.45%", "90", null, "25", "26.61%", null, this.resolMngmt);
            obj.getSetter("taborder").set("234");
            obj.set_text("접수번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Combo("resolDivCombo", "absolute", "7.6%", "37", null, "30", "84.05%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("235");
            obj.set_innerdataset("dsResolDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("accPridCombo", "absolute", "23.72%", "36", null, "30", "67.93%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("236");
            obj.set_innerdataset("dsAccPrid");
            obj.set_codecolumn("accPrid");
            obj.set_datacolumn("accPrid");
            obj.getSetter("class").set("AreaCombo");
            obj = new Edit("endResolNoEd", "absolute", "22.07%", "104", null, "30", "67.93%", null, this.resolMngmt);
            obj.set_taborder("237");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("startResolNoEd", "absolute", "7.69%", "104", null, "30", "82.31%", null, this.resolMngmt);
            obj.set_taborder("238");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("resolDeptCdEd", "absolute", "7.69%", "136", null, "30", "84.55%", null, this.resolMngmt);
            obj.set_taborder("239");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("resolNoEd", "absolute", "41.16%", "35", null, "25", "50.08%", null, this.resolMngmt);
            obj.set_taborder("240");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("resolDate", "absolute", "41.16%", "62", null, "25", "50.08%", null, this.resolMngmt);
            obj.set_taborder("241");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt09", "absolute", "57.44%", "90", null, "25", "33.8%", null, this.resolMngmt);
            obj.set_taborder("242");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt10", "absolute", "57.44%", "63", null, "25", "33.8%", null, this.resolMngmt);
            obj.set_taborder("243");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt12", "absolute", "73.72%", "90", null, "25", "17.52%", null, this.resolMngmt);
            obj.set_taborder("244");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt13", "absolute", "73.72%", "63", null, "25", "17.52%", null, this.resolMngmt);
            obj.set_taborder("245");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("resolerCdEd", "absolute", "90.25%", "63", null, "25", "1.07%", null, this.resolMngmt);
            obj.set_taborder("246");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt17", "absolute", "90.25%", "90", null, "25", "1.07%", null, this.resolMngmt);
            obj.set_taborder("247");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt18", "absolute", "90.25%", "117", null, "25", "1.07%", null, this.resolMngmt);
            obj.set_taborder("248");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc20", "absolute", "18.35%", "104", null, "27", "78.84%", null, this.resolMngmt);
            obj.getSetter("taborder").set("249");
            obj.set_text("~");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc21", "absolute", "18.35%", "71", null, "27", "78.84%", null, this.resolMngmt);
            obj.getSetter("taborder").set("250");
            obj.set_text("~");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Calendar("resolStartDateCal", "absolute", "7.69%", "71", null, "30", "82.48%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("251");
            obj = new Calendar("resolEndDateCal", "absolute", "22.07%", "71", null, "30", "68.1%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("252");
            obj = new Grid("resolListGrid", "absolute", "0.58%", "172", null, "494", "68.1%", null, this.resolMngmt);
            obj.set_taborder("253");
            obj.set_binddataset("dsResolLet");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"결의번호\"/><Cell col=\"1\" text=\"결의구분\"/><Cell col=\"2\" text=\"결의부서\"/><Cell col=\"3\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell text=\"bind:resolNo\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" style=\"align:right;\" text=\"bind:resolDiv\" maskchar=\" \" combodataset=\"dsResolDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:resolDeptCd\" combodataset=\"dsDept\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:progStatDiv\" combodataset=\"dsProgDiv\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "33.72%", "201", null, "50", "1.07%", null, this.resolMngmt);
            obj.set_taborder("254");
            obj.set_binddataset("dsRunBudg");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"19\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"비목명\"/><Cell col=\"2\" text=\"배정예산금액\"/><Cell col=\"3\" text=\"예산금액\"/><Cell col=\"4\" text=\"결의가능금액\"/></Band><Band id=\"body\"><Cell text=\"bind:bimokCd\"/><Cell col=\"1\" text=\"bind:bimokNm\"/><Cell col=\"2\" text=\"bind:allotPlanAmount\"/><Cell col=\"3\" text=\"bind:budgAmount\"/><Cell col=\"4\" text=\"bind:budgBal\"/></Band></Format></Formats>");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Grid("taxInvGrid", "absolute", "33.72%", "503", null, "162", "1.07%", null, this.resolMngmt);
            obj.set_taborder("255");
            obj.set_binddataset("dsTaxInv");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"19\" band=\"head\"/><Row size=\"19\"/><Row size=\"18\"/><Row size=\"20\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"순번\"/><Cell col=\"1\" text=\"발행일\"/><Cell col=\"2\" text=\"계산서구분\"/><Cell col=\"3\" text=\"매입/매출\"/><Cell col=\"4\" colspan=\"2\" text=\"금액\"/><Cell col=\"6\" text=\"공금가액\"/><Cell col=\"7\" text=\"세액\"/><Cell row=\"1\" col=\"1\" text=\"거래처\"/><Cell row=\"1\" col=\"2\" text=\"거래처명\"/><Cell row=\"1\" col=\"3\" text=\"사업자번호\"/><Cell row=\"1\" col=\"4\" text=\"대표자\"/><Cell row=\"1\" col=\"5\" text=\"업태\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" text=\"종목\"/><Cell row=\"2\" col=\"1\" colspan=\"7\" text=\"품목\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" celltype=\"head\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" colspan=\"2\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\" colspan=\"2\"/><Cell row=\"2\" col=\"1\" colspan=\"7\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\"/><Cell col=\"4\" colspan=\"2\" displaytype=\"number\" expr=\"expr:getSum(&quot;sumPrice*1&quot;)\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:getSum(&quot;splyPrice*1&quot;)\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:getSum(&quot;taxAmt*1&quot;)\"/></Band></Format></Formats>");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc22", "absolute", "33.72%", "147", null, "25", "59.34%", null, this.resolMngmt);
            obj.getSetter("taborder").set("256");
            obj.set_text("출력양식");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc23", "absolute", "50.08%", "119", null, "25", "42.98%", null, this.resolMngmt);
            obj.getSetter("taborder").set("257");
            obj.set_text("계정과목");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc24", "absolute", "50.08%", "147", null, "25", "42.98%", null, this.resolMngmt);
            obj.getSetter("taborder").set("258");
            obj.set_text("보조과목");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc25", "absolute", "33.72%", "175", null, "25", "59.34%", null, this.resolMngmt);
            obj.getSetter("taborder").set("259");
            obj.set_text("적요");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc26", "absolute", "66.45%", "145", null, "25", "26.61%", null, this.resolMngmt);
            obj.getSetter("taborder").set("260");
            obj.set_text("반려사유");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt05", "absolute", "73.72%", "145", null, "25", "1.07%", null, this.resolMngmt);
            obj.set_taborder("261");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("assiSubNmEd", "absolute", "57.44%", "146", null, "25", "33.8%", null, this.resolMngmt);
            obj.set_taborder("262");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt20", "absolute", "57.44%", "118", null, "25", "33.8%", null, this.resolMngmt);
            obj.set_taborder("263");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("resolNoEd09", "absolute", "41.16%", "145", null, "25", "50.08%", null, this.resolMngmt);
            obj.set_taborder("264");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("acntNmEd", "absolute", "66.45%", "118", null, "25", "17.52%", null, this.resolMngmt);
            obj.set_taborder("265");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Grid("JourGrid", "absolute", "33.72%", "253", null, "90", "1.07%", null, this.resolMngmt);
            obj.set_taborder("266");
            obj.set_binddataset("dsJour");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"92\"/><Column size=\"18\"/><Column size=\"100\"/><Column size=\"102\"/><Column size=\"19\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"16\" band=\"head\"/><Row size=\"18\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"차대구분\"/><Cell col=\"2\" colspan=\"2\" text=\"계정코드\"/><Cell col=\"4\" text=\"계정코드명\"/><Cell col=\"5\" colspan=\"2\" text=\"보조과목코드\"/><Cell col=\"7\" text=\"보조과목명\"/><Cell col=\"8\" text=\"차변금액\"/><Cell col=\"9\" text=\"대변금액\"/></Band><Band id=\"body\"><Cell celltype=\"none\" text=\"bind:seq\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;combo&quot;\" text=\"bind:creDebDiv\" combodataset=\"dsCreDebDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" text=\"bind:acntCd\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;button&quot;\" style=\"color:black;color2:black;selectcolor:black;\" text=\"+\"/><Cell col=\"4\" text=\"bind:acntNm\"/><Cell col=\"5\" text=\"bind:assiSubCd\"/><Cell col=\"6\" displaytype=\"button\" edittype=\"button\" style=\"color:black;color2:black;selectcolor:black;\" text=\"+\"/><Cell col=\"7\" text=\"bind:assiSubNm\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:debAmt\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:creAmt\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"7\" text=\"합계\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" expr=\"expr:getSum(!isNaN(debAmt)== true? debAmt: &quot;0&quot;')\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" expr=\"expr:getSum('!isNaN(creAmt)== true? creAmt: &quot;0&quot;')\"/></Band></Format></Formats>");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new TextArea("abs", "absolute", "41.16%", "174", null, "25", "1.07%", null, this.resolMngmt);
            obj.set_taborder("267");
            obj.set_enable("false");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Combo("progStatDiv", "absolute", "41.16%", "117", null, "25", "50.08%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("268");
            obj.set_innerdataset("dsProgDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("resolDivCombo01", "absolute", "57.44%", "37", null, "25", "33.8%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("269");
            obj.set_innerdataset("dsResolDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("resolDivCombo02", "absolute", "41.16%", "89", null, "25", "50.08%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("270");
            obj.set_innerdataset("dsCust");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("resolDivCombo03", "absolute", "73.72%", "36", null, "25", "17.52%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("271");
            obj.set_innerdataset("dsDept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("resolDeptCdCombo", "absolute", "90.25%", "36", null, "25", "1.07%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("272");
            obj.set_innerdataset("dsDept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");
            obj = new Edit("resolDeptNameEd", "absolute", "18.35%", "136", null, "30", "73.31%", null, this.resolMngmt);
            obj.set_taborder("273");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Grid("payGrid", "absolute", "33.72%", "345", null, "157", "1.07%", null, this.resolMngmt);
            obj.set_taborder("274");
            obj.set_binddataset("dsPayRec");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"18\"/><Row size=\"19\"/><Row size=\"19\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"순번\"/><Cell col=\"1\" text=\"지불구분\"/><Cell col=\"2\" colspan=\"2\" text=\"연구과제\"/><Cell col=\"4\" text=\"연구비목\"/><Cell col=\"5\" text=\"카드번호\"/><Cell col=\"6\" text=\"카드사용일\"/><Cell col=\"7\" text=\"승인번호\"/><Cell col=\"8\" text=\"거래처명\"/><Cell col=\"9\" colspan=\"2\" text=\"사업자번호\"/><Cell col=\"11\" text=\"주소\"/><Cell row=\"1\" col=\"1\" text=\"예금주\"/><Cell row=\"1\" col=\"2\" text=\"이체일\"/><Cell row=\"1\" col=\"3\" text=\"이체은행\"/><Cell row=\"1\" col=\"4\" text=\"계좌번호\"/><Cell row=\"1\" col=\"5\" colspan=\"6\" text=\"집행목적\"/><Cell row=\"1\" col=\"11\" text=\"금액\"/><Cell row=\"2\" col=\"1\" text=\"사용자\"/><Cell row=\"2\" col=\"2\" text=\"참석인원\"/><Cell row=\"2\" col=\"3\" colspan=\"6\" text=\"참석자\"/><Cell row=\"2\" col=\"9\" text=\"식비\"/><Cell row=\"2\" col=\"10\" text=\"계산서\"/><Cell row=\"2\" col=\"11\" text=\"사유/비고\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" celltype=\"none\" text=\"bind:seq\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:payDiv\" combodataset=\"dsJibulDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" colspan=\"2\" text=\"bind:stdTask\"/><Cell col=\"4\" text=\"bind:stdBimok\"/><Cell col=\"5\" edittype=\"expand\" text=\"bind:cardNo\"/><Cell col=\"6\" text=\"bind:cardUseDate\"/><Cell col=\"7\" text=\"bind:aprvNo\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"custnm\"/><Cell col=\"9\" colspan=\"2\" edittype=\"normal\" text=\"bind:operNo\"/><Cell col=\"11\" edittype=\"normal\" text=\"bind:addr\"/><Cell row=\"1\" col=\"1\" text=\"bind:depoOwner\"/><Cell row=\"1\" col=\"2\" edittype=\"date\" text=\"bind:transDate\"/><Cell row=\"1\" col=\"3\" displaytype=\"combo\" text=\"bind:transBank\" combodataset=\"dsBank\" combocodecol=\"code\" combodatacol=\"value\"/><Cell row=\"1\" col=\"4\" text=\"bind:accountNo\"/><Cell row=\"1\" col=\"5\" colspan=\"6\" edittype=\"normal\" text=\"bind:exePurp\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" edittype=\"normal\" text=\"bind:price\"/><Cell row=\"2\" col=\"1\" displaytype=\"combo\" edittype=\"expand\" text=\"bind:users\" combodataset=\"dsHmEmp\" combocodecol=\"empNo\" combodatacol=\"empNm\"/><Cell row=\"2\" col=\"2\" edittype=\"normal\" text=\"bind:cttInwon\"/><Cell row=\"2\" col=\"3\" colspan=\"6\" text=\"bind:att\"/><Cell row=\"2\" col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:foodCostYb\"/><Cell row=\"2\" col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:taxinvYb\"/><Cell row=\"2\" col=\"11\" edittype=\"normal\" text=\"bind:note\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"10\" text=\"합계\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:getSum(&quot;price*1&quot;)\"/></Band></Format></Formats>");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Button("searchDeptBtn", "absolute", "187", "137", "28", "29", null, null, this.resolMngmt);
            obj.set_taborder("275");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Button("searchResolBtn", "absolute", "325", "136", "59", "32", null, null, this.resolMngmt);
            obj.set_taborder("276");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.resolMngmt.addChild(obj.name, obj);

            obj = new Button("modiBtn", "absolute", "1132", "731", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "944", "731", "90", "32", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);

            obj = new Button("deleteBtn", "absolute", "1037", "731", "90", "32", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1240, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 702, this.resolMngmt,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.style.set_background("#edececff");
            		p.set_scrollbars("none");

            	}
            );
            this.resolMngmt.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AR_ResolLetMgtForm");
            		p.set_titletext("결의서 관리 화면");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","resolMngmt.resolNoEd","value","dsResolLet","resolNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","resolMngmt.resolDivCombo01","value","dsResolLet","resolDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","resolMngmt.resolDivCombo03","value","dsResolLet","demdDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","resolMngmt.resolDeptCdCombo","value","dsResolLet","resolDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","resolMngmt.resolDate","value","dsResolLet","resolDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","resolMngmt.AuthEdt10","value","dsResolLet","resolAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","resolMngmt.AuthEdt20","value","dsResolLet","acntCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","resolMngmt.acntNmEd","value","dsResolLet","acntCdNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","resolMngmt.AuthEdt13","value","dsResolLet","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","resolMngmt.resolerCdEd","value","dsResolLet","resoler");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","resolMngmt.resolDivCombo02","value","dsResolLet","custCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","resolMngmt.AuthEdt09","value","dsResolLet","operNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","resolMngmt.AuthEdt12","value","dsResolLet","receiptNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","resolMngmt.AuthEdt17","value","dsResolLet","resolDeptExtsn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","resolMngmt.progStatDiv","value","dsResolLet","progStatDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","resolMngmt.AuthEdt18","value","dsResolLet","sakNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","resolMngmt.assiSubNmEd","value","dsResolLet","assiSubCdNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","resolMngmt.AuthEdt05","value","dsResolLet","brCau");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","resolMngmt.abs","value","dsResolLet","abs");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AR_ResolLetMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AR_ResolLetMgtForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        //결의서 번호
        var autoJourYes;
        //회계년도
        var accYear;

        //   폼 로드 이벤트
        this.AR_ResolLetMgtForm_onload = function(obj,e)
        {
        	this.gfnBind(); // 코드 바인딩
        	this.gfnService("findAccPridList",false); // 회계기수 호출

        //   	this.resolMngmt.accPridCombo.displaynulltext = this.dsAccPrid.getColumn(0,"accPrid"); //회계기수 accPrid변수에 셋팅
        //   	var accPrid = this.resolMngmt.accPridCombo.displaynulltext; 
          	
          	var accPrid = this.dsAccPrid.getColumn(0,"accPrid");
          	var argument ='accPrid='+'4'; //회계기수 argument에 셋팅
         	
          	this.dsService.setColumn(1,"argument",argument); ////결의서 조회 메서드에 argument에 셋팅
          	this.gfnService("findResolLetList"); // 결의서 조회
        	
        	//trace(this.dsResolLet.saveXML()); 데이터셋 로그 확인용
         	this.gfnService("findAccount",false); //거래처 데이터셋
         	this.dsAccount.filter("custcd==''");	
         	this.gfnService("empInfo"); //사원정보 데이터셋

        }

        
        //  콜백 함수
        this.callback = function(trid,ErrorCode,ErrorMsg){
        	//자동분개 일시 실행		
        	if(autoJourYes=="true"){			
        		//분개의 차변 예산비목 값을 bimokCd 셋팅
        		var bimokCd = this.dsJour.getColumn(0,"bimokCd");
        		this.resolMngmt.acntNmEd.set_value(this.dsJour.getColumn(0,"acntNm"));
        		//보조과목명이 있을 때만 실행
        		if(this.dsJour.getColumn(0,"assiSubNm")!=null){
        			//보조과목명 assiSubNmEd에 셋팅				
        			this.resolMngmt.assiSubNmEd.set_value(this.dsJour.getColumn(0,"assiSubNm"));
        		}	
        		//회계년도 
        		var argument ='accYear='+accYear;
        		//비목코드
        		argument +=' bimokCd='+bimokCd;
        		var nRow = this.dsService.findRow( "ServiceID", "findRunBimok" );
        		this.dsService.setColumn(nRow,"argument",argument);
        		//예산비목 조회 메서드 호출
        		this.gfnService("findRunBimok");	
        	}
        }

        // 결의부서 조회 버튼 클릭이벤트
        this.resolMngmt_searchDeptBtn_onclick = function(obj,e)
        {
        	this.gfnCodePopup('GP500');
        }
        //setCode 함수
        this.setCode=function(code,array){
        	if(code=="ACC"){
        		this.resolMngmt.resolDivCombo02.set_value(array[0]);	//거래처코드 셋팅
        	}else{
        		this.resolMngmt.resolDeptCdEd.set_value(array[0]);	    //결의부서코드 셋팅
        		this.resolMngmt.resolDeptNameEd.set_value(array[1]);    //결의부서명 셋팅
        	}
        }

        // 결의서 조회 버튼 클릭이벤트
        this.resolMngmt_searchResolBtn_onclick = function(obj,e)
        {
        	if(this.resolMngmt.resolStartDateCal.value==null && this.resolMngmt.resolEndDateCal.value==null
        	   ||this.resolMngmt.resolStartDateCal.value > this.resolMngmt.resolEndDateCal.value){	   
        		alert("결의일자 기간을 제대로 입력하시길 바랍니다.");
        	}else if(this.resolMngmt.startResolNoEd.value==null&&this.resolMngmt.endResolNoEd.value==null){
        		alert("결의번호를 제대로 입력하시길 바랍니다.");
        	}else{
        		//회계기수 셋팅
        		var accPrid = this.resolMngmt.accPridCombo.value;	
        		//결의구분 셋팅
        		var resolDiv = this.resolMngmt.resolDivCombo.value;		
        		//시작일자 셋팅
        		var startDate = this.resolMngmt.resolStartDateCal.value;	
        		//끝일자 셋팅
        		var endDate = this.resolMngmt.resolEndDateCal.value;
        		//결의시작번호 셋팅
        		var startResolNo = this.resolMngmt.startResolNoEd.value;
        		//결의끝번호 셋팅
        		var endResolNo = this.resolMngmt.endResolNoEd.value;
        		//결의부서 셋팅
        		var resolDeptCd = this.resolMngmt.resolDeptCdEd.value;
        		//argument에 변수들 셋팅
        		var argument ='accPrid='+accPrid;
        			argument +=' resolDiv='+resolDiv;
        			argument +=' startDate='+startDate;
        			argument +=' endDate='+endDate;
        			argument +=' startResolNo='+startResolNo;
        			argument +=' endResolNo='+endResolNo;
        			argument +=' resolDeptCd='+resolDeptCd;			
        		
        		var nRow = this.dsService.findRow( "serviceID", "findResolLetList" );
        		this.dsService.setColumn(nRow,"argument",argument);
        		//조회 메서드 호출
        		this.gfnService("findResolLetList");	
        	}	
        }

        // 결의서 추가 버튼
        this.addBtn_onclick = function(obj,e)
        {
        	alert("결의서 추가~");
        	application.open("resolRegPopupForm"
        						,"acc::AR_ResolRegistPopupForm.xfdl"
        						,this.parent
        						,{gubun:'reg', resol:""}
        						,"showtitlebar=true showstatusbar=false"
        						, 0
        						,0);
        }

        this.deleteBtn_onclick = function(obj,e)
        {
        	//이후 팀장으로 변경 할것.
        	if(this.dsHmEmp.getColumn(0,"jobtt")=="수간호사"){	
        		//체크된 결의서가 있을때 실행
        		if(this.dsResolLet.lookup("check","1","check")!=null){
        			//결의서 삭제 메서드 호출
        			this.gfnService("removeResolLet","false");
        			reload();
        		//체크된 결의서가 없을때 실행		
        		}else{
        			alert("삭제할 결의서를 선택하시기 바랍니다.");
        		}
        		
        	//팀장이 아닐때 실행
        	}else{
        		alert("당신은 권한이 없습니다.");
        	}
        }

        this.modiBtn_onclick = function(obj,e)
        {
        	//접속 부서 추출
        	var deptCd=this.dsHmEmp.getColumn(0,"deptCd");
        	//진행상태 추출
        	var progStatDiv=this.dsResolLet.getColumn(this.dsResolLet.rowposition,"progStatDiv");
        	//결의부서 추출
        	var resolDeptCd=this.dsResolLet.getColumn(this.dsResolLet.rowposition,"resolDeptCd");
        	//진행상태가 결의등록중 예산원인반려 결의접수반려 중 하나이면서 결의부서가 접속부서와 같을 때 실행
        	if((progStatDiv=="16" || progStatDiv=="82" || progStatDiv=="52")){
        	    //&& resolDeptCd==deptd
        		application.open("resolRegPopupForm"
        						,"acc::AR_ResolRegistPopupForm.xfdl"
        						,this.parent						
        						,{gubun:"modi", pResolNo:this.dsResolLet.getColumn(this.dsResolLet.rowposition,"resolNo")}
        						,"showtitlebar=true showstatusbar=false"
        						, 0
        						,0);
        	}else{
        		alert("해당 결의서는 수정이 불가능 합니다.");
        	}
        }

        // 그리드 셀 클릭이벤트
        this.fn_cellClickResolLiGrid = function(obj,e)
        {
        	//자동분개 된 결의서
        	if(this.dsResolLet.getColumn(e.row,"autoJourYb")){
        		//자동분개 여부
        		autoJourYes=this.dsResolLet.getColumn(e.row,"autoJourYb");
        		//회계년도
        		accYear=2016;
        		//전역변수에 회계년도 셋팅	
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
        	this.gfnService("findResolLetDetail",false);
        	
        	//부가세 조회	
        	var argument = 'resolNo='+resolNo;
        	var nRow = this.dsService.findRow( "serviceID", "searchTaxInvoiceList" );
        	this.dsService.setColumn(nRow,"argument",argument);
        	this.gfnService("searchTaxInvoiceList",false);
        	trace(this.dsTaxInv.saveXML());
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTaxInv.addEventHandler("canrowposchange", this.dsTaxInv_canrowposchange, this);
            this.dsHmEmp.addEventHandler("onrowposchanged", this.ds_emp_onrowposchanged, this);
            this.dsAccPrid.addEventHandler("onrowposchanged", this.dsAccYear_onrowposchanged, this);
            this.addEventHandler("onload", this.AR_ResolLetMgtForm_onload, this);
            this.DelBtn02.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn15.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn00.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.resolMngmt.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc12.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc13.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc14.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc15.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc16.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc17.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc18.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc19.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.resolDivCombo.addEventHandler("onitemchanged", this.resolMngmt_resolDivCombo_onitemchanged, this);
            this.resolMngmt.subCodeStc20.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc21.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.resolListGrid.addEventHandler("oncellclick", this.fn_cellClickResolLiGrid, this);
            this.resolMngmt.subCodeStc22.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc23.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc24.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc25.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc26.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.searchDeptBtn.addEventHandler("onclick", this.resolMngmt_searchDeptBtn_onclick, this);
            this.resolMngmt.searchResolBtn.addEventHandler("onclick", this.resolMngmt_searchResolBtn_onclick, this);
            this.modiBtn.addEventHandler("onclick", this.modiBtn_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.deleteBtn.addEventHandler("onclick", this.deleteBtn_onclick, this);

        };

        this.loadIncludeScript("AR_ResolLetMgtForm.xfdl");

       
    };
}
)();

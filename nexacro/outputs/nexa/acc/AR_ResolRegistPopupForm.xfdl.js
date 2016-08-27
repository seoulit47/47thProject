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
                this.set_name("AR_ResolRegistPopupForm");
                this.set_classname("AR_ResolRegistPopupForm");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDept", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAnspDiv", this);
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

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAccount</Col><Col id=\"URL\">his::acc/resol/findAccount.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAccount=dsAccount</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">empInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\">dsHmEmp=dsHmEmp</Col><Col id=\"outData\">dsHmEmp=gdsEmp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findAccPridList</Col><Col id=\"URL\">his::acc/elementary/findAccPridList.do</Col><Col id=\"inData\">dsAccPrid=dsAccPrid</Col><Col id=\"outData\">dsAccPrid=dsAccPrid</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">getResolNo</Col><Col id=\"URL\">his::acc/resol/getResolNo.do</Col><Col id=\"callbackFunc\">callback</Col><Col id=\"argument\"/><Col id=\"outData\">resolNo=resolNo</Col><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">searchMaxPubNo</Col><Col id=\"URL\">his::acc/vat/findMaxPubNo.do</Col><Col id=\"inData\"/><Col id=\"outData\">maxPubNo=maxPubNo</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">registerResolLet</Col><Col id=\"URL\">his::acc/resol/registerResolLet.do</Col><Col id=\"inData\">dsResolLet=dsResolLet:a dsJour=dsJour:a dsPayRec=dsPayRec:a dsTaxInv=dsTaxInv:a dsDetailTaxInv=dsDetailTaxInv:a </Col><Col id=\"callbackFunc\">callback</Col></Row><Row><Col id=\"URL\">his::acc/budget/findRunBimok.do</Col><Col id=\"serviceID\">findRunBimok</Col><Col id=\"outData\">dsRunBudg=dsRunBudg</Col></Row><Row><Col id=\"serviceID\">findResolLetDetailList</Col><Col id=\"URL\">his::acc/resol/findResolLetDetailList.do</Col><Col id=\"outData\">dsJour=dsJour dsPayRec=dsPayRec dsAppendFile=dsAppendFile</Col></Row><Row><Col id=\"serviceID\">findAtTaxinvListAndAtDetailTaxinvList</Col><Col id=\"URL\">his::acc/vat/findTaxInvList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsTaxInv=dsTaxInv dsDetailTaxInv=dsDetailTaxInv</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findResolLetList</Col><Col id=\"URL\">his::acc/resol/findResolLetList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsResolLet=dsResolLet</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callback</Col></Row><Row><Col id=\"serviceID\">batchResolLetProcess</Col><Col id=\"URL\">his::acc/resol/batchResolLetProcess.do</Col><Col id=\"inData\">dsResolLet=dsResolLet:a dsJour=dsJour:a dsPayRec=dsPayRec:a dsTaxInv=dsTaxInv:a dsDetailTaxInv=dsDetailTaxInv:a </Col></Row></Rows>");
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

            obj = new Dataset("dsRunBudg", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"cngAmount\" type=\"STRING\" size=\"256\"/><Column id=\"allotPlanAmount\" type=\"STRING\" size=\"256\"/><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"causeAmount\" type=\"STRING\" size=\"256\"/><Column id=\"budgAmount\" type=\"STRING\" size=\"256\"/><Column id=\"budgBal\" type=\"STRING\" size=\"256\"/><Column id=\"bimokNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokLevel\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsPrintDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsDetailTaxInv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"pubDate\" type=\"STRING\" size=\"256\"/><Column id=\"fm\" type=\"STRING\" size=\"256\"/><Column id=\"stand\" type=\"STRING\" size=\"256\"/><Column id=\"qnt\" type=\"STRING\" size=\"256\"/><Column id=\"price\" type=\"STRING\" size=\"256\"/><Column id=\"taxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"splyPrice\" type=\"STRING\" size=\"256\"/><Column id=\"pubNo\" type=\"STRING\" size=\"256\"/><Column id=\"dedYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsCompany", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"custcd\" type=\"STRING\" size=\"256\"/><Column id=\"custnm\" type=\"STRING\" size=\"256\"/><Column id=\"adptdt\" type=\"STRING\" size=\"256\"/><Column id=\"bussno\" type=\"STRING\" size=\"256\"/><Column id=\"zipcd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"faxno\" type=\"STRING\" size=\"256\"/><Column id=\"bankcd\" type=\"STRING\" size=\"256\"/><Column id=\"accno\" type=\"STRING\" size=\"256\"/><Column id=\"busctgnm\" type=\"STRING\" size=\"256\"/><Column id=\"busshpnm\" type=\"STRING\" size=\"256\"/><Column id=\"prsdntnm\" type=\"STRING\" size=\"256\"/><Column id=\"resno\" type=\"STRING\" size=\"256\"/><Column id=\"dpstr\" type=\"STRING\" size=\"256\"/><Column id=\"useyn\" type=\"STRING\" size=\"256\"/><Column id=\"gpuseyn\" type=\"STRING\" size=\"256\"/><Column id=\"gduseyn\" type=\"STRING\" size=\"256\"/><Column id=\"cardyn\" type=\"STRING\" size=\"256\"/><Column id=\"riuseyn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("dsSearchCondition", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"tableName\" type=\"STRING\" size=\"256\"/><Column id=\"columnName\" type=\"STRING\" size=\"256\"/><Column id=\"columnValue\" type=\"STRING\" size=\"256\"/><Column id=\"operator\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA039</Col><Col id=\"dsName\">dsResolDiv</Col></Row><Row><Col id=\"code\">GA049</Col><Col id=\"dsName\">dsCreDebDiv</Col></Row><Row><Col id=\"code\">GA037</Col><Col id=\"dsName\">dsPrintDiv</Col></Row><Row><Col id=\"code\">GA061</Col><Col id=\"dsName\">dsJibulDiv</Col></Row><Row><Col id=\"code\">GA003</Col><Col id=\"dsName\">dsBank</Col></Row><Row><Col id=\"code\">GA075</Col><Col id=\"dsName\">dsPurchSalesDiv</Col></Row><Row><Col id=\"code\">GA074</Col><Col id=\"dsName\">dsBillDiv</Col></Row><Row><Col id=\"code\">GP500</Col><Col id=\"dsName\">dsDept</Col></Row></Rows>");
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

            obj = new Dataset("dsCreDebDiv", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsResolLet", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/><Column id=\"resolDiv\" type=\"STRING\" size=\"256\"/><Column id=\"resolDate\" type=\"STRING\" size=\"256\"/><Column id=\"resoler\" type=\"STRING\" size=\"256\"/><Column id=\"resolDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"progStatDiv\" type=\"STRING\" size=\"256\"/><Column id=\"sakNo\" type=\"STRING\" size=\"256\"/><Column id=\"receiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"operNo\" type=\"STRING\" size=\"256\"/><Column id=\"resolAmt\" type=\"STRING\" size=\"256\"/><Column id=\"brCau\" type=\"STRING\" size=\"256\"/><Column id=\"abs\" type=\"STRING\" size=\"256\"/><Column id=\"demdDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"autoJourYb\" type=\"STRING\" size=\"256\"/><Column id=\"modWorker\" type=\"STRING\" size=\"256\"/><Column id=\"modDate\" type=\"STRING\" size=\"256\"/><Column id=\"danDiv\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"surtaxYb\" type=\"STRING\" size=\"256\"/><Column id=\"resolDeptExtsn\" type=\"STRING\" size=\"256\"/><Column id=\"closYb\" type=\"STRING\" size=\"256\"/><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"resolerNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Dataset("dsCorpCard", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"card_knd\" type=\"STRING\" size=\"256\"/><Column id=\"card_div\" type=\"STRING\" size=\"256\"/><Column id=\"card_no\" type=\"STRING\" size=\"256\"/><Column id=\"emp_no\" type=\"STRING\" size=\"256\"/><Column id=\"sign_bank\" type=\"STRING\" size=\"256\"/><Column id=\"sign_accnt_no\" type=\"STRING\" size=\"256\"/><Column id=\"dept_cd\" type=\"STRING\" size=\"256\"/><Column id=\"iss_cau\" type=\"STRING\" size=\"256\"/><Column id=\"ccard_mngnt_div\" type=\"STRING\" size=\"256\"/><Column id=\"receive_date\" type=\"STRING\" size=\"256\"/><Column id=\"use_yn\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAccount", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"custcd\" type=\"STRING\" size=\"256\"/><Column id=\"custnm\" type=\"STRING\" size=\"256\"/><Column id=\"adptdt\" type=\"STRING\" size=\"256\"/><Column id=\"bussno\" type=\"STRING\" size=\"256\"/><Column id=\"zipcd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"faxno\" type=\"STRING\" size=\"256\"/><Column id=\"bankcd\" type=\"STRING\" size=\"256\"/><Column id=\"accno\" type=\"STRING\" size=\"256\"/><Column id=\"busctgnm\" type=\"STRING\" size=\"256\"/><Column id=\"busshpnm\" type=\"STRING\" size=\"256\"/><Column id=\"prsdntnm\" type=\"STRING\" size=\"256\"/><Column id=\"resno\" type=\"STRING\" size=\"256\"/><Column id=\"dpstr\" type=\"STRING\" size=\"256\"/><Column id=\"useyn\" type=\"STRING\" size=\"256\"/><Column id=\"gpuseyn\" type=\"STRING\" size=\"256\"/><Column id=\"gduseyn\" type=\"STRING\" size=\"256\"/><Column id=\"cardyn\" type=\"STRING\" size=\"256\"/><Column id=\"riuseyn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "1244", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.79%", "-4", null, "60", "81.68%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("결의서 상세");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);
            obj = new Spin("yearSpin", "absolute", "328", "6", "136", "29", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.getSetter("class").set("AreaSpin");
            obj.set_value("2016");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("addrEd", "absolute", "248", "11", "69", "20", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "1.28%", "56", null, "702", "0.4%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "0.16%", "4", null, "25", "92.84%", null, this.Div01);
            obj.getSetter("taborder").set("223");
            obj.set_text("결의번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "0.16%", "31", null, "25", "92.84%", null, this.Div01);
            obj.getSetter("taborder").set("224");
            obj.set_text("결의일자");
            obj.style.set_background("wheat");
            obj.style.set_color("crimson");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "0.16%", "59", null, "25", "92.84%", null, this.Div01);
            obj.getSetter("taborder").set("225");
            obj.set_text("거래처");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "16.52%", "31", null, "25", "76.48%", null, this.Div01);
            obj.getSetter("taborder").set("226");
            obj.set_text("결의금액");
            obj.style.set_background("wheat");
            obj.style.set_color("crimson");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc09", "absolute", "16.52%", "4", null, "25", "76.48%", null, this.Div01);
            obj.getSetter("taborder").set("227");
            obj.set_text("회계기수");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc10", "absolute", "0.16%", "87", null, "25", "92.84%", null, this.Div01);
            obj.getSetter("taborder").set("228");
            obj.set_text("상태구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc11", "absolute", "32.87%", "4", null, "25", "60.13%", null, this.Div01);
            obj.getSetter("taborder").set("229");
            obj.set_text("결의구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc12", "absolute", "49.23%", "86", null, "25", "43.78%", null, this.Div01);
            obj.getSetter("taborder").set("230");
            obj.set_text("반려사유");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc13", "absolute", "49.23%", "4", null, "25", "43.78%", null, this.Div01);
            obj.getSetter("taborder").set("231");
            obj.set_text("요구부서");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc14", "absolute", "57.2%", "58", null, "25", "35.8%", null, this.Div01);
            obj.getSetter("taborder").set("232");
            obj.set_text("계약번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc15", "absolute", "32.87%", "86", null, "25", "60.13%", null, this.Div01);
            obj.getSetter("taborder").set("233");
            obj.set_text("원인번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc16", "absolute", "67.78%", "31", null, "25", "25.22%", null, this.Div01);
            obj.getSetter("taborder").set("234");
            obj.set_text("보조과목");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc18", "absolute", "32.87%", "31", null, "25", "60.13%", null, this.Div01);
            obj.getSetter("taborder").set("235");
            obj.set_text("계정과목");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc19", "absolute", "32.87%", "58", null, "25", "60.13%", null, this.Div01);
            obj.getSetter("taborder").set("236");
            obj.set_text("사업자번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("resolNoEd", "absolute", "7.65%", "3", null, "25", "83.65%", null, this.Div01);
            obj.set_taborder("237");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("custCdEd", "absolute", "7.65%", "58", null, "25", "83.65%", null, this.Div01);
            obj.set_taborder("238");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("operNoEd", "absolute", "40.2%", "58", null, "25", "43.12%", null, this.Div01);
            obj.set_taborder("239");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("acntCdEd", "absolute", "40.2%", "31", null, "25", "51.1%", null, this.Div01);
            obj.set_taborder("240");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("demdDeptCdEd", "absolute", "56.55%", "4", null, "25", "34.66%", null, this.Div01);
            obj.set_taborder("241");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("assiSubNameEd", "absolute", "75.1%", "31", null, "25", "16.19%", null, this.Div01);
            obj.set_taborder("242");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("ctrtNoEd", "absolute", "64.52%", "58", null, "25", "26.77%", null, this.Div01);
            obj.set_taborder("243");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("progStatDivEd", "absolute", "40.2%", "85", null, "25", "51.1%", null, this.Div01);
            obj.set_taborder("244");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.08%", "171", null, "52", "0.08%", null, this.Div01);
            obj.set_taborder("245");
            obj.set_binddataset("dsRunBudg");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"비목\"/><Cell col=\"2\" text=\"예산금액\"/><Cell col=\"3\" text=\"배정예산금액\"/><Cell col=\"4\" text=\"결의가능금액\"/></Band><Band id=\"body\"><Cell text=\"bind:bimokCd\"/><Cell col=\"1\" text=\"bind:bimokNm\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:budgAmount\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:allotPlanAmount\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:budgBal\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("payGrid", "absolute", "0.24%", "346", null, "173", "7.81%", null, this.Div01);
            obj.set_taborder("246");
            obj.set_binddataset("dsPayRec");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"순번\"/><Cell col=\"1\" text=\"지불구분\"/><Cell col=\"2\" colspan=\"2\" text=\"연구과제\"/><Cell col=\"4\" text=\"연구비목\"/><Cell col=\"5\" text=\"카드번호\"/><Cell col=\"6\" text=\"카드사용일\"/><Cell col=\"7\" text=\"승인번호\"/><Cell col=\"8\" text=\"거래처명\"/><Cell col=\"9\" colspan=\"2\" text=\"사업자번호\"/><Cell col=\"11\" text=\"주소\"/><Cell row=\"1\" col=\"1\" text=\"예금주\"/><Cell row=\"1\" col=\"2\" text=\"이체일\"/><Cell row=\"1\" col=\"3\" text=\"이체은행\"/><Cell row=\"1\" col=\"4\" text=\"계좌번호\"/><Cell row=\"1\" col=\"5\" colspan=\"6\" text=\"집행목적\"/><Cell row=\"1\" col=\"11\" text=\"금액\"/><Cell row=\"2\" col=\"1\" text=\"사용자\"/><Cell row=\"2\" col=\"2\" text=\"참석인원\"/><Cell row=\"2\" col=\"3\" colspan=\"6\" text=\"참석자\"/><Cell row=\"2\" col=\"9\" text=\"식비\"/><Cell row=\"2\" col=\"10\" text=\"계산서\"/><Cell row=\"2\" col=\"11\" text=\"사유/비고\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" text=\"bind:seq\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:payDiv\" combodataset=\"dsJibulDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" colspan=\"2\" text=\"bind:stdTask\"/><Cell col=\"4\" text=\"bind:stdBimok\"/><Cell col=\"5\" edittype=\"expand\" text=\"bind:cardNo\"/><Cell col=\"6\" text=\"bind:cardUseDate\"/><Cell col=\"7\" text=\"bind:aprvNo\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"custnm\"/><Cell col=\"9\" colspan=\"2\" edittype=\"normal\" text=\"bind:operNo\"/><Cell col=\"11\" edittype=\"normal\" text=\"bind:addr\"/><Cell row=\"1\" col=\"1\" text=\"bind:depoOwner\"/><Cell row=\"1\" col=\"2\" edittype=\"date\" text=\"bind:transDate\"/><Cell row=\"1\" col=\"3\" displaytype=\"combo\" text=\"bind:transBank\" combodataset=\"dsBank\" combocodecol=\"code\" combodatacol=\"value\"/><Cell row=\"1\" col=\"4\" text=\"bind:accountNo\"/><Cell row=\"1\" col=\"5\" colspan=\"6\" edittype=\"normal\" text=\"bind:exePurp\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" edittype=\"normal\" text=\"bind:price\"/><Cell row=\"2\" col=\"1\" text=\"bind:users\"/><Cell row=\"2\" col=\"2\" edittype=\"normal\" text=\"bind:cttInwon\"/><Cell row=\"2\" col=\"3\" colspan=\"6\" text=\"bind:att\"/><Cell row=\"2\" col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:foodCostYb\"/><Cell row=\"2\" col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:taxinvYb\"/><Cell row=\"2\" col=\"11\" edittype=\"normal\" text=\"bind:note\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"10\" text=\"합계\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:getSum(&quot;price*1&quot;)\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("taxInvGrid", "absolute", "0.24%", "523", null, "172", "0.08%", null, this.Div01);
            obj.set_taborder("247");
            obj.set_binddataset("dsTaxInv");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"순번\"/><Cell col=\"1\" text=\"발행일\"/><Cell col=\"2\" text=\"계산서구분\"/><Cell col=\"3\" text=\"매입/매출\"/><Cell col=\"4\" colspan=\"2\" text=\"금액\"/><Cell col=\"6\" text=\"공금가액\"/><Cell col=\"7\" text=\"세액\"/><Cell row=\"1\" col=\"1\" text=\"거래처\"/><Cell row=\"1\" col=\"2\" text=\"거래처명\"/><Cell row=\"1\" col=\"3\" text=\"사업자번호\"/><Cell row=\"1\" col=\"4\" text=\"대표자\"/><Cell row=\"1\" col=\"5\" text=\"업태\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" text=\"종목\"/><Cell row=\"2\" col=\"1\" colspan=\"7\" text=\"품목\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:pubDate\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:billDiv\" combodataset=\"dsBillDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:purchSalesDiv\" combodataset=\"dsPurchSalesDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"4\" colspan=\"2\" displaytype=\"number\" text=\"bind:sumPrice\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:splyPrice\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:taxAmt\"/><Cell row=\"1\" col=\"1\" text=\"bind:custCd\"/><Cell row=\"1\" col=\"2\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"custnm\"/><Cell row=\"1\" col=\"3\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"bussno\"/><Cell row=\"1\" col=\"4\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"prsdntnm\"/><Cell row=\"1\" col=\"5\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"busshpnm\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"busctgnm\"/><Cell row=\"2\" col=\"1\" colspan=\"7\" edittype=\"normal\" text=\"bind:aBS\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\"/><Cell col=\"4\" colspan=\"2\" displaytype=\"number\" expr=\"expr:getSum(&quot;sumPrice*1&quot;)\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:getSum(&quot;splyPrice*1&quot;)\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:getSum(&quot;taxAmt*1&quot;)\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc22", "absolute", "73.72%", "58", null, "25", "19.28%", null, this.Div01);
            obj.getSetter("taborder").set("248");
            obj.set_text("결의부서");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc23", "absolute", "16.52%", "87", null, "25", "76.48%", null, this.Div01);
            obj.getSetter("taborder").set("249");
            obj.set_text("접수번호");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc24", "absolute", "77.3%", "4", null, "25", "15.7%", null, this.Div01);
            obj.getSetter("taborder").set("250");
            obj.set_text("결의자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc25", "absolute", "0.16%", "114", null, "25", "92.84%", null, this.Div01);
            obj.getSetter("taborder").set("251");
            obj.set_text("적요");
            obj.style.set_background("wheat");
            obj.style.set_color("crimson");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("subCodeStc26", "absolute", "84.05%", "31", null, "25", "8.95%", null, this.Div01);
            obj.getSetter("taborder").set("252");
            obj.set_text("결의부서전화");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("sakNoEd", "absolute", "7.65%", "86", null, "25", "83.65%", null, this.Div01);
            obj.set_taborder("253");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("resolerNameEd", "absolute", "92.19%", "3", null, "25", "0.16%", null, this.Div01);
            obj.set_taborder("254");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("receiptNoEd", "absolute", "23.92%", "86", null, "25", "67.37%", null, this.Div01);
            obj.set_taborder("255");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("resolDeptCdEd", "absolute", "80.96%", "58", null, "25", "10.41%", null, this.Div01);
            obj.set_taborder("256");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("JourGrid", "absolute", "0.24%", "226", null, "117", "7.81%", null, this.Div01);
            obj.set_taborder("260");
            obj.set_binddataset("dsJour");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"100\"/><Column size=\"105\"/><Column size=\"23\"/><Column size=\"100\"/><Column size=\"92\"/><Column size=\"21\"/><Column size=\"126\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"차대구분\"/><Cell col=\"2\" colspan=\"2\" text=\"계정코드\"/><Cell col=\"4\" text=\"계정코드명\"/><Cell col=\"5\" colspan=\"2\" text=\"보조과목코드\"/><Cell col=\"7\" text=\"보조과목명\"/><Cell col=\"8\" text=\"차변금액\"/><Cell col=\"9\" text=\"대변금액\"/></Band><Band id=\"body\"><Cell text=\"bind:seq\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:creDebDiv\" combodataset=\"dsCreDebDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" text=\"bind:acntCd\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;button&quot;\" style=\"color:black;selectcolor:black;\" text=\"+\"/><Cell col=\"4\" text=\"bind:acntNm\"/><Cell col=\"5\" text=\"bind:assiSubCd\"/><Cell col=\"6\" displaytype=\"button\" edittype=\"button\" style=\"color:black;selectcolor:black;\" text=\"+\"/><Cell col=\"7\" text=\"bind:assiSubNm\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:debAmt\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:creAmt\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"7\" text=\"합계\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:getSum('!isNaN(debAmt)== true? debAmt: &quot;0&quot;')\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:getSum('!isNaN(creAmt)== true? creAmt: &quot;0&quot;')\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new CheckBox("autoJourCheck", "absolute", "0.24%", "145", null, "19", "92.19%", null, this.Div01);
            obj.set_taborder("266");
            obj.set_text("자동분개여부");
            obj.set_value("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "8.14%", "145", null, "21", "54.19%", null, this.Div01);
            obj.getSetter("taborder").set("267");
            obj.set_text("*붉은색 으로 표시된 항목은 필수 입력사항이므로 반드시 작성하여 주시기 바랍니다.");
            obj.style.set_color("crimson");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("resolDeptExtsnEd", "absolute", "91.13%", "31", null, "25", "0.16%", null, this.Div01);
            obj.set_taborder("268");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new TextArea("absArea", "absolute", "7.65%", "114", null, "25", "0.08%", null, this.Div01);
            obj.set_taborder("270");
            this.Div01.addChild(obj.name, obj);
            obj = new TextArea("brCauArea", "absolute", "56.55%", "86", null, "25", "17.74%", null, this.Div01);
            obj.set_taborder("271");
            this.Div01.addChild(obj.name, obj);
            obj = new Combo("accPridCombo", "absolute", "23.92%", "4", null, "25", "67.37%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("272");
            obj.set_innerdataset("dsAccPrid");
            obj.set_codecolumn("accPrid");
            obj.set_datacolumn("accPrid");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("resolDivCombo", "absolute", "40.2%", "3", null, "25", "51.1%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("273");
            obj.set_innerdataset("dsResolDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");
            obj = new Static("subCodeStc00", "absolute", "82.42%", "86", null, "25", "10.58%", null, this.Div01);
            obj.getSetter("taborder").set("274");
            obj.set_text("출력양식");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Calendar("resolDateCal", "absolute", "7.65%", "30", null, "25", "83.65%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("276");
            obj = new Combo("demdDeptNameEd", "absolute", "68.19%", "3", null, "25", "23.11%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("277");
            obj.set_innerdataset("dsDept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("pirintDivCombo", "absolute", "89.83%", "85", null, "25", "0.16%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("278");
            obj.set_innerdataset("dsPrintDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");
            obj = new Edit("custNameEd", "absolute", "19.12%", "58", null, "25", "67.37%", null, this.Div01);
            obj.set_taborder("279");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("resolerCdEd", "absolute", "84.46%", "3", null, "25", "8.14%", null, this.Div01);
            obj.set_taborder("280");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Combo("resolDeptNameEd", "absolute", "89.99%", "58", null, "25", "0.16%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("281");
            obj.set_innerdataset("dsDept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.getSetter("class").set("AreaCombo");
            obj = new Edit("acntNameEd", "absolute", "51.67%", "31", null, "25", "32.38%", null, this.Div01);
            obj.set_taborder("282");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new MaskEdit("resolAmtMaskEdt", "absolute", "23.92%", "31", null, "25", "67.37%", null, this.Div01);
            obj.set_taborder("283");
            obj.set_mask("###,###");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("searchDemdDeptBtn", "absolute", "822", "56", "24", "28", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchAcntCdBtn", "absolute", "621", "86", "24", "28", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchCustCdBtn", "absolute", "219", "112", "24", "28", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("jourGirdAddRowBtn", "absolute", "1165", "304", "32", "32", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("jourGirdRemoveRowBtn", "absolute", "1165", "344", "32", "32", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("payGridRemoveRowBtn", "absolute", "1166", "488", "32", "32", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("payGridAddRowBtn", "absolute", "1166", "448", "32", "32", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("modiBtn", "absolute", "1047", "14", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("CloseBtn", "absolute", "1144", "14", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("regBtn", "absolute", "947", "14", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1244, 60, this.Div00,
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
            		p.set_classname("AR_ResolRegistPopupForm");
            		p.set_titletext("New Form");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div01.resolNoEd","value","dsResolLet","resolNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div01.resolDivCombo","value","dsResolLet","resolDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div01.demdDeptCdEd","value","dsResolLet","demdDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div01.demdDeptNameEd","value","dsResolLet","demdDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div01.resolerCdEd","value","dsResolLet","resoler");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div01.resolerNameEd","value","dsResolLet","resolerNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div01.resolDateCal","value","dsResolLet","resolDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div01.resolAmtMaskEdt","value","dsResolLet","resolAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div01.acntCdEd","value","dsResolLet","acntCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div01.acntNameEd","value","dsResolLet","acntCdNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div01.assiSubNameEd","value","dsResolLet","assiSubCdNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div01.resolDeptExtsnEd","value","dsResolLet","resolDeptExtsn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div01.custCdEd","value","dsResolLet","custCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div01.custNameEd","value","dsResolLet","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div01.operNoEd","value","dsResolLet","operNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div01.ctrtNoEd","value","dsResolLet","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div01.resolDeptCdEd","value","dsResolLet","resolDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div01.resolDeptNameEd","value","dsResolLet","resolDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div01.sakNoEd","value","dsResolLet","progStatDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Div01.receiptNoEd","value","dsResolLet","receiptNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Div01.progStatDivEd","value","dsResolLet","sakNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Div01.brCauArea","value","dsResolLet","brCau");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Div01.absArea","value","dsResolLet","abs");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AR_ResolRegistPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AR_ResolRegistPopupForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        this.resolNo = ""; 	//자바단에서 보내주는 결의서 번호 담을 변수

        //   폼 로드 이벤트
        this.AR_ResolRegistPopupForm_onload = function(obj,e)
        {
        	this.gfnBind();
        	if(this.parent.gubun=="reg"){
        		//거래처 데이터
        		this.gfnService("findAccount",false);				//거래처 데이터셋
        		this.dsAccount.filter("custcd==''");
        		this.gfnService("empInfo",false);							//사원정보 데이터셋
        		this.gfnService("findAccPridList",false);					//회계기수데이터셋
        	
        		resolDiv = '1';
        		this.Div01.demdDeptCdEd.set_value(this.dsHmEmp.getColumn(0,"deptCd"));
        		this.Div01.demdDeptNameEd.set_value(this.dsHmEmp.getColumn(0,"deptNm"));	
        		this.Div01.resolDeptCdEd.set_value(this.dsHmEmp.getColumn(0,"deptCd"));	
        		this.Div01.resolDeptNameEd.set_value(this.dsHmEmp.getColumn(0,"deptCd"));
        		this.Div01.resolerCdEd.set_value(this.dsHmEmp.getColumn(0,"empNo"));
        		this.Div01.resolerNameEd.set_value(this.dsHmEmp.getColumn(0,"empNm"));	
        		//alert("등록 날짜"+this.gfnDate('yyyymmdd'));
        		this.Div01.resolDateCal.set_value(this.gfnDate('yyyymmdd'));
        		this.Div01.resolDeptExtsnEd.set_value(this.dsHmEmp.getColumn(0,"extsn"));
        		this.Div01.resolDivCombo.set_text(this.dsResolDiv.getColumn(0,"value"));
        		this.Div01.resolDivCombo.set_value(this.dsResolDiv.getColumn(0,"code"));
        		this.Div01.pirintDivCombo.set_value('0');
        		this.Div01.autoJourCheck.set_value(true);//체크박스 체크로 시작
        		//결의서 번호 호출
        		this.gfnService("getResolNo",false);
        		this.Div01.resolNoEd.set_value(this.resolNo);//결의서 번호 셋팅
        		
        		//회계기수 현재 회계기수로 셋팅	
        		this.Div01.accPridCombo.set_value(this.dsAccPrid.getColumn(0,"accPrid"));
        	}else if(this.parent.gubun=="modi"){
        		alert('수정!!!!');
        		resolDiv = this.Div01.resolDivCombo.value;
        		//등록버튼 비활성화
        		this.modiBtn.visible=true;
        		this.regBtn.visible=false;
        		
        		//회계기수 세팅
        		this.Div01.accPridCombo.set_value(this.dsAccPrid.getColumn(0,"accPrid"));
        		
        		//세금계산서 데이터셋 세팅
        		var rowIndex = this.dsSearchCondition.addRow();
        		this.dsSearchCondition.setColumn(rowIndex,"tableName","AT_TAXINV");
        		this.dsSearchCondition.setColumn(rowIndex,"columnName","resol_no");
        		this.dsSearchCondition.setColumn(rowIndex,"columnValue",this.parent.pResolNo);
        		this.dsSearchCondition.setColumn(rowIndex,"operator","=");
        		
        		//argument에 변수 셋팅
        		var argument ='resolNo='+this.parent.pResolNo;
        		
        		//결의서 불러오기
        		var findResolLetListRow = this.dsService.findRow( "serviceID", "findResolLetList");	
        		this.dsService.setColumn(findResolLetListRow,"argument",argument);
        		this.gfnService("findResolLetList",false);
        		//분개,지불내역,첨부파일 불러오기
        		var findResolLetDetailListnRow = this.dsService.findRow( "serviceID", "findResolLetDetailList");
        		this.dsService.setColumn(findResolLetDetailListnRow,"argument",argument);
        		this.gfnService("findResolLetDetailList",false);
        		//세금계산서 불러오기		
        		var findAtTaxinvListAndAtDetailTaxinvListnRow = this.dsService.findRow( "serviceID", "findAtTaxinvListAndAtDetailTaxinvList" );
        		this.dsService.setColumn(findAtTaxinvListAndAtDetailTaxinvListnRow,"argument",argument);
        		this.gfnService("findAtTaxinvListAndAtDetailTaxinvList",false);
        	
        		this.gfnService("findAccount",false);//거래처 데이터셋
        		this.dsAccount.filter("custcd==''");
        		this.gfnService("empInfo",false);//사원정보 데이터셋
        		alert("데이터 불러오기 성공");
        		/*this.gfnService("findAccPridList",null);//회계기수데이터셋*/				
        	}
        }

        
        //   결의서 항목 회계기수 변경시 함수
        this.Div01_accPridCombo_onitemchanged = function(obj,e)
        {
        	if(this.dsAccPrid.getColumn(e.postindex,"dlineYn")=="Y"){
        		alert("해당회계기수는 마감되었습니다.");
        		//this.accPridCombo.set_value(this.dsAccPrid.getColumn(0,"accPrid"));	//회계기수 현재 회계기수로 셋팅
        	}
        }

        //   결의서 항목 결의구분 변경시 함수
        this.resolDivCombo_onitemchanged = function(obj,e)
        {
        	resolDiv = this.Div01.resolDivCombo.value;	
        	if(resolDiv == '1'){		//결의구분이 지출 일 때
        		this.Div01.acntCdEd.enable = true;
        		this.Div01.pirintDivCombo.set_value('O');
        		this.Div01.autoJourCheck.enable = true;
        	}else if(resolDiv == '2'){	//결의구분이 지출대체 일 때 
        		this.Div01.acntCdEd.enable = false;		
        		this.Div01.pirintDivCombo.set_value('O');
        		this.Div01.autoJourCheck.set_value(false);
        		this.Div01.autoJourCheck.enable = false;
        	}else if(resolDiv == '3'){	//결의구분이 수입 일 때
        		this.Div01.acntCdEd.enable = false;		
        		this.Div01.pirintDivCombo.set_value('I');
        		this.Div01.autoJourCheck.set_value(false);
        		this.Div01.autoJourCheck.enable = false;
        	}else if(resolDiv == '4'){	//결의구분이 수입대체 일 때
        		this.Div01.acntCdEd.enable = false;		
        		this.Div01.pirintDivCombo.set_value('I');
        		this.Div01.autoJourCheck.set_value(false);
        		this.Div01.autoJourCheck.enable = false;
        	}
        }

        // 코드세팅 함수
        this.setCode=function(code,array){
        	switch(code){
        		//거래처 찾기 버튼 실행 후
        		case "ACC" : this.Div01.custCdEd.set_value(array[0]);	//거래처코드 셋팅
        					 this.Div01.custNameEd.set_value(array[1]);	//거래처명 셋팅
        					 this.Div01.operNoEd.set_value(array[2]);	//사업자등록번호 셋팅
        					 break;
        		//요구부서 찾기 버튼 실행 후			 
        		case "GP500" : this.Div01.demdDeptCdEd.set_value(array[0]);		//요구부서코드 셋팅
        					   this.Div01.demdDeptNameEd.set_value(array[1]);	//요구부서명 셋팅
        					   break;
        		//분개 그리드의 계정코드 찾기 버튼 실행 후 
        		case "ACCD" : this.dsJour.setColumn(this.dsJour.rowposition,"bimokCd",array[0]);	//비목코드셋팅										
        					  this.dsJour.setColumn(this.dsJour.rowposition,"acntCd",array[1]);		//계정코드 셋팅
        					  this.dsJour.setColumn(this.dsJour.rowposition,"acntNm",array[2]);		//계정코드명 셋팅
        					  this.dsJour.setColumn(this.dsJour.rowposition,"assiSubCd",array[3]);	//보조과목코드 셋팅
        					  this.dsJour.setColumn(this.dsJour.rowposition,"assiSubNm",array[4]);	//보조과목명 셋팅
        					  break;
        		case "ACCA" : this.dsJour.setColumn(e.row,"acntCd",arr[0]);	//계정코드 셋팅
        					  this.dsJour.setColumn(e.row,"acntNm",arr[1]);	//계정코드명 셋팅
        					  assiTypeCd = arr[2];							//변수에 보주유형 셋팅
        					  								
        					  //보조유형이 있으면 실행		
        					  if(assiTypeCd!=null){								
        						  application.open("assiSubCdPopupForm"
        											,"acc::AE_AccAssiSubPopupForm.xfdl"
        											,this.parent
        											,{acntCd:this.dsJour.getColumn(e.row,"acntCd"),code:"ACCA2"}
        											,"showtitlebar=true showstatusbar=false"
        											,100 
        											,100);
        					  }else{	
        				  	    alert("해당계정과목은 보조과목이 등록되어 있지 않습니다.");
        				      }
        				      break;
        		case "ACCA2" : this.dsJour.setColumn(e.row,"assiSubCd",arr[0]);	//보조과목 셋팅
        					   this.dsJour.setColumn(e.row,"assiSubNm",arr[1]);	//보조과목명 셋팅
        					   break;
        		case "ACCDA" : this.dsJour.setColumn(e.row,"acntCd",arr[0]);	//계정코드 셋팅
        					   this.dsJour.setColumn(e.row,"acntNm",arr[1]);	//계정코드명 셋팅
        					   assiTypeCd = arr[2];							//변수에 보조유형 셋팅
        								
        					   //보조유형이 있으면 실행		
        					   if(assiTypeCd!=null){						
        					  	 application.open("assiSubCdPopupForm"
        											,"acc::AE_AccAssiSubPopupForm.xfdl"
        											,this.parent	
        											,{acntCd:dsJour.getColumn(e.row,"acntCd"),code:"ACCDA2"}
        											,"showtitlebar=true showstatusbar=false"
        											,100 
        											,100);
        					   }else{
        						  alert("해당계정과목은 보조과목이 등록되어 있지 않습니다.");
        					   }
        					   break;
        		case "ACCDA2" : this.dsJour.setColumn(e.row,"assiSubCd",arr[0]);	//보조과목 셋팅
        						this.dsJour.setColumn(e.row,"assiSubNm",arr[1]);	//보조과목명 셋팅
        						break;
        		//분개 그리드의 보조과목코드 찾기 버튼 실행 후   
        		case "AAA" : this.dsJour.setColumn(e.row,"assiSubCd",arr[0]);
        					 this.dsJour.setColumn(e.row,"assiSubNm",arr[1]);
        					 break;
        		//자동분개규칙 조회 후			
        		case "ACCK"	: this.Div01.acntCdEd.set_value(array[0]);
        					  this.Div01.acntNameEd.set_value(array[1]);	
        					  this.Div01.assiSubNameEd.set_value(array[3]);	
        					  //회겨년도, 비목코드 argument에 셋팅
        					  var argument ='accYear=2016';
        					  argument +=' bimokCd='+array[4];
        					  var nRow = this.dsService.findRow( "serviceID", "findRunBimok" );
        					  this.dsService.setColumn(nRow,"argument",argument);
        					  //예산비목 조회 메서드 호출
        					  this.gfnService("findRunBimok");		
        						
        					  var debRow = this.dsJour.addRow();
        					  var creRow = this.dsJour.addRow();			
        					  //차변row 셋팅↓
        					  this.dsJour.setColumn(debRow,"resolNo",this.Div01.resolNoEd.value);		//차변 결의번호셋팅
        					  this.dsJour.setColumn(debRow,"seq",'1');							//차변 순번셋팅
        					  this.dsJour.setColumn(debRow,"creDebDiv",'1');					//차변 셋팅
        				  	  this.dsJour.setColumn(debRow,"debAmt",this.Div01.resolAmtMaskEdt.value);	//차변 금액셋팅
        					  this.dsJour.setColumn(debRow,"acntCd",this.Div01.acntCdEd.value);			//차변 계정코드셋팅
        					  this.dsJour.setColumn(debRow,"acntNm",this.Div01.acntNameEd.value);		//차변 계정과목이름셋팅
        					  this.dsJour.setColumn(debRow,"assiSubNm",this.Div01.assiSubNameEd.value);	//차변 보조과목이름셋팅
        					  this.dsJour.setColumn(debRow,"bimokCd",array[4]);					//차변 비목셋팅			
        					  this.dsJour.setColumn(debRow,"accPrid",this.Div01.accPridCombo.displaynulltext);	//차변 회계기수셋팅
        					  this.dsJour.setColumn(debRow,"closYb","N");						//차변 결산여부셋팅
        					  this.dsJour.setColumn(debRow,"closYb","N");						//차변 결산여부셋팅
        								
        					  //대변row 셋팅↓
        					  this.dsJour.setColumn(creRow,"resolNo",this.Div01.resolNoEd.value);		//대변 결의번호셋팅
        					  this.dsJour.setColumn(creRow,"seq",'2');							//대변 순번셋팅
        					  this.dsJour.setColumn(creRow,"creDebDiv",'2');					//대변 셋팅
        					  this.dsJour.setColumn(creRow,"creAmt",this.Div01.resolAmtMaskEdt.value);	//대변 금액셋팅
        					  this.dsJour.setColumn(creRow,"acntCd",array[5]);					//대변 계정코드셋팅
        					  this.dsJour.setColumn(creRow,"acntNm",array[6]);					//대변 계정과목이름셋팅
        					  this.dsJour.setColumn(creRow,"assiSubCd",array[7]);				//대변 보조과목코드셋팅
        					  this.dsJour.setColumn(creRow,"assiSubNm",array[8]);				//대변 보조과목이름셋팅			
        					  this.dsJour.setColumn(creRow,"accPrid",this.Div01.accPridCombo.displaynulltext);	//대변 회계기수 셋팅
        					  this.dsJour.setColumn(creRow,"closYb","N");						//대변 결산여부셋팅
        					  break;
        		case "CARD" : alert(array);
        					  this.dsPayRec.setColumn(this.dsPayRec.rowposition,"cardNo",array[0]);											
        					  this.dsPayRec.setColumn(this.dsPayRec.rowposition,"cardUseDate",array[1]);
        					  this.dsPayRec.setColumn(this.dsPayRec.rowposition,"aprvNo",array[2]);
        					  if(array[3]==null){
        						
        						this.dsPayRec.setColumn(this.dsPayRec.rowposition,"custCd",array[4]);
        					  }else{
        						
        						this.dsPayRec.setColumn(this.dsPayRec.rowposition,"custCd",array[3]);
        						this.dsPayRec.setColumn(this.dsPayRec.rowposition,"operNo",array[5]);
        						this.dsPayRec.setColumn(this.dsPayRec.rowposition,"addr",array[6]);	
        						this.dsPayRec.setColumn(this.dsPayRec.rowposition,"depoOwner",array[7]);		
        						this.dsPayRec.setColumn(this.dsPayRec.rowposition,"transBank",array[8]);
        						this.dsPayRec.setColumn(this.dsPayRec.rowposition,"accountNo",array[9]);
        						this.dsPayRec.setColumn(this.dsPayRec.rowposition,"price",array[10]);		
        					  }		
        	}			   
        }

        // 요구부서 검색 함수
        this.searchDemdDeptBtn_onclick = function(obj,e)
        {
        	this.gfnCodePopup('GP500');
        }

        
        // 자동분개 계정과목 검색 함수
        this.searchAcntCdBtn_onclick = function(obj,e)
        {
        	if(this.Div01.autoJourCheck.value==true){		
        		if(this.Div01.resolAmtMaskEdt.value==null){
        			alert("결의금액을 입력하여 주세요");
        		}else{
        			this.dsJour.clearData();
        			application.open("autoJourCodePopupForm"
        								,"acc::AE_AutoJourCodePopupForm.xfdl"
        								,this.parent
        								,{busiDivCd:"GA01"}
        								,"showtitlebar=true showstatusbar=false"
        								,100 
        								,100);			
        		}	
        	}else{
        		alert("자동분개는 결의구분이 '지출' 일때 가능하며, '지출' 일시 아래 자동분개여부를 체크 하여주시기 바랍니다.");		
        	}		
        }

        // 거래처 검색 함수
        this.searchCustCdBtn_onclick = function(obj,e)
        {
        	application.open("ARcompanyPopupForm"
        						,"acc::AR_CompanyPopupForm.xfdl"
        						,this.parent	
        						,{code:"ACC"}
        						,"showtitlebar=true showstatusbar=false"
        						,100 
        						,100);
        }

        // 결의서 등록 버튼클릭 이벤트
        this.regBtn_onclick = function(obj,e)
        {
        	if(this.resolAmtMaskEdt.value==null){	
        		alert("결의서의 결의금액은 필수 입력사항 입니다.");
        	}else if(this.absArea.value==null){
        		alert("결의서의 적요항목은 필수 입력사항 입니다.");
        	}else if(this.dsJour.rowcount==0){
        		alert("결의금액에 따른 분개를 등록하여 주시기 바랍니다.");
        	}else if(this.JourGrid.getCellValue(-2,1)!=this.JourGrid.getCellValue(-2,2)){
        		alert("분개장의 차변금액과 대변금액은 동일해야 합니다.");
        	}else{			
        		//결의서 데이터셋 셋팅↓	
        		this.dsResolLet.setColumn(0,"accPrid",this.accPridCombo.displaynulltext);		//회계기수 셋팅
        		this.dsResolLet.setColumn(0,"progStatDiv","16");					//진행상태(결의등록중으로 셋팅)
        		this.dsResolLet.setColumn(0,"danDiv","사삼병원");				//단구분 셋팅
        		this.dsResolLet.setColumn(0,"autoJourYb",this.autoJourCheck.value);	//자동분개 여부 셋팅
        		this.dsResolLet.setColumn(0,"closYb","N");						//결산여부 셋팅 		
        		if(this.dsTaxInv.findRow("purchSalesDiv","1")){	//세금계산서 일시			
        			this.dsResolLet.setColumn(0,"surtaxYb","Y");	//세금계산서 여부 셋팅			
        		}		
        		//결의서 등록 메서드↓
        		this.gfnService("registerResolLet");	
        		this.close();
        	}
        }

        // 결의서 수정 버튼클릭 이벤트
        this.modiBtn_onclick = function(obj,e)
        {
        	if(this.Div01.resolAmtMaskEdt.value==null){	
        		alert("결의서의 결의금액은 필수 입력사항 입니다.");
        	}else if(this.Div01.absArea.value==null){
        		alert("결의서의 적요항목은 필수 입력사항 입니다.");
        	}else if(this.dsJour.rowcount==0){
        		alert("결의금액에 따른 분개를 등록하여 주시기 바랍니다.");
        	}else if(this.Div01.JourGrid.getCellValue(-2,1)!=this.JourGrid.getCellValue(-2,2)){
        		alert("분개장의 차변금액과 대변금액은 동일해야 합니다.");
        	}else if(this.Div01.resolAmtMaskEdt.value!=this.Div01.JourGrid.getCellValue(-2,1)){
        		alert("결의서의 결의금액과 분개장의 차변금액은 동일해야 합니다.");
        	}else if(this.payGrid.rowcount!=0&&this.Div01.resolAmtMaskEdt.value!=this.Div01.payGrid.getCellValue(-2,2)){//지불내역 그리드에 값이 있을때 실행	
        		alert("결의서의 결의금액과 지불내역의 금액은 동일해야 합니다.");
        	}else{			
        		if(this.dsTaxInv.findRow("purchSalesDiv","1")){	//세금계산서 일시			
        			this.dsResolLet.setColumn(0,"surtaxYb","Y");	//세금계산서 여부 셋팅			
        		}
        		//진행상태 결의등록중으로 셋팅
        		this.dsResolLet.setColumn(0,"progStatDiv","16");		
        		//결의서 수정 메서드↓
        		this.gfnService("batchResolLetProcess","false");	
        		this.close();
        	}
        }

        // 취소 버튼클릭 이벤트
        this.CloseBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        
        //  자동분개 버튼
        this.autoJourCheck_onclick = function(obj,e)
        {
        	//자동분개 해제시 실행
        	if(obj.value==false){
        		//계정과목코드 지우기
        		this.Div01.acntCdEd.value="";
        		//계정과목 명 지우기 
        		this.Div01.acntNameEd.value="";
        		//보조과목명 지우기
        		this.Div01.assiSubNameEd.value="";
        		//분개 데이터셋 지우기
        		this.dsJour.deleteAll();
        	}
        }

        // 분개 그리드 클릭이벤트
        this.JourGrid_oncellclick = function(obj,e)
        {
        	resolDiv=this.Div01.resolDivCombo.value;
        	var creDebDiv=this.Div01.JourGrid.getCellValue(0,1);
        	//행추가 된 row 일 때 실행	ex) 0-존재하지않는행 1-초기행 2-추가된행 3-수정된행 8-삭제된 행
        	if(this.dsJour.getRowType(e.row)==2){					
        		//계정코드 조회버튼 클릭시 실행 
        		if(e.cell==3){							
        			//차대구분이 차변이고, 결의구분이 지출 일 때 실행
        			if(creDebDiv==1 && resolDiv==1){
        				application.open("debAcntCodePopupForm"
        									,"acc::AE_DebAcntCodePopupForm.xfdl"
        									,this.parent
        									,{deptCd:this.Div01.demdDeptCdEd.value}
        									,"showtitlebar=true showstatusbar=false"
        									,100 
        									,100);				
        			//차대구분이 대변 일 때 실행									
        			}else if(creDebDiv==2){	
        				application.open("acntCdPopupForm"
        									,"acc::AE_AcntCodePopupForm.xfdl"
        									,this.parent	
        									,{gubun:"autoJourHelp",code:"ACCA"}
        									,"showtitlebar=true showstatusbar=false"
        									,100 
        									,100);	
        			//차대구분이 차변이면서 결의구분이 지출대체 or 수입 or 수입대체 일 때 실행
        			}else if(creDebDiv==1&& (resolDiv==2||resolDiv==3||resolDiv==4)){
        				application.open("acntCdPopupForm"
        									,"acc::AE_AcntCodePopupForm.xfdl"
        									,this.parent	
        									,{gubun:"sudongJourHelp",code:"ACCDA"}
        									,"showtitlebar=true showstatusbar=false"
        									,100 
        									,100);	
        			}else{
        				alert("차대구분 선택후 조회 가능합니다.");
        			}
        		}
        		
        		//보조과목 조회버튼 클릭시 실행
        		if(e.cell==6){	
        			//보조유형이 있을때 실행
        			if(assiTypeCd!=null){	
        				application.open("assiSubCdPopupForm"
        									,"acc::AE_AccAssiSubPopupForm.xfdl"
        									,this.parent	
        									,{acntCd:this.dsJour.getColumn(e.row,"acntCd")}
        									,"showtitlebar=true showstatusbar=false"
        									,100 
        									,100);				
        			}
        		}
        	}
        }

        //<<모든그리드>> 행삭제 버튼 클릭이벤트
        this.gridRemoveRowBtn_onclick = function(obj,e)
        {
        	if(obj.name=="jourGirdRemoveRowBtn"){			//분개 그리드 행삭제
        		this.dsJour.deleteRow(this.dsJour.rowposition);
        	}else if(obj.name=="payGridRemoveRowBtn"){		//지불내역 그리드 행삭제
        		var custCd=this.dsPayRec.getColumn(this.dsPayRec.rowposition,"custCd");
        			for(var row=0;row<this.dsTaxInv.rowcount;row++){
        				if(custCd==this.dsTaxInv.getColumn(row,"custCd")){					
        					this.dsTaxInv.deleteRow(row); 
        					this.dsDetailTaxInv.deleteRow(row); 
        				}
        			}
        		this.dsPayRec.deleteRow(this.dsPayRec.rowposition);
        	}
        }

        //<<모든그리드>> 행추가 버튼 클릭이벤트
        this.gridAddRow_onclick = function(obj,e)
        {
        	//분개 그리드 행추가 버튼 일 때 실행
        	if(obj.name=="jourGirdAddRowBtn"){
        		//자동분개 체크일시 행추가 안됨
        		if(this.Div01.autoJourCheck.value==1){
        			alert("행추가는 자동분개여부 체크 해제 후 가능합니다.");
        		}else{
        			var row=this.dsJour.addRow();
        			this.dsJour.setColumn(row,"seq",this.dsJour.getRowCount());					//순번 부여
        			this.dsJour.setColumn(row,"resolNo",this.Div01.resolNoEd.value);			//결의번호 셋팅
        			this.dsJour.setColumn(row,"accPrid",this.Div01.accPridCombo.displaynulltext);//회계기수 셋팅 
        			this.dsJour.setColumn(row,"closYb","N");									//결산여부 셋팅
        		}		
        	//지불내역 그리드 행추가 버튼 일 때 실행	
        	}else if(obj.name=="payGridAddRowBtn"){
        		//결의구분이 지출 or 지출대체 일 때 실행
        		if(resolDiv == '1'||resolDiv == '2'){
        			if(this.Div01.resolAmtMaskEdt.value==null || this.Div01.absArea.value==null){
        				alert("결의금액과 적요를 입력 후 사용 가능합니다.");
        			}else{
        				var row=this.dsPayRec.addRow();
        				this.dsPayRec.setColumn(row,"resolNo",this.Div01.resolNoEd.value);		//결의번호
        				this.dsPayRec.setColumn(row,"seq",this.Div01.dsPayRec.getRowCount());	//순번 부여
        				this.dsPayRec.setColumn(row,"price",this.Div01.resolAmtMaskEdt.value);	//금액
        				this.dsPayRec.setColumn(row,"custCd",this.Div01.custCdEd.value);		//거래처코드
        				this.dsPayRec.setColumn(row,"operNo",this.Div01.operNoEd.value);		//사업자번호
        				this.dsPayRec.setColumn(row,"addr",this.Div01.addrEd.value);			//주소
        				this.dsPayRec.setColumn(row,"exePurp",this.Div01.absArea.value);		//집행목적
        				this.dsPayRec.setColumn(row,"users",application.gdsEmp.getColumn(0,"empNm"));//사용자
        			}			
        		}else{
        			alert("결의구분이 '지출' 또는 '지출대체' 일때 가능합니다.");
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHmEmp.addEventHandler("onrowposchanged", this.ds_emp_onrowposchanged, this);
            this.dsTaxInv.addEventHandler("canrowposchange", this.dsTaxInv_canrowposchange, this);
            this.dsDetailTaxInv.addEventHandler("oncolumnchanged", this.dsDetailTaxInv_oncolumnchanged, this);
            this.dsAccPrid.addEventHandler("onrowposchanged", this.dsAccYear_onrowposchanged, this);
            this.addEventHandler("onload", this.AR_ResolRegistPopupForm_onload, this);
            this.Div00.yearSpin.addEventHandler("onspin", this.Div00_yearSpin_onspin, this);
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
            this.Div01.subCodeStc18.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc19.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.payGrid.addEventHandler("oncellclick", this.payGrid_oncellclick, this);
            this.Div01.payGrid.addEventHandler("onenterdown", this.payGrid_onenterdown, this);
            this.Div01.payGrid.addEventHandler("oncloseup", this.payGrid_oncloseup, this);
            this.Div01.payGrid.addEventHandler("onexpanddown", this.payGrid_onexpanddown, this);
            this.Div01.taxInvGrid.addEventHandler("onenterdown", this.taxInvGrid_onenterdown, this);
            this.Div01.taxInvGrid.addEventHandler("oncloseup", this.taxInvGrid_oncloseup, this);
            this.Div01.subCodeStc22.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc23.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc24.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc25.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.subCodeStc26.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.JourGrid.addEventHandler("oncellclick", this.JourGrid_oncellclick, this);
            this.Div01.autoJourCheck.addEventHandler("onclick", this.autoJourCheck_onclick, this);
            this.Div01.Static00.addEventHandler("onclick", this.Div01_Static00_onclick, this);
            this.Div01.accPridCombo.addEventHandler("onitemchanged", this.Div01_accPridCombo_onitemchanged, this);
            this.Div01.resolDivCombo.addEventHandler("onitemchanged", this.resolDivCombo_onitemchanged, this);
            this.Div01.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchDemdDeptBtn.addEventHandler("onclick", this.searchDemdDeptBtn_onclick, this);
            this.searchAcntCdBtn.addEventHandler("onclick", this.searchAcntCdBtn_onclick, this);
            this.searchCustCdBtn.addEventHandler("onclick", this.searchCustCdBtn_onclick, this);
            this.jourGirdAddRowBtn.addEventHandler("onclick", this.gridAddRow_onclick, this);
            this.jourGirdRemoveRowBtn.addEventHandler("onclick", this.gridRemoveRowBtn_onclick, this);
            this.payGridRemoveRowBtn.addEventHandler("onclick", this.gridRemoveRowBtn_onclick, this);
            this.payGridAddRowBtn.addEventHandler("onclick", this.gridAddRow_onclick, this);
            this.modiBtn.addEventHandler("onclick", this.modiBtn_onclick, this);
            this.CloseBtn.addEventHandler("onclick", this.CloseBtn_onclick, this);
            this.regBtn.addEventHandler("onclick", this.regBtn_onclick, this);

        };

        this.loadIncludeScript("AR_ResolRegistPopupForm.xfdl");

       
    };
}
)();

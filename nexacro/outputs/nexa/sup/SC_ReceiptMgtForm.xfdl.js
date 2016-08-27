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
                this.set_name("SC_ReceiptMgtForm");
                this.set_classname("SC_ReceiptMgtForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRsvt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtDate\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtTime\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnTime\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"sms\" type=\"STRING\" size=\"256\"/><Column id=\"aplMan\" type=\"STRING\" size=\"256\"/><Column id=\"aplManTel\" type=\"STRING\" size=\"256\"/><Column id=\"rship\" type=\"STRING\" size=\"256\"/><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"pckNm\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"reducCd\" type=\"STRING\" size=\"256\"/><Column id=\"reducNm\" type=\"STRING\" size=\"256\"/><Column id=\"reducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"payMan\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtResp\" type=\"STRING\" size=\"256\"/><Column id=\"memo\" type=\"STRING\" size=\"256\"/><Column id=\"cancelYn\" type=\"STRING\" size=\"256\"/><Column id=\"choInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"inspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInsp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsChoInsp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/><Column id=\"qnt\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findRsvtReceiptList</Col><Col id=\"URL\">his::sup/checkup/findRsvtReceiptList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsReceipt=dsReceipt dsRsvt=dsRsvt</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findRsvtInspList</Col><Col id=\"URL\">his::sup/checkup/findRsvtInspList.do</Col><Col id=\"outData\">dsInsp=dsInsp dsChoInsp=dsChoInsp</Col><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">findPckInspList</Col><Col id=\"URL\">his::sup/checkup/findPckInspList.do</Col><Col id=\"outData\">dsInsp=dsInsp</Col></Row><Row><Col id=\"serviceID\">findReducList</Col><Col id=\"URL\">his::sup/checkup/findReducList.do</Col><Col id=\"outData\">dsReduc=dsReduc</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchReceiptProcess</Col><Col id=\"URL\">his::sup/checkup/batchReceiptProcess.do</Col><Col id=\"inData\">dsRsvt=dsTempR dsChoInsp=dsChoInsp:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">supCallBackFunc</Col></Row><Row><Col id=\"serviceID\">cancelReceipt</Col><Col id=\"URL\">his::sup/checkup/cancelReceipt.do</Col><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"inData\">dsReceipt=dsTempR:U</Col></Row><Row><Col id=\"serviceID\">registerReceipt</Col><Col id=\"URL\">his::sup/checkup/registerReceipt.do</Col><Col id=\"inData\">dsReceipt=dsTempR:U</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGenderCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">남</Col><Col id=\"value\">남</Col></Row><Row><Col id=\"code\">여</Col><Col id=\"value\">여</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPat", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"barrAss\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" type=\"STRING\" size=\"256\"/><Column id=\"deathDate\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveYb\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveNo\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiver\" type=\"STRING\" size=\"256\"/><Column id=\"recNwDate\" type=\"STRING\" size=\"256\"/><Column id=\"estbGiho\" type=\"STRING\" size=\"256\"/><Column id=\"certfctNo\" type=\"STRING\" size=\"256\"/><Column id=\"insuRrn\" type=\"STRING\" size=\"256\"/><Column id=\"insuNm\" type=\"STRING\" size=\"256\"/><Column id=\"applyStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReceipt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtDate\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtTime\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnTime\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"sms\" type=\"STRING\" size=\"256\"/><Column id=\"aplMan\" type=\"STRING\" size=\"256\"/><Column id=\"aplManTel\" type=\"STRING\" size=\"256\"/><Column id=\"rship\" type=\"STRING\" size=\"256\"/><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"pckNm\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"reducCd\" type=\"STRING\" size=\"256\"/><Column id=\"reducNm\" type=\"STRING\" size=\"256\"/><Column id=\"reducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"payMan\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtResp\" type=\"STRING\" size=\"256\"/><Column id=\"memo\" type=\"STRING\" size=\"256\"/><Column id=\"cancelYn\" type=\"STRING\" size=\"256\"/><Column id=\"choInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"inspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/><Column id=\"aplDate\" type=\"STRING\" size=\"256\"/><Column id=\"aplTime\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTempR", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtDate\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtTime\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnTime\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"sms\" type=\"STRING\" size=\"256\"/><Column id=\"aplMan\" type=\"STRING\" size=\"256\"/><Column id=\"aplManTel\" type=\"STRING\" size=\"256\"/><Column id=\"rship\" type=\"STRING\" size=\"256\"/><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"pckNm\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"reducCd\" type=\"STRING\" size=\"256\"/><Column id=\"reducNm\" type=\"STRING\" size=\"256\"/><Column id=\"reducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"payMan\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtResp\" type=\"STRING\" size=\"256\"/><Column id=\"memo\" type=\"STRING\" size=\"256\"/><Column id=\"cancelYn\" type=\"STRING\" size=\"256\"/><Column id=\"choInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"inspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/><Column id=\"aplDate\" type=\"STRING\" size=\"256\"/><Column id=\"aplTime\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRece", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtDate\" type=\"STRING\" size=\"256\"/><Column id=\"receDate\" type=\"STRING\" size=\"256\"/><Column id=\"befReceAmt\" type=\"STRING\" size=\"256\"/><Column id=\"payAmt\" type=\"STRING\" size=\"256\"/><Column id=\"cardCashDiv\" type=\"STRING\" size=\"256\"/><Column id=\"aprvNo\" type=\"STRING\" size=\"256\"/><Column id=\"inspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"choInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"reducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"inspDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvDate\" type=\"STRING\" size=\"256\"/><Column id=\"cardCd\" type=\"STRING\" size=\"256\"/><Column id=\"cardNo\" type=\"STRING\" size=\"256\"/><Column id=\"valPrid\" type=\"STRING\" size=\"256\"/><Column id=\"instmPrid\" type=\"STRING\" size=\"256\"/><Column id=\"cashAprvData\" type=\"STRING\" size=\"256\"/><Column id=\"cashAprvDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"cancelYn\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "35.84%", "658", null, "46", "2.4%", null, this);
            obj.set_taborder("56");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "35.84%", "63", null, "355", "2.4%", null, this);
            obj.set_taborder("39");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "0", "1250", "60", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("transparent URL('img::titleBar3.jpg')");
            this.addChild(obj.name, obj);

            obj = new Grid("inspGrid", "absolute", "448", "462", "252", "191", null, null, this);
            obj.set_taborder("9");
            obj.set_binddataset("dsInsp");
            obj.set_autofittype("col");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"141\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"검사목록\"/><Cell row=\"1\" text=\"검사코드\"/><Cell row=\"1\" col=\"1\" text=\"검사명\"/></Band><Band id=\"body\"><Cell text=\"bind:inspCd\"/><Cell col=\"1\" text=\"bind:inspNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("receiptGrid", "absolute", "30", "462", "406", "282", null, null, this);
            obj.set_taborder("17");
            obj.set_binddataset("dsReceipt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"47\"/><Column size=\"66\"/><Column size=\"42\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"접수자 목록\"/><Cell row=\"1\" text=\"검진예정일\"/><Cell row=\"1\" col=\"1\" text=\"등록번호\"/><Cell row=\"1\" col=\"2\" text=\"검진자명\"/><Cell row=\"1\" col=\"3\" text=\"성별\"/><Cell row=\"1\" col=\"4\" text=\"검진시간\"/><Cell row=\"1\" col=\"5\" text=\"취소\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:inspPlnDate\"/><Cell col=\"1\" text=\"bind:patNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" text=\"bind:gender\"/><Cell col=\"4\" text=\"bind:inspPlnTime\" mask=\"##:##\"/><Cell col=\"5\" text=\"bind:cancelYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("choInspGrid", "absolute", "710", "462", "510", "189", null, null, this);
            obj.set_taborder("22");
            obj.set_binddataset("dsChoInsp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"158\"/><Column size=\"38\"/><Column size=\"65\"/><Column size=\"85\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" text=\"정밀검사 목록\"/><Cell col=\"5\"/><Cell row=\"1\" text=\"코드\"/><Cell row=\"1\" col=\"1\" text=\"검사명\"/><Cell row=\"1\" col=\"2\" text=\"수량\"/><Cell row=\"1\" col=\"3\" text=\"금액\"/><Cell row=\"1\" col=\"4\" text=\"검사예정일\"/><Cell row=\"1\" col=\"5\"/></Band><Band id=\"body\"><Cell text=\"bind:inspCd\"/><Cell col=\"1\" text=\"bind:inspNm\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" text=\"bind:qnt\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 3 0 0;\" text=\"bind:sumAmt\" expr=\"expr:qnt*amt\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:inspPlnDate\"/><Cell col=\"5\" text=\"bind:rsvtNo\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합              계\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 3 0 0;\" expr=\"expr:dataset.getSum('qnt*amt')\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("rsvtGrid", "absolute", "28", "99", "408", "356", null, null, this);
            obj.set_taborder("24");
            obj.set_binddataset("dsRsvt");
            obj.set_autofittype("col");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_selectscrollmode("default");
            obj.set_suppresslevel("sameskip");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"106\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"39\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" text=\"접수대상자 목록\"/><Cell row=\"1\" text=\"검진예정일\"/><Cell row=\"1\" col=\"1\" text=\"등록번호\"/><Cell row=\"1\" col=\"2\" text=\"검진자명\"/><Cell row=\"1\" col=\"3\" text=\"성별\"/><Cell row=\"1\" col=\"4\" text=\"검진시간\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:inspPlnDate\"/><Cell col=\"1\" text=\"bind:patNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:gender\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:inspPlnTime\" mask=\"##:##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("inspPlnDateCal", "absolute", "11.82%", "64", null, "27", "74.71%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_expr("Date()");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static02", "absolute", "5.08%", "-3", null, "60", "71.19%", null, this);
            obj.getSetter("taborder").set("34");
            obj.set_text("종합검진 접수");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "2.32%", "63", null, "30", "89.04%", null, this);
            obj.set_taborder("36");
            obj.set_text("검진예정일");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "347", "62", "90", "32", null, null, this);
            obj.set_taborder("37");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "448", "64", "768", "352", null, null, this);
            obj.set_taborder("38");
            obj.style.set_background("@gradation");
            obj.style.set_border("0 solid #9f9f9fb3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            obj = new Edit("rsvtDateEd", "absolute", "109", "15", "132", "30", null, null, this.compBox);
            obj.set_taborder("102");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("regNo1Ed", "absolute", "109", "151", "98", "30", null, null, this.compBox);
            obj.set_taborder("103");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "109", "117", "98", "30", null, null, this.compBox);
            obj.set_taborder("108");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "109", "83", "132", "30", null, null, this.compBox);
            obj.set_taborder("109");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ageEd", "absolute", "277", "117", "60", "30", null, null, this.compBox);
            obj.set_taborder("110");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("pckCdEd", "absolute", "439", "117", "92", "30", null, null, this.compBox);
            obj.set_taborder("116");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("reducCdEd", "absolute", "439", "151", "92", "30", null, null, this.compBox);
            obj.set_taborder("120");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("reducNmEd", "absolute", "536", "151", "182", "30", null, null, this.compBox);
            obj.set_taborder("121");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("pckNmEd", "absolute", "536", "117", "183", "30", null, null, this.compBox);
            obj.set_taborder("122");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rsvtNoEd", "absolute", "439", "15", "147", "30", null, null, this.compBox);
            obj.set_taborder("124");
            this.compBox.addChild(obj.name, obj);
            obj = new Calendar("inspDateCal", "absolute", "439", "83", "147", "30", null, null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("130");
            obj.set_readonly("false");
            obj = new Edit("smsEd", "absolute", "109", "185", "227", "30", null, null, this.compBox);
            obj.set_taborder("134");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("aplMan", "absolute", "109", "219", "75", "30", null, null, this.compBox);
            obj.set_taborder("135");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rlEd", "absolute", "271", "220", "65", "30", null, null, this.compBox);
            obj.set_taborder("136");
            obj.set_imemode("alpha");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rsvtRespEd", "absolute", "439", "49", "147", "30", null, null, this.compBox);
            obj.set_taborder("137");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("phoneEd", "absolute", "109", "253", "227", "30", null, null, this.compBox);
            obj.set_taborder("138");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("payManEd", "absolute", "651", "185", "101", "30", null, null, this.compBox);
            obj.set_taborder("139");
            this.compBox.addChild(obj.name, obj);
            obj = new TextArea("memoArea", "absolute", "109", "287", "227", "50", null, null, this.compBox);
            obj.set_taborder("140");
            obj.getSetter("class").set("AreaArea");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("regNo2Ed", "absolute", "239", "151", "98", "30", null, null, this.compBox);
            obj.set_taborder("141");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("inspTimeMask", "absolute", "594", "83", "92", "30", null, null, this.compBox);
            obj.set_taborder("142");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.style.set_align("center");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "210", "151", "23", "28", null, null, this.compBox);
            obj.getSetter("taborder").set("143");
            obj.set_text("-");
            obj.style.set_background("transparent");
            obj.style.set_border("0px solid transparent transparent");
            obj.style.set_align("center middle");
            this.compBox.addChild(obj.name, obj);
            obj = new Combo("genderCombo", "absolute", "215", "117", "55", "30", null, null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.getSetter("class").set("AreaCombo");
            obj.set_taborder("144");
            obj.set_innerdataset("dsGenderCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Edit("aplDateEd", "absolute", "109", "49", "132", "30", null, null, this.compBox);
            obj.set_taborder("146");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("aplTimeMask", "absolute", "245", "49", "92", "30", null, null, this.compBox);
            obj.set_taborder("147");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.style.set_align("center");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("basicInspAmtEd", "absolute", "439", "185", "120", "30", null, null, this.compBox);
            obj.set_taborder("148");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("reducAmtEd", "absolute", "439", "219", "151", "30", null, null, this.compBox);
            obj.set_taborder("149");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("rsvtAmtEd", "absolute", "439", "253", "151", "30", null, null, this.compBox);
            obj.set_taborder("150");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("basicInspSumAmtEd", "absolute", "439", "287", "151", "30", null, null, this.compBox);
            obj.set_taborder("151");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            obj.getSetter("class").set("AreaMaskEdt");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div07", "absolute", "3.02%", "219", "76", "30", null, null, this.compBox);
            obj.set_taborder("152");
            obj.set_text("신청인");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "3.02%", "253", "76", "30", null, null, this.compBox);
            obj.set_taborder("153");
            obj.set_text("연락처");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "3.02%", "151", "76", "30", null, null, this.compBox);
            obj.set_taborder("154");
            obj.set_text("주민번호");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "3.02%", "117", "76", "30", null, null, this.compBox);
            obj.set_taborder("155");
            obj.set_text("검진자명");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "3.02%", "83", "76", "30", null, null, this.compBox);
            obj.set_taborder("156");
            obj.set_text("등록번호");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "3.02%", "49", "76", "30", null, null, this.compBox);
            obj.set_taborder("157");
            obj.set_text("접수일자");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "3.02%", "15", "76", "30", null, null, this.compBox);
            obj.set_taborder("158");
            obj.set_text("예약일자");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "45.96%", "15", "76", "30", null, null, this.compBox);
            obj.set_taborder("159");
            obj.set_text("예약번호");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "45.96%", "49", "76", "30", null, null, this.compBox);
            obj.set_taborder("160");
            obj.set_text("예약담당");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "45.96%", "83", "76", "30", null, null, this.compBox);
            obj.set_taborder("161");
            obj.set_text("검진일시");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div10", "absolute", "45.96%", "117", "76", "30", null, null, this.compBox);
            obj.set_taborder("162");
            obj.set_text("패키지");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div11", "absolute", "73.96%", "185", "76", "30", null, null, this.compBox);
            obj.set_taborder("163");
            obj.set_text("입금자");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div12", "absolute", "45.96%", "151", "76", "30", null, null, this.compBox);
            obj.set_taborder("164");
            obj.set_text("감면구분");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div13", "absolute", "45.96%", "185", "76", "30", null, null, this.compBox);
            obj.set_taborder("165");
            obj.set_text("기본금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div14", "absolute", "45.96%", "219", "76", "30", null, null, this.compBox);
            obj.set_taborder("166");
            obj.set_text("감면금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div15", "absolute", "45.96%", "253", "76", "30", null, null, this.compBox);
            obj.set_taborder("167");
            obj.set_text("예약금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div16", "absolute", "45.96%", "287", "76", "30", null, null, this.compBox);
            obj.set_taborder("168");
            obj.set_text("총기본금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div17", "absolute", "3.02%", "185", "76", "30", null, null, this.compBox);
            obj.set_taborder("169");
            obj.set_text("SMS");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div18", "absolute", "3.02%", "287", "76", "30", null, null, this.compBox);
            obj.set_taborder("170");
            obj.set_text("메모");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div19", "absolute", "24.65%", "219", "76", "30", null, null, this.compBox);
            obj.set_taborder("171");
            obj.set_text("관계");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("pckPopBtn", "absolute", "722", "116", "32", "32", null, null, this.compBox);
            obj.set_taborder("172");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("reducPopBtn", "absolute", "722", "151", "32", "32", null, null, this.compBox);
            obj.set_taborder("173");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox.addChild(obj.name, obj);

            obj = new Div("btnBox", "absolute", "74.4%", "415", null, "57", "1.52%", null, this);
            obj.set_taborder("48");
            this.addChild(obj.name, obj);
            obj = new Button("addBtn", "absolute", "105", "9", "90", "32", null, null, this.btnBox);
            obj.set_taborder("0");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("delBtn", "absolute", "201", "9", "90", "32", null, null, this.btnBox);
            obj.set_taborder("2");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "36.64%", "666", null, "30", "54.72%", null, this);
            obj.set_taborder("49");
            obj.set_text("기본검사금액");
            obj.style.set_background("rosybrown");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "77.44%", "666", null, "30", "13.92%", null, this);
            obj.set_taborder("50");
            obj.set_text("총수납금액");
            obj.style.set_background("rosybrown");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "57.12%", "666", null, "30", "34.24%", null, this);
            obj.set_taborder("51");
            obj.set_text("선택검사금액");
            obj.style.set_background("rosybrown");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("btnBox2", "absolute", "60.32%", "703", null, "52", "1.12%", null, this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);
            obj = new Button("receiptBtn", "absolute", "82", "8", "90", "32", null, null, this.btnBox2);
            obj.set_taborder("4");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::receiptBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox2.addChild(obj.name, obj);
            obj = new Button("receBtn", "absolute", "181", "8", "90", "32", null, null, this.btnBox2);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::storeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox2.addChild(obj.name, obj);
            obj = new Button("modiBtn", "absolute", "279", "8", "90", "32", null, null, this.btnBox2);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox2.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "377", "8", "90", "32", null, null, this.btnBox2);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.btnBox2.addChild(obj.name, obj);
            obj = new Button("receiptXBtn", "absolute", "62", "8", "110", "32", null, null, this.btnBox2);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::receiptXBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            obj.set_visible("false");
            this.btnBox2.addChild(obj.name, obj);

            obj = new MaskEdit("basicInspSumAmtEd", "absolute", "45.52%", "666", null, "30", "43.84%", null, this);
            obj.set_taborder("57");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("choInspAmtEd00", "absolute", "66.08%", "666", null, "30", "23.68%", null, this);
            obj.set_taborder("58");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("inspSumAmtEd00", "absolute", "86.32%", "666", null, "30", "3.36%", null, this);
            obj.set_taborder("59");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 355, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 76, 30, this.compBox.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("157");
            		p.set_text("접수일자");
            		p.style.set_background("tan");
            		p.style.set_color("black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("10 다음_Regular");

            	}
            );
            this.compBox.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 76, 30, this.compBox.Div08,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("160");
            		p.set_text("예약담당");
            		p.style.set_background("tan");
            		p.style.set_color("black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("10 다음_Regular");

            	}
            );
            this.compBox.Div08.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 76, 30, this.compBox.Div09,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("161");
            		p.set_text("검진일시");
            		p.style.set_background("tan");
            		p.style.set_color("black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("10 다음_Regular");

            	}
            );
            this.compBox.Div09.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 795, 339, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("38");
            		p.style.set_background("@gradation");
            		p.style.set_border("0 solid #9f9f9fb3");
            		p.set_enable("false");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 301, 57, this.btnBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("48");

            	}
            );
            this.btnBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 30, this.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("50");
            		p.set_text("총수납금액");
            		p.style.set_background("rosybrown");
            		p.style.set_color("black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("10 다음_Regular");

            	}
            );
            this.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 108, 30, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("51");
            		p.set_text("선택검사금액");
            		p.style.set_background("rosybrown");
            		p.style.set_color("black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("10 다음_Regular");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 474, 57, this.btnBox2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("55");

            	}
            );
            this.btnBox2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SC_ReceiptMgtForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","compBox.rsvtNoEd","value","dsTempR","rsvtNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","compBox.rsvtRespEd","value","dsTempR","rsvtResp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","compBox.inspDateCal","value","dsTempR","inspPlnDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","compBox.inspTimeMask","value","dsTempR","inspPlnTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","compBox.pckCdEd","value","dsTempR","pckCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","compBox.pckNmEd","value","dsTempR","pckNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","compBox.basicInspAmtEd","value","dsTempR","basicInspAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","compBox.payManEd","value","dsTempR","payMan");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","compBox.reducAmtEd","value","dsTempR","reducAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","compBox.rsvtAmtEd","value","dsTempR","rsvtAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","compBox.basicInspSumAmtEd","value","dsTempR","basicInspSumAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","compBox.memoArea","value","dsTempR","memo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","compBox.phoneEd","value","dsTempR","aplManTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","compBox.rlEd","value","dsTempR","rship");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","compBox.aplMan","value","dsTempR","aplMan");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","compBox.smsEd","value","dsTempR","sms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","compBox.regNo1Ed","value","dsTempR","rrn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","compBox.regNo2Ed","value","dsTempR","rrn2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","compBox.patNmEd","value","dsTempR","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","compBox.rsvtDateEd","value","dsTempR","rsvtDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","compBox.genderCombo","value","dsTempR","gender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","compBox.ageEd","value","dsTempR","age");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","compBox.patNoEd","value","dsTempR","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","compBox.aplDateEd","value","dsTempR","aplDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","compBox.aplTimeMask","value","dsTempR","aplTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","basicInspSumAmtEd","value","dsTempR","basicInspSumAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","choInspAmtEd00","value","dsTempR","choInspAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","inspSumAmtEd00","value","dsTempR","inspSumAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","compBox.reducNmEd","value","dsTempR","reducNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","compBox.reducCdEd","value","dsTempR","reducCd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SC_ReceiptMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SC_ReceiptMgtForm.xfdl", "scripts::supScripts.xjs");
        this.registerScript("SC_ReceiptMgtForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 진료지원 종합검진 접수관리                                                          	*
        *                                                                               *
        * @Path		                	                        *
        * @Description 										   	*
        * @Author	    한수정					                                		*
        * 									                                            *
        * Created on 2016. 5. 30.                             		                    *
        *									                                            *
        ********************************************************************************/

        
        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 
        //include "scripts::supScripts.xjs";

        // 화면변수
        var editFlag = false;
        var	addFlag = false;

        
        // 접수 대상자 및 접수 조회
        this.searchBtn_onclick=function(obj,e)
        {
        	
        	var inspDate = this.inspPlnDateCal.value;

        	var argument = 'inspPlnDate='+inspDate+' receiptFlag=Y';
        	var row = this.dsService.findRow('serviceID' , "findRsvtReceiptList");
        	this.dsService.setColumn(row, "argument", argument);

        	this.gfnService("findRsvtReceiptList", false);

        	this.choInspGrid.setCellProperty("Body", 2, "edittype", "none");

        	editFlag = false;
        	addFlag = false;

        }

        
        //  접수대상자 목록 선택 시 상세조회
        this.dsRsvt_onrowposchanged=function(obj,e)
        {
        	this.compBox.set_enable(false);
        	var rsvtNo = this.dsRsvt.getColumn(this.rsvtGrid.currentrow,"rsvtNo");

        	this.setTempR(this.dsRsvt);
         	this.findRsvtInspList(rsvtNo);
         	
        }

        
        //  접수 목록 선택 시 상세조회
        this.dsReceipt_onrowposchanged = function(obj,e)
        {
        	this.compBox.set_enable(false);
        	var rsvtNo = this.dsReceipt.getColumn(this.receiptGrid.currentrow,"rsvtNo");

        	this.setTempR(this.dsReceipt);
        	
         	this.findRsvtInspList(rsvtNo);
        }

        this.setTempR=function(ds)
        {
        	this.dsTempR.clearData();
        	this.dsTempR.addRow();
        	this.dsTempR.copyRow(0, ds, ds.rowposition);
        }

        // 
        this.findRsvtInspList=function(rsvtNo)
        {
        	if(rsvtNo!=null)		
        	{
        		var argument = 'rsvtNo='+rsvtNo;
        		var row = this.dsService.findRow('serviceID' , "findRsvtInspList");
        		this.dsService.setColumn(row, "argument", argument);
        						
        		this.gfnService("findRsvtInspList");	
        	}
        }

        // 버튼박스 1 -  추가버튼
        this.btnBox_addBtn_onclick = function(obj,e)
        {
        	var param = {};
        	this.gfnPopup("SC_PckInspPopForm","sup",param,"");
        }

        this.pCode=function(retVal)
        {
        	addFlag = true;

        	if(retVal == 1)
        	{	
        		this.autoCalChoInspAmt();
        	}
        }

        
        // 추가 검사 선택 후 금액 계산
        this.autoCalChoInspAmt=function()
        {
        	var basicInspSumAmt	= this.dsTempR.getColumn(this.dsTempR.rowposition,"basicInspSumAmt");
        	var choInspAmt = this.choInspGrid.getCellText(-2, 3);

        	choInspAmt2 = choInspAmt.replace(",","");    
        	
        	var inspSumAmt;
        	
        	if(!this.gfnIsNull(choInspAmt2))
        	{
        		inspSumAmt	= parseInt(basicInspSumAmt) + parseInt(choInspAmt2);

        	}

        	this.dsTempR.setColumn(this.dsTempR.rowposition, "inspSumAmt", inspSumAmt);
        	this.dsTempR.setColumn(this.dsTempR.rowposition, "choInspAmt", choInspAmt2);
        	
        }

        // 수정
        this.choInspGrid_oncelldblclick = function(obj,e)
        {
        	this.choInspGrid.setCellProperty("Body", 2, "edittype", "normal");	
        }

        this.choInspGrid_onenterdown=function(obj,e)
        {
        	obj.setCellPos(1);
        	this.autoCalChoInspAmt();
        }

        
        // 버튼박스 1 - 삭제 버튼
        this.btnBox_delBtn_onclick = function(obj,e)
        {
        	this.dsChoInsp.deleteRow(this.dsChoInsp.rowposition);
        	this.autoCalChoInspAmt();	
        }

        
        // 버튼박스2 - 수정버튼
        this.btnBox2_modiBtn_onclick = function(obj,e)
        {	
        	this.compBox.set_enable(true);
        	this.choInspGrid.setCellProperty("Body", 2, "edittype", "normal"); 
        	editFlag = true;
        }

        
        // 버튼박스2 - 저장버튼
        this.btnBox2_saveBtn_onclick = function(obj,e)
        {
        	//this.fn_setUserData(this.dsRsvt);
        	
        	if(this.supCheckMdData(this.compBox))
        	{
        		this.gfnService("batchReceiptProcess");
        	}	
        }

        
        // 버튼박스2 - 수납버튼

        this.btnBox2_receBtn_onclick = function(obj,e)
        {
         	this.dsRece.clearData();
        	this.dsRece.addRow();
        	
        	this.dsRece.setColumn(0, "rsvtNo", this.dsTempR.getColumn(this.dsTempR.rowposition, "rsvtNo"));
        	this.dsRece.setColumn(0, "rsvtDate", this.dsTempR.getColumn(this.dsTempR.rowposition, "rsvtDate"));
        	this.dsRece.setColumn(0, "inspDate", this.dsTempR.getColumn(this.dsTempR.rowposition, "inspPlnDate"));
        	this.dsRece.setColumn(0, "basicInspAmt", this.dsTempR.getColumn(this.dsTempR.rowposition, "basicInspAmt"));
        	this.dsRece.setColumn(0, "reducAmt", this.dsTempR.getColumn(this.dsTempR.rowposition, "reducAmt"));
        	this.dsRece.setColumn(0, "rsvtAmt", this.dsTempR.getColumn(this.dsTempR.rowposition, "rsvtAmt"));
        	this.dsRece.setColumn(0, "choInspAmt", this.dsTempR.getColumn(this.dsTempR.rowposition, "choInspAmt"));
        	this.dsRece.setColumn(0, "inspSumAmt", this.dsTempR.getColumn(this.dsTempR.rowposition, "inspSumAmt"));

        	var param = {dsRece:this.dsRece};
        	this.gfnPopup("SC_RecePopForm","sup",param,"");
        }

        this.payCo=function(retVal)
        {
        	if(retVal == 1)
        	{	
        			alert("수납이 완료되었습니다.");
        	}
        }

        // 접수 버튼
        this.btnBox2_receiptBtn_onclick = function(obj,e)
        {
        	trace(this.dsTempR.saveXML());

        	if(confirm("접수를 하겠습니까?")){
        		var row = this.dsTempR.rowposition;

        		var sysDate = this.gfnDate('yyyy-MM-dd/HHMi');

        		var date = sysDate.split("/");

        		this.dsTempR.setColumn(row, "aplTime", date[1]);
        		this.dsTempR.setColumn(row, "aplDate", date[0]);

        		this.gfnService("registerReceipt",false);
        		//this.searchBtn_onclick(null,null);
        	}
        }

        
        // 접수취소 버튼
        this.btnBox2_receiptXBtn_onclick = function(obj,e)
        {
        	if(confirm("접수취소를 하겠습니까?")){
        		var row = this.dsTempR.rowposition;
        		this.dsTempR.setColumn(row, "cancelYn", 'Y');

        		//this.fn_setUserData(this.dsTempR, row);
        		
        		this.gfnService("cancelReceipt",false);
        		this.searchBtn_onclick(null,null);
        	}
        }

        //
        this.rsvtGrid_onsetfocus = function(obj,e)
        {
        	this.btnBox2.receiptXBtn.set_visible(false);
        	this.btnBox2.receiptBtn.set_visible(true);

        	
        	this.dsRsvt_onrowposchanged(null, null);
        }

        this.receiptGrid_onsetfocus = function(obj,e)
        {
        	this.btnBox2.receiptXBtn.set_visible(true);
        	this.btnBox2.receiptBtn.set_visible(false);
        	
        	
        	this.dsReceipt_onrowposchanged(null,null);	
        }

        
        // 패키지 버튼
        this.compBox_pckPopBtn_onclick = function(obj,e)
        {
        	var param = {};
        	this.gfnPopup("SC_PckPopForm","sup",param,"");
        	
        }

        this.pckCode=function(retVal)
        {
        	var pckCd 	= retVal[0];
        	var pckNm 	= retVal[1];
        	var amt 	= retVal[2];
        	
        	this.compBox.pckCdEd.set_value(pckCd);
        	this.compBox.pckNmEd.set_value(pckNm);
        	this.compBox.basicInspAmtEd.set_value(amt);
        	
        	var argument = 'pckCd='+pckCd;
        	var row = this.dsService.findRow('serviceID' , "findPckInspList");
        	this.dsService.setColumn(row, "argument", argument);
        		
        	this.gfnService("findPckInspList",false);	
        	
        	this.autoCalInspAmt();
        }

        // 감면코드 버튼
        this.compBox_reducPopBtn_onclick = function(obj,e)
        {
        	var param = {};
        	this.gfnPopup("SC_ReducPopForm","sup",param,"");
        }

        // 팝업 셋팅
        this.setCode=function(code,arrRtn)
        {
        	var reducCd = arrRtn[0];
        	var reducNm = arrRtn[1];
        	var reducAmt = arrRtn[2];
        		
        	this.compBox.reducCdEd.set_value(reducCd);
        	this.compBox.reducNmEd.set_value(reducNm);
        	this.compBox.reducAmtEd.set_value(reducAmt);

        	this.autoCalInspAmt();
        }

        
        // 검사금액 계산
        this.autoCalInspAmt=function()
        {
        	var reducAmt = this.dsTempR.getColumn(this.dsTempR.rowposition,"reducAmt");
        	var basicInspAmt = this.dsTempR.getColumn(this.dsTempR.rowposition,"basicInspAmt");
        	var choInspAmt = this.dsTempR.getColumn(this.dsTempR.rowposition,"choInspAmt");

        	var inspSumAmt;
        	var basicInspSumAmt;
        	
        	if(!this.gfnIsNull(reducAmt)&&!this.gfnIsNull(basicInspAmt)&&!this.gfnIsNull(choInspAmt)){
        		inspSumAmt = parseInt(basicInspAmt) + parseInt(choInspAmt) - parseInt(reducAmt);
        	}
        	
        	if(!this.gfnIsNull(reducAmt)&&!this.gfnIsNull(basicInspAmt)){
        		inspSumAmt = parseInt(basicInspAmt) - parseInt(reducAmt);
        		basicInspSumAmt = parseInt(basicInspAmt) - parseInt(reducAmt);
        		
        		this.dsTempR.setColumn(this.dsTempR.rowposition, "basicInspSumAmt", basicInspSumAmt);	
        		
        	}else if(!this.gfnIsNull(basicInspAmt)&&!this.gfnIsNull(choInspAmt)){
        		inspSumAmt = parseInt(basicInspAmt) + parseInt(choInspAmt);
        		basicInspSumAmt = parseInt(basicInspAmt);
        		
        		this.dsTempR.setColumn(this.dsTempR.rowposition, "basicInspSumAmt", basicInspSumAmt);	
        	}

        	this.dsTempR.setColumn(this.dsTempR.rowposition, "inspSumAmt", inspSumAmt);	
        }

        // 콜백함수
        this.callBackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {

         	}
        }

        
        this.dsRsvt_canrowposchange = function(obj,e)
        {
        	if(addFlag == true || editFlag == true)
        	{
        		var yn = application.confirm("수정하고 있는 작업을  취소 하겠습니까?");
        		if (yn==false)
        		{
        			return false;
        		}
        		else
        		{
        	
        			if(editFlag == true)
        			{
        				this.dsRsvt.reset();
        				editFlag = false;
        				return true;
        				
        			}else if(addFlag == true){
        				addFlag = false;
        				
        				this.dsRsvt.reset();
        				return true;
        			}
        		}
        	}
        	return true;	
        }

        this.dsReceipt_canrowposchange = function(obj,e)
        {
        	if(addFlag == true || editFlag == true)
        	{
        		var yn = application.confirm("수정하고 있는 작업을  취소 하겠습니까?");
        		if (yn==false)
        		{
        			return false;
        		}
        		else
        		{
        	
        			if(editFlag == true)
        			{
        				this.dsReceipt.reset();
        				editFlag = false;
        				return true;
        				
        			}else if(addFlag == true){
        				addFlag = false;
        				
        				this.dsReceipt.reset();
        				return true;
        			}
        		}
        	}
        	return true;	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsRsvt.addEventHandler("onrowposchanged", this.dsRsvt_onrowposchanged, this);
            this.dsRsvt.addEventHandler("canrowposchange", this.dsRsvt_canrowposchange, this);
            this.dsReceipt.addEventHandler("onrowposchanged", this.dsReceipt_onrowposchanged, this);
            this.dsReceipt.addEventHandler("canrowposchange", this.dsReceipt_canrowposchange, this);
            this.receiptGrid.addEventHandler("onsetfocus", this.receiptGrid_onsetfocus, this);
            this.choInspGrid.addEventHandler("onenterdown", this.choInspGrid_onenterdown, this);
            this.choInspGrid.addEventHandler("oncelldblclick", this.choInspGrid_oncelldblclick, this);
            this.rsvtGrid.addEventHandler("onsetfocus", this.rsvtGrid_onsetfocus, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.compBox.pckPopBtn.addEventHandler("onclick", this.compBox_pckPopBtn_onclick, this);
            this.compBox.reducPopBtn.addEventHandler("onclick", this.compBox_reducPopBtn_onclick, this);
            this.btnBox.addBtn.addEventHandler("onclick", this.btnBox_addBtn_onclick, this);
            this.btnBox.delBtn.addEventHandler("onclick", this.btnBox_delBtn_onclick, this);
            this.btnBox2.receiptBtn.addEventHandler("onclick", this.btnBox2_receiptBtn_onclick, this);
            this.btnBox2.receBtn.addEventHandler("onclick", this.btnBox2_receBtn_onclick, this);
            this.btnBox2.modiBtn.addEventHandler("onclick", this.btnBox2_modiBtn_onclick, this);
            this.btnBox2.saveBtn.addEventHandler("onclick", this.btnBox2_saveBtn_onclick, this);
            this.btnBox2.receiptXBtn.addEventHandler("onclick", this.btnBox2_receiptXBtn_onclick, this);

        };

        this.loadIncludeScript("SC_ReceiptMgtForm.xfdl");

       
    };
}
)();

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
                this.set_name("AE_FixedAssetPopupForm");
                this.set_classname("AE_FixedAssetPopupForm");
                this.set_titletext("고정자산 검색 화면");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,700,700);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMngntCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDepreMthd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findUsingFixedAssetCdDtlList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/fixedasset/findUsingFixedAssetCdDtlList.do</Col><Col id=\"callbackFunc\">fixedAssetPopupCallBack</Col><Col id=\"outData\">dsFixedAssetCdDtl=dsFixedAssetCdDtl</Col></Row><Row><Col id=\"serviceID\">findFixedAssetList</Col><Col id=\"URL\">his::acc/fixedasset/findFixedAssetList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsFixedAsset=dsFixedAsset</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">fixedAssetPopupCallBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAsset", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAssetCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEquipCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetCdDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "-3%", "-4", "716", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("titleStc", "absolute", "4.86%", "-4", null, "60", "69.29%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("고정자산 검색");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0.57%", "49", null, "87", "1%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "1.71%", "63", null, "27", "90%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("자산구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "1.71%", "100", null, "27", "90%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("취득일자");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("acquStartDateCal", "absolute", "11.14%", "97", "100", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Combo("assetCombo", "absolute", "11.14%", "60", "100", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("dsAssetCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Static("subCodeStc00", "absolute", "28%", "63", null, "27", "63.71%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("장비구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("equipCombo", "absolute", "37.43%", "60", "100", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("dsEquipCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Calendar("acquEndDateCal", "absolute", "30.43%", "97", "100", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Static("Static00", "absolute", "27.43%", "105", null, "19", "68.29%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 11 arial");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "54.29%", "97", null, "27", "37.43%", null, this);
            obj.getSetter("taborder").set("11");
            obj.set_text("상각법");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "54.29%", "63", null, "27", "37.43%", null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("관리구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("mngntCombo", "absolute", "63.71%", "60", "142", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_innerdataset("dsMngntCd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Combo("depreMthdCombo", "absolute", "63.71%", "97", "142", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("dsDepreMthd");
            obj.set_codecolumn("fixedAssetCdDtl");
            obj.set_datacolumn("cdDtlNm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_font("9 Dotum");

            obj = new Grid("fixedAssetGrid", "absolute", "1.14%", "146", null, "502", "1.29%", null, this);
            obj.set_taborder("15");
            obj.set_binddataset("dsFixedAsset");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산번호\"/><Cell col=\"1\" text=\"자산명\"/><Cell col=\"2\" text=\"자산구분\"/><Cell col=\"3\" text=\"장비구분\"/><Cell col=\"4\" text=\"관리구분\"/><Cell col=\"5\" text=\"상각법\"/><Cell col=\"6\" text=\"취득일자\"/></Band><Band id=\"body\"><Cell text=\"bind:assetNo\"/><Cell col=\"1\" text=\"bind:assetNm\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:assetCd\" combodataset=\"dsAssetCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:equipCd\" combodataset=\"dsEquipCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:mngntCd\" combodataset=\"dsMngntCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:depreMthd\" combodataset=\"dsDepreMthd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:acquDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("comboResetBtn", "absolute", "600", "57", "89", "32", null, null, this);
            obj.set_taborder("16");
            obj.style.set_background("@gradation URL('img::resetBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchFixedAssetBtn", "absolute", "600", "95", "90", "32", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("completeBtn", "absolute", "224", "657", "90", "32", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("@gradation URL('img::okBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("cancelBtn", "absolute", "331", "657", "90", "32", null, null, this);
            obj.set_taborder("19");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 700, 700, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AE_FixedAssetPopupForm");
            		p.set_titletext("고정자산 검색 화면");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AF_FixedAssetPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AF_FixedAssetPopupForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        // 폼 로드
        this.AE_FixedAssetPopupForm_onload = function(obj,e)
        {
        	this.gfnService("findUsingFixedAssetCdDtlList");
        }

        
        //  콜백 함수
        this.fixedAssetPopupCallBack = function fixedAssetPopupCallBack(strSvcID,nErrorCode,strErrorMag)
        {
        	if(strSvcID == "findUsingFixedAssetCdDtlList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZFG'");
        			this.dsAssetCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");

        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZBG'");
        			this.dsEquipCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZBK'");
        			this.dsMngntCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZSA'");
        			this.dsDepreMthd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        		}
        	}else if(strSvcID == "findFixedAssetList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			
        		}
        	}
        }

        this.searchFixedAssetBtn_onclick = function(obj,e)
        {
        	var acquStartDate = "19000101";
        	var acquEndDate = "21000101";

        	if(this.acquStartDateCal.value != null){
        		acquStartDate = this.acquStartDateCal.value;
        	}
        	if(this.acquEndDateCal.value != null){
        		acquEndDate = this.acquEndDateCal.value;
        	}

        	var argument = "acquStartDate='"+acquStartDate+"' acquEndDate='"+acquEndDate+"' assetCd='"+this.assetCombo.value+"' equipCd='"+this.equipCombo.value+"' mngntCd='"+this.mngntCombo.value+"' depreMthd='"+this.depreMthdCombo.value+"' ownDept='undefined'";
        	this.dsService.setColumn(1,"argument",argument);
        	this.gfnService("findFixedAssetList");
        }

        this.comboResetBtn_onclick = function(obj,e)
        {
        	this.assetCombo.set_value(null);
        	this.equipCombo.set_value(null);
        	this.mngntCombo.set_value(null);
        	this.depreMthdCombo.set_value(null);
        	this.acquStartDateCal.set_value(null);
        	this.acquEndDateCal.set_value(null);
        }

        this.fixedAssetGrid_oncelldblclick = function(obj,e)
        {
        	if(this.parent.parentReason == "searchFixedAsset"){
        		if(e.row == null && this.dsFixedAsset.rowposition == null){
        			alert("고정자산을 선택 하시오.");
        		}else{
        			this.opener.searchAssetNoEd.set_value(this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"assetNo"));
        			this.opener.searchAssetNmEd.set_value(this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"assetNm"));
        			this.close();
        		}
        	}else if(this.parent.parentReason == "searchDisposalPlnFixedAsset"){
         		var disposalCd = this.dsFixedAsset.getColumn(e.row,"disposalCd");
         		var disposalCdPosition = this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"disposalCd");
         		if(disposalCd != null && disposalCdPosition){
         			alert("이미 매각등록된 자산입니다.");
         		}else{
         
         			this.opener.dsDisposalPlnFixedAsset.setColumn(this.opener.dsDisposalPlnFixedAsset.rowcount-1,"assetNo",this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"assetNo"));
         			this.opener.dsDisposalPlnFixedAsset.setColumn(this.opener.dsDisposalPlnFixedAsset.rowcount-1,"assetNm",this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"assetNm"));
         			this.opener.dsDisposalPlnFixedAsset.setColumn(this.opener.dsDisposalPlnFixedAsset.rowcount-1,"mngntCd",this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"mngntCd"));
         			this.opener.dsDisposalPlnFixedAsset.setColumn(this.opener.dsDisposalPlnFixedAsset.rowcount-1,"ownDept",this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"ownDept"));
         			this.opener.dsDisposalPlnFixedAsset.setColumn(this.opener.dsDisposalPlnFixedAsset.rowcount-1,"pstLoc",this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"pstLoc"));
         			this.opener.dsDisposalPlnFixedAsset.setColumn(this.opener.dsDisposalPlnFixedAsset.rowcount-1,"respoWorker",this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"respoWorker"));
         			this.opener.dsDisposalPlnFixedAsset.setColumn(this.opener.dsDisposalPlnFixedAsset.rowcount-1,"acquDate",this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"acquDate"));
         			this.opener.dsDisposalPlnFixedAsset.setColumn(this.opener.dsDisposalPlnFixedAsset.rowcount-1,"acquAmt",this.dsFixedAsset.getColumn(this.dsFixedAsset.rowposition,"acquAmt"));
         			this.close();
         		 }
        	}
        }

        this.cancelBtn_onclick = function(obj,e)
        {
        	if(this.parent.parentReason == "searchDisposalPlnFixedAsset"){
        	this.opener.dsDisposalPlnFixedAsset.deleteRow(this.opener.dsDisposalPlnFixedAsset.rowcount-1);
        	}
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AE_FixedAssetPopupForm_onload, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.fixedAssetGrid.addEventHandler("oncelldblclick", this.fixedAssetGrid_oncelldblclick, this);
            this.comboResetBtn.addEventHandler("onclick", this.comboResetBtn_onclick, this);
            this.searchFixedAssetBtn.addEventHandler("onclick", this.searchFixedAssetBtn_onclick, this);
            this.completeBtn.addEventHandler("onclick", this.fixedAssetGrid_oncelldblclick, this);
            this.cancelBtn.addEventHandler("onclick", this.cancelBtn_onclick, this);

        };

        this.loadIncludeScript("AF_FixedAssetPopupForm.xfdl");

       
    };
}
)();

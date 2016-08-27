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
                this.set_name("AF_disposalPlnFixedAssetForm");
                this.set_classname("AF_disposalPlnFixedAssetForm");
                this.set_titletext("매각예정자산관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsComYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">N</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"data\">Y</Col><Col id=\"code\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEquipCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPstLocCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMngntCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDisposalPlnFixedAsset", this);
            obj._setContents("<ColumnInfo><Column id=\"assetNo\" type=\"STRING\" size=\"256\"/><Column id=\"disposalAppDate\" type=\"STRING\" size=\"256\"/><Column id=\"disposalCd\" type=\"STRING\" size=\"256\"/><Column id=\"comYn\" type=\"STRING\" size=\"256\"/><Column id=\"mngntCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownDept\" type=\"STRING\" size=\"256\"/><Column id=\"pstLoc\" type=\"STRING\" size=\"256\"/><Column id=\"respoWorker\" type=\"STRING\" size=\"256\"/><Column id=\"acquDate\" type=\"STRING\" size=\"256\"/><Column id=\"acquAmt\" type=\"STRING\" size=\"256\"/><Column id=\"residAmt\" type=\"STRING\" size=\"256\"/><Column id=\"assetNm\" type=\"STRING\" size=\"256\"/><Column id=\"disposalDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOwnDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRespoWorker", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetSequence", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDisposalCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findDisposalPlnFixedAssetNo</Col><Col id=\"URL\">his::acc/fixedasset/findDisposalPlnFixedAssetNo.do</Col><Col id=\"outData\">dsFixedAssetSequence=dsFixedAssetSequence</Col><Col id=\"callbackFunc\">disposalPlnFiexdAssetCallBack</Col></Row><Row><Col id=\"serviceID\">findUsingFixedAssetCdDtlList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/fixedasset/findUsingFixedAssetCdDtlList.do</Col><Col id=\"callbackFunc\">disposalPlnFiexdAssetCallBack</Col><Col id=\"outData\">dsFixedAssetCdDtl=dsFixedAssetCdDtl</Col></Row><Row><Col id=\"serviceID\">findDisposalPlnFixedAssetList</Col><Col id=\"URL\">his::acc/fixedasset/findDisposalPlnFixedAssetList.do</Col><Col id=\"outData\">dsDisposalPlnFixedAsset=dsDisposalPlnFixedAsset</Col><Col id=\"callbackFunc\">disposalPlnFiexdAssetCallBack</Col></Row><Row><Col id=\"serviceID\">batchDisposalPlnFixedAssetProcess</Col><Col id=\"URL\">his::acc/fixedasset/batchDisposalPlnFixedAssetProcess.do</Col><Col id=\"inData\">dsDisposalPlnFixedAsset=dsDisposalPlnFixedAsset:U</Col><Col id=\"callbackFunc\">disposalPlnFiexdAssetCallBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetCdDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "4", "1238", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Static("titleEdt00", "absolute", "4.88%", "14", null, "36", "80.4%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("매각예정자산관리");
            obj.set_cssclass("TStc");
            obj.style.set_font("bold 15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "2%", "84", null, "27", "89.68%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("매각일");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "1.28%", "71", null, "53", "1.04%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Calendar("disposalStartDateCal", "absolute", "11.2%", "83", "130", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Static("Static00", "absolute", "23.12%", "91", null, "19", "72.56%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 11 arial");
            this.addChild(obj.name, obj);

            obj = new Calendar("disposalEndDateCal", "absolute", "25.36%", "83", "130", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Button("calResetBtn", "absolute", "37.04%", "85", "76", "26", null, null, this);
            obj.set_taborder("7");
            obj.set_text("날짜초기화");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchDisposalPlnFixedAssetBtn", "absolute", "548", "82", "90", "32", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "2%", "84", null, "27", "89.68%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("매각신청일");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("disposalPlnFixedAssetGrid", "absolute", "1.2%", "136", null, "570", "1.04%", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("dsDisposalPlnFixedAsset");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산번호\"/><Cell col=\"1\" text=\"자산명\"/><Cell col=\"2\" text=\"매각신청일\"/><Cell col=\"3\" text=\"매각구분\"/><Cell col=\"4\" text=\"매각일\"/><Cell col=\"5\" text=\"매각완료\"/><Cell col=\"6\" text=\"관리구분\"/><Cell col=\"7\" text=\"보유부서\"/><Cell col=\"8\" text=\"현위치\"/><Cell col=\"9\" text=\"담당자\"/><Cell col=\"10\" text=\"취득일\"/><Cell col=\"11\" text=\"취득금액\"/></Band><Band id=\"body\"><Cell text=\"bind:assetNo\"/><Cell col=\"1\" text=\"bind:assetNm\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" text=\"bind:disposalAppDate\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:disposalCd\" combodataset=\"dsDisposalCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" text=\"bind:disposalDate\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" text=\"bind:comYn\" combodataset=\"dsComYn\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:mngntCd\" combodataset=\"dsMngntCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:ownDept\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:pstLoc\" combodataset=\"dsPstLocCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"9\" displaytype=\"normal\" text=\"bind:respoWorker\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:acquDate\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:acquAmt\" mask=\"9,999,999,999\"/></Band></Format><Format id=\"insertOrUpdate\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산번호\"/><Cell col=\"1\" text=\"자산명\"/><Cell col=\"2\" text=\"매각신청일\"/><Cell col=\"3\" text=\"매각구분\"/><Cell col=\"4\" text=\"매각일\"/><Cell col=\"5\" text=\"매각완료\"/><Cell col=\"6\" text=\"관리구분\"/><Cell col=\"7\" text=\"보유부서\"/><Cell col=\"8\" text=\"현위치\"/><Cell col=\"9\" text=\"담당자\"/><Cell col=\"10\" text=\"취득일\"/><Cell col=\"11\" text=\"취득금액\"/></Band><Band id=\"body\"><Cell text=\"bind:assetNo\"/><Cell col=\"1\" text=\"bind:assetNm\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:disposalAppDate\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:disposalCd\" combodataset=\"dsDisposalCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" text=\"bind:disposalDate\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:comYn\" combodataset=\"dsComYn\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:mngntCd\" combodataset=\"dsMngntCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:ownDept\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:pstLoc\" combodataset=\"dsPstLocCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"9\" displaytype=\"normal\" text=\"bind:respoWorker\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:acquDate\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:acquAmt\" mask=\"9,999,999,999\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("batchDisposalPlnFixedAssetBtn", "absolute", "1128", "721", "110", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addDisposalPlnFixedAssetBtn", "absolute", "922", "720", "90", "32", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deleteDisposalPlnFixedBtn", "absolute", "1025", "721", "90", "32", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AF_disposalPlnFixedAssetForm");
            		p.set_titletext("매각예정자산관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AF_DisposalPlnFixedAssetForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("AF_DisposalPlnFixedAssetForm.xfdl", function() {
         /********************************************************************************
        *                                                                               *
        * 매각예정자산           												        *
        *                                                                               *
        * @Path		    고정자산 - 매각예정자산 										*
        * @Description  매각예정자산을 관리 	                                        *
        * 																				*
        *																				*
        * @Author		정재욱						                             		*
        * 									                                            *
        * Created on 2016. 06. 22                             		                    *
        *									                                            *
        ********************************************************************************/

        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/

        //include "scripts::commonTransaction.xjs";  

        /********************************************************************************
          폼 로드 이벤트
        ********************************************************************************/

        this.AF_disposalPlnFixedAssetForm_onload = function(obj,e)
        {
        	this.gfnService("findDisposalPlnFixedAssetNo");
        	this.gfnService("findUsingFixedAssetCdDtlList");		
        }

        /********************************************************************************
          콜백 함수
        ********************************************************************************/

        this.disposalPlnFiexdAssetCallBack = function disposalPlnFiexdAssetCallBack(strSvcID,nErrorCode,strErrorMag)
        {
        	if(strSvcID == "findUsingFixedAssetCdDtlList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{

        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZBK'");
        			this.dsMngntCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");

        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZMG'");
        			this.dsDisposalCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZLC'");
        			this.dsPstLocCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        		}
        	}else if(strSvcID == "findDisposalPlnFixedAssetNo"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        		}
        	}else if(strSvcID == "findDisposalPlnFixedAssetList"){
        			if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			//this.disposalPlnFixedAssetGrid_oncellclick(this,0);
        		}
        	}else if(strSvcID == "batchDisposalPlnFixedAssetProcess"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			this.gfnService("findDisposalPlnFixedAssetNo");
        			alert("정상처리 되었습니다.");
        		}
        	}
        }

        /********************************************************************************
          버튼 클릭 이벤트
        ********************************************************************************/

        this.searchDisposalPlnFixedAssetBtn_onclick = function(obj,e)
        {
        	var disposalStartDate = "19000101";
        	var disposalEndDate = "21000101";

        	if(this.disposalStartDateCal.value != null){
        		disposalStartDate = this.disposalStartDateCal.value;
        	}
        	if(this.disposalEndDateCal.value != null){
        		disposalEndDate = this.disposalEndDateCal.value;
        	}

        	var argument = "disposalStartDate='"+disposalStartDate+"' disposalEndDate='"+disposalEndDate+"'";
        	this.dsService.setColumn(2,"argument",argument);
        	this.gfnService("findDisposalPlnFixedAssetList");
        }

        /********************************************************************************
          Grid 클릭 이벤트
        ********************************************************************************/

        this.disposalPlnFixedAssetGrid_oncellclick = function(obj,e)
        {
        	var comYn = this.dsDisposalPlnFixedAsset.getColumn(e.row,"comYn");
        	//alert(comYn);
        	if(comYn == 0){
        		this.disposalPlnFixedAssetGrid.set_formatid("insertOrUpdate");
        	}else{
        		this.disposalPlnFixedAssetGrid.set_formatid("default");
        	}
        	//alert(comYn);
        	
        }

        /********************************************************************************
          추가
        ********************************************************************************/

        this.addDisposalPlnFixedAssetBtn_onclick = function(obj,e)
        {
        	var nRow = this.dsDisposalPlnFixedAsset.addRow();
        	this.dsDisposalPlnFixedAsset.setColumn(nRow,"comYn",'0');
        	application.open("fixedAssetPopup","acc::AF_FixedAssetPopupForm.xfdl",this.parent,{parentReason:'searchDisposalPlnFixedAsset'},"showtitlebar=true showstatusbar=false",0,0,780,550);
        }

        /********************************************************************************
          삭제
        ********************************************************************************/

        this.deleteDisposalPlnFixedBtn_onclick = function(obj,e)
        {
        	var comYn = this.dsDisposalPlnFixedAsset.getColumn(this.dsDisposalPlnFixedAsset.rowposition,"comYn");
        	if(comYn == '0'){
        		this.dsDisposalPlnFixedAsset.deleteRow(this.dsDisposalPlnFixedAsset.rowposition);
        	}else{
        		alert("이미 매각등록된 자산은 삭제할 수 없습니다.");
        	}
        }

        /********************************************************************************
          저장
        ********************************************************************************/

        this.batchDisposalPlnFixedAssetBtn_onclick = function(obj,e)
        {
        	var flag = 0;
        	for(var i=0; i < this.dsDisposalPlnFixedAsset.rowcount; i++){
        		var disposalCd = this.dsDisposalPlnFixedAsset.getColumn(i,"disposalCd");
        		var disposalAppDate = this.dsDisposalPlnFixedAsset.getColumn(i,"disposalAppDate");
        		if(disposalCd == null || disposalAppDate == null){
        			flag =1;
        		}
        	}
        		
        	if(flag == 1){
        		alert("매각구분 및 매각신청일 필수입력.");
        	}else{	
        		this.gfnService("batchDisposalPlnFixedAssetProcess");
        	}
        }

        this.calResetBtn_onclick = function(obj,e)
        {
        	this.disposalStartDateCal.set_value(null);
        	this.disposalEndDateCal.set_value(null);
        }

        /********************************************************************************
          데이터셋 이벤트
        ********************************************************************************/

        this.dsDisposalPlnFixedAsset_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "assetNo"){
        	 var flag = 0;
        		for(var i=0; i < this.dsFixedAssetSequence.getRowCount(); i++){
        			var assetNo = this.dsFixedAssetSequence.getColumn(i,"assetNo");
        				if(assetNo == e.newvalue){
        					flag = 1;
        					break;
        				}
        		}
        		if(flag == 0){
        			for(var i=0; i < this.dsDisposalPlnFixedAsset.getRowCount(); i++){
        				var assetNo = this.dsDisposalPlnFixedAsset.getColumn(i,"assetNo");
        				if(this.dsDisposalPlnFixedAsset.rowposition != i){
        					if(assetNo == e.newvalue){
        						flag = 1;
        						break;
        					}
        				}
        			}
        		}
        		if(flag == 1){
        				alert("이미 매각예정 등록된 자산입니다.");
        				this.dsDisposalPlnFixedAsset.deleteRow(this.dsDisposalPlnFixedAsset.rowposition);
        		}		
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsDisposalPlnFixedAsset.addEventHandler("oncolumnchanged", this.dsDisposalPlnFixedAsset_oncolumnchanged, this);
            this.addEventHandler("onload", this.AF_disposalPlnFixedAssetForm_onload, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.calResetBtn.addEventHandler("onclick", this.calResetBtn_onclick, this);
            this.searchDisposalPlnFixedAssetBtn.addEventHandler("onclick", this.searchDisposalPlnFixedAssetBtn_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.disposalPlnFixedAssetGrid.addEventHandler("oncellclick", this.disposalPlnFixedAssetGrid_oncellclick, this);
            this.batchDisposalPlnFixedAssetBtn.addEventHandler("onclick", this.batchDisposalPlnFixedAssetBtn_onclick, this);
            this.addDisposalPlnFixedAssetBtn.addEventHandler("onclick", this.addDisposalPlnFixedAssetBtn_onclick, this);
            this.deleteDisposalPlnFixedBtn.addEventHandler("onclick", this.deleteDisposalPlnFixedBtn_onclick, this);

        };

        this.loadIncludeScript("AF_DisposalPlnFixedAssetForm.xfdl");

       
    };
}
)();

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
                this.set_name("AF_DisposalFixedAssetForm");
                this.set_classname("AF_DisposalFixedAssetForm");
                this.set_titletext("매각자산관리");
                this.set_scrollbars("none");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findUsingFixedAssetCdDtlList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/fixedasset/findUsingFixedAssetCdDtlList.do</Col><Col id=\"callbackFunc\">disposalFiexdAssetCallBack</Col><Col id=\"outData\">dsFixedAssetCdDtl=dsFixedAssetCdDtl</Col></Row><Row><Col id=\"serviceID\">findDisposalFixedAssetList</Col><Col id=\"URL\">his::acc/fixedasset/findDisposalFixedAssetList.do</Col><Col id=\"outData\">dsDisposalReg=dsDisposalReg</Col><Col id=\"callbackFunc\">disposalFiexdAssetCallBack</Col><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">batchDisposalFixedAssetProcess</Col><Col id=\"URL\">his::acc/fixedasset/batchDisposalFixedAssetProcess.do</Col><Col id=\"inData\">dsDisposalReg=dsDisposalReg:U</Col><Col id=\"callbackFunc\">disposalFiexdAssetCallBack</Col></Row><Row><Col id=\"serviceID\">findDisposalSellValue</Col><Col id=\"URL\">his::acc/fixedasset/findDisposalSellValue.do</Col><Col id=\"callbackFunc\">disposalFiexdAssetCallBack</Col><Col id=\"outData\">dsDisposalSellValue=dsDisposalSellValue</Col><Col id=\"inData\">dsDisposalSellValue=dsDisposalSellValue</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSellComp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDisposalSellValue", this);
            obj._setContents("<ColumnInfo><Column id=\"assetNo\" type=\"STRING\" size=\"256\"/><Column id=\"sellAmt\" type=\"STRING\" size=\"256\"/><Column id=\"disposalDate\" type=\"STRING\" size=\"256\"/><Column id=\"disposalSellValue\" type=\"STRING\" size=\"256\"/><Column id=\"disposalResult\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetCdDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDisposalReg", this);
            obj._setContents("<ColumnInfo><Column id=\"assetNo\" type=\"STRING\" size=\"256\"/><Column id=\"assetNm\" type=\"STRING\" size=\"256\"/><Column id=\"disposalDate\" type=\"STRING\" size=\"256\"/><Column id=\"sellAmt\" type=\"STRING\" size=\"256\"/><Column id=\"sellCost\" type=\"STRING\" size=\"256\"/><Column id=\"sellProfit\" type=\"STRING\" size=\"256\"/><Column id=\"sellLoss\" type=\"STRING\" size=\"256\"/><Column id=\"sellComp\" type=\"STRING\" size=\"256\"/><Column id=\"disposalCd\" type=\"STRING\" size=\"256\"/><Column id=\"acquDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "4", "1238", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Static("titleEdt02", "absolute", "4.88%", "14", null, "36", "82.32%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("매각자산관리");
            obj.set_cssclass("TStc");
            obj.style.set_font("bold 15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "1.28%", "71", null, "53", "1.04%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Button("searchDisposalFixedAssetBtn", "absolute", "548", "82", "90", "32", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("disposalFixedAssetGrid", "absolute", "1.12%", "136", null, "578", "1.12%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsDisposalReg");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산번호\"/><Cell col=\"1\" text=\"자산명\"/><Cell col=\"2\" text=\"매각일\"/><Cell col=\"3\" text=\"매각금액\"/><Cell col=\"4\" text=\"매각비용\"/><Cell col=\"5\" text=\"매각이익\"/><Cell col=\"6\" text=\"매각손실\"/><Cell col=\"7\" text=\"처분처\"/></Band><Band id=\"body\"><Cell text=\"bind:assetNo\"/><Cell col=\"1\" text=\"bind:assetNm\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:disposalDate\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:sellAmt\" mask=\"9,999,999,999\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:sellCost\" mask=\"9,999,999,999\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:sellProfit\" mask=\"9,999,999,999\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:sellLoss\" mask=\"9,999,999,999\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"none\" text=\"bind:sellComp\" combodataset=\"dsSellComp\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/></Band></Format><Format id=\"insertOrUpdate\"><Columns><Column size=\"90\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산번호\"/><Cell col=\"1\" text=\"자산명\"/><Cell col=\"2\" text=\"매각일\"/><Cell col=\"3\" text=\"매각금액\"/><Cell col=\"4\" text=\"매각비용\"/><Cell col=\"5\" text=\"매각이익\"/><Cell col=\"6\" text=\"매각손실\"/><Cell col=\"7\" text=\"처분처\"/></Band><Band id=\"body\"><Cell text=\"bind:assetNo\"/><Cell col=\"1\" text=\"bind:assetNm\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:disposalDate\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:sellAmt\" mask=\"9,999,999,999\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:sellCost\" mask=\"9,999,999,999\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:sellProfit\" mask=\"9,999,999,999\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:sellLoss\" mask=\"9,999,999,999\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:sellComp\" combodataset=\"dsSellComp\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "2%", "84", null, "27", "89.68%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("매각일");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("disposalStartDateCal", "absolute", "11.2%", "83", "130", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Static("Static00", "absolute", "23.12%", "91", null, "19", "72.56%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 11 arial");
            this.addChild(obj.name, obj);

            obj = new Calendar("disposalEndDateCal", "absolute", "25.36%", "83", "130", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_expr("expr:Date()");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");

            obj = new Button("calResetBtn", "absolute", "37.04%", "85", "76", "26", null, null, this);
            obj.set_taborder("9");
            obj.set_text("날짜초기화");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchDisposalFixedAssetBtn", "absolute", "1120", "721", "110", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addDisposalFixedAssetBtn", "absolute", "916", "721", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deleteDisposalFixedBtn", "absolute", "1018", "721", "90", "32", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 53, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AF_DisposalFixedAssetForm");
            		p.set_titletext("매각자산관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AF_DisposalFixedAssetForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("AF_DisposalFixedAssetForm.xfdl", function() {
         /********************************************************************************
        *                                                                               *
        * 매각자산           												            *
        *                                                                               *
        * @Path		    고정자산 - 매각자산 										    *
        * @Description  매각자산을 관리 	                                            *
        * 																				*
        *																				*
        * @Author		정재욱						                             		*
        * 									                                            *
        * Created on 2016. 06. 20                             		                    *
        *									                                            *
        ********************************************************************************/

        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/  

        //include "scripts::commonTransaction.xjs";

        /********************************************************************************
          폼 로드 이벤트
        ********************************************************************************/

        this.AFdisposalRegFixedAssetForm_onload = function(obj,e)
        {
        	this.gfnService("findUsingFixedAssetCdDtlList");
        }

        /********************************************************************************
          콜백 함수
        ********************************************************************************/

        this.disposalFiexdAssetCallBack = function disposalFiexdAssetCallBack(strSvcID,nErrorCode,strErrorMag)
        {
        	if(strSvcID == "findUsingFixedAssetCdDtlList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{

        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZCC'");
        			this.dsSellComp.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        		}
        	}else if(strSvcID == "findDisposalFixedAssetList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        		}
        	}else if(strSvcID == "batchDisposalFixedAssetProcess"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			alert("정상처리 되었습니다.");
        		}
        	}else if(strSvcID == "findDisposalSellValue"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			var disposalResult = this.dsDisposalSellValue.getColumn(0,"disposalResult")
        			var disposalSellValue = this.dsDisposalSellValue.getColumn(0,"disposalSellValue");
        			if(disposalResult == "매각이익"){
        				this.dsDisposalReg.setColumn(this.dsDisposalReg.rowposition,"sellProfit",disposalSellValue);
        				this.dsDisposalReg.setColumn(this.dsDisposalReg.rowposition,"sellLoss",null);
        			}else if(disposalResult == "매각손실"){
        				this.dsDisposalReg.setColumn(this.dsDisposalReg.rowposition,"sellLoss",disposalSellValue);
        				this.dsDisposalReg.setColumn(this.dsDisposalReg.rowposition,"sellProfit",null);
        			}else{
        				this.dsDisposalReg.setColumn(this.dsDisposalReg.rowposition,"sellProfit",0);
        				this.dsDisposalReg.setColumn(this.dsDisposalReg.rowposition,"sellLoss",0);
        			}
        			this.dsDisposalSellValue.deleteAll();
        		}
        	}
        }

        /********************************************************************************
          버튼 클릭 이벤트
        ********************************************************************************/

        /********************************************************************************
          매각자산 조회
        ********************************************************************************/

        this.searchDisposalFixedAssetBtn_onclick = function(obj,e)
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
        	this.dsService.setColumn(1,"argument",argument);
        	this.gfnService("findDisposalFixedAssetList");
        }

        /********************************************************************************
          조건초기화 
        ********************************************************************************/

        this.calResetBtn_onclick = function(obj,e)
        {
        	this.disposalStartDateCal.set_value(null);
        	this.disposalEndDateCal.set_value(null);
        }
        	 
        /********************************************************************************
          매각자산 추가
        ********************************************************************************/

        this.addDisposalFixedAssetBtn_onclick = function(obj,e)
        {
        	var nRow = this.dsDisposalReg.addRow();
        	application.open("disposalFixedAssetPopup","acc::AF_DisposalPlnFixedAssetPopupForm.xfdl",this.parent,{},"showtitlebar=true showstatusbar=false",0,0,780,550);
        }

        /********************************************************************************
          매각자산 삭제
        ********************************************************************************/

        this.deleteDisposalFixedBtn_onclick = function(obj,e)
        {
        	this.dsDisposalReg.deleteRow(this.dsDisposalReg.rowposition);
        }

        /********************************************************************************
          매각자산 일괄처리(저장)
        ********************************************************************************/

        this.batchDisposalFixedAssetBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchDisposalFixedAssetProcess");
        }

        /********************************************************************************
          그리드 클릭 이벤트
        ********************************************************************************/

        this.disposalFixedAssetGrid_oncellclick = function(obj,e)
        {
        	var selectRow = this.dsDisposalReg.getRowType(e.row);
        	if(selectRow == 2){
        		this.disposalFixedAssetGrid.set_formatid("insertOrUpdate");
        	}else{
        		this.disposalFixedAssetGrid.set_formatid("default");
        	}
        }

        /********************************************************************************
          데이터셋 이벤트
        ********************************************************************************/

        this.dsDisposalReg_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "sellCost" || e.columnid == "sellAmt"){
        		var disposalDate = this.dsDisposalReg.getColumn(this.dsDisposalReg.rowposition,"disposalDate");
        		if(disposalDate == null){
        			alert("매각일 입력한 후 입력하시오.");
        		}else{
        			// 매각금액 - 매각비용 한 값이 매각일 기준 잔존 상각액 보다 크면 매각 이익에 그 차액을 넣고, 작으면 매각 손실에 그 차액을 넣는다. (프로시져)
        			var sellAmt = this.dsDisposalReg.getColumn(this.dsDisposalReg.rowposition,"sellAmt");
        			var sellCost = this.dsDisposalReg.getColumn(this.dsDisposalReg.rowposition,"sellCost");
        			if(sellAmt != null && sellCost != null){
        				this.dsDisposalSellValue.deleteAll();
        			    var assetNo = this.dsDisposalReg.getColumn(this.dsDisposalReg.rowposition,"assetNo");
        			    var sellAmt= nexacro.toNumber(sellAmt)-nexacro.toNumber(sellCost);
        				var nRow = this.dsDisposalSellValue.addRow();
        				this.dsDisposalSellValue.setColumn(nRow,"assetNo",assetNo);
        				this.dsDisposalSellValue.setColumn(nRow,"sellAmt",sellAmt);
        				this.dsDisposalSellValue.setColumn(nRow,"disposalDate",disposalDate);
        				//var argument = "disposalDate='"+disposalDate+"' sellAmt='"+sellAmt+"' assetNo='"+assetNo+"'";
        			   // this.dsService.setColumn(3,"argument",argument);
        			    this.gfnService("findDisposalSellValue");
        			}
        		}
        	}else if(e.columnid == "disposalDate"){
        		var acquDate = this.dsDisposalReg.getColumn(this.dsDisposalReg.rowposition,"acquDate");
        		if(acquDate > e.newvalue){
        			alert("매각일을 재확인 하십시오.");
        			this.dsDisposalReg.setColumn(this.dsDisposalReg.rowposition,"disposalDate",null);
        		}
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsDisposalReg.addEventHandler("oncolumnchanged", this.dsDisposalReg_oncolumnchanged, this);
            this.searchDisposalFixedAssetBtn.addEventHandler("onclick", this.searchDisposalFixedAssetBtn_onclick, this);
            this.disposalFixedAssetGrid.addEventHandler("oncellclick", this.disposalFixedAssetGrid_oncellclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.calResetBtn.addEventHandler("onclick", this.calResetBtn_onclick, this);
            this.batchDisposalFixedAssetBtn.addEventHandler("onclick", this.batchDisposalFixedAssetBtn_onclick, this);
            this.addDisposalFixedAssetBtn.addEventHandler("onclick", this.addDisposalFixedAssetBtn_onclick, this);
            this.deleteDisposalFixedBtn.addEventHandler("onclick", this.deleteDisposalFixedBtn_onclick, this);

        };

        this.loadIncludeScript("AF_DisposalFixedAssetForm.xfdl");

       
    };
}
)();

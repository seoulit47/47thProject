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
                this.set_name("AF_DisposalPlnFixedAssetPopupForm");
                this.set_classname("AF_DisposalPlnFixedAssetPopupForm");
                this.set_titletext("매각예정자산");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findDisposalPlnFixedAssetNo</Col><Col id=\"URL\">his::acc/fixedasset/findDisposalPlnFixedAssetNo.do</Col><Col id=\"outData\">dsFixedAssetSequence=dsFixedAssetSequence</Col><Col id=\"callbackFunc\">disposalPlnFiexdAssetCallBack</Col></Row><Row><Col id=\"serviceID\">findUsingFixedAssetCdDtlList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/fixedasset/findUsingFixedAssetCdDtlList.do</Col><Col id=\"callbackFunc\">disposalPlnFiexdAssetCallBack</Col><Col id=\"outData\">dsFixedAssetCdDtl=dsFixedAssetCdDtl</Col></Row><Row><Col id=\"serviceID\">findDisposalPlnFixedAssetList</Col><Col id=\"URL\">his::acc/fixedasset/findDisposalPlnFixedAssetList.do</Col><Col id=\"outData\">dsDisposalPlnFixedAsset=dsDisposalPlnFixedAsset</Col><Col id=\"callbackFunc\">disposalPlnFiexdAssetCallBack</Col></Row><Row><Col id=\"serviceID\">batchDisposalPlnFixedAssetProcess</Col><Col id=\"URL\">his::acc/fixedasset/batchDisposalPlnFixedAssetProcess.do</Col><Col id=\"inData\">dsDisposalPlnFixedAsset=dsDisposalPlnFixedAsset:U</Col><Col id=\"callbackFunc\">disposalPlnFiexdAssetCallBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPstLocCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOwnDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDisposalCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEquipCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDisposalPlnFixedAsset", this);
            obj._setContents("<ColumnInfo><Column id=\"assetNo\" type=\"STRING\" size=\"256\"/><Column id=\"disposalAppDate\" type=\"STRING\" size=\"256\"/><Column id=\"disposalCd\" type=\"STRING\" size=\"256\"/><Column id=\"comYn\" type=\"STRING\" size=\"256\"/><Column id=\"mngntCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownDept\" type=\"STRING\" size=\"256\"/><Column id=\"pstLoc\" type=\"STRING\" size=\"256\"/><Column id=\"respoWorker\" type=\"STRING\" size=\"256\"/><Column id=\"acquDate\" type=\"STRING\" size=\"256\"/><Column id=\"acquAmt\" type=\"STRING\" size=\"256\"/><Column id=\"residAmt\" type=\"STRING\" size=\"256\"/><Column id=\"assetNm\" type=\"STRING\" size=\"256\"/><Column id=\"disposalDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRespoWorker", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetSequence", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetCdDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMngntCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">N</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"data\">Y</Col><Col id=\"code\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "4", "1238", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Static("titleEdt00", "absolute", "4.88%", "14", null, "36", "80.4%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("매각예정자산");
            obj.set_cssclass("TStc");
            obj.style.set_font("bold 15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("disposalPlnFixedAssetGrid", "absolute", "1.44%", "79", null, "667", "0.88%", null, this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsDisposalPlnFixedAsset");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산번호\"/><Cell col=\"1\" text=\"자산명\"/><Cell col=\"2\" text=\"매각신청일\"/><Cell col=\"3\" text=\"매각구분\"/><Cell col=\"4\" text=\"관리구분\"/><Cell col=\"5\" text=\"보유부서\"/><Cell col=\"6\" text=\"현위치\"/><Cell col=\"7\" text=\"담당자\"/><Cell col=\"8\" text=\"취득일\"/><Cell col=\"9\" text=\"취득금액\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:assetNo\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:assetNm\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" text=\"bind:disposalAppDate\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:disposalCd\" combodataset=\"dsDisposalCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" text=\"bind:mngntCd\" combodataset=\"dsMngntCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ownDept\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"none\" text=\"bind:pstLoc\" combodataset=\"dsPstLocCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" text=\"bind:respoWorker\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:acquDate\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" text=\"bind:acquAmt\" mask=\"9,999,999,999\"/></Band></Format><Format id=\"insertOrUpdate\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산번호\"/><Cell col=\"1\" text=\"자산명\"/><Cell col=\"2\" text=\"매각신청일\"/><Cell col=\"3\" text=\"매각구분\"/><Cell col=\"4\" text=\"관리구분\"/><Cell col=\"5\" text=\"보유부서\"/><Cell col=\"6\" text=\"현위치\"/><Cell col=\"7\" text=\"담당자\"/><Cell col=\"8\" text=\"취득일\"/><Cell col=\"9\" text=\"취득금액\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:assetNo\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:assetNm\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" text=\"bind:disposalAppDate\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:disposalCd\" combodataset=\"dsDisposalCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" text=\"bind:mngntCd\" combodataset=\"dsMngntCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ownDept\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"none\" text=\"bind:pstLoc\" combodataset=\"dsPstLocCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" text=\"bind:respoWorker\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:acquDate\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" text=\"bind:acquAmt\" mask=\"9,999,999,999\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AF_DisposalPlnFixedAssetPopupForm");
            		p.set_titletext("매각예정자산");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AF_DisposalPlnFixedAssetPopupForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("AF_DisposalPlnFixedAssetPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AF_DisposalPlnFixedAssetPopupForm.xfdl", function() {
         /*******************************************************************************
        *                                                                               *
        * 매각예정자산           												        *
        *                                                                               *
        * @Path		    고정자산 - 매각예정자산 										*
        * @Description  매각예정자산을 관리 	                                        *
        * 																				*
        *																				*
        * @Author		정재욱						                             		*
        * 									                                            *
        * Created on 2016. 06. 23                             		                    *
        *									                                            *
        ********************************************************************************/

        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/

        //include "scripts::commonTransaction.xjs";  
        //include "scripts::commonScripts.xjs";

        /********************************************************************************
          폼 로드 이벤트
        ********************************************************************************/

        this.AF_DisposalPlnFixedAssetPopupForm_onload = function(obj,e)
        {
        	this.gfnService("findDisposalPlnFixedAssetNo");
        	this.gfnService("findUsingFixedAssetCdDtlList");
        	var disposalStartDate = "19000101";
        	var disposalEndDate = "21000101";

        	var argument = "disposalStartDate='"+disposalStartDate+"' disposalEndDate='"+disposalEndDate+"'";
        	//alert(argument);
        	this.dsService.setColumn(2,"argument",argument);
        	//alert(this.dsService.setColumn(2,"argument",argument));
        	this.gfnService("findDisposalPlnFixedAssetList");
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
        			this.dsDisposalPlnFixedAsset.filter("comYn == '0'");
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

        /********************************************************************************
          Grid 클릭 이벤트
        ********************************************************************************/

        this.disposalPlnFixedAssetGrid_oncelldblclick = function(obj,e)
        {
        	
        	this.opener.dsDisposalReg.setColumn(this.opener.dsDisposalReg.rowcount-1,"assetNo",this.dsDisposalPlnFixedAsset.getColumn(this.dsDisposalPlnFixedAsset.rowposition,"assetNo"));
        	this.opener.dsDisposalReg.setColumn(this.opener.dsDisposalReg.rowcount-1,"assetNm",this.dsDisposalPlnFixedAsset.getColumn(this.dsDisposalPlnFixedAsset.rowposition,"assetNm"));
        	this.opener.dsDisposalReg.setColumn(this.opener.dsDisposalReg.rowcount-1,"disposalDate",this.dsDisposalPlnFixedAsset.getColumn(this.dsDisposalPlnFixedAsset.rowposition,"disposalAppDate"));
        	this.opener.dsDisposalReg.setColumn(this.opener.dsDisposalReg.rowcount-1,"disposalCd",this.dsDisposalPlnFixedAsset.getColumn(this.dsDisposalPlnFixedAsset.rowposition,"disposalCd"));
        	
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsDisposalPlnFixedAsset.addEventHandler("oncolumnchanged", this.dsDisposalPlnFixedAsset_oncolumnchanged, this);
            this.addEventHandler("onload", this.AF_DisposalPlnFixedAssetPopupForm_onload, this);
            this.disposalPlnFixedAssetGrid.addEventHandler("oncelldblclick", this.disposalPlnFixedAssetGrid_oncelldblclick, this);

        };

        this.loadIncludeScript("AF_DisposalPlnFixedAssetPopupForm.xfdl");

       
    };
}
)();

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
                this.set_name("CM_CustSubForm");
                this.set_classname("CM_CustSubForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,500,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsfilter", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"업종명\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"업종명\">도매</Col></Row><Row><Col id=\"업종명\">소매</Col></Row><Row><Col id=\"업종명\">도-소매</Col></Row><Row><Col id=\"업종명\">건설</Col></Row><Row><Col id=\"업종명\">제조</Col></Row><Row><Col id=\"업종명\">서비스</Col></Row><Row><Col id=\"업종명\">전기</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"URL\">his::log/base/findCustList.do</Col><Col id=\"serviceID\">findCustList</Col><Col id=\"outData\">dsCust=dsCust</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCust", this);
            obj._setContents("<ColumnInfo><Column id=\"accNo\" type=\"undefined\" size=\"100\"/><Column id=\"telNo\" type=\"undefined\" size=\"100\"/><Column id=\"bussNo\" type=\"undefined\" size=\"100\"/><Column id=\"bankCd\" type=\"undefined\" size=\"100\"/><Column id=\"busCtgNm\" type=\"undefined\" size=\"100\"/><Column id=\"faxNo\" type=\"undefined\" size=\"100\"/><Column id=\"prsdntNm\" type=\"undefined\" size=\"100\"/><Column id=\"custCd\" type=\"undefined\" size=\"100\"/><Column id=\"adptDt\" type=\"undefined\" size=\"100\"/><Column id=\"addr\" type=\"undefined\" size=\"100\"/><Column id=\"resNo\" type=\"undefined\" size=\"100\"/><Column id=\"busShpNm\" type=\"undefined\" size=\"100\"/><Column id=\"custNm\" type=\"undefined\" size=\"100\"/><Column id=\"zipCd\" type=\"undefined\" size=\"100\"/><Column id=\"dpstr\" type=\"undefined\" size=\"100\"/><Column id=\"cardYn\" type=\"undefined\" size=\"100\"/><Column id=\"gpUseYn\" type=\"undefined\" size=\"100\"/><Column id=\"riUseYn\" type=\"undefined\" size=\"100\"/><Column id=\"hospCls\" type=\"undefined\" size=\"100\"/><Column id=\"useYn\" type=\"undefined\" size=\"100\"/><Column id=\"gdUseYn\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleEdit", "absolute", "0%", "-12", "500", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.style.set_font("bold 15 Dotum");
            obj.set_cssclass("TStc");
            obj.set_text("       거래처");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ask_date", "absolute", "4%", "48", null, "28", "81.6%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("업태명");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("filterCombo", "absolute", "20%", "48", null, "28", "53.2%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@dsfilter");
            obj.set_codecolumn("업종명");
            obj.set_datacolumn("업종명");

            obj = new Grid("Grid00", "absolute", "835.4%", "85", null, "308", "-735.4%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsCust");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업자번호\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"대표자명\"/><Cell col=\"3\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:bussNo\"/><Cell col=\"1\" text=\"bind:custNm\"/><Cell col=\"2\" text=\"bind:prsdntNm\"/><Cell col=\"3\" text=\"bind:addr\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("customerGrid", "absolute", "4%", "83", null, "300", "3.6%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsCust");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"205\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업자번호\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"대표자명\"/><Cell col=\"3\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:bussNo\"/><Cell col=\"1\" text=\"bind:custNm\"/><Cell col=\"2\" text=\"bind:prsdntNm\"/><Cell col=\"3\" text=\"bind:addr\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 500, 60, this.titleEdit,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_align("left middle");
            		p.style.set_background("transparent URL('img::titleBar6.jpg')");
            		p.style.set_font("bold 15 Dotum");
            		p.set_cssclass("TStc");
            		p.set_text("       거래처");

            	}
            );
            this.titleEdit.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CM_CustSubForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CM_CustSubForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("CM_CustSubForm.xfdl", "scripts::commonBind.xjs");
        this.registerScript("CM_CustSubForm.xfdl", function() {
         /********************************************************************************
        *                                                                               *
        * 세금 계산서 관리           												    *
        *                                                                               *
        * @Path		    세금계산서 관리							                 	*
        * @Description  부가가치세 신고를 위한 세금계산서 관리 	                *
        * 																				*
        *																				*
        * @Author	 정재욱    					                             		*
        * 									                                            *
        * Created on 2016. 06. 02                             		                    *
        *									                                            *
        ********************************************************************************/

        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/

        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonBind.xjs";

        /********************************************************************************
          폼 로드 이벤트
        ********************************************************************************/

        this.CM_CustSubForm_onload = function(obj,e)
        {
        	// 거래처 정보를 가지고 온다.
        	this.gfnService("findCustList");
        }

        /********************************************************************************
          콤보 필터
        ********************************************************************************/

        //콤보 선택에 따른 필터
        this.filterCombo_onitemchanged = function(obj,e)
        {
        	var filter = this.filterCombo.value
        	this.dsCust.filter("");
        	var rows = this.dsCust.rowcount;
        	for(var i = 0; i<rows; i++){
        		this.dsCust.filter("String(busShpNm).indexOf('"+filter+"') >= 0");
        	}
        }

        /********************************************************************************
          거래처 선택시
        ********************************************************************************/

        this.customerGrid_oncelldblclick = function(obj,e)
        {
        	var v = application.getActiveForm().purchSaleCombo.value;
        	alert(v);
        	var row = this.dsCust.rowposition;
        	//매출
        	if(v == 1){
        		application.getActiveForm().salesAddrEd.set_value(this.dsCust.getColumn(row,"addr"));
        		application.getActiveForm().salesBusctgnmEd.set_value(this.dsCust.getColumn(row,"busCtgNm"));
        		application.getActiveForm().salesBussHpnmEd.set_value(this.dsCust.getColumn(row,"busShpNm"));
        		application.getActiveForm().salesCustnmEd.set_value(this.dsCust.getColumn(row,"custNm"));
        		application.getActiveForm().salesPrsdntnmEd.set_value(this.dsCust.getColumn(row,"prsdntNm"));
        	//매입
        	}else if(v == 2){
        		application.getActiveForm().salesAddrEd.set_value(this.dsCust.getColumn(row,"addr"));
        		application.getActiveForm().salesBusctgnmEd.set_value(this.dsCust.getColumn(row,"busCtgNm"));
        		application.getActiveForm().salesBussHpnmEd.set_value(this.dsCust.getColumn(row,"busShpNm"));
        		application.getActiveForm().salesCustnmEd.set_value(this.dsCust.getColumn(row,"custNm"));
        		application.getActiveForm().salesPrsdntnmEd.set_value(this.dsCust.getColumn(row,"prsdntNm"));
        	}
        	var custCd = this.dsCust.getColumn(row,"custCd");
        		alert(1);
        	application.getActiveForm().dsAtTaxinv.setColumn(application.getActiveForm().dsAtTaxinv.rowposition,"custCd",custCd);
        	this.parent.destroy();
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.CM_CustSubForm_onload, this);
            this.filterCombo.addEventHandler("onitemchanged", this.filterCombo_onitemchanged, this);
            this.Grid00.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);
            this.customerGrid.addEventHandler("oncelldblclick", this.customerGrid_oncelldblclick, this);

        };

        this.loadIncludeScript("CM_CustSubForm.xfdl");

       
    };
}
)();

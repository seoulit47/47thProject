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
                this.set_name("AF_FixedAssetMonthDepreForm");
                this.set_classname("AF_FixedAssetMonthDepreForm");
                this.set_titletext("월별 감가상각 관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPstLocCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsThatmonthDepreRunYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">Y</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"data\">N</Col><Col id=\"code\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetCdDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDepreMthd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetDepreYm", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"depreYm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findUsingFixedAssetCdDtlList</Col><Col id=\"URL\">his::acc/fixedasset/findUsingFixedAssetCdDtlList.do</Col><Col id=\"outData\">dsFixedAssetCdDtl=dsFixedAssetCdDtl</Col><Col id=\"callbackFunc\">fixedAssetMonthDepreCallBack</Col></Row><Row><Col id=\"serviceID\">findFixedAssetMonthDepreList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/fixedasset/findFixedAssetMonthDepreList.do</Col><Col id=\"callbackFunc\">fixedAssetMonthDepreCallBack</Col><Col id=\"outData\">dsMonthDepre=dsMonthDepre dsFixedAssetDepreYm=dsFixedAssetDepreYm</Col></Row><Row><Col id=\"serviceID\">modifyFixedAssetMonthDepre</Col><Col id=\"URL\">his::acc/fixedasset/modifyFixedAssetMonthDepre.do</Col><Col id=\"inData\">dsMonthDepre=dsMonthDepre:U</Col><Col id=\"callbackFunc\">fixedAssetMonthDepreCallBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMonthDepre", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMngntCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "4", "1238", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Static("titleEdt02", "absolute", "4.88%", "14", null, "36", "77.6%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("월별 감가상각 관리");
            obj.set_cssclass("TStc");
            obj.style.set_font("bold 15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "1.28%", "71", null, "53", "1.04%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "2%", "84", null, "27", "89.68%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("년도");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("searchMonthDepreBtn", "absolute", "441", "82", "90", "32", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Spin("monthDepreStartDateSpin", "absolute", "11.6%", "83", "110", "30", null, null, this);
            obj.set_taborder("5");
            obj.set_value("2010");
            obj.set_displaynulltext("2016");
            obj.set_max("2020");
            obj.set_min("2000");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Spin("monthDepreEndDateSpin", "absolute", "25.28%", "83", "110", "30", null, null, this);
            obj.set_taborder("6");
            obj.set_value("2020");
            obj.set_displaynulltext("2020");
            obj.set_max("2020");
            obj.set_min("2000");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "22.24%", "89", null, "19", "76.8%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 11 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("monthDepreGrid", "absolute", "1.28%", "139", null, "566", "83.76%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsFixedAssetDepreYm");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"년월\"/><Cell col=\"1\" text=\"건수\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:depreYm\" mask=\"####.##\"/><Cell col=\"1\" text=\"bind:cnt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("monthDepreInfoGrid", "absolute", "17.52%", "139", null, "566", "1.04%", null, this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산번호\"/><Cell col=\"1\" text=\"자산명\"/><Cell col=\"2\" text=\"취득일\"/><Cell col=\"3\" text=\"취득금액\"/><Cell col=\"4\" text=\"관리구분\"/><Cell col=\"5\" text=\"보유부서\"/><Cell col=\"6\" displaytype=\"normal\" text=\"현위치\"/><Cell col=\"7\" text=\"담당자\"/><Cell col=\"8\" text=\"상각방법\"/><Cell col=\"9\" text=\"전년도잔존액\"/><Cell col=\"10\" text=\"당월상각액\"/><Cell col=\"11\" text=\"당기상각액\"/><Cell col=\"12\" text=\"실행여부\"/></Band><Band id=\"body\"><Cell text=\"bind:assetNo\"/><Cell col=\"1\" text=\"bind:assetNm\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:acquDate\"/><Cell col=\"3\" text=\"bind:acquAmt\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:mngntCd\" combodataset=\"dsMngntCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:ownDept\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:pstLoc\" combodataset=\"dsPstLocCd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:respoWorker\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:depreMthd\" combodataset=\"dsDepreMthd\" combocodecol=\"fixedAssetCdDtl\" combodatacol=\"cdDtlNm\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:befYearResidAmt\" mask=\"9,999,999,999\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:thatmonthDepreAmt\" mask=\"9,999,999,999\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:thatyearDepreAmt\" mask=\"9,999,999,999\"/><Cell col=\"12\" displaytype=\"combo\" text=\"bind:thatmonthDepreRunYn\" combodataset=\"dsThatmonthDepreRunYn\" combocodecol=\"code\" combodatacol=\"data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc32", "absolute", "74.16%", "722", null, "29", "20.08%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("작업년월");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("monthDepreYmEd", "absolute", "81.2%", "721", null, "30", "9.28%", null, this);
            obj.set_taborder("11");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("updateMonthDepreBtn", "absolute", "1149", "721", "88", "30", null, null, this);
            obj.set_taborder("12");
            obj.set_text("상각실행");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AF_FixedAssetMonthDepreForm");
            		p.set_titletext("월별 감가상각 관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("gradeBind","monthDepreYmEd","value","dsFixedAsset","grade");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AF_FixedAssetMonthDepreForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("AF_FixedAssetMonthDepreForm.xfdl", function() {
         /********************************************************************************
        *                                                                               *
        * 고정자산           												            *
        *                                                                               *
        * @Path		    고정자산 - 고정자산 월상각 관리								*		   
        * @Description 	고정자산 월상각 실행을 관리                                  *
        * 																				*
        *																				*
        * @Author		정재욱						                             		*
        * 									                                            *
        * Created on 2016. 06. 19                             		                    *
        *									                                            *
        ********************************************************************************/

        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/
        //include "scripts::commonTransaction.xjs";  
        /********************************************************************************
          폼 로드 이벤트
        ********************************************************************************/
        this.AF_FixedAssetMonthDepreForm_onload = function(obj,e)
        {
        	this.gfnService("findUsingFixedAssetCdDtlList");
        	
        }

        /********************************************************************************
          콜백 함수
        ********************************************************************************/
        this.fixedAssetMonthDepreCallBack = function fixedAssetMonthDepreCallBack(strSvcID,nErrorCode,strErrorMag)
        {
        	if(strSvcID == "findUsingFixedAssetCdDtlList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZBK'");
        			this.dsMngntCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZSA'");
        			this.dsDepreMthd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        			
        			this.dsFixedAssetCdDtl.filter("fixedAssetCd == 'GFZLC'");
        			this.dsPstLocCd.copyData(this.dsFixedAssetCdDtl,true);
        			this.dsFixedAssetCdDtl.filter("");
        		}
        	}else if(strSvcID == "findFixedAssetMonthDepreList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			this.monthDepreGrid_oncellclick(this,0);
        		}
        	}else if(strSvcID == "modifyFixedAssetMonthDepre"){
        		if(nErrorCode==-1){
        			alert(strErrorMag);
        			for(var i = 0; i < this.dsMonthDepre.rowcount; i++){
        				this.dsMonthDepre.setColumn(i,"thatmonthDepreRunYn",1);
        		    }	
        		}
        		else{
        			alert("정상처리 되었습니다.");
        			this.monthDepreGrid_oncellclick(this,0);
        		}
        	}
        }

        /********************************************************************************
          버튼 클릭 이벤트
        ********************************************************************************/
        this.searchMonthDepreBtn_onclick = function(obj,e)
        {
        		var startDate = this.monthDepreStartDateSpin.value;
        		var endDate = nexacro.toNumber(this.monthDepreEndDateSpin.value)+1;
        		var argument = "startDate='"+startDate+"' endDate='"+endDate+"'";
        		this.dsService.setColumn(1,"argument",argument);
        		this.gfnService("findFixedAssetMonthDepreList");
        }

        this.updateMonthDepreBtn_onclick = function(obj,e)
        {
        	if(this.updateMonthDepreBtn.text == "상각실행"){
        		for(var i = 0; i < this.dsMonthDepre.rowcount; i++){
        			this.dsMonthDepre.setColumn(i,"thatmonthDepreRunYn",1);
        		}
        	}else{
        		for(var i = 0; i < this.dsMonthDepre.rowcount; i++){
        			this.dsMonthDepre.setColumn(i,"thatmonthDepreRunYn",0);
        		}
        	}  
        	this.gfnService("modifyFixedAssetMonthDepre");
        }

        /********************************************************************************
          그리드 클릭 이벤트
        ********************************************************************************/
        this.monthDepreGrid_oncellclick = function(obj,e)
        {
        	var depreYm = this.dsFixedAssetDepreYm.getColumn(this.dsFixedAssetDepreYm.rowposition,"depreYm");
        	this.dsMonthDepre.filter("depreYm =='"+depreYm+"'");
        	this.monthDepreInfoGrid.set_binddataset("dsMonthDepre");
        	var newDepreYm = depreYm.substr(0,7);
        	this.monthDepreYmEd.set_value(newDepreYm);
        	
        	var depreRunYn = this.dsMonthDepre.getColumn(0,"thatmonthDepreRunYn");
        	if(depreRunYn == 0){
        		this.updateMonthDepreBtn.set_text("상각실행");
        	}else{
        		this.updateMonthDepreBtn.set_text("실행취소");
        	}
        }

        /********************************************************************************
          그리드 내용변경 이벤트
        ********************************************************************************/
        // this.monthDepreGrid_onselectchanged = function(obj:Grid, e:nexacro.GridSelectEventInfo)
        // {
        // 	this.monthDepreGrid_oncellclick(obj,e);
        // }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AF_FixedAssetMonthDepreForm_onload, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchMonthDepreBtn.addEventHandler("onclick", this.searchMonthDepreBtn_onclick, this);
            this.monthDepreGrid.addEventHandler("oncellclick", this.monthDepreGrid_oncellclick, this);
            this.monthDepreGrid.addEventHandler("onselectchanged", this.monthDepreGrid_onselectchanged, this);
            this.updateMonthDepreBtn.addEventHandler("onclick", this.updateMonthDepreBtn_onclick, this);

        };

        this.loadIncludeScript("AF_FixedAssetMonthDepreForm.xfdl");

       
    };
}
)();

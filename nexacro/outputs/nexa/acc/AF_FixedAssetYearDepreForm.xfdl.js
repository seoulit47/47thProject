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
                this.set_name("AF_FixedAssetYearDepreForm");
                this.set_classname("AF_FixedAssetYearDepreForm");
                this.set_titletext("년 상각 관리 ");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYearDepreDlineYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">Y</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"data\">N</Col><Col id=\"code\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFixedAssetDepreYm", this);
            obj.set_updatecontrol("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findFixedAssetYearDepreDtlList</Col><Col id=\"inData\"/><Col id=\"URL\">his::acc/fixedasset/findFixedAssetYearDepreDtlList.do</Col><Col id=\"callbackFunc\">fixedAssetYearDepreCallBack</Col><Col id=\"outData\">dsYearDepre=dsYearDepre dsFixedAssetDepreYm=dsFixedAssetDepreYm</Col></Row><Row><Col id=\"serviceID\">modifyFixedAssetYearDepre</Col><Col id=\"URL\">his::acc/fixedasset/modifyFixedAssetYearDepre.do</Col><Col id=\"inData\">dsYearDepre=dsYearDepre:U</Col><Col id=\"callbackFunc\">fixedAssetYearDepreCallBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYearDepre", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "1.28%", "71", null, "53", "1.04%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Button("searchYearDepreBtn", "absolute", "441", "82", "90", "32", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Spin("yearDepreEndDateSpin", "absolute", "25.28%", "83", "110", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_value("2020");
            obj.set_displaynulltext("2020");
            obj.set_max("2020");
            obj.set_min("2000");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "22.24%", "89", null, "19", "76.8%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 11 arial");
            this.addChild(obj.name, obj);

            obj = new Spin("yearDepreStartDateSpin", "absolute", "11.6%", "83", "110", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_value("2010");
            obj.set_displaynulltext("2016");
            obj.set_max("2020");
            obj.set_min("2000");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "2%", "84", null, "27", "89.68%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("상각년도");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "4", "1238", "60", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Static("titleEdt02", "absolute", "4.88%", "14", null, "36", "77.6%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("년 상각 관리 ");
            obj.set_cssclass("TStc");
            obj.style.set_font("bold 15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("yearDepreGrid", "absolute", "1.28%", "138", null, "570", "83.76%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsFixedAssetDepreYm");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"년도\"/><Cell col=\"1\" text=\"건수\"/><Cell col=\"2\" text=\"상각액\"/></Band><Band id=\"body\"><Cell text=\"bind:depreYear\"/><Cell col=\"1\" text=\"bind:cnt\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:depreAmt\" mask=\"9,999,999,999\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("yearDepreInfoGrid", "absolute", "17.44%", "138", null, "570", "1.04%", null, this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산번호\"/><Cell col=\"1\" text=\"자산명\"/><Cell col=\"2\" text=\"취득일자\"/><Cell col=\"3\" text=\"기초자산액\"/><Cell col=\"4\" text=\"상각누계액\"/><Cell col=\"5\" text=\"잔존상각액\"/><Cell col=\"6\" text=\"당기상각액\"/><Cell col=\"7\" text=\"잔존가액\"/><Cell col=\"8\" text=\"마감여부\"/></Band><Band id=\"body\"><Cell text=\"bind:assetNo\"/><Cell col=\"1\" text=\"bind:assetNm\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:acquDate\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:basicAssetAmt\" mask=\"9,999,999,999\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:depreSum\" mask=\"9,999,999,999\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:residDepreAmt\" mask=\"9,999,999,999\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:thatyearDepreAmt\" mask=\"9,999,999,999\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:residAmt\" mask=\"9,999,999,999\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:yearDepreDlineYn\" combodataset=\"dsYearDepreDlineYn\" combocodecol=\"code\" combodatacol=\"data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc32", "absolute", "74.08%", "724", null, "30", "20.16%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("작업년");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("yearDepreYearEd", "absolute", "81.12%", "724", null, "30", "9.36%", null, this);
            obj.set_taborder("11");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("updateYearDepreBtn", "absolute", "1149", "724", "88", "30", null, null, this);
            obj.set_taborder("12");
            obj.set_text("상각마감");
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
            		p.set_classname("AF_FixedAssetYearDepreForm");
            		p.set_titletext("년 상각 관리 ");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("gradeBind","yearDepreYearEd","value","dsFixedAsset","grade");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AF_FixedAssetYearDepreForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("AF_FixedAssetYearDepreForm.xfdl", function() {
         /********************************************************************************
        *                                                                               *
        * 고정자산           												            *
        *                                                                               *
        * @Path		    고정자산 - 고정자산 년상각 관리								*		   
        * @Description  고정자산 년상각 실행을 관리                                  *
        * 																				*
        *																				*
        * @Author		정재욱						                             		*
        * 									                                            *
        * Created on 2016. 06. 18                             		                    *
        *									                                            *
        ********************************************************************************/

        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/
        //include "scripts::commonTransaction.xjs";  
        /********************************************************************************
          폼 로드 이벤트
        ********************************************************************************/
        this.AF_FixedAssetYearDepreForm_onload = function(obj,e)
        {
        	
        }

        /********************************************************************************
          콜백 함수
        ********************************************************************************/
        this.fixedAssetYearDepreCallBack = function fixedAssetYearDepreCallBack(strSvcID,nErrorCode,strErrorMag)
        {
        	if(strSvcID == "findFixedAssetYearDepreDtlList"){
        		if(nErrorCode==-1)
        			alert(strErrorMag);
        		else{
        			this.yearDepreGrid_oncellclick(this,0);
        		}
        	}else if(strSvcID == "modifyFixedAssetYearDepre"){
        		if(nErrorCode==-1){
        			alert(strErrorMag);
        			for(var i = 0; i < this.dsYearDepre.rowcount; i++){
        				this.dsYearDepre.setColumn(i,"yearDepreDlineYn",0);
        		    }
        		 }   	
        		else{
        			alert("정상처리 되었습니다.");
        			this.searchYearDepreBtn_onclick(this,0);
        		}
        	}
        }

        /********************************************************************************
          버튼 클릭 이벤트
        ********************************************************************************/
        this.searchYearDepreBtn_onclick = function(obj,e)
        {
        		var startDate = this.yearDepreStartDateSpin.value;
        		var endDate = nexacro.toNumber(this.yearDepreEndDateSpin.value);
        		var argument = "startDate='"+startDate+"' endDate='"+endDate+"'";
        		this.dsService.setColumn(0,"argument",argument);
        		this.gfnService("findFixedAssetYearDepreDtlList");
        }

        
        this.updateYearDepreBtn_onclick = function(obj,e)
        {
        	if(this.updateYearDepreBtn.text == "상각마감"){
        		for(var i = 0; i < this.dsYearDepre.rowcount; i++){
        			this.dsYearDepre.setColumn(i,"yearDepreDlineYn",1);
        		}
        	}else{
        		for(var i = 0; i < this.dsYearDepre.rowcount; i++){
        			this.dsYearDepre.setColumn(i,"yearDepreDlineYn",0);
        		}
        	}  
        	this.gfnService("modifyFixedAssetYearDepre");
        }

        /********************************************************************************
          그리드 클릭 이벤트
        ********************************************************************************/
        this.yearDepreGrid_oncellclick = function(obj,e)
        {
        	var depreYear = this.dsFixedAssetDepreYm.getColumn(this.dsFixedAssetDepreYm.rowposition,"depreYear");
        	
        	this.dsYearDepre.filter("depreYear =='"+depreYear+"'");
        	this.yearDepreInfoGrid.set_binddataset("dsYearDepre");
        	
        	this.yearDepreYearEd.set_value(depreYear);
        	var yearDepreDlineYn = this.dsYearDepre.getColumn(0,"yearDepreDlineYn");
        	if(yearDepreDlineYn == 0){
        		this.updateYearDepreBtn.set_text("상각마감");
        	}else{
        		this.updateYearDepreBtn.set_text("마감취소");
        	}
        }

        /********************************************************************************
          그리드 내용변경 이벤트
        ********************************************************************************/
        this.yearDepreGrid_onselectchanged = function(obj,e)
        {
        	this.yearDepreGrid_oncellclick(obj,e);
        }

        

        this.searchMonthDepreBtn_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AF_FixedAssetYearDepreForm_onload, this);
            this.searchYearDepreBtn.addEventHandler("onclick", this.searchYearDepreBtn_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.yearDepreGrid.addEventHandler("oncellclick", this.yearDepreGrid_oncellclick, this);
            this.yearDepreGrid.addEventHandler("onselectchanged", this.yearDepreGrid_onselectchanged, this);
            this.subCodeStc32.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.updateYearDepreBtn.addEventHandler("onclick", this.updateYearDepreBtn_onclick, this);

        };

        this.loadIncludeScript("AF_FixedAssetYearDepreForm.xfdl");

       
    };
}
)();

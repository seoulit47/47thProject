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
                this.set_name("WB_FeeCdMngntForm");
                this.set_classname("WB_FeeCdMngntForm");
                this.set_titletext("WB_FeeCdMngntForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findFeeList</Col><Col id=\"URL\">his::won/base/findFeeList.do</Col><Col id=\"outData\">dsFee=dsFee</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchFeeProcess</Col><Col id=\"URL\">his::won/base/batchFeeProcess.do</Col><Col id=\"inData\">dsFee=dsFee:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFee", this);
            obj._setContents("<ColumnInfo><Column id=\"feeCd\" type=\"STRING\" size=\"256\"/><Column id=\"feeNm\" type=\"STRING\" size=\"256\"/><Column id=\"lgGrp\" type=\"STRING\" size=\"256\"/><Column id=\"midGrp\" type=\"STRING\" size=\"256\"/><Column id=\"smGrp\" type=\"STRING\" size=\"256\"/><Column id=\"applyPridStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyPridEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"cost\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLgGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMidGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSmGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GF010</Col><Col id=\"dsName\">dsLgGrp</Col></Row><Row><Col id=\"code\">GF011</Col><Col id=\"dsName\">dsMidGrp</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", "1200", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "71.2%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("의료수가코드 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("feeGrid", "absolute", "2.24%", "129", null, "575", "1.68%", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("dsFee");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"150\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"수가코드\"/><Cell col=\"1\" text=\"명칭\"/><Cell col=\"2\" text=\"대분류\"/><Cell col=\"3\" text=\"중분류\"/><Cell col=\"4\" text=\"소분류\"/><Cell col=\"5\" text=\"적용 시작일\"/><Cell col=\"6\" text=\"적용 종료일\"/><Cell col=\"7\" text=\"비용\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:feeCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:feeNm\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:lgGrp\" combodataset=\"dsLgGrp\" combocodecol=\"bigValue\" combodatacol=\"bigValue\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:midGrp\" combodataset=\"dsMidGrp\" combocodecol=\"bigValue\" combodatacol=\"bigValue\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:smGrp\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:applyPridStartDate\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:applyPridEndDate\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"normal\" text=\"bind:cost\" mask=\"###,###,###\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:note\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addFeeBtn", "absolute", "816", "720", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("addFeeBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("addFeeBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deleteFeeBtn", "absolute", "914", "720", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("deleteFeeBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("deleteFeeBtn");
            this.addChild(obj.name, obj);

            obj = new Button("cancelFeeBtn", "absolute", "1012", "720", "90", "32", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("cancelFeeBtn");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("cancelFeeBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchFeeBtn", "absolute", "1110", "720", "110", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("batchFeeBtn");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("batchFeeBtn");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.24%", "70", null, "51", "1.36%", null, this);
            obj.set_taborder("21");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("lgStc", "absolute", "3.36%", "82", null, "28", "86.96%", null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("급여 구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("lgGrpCombo", "absolute", "13.68%", "82", null, "28", "76.32%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_innerdataset("@dsLgGrp");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.style.set_background("transparent");

            obj = new Static("expStc", "absolute", "45.84%", "82", null, "28", "44.56%", null, this);
            obj.getSetter("taborder").set("24");
            obj.set_text("명칭 검색");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("searchFeeNmEd", "absolute", "55.84%", "82", null, "30", "34.32%", null, this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Button("comboResetBtn", "absolute", "839", "82", "102", "32", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("comboResetBtn");
            obj.style.set_background("@gradation URL('img::resetBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("comboResetBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchFeeBtn", "absolute", "943", "82", "90", "32", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("searchFeeBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchFeeBtn");
            this.addChild(obj.name, obj);

            obj = new Static("midStc", "absolute", "24.64%", "82", null, "28", "65.68%", null, this);
            obj.getSetter("taborder").set("28");
            obj.set_text("상세 구분");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("midGrpCombo", "absolute", "34.96%", "82", null, "28", "55.04%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_innerdataset("@dsMidGrp");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.style.set_background("transparent");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 51, this.baseDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("21");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.baseDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WB_FeeCdMngntForm");
            		p.set_titletext("WB_FeeCdMngntForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WB_FeeCdMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("WB_FeeCdMngntForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 원무 의료수가 코드  관리                          				*
        *                                                                   *
        * @Path		    의료수가 코드 관리     							*
        * @Description  의료수가 코드를 관리한다.						*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  10.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";

        this.WB_FeeCdMngntForm_onload = function(obj,e){
        	this.gfnBind();	
        }

        this.lgGrpCombo_oncloseup = function(obj,e){
        	var value= this.lgGrpCombo.text;
        	this.dsMidGrp.filter("value=='"+value+"'");
        }

        //조건초기화
        this.comboResetBtn_onclick = function(obj,e){
        	this.searchLgGrpCombo.set_value(null);
        	this.searchFeeNmEd.set_value(null);	
        }

        //의료수가코드조회
        this.searchFeeBtn_onclick = function(obj,e){
        	var feeNm = "%"+this.searchFeeNmEd.value+"%";
        	var lgGrp = this.lgGrpCombo.text;
        	var midGrp = this.midGrpCombo.text;
        	
        	if(lgGrp == null || lgGrp == ''){
        		alert("급여 구분 선택 후 조회하십시오.");		
        	}else{
        		var argument = "lgGrp ='"+lgGrp+"' midGrp='"+midGrp+"' feeNm='"+feeNm+"'"; 
        		var row = this.dsService.findRow('serviceID' , "findFeeList");
        		this.dsService.setColumn(row, "argument", argument);
        		this.gfnService("findFeeList", false);
        			
        		//trace(this.dsFee.saveXML());
        	}
        }

        //의료수가코드추가
        this.addFeeBtn_onclick = function(obj,e){
        	this.dsFee.addRow();
        }

        //의료수가코드삭제
        this.deleteFeeBtn_onclick = function(obj,e){
        	this.dsFee.deleteMultiRows(this.feeGrid.getSelectedDatasetRows());
        }

        //작성취소
        this.cancelFeeBtn_onclick = function(obj,e){
        	if(confirm("작성중인 데이터는 저장되지 않습니다. 취소하시겠습니까?")){
        		this.reload();
        	}
        }

        //일괄처리
        this.batchFeeBtn_onclick = function(obj,e){
        	if(confirm("일괄처리 하시겠습니까?")){
        		for(var i=0; i<this.dsFee.rowcount; i++){
        			var feeCd = this.dsFee.getColumn(i,"feeCd");
        			var feeNm = this.dsFee.getColumn(i,"feeNm");
        			var lgGrp = this.dsFee.getColumn(i,"lgGrp");
        			var midGrp = this.dsFee.getColumn(i,"midGrp");
        			var smGrp = this.dsFee.getColumn(i,"smGrp");
        			
        			if(feeCd == null || feeNm == null){			
        				alert("수가코드 및 명칭을 확인 하십시오.");
        			}else if(lgGrp == null || midGrp == null || smGrp == null){
        				alert("대분류, 중분류, 소분류을 확인 하십시오.");
        			}else{
        				this.gfnService("batchFeeProcess");
        			}
        		}
        	}
        }

        //더블클릭이벤트
        this.feeGrid_oncellclick = function(obj,e){
        	//지정된 행의 타입을 반환한다. 1 초기 행, 2 추가된 행, 4 수정된 행을 뜻한다.
        	var selectRow = this.dsFee.getRowType(e.row);
        	
        	if(selectRow == 2){
        		this.feeGrid.setCellProperty("body",0,"edittype","text");	
        		this.feeGrid.setCellProperty("body",2,"edittype","combo");	
        		this.feeGrid.setCellProperty("body",3,"edittype","combo");	
        		this.feeGrid.setCellProperty("body",4,"edittype","text");	
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.WB_FeeCdMngntForm_onload, this);
            this.feeGrid.addEventHandler("oncellclick", this.feeGrid_oncellclick, this);
            this.addFeeBtn.addEventHandler("onclick", this.addFeeBtn_onclick, this);
            this.deleteFeeBtn.addEventHandler("onclick", this.deleteFeeBtn_onclick, this);
            this.cancelFeeBtn.addEventHandler("onclick", this.cancelFeeBtn_onclick, this);
            this.batchFeeBtn.addEventHandler("onclick", this.batchFeeBtn_onclick, this);
            this.lgGrpCombo.addEventHandler("oncloseup", this.lgGrpCombo_oncloseup, this);
            this.comboResetBtn.addEventHandler("onclick", this.comboResetBtn_onclick, this);
            this.searchFeeBtn.addEventHandler("onclick", this.searchFeeBtn_onclick, this);

        };

        this.loadIncludeScript("WB_FeeCdMngntForm.xfdl");

       
    };
}
)();

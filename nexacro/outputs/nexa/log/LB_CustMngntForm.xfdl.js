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
                this.set_name("LB_CustMngntForm");
                this.set_classname("LB_CustMngntForm");
                this.set_titletext("거래처 관리");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCustList</Col><Col id=\"URL\">his::log/base/findCustList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsCust=dsCust</Col><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">batchCustProcess</Col><Col id=\"URL\">his::log/base/batchCustProcess.do</Col><Col id=\"inData\">dsCust=dsCust:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYb", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"yn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"yn\">Y</Col></Row><Row><Col id=\"yn\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCust", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"custNm\" type=\"STRING\" size=\"256\"/><Column id=\"adptDt\" type=\"STRING\" size=\"256\"/><Column id=\"bussNo\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"faxNo\" type=\"STRING\" size=\"256\"/><Column id=\"bankCd\" type=\"STRING\" size=\"256\"/><Column id=\"accNo\" type=\"STRING\" size=\"256\"/><Column id=\"busCtgNm\" type=\"STRING\" size=\"256\"/><Column id=\"busShpNm\" type=\"STRING\" size=\"256\"/><Column id=\"prsdntNm\" type=\"STRING\" size=\"256\"/><Column id=\"resNo\" type=\"STRING\" size=\"256\"/><Column id=\"dpstr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"gpUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"gdUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"cardYn\" type=\"STRING\" size=\"256\"/><Column id=\"riUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"hospCls\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA003</Col><Col id=\"dsName\">dsBank</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBank", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", "1248", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("거래처 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("custCdStc", "absolute", "22", "72", "87", "27", null, null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("거래처코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("custCdEd", "absolute", "117", "72", "100", "27", null, null, this);
            obj.set_taborder("3");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("custCdNmEd", "absolute", "266", "72", "166", "27", null, null, this);
            obj.set_taborder("4");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("searchCustCdBtn", "absolute", "226", "69", "32", "32", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "1140", "69", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);

            obj = new Grid("custGrid", "absolute", "18", "111", "1210", "602", null, null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsCust");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"160\"/><Column size=\"104\"/><Column size=\"96\"/><Column size=\"97\"/><Column size=\"121\"/><Column size=\"164\"/><Column size=\"123\"/><Column size=\"116\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"적용일자\"/><Cell col=\"2\" text=\"우편번호\"/><Cell col=\"3\" text=\"전화번호\"/><Cell col=\"4\" text=\"팩스번호\"/><Cell col=\"5\" text=\"업종명\"/><Cell col=\"6\" text=\"사업자명\"/><Cell col=\"7\" text=\"은행코드\"/><Cell col=\"8\" text=\"예금주\"/><Cell col=\"9\" text=\"인사사용여부\"/><Cell col=\"10\" text=\"카드가맹점여부\"/><Cell col=\"11\" text=\"병원구분\"/><Cell row=\"1\" text=\"거래처명\"/><Cell row=\"1\" col=\"1\" text=\"사업자번호\"/><Cell row=\"1\" col=\"2\" colspan=\"3\" text=\"주소\"/><Cell row=\"1\" col=\"5\" text=\"업태명\"/><Cell row=\"1\" col=\"6\" text=\"주민등록번호\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" text=\"계좌번호\"/><Cell row=\"1\" col=\"9\" text=\"구매사용여부\"/><Cell row=\"1\" col=\"10\" text=\"동위원소거래처여부\"/><Cell row=\"1\" col=\"11\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:custCd\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:adptDt\"/><Cell col=\"2\" edittype=\"expand\" text=\"bind:zipCd\" expandshow=\"show\" expandchar=\"...\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:telNo\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:faxNo\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:busCtgNm\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:prsdntNm\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"expand\" text=\"bind:bankCd\" expandshow=\"show\" expandchar=\"...\" combodataset=\"dsBank\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:dpstr\"/><Cell col=\"9\" edittype=\"combo\" text=\"bind:gpUseYn\" combodataset=\"dsYb\" combocodecol=\"yn\" combodatacol=\"yn\"/><Cell col=\"10\" edittype=\"combo\" text=\"bind:cardYn\" combodataset=\"dsYb\" combocodecol=\"yn\" combodatacol=\"yn\"/><Cell col=\"11\" edittype=\"normal\" text=\"bind:hospCls\"/><Cell row=\"1\" edittype=\"normal\" text=\"bind:custNm\"/><Cell row=\"1\" col=\"1\" edittype=\"normal\" text=\"bind:bussNo\" mask=\"###-##-#####\"/><Cell row=\"1\" col=\"2\" colspan=\"3\" edittype=\"normal\" text=\"bind:addr\"/><Cell row=\"1\" col=\"5\" edittype=\"normal\" text=\"bind:busShpNm\"/><Cell row=\"1\" col=\"6\" edittype=\"mask\" text=\"bind:resNo\" mask=\"######-#######\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" edittype=\"normal\" text=\"bind:accNo\"/><Cell row=\"1\" col=\"9\" edittype=\"combo\" text=\"bind:gdUseYn\" combodataset=\"dsYb\" combocodecol=\"yn\" combodatacol=\"yn\"/><Cell row=\"1\" col=\"10\" edittype=\"combo\" text=\"bind:riUseYn\" combodataset=\"dsYb\" combocodecol=\"yn\" combodatacol=\"yn\"/><Cell row=\"1\" col=\"11\" edittype=\"combo\" text=\"bind:useYn\" combodataset=\"dsYb\" combocodecol=\"yn\" combodatacol=\"yn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "1144", "720", "90", "32", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "1043", "720", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LB_CustMngntForm");
            		p.set_titletext("거래처 관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LB_CustMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("LB_CustMngntForm.xfdl", "scripts::logScripts.xjs");
        this.addIncludeScript("LB_CustMngntForm.xfdl", "scripts::commonGrid.xjs");
        this.registerScript("LB_CustMngntForm.xfdl", function() {
        /********************************************************************************                                                                            
        거래처 관리 화면                                             						                                                                         
        @Path			물류공통(Logistics Base)              				   				
        @Description	거래처를 관리하기 위한 폼							
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 5. 27.                             		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";  		//공통 스크립트
        //include "scripts::logScripts.xjs";			//물류 스크립트
        //include "scripts::commonGrid.xjs";

        var row;

        this.clickBtn = function(obj){	
        	switch(obj){ 		
        		case this.searchCustCdBtn: 	//거래처 코드 검색
        				this.clicksearchCustBtn();
        				break;
        		case this.searchBtn:		//창고 조회
        				this.clickSearchBtn();
        				break;
        		case this.addBtn:			//추가 버튼
        				this.clickAddBtn();
        				break;	
        		case this.batchBtn:			//일괄 처리 버튼
        				this.clickBatchBtn();
        				break;	
        	}
        }

        this.setLogCodeArray = function(divCode,logCode,secCode,thrCode,arr) {
        	switch (divCode){
        		case "cust":
        			this.custCdEd.set_value(arr[0]);
        			this.custCdNmEd.set_value(arr[1]);
        			break;
        	}
        }

        
        this.clicksearchCustBtn = function() {
        	this.logOpenCdDialog("cust");
        }

        this.clickSearchBtn = function() {	
        	var custCd = this.custCdEd.value;
        	var custNm = this.custCdNmEd.value;	
        	var argument = 'custCd=' + custCd + ' custNm=' + custNm;
        	this.dsService.setColumn(0, "argument", argument);
        	this.gfnService("findCustList", false);		

        }

        
        this.clickAddBtn = function() {
        	this.dsCust.addRow();
        }

        
        this.clickBatchBtn = function(){
        	this.gfnService("batchCustProcess");
        }

        

        this.custGrid_onexpanddown = function(obj,e)
        {
        	row = e.row;
        	if(e.col == 2) {					// 우편번호 컬럼
        		this.gfnPostPopup();
        	} else if(e.col == 7) {				// 거래은행 컬럼
        		this.gfnCodePopup("GA003");
        	}
        }

        this.setCode = function(codeDiv,arrRtn) 
        {
        	if(codeDiv == "GA003") {
        		this.dsCust.setColumn(row, "bankCd", arrRtn[0]);
        	}
        }

        this.setPost = function(zipCode,baseAddr,detailAddr)
        {
        	this.dsCust.setColumn(row, "zipCd", zipCode);
        	this.dsCust.setColumn(row, "addr", baseAddr + detailAddr);
        }

        this.LB_CustMngntForm_onload = function(obj,e)
        {
        	this.gfnBind();
        }
        this.custGrid_onheadclick = function(obj,e)
        {
        	if (this.fv_constSortFlag) {
        		this.gfnClearSortMark(obj, e.cell);
        	} else {
        		this.gfnGridSort(obj,e);
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LB_CustMngntForm_onload, this);
            this.custCdStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchCustCdBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchBtn.addEventHandler("onclick", this.clickBtn, this);
            this.custGrid.addEventHandler("ontextchanged", this.ontextchanged, this);
            this.custGrid.addEventHandler("onexpanddown", this.custGrid_onexpanddown, this);
            this.custGrid.addEventHandler("onheadclick", this.custGrid_onheadclick, this);
            this.batchBtn.addEventHandler("onclick", this.clickBtn, this);
            this.addBtn.addEventHandler("onclick", this.clickBtn, this);

        };

        this.loadIncludeScript("LB_CustMngntForm.xfdl");

       
    };
}
)();

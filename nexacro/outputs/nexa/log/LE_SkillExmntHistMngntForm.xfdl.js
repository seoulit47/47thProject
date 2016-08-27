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
                this.set_name("LE_SkillExmntHistMngntForm");
                this.set_classname("LE_SkillExmntHistMngntForm");
                this.set_titletext("기술검사관리");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSkillExmntHist", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"assetGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"assetNm\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctryNm\" type=\"STRING\" size=\"256\"/><Column id=\"exmntDate\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"midGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"modelNm\" type=\"STRING\" size=\"256\"/><Column id=\"prodCompNm\" type=\"STRING\" size=\"256\"/><Column id=\"prodNo\" type=\"STRING\" size=\"256\"/><Column id=\"skillExmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"mngnt\" type=\"STRING\" size=\"256\"/><Column id=\"smGrpCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCustList</Col><Col id=\"URL\">his::log/base/findCustList.do</Col><Col id=\"outData\">dsCust=dsCust</Col></Row><Row><Col id=\"outData\">dsSkillExmntHist=dsSkillExmntHist</Col><Col id=\"serviceID\">findSkillExmntHistList</Col><Col id=\"URL\">his::log/inpt/findSkillExmntHistList.do</Col><Col id=\"callbackFunc\">findSkillExmntHistListCallback</Col></Row><Row><Col id=\"serviceID\">batchProcessSkillExmntHist</Col><Col id=\"URL\">his::log/inpt/batchProcessSkillExmntHist.do</Col><Col id=\"inData\">dsSkillExmntHist=dsSkillExmntHist:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMngnt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">원자력병원</Col></Row><Row><Col id=\"value\">방사선의학연구소</Col></Row><Row><Col id=\"value\">국가방사선비상진료센터</Col></Row><Row><Col id=\"value\">물류센터</Col></Row><Row><Col id=\"value\">지원부서</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCust", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"custNm\" type=\"STRING\" size=\"256\"/><Column id=\"adptDt\" type=\"STRING\" size=\"256\"/><Column id=\"bussNo\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"faxNo\" type=\"STRING\" size=\"256\"/><Column id=\"bankCd\" type=\"STRING\" size=\"256\"/><Column id=\"accNo\" type=\"STRING\" size=\"256\"/><Column id=\"busCtgNm\" type=\"STRING\" size=\"256\"/><Column id=\"busShpNm\" type=\"STRING\" size=\"256\"/><Column id=\"prsdntNm\" type=\"STRING\" size=\"256\"/><Column id=\"resNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"gpUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"gdUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"cardYn\" type=\"STRING\" size=\"256\"/><Column id=\"riUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"hospCls\" type=\"STRING\" size=\"256\"/><Column id=\"dpstr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.08%", "4", null, "60", "-42%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "3.1%", "-4", null, "60", "83.37%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("기술검사관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("searchDiv", "absolute", "1.28%", "61", null, "39", "0.48%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "59.22%", "8", null, "24", "38.09%", null, this.searchDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("~");
            obj.style.set_align("middle");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "40.32%", "64", null, "30", "52.24%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("검사기간");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("startExmntDateCal", "absolute", "48.72%", "64", null, "30", "40.56%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Calendar("endExmntDateCal", "absolute", "62.24%", "64", null, "30", "27.04%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Button("searchBtn", "absolute", "73.36%", "64", null, "32", "19.44%", null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("SearchBtn");
            obj.set_cssclass("SearchBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "1.44%", "111", null, "586", "4%", null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsSkillExmntHist");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"57\"/><Column size=\"152\"/><Column size=\"285\"/><Column size=\"147\"/><Column size=\"125\"/><Column size=\"115\"/><Column size=\"126\"/><Column size=\"92\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계약번호\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"자산명\"/><Cell col=\"3\" text=\"품명\"/><Cell col=\"4\" text=\"관리구분\"/><Cell col=\"5\" text=\"검사일자\"/><Cell col=\"6\" text=\"제조회사명\"/><Cell col=\"7\" text=\"제조번호\"/><Cell col=\"8\" text=\"제조국가명\"/></Band><Band id=\"body\"><Cell text=\"bind:ctrtNo\"/><Cell col=\"1\" text=\"bind:skillExmntNo\"/><Cell col=\"2\" text=\"bind:assetNm\"/><Cell col=\"3\" text=\"bind:modelNm\"/><Cell col=\"4\" text=\"bind:gdsCd\"/><Cell col=\"5\" text=\"bind:exmntDate\"/><Cell col=\"6\" text=\"bind:prodCompNm\"/><Cell col=\"7\" text=\"bind:prodNo\"/><Cell col=\"8\" text=\"bind:ctryNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addAuthBtn", "absolute", "90.24%", "704", null, "32", "7.2%", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("ArBtn");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("ArBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delAuthBtn", "absolute", "93.44%", "704", null, "32", "4%", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("DrBtn");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DrBtn");
            this.addChild(obj.name, obj);

            obj = new Button("inptCancelBtn", "absolute", "82%", "66", null, "30", "10.96%", null, this);
            obj.set_taborder("11");
            obj.set_text("검수취소");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("inptCheckBtn", "absolute", "89.44%", "66", null, "30", "3.52%", null, this);
            obj.set_taborder("12");
            obj.set_text("검수확인");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 39, this.searchDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.searchDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LE_SkillExmntHistMngntForm");
            		p.set_titletext("기술검사관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LE_SkillExmntHistMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("LE_SkillExmntHistMngntForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 기술검사관리																*
        *                                                                               *
        * @Path		    log-LD_skillExmntHistMngntForm									*
        *																				*
        * @Description 	물품 반납관리에서 물품 반납 등록,수정,삭제,조회,검수확인,검수취소한다.			*
        *               																*
        * @Author	    전보현    						                                *
        * 									                                            *
        * Created on 2016. 05. 30                            		                    *
        *									                                            *
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";

        var startDate;
        var endDate;
        var selectCtrtQnt;

        
        this.searchBtn_onclick = function(obj,e)
        {
        	startDate=this.startExmntDateCal.value;   //검사시작일
        	endDate=this.endExmntDateCal.value;     //검사종료일	
        	this.dsSkillExmntHist.clearData();
        	//조회 검색조건
        	if(startDate==null){   
        	    alert("검사시작일 선택하세요.");		
        	}else if(endDate==null){
        		alert("검사종료일 선택하세요.");
        	}else if(startDate > endDate){
        	    alert("검색종료일이 확인 후 다시 선택하세요.");
        	}else{	
        		this.gfnService("findSkillExmntHistList","false");
        	}	
        }

        this.addAuthBtn_onclick = function(obj,e)
        {
        	application.open("검새대상물품코드","log::LE_SkillExmntPopupForm.xfdl",this.parent,{},"showtitlebar=true showstatusbar=false","","");
        }
        //검수취소(확인하기)
        this.inptCancelBtn_onclick = function(obj,e)
        {
        	this.dsSkillExmntHist.deleteRow(this.dsSkillExmntHist.rowposition);
        	this.gfnService("batchProcessSkillExmntHist","false");	//검수등록된거 삭제, 검수여부변경.
        }
        //검수확인
        this.inptCheckBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchProcessSkillExmntHist","false");	//검수확인등록, 검수여부변경.
        }

        this.delAuthBtn_onclick = function(obj,e)
        {
        	this.dsSkillExmntHist.deleteRow(this.dsSkillExmntHist.rowposition);
        }

        //도움창에서 얻어 온 값.
        this.selectCode=function(sCtrtNo,sCtrtQnt,sGdsCd,sFm,sCtrtGds,sCust)
        {	
        	//this.gfnService("findCustList","false");   //선택한 거래처명 불러오기.

            //입고한 수량만큼 Row생성.
        	for(var i=0;i<sCtrtQnt;i++){
        		this.dsSkillExmntHist.addRow();
        		this.dsSkillExmntHist.setColumn(i,"ctrtNo",sCtrtNo);
        		this.dsSkillExmntHist.setColumn(i,"exmntDate",this.fn_dateTime());   //검수날짜(오늘)
        		this.dsSkillExmntHist.setColumn(i,"gdsCd",sGdsCd);  //물품코드
        		this.dsSkillExmntHist.setColumn(i,"modelNm",sCtrtGds);   //자산명
        		this.dsSkillExmntHist.setColumn(i,"skillExmntNo","0"+i);  //기술검사번호		
        		this.dsSkillExmntHist.setColumn(i,"prodCompNm",sCust);   //거래처
        		this.dsSkillExmntHist.setColumn(i,"assetNm",sFm);   //품명
        	}
        }

        //오늘날짜함수
        this.fn_dateTime = function() 
        {
            var dDate = new Date();     
            var sRtn =  dDate.getFullYear()
                  + (dDate.getMonth()+1).toString().padLeft(2, "0")
                  +  dDate.getDate().toString().padLeft(2, "0");
            return sRtn;
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.addAuthBtn.addEventHandler("onclick", this.addAuthBtn_onclick, this);
            this.delAuthBtn.addEventHandler("onclick", this.delAuthBtn_onclick, this);
            this.inptCancelBtn.addEventHandler("onclick", this.inptCancelBtn_onclick, this);
            this.inptCheckBtn.addEventHandler("onclick", this.inptCheckBtn_onclick, this);

        };

        this.loadIncludeScript("LE_SkillExmntHistMngntForm.xfdl");

       
    };
}
)();

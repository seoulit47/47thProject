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
                this.set_name("LE_SkillExmntPopupForm");
                this.set_classname("LE_SkillExmntPopupForm");
                this.set_titletext("검사대상물품목록");
                this._setFormPosition(0,0,740,484);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCtrtInfo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtDate\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtDiv\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtStart\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEnd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtSeq\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtRespoWorker\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtRespoWorkerNm\" type=\"STRING\" size=\"256\"/><Column id=\"cust\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtStat\" type=\"STRING\" size=\"256\"/><Column id=\"buyAprvYb\" type=\"STRING\" size=\"256\"/><Column id=\"signSsYb\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtCon\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtStand\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtQnt\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtPrice\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"buyReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"inptYb\" type=\"STRING\" size=\"256\"/><Column id=\"fm\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtGds\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCtrtList</Col><Col id=\"URL\">his::log/inpt/findCtrtList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsCtrtInfo=dsCtrtInfo</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">findCtrtListCallback</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.14%", "4", null, "60", "1.22%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "7.12%", "-2", null, "60", "61.78%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("검사대상물품목록");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("searchDiv", "absolute", "1.22%", "61", null, "411", "0.54%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "65.24%", "3", null, "31", "30.48%", null, this.searchDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("~");
            obj.style.set_align("middle");
            this.searchDiv.addChild(obj.name, obj);
            obj = new Grid("CtrtInfoGrid", "absolute", "0.69%", "47", null, "358", "0.41%", null, this.searchDiv);
            obj.set_taborder("1");
            obj.set_binddataset("dsCtrtInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"83\"/><Column size=\"72\"/><Column size=\"110\"/><Column size=\"197\"/><Column size=\"89\"/><Column size=\"52\"/><Column size=\"72\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계약번호\"/><Cell col=\"1\" text=\"검사여부\"/><Cell col=\"2\" text=\"물품코드\"/><Cell col=\"3\" text=\"물  품\"/><Cell col=\"4\" text=\"계약물품\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"단  가\"/></Band><Band id=\"body\"><Cell text=\"bind:ctrtNo\"/><Cell col=\"1\" text=\"bind:inptYb\"/><Cell col=\"2\" text=\"bind:gdsCd\"/><Cell col=\"3\" text=\"bind:fm\"/><Cell col=\"4\" text=\"bind:ctrtGds\"/><Cell col=\"5\" text=\"bind:ctrtQnt\"/><Cell col=\"6\" text=\"bind:ctrtPrice\"/></Band></Format></Formats>");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "86.49%", "64", null, "32", "1.35%", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("SearchBtn");
            this.addChild(obj.name, obj);

            obj = new Calendar("startCtrtDateCal", "absolute", "49.73%", "64", null, "30", "35%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Calendar("endCtrtDateCal", "absolute", "69.73%", "64", null, "30", "15%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Static("subCodeStc00", "absolute", "40%", "64", null, "30", "51.49%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("계약기간");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
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
            obj = new Layout("default", "", 0, 411, this.searchDiv,
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
            obj = new Layout("default", "", 740, 484, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LE_SkillExmntPopupForm");
            		p.set_titletext("검사대상물품목록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LE_SkillExmntPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("LE_SkillExmntPopupForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        var startDate;  //시작일
        var endDate;   // 종료일

        this.searchBtn_onclick = function(obj,e)
        {
        	startDate=this.startCtrtDateCal.value;
        	endDate=this.endCtrtDateCal.value;
        	
        	this.gfnService("findCtrtList","false");
        }

        this.findCtrtListCallback = function(svcID,errorCode,errorMsg){
        	if(errorCode=="0") {	
        		this.dsCtrtInfo.filter("");
        		this.dsCtrtInfo.filter("ctrtDate >="+startDate+"&& ctrtDate <="+endDate+"&& inptYb=='N'");		
        	    alert("조회성공");
        	}else {
        		alert("조회실패");
        	}	
        }
        this.searchDiv_CtrtInfoGrid_oncellclick = function(obj,e)
        {
        	var sCtrtNo=this.dsCtrtInfo.getColumn(e.row,"ctrtNo");   //선택한 계약번호
        	var sCtrtQnt=this.dsCtrtInfo.getColumn(e.row,"ctrtQnt");  //선택한 수량
        	var sGdsCd=this.dsCtrtInfo.getColumn(e.row,"gdsCd");   //선택한 물품코드
        	var sFm=this.dsCtrtInfo.getColumn(e.row,"fm");   //선택한 품명
        	var sCtrtGds=this.dsCtrtInfo.getColumn(this.dsCtrtInfo.rowposition,"ctrtGds");   //선택한 품명
        	var sCust=this.dsCtrtInfo.getColumn(e.row,"cust");  //거래처

        	this.opener.selectCode(sCtrtNo,sCtrtQnt,sGdsCd,sFm,sCtrtGds,sCust);
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.searchDiv.CtrtInfoGrid.addEventHandler("oncellclick", this.searchDiv_CtrtInfoGrid_oncellclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);

        };

        this.loadIncludeScript("LE_SkillExmntPopupForm.xfdl");

       
    };
}
)();

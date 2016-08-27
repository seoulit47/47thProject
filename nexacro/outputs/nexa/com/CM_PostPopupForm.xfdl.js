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
                this.set_name("CM_PostPopupForm");
                this.set_classname("CM_PostPopupForm");
                this.set_titletext("주소검색");
                this._setFormPosition(0,0,700,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findSido</Col><Col id=\"URL\">his::com/post/findSido.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsPostSi=dsPostSi</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findSigungu</Col><Col id=\"URL\">his::com/post/findSigungu.do</Col><Col id=\"outData\">dsPostSigungu=dsPostSigungu</Col><Col id=\"callbackFunc\">callbackSigungu</Col><Col id=\"inData\"/><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">findRoadPost</Col><Col id=\"URL\">his::com/post/findRoadPost.do</Col><Col id=\"outData\">dsRoadPost=dsRoadPost</Col><Col id=\"inData\">dsPostCond=dsPostCond</Col><Col id=\"callbackFunc\"/><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">findDongPost</Col><Col id=\"URL\">his::com/post/findDongPost.do</Col><Col id=\"outData\">dsDongPost=dsDongPost</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPostSi", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"sidoCode\" type=\"STRING\" size=\"256\"/><Column id=\"sidoName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPostSigungu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"sigunguCode\" type=\"STRING\" size=\"256\"/><Column id=\"sigunguName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDongPost", this);
            obj._setContents("<ColumnInfo><Column id=\"zipCode\" type=\"STRING\" size=\"256\"/><Column id=\"baseAddr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRoadPost", this);
            obj._setContents("<ColumnInfo><Column id=\"zipCode\" type=\"STRING\" size=\"256\"/><Column id=\"baseAddr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPostCond", this);
            obj._setContents("<ColumnInfo><Column id=\"sidoCode\" type=\"STRING\" size=\"256\"/><Column id=\"sidoName\" type=\"STRING\" size=\"256\"/><Column id=\"sigunguCode\" type=\"STRING\" size=\"256\"/><Column id=\"sigunguName\" type=\"STRING\" size=\"256\"/><Column id=\"roadKeyword\" type=\"STRING\" size=\"256\"/><Column id=\"dongKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div04", "absolute", "0%", "0", "679", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "9.86%", "-5", null, "60", "62.71%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("주소검색");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Tab("postTab", "absolute", "15", "62", "673", "368", null, null, this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.getSetter("class").set("AreaTab");
            this.addChild(obj.name, obj);
            obj = new Tabpage("dongTp", this.postTab);
            obj.set_text("지번주소");
            this.postTab.addChild(obj.name, obj);
            obj = new Edit("detailEdit", "absolute", "96", "306", "557", "26", null, null, this.postTab.dongTp);
            obj.set_taborder("16");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.postTab.dongTp.addChild(obj.name, obj);
            obj = new Static("inDongDetailStc", "absolute", "20", "304", "70", "30", null, null, this.postTab.dongTp);
            obj.getSetter("taborder").set("17");
            obj.set_text("상세주소");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.dongTp.addChild(obj.name, obj);
            obj = new Edit("zipEdit", "absolute", "97", "269", "92", "26", null, null, this.postTab.dongTp);
            obj.set_taborder("18");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            obj.set_readonly("true");
            this.postTab.dongTp.addChild(obj.name, obj);
            obj = new Static("inDongZipStc", "absolute", "20", "267", "70", "30", null, null, this.postTab.dongTp);
            obj.getSetter("taborder").set("19");
            obj.set_text("우편번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.dongTp.addChild(obj.name, obj);
            obj = new Edit("baseEdit", "absolute", "273", "269", "380", "26", null, null, this.postTab.dongTp);
            obj.set_taborder("20");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            obj.set_readonly("true");
            this.postTab.dongTp.addChild(obj.name, obj);
            obj = new Static("inDongBaseStc", "absolute", "196", "267", "70", "30", null, null, this.postTab.dongTp);
            obj.getSetter("taborder").set("21");
            obj.set_text("기본주소");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.dongTp.addChild(obj.name, obj);
            obj = new Edit("dongEdit", "absolute", "192", "14", "260", "26", null, null, this.postTab.dongTp);
            obj.set_taborder("23");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.postTab.dongTp.addChild(obj.name, obj);
            obj = new Static("inDoroStc", "absolute", "20", "12", "200", "30", null, null, this.postTab.dongTp);
            obj.getSetter("taborder").set("31");
            obj.set_text("읍/면/동 명을 입력하세요");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.dongTp.addChild(obj.name, obj);
            obj = new Button("searchDongBtn", "absolute", "563", "11", "90", "32", null, null, this.postTab.dongTp);
            obj.set_taborder("32");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.postTab.dongTp.addChild(obj.name, obj);
            obj = new Grid("dongPostGrid", "absolute", "2.98%", "47", "633", "211", null, null, this.postTab.dongTp);
            obj.set_taborder("35");
            obj.set_binddataset("dsDongPost");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"416\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"우편번호\"/><Cell col=\"1\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:zipCode\"/><Cell col=\"1\" text=\"bind:baseAddr\"/></Band></Format></Formats>");
            this.postTab.dongTp.addChild(obj.name, obj);
            obj = new Tabpage("roadTp", this.postTab);
            obj.set_text("도로명주소");
            this.postTab.addChild(obj.name, obj);
            obj = new Combo("sidoCombo", "absolute", "100", "13", "174", "26", null, null, this.postTab.roadTp);
            this.postTab.roadTp.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("dsPostSi");
            obj.set_codecolumn("sidoCode");
            obj.set_datacolumn("sidoName");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#777777ff");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("");
            obj = new Static("inDoStc", "absolute", "19", "11", "70", "30", null, null, this.postTab.roadTp);
            obj.getSetter("taborder").set("17");
            obj.set_text("시도");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.roadTp.addChild(obj.name, obj);
            obj = new Static("inGunStc", "absolute", "304", "11", "70", "30", null, null, this.postTab.roadTp);
            obj.getSetter("taborder").set("18");
            obj.set_text("시군구");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.roadTp.addChild(obj.name, obj);
            obj = new Combo("sigunguCombo", "absolute", "385", "13", "220", "26", null, null, this.postTab.roadTp);
            this.postTab.roadTp.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_innerdataset("@dsPostSigungu");
            obj.set_datacolumn("sigunguName");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#777777ff");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("");
            obj.set_codecolumn("sigunguName");
            obj = new Static("inDoroStc", "absolute", "19", "45", "159", "30", null, null, this.postTab.roadTp);
            obj.getSetter("taborder").set("20");
            obj.set_text("도로명을 입력하세요");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.roadTp.addChild(obj.name, obj);
            obj = new Edit("roadEdit", "absolute", "160", "47", "317", "26", null, null, this.postTab.roadTp);
            obj.set_taborder("21");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#777777ff");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.postTab.roadTp.addChild(obj.name, obj);
            obj = new Grid("doroGrid", "absolute", "19", "81", "633", "177", null, null, this.postTab.roadTp);
            obj.set_taborder("22");
            obj.set_binddataset("dsRoadPost");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"416\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"우편번호\"/><Cell col=\"1\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:zipCode\"/><Cell col=\"1\" text=\"bind:baseAddr\"/></Band></Format></Formats>");
            this.postTab.roadTp.addChild(obj.name, obj);
            obj = new Button("searchRoadBtn", "absolute", "562", "45", "90", "32", null, null, this.postTab.roadTp);
            obj.set_taborder("38");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.postTab.roadTp.addChild(obj.name, obj);
            obj = new Static("inDongZipStc", "absolute", "20", "267", "70", "30", null, null, this.postTab.roadTp);
            obj.getSetter("taborder").set("39");
            obj.set_text("우편번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.roadTp.addChild(obj.name, obj);
            obj = new Edit("zipEdit", "absolute", "97", "269", "92", "26", null, null, this.postTab.roadTp);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.postTab.roadTp.addChild(obj.name, obj);
            obj = new Static("inDongBaseStc", "absolute", "196", "267", "70", "30", null, null, this.postTab.roadTp);
            obj.getSetter("taborder").set("41");
            obj.set_text("기본주소");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.roadTp.addChild(obj.name, obj);
            obj = new Edit("baseEdit", "absolute", "273", "269", "380", "26", null, null, this.postTab.roadTp);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.postTab.roadTp.addChild(obj.name, obj);
            obj = new Edit("detailEdit", "absolute", "96", "306", "557", "26", null, null, this.postTab.roadTp);
            obj.set_taborder("43");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.postTab.roadTp.addChild(obj.name, obj);
            obj = new Static("inDongDetailStc", "absolute", "20", "304", "70", "30", null, null, this.postTab.roadTp);
            obj.getSetter("taborder").set("44");
            obj.set_text("상세주소");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.roadTp.addChild(obj.name, obj);

            obj = new Button("cancelBtn", "absolute", "589", "448", "90", "32", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("okBtn", "absolute", "486", "448", "90", "32", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::permitBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.postTab.dongTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("지번주소");

            	}
            );
            this.postTab.dongTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.postTab.roadTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("도로명주소");

            	}
            );
            this.postTab.roadTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 700, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CM_PostPopupForm");
            		p.set_titletext("주소검색");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CM_PostPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("CM_PostPopupForm.xfdl", function() {
        /********************************************************************************                                                                            
        우편번호 검색 화면                                           						                                                                         
        @Path			시스템공통            				   				
        @Description	우편번호 검색 서비스 화면
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 5. 29.

        TODO : 주소값(우편번호, 기본주소, 상세주소) 넘겨주는 루틴 작성할것	 
               지번주소 우편번호(###-###) 와 도로명주소 우편번호(######) 포맷 맞출것            				                                            
        ********************************************************************************/
        //include "scripts::commonScripts.xjs"

        
        this.CM_PostPopupForm_onload = function(obj,e)
        {
        	this.gfnService("findSido");
        }

        this.postTab_dongTp_searchDongBtn_onclick = function(obj,e)
        {
        	this.dsService.setColumn(3, 4, "dong=" + this.postTab.dongTp.dongEdit.value);
        	this.gfnService("findDongPost");
        }

        
        this.postTab_dongTp_dongPostGrid_oncellclick = function(obj,e)
        {
        	this.postTab.dongTp.zipEdit.set_value(this.dsDongPost.getColumn(this.dsDongPost.rowposition, 0));
        	this.postTab.dongTp.baseEdit.set_value(this.dsDongPost.getColumn(this.dsDongPost.rowposition, 1));
        }

        this.postTab_roadTp_searchRoadBtn_onclick = function(obj,e)
        {
        	this.dsPostCond.clearData();
        	this.dsPostCond.addRow();
        	this.dsPostCond.setColumn(0, "sidoCode", this.postTab.roadTp.sidoCombo.value);
        	this.dsPostCond.setColumn(0, "sigunguName", this.postTab.roadTp.sigunguCombo.value);
        	this.dsPostCond.setColumn(0, "roadKeyword", this.postTab.roadTp.roadEdit.value);
        	this.gfnService("findRoadPost");
        }

        
        this.postTab_roadTp_sidoCombo_onitemclick = function(obj,e)
        {
        	this.dsService.setColumn(1, 4, "sido="+e.itemvalue);
        	this.gfnService("findSigungu");
        }

        this.callbackSigungu = function(svcID,errorCode,errorMsg) {
        	//this.dsPostSigungu.filter();
        }
        this.postTab_roadTp_doroGrid_oncellclick = function(obj,e)
        {
        	this.postTab.roadTp.zipEdit.set_value(this.dsRoadPost.getColumn(this.dsRoadPost.rowposition, 0));
        	this.postTab.roadTp.baseEdit.set_value(this.dsRoadPost.getColumn(this.dsRoadPost.rowposition, 1));
        }

        this.cancelBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        this.okBtn_onclick = function(obj,e)
        {
        	var target;
        	if(this.postTab.tabindex == 0) target = this.postTab.dongTp;
        	else target = this.postTab.roadTp;
        	
        	this.opener.setPost(target.zipEdit.value, target.baseEdit.value, target.detailEdit.value);
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.CM_PostPopupForm_onload, this);
            this.postTab.dongTp.searchDongBtn.addEventHandler("onclick", this.postTab_dongTp_searchDongBtn_onclick, this);
            this.postTab.dongTp.dongPostGrid.addEventHandler("oncellclick", this.postTab_dongTp_dongPostGrid_oncellclick, this);
            this.postTab.roadTp.sidoCombo.addEventHandler("onitemclick", this.postTab_roadTp_sidoCombo_onitemclick, this);
            this.postTab.roadTp.doroGrid.addEventHandler("oncellclick", this.postTab_roadTp_doroGrid_oncellclick, this);
            this.postTab.roadTp.searchRoadBtn.addEventHandler("onclick", this.postTab_roadTp_searchRoadBtn_onclick, this);
            this.cancelBtn.addEventHandler("onclick", this.cancelBtn_onclick, this);
            this.okBtn.addEventHandler("onclick", this.okBtn_onclick, this);

        };

        this.loadIncludeScript("CM_PostPopupForm.xfdl");

       
    };
}
)();

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
                this.set_name("AC_DlineCarrforForm");
                this.set_classname("AC_DlineCarrforForm");
                this.set_titletext("마감 및 이월");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA094</Col><Col id=\"dsName\">dsDlineArti</Col></Row><Row><Col id=\"code\">GA095</Col><Col id=\"dsName\">dsCarrforArti</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAccPrid</Col><Col id=\"URL\">his::acc/elementary/findAccPrid.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAccPrid=dsAccPrid</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">dlineCarrforFunc</Col></Row><Row><Col id=\"serviceID\">modifyDlineYn</Col><Col id=\"URL\">his::acc/closing/modifyDlineYn.do</Col><Col id=\"inData\">dsAccPrid=dsAccPrid</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">dlineCarrforFunc</Col></Row><Row><Col id=\"serviceID\">executeCarrfor</Col><Col id=\"URL\">his::acc/closing/executeCarrfor.do</Col><Col id=\"inData\">dsAccPrid=dsAccPrid</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">dlineCarrforFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAccPrid", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"dlineArti\" type=\"STRING\" size=\"256\"/><Column id=\"carrforDate\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"dlineMan\" type=\"STRING\" size=\"256\"/><Column id=\"dlineManCd\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"dlineYn\" type=\"STRING\" size=\"256\"/><Column id=\"carrforYn\" type=\"STRING\" size=\"256\"/><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"carrforMan\" type=\"STRING\" size=\"256\"/><Column id=\"carrforManCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlineDate\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDlineArti", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCarrforArti", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div05", "absolute", "0%", "0", "1242", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.79%", "-4", null, "60", "78.86%", null, this.Div05);
            obj.getSetter("taborder").set("0");
            obj.set_text("마감 및 이월");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div05.addChild(obj.name, obj);

            obj = new Div("dlineCarrforDiv", "absolute", "1.92%", "56", null, "702", "0.48%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.73%", "46", null, "613", "57.93%", null, this.dlineCarrforDiv);
            obj.getSetter("taborder").set("3");
            obj.style.set_border("2 solid skyblue");
            this.dlineCarrforDiv.addChild(obj.name, obj);
            obj = new Grid("workControlGrid", "absolute", "0.9%", "48", null, "590", "57.93%", null, this.dlineCarrforDiv);
            obj.set_taborder("4");
            obj.set_binddataset("dsAccPrid");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"작업일자 통제\"/><Cell row=\"1\" text=\"마감항목\"/><Cell row=\"1\" col=\"1\" text=\"마감일\"/><Cell row=\"1\" col=\"2\" text=\"마감자\"/><Cell row=\"1\" col=\"3\" text=\"이월여부\"/></Band><Band id=\"body\"><Cell text=\"전표입력마감일\"/><Cell col=\"1\" text=\"bind:dlineDate\"/><Cell col=\"2\" text=\"bind:dlineManCd\"/><Cell col=\"3\" text=\"bind:carrforYn\"/><Cell row=\"1\" text=\"전표승인마감일\"/><Cell row=\"1\" col=\"1\" text=\"bind:dlineDate\"/><Cell row=\"1\" col=\"2\" text=\"bind:dlineManCd\"/><Cell row=\"1\" col=\"3\" text=\"bind:carrforYn\"/><Cell row=\"2\" text=\"부가세신고작업\"/><Cell row=\"2\" col=\"1\" text=\"bind:dlineDate\"/><Cell row=\"2\" col=\"2\" text=\"bind:dlineManCd\"/><Cell row=\"2\" col=\"3\" text=\"bind:carrforYn\"/><Cell row=\"3\" text=\"고정 자산 등록\"/><Cell row=\"3\" col=\"1\" text=\"bind:dlineDate\"/><Cell row=\"3\" col=\"2\" text=\"bind:dlineManCd\"/><Cell row=\"3\" col=\"3\" text=\"bind:carrforYn\"/><Cell row=\"4\" text=\"자동 전표 마감\"/><Cell row=\"4\" col=\"1\" text=\"bind:dlineDate\"/><Cell row=\"4\" col=\"2\" text=\"bind:dlineManCd\"/><Cell row=\"4\" col=\"3\" text=\"bind:carrforYn\"/><Cell row=\"5\" text=\"결산부속명세서\"/><Cell row=\"5\" col=\"1\" text=\"bind:dlineDate\"/><Cell row=\"5\" col=\"2\" text=\"bind:dlineManCd\"/><Cell row=\"5\" col=\"3\" text=\"bind:carrforYn\"/><Cell row=\"6\" text=\"초기 이월 마감\"/><Cell row=\"6\" col=\"1\" text=\"bind:dlineDate\"/><Cell row=\"6\" col=\"2\" text=\"bind:dlineManCd\"/><Cell row=\"6\" col=\"3\" text=\"bind:carrforYn\"/></Band></Format></Formats>");
            this.dlineCarrforDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "42.07%", "44", null, "418", "0.08%", null, this.dlineCarrforDiv);
            obj.getSetter("taborder").set("5");
            obj.style.set_border("1 solid skyblue");
            obj.style.set_bordertype("round 5 5");
            this.dlineCarrforDiv.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "2.64%", "715", null, "38", "0.64%", null, this);
            obj.set_taborder("2");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("carrforBtn", "absolute", "89.2%", "720", null, "28", "1.44%", null, this);
            obj.set_taborder("4");
            obj.set_text("이월");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "45.6%", "209", null, "30", "48.56%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("마감일자");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "53.52%", "271", null, "30", "40.64%", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_text("제");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "45.6%", "271", null, "30", "48.56%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("이월일자");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("dlinePridEd", "absolute", "60.8%", "204", "50", "35", null, null, this);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("carrforDateEd", "absolute", "66.64%", "269", null, "35", "18.48%", null, this);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("carrforPridEd", "absolute", "60.8%", "269", "50", "35", null, null, this);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("dlineDateEd", "absolute", "66.64%", "204", null, "35", "18.48%", null, this);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Div("ACdlineCarrforDiv", "absolute", "2.64%", "65", null, "37", "0.48%", null, this);
            obj.set_taborder("12");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "39.03%", "9", null, "19", "59.82%", null, this.ACdlineCarrforDiv);
            obj.getSetter("taborder").set("2");
            obj.set_text("~");
            this.ACdlineCarrforDiv.addChild(obj.name, obj);

            obj = new Static("accPridStc", "absolute", "3.76%", "71", null, "27", "89.84%", null, this);
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("taborder").set("13");
            obj.set_text("회계기수");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("accPridEd", "absolute", "11.52%", "69", null, "30", "78.08%", null, this);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("endDateEd", "absolute", "42.4%", "69", null, "30", "47.2%", null, this);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("startDateEd", "absolute", "29.44%", "69", null, "30", "60.16%", null, this);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "53.52%", "209", null, "30", "40.64%", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("제");
            obj.style.set_background("wheat");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "43.28%", "518", null, "196", "0.48%", null, this);
            obj.getSetter("taborder").set("19");
            obj.style.set_border("1 solid skyblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "62.32%", "629", null, "25", "0.56%", null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("1.  전표 마감 작업을 하시면 마감기수의 전표는 입력 수정이 통제 됩니다.");
            obj.style.set_bordertype("round 5 0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "48.64%", "133", null, "33", "39.12%", null, this);
            obj.getSetter("taborder").set("21");
            obj.set_text("기 수 이 월 작 업");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "62.32%", "661", null, "31", "1.04%", null, this);
            obj.getSetter("taborder").set("22");
            obj.set_text("2.  초기이월 마감일자가 없으면 이월테이타를 삭제하고 마감을 진행합니다.");
            obj.style.set_bordertype("round 5 0");
            this.addChild(obj.name, obj);

            obj = new Button("accPridPopupBtn", "absolute", "282", "67", "32", "32", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "668", "68", "90", "32", null, null, this);
            obj.set_taborder("25");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("dlineBtn", "absolute", "891", "720", "90", "32", null, null, this);
            obj.set_taborder("26");
            obj.style.set_background("@gradation URL('img::dLineBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("dlineCancelBtn", "absolute", "995", "720", "110", "32", null, null, this);
            obj.set_taborder("27");
            obj.style.set_background("@gradation URL('img::dLineXBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1242, 60, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar6.jpg')");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 702, this.dlineCarrforDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");

            	}
            );
            this.dlineCarrforDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 37, this.ACdlineCarrforDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.ACdlineCarrforDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AC_DlineCarrforForm");
            		p.set_titletext("마감 및 이월");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","dlinePridEd","value","dsAccPrid","accPrid");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","carrforDateEd","value","dsAccPrid","carrforDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","carrforPridEd","value","dsAccPrid","accPrid");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","dlineDateEd","value","dsAccPrid","dlineDate");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AC_DlineCarrforForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AC_DlineCarrforForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";  	

        

        this.AC_DlineCarrforForm_onload = function(obj,e)
        {
        	
        }

        
        /***************************************************************************************************
        *                                          버튼 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  회계기수 도움 검색버튼 클릭
        +-------------------------------------------------------------------------------------------------*/
        this.accPridPopupBtn_onclick = function(obj,e){
        	application.open("findAccPrid","acc::AE_AccPridHelpForm.xfdl",this.parent,{},"showtitlebar=true showstatusbar=false",0,0,500,350);
        }
        /********************************************************************************
         선택한 회계기수 셋팅
        ********************************************************************************/
        this.setArrRtn=function(arrRtn)		
        {
        	var i = 0;
        	this.accPridEd.set_value(arrRtn[i++]);
        	this.startDateEd.set_value(arrRtn[i++]);
        	this.endDateEd.set_value(arrRtn[i++]);
        }

        /********************************************************************************
         조회
        ********************************************************************************/
        this.searchBtn_onclick = function(obj,e)
        {
        	var accPrid = this.accPridEd.value;
        	var argument = 'accPrid='+accPrid;
        	var rowPos = this.dsService.findRow("serviceID", "findAccPrid");
        	this.dsService.setColumn(rowPos,"argument",argument);
        	this.gfnService("findAccPrid");
        }

        
        /*-------------------------------------------------------------------------------------------------+
         마감버튼 클릭
        +-------------------------------------------------------------------------------------------------*/
        this.dlineBtn_onclick = function(obj,e)
        {
        	var targetYn = this.dsAccPrid.rowcount;
         	if (targetYn == 1){
         		if(this.dsAccPrid.getColumn(0,"dlineYn") == "N"){	//->마감하는 경우  
         			var YN = application.confirm("회계기수를 마감하시겠습니까?");
         			if(YN == true){
        				var userId = application.gdsEmp.getColumn(0, "empNo");
         				this.dsAccPrid.setColumn(0, "dlineManCd", userId);
        				this.dsAccPrid.setColumn(0, "dlineYn" , "Y");
         				this.gfnService("modifyDlineYn");
         				this.searchBtn_onclick();
         			}
         		}
        	}
        }

        

        /*-------------------------------------------------------------------------------------------------+
        >>  마감취소 버튼 클릭
        +-------------------------------------------------------------------------------------------------*/
        this.dlineCancelBtn_onclick = function(obj,e){
        	var YN = application.confirm(this.MSG_ACC_DLINE_Q2);
         	if(YN == true && this.dsAccPrid.getColumn(0,"dlineYn") == "Y"){	
         		this.dsAccPrid.setColumn(0, "dlineManCd","");
         		this.dsAccPrid.setColumn(0, "dlineYn" , "N");
        		this.gfnService("modifyDlineYn");
        		this.searchBtn_onclick();
        	}
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  이월버튼 클릭
        +-------------------------------------------------------------------------------------------------*/

        this.carrforBtn_onclick = function(obj,e){
        	var dlineYn = this.dsAccPrid.getColumn(0,"dlineYn");
        	var carrforYn = this.dsAccPrid.getColumn(0,"carrforYn");
        	if(dlineYn == "Y" && carrforYn == "N"){			//마감완료 미이월 시
        		var YN = application.confirm ("회계기수를 이월처리 하시겠습니까?");
        		if(YN == true){
        			this.gfnService("executeCarrfor");
        		}else{
        			return;
        		}
        	}else{
        		if(dlineYn == "N"){ 				//미마감
        			alert("이월하기 위해서 마감작업이 선행되어야합니다.");
        			return;
        		}	
        		if(carrforYn == "Y"){ 				//기이월
        			alert("기 이월된 회계기수입니다.");
        			return;
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AC_DlineCarrforForm_onload, this);
            this.carrforBtn.addEventHandler("onclick", this.carrforBtn_onclick, this);
            this.Static11.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static10.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static12.addEventHandler("onclick", this.Static01_onclick, this);
            this.accPridStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Static08.addEventHandler("onclick", this.Static01_onclick, this);
            this.accPridPopupBtn.addEventHandler("onclick", this.accPridPopupBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.dlineBtn.addEventHandler("onclick", this.dlineBtn_onclick, this);
            this.dlineCancelBtn.addEventHandler("onclick", this.dlineCancelBtn_onclick, this);

        };

        this.loadIncludeScript("AC_DlineCarrforForm.xfdl");

       
    };
}
)();

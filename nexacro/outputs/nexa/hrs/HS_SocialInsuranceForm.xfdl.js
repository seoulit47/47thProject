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
                this.set_name("HS_SocialInsuranceForm");
                this.set_classname("HS_SocialInsuranceForm");
                this.set_titletext("HS_SocialInsuranceForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findsocialInsureList</Col><Col id=\"URL\">his::hrs/salBase/findsocialInsureList.do</Col><Col id=\"outData\">dsSocialInsur=dsSocialInsur</Col><Col id=\"callbackFunc\">findsocialInsureListCB</Col></Row><Row><Col id=\"serviceID\">batchSocialInsureProcess</Col><Col id=\"URL\">his::hrs/salBase/batchSocialInsureProcess.do</Col><Col id=\"inData\">dsSocialInsur=dsSocialInsur:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSocialInsur", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"belongYear\" type=\"STRING\" size=\"256\"/><Column id=\"hit\" type=\"STRING\" size=\"256\"/><Column id=\"ltcir\" type=\"STRING\" size=\"256\"/><Column id=\"npirr\" type=\"STRING\" size=\"256\"/><Column id=\"npbbr\" type=\"STRING\" size=\"256\"/><Column id=\"hireInsurRate\" type=\"STRING\" size=\"256\"/><Column id=\"safInsurRate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0.08%", "4", "1240", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "5.08%", "-4", null, "60", "75.2%", null, this.Div03);
            obj.getSetter("taborder").set("0");
            obj.set_text("사회보험 설정");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.25%", "69", null, "51", "1.66%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("belongStc", "absolute", "3.2%", "79", null, "28", "87.28%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("귀속연도");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "13.28%", "79", null, "30", "1005", null, this);
            obj.set_taborder("4");
            obj.set_value("2016");
            obj.getSetter("class").set("yearSpin");
            this.addChild(obj.name, obj);

            obj = new Static("yearStatic", "absolute", "19.6%", "79", null, "28", "78.56%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("년");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Button("socialInsureSearchBtn", "absolute", "272", "79", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("socialInsureSearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("socialInsureSearchBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "2.32%", "136", "1195", "346", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("#edececff");
            obj.style.set_border("0 none lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Tab("socialInsuranceTab", "absolute", "13.18%", "158", null, "261", "17.19%", null, this);
            obj.set_taborder("9");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("healthInsurance", this.socialInsuranceTab);
            obj.set_text("건강보험");
            this.socialInsuranceTab.addChild(obj.name, obj);
            obj = new Edit("healthInsuranceEd", "absolute", "44.16%", "78", null, "30", "32.77%", null, this.socialInsuranceTab.healthInsurance);
            obj.set_taborder("4");
            this.socialInsuranceTab.healthInsurance.addChild(obj.name, obj);
            obj = new Edit("longInsuranceEd", "absolute", "44.16%", "126", null, "30", "32.77%", null, this.socialInsuranceTab.healthInsurance);
            obj.set_taborder("5");
            this.socialInsuranceTab.healthInsurance.addChild(obj.name, obj);
            obj = new Static("Stc00", "absolute", "23.07%", "78", null, "28", "57.1%", null, this.socialInsuranceTab.healthInsurance);
            obj.getSetter("taborder").set("6");
            obj.set_text("건강보험부담율");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.socialInsuranceTab.healthInsurance.addChild(obj.name, obj);
            obj = new Static("Stc01", "absolute", "23.07%", "126", null, "28", "57.1%", null, this.socialInsuranceTab.healthInsurance);
            obj.getSetter("taborder").set("7");
            obj.set_text("장기요양보험료율");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.socialInsuranceTab.healthInsurance.addChild(obj.name, obj);
            obj = new Tabpage("publicPensionAmount", this.socialInsuranceTab);
            obj.set_text("국민연금");
            this.socialInsuranceTab.addChild(obj.name, obj);
            obj = new Static("Stc00", "absolute", "21.8%", "78", null, "28", "57.1%", null, this.socialInsuranceTab.publicPensionAmount);
            obj.getSetter("taborder").set("4");
            obj.set_text("국민연금 개인부담율");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.socialInsuranceTab.publicPensionAmount.addChild(obj.name, obj);
            obj = new Static("Stc01", "absolute", "21.8%", "126", null, "28", "57.1%", null, this.socialInsuranceTab.publicPensionAmount);
            obj.getSetter("taborder").set("5");
            obj.set_text("국민연금 사업자부담율");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.socialInsuranceTab.publicPensionAmount.addChild(obj.name, obj);
            obj = new Edit("ppsIndividualEd", "absolute", "44.16%", "78", null, "30", "32.77%", null, this.socialInsuranceTab.publicPensionAmount);
            obj.set_taborder("6");
            this.socialInsuranceTab.publicPensionAmount.addChild(obj.name, obj);
            obj = new Edit("ppsBusinessEd", "absolute", "44.16%", "126", null, "30", "32.77%", null, this.socialInsuranceTab.publicPensionAmount);
            obj.set_taborder("7");
            this.socialInsuranceTab.publicPensionAmount.addChild(obj.name, obj);
            obj = new Tabpage("hireInsurance", this.socialInsuranceTab);
            obj.set_text("고용/산재보험");
            this.socialInsuranceTab.addChild(obj.name, obj);
            obj = new Static("Stc00", "absolute", "21.8%", "54", null, "28", "57.1%", null, this.socialInsuranceTab.hireInsurance);
            obj.getSetter("taborder").set("7");
            obj.set_text("고용보험요율");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.socialInsuranceTab.hireInsurance.addChild(obj.name, obj);
            obj = new Edit("hireInsuranceEd", "absolute", "44.16%", "54", null, "30", "32.77%", null, this.socialInsuranceTab.hireInsurance);
            obj.set_taborder("8");
            this.socialInsuranceTab.hireInsurance.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "17.86%", "131", null, "16", "66.24%", null, this.socialInsuranceTab.hireInsurance);
            obj.getSetter("taborder").set("9");
            obj.set_text("- 사업주");
            obj.style.set_font("9 Dotum");
            this.socialInsuranceTab.hireInsurance.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "17.86%", "147", null, "16", "11.11%", null, this.socialInsuranceTab.hireInsurance);
            obj.getSetter("taborder").set("10");
            obj.set_text("150인 미만기업                                                                0.25%");
            obj.style.set_font("9 Dotum");
            this.socialInsuranceTab.hireInsurance.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "17.86%", "163", null, "16", "8.44%", null, this.socialInsuranceTab.hireInsurance);
            obj.getSetter("taborder").set("11");
            obj.set_text("150인 이상기업(우선 지원대상기업)                                    0.45%");
            obj.style.set_font("9 Dotum");
            this.socialInsuranceTab.hireInsurance.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "17.86%", "178", null, "16", "11.39%", null, this.socialInsuranceTab.hireInsurance);
            obj.getSetter("taborder").set("12");
            obj.set_text("150인 이상 ~ 1000인 미만기업(우선지원 대상기업 제외)         0.65%");
            obj.style.set_font("9 Dotum");
            this.socialInsuranceTab.hireInsurance.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "17.86%", "193", null, "19", "4.36%", null, this.socialInsuranceTab.hireInsurance);
            obj.getSetter("taborder").set("13");
            obj.set_text("1000인 이상 기업 및 국가, 지방자치단체가 직접 행하는 사업   0.85%");
            obj.style.set_font("9 Dotum");
            this.socialInsuranceTab.hireInsurance.addChild(obj.name, obj);
            obj = new Static("Stc01", "absolute", "21.8%", "94", null, "28", "57.1%", null, this.socialInsuranceTab.hireInsurance);
            obj.getSetter("taborder").set("14");
            obj.set_text("산재보험율");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.socialInsuranceTab.hireInsurance.addChild(obj.name, obj);
            obj = new Edit("workersEd", "absolute", "44.02%", "93", null, "30", "32.91%", null, this.socialInsuranceTab.hireInsurance);
            obj.set_taborder("15");
            this.socialInsuranceTab.hireInsurance.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "906", "427", "110", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("batchBtn");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("batchBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1240, 60, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("transparent URL('img::titleBar4.jpg')");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1195, 346, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.style.set_background("#edececff");
            		p.style.set_border("0 none lightsteelblue");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.socialInsuranceTab.healthInsurance,
            	//-- Layout function
            	function(p) {
            		p.set_text("건강보험");

            	}
            );
            this.socialInsuranceTab.healthInsurance.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.socialInsuranceTab.publicPensionAmount,
            	//-- Layout function
            	function(p) {
            		p.set_text("국민연금");

            	}
            );
            this.socialInsuranceTab.publicPensionAmount.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.socialInsuranceTab.hireInsurance,
            	//-- Layout function
            	function(p) {
            		p.set_text("고용/산재보험");

            	}
            );
            this.socialInsuranceTab.hireInsurance.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HS_SocialInsuranceForm");
            		p.set_titletext("HS_SocialInsuranceForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HS_SocialInsuranceForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HS_SocialInsuranceForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사 사회보험 설정 관리               							*
        *                                                                   *
        * @Path		    사회보험 설정      								*
        * @Description  사회보험 요율을 설정할 수 있다.					*
        * @Author		윤유진   					                        *
        * 								                                    *
        * Created on 2016. 6.  2.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";

        this.socialInsureSearchBtn_onclick = function(obj,e){		
        	var year = this.yearSpin.text;
        	this.dsService.setColumn(0,4,"year="+year);
        	this.gfnService("findsocialInsureList", false);
        	trace(this.dsSocialInsur.saveXML);	
        	this.setCode();
        }

        this.findsocialInsureListCB = function(svcID,errorCode,errorMsg){			
        	if (errorCode < 1) {
        		trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
        		this.gfnErrorPopup(svcID, errorMsg);
        	} else {
                // 트랜잭션 완료
                trace("===== " + svcID + " 트랜잭션 성공 =====\n");
        		if(this.dsSocialInsur.getRowCount() == 0){
        			if(confirm("해당연도에 등록된 사회보험이 없습니다. 등록하시겠습니까?")){
        				this.dsSocialInsur.addRow();
        				this.socialInsuranceTab.healthInsurance.healthInsuranceEd.set_enable(true);
        				this.socialInsuranceTab.healthInsurance.longInsuranceEd.set_enable(true);
        				this.socialInsuranceTab.publicPensionAmount.ppsIndividualEd.set_enable(true);
        				this.socialInsuranceTab.publicPensionAmount.ppsBusinessEd.set_enable(true);
        				this.socialInsuranceTab.hireInsurance.hireInsuranceEd.set_enable(true);
        				this.socialInsuranceTab.hireInsurance.workersEd.set_enable(true);
        			}
        		}else{
        			//등록된 값이 있을 경우 비활성화
        			this.socialInsuranceTab.healthInsurance.healthInsuranceEd.set_enable(false);
        			this.socialInsuranceTab.healthInsurance.longInsuranceEd.set_enable(false);
        			this.socialInsuranceTab.publicPensionAmount.ppsIndividualEd.set_enable(false);
        			this.socialInsuranceTab.publicPensionAmount.ppsBusinessEd.set_enable(false);
        			this.socialInsuranceTab.hireInsurance.hireInsuranceEd.set_enable(false);
        			this.socialInsuranceTab.hireInsurance.workersEd.set_enable(false);
        		}
        	}
        }

        this.setCode = function(){
        	//건강보험셋팅
        	var hit = this.dsSocialInsur.getColumn(0,"hit");
        	this.socialInsuranceTab.healthInsurance.healthInsuranceEd.set_value(hit);
        	var ltcir = this.dsSocialInsur.getColumn(0,"ltcir");
        	this.socialInsuranceTab.healthInsurance.longInsuranceEd.set_value(ltcir);
        		
        	//국민연금셋팅
        	var npirr = this.dsSocialInsur.getColumn(0,"npirr");
        	this.socialInsuranceTab.publicPensionAmount.ppsIndividualEd.set_value(npirr);
        	var npbbr = this.dsSocialInsur.getColumn(0,"npbbr");
        	this.socialInsuranceTab.publicPensionAmount.ppsBusinessEd.set_value(npbbr);
        	
        	//고용산재보험셋팅
        	var hireInsurRate = this.dsSocialInsur.getColumn(0,"hireInsurRate");
        	this.socialInsuranceTab.hireInsurance.hireInsuranceEd.set_value(hireInsurRate);
        	var safInsurRate = this.dsSocialInsur.getColumn(0,"safInsurRate");
        	this.socialInsuranceTab.hireInsurance.workersEd.set_value(safInsurRate);
        }

        //일괄처리
        this.batchBtn_onclick = function(obj,e){	
        	if(confirm("일괄처리 하시겠습니까?")){		
        		var hit = this.socialInsuranceTab.healthInsurance.healthInsuranceEd.text;
        		var ltcir = this.socialInsuranceTab.healthInsurance.longInsuranceEd.text;
        		var npirr = this.socialInsuranceTab.publicPensionAmount.ppsIndividualEd.text;
        		var npbbr = this.socialInsuranceTab.publicPensionAmount.ppsBusinessEd.text;
        		var hireInsurRate = this.socialInsuranceTab.hireInsurance.hireInsuranceEd.text;
        		var safInsurRate = this.socialInsuranceTab.hireInsurance.workersEd.text;
        	
        		var argument = "hit='" + hit + "' ltcir='"+ltcir + "' npirr='"+npirr + "' npbbr='" + npbbr 
        						+ "' hireInsurRate='"+hireInsurRate + "' safInsurRate='" + safInsurRate 
        						+ "' belongYear='" + this.yearSpin.text + "'";
        		
        		var row = this.dsService.findRow('serviceID', "batchSocialInsureProcess");
        		this.dsService.setColumn(row, "argument", argument);
        		this.gfnService("batchSocialInsureProcess");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.socialInsureSearchBtn.addEventHandler("onclick", this.socialInsureSearchBtn_onclick, this);
            this.socialInsuranceTab.hireInsurance.Static05.addEventHandler("onclick", this.socialInsuranceTab_hireInsurance_publicPensionDiv00_Static01_onclick, this);
            this.socialInsuranceTab.hireInsurance.Static01.addEventHandler("onclick", this.socialInsuranceTab_hireInsurance_publicPensionDiv00_Static01_onclick, this);
            this.socialInsuranceTab.hireInsurance.Static02.addEventHandler("onclick", this.socialInsuranceTab_hireInsurance_publicPensionDiv00_Static01_onclick, this);
            this.socialInsuranceTab.hireInsurance.Static03.addEventHandler("onclick", this.socialInsuranceTab_hireInsurance_publicPensionDiv00_Static01_onclick, this);
            this.socialInsuranceTab.hireInsurance.Static04.addEventHandler("onclick", this.socialInsuranceTab_hireInsurance_publicPensionDiv00_Static01_onclick, this);
            this.batchBtn.addEventHandler("onclick", this.batchBtn_onclick, this);

        };

        this.loadIncludeScript("HS_SocialInsuranceForm.xfdl");

       
    };
}
)();

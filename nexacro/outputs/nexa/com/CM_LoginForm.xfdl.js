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
                this.set_name("CM_LoginForm");
                this.set_classname("CM_LoginForm");
                this.set_titletext("로그인");
                this._setFormPosition(0,0,506,350);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">loginCheck</Col><Col id=\"URL\">his::com/loginCheck.do</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">loginCallback</Col><Col id=\"outData\">gdsEmp=gdsEmp</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "19.76%", "176", null, "30", "62.45%", null, this);
            obj.set_taborder("0");
            obj.set_text("ID");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("idCdEd", "absolute", "39.13%", "176", null, "30", "43.08%", null, this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_background("white");
            obj.style.set_border("1 solid darkgray");
            obj.style.set_align("center middle");
            obj.set_value("43000");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "19.76%", "218", null, "30", "62.45%", null, this);
            obj.set_taborder("2");
            obj.set_text("PW");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("pwEd", "absolute", "39.13%", "218", null, "30", "24.31%", null, this);
            obj.set_taborder("3");
            obj.style.set_align("center middle");
            obj.set_password("true");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new Button("loginBtn", "absolute", "144", "280", "90", "32", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "252", "280", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("idNmEd", "absolute", "57.91%", "176", null, "30", "24.31%", null, this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("background", "readonly", "white");
            obj.style.setStyleValue("border", "readonly", "1 solid darkgray");
            obj.set_value("허준");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 506, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CM_LoginForm");
            		p.set_titletext("로그인");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CM_LoginForm.xfdl", "scripts::hrsScripts.xjs");
        this.addIncludeScript("CM_LoginForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("CM_LoginForm.xfdl", function() {
        /********************************************************************************                                                                            
        로그인 화면                                             						                                                                         
        @Path			공통              				   				
        @Description	로그인을 하기 위한 폼							
        @Author	  		한수정				    			                        								                                            
        @Create         2016. 6. 14.                             		                    				                                            
        ********************************************************************************/

        // 공통 스크립트
        //include "scripts::hrsScripts.xjs";
        //include "scripts::commonScripts.xjs"; 

        // 아이디 컴포넌트 클릭
        this.id_oneditclick = function(obj,e)
        {
        	this.gfnEmpPopup();
        }

        this.setEmpInfo=function(array) {
        	this.idCdEd.set_value(array[0]);
        	this.idNmEd.set_value(array[1]);
        }

        
        // 로그인버튼 클릭
        this.loginBtn_onclick = function(obj,e)
        {
        	var empId=this.idCdEd.value;
        	var empPw=this.pwEd.value;
        	
        	if(this.gfnIsNull(empId)){
        		alert("사원번호를 입력해주세요.");
        	}else if(this.gfnIsNull(empPw)){
        		alert("비밀번호를 입력해주세요.");
        	}else{
        		var argument = "empNo='"+empId+"' empPw='"+empPw+"'";
        		var row = this.dsService.findRow('serviceID' , "loginCheck");
        		this.dsService.setColumn(row, "argument", argument);
        		this.gfnService("loginCheck");
        	}
        }
        this.message="";
        //로그인 콜백
        this.loginCallback = function(svcID,ErrorCode,ErrorMsg)
        {
        alert(ErrorCode + ErrorMsg + this.message);
        	if(ErrorCode == 1) {
        		alert(this.idNmEd.value+"님 환영합니다." + ErrorCode + ErrorMsg);
        		application.mainframe.visible = true; 
        		trace(application.gdsEmp.saveXML());
        		this.close();
        	}else if(ErrorCode == 2){	
        		alert("비밀번호가 맞지 않습니다." + ErrorCode + ErrorMsg + this.message);
        		this.pwEd.set_value("");
        	}
        }

        // 닫기 버튼 클릭
        this.closeBtn_onclick = function(obj,e)
        {
        	application.exit();
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.idCdEd.addEventHandler("oneditclick", this.id_oneditclick, this);
            this.loginBtn.addEventHandler("onclick", this.loginBtn_onclick, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);
            this.idNmEd.addEventHandler("oneditclick", this.id_oneditclick, this);

        };

        this.loadIncludeScript("CM_LoginForm.xfdl");

       
    };
}
)();

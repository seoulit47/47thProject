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
                this.set_name("CM_ErrorPopupForm");
                this.set_classname("CM_ErrorPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,600,350);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div02", "absolute", "0%", "0", "583", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar3.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "9.83%", "-5", null, "60", "62.67%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("시스템 에러");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc", "absolute", "5.33%", "61", "88", "27", null, null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("오류내용");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("errEd", "absolute", "5.33%", "95", null, "33", "5.5%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new TextArea("errMsgArea", "absolute", "5.33%", "133", null, "163", "5.33%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("reportError", "absolute", "72.67%", "306", null, "30", "5.5%", null, this);
            obj.set_taborder("5");
            obj.set_text("시스템에러 접수");
            obj.style.set_background("#848484ff");
            obj.style.set_color("whitesmoke");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("okBtn", "absolute", "57.83%", "306", null, "30", "29.33%", null, this);
            obj.set_taborder("7");
            obj.set_text("확인");
            obj.style.set_background("#848484ff");
            obj.style.set_color("whitesmoke");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CM_ErrorPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CM_ErrorPopupForm.xfdl", function() {
        this.errorForm_onload=function(obj,e)
        {
        	this.errEd.set_value(this.parent.svcID); 
        	this.errMsgArea.set_value(this.parent.errorMsg); 
        }

        this.okBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        this.reportError_onclick = function(obj,e)
        {
        	if(confirm("오류를 접수하시겠습니까?")){
        		alert("접수되었습니다.");
        /*	var extCom = new ExtCommon();
        	var fileName=extCom.getTime();
        		
        	//모니터 캡쳐
        	var Full_ret = extCom.fullScreenCapture("C:\\Users\\Administrator\\Documents\\"+fileName+".bmp",1);

        	application.open("receptError","com::CMerrorMngnt.xfdl","",{file:fileName},"showtitlebar=ture showstatusbar=false",110,110,this);

        	this.close();
        	
        	*/
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.reportError.addEventHandler("onclick", this.reportError_onclick, this);
            this.okBtn.addEventHandler("onclick", this.okBtn_onclick, this);

        };

        this.loadIncludeScript("CM_ErrorPopupForm.xfdl");

       
    };
}
)();

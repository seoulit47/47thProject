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
                this.set_name("AR_ResolBrCauPopupForm");
                this.set_classname("AR_ResolBrCauPopupForm");
                this.set_titletext("결의서 반려사유 입력 화면");
                this._setFormPosition(0,0,625,128);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "-2.56%", "-4", "625", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "8.16%", "-4", null, "60", "54.08%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("결의서 반려 사유");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "1.92%", "45", null, "73", "1.44%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Edit("resolBrEd", "absolute", "17.55%", "6", null, "27", "2.65%", null, this.Div01);
            obj.set_taborder("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("subCodeStc", "absolute", "3.2%", "51", null, "24", "82.08%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("반려사유");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("resolBrBtn", "absolute", "414", "86", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::returnBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closedBtn", "absolute", "510", "86", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 625, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 73, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 625, 128, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AR_ResolBrCauPopupForm");
            		p.set_titletext("결의서 반려사유 입력 화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("AR_ResolBrCauPopupForm.xfdl", function() {

        // 접수반려 버튼 클릭이벤트
        this.resolBrBtn_onclick = function(obj,e)
        {
        	//반려사유를 작성하지 않았을 때 실행
        	if(this.Div01.resolBrEd.value==null){
        		alert("반려사유를 작성하여 주시기 바랍니다");
        	}else{
        		//부모창에 넘길 배열변수 선언		
        		var resolBrCau = this.Div01.resolBrEd.value;		
        		//화면닫으며 변수를 넘긴다.
        		this.close(resolBrCau);
        		alert("정상적으로 반려되었습니다.");
        	}
        }

        // 닫기 버튼 클릭이벤트
        this.closedBtn_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolBrBtn.addEventHandler("onclick", this.resolBrBtn_onclick, this);
            this.closedBtn.addEventHandler("onclick", this.closedBtn_onclick, this);

        };

        this.loadIncludeScript("AR_ResolBrCauPopupForm.xfdl");

       
    };
}
)();

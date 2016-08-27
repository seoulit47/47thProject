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
                this.set_name("AE_accCodePopupForm");
                this.set_classname("AE_accCodePopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,400,129);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAccAcnt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"parentAcntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntDiv\" type=\"STRING\" size=\"256\"/><Column id=\"creDebDiv\" type=\"STRING\" size=\"256\"/><Column id=\"assiTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"budgYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"incomArtiCd\" type=\"STRING\" size=\"256\"/><Column id=\"cashArtiCd\" type=\"STRING\" size=\"256\"/><Column id=\"inputYn\" type=\"STRING\" size=\"256\"/><Column id=\"deductYn\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "1.5%", "4", null, "124", "1.75%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("#bbffbbff");
            obj.style.set_color("azure");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new TextArea("descriptionArea", "absolute", "30", "13", "329", "66", null, null, this);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaArea");
            this.addChild(obj.name, obj);

            obj = new Button("regSameLevBtn", "absolute", "9.25%", "88", null, "30", "66%", null, this);
            obj.set_taborder("2");
            obj.set_text("동일수준입력");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.style.set_cursor("hand");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("regLowerLevBtn", "absolute", "38.25%", "88", null, "30", "37%", null, this);
            obj.set_taborder("3");
            obj.set_text("하위수준입력");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.style.set_cursor("hand");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "67.25%", "88", null, "30", "10%", null, this);
            obj.set_taborder("4");
            obj.set_text("닫  기");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.style.set_cursor("hand");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 129, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AE_accCodePopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("AE_AccCodePopupForm.xfdl", function() {
        var acntCd;
        var acntNm;
        var lev;
        var parentAcntCd;
        var accYear;

        
        //onload 함수
        this.AE_accCodePopupForm_onload = function(obj,e)
        {
        	this.descriptionArea.insertText(this.parent.acntNm + "을 선택하셨습니다 \n 처리방법을 선택해주세요");
        	this.dsAccAcnt.copyData(this.parent.dsAccAcnt);	//넘어온 데이터셋 복사
        	acntCd = this.parent.acntCd;
        	acntNm = this.parent.acntNm;
        	lev = this.parent.lev;
        	accYear = this.parent.accYear;
        	parentAcntCd = this.parent.parentAcntCd;
        	//alert(accYear);
        }

        

        //동일수준 입력
        this.regSameLevBtn_onclick=function(obj,e)
        {
        	alert("동일수준");
        	
        	var nRow = this.dsAccAcnt.findRow('acntCd', acntCd);
        	
        	if(lev==1){
        		var Row = this.dsAccAcnt.findRow("lev",lev,nRow+1);
        	}else{
        		var Row = this.dsAccAcnt.findRow('lev',lev-1,nRow+1);
        	}
        	
        	if(Row==-1){
        		var iRow = this.parent.dsAccAcnt.insertRow(nRow+1);
        	}else{
        		var iRow = this.parent.dsAccAcnt.insertRow(Row);
        	}

        	this.parent.dsAccAcnt.setColumn(iRow ,"lev" , lev);
        	this.parent.dsAccAcnt.setColumn(iRow ,"parentAcntCd" , parentAcntCd);
        	this.parent.dsAccAcnt.setColumn(iRow ,"accYear" , accYear);
        	
        	this.close();
        }

        
        //하위수준 입력
        this.regLowerLevBtn_onclick=function(obj,e)
        {
        	alert("하위수준");
        	var nRow = this.dsAccAcnt.findRow('acntCd',acntCd);
        	var Row = this.dsAccAcnt.findRow('lev',lev,nRow+1);
        	
        	if(Row==-1){
        		var iRow = this.parent.dsAccAcnt.insertRow(nRow+1);
        	}else{
        		var iRow = this.parent.dsAccAcnt.insertRow(Row);
        	}
        	
        	this.parent.dsAccAcnt.setColumn(iRow ,"lev" , parseInt(lev)+1);
        	this.parent.dsAccAcnt.setColumn(iRow ,"parentAcntCd" , acntCd);
        	this.parent.dsAccAcnt.setColumn(iRow ,"accYear" , accYear);

        	this.close();
        }

        
        //닫기
        this.closeBtn_onclick=function(obj,e)
        {
        	this.close();
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AE_accCodePopupForm_onload, this);
            this.descriptionArea.addEventHandler("oneditclick", this.descriptionArea_oneditclick, this);
            this.regSameLevBtn.addEventHandler("onclick", this.regSameLevBtn_onclick, this);
            this.regLowerLevBtn.addEventHandler("onclick", this.regLowerLevBtn_onclick, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);

        };

        this.loadIncludeScript("AE_AccCodePopupForm.xfdl");

       
    };
}
)();

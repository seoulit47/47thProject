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
                this.set_name("AB_bimokPopupForm");
                this.set_classname("AB_bimokPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,400,150);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBudgBimok", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"bimokNm\" type=\"STRING\" size=\"256\"/><Column id=\"parentBimok\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokLevel\" type=\"STRING\" size=\"256\"/><Column id=\"finYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"goveAprcYn\" type=\"STRING\" size=\"256\"/><Column id=\"budgGuide\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "1.5%", "8", null, "137", "1.75%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("powderblue");
            obj.style.set_color("powderblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new TextArea("descriptionArea", "absolute", "3.75%", "21", null, "74", "3.75%", null, this);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaArea");
            this.addChild(obj.name, obj);

            obj = new Button("addSameLevBtn", "absolute", "9.5%", "108", null, "30", "65.75%", null, this);
            obj.set_taborder("2");
            obj.set_text("동일수준입력");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addLowerLevBtn", "absolute", "38.5%", "108", null, "30", "36.75%", null, this);
            obj.set_taborder("3");
            obj.set_text("하위수준입력");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "67.5%", "108", null, "30", "9.75%", null, this);
            obj.set_taborder("4");
            obj.set_text("닫  기");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 150, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AB_bimokPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("AB_BimokPopupForm.xfdl", function() {

        var accYear;
        var bimokNm;
        var bimokCd;
        var bimokLevel;
        var finYn;
        var parentBimok; 

        //*******
        //온로드
        //*******
        this.AB_bimokPopupForm_onload = function(obj,e)
        {
        	this.descriptionArea.set_value(this.parent.bimokNm + "을 선택하셨습니다 \n 처리방법을 선택해주세요");
        	this.dsBudgBimok.copyData(this.parent.dsBudgBimok);
        	
        	accYear = this.parent.accYear;
        	bimokNm = this.parent.bimokNm;
        	bimokCd = this.parent.bimokCd;
        	bimokLevel = this.parent.bimokLevel;
        	finYn = this.parent.finYn;
        	parentBimok = this.parent.parentBimok;
        	alert(bimokNm+"-"+bimokCd+"-"+bimokLevel+"-"+finYn+"-"+parentBimok);
        }

        //**************
        //동일수준입력
        //**************
        this.addSameLevBtn_onclick = function(obj,e)
        {	alert("111");
        	var nRow = this.dsBudgBimok.findRow('bimokCd',bimokCd);
        	alert(bimokCd+"Row = "+nRow);
        	alert("bimokLevel = "+bimokLevel);
        	if(bimokLevel==1){
        		var Row = this.dsBudgBimok.findRow('bimokLevel',bimokLevel,nRow+1);
        	}else{
        		var Row = this.dsBudgBimok.findRow('bimokLevel',bimokLevel-1,nRow+1);
        	}
        	alert(Row);
        	if(Row==-1){
        		var iRow = this.parent.dsBudgBimok.insertRow(nRow+1);
        	}else{
        		var iRow = this.parent.dsBudgBimok.insertRow(Row);
        	}
        	alert("444");
        	this.parent.dsBudgBimok.setColumn(iRow ,"bimokLevel" , bimokLevel);
        	this.parent.dsBudgBimok.setColumn(iRow ,"finYn" , 'Y');
        	this.parent.dsBudgBimok.setColumn(iRow ,"parentBimok" , parentBimok);
        	this.parent.dsBudgBimok.setColumn(iRow ,"accYear" , accYear);
        	this.close();
        }

        //**************
        //하위수준입력
        //**************
        this.addLowerLevBtn_onclick = function(obj,e)
        {
        	var nRow = this.dsBudgBimok.findRow('bimokCd',bimokCd);
        	var Row = this.dsBudgBimok.findRow('bimokLevel',bimokLevel,nRow+1);
        	
        	if(Row==-1){
        		var iRow = this.parent.dsBudgBimok.insertRow(nRow+1);
        	}else{
        		var iRow = this.parent.dsBudgBimok.insertRow(Row);
        	}
        	
        	this.parent.dsBudgBimok.setColumn(iRow ,"bimokLevel" , parseInt(bimokLevel)+1);
        	
        	if(finYn == 'Y'){
        		this.parent.dsBudgBimok.setColumn(nRow ,"finYn" , 'N');
        		this.parent.dsBudgBimok.setColumn(iRow ,"finYn" , 'Y');
        	}
        	
        	this.parent.dsBudgBimok.setColumn(iRow ,"finYn" , 'Y');
        	this.parent.dsBudgBimok.setColumn(iRow ,"parentBimok" , bimokCd);
        	this.parent.dsBudgBimok.setColumn(iRow ,"accYear" , accYear);
        	this.close();
        }

        //*****
        //닫기
        //*****
        this.closeBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AB_bimokPopupForm_onload, this);
            this.addSameLevBtn.addEventHandler("onclick", this.addSameLevBtn_onclick, this);
            this.addLowerLevBtn.addEventHandler("onclick", this.addLowerLevBtn_onclick, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);

        };

        this.loadIncludeScript("AB_BimokPopupForm.xfdl");

       
    };
}
)();

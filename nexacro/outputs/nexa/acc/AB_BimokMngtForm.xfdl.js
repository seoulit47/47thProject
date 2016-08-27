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
                this.set_name("AB_bimokMngtForm");
                this.set_classname("AB_bimokMngtForm");
                this.set_titletext("예산비목코드등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGB001", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGB002", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUseYN", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">Y</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findBimokList</Col><Col id=\"URL\">his::acc/budget/findBudgBimokList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsBudgBimok=dsBudgBimok</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">batchBimokProcess</Col><Col id=\"URL\">his::acc/budget/batchBimokProcess.do</Col><Col id=\"inData\">dsBudgBimok=dsBudgBimok:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">copyBimok</Col><Col id=\"URL\">his::acc/budget/copyBimok.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsBudgBimok=dsBudgBimok</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYn", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("useYN", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">All</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBudgBimok", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"bimokNm\" type=\"STRING\" size=\"256\"/><Column id=\"parentBimok\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokLevel\" type=\"STRING\" size=\"256\"/><Column id=\"finYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"goveAprcYn\" type=\"STRING\" size=\"256\"/><Column id=\"budgGuide\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GB001</Col><Col id=\"dsName\">dsGB001</Col></Row><Row><Col id=\"code\">GB002</Col><Col id=\"dsName\">dsGB002</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div05", "absolute", "0%", "4", "1246", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("titleEdt02", "absolute", "4.4%", "10", null, "44", "77.76%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("예산비목코드등록");
            obj.style.set_font("bold 15 Dotum");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "1.28%", "71", null, "53", "1.04%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("stc_year", "absolute", "2.16%", "84", null, "27", "90.8%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("회계년도");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "9.92%", "82", null, "30", "80.64%", null, this);
            obj.set_taborder("4");
            obj.set_value("2016");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bimok", "absolute", "20.64%", "84", null, "27", "72.32%", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("예산비목");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("bimokEd", "absolute", "28.4%", "84", null, "26", "61.6%", null, this);
            obj.set_taborder("6");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_acc", "absolute", "39.68%", "84", null, "27", "53.28%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("계정과목");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("acntEd", "absolute", "47.44%", "83", null, "26", "42.56%", null, this);
            obj.set_taborder("8");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_useYN", "absolute", "58.8%", "83", null, "27", "34.16%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("사용여부");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Radio("useYnRadio", "absolute", "67.6%", "84", null, "26", "23.2%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_columncount("3");
            obj.set_innerdataset("@useYN");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Button("searchBtn", "absolute", "957", "81", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("bimokListGrid", "absolute", "1.28%", "140", null, "584", "76.16%", null, this);
            obj.set_taborder("12");
            obj.set_binddataset("dsBudgBimok");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"332\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:bimokNm\" treestartlevel=\"1\" treelevel=\"bind:bimokLevel\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("bimokGrid", "absolute", "24.88%", "140", null, "584", "1.04%", null, this);
            obj.set_taborder("13");
            obj.set_binddataset("dsBudgBimok");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"74\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"136\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"수준\"/><Cell row=\"1\"/></Cell><Cell col=\"1\" colspan=\"2\"><Cell/><Cell col=\"1\" style=\"align:left;\" text=\"예산비목\"/></Cell><Cell col=\"3\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"상위코드\"/><Cell row=\"1\"/></Cell><Cell col=\"4\" colspan=\"2\"><Cell/><Cell col=\"1\" style=\"align:left;\" text=\"계정\"/></Cell><Cell col=\"6\" colspan=\"2\"><Cell/><Cell col=\"1\" style=\"align:left;\" text=\"보조과목\"/></Cell><Cell col=\"8\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"최종여부\"/><Cell row=\"1\"/></Cell><Cell col=\"9\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"사용여부\"/><Cell row=\"1\"/></Cell><Cell row=\"1\" col=\"1\" edittype=\"text\" text=\"코드\"/><Cell row=\"1\" col=\"2\" text=\"예산비목명\"/><Cell row=\"1\" col=\"4\" text=\"코드\"/><Cell row=\"1\" col=\"5\" text=\"계정명칭\"/><Cell row=\"1\" col=\"6\" text=\"코드\"/><Cell row=\"1\" col=\"7\" text=\"보조과목명\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:bimokLevel\" combodataset=\"dsGB001\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:bimokCd\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:bimokNm\"/><Cell col=\"3\" text=\"bind:parentBimok\"/><Cell col=\"4\" edittype=\"expand\" text=\"bind:acntCd\" expandshow=\"show\" expandchar=\"...\"/><Cell col=\"5\" text=\"bind:acntNm\"/><Cell col=\"6\" edittype=\"expand\" text=\"bind:assiSubCd\" expandshow=\"show\" expandchar=\"...\"/><Cell col=\"7\" text=\"bind:assiSubNm\"/><Cell col=\"8\" text=\"bind:finYn\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:useYn\" combodataset=\"useYN\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("copyBtn", "absolute", "67.28%", "732", null, "30", "25.76%", null, this);
            obj.set_taborder("14");
            obj.set_text("전년도복사");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "941", "731", "90", "32", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "1044", "731", "90", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "1148", "731", "90", "32", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AB_bimokMngtForm");
            		p.set_titletext("예산비목코드등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AB_BimokMngtForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AB_BimokMngtForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        var cell;
        var accYear;

        //*******
        //Onload
        //*******
        this.AB_bimokMngtForm_onload = function(obj,e){
        	this.gfnBind();
        }

        //*****
        //조회
        //*****
        this.searchBtn_onclick = function(obj,e){
        	accYear = this.yearSpin.value;
        	var bimokNm = this.bimokEd.value;
        	var accAcntNm = this.acntEd.value;
        	var useYn = this.useYnRadio.value;
        	//alert(useYn);
        	var argument = 'accYear='+accYear+' bimokNm='+bimokNm+' accAcntNm='+accAcntNm+' useYn='+useYn;
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findBimokList");
        }

        //*****
        //추가
        //*****
        this.addBtn_onclick = function(obj,e){
        	var bimokNm = this.dsBudgBimok.getColumn(this.dsBudgBimok.rowposition ,"bimokNm");
        	var bimokCd = this.dsBudgBimok.getColumn(this.dsBudgBimok.rowposition ,"bimokCd");
        	var bimokLevel = this.dsBudgBimok.getColumn(this.dsBudgBimok.rowposition ,"bimokLevel");
        	var finYn = this.dsBudgBimok.getColumn(this.dsBudgBimok.rowposition ,"finYn");
        	var parentBimok = this.dsBudgBimok.getColumn(this.dsBudgBimok.rowposition ,"parentBimok");
        	
        //	alert(bimokNm+"-"+bimokCd+"-"+bimokLevel+"-"+finYn+"-"+parentBimok);
        	
        	if (bimokNm == null && this.dsBudgBimok.rowcount != 0){
        		alert("비목을 선택해주세요");
        		return;
        	}else if(this.dsBudgBimok.rowcount == 0){
        		var iRow = this.dsBudgBimok.addRow(0);
        		
        		this.dsBudgBimok.setColumn(iRow ,"bimokLevel" , 1);
        		this.dsBudgBimok.setColumn(iRow ,"finYn" , 'Y');
        		this.dsBudgBimok.setColumn(iRow ,"accYear" , this.yearSpin.value);
        	}else{
        		application.open("Confirm"
        						,"acc::AB_BimokPopupForm.xfdl"
        						,obj.parent
        						,{accYear:accYear, bimokNm:bimokNm, bimokCd:bimokCd, bimokLevel:bimokLevel, finYn:finYn, parentBimok:parentBimok, dsBudgBimok:this.dsBudgBimok}
        						,''
        						,e.screenX
        						,e.screenY);
        	}
        }

        //*****
        //삭제
        //*****
        this.delBtn_onclick = function(obj,e){
        	var finYn = this.dsBudgBimok.getColumn(this.dsBudgBimok.rowposition ,"finYn");
        	
        	if(finYn == 'Y'){
        		this.dsBudgBimok.deleteRow(this.dsBudgBimok.rowposition);
        	} else {
        	alert('자식 데이터가 있습니다.');
        		return;
        	}
        }

        //*************
        //전년도 복사
        //*************
        this.copyBtn_onclick = function(obj,e){
        	var year = this.yearSpin.value;
        	alert(year);
        	this.dsService.setColumn(2,"argument","year="+year);
        	alert(this.dsService.setColumn(2,"argument","year="+year));
        	this.gfnService("copyBimok");
        }

        //*****
        //저장
        //*****
        this.saveBtn_onclick = function(obj,e){
        	this.gfnService("batchBimokProcess");
        }

        //*************
        //그리드 함수
        //*************
        this.bimokGrid_onexpanddown = function(obj,e){
        	cell=e.cell;
        	
        	if(e.cell==4){
        	alert(e.cell);
        		var accCodeArr = application.open("계정과목도움","acc::AE_AcntCodePopupForm.xfdl",this.parent,{gubun:'acntCD'},'',e.screenX,e.screenY);
        	}else if(e.cell==6){
        		alert(e.cell);
        		var acntCd = this.dsBudgBimok.getColumn(this.dsBudgBimok.rowposition,"acntCd");
        		var assiSubArr= application.open("보조과목도움","acc::AE_AccAssiSubPopupForm.xfdl",this.parent,{acntCd:acntCd},'',e.screenX,e.screenY);
        	}
        }

        
        this.setCode = function(code,arrRtn) {
        	if(cell==4){
        	alert(cell);
        		this.dsBudgBimok.setColumn(this.dsBudgBimok.rowposition,"acntCd",arrRtn[0]);
        		this.dsBudgBimok.setColumn(this.dsBudgBimok.rowposition,"acntNm",arrRtn[1]);
        	}else if(cell==6){
        	alert(cell);
        		this.dsBudgBimok.setColumn(this.dsBudgBimok.rowposition,"assiSubCd",arrRtn[0]);
        		this.dsBudgBimok.setColumn(this.dsBudgBimok.rowposition,"assiSubNm",arrRtn[1]);
        	}

        /*	 deptno=arrRtn[0];
        	 deptnm=arrRtn[1];
        	 this.deptNmEd.set_value(arrRtn[1]);*/
        }

        

        
        this.useYnRadio_onitemclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AB_bimokMngtForm_onload, this);
            this.stc_year.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.stc_bimok.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_acc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_useYN.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.bimokGrid.addEventHandler("onexpanddown", this.bimokGrid_onexpanddown, this);
            this.copyBtn.addEventHandler("onclick", this.copyBtn_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);

        };

        this.loadIncludeScript("AB_BimokMngtForm.xfdl");

       
    };
}
)();

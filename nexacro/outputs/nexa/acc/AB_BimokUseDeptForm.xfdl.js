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
                this.set_name("AB_bimokUseDeptForm");
                this.set_classname("AB_bimokUseDeptForm");
                this.set_titletext("예산사용부서등록");
                this.set_scrollbars("none");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findBudgUseDeptList</Col><Col id=\"URL\">his::acc/budget/findBudgUseDeptList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsBudgBimok=dsBudgBimok dsBudgUserDept=dsBudgUserDept</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">findUseDeptCallback</Col></Row><Row><Col id=\"serviceID\">batchBudgUseDeptProcess</Col><Col id=\"URL\">his::acc/budget/batchBudgUseDeptProcess.do</Col><Col id=\"inData\">dsBudgUserDept=dsBudgUserDept:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">copyBimok</Col><Col id=\"URL\">his::acc/budget/copyBimok.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsBudgBimok=dsBudgBimok</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBudgBimok", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"bimokNm\" type=\"STRING\" size=\"256\"/><Column id=\"parentBimok\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokLevel\" type=\"STRING\" size=\"256\"/><Column id=\"finYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"goveAprcYn\" type=\"STRING\" size=\"256\"/><Column id=\"budgGuide\" type=\"STRING\" size=\"256\"/><Column id=\"deptCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBudgUserDept", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/><Column id=\"accYear\" type=\"STRING\" size=\"256\"/><Column id=\"useDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"useDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntRespYn\" type=\"STRING\" size=\"256\"/><Column id=\"acntRespNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Div("Div05", "absolute", "0%", "4", "1246", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("titleEdt02", "absolute", "4.4%", "10", null, "44", "77.76%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("예산사용부서등록");
            obj.set_cssclass("TStc");
            obj.style.set_font("bold 15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "1.28%", "71", null, "53", "1.04%", null, this);
            obj.set_taborder("8");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("stc_year", "absolute", "2.16%", "84", "88", "27", null, null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("회계년도");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Spin("yearSpin", "absolute", "9.92%", "82", "118", "30", null, null, this);
            obj.set_taborder("10");
            obj.set_value("2016");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Edit("bimokEd", "absolute", "28.4%", "83", "125", "26", null, null, this);
            obj.set_taborder("11");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bimok", "absolute", "20.64%", "84", "88", "27", null, null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("예산비목");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept", "absolute", "39.68%", "84", "88", "27", null, null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("사용부서");
            obj.style.set_background("antiquewhite");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("deptEd", "absolute", "47.44%", "83", "125", "26", null, null, this);
            obj.set_taborder("14");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("searchUseDeptBtn", "absolute", "733", "80", "90", "32", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("bimokListGrid", "absolute", "1.28%", "138", "440", "576", null, null, this);
            obj.set_taborder("16");
            obj.set_binddataset("dsBudgBimok");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"275\"/><Column size=\"103\"/><Column size=\"49\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"예산비목\"/><Cell col=\"1\" text=\"계정코드\"/><Cell col=\"2\" text=\"건수\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:bimokNm\" treestartlevel=\"1\" treelevel=\"bind:bimokLevel\"/><Cell col=\"1\" text=\"bind:acntCd\"/><Cell col=\"2\" text=\"bind:deptCount\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("budgUseDeptGrid", "absolute", "37.12%", "137", "773", "575", null, null, this);
            obj.set_taborder("17");
            obj.set_binddataset("dsBudgUserDept");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"142\"/><Column size=\"174\"/><Column size=\"122\"/><Column size=\"341\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사용부서\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"계정책임여부\"/><Cell col=\"3\" text=\"계정책임명칭\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"expand\" text=\"bind:useDeptCd\" expandshow=\"show\" expandimage=\"URL('img::popup.png')\" expandchar=\"..\"/><Cell col=\"1\" text=\"bind:useDeptNm\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:acntRespYn\" combodataset=\"dsYn\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:acntRespNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addDeptBtn", "absolute", "942", "725", "90", "32", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "1044", "725", "90", "32", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "1148", "725", "90", "32", null, null, this);
            obj.set_taborder("20");
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
            		p.set_classname("AB_bimokUseDeptForm");
            		p.set_titletext("예산사용부서등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AB_BimokUseDeptForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AB_BimokUseDeptForm.xfdl", function() {
        //include "scripts::commonScripts.xjs"; 

        //*****
        //조회
        //*****
        this.searchUseDeptBtn_onclick = function(obj,e){
        	var accYear = this.yearSpin.value;
        	var bimokNm = this.bimokEd.value;
        	var deptNm = this.deptEd.value;
        	
        	var argument = 'accYear='+accYear+' bimokNm='+bimokNm + ' deptNm='+deptNm;
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findBudgUseDeptList");
        	this.dsBudgUserDept.filter("bimokCd=="+this.dsBudgBimok.getColumn(e.row,"bimokCd"));
        }

        //*****
        //추가
        //*****
        this.addDeptBtn_onclick = function(obj,e){
        	var aRow= this.dsBudgUserDept.addRow();
        	var accYear = this.dsBudgBimok.getColumn(this.dsBudgBimok.rowposition,"accYear");
        	var bimokCd = this.dsBudgBimok.getColumn(this.dsBudgBimok.rowposition,"bimokCd");
        	this.dsBudgUserDept.setColumn(aRow,"accYear",accYear);
        	this.dsBudgUserDept.setColumn(aRow,"bimokCd",bimokCd);
        }

        //*****
        //삭제
        //*****
        this.delBtn_onclick = function(obj,e){
        	this.dsBudgUserDept.deleteRow(this.dsBudgUserDept.rowposition);
        }

        //*****
        //저장
        //*****
        this.saveBtn_onclick = function(obj,e){
        	this.gfnService("batchBudgUseDeptProcess");
        }

        //************
        //그리드함수
        //************
        this.budgUseDeptGrid_onexpanddown = function(obj,e){
        	if(e.cell==0){
        	var deptCodeArr = this.gfnCodePopup('GP500');
        	this.dsBudgUserDept.setColumn(this.dsBudgUserDept.rowposition,"useDeptCd",deptCodeArr[0]);
        	this.dsBudgUserDept.setColumn(this.dsBudgUserDept.rowposition,"useDeptNm",deptCodeArr[1]);
        	}
        }

        this.bimokListGrid_oncellclick = function(obj,e){
        	this.dsBudgUserDept.filter("bimokCd=="+this.dsBudgBimok.getColumn(e.row,"bimokCd"));
        }
        //****************************************
        //****************************************
        this.setCode = function(code,arrRtn) {
        	this.dsBudgUserDept.setColumn(this.dsBudgUserDept.rowposition,"useDeptCd",arrRtn[0]);
        	this.dsBudgUserDept.setColumn(this.dsBudgUserDept.rowposition,"useDeptNm",arrRtn[1]);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.stc_year.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.stc_bimok.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stc_dept.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchUseDeptBtn.addEventHandler("onclick", this.searchUseDeptBtn_onclick, this);
            this.bimokListGrid.addEventHandler("oncellclick", this.bimokListGrid_oncellclick, this);
            this.budgUseDeptGrid.addEventHandler("onexpanddown", this.budgUseDeptGrid_onexpanddown, this);
            this.addDeptBtn.addEventHandler("onclick", this.addDeptBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);

        };

        this.loadIncludeScript("AB_BimokUseDeptForm.xfdl");

       
    };
}
)();

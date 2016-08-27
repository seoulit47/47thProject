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
                this.set_name("SD_MedInvenForm");
                this.set_classname("SD_MedInvenForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findMedInven</Col><Col id=\"URL\">his::sup/drug/findMedInven.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsMed=dsMed</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMed", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"medInven\" type=\"STRING\" size=\"256\"/><Column id=\"fee\" type=\"STRING\" size=\"256\"/><Column id=\"medNm\" type=\"STRING\" size=\"256\"/><Column id=\"medCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "1249", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-1", null, "60", "81.68%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("약 재고 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("medInvenGrid", "absolute", "2.16%", "112", null, "587", "2.08%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("dsMed");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"약품코드\"/><Cell col=\"1\" text=\"약품명\"/><Cell col=\"2\" text=\"수가\"/><Cell col=\"3\" text=\"재고량\"/></Band><Band id=\"body\"><Cell text=\"bind:medCd\"/><Cell col=\"1\" text=\"bind:medNm\"/><Cell col=\"2\" text=\"bind:fee\"/><Cell col=\"3\" text=\"bind:medInven\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "2.24%", "68", null, "30", "89.76%", null, this);
            obj.set_taborder("3");
            obj.set_text("약품명");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Edit("medNmEd", "absolute", "10.88%", "68", null, "30", "77.92%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "291", "67", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("printBtn", "absolute", "1134", "712", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::printBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SD_MedInvenForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SD_MedInvenForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SD_MedInvenForm.xfdl", function() {
        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 

        // 조회버튼
        this.searchBtn_onclick = function(obj,e)
        {
        	var medNm = this.medNmEd.value;
        	
        	var argument = 'medNm='+medNm;
        	var row = this.dsService.findRow('serviceID' , "findMedInven");
        	this.dsService.setColumn(row,"argument",argument);
        		
        	this.gfnService("findMedInven");
        	
        		
        }

        // 출력버튼
        this.printBtn_onclick = function(obj,e)
        {
        	alert("출력기능 준비중");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.printBtn.addEventHandler("onclick", this.printBtn_onclick, this);

        };

        this.loadIncludeScript("SD_MedInvenForm.xfdl");

       
    };
}
)();

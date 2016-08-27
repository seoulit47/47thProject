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
                this.set_name("WB_GijunCodeForm");
                this.set_classname("WR_gijunCodeForm");
                this.set_titletext("WB_GijunCodeForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findGijunInfoCodeList</Col><Col id=\"URL\">his::won/base/findGijunInfoCodeList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsGijunInfo=dsGijunInfo dsGijunInfoDetail=dsGijunInfoDetail</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">gijunInfoCallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchProcessGijunInfoData</Col><Col id=\"URL\">his::won/base/batchProcessGijunInfoData.do</Col><Col id=\"inData\">dsGijunInfo=dsGijunInfo:u dsGijunInfoDetail=dsGijunInfoDetail:u</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">batchProcessCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGijunInfo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"gijunCd\" type=\"STRING\" size=\"256\"/><Column id=\"gijunNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYb\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGijunInfoDetail", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"dtlCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYb\" type=\"STRING\" size=\"256\"/><Column id=\"filedWorkCngYb\" type=\"STRING\" size=\"256\"/><Column id=\"gijunCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.78%", "24", null, "38", "0.88%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::formBar.png')");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 10 10");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Grid("gijunInfoGrid", "absolute", "1.37%", "99", null, "549", "54.88%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("dsGijunInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"기준정보코드\"/><Cell col=\"1\" text=\"기준정보명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:gijunCd\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:gijunNm\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:useYb\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"기준정보코드\"/><Cell col=\"1\" text=\"기준정보명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:gijunCd\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:gijunNm\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:useYb\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("gijunInfoDetailGrid", "absolute", "47.07%", "99", null, "549", "0.88%", null, this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"상세코드\"/><Cell col=\"1\" text=\"상세명\"/><Cell col=\"2\" text=\"사용여부\"/><Cell col=\"3\" text=\"변경여부\"/></Band><Band id=\"body\"><Cell text=\"bind:dtlCd\"/><Cell col=\"1\" text=\"bind:dtlNm\"/><Cell col=\"2\" text=\"bind:useYb\"/><Cell col=\"3\" text=\"bind:filedWorkCngYb\"/></Band></Format><Format id=\"insert\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"상세코드\"/><Cell col=\"1\" text=\"상세명\"/><Cell col=\"2\" text=\"사용여부\"/><Cell col=\"3\" text=\"변경여부\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:dtlCd\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:dtlNm\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:useYb\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:filedWorkCngYb\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "1.37%", "669", null, "43", "54.88%", null, this);
            obj.set_taborder("5");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "47.07%", "669", null, "43", "0.88%", null, this);
            obj.set_taborder("6");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc", "absolute", "1.56%", "64", "150", "30", null, null, this);
            obj.getSetter("taborder").set("11");
            obj.set_text("코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "47.07%", "65", "162", "30", null, null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("상세코드");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("delGijunBtn", "absolute", "472", "674", "90", "32", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("delGijunBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("delGijunBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addGijunBtn", "absolute", "379", "674", "90", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("addGijunBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("addGijunBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delGijunDetailBtn", "absolute", "1147", "674", "90", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("delGijunDetailBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("delGijunDetailBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addGijunDetailBtn", "absolute", "1054", "674", "90", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("addGijunDetailBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("addGijunDetailBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn19", "absolute", "1130", "64", "110", "32", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "5.44%", "-4", null, "60", "80.16%", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("병동병실조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0%", "0", "1200", "60", null, null, this);
            obj.set_taborder("19");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "4.01%", "-4", null, "60", "81.62%", null, this.Div03);
            obj.getSetter("taborder").set("0");
            obj.set_text("기준정보코드 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div03.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1200, 60, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("19");
            		p.style.set_background("transparent URL('img::titleBar4.jpg')");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WR_gijunCodeForm");
            		p.set_titletext("WB_GijunCodeForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WB_GijunCodeForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("WB_GijunCodeForm.xfdl", function() {
        /********************************************************************************
        *                                               			                    *
        * 기준정보코드 관리															*
        *                                                                   			*
        * @Path			원무 – 기준정보코드 관리   	 								*
        * @Description 	기준정보코드 관리(조회, 추가, 수정, 삭제) 	      			*
        * @Author		윤유진 						 								*
        * 									 											*
        * Created on 	2016. 6. 16.                           		 					*
        *									 											*
        ********************************************************************************/

        //include "scripts::commonScripts.xjs"; 

        this.WB_GijunCodeForm_onload = function(obj,e){
        	this.gfnService("findGijunInfoCodeList");
        }

        //기준정보코드추가
        this.addGijunBtn_onclick = function(obj,e){
        	var addRow = this.dsGijunInfo.addRow();
        	this.dsGijunInfo.setColumn(addRow,"useYb", 'Y');
        }

        //기준정보코드삭제
        this.delGijunBtn_onclick = function(obj,e){
        	if(confirm("해당 상세코드가 함께 삭제됩니다. 진행하시겠습니까?")){
        		this.dsGijunInfoDetail.deleteAll();
        		this.dsGijunInfo.deleteRow(this.dsGijunInfo.rowposition);
        		this.dsGijunInfoDetail.reset();
        		this.gijunInfoDetailGrid.set_visible(false)
        	}
        }

        //상세코드추가
        this.addGijunDetailBtn_onclick = function(obj,e){
        	var addRow = this.dsGijunInfoDetail.addRow();
        	this.dsGijunInfoDetail.setColumn(addRow,"filedWorkCngYb", 'Y');
        	this.dsGijunInfoDetail.setColumn(addRow,"useYb", 'Y');
        	this.dsGijunInfoDetail.setColumn(addRow,"gijunCd",this.dsGijunInfo.getColumn(this.dsGijunInfo.rowposition,"gijunCd"));
        }

        //상세코드삭제
        this.delGijunDetailBtn_onclick = function(obj,e){
        	this.dsGijunInfoDetail.deleteRow(this.dsGijunInfoDetail.rowposition);
        }

        
        //일괄처리
        this.processBtn_onclick = function(obj,e){
        	var flag=0;
        	var gijunCodeSelectRowType = this.dsGijunInfo.getRowType(this.dsGijunInfo.rowposition);
        	var gijunCode= this.dsGijunInfo.getColumn(this.dsGijunInfo.rowposition,"gijunCd");
        	
        	for(var i=0; i< this.dsGijunInfoDetail.getRowCount(); i++){
        		var rowType = this.dsGijunInfoDetail.getRowType(i);
        		var dtlCd = this.dsGijunInfoDetail.getColumn(i,"dtlCd");
        		if( rowType == 2 && dtlCd == null ){
        		  flag=1;
        		  break;
        		}
        	}
        	
        	if( gijunCodeSelectRowType == 2 && gijunCode == null ){
        		alert("코드구분코드를 입력해주세요");
        	}else if(flag == 1){
        		alert("상세코드를 입력해주세요");
        		flag=0;
        	}else{
        		this.gfnService("batchProcessGijunInfoData");
        	}
        }

        //기준정보 셀 클릭 시 해당 코드의 상세를 보여주는 이벤트
        this.gijunInfoGrid_oncellclick = function(obj,e){
        	var useYb = this.dsGijunInfo.getColumn(this.dsGijunInfo.rowposition,"useYb");
        	if(useYb=="N"){
        		//this.addGijunDetailBtn.set_visible(false);
        		//this.delGijunDetailBtn.set_visible(false);
        		this.gijunInfoDetailGrid.set_formatid("default");
        	}else{
        		//this.addGijunDetailBtn.set_visible(true);
        		//this.delGijunDetailBtn.set_visible(true);
        		this.gijunInfoDetailGrid.set_formatid("insert");
        	}
        	this.gijunInfoDetailGrid.set_visible(true);
        	var filter_str = "gijunCd=='"+this.dsGijunInfo.getColumn(e.row,"gijunCd") +"'";
        	this.dsGijunInfoDetail.filter(filter_str);
        	this.gijunInfoDetailGrid.set_binddataset("dsGijunInfoDetail");

        	var rowType = this.dsGijunInfo.getRowType(e.row);
        	if(rowType == 2){
        		this.gijunInfoGrid.set_formatid("insert");
        		this.gijunInfoGrid.set_readonly(false);
        	}else{
        		this.gijunInfoGrid.set_formatid("default");
        		this.gijunInfoGrid.set_readonly(true);
        	}
        }

        this.gijunInfoDetailGrid_oncellclick = function(obj,e){
        	if(this.dsGijunInfoDetail.getColumn(e.row, "filedWorkCngYb") == 'N'){
        		this.gijunInfoDetailGrid.set_formatid("default");
        		this.gijunInfoDetailGrid.set_readonly(true);
        	}else{
        		this.gijunInfoDetailGrid.set_formatid("insert");
        		this.gijunInfoDetailGrid.set_readonly(false);
        	}
        }

        this.gijunInfoCallbackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
              this.gfnErrorPopup(svcID, errorMsg);
           } else {
              // 트랜잭션 완료
              trace("===== " + svcID + " 트랜잭션 성공 =====\n");
              if(this.dsGijunInfo.getRowCount() == 0){
        		alert("해당 조건에 검색된 데이터가 없습니다.");	
              }
           }
        }

        this.batchProcessCallbackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
              this.gfnErrorPopup(svcID, errorMsg);
           } else {
              // 트랜잭션 완료
              trace("===== " + svcID + " 트랜잭션 성공 =====\n");
              if(this.dsGijunInfo.getRowCount() == 0){
        		alert("해당 조건에 검색된 데이터가 없습니다.");	
              }
           }
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.WB_GijunCodeForm_onload, this);
            this.gijunInfoGrid.addEventHandler("oncellclick", this.gijunInfoGrid_oncellclick, this);
            this.gijunInfoDetailGrid.addEventHandler("oncellclick", this.gijunInfoDetailGrid_oncellclick, this);
            this.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.delGijunBtn.addEventHandler("onclick", this.delGijunBtn_onclick, this);
            this.addGijunBtn.addEventHandler("onclick", this.addGijunBtn_onclick, this);
            this.delGijunDetailBtn.addEventHandler("onclick", this.delGijunDetailBtn_onclick, this);
            this.addGijunDetailBtn.addEventHandler("onclick", this.addGijunDetailBtn_onclick, this);
            this.DelBtn19.addEventHandler("onclick", this.processBtn_onclick, this);

        };

        this.loadIncludeScript("WB_GijunCodeForm.xfdl");

       
    };
}
)();

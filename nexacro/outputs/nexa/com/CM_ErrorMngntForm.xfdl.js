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
                this.set_name("CM_ErrorMngntForm");
                this.set_classname("CM_ErrorMngntForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new FileDialog("fileDialog", this);
            obj.set_filter("All(*.*)|*.*|");
            obj.set_filterindex("0");
            obj.set_defaultextension("false");
            this.addChild(obj.name, obj);
            obj = new Dataset("dsUse", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findService</Col><Col id=\"URL\">his::com/findService.do</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">searchCallback</Col><Col id=\"outData\">dsComService=dsComService</Col></Row><Row><Col id=\"serviceID\">batchErrorProcess</Col><Col id=\"URL\">his::com/batchErrorProcess.do</Col><Col id=\"inData\">dsComService=dsComService:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"receiveNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"serviceGubun\" type=\"STRING\" size=\"256\"/><Column id=\"processyn\" type=\"STRING\" size=\"256\"/><Column id=\"imgfile\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"receiveDate\" type=\"STRING\" size=\"256\"/><Column id=\"empName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsData", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"img\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new VirtualFile("virtualFile", this);
            this.addChild(obj.name, obj);

            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "0", "1670", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "74.4%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("전산업무요청 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Grid("requestGrid", "absolute", "1.28%", "113", null, "239", "2.08%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("dsComService");
            obj.set_autofittype("col");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/><Column size=\"149\"/><Column size=\"144\"/><Column size=\"156\"/><Column size=\"185\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"접수번호\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"서비스종류\"/><Cell col=\"3\" text=\"처리구분\"/><Cell col=\"4\" text=\"접수일\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:receiveNo\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:empNo\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:serviceGubun\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:processyn\" combodataset=\"dsComService\" combocodecol=\"processyn\" combodatacol=\"processyn\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:receiveDate\" mask=\"####-##-##\" calendardisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("searchSDateCal", "absolute", "9.6%", "77", null, "25", "78.64%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");

            obj = new Static("Static03", "absolute", "21.04%", "74", null, "31", "76.96%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("~");
            obj.style.set_align("center middle");
            obj.style.set_font("11 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("searchEDateCal", "absolute", "23.04%", "78", null, "25", "65.28%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");

            obj = new Edit("requestEmpEd", "absolute", "47.12%", "75", null, "27", "42.96%", null, this);
            obj.set_taborder("6");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00", "absolute", "1.92%", "369", null, "310", "2.48%", null, this);
            obj.set_text("전산업무요청상세정보");
            obj.set_taborder("7");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_color("lightslategray");
            obj.style.set_font("10 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("fileGrid", "absolute", "59.84%", "430", null, "233", "4.56%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"460\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"파일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:img\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "1.44%", "76", null, "27", "91.52%", null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("등록일자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "39.04%", "77", null, "27", "54%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("요청자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "3.52%", "395", null, "27", "89.44%", null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("요청내용");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "59.84%", "392", null, "27", "33.12%", null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("첨부파일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new TextArea("inDataArea", "absolute", "3.52%", "428", null, "226", "46.24%", null, this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Button("searchReqBtn", "absolute", "1136", "73", "90", "32", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addErrorBtn", "absolute", "1027", "696", "90", "32", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchErrorBtn", "absolute", "1129", "696", "90", "32", null, null, this);
            obj.set_taborder("19");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("comboResetBtn", "absolute", "84.32%", "73", null, "28", "9.92%", null, this);
            obj.set_taborder("22");
            obj.set_text("조건초기화");
            this.addChild(obj.name, obj);

            obj = new Button("addFileBtn", "absolute", "999", "389", "90", "32", null, null, this);
            obj.set_taborder("23");
            obj.style.set_background("@gradation URL('img::attachBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delFileBtn", "absolute", "1102", "389", "90", "32", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
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
            		p.set_classname("CM_ErrorMngntForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","inDataArea","value","dsData","inData");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CM_ErrorMngntForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("CM_ErrorMngntForm.xfdl", function() {
        /********************************************************************************                                                                            
        전산업무요청 관리화면                                           						                                                                         
        @Path			시스템공통            				   				
        @Description	시스템 사용중 에러 팝업으로 전산업무 요청이 들어오는 것을 관리						
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 5. 27.                             		                    				                                            
        ********************************************************************************/

        //include "scripts::commonTransaction.xjs";

        this.fileName="";
        this.filePath=""; 
        this.vFile=""; 

        /********************************************************************************
         조회버튼클릭
        ********************************************************************************/

        this.searchReqBtn_onclick = function(obj,e)
        {
        	this.dsService.setColumn(0,4,"sDate="+this.searchSDateCal.value
        					+" eDate="+this.searchEDateCal.value+" empEd="+this.requestEmpEd.value);
        	this.gfnService("findService");
        }
        this.searchCallback = function(svcID,errorCode,errorMsg){
        	if(errorCode == 0){
        		if(this.dsComService.getRowCount() == 0){
        			alert("조회된 결과가 없습니다.");
        		}
        	}
        }

        /********************************************************************************
         셀 클릭할 때마다 내용, 첨부파일 바뀌도록
        ********************************************************************************/

        this.requestGrid_oncellclick = function(obj,e)
        {
        	var inData = this.dsComService.getColumn(e.row,"inData");
        	var img = this.dsComService.getColumn(e.row,"imgfile");
        	this.dsData.setColumn(this.dsData.rowposition,0,img);
        	this.dsData.setColumn(this.dsData.rowposition,1,inData);
        }

        /********************************************************************************
         첨부파일다운로드
         
         파일열기
        ********************************************************************************/

        this.addFileBtn_onclick = function(obj,e)
        {
        	this.fileDialog.open("FileOpen",FileDialog.LOAD);
        	this.dsData.addRow();
        }

        this.fileDialog_onclose = function(obj,e)
        {
        	this.vFile=e.virtualfiles[0];
        	this.fileName=this.vFile.filename; 
        	var realpath=system.convertRealPath(this.vFile.fullpath);
        	//alert("리얼패스 : "+realpath);
        	this.dsData.setColumn(this.fileGrid.currentrow,0,this.fileName);
        	
        	this.virtualFile.open(this.vFile.fullpath,VirtualFile.openBinary);
        	this.virtualFile.read(this.vFile.getFileSize());

        
        }
        this.virtualFile_onsuccess = function(obj,e)
        {
        	//var bd = virtualFile.openBinary;
        	//alert(bd); //512
        	this.dsComService.setColumn(0,"imgfile",this.fileName);
        	//this.dsComService.setColumn(0,"ImgData",VirtualFile.openBinary);
        }

        /********************************************************************************
         첨부파일삭제
        ********************************************************************************/

        this.delFileBtn_onclick = function(obj,e)
        {
        	this.dsData.deleteRow(this.fileGrid.currentrow);
        }

        /********************************************************************************
         추가
        ********************************************************************************/

        this.addErrorBtn_onclick = function(obj,e)
        {
        	//this.dsComService.clearData();
        	this.dsData.clearData();
        	this.removeChild(this.inDataArea);

        	this.dsComService.addRow();
        	this.inDataArea.set_enable(true);
        	this.requestGrid.set_enable(true);
        	this.fileGrid.set_enable(true);
        	this.addFileBtn.set_enable(true);
        	this.removeFileBtn.set_enable(true);
        	this.dsComService.setColumn(this.requestGrid.currentrow,"processyn","N");
        	this.dsComService.setColumn(this.requestGrid.currentrow,"empNo",application.dsHmEmp.getColumn(0,0)); //로그인하면 나오는지 확인.
        	this.dsComService.setColumn(this.requestGrid.currentrow,"empNm",application.dsHmEmp.getColumn(0,1));
        	this.dsComService.setColumn(this.requestGrid.currentrow,"receiveDate",this.fn_dateTime());
        }

        /********************************************************************************
         일괄처리
        ********************************************************************************/

        this.batchErrorBtn_onclick = function(obj,e)
        {
        	if(confirm("일괄처리 하시겠습니까?")){
        		this.dsComService.setColumn(0,"inData",this.dsData.getColumn(0,"inData"));
        		this.gfnService("batchErrorProcess");
        		this.successCB();
        	}
        }

        /********************************************************************************
         오늘날짜함수
        ********************************************************************************/

        this.fnDateTime = function() 
        {
            var dDate = new Date();     
            var sRtn =  dDate.getFullYear()
                  + (dDate.getMonth()+1).toString().padLeft(2, "0")
                  +  dDate.getDate().toString().padLeft(2, "0");
            return sRtn;
        }

        /********************************************************************************
         초기화
        ********************************************************************************/

        this.comboResetBtn_onclick = function(obj,e)
        {
        	this.searchSDateCal.set_value(null);
        	this.searchEDateCal.set_value(null); 
        	this.requestEmpEd.set_value(null)
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.fileDialog.addEventHandler("onclose", this.fileDialog_onclose, this);
            this.virtualFile.addEventHandler("onsuccess", this.virtualFile_onsuccess, this);
            this.requestGrid.addEventHandler("oncellclick", this.requestGrid_oncellclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchReqBtn.addEventHandler("onclick", this.searchReqBtn_onclick, this);
            this.addErrorBtn.addEventHandler("onclick", this.addErrorBtn_onclick, this);
            this.batchErrorBtn.addEventHandler("onclick", this.batchErrorBtn_onclick, this);
            this.comboResetBtn.addEventHandler("onclick", this.comboResetBtn_onclick, this);
            this.addFileBtn.addEventHandler("onclick", this.addFileBtn_onclick, this);
            this.delFileBtn.addEventHandler("onclick", this.delFileBtn_onclick, this);

        };

        this.loadIncludeScript("CM_ErrorMngntForm.xfdl");

       
    };
}
)();

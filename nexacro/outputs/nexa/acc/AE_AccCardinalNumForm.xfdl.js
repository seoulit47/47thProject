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
                this.set_name("AE_accCardinalNumForm");
                this.set_classname("AE_accCardinalNumForm");
                this.set_titletext("회계기수 관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAccPrid", this);
            obj._setContents("<ColumnInfo><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"dlineYn\" type=\"STRING\" size=\"256\"/><Column id=\"dlineDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAccPridList</Col><Col id=\"URL\">his::acc/elementary/findAccPridList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAccPrid=dsAccPrid</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchAccPridList</Col><Col id=\"URL\">his::acc/elementary/batchAccPridList.do</Col><Col id=\"outData\"/><Col id=\"inData\">dsAccPrid=dsAccPrid:U</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleBarDiv", "absolute", "0.16%", "0", "1238", "60", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.12%", "13", null, "35", "80.13%", null, this.titleBarDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("회계기수 관리");
            obj.style.set_font("bold 20 나눔스퀘어 Bold");
            this.titleBarDiv.addChild(obj.name, obj);

            obj = new Grid("accPridGrid", "absolute", "2.4%", "66", null, "637", "0.8%", null, this);
            obj.set_taborder("3");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAccPrid");
            obj.getSetter("titletext").set("회계기수 관리");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"66\"/><Column size=\"132\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회계기수\"/><Cell col=\"1\" text=\"시작일자\"/><Cell col=\"2\" text=\"종료일자\"/><Cell col=\"3\" text=\"마감여부\"/><Cell col=\"4\" text=\"마감일자\"/></Band><Band id=\"body\"><Cell text=\"bind:accPrid\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:startDate\" mask=\"####-##-##\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:endDate\" mask=\"####-##-##\"/><Cell col=\"3\" text=\"bind:dlineYn\"/><Cell col=\"4\" text=\"bind:dlineDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("removeAccCardinalNumBtn", "absolute", "1035", "712", "90", "32", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("regAccCardinalNumBtn", "absolute", "926", "712", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchAccCardinalNumBtn", "absolute", "1144", "712", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1238, 60, this.titleBarDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.titleBarDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AE_accCardinalNumForm");
            		p.set_titletext("회계기수 관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AE_AccCardinalNumForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("AE_AccCardinalNumForm.xfdl", function() {
        //include "scripts::commonTransaction.xjs";

        
        // 화면 로드시 회계기수 조회
        this.AE_accCardinalNumForm_onload = function(obj,e)
        {
        	this.gfnService("findAccPridList");
        }

        // 회계기수 추가
        this.regAccCardinalNumBtn_onclick = function(obj,e)
        {
        	var addPrid = this.dsAccPrid.getColumn(this.dsAccPrid.rowcount-1,"accPrid");
        	newRow = this.dsAccPrid.addRow();
        	this.dsAccPrid.setColumn(newRow, "accPrid", parseInt(addPrid)+1);
        }

        //회계기수 삭제
        this.removeAccCardinalNumBtn_onclick = function(obj,e)
        {
        	this.dsAccPrid.deleteRow(this.accPridGrid.currentrow);
        }

        
        //회계기수 일괄처리
        this.batchAccCardinalNumBtn_onclick = function(obj,e)
        {
        	var rowCount = this.dsAccPrid.rowcount;
        	
        	for(var row=0 ; row<rowCount ; row++){
        		var rowType = this.dsAccPrid.getRowType(row);
        		var startDate = this.dsAccPrid.getColumn(row,"startDate");
        		var endDate = this.dsAccPrid.getColumn(row,"endDate");
        		
        		if(rowType == 2){
        			var sDate = startDate.substring(0,4)+"-"+startDate.substring(4,6)+"-"+startDate.substring(6,8);
        			var eDate = endDate.substring(0,4)+"-"+endDate.substring(4,6)+"-"+endDate.substring(6,8);
        			
        			this.dsAccPrid.setColumn(row, "dlineYn", "N");
        			this.dsAccPrid.setColumn(row, "startDate", sDate);
        			this.dsAccPrid.setColumn(row, "endDate", eDate);
        		}else if(rowType == 4){
        			if(startDate.length == 8){
        				var sDate = startDate.substring(0,4)+"-"+startDate.substring(4,6)+"-"+startDate.substring(6,8);
        				this.dsAccPrid.setColumn(row, "startDate", sDate);
        			}else if(endDate.length == 8){
        				var eDate = endDate.substring(0,4)+"-"+endDate.substring(4,6)+"-"+endDate.substring(6,8);
        				this.dsAccPrid.setColumn(row, "endDate", eDate);
        			}
        		}
        	}

        	this.gfnService("batchAccPridList");
        }

        

        //Callback함수
        this.CallbackFunc=function(serviceID,errorCode,errorMsg)
        {
        	if(serviceID == "findAccPridList"){
        		if(errorCode < 0){
        			alert("회계기수목록 로드 오류");
        		}
        	}
        	if(serviceID == "batchAccPridList"){
        		if(errorCode == 1){
        			alert("회계기수 일괄처리 완료");
        			this.reload;
        		}else{
        			alert("회계기수 일괄처리 오류");
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AE_accCardinalNumForm_onload, this);
            this.titleBarDiv.titleStc.addEventHandler("onclick", this.Div04_Static00_onclick, this);
            this.removeAccCardinalNumBtn.addEventHandler("onclick", this.removeAccCardinalNumBtn_onclick, this);
            this.regAccCardinalNumBtn.addEventHandler("onclick", this.regAccCardinalNumBtn_onclick, this);
            this.batchAccCardinalNumBtn.addEventHandler("onclick", this.batchAccCardinalNumBtn_onclick, this);

        };

        this.loadIncludeScript("AE_AccCardinalNumForm.xfdl");

       
    };
}
)();

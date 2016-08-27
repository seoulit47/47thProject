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
                this.set_name("SC_PckInspPopForm");
                this.set_classname("SC_ocsPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,691,475);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findExPckInspList</Col><Col id=\"URL\">his::sup/checkup/findExPckInspList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsInsp=dsInsp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchPckInspProcess</Col><Col id=\"URL\">his::sup/checkup/batchPckInspProcess.do</Col><Col id=\"outData\"/><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"inData\">dsInsp=dsPckInspU:U</Col><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">findExChoInspList</Col><Col id=\"URL\">his::sup/checkup/findExChoInspList.do</Col><Col id=\"outData\">dsInsp=dsInsp</Col><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"inData\"/><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">batchChoInspProcess</Col><Col id=\"URL\">his::sup/checkup/batchChoInspProcess.do</Col><Col id=\"inData\">dsChoInsp=dsPckInspU:U</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"outData\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGenderCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">SC031</Col><Col id=\"dsName\">dsGenderCd</Col></Row><Row><Col id=\"dsName\">dsInspDivCd</Col><Col id=\"code\">SC049</Col></Row><Row><Col id=\"code\">SC035</Col><Col id=\"dsName\">dsOcsDivCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInspDivCd", this);
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">사용</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInsp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/><Column id=\"ocsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ocsNm\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ocsDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOcsDivCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPckInspU", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("false");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/><Column id=\"ocsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ocsNm\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ocsDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", "675", "60", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "7.38%", "-2", null, "60", "31.77%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("종합검진 검사");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("inspGrid", "absolute", "28", "64", "638", "352", null, null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsInsp");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.style.set_font("돋움,8,antialias");
            obj.set_enable("true");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"62\"/><Column size=\"165\"/><Column size=\"196\"/><Column size=\"55\"/><Column size=\"60\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" edittype=\"text\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"검사명\"/><Cell col=\"3\" text=\"처방명\"/><Cell col=\"4\" text=\"OCS구분\"/><Cell col=\"5\" text=\"결과부서\"/><Cell col=\"6\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:check\" editdisplay=\"edit\" tooltiptext=\"bind:check\"/><Cell col=\"1\" text=\"bind:inspCd\"/><Cell col=\"2\" text=\"bind:inspNm\"/><Cell col=\"3\" text=\"bind:ocsNm\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:ocsDivCd\" combodataset=\"dsOcsDivCd\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"5\" text=\"bind:rsltDeptNm\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:amt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("okBtn", "absolute", "480", "424", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::okBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "577", "424", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 691, 475, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SC_ocsPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SC_PckInspPopForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SC_PckInspPopForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 종합검진 검사 패키지별 검사 추가 시 도움창									*
        *                                                                               *
        * @Path		    종합검진 - 기초정보관리 - 패키지관리 - 패키지 검사추가  		*
        * @Description 	종합검진 패키지별 검사 추가 시 팝업    	    					*
        * 																				*
        *																				*
        * @Author	      						                                *
        * 									                                            *
        * Created on 2015. 05. 31.                             		                    *
        *									                                            *
        ********************************************************************************/

        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 

        // 공통 변수
        var parentId

        
        // 코드바인드 및 검사 조회 
        this.SC_PckInspPopForm_onload = function(obj,e)
        {
        	this.gfnBind();
        	parentId = this.opener.name;
        	
        	if(parentId =="SC_PckMgtForm")
        	{
        		if(!this.gfnIsNull(this.parent.param))									
        		{	
        			var pckCd = this.parent.param;
        			var useYn = 'Y';
        			var argument = 'pckCd='+pckCd+' useYn='+useYn;
        			var row = this.dsService.findRow('serviceID' , "findExPckInspList");
        			this.dsService.setColumn(row, "argument", argument);
        			
        			this.gfnService("findExPckInspList",false);
        		}
        	}
        	else if(parentId =="SC_RsvtMgtForm"||parentId == "SC_ReceiptMgtForm")
        	{

        		var useYn = 'Y';
        		var argument = 'useYn='+useYn;
        		var row = this.dsService.findRow('serviceID' , "findExChoInspList");
        		this.dsService.setColumn(row, "argument", argument);
        		
        		this.gfnService("findExChoInspList",false);

        	}
        }

        // 닫기 버튼 클릭
        this.closeBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        // 확인 버튼 클릭
        this.okBtn_onclick = function(obj,e)
        {
        	if(parentId =="SC_PckMgtForm"){
        		this.dsPckInspU.copyData(this.dsInsp);
        		this.dsPckInspU.filter("check == 1");
        		
        		for( var i = 0 ; i < this.dsPckInspU.rowcount ; i++)
        		{
        			//this.fn_setUserData(this.dlPckInspU,i);
        			this.dsPckInspU.setRowType(i, Dataset.ROWTYPE_INSERT);
        		}
        		
        		this.gfnService("batchPckInspProcess",false);
        		
        	}else if (parentId =="SC_RsvtMgtForm" || parentId =="SC_ReceiptMgtForm"){
        		this.dsPckInspU.copyData(this.dsInsp);
        		this.dsPckInspU.filter("check == 1");
        		
        		for( var i = 0 ; i < this.dsPckInspU.rowcount ; i++){
        			this.opener.dsChoInsp.addRow();
        			var row = this.opener.dsChoInsp.rowposition;
        			this.opener.dsChoInsp.setColumn(row, "inspCd", this.dsPckInspU.getColumn(i, "inspCd"));
        			this.opener.dsChoInsp.setColumn(row, "inspNm", this.dsPckInspU.getColumn(i, "inspNm"));
        			this.opener.dsChoInsp.setColumn(row, "amt", this.dsPckInspU.getColumn(i, "amt"));
        			this.opener.dsChoInsp.setColumn(row, "qnt", 1);	
        			this.opener.dsChoInsp.setColumn(row, "inspPlnDate",
        			this.opener.dsRsvt.getColumn(this.opener.dsRsvt.rowposition, "inspPlnDate"));	
        			this.opener.dsChoInsp.setColumn(row, "rsvtNo",
        			this.opener.dsRsvt.getColumn(this.opener.dsRsvt.rowposition, "rsvtNo"));									
        			
        			//this.fn_setUserData(this.opener.dlChoInsp, this.opener.dlChoInsp.rowposition);
        		}
        		
        		this.opener.pCode(1);
        		this.close();
        	}
        }  

        //callBack
        this.callBackFunc=function(svcID,errorCode,errorMsg)
        {
        	if(errorCode<0)
        	{
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	}else{
        		if(svcID == "findExPckInspList" || svcID == "findExChoInspList")
        		{
        			this.dsInsp.addColumn("check", "string");
        		}
        		else if(svcID.charAt("batch")!=0)
        		{
        			this.opener.pCode(1);
        			this.close();
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsInsp.addEventHandler("onrowposchanged", this.dlPckInsp_onrowposchanged, this);
            this.dsPckInspU.addEventHandler("onrowposchanged", this.dlPckInsp_onrowposchanged, this);
            this.addEventHandler("onload", this.SC_PckInspPopForm_onload, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.inspGrid.addEventHandler("onsetfocus", this.inspGrid_onsetfocus, this);
            this.okBtn.addEventHandler("onclick", this.okBtn_onclick, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);

        };

        this.loadIncludeScript("SC_PckInspPopForm.xfdl");

       
    };
}
)();

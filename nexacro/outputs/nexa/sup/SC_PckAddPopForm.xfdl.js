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
                this.set_name("SC_PckAddPopForm");
                this.set_classname("SC_ocsPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,528,437);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">batchPckProcess</Col><Col id=\"URL\">his::sup/checkup/batchPckProcess.do</Col><Col id=\"inData\">dsPck=dsPck:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">pckCallBack</Col></Row><Row><Col id=\"serviceID\">findPckList</Col><Col id=\"URL\">his::sup/checkup/findPckList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsPck=dsPck</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">pckCallBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPck", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"pckNm\" type=\"STRING\" size=\"256\"/><Column id=\"genderCd\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"inspDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">SC031</Col><Col id=\"dsName\">dsGenderCd</Col></Row><Row><Col id=\"dsName\">dsInspDivCd</Col><Col id=\"code\">SC049</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInspDivCd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">llll</Col><Col id=\"value\">lllll</Col></Row></Rows>");
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


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "5.3%", "66", null, "310", "5.49%", null, this);
            obj.set_taborder("10");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "0%", "0", "511", "60", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("transparent URL('img::titleBar6.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10.8%", "-2", null, "60", "28.41%", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("종합검진 패키지");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "411", "384", "90", "32", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "5.68%", "75", null, "295", "7.2%", null, this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "3.91%", "13", "92", "30", null, null, this.compBox);
            obj.set_taborder("13");
            obj.set_text("패키지코드");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "3.91%", "60", "92", "30", null, null, this.compBox);
            obj.set_taborder("14");
            obj.set_text("패키지명");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "3.91%", "107", "92", "30", null, null, this.compBox);
            obj.set_taborder("15");
            obj.set_text("검진구분");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "3.91%", "154", "92", "30", null, null, this.compBox);
            obj.set_taborder("16");
            obj.set_text("성별");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "3.91%", "201", "92", "30", null, null, this.compBox);
            obj.set_taborder("24");
            obj.set_text("검사금액");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("amtMask", "absolute", "26.74%", "201", null, "30", "2.83%", null, this.compBox);
            obj.set_taborder("25");
            obj.set_mask("###,###");
            obj.set_autoselect("true");
            obj.style.set_align("center middle");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "3.91%", "248", "92", "30", null, null, this.compBox);
            obj.set_taborder("27");
            obj.set_text("사용여부");
            obj.style.set_background("wheat");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("pckCdEd", "absolute", "26.74%", "13", null, "30", "2.83%", null, this.compBox);
            obj.set_taborder("28");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("pckNmEd", "absolute", "26.74%", "60", null, "30", "2.83%", null, this.compBox);
            obj.set_taborder("29");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Combo("inspDivCombo", "absolute", "26.74%", "107", null, "30", "2.83%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_innerdataset("dsInspDivCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Combo("genderCombo", "absolute", "26.74%", "154", null, "30", "2.83%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_innerdataset("dsGenderCd");
            obj.set_datacolumn("value");
            obj.set_codecolumn("code");
            obj = new Combo("useYnCombo", "absolute", "26.74%", "248", null, "30", "2.83%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_innerdataset("dsUseYN");
            obj.set_datacolumn("value");
            obj.set_codecolumn("code");

            obj = new Button("saveBtn", "absolute", "315", "384", "90", "32", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 310, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 99, 30, this.compBox.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.set_text("검진구분");
            		p.style.set_background("wheat");
            		p.style.set_color("black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("10 다음_Regular");

            	}
            );
            this.compBox.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 460, 239, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 528, 437, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SC_ocsPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","compBox.amtMask","value","dsPck","amt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","compBox.useYnCombo","value","dsPck","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","compBox.pckNmEd","value","dsPck","pckNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","compBox.pckCdEd","value","dsPck","pckCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","compBox.genderCombo","value","dsPck","genderCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","compBox.inspDivCombo","value","dsPck","inspDivCd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SC_PckAddPopForm.xfdl", "scripts::supScripts.xjs");
        this.addIncludeScript("SC_PckAddPopForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SC_PckAddPopForm.xfdl", function() {

        // 공통 스크립트
        //include "scripts::supScripts.xjs";
        //include "scripts::commonScripts.xjs"; 

        // 코드바인드 및 수정할 패키지 조회 
        this.SC_PckAddPopForm_onload = function(obj,e)
        {
        	this.gfnBind();

        	if(!this.gfnIsNull(this.parent.param))			
        	{	
        		alert(this.parent.param);
        		
        		var pckCd = this.parent.param;
        		var argument = 'pckCd='+pckCd;
        		var row = this.dsService.findRow('serviceID' , "findPckList");
        		this.dsService.setColumn(row, "argument", argument);
        		

        		this.gfnService("findPckList");
        		
        		this.compBox.pckCdEd.set_enable(false);
        		this.compBox.genderCombo.set_enable(false);
        		
        	}
        	else							
        	{	
        		this.dsPck.addRow();
        	}
        }

        // 저장
        this.saveBtn_onclick=function(obj,e)
        {
        	if(this.supCheckMdData(this.compBox))
        	{
        		//this.fn_setUserData(this.dsPck);
        		this.gfnService("batchPckProcess");
        	}
        }

        //  저장 후 callBack
        this.pckCallBack=function(svcID,errorCode,errorMsg)
        {
        	if(errorCode<0)
        	{
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	}else{
        		trace(this.dsPck.saveXML());
        		this.opener.pCode(1);
        		this.close();
        	}
        }

        // 닫기
        this.closeBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SC_PckAddPopForm_onload, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);
            this.compBox.useYnCombo.addEventHandler("onitemchanged", this.compBox_useYnCombo_onitemchanged, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);

        };

        this.loadIncludeScript("SC_PckAddPopForm.xfdl");

       
    };
}
)();

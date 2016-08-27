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
                this.set_name("WH_HosptlzPatSearchForm");
                this.set_classname("WH_HosptlzPatSearchForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,503,401);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">empInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\"/><Col id=\"outData\">gdsEmp=gdsEmp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">callhosptlzRsvtSeq</Col><Col id=\"URL\">his::won/hosptlzPat/callhosptlzRsvtSeq.do</Col><Col id=\"outData\">hosptlzRsvtNo=hosptlzRsvtNo</Col><Col id=\"callbackFunc\">callhosptlzRsvtSeqCallbackFunc</Col></Row><Row><Col id=\"serviceID\">registerHosptlzRsvt</Col><Col id=\"URL\">his::won/hosptlzPat/registerHosptlzRsvt.do</Col><Col id=\"inData\">dsHosptlzRsvt=dsHosptlzRsvt:u </Col><Col id=\"callbackFunc\">registerHosptlzRsvtCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGP080", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("gdsEmp", this);
            obj._setContents("<ColumnInfo><Column id=\"payDate\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"lunar\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GP080</Col><Col id=\"dsName\">dsGP080</Col></Row><Row><Col id=\"code\">SC070</Col><Col id=\"dsName\">dsSC070</Col></Row><Row><Col id=\"code\">SC071</Col><Col id=\"dsName\">dsSC071</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSC070", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSC071", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHosptlzRsvt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"hopeWard\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzRsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hopeRoom\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prdtFinanDate\" type=\"STRING\" size=\"256\"/><Column id=\"respDoctCd\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"uniqueNtc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("subCodeStc07", "absolute", "1.99%", "72", null, "27", "77.53%", null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("환자등록번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "23.86%", "72", null, "26", "50.1%", null, this);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Calendar("hosptlzHopeDateCal", "absolute", "23.86%", "116", null, "25", "45.92%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");

            obj = new Static("subCodeStc00", "absolute", "4.97%", "115", null, "27", "77.53%", null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("입원희망일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "4.97%", "158", null, "27", "77.53%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("진료과");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("trmtDeptNmCombo", "absolute", "23.86%", "159", null, "26", "50.1%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("dsGP080");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.getSetter("class").set("AreaCombo");

            obj = new Combo("wardCombo", "absolute", "24.06%", "202", null, "26", "50.1%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("dsSC070");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Static("subCodeStc03", "absolute", "4.97%", "201", null, "27", "77.53%", null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("희망병동");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc06", "absolute", "4.97%", "244", null, "27", "77.53%", null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("예상재원일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("prdtFinanDateEdt", "absolute", "23.86%", "245", null, "26", "67%", null, this);
            obj.set_taborder("9");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc08", "absolute", "4.97%", "287", null, "27", "77.53%", null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("특기사항");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea", "absolute", "23.86%", "288", null, "94", "20.08%", null, this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Combo("hroomCombo", "absolute", "75.35%", "201", null, "26", "1.79%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("dsSC071");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("");

            obj = new Static("subCodeStc04", "absolute", "56.26%", "201", null, "27", "26.24%", null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("희망병실");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "56.26%", "158", null, "27", "26.24%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("담당의사");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("respDoctNmCombo", "absolute", "75.35%", "159", null, "26", "1.99%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("gdsEmp");
            obj.set_codecolumn("empNo");
            obj.set_datacolumn("empNm");
            obj.set_enable("false");
            obj.getSetter("class").set("");

            obj = new Edit("rsvtNoEdt", "absolute", "78.53%", "116", null, "26", "12.33%", null, this);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc09", "absolute", "56.26%", "115", null, "27", "23.26%", null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("입원예약번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc05", "absolute", "56.26%", "72", null, "27", "23.26%", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("외래접수번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("outpaReceiptNoEdt", "absolute", "78.53%", "73", null, "26", "12.33%", null, this);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "82.31%", "352", null, "30", "2.78%", null, this);
            obj.set_taborder("20");
            obj.getSetter("class").set("DelBtn");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "0%", "4", "500", "60", null, null, this);
            obj.set_taborder("21");
            obj.set_text("           입원예약관리");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 503, 401, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WH_HosptlzPatSearchForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","rsvtNoEdt","value","dsHosptlzRsvt","hosptlzRsvtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WH_HosptlzPatSearchForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("WH_HosptlzPatSearchForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("WH_HosptlzPatSearchForm.xfdl", function() {
        /********************************************************************************

            입원예약등록 코드창
                                                                           			                        
          @Path			 	원무 - 입원예약등록
          @Description   병실이 부족할때 입원예약자로 등록함.						
          @Author		    황태경					 								                
         									 											                        
          Created on 2016. 06. 7.                             		 					        

        ********************************************************************************/

        //include "scripts::commonScripts.xjs";  
        //include "scripts::wonScripts.xjs";	           //원무 공통

        this.hosptlzRsvtNo="";
        var row; 

        

        //진료과의 선택에 따라 담당의사가 달라진다.
        this.trmtDeptNmCombo_oncloseup = function(obj,e)
        {
        	deptCd = this.trmtDeptNmCombo.value;  //진료과

            this.gdsEmp.filter("");
            this.gdsEmp.filter("jobrk=='"+'의사'+"' && deptCd=='"+deptCd+"'");  
            
            this.respDoctNmCombo.set_enable(true);
        }

        //확인 Btn
        this.saveBtn_onclick = function(obj,e)
        {		
        	row=this.dsHosptlzRsvt.rowposition;
        	this.dsHosptlzRsvt.setColumn(row,"patNo",this.patNoEd.value);   //환자등록번호
        	this.dsHosptlzRsvt.setColumn(row,"outpaReceiptNo",this.outpaReceiptNoEdt.value);   //외래접수번호
        	this.dsHosptlzRsvt.setColumn(row,"hosptlzPlnDate",this.hosptlzHopeDateCal.value);  //입원희망일
        	this.dsHosptlzRsvt.setColumn(row,"hosptlzRsvtNo",this.hosptlzRsvtNo);   //입원예약번호
        	this.dsHosptlzRsvt.setColumn(row,"trmtDeptCd",this.trmtDeptNmCombo.value);  //진료과
        	this.dsHosptlzRsvt.setColumn(row,"respDoctCd",this.respDoctNmCombo.value);    //담당의사
        	this.dsHosptlzRsvt.setColumn(row,"hopeWard",this.wardCombo.value);    //희망병동
        	this.dsHosptlzRsvt.setColumn(row,"hopeRoom",this.hroomCombo.value);    //희망병실
        	this.dsHosptlzRsvt.setColumn(row,"prdtFinanDate",this.prdtFinanDateEdt.value);    //예상재원일
        	this.dsHosptlzRsvt.setColumn(row,"uniqueNtc",this.TextArea.value);    //특기사항			

        	this.gfnService("registerHosptlzRsvt","false");
        }

        this.registerHosptlzRsvtCallbackFunc=function(svcID,errorCode,errorMsg){
        	if(errorCode=="1"){					
        		alert("입원예약등록 되었습니다.");
        		
        		var arrRtn = new Array;
        		var i=0;
        		arrRtn[i++] = this.dsHosptlzRsvt.getColumn(row,"patNo"); // 환자등록번호 0
        	    arrRtn[i++] = this.dsHosptlzRsvt.getColumn(row,"hosptlzRsvtNo"); // 입원예약번호 1
        	    
        	    this.opener.registerHosptlzRsvtInfo(arrRtn);		
        		this.close();
        	}else{
        		alert("입원예약 등록 중 오류발생");
        	}	
        }

        this.callhosptlzRsvtSeqCallbackFunc=function(svcID,errorCode,errorMsg){
        	if(errorCode=="1"){			
        		this.dsHosptlzRsvt.addRow();		
        		this.rsvtNoEdt.set_value(this.hosptlzRsvtNo);		
        	}else{
        		alert("입원예약번호 중 오류발생");
        	}	
        }

        this.WH_HosptlzPatSearchForm_onload = function(obj,e)
        {
        		
        	
        	this.patNoEd.set_value(this.parent.patNo);  //부모창에 받아온 환자등록번호 바로 셋팅
        	this.outpaReceiptNoEdt.set_value(this.parent.outpaReceiptNo);   //부모창에 받아온 외래접수번호 바로 셋팅
        	application.setVariable("hosptlzRsvtNo", this.hosptlzRsvtNo);			
        	this.gfnService("callhosptlzRsvtSeq","false");   //입원예약번호 구하기
        	
        	this.gfnBind();  
        	this.gfnService("empInfo","false");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.gdsEmp.addEventHandler("onrowposchanged", this.dsHmEmp_onrowposchanged, this);
            this.addEventHandler("onload", this.WH_HosptlzPatSearchForm_onload, this);
            this.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.trmtDeptNmCombo.addEventHandler("oncloseup", this.trmtDeptNmCombo_oncloseup, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);

        };

        this.loadIncludeScript("WH_HosptlzPatSearchForm.xfdl");

       
    };
}
)();

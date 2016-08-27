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
                this.set_name("HT_PopupRetAppForm");
                this.set_classname("HT_PopupRetAppForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,810,329);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAppointCk", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"appmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"appmtSubject\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAppoint", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"appmtSeq\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"appmtDiv\" type=\"STRING\" size=\"256\"/><Column id=\"appmtSubject\" type=\"STRING\" size=\"256\"/><Column id=\"appmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"transDept\" type=\"STRING\" size=\"256\"/><Column id=\"transDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"appmtyn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">registerApp</Col><Col id=\"URL\">erp45::hrs/appoint/registerAppoint.do</Col><Col id=\"inData\">dsAppoint=dsAppoint</Col><Col id=\"outData\"/><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">[Undefined]</Col></Row><Row><Col id=\"serviceID\">findcheckAppList</Col><Col id=\"URL\">erp45::hrs/appoint/findcheckAppList.do</Col><Col id=\"outData\">dsAppointCk=dsAppointCk</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div02", "absolute", "0.74%", "24", "12", "38", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::formBar.png')");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 10 10");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0.74%", "64", "783", "252", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "3.71%", "10", null, "27", "86.04%", null, this.Div03);
            obj.getSetter("taborder").set("23");
            obj.set_text("퇴직 호수");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("appSeqEdt", "absolute", "15.36%", "10", null, "26", "72.6%", null, this.Div03);
            obj.set_taborder("24");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "3.71%", "44", null, "27", "86.04%", null, this.Div03);
            obj.getSetter("taborder").set("25");
            obj.set_text("부서번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("retDeptCdEdt", "absolute", "15.36%", "44", null, "26", "72.6%", null, this.Div03);
            obj.set_taborder("26");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "3.71%", "78", null, "27", "86.04%", null, this.Div03);
            obj.getSetter("taborder").set("27");
            obj.set_text("사원번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "3.71%", "112", null, "27", "86.04%", null, this.Div03);
            obj.getSetter("taborder").set("28");
            obj.set_text("퇴직구분");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "3.71%", "146", null, "27", "86.04%", null, this.Div03);
            obj.getSetter("taborder").set("29");
            obj.set_text("발신부서");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "3.71%", "180", null, "27", "86.04%", null, this.Div03);
            obj.getSetter("taborder").set("30");
            obj.set_text("발령적용일자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("retEmpNoEdt", "absolute", "15.36%", "78", null, "26", "72.6%", null, this.Div03);
            obj.set_taborder("31");
            obj.style.set_align("middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("appNameEdt", "absolute", "15.36%", "112", null, "26", "72.6%", null, this.Div03);
            obj.set_taborder("32");
            obj.style.set_align("middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("appDeptCdEdt", "absolute", "15.36%", "146", null, "26", "72.6%", null, this.Div03);
            obj.set_taborder("33");
            obj.style.set_align("middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);
            obj = new Calendar("retCal", "absolute", "15.36%", "180", null, "26", "72.98%", null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.style.set_align("middle");
            obj = new Static("subCodeStc05", "absolute", "45.84%", "10", null, "27", "44.43%", null, this.Div03);
            obj.getSetter("taborder").set("35");
            obj.set_text("퇴직 사유");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div03.addChild(obj.name, obj);
            obj = new TextArea("retReasonArea", "absolute", "56.27%", "7", null, "178", "4.07%", null, this.Div03);
            obj.set_taborder("36");
            obj.style.set_background("#dfdfdfb3");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("retAppBtn", "absolute", "87.2%", "193", null, "30", "3.97%", null, this.Div03);
            obj.set_taborder("37");
            obj.set_text("퇴직발령");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("appDeptNmEdt", "absolute", "28.17%", "146", null, "26", "59.8%", null, this.Div03);
            obj.set_taborder("38");
            obj.style.set_align("middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);
            obj = new Combo("retAppCombo", "absolute", "28.17%", "112", null, "26", "59.8%", null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            var retAppCombo_innerdataset = new Dataset("retAppCombo_innerdataset", this.Div03.retAppCombo);
            retAppCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">34</Col><Col id=\"datacolumn\">해임</Col></Row><Row><Col id=\"codecolumn\">35</Col><Col id=\"datacolumn\">파면</Col></Row><Row><Col id=\"codecolumn\">41</Col><Col id=\"datacolumn\">의원면직</Col></Row><Row><Col id=\"codecolumn\">42</Col><Col id=\"datacolumn\">명예퇴직</Col></Row><Row><Col id=\"codecolumn\">43</Col><Col id=\"datacolumn\">희망퇴직</Col></Row><Row><Col id=\"codecolumn\">47</Col><Col id=\"datacolumn\">위원회위촉</Col></Row><Row><Col id=\"codecolumn\">49</Col><Col id=\"datacolumn\">임기만료</Col></Row></Rows>");
            obj.set_innerdataset(retAppCombo_innerdataset);
            obj.set_taborder("39");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("middle");
            obj.getSetter("class").set("AreaCombo");
            obj = new Edit("retEmpNmEdt", "absolute", "28.17%", "78", null, "26", "59.8%", null, this.Div03);
            obj.set_taborder("40");
            obj.style.set_align("middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("retDeptNmEdt", "absolute", "28.17%", "44", null, "26", "59.8%", null, this.Div03);
            obj.set_taborder("41");
            obj.getSetter("class").set("AreaEdt");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "8", "789", "51", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8.27%", "5", null, "51", "37.16%", null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("퇴직발령");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 783, 252, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 810, 329, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HT_PopupRetAppForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HT_PopupRetAppForm.xfdl", "scripts::commonTran.xjs");
        this.addIncludeScript("HT_PopupRetAppForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HT_PopupRetAppForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 퇴직예정자 퇴직발령                                            *
        *                                                                   *
        * @Path		    퇴직예정자 퇴직발령      	                        *
        * @Description  퇴직예정자를 퇴직 발령하며 발령대기상태로 만든다 *
        * @Author		최창근   					                        *
        * 								                                    *
        * Created on 2016. 6. 23.                             		        *
        *								                                    *
        ********************************************************************/

        
        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/
        //include "scripts::commonTran.xjs";
        //include "scripts::commonScripts.xjs";  

        
        /********************************************************************************
         변수
        ********************************************************************************/
        var culRow;
        var deptCd;
        var deptNm;
        var empNo;
        var empName;

        
        /********************************************************************************
          Load On 이벤트
        ********************************************************************************/
        this.HT_PopupRetAppForm_onload = function(obj,e)
        {	
        	culRow = this.dsAppoint.addRow();								//행추가
        	
        	deptCd = this.parent.deptCd;
        	deptNm = this.parent.deptNm;
        	empNo = this.parent.empNo;
        	empNm = this.parent.empNm;
        	
        	this.Div03.retDeptCdEdt.set_value(deptCd);
        	this.Div03.retDeptNmEdt.set_value(deptNm);
        	this.Div03.retEmpNoEdt.set_value(empNo);
        	this.Div03.retEmpNmEdt.set_value(empNm);
        	trace(deptCd+','+deptNm+','+empNo+','+empNm);
        	//발령자 중복체크 dsSet
        	this.gfnService("findcheckAppList"); 
        }

        
        /********************************************************************************
          콤보 드롭다운리스트가 닫힐 때 발생하는 이벤트
        ********************************************************************************/
        this.retAppCombo_oncloseup = function(obj,e)
        {
        	var code = this.Div03.retAppCombo.value; 	//코드
        	var value = this.Div03.retAppCombo.text;	//값
        	
        	this.Div03.appNameEdt.set_value(value);
        	
        	this.dsAppoint.setColumn(0, "appmtDiv", code);
        	this.dsAppoint.setColumn(0, "appmtSubject", value);
        }

        
        /********************************************************************************
          퇴직발령 버튼 이벤트
        ********************************************************************************/
        this.retAppBtn_onclick = function(obj,e)
        {
        	// lookup 첫번째 : 데이터셋의 검색할 열 ID
        	// lookup 두번째 : 검색하고싶은 값
        	// lookup 세번째 : 구하려는 열 ID
        	
        	// checkEmpNo 리턴값이 undefined 경우는  
        	// 현재 발령처리하려는 empNo와 DB data의 empNo 가 중복 안된다는 뜻
        	var checkEmpNo = this.dsAppointCk.lookup("empNo", empNo, "empNo");

        	if(checkEmpNo == undefined)
        	{
        		//변수 = value
        		var date = this.Div03.appSeqEdt.value;
        		var appDeptCd = this.Div03.appDeptCdEdt.value;					//발신부서번호
        		var appDeptNm = this.Div03.appDeptNmEdt.value;					//발신부서명
        		var retCal = this.Div03.retCal.value;							//발령적용일자
        		
        		//dsAppoint set
        		this.dsAppoint.setColumn(0, "deptCd", deptCd);					//부서번호
        		this.dsAppoint.setColumn(0, "deptNm", deptNm);					//부서명
        		this.dsAppoint.setColumn(0, "empNo", empNo);					//사원번호
        		this.dsAppoint.setColumn(0, "empNm", empNm);					//사원명
        		
        		this.dsAppoint.setColumn(0, "appmtSeq", date);					//시퀀스번호
        		this.dsAppoint.setColumn(0, "transDept", appDeptCd);			//발신부서번호
        		this.dsAppoint.setColumn(0, "transDeptNm", appDeptNm);			//발신부서명
        		this.dsAppoint.setColumn(0, "appmtDate", retCal);				//발령적용일자
        		this.dsAppoint.setColumn(0, "appmtyn", 'Y');					//발령상세유무
        		
        		if(confirm("해당사원의 퇴직발령을 진행하시겠습니까?"))
        		{
        			var argument= 'empno='+empNo;
        			this.dsService.setColumn(0,"argument",argument);

        			this.gfnService("registerApp");
        			
        		}
        	}else{
        		alert("이미 해당 사원은 퇴직발령처리가 된 상태입니다");
        		return;
        	}

        	
        	
        }

        
        /********************************************************************************
          콜백 함수
        ********************************************************************************/
        this.CallbackFunc = function(trid,errcd,errmsg)
        {
        	if(errcd<0)
        	{
        		alert(errmsg);
        		return;
        	}
        	
        	if(trid == 'registerApp')
        	{
        		alert("퇴직발령이 완료되었습니다");
        		alert("현재창을 종료합니다.");
        		close();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HT_PopupRetAppForm_onload, this);
            this.Div03.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.retAppBtn.addEventHandler("onclick", this.retAppBtn_onclick, this);
            this.Div03.retAppCombo.addEventHandler("oncloseup", this.retAppCombo_oncloseup, this);

        };

        this.loadIncludeScript("HT_PopupRetAppForm.xfdl");

       
    };
}
)();

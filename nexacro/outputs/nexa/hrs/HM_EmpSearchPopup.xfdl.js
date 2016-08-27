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
                this.set_name("HM_EmpSearchPopup");
                this.set_classname("HM_EmpSearchPopup");
                this._setFormPosition(0,0,427,546);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">empInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\">dsHmEmp=dsHmEmp</Col><Col id=\"outData\">dsHmEmp=gdsEmp</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmEmp", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0%", "0", "425", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar2.jpg')");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "13.18%", "8", null, "36", "63.76%", null, this.Div01);
            obj.getSetter("taborder").set("0");
            obj.set_text("사원검색");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("empGrid", "absolute", "9.37%", "113", null, "407", "11.48%", null, this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsHmEmp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"177\"/><Column size=\"132\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"사원명\"/></Band><Band id=\"body\"><Cell text=\"bind:empNo\"/><Cell col=\"1\" text=\"bind:empNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "306", "61", "90", "32", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("searchEd", "absolute", "10.77%", "61", null, "23", "30.21%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Radio("empRadio", "absolute", "51", "84", "149", "25", null, null, this);
            this.addChild(obj.name, obj);
            var empRadio_innerdataset = new Dataset("empRadio_innerdataset", this.empRadio);
            empRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사원번호</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사원명</Col></Row></Rows>");
            obj.set_innerdataset(empRadio_innerdataset);
            obj.set_taborder("5");
            obj.set_columncount("2");
            obj.set_index("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.style.set_font("antialias 9 HY수평선B");
            obj.style.set_border("0px none #000000ff");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaRadio");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 425, 60, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar2.jpg')");
            		p.set_positionstep("-1");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 427, 546, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HM_EmpSearchPopup");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","empGrid","binddataset","dsHmEmp","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HM_EmpSearchPopup.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("HM_EmpSearchPopup.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사공통 사원정보 팝업                                         *
        *                                                                   *
        * @Path		    사원정보(사원명, 사원번호) 팝업                 *
        * @Description  사원정보(사원명, 사원번호) 검색팝업 화면       *
        * @Author		최창근   					                        *
        * 								                                    *
        * Created on 2016. 5.  26.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonTransaction.xjs";

        

        
        this.searchBtn_onclick = function(obj,e)
        {
        	//this.dsHmEmp.clear();
        	var argument = "";
        	if(this.empRadio.value=="N"){
        		argument = "empNm="+this.searchEd.value;
        	}
        	else{
        		argument = "empNo="+this.searchEd.value;
        	}
        	this.dsService.setColumn(0, "argument", argument);
        	trace(this.dsService.saveXML());
        	this.gfnService("empInfo",true);
        }

        this.empGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array;   // arrRtn에 차곡차곡담기위해 배열로 만든다
        	var i=0;
        	arrRtn[i++] = this.dsHmEmp.getColumn(e.row,"empNo");	// 사번
        	arrRtn[i++] = this.dsHmEmp.getColumn(e.row,"empNm");	// 사원명
        	arrRtn[i++] = this.dsHmEmp.getColumn(e.row,"deptCd");	// 부서코드
        	arrRtn[i++] = this.dsHmEmp.getColumn(e.row,"deptNm");	// 부서명
        	arrRtn[i++] = this.dsHmEmp.getColumn(e.row,"jobrk");	// 직급
        	//this.parent.idEd.set_value(arrRtn);
        	//선택값의empNo empNm deptCd deptNm jobrk를 담는다 
        	//43001,      나이팅게일,  80000,      인사팀,    매니져1급간호사
        	//arrRtn[0],  arrRtn[1],    arrRtn[2],  arrRtn[3],  arrRtn[4]  배열을만들어 차례로 담는다.
         
        	  this.opener.setEmpInfo(arrRtn);  //더블클릭시 호출한곳으로 this.parent.hrs(처음호출할때준값)와 arrRtn가져간다
        //	  this.opener.setEmpInfo(arrRtn); 
        	//application.close(arrRtn);
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHmEmp.addEventHandler("onrowposchanged", this.ds_emp_onrowposchanged, this);
            this.addEventHandler("onload", this.HM_EmpSearchPopup_onload, this);
            this.empGrid.addEventHandler("oncelldblclick", this.empGrid_oncelldblclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.empRadio.addEventHandler("onitemclick", this.Radio00_onitemclick, this);

        };

        this.loadIncludeScript("HM_EmpSearchPopup.xfdl");

       
    };
}
)();

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
                this.set_name("HG_YeonchaForm");
                this.set_classname("HG_YeonchaForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">searchYeonchaList</Col><Col id=\"URL\">his::hrs/guntae/findYeonchaList.do</Col><Col id=\"outData\">dsYeoncha=dsYeoncha</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">createYeoncha</Col><Col id=\"URL\">his::hrs/guntae/createYeoncha.do</Col><Col id=\"inData\">dsYeoncha=dsYeoncha:u</Col><Col id=\"outData\">dsYeoncha=dsYeoncha</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYeoncha", this);
            obj._setContents("<ColumnInfo><Column id=\"belongYear\" type=\"STRING\" size=\"256\"/><Column id=\"standardYeoncha\" type=\"STRING\" size=\"256\"/><Column id=\"yeonchaDays\" type=\"STRING\" size=\"256\"/><Column id=\"gunsokDays\" type=\"STRING\" size=\"256\"/><Column id=\"jojeongDays\" type=\"STRING\" size=\"256\"/><Column id=\"totalHolidays\" type=\"STRING\" size=\"256\"/><Column id=\"compsYeoncha\" type=\"STRING\" size=\"256\"/><Column id=\"compsBojeonDays\" type=\"STRING\" size=\"256\"/><Column id=\"yeonwolchaBojeonDays\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this.titleDiv);
            obj.getSetter("taborder").set("0");
            obj.set_text("연차발생");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("mainDiv", "absolute", "0.8%", "55", null, "697", "1.12%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);
            obj = new Grid("holidayRequestGrid", "absolute", "0.65%", "40", null, "649", "4.16%", null, this.mainDiv);
            obj.set_taborder("57");
            obj.set_binddataset("dsYeoncha");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"124\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" colspan=\"2\" text=\"사원\"/><Cell col=\"2\" rowspan=\"2\" colspan=\"2\" text=\"부서\"/><Cell col=\"4\" rowspan=\"2\" text=\"연차기준일\"/><Cell col=\"5\" colspan=\"3\" text=\"발생\"/><Cell col=\"8\" rowspan=\"2\" text=\"만근시 휴가일수\"/><Cell col=\"9\" colspan=\"2\" text=\"휴가보상 가능일수\"/><Cell col=\"11\" rowspan=\"2\" text=\"연월차 보전일수\"/><Cell row=\"1\" col=\"5\" text=\"연차\"/><Cell row=\"1\" col=\"6\" text=\"근속\"/><Cell row=\"1\" col=\"7\" text=\"조정\"/><Cell row=\"1\" col=\"9\" text=\"연차\"/><Cell row=\"1\" col=\"10\" text=\"보전\"/></Band><Band id=\"body\"><Cell text=\"bind:empNo\"/><Cell col=\"1\" text=\"bind:empNm\"/><Cell col=\"2\" text=\"bind:deptCd\"/><Cell col=\"3\" text=\"bind:deptNm\"/><Cell col=\"4\" text=\"bind:standardYeoncha\" mask=\"####.##.##\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:yeonchaDays\" mask=\"##일\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:gunsokDays\" mask=\"##일\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:jojeongDays\" mask=\"##일\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:totalHolidays\" mask=\"##일\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:compsYeoncha\" mask=\"##일\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:compsBojeonDays\" mask=\"##일\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:yeonwolchaBojeonDays\" mask=\"##일\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("empnoStc", "absolute", "51.14%", "6", null, "27", "45.35%", null, this.mainDiv);
            obj.getSetter("taborder").set("59");
            obj.set_text("사번");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Edit("empnoEdt", "absolute", "56.2%", "7", null, "26", "39.07%", null, this.mainDiv);
            obj.set_taborder("60");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Edit("empnmEdt", "absolute", "71.7%", "7", null, "26", "23.41%", null, this.mainDiv);
            obj.set_taborder("62");
            obj.set_enable("false");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("empnmStc", "absolute", "66.64%", "7", null, "27", "29.85%", null, this.mainDiv);
            obj.getSetter("taborder").set("63");
            obj.set_text("성명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("hdateStc", "absolute", "1.22%", "6", null, "30", "91.76%", null, this.mainDiv);
            obj.getSetter("taborder").set("64");
            obj.set_text("기간");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Spin("yearSpin", "absolute", "8.32%", "5", null, "30", "85.48%", null, this.mainDiv);
            obj.set_taborder("65");
            obj.set_value("2016");
            obj.getSetter("class").set("AreaSpin");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15.09%", "7", null, "24", "82.71%", null, this.mainDiv);
            obj.getSetter("taborder").set("66");
            obj.set_text("년");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("yeonchaCreateBtn", "absolute", "78.14%", "5", null, "30", "14.68%", null, this.mainDiv);
            obj.set_taborder("67");
            obj.set_text("자료생성");
            obj.set_enable("false");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("empSearchBtn", "absolute", "62.48%", "4", null, "32", "34.91%", null, this.mainDiv);
            obj.set_taborder("68");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);
            obj = new Button("searchYeonchaBtn", "absolute", "86.87%", "4", null, "32", "5.79%", null, this.mainDiv);
            obj.set_taborder("69");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.mainDiv.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.titleDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.titleDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1233, 721, this.mainDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");
            		p.set_enableevent("false");

            	}
            );
            this.mainDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HG_YeonchaForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HG_YeonchaForm.xfdl", "scripts::commonScript.xjs");
        this.addIncludeScript("HG_YeonchaForm.xfdl", "scripts::hrsScripts.xjs");
        this.addIncludeScript("HG_YeonchaForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("HG_YeonchaForm.xfdl", "scripts::commonPopup.xjs");
        this.registerScript("HG_YeonchaForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 연차관리                                                         *
        *                                                                   *
        * @Path		    연차발생           	                        	*
        * @Description  연차조회, 발생 									*
        * @Author		이병민 					                        *
        * 								                                    *
        * Created on 2016. 06. 07.                             		        *
        *								                                    *
        ********************************************************************/

        
        /***************************************************************************************************
        *                                         공통 Script Include                                      *
        ***************************************************************************************************/
        //include "scripts::commonScript.xjs";
        //include "scripts::hrsScripts.xjs";
        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonPopup.xjs";

        
        /***************************************************************************************************
        *                                          화면 변수 선언부                                        *
        ***************************************************************************************************/
        var belongYear;
        var empNo;
        var empNm;
        var deptCd;
        var deptNm;
        var crrentRow;
        var countEmp;
        var pms;
        var deptNm;

        
        /***************************************************************************************************
        *                                         콜백 함수 셋팅                                           *
        ***************************************************************************************************/
        this.CallbackFunc = function CallbackFunc(svcID,errorCode,errorMsg)
        {
        	if(errorCode<0)
        	{
        		
        		this.gfn_errorPopup(svcID, errorMsg);
        		return;
        	
        	}else{
        		
        		
        		if(svcID=="searchYeonchaList")
        		{
        			
        			var rowCount = this.dsYeoncha.getRowCount();
        			
        			if(rowCount== 0)
        			{
        			
        				alert("조회 내용이 없습니다.");
        				return;
        		
        			}else
        			{
        			
        				alert("조회성공");
        			
        			}
        		
        		
        		}
        		if(svcID=="createYeoncha")
        		{
        		
        			alert("정상 처리되었습니다.");
        		
        		}
        	
        	}
        	
        }

        /***************************************************************************************************
        *                                         onload Event                                      	   *
        ***************************************************************************************************/
        this.HG_YeonchaForm_onload = function(obj,e)
        {
        	belongYear = this.mainDiv.yearSpin.value;
        	empNo = application.gdsEmp.getColumn(0,"empNo");
        	empNm = application.gdsEmp.getColumn(0,"empNm");
        	deptCd = application.gdsEmp.getColumn(0,"deptCd");
        	deptNm = application.gdsEmp.getColumn(0,"deptNm");
        	
        	this.mainDiv.empnoEdt.set_value(empNo);
        	this.mainDiv.empnmEdt.set_value(empNm);
        	
        	pms = application.gdsEmp.getColumn(0,"pms");
        	
        	if(pms == 'admin' && deptNm == '인사팀'){
        		
        		this.mainDiv.yeonchaCreateBtn.set_enable(true);
        	
        	}
        }

        
        /***************************************************************************************************
        *                                         사원 조회 버튼 클릭 Event                            	   *
        ***************************************************************************************************/
        this.mainDiv_empSearchBtn_onclick = function(obj,e)
        {
        	this.gfn_EmpPopup();
        }

        
        /***************************************************************************************************
        *                                        사원 셋팅 				    		                       *
        ***************************************************************************************************/
        this.setEmpInfo = function(arrRtn){

        	this.mainDiv.empnoEdt.set_value(arrRtn[0]);
        	this.mainDiv.empnmEdt.set_value(arrRtn[1]);
        	//empNo = this.mainDiv.empnoEdt.set_value(arrRtn[0]);
        	//empNm = this.mainDiv.empnmEdt.set_value(arrRtn[1]);
        	empNo=this.mainDiv.empnoEdt.value;
        	empNm=this.mainDiv.empnmEdt.value;
        	deptCd = arrRtn[2];
        	deptNm = arrRtn[3];
        	alert("empNo:"+empNo+",empNm:"+empNm);

        }

        
        /***************************************************************************************************
        *                                         조회 버튼 클릭 Event     		                       	   *
        ***************************************************************************************************/

        
        this.mainDiv_searchYeonchaBtn_onclick = function(obj,e)
        {
        	alert(this.mainDiv.yearSpin.value);
        	var argument = 'empNo='+empNo+' belongYear='+belongYear;
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("searchYeonchaList");
        }

        
        /***************************************************************************************************
        *                                         자료생성 버튼 클릭 Event     		                       	   *
        ***************************************************************************************************/
        this.mainDiv_yeonchaCreateBtn_onclick = function(obj,e)
        {
        	alert("생성조건:empNo="+empNo+",belongYear="+belongYear);
        	var argument = 'empNo='+empNo+' belongYear='+belongYear;
        	this.dsService.setColumn(1,"argument",argument);
        	this.gfnService("createYeoncha");
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HG_YeonchaForm_onload, this);
            this.mainDiv.holidayRequestGrid.addEventHandler("oncellclick", this.mainDiv_holidayRequestGrid_oncellclick, this);
            this.mainDiv.empnoStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.mainDiv.empnmStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.mainDiv.yearSpin.addEventHandler("onspin", this.yearSpin_onspin, this);
            this.mainDiv.yeonchaCreateBtn.addEventHandler("onclick", this.mainDiv_yeonchaCreateBtn_onclick, this);
            this.mainDiv.empSearchBtn.addEventHandler("onclick", this.mainDiv_empSearchBtn_onclick, this);
            this.mainDiv.searchYeonchaBtn.addEventHandler("onclick", this.mainDiv_searchYeonchaBtn_onclick, this);

        };

        this.loadIncludeScript("HG_YeonchaForm.xfdl");

       
    };
}
)();

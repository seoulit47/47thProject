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
                this.set_name("MB_PrscDtlPopupForm");
                this.set_classname("MB_PrscDtlPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,500,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPrscDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"prescNo\" type=\"undefined\" size=\"100\"/><Column id=\"patType\" type=\"undefined\" size=\"100\"/><Column id=\"mtrlYn\" type=\"undefined\" size=\"100\"/><Column id=\"times\" type=\"undefined\" size=\"100\"/><Column id=\"remark\" type=\"undefined\" size=\"100\"/><Column id=\"amount\" type=\"undefined\" size=\"100\"/><Column id=\"insurance\" type=\"undefined\" size=\"100\"/><Column id=\"irradiYn\" type=\"undefined\" size=\"100\"/><Column id=\"purpose\" type=\"undefined\" size=\"100\"/><Column id=\"prnYn\" type=\"undefined\" size=\"100\"/><Column id=\"prescCd\" type=\"undefined\" size=\"100\"/><Column id=\"antiYn\" type=\"undefined\" size=\"100\"/><Column id=\"emgYn\" type=\"undefined\" size=\"100\"/><Column id=\"holdingYn\" type=\"undefined\" size=\"100\"/><Column id=\"mtrlNm\" type=\"undefined\" size=\"100\"/><Column id=\"takeWay\" type=\"undefined\" size=\"100\"/><Column id=\"unit\" type=\"undefined\" size=\"100\"/><Column id=\"trfuLoc\" type=\"undefined\" size=\"100\"/><Column id=\"ast\" type=\"undefined\" size=\"100\"/><Column id=\"volume\" type=\"undefined\" size=\"100\"/><Column id=\"prescType\" type=\"undefined\" size=\"100\"/><Column id=\"selectCareYn\" type=\"undefined\" size=\"100\"/><Column id=\"examWishDate\" type=\"undefined\" size=\"100\"/><Column id=\"clncStudyYn\" type=\"undefined\" size=\"100\"/><Column id=\"mtrlBodyPart\" type=\"undefined\" size=\"100\"/><Column id=\"bloodDonor\" type=\"undefined\" size=\"100\"/><Column id=\"prescDtlNm\" type=\"undefined\" size=\"100\"/><Column id=\"days\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrsc", this);
            obj._setContents("<ColumnInfo><Column id=\"prescNo\" type=\"undefined\" size=\"100\"/><Column id=\"patNo\" type=\"undefined\" size=\"100\"/><Column id=\"prescDate\" type=\"undefined\" size=\"100\"/><Column id=\"prescDoc\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPrscList</Col><Col id=\"URL\">his::med/base/findPrscList.do</Col><Col id=\"outData\">dsPrsc=dsPrsc dsPrscDtl=dsPrscDtl</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("idsPrscType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">기본</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">검사</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">수혈</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">재활</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.6%", "8", "487", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10.27%", "-4", null, "60", "39.84%", null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("처방상세");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stDiv08", "absolute", "1.2%", "70", null, "27", "84%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("처방전 구분");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("#000000ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("prscTypeCombo", "absolute", "17.6%", "71", null, "25", "61.4%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@idsPrscType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Grid("prscDtlGrid", "absolute", "1.2%", "107", null, "284", "1%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsPrscDtl");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"77\"/><Column size=\"77\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"처방전 구분\"/><Cell col=\"1\" text=\"처방전 번호\"/><Cell col=\"2\" text=\"환자번호\"/><Cell col=\"3\" text=\"의사번호\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:prescType\" combodataset=\"idsPrscType\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"1\" text=\"bind:prescNo\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:prescNo\" combodataset=\"dsPrsc\" combocodecol=\"prescNo\" combodatacol=\"patNo\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:prescNo\" combodataset=\"dsPrsc\" combocodecol=\"prescNo\" combodatacol=\"prescDoc\"/><Cell col=\"4\" text=\"bind:remark\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "404", "68", "90", "32", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 487, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MB_PrscDtlPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","prscTypeCombo","value","dsAtTaxinv","purchSalesDiv");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MB_PrscDtlPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("MB_PrscDtlPopupForm.xfdl", function() {
        /********************************************************************************                                                                            
        처방상세 조회화면                                           						                                                                         
        @Path			진료처방 공통(Medication Base)              				   				
        @Description	처방상세 조회 다이얼로그						
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 6. 19.                             		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";  

        
        // 조회
        this.searchBtn_onclick = function(obj,e)
        {
            var prscType = this.prscTypeCombo.value;
           
            if(prscType != null){
        		this.dsService.setColumn(0, 4, "prscType=" + prscType);
            }
           
            this.gfnService("findPrscList");
        }

        this.prscDtlGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array();
            arrRtn[0] = this.dsPrscDtl.getColumn(e.row, "prescNo"); 
            arrRtn[1] = this.dsPrsc.lookup("prescNo", this.dsPrscDtl.getColumn(e.row, "prescNo"), "patNo"); 
            arrRtn[2] = this.dsPrsc.lookup("prescNo", this.dsPrscDtl.getColumn(e.row, "prescNo"), "prescDoc"); 

            this.opener.setPrscInfo(arrRtn);
            this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.stDiv08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.prscTypeCombo.addEventHandler("onitemchanged", this.taxinvDiv_purchSalesComb_onitemchanged, this);
            this.prscDtlGrid.addEventHandler("oncelldblclick", this.prscDtlGrid_oncelldblclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("MB_PrscDtlPopupForm.xfdl");

       
    };
}
)();

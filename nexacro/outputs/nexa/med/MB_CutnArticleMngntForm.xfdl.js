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
                this.set_name("MB_CautionArticleMngntForm");
                this.set_classname("MB_CautionArticleMngntForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCutnArticle", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"cautionCd\" type=\"STRING\" size=\"256\"/><Column id=\"cautionNm\" type=\"STRING\" size=\"256\"/><Column id=\"abbr\" type=\"STRING\" size=\"256\"/><Column id=\"inputDv\" type=\"STRING\" size=\"256\"/><Column id=\"cutnCategoryCd\" type=\"STRING\" size=\"256\"/><Column id=\"cutnCategoryNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYb\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCutnArticleList</Col><Col id=\"URL\">his::med/base/findCutnArticleList.do</Col><Col id=\"outData\">dsCutnArticle=dsCutnArticle</Col></Row><Row><Col id=\"serviceID\">batchCutnArticleProcess</Col><Col id=\"URL\">his::med/base/batchCutnArticleProcess.do</Col><Col id=\"inData\">dsCutnArticle=dsCutnArticle:u</Col><Col id=\"outData\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInptYn", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">C</Col><Col id=\"name\">Cheak Box</Col></Row><Row><Col id=\"name\">Free Text</Col><Col id=\"code\">T</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCautionCategory", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">B</Col><Col id=\"name\">혈액주의</Col></Row><Row><Col id=\"name\">접촉주의</Col><Col id=\"code\">T</Col></Row><Row><Col id=\"name\">호흡기주의</Col><Col id=\"code\">R</Col></Row><Row><Col id=\"name\">격리</Col><Col id=\"code\">S</Col></Row><Row><Col id=\"name\">수혈부작용</Col><Col id=\"code\">BT</Col></Row><Row><Col id=\"name\">기타</Col><Col id=\"code\">C</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div04", "absolute", "0%", "4", null, "60", "0.16%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "0", null, "60", "74.4%", null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("주의사항 항목 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Grid("cutnArticleGrid", "absolute", "1.44%", "78", null, "673", "38%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("dsCutnArticle");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"21\"/><Column size=\"80\"/><Column size=\"174\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"caution코드\"/><Cell col=\"2\" text=\"caution명\"/><Cell col=\"3\" text=\"약어\"/><Cell col=\"4\" text=\"입력구분\"/><Cell col=\"5\" text=\"분류코드\"/><Cell col=\"6\" text=\"분류명\"/><Cell col=\"7\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:cautionCd\"/><Cell col=\"2\" text=\"bind:cautionNm\"/><Cell col=\"3\" text=\"bind:abbr\"/><Cell col=\"4\" text=\"bind:inputDv\"/><Cell col=\"5\" text=\"bind:cutnCategoryCd\"/><Cell col=\"6\" text=\"bind:cutnCategoryNm\"/><Cell col=\"7\" text=\"bind:useYb\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("cutnArticleDiv", "absolute", "62.48%", "79", null, "672", "1.36%", null, this);
            obj.set_taborder("3");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Combo("cutnCategoryNmCombo", "absolute", "39.11%", "354", null, "30", "29.11%", null, this.cutnArticleDiv);
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_innerdataset("@dsCautionCategory");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj = new Edit("addrEd", "absolute", "39.11%", "224", null, "30", "41.78%", null, this.cutnArticleDiv);
            obj.set_taborder("39");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Edit("cautionNmEd", "absolute", "39.11%", "162", null, "30", "13.11%", null, this.cutnArticleDiv);
            obj.set_taborder("40");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Edit("cautionCdEd", "absolute", "39.11%", "98", null, "30", "41.33%", null, this.cutnArticleDiv);
            obj.set_taborder("41");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "3.11%", "568", null, "90", "2.89%", null, this.cutnArticleDiv);
            obj.set_taborder("42");
            obj.style.set_border("1 solid #808080ff");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.04%", "10", null, "34", "2.38%", null, this.cutnArticleDiv.Div00);
            obj.getSetter("taborder").set("5");
            obj.set_text("※ 코드 추가방법 : 1. 등록 버튼 클릭");
            obj.style.set_color("darkblue");
            obj.style.set_font("13 Dotum");
            this.cutnArticleDiv.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "4.04%", "48", null, "34", "2.38%", null, this.cutnArticleDiv.Div00);
            obj.getSetter("taborder").set("6");
            obj.set_text("                             2. 내용 입력 후 [저장] 버튼 클릭");
            obj.style.set_color("darkblue");
            obj.style.set_font("13 Dotum");
            this.cutnArticleDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "39.11%", "413", null, "35", "33.11%", null, this.cutnArticleDiv);
            obj.set_taborder("43");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.style.set_font("13 Dotum");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "7.56%", "98", null, "30", "65.11%", null, this.cutnArticleDiv);
            obj.getSetter("taborder").set("44");
            obj.set_text("항목코드");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "7.56%", "162", null, "30", "65.11%", null, this.cutnArticleDiv);
            obj.getSetter("taborder").set("45");
            obj.set_text("항목명");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "7.56%", "226", null, "30", "65.11%", null, this.cutnArticleDiv);
            obj.getSetter("taborder").set("46");
            obj.set_text("약어");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "7.56%", "290", null, "30", "65.11%", null, this.cutnArticleDiv);
            obj.getSetter("taborder").set("47");
            obj.set_text("입력구분");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "7.56%", "354", null, "30", "65.11%", null, this.cutnArticleDiv);
            obj.getSetter("taborder").set("48");
            obj.set_text("분류");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "7.56%", "418", null, "30", "65.11%", null, this.cutnArticleDiv);
            obj.getSetter("taborder").set("49");
            obj.set_text("사용여부");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Button("searchBtn", "absolute", "72%", "24", null, "32", "8%", null, this.cutnArticleDiv);
            obj.set_taborder("50");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Button("addBtn", "absolute", "48.89%", "472", null, "32", "31.11%", null, this.cutnArticleDiv);
            obj.set_taborder("51");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "72%", "472", null, "32", "8%", null, this.cutnArticleDiv);
            obj.set_taborder("52");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Button("delBtn", "absolute", "7.56%", "24", null, "32", "72.44%", null, this.cutnArticleDiv);
            obj.set_taborder("53");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj = new Radio("inputDvRadio", "absolute", "40.44%", "287", null, "38", "8.22%", null, this.cutnArticleDiv);
            this.cutnArticleDiv.addChild(obj.name, obj);
            obj.set_taborder("54");
            obj.set_innerdataset("@dsInptYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_direction("vertical");
            obj.style.set_font("13 Dotum");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 90, this.cutnArticleDiv.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("42");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.cutnArticleDiv.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 672, this.cutnArticleDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.cutnArticleDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MB_CautionArticleMngntForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","cutnArticleDiv.cautionCdEd","value","dsCutnArticle","cautionCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cutnArticleDiv.cautionNmEd","value","dsCutnArticle","cautionNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cutnArticleDiv.addrEd","value","dsCutnArticle","abbr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cutnArticleDiv.inputDvRadio","value","dsCutnArticle","inputDv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","cutnArticleDiv.cutnCategoryNmCombo","value","dsCutnArticle","cutnCategoryCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cutnArticleDiv.CheckBox00","value","dsCutnArticle","useYb");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MB_CutnArticleMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("MB_CutnArticleMngntForm.xfdl", function() {
        /*******************************************************************************************
        *                                                                               			*
        * 주의사항 항목 관리  																	*
        *                                                                               			*
        * @Path		    MB_CntnArticleMngntForm														*
        *																							*
        * @Description 	환자 주의사항 항목관리에서 주의사항 항목을  등록,수정,삭제,조회한다.*
        *               																			*
        * @Author	    강찬모    						                                			*
        * 									                                            			*
        * Created on 2016. 06. 26	                          		                    			*
        *									                                            			*
        ********************************************************************************************/

        /***************************************************************************************************
        *                                         공통 Script Include                                      *
        ***************************************************************************************************/
        //include "scripts::commonScripts.xjs";

        /***************************************************************************************************
        *                                      폼 EVENT START                                        	   *
        /*-------------------------------------------------------------------------------------------------+
        >>  onload 이벤트
        +-------------------------------------------------------------------------------------------------*/
        this.MB_CautionArticleMngntForm_onload = function(obj,e)
        {
        	this.gfnService("findCutnArticleList", false);
        }

        /***************************************************************************************************
        *                                         기타 	바인딩                                             *
        ***************************************************************************************************/

        
        this.cutnArticleDiv_cutnCategoryNmCombo_onitemchanged = function(obj,e)
        {
        	var no = this.cutnArticleGrid.currentrow;
        	var setCutnCategoryCd = this.cutnArticleDiv.cutnCategoryNmCombo.text;
        	this.dsCutnArticle.setColumn(no, "cutnCategoryNm", setCutnCategoryCd);
        }

        /***************************************************************************************************
        *                                        주의사항 항목 삭제                                      *
        ***************************************************************************************************/
        this.cutnArticleDiv_delBtn_onclick = function(obj,e)
        {
        	this.dsCutnArticle.deleteRow(this.cutnArticleGrid.currentrow);
        	this.gfnService("batchCutnArticleProcess", false);
        }

        /***************************************************************************************************
        *                                        주의사항 항목 추가                                      *
        ***************************************************************************************************/
        this.cutnArticleDiv_addBtn_onclick = function(obj,e)
        {
        	this.dsCutnArticle.addRow();
        	var no = this.ctrtGrid.currentrow;
        	
        }

        /***************************************************************************************************
        *                                      주의사항 항목 새로고침                                   *
        ***************************************************************************************************/
        this.cutnArticleDiv_searchBtn_onclick = function(obj,e)
        {
        	this.gfnService("findCutnArticleList", false);
        }

        /***************************************************************************************************
        *                                     주의사항 항목 일괄저장                                    *
        ***************************************************************************************************/
        this.cutnArticleDiv_saveBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchCutnArticleProcess", false);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.MB_CautionArticleMngntForm_onload, this);
            this.cutnArticleDiv.cutnCategoryNmCombo.addEventHandler("onitemchanged", this.cutnArticleDiv_cutnCategoryNmCombo_onitemchanged, this);
            this.cutnArticleDiv.searchBtn.addEventHandler("onclick", this.cutnArticleDiv_searchBtn_onclick, this);
            this.cutnArticleDiv.addBtn.addEventHandler("onclick", this.cutnArticleDiv_addBtn_onclick, this);
            this.cutnArticleDiv.saveBtn.addEventHandler("onclick", this.cutnArticleDiv_saveBtn_onclick, this);
            this.cutnArticleDiv.delBtn.addEventHandler("onclick", this.cutnArticleDiv_delBtn_onclick, this);

        };

        this.loadIncludeScript("MB_CutnArticleMngntForm.xfdl");

       
    };
}
)();

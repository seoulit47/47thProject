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
                this.set_name("MB_CutnRltnCheakMngntForm");
                this.set_classname("MB_CutnRltnCheakMngntForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCutnRltnExmnt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"cutnCategoryCd\" type=\"STRING\" size=\"256\"/><Column id=\"cutnCategoryNm\" type=\"STRING\" size=\"256\"/><Column id=\"cautionCd\" type=\"STRING\" size=\"256\"/><Column id=\"cautionNm\" type=\"STRING\" size=\"256\"/><Column id=\"relationExmntCd\" type=\"STRING\" size=\"256\"/><Column id=\"ordnm\" type=\"STRING\" size=\"256\"/><Column id=\"cheakResult\" type=\"STRING\" size=\"256\"/><Column id=\"speciesVirus\" type=\"STRING\" size=\"256\"/><Column id=\"bacgennm\" type=\"STRING\" size=\"256\"/><Column id=\"virus\" type=\"STRING\" size=\"256\"/><Column id=\"bacnm\" type=\"STRING\" size=\"256\"/><Column id=\"antimicrobial\" type=\"STRING\" size=\"256\"/><Column id=\"antinm\" type=\"STRING\" size=\"256\"/><Column id=\"sensitivityResult\" type=\"STRING\" size=\"256\"/><Column id=\"relationDisease\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"relationExmntSeqNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCutnRltnExmntList</Col><Col id=\"URL\">his::med/base/findCutnRltnExmntList.do</Col><Col id=\"outData\">dsCutnRltnExmnt=dsCutnRltnExmnt</Col></Row><Row><Col id=\"serviceID\">batchCutnRltnExmntProcess</Col><Col id=\"URL\">his::med/base/batchCutnRltnExmntProcess.do</Col><Col id=\"inData\">dsCutnRltnExmnt=dsCutnRltnExmnt:u</Col></Row><Row><Col id=\"serviceID\">findOrdList</Col><Col id=\"URL\">his::med/base/findOrdList.do</Col><Col id=\"inData\">[Undefined]</Col><Col id=\"outData\">dsOrd=dsOrd</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findSpeciesVirusList</Col><Col id=\"URL\">his::med/base/findSpeciesVirusList.do</Col><Col id=\"inData\">[Undefined]</Col><Col id=\"outData\">dsSpeciesVirus=dsSpeciesVirus</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findVirusList</Col><Col id=\"URL\">his::med/base/findVirusList.do</Col><Col id=\"inData\">[Undefined]</Col><Col id=\"outData\">dsVirus=dsVirus</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findAntimicrobialList</Col><Col id=\"URL\">his::med/base/findAntimicrobialList.do</Col><Col id=\"inData\">[Undefined]</Col><Col id=\"outData\">dsAntimicrobial=dsAntimicrobial</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findDiseaseList</Col><Col id=\"URL\">his::med/base/findDiseaseList.do</Col><Col id=\"inData\">[Undefined]</Col><Col id=\"outData\">dsDisease=dsDisease</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCategory", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">B</Col><Col id=\"name\">혈액주의</Col><Col id=\"check\">0</Col></Row><Row><Col id=\"name\">접촉주의</Col><Col id=\"code\">T</Col><Col id=\"check\">0</Col></Row><Row><Col id=\"name\">호흡기주의</Col><Col id=\"code\">R</Col><Col id=\"check\">0</Col></Row><Row><Col id=\"name\">격리</Col><Col id=\"code\">S</Col><Col id=\"check\">0</Col></Row><Row><Col id=\"name\">수혈부작용</Col><Col id=\"code\">BT</Col><Col id=\"check\">0</Col></Row><Row><Col id=\"name\">기타</Col><Col id=\"code\">C</Col><Col id=\"check\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOrd", this);
            obj._setContents("<ColumnInfo><Column id=\"ordcd\" type=\"STRING\" size=\"256\"/><Column id=\"ordnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSpeciesVirus", this);
            obj._setContents("<ColumnInfo><Column id=\"bacgencd\" type=\"STRING\" size=\"256\"/><Column id=\"bacgennm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVirus", this);
            obj._setContents("<ColumnInfo><Column id=\"baccd\" type=\"STRING\" size=\"256\"/><Column id=\"bacnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAntimicrobial", this);
            obj._setContents("<ColumnInfo><Column id=\"anticd\" type=\"STRING\" size=\"256\"/><Column id=\"antinm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDisease", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"lv\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div04", "absolute", "0%", "4", null, "60", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "63.52%", null, this.Div04);
            obj.getSetter("taborder").set("0");
            obj.set_text("주의사항 관련검사 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div04.addChild(obj.name, obj);

            obj = new Grid("categoryGrid", "absolute", "1.28%", "72", null, "682", "92%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsCategory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"21\"/><Column size=\"63\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"분류\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:check\" combodisplayrowcount=\"-1\"/><Cell col=\"1\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("cutnRltnExmntGrid", "absolute", "8.4%", "71", null, "683", "34.72%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("dsCutnRltnExmnt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"107\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"74\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류코드\"/><Cell col=\"1\" text=\"분류명\"/><Cell col=\"2\" text=\"항목코드\"/><Cell col=\"3\" text=\"항목명\"/><Cell col=\"4\" text=\"관련검사코드\"/><Cell col=\"5\" text=\"검사결과\"/><Cell col=\"6\" text=\"균속\"/><Cell col=\"7\" text=\"균\"/><Cell col=\"8\" text=\"항균제\"/><Cell col=\"9\" text=\"감수성결과\"/><Cell col=\"10\" text=\"관련상병\"/><Cell col=\"11\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:cutnCategoryCd\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:cutnCategoryNm\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:cautionCd\" suppress=\"1\"/><Cell col=\"3\" text=\"bind:cautionNm\" suppress=\"1\"/><Cell col=\"4\" text=\"bind:relationExmntCd\"/><Cell col=\"5\" text=\"bind:cheakResult\"/><Cell col=\"6\" text=\"bind:speciesVirus\"/><Cell col=\"7\" text=\"bind:virus\"/><Cell col=\"8\" text=\"bind:antimicrobial\"/><Cell col=\"9\" text=\"bind:sensitivityResult\"/><Cell col=\"10\" text=\"bind:relationDisease\"/><Cell col=\"11\" text=\"bind:note\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("relationExmntDiv", "absolute", "65.76%", "72", null, "680", "1.2%", null, this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "3.65%", "15", null, "30", "70.32%", null, this.relationExmntDiv);
            obj.getSetter("taborder").set("20");
            obj.set_text("Caution 항목");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.relationExmntDiv.addChild(obj.name, obj);
            obj = new Div("div01", "absolute", "2.68%", "62", null, "94", "2.68%", null, this.relationExmntDiv);
            obj.set_taborder("21");
            obj.style.set_border("1 solid #808080ff");
            this.relationExmntDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.29%", "50", null, "30", "71.58%", null, this.relationExmntDiv.div01);
            obj.getSetter("taborder").set("10");
            obj.set_text("검사결과");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.relationExmntDiv.div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "1.29%", "10", null, "30", "71.58%", null, this.relationExmntDiv.div01);
            obj.getSetter("taborder").set("11");
            obj.set_text("관련검사");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.relationExmntDiv.div01.addChild(obj.name, obj);
            obj = new Edit("relationExmntCdEd", "absolute", "30.23%", "10", null, "30", "50.13%", null, this.relationExmntDiv.div01);
            obj.set_taborder("12");
            this.relationExmntDiv.div01.addChild(obj.name, obj);
            obj = new Edit("cheakResultEd", "absolute", "30.23%", "50", null, "30", "17.05%", null, this.relationExmntDiv.div01);
            obj.set_taborder("13");
            this.relationExmntDiv.div01.addChild(obj.name, obj);
            obj = new Button("relationExmntSearchBtn", "absolute", "51.16%", "9", null, "32", "41.6%", null, this.relationExmntDiv.div01);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.relationExmntDiv.div01.addChild(obj.name, obj);
            obj = new Edit("relationExmntNmEd", "absolute", "59.43%", "10", null, "30", "1.81%", null, this.relationExmntDiv.div01);
            obj.set_taborder("15");
            this.relationExmntDiv.div01.addChild(obj.name, obj);
            obj = new Div("div02", "absolute", "2.68%", "166", null, "198", "2.68%", null, this.relationExmntDiv);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #808080ff");
            this.relationExmntDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "1.29%", "10", null, "30", "71.58%", null, this.relationExmntDiv.div02);
            obj.getSetter("taborder").set("24");
            obj.set_text("균속");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.29%", "154", null, "30", "71.58%", null, this.relationExmntDiv.div02);
            obj.getSetter("taborder").set("25");
            obj.set_text("감수성결과");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "1.29%", "106", null, "30", "71.58%", null, this.relationExmntDiv.div02);
            obj.getSetter("taborder").set("26");
            obj.set_text("항균제");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "1.29%", "58", null, "30", "71.58%", null, this.relationExmntDiv.div02);
            obj.getSetter("taborder").set("27");
            obj.set_text("균");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Edit("speciesVirusCdEd", "absolute", "30.23%", "10", null, "30", "50.13%", null, this.relationExmntDiv.div02);
            obj.set_taborder("28");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Edit("virusCdEd", "absolute", "30.23%", "59", null, "30", "50.13%", null, this.relationExmntDiv.div02);
            obj.set_taborder("29");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Edit("antimicrobialCdEd", "absolute", "30.23%", "106", null, "30", "50.13%", null, this.relationExmntDiv.div02);
            obj.set_taborder("30");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Edit("sensitivityResultEd", "absolute", "30.23%", "154", null, "30", "17.05%", null, this.relationExmntDiv.div02);
            obj.set_taborder("31");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Button("speciesVirusSearchBtn", "absolute", "51.16%", "9", null, "32", "41.6%", null, this.relationExmntDiv.div02);
            obj.set_taborder("32");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Button("antimicrobialSearchBtn", "absolute", "51.16%", "105", null, "32", "41.6%", null, this.relationExmntDiv.div02);
            obj.set_taborder("33");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Button("virusSearchBtn", "absolute", "51.16%", "58", null, "32", "41.6%", null, this.relationExmntDiv.div02);
            obj.set_taborder("34");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Edit("speciesVirusNmEd", "absolute", "59.43%", "10", null, "30", "1.81%", null, this.relationExmntDiv.div02);
            obj.set_taborder("35");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Edit("antimicrobialNmEd", "absolute", "59.43%", "106", null, "30", "2.07%", null, this.relationExmntDiv.div02);
            obj.set_taborder("36");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Edit("virusNmEd", "absolute", "59.43%", "58", null, "30", "2.07%", null, this.relationExmntDiv.div02);
            obj.set_taborder("37");
            this.relationExmntDiv.div02.addChild(obj.name, obj);
            obj = new Div("div03", "absolute", "2.68%", "374", null, "50", "2.68%", null, this.relationExmntDiv);
            obj.set_taborder("23");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #808080ff");
            this.relationExmntDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.29%", "10", null, "30", "71.58%", null, this.relationExmntDiv.div03);
            obj.getSetter("taborder").set("6");
            obj.set_text("관련상병");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.relationExmntDiv.div03.addChild(obj.name, obj);
            obj = new Edit("relationDiseaseCdEd", "absolute", "30.23%", "10", null, "30", "50.13%", null, this.relationExmntDiv.div03);
            obj.set_taborder("7");
            this.relationExmntDiv.div03.addChild(obj.name, obj);
            obj = new Button("relationDiseaseSearchBtn", "absolute", "51.16%", "9", null, "32", "41.6%", null, this.relationExmntDiv.div03);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.relationExmntDiv.div03.addChild(obj.name, obj);
            obj = new Edit("relationDiseaseNmEd", "absolute", "59.43%", "10", null, "30", "1.81%", null, this.relationExmntDiv.div03);
            obj.set_taborder("9");
            this.relationExmntDiv.div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "3.65%", "438", null, "30", "70.32%", null, this.relationExmntDiv);
            obj.getSetter("taborder").set("24");
            obj.set_text("비고사항");
            obj.style.set_background("blanchedalmond");
            obj.style.set_border("0 solid black");
            obj.style.set_color("darkred");
            obj.style.set_align("middle");
            obj.style.set_font("bold 11 arial");
            this.relationExmntDiv.addChild(obj.name, obj);
            obj = new Button("relationSearchBtn", "absolute", "74.7%", "16", null, "32", "2.19%", null, this.relationExmntDiv);
            obj.set_taborder("25");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.relationExmntDiv.addChild(obj.name, obj);
            obj = new TextArea("noteTextArea", "absolute", "31.63%", "439", null, "76", "2.68%", null, this.relationExmntDiv);
            obj.set_taborder("26");
            this.relationExmntDiv.addChild(obj.name, obj);
            obj = new Button("addBtn", "absolute", "74.7%", "524", null, "32", "2.19%", null, this.relationExmntDiv);
            obj.set_taborder("27");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.relationExmntDiv.addChild(obj.name, obj);
            obj = new Button("delBtn", "absolute", "49.88%", "524", null, "32", "27.01%", null, this.relationExmntDiv);
            obj.set_taborder("28");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.relationExmntDiv.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "3.16%", "583", null, "83", "2.92%", null, this.relationExmntDiv);
            obj.set_taborder("29");
            obj.style.set_border("1 solid #808080ff");
            this.relationExmntDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "2.08%", "9", null, "34", "0%", null, this.relationExmntDiv.Div03);
            obj.getSetter("taborder").set("6");
            obj.set_text("※ 코드 추가방법 : 1. 내용 입력 후 [저장] 버튼 클릭");
            obj.style.set_color("darkblue");
            obj.style.set_font("11 Dotum");
            this.relationExmntDiv.Div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "7.29%", "41", null, "34", "1.04%", null, this.relationExmntDiv.Div03);
            obj.getSetter("taborder").set("7");
            obj.set_text("(수정은 없고, 저장할 때마다 내용이 추가됩니다.)");
            obj.style.set_color("darkblue");
            obj.style.set_font("11 Dotum");
            this.relationExmntDiv.Div03.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 94, this.relationExmntDiv.div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("21");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.relationExmntDiv.div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 198, this.relationExmntDiv.div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("22");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.relationExmntDiv.div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 50, this.relationExmntDiv.div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("23");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.relationExmntDiv.div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 83, this.relationExmntDiv.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("29");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.relationExmntDiv.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 680, this.relationExmntDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.relationExmntDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MB_CutnRltnCheakMngntForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","relationExmntDiv.div01.relationExmntCdEd","value","dsCutnRltnExmnt","relationExmntCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","relationExmntDiv.div01.cheakResultEd","value","dsCutnRltnExmnt","cheakResult");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","relationExmntDiv.div02.speciesVirusCdEd","value","dsCutnRltnExmnt","speciesVirus");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","relationExmntDiv.div02.virusCdEd","value","dsCutnRltnExmnt","virus");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","relationExmntDiv.div02.antimicrobialCdEd","value","dsCutnRltnExmnt","antimicrobial");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","relationExmntDiv.div02.sensitivityResultEd","value","dsCutnRltnExmnt","sensitivityResult");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","relationExmntDiv.div03.relationDiseaseCdEd","value","dsCutnRltnExmnt","relationDisease");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","relationExmntDiv.noteTextArea","value","dsCutnRltnExmnt","note");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","relationExmntDiv.div01.relationExmntNmEd","value","dsCutnRltnExmnt","ordnm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","relationExmntDiv.div02.speciesVirusNmEd","value","dsCutnRltnExmnt","bacgennm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","relationExmntDiv.div02.virusNmEd","value","dsCutnRltnExmnt","bacnm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","relationExmntDiv.div02.antimicrobialNmEd","value","dsCutnRltnExmnt","antinm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","relationExmntDiv.div03.relationDiseaseNmEd","value","dsCutnRltnExmnt","codeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MB_CutnRltnExmntMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("MB_CutnRltnExmntMngntForm.xfdl", function() {
        /*******************************************************************************************
        *                                                                               			*
        * 주의사항 관련검사 관리  																*
        *                                                                               			*
        * @Path		    MB_CntnArticleMngntForm														*
        *																							*
        * @Description 	환자 주의사항 관련검사관리에에서   등록,삭제,조회한다.				*
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
        this.MB_CutnRltnCheakMngntForm_onload = function(obj,e)
        {
        	this.gfnService("findCutnRltnExmntList");
        	//var strXml = this.dsSpeciesVirus.saveXML("dsSpeciesVirus");
        	//trace(strXml);

        }

        /***************************************************************************************************
        *                                         기타 	바인딩                                             *
        ***************************************************************************************************/

        
        /***************************************************************************************************
        *                                     주의사항 관련검사 삭제                                     *
        ***************************************************************************************************/
        this.relationExmntDiv_delBtn_onclick = function(obj,e)
        {
        	this.dsCutnRltnExmnt.deleteRow(this.cutnRltnExmntGrid.currentrow);
        	this.gfnService("batchCutnRltnExmntProcess", false);
        }

        /***************************************************************************************************
        *                                    주의사항 관련검사 추가                                      *
        ***************************************************************************************************/
        this.relationExmntDiv_addBtn_onclick = function(obj,e)
        {
        	var no = this.cutnRltnExmntGrid.currentrow;
        	var setCutnCategoryCd = this.dsCutnRltnExmnt.getColumn(no, "cutnCategoryCd");
        	var setCutnCategoryNm = this.dsCutnRltnExmnt.getColumn(no, "cutnCategoryNm");
        	var setCautionCd = this.dsCutnRltnExmnt.getColumn(no, "cautionCd");	
        	var setCautionNm = this.dsCutnRltnExmnt.getColumn(no, "cautionNm");
        	var setRelationExmntCd = this.relationExmntDiv.div01.relationExmntCdEd.value;
        	var setRelationExmntNm = this.relationExmntDiv.div01.relationExmntNmEd.value;
        	var setCheakResult = this.relationExmntDiv.div01.cheakResultEd.value;
        	var setSpeciesVirusCd = this.relationExmntDiv.div02.speciesVirusCdEd.value;
        	var setSpeciesVirusNm = this.relationExmntDiv.div02.speciesVirusNmEd.value;
        	var setVirusCd = this.relationExmntDiv.div02.virusCdEd.value;
        	var setVirusNm = this.relationExmntDiv.div02.virusNmEd.value;
        	var setAntimicrobialCd = this.relationExmntDiv.div02.antimicrobialCdEd.value;
        	var setAntimicrobialNm = this.relationExmntDiv.div02.antimicrobialNmEd.value;
        	var setSensitivityResult = this.relationExmntDiv.div02.sensitivityResultEd.value;
        	var setRelationDiseaseCd = this.relationExmntDiv.div03.relationDiseaseCdEd.value;
        	var setRelationDiseaseNm = this.relationExmntDiv.div03.relationDiseaseNmEd.value;
        	var setNote = this.relationExmntDiv.noteTextArea.value;
        // addRow 전 입력할 값 세팅
        	this.dsCutnRltnExmnt.addRow();
        	no = this.cutnRltnExmntGrid.currentrow;	
        	this.dsCutnRltnExmnt.setColumn(no, "cutnCategoryCd", setCutnCategoryCd);
        	this.dsCutnRltnExmnt.setColumn(no, "cutnCategoryNm", setCutnCategoryNm);
        	this.dsCutnRltnExmnt.setColumn(no, "cautionCd", setCautionCd);
        	this.dsCutnRltnExmnt.setColumn(no, "cautionNm", setCautionNm);
        	this.dsCutnRltnExmnt.setColumn(no, "relationExmntCd", setRelationExmntCd);
        	this.dsCutnRltnExmnt.setColumn(no, "ordcd", setRelationExmntNm);	
        	this.dsCutnRltnExmnt.setColumn(no, "cheakResult", setCheakResult);
        	this.dsCutnRltnExmnt.setColumn(no, "speciesVirus", setSpeciesVirusCd);
        	this.dsCutnRltnExmnt.setColumn(no, "bacgennm", setSpeciesVirusNm);	
        	this.dsCutnRltnExmnt.setColumn(no, "virus", setVirusCd);
        	this.dsCutnRltnExmnt.setColumn(no, "bacnm", setVirusNm);
        	this.dsCutnRltnExmnt.setColumn(no, "antimicrobial", setAntimicrobialCd);
        	this.dsCutnRltnExmnt.setColumn(no, "antinm", setAntimicrobialNm);	
        	this.dsCutnRltnExmnt.setColumn(no, "sensitivityResult", setSensitivityResult);
        	this.dsCutnRltnExmnt.setColumn(no, "relationDisease", setRelationDiseaseCd);
        	this.dsCutnRltnExmnt.setColumn(no, "codeNm", setRelationDiseaseNm);	
        	this.dsCutnRltnExmnt.setColumn(no, "note", setNote);
        	
        	this.gfnService("batchCutnRltnExmntProcess", false);
        //	this.dsCutnRltnExmnt.setColumn(no, "cutnCategoryNm", setCutnCategoryCd);
        }

        /***************************************************************************************************
        *                                주의사항 관련검사 새로고침                                     *
        ***************************************************************************************************/
        this.relationExmntDiv_relationSearchBtn_onclick = function(obj,e)
        {
        	this.gfnService("findCutnRltnExmntList", false);
        }

        /***************************************************************************************************
        *                                				POPUP		                                       *
        ***************************************************************************************************/
        // 자식창에서 param 받을때 onload함수에서 this.parent.empNo 형식으로 받으면되요. 
        // 데이터셋일경우 this.parent.dsHyDependentInsurance 로 받아서 copy데이터 처리하면됩니다.
        var param="";
        //처방
        this.relationExmntDiv_div01_relationExmntSearchBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("MB_OrdCdPopupForm", "med");
        }
        //균속
        this.relationExmntDiv_div02_speciesVirusSearchBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("MB_SpeciesVirusCdPopupForm", "med");
        }
        //균
        this.relationExmntDiv_div02_virusSearchBtn_onclick = function(obj,e)
        {
        	var no = this.cutnRltnExmntGrid.currentrow;
        	param = {"speciesVirus":this.dsCutnRltnExmnt.getColumn(no, "speciesVirus")};
        	this.gfnPopup("MB_VirusCdPopupForm", "med", param);
        }
        //항균제
        this.relationExmntDiv_div02_antimicrobialSearchBtn_onclick = function(obj,e)
        {
        	var no = this.cutnRltnExmntGrid.currentrow;
        	param = {"speciesVirus":this.dsCutnRltnExmnt.getColumn(no, "speciesVirus")};
        	this.gfnPopup("MB_AntimicrobialCdPopupForm", "med", param);
        }
        //상병
        this.relationExmntDiv_div03_relationDiseaseSearchBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("MB_DiseasePopupForm", "med");
        }

        // 자식 팝업창에서 호출
         this.setDsCode = function(arr,divCode){
        //  	trace(arr[0]+"aasdfas="+divCode);
          	switch(divCode){
          		case "disease" :
        			this.relationExmntDiv.div03.relationDiseaseCdEd.set_value(arr[0]);
        			this.relationExmntDiv.div03.relationDiseaseNmEd.set_value(arr[1]);
          			break;
          		case "ord" :
           			this.relationExmntDiv.div01.relationExmntCdEd.set_value(arr[0]);
        			this.relationExmntDiv.div01.relationExmntNmEd.set_value(arr[1]);
           			break;
           		case "speciesVirus" :
           			this.relationExmntDiv.div02.speciesVirusCdEd.set_value(arr[0]);
        			this.relationExmntDiv.div02.speciesVirusNmEd.set_value(arr[1]);
           			break;
           		case "virus" :
        			this.relationExmntDiv.div02.virusCdEd.set_value(arr[0]);
        			this.relationExmntDiv.div02.virusNmEd.set_value(arr[1]);
           			break;
           		case "antimicrobial" :
        			this.relationExmntDiv.div02.antimicrobialCdEd.set_value(arr[0]);
        			this.relationExmntDiv.div02.antimicrobialNmEd.set_value(arr[1]);
           			break;
         	}
        }
        /***************************************************************************************************
        *                                 			 	필터	 		                                   *
        ***************************************************************************************************/
        //	var no = this.dsCutnRltnExmnt.rowposition;
        //var ordnm = this.dsOrd.lookup("ordcd", ordcd, "ordnm");
        this.categoryGrid_oncellclick = function(obj,e)
        {	
        	var setFilter = "";
        	
        	if(this.dsCategory.getColumn(obj.currentrow,"check")==1)
        		this.dsCategory.setColumn(obj.currentrow, "check", 0);
        	else
        		this.dsCategory.setColumn(obj.currentrow, "check", 1);
        			
        	for(i=0; i<this.dsCategory.rowcount; i++){
        		if(this.dsCategory.getColumn(i,"check")==1){
        			var code = this.dsCategory.getColumn(i,"code");
        			if(setFilter=="")
        				setFilter += "cutnCategoryCd=='"+code+"'";
        			else
        				setFilter += " || cutnCategoryCd=='"+code+"'";
        		}
        	}
        	this.dsCutnRltnExmnt.filter(setFilter);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.MB_CutnRltnCheakMngntForm_onload, this);
            this.categoryGrid.addEventHandler("oncellclick", this.categoryGrid_oncellclick, this);
            this.relationExmntDiv.div01.relationExmntCdEd.addEventHandler("onchanged", this.relationExmntDiv_div01_relationExmntCdEd_onchanged, this);
            this.relationExmntDiv.div01.relationExmntSearchBtn.addEventHandler("onclick", this.relationExmntDiv_div01_relationExmntSearchBtn_onclick, this);
            this.relationExmntDiv.div02.speciesVirusCdEd.addEventHandler("onchanged", this.relationExmntDiv_div02_speciesVirusCdEd_onchanged, this);
            this.relationExmntDiv.div02.virusCdEd.addEventHandler("onchanged", this.relationExmntDiv_div02_virusCdEd_onchanged, this);
            this.relationExmntDiv.div02.antimicrobialCdEd.addEventHandler("onchanged", this.relationExmntDiv_div02_antimicrobialCdEd_onchanged, this);
            this.relationExmntDiv.div02.speciesVirusSearchBtn.addEventHandler("onclick", this.relationExmntDiv_div02_speciesVirusSearchBtn_onclick, this);
            this.relationExmntDiv.div02.antimicrobialSearchBtn.addEventHandler("onclick", this.relationExmntDiv_div02_antimicrobialSearchBtn_onclick, this);
            this.relationExmntDiv.div02.virusSearchBtn.addEventHandler("onclick", this.relationExmntDiv_div02_virusSearchBtn_onclick, this);
            this.relationExmntDiv.div03.relationDiseaseCdEd.addEventHandler("onchanged", this.relationExmntDiv_div03_relationDiseaseCdEd_onchanged, this);
            this.relationExmntDiv.div03.relationDiseaseSearchBtn.addEventHandler("onclick", this.relationExmntDiv_div03_relationDiseaseSearchBtn_onclick, this);
            this.relationExmntDiv.relationSearchBtn.addEventHandler("onclick", this.relationExmntDiv_relationSearchBtn_onclick, this);
            this.relationExmntDiv.addBtn.addEventHandler("onclick", this.relationExmntDiv_addBtn_onclick, this);
            this.relationExmntDiv.delBtn.addEventHandler("onclick", this.relationExmntDiv_delBtn_onclick, this);

        };

        this.loadIncludeScript("MB_CutnRltnExmntMngntForm.xfdl");

       
    };
}
)();

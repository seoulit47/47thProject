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
                this.set_name("버튼모음");
                this.set_classname("버튼모음");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("DelBtn01", "absolute", "43", "104", "90", "32", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn00", "absolute", "43", "144", "90", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn02", "absolute", "164", "104", "90", "32", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn03", "absolute", "164", "144", "90", "32", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn04", "absolute", "43", "184", "90", "32", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::pdfBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn05", "absolute", "164", "184", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn06", "absolute", "43", "224", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::printBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "58.4%", "106", null, "30", "29.59%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_text("Combo00");

            obj = new Edit("Edit00", "absolute", "58.4%", "148", null, "30", "30.37%", null, this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "58.4%", "195", null, "30", "34.38%", null, this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "76.95%", "108", null, "287", "1.46%", null, this);
            obj.set_taborder("11");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"88\"/><Column size=\"101\"/></Columns><Rows><Row size=\"27\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"one\"/><Cell col=\"1\" text=\"two\"/><Cell col=\"2\" text=\"three\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "58.4%", "250", null, "30", "29.59%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_autoskip("true");
            obj.set_type("spin");

            obj = new Calendar("Calendar01", "absolute", "58.4%", "306", null, "30", "29.59%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Button("DelBtn08", "absolute", "312", "305", "32", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn09", "absolute", "352", "305", "32", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn10", "absolute", "392", "305", "32", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn11", "absolute", "453", "305", "38", "32", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniBtn1.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn12", "absolute", "506", "305", "38", "32", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::miniBtn2.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn13", "absolute", "43", "264", "90", "32", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::copyBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn14", "absolute", "164", "264", "90", "32", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::permitBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn15", "absolute", "43", "307", "90", "32", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn07", "absolute", "164", "224", "90", "32", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn16", "absolute", "285", "104", "90", "32", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::attachBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn17", "absolute", "285", "144", "90", "32", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn20", "absolute", "285", "184", "90", "32", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::dLineBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn21", "absolute", "406", "184", "90", "32", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::medicineBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn22", "absolute", "285", "224", "90", "32", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::okBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn23", "absolute", "285", "264", "90", "32", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::reserveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn24", "absolute", "406", "264", "90", "32", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::returnBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn25", "absolute", "406", "144", "90", "32", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::returnBtn2.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn26", "absolute", "406", "224", "90", "32", null, null, this);
            obj.set_taborder("32");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::receiptBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn27", "absolute", "406", "104", "90", "32", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::storeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn18", "absolute", "43", "352", "110", "32", null, null, this);
            obj.set_taborder("34");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::askBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn19", "absolute", "168", "352", "110", "32", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn28", "absolute", "293", "352", "110", "32", null, null, this);
            obj.set_taborder("36");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::dLineXBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn29", "absolute", "418", "352", "110", "32", null, null, this);
            obj.set_taborder("37");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::menuCopyBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn30", "absolute", "43", "432", "110", "32", null, null, this);
            obj.set_taborder("38");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::reserveXBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn31", "absolute", "168", "432", "110", "32", null, null, this);
            obj.set_taborder("39");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::sallBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn32", "absolute", "293", "432", "110", "32", null, null, this);
            obj.set_taborder("40");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::taxCopyBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn33", "absolute", "298", "392", "102", "32", null, null, this);
            obj.set_taborder("41");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::resetBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn34", "absolute", "164", "307", "124", "32", null, null, this);
            obj.set_taborder("42");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::nutriBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn35", "absolute", "416", "392", "110", "32", null, null, this);
            obj.set_taborder("43");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::cardBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn36", "absolute", "166", "472", "110", "32", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::settlementBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn37", "absolute", "290", "472", "110", "32", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::slipBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "4.69%", "529", null, "191", "70.41%", null, this);
            obj.set_taborder("46");
            obj.set_binddataset("dsTest");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"84\"/><Column size=\"78\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"그리드 서치 테스트\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"expand\" text=\"bind:Column1\" expandshow=\"show\" expandimage=\"URL('img::gridSearch2.png')\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn38", "absolute", "42", "392", "110", "32", null, null, this);
            obj.set_taborder("47");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::cashBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn39", "absolute", "166", "392", "110", "32", null, null, this);
            obj.set_taborder("48");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::receiptXBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn40", "absolute", "50", "472", "102", "32", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::loginBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("버튼모음");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.DelBtn01.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn00.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn02.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn03.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn04.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn05.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn06.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn08.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn09.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn10.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn11.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn12.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn13.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn14.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn15.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn07.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn16.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn17.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn20.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn21.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn22.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn23.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn24.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn25.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn26.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn27.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn18.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn19.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn28.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn29.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn30.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn31.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn32.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn33.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn34.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn35.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn36.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn37.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn38.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn39.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn40.addEventHandler("onclick", this.DelBtn_onclick, this);

        };

        this.loadIncludeScript("버튼모음.xfdl");

       
    };
}
)();

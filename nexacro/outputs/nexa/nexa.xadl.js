(function()
{
    return function()  {
        // Theme, Component URI Setting
        this._theme_uri = "./_theme_/";
        this._globalvar_uri = "globalvars.xml";
        
        this.loadTypedefition = function()
        {
            // this._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
            this._addService("default_typedef.xml", "frame", "form", "./frame/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "hrs", "form", "./hrs/", "", null, "", "0", "0");

            
            this._component_uri = (this._arg_compurl ? this._arg_compurl : "./nexacro14lib/component/");
  
            // load components
            var registerclass = [
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable

            // global image

            // global dataset
            var obj = null;

            

        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("nexa");
            this.set_version("");
            this.set_tracemode("");
            this.set_themeid("default.xtheme");

        
            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", "0", "0", "1260", "965", null, null, this);
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("서울IT병원프로젝트");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

        
            // widget
            var widget = null;

        
            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("frameSet", "absolute", null, null, null, null, null, null, this);
            this.addChild(frame0.name, frame0);
            this.frame = frame0;
            frame0.set_separatesize("50,50,*,50");

            
            var frame1 = new ChildFrame("menuFrame", "absolute", null, null, null, null, null, null, "frame::menuFrame.xfdl", frame0);
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("frame::menuFrame.xfdl");
            frame1.set_dragmovetype("none");
            frame1.set_showtitlebar("false");
            frame1.set_topmost("false");

            var frame2 = new ChildFrame("tabFrame", "absolute", null, null, null, null, null, null, "frame::tabFrame.xfdl", frame0);
            frame0.addChild(frame2.name, frame2);
            frame2.set_formurl("frame::tabFrame.xfdl");
            frame2.set_dragmovetype("none");
            frame2.set_showtitlebar("false");
            var frame3 = new FrameSet("mainFrame", "absolute", null, null, null, null, null, null, frame0);
            frame0.addChild(frame3.name, frame3);

            
            var frame4 = new ChildFrame("bottomFrame", "absolute", null, null, null, null, null, null, "frame::bottomFrame.xfdl", frame0);
            frame0.addChild(frame4.name, frame4);
            frame4.set_formurl("frame::bottomFrame.xfdl");
            frame4.set_dragmovetype("none");
            frame4.set_showtitlebar("false");

        };
        
        this.on_initEvent = function()
        {

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
 
        // script Compiler

        this.checkLicense("");
        
        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("default.xtheme");


        this.loadIncludeScript("nexa.xadl");
    };
}
)();

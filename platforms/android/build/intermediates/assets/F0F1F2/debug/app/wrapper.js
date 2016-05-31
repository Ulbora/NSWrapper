var application = require("application");
var context = application.android.context;
function pageLoaded(args) {
    var page = args.object;   
    var web = page.getViewById("webView"); 
    var androidSettings = web.android.getSettings();
    androidSettings.setJavaScriptEnabled(true);
    var device = new com.ulbora.device.Device;
    var hostedToast = new com.ulbora.hosted.toast.HostedToast(context);
    web.android.addJavascriptInterface(device, 'NSDevice');
    web.android.addJavascriptInterface(hostedToast, 'HostedToast');
    web.url = "http://10.0.2.2:3000";
}
exports.pageLoaded = pageLoaded;



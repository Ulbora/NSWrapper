function pageLoaded(args) {
    var page = args.object;   
    var web = page.getViewById("webView");    
    web.url = "http://10.0.2.2:3000";
}
exports.pageLoaded = pageLoaded;



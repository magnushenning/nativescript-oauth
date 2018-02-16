"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TnsOAuthWebViewHelper = (function (_super) {
    __extends(TnsOAuthWebViewHelper, _super);
    function TnsOAuthWebViewHelper() {
        return _super.call(this) || this;
    }
    TnsOAuthWebViewHelper.initWithWebViewAndIntercept = function (wv, checkCodeIntercept) {
        wv._delegate = TnsOAuthWebViewHelper.initWithOwner(new WeakRef(wv), checkCodeIntercept);
    };
    TnsOAuthWebViewHelper.initWithOwner = function (owner, checkCodeIntercept) {
        var delegate = new TnsOAuthWebViewHelper();
        delegate._owner = owner;
        delegate._origDelegate = owner.get()._delegate;
        delegate._checkCodeIntercept = checkCodeIntercept;
        return delegate;
    };
    TnsOAuthWebViewHelper.prototype.webViewShouldStartLoadWithRequestNavigationType = function (webView, request, navigationType) {
        return this._origDelegate.webViewShouldStartLoadWithRequestNavigationType(webView, request, navigationType);
    };
    TnsOAuthWebViewHelper.prototype.webViewDidStartLoad = function (webView) {
        this._origDelegate.webViewDidStartLoad(webView);
    };
    TnsOAuthWebViewHelper.prototype.webViewDidFinishLoad = function (webView) {
        this._checkCodeIntercept(webView, null);
        this._origDelegate.webViewDidFinishLoad(webView);
    };
    TnsOAuthWebViewHelper.prototype.webViewDidFailLoadWithError = function (webView, error) {
        this._checkCodeIntercept(webView, error);
        this._origDelegate.webViewDidFailLoadWithError(webView, error);
    };
    TnsOAuthWebViewHelper.ObjCProtocols = [UIWebViewDelegate];
    return TnsOAuthWebViewHelper;
}(NSObject));
exports.TnsOAuthWebViewHelper = TnsOAuthWebViewHelper;

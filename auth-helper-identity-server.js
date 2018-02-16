"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_helper_1 = require("./auth-helper");
var AuthHelperIdentityServer = (function (_super) {
    __extends(AuthHelperIdentityServer, _super);
    function AuthHelperIdentityServer(clientId, scope, authority, options) {
        var _this = _super.call(this) || this;
        var scopeStr = scope.join('%20');
        _this.credentials = {
            authority: authority || options.authority || 'https://optima.entro.no/identity/core',
            authorizeEndpoint: options.authorizeEndpoint || '/connect/authorize',
            tokenEndpoint: options.tokenEndpoint || '/token',
            clientId: options.clientId || clientId,
            redirectUri: options.redirectUri || 'https://optima.entro.no/energy2/login.html',
            scope: scopeStr || ['OPTIMA', 'profile', 'openid'].join('%20')
        };
        return _this;
    }
    AuthHelperIdentityServer.prototype.logout = function (successPage) {
        var cookieDomains = ["optima.entro.no", ".entro.no"];
        return this._logout(successPage, cookieDomains);
    };
    return AuthHelperIdentityServer;
}(auth_helper_1.AuthHelper));
exports.AuthHelperIdentityServer = AuthHelperIdentityServer;

/// <reference path="references.d.ts" />

import * as tnsOauth from './tns-oauth';
import { AuthHelper } from './auth-helper';
import * as TnsOAuth from './tns-oauth-interfaces';

export class AuthHelperIdentityServer extends AuthHelper implements TnsOAuth.ITnsAuthHelper {

    constructor(clientId: string, scope: Array<string>, authority: string, options: any) {
        super();
        var scopeStr = scope.join('%20');
        this.credentials = {
            authority:         authority || options.authority || 'https://optima.entro.no/identity/core',
            authorizeEndpoint: options.authorizeEndpoint || '/connect/authorize',
            tokenEndpoint:     options.tokenEndpoint || '/token',
            clientId:          options.clientId || clientId,
            redirectUri:       options.redirectUri || 'https://optima.entro.no/energy2/login.html',
            scope:             scopeStr || ['OPTIMA', 'profile', 'openid'].join('%20')
        };
    }

    public logout(successPage?: string): Promise<void> {
        let cookieDomains = ["optima.entro.no", ".entro.no"];
        return this._logout(successPage, cookieDomains);
    }
}

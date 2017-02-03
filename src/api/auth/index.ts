import { RequestBase } from '../server/';
import { Config } from '../../constants';

export class AuthenticationService extends RequestBase {
  constructor() {
    super('');
  }

  getToken(oAuthCode: string): Promise<{}> {
    let authConfig: any = { 
      grant_type: 'authorization_code', 
      code: oAuthCode, 
      redirect_uri: Config.redirectUrl 
    };
    let authHeader: any = { 
      'Content-Type': 'application/json',
      'Authorization': this.getAuthToken(Config.clientId, Config.clientPassword) 
    };
    
    return this.post(Config.tokenUrl, authConfig, authHeader)
      .then(json => {return json});
  }

  goToAuth(returnTheUrl: boolean = false): string {
    let state: string = Date.now() + '' + Math.random();
    let url: string = Config.authUrl + '?' +
      'client_id=' + encodeURI(Config.clientId) + '&' +
      'redirect_uri=' + encodeURI(Config.redirectUrl) + '&' +
      'response_type=' + encodeURI('code') + '&' +
      'scope=' + encodeURI(Config.accessScope) + '&' +
      'state=' + encodeURI(state);

    if (!returnTheUrl) {
      window.location.href = url;
    }
    
    return null;
  }

  getAuthToken(clientId: string, clientPassword: string) {
    let token: string = clientId + ':' + clientPassword;
    let hash: string = btoa(token);
    return 'Basic ' + hash;
  }
}

export const authenticationService = new AuthenticationService();
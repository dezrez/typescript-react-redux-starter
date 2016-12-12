import { post } from '../server/';
import { Config } from '../../constants';

const LOGIN_ERR_MSG = `
  The username or password you have entered is invalid.
`;

export function getToken(oAuthCode: string): Promise<{}> {
  let authConfig: any = { 
    grant_type: 'authorization_code', 
    code: oAuthCode, 
    redirect_uri: Config.redirectUrl 
  };
  let authHeader: any = { 
    'Content-Type': 'application/json',
    'Authorization': getAuthToken(Config.clientId, Config.clientPassword) 
  };
  
  return new Promise((resolve, reject) => {
      return post(Config.tokenUrl, authConfig, authHeader)
      .then(json => resolve(json))
      .then(null, (err) => reject(new Error(LOGIN_ERR_MSG)));
    });
}

export function goToAuth(returnTheUrl: boolean = false): string {
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
  
function getAuthToken(clientId: string, clientPassword: string) {
  let token: string = clientId + ':' + clientPassword;
  let hash: string = btoa(token);
  return 'Basic ' + hash;
}

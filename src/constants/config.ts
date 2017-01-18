declare const __REDIRECT__: string;
declare const __REZI_ENV__: string;

export const redirectUrl: string = __REDIRECT__ 
    ? `https://${__REDIRECT__}/auth`
    : 'https://localhost:8080/auth';
export const authUrl: string = 
    `${getEnv(__REZI_ENV__)}/Dezrez.Core.Api/oauth/authorize`;
export const tokenUrl: string = 
    `${getEnv(__REZI_ENV__)}/Dezrez.Core.Api/oauth/token`;
export const ApiUrl: string = getApiUrl(__REZI_ENV__);

export const accessScope: string = 'impersonate_user';
export const clientId: string = 'ReziRedux';
export const clientPassword: string = 'GdVXxAAxQ4zVE7WTJaISkkJvD9wTYI1EWCVnKoonnA';


function getEnv(env) {
     let baseUrl = 'https://dezrez-core-auth-dev.dezrez.com';
     switch (env) {
         case 'uat':
             baseUrl = 'https://dezrez-core-auth-uat.dezrez.com';
             break;
         case 'live':
             baseUrl = 'https://auth.dezrez.com';
             break;
     }
     return baseUrl;
 }
 
 function getApiUrl(env) {
   let apiUrl = 'https://localapi.dezrez.com';
     switch (env) {
         case 'uat':
             apiUrl = 'https://core-api-uat.dezrez.com';
             break;
         case 'live':
             apiUrl = 'https://api.dezrez.com';
             break;
     }
     return apiUrl;
 }
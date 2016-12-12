declare const __REDIRECT__: string;
declare const __REZI_ENV__: string;
declare const __AUTH_URL__: string;

export const redirectUrl: string = __REDIRECT__ 
    ? `https://${__REDIRECT__}/auth`
    : 'https://localhost:8080/auth';
export const authUrl: string = 
    `${__AUTH_URL__}/Dezrez.Core.Api/oauth/authorize`;
export const tokenUrl: string = `${__AUTH_URL__}/Dezrez.Core.Api/oauth/token`;
export const ApiUrl: string = __REZI_ENV__;

export const accessScope: string = 'impersonate_user';
export const clientId: string = 'YOUR_CLIENT_ID';
export const clientPassword: string = 'YOUR_CLIENT_SECRET';

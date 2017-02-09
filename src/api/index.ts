'use strict';
import { store } from '../';
import { Config } from '../constants';

export default class RequestBase {
  private BASE_URL = Config.ApiUrl;
  private SERIVCE_URL: string;
  headers = new Headers({
    'Content-Type': 'application/json',
    'Rezi-Api-Version': '1.0'
  });

  constructor(serviceUrl?: string) {
    this.SERIVCE_URL = serviceUrl;
  }

  get(url: string, headers?: Headers) {
    return fetch(this.getFormattedApiUrl(url), this.getRequestInfo('GET', headers))
      .then(this.checkStatus)
      .then(res => res.json());
  }

  post(url: string, data?: any, headers?: Headers) {
    return fetch(this.getFormattedApiUrl(url), this.getRequestInfo('POST', data, headers))
      .then(this.checkStatus)
      .then(res => res.json());
  }

  put(url: string, data?: any, headers?: Headers) {
    return fetch(this.getFormattedApiUrl(url), this.getRequestInfo('PUT', data, headers))
      .then(this.checkStatus)
      .then(res => res.json());
  }

  delete(url: string, data?: any, headers?: Headers) {
    return fetch(this.getFormattedApiUrl(url), this.getRequestInfo('DELETE', data, headers))
      .then(this.checkStatus)
      .then(res => res.json());
  }

  private getFormattedApiUrl(urlfragment: string) {
    if (this.SERIVCE_URL === '' || this.SERIVCE_URL === undefined) {
      return urlfragment;
    }
    return `${this.BASE_URL}/${this.SERIVCE_URL}/${urlfragment}`;
  }

  private getRequestInfo(method: string, body?: any, headers?: Headers): RequestInit {
    if (!headers && !this.headers.get('Authorization')) {
      this.headers.append('Authorization', `bearer ${store.getState().session.token}`);
    }

    return {
      method: method,
      headers: headers || this.headers,
      body: JSON.stringify(body)
    };
  }

  private checkStatus(response: Response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(response.statusText);
      (error as any).response = response;
      throw error;
    }
  }
}

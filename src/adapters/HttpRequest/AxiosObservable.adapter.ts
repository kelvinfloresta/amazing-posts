import AxiosObservable from "axios-observable";
import { map } from "rxjs/operators";
import IHttpRequest from "./IHttpRequest.adapter";
import { Observable } from "rxjs";

export default class AxiosObservableAdapter implements IHttpRequest {
  httpRequest: AxiosObservable;

  constructor(baseURL: string) {
    this.httpRequest = AxiosObservable.create({
      baseURL,
    });
  }

  post<T, TData>(url: string, data?: TData, headers?: any) {
    return this.httpRequest
      .post<T>(url, data, { headers })
      .pipe(map((response) => response.data));
  }

  get<T>(url: string, config?: { params?: any; headers?: any }) {
    return this.httpRequest
      .get<T>(url, config)
      .pipe(map((response) => response.data));
  }

  delete(url: string, headers?: any): Observable<never> {
    return this.httpRequest
      .delete<never>(url, { headers })
      .pipe(map((response) => response.data));
  }
}

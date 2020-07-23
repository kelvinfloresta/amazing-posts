import { Observable } from "rxjs";

export default interface IHttpRequest {
  post<TResult, TData>(
    url: string,
    data?: TData,
    headers?: any
  ): Observable<TResult>;

  get<TResult>(
    url: string,
    config?: { params?: any; headers?: any }
  ): Observable<TResult>;

  delete(url: string, headers?: any): Observable<never>;
}

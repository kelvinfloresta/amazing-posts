import AxiosObservableAdapter from "./AxiosObservable.adapter";
import IHttpRequest from "./IHttpRequest.adapter";

const baseUrl = process.env.API_URL || "https://jsonplaceholder.typicode.com";

const httpRequest: IHttpRequest = new AxiosObservableAdapter(baseUrl);

export default httpRequest;

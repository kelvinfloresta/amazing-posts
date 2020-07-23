import AxiosObservableAdapter from "./AxiosObservable.adapter";
import IHttpRequest from "./IHttpRequest.adapter";

const baseUrl = process.env.REACT_APP_API_URL;

if (!baseUrl) {
  throw new Error("Missing config REACT_APP_API_URL");
}

const httpRequest: IHttpRequest = new AxiosObservableAdapter(baseUrl);

export default httpRequest;

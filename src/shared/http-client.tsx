import axios from 'axios';

class HttpClient {

    get<T>(url: string, queryParams?: any) {
        return axios.request<T>({
            url,
            params: queryParams
        });
    }

    post<T>(url: string, body: any, queryParams?: any) {
        return axios.request<T>({
            url,
            params: queryParams,
            data: body
        });
    }

}

const httpClient = new HttpClient();

export default httpClient;
import axios from 'axios';

class HttpClient {

    get<T>(url: string, queryParams?: any) {
        return axios.request<T>({
            url,
            params: queryParams,
            method: 'get'
        });
    }

    post<T>(url: string, body: any, queryParams?: any) {
        return axios.request<T>({
            url,
            params: queryParams,
            data: body,
            method: 'post'
        });
    }

    put<T>(url: string, body: any, queryParams?: any) {
        return axios.request<T>({
            url,
            params: queryParams,
            data: body,
            method: 'put'
        });
    }

}

const httpClient = new HttpClient();

export default httpClient;
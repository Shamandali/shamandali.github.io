import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { KeyValueModel } from '../../domain/generics/keyValue.model';


export class RestAdapter {
    private static readonly DEFAULT_TIME_MSG = 8000;
    static async get<I, O>(
        params: {
            url: string;
            headers?: KeyValueModel;
            queryParams?: KeyValueModel;
            body?: I;
            timeout?: number;
        },
        infoKey: string | null = 'data'
    ): Promise<O> {
        const options: AxiosRequestConfig = {
            headers: params.headers,
            params: params.queryParams as unknown as I,
            data: params.body,
            timeout: params.timeout ?? RestAdapter.DEFAULT_TIME_MSG,
        };
        return RestAdapter.execute<O>(axios.get(params.url, options), infoKey); //NOSONAR
    }

    static async post<I, O>(
        params: {
            url: string;
            body: I;
            headers?: KeyValueModel;
            timeout?: number;
        },
        infoKey: string | null = 'data'
    ): Promise<O> {
        const options: AxiosRequestConfig = {
            headers: params.headers,
            timeout: params.timeout,
        };
        return RestAdapter.execute<O>(
            axios.post(params.url, params.body, options),
            infoKey
        );
    }

    private static execute<O>(
        operation: Promise<AxiosResponse>,
        infoKey: string | null
    ) {
        return operation
            .then((response: AxiosResponse) => {
                if (response && infoKey === null) {
                    return response.data;
                }
                if (response && infoKey !== null && response.data[infoKey]) {
                    return response.data[infoKey] as O;
                } else {
                    throw new Error('Error service')
                }
            })
            .catch((error: any) => {
                throw new Error(error)
            });
    }
}

import {AxiosResponse} from 'axios';
import {Observable} from 'rxjs';

export interface AxiosObservable<T> extends Observable<AxiosResponse<T>> {
}

export interface Response extends AxiosResponse<any> {
  error?: boolean;
  message?: string;
  data?: unknown;
}
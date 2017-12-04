import Context from './Context';

export interface IMiddleware<T, U> {
    (context: Context, value?: T): Promise<U>;
}
export interface IApiReturned<T> {
  data: T;
  message: string;
  isError: boolean;
}

import axios, { AxiosResponse } from "axios";

export class HttpService<T extends { [K in keyof T]: string }> {
  private static API_PATH: string = "/api";

  constructor() {}

  public async getWithAPI(path: string): Promise<AxiosResponse<any>> {}

  public async get(url: string): Promise<AxiosResponse<any>> {
    const res = await axios.get(url);
  }

  public post() {}

  public patch() {}

  public delete() {}
}

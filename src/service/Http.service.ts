import axios, { AxiosResponse } from "axios";

export class HttpService<T extends { [K in keyof T]: string }> {
  private static API_PATH: string = "/api";

  constructor() {}

  public async getWithAPI(path: string): Promise<AxiosResponse<any>> {
    throw new Error("No Implementation");
  }

  public async get(url: string): Promise<AxiosResponse<any>> {
    throw new Error("No Implementation");
  }

  public post() {}

  public patch() {}

  public delete() {}
}

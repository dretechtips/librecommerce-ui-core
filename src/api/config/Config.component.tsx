import React from "react";
import { ConfigProps, ConfigDOT } from "./Config.interface";
import Loading from "../../components/loading/Loading.component";
function Config(props: ConfigProps) {
  async function get(): Promise<ConfigDOT> {
    throw new Error("Not implemented");
  }

  return (
    <Loading>
      {async () => {
        const config = await get();
        return props.children(config);
      }}
    </Loading>
  );
}

export default Config;

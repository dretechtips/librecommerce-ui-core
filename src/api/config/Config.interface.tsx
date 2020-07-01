import { InternalCompanyDOT } from "../account/company/internel_company/InternalCompany.interface";
import { InternalStoreDOT } from "src/api/account/store/internal_store/InternalStore.interface";

export interface ConfigProps {
  children: (config: ConfigDOT) => JSX.Element;
}

export interface ConfigDOT {
  company: InternalCompanyDOT;
  stores: InternalStoreDOT[];
}

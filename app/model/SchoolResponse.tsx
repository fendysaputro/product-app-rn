import { Donate } from "./Donate";
import { School } from "./School";

export interface SchoolResponse {
  creator: string;
  status: string;
  Donate: Donate;
  dataSekolah: School[];
  total_data: number;
  page: number;
  per_page: number;
}

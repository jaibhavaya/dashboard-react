import { User } from "../../components/user/types";

export interface ApiResponse {
  status: string;
  data: User[];
}

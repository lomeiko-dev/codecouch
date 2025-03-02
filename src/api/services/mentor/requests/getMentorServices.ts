import { AxiosError } from "axios";
import { ApiClient } from "../../../Client";

interface IProvider {
  id: number;
  name: string;
  consult_number: number;
  consult_time: number;
  assistance_scope: string[];
  description: string;
  price_hour: number;
}

export type IMentorService = {
  number_of_objects: number;
  providers: IProvider[];
} | null;

export interface GetMentorServicesResult {
  data: IMentorService;
  code: number;
  message: string;
}

export const getMentorServices = async (id: string, page: number): Promise<GetMentorServicesResult> => {
  try {
    const { data: response } = await ApiClient({
      method: "GET",
      url: `/get/mentor/provider?id=${id}&page=${page}`,
    });

    const { data, code, message } = response;

    if (code === 200) {
      return { data, code, message };
    } else {
      console.error(`Ошибка при входе. Статус: ${code}`);
      return { data: null, code, message };
    }
  } catch (error) {
    console.error("Ошибка при входе:", error);
    const errorcode = (error as AxiosError)?.response?.status || 500;
    return { data: null, code: errorcode, message: "" };
  }
};

import { AxiosError } from "axios";
import { ApiClient } from "../../Client";

export type IMentor = {
  id: number;
  photo: string;
  name: string;
  surname: string;
  email: string;
  phone: number;
  description: string;
  about_me: string;
  assistance_scope: string[];
  company: string[];
  level: string[];
  study_field: string[];
  help_with: string;
  work_and_position: string;
  extra_description: string[];
  price: number;
  rating: number;
} | null;

export interface GetMentorResult {
  data: IMentor;
  code: number;
  message: string;
}

export const getMentor = async (id: string): Promise<GetMentorResult> => {
  try {
    const { data: response } = await ApiClient({
      method: "GET",
      url: `/get/mentor?id=${id}`,
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

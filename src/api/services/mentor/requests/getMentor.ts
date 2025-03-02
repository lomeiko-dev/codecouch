import { AxiosError } from "axios";
import { ApiClient } from "../../../Client";

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

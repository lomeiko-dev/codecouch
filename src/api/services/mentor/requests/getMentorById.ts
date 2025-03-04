import { ApiClient } from "../../../Client";
import { IApiReturned } from "@/api/types/type";
import { IMentor } from "../types/type";

export const getMentorById = async (id: string): Promise<IApiReturned<IMentor | null>> => {
  try {
    const result = await ApiClient<IMentor | null>({
      method: "GET",
      url: `/mentors?id=${id}`,
    });

    if (result.status === 200)
      return {
        //@ts-ignore
        data: result.data[0] as IMentor,
        message: "success",
        isError: false,
      };

    return { data: null, message: "error", isError: true };
  } catch (error) {
    console.error("Ошибка при входе:", error);
    return { data: null, message: error as string, isError: true };
  }
};

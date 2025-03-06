import { ApiClient } from "../../../Client";
import { IApiReturned } from "@/api/types/type";
import { IMentor } from "../types/type";

export const getMentorById = async (id: string, isUserId: boolean = false): Promise<IApiReturned<IMentor | null>> => {
  try {
    const result = await ApiClient<IMentor[]>({
      method: "GET",
      url: `/mentors?${isUserId ? "userId" : "id"}=${id}`,
    });

    if (result.data.length !== 0)
      return {
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

import { IApiReturned } from "@/api/types/type";
import { IFeedback } from "../types/type";
import { ApiClient } from "@/api/Client";

export const getFeedbacksByMentorId = async (mentorId: string): Promise<IApiReturned<IFeedback[]>> => {
  try {
    const result = await ApiClient<IFeedback[]>({
      method: "GET",
      url: `/feedbacks?mentorId=${mentorId}`,
    });

    if (result.status === 200)
      return {
        data: result.data as IFeedback[],
        message: "success",
        isError: false,
      };

    return { data: [], message: "error", isError: true };
  } catch (error) {
    console.error("Ошибка при входе:", error);
    return { data: [], message: error as string, isError: true };
  }
};

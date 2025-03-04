import { ApiClient } from "@/api/Client";
import { IDataMentor, IMentor } from "../types/type";
import { IApiReturned } from "@/api/types/type";

export const getMentorList = async (
  page: number,
  limit: number,
  params: string = ""
): Promise<IApiReturned<IDataMentor>> => {
  const result = await ApiClient<IMentor[]>({
    method: "GET",
    url: `/mentors?_page=${page}&_limit=${limit}${params !== "" ? `&${params}` : ""}`,
  });

  if (result.status === 200 && result.headers) {
    return {
      data: { mentors: result.data as IMentor[], totalCount: result.headers["x-total-count"] },
      message: "Success",
      isError: false,
    };
  }

  return { data: { mentors: [], totalCount: 0 }, message: "Error", isError: true };
};

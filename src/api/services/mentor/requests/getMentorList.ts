import { ApiClient } from "@/api/Client";
import { IMentor } from "../types/type";
import { IApiReturned } from "@/api/types/type";

export const getMentorList = async (page: number, limit: number): Promise<IApiReturned<IMentor[]>> => {
  const result = await ApiClient<IMentor[]>({ method: "GET", url: `/mentors?_page=${page}&_limit=${limit}` });

  if (result.status === 200) {
    return { data: result.data as IMentor[], message: "Success", isError: false };
  }

  return { data: [], message: "Error", isError: true };
};

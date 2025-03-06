import { IApiReturned } from "@/api/types/type";
import { IMentor } from "../types/type";
import { ApiClient } from "@/api/Client";

export const addNewMentor = async (mentor: Partial<IMentor>): Promise<IApiReturned<boolean>> => {
  const mentorEmail = await ApiClient<IMentor[]>({
    url: `http://localhost:5000/mentors?email=${mentor.email}`,
    method: "GET",
  });

  if (mentorEmail.data.length !== 0) {
    return { data: false, message: "Ментор с таким email уже зарегистрирован", isError: true };
  }

  const mentorPhone = await ApiClient<IMentor[]>({
    url: `http://localhost:5000/mentors?phone=${mentor.phone}`,
    method: "GET",
  });

  if (mentorPhone.data.length !== 0) {
    return { data: false, message: "Ментор с таким телефоном уже зарегистрирован", isError: true };
  }

  const result = await ApiClient<IMentor>({
    url: "http://localhost:5000/mentors",
    method: "POST",
    data: mentor,
  });

  if (result.status !== 201) {
    return { data: false, message: "Ошибка при создании ментора", isError: true };
  }

  return { data: true, message: "Ментор успешно создан", isError: false };
};

import { IApiReturned } from "@/api/types/type";
import { IConsultation, IUserAccount } from "../types/type";
import { ApiClient } from "@/api/Client";
import { formatDate } from "@/shared/lib/formatDate";

export const updateConsultationAccount = async (
  account: IUserAccount,
  date: Date,
  mentorId: string
): Promise<IApiReturned<boolean>> => {
  const acc = await ApiClient<IUserAccount[]>({
    url: `http://localhost:5000/user-account?id=${account.id}`,
    method: "GET",
  });

  if (acc.data.length === 0) {
    return { data: false, isError: true, message: "Пользователь не найден" };
  }

  const mentor = await ApiClient<IUserAccount[]>({
    url: `http://localhost:5000/user-account?userId=${mentorId}`,
    method: "GET",
  });

  if (mentor.data.length === 0) {
    return { data: false, isError: true, message: "Ментор не найден" };
  }

  const { dateString, timeString } = formatDate(date);

  const newConsultationForUser: IConsultation = {
    userId: (mentor.data[0] as IUserAccount).userId,
    data: dateString,
    time: timeString,
    avatar: (mentor.data[0] as IUserAccount).avatar,
    name: (mentor.data[0] as IUserAccount).fullname,
    position: (mentor.data[0] as IUserAccount).email,
  };

  const newConsultationForMEntor: IConsultation = {
    userId: account.userId,
    data: dateString,
    time: timeString,
    avatar: account.avatar,
    name: account.fullname,
    position: account.email,
  };

  (acc.data[0] as IUserAccount).ConsultationsComing.push(newConsultationForUser);
  (mentor.data[0] as IUserAccount).ConsultationsComing.push(newConsultationForMEntor);

  const resultAccount = await ApiClient<IUserAccount>({
    url: `http://localhost:5000/user-account/${account.id}`,
    method: "PUT",
    data: acc.data[0],
  });

  if (resultAccount.status !== 200) {
    return { data: false, isError: true, message: "Ошибка при изменении аккаунта" };
  }

  const resultMentor = await ApiClient<IUserAccount>({
    url: `http://localhost:5000/user-account/${mentorId}`,
    method: "PUT",
    data: mentor.data[0],
  });

  if (resultMentor.status !== 200) {
    return { data: false, isError: true, message: "Ошибка при изменении аккаунта" };
  }

  return { data: true, isError: false, message: "success" };
};

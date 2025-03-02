interface IWorkExperience {
  company: string;
  period: string;
  role: string;
  description: string;
}

export interface IMentor {
  id: number;
  userId: number;
  avatar: string;
  fullname: string;
  position: string;
  email: string;
  phone: string;
  rating: number;
  lessonCount: number;
  description: string;
  skills: string[];
  companies: string[];
  availableLevel: string[];
  spheres: string[];
  help: string[];
  workExperience: IWorkExperience[];
  informations: string[];
}
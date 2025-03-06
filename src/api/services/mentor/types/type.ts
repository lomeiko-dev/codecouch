interface IWorkExperience {
  company: string;
  period: string;
  role: string;
  description: string;
}

export interface IMentor {
  id: string;
  userId: string;
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
  price: number;
}

export interface IDataMentor {
  mentors: IMentor[];
  totalCount: number;
}

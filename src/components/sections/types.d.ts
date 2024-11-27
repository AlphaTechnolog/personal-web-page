export enum Scheme {
  dark,
  light,
}

export interface Technology {
  color: string;
  name: string;
  scheme?: Scheme;
}

export interface Project {
  src: typeof import("*.png"),
  name: string;
  simpleDescription?: string;
  technologies: Technology[];
  description: string;
  code: string;
}

export interface Course {
  imageUrl: string;
  name: string;
  instructor: string;
  platform: 'udemy';
  completed: boolean;
  certificatePath?: string;
}
export type RESOURCE_TYPE = {
  header: string;
  description: string[];
  child?: {
    title: string;
    content: string[];
  }[];
  footer?: string[];
};

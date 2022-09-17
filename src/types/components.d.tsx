enum STATUS {
  TODO,
  ONGOING,
  DONE,
}

enum PROJECT_CATEGORY {
  SOFTWARE_ENGINEERING,
    NETWORK_ENGINEERING,
}

declare module "*.pdf";

type Projects = {
  id: string,
  title: string,
  date: string,
  img: string,
  desc: string,
  demo: string,
  report: any,
  type: string,
  git?: string,
  status: STATUS,
  category: PROJECT_CATEGORY,
  skills: Array<string>,
}

type VignetteProps = {
  data: Projects,
}


type ListItemProps = {
  data: {
    logo: any,
    company: string,
    year: string
    location: string,
    job: string,
    description: string,
    link?: string,
    imageHeight: number,
  }
}


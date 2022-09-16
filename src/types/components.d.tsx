enum STATUS {
  TODO,
  ONGOING,
  DONE,
}

enum PROJECT_CATEGORY {
  SOFTWARE_ENGINEERING,
    NETWORK_ENGINEERING,
}

type Projects = {
  title: string,
  img: string,
  desc: string,
  demo: string,
  type: string,
  git?: string,
  status: STATUS,
  category: PROJECT_CATEGORY,
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


import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { STATUS } from "../../const/enum";
import {
  Gallery,
  ImageDescription,
  ImageDescriptionTitle,
  ImageVignette,
  Main,
  ProjectList,
  Title,
} from "./style";

export default function ProjectsGallery({
  projects = [],
  title,
  Icon,
}: {
  projects: Array<Projects>;
  title: string;
  Icon: any;
}) {
  const navigate = useNavigate();

  const handlePressProject = useCallback(
    (selectedProject: Projects) => {
      if (navigate && selectedProject.status === STATUS.DONE) {
        navigate(`/project/${selectedProject.id}`);
      } else {
        if (selectedProject.status === STATUS.ONGOING && selectedProject.git) {
          window.open(selectedProject.git || "", "_blank")!.focus();
        }
      }
    },
    [navigate]
  );

  return (
    <Main>
      <Gallery>
        <Title>
          <Icon color="primary" sx={{ marginX: 1.5, fontSize: 25 }} />
          <Typography variant="h5" fontWeight={700} color="primary">
            {title}
          </Typography>
        </Title>
        <ProjectList>
          {projects.map((item: Projects) => (
            <ImageVignette
              onClick={() => handlePressProject(item)}
              key={item.id}
            >
              <img
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
                style={{ width: "100%", maxWidth: 300 }}
              />
              <ImageDescription>
                <ImageDescriptionTitle>{item.title}</ImageDescriptionTitle>
              </ImageDescription>
            </ImageVignette>
          ))}
        </ProjectList>
      </Gallery>
    </Main>
  );
}

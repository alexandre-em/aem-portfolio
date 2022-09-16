import {Typography} from "@mui/material";
import {blueGrey} from "@mui/material/colors";
import Footer from "../../components/Footer";
import ProjectsGallery from "../../components/ProjectsGallery";
import {PROJECT_CATEGORY, STATUS} from "../../const/enum";

import projects from '../../const/project';

export default function Projects() {
  const ongoing = projects.filter(({ status }) => status === STATUS.ONGOING);
  const software = projects.filter(({ category }) => category === PROJECT_CATEGORY.SOFTWARE_ENGINEERING);
  const network = projects.filter(({ category }) => category === PROJECT_CATEGORY.NETWORK_ENGINEERING);

  return (
    <div>
      <div style={{ padding: 25 }}>
        <Typography variant="h4" style={{ fontWeight: '700', marginBottom: 25 }} color={blueGrey[800]}>
          My Projects
        </Typography>
    {ongoing.length > 0 && <ProjectsGallery projects={ongoing} title="Ongoing projects" />}
    {software.length > 0 && <ProjectsGallery projects={software} title="Software engineering projects" />}
    {network.length > 0 && <ProjectsGallery projects={network} title="Computer networking engineering projects" />}
  </div>
  <Footer />
</div>
  );
};


import {Cloud, Terminal} from "@mui/icons-material";
import {CircularProgress, Typography} from "@mui/material";
import {blueGrey} from "@mui/material/colors";
import Footer from "../../components/Footer";
import ProjectsGallery from "../../components/ProjectsGallery";
import {PROJECT_CATEGORY, STATUS} from "../../const/enum";

import projects from '../../const/project';

export default function Projects() {
  const ongoing = projects.filter(({ status }) => status === STATUS.ONGOING);
  const software = projects.filter(({ category, status }) => category === PROJECT_CATEGORY.SOFTWARE_ENGINEERING && status === STATUS.DONE);
  const network = projects.filter(({ category, status }) => category === PROJECT_CATEGORY.NETWORK_ENGINEERING && status === STATUS.DONE);

  return (
    <div>
      <div style={{ padding: 25 }}>
        <Typography variant="h4" style={{ fontWeight: '700', marginBottom: 25 }} color={blueGrey[800]}>
          My Projects
        </Typography>
    {ongoing.length > 0 && <ProjectsGallery Icon={CircularProgress} projects={ongoing} title="Ongoing projects" />}
    {software.length > 0 && <ProjectsGallery projects={software} Icon={Terminal} title="Software engineering projects" />}
    {network.length > 0 && <ProjectsGallery projects={network} Icon={Cloud} title="Computer networking engineering projects" />}
  </div>
  <Footer />
</div>
  );
};


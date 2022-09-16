import {Typography} from "@mui/material";
import {blueGrey} from "@mui/material/colors";
import Footer from "../../components/Footer";
import ProjectsGallery from "../../components/ProjectsGallery";


export default function Projects() {
  return (
    <div>
      <div style={{ padding: 25 }}>
        <Typography variant="h4" style={{ fontWeight: '700', marginBottom: 25 }} color={blueGrey[800]}>
          My Projects
        </Typography>
        <ProjectsGallery />
      </div>
      <Footer />
    </div>
  );
};


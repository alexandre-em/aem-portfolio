import {ImageList, ImageListItem} from "@mui/material";
import Vignette from "../Vignette";
import {Gallery, Main} from "./style";

import projects from '../../const/project';

export default function ProjectsGallery() {
  return (
    <Main>
      <Gallery>
        <ImageList cols={3} gap={8}>
          {projects.map((item) => (
            <ImageListItem key={item.img}>
              <Vignette data={item} />
            </ImageListItem>
          ))}
        </ImageList>
      </Gallery>
    </Main>
  );
};


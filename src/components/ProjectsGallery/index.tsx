import {Notes} from "@mui/icons-material";
import {CircularProgress, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography} from "@mui/material";
import {STATUS} from "../../const/enum";
import {Gallery, Main} from "./style";

export default function ProjectsGallery({ projects = [], title }: { projects : Array<Projects>, title: string }) {
  return (
    <Main>
      <Typography variant="h5" fontWeight={500} color="primary">
        {title}
      </Typography>
      <Gallery>
        <ImageList cols={3} gap={8}>
          {projects.map((item: Projects) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.desc}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    {item.status === STATUS.DONE ? <Notes /> : <CircularProgress sx={{ color: '#9d9d9d' }} />}
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Gallery>
    </Main>
  );
};


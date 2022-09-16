import { GitHub, WebAsset } from "@mui/icons-material";
import {IconButton, Typography} from "@mui/material";
import "./style.css";

function Vignette({ data }: VignetteProps) {
  return (
    // <Link href={`/projects${data.url}`}>
      <div title={data.title} style={{ flex: ".33", marginBottom: "20px" }}>
        <div className="vignette_project">
          <img
            className="vignette_preview"
            src={data.img}
            alt={data.title}
            loading="lazy"
          />
          <div className="vignette_overlay">
            <div className="vignette_item">
              <Typography variant="h4" sx={{ fontWeight: 600 }}>{data.title}</Typography>
              <Typography variant="overline">
                {data.desc}
              </Typography>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {
                data.type === 'link'
                ? <a href={data.demo} style={{ color: '#fff' }}>
                  <WebAsset />
                </a>
                : <IconButton onClick={() => console.log('test')} sx={{ color: '#fff', margin: 0, padding: 0 }}>
                  <WebAsset />
                </IconButton>
              }
              {data.git && <a href={data.git} style={{ color: '#fff' }}>
                <GitHub />
              </a>}
            </div>
          </div>
        </div>
      </div>
      // </Link>
  );
}

export default Vignette;

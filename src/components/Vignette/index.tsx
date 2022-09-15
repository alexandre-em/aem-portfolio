import { WebAsset } from "@mui/icons-material";
import "./style.css";

function Vignette({ data }: VignetteProps) {
  return (
    // <Link href={`/projects${data.url}`}>
      <div title={data.title} style={{ flex: ".33", marginBottom: "20px" }}>
        <div className="vignette_project">
          <img
            className="vignette_preview"
            style={{ backgroundImage: `url("${"projects/" + data.preview}")` }}
          />
          <div className="vignette_overlay">
            <div className="vignette_item">
              <h5>{data.title}</h5>
              <p>{data.desc}</p>
            </div>
            <a href={data.demo}>
              <WebAsset />
            </a>
          </div>
        </div>
      </div>
    // </Link>
  );
}

export default Vignette;

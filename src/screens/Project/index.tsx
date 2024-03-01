import { useRef, useState } from "react";
import { Button, Chip, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

import { Content, ContentRef, Description, Main, Tags } from "./style";
import { GitHub, Link } from "@mui/icons-material";
import MarkdownReader from "../../components/MarkdownReader";
import useResize from "../../hooks/useResize";
import Footer from "../../components/Footer";
import projects from "../../const/project";
import PdfReader from "../../components/PdfReader";
import { useParams } from "react-router-dom";
import useFindDataById from "../../hooks/useFindDataById";

export default function Project() {
  const { id } = useParams();
  const divRef = useRef<HTMLDivElement>(null);
  const maxWidth = useResize(divRef);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const project = useFindDataById<Projects>({ id: id!, data: projects });

  if (!project) {
    return null;
  }

  return (
    <div>
      <Main>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="700"
            sx={{ color: blueGrey[700] }}
          >
            {project.title}
          </Typography>
          <div>
            <Button variant="contained" sx={{ marginX: 2 }}>
              <a
                href={project.git}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <GitHub sx={{ paddingRight: 1 }} />
                GitHub
              </a>
            </Button>
            <Button
              disabled={project.demo === ""}
              variant="outlined"
              sx={{ marginX: 2 }}
            >
              <a
                href={project.demo}
                style={{
                  textDecoration: "none",
                  color: blueGrey[500],
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link sx={{ paddingRight: 1 }} />
                Demo
              </a>
            </Button>
          </div>
        </div>
        <Typography variant="overline">{project.date}</Typography>
        <Description>
          <Typography variant="overline">{project.desc}</Typography>
        </Description>
        <Tags>
          {project.skills.map((skill) => (
            <Chip
              label={skill}
              color="secondary"
              sx={{ color: "#fff", margin: 0.5 }}
            />
          ))}
        </Tags>
        <Content>
          <ContentRef ref={divRef} style={{}}>
            {project.type === "markdown" ? (
              <MarkdownReader
                file={project.report}
                loading={{ isLoading, setIsLoading }}
                maxWidth={maxWidth}
              />
            ) : (
              <PdfReader
                file={project.report}
                page={project.page}
                maxWidth={maxWidth}
              />
            )}
          </ContentRef>
        </Content>
      </Main>
      <Footer />
    </div>
  );
}

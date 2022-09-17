import {useEffect, useRef, useState} from "react";
import {Button, Chip, Typography} from "@mui/material";
import {blueGrey} from "@mui/material/colors";

import {Content, Description, Main, Tags} from "./style";
import {GitHub, Link} from "@mui/icons-material";
import MarkdownReader from "../../components/MarkdownReader";
import useResize from "../../hooks/useResize";
import Footer from "../../components/Footer";

const skills = ["Java", "ReactJs", "SQL", "MongoDB"];

export default function Project() {
  const divRef = useRef<HTMLDivElement>(null);
  const maxWidth = useResize(divRef);
  const [body, setBody] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading && body === '') {
      setIsLoading(true);
      const birdy = require('../../data/projects/birdy.md');

      fetch(birdy)
        .then((res) => res.text())
        .then((txt) => {
          setBody(txt);
          setIsLoading(false);
        })
        .catch(console.error)
    }
  }, [body, isLoading]);

  return (
    <div>
      <Main>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" fontWeight="700" sx={{ color: blueGrey[700] }}>
            Birdy
          </Typography>
          <div>
            <Button variant='contained' sx={{ marginX: 2 }}>
              <a href={"link"} style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center' }}>
                <GitHub sx={{ paddingRight: 1 }} />
                GitHub
              </a>
            </Button>
            <Button variant='outlined' sx={{ marginX: 2 }}>
              <a href={"link"} style={{ textDecoration: 'none', color: blueGrey[500], display: 'flex', alignItems: 'center' }}>
                <Link sx={{ paddingRight: 1 }} />
                Demo
              </a>
            </Button>
          </div>
        </div>
        <Typography variant="overline">
          February - June 2020
        </Typography>
        <Description>
          <Typography variant="overline">
            A social network, a twitter clone implemented during the introduction to web development course.
          </Typography>
        </Description>
        <Tags>
          {skills.map((skill) =>
          <Chip label={skill} color="secondary" sx={{ color: '#fff', margin: .5 }} />
        )}
      </Tags>
      <Content>
        <div ref={divRef} style={{ width: '80%', backgroundColor: '#fff', padding: 10, borderRadius: 10, marginTop: 15, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px', }}>
          <MarkdownReader body={body} maxWidth={maxWidth} />
        </div>
      </Content>
    </Main>
    <Footer />
  </div>
);
};

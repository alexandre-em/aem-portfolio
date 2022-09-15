import {Email, GitHub, LinkedIn} from "@mui/icons-material";
import {IconButton} from "@mui/material";

import { Main } from './style';

export default function ContactLogos({ color }: { color: string }) {
  return (
    <Main>
      <IconButton>
        <a href="https://github.com/alexandre-em">
          <GitHub sx={{ fontSize: 30, color }} />
        </a>
      </IconButton>
      <IconButton>
        <a href="https://www.linkedin.com/in/em-a">
          <LinkedIn sx={{ fontSize: 30, color }} />
        </a>
      </IconButton>
      <IconButton>
        <a href="mailto:alexandre.em@pm.me">
          <Email sx={{ fontSize: 30, color }} />
        </a> 
      </IconButton>
    </Main>
  );
}

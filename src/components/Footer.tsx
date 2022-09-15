import {Typography} from '@mui/material';
import ContactLogos from './ContactLogos';
import { Main } from './Footer.style';

export default function Footer() {
  return (
    <Main>
      <ContactLogos color="#ededed" />
      <Typography variant="overline" sx={{ color: '#ededed', fontSize: 20, lineHeight: '1.5em' }}>
        Made with ⚛️  by em - 2022
      </Typography>
      <Typography sx={{ color: '#ededed' }}>
        Contact: alexandre.em@pm.me
      </Typography>
    </Main>
  );
};


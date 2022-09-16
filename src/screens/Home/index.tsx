import {useNavigate} from 'react-router-dom';
import {Button, Chip, Divider, Typography} from '@mui/material';
import {blueGrey} from '@mui/material/colors';
import { About, AboutImage, AboutTags, AboutText, Education, Experience, Main } from './style';

import experiences from '../../const/experience';
import educations from '../../const/education';
import ListItem from '../../components/ListItem';
import Footer from '../../components/Footer';
import ContactLogos from '../../components/ContactLogos';

const imageStyle = {
  minWidth: 750,
  borderRadius: 5,
  boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.15) 0px 50px 100px -20px, rgba(0, 0, 0, 0.2) 0px 30px 60px -30px',
};
const resumeLink = `https://drive.google.com/file/d/1ElpNXRis_YrBbjYI8KfjXMBwSpwoX8eS/view?usp=sharing`;

export default function Home() {
  const skills = ['ReactJs', 'React Native', 'NodeJs', 'Java Spring'];
  const navigate = useNavigate();

  return (
    <Main>
      <About>
        <AboutText>
          <Typography variant="h4" style={{ fontWeight: '500' }} color={blueGrey[800]}>
            Hello there, welcome to my portfolio !
          </Typography>
          <Typography variant="h5" color={blueGrey[500]}>
            I am Alexandre and I am a Software engineer
          </Typography>

          <AboutTags>
            {skills.map((skill) =>
            <Chip label={skill} color="secondary" sx={{ color: '#fff', margin: .5 }} />
          )}

        </AboutTags>

        <ContactLogos color={blueGrey[500]} />

        <div>
          <Button variant='outlined' sx={{ marginX: 2 }}>
            <a href={resumeLink} style={{ textDecoration: 'none', color: blueGrey[500] }}>
              My Resume
            </a>
          </Button>
          <Button variant='contained' onClick={() => navigate('/projects')}>
            My Portfolio
          </Button>
        </div>
      </AboutText>
      <AboutImage>
        <img src={require('./images/clement-helardot-95YRwf6CNw8-unsplash.jpg')} width="50%" style={imageStyle} alt="" />
      </AboutImage>
    </About>

    <Experience>
      <Typography variant="h4" style={{ fontWeight: '500' }} color={blueGrey[800]}>
        Experience
      </Typography>
    {experiences.map((exp, i) => (
      <div key={`experience-${i}-${exp.company}-${exp.year}`}>
        <ListItem data={exp} />

        {i < experiences.length - 1 && <Divider />}
      </div>
    ))}
  </Experience>

  <Education>
    <Typography variant="h4" style={{ fontWeight: '500' }} color={blueGrey[800]}>
      Education
    </Typography>
    {educations.map((education, i) => (
      <div key={`experience-${i}-${education.company}-${education.year}`}>
        <ListItem data={education} />
        {i < educations.length - 1 && <Divider />}
      </div>
    ))}
  </Education>
  <Footer />
</Main>
);
}


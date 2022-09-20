import React from 'react'
import {Main} from './style';
import BuildingImage from '../../data/images/undraw_under_construction_-46-pa.svg';
import {Typography} from '@mui/material';
import {blueGrey} from '@mui/material/colors';

export default function Building() {
	return (
    <Main>
      <img src={BuildingImage} alt="building" style={{ width: '80vw',maxWidth: 600 }} />
      <Typography variant="h3" sx={{ marginTop: 5,fontWeight: 900, color: blueGrey[800], textAlign: 'center' }}>Under contruction</Typography>
      <Typography variant="h5" sx={{ textAlign: 'center' }} color="primary">Please come back later</Typography>
    </Main>
	);
};


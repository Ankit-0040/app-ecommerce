import React from 'react';
import { Typography, Card, CardContent} from '@mui/material';
import { Ankit } from '../../assets';



function About() {

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          About E-Commerce Platform
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit purus non mi convallis, nec tristique eros vestibulum. 
          Suspendisse sagittis, est nec fermentum molestie, neque enim rhoncus leo pulvinar convallis a eu arcu. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit purus non mi convallis, nec tristique eros vestibulum. 
          Suspendisse sagittis, est nec fermentum molestie, neque enim rhoncus leo pulvinar convallis a eu arcu. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit purus non mi convallis, nec tristique eros vestibulum. 
          Suspendisse sagittis, est nec fermentum molestie, neque enim rhoncus leo pulvinar convallis a eu arcu. 
        </Typography>
        <img src= {Ankit} alt='Ankit img' height={200} width={150} ></img>

      </CardContent>
    </Card>
  );
}

export default About;

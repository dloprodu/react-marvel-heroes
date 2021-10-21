import { Component } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface HeroParams {
  title: string,
  summary: string,
  image: string
}

interface HeroCartProps {
  hero: {
    title: string,
    summary: string,
    image: string
  }
}

export class HeroCard extends Component<HeroCartProps, HeroParams> {

  private readonly DEFAULT_PARAMS: HeroParams = {
    title: '',
    summary: '',
    image: ''
  }

  constructor(props: HeroCartProps) {
    super(props);

    this.state = { ...this.DEFAULT_PARAMS ,...props.hero };
  }

  render() {
    return (
      <Card sx={{ width: 350, m: '0.5rem' }}>
        <CardMedia
          component="img"
          height="150"
          image={this.state?.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.state?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.state?.summary}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
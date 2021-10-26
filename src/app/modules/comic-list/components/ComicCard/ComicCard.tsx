import { Component } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface ComicParams {
  title: string,
  summary: string,
  image: string
}

interface ComicCartProps {
  comic: ComicParams;
}

export default class ComicCard extends Component<ComicCartProps, ComicParams> {

  private readonly DEFAULT_PARAMS: ComicParams = {
    title: '',
    summary: '',
    image: ''
  }

  constructor(props: ComicCartProps) {
    super(props);

    this.state = { ...this.DEFAULT_PARAMS ,...props.comic };
  }

  render() {
    const { image, title, summary } = this.state;

    return (
      <Card sx={{ width: 350, m: '0.5rem' }}>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
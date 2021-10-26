import { Component } from 'react';

import Box from '@mui/material/Box';

import { ComicCard } from '../../components';

export default class ComicListPage extends Component {

  private comics: { title: string, summary: string, image: string }[] = [
    {
      title: 'Comic 1',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique iaculis eros vitae laoreet.',
      image: 'https://dummyimage.com/350x150/e0b3e0/fff'
    },
    {
      title: 'Comic 2',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique iaculis eros vitae laoreet.',
      image: 'https://dummyimage.com/350x150/b2c9de/fff'
    },
    {
      title: 'Comic 3',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique iaculis eros vitae laoreet.',
      image: 'https://dummyimage.com/350x150/b4ded8/fff'
    },
    {
      title: 'Comic 4',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique iaculis eros vitae laoreet.',
      image: 'https://dummyimage.com/350x150/deb6b6/fff'
    },
    {
      title: 'Comic 5',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique iaculis eros vitae laoreet.',
      image: 'https://dummyimage.com/350x150/dedbb6/fff'
    },
    {
      title: 'Comic 6',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique iaculis eros vitae laoreet.',
      image: 'https://dummyimage.com/350x150/b6dede/fff'
    }
  ];

  render() {
    return (
      <Box sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflowY: 'auto'
      }}>
        {this.comics.map((c, i) => (
          <ComicCard
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            comic={c} />
        ))}
      </Box>
    );
  }
}
import { Component } from 'react';

import Box from '@mui/material/Box';

import { HeroCard } from '../../components';

export class HeroListPage extends Component {

  private heroes: { title: string, summary: string, image: string }[] = [
    {
      title: 'Hero 1',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique iaculis eros vitae laoreet.',
      image: 'https://dummyimage.com/350x150/e0b3e0/fff'
    },
    {
      title: 'Hero 2',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique iaculis eros vitae laoreet.',
      image: 'https://dummyimage.com/350x150/b2c9de/fff'
    },
    {
      title: 'Hero 3',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique iaculis eros vitae laoreet.',
      image: 'https://dummyimage.com/350x150/b4ded8/fff'
    },
    {
      title: 'Hero 4',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique iaculis eros vitae laoreet.',
      image: 'https://dummyimage.com/350x150/deb6b6/fff'
    },
    {
      title: 'Hero 5',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique iaculis eros vitae laoreet.',
      image: 'https://dummyimage.com/350x150/dedbb6/fff'
    },
    {
      title: 'Hero 6',
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
        {this.heroes.map((c, i) => (
          <HeroCard
            key={i}
            hero={c}>
          </HeroCard>
        ))}
      </Box>
    );
  }
}
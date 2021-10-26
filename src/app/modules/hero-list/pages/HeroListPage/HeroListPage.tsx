import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';

import { selectAllCharacters, fetchCharacters, StatusType } from 'app/redux/characters/characterSlice';

import { RootState } from 'app/store';

import { HeroCard } from '../../components';

export default function HeroListPage() {
  const dispatch = useDispatch();
  const status = useSelector<RootState, StatusType>(state => state.characters.status);
  const characters = useSelector(selectAllCharacters);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters())
    }
  }, [status, dispatch]);


  return (
    <Box sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      overflowY: 'auto'
    }}>
      {status === 'loading' 
        ? <div>Loading ... </div> 
        : characters.map((c, i) => (
            <HeroCard
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              hero={{ title: c.name, summary: c.description, image: c.thumbnail.path }} />
        ))
      }
    </Box>
  );
}

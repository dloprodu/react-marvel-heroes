import { Component } from 'react';

import Box from '@mui/material/Box';

// eslint-disable-next-line react/prefer-stateless-function
export default class ComicPage extends Component {

  render() {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        Comic Detail
      </Box>
    );
  }
}
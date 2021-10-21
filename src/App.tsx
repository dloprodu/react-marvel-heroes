import React, { Component, Suspense } from 'react';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { faList, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

const HeroListPage = React.lazy(() => import('./modules/hero-list'));
const ComicListPage = React.lazy(() => import('./modules/comic-list'));

type Props = Record<string, any>;

export default class App extends Component<Props> {

  render = () => (
    <Router>
      <Container maxWidth="md" sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Marvel Heroes
            </Typography>
            <IconButton edge="start" color="inherit" aria-label="menu" href="./" sx={{ ml: 2 }}>
              <FontAwesomeIcon icon={faList} />
              <Typography variant="h6" color="inherit" component="div" sx={{ ml: 2 }} >
                Characters
              </Typography>
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="menu" href="./comics" sx={{ ml: 2 }}>
              <FontAwesomeIcon icon={faBookOpen} />
              <Typography variant="h6" color="inherit" component="div" sx={{ ml: 2 }} >
                Comics
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box sx={{
          position: 'relative',
          flexGrow: 1,
          overflow: 'hidden',
          background: 'whitesmoke'
        }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={HeroListPage}/>
              <Route path="/comics" component={ComicListPage}/>
            </Switch>
          </Suspense>
        </Box>
      </Container>
    </Router>
  );
}

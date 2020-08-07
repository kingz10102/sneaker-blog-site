import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff'
  },
  sneaker: {
    backgroundImage: `linear-gradient(rgba(0,0,0.5), rgba(0,0,0.5)), url('https://images.unsplash.com/photo-1520316587275-5e4f06f355e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',

  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color='primary'>
             KICKZZ Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.sneaker}>
        <Box>Describe Your Kick Game</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles 
        </Typography>
      </Container>
    </div>
  );
}

export default App;

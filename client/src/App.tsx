import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import RootPage from './pages/Root'
import NotfoundPage from './pages/Notfound'

import './App.css'
import GamePage from './pages/Game';
import GameOverPage from './pages/GameOver';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={RootPage} />
                    <Route path='/game' component={GamePage} />
                    <Route path='/over' component={GameOverPage} />



                    <Route path='*' component={NotfoundPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
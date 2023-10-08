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

const App = () => {
    const isDarkmode = true

    const darkTheme = createTheme({
        palette: {
            mode: isDarkmode === true ? 'dark' : 'light',
            primary: {
                main: '#0d6efd',
            },
        },
    });

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={RootPage} />



                    <Route path='*' component={NotfoundPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
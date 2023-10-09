/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from "react";
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom"
import Button from "./common/Button";

import { css } from '@emotion/react'


function Main() {
    let history = useHistory();

    const handleClickStartGame = () => {
        history.push('/game')
        console.log("DS")
    }

    return (
        <div css={css({ height: "100%"})}>
            <Header>
                <h1>이미지 기억력 테스트</h1>
                <p></p>
            </Header>
            
            <Footer>
                <Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
                    <Button onClick={handleClickStartGame}>게임 시작</Button>
                    
                </Box>
            </Footer>
        </div>
    );
}


function Header({ children }) {
    return (
        <Grid container sx={{ paddingTop: "3rem" }} spacing={3}>
            <Grid item xs md>
            </Grid>
            <Grid item xs={10} md={6}>
                <Box sx={{ display: 'grid', marginBottom: "2rem", marginTop: "3rem" }}>
                    <Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
                        {children}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs md>
            </Grid>
        </Grid>

    )
}


function Footer({ children }) {
    return (
        <div css={css({ position: "absolute", bottom: "3rem", width: "100%" })}>
            {children}
        </div>
    )
}


export default Main;
/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from "react";
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import Button from "./common/Button";

import { css } from '@emotion/react'


function Game() {
    const getImageArray = () => {
        let array = []
        for (let index = 0; index < 20; index++) {
            let randomNumber = Math.floor(Math.random() * 100)
            let isExist = false
            if (array.indexOf(randomNumber) != -1) {
                isExist = true
                while (!isExist) {
                    const random = Math.floor(Math.random() * 100)
                    if (array.indexOf(random) == -1) {
                        isExist = false
                        randomNumber = random
                        break
                    }
                }
            }

            array.push(randomNumber)

            
        }
        
        return array
    }


    
    return (
        <div css={css({ height: "100%"})}>
            {getImageArray().join(" | ")}
            <Images></Images>
        </div>
    );
}

function Images() {

    return (
        <div css={css({ height: "100%"})}>

        </div>
    );
}

export { Game }
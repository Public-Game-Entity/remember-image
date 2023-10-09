/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from "react";
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import Button from "./common/Button";

import { css } from '@emotion/react'


function Game() {
    const [urls, setUrls] = useState([])
    const [nowActive, setNowActive] = useState(1)

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

    const switchActive = () => {
        setNowActive(nowActive + 1)
        urls[nowActive].isActive = true
        urls[nowActive-1].isActive = false

    } 

    const handleClickImage = () => {
        switchActive()
        console.log("E")
    }



    useEffect(() => {
        const randomArray = getImageArray()
        const mapRandom = randomArray.map(num => {
            return {
                isActive: false,
                url: `/public/images/${num}.webp`
            }
        })
        console.log(mapRandom)
        mapRandom[0].isActive = true
        setUrls(mapRandom)

    }, [])
    
    return (
        <div css={css({ height: "100%" })} onClick={handleClickImage}>
            {/* {urls} */}
            {urls.map((element: any) => (
                <Images isActive={element.isActive} url={element.url}></Images>

            ))}
        </div>
    );
}




function Images({ isActive, url }) {

    return (
        <div css={css({ height: "100%", display: isActive ? "" : "none" })}>
            <img src={url}></img>
        </div>
    );
}

export { Game }
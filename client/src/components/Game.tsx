/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from "react";
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import Button from "./common/Button";

import { css } from '@emotion/react'


function Game() {
    const [urls, setUrls] = useState([])
    const [nowActive, setNowActive] = useState(-1)
    const [count, setCount] = useState(20 + Math.floor(Math.random() * 20))
    const [showAnswer, setShowAnswer] = useState(false)
    const [isAnswer, setIsAnswer] = useState(false)

    const maxImageCount = 100

    const randomUnique = (range, count) => {
        let nums = new Set();
        while (nums.size < count) {
            nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
        }
        return nums;
    }

    const getImageArray = (): number[] => {
        let array: any = Array.from(randomUnique(maxImageCount, count))

        return array
    }

    const getRandomItem = (items) => {
        const random = Math.floor(Math.random() * count)
        return items[random]
    }

    const handleClickImage = () => {
        checkAnswer()

        console.log(nowActive)
        setShowAnswer(true)
        const timeout = setTimeout(() => {
            setShowAnswer(false)
        }, 600)
    }

    const checkAnswer = () => {
        if (nowActive == count) {
            setIsAnswer(true)
        } else {
            setIsAnswer(false)

        }
        
    }

    const timer = () => {
        setNowActive(nowActive + 1)



    }

    useEffect(() => {

        let tempUrls = urls.slice();

        if (nowActive != -1) {
            tempUrls[nowActive].isActive = true

        }
        if (nowActive > 0) {
            tempUrls[nowActive-1].isActive = false  
        } 


        setUrls(tempUrls)

        setTimeout(timer, 3000)

    }, [nowActive])


    useEffect(() => {
        const randomArray: number[] = getImageArray()

        const mapRandom = randomArray.map(num => {
            return {
                isActive: false,
                url: `/public/images/${num}.webp`
            }
        })

        const item = getRandomItem(mapRandom)

        mapRandom.push(item)

        setUrls(mapRandom)
        setTimeout(timer, 3000)



    }, [])
    
    return (
        <>
            <b>{nowActive}</b>


            <div css={css({ height: "100%", width: "100%" })} onClick={handleClickImage}>

            {urls.map((element: any) => (
                <>
                    <Images isActive={element.isActive} url={element.url}></Images>

 
                </>
            ))}



            <div>
            <div css={css({ display: showAnswer ? "flex" : "none", justifyContent: "center", position: "absolute", top: "50%", transform: "translate(0, -50%)", width: "100%" })}>
            <span className="material-symbols-outlined" css={css({ display: isAnswer ? "" : "none", fontSize: "20rem", color: "#1bf761", animationName: "fadeIn", animationDuration: "0.6s" })}>
            done
            </span>
            <span className="material-symbols-outlined" css={css({ display: isAnswer ? "none" : "", fontSize: "20rem", color: "#f7261b", animationName: "fadeIn", animationDuration: "0.6s" })}>
            close
            </span>
            </div>

            </div>

        </div>
        </>

    );
}




function Images({ isActive, url }) {

    useEffect(() => {
        console.log("E")
    }, [])

    return (
        <div css={css({ height: "100%", display: isActive ? "" : "none" })}>
            <div css={css({ backgroundImage: `url("${url}")`, height: "100%", width: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center center", WebkitBackgroundSize: "cover", backgroundSize: "cover" })} ></div>
        </div>
    );
}

export { Game }
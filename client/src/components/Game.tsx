/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from "react";
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import Button from "./common/Button";

import { css } from '@emotion/react'


function Game() {
    const [urls, setUrls] = useState([])
    const [nowActive, setNowActive] = useState(0)
    const [answerIndex, setAnswerIndex] = useState(0)
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
        console.log("E")
        checkAnswer()

        setShowAnswer(true)
        setTimeout(() => {
            setShowAnswer(false)
        }, 600)
    }

    const checkAnswer = () => {
        if (nowActive == count) {
            console.log("C")
            setIsAnswer(true)
        } else {
            console.log("N")
            setIsAnswer(false)

        }
        
    }

    useEffect(() => {
        if (nowActive != 0) {
            urls[nowActive].isActive = true
            urls[nowActive-1].isActive = false  
        }

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



        mapRandom[0].isActive = true
        setUrls(mapRandom)
        setInterval(() => {
            setNowActive(active => active + 1)
        }, 3000)
    }, [])
    
    return (
        <div css={css({ height: "100%", width: "100%" })} onClick={handleClickImage}>
            {/* {urls} */}
            {urls.map((element: any) => (
                <Images isActive={element.isActive} url={element.url}></Images>
            ))}

            <div css={css({ display: showAnswer ? "flex" : "none", justifyContent: "center", position: "absolute", top: "50%", transform: "translate(0, -50%)", width: "100%" })}>
            <span className="material-symbols-outlined" css={css({ display: isAnswer ? "" : "none", fontSize: "20rem", color: "#1bf761", animationName: "fadeIn", animationDuration: "0.6s" })}>
            done
            </span>
            </div>

            <div css={css({ display: showAnswer ? "flex" : "none", justifyContent: "center", position: "absolute", top: "50%", transform: "translate(0, -50%)", width: "100%" })}>
            <span className="material-symbols-outlined" css={css({ display: isAnswer ? "none" : "", fontSize: "20rem", color: "#f7261b", animationName: "fadeIn", animationDuration: "0.6s" })}>
            close
            </span>
            </div>
        </div>
    );
}




function Images({ isActive, url }) {


    return (
        <div css={css({ height: "100%", display: isActive ? "" : "none" })}>
            <div css={css({ backgroundImage: `url("${url}")`, height: "100%", width: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center center", WebkitBackgroundSize: "cover", backgroundSize: "cover" })} ></div>
        </div>
    );
}

export { Game }
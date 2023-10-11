/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from "react";
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom"
import Button from "./common/Button";

import { css } from '@emotion/react'
import { Footer, Header } from "./Main";
import { NormalDistribution } from "./Graph";
import { setScore } from "../features/appSlice";
import store from "../store";


function Game() {
    const history = useHistory();

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
        setShowAnswer(true)

        const timeout = setTimeout(() => {
            setShowAnswer(false)
        }, 600)
    }

    const updateScore = () => {
        const score = store.getState()
        store.dispatch(setScore({
            score: score.app.score - 6
        }))
    }

    const checkAnswer = () => {
        if (nowActive == count) {
            setIsAnswer(true)
        } else {
            setIsAnswer(false)
            updateScore()
        }
    }

    const timer = () => {
        if (nowActive >= count) {
            history.push('/over')
        } else {
            setNowActive(nowActive + 1)
        }
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
            <div css={css({ display: nowActive == -1 ? "flex" : "none", justifyContent: "center",  textAlign: 'center' })}>
                <h2 css={css({ position: "absolute", top: "50%", textAlign: 'center', justifyContent: "center", padding: "2rem 2rem", transform: "translate(0, -80%)" })}>이미지를 보고 이전과 같은 이미지가 있다면 클릭해주세요.</h2>
            </div>
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


function GameOver() {
    const history = useHistory();

    const state = store.getState()
    const score = state.app.score

    const handleClickReStartGame = () => {
        history.push('/game')
    }

    return (
        <div css={css({ height: "100%"})}>
        <Header>
            <h1 css={css({ color: "#020617" })}>당신의 결과는 상위 {Math.abs(score - 99)}%</h1>
            <NormalDistribution score={score}></NormalDistribution>
        </Header>
        
        <Footer>
            <Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
                <Button onClick={handleClickReStartGame}><span className="material-symbols-outlined">refresh</span></Button>
            </Box>
        </Footer>
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

export { Game, GameOver }
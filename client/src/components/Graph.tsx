/** @jsxImportSource @emotion/react */

import React, { useState, useEffect, useRef } from "react";
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import Button from "./common/Button";

import { css } from '@emotion/react'


function NormalDistribution() {
    const canvasRef: any = useRef()

    const drawGraph = () => {
        const ctx = canvasRef.current.getContext("2d")
        const a = 0.5
        const u = 1.5
        const d = 100

        for (let x = 0; x < d*3; x++) {
            const mx = x/d
            const y = Math.pow((1/(a*Math.sqrt(2*Math.PI)))*Math.E, -(1/2) * ((mx-u)/a)**2)
            ctx.fillRect(x, -(y*30)+80,3,3)
            
        }
    }

    useEffect(() => {
        drawGraph()
    }, [])

    return (
        <canvas ref={canvasRef}></canvas>
    )
}

export { NormalDistribution }
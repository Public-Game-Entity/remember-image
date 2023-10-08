/** @jsxImportSource @emotion/react */


import React, { useState, useEffect } from "react";
import { css } from '@emotion/react'


type ButtonType = {
    onClick?: any
    size?: any
    children?: any
}

function Button({ onClick, size = 'lg', children }: ButtonType) {
    const buttonSize = {
        "lg": {
            padding: "1.2rem 2.7rem",
            fontSize: "1.2rem",
        },
        "md": {
            padding: "1rem 2.3rem",
            fontSize: "1rem",
        },
        "sm": {
            padding: "0.7rem 1rem",
            fontSize: "0.9rem",
        },
    }

    return (
        <button css={css({ 
            outline: "none",
            border: "none",
            ...buttonSize[size],
            fontFamily: "'Noto Sans KR', sans-serif",
            backgroundColor: "#2b45ed",
            color: "#ffffff",
            borderRadius: "0.6rem",
            '&:hover': {
                backgroundColor: "#233acf",

            }
        })}>{children}</button>
    );
}



export default Button;
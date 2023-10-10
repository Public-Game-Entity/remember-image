/** @jsxImportSource @emotion/react */


import React, { useState, useEffect } from "react";
import { css } from '@emotion/react'


type ButtonType = {
    onClick?: any
    size?: any
    children?: any
}

function Badge({ children }) {
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
        <div css={css({ 
            padding: "0.3rem 0.5rem",
            backgroundColor: "#1d4ed8",
            color: "#ffffff",
            fontSize: "0.8rem",
            borderRadius: "0.6rem",
            display: "inline"
        })}
       >{children}</div>
    );
}



export default Badge;
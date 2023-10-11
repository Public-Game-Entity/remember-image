/** @jsxImportSource @emotion/react */


import React, { useState, useEffect } from "react";
import { css } from '@emotion/react'

function Badge({ children }) {

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
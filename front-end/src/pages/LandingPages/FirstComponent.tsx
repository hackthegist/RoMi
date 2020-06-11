/** @jsx jsx  */
import React from "react";
import { css, jsx } from '@emotion/core'
import Logo from '../../assets/logo.png'
import robot from '../../assets/realromi.png'

const boxPadding = css`
  height: 20vw;
  // visibility: hidden;
  position: relative;
`

const fontPadding = css`
  padding-top: 20px;
  width: 100%;
  font-size: 5.5rem;
`

const fontBox = css`
  width: 65vw;
  display: inline-block;
`

const imageBox = css`
  width: 33vw;
  display: inline-block;
  position: absolute;
  bottom: 0px;
`

export default () => {
  return (
    <div>
      <div css={boxPadding}>
        <img src={Logo} width="300px" height="200px"></img>
      </div>
      <div css={fontBox}>
        <h2 css={fontPadding}>자율주행</h2>
        <h2 css={fontPadding}>안내로봇</h2>
        <h2 css={fontPadding}>「로미」</h2>
      </div>
      <div css={imageBox}>
        <img src={robot} alt='로봇사진' width="350px" height="600px"></img>
      </div>
    </div>
  );
};
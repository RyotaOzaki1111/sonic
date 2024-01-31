'use client'; //これを指定しないとエラー

import { css } from "@emotion/react";


const style = {
  title: css`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-bottom:30px;
  `,
  text: css`
    font-size: 16px;
    color: #fff;
  `
};

export default function Title() { //defaultを付けないとエラー
  return (
    <>
      <h1 css={style.title}>App Router</h1>
      <p css={style.text}>index.tsxではなく、page.tsxと記載しないと反映されないよ</p>
      <p css={style.text}>app/title/page.tsxにしたら、/titleがURLパスになるよ</p>
    </>
  )
}
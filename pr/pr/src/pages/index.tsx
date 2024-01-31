import {css} from "@emotion/react";

const styles = {
  title: css`
    font-size: 24px;
    font-weight: bold;
    color: red;
  `,
  text: css`
    font-size: 16px;
    color: blue;
  `
};


export default function Home() {
  return (
    <>
      <h1 css={styles.title}>next.js v13</h1>
    </>
  )
}
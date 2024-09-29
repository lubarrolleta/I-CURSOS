import { css } from "solid-styled-components";

export const PopoverStyled =(props)=> {
    // console.log(props)
    /* ${(props)=>console.log(props)} */
    const cssPop = (props =css`
      /* border-radius: 4px; */
      /* display:none; */
      border-radius: .2vw;
      position: absolute;
      background: #141414 !important;
      /* width: 100%; */
      /* height: 100%; */
      overflow: hidden;
                z-index: 2;
                box-sizing: border-box;
                /* transform-origin: 0px; */
                /* top: 0px; */
    `);
    return cssPop;
}

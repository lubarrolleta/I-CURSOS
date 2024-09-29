import { styled } from "solid-styled-components";

export const Section =
// () =>(styled`
//     background-color: red;
// `)
(styled('section')`
/* background-color: red; */
display: flex;
max-width: 100vw;
overflow: hidden;
/* padding-bottom: 2rem; */
    /* transition: all 0.3 ease-in-out; */
  border-radius: ${props => props.size}px;
  position: relative;
    .btnSlideIzq{
        position: absolute;
        height: 100%;

        left:0;
        top: 0;
        transition: all 0.3s ease-in-out;
        /* background-color:white; */
        background: hsla(0,0%,8%,.5);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 5px;

        i{
            transition: all 0.3s ease-in-out;
            
            font-size: xx-large;
            /* margin: 0 5px; */
            &:hover{
                transform: scale(1.5);
            }
        }
        &:hover{
            
            /* background-color:white; */
        }
    }
    .btnSlideDer{
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        /* background-color:white; */
        transition: all 0.3s ease-in-out;

        cursor: pointer;
        background: hsla(0,0%,8%,.5);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        padding: 0 5px;
        i{  
            transition: all 0.3s ease-in-out;

            font-size: xx-large;
            /* margin: 0 5px; */
            &:hover{
                transform: scale(1.5);
            }
        }
    }
    .containerBox{
        max-width: 100%;
        width: 100%;
        display: flex;
        gap: 10px;
        overflow: hidden;
        div.card-0{
            margin-left: 42px;
        }
    }
    .cardData{
        border-radius: .2vw;
        /* overflow: hidden; */
        position: relative;
        cursor: pointer;
        width: fit-content;
        
        img{
        border-radius: .2vw;

            /* position: absolute; */
            min-width:300px;
            width: 300px;
            min-height:160px;
            object-fit: cover;
            aspect-ratio:16/9;
        }
        .containerData{
        border-radius: .2vw;

            position: relative;
            background-color: red;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;

        }
    }
`)
// styled("section")`
//   border-radius: ${props => props.size}px;
// `;

// styled("section")(
//   props => (`
//   border-radius: ${props.size}px;

// `)
// );
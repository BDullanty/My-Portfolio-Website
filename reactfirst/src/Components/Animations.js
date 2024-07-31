
import {fadeInRight, fadeInLeft}from 'react-animations';
import styled, { keyframes } from "styled-components";

export const FadeInRight = styled.div`
   opacity: 0;
   animation: 3s ${keyframes`${fadeInRight}`} ;
   animation-delay:  ${props => props.delay || '0s'};
   animation-fill-mode: forwards;
  }
   `;
   
export const FadeInLeft = styled.div`
   opacity: 0;
   animation: 3s ${keyframes`${fadeInLeft}`} ;
   animation-delay:  ${props => props.delay || '0s'};
   animation-fill-mode: forwards;
  }
   `;

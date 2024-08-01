
import {fadeInRight, fadeInLeft, fadeInUp, fadeIn,fadeInDown}from 'react-animations';
import styled, { keyframes } from "styled-components";

export const FadeInRight = styled.div`
   opacity: 0;
   animation: 1s ${keyframes`${fadeInRight}`} ;
   animation-delay:  ${props => props.delay || '0s'};
   animation-fill-mode: forwards;
  }
   `;
   
export const FadeInLeft = styled.div`
   opacity: 0;
   animation: 1s ${keyframes`${fadeInLeft}`} ;
   animation-delay:  ${props => props.delay || '0s'};
   animation-fill-mode: forwards;
  }
   `;
export const FadeInUp = styled.div`
   opacity: 0;
   animation: ${props => props.speed || '1s'} ${keyframes`${fadeInUp}`} ;
   animation-delay:  ${props => props.delay || '0s'};
   animation-fill-mode: forwards;
   height:100%;
  }
   `;
export const FadeIn = styled.div`
   opacity: 0;
   animation: 2s ${keyframes`${fadeIn}`} ;
   animation-delay:  ${props => props.delay || '0s'};
   animation-fill-mode: forwards;
  }
   `;export const FadeInDown = styled.div`
   opacity: 0;
   animation: ${props => props.speed || '1s'} ${keyframes`${fadeInDown}`} ;
   animation-delay:  ${props => props.delay || '0s'};
   animation-fill-mode: forwards;
  }
   `;
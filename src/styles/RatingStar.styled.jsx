

import styled from 'styled-components';

export const StyledRadiobuttonContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 60vh;
   font-size: 60px;
`
export const StyledRadiobutton = styled.input`
   display: none;
`
export const StyledStarRating = styled.div`
   display: inline-block;
   font-size: 2rem;
   color: ${props => (props.filled ? 'yellow' : 'grey')};
   cursor: pointer;
   transition: transform 0.1s;

   &:hover {
      transform: scale(1.1);
   }
`
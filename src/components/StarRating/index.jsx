import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';
import {
   StyledRadiobuttonContainer,
   StyledRadiobutton,
   StyledStarRating
} from '../../styles/RatingStar.styled.jsx';

export default function StarRating() {
   const [rating, setRating] = useState(0);

   return (
      <StyledRadiobuttonContainer>
         {[...Array(5)].map((item, index) => {
            const givenRating = index + 1;
            return (
               <label
               key={index}>
                  <StyledRadiobutton

                     type='radio'
                     value={givenRating}
                     onClick={() => {
                        setRating(givenRating);
                     /*   alert(
                           `Are you sure you want to give 
                                    ${givenRating} stars ?`
                        );*/
                     }}
                  />
                  <StyledStarRating>
                     <FaStar
                        size={20}
                        color={
                           givenRating < rating || givenRating === rating
                              ? 'hsl(44.94, 96%, 50%)'
                              : 'hsl(196, 0%, 58%)'
                        }
                     />
                  </StyledStarRating>
               </label>
            );
         })}
      </StyledRadiobuttonContainer>
   );
}
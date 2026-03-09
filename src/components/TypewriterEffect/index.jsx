import { TypeAnimation } from 'react-type-animation';

export default function TypewriterEffect() {

   return (
      <TypeAnimation
         sequence={[
            // Same substring at the start will only be typed out once, initially
            'Welcome',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Welcome to',
            1000,
            'Welcome to e-Mart!',
            1000,
         ]}
         wrapper="h4"
         speed={50}
         style={{ fontSize: '2em', fontWeight: 'bolder', display: 'inline-block' }}
         repeat={0}
      />
   );
}
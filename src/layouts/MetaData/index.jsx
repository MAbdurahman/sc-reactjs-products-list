import {Helmet} from 'react-helmet';

export default function MetaData({title}) {
   return (
      <Helmet>
         <title>{`e-Mart | ${title}`}</title>
      </Helmet>

   );
}
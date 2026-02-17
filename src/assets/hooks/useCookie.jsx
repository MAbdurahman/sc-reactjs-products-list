import {useState, useCallback} from 'react';
import Cookies from 'js-cookie';

export default function useCookie(name, defaultValue) {
   const [value, setValue] = useState(() => {
      const cookie = Cookies.get(name);
      return cookie ? cookie : (Cookies.set(name, defaultValue), defaultValue);
   });

   const updateCookie = useCallback((newValue, options) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
   }, [name]);

   const removeCookie = useCallback(() => {
      Cookies.remove(name);
      setValue(undefined);
   }, [name]);

   return [value, updateCookie, removeCookie];
}
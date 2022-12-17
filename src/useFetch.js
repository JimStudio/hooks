import { useState, useEffect} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPadding, setpadding] = useState(true);
    const [error, serError] = useState(null);

    useEffect(() => {
      const aboartCont = new AbortController();
        setTimeout(() => {
          fetch(url, {signal: aboartCont.signal})
        .then(res =>{
          if(!res.ok){
            throw Error('could not fetch the data for that rsource');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setpadding(false);
          serError(null);
        })
        .catch(err => {
          if( err.name == 'AbortError'){
            console.log('fectch abortd');
          }else{
           setpadding(false);
           serError(err.message);
          }
         })
         }, 1000);
         return() => aboartCont.abort();
      },[url]);

      return{data, isPadding, error}
}

export default useFetch
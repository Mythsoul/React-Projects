import { useEffect , useState } from "react";


function useCurrencyInfo(currency) {
    const [Data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(res => res.json())
        .then(data => setData(data[currency])) 
        console.log(Data); 
   
    } , [currency])
    return Data; 

}; 

export default useCurrencyInfo; 
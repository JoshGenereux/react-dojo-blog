import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(()=>{
            fetch(url)
                .then(res =>{
                    if(!res.ok){
                        throw Error('Could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then((data)=>{
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err=>{
                    setError(err.message)
                    setIsPending(false)
                })
        }, 1000);
        return () => console.log('cleanup')
    }, [url])

    return { data, isLoading, error}
}

export default useFetch;
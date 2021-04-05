import { useEffect, useState } from "react";

function useHours() {
    const [hour, setHour] = useState('Sun');
    const localTime = new Date().getHours();

    useEffect(()  => {
        if(localTime >= 0 && localTime < 19) setHour('Sun');
        if(localTime >= 19 && localTime < 24) setHour('Moon');  
    }, []); //eslint-disable-line  

    return [hour];
}

export default useHours;
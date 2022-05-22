import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    // console.log(services);

    useEffect(() => {
        fetch('https://boiling-headland-53562.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [services, setServices];
}

export default useServices;
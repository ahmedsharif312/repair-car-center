import { useEffect, useState } from "react";

const useServiceDetaile = serviceId => {
    const [service, setService] = useState();

    useEffect(() => {
        const url = `https://boiling-headland-53562.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);
    return [service];
}
export default useServiceDetaile;
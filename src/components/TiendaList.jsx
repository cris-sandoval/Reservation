import { useQuery } from "@tanstack/react-query";

const fetTienda = async () => {
    const res = await fetch("http://localhost:30001/hotels");
    if (!res.ok) {
        throw new Error("Network response was not OK");
    }

    return res.json();
}

function TiendaList() {
    const {
        data: hotels,
        isloading,
        error,
    } =
        useQuery({
            queryKey: ["hotels"],
            queryFn: fetTienda
        })

        if(isloading){
            return <div>Loading.. </div>
        }
} 
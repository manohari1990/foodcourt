import { apiAxiosClient } from "./apiClient";


export async function getMenuByStall({queryKey}:any) {
    
    const [_key, page, LIMIT, stallId] = queryKey
    if (!stallId) {
        throw new Error("stallId is missing");
    }
    const offset = (page-1) * LIMIT
    try{
        const response = await apiAxiosClient.get(`/menu/${stallId}?limit=${LIMIT}&offset=${offset}`)
        return response.data
    }catch(error){
        console.error('Error: ', error)
        throw error
    }

}

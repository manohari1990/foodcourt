import {apiClient, apiAxiosClient} from './apiClient'

/**
 * Axios handles HTTP communication such as headers, authentication, and errors, 
 * while React Query manages server state including caching, synchronization, and background updates. 
 * In production applications, Axios is commonly used as the HTTP client and 
 * React Query sits on top of it to efficiently manage API data within React.
 */


export async function getStalls ({queryKey}:any){
    // const result = await apiClient("/stalls", 'GET')
    const [_key, offset] = queryKey
    try{
        const result = await apiAxiosClient.get(`/stalls?limit=1&offset=${offset-1}`) // ?limit=10&offset=0
        console.log(result)
        return result.data
    }catch(error){
        console.error('Error', error)
        throw error
    }
}


export async function createStall(data:any) {
    const result = await apiClient("/stalls", 'POST', data)
    return result
}

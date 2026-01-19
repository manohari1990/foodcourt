import {apiClient} from './apiClient'

// Fetch

export async function getStalls (){
    const result = await apiClient("/stalls", 'GET')
    return result
}


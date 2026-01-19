/************************* FETCH *****************************
 * FETCH IS USEFULL FOR - 
 * Small demo apps
 * One or two API calls
 * No auth
 * No global error handling needed
 */
export const baseUrl = 'http://localhost:8000'
export const headers = {"Content-Type": "application/json"}
export const apiClient = async(requestModule:string, method:string ) => {
    const url = baseUrl+requestModule
    const apiResponse = await fetch(url, {
        method: method,
        headers: headers,
        // body: JSON.stringify(data)
    })
    if(!apiResponse.ok) throw new Error('Something went wrong, Try again!')
    return await apiResponse.json()
}

/************************************************************
 ************************ AXIOS *****************************
 * Axios is preferred over fetch in production apps 
 * because it provides automatic JSON handling, 
 * built-in error handling, request/response interceptors, 
 * and cleaner API abstractions. 
 * Interceptors allow centralized authentication, 
 * logging, and error handling, which makes 
 * applications easier to scale and maintain.
 */

import React, {useState, useEffect, useMemo} from 'react'


function UserSearch() {

    const [postList, setPostList] = useState([])
    const [query, setQuery] = useState('')
    const [debounceQuery, setDebounceQuery] = useState('')

    const fetchData = async() =>{
        const postsList = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!postsList.ok) throw new Error('Failed to fetch posts')
        return postsList.json()
    }
    useEffect(()=>{
        const postData = async() => {
            const list = await fetchData()
            console.log(list)
            setPostList(list)
        }
        postData()
    },[])

    useEffect(()=>{
        const timerID = setTimeout(()=>{
            setDebounceQuery(query)
        },500)

        return ()=> clearTimeout(timerID)
    },[query])
    

    const searchPosts =  useMemo(()=>{
        if(!debounceQuery.trim()) return []

        return postList.filter((post:any)=>
            post.title.toLowerCase().includes(debounceQuery.toLowerCase())
        )
    }, [debounceQuery])


    return (
        <>
            <input
                placeholder='Search Posts'
                value={query}
                onChange={(e)=>{
                    setQuery(e.target.value)
                }}

            />
            {
                searchPosts && searchPosts.length >0 &&
                <ul>
                    {searchPosts.map((item:any)=>{
                        return(
                            <li key={item.id}>
                                {item.title}
                            </li>
                        )
                    })}
                </ul>
            }
        </>
    )

}


export default UserSearch
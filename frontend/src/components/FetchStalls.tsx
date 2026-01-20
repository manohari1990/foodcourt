import {useQuery} from '@tanstack/react-query'
import {getStalls} from '../api/stall'
import FoodStallCard from './FoodStallCard'
import { useState } from 'react'

function FetchStalls(){

    const [page, setPage] = useState(1)
    let totalPages = 0
    const {data:stalls, error, isLoading, isFetching} = useQuery({
      queryKey: ['stalls', page],
      queryFn: getStalls,
      keepPreviousData: true
    })
    if (stalls && stalls?.pagination)
        totalPages = Math.ceil(stalls.pagination.total / stalls.pagination.limit);
    

    if(isLoading || isFetching){
      return <div>Fetching Stalls...</div>
    }
    if(error){
      return <div>An Error occured {error.message}</div>
    }

    return (
        <>
            {/* Results Summary */}
            <div className="mb-6 flex items-center justify-between">
            {/* <p className="text-sm text-muted-foreground">
                Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}-
                {Math.min(currentPage * ITEMS_PER_PAGE, foodStalls.length)} of{" "}
                {foodStalls.length} stalls
            </p> */}
            </div>

            {/* Food Stall List */}
            <div className="flex space-y-4 flex-col">
            {stalls && stalls.data && stalls.data.map((item:any) => (
                <FoodStallCard key={item.id} stall={item} />
            ))}
            </div>

            {/* Pagination Control */}
            <div className="mt-8 pb-8">
                <button 
                    onClick={()=>{setPage((p) => Math.max(p-1,1))}}
                    disabled={page===1}
                >Prev</button> 

                {Array.from({length:totalPages}).map((_, index)=>{
                    return <button onClick={()=>{
                        setPage(index+1)
                    }}>
                        {index+1}
                    </button>
                })}

                
                <button 
                    onClick={()=>{setPage((p) => p+1)}}
                    disabled={page == totalPages}
                >Next</button>
            </div>
        </>
    )
  }

  export default FetchStalls
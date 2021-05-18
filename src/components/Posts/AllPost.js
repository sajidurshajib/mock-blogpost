import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Grid, Cell} from 'baseui/layout-grid'
import CardPost from './CardPost'
import SearchPost from './SearchPost'
import { Pagination } from "baseui/pagination";

const AllPost = ()=>{
    
    const [search, setSearch] = useState('')
    const [searchData, setSearchData] = useState(null)
    const [data, setData] = useState(null)
    const [currentPage, setCurrentPage] = React.useState(1);

    useEffect(()=>{
            async function fetchAPI(){
                await axios.get(`https://609925a599011f001714034f.mockapi.io/api/v1/Posts?page=${currentPage}&limit=5`)
                .then(res=>{
                    setData(res.data)
                })
                .catch(err=>{
                    console.log(err)
                })    
            }
            fetchAPI()
        },[currentPage]
    )

    useEffect(() => {
        async function searchAPI(){
            await axios.get(`https://609925a599011f001714034f.mockapi.io/api/v1/Posts?page=${currentPage}&limit=5&search=${search}`)
                .then(res=>{
                    console.log(res.data)
                    setSearchData(res.data)
                })
                .catch(err=>{
                    console.log(err)
                })
        }
        searchAPI()
    }, [currentPage,search])

    console.log(searchData)
    return(
        <div className="AllPost">
            <Grid>
                <Cell span={[2]}></Cell>
                <Cell span={[8]}>

                    <SearchPost srch={setSearch}/>

                    {search==='' ? 
                    <CardPost data={data} />:<CardPost data={searchData} />}
                    

                    <Pagination
                    numPages={10}
                    currentPage={currentPage}
                    onPageChange={({ nextPage }) => {
                        setCurrentPage(
                        Math.min(Math.max(nextPage, 1), 10)
                        );
                    }}
                    />

                </Cell>
            </Grid>
        </div>
    )
}

export default AllPost
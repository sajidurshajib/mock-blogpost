import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Grid, Cell} from 'baseui/layout-grid'
import {HeadingLarge} from 'baseui/typography'
import CardPost from './CardPost'
import { Pagination } from "baseui/pagination";

const AllPost = ()=>{
    
    const [data, setData] = useState(null)
    const [currentPage, setCurrentPage] = React.useState(1);

    useEffect(()=>{
            async function fetchAPI(){
                await axios.get(`https://609925a599011f001714034f.mockapi.io/api/v1/Posts?page=${currentPage}&limit=5`)
                .then(res=>{
                    console.log(res)
                    setData(res.data)
                })
                .catch(err=>{
                    console.log(err)
                })    
            }
            fetchAPI()
        },[currentPage]
    )

    return(
        <div className="AllPost">
            <Grid>
                <Cell span={[2]}></Cell>
                <Cell span={[8]}>
                    <HeadingLarge>
                        <Link
                            style={{
                                "color":"#000",
                                "textDecoration":"none"
                            }}
                            to=''>Mock BlogPost</Link>
                    </HeadingLarge>
                    <CardPost data={data} />

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
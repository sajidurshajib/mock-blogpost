import {useEffect, useState} from 'react'
import axios from "axios"
import { useParams } from "react-router"
import {Grid, Cell} from 'baseui/layout-grid'
import {Card, StyledBody} from 'baseui/card'

const DetailPost = ()=>{
    let {postId} = useParams()

    const [post, setPost] = useState(null)

    useEffect(() => {
        async function single(){
            await axios.get(`https://609925a599011f001714034f.mockapi.io/api/v1/Posts/${postId}`)
                .then((data)=>{
                    setPost(data.data)
                    console.log(data)
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
        single()
    }, [postId])

    return (
        <div className="DetailPost">
            <Grid>
                <Cell span={[2]}></Cell>
                <Cell span={[8]}>
                    {post ? 
                    <Card
                        overrides={{Root: {style: {marginBottom: '15px'}}}}
                        title={`${post?.postTitle}`}
                    >
                        <StyledBody>
                            <h4 style={{"color":"#666666"}}>{post?.authorName}</h4>
                            <p style={{"color":"#666666","fontSize":"12px"}}>{post?.createdAt}</p>
                            {`${post?.postContent}`}
                        </StyledBody>

                    </Card>
                    : null}
                </Cell>
            </Grid>
            
        </div>
    )
}

export default DetailPost
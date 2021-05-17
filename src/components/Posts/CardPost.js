import {Link} from 'react-router-dom'
import {Card, StyledBody, StyledAction} from 'baseui/card'
import {Button} from 'baseui/button'

const CardPost = (props)=> {
    return (
        <div className="Card">
            {props.data?.map((v,i)=>{
                return(
                    <div key={i}>
                        <Card
                            overrides={{Root: {style: {marginBottom: '15px'}}}}
                            title={`${v.postTitle}`}
                        >
                            <StyledBody>
                                <h4 style={{"color":"#666666"}}>{v.authorName}</h4>
                                <p style={{"color":"#666666","fontSize":"12px"}}>{v.createdAt}</p>
                                {`${v.postContent.substring(0,270)}...`}
                            </StyledBody>

                            <StyledAction>
                                <Button >
                                <Link
                                style={{
                                    "color":"#fff",
                                    "textDecoration":"none"
                                }}
                                to={`/posts/${v.id}`}>Read more</Link>
                                </Button>
                            </StyledAction>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default CardPost
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
                            <h2>{}</h2>
                            <StyledBody>
                                {`${v.postContent.substring(0,270)}...`}
                            </StyledBody>

                            <StyledAction>
                                <Button >
                                Read more
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
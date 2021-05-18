import {Link} from 'react-router-dom'
import {Grid, Cell} from 'baseui/layout-grid'
import {Button} from 'baseui/button'
import {HeadingLarge} from 'baseui/typography'

const Home = ()=>{
    return(
        <div className="Home" style={{"textAlign":"center"}}>
            <Grid>
                <Cell span={[4]}></Cell>
                <Cell span={[4]}>
                    <HeadingLarge>Mock BlogPost</HeadingLarge>
                    <Button disabled>About</Button>
                    <Link
                        style={{
                            "color":"#fff",
                            "textDecoration":"none"
                        }}
                        to='/posts'>
                        <Button>
                            Posts
                        </Button>
                    </Link>
                </Cell>
            </Grid>
            
        </div>
    )
}

export default Home
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import AllPost from '../components/Posts/AllPost'
import DetailPost from '../components/Posts/DetailPost'
import {HeadingLarge} from 'baseui/typography'
import {Grid, Cell} from 'baseui/layout-grid'

const Posts = (props)=>{
    return (
        <div className="Posts">
            
            <Grid>
                <Cell span={[2]}></Cell>
                <Cell span={[8]}>
                    <HeadingLarge>
                        <Link
                            style={{
                                "color":"#000",
                                "textDecoration":"none"
                            }}
                            to='/'>Mock BlogPost</Link>
                    </HeadingLarge>
                </Cell>
            </Grid>

            <Router>
                <Switch>
                    <Route path={`${props.match.path}/:postId`} component={DetailPost}/>
                    <Route path='/posts' component={AllPost}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Posts
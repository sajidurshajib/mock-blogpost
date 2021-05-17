import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BaseUIWrapper from '../BaseUIWrapper'
import AllPost from '../components/Posts/AllPost'
import DetailPost from '../components/Posts/DetailPost'

const Posts = ({match})=>{
    return (
        <div className="Posts">
            <BaseUIWrapper>
                <Router>
                    <Switch>
                        <Route path={`${match.path}/:postId`} component={DetailPost}/>
                        <Route path='/posts' component={AllPost}/>
                    </Switch>
                </Router>
            </BaseUIWrapper>
        </div>
    )
}

export default Posts
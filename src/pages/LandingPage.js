import BaseUIWrapper from '../BaseUIWrapper' 
import Home from '../components/Home/Home'
const LandingPage = ()=>{
    return(
        <div className="LandingPage">
            <BaseUIWrapper>
                <Home />
            </BaseUIWrapper>
        </div>
    )
}

export default LandingPage
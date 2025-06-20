import React from 'react'
import{Link} from "react-router"
const HomePage = () => {
    return (
        <div>HomePage

<div>
<Link to="/hook-form" >go to hookForm</Link>
</div>
<div>
<Link to="/uncontrolled" >go to uncontrolledReactHookForm</Link>
</div>
<div>
    <Link to="/form" >go to uncontrolledform</Link>
</div>
            
            
            
        </div>
    )
}

export default HomePage
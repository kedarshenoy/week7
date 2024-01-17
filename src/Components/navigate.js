import { Link } from 'react-router-dom';

const Nav=()=>{
    return(
        <>
        <nav>
        
        <div >
          <ul style={{display:"flex",justifyContent:"space-around"}}>
            <li style={{marginLeft:'20px'}}><Link to="/1">Question1</Link></li>
            <li style={{marginLeft:'20px'}}><Link to="/2">Question2</Link></li>
            <li style={{marginLeft:'20px'}}><Link to="/3">Question3</Link></li>
            <li style={{marginLeft:'20px'}}><Link to="/4">Question4</Link></li>
            <li style={{marginLeft:'20px'}}><Link to="/5">Question5</Link></li>
          </ul>
        </div>
      </nav>
        </>
    )

}

export default Nav;
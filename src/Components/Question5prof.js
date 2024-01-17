

import Nav from './navigate';

const Question5prof =({user})=>{
    const coustom={
        textAlign:"Center",
        marginTop:"-90px"

    }
    const Img=()=>{
        return(
            <img src={user.avatar_url} alt="not forunt " style={{height:"150px",width:"150px",borderRadius:"50%"}}/>
        )
        }
        
        const Cred=()=>{
           return <>
           <div  style={{fontWeight: '300',color: '#555',fontSize:"20px",marginBottom:"30px"}}> 
                <div ><b style={{fontWeight:"800",color:"black",fontSize:"25px"}}>{user.name}</b><a href={user.html_url} target="blank">&#8599; </a></div>
                <div>{user.location}</div>
                <div>{user.bio}</div>

            </div>
           </>
        
        }
        
        const Stats=()=>{
            let followers=user.followers;
            let following=user.following;
            let repos=user.public_repos;
            return<div style={{display:'flex',fontWeight: '500',color: '#555',fontSize:"20px",marginBottom:"60px",justifyContent:"space-around"}}>
        
                <div style={{textAlign:'center'}}><b >{followers}</b><br/>Followers</div>
                <div style={{textAlign:'center'}}><b>{following}</b><br/>Following</div>
                <div style={{textAlign:'center'}}><b>{repos}</b><br/>Repos</div>
        
            </div>
        
        }
    return <div><Nav></Nav>
        <div style={{display:"flex",justifyContent:"center",marginTop:"100px"}}>
                <div style={{width:"30%",border: '2px solid gray'}}>
                    <div style={{backgroundColor:"lightBlue",height:"200px"}}></div>
                    <div style={coustom}><Img ></Img>
                        <Cred ></Cred>
                        <hr/>

                    </div>
                    <Stats></Stats>
                </div>
            </div>
            {console.log(user
)}
    </div>
}

export default Question5prof;
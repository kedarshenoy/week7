import Nav from './navigate';

const coustom={
       textAlign:"Center",
       marginTop:"-90px"
        
}

const Profile =()=>{
    return <>
    <Nav></Nav><br/>
    <div style={{display:"flex",justifyContent:"center",marginTop:"100px"}}>
                
                <div style={{width:"30%",border: '2px solid gray'}}>
                    <div style={{backgroundColor:"lightBlue",height:"200px"}}></div>
                    <div style={coustom}><Img ></Img>
                        <Cred ></Cred>
                        <hr/>

                    </div>
                    <Stats></Stats>
                </div>
            </div></>
}
const Img=()=>{
return(
    <img src={require('../assets/profile.jpg')} alt="not forunt " style={{height:"150px",width:"150px",borderRadius:"50%"}}/>
)
}

const Cred=()=>{
    const notificationcount=76;
   return <>
   <div  style={{fontWeight: '300',color: '#555',fontSize:"20px",marginBottom:"30px"}}> 
        <div ><b style={{fontWeight:"800",color:"black",fontSize:"25px"}}>Harkirat Singh </b>{notificationcount}</div>
        <div>Londoon </div>
    </div>
   </>

}

const Stats=()=>{
    let followers="80K";
    let likes="803K";
    let photos="1.4K";
    return<div style={{display:'flex',fontWeight: '500',color: '#555',fontSize:"20px",marginBottom:"60px",justifyContent:"space-around"}}>

        <div><b>{followers}</b><br/>Followers</div>
        <div><b>{likes}</b><br/>Likes</div>
        <div><b>{photos}</b><br/>Photos</div>

    </div>

}
export default Profile;
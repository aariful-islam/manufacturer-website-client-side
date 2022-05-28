import {useEffect, useState} from "react"

const useToken=user=>{
    const [token,setToken]=useState('')
    useEffect( ()=>{
        const email=user?.user?.email;
        const currentuser={email:email}
        if(email){
            fetch(`https://floating-basin-04314.herokuapp.com/user/${email}`,{
                method:'PUT',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(currentuser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log("data inside token",data)
                const accesstoken=data.token;
                localStorage.setItem('accesstoken',accesstoken);
                setToken(accesstoken);
            })

        }

    },[user])
    return [token];
}
export default useToken;
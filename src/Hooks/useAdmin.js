import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    
    useEffect( () =>{
        const email = user?.email;
       
        if(email){
            fetch(`http://localhost:4000/admin/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setAdmin(data.admin);
                console.log(data.admin)
               
            })
        }
    }, [user])

    return [admin]
}

export default useAdmin;
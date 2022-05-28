import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    
    useEffect( () =>{
        const email = user?.email;
       
        if(email){
            fetch(`https://floating-basin-04314.herokuapp.com/admin/${email}`, {
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
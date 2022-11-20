import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminloading, setIsAdminLoading] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/allusers/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setIsAdmin(data.isAdmin)
                setIsAdminLoading(false)
            })
        }
    }, [email])
    return [isAdmin, isAdminloading]
}
export default useAdmin;
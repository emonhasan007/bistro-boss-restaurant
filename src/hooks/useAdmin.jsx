import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAdmin = ()=>{
    const {user} = useContext(AuthContext);
}

export default useAdmin;
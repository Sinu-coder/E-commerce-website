import { createContext,useState } from "react";
 
export const UserContext = createContext();

export function UseProvider ({children}){

    const [user, setUser] = useState({
user: "Guest",
loggedIn : false,

    });

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )

}
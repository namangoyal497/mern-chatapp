// import { createContext , useState,useEffect,useContext} from "react";
// import {useAuthContext} from './AuthContext';
// import io from "socket.io-client"
// export const SocketContext=createContext();

// export const useSocketContext = () => {
// 	return useContext(SocketContext);
// };

// export const SocketContextProvider=({children})=>{
    
//     const [socket,setSocket]=useState(null);
//     const [onlineUsers,setOnlineUsers]=useState([]);
//     const {authUser}=useAuthContext();
//     useEffect(()=>{
//         if(authUser){
//             const socket=io("http://localhost:5000",{
//                 query:{
//                     userId : authUser._id,
//                 }
//             }
//             );

//             setSocket(socket);

//             socket.on("getOnlineUsers",(users)=>{
//                 setOnlineUsers(users);
//             })
//             return ()=>socket.close();
//         }
//         else{
//             if(socket){
//                 socket.close();
//                 setSocket(null);
//             }
//         }
//     },[authUser]);

//     return (
//         <SocketContext.Provider value={{socket,onlineUsers}}>
//             {children}
//         </SocketContext.Provider>
//     )
// }
import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();
export const useSocketContext = () => {
  return useContext(SocketContext);
};
export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { authUser } = useAuthContext();
  const [onlineUsers, setonlineUsers] = useState([]);
  // Effect for setting up the socket connection
  useEffect(() => {
    if (authUser) {
      const socket = io("https://mern-chatapp1.onrender.com", {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setonlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
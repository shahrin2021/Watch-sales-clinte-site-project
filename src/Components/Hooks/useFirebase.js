import React ,{ useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut,onAuthStateChanged,GoogleAuthProvider,updateProfile,signInWithPopup  } from "firebase/auth";
import firebaseConfigInitialize from "../../Firebase/Firebase.inite";
import { useLocation, useNavigate } from "react-router";

firebaseConfigInitialize()
const useFirebase =()=>{
    const [user , setUser] = useState({});
    const [error , setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] =useState([]);
    const [count , setCount] =useState(0)
    const [admin, setAdmin]=useState(false)
    const auth = getAuth();
   
    const provider= new GoogleAuthProvider();
    console.log(user)
    // const location = useLocation()
    // const navigate = useNavigate()
    
       const signInwithGoogle=(location,navigate)=>{
        signInWithPopup(auth ,provider )
        .then(result=>{
            setUser(result.user)
           
            const destination= location?.state?.from || '/home';
            navigate(destination)
            seveUsers(user.eamil, user.displayName,'PUT')
        }).catch((error)=>{
            setError(error.message)
        }).finally(()=>{
            setIsLoading(false)
        })
       } 
  
    const registerUserWithGmailAndPassword = (email, password,name,navigate)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const newUser = { email, displayName: name};
            setUser(newUser);
            console.log(newUser)
            navigate('/home')
          
            
            updateProfile(auth,{
                displayName:name
            }).then(()=>{
    
            }).catch((error)=>{
                setError(error.message)
            })

            seveUsers(email , name , 'POST')
            
            
        }).catch((error)=>{
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
        
       

    };

    const handleLoginWithEmailAndPassword =(email, password,navigate, location)=>{
        signInWithEmailAndPassword(auth,email, password)
        .then(result=>{
            setUser(result.user)
            const driction = location?.state?.from || '/home';
            navigate(driction)
        })
        .catch((error)=>{
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
        
    };

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged (auth, (user)=>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }

            setIsLoading(false)
        })
        return ()=> unsubscribe;

   
       
    },[]);

const handleLogout =()=>{
    signOut(auth)
    .then(result=>{

    })
    .catch((error)=>{
        setError(error.message)
    })
    .finally(()=>{
        setIsLoading(false)
    })
}

useEffect(()=>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res=> res.json())
    .then(data=>{
        setAdmin(data.admin)
    })
},[user.email])


// all products call

useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=> res.json())
    .then(data=>{
        setProducts(data)
    })
},[]);

const seveUsers = (email, displayName, method)=>{
    const user = {email, displayName}
    fetch('http://localhost:5000/users',{
        method:method,
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data=> console.log(data))
}


// const handleLoveIt =()=>{
// const newCount=count + 1;
//   setCount(newCount)
//   console.log(count)
//   console.log("incress")
  
// }



return {
    user,error, admin, isLoading,registerUserWithGmailAndPassword,handleLogout,handleLoginWithEmailAndPassword ,products,count,signInwithGoogle
}

}




export default useFirebase;
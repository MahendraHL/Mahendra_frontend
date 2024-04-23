import React from 'react';

// const DynamicContent=(isLoggedIn)=>{
// return(
//     <div>
//         {isLoggedIn ? (<p>Welcome User</p>):(<p>Please Login</p>)}
//     </div>
// )
// }
// const DynamicContent=(props)=>{
//     return(
//         <div>
//             {props ? (<p>Welcome User</p>):(<p>Please Login</p>)}
//         </div>
//     )
//     }

const DynamicContent=(props)=>{
    return(
        <div>
            {props && (<p>Welcome User</p>)}
        </div>
    )
    }


export default DynamicContent
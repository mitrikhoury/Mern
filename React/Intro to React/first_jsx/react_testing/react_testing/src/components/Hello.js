import React , {Component} from 'react'

const Hello = () => {
     // write using jsx
    // return (
    //     <div>
    //       <h1>Hello Mitri </h1>
    //     </div>
    // )

    return React.createElement('div' , {id : 'hello' , class:'dummy'}, <h1>helllooo </h1>) //  write the component without using jsx 
}

export default Hello;
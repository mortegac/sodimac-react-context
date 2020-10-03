import React from 'react'

import { Context } from './context.js'


const Items = () =>{


    return(
        <Context.Consumer>
        {
            data => (
                data.list.map( (item, index) => (
                    <li key={index}>{item}</li>
                ))
            )

        }
            

        </Context.Consumer>
        
    )

}

export default Items
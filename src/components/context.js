import React from 'react';

import { dark } from '../themes';
// BASE DE DATOS = CONTEXT


const Context = React.createContext({
    theme: dark,
    list:[]
});


export {Context};

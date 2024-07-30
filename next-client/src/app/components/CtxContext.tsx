"use client"
import React, {createContext, useState} from "react";

const defaultValue: any = {};
export const CtxContext = React.createContext(defaultValue);

function Context({children}: any) {
    const [ctx, setCtx] = useState(defaultValue);
    return (
        <CtxContext.Provider value={{ctx, setCtx}}>
            {children}
        </CtxContext.Provider>
    );
}

export default Context
import GameCanvas from './components/pages/GameCanvas';
import Context from './components/CtxContext';
import { createContext, useContext, useState } from 'react';

export default function Home() {
    return (
        <Context>
            <div className="background"></div>
            <GameCanvas />
        </Context>
    );
}

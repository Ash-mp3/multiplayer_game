'use client';
import { useEffect, useRef, useState } from 'react';
import playerModel from '../../models/playerModel';

function GameCanvas() {
    const canvasRef = useRef(null);
    const pressedKeys = new Set();

    useEffect(() => {
        const canvas: any = canvasRef.current;
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        const ctx = canvas.getContext('2d');
        const wallCtx = canvas.getContext('2d');
        const player = new playerModel(innerWidth/2, innerHeight/2, 25, 1, 'DarkRed', ctx);
        player.create();

        const updatePlayerPosition = () => {
            if (pressedKeys.has('ArrowUp')) {
                player.move(0, -5);
            } 
            if (pressedKeys.has('ArrowDown')) {
                player.move(0, 5);
            } 
            if (pressedKeys.has('ArrowLeft')) {
                player.move(-5, 0);
            } 
            if (pressedKeys.has('ArrowRight')) {
                player.move(5, 0);
            }
    
            requestAnimationFrame(updatePlayerPosition);
        };

        const handleKeyDown = (event: any) => {
            pressedKeys.add(event.key);
        };
        
        const handleKeyUp = (event: any) => {
            pressedKeys.delete(event.key);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        updatePlayerPosition();
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    // function createWalls(ctx: any) {
    //     ctx.fillRect(innerWidth - 50, 0, 50, innerHeight);
    //     ctx.fillRect(0, innerHeight - 50, innerWidth, 50);
    //     ctx.fillRect(0, 0, innerWidth, 50);
    //     ctx.fillRect(0, 0, 50, innerHeight);
    // }

    return <canvas className="canvas" ref={canvasRef}></canvas>;
}

export default GameCanvas;

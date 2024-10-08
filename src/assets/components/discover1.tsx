import React from "react";
import game1 from '../images/game1.png'
import { useNavigate } from "react-router-dom";

export const Discover=()=>{
    const navigate = useNavigate();

    const handle=()=>{
        navigate('/');
    }
    return <>
    <div className="flex ">
        <div>
        <img src={game1} alt="game1" className="w-screen h-screen brightness-50" />
        </div>
        <div className="absolute  text-4xl inset-12 m-auto">
       <p className="text-white text-5xl"> ALABAY HERITAGE </p>
       <span className="font-sans text-green-300 text-3xl"> THE LOST ADVENTURE </span>
       <p className="font-sans text-white w-96 text-lg font-bold mt-4">Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors. </p>
        <button className="font-sans bg-green-400 text-base w-32 h-9 rounded-2xl font-bold" onClick={handle}>
            
            play
            </button>
        </div>
    </div>
    </>
}
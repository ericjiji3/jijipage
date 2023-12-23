"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {useRef, useState, useEffect} from 'react'
import BlackFolder from '../../../public/images/black-open-folder.png'
// ES6
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
// import { Draggable, DropResult, Droppable } from "react-beautiful-dnd";
// import LoadingSkeleton from "./LoadingSkeleton";
// import { DndContext } from "@/context/DndContext";

export default function DraggableComponents(props:any) { 
    const [activeDrags, setActiveDrags] = useState(0);
    const nodeRef = React.useRef(null);
    const date = new Date(props.data.date);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const [x, setX] = useState(props.x);
    const [y, setY] = useState(props.y);
    
    useEffect(()=>{
      if(props.x && props.y){
        setX(props.x);
        setY(props.y);
      }

    }, [props.x, props.y])
    
    const handleStart = () =>{
        setActiveDrags(activeDrags + 1);
        console.log('start');
    }
    const handleStop = () =>{
        setActiveDrags(activeDrags - 1);
        console.log('drag');
    }
    return ( 
      <div className="w-fit"> 
        <Draggable
            onStart={handleStart}
            onDrag={handleStop}
            handle=".handle"
            nodeRef={nodeRef}
        >
            <div className="handle absolute" ref={nodeRef} style={{top: `${y}%`, left: `${x}%` }}>
            
            {props.data.featuredImage && (
            <Image
              src={props.data.featuredImage.src}
              // Use the Contentful featuredImages API to render
              // responsive featuredImages. No next/featuredImage required:
              width={200}
              height={200}
              alt={props.data.featuredImage.alt}
              className="pointer-events-none mb-1 border border-stone-950"
            />
          )}
          <Link href={`/webdev/${props.data.slug}`} className="group flex justify-between">
            <div>
              <h2 className='group-hover:underline'>{props.data.title}</h2>
              <span className='group-hover:underline'>{day} {month} {year}</span>
            </div>
            <div>
              <Image
                src={BlackFolder}
                width={20}
                height={20}
                alt="oops"
                className='group-hover:border-b pb border-stone-950'
              />
            </div>

          </Link>
            </div>
        
          
        
          
          </Draggable>
      </div> 
    ) 
  } 
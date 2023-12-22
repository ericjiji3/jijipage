"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {useRef, useState} from 'react'
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

    console.log(day, month, year);
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
            <div className="handle absolute" style={{top: `${props.y}%`, left: `${props.x}%` }} ref={nodeRef}>
            
            {props.data.featuredImage && (
            <Image
              src={props.data.featuredImage.src}
              // Use the Contentful featuredImages API to render
              // responsive featuredImages. No next/featuredImage required:
              width={200}
              height={200}
              alt={props.data.featuredImage.alt}
              className="pointer-events-none"
            />
          )}
          <Link href={`/webdev/${props.data.slug}`}>
            <h2>{props.data.title}</h2>
            <span>{day} {month} {year}</span>
            </Link>
            </div>
        
          
        
          
          </Draggable>
      </div> 
    ) 
  } 
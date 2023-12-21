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
            <div className="handle" ref={nodeRef}>
            {props.data.featuredImage && (
            <Image
              src={props.data.featuredImage.src}
              // Use the Contentful featuredImages API to render
              // responsive featuredImages. No next/featuredImage required:
              width={300}
              height={300}
              alt={props.data.featuredImage.alt}
              className="pointer-events-none"
            />
          )}
            <h2>{props.data.title}</h2>
            </div>
        {/* <Link href={`/webdev/${props.data.slug}`}> */}
          
        
          {/* </Link> */}
          </Draggable>
      </div> 
    ) 
  } 
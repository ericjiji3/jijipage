"use client"
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { isSameDay } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import './calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];



export default function Cal(props:any){
    const [value, onChange] = useState<Value>(new Date());
    const [tileHeight, setTileHeight] = useState(0);
    console.log(new Date(props.data[0].date));
    useEffect(()=>{
        function updateTileHeight(){
            let calendarHeight = window.innerHeight * 0.7;
            setTileHeight((calendarHeight/6) - 24);
            console.log(tileHeight);
        }
        window.addEventListener('resize', updateTileHeight);
        updateTileHeight();
        return () => window.removeEventListener('resize', updateTileHeight);
    }, [tileHeight])
    const entry = ({date} : any) => {
        
        for(let i=0;i<props.data.length;i++){
            let entryDated = new Date(props.data[i].date);
           
            if(isSameDay(entryDated,date)){
                return (
                    <div style={{height: `${tileHeight}px`}}>
                        <Link href={`/personal/${props.data[i].slug}`}>
                            {props.data[i].featuredImage && (
                            <Image
                                src={props.data[i].featuredImage.src}
                                // Use the Contentful featuredImages API to render
                                // responsive featuredImages. No next/featuredImage required:
                                width={150}
                                height={150}
                                alt={props.data[i].featuredImage.alt}
                            />
                            )}
                            <h2>{props.data[i].title}</h2>
                        
                        </Link>
                    </div>
                )
            }
        }
        return(
            <div style={{height: `${tileHeight}px`}}>

            </div>
        )

    }

    
    return(
        <div className='h-full'>
            <Calendar showFixedNumberOfWeeks={true} onChange={onChange} value={value} tileContent={entry}/>
        </div>
    )
}
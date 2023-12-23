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
    const [monthHeight, setMonthHeight] = useState(0);
    const [yearHeight, setYearHeight] = useState(0);
    const [decadeHeight, setDecadeHeight] = useState(0);

    console.log(new Date(props.data[0].date));
    useEffect(()=>{
        function updateTileHeight(){
            let calendarHeight = window.innerHeight * 0.7;
            setTileHeight((calendarHeight/6) - 38);
            setMonthHeight((calendarHeight/4) - 34);
            setYearHeight((calendarHeight/4) - 34);
            setDecadeHeight((calendarHeight/4) - 34);
            console.log(tileHeight);
        }
        window.addEventListener('resize', updateTileHeight);
        updateTileHeight();
        return () => window.removeEventListener('resize', updateTileHeight);
    }, [tileHeight])
    const entry = ({date, view} : any) => {
        if(view == "month"){
            for(let i=0;i<props.data.length;i++){
                let entryDated = new Date(props.data[i].date);
                
                if(isSameDay(entryDated,date)){
                    return (
                        <div style={{height: `${tileHeight}px`}}>
                            <Link href={`/personal/${props.data[i].slug}`} className='group flex h-full bg-stone-950 p-1'>
                                {props.data[i].featuredImage && (
                                <Image
                                    src={props.data[i].featuredImage.src}
                                    // Use the Contentful featuredImages API to render
                                    // responsive featuredImages. No next/featuredImage required:
                                    width={50}
                                    height={50}
                                    alt={props.data[i].featuredImage.alt}
                                    className="h-full mr-2 object-cover"
                                />
                                )}
                                <h2 className='group-hover:underline text-stone-50'>{props.data[i].title}</h2>
                            
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
        if(view == "year"){
            return(
                <div style={{height: `${monthHeight}px`}}>
    
                </div>
            )
        }
        if(view == "decade"){
            return(
                <div style={{height: `${yearHeight}px`}}>
    
                </div>
            )
        }
        if(view == "century"){
            return(
                <div style={{height: `${decadeHeight}px`}}>
    
                </div>
            )
        }
    }

    
    return(
        <div className='h-full'>
            <Calendar showFixedNumberOfWeeks={true} onChange={onChange} value={value} tileContent={entry}/>
        </div>
    )
}
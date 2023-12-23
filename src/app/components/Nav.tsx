import Link from "next/link";
import Image from 'next/image';
import Logo from '@/../public/images/logo.png';

export default function Nav(){
    return(
        <div className="flex flex-col justify-between h-full p-14">
            <div>
                <Link href='https://jiji.lol/' target="_blank">
                    <Image
                        src={Logo}
                        width={75}
                        alt="oops"
                    />
                  </Link>
            </div>
            <div>
                <Link className="block" href='/'>HOME</Link>
                <Link className="block" href='/personal'>PERSONAL</Link>
                <Link className="block" href='/webdev'>WEB DEV</Link>
                <Link className="block" href='/webdev'>SITE OF THE WEEK</Link>
            </div>
        </div>
    )
}
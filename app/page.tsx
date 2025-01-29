import Image from 'next/image';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="w-[350px] h-[50px] bg-gray-700 rounded-[13px]">
        <div className="flex flex-row  gap-10 pt-2 pl-1 align-center justify-center filter invert transition-all duration-200">
          <div className={styles.img}>
            <Image src="/images/move.svg" alt=''  width={20}  height={20}/>
          </div>

          <div className={styles.img}>
            <Image src="/images/frame.svg" alt='' width={20} height={20}/>
          </div>

          <div className={styles.img}>
            <Image src="/images/rectangle.svg" alt='' width={20} height={20}/>
          </div>

          <div className={styles.img}>
          <Image src="/images/pen.svg" alt='' width={20} height={20} />
        </div>
        </div>
        
       </div>

    </main>
  );
} 

import Image from 'next/image';
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="w-[350px] h-[50px] bg-gray-700 rounded-[13px]">
        <div className={styles.img}>
          <Image src="/images/move.svg" alt='' fill className={styles.imgType} />
        </div>
       </div>

    </main>
  );
} 

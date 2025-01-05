import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="w-[350px] h-[50px] bg-gray-700 rounded-[13px]">
        <div className="flex-row items-center gap-2 p-10">
          <h1 className='flex-row'>Move</h1>
          <h1>frame</h1>
          <h1>code</h1>
          <h1>text</h1>
        </div>
       </div>

    </main>
  );
} 

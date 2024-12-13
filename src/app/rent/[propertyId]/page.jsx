"use client";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import Carousel from '../../../components/Carousel'
export default function Page() {

  const items = [
    {
      image: '/assets/images/propertImage.png',
      alt: 'Image 1',
      title: 'Item 1',
      description: 'Description for item 1',
    },
    {
      image: '/assets/images/propertImage.png',
      alt: 'Image 2',
      title: 'Item 2',
      description: 'Description for item 2',
    },
    {
      image: '/assets/images/propertImage.png',
      alt: 'Image 3',
      title: 'Item 3',
      description: 'Description for item 3',
    },
  ];

  const router = useRouter(); // Initialize the router

  return (
    <div className="h-full w-full">
      <div className="h-[64px] bg-[#7065F0] flex justify-start items-center gap-4 px-4">
        <MdOutlineKeyboardBackspace
          color="white"
          size={22}
          className="cursor-pointer"
          onClick={() => router.back()} // Navigate to the previous route
        />
        <p
          className="text-[white] font-medium cursor-pointer hover:underline"
          onClick={() => router.back()} // Optionally link the text as well
        >
          Back to search results
        </p>
      </div>
      <div className="h-[calc(100%-64px)] w-full flex gap-2 p-2">
        <div className="w-[calc(100%-292px)] h-full">
          <div>
            <Carousel items={items} />
          </div>
        </div>
        <div className="w-[292px] h-full bg-[white]"></div>
      </div>
    </div>
  );
}

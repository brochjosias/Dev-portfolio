import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};

const ReviewCard = ({ review }: Props) => {
  const { image, name, profession, rating, review: clientReview } = review;

  return (
    <div className="rounded-md overflow-hidden bg-[#0f0715] m-4">
      <div className="p-6">
        <Image
          src="/imagens/q.png"
          alt="quote"
          width={50}
          height={50}
          className="mb-4"
        />
        <p className="text-white text-opacity-70 mb-4">{clientReview}</p>
        <Image
          src="/imagens/q.png"
          alt="quote"
          width={50}
          height={50}
          className="ml-auto rotate-180"
        />
      </div>

      <div className="px-6 py-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold">
        <span>{rating}/5</span>
        <FaStar className="text-yellow-500" />
      </div>

      <div className="bg-gray-100 p-6">
        <div className="flex items-center space-x-4">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h4 className="text-lg font-bold">{name}</h4>
            <p className="text-base text-gray-700">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

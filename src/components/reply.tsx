import Link from "next/link";
import React from "react";
import { TweetRenderer } from "./post";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import moment from "moment";

const Reply = ({ post }: { post: any }) => {
  return (
    <div className="flex flex-col flex-shrink-0 p-4 pb-0 border-y">
      <a href="#" className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-10 w-10 rounded-full"
              src={
                post.img ||
                "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
              }
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-base leading-6 font-medium text-white">
              {post.name || "Jash Agrawal"}
              <span className="text-sm leading-5 ml-2 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                {post.username || "@JashAgrawal"} .{" "}
                {moment(post.date).format("D MMM YY") || "16 April"}
              </span>
            </p>
          </div>
        </div>
      </a>

      <div className="pl-14 mt-4">
        <div>
          <TweetRenderer tweet={post.text} />
        </div>
        <div className="flex my-4">
          <div className="p-4 rounded-full hover:bg-slate-800">
            <FaRegHeart size={26} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reply;

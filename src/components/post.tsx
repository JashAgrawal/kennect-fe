import moment from "moment";
import Link from "next/link";
import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

export const TweetRenderer = ({ tweet }: { tweet: string }) => {
  const renderTextWithHashtags = () => {
    if (tweet) {
      const parts = tweet.split(/(#[^\s]+)/g);

      return parts.map((part, index) => {
        if (part.startsWith("#")) {
          return (
            <span key={index} className="text-blue-400">
              {part}
            </span>
          );
        }

        return part;
      });
    }
    return <p>{tweet}</p>;
  };
  return (
    // <div className="pl-14">
    <p className="text-base width-auto font-medium text-white flex-shrink">
      {renderTextWithHashtags()}
    </p>
    // </div>
  );
};
const Post = ({ post }: { post: any }) => {
  return (
    <Link
      href={"/post/" + post._id}
      className="flex flex-col flex-shrink-0 p-4 pb-0 border-y"
    >
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
              {post.userId.Name || "Jash Agrawal"}
              <span className="text-sm leading-5 ml-2 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                {/* {post.Email || "agrawal@gmail.com"}  */}(
                {moment(post.createdAt).format("D MMM YY") || "16 April"})
              </span>
            </p>
          </div>
        </div>
      </a>

      <div className="pl-14">
        <TweetRenderer tweet={post.text} />
        <div className="flex my-5">
          <div className="w-full">
            <div className="flex items-center w-full space-x-8">
              <div>
                {/* <BiMessageRoundedDetail size={30}/> */}
                <AiOutlineMessage size={26} />
              </div>

              <div>
                <FaRegHeart size={26} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;

import { GoSearch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import User from "@/components/user";
import Link from "next/link";
import Post, { TweetRenderer } from "@/components/post";
import Reply from "@/components/reply";

export default function PostPage() {
  const posts = [1, 2, 3, 4, 5, 6];
  const tweet = `
    Day 07 of the challenge #100daysofCode I was
    wondering what I can do with , so just
    started building Twitter UI using Tailwind and so far it looks
    so promising. I will post my code after completion. [07/100]
    #WomenWhoCode #CodeNewbie
`;
  return (
    <div className="bg-blue-900 text-white p-8">
      <div className="flex">
        <div className=" w-1/5 h-screen border-r-2 flex flex-col space-y-8 pr-4">
          <User name="Jash Agrawal" userId="@JashAgrawal" />
          <button
            className="group inline-block rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            // href="/download"
          >
            <span className="block rounded-full bg-blue-200 px-6 py-2 text-md text-black font-medium group-hover:bg-transparent">
              <span className="text-xl mr-2">+</span> New Post
            </span>
          </button>
        </div>
        <div className="flex flex-col w-full h-screen overflow-y-auto">
          <div className="relative text-gray-300 w-full pb-0 mb-4 px-4">
            <button type="submit" className="absolute ml-4 mt-3 mr-4">
              <GoSearch />
            </button>

            <input
              type="search"
              name="search"
              placeholder="Search Posts"
              className="bg-blue-800 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow border-0"
            />
          </div>
          <div className="border-y py-4">
            <div className="flex">
              <div className="m-2 w-10 py-1">
                <img
                  className="inline-block h-10 w-10 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                  alt=""
                />
              </div>
              <div className="flex-1 px-2 pt-2 mt-2">
                {/* <div className="pl-14"> */}
                <TweetRenderer tweet={tweet} />
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
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 w-full px-4">
            <p className="font-semibold ">Comments</p>
          </div>
          {posts.map((post: any, index) => (
            <Reply
              key={index}
              post={{
                name: "Jash Agrawa",
                username: "@jashagrawal",
                date: "06 April",
                text: tweet,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

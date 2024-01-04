"use client";
import { GoSearch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import User from "@/components/user";
import Link from "next/link";
import Post from "@/components/post";
import { useContext, useEffect, useState } from "react";
import { addPost, fetchPosts } from "@/services/postService";
import Search from "@/components/search";
import { useSearchParams } from "next/navigation";
import PostAndReply from "@/components/postAndReply";
import { getCookie } from "cookies-next";

export default function Home({ children }: { children: React.ReactNode }) {
  const [searchResults, setSearchResults] = useState<any>({
    posts: [],
    comments: [],
  });
  const user = {
    name: getCookie("name")?.toString(),
    email: getCookie("email")?.toString(),
  };
  const params = useSearchParams();
  const search = params.get("search");
  return (
    <div className="bg-blue-900 text-white p-8">
      <div className="flex">
        <div className=" w-1/5 h-screen border-r-2 flex flex-col space-y-8 pr-4">
          <User name={user.name || "Name"} userId={user.email || "UserName"} />
          <Link href={"/post?createnew=true"}>
            <button
              className="group inline-block rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              // href="/download"
            >
              <span className="block rounded-full bg-blue-200 px-6 py-2 text-md text-black font-medium group-hover:bg-transparent">
                <span className="text-xl mr-2">+</span> New Post
              </span>
            </button>
          </Link>
        </div>

        <div className="flex flex-col w-full h-screen overflow-y-auto">
          <Search setPosts={setSearchResults} />
          {search && search !== "" ? (
            <>
              <PostAndReply
                posts={searchResults.posts}
                comments={searchResults.comments}
              />
            </>
          ) : (
            <div className="w-full grow">{children}</div>
          )}
        </div>
      </div>
    </div>
  );
}

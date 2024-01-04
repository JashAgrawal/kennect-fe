"use client";
import { GoSearch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import User from "@/components/user";
import Link from "next/link";
import Post from "@/components/post";
import { useEffect, useState } from "react";
import { addPost, fetchPosts } from "@/services/postService";
import Search from "@/components/search";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const getPosts = async () => {
    const res = await fetchPosts();
    setPosts(res.data);
  };
  const addPostlocal = async () => {
    try {
      const res = await addPost({ text });
      setText("");
      getPosts();
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
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
          <Search setPosts={setPosts} />
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
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="bg-transparent text-gray-400 font-medium text-lg w-full p-2"
                  rows={3}
                  cols={50}
                  placeholder="What's happening?"
                />
              </div>
            </div>
            <div className="flex-1">
              <button
                onClick={() => addPostlocal()}
                className="bg-blue-400 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-4 float-right"
              >
                Post
              </button>
            </div>
          </div>
          {posts.map((post: any, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

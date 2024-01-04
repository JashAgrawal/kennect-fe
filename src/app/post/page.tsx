"use client";
import Post from "@/components/post";
import PostAndReply from "@/components/postAndReply";
import Search from "@/components/search";
import { addPost, fetchPosts } from "@/services/postService";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [text, setText] = useState("");
  const ref = useRef<any>();
  const params = useSearchParams();
  const isFocused = params.get("createnew");
  if (isFocused) {
    ref?.current?.focus();
  }
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
    <div className="w-full h-full grow">
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
              ref={ref}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="bg-transparent text-gray-400 font-medium text-lg w-full p-2"
              rows={3}
              cols={50}
              placeholder="What's happening?"
            />
          </div>
        </div>
        <div className="flex justify-end items-start">
          <button
            onClick={() => addPostlocal()}
            className="bg-blue-400 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-4"
          >
            Post
          </button>
        </div>
      </div>
      {posts.map((post: any, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Page;

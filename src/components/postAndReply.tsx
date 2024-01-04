import React from "react";
import Post from "./post";
import Reply from "./reply";
import Link from "next/link";

const PostAndReply = ({
  posts,
  comments,
}: {
  posts: any[];
  comments: any[];
}) => {
  return (
    <div>
      {posts.length === 0 ? (
        <>
          <div className="flex flex-col space-y-12 justify-center items-center">
            <p>There are no Posts with mathing results </p>
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
        </>
      ) : (
        <>
          {posts.map((p: any, i) => (
            <Post key={i} post={p} />
          ))}
        </>
      )}
      {comments.map((c, i) => (
        <div key={i}>
          <Post post={c.postId} />

          <div className="ml-16 border-y">
            <div className="py-2">
              <p>Comments</p>
            </div>
            <Reply post={c} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostAndReply;

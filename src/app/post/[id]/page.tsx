"use client";
import { GoSearch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import User from "@/components/user";
import Link from "next/link";
import Post, { TweetRenderer } from "@/components/post";
import Reply from "@/components/reply";
import { useEffect, useState } from "react";
import { addComment, fetchPostById } from "@/services/postService";
import { useRouter } from "next/router";
export default function PostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>({});
  const [comments, setComments] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const { id } = params;
  const getPost = async () => {
    const res = await fetchPostById("" + id);
    setPost(res.data.post);
    setComments(res.data.comments);
  };
  const addCommentlocal = async () => {
    try {
      const res = await addComment({ text, postId: id });
      setText("");
      getPost();
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="w-full">
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
            <TweetRenderer tweet={post?.text} />
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
      <div className="flex justify-between items-center p-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Comment ...."
          className="grow p-2 px-4 border rounded-full mr-4 text-black"
        />
        <button
          onClick={() => addCommentlocal()}
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-4 float-right"
        >
          Post
        </button>
      </div>
      {comments.length > 0 &&
        comments.map((post: any, index: number) => (
          <Reply
            key={index}
            post={{
              name: post.userId.Name,
              username: post.userId.Email,
              date: post.createdAt,
              text: post.text,
            }}
          />
        ))}
    </div>
  );
}

import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'

const Post = () => {
    const replies = [1, 2, 3]

    return (
        <div className='flex flex-col'>
            <div className="flex flex-col flex-shrink-0 p-4 pb-0 border-y">
                <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                        <div>
                            <img
                                className="inline-block h-10 w-10 rounded-full"
                                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-base leading-6 font-medium text-white">
                                "Jash Agrawal"
                                <span className="text-sm leading-5 ml-2 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                    "@JashAgrawal" . "16 April"
                                </span>
                            </p>
                        </div>
                    </div>
                </a>

                <div className="pl-14">
                    <p className="text-base width-auto font-medium text-white flex-shrink">
                        Day 07 of the challenge
                        <span className="text-blue-400">#100DaysOfCode</span>I was
                        wondering what I can do with
                        <span className="text-blue-400">#tailwindcss</span>, so just
                        started building Twitter UI using Tailwind and so far it looks
                        so promising. I will post my code after completion. [07/100]
                        <span className="text-blue-400">
                            #WomenWhoCode #CodeNewbie
                        </span>
                    </p>
                    <div className="flex my-5">
                        <div className="w-full">
                            <div className="flex items-center w-full space-x-8">
                                <div>
                                    <AiOutlineMessage size={26} />
                                </div>

                                <div>
                                    <FaRegHeart size={26} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {replies.map((reply:any, ridx) => 
                    <p className="text-base width-auto font-medium text-white flex-shrink" key={ridx}>
                        {reply.message || ""}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Post
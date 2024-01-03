import React from 'react'

const User = ({name,userId,photo}:{name:string,userId:string,photo?:any}) => {
  return (
    <div className="flex flex-row">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src={photo || "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"}
            alt=""
          />
          <div className="ml-2 max-lg:hidden">
            <p className="text-md">{name ||"Jash Agrawal"}</p>
            <p className="text-xs">{userId ||"@JashAgrawal"}</p>
          </div>
        </div>
  )
}

export default User
"use client";
import useDebounce from "@/hooks/useDebounce";
import { searchPosts } from "@/services/postService";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";

const Search = ({ setPosts }: { setPosts: any }) => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const router = useRouter();
  const pathname = usePathname();
  const searchPostsLocal = async (search: string) => {
    try {
      router.push("/post?" + `search=${search}`);
      const res = await searchPosts(search);
      setPosts(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    searchPostsLocal(debouncedSearch);
  }, [debouncedSearch]);
  return (
    <div className="relative text-gray-300 w-full pb-0 mb-4 px-4">
      <button
        onClick={() => searchPostsLocal(search)}
        className="absolute ml-4 mt-3 mr-4"
      >
        <GoSearch />
      </button>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        name="search"
        placeholder="Search Posts"
        className="bg-blue-800 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow border-0"
      />
    </div>
  );
};

export default Search;

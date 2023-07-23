"use client"

import { SearchNormal } from "iconsax-react";
import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <section className="px-[7vw] mb-6">
      <div className="md:hidden">
        <span className="flex border border-opacity-40 border-neutral rounded-4 overflow-hidden py-[8px] px-[16px]">
          <input
            placeholder="جستجو"
            onChange={(e) => setSearchValue(e.target.value)}
            className="outline-none w-full pe-2 text-xs"
          />
          <span className="w-[16px] cursor-pointer">
            <SearchNormal />
          </span>
        </span>
      </div>
    </section>
  );
};

export default Search;

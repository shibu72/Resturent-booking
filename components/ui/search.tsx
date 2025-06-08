import { Search } from "lucide-react";
import React from "react";
interface handleSearchType {
  handleSearch: React.FocusEventHandler<HTMLInputElement>;
}

export default function SearchFilter({ handleSearch }: handleSearchType) {
  return (
    <>
      <div className="border border-[--primaryBlack] rounded-full flex items-center p-4">
        <input
          type="text"
          className="bg-transparent w-full text-xl font-normal outline-none px-2"
          placeholder="Search food"
          onBlur={handleSearch}
        />
        <span className="p-2 rounded-full bg-[--secondary3]">
          <Search className="text-white text-5xl" />
        </span>
      </div>
    </>
  );
}

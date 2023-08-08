"use client";

import { useState } from "react";

const Feed = () => {
  // Search states
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {};

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* All Prompts */}
    </section>
  );
};

export default Feed;

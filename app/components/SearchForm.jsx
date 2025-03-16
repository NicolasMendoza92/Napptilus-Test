"use client";

import { useCallback, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { X } from "lucide-react";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const updateSearchParams = useCallback(
    (newSearch) => {
      const params = new URLSearchParams(searchParams.toString());
      if (newSearch === "") {
        params.delete("search");
      } else {
        params.set("search", newSearch);
      }
      router.push(`?${params.toString()}`);
    },
    [searchParams, router],
  );

  const debouncedUpdateSearchParams = useDebouncedCallback((newSearch) => {
    updateSearchParams(newSearch, 1);
  }, 300);

  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    debouncedUpdateSearchParams(newSearch);
  };

  const handleClearSearch = () => {
    setSearch("");
    updateSearchParams("");
  };

  return (
    <div>
      <form className="search-area">
        <div className="search-container">
          <div className="search-input-wrapper">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search for a smartphone..."
              className="search-input"
            />
            {search && (
              <button
                type="button"
                className="clear-button"
                onClick={handleClearSearch}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

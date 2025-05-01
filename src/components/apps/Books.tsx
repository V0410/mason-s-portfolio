"use client";

import { useEffect, useRef, useState } from "react";
import books from "~/configs/books";
import { BookData } from "~/types";
import { FaList, FaSearch } from "react-icons/fa";
import { TiThLarge } from "react-icons/ti";
import { twMerge } from "tailwind-merge";

type ViewType = "grid" | "list" ;

const Books = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [view, setView] = useState<ViewType>("grid");
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<BookData[]>(books);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredBooks(
      books.filter((b) =>
        b.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    setSelectedIndex(null);
  }, [search]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredBooks.length === 0) return;
    let nextIndex = selectedIndex ?? 0;
    const cols = view === 'list' ? 1 : Math.floor((containerRef.current?.offsetWidth || 400) / 140);

    switch (e.key) {
      case "ArrowRight":
        nextIndex = Math.min(nextIndex + 1, filteredBooks.length - 1);
        break;
      case "ArrowLeft":
        nextIndex = Math.max(nextIndex - 1, 0);
        break;
      case "ArrowDown":
        nextIndex = Math.min(nextIndex + cols, filteredBooks.length - 1);
        break;
      case "ArrowUp":
        nextIndex = Math.max(nextIndex - cols, 0);
        break;
      case "Enter":
        window.open(filteredBooks[nextIndex].link, "_blank");
        return;
    }

    setSelectedIndex(nextIndex);
  };

  return (
    <div className="w-full h-full bg-white rounded-md shadow-md flex flex-col">
      {/* Top Bar */}
      <div className="h-9 bg-[#8b8b8b] flex items-center justify-between px-3">
        <div className="flex items-center">
					<button onClick={() => setView("grid")} className={`${view === 'grid'? "bg-[#4f4f4f]" : "bg-white"} p-1 rounded-l-md`}>
						<TiThLarge className={`${view === 'grid'? "text-white" : "text-[#4f4f4f]"}`} />
					</button>
          <button onClick={() => setView("list")} className={`${view === 'list'? "bg-[#4f4f4f]" : "bg-white"} p-1 rounded-r-md`}>
						<FaList className={`${view === 'list'? "text-white" : "text-[#4f4f4f]"}`} />
						</button>
				</div>
				<div className="relative">
					<span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
						<FaSearch size={14} />
					</span>
					<input
						placeholder="Search..."
						className="pl-7 pr-2 py-1 rounded border border-gray-400 text-sm"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>

      </div>

      {/* Book Grid */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto p-4 flex flex-wrap content-start gap-4 justify-between"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {filteredBooks.map((book, i) => {
          const selected = i === selectedIndex;

          return (
            <div
              key={book.id}
              tabIndex={0}
              className={twMerge(
                "cursor-pointer transition outline-none py-2",
                view === "grid" && "flex flex-col items-center w-32",
                view === "list" && "flex flex-row items-center gap-3 w-full pl-4",
                selected && "bg-[#999999] rounded-md"
              )}
              onClick={() => setSelectedIndex(i)}
              onDoubleClick={() => window.open(book.link, "_blank")}
              onKeyDown={(e) => {
                if (e.key === "Enter") window.open(book.link, "_blank");
              }}
            >
              <img
                src={book.img}
                alt={book.title}
                className={twMerge(
                  "rounded border",
									selected ? "border-[#fb783d]": "",
                  view === "list" ? "w-5" : "w-20"
                )}
              />
              <p
                className={twMerge(
                  "text-xs mt-1 text-center truncate px-2 py-1",
                  selected ? "bg-[#fb783d] text-white rounded" : "text-black",
                  view === "list" && "mt-0 text-left"
                )}
              >
                {book.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;

"use client";

import { useEffect, useRef, useState } from "react";
import books from "~/configs/books";
import { BookData } from "~/types";
import { FaList, FaSearch } from "react-icons/fa";
import { TiThLarge } from "react-icons/ti";
import { twMerge } from "tailwind-merge";

type ViewType = "grid" | "list";

const Books = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [view, setView] = useState<ViewType>("grid");
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<BookData[]>(books);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState(1);

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
    setCols(view === 'list' ? 1 : (Math.floor((containerRef.current?.offsetWidth || 400) / 140) - 1));

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

  useEffect(() => {
    setCols(view === 'list' ? 1 : (Math.floor((containerRef.current?.offsetWidth || 400) / 140)));
  },[containerRef.current?.offsetWidth])

  return (
    <div className="w-full h-full bg-neutral-50 rounded-md shadow flex flex-col">
      {/* Top Bar */}
      <div className="h-10 bg-gray-100 flex items-center justify-between px-3 border-b border-gray-300">
        <div className="flex items-center">
          <button
            onClick={() => setView("grid")}
            className={twMerge(
              "p-1 rounded-l-md border border-gray-300",
              view === "grid" ? "bg-gray-800 border-gray-800 text-white" : "bg-white text-gray-700 border-gray-300"
            )}
          >
            <TiThLarge />
          </button>
          <button
            onClick={() => setView("list")}
            className={twMerge(
              "p-1 rounded-r-md border ",
              view === "list" ? "bg-gray-800 border-gray-800 text-white" : "bg-white text-gray-700 border-gray-300"
            )}
          >
            <FaList />
          </button>
        </div>
        <div className="relative">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
            <FaSearch size={14} />
          </span>
          <input
            placeholder="Search..."
            className="pl-7 pr-2 py-1 rounded border border-gray-300 text-sm bg-white text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Book Grid/List */}
      <div
        ref={containerRef}
        className={`flex-1 overflow-auto p-4 flex flex-wrap content-start ${view === "grid"? 'gap-4' : 'gap-1'} justify-between`}
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
                selected ? "bg-gray-400 rounded-md" : "hover:bg-gray-300 rounded-md"
              )}
              onClick={() => setSelectedIndex(i)}
              onDoubleClick={() => window.open(book.link, "_blank")}
              onKeyDown={(e) => {
                if (e.key === "Enter") window.open(book.link, "_blank");
              }}
            >
              <img
                src={view === "list"? "/img/icons/pdf.png" : book.img}
                alt={book.title}
                className={twMerge(
                  "rounded",
                  view === "list" ? "w-10" : "w-20"
                )}
              />
              <p
                className={twMerge(
                  "text-xs mt-1 text-center px-2 py-1 text-nowrap",
                  selected ? "text-black font-medium" : "text-gray-700",
                  view === "list" && "mt-0 text-left"
                )}
              >
                {book.title}
              </p>
              {
                view === "list" &&
                <p className="w-full text-center text-xs text-gray-700">
                  {book.description}
                </p>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;

"use client";

import { useEffect, useRef, useState, useContext } from "react";
import photos from "~/configs/photos";
import { FaList, FaSearch } from "react-icons/fa";
import { TiThLarge } from "react-icons/ti";
import { twMerge } from "tailwind-merge";
import { GlobalContext } from "~/context/GlobalContext";

type ViewType = "grid" | "list";

const Photo = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [view, setView] = useState<ViewType>("grid");
  const [search, setSearch] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const [cols, setCols] = useState(1);
  const [cols1, setCols1] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const { setModalPhoto } = useContext(GlobalContext);

  useEffect(() => {
    const width = containerRef.current?.offsetWidth || 400;
      setCols1(view === "list" ? 1 : Math.floor(width / 200));
  },[containerRef.current?.offsetWidth])

  // Filter photos by search
  useEffect(() => {
    setFilteredPhotos(
      photos.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    setSelectedIndex(null);
  }, [search]);

  // Update column count on resize or view change
  useEffect(() => {
    if (!containerRef.current) return;

    const updateCols = () => {
      const width = containerRef.current?.offsetWidth || 400;
      setCols(view === "list" ? 1 : Math.floor(photos.length / Math.floor(width / 200)));
    };

    updateCols();

    const observer = new ResizeObserver(() => {
      updateCols();
    });

    observer.observe(containerRef.current);
    

    return () => observer.disconnect();
  }, [view, containerRef.current?.offsetWidth]);


  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredPhotos.length === 0) return;
    let nextIndex = selectedIndex ?? 0;

    switch (e.key) {
      case "ArrowDown":
        nextIndex = Math.min(nextIndex + 1, filteredPhotos.length - 1);
        break;
      case "ArrowUp":
        nextIndex = Math.max(nextIndex - 1, 0);
        break;
      case "ArrowRight":
        nextIndex = Math.min(nextIndex + cols, filteredPhotos.length - 1);
        break;
      case "ArrowLeft":
        nextIndex = Math.max(nextIndex - cols, 0);
        break;
      case "Enter":
        setModalPhoto(filteredPhotos[nextIndex].img);
        return;
    }

    setSelectedIndex(nextIndex);
  };

  return (
    <div className="w-full h-full bg-white rounded-md shadow-md flex flex-col">
      {/* Top Bar */}
      <div className="h-10 flex items-center justify-between px-3 bg-c-200">
        <div className="flex items-center">
          <button
            onClick={() => setView("grid")}
            className={twMerge(
              "p-1 rounded-l-md border border-gray-300",
              view === "grid"
                ? "bg-gray-800 border-gray-800 text-white"
                : "bg-white text-gray-700 border-gray-300"
            )}
          >
            <TiThLarge />
          </button>
          <button
            onClick={() => setView("list")}
            className={twMerge(
              "p-1 rounded-r-md border",
              view === "list"
                ? "bg-gray-800 border-gray-800 text-white"
                : "bg-white text-gray-700 border-gray-300"
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

      {/* Photo Grid/List */}
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={`flex-1 overflow-auto p-4 ${
          view === "grid"
            ? `gap-2`
            : "flex flex-col gap-1"
        }`}
        style={{columnCount: cols1}}
      >
        {filteredPhotos.map((photo, i) => {
          const selected = i === selectedIndex;

          return (
            <div
              key={photo.id}
              tabIndex={0}
              className={`cursor-pointer outline-none break-inside-avoid p-1 rounded-md transition ${
                selected ? "bg-gray-400" : "hover:bg-gray-300"
              } ${view === "list" ? "flex gap-3 items-center pl-4" : ""}`}
              onClick={() => setSelectedIndex(i)}
              onDoubleClick={() => setModalPhoto(photo.img)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setModalPhoto(photo.img);
              }}
            >
              <img
                src={view === "list"? "/img/icons/jpg.png" : photo.img}
                alt={photo.title}
                className={` ${
                  view === "list" ? "w-6" : "w-full"
                }`}
              />
              <p
                className={`text-sm mt-1 px-2 text-nowrap ${
                  selected ? "text-black font-medium" : "text-gray-700"
                } ${view === "list" ? "mt-0 py-[2px]" : "text-center py-1"}`}
              >
                {photo.title}
              </p>
              {
                view === "list" &&
                <p className="w-full text-center text-xs text-gray-700">
                  {photo.description}
                </p>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Photo;

"use client";

import { useEffect, useRef, useState } from "react";
import photos from "~/configs/photos";
import { FaList, FaSearch } from "react-icons/fa";
import { TiThLarge } from "react-icons/ti";

type ViewType = "grid" | "list";

const Photo = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [view, setView] = useState<ViewType>("grid");
  const [search, setSearch] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const [modalPhoto, setModalPhoto] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredPhotos(
      photos.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    setSelectedIndex(null);
  }, [search]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredPhotos.length === 0) return;
    let nextIndex = selectedIndex ?? 0;
    const cols = view === "list" ? 1 : Math.floor((containerRef.current?.offsetWidth || 400) / 200);

    switch (e.key) {
      case "ArrowRight":
        nextIndex = Math.min(nextIndex + 1, filteredPhotos.length - 1);
        break;
      case "ArrowLeft":
        nextIndex = Math.max(nextIndex - 1, 0);
        break;
      case "ArrowDown":
        nextIndex = Math.min(nextIndex + cols, filteredPhotos.length - 1);
        break;
      case "ArrowUp":
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
      <div className="h-9 bg-[#8b8b8b] flex items-center justify-between px-3">
        <div className="flex items-center">
          <button onClick={() => setView("grid")} className={`${view === "grid" ? "bg-[#4f4f4f]" : "bg-white"} p-1 rounded-l-md`}>
            <TiThLarge className={`${view === "grid" ? "text-white" : "text-[#4f4f4f]"}`} />
          </button>
          <button onClick={() => setView("list")} className={`${view === "list" ? "bg-[#4f4f4f]" : "bg-white"} p-1 rounded-r-md`}>
            <FaList className={`${view === "list" ? "text-white" : "text-[#4f4f4f]"}`} />
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

      {/* Photo Grid/List */}
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={`flex-1 overflow-auto p-4 ${
          view === "grid" ? "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2" : "flex flex-col gap-4"
        }`}
      >
        {filteredPhotos.map((photo, i) => {
          const selected = i === selectedIndex;

          return (
            <div
              key={photo.id}
              tabIndex={0}
              className={`cursor-pointer outline-none break-inside-avoid mb-2 p-1 rounded-md transition ${
                selected ? "bg-[#999999]" : ""
              } ${view === "list" ? "flex gap-3 items-center" : ""}`}
              onClick={() => setSelectedIndex(i)}
              onDoubleClick={() => setModalPhoto(photo.img)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setModalPhoto(photo.img);
              }}
            >
              <img
                src={photo.img}
                alt={photo.title}
                className={`rounded-md shadow-sm ${view === "list" ? "w-10" : "w-full"}`}
              />
              <p
                className={`text-sm mt-1 ${selected ? "bg-[#fb783d] text-white rounded px-2 py-1" : ""} ${
                  view === "list" ? "mt-0" : "text-center"
                }`}
              >
                {photo.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {modalPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalPhoto(null)}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalPhoto}
              alt="Preview"
              className="max-w-full max-h-[90vh] rounded-md shadow-lg"
            />
            <button
              onClick={() => setModalPhoto(null)}
              className="absolute top-2 right-2 text-white p-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photo;

import { wallpapers, shopApps } from "~/configs";

interface ShopProps {
  show: boolean;
  toggleShop: (target: boolean) => void;
}

const placeholderText = "Search";

export default function Shop({ show, toggleShop }: ShopProps) {
  const dark = useStore((state) => state.dark);

  const [searchText, setSearchText] = useState("");
  const [focus, setFocus] = useState(false);

  const search = () => {
    if (searchText === "") return shopApps;
    const text = searchText.toLowerCase();
    const list = shopApps.filter((item) => {
      return (
        item.title.toLowerCase().includes(text) || item.id.toLowerCase().includes(text)
      );
    });
    return list;
  };

  const close = show ? "" : "opacity-0 invisible transition-opacity duration-200";

  return (
    <div
      className={`${close} z-30 transform scale-110 size-full fixed overflow-hidden bg-center bg-cover`}
      id="shop"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`
      }}
      onClick={() => toggleShop(false)}
    >
      <div className="size-full absolute bg-gray-900/20 backdrop-blur-3xl">
        <div
          className="mx-auto flex h-7 w-64 mt-5 bg-gray-200/10"
          border="1 rounded-md gray-200/30"
          onClick={(e) => e.stopPropagation()}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        >
          <div
            className={`${
              focus ? "w-6 duration-200" : "w-26 delay-250"
            } hstack justify-end`}
          >
            <span className="i-bx:search ml-1 text-white" />
          </div>
          <input
            className="flex-1 min-w-0 no-outline bg-transparent px-1 text-sm text-white"
            placeholder={placeholderText}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div
          className="max-w-[1100px] mx-auto mt-8 w-full px-4 sm:px-10"
          grid="~ flow-row cols-4 sm:cols-7"
        >
          {search().map((app) => (
            <div key={`Shop-${app.id}`} h="32 sm:36" flex="~ col">
              <a
                className="size-14 sm:size-20 mx-auto cursor-pointer rounded-2xl flex justify-center items-center"
                href={app.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <img className="w-full rounded-2xl" src={app.img} alt={app.title} title={app.title} />
              </a>
              <span m="t-2 x-auto" text="white xs sm:sm">
                {app.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

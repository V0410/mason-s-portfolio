const ContextMenu = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const rightClickHandler = (event: MouseEvent) => {
            event.preventDefault();
            if (ref.current && ref.current.parentElement) {
                let x = event.clientX;
                let y = event.clientY;
                const w = ref.current.clientWidth;
                const h = ref.current.clientHeight;
                const W = ref.current.parentElement.clientWidth;
                const H = ref.current.parentElement.clientHeight;
                if (x + w > W) x -= w;
                if (y + h > H) y -= h;
                ref.current.style.left = `${x}px`;
                ref.current.style.top = `${y}px`;
                ref.current.style.visibility = `visible`;
            }
        }
        const clickHandler = (event: MouseEvent) => {
            if (ref.current) {
                ref.current.style.visibility = `hidden`;
            }
        }
        ref.current.parentElement?.addEventListener("contextmenu", rightClickHandler, true);
        ref.current.parentElement?.addEventListener("click", clickHandler, true);

        return () => {
            ref.current?.parentElement?.removeEventListener("contextmenu", rightClickHandler, true);
            ref.current?.parentElement?.removeEventListener("click", clickHandler, true);
        }
    }, [ref.current])

    return (
        <div ref={ref} id="default-menu" className={"w-48 invisible menu-box z-100 text-sm"}>
            <MenuItemGroup>
                <MenuItem>
                    <a rel="noreferrer noopener" href="https://twitter.com/masonplumlee" target="_blank" className="w-full cursor-pointer flex gap-1 items-center">
                        <img src="img/icons/contacts/twitter.png" alt="twitter" className="size-5"/>
                        <span className="ml-2">Follow on <strong>Twitter</strong></span>
                    </a>
                </MenuItem>
                <MenuItem>
                    <a rel="noreferrer noopener" href="https://www.linkedin.com/in/mason-plumlee/" target="_blank" className="w-full cursor-pointer flex gap-1 items-center">
                        <img src="img/icons/contacts/linkedin.png" alt="linkedin" className="size-5"/>
                        <span className="ml-2">Follow on <strong>LinkedIn</strong></span>
                    </a>
                </MenuItem>
                <MenuItem>
                    <a rel="noreferrer noopener" href="https://www.facebook.com/MasonPlumlee24/" target="_blank" className="w-full cursor-pointer flex gap-1 items-center">
                        <img src="img/icons/contacts/facebook.png" alt="facebook" className="size-5"/>
                        <span className="ml-2">Follow on <strong>Facebook</strong></span>
                    </a>
                </MenuItem>
                <MenuItem>
                    <a rel="noreferrer noopener" href="https://www.youtube.com/channel/UCELBx0eOrOR0w7wbMv3bDJQ" target="_blank" className="w-full cursor-pointer flex gap-1 items-center">
                        <img src="img/icons/contacts/youtube.png" alt="youtube" className="size-5"/>
                        <span className="ml-2">Follow on <strong>Youtube</strong></span>
                    </a>
                </MenuItem>
            </MenuItemGroup>
            <MenuItemGroup border={false}>
                <MenuItem>
                    <div onClick={() => { localStorage.clear(); window.location.reload() }} className="w-full cursor-pointer flex gap-1 items-center">
                    <img src="img/icons/user.png" alt="user" className="size-5"/>
                    <span className="ml-2">Reset Mac</span>
                    </div>
                </MenuItem>
            </MenuItemGroup>
        </div>
    )
}

export default ContextMenu;

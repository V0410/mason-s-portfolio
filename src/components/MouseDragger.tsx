
type Position = {
    x: number;
    y: number;
    offsetX?: number;
    offsetY?: number;
};

const MouseDragger = ({target}:{target: HTMLElement | null}) => {

    const ref = useRef<HTMLDivElement>(null);
    
    const init = useRef<Position | null>(null);

    const handleStart = (event: MouseEvent | TouchEvent) => {
        if (!ref.current || (event.target instanceof HTMLElement && !((target && target.isSameNode(event.target)) || ref.current.parentElement?.isSameNode(event.target)))) return;
        init.current = event instanceof MouseEvent ? {
            x: event.clientX,
            y: event.clientY
        } : {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        }
    };

    const handleMove = (event: MouseEvent | TouchEvent) => {
        if (init.current && ref.current && ref.current.parentElement) {
            const cur = event instanceof MouseEvent ? {
                x: event.clientX,
                y: event.clientY
            } : {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            }
            const parentX = ref.current.parentElement.clientWidth;
            const parentY = ref.current.parentElement.clientHeight;
            const leftX = Math.min(init.current.x, cur.x);
            const rightX = parentX - Math.max(init.current.x, cur.x);
            const topY = Math.min(init.current.y, cur.y);
            const bottomY = parentY - Math.max(init.current.y, cur.y);
            ref.current.style.left = `${leftX}px`;
            ref.current.style.top = `${topY}px`;
            ref.current.style.bottom = `${bottomY}px`;
            ref.current.style.right = `${rightX}px`;
            ref.current.style.display = "block";
        }
    };

    const handleEnd = () => {
        init.current = null;
        if (ref.current) {
            ref.current.style.display = "none";
        }
    };

    useEffect(() => {
        if (!ref.current) return;
        ref.current.parentElement?.addEventListener("mousedown", handleStart, true);
        ref.current.parentElement?.addEventListener("mousemove", handleMove, true);
        document.addEventListener("mouseup", handleEnd, true);

        ref.current.parentElement?.addEventListener("touchstart", handleStart, true);
        ref.current.parentElement?.addEventListener("touchmove", handleMove, true);
        document.addEventListener("touchend", handleEnd, true);
        return () => {
            ref.current?.parentElement?.removeEventListener("mousedown", handleStart, true);
            ref.current?.parentElement?.removeEventListener("mousemove", handleMove, true);
            document.removeEventListener("mouseup", handleEnd, true);

            ref.current?.parentElement?.removeEventListener("touchstart", handleStart, true);
            ref.current?.parentElement?.removeEventListener("touchmove", handleMove, true);
            document.removeEventListener("touchend", handleEnd, true);
        };
    }, [ref.current])

    return (
        <div ref={ref} 
            className={`mouse-dragger absolute border border-blue-100 bg-blue-100 bg-opacity-40`}
        ></div>
    )
}

export default MouseDragger;
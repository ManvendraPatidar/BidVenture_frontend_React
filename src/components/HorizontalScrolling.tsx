import React, { useRef } from "react";

const HorizontalScroller: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return; // Ensure the ref is not null
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!scrollRef.current || !isDragging) return; // Ensure the ref is not null and dragging is active
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX; // Distance moved
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  return (
    <div className="w-[90%] xs:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[70%]  p-[10px] mb-[60px] bg-gradient-to-r from-[#04A1D0] via-[#06C3C1] to-[#04A1D0]    rounded-tl-[20px] rounded-bl-[20px] xs:rounded-[20px]   flex flex-col justify-evenly relative  right-0 transform  translate-x-[6%]  xs:translate-x-0">
      <span className="text-[16px] pl-[20px] mb-[10px] mt-[5px] font-medium">
        Upcoming Auction
      </span>
      <div
        ref={scrollRef}
        className="w-full flex flex-row overflow-x-scroll ml-[10px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[10px]"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-x",
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {[1, 2, 2, 3, 4, 5, 6, 67, 7, 2, 2, 3, 4, 5, 6, 67].map((_, index) => (
          <div
            key={index}
            className="h-[230px] min-w-[180px] bg-[white] rounded-[12px] mx-[10px]"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroller;

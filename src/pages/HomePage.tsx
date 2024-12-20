import BuySellCard from "../common_components/BuySellCard";
import HorizontalScroller from "../components/HorizontalScrolling";
import NavBar from "../components/NavBar";

export const HomePage = (): JSX.Element => {
  return (
    <div className="h-screen w-screen bg-primary flex  flex-col overflow-y-auto overflow-x-hidden items-center pt-[120px]">
      <NavBar />
      <span className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[40px] text-[white] tracking-[2px] text-center font-bold mb-[30px] mx-[15px]">
        The Biggest Auction MarketPlace <br /> for #AutoMobiles{" "}
      </span>
      <div className="flex flex-col xs:flex-row mb-[40px] xs:mb-[80px]">
        <BuySellCard tittle={"Find anything you want"} subtitle="START BUYING" buttonTittle="Join Auction" buttonAction={()=>{}}/>
        <BuySellCard tittle={"Make money instantly!"} subtitle="START SELLING" buttonTittle="Register Item" buttonAction={()=>{}}/>
      </div>
      <HorizontalScroller/>
    </div>
  );
};

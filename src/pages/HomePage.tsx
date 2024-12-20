import BuySellCard from "../common_components/BuySellCard";
import NavBar from "../components/NavBar";

export const HomePage = (): JSX.Element => {
  return (
    <div className="h-screen w-screen bg-primary flex  flex-col overflow-y-scroll overflow-x-hidden xs:overflow-hidden items-center pt-[120px]">
      <NavBar />
      <span className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[40px] text-[white] tracking-[2px] text-center font-bold mb-[30px] mx-[15px]">
        The Biggest Auction MarketPlace <br /> for #AutoMobiles{" "}
      </span>
      <div className="flex flex-col xs:flex-row mb-[40px] xs:mb-[80px]">
        <BuySellCard tittle={"Find anything you want"} subtitle="START BUYING" buttonTittle="Join Auction" buttonAction={()=>{}}/>
        <BuySellCard tittle={"Make money instantly!"} subtitle="START SELLING" buttonTittle="Register Item" buttonAction={()=>{}}/>
      </div>

      <div className="w-[90%] xs:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[70%]  p-[10px]  bg-gradient-to-r from-[#04A1D0] via-[#06C3C1] to-[#04A1D0]    rounded-tl-[20px] rounded-bl-[20px] xs:rounded-[20px]   flex flex-col justify-evenly relative  right-0 transform  translate-x-[6%]  xs:translate-x-0">
        <span className="text-[18px] pl-[20px] mb-[10px] mt-[5px] font-medium">Upcoming Auction</span>
        <div className="w-full flex flex-row overflow-x-scroll ml-[10px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[10px] " style={{scrollbarWidth: "none"}}>
          {[1, 2, 2, 3, 4, 5, 6, 67, 7, 2, 2, 3, 4, 5, 6, 67].map(
            (_, index) => (
              <div
                key={index}
                className="h-[250px] min-w-[180px] bg-[white] rounded-[12px] mx-[10px] "
              ></div>
            )
          )}
        </div>
        
      </div>
    </div>
  );
};

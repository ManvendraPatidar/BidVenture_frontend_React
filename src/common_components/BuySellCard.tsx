import React from "react";

interface BuySellCardProps {
  tittle: string; // Mandatory prop
  subtitle?: string; // Optional prop
  buttonTittle: string;
  buttonAction: () => void;
}

const BuySellCard: React.FC<BuySellCardProps> = ({
  tittle,
  subtitle,
  buttonTittle,
  buttonAction,
}) => {
  return (
    <div className="h-[130px] w-[230px] bg-gradient-to-r from-[#06C3C1] to-[#04A1D0] flex flex-col justify-center items-center text-white m-[10px] group hover:bg-gradient-to-r hover:from-[#04A1D0] hover:to-[#06C3C1] transition-all duration-300">
      {/* Icon or Image */}
      {/* <div className="text-4xl mb-3">🔖</div> */}

      {/* Main Heading */}
      <h1 className="text-[12px] font-normal">{tittle}</h1>

      {/* Subheading */}
      <h2 className="text-[18px] font-bold tracking-[2px]">{subtitle}</h2>

      <button
        className="px-[15px] py-[5px] mt-[8px] bg-black text-white text-center flex items-center justify-center rounded-md hover:bg-gray-800 transition cursor-pointer text-[12px] font-medium"
        onClick={buttonAction}
      >
        {buttonTittle}
      </button>
    </div>
  );
};

export default BuySellCard;



// import React from "react";

// interface BuySellCardProps {
//   tittle: string; // Mandatory prop
//   subtitle?: string; // Optional prop
//   buttonTittle: string;
//   buttonAction: () => void;
// }

// const BuySellCard: React.FC<BuySellCardProps> = ({
//   tittle,
//   subtitle,
//   buttonTittle,
//   buttonAction,
// }) => {
//   return (
//     <div className="h-[130px] w-[230px] bg-gradient-to-r from-[#06C3C1] to-[#04A1D0] flex flex-col justify-center items-center text-white mx-[10px]">
//       {/* Icon or Image */}
//       {/* <div className="text-4xl mb-3">🔖</div> */}

//       {/* Main Heading */}
//       <h1 className="text-[12px] font-normal">{tittle}</h1>

//       {/* Subheading */}
//       <h2 className="text-[18px] font-bold tracking-[2px]">{subtitle}</h2>

//       <button
//         className=" px-[15px] py-[5px] mt-[8px] bg-black text-white  text-center flex items-center justify-center rounded-md hover:bg-gray-800 transition cursor-pointer text-[12px] font-medium"
//         onClick={buttonAction}
//       >
//         {buttonTittle}
//       </button>
//     </div>
//   );
// };

// export default BuySellCard;

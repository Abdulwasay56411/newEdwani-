import React from "react";

const EquipmentTable = () => {
  const data = [
    {
      sr: 1,
      type: "Dozer",
      qty: 2,
      brand: "Caterpilar",
      size: "9, 7, D",
      status: "Available",
    },
    {
      sr: 2,
      type: "Roller with Vibrator",
      qty: 2,
      brand: "Caterpilar",
      size: "25 Ton",
      status: "Available",
    },
    {
      sr: 3,
      type: "Roller Regular",
      qty: 2,
      brand: "Caterpilar",
      size: "25 Ton",
      status: "Available",
    },
    {
      sr: 4,
      type: "Excavator Regular",
      qty: 4,
      brand: "Caterpilar",
      size: "320 C",
      status: "Available",
    },
    {
      sr: 5,
      type: "Excavator with Hammer",
      qty: 2,
      brand: "Hyundai",
      size: "320 C",
      status: "Available",
    },
    {
      sr: 6,
      type: "Motor Grader 14-G",
      qty: 2,
      brand: "Caterpilar",
      size: "14 G",
      status: "Available",
    },
    {
      sr: 7,
      type: "Motor Grader 12-G",
      qty: 2,
      brand: "Caterpilar",
      size: "12 G",
      status: "Available",
    },
    {
      sr: 8,
      type: "Loader (Shovel)",
      qty: 5,
      brand: "Caterpilar",
      size: "950 F, B, 4",
      status: "Available",
    },
    {
      sr: 9,
      type: "Backhoe",
      qty: 3,
      brand: "Caterpilar",
      size: "424 D",
      status: "Available",
    },
    {
      sr: 10,
      type: "Excavator With Hammer",
      qty: 10,
      brand: "Misc",
      size: "25~32 M3",
      status: "Available",
    },
    {
      sr: 11,
      type: "Excavator With Hammer",
      qty: 2,
      brand: "Misc",
      size: "Regular",
      status: "Available",
    },
    {
      sr: 12,
      type: "Excavator With Hammer",
      qty: 2,
      brand: "Caterpilar",
      size: "Regular",
      status: "Available",
    },
    {
      sr: 13,
      type: "Excavator With Hammer",
      qty: 4,
      brand: "Misc",
      size: "D-Cabins",
      status: "Available",
    },
    {
      sr: 14,
      type: "Excavator With Hammer",
      qty: 4,
      brand: "Misc",
      size: "Dyna Truck",
      status: "Available",
    },
  ];

  return (
    <div className="w-full max-w-[1260px] mx-auto relative">
      {/* Sticky heading container */}
      <div className="sticky top-0 left-0  z-20 py-2 ">
        <h1 className="font-bold text-[20px] sm:text-[25px] md:text-[35px] text-[#2387C0] text-center">
          Equipment Available
        </h1>
      </div>

      {/* Scrollable table */}
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full border-separate border-spacing-y-3 text-left">
          {/* Table Header */}
          <thead>
            <tr className="bg-[#2387C0] text-white text-base sm:text-lg md:text-2xl font-semibold capitalize">
              <th className="py-4 px-4 sm:py-5 sm:px-6 rounded-tl-lg w-[60px] sm:w-[80px]">
                Sr.
              </th>
              <th className="py-4 px-4 sm:py-5 sm:px-6 w-[200px] sm:w-[300px]">
                Equipment Type
              </th>
              <th className="py-4 px-4 sm:py-5 sm:px-6 w-[80px] sm:w-[100px]">
                QTY
              </th>
              <th className="py-4 px-4 sm:py-5 sm:px-6 w-[120px] sm:w-[150px]">
                Brand
              </th>
              <th className="py-4 px-4 sm:py-5 sm:px-6 w-[180px] sm:w-[220px]">
                Size/Capacity
              </th>
              <th className="py-4 px-4 sm:py-5 sm:px-6 rounded-tr-lg w-[120px] sm:w-[160px]">
                Status
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-black text-base sm:text-lg md:text-2xl font-semibold whitespace-nowrap">
            {data.map((item, index) => (
              <tr
                key={item.sr}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-[#EAEAEA]/50"
                } rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                <td className="py-4 px-4 sm:py-6 sm:px-6 rounded-l-lg">
                  {item.sr}
                </td>
                <td className="py-4 px-4 sm:py-6 sm:px-6">{item.type}</td>
                <td className="py-4 px-4 sm:py-6 sm:px-6">{item.qty}</td>
                <td className="py-4 px-4 sm:py-6 sm:px-6">{item.brand}</td>
                <td className="py-4 px-4 sm:py-6 sm:px-6">{item.size}</td>
                <td className="py-4 px-4 sm:py-6 sm:px-6 text-[#2387C0] rounded-r-lg">
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EquipmentTable;

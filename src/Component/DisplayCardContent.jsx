import React from "react";

const DisplayCardContent = ({
  cardContent,
  cardRemaining,
  res,
  defuseCardNumber,
}) => {
  return (
    <div class="border border-gray-300 rounded-lg shadow-md p-4">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-9">
          <h6 class="text-lg font-medium">{cardContent}</h6>
        </div>
        <div class="col-span-3">
          <h6 class="text-lg font-medium">Cards Left: {cardRemaining}</h6>
        </div>
        <div class="col-span-9">
          <p class="text-sm text-gray-600">{res}</p>
        </div>
        <div class="col-span-3">
          <p class="text-sm text-gray-600">Defuse: {defuseCardNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayCardContent;

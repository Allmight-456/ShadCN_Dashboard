import React from "react";

export type SalesProps = {
  name: string;
  email: string;
  saleAmount: string;
};

export default function SalesCard(props: SalesProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 bg-gray-100 p-1 rounded full">
          {/**backticks ` ` help in assigning dynamic or non static values to attributes */}
          <img
            src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${props.name}`}
            alt="Avatar"
            width={200}
            height={200}
          />
        </div>

        <div className="text-sm">
          <p>{props.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            {props.email}
          </div>
        </div>
      </section>
      <p>{props.saleAmount}</p>
    </div>
  );
}

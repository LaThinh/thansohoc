import React from "react";
import PropTypes from "prop-types";
import { NumerologyIndex } from "@/lib/constants";
import { INumerologyIndex, IndexType } from "@/app/interfaces";
import { Button } from "../ui/button";
import Link from "next/link";

function IndexList({ indexList }: { indexList?: INumerologyIndex[] }) {
  const IndexList: INumerologyIndex[] = indexList || NumerologyIndex;
  return (
    <div className="index-list-wrapper @container">
      {IndexList && IndexList.length > 0 && (
        <div className="flex flex-col items-center gap-5">
          <h3>Dach sách các chỉ số</h3>

          <div className="index-notes flex gap-4 my-5">
            <div className="border-2 rounded-2xl bg-white border-indexMain text-indexMain text-xl px-5 py-2 font-semibold">
              Chỉ Số Chính
            </div>
            <div className="border-2 rounded-2xl bg-white border-indexSecondary text-indexSecondary text-xl px-5 py-2 font-semibold">
              Chỉ Số Phụ
            </div>
            <div className="border-2 rounded-2xl bg-white border-indexOther text-indexOther text-xl px-5 py-2 font-semibold">
              Chỉ Số Khác
            </div>
          </div>

          <div className="index-list grid gap-3 grid-cols-2 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:gap-6 xl:grid-cols-5">
            {IndexList.map((item, index) => {
              const borderColor =
                item?.type === IndexType.Main
                  ? "border-indexMain"
                  : item?.type === IndexType.Secondary
                  ? "border-indexSecondary"
                  : "border-indexOther";

              const textColor =
                item?.type === IndexType.Main
                  ? "text-indexMain"
                  : item?.type === IndexType.Secondary
                  ? "text-indexSecondary"
                  : "text-indexOther";
              return (
                <Link
                  href={`/numIndex/${item.name}/${item?.value || item.id}`}
                  className={`index-item rounded-2xl shadow-lg
                bg-white hover:bg-slate-100 p-5 flex flex-col gap-2 
                aspect-square box-border items-center text-center border-4 ${borderColor} `}
                  key={index}
                  title={`Xem chi tiết Chỉ số ${item.title_vn} giá trị ${
                    item?.value || item.id
                  }`}
                >
                  <h4
                    className={`text-xl h-14 flex font-semibold text-primary  ${textColor} line-clamp-2 capitalize dark:text-slate-700`}
                  >
                    {item.title_vn}
                  </h4>
                  <h5 className="text-base  text-gray-500 line-clamp-1 capitalize">
                    {item?.title_en}
                  </h5>
                  <p
                    className={`text-7xl flex flex-1 items-center justify-center font-bold p-3 ${textColor}`}
                  >
                    {item?.value || item.id}
                  </p>
                </Link>
              );
            })}
          </div>

          <Button variant={"default"}>Xem Chi Tiết</Button>
        </div>
      )}
    </div>
  );
}

IndexList.propTypes = {};

export default IndexList;

import React from "react";
import PropTypes from "prop-types";
import { NumerologyIndex } from "@/lib/constants";
import { INumerologyIndex } from "@/app/interfaces";
import { Button } from "../ui/button";
import Link from "next/link";

function IndexList({ indexList }: { indexList?: INumerologyIndex[] }) {
  const IndexList: INumerologyIndex[] = indexList || NumerologyIndex;
  return (
    <div className="index-list-wrapper @container">
      {IndexList && IndexList.length > 0 && (
        <div className="flex flex-col items-center gap-5">
          <h3>Dach sách các chỉ số</h3>

          <div className="index-list grid gap-3 grid-cols-2 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:gap-6 xl:grid-cols-6">
            {IndexList.map((item, index) => (
              <Link
                href={`/numIndex/${item.name}/${item?.value || item.id}`}
                className="index-item  border rounded-2xl shadow-sm bg-white hover:bg-slate-100 p-5 flex flex-col gap-2 
                aspect-square box-border items-center"
                key={index}
                title={`Xem chi tiết Chỉ số ${item.title_vn} giá trị ${
                  item?.value || item.id
                }`}
              >
                <h4 className="text-xl font-semibold text-primary line-clamp-1 capitalize dark:text-slate-700">
                  {item.title_vn}
                </h4>
                <h5 className="text-base text-gray-500 line-clamp-1 capitalize">
                  {item?.title_en}
                </h5>
                <p className="text-5xl flex flex-1 items-center justify-center text-pink-700 font-bold p-3">
                  {item?.value || item.id}
                </p>
              </Link>
            ))}
          </div>

          <Button variant={"default"}>Xem Chi Tiết</Button>
        </div>
      )}
    </div>
  );
}

IndexList.propTypes = {};

export default IndexList;

"use client";
import FormCard from "@/components/FormCard";
import NumberAnimation from "@/components/NumberAnimation";
import IndexList from "@/components/numerology/IndexList";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataSoChuDao } from "@/lib/data-sochudao";
import { CalcMainNumber, IMainNumber } from "@/lib/numerology";
import { useSpring, animated } from "@react-spring/web";
import { useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";

const getDescription = (number: number) => {
  const descFilter = DataSoChuDao.filter((item) => {
    return item.value == number;
  });
  if (descFilter) {
    return descFilter[0]?.description;
  }
  return "";
};

function NumerologyByName() {
  const searchParams = useSearchParams();
  //console.log(searchParams);
  const fullName = searchParams.get("name");
  const birthday = searchParams.get("birthday");
  const [loading, setLoading] = useState<boolean>();
  const [mainNumber, setMainNumber] = useState<IMainNumber>();

  const styleDesc = useSpring({
    from: { opacity: 0, top: 100 },
    to: { opacity: 1, top: 0 },
    delay: 4000,
    config: { duration: 2000 },
  });

  useEffect(() => {
    setLoading(true);
    const calcNumber = (birthday: string) => {
      const calcNumber = CalcMainNumber(birthday);
      setMainNumber(calcNumber);
      setLoading(false);
    };

    if (birthday && birthday != null) {
      calcNumber(birthday);
    }
  }, [birthday, loading]);

  return (
    <div
      className="search-by-name flex flex-col gap-5 p-5 lg:p-10 min-h-[90vh]
    bg-gradient-to-tr from-rose-400 to-orange-300
    "
    >
      <h1 className="page-title">Thần số học theo Tên</h1>
      <Card className="m-auto flex flex-col w-full max-w-7xl border shadow-lg p-5 lg:p-10">
        <CardHeader className="hidden">
          <h2>Thông tin Thần số học của bạn: </h2>
        </CardHeader>
        <CardContent className="p-0">
          <div className="search-info text-xl flex flex-col gap-3 lg:text-3xl">
            {fullName && (
              <div className="flex gap-2">
                <strong className="w-1/4  min-w-[120px]">Họ tên:</strong>
                <span>{fullName}</span>
              </div>
            )}
            {birthday && (
              <div className="flex gap-2 ">
                <strong className="w-1/4 min-w-[120px]">Ngày sinh:</strong>
                <span>{birthday}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <div className="main-number m-auto w-full max-w-7xl flex flex-col justify-center items-center gap-5">
        <div className="w-full p-4 lg:p-8 bg-white/80 dark:bg-slate-500/70 rounded-xl shadow-sm text-lg flex gap-5 justify-between flex-col lg:flex-row">
          <div className="flex flex-col gap-4 justify-center items-center lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Con Số Chủ Đạo Của Bạn
            </h2>
            {mainNumber && mainNumber?.steps && mainNumber.steps.length > 0 && (
              <ul className="steps text-lg lg:text-2xl flex flex-col justify-center items-right">
                {mainNumber.steps.map((step, index) => (
                  <li key={index}>
                    <p>{step}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div
            className="main-number m-auto rounded-full border-8 border-gray-200 bg-slate-300 
        w-52 h-52 flex items-center justify-center shadow-md
        bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400
        "
          >
            <h3 className="text-[96px] text-white font-bold">
              {/* {mainNumber?.main_number} */}
              {mainNumber?.step_number && (
                <NumberAnimation arrNumber={mainNumber.step_number} />
              )}
            </h3>
          </div>
        </div>

        <div className="number-detail ">
          {!loading && mainNumber?.main_number && (
            <animated.div
              className="number-description relative w-full p-10 lg:p-12 bg-white/80 dark:bg-slate-500/70 rounded-xl shadow-sm text-lg"
              style={styleDesc}
            >
              <h4 className="text-xl lg:text-3xl text-primary font-semibold mb-5">
                Con Số Chủ Đạo:{" "}
                <span className="font-bold">{mainNumber.main_number}</span>{" "}
              </h4>
              {getDescription(mainNumber.main_number)}
            </animated.div>
          )}
        </div>

        <animated.div
          className="number-description relative w-full p-10 lg:p-12 bg-white/80 dark:bg-slate-500/70 rounded-xl shadow-sm text-lg"
          style={styleDesc}
        >
          <IndexList />
        </animated.div>
      </div>
    </div>
  );
}

export default memo(NumerologyByName);
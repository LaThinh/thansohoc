import React from "react";
import { NumerologyIndex } from "@/lib/constants";
import { findNumerologyIndexBySlug } from "@/lib/numerology";
import { replaceWithBr } from "@/lib/utils";

export function findNumerologyBySlug(slug: string) {
  return NumerologyIndex.find((element) => {
    return element.name === slug;
  });
}

function NumerologyIndexPage({ params }: { params: { slug: string } }) {
  const NumerologyInfo = findNumerologyBySlug(params.slug);
  return (
    <div className="page-wrapper page-numerology-index p-5 lg:p-10">
      <h1 className="page-title">
        Chỉ Số {NumerologyInfo?.title_vn} - {NumerologyInfo?.title_en}
      </h1>

      {/* <p>{NumerologyInfo?.description}</p> */}
      <p
        className="my-5 [&>br]:mb-4"
        dangerouslySetInnerHTML={{
          __html: replaceWithBr(NumerologyInfo?.description || ""),
        }}
      />
    </div>
  );
}

export default NumerologyIndexPage;

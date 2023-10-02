import React from "react";
import PropTypes from "prop-types";
import { NumerologyIndex } from "@/lib/constants";

function findNumerologyBySlug(slug: string) {
  return NumerologyIndex.find((element) => {
    return element.name === slug;
  });
}

function NumerologyIndexDetailPage({
  params,
}: {
  params: { slug: string; value: string };
}) {
  const NumerologyInfo = findNumerologyBySlug(params.slug);
  return (
    <div className="page-wrapper page-numerology-index p-5 lg:p-10">
      <h1 className="page-title">
        Chỉ số {NumerologyInfo?.title_vn} giá trị {params.value}
      </h1>
      <p>
        Diễn giải thông tin Chỉ số {NumerologyInfo?.title_vn} giá trị{" "}
        {params.value}{" "}
      </p>
    </div>
  );
}

NumerologyIndexDetailPage.propTypes = {};

export default NumerologyIndexDetailPage;

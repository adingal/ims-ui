"use client";

import React from "react";
import PageTitle from "@/atoms/PageTitle";
import HistoryTable from "@/components/HistoryTable";

function History() {
  return (
    <>
      <PageTitle title="History" imgSource="/history-icon.svg" />
      <HistoryTable />
    </>
  );
}

export default History;

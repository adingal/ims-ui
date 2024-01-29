import React from "react";
import Header from "@/components/Header";
import LoadBoardTable from "@/components/LoadBoardTable";
import Container from "@/atoms/Container";
import PageTitle from "@/atoms/PageTitle";

type LoadBoardProps = {
  serialNo: string;
  status: string;
  location: string;
  type: string;
  addedBy: string;
  addedDate: Date;
};

function Home() {
  return (
    <>
      <Header />
      <main className="py-6 md:py-8 lg:py-10">
        <Container>
          <PageTitle title="LoadBoard" imgSource="/loadboard-icon.svg" />
          <LoadBoardTable />
        </Container>
      </main>
    </>
  );
}

export default Home;

import React from "react";
import Header from "@/components/Header";
import LoadBoardTable from "@/components/LoadBoardTable";
import MainContainer from "@/atoms/MainContainer";
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
      <MainContainer>
        <Container>
          <PageTitle title="LoadBoard" imgSource="/loadboard-icon.svg" />
          <LoadBoardTable />
        </Container>
      </MainContainer>
    </>
  );
}

export default Home;

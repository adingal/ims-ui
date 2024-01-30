import React from "react";
import Header from "@/components/Header";
import MainContainer from "@/atoms/MainContainer";
import Container from "@/atoms/Container";

function UsersPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>{children}</Container>
      </MainContainer>
    </>
  );
}

export default UsersPageLayout;

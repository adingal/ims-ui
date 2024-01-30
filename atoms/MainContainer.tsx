import React from "react";

function MainContainer({ children }: { children: React.ReactNode }) {
  return <main className="py-6 md:py-8 lg:py-10">{children}</main>;
}

export default MainContainer;

"use client";

import React from "react";
import UserTable from "@/components/UserTable";
import PageTitle from "@/atoms/PageTitle";

type UserProps = {
  name: string;
  email: string;
  lastLoggedIn: Date;
  role: string;
};

function Users() {
  return (
    <>
      <PageTitle title="Users" imgSource="/users-icon.svg" />
      <UserTable />
    </>
  );
}

export default Users;

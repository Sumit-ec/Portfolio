import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1350px] mx-auto p-2">{children}</div>;
}

export default Layout;

"use client";

import {ThemeProvider} from "next-themes";
import React, {ReactNode} from "react";

    const Provider = ({children}:{children:ReactNode}) => {
  return (
   <ThemeProvider
      attribute="class"
      enableSystem
defaultTheme="system"
      scriptProps={typeof window === "undefined" ? undefined : { type: "application/json" }}
    >
    {children}
    </ThemeProvider>
  );
};

export default Provider;

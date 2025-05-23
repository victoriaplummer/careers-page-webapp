"use client";

import { Section } from "../../devlink/_Builtin";
import { GhTable } from "./components/GhTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Section
        tag="section"
        style={{
          minHeight: "100vh",
          maxWidth: "100vw",
          padding: "40px 0",
        }}
      >
        <GhTable />
      </Section>
    </QueryClientProvider>
  );
}

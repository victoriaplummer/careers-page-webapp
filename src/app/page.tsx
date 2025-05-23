"use client";

import { Section } from "@/devlink/_Builtin";
import { GhTable } from "./components/GhTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <h1>Careers Playground</h1>
        <p>
          This is a Webflow Cloud NextJS app for building a careers page using
          Greenhouse and Webflow components via DevLink.
        </p>
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
      </div>
    </QueryClientProvider>
  );
}

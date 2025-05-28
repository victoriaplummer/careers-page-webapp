"use client";

import { Section } from "@/devlink/_Builtin";
import navbarStyles from "@/devlink/Navbar.module.css";
import { GhTable } from "./components/GhTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient());
  const [ghSlug, setGhSlug] = useState<string>("webflow");
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSlug = inputRef.current?.value || "";
    setGhSlug(newSlug);

    // Scroll to results section after a brief delay to ensure content is rendered
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <QueryClientProvider client={queryClient}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Careers Playground</h1>
          <p>
            This is a Webflow Cloud NextJS example app for a careers page using
            Greenhouse APIs
          </p>

          {/* Greenhouse Slug Form */}
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                id="gh-slug"
                ref={inputRef}
                type="text"
                placeholder={`Enter Greenhouse slug (i.e. "webflow")`}
                className={`w-input ${styles.darkInput}`}
              />
              <button type="submit" className={`button ${navbarStyles.button}`}>
                Enter
              </button>
            </form>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollText}>Scroll for results</div>
          <div className={styles.scrollCaret}>⌄</div>
        </div>
      </div>

      {/* Results Section - Below the fold */}
      <div ref={resultsRef} className={styles.resultsSection}>
        <Section
          tag="section"
          style={{
            minHeight: "100vh",
            maxWidth: "100vw",
            padding: "40px 0",
          }}
        >
          <GhTable ghSlug={ghSlug} />
        </Section>
      </div>
    </QueryClientProvider>
  );
}

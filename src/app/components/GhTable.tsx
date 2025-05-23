import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { useState } from "react";
import { OpenRolesHeading } from "../../../devlink/OpenRolesHeading";
import { GhTableHeaders } from "../../../devlink/GhTableHeaders";
import { GhTableBody } from "../../../devlink/GhTableBody";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Types
export type Job = {
  id: number;
  title: string;
  absolute_url: string;
  location: { name: string };
};

export type Department = {
  id: number;
  name: string;
  jobs: Job[];
};

async function fetchDepartments(): Promise<{ departments: Department[] }> {
  const res = await fetch(`${basePath}/api/greenhouse`);
  if (!res.ok) throw new Error("Failed to fetch departments");
  return res.json();
}

export function GhTable() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const match = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(match.matches);
      const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
      match.addEventListener('change', handler);
      return () => match.removeEventListener('change', handler);
    }
  }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["departments"],
    queryFn: fetchDepartments,
    staleTime: 60 * 1000, // 1 minute
  });

  const departments = data?.departments?.filter((d) => d.jobs.length > 0) ?? [];
  console.log(departments);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(e.target.value);
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        padding: 32,
        background: isDarkMode ? "#18181b" : "#fff",
        color: isDarkMode ? "#f3f4f6" : undefined,
      }}
    >
      <OpenRolesHeading />

      {/* Filter Dropdown */}
      <div style={{ margin: "24px 0 32px 0", display: "flex", alignItems: "center", gap: 16 }}>
        <label htmlFor="department-filter" style={{ fontWeight: 500, fontSize: 18 }}>
          Filter by department:
        </label>
        <select
          id="department-filter"
          value={selectedDepartment}
          onChange={handleFilterChange}
          data-gh="filter"
          style={{
            padding: "8px 16px",
            borderRadius: 8,
            border: "1px solid #d1d5db",
            fontSize: 16,
            cursor: "pointer",
            minWidth: 180,
          }}
        >
          <option value="all">All Departments</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div
          data-gh="loading"
          style={{
            textAlign: "center",
            padding: "40px 0",
            fontSize: 20,
            color: "#6b7280",
          }}
        >
          Loading...
        </div>
      )}

      {/* Error State */}
      {error && (
        <div
          style={{
            textAlign: "center",
            padding: "40px 0",
            fontSize: 20,
            color: "#dc2626",
          }}
        >
          Error loading departments.
        </div>
      )}

      {/* Jobs and Locations */}
      {!isLoading &&
        !error &&
        departments
          .filter(
            (dept) =>
              selectedDepartment === "all" ||
              String(dept.id) === selectedDepartment
          )
          .map((dept) => (
            <div
              key={dept.id}
              data-gh="section-wrapper"
              id={String(dept.id)}
              style={{
                margin: "0 0 32px 0",
                border: isDarkMode ? "1px solid #27272a" : "1px solid #e5e7eb",
                borderRadius: 12,
                background: isDarkMode ? "#27272a" : "#f9fafb",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                padding: 24,
              }}
            >
              <h2
                data-gh="section-heading"
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 18,
                  color: "#fff",
                }}
              >
                {dept.name}
              </h2>
              <div
                data-gh="container"
                aria-label={dept.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {dept.jobs.map((job) => (
                  <div
                    key={job.id}
                    data-gh="listing"
                    id={String(job.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: isDarkMode ? "#1e293b" : "#fff",
                      borderRadius: 8,
                      padding: "16px 20px",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                      border: isDarkMode ? "1px solid #334155" : "1px solid #e5e7eb",
                      transition: "box-shadow 0.2s",
                      cursor: "pointer",
                    }}
                  >
                    <a
                      data-gh="job-title"
                      href={job.absolute_url}
                      style={{
                        fontWeight: 600,
                        fontSize: 18,
                        color: isDarkMode ? "#60a5fa" : "#2563eb",
                        textDecoration: "none",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.title}
                    </a>
                    <span
                      data-gh="job-location"
                      style={{
                        fontSize: 16,
                        color: isDarkMode ? "#cbd5e1" : "#6b7280",
                        marginLeft: 24,
                      }}
                    >
                      {job.location.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

      <GhTableBody />
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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

async function fetchDepartments(
  ghSlug: string
): Promise<{ departments: Department[] }> {
  const res = await fetch(
    `${basePath}/api/greenhouse?ghSlug=${ghSlug || "webflow"}`
  );
  if (!res.ok)
    throw new Error("Could not find jobs on Greenhouse for this group");
  return res.json();
}

export function GhTable() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [ghSlug, setGhSlug] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["departments", ghSlug],
    queryFn: () => fetchDepartments(ghSlug),
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
        margin: "0 auto",
        color: "#f3f4f6",
      }}
    >
      <div>
        <label
          htmlFor="gh-slug"
          style={{ fontWeight: 500, fontSize: 18, marginBottom: 8 }}
        >
          Greenhouse slug
        </label>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setGhSlug(inputRef.current?.value || "");
          }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            id="gh-slug"
            ref={inputRef}
            type="text"
            placeholder={`Enter Greenhouse slug (i.e. "webflow")`}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid #d1d5db",
              marginRight: 16,
              fontSize: 16,
              minWidth: "350px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid #d1d5db",
              fontSize: 16,
              cursor: "pointer",
              background: "#27272a",
              color: "#f3f4f6",
            }}
          >
            Enter
          </button>
        </form>
      </div>

      {/* Filter Dropdown */}
      <div
        style={{
          margin: "24px 0 32px 0",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <label
          htmlFor="department-filter"
          style={{ fontWeight: 500, fontSize: 18 }}
        >
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
          Could not find jobs on Greenhouse for this group
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
                border: "1px solid #27272a",
                borderRadius: 12,
                background: "#27272a",
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
                      justifyContent: "space-between",
                      background: "#1e293b",
                      borderRadius: 8,
                      padding: "16px 20px",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                      border: "1px solid #334155",
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
                        color: "#60a5fa",
                        textDecoration: "none",
                        maxWidth: "350px",
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
                        color: "#cbd5e1",
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
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import textInputBlockStyles from "@/devlink/TextInputBlock.module.css";
import styles from "./GhTable.module.css";

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

interface GhTableProps {
  ghSlug: string;
}

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

export function GhTable({ ghSlug }: GhTableProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

  const { data, isLoading, error } = useQuery({
    queryKey: ["departments", ghSlug],
    queryFn: () => fetchDepartments(ghSlug),
    staleTime: 60 * 1000, // 1 minute
    enabled: !!ghSlug, // Only run query if ghSlug is provided
  });

  useEffect(() => {
    if (ghSlug && data) {
      setSelectedDepartment("all");
    }
  }, [ghSlug, data]);

  const departments = data?.departments?.filter((d) => d.jobs.length > 0) ?? [];
  console.log(departments);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(e.target.value);
  };

  // Show message if no slug provided
  if (!ghSlug) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingState}>
          Enter a Greenhouse slug above to view job listings
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Filter Dropdown - Only show if we have departments */}
      {departments.length > 0 && (
        <div className={styles.filterSection}>
          <label
            htmlFor="department-filter"
            className={`w-form-label ${textInputBlockStyles["input-label"]}`}
          >
            Filter by department:
          </label>
          <select
            id="department-filter"
            value={selectedDepartment}
            onChange={handleFilterChange}
            data-gh="filter"
            className={`w-select ${styles.darkSelect}`}
          >
            <option value="all">All Departments</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div data-gh="loading" className={styles.loadingState}>
          Loading...
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className={styles.errorState}>
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
              className={styles.departmentSection}
            >
              <h2
                data-gh="section-heading"
                className={styles.departmentHeading}
              >
                {dept.name}
              </h2>
              <div
                data-gh="container"
                aria-label={dept.name}
                className={styles.jobsContainer}
              >
                {dept.jobs.map((job) => (
                  <a
                    key={job.id}
                    data-gh="listing"
                    id={String(job.id)}
                    href={job.absolute_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.jobListing}
                  >
                    <span data-gh="job-title" className={styles.jobTitle}>
                      {job.title}
                    </span>
                    <span data-gh="job-location" className={styles.jobLocation}>
                      {job.location.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
    </div>
  );
}

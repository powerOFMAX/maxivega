export function calculateExperienceYears(startDate) {
  const currentDate = new Date();
  const startYear = startDate.getFullYear();
  const currentYear = currentDate.getFullYear();
  const experienceYears = currentYear - startYear;
  return experienceYears;
}

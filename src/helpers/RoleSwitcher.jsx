export const RoleSwitcher = (role) => {
  switch (role) {
    case "student":
      return "Students"
    case "advisor":
      return "Advisors"
    case "Recruiter":
      return "Recruiters"
  }
}

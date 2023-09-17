export const sortByDate = (a: { frontmatter: { date: string | number | Date } }, b: { frontmatter: { date: string | number | Date } }) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  }
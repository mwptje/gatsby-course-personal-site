import React from "react"
import Course from "../Courses/Course"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../../css/courses.module.css"
import Title from "../Title"
import { Link } from "gatsby"
const query = graphql`
  {
    allStrapiCourse(sort: { fields: published, order: DESC }, limit: 6) {
      nodes {
        id
        title
        size
        url
        published
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const LatestCourses = () => {
  const {
    allStrapiCourse: { nodes: courses },
  } = useStaticQuery(query)

  return (
    <section className={styles.courses}>
      <Title title="latest" subtitle="courses" />
      <div className={styles.center}>
        {courses.map(item => {
          return <Course key={item.id} {...item}></Course>
        })}
      </div>
      <Link to="/courses" className="btn-primary">
        all courses
      </Link>
    </section>
  )
}

export default LatestCourses

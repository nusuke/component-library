import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../../node_modules/ress/dist/ress.min.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/atoms">Atoms</Link>
    <Link to="/molecules">molecules</Link>
    <Link to="/organisms">organisms</Link>
  </Layout>
)

export default SecondPage

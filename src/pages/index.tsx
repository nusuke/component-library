import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../../node_modules/ress/dist/ress.min.css"

const SecondPage = () => (
  <Layout>
    <div className="Index">
      <SEO title="Component library" />
      <h1>遊びで作っているコンポーネントライブラリ</h1>
      <ul className="Index__linkList">
        <li><Link to="/atoms">Atoms</Link></li>
        <li><Link to="/molecules">molecules</Link></li>
        <li><Link to="/organisms">organisms</Link></li>
      </ul>
    </div>
  </Layout>
)

export default SecondPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BasicButton from "../components/atoms/BasicButton/BasicButton"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Atoms</h1>
    <h2>ボタン</h2>
    <BasicButton
      text="basic"
      onClickHandler={() => {
        alert("clicked")
      }}
    />
    <BasicButton
      text="basic"
      onClickHandler={() => {
        alert("clicked")
      }}
      animation
    />
    <BasicButton
      text="basic"
      onClickHandler={() => {
        alert("clicked")
      }}
      type="outline"
      animation
    />
  </Layout>
)

export default IndexPage

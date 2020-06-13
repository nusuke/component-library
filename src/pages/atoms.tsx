import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BasicButton from "../components/atoms/BasicButton/BasicButton"
import Chips from "../components/atoms/Chips/Chips"
import DeletableChips from "../components/atoms/DeletableChips/DeletableChips"

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

    <h2>Chips</h2>
    <Chips text="Chips" />
    <DeletableChips
      text="deletable"
      deleteHandler={() => {
        alert("delete")
      }}
    />
  </Layout>
)

export default IndexPage

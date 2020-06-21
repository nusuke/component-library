import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TagForm from "../components/molecules/TagForm/TagForm"

const IndexPage = () => {
  const [chipsList, setChipsList] = useState([])
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Molecules</h1>
      <h2>タグフォーム</h2>
      <TagForm
        chipsList={chipsList}
        appendChips={newTag => setChipsList([...chipsList, newTag])}
      />
    </Layout>
  )
}
export default IndexPage

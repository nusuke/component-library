import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TagForm from "../components/molecules/TagForm/TagForm"
import CreditCardForm from "../components/organisms/CreditCardForm/CreditCardForm"

const IndexPage = () => {
  const [chipsList, setChipsList] = useState([])
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Organisms</h1>
      <h2>クレカ入力</h2>
      <CreditCardForm />

      <hr />
    </Layout>
  )
}
export default IndexPage

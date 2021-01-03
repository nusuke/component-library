import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TagForm from "../components/molecules/TagForm/TagForm"
import Graph from "../components/molecules/Graph/Graph"
import SideMenu from "../components/molecules/SideMenu/SideMenu"

const IndexPage = () => {
  const [chipsList, setChipsList] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Molecules</h1>
      <h2>タグフォーム</h2>
      <TagForm
        chipsList={chipsList}
        appendChips={newTag => setChipsList([...chipsList, newTag])}
      />

      <hr />
      <h1>Graph</h1>
      <Graph
        data={{
          2001: [
            { label: "React", data: 1 },
            { label: "Angular", data: 1 },
            { label: "Vue", data: 1 },
          ],
          2002: [
            { label: "React", data: 10 },
            { label: "Angular", data: 0 },
            { label: "Vue", data: 0 },
          ],
          2003: [
            { label: "React", data: 30 },
            { label: "Angular", data: 0 },
            { label: "Vue", data: 10 },
          ],
          2004: [
            { label: "React", data: 50 },
            { label: "Angular", data: 30 },
            { label: "Vue", data: 20 },
          ],
          2005: [
            { label: "React", data: 100 },
            { label: "Angular", data: 50 },
            { label: "Vue", data: 20 },
          ],
          2006: [
            { label: "React", data: 140 },
            { label: "Angular", data: 70 },
            { label: "Vue", data: 30 },
          ],
          2007: [
            { label: "React", data: 180 },
            { label: "Angular", data: 40 },
            { label: "Vue", data: 100 },
          ],
        }}
      />
      <h2>sidemenu</h2>
      <button onClick={() => {setIsMenuOpen(true)}}>🍔</button>
      <SideMenu isOpen={isMenuOpen} openHandler={setIsMenuOpen}/>
    </Layout>
  )
}
export default IndexPage

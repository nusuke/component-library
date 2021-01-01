import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BasicButton from "../components/atoms/BasicButton/BasicButton"
import Chips from "../components/atoms/Chips/Chips"
import DeletableChips from "../components/atoms/DeletableChips/DeletableChips"
import AnimationText from "../components/atoms/AnimationText/AnimationText"
import ReverseCard from "../components/atoms/ReverseCard/ReverseCard"
import Carousel from "../components/atoms/Carousel/Carousel"
import SkeletonBox from "../components/atoms/SkeletonBox/SkeletonBox"

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

    <h2>Animation Text</h2>
    <AnimationText text="It is a test" />

    <h2>ReverseCard</h2>
    <ReverseCard frontComponent={<>表です。</>} backComponent={<>裏です。</>} />

    <h2>Carousel</h2>
    <Carousel>
      <li><SkeletonBox /></li>
      <li><SkeletonBox /></li>
      <li><SkeletonBox/></li>
      <li><SkeletonBox/></li>
      <li><SkeletonBox/></li>
      <li><SkeletonBox/></li>
      <li><SkeletonBox/></li>
      <li><SkeletonBox/></li>
      <li><SkeletonBox /></li>
      <li><SkeletonBox /></li>
      <li><SkeletonBox /></li>
      <li><SkeletonBox/></li>
      <li><SkeletonBox/></li>
      <li><SkeletonBox/></li>
      <li><SkeletonBox/></li>
      <li><SkeletonBox/></li>
      <li><SkeletonBox/></li>
      <li><SkeletonBox/></li>
    </Carousel>
  </Layout>
)

export default IndexPage

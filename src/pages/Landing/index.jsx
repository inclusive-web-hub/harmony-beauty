import { Layout } from "../../layout"
import { Banner } from "../../components/Banner"
import { Features } from "../../components/Features"
import { Roadmap } from "../../components/Roadmap"

import React from "react"

const Landing = () => {
  return (
    <Layout>
      <Banner />
      <Features />
      <Roadmap />
    </Layout>
  )
}

export default Landing

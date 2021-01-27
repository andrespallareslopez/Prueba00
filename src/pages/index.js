import React from "react"

import '../../node_modules/components-font-awesome/css/font-awesome.min.css'

import Layout from '../../src/WebComponents/Layout.js'

import {MyTab} from '../../src/WebComponents/MyTab.js'

import {MySlidePanel} from '../../src/WebComponents/MySlidePanel.js'

import {datos,mesas,categorias,articulos} from '../../src/ListInMemory.js'

export default function Home() {
  return (
     
     <Layout>
         <MySlidePanel datalist={categorias} id="panelCategorias"></MySlidePanel>
     </Layout>
     
  )
}

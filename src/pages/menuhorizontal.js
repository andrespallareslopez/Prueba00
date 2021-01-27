import React from "react"

import '../../node_modules/components-font-awesome/css/font-awesome.min.css'

import Layout from '../../src/WebComponents/Layout.js'

import {MyMenuHorizontal} from '../../src/WebComponents/MyMenuHorizontal.js'
import {MyTab} from '../../src/WebComponents/MyTab.js'

export default function Home() {
  return (
     
     <Layout top={<MyMenuHorizontal></MyMenuHorizontal>}>
        
     </Layout>
     
  )
}

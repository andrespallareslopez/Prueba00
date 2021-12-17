exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /import-jquery/,
              use: loaders.null(),
            },
            
            {
                test: /hammer/,
                use: loaders.null(),
            },
            {
                test: /inputmask/,
                use: loaders.null(),
              },
              {
                test: /pikaday/,
                use: loaders.null(),
              },
            /*
            {
                test: /components01/,
                use: loaders.null(),
              },

              
              {
                test: /UXScroll/,
                use: loaders.null(),
              },
              
              {
                test: /UXAccordeon/,
                use: loaders.null(),
              },
              {
                test: /UXLoadPanel/,
                use: loaders.null(),
              },
              {
                test: /UXSearchPanel/,
                use: loaders.null(),
              },
              {
                test: /UXPanelScroll/,
                use: loaders.null(),
              },
              {
                test: /UXLink/,
                use: loaders.null(),
              },
              {
                test: /UXLoadLink/,
                use: loaders.null(),
              },
              {
                test: /UXPaginacionControl/,
                use: loaders.null(),
              },
              {
                test: /UXPaginacion/,
                use: loaders.null(),
              },
             
              {
                test: /UXTable/,
                use: loaders.null(),
              },
              {
                test: /UXDataList/,
                use: loaders.null(),
              },
              {
                test: /UXDatePicker/,
                use: loaders.null(),
              },
              {
                test: /UXKeyform/,
                use: loaders.null(),
              },
              {
                test: /UXValidation/,
                use: loaders.null(),
              },
              {
                test: /UXButtonScroll/,
                use: loaders.null(),
              },
              {
                test: /UXSearchList/,
                use: loaders.null(),
              },
              {
                test: /UXMenuPanel/,
                use: loaders.null(),
              },
              {
                test: /UXSlidePanels/,
                use: loaders.null(),
              },

              {
                test: /UXTab/,
                use: loaders.null(),
              },
   */          
          ],
        },
      })
    }
  }
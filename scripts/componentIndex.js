const fs = require('fs')
const glob = require('glob')

const indexPath = 'src/components/index.js'
const componentsPath = 'src/components/'

fs.writeFile(
  indexPath, 
  generateExportSvg().join('\n\n'),
  (err) => {
    if (err)
      return console.log(err)
    else
      return console.log("Component export index created!")
  }
)

function jsNameToExportName(name) {
  return name
    .replace(/\/index.js$/, '')
}

function generateExportSvg() {
  const exportArr = []
  const svgNames = glob.sync('**/index.js', {cwd: componentsPath})

  console.log(svgNames)

  svgNames.forEach(i => {
    exportArr.push(`export { default as ${jsNameToExportName(i)} } from './${i}';`)
  })
  return exportArr
}
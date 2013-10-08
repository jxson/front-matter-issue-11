
var fs = require('fs')
  , fm = require('front-matter')
  , path = require('path')
  , file = path.resolve(__dirname, 'examples/example.md')

console.log('reading', file)

fs.readFile(file, 'utf8', function(err, data){
  if (err) throw err

  console.log('before \n', data)

  var content = fm(data)

  console.log('after \n', content)
})

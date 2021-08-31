'use stric'

var http = require('http').createServer(webServer),
    form = require ('fs').readFileSync('op/index.html'),
   const querystring = require('querystring'),
    util = require('util'),
    dataString = '';

    function webServer(req, res) 
    {
        if (req.method == GET) 
        {
            res.writeHead(200,{'Content-Type' : 'text/tml'}) 
            res.end(form)   
        } 
        if (req.method == 'POST') 
        {
            req
                .on('data', function (data) {
                dataString += data
                })
                .on('end', function (data) {
                    var dataObject = querystring.parse(dataString),
					dataJSON = util.inspect(dataObject),
					templateString = `
Los datos que enviaste por POST como string son: ${dataString}
Los datos que enviaste por POST como objeto son: ${dataObject}
Los datos que enviaste por POST como JSON son: ${dataJSON}
				`
				console.log(templateString)
				res.end(templateString)
			})
    }
}

    http.listen(8080)
    console.log('servidor corriendo en htpp://localhost:8080/')
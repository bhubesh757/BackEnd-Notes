var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http.createServer((req , res) => {

    if(req.url == '/'){
        res.writeHead(200 , {'Content-type' : "text/html"});
        res.write('<form action = " biodata" method = "post" enctype = "multipart/form-data">');
        res.write('<h2>Bhubesh Here , i am learning nodejs</h2>');
        res.write('Name <input type = "text" name = "username"><br>');
        res.write('DOB <input type = "date" name = "dob"><br>');
        res.write('Branch <input type = "text" name = "branch"><br>');
        res.write('Mail <input type = "email" name = "mailId"><br>');
        res.write('Phone Number <input type = "text" name = "pno"><br>');
        res.write('Resume <input type = "file" name = "uploadfile"><br>');
        res.write('<input type = "submit">');
        res.end();
    }
    else if (
        req.url == '/biodata'
    ){
        var form = new formidable.IncomingForm();
        form.parse(req , (err , fields , files) => {
            res.write('<h1> Name : '+ fields.username ,'</h1><br>' )
            res.write('<h1> DOB : '+ fields.dob ,'</h1><br>' )
            res.write('<h1> Branch : '+ fields.branch ,'</h1><br>' )
            res.write('<h1> Phone Number : '+ fields.mailId ,'</h1><br>' )
            res.write('<h1> Mail : '+ fields.pno ,'</h1><br>' )

            var oldpath = files.uploadfile.path;
            var newpath = '/home/bhubesh/nodejstut :'  + files.uploadfile.name;
            fs.rename(oldpath , newpath , (err) => {
                {
                    if(err) throw err;
                    res.write('<h1> Your File Location</h1><br>');
                    res.write('<h1>old Path : ' + oldpath + '</h1><br>');
                    res.write('<h1>New Path : ' + newpath + '</h1><br>');
                    res.end('<h1>Form Submitted successfully</h1')
                }
            })
        })
    }
    else {
        res.end('<h1> 404 page not Found</h1>')
    }

}).listen(3030)



# GET & POST Utility Functions (for learning purposes)

Today, I'm going to show you how to write Bash utility functions that will
help you make GET and POST (JSON-only for POST) requests, so that you don't
have to be too concerned about the details like Postman's messy UI or
cURL's cryptic commands.

---

Before we begin, we need an Express app to test.

1. Open your terminal
2. Make a new directory
3. Change to the directory
4. `npm init -y`
5. `npm i -S body-parser express`
6. `touch app.js`
7. Put the following code in `app.js`

## `app.js`
```javascript
var bodyParser = require('body-parser');
var express = require('express');

var app = express();
var PORT = 8080;

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello, World!\n');
});

app.post('/api/greet', function (req, res) {
    res.send("Hello, " + req.body.name + "\n");
});

app.listen(PORT, function() {
    console.log("Listening on port", PORT);
});
```

Then, in the _same_ directory, run `node app.js`

---

This next part is going to seem scary, but it's okay, you don't have to
understand what's happening.

1. `touch add-utilities.sh` (it doesn't matter where you put it)
2. `chmod +x add-utilities.sh`
3. Open `add-utilities.sh` in your code editor of choice.
4. Add the code below to the file (please copy-paste, don't try to type it out,
   Bash scripts are too finicky and getting one space wrong can create some
   nasty results)

## `add-utilities.sh`
```shell
#!/usr/bin/env bash

set -e

cat << "EOF" >> ~/.bashrc
get() {
    curl -X GET $1
}

postJSON() {
    curl -X POST -H "Content-Type: application/json" -d $2 $1
}
EOF

echo "Finished"
```

Save the file, and run `./add-utilities.sh` in your terminal. DO NOT do that
command more than once. If you don't see any errors, you're good.

---

Now that our utility functions have been added to our `~/.bashrc` file, we
need to "source" our bashrc so that it knows that these utilities exist.
You can either open a new terminal window, or run `source ~/.bashrc`.

With our Express server still running from earlier, now we can test out our
utility functions.

1. `get http://localhost:8080`
2. `postJSON http://localhost:8080/api/greet '{"name": "Chris"}'`

If you make a file named `data.json`, and put this in it:
```json
{
    "name": "Chris"
}
```

You can now run the following command, and it will work:
`postJSON http://localhost:8080/api/greet '@data.json'`

So now you have two new command-line utilities to help you test out your
Express APIs that you'll be making in class over the next few weeks:
`get <location>`
and
`postJSON <location> <json-data or @json-file.json>`

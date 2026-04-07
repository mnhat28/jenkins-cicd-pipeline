# Simple Source Code Setup
## Source Code in this repo is sample, you can use others 
Web-app structure
```
my-web-app/
│
├── server/
│   ├── server.js
│   ├── models/User.js
│   └── config/db.js
│
├── client/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   └── script.js
│
└── package.json
```

Install Back-end(Node.js + Express)
```
npm init -y
npm install express mongoose cors body-parser
```

Install MongoDB Community Edition on Ubuntu
```
https://www.mongodb.com/docs/v7.0/tutorial/install-mongodb-on-ubuntu/#std-label-install-mdb-community-ubuntu
```

Create MongoDB user
```javascript
use <database name>
db.createUser({
  user: "username",
  pwd: "password",
  roles: [{ role: "readWrite", db: "<database name>" }]
})
show users
```

Modify db.js at web-app/server/config/db.js
```
await mongoose.connect("mongodb://<username>:<password>@127.0.0.1:27017/web-app");
```

Finally, in folder "server"  run the following command to run
```
mongod
node server/server.js
```

# Pipeline
Install K3s cluster
```
https://docs.k3s.io/quick-start
```

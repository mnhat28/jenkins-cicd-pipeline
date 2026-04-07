# Simple Source Code Setup
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
Go to the 'web-app' folder and install dependencies:
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
After install K3s cluster, use following command to check cluster's status
```
sudo kubectl get nodes
```

It will return the result
```
NAME     STATUS   ROLES           AGE     VERSION
ubuntu   Ready    control-plane   3h11m   v1.34.6+k3s1
ubuntu1  Ready    <none>          3h10m   v1.34.6+k3s1
ubuntu2  Ready    <none>          3h10m   v1.34.6+k3s1
```

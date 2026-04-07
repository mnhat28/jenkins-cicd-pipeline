# Simple Source Code Setup 

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

File db.js at web-app/server/config/db.js, modify the parameters to match what has been declared in MongoDB
```
await mongoose.connect("mongodb://<username>:<password>@127.0.0.1:27017/web-app");
```


# Pipeline
Install K3s cluster
```
https://docs.k3s.io/quick-start
```

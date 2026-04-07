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

# Install K3s cluster
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

# Docker
Install Docker
```
sudo apt install docker.io -y
docker --version
```
Install Docker Compose  
1. To download and install the Docker Compose CLI plugin, run
```
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v5.0.1/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
```
2. Apply executable permissions to the binary
```
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
```
3. Test the installation
```
docker compose version
```


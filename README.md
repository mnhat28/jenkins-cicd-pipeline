# Simple Source Code 
Web-app structure
```
my-web-app/
│
├── server/
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   ├── models/User.js
│   └── config/db.js
│
├── client/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   └── script.js
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
In docker-compose.yml, declare username and password so that the container will be automatically initialized when run
```
MONGO_INITDB_ROOT_USERNAME: <username>
MONGO_INITDB_ROOT_PASSWORD: <password>
```
And of course, the db.js file must also contain the same username and password 
```
await mongoose.connect("mongodb://<username>:<password>@mongo:27017/web-app?authSource=admi>
```
Finally, at the folder having docker-compose.yml, run
```
docker compose up --build
```
After run the container, use following to access the mongdoDB
```
docker exec -it mongo mongosh -u <username> -p <password> --authenticationDatabase admin
```

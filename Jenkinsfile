//K3s
pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub-authentication'
        DOCKERHUB_REPO = 'minhnhat28'
        SERVER_IMAGE = "${DOCKERHUB_REPO}/web-app-server"
        CLIENT_IMAGE = "${DOCKERHUB_REPO}/web-app-client"
    }

    stages {


        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $SERVER_IMAGE ./web-app/server'
                sh 'docker build -t $CLIENT_IMAGE ./web-app/client'
            }
        }

        stage('Login Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: DOCKERHUB_CREDENTIALS,
                    usernameVariable: 'USERNAME',
                    passwordVariable: 'PASSWORD'
                )]) {
                    sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
                }
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push $SERVER_IMAGE'
                sh 'docker push $CLIENT_IMAGE'
            }
        }

        /*
        stage('Deploy to K3s') {
            steps {
                sh '''
                kubectl apply -f k8s/
                '''
            }
        }
        */
    }
}
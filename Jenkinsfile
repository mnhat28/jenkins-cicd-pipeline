pipeline {
    agent any                 // choose agent to run pipeline
    environment {             // environment variable 
        MY_VAR = "value"
    }
    stages {                  // pipeline stages
        stage('Checkout') {  // Stage 1: pull code
            steps {
                git branch: 'main',
                    credentialsId: 'jenkins-github', // ID credential SSH
                    url: 'git@github.com:mnhat28/jenkins-cicd-pipeline.git'
            }
        }
        stage('Build') {     // Stage 2: build code
            steps {
                sh 'echo "Build code here"'
                // example: sh './gradlew build' or 'mvn package'
            }
        }
        stage('Test') {      // Stage 3: run test
            steps {
                sh 'echo "Run tests here"'
                // example: sh './gradlew test' or 'mvn test'
            }
        }
        stage('Deploy') {    // Stage 4: deploy (optional)
            steps {
                sh 'echo "Deploy code here"'
            }
        }
    }
    post {                    // post actions
        always {
            echo 'Pipeline finished'
        }
    }
}

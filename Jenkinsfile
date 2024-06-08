pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 86758595-b73b-4e6f-98e9-e7923f9de5d9, url: 'https://github.com/pragatisaikia/todo-pipeline.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('pragatisaikia/todo-app:latest')
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        docker.image('pragatisaikia/todo-app:latest').push()
                    }
                }
            }
        }
    }
}

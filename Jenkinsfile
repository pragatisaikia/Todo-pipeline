pipeline {
    agent any

    stages {
        stage{'Print'}{
            steps{
                echo 'Hello World'
            }
         }
        // stage('Checkout') {
        //     steps {
        //         git 'https://github.com/pragatisaikia/todo-pipeline.git'
        //     }
        // }
        // stage('Build') {
        //     steps {
        //         sh 'npm install'
        //         sh 'npm run build'
        //     }
        // }
        // stage('Test') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }
        // stage('Build Docker Image') {
        //     steps {
        //         script {
        //             docker.build('pragatisaikia/todo-app:latest')
        //         }
        //     }
        // }
        // stage('Push Docker Image') {
        //     steps {
        //         script {
        //             docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
        //                 docker.image('pragatisaikia/todo-app:latest').push()
        //             }
        //         }
        //     }
        // }
    }
}

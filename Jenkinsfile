pipeline {
  agent any
  stages {
    stage('Cloning Repo') {
      steps {
        git(branch: '/origin', url: 'https://github.com/MATRIX30/Jenkins-Test', changelog: true)
      }
    }

  }
}
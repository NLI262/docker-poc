pipeline {
    agent any
       stages {
        stage('Installation') {
            steps {
                echo 'Installation...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'CI=true npm test'
            }
        }
        stage('Sonarqube') {
    environment {
        scannerHome = tool 'sonar_scanner'
    }
    steps {
        echo 'Scanning....'
        withSonarQubeEnv('Sonarqube') {
            sh "${scannerHome}/bin/sonar-scanner"
        }
        timeout(time: 10, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
        }
    }
}

  stage('Build') {
            steps {
                echo 'Production build...'
                sh 'npm run build'
            }
        }
    stage('Upload') {
        steps{
        echo 'Uploading...'
        dir('/var/lib/jenkins/workspace/responsivescreen/'){
            pwd(); //Log current directory
            withAWS(region:'ap-south-1',credentials:'s3cred') {
                //  def identity=awsIdentity();//Log AWS credentials
                // Upload files from working directory 'dist' in your project workspace
                s3Upload(bucket:"mydeployment-assignment", workingDir:'build', includePathPattern:'**/*');
            }
        }
    }

    }
}
}




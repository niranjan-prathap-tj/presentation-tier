pipeline {
    agent any 
    stages {
        stage ('AWS ECR Authentication') {
            steps {
                sh ''' echo Authenticating ECR with docker credentials '''
                sh ''' sudo -H -u i21177 bash -c 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 510567620487.dkr.ecr.ap-south-1.amazonaws.com' '''
            }
        }
        stage ('Build') {
            steps {
                sh ''' sudo -H -u i21177 bash -c 'docker build -t presentationtier /mnt/c/Presentation-Tier/sample/frontend' '''
            }
        }
        stage ('Push Image to ECR') {
            steps {
                sh ''' sudo -H -u i21177 bash -c 'docker tag presentationtier:latest 510567620487.dkr.ecr.ap-south-1.amazonaws.com/presentation-tier:latest' '''
                sh ''' sudo -H -u i21177 bash -c 'docker push 510567620487.dkr.ecr.ap-south-1.amazonaws.com/presentation-tier:latest' '''
            }
        }
        stage ('Deploy') {
            steps {
                sh ''' sudo -H -u i21177 bash -c 'kubectl delete deployment presentation-tier-deployment 2> /dev/null' '''
                sh ''' sudo -H -u i21177 bash -c 'kubectl apply -f presentationTierDeployment.yaml' '''
            }
        }
    }
}
pipeline {
    agent any

    environment {
        SSH_USER = 'root'
        SSH_HOST = credentials('jano_server_ip')
        REPO_PATH = '/root/apps/portfolio'
        REPO_URL = 'https://github.com/Rimidalfi/portfolio.git'
        CONTAINER = 'jano-studio'
        IMAGE = 'jano-portfolio'
        PORT = '5625'
        ACCESS_TOKEN = credentials('VITE_ACCESS_TOKEN')
        SPACE_ID = credentials('VITE_SPACE_ID')
    }

    stages {
        stage('check dir') {
            sh '''
ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} <<EOF
if [ ! -d ${REPO_PATH} ]; then
echo "mkdir at ${REPO_PATH}"
mkdir -p ${REPO_PATH}
fi
EOF
'''
        } 
        
        stage('check repo'){
            sh '''
ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} <<EOF
if [ ! -d "${REPO_PATH}/.git" ]; then
git clone ${REPO_URL} ${REPO_PATH}
echo "cloning repository from:${REPO_URL}"
fi
EOF
'''
        }

        stage('pull repo'){
            sh '''
ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} <<EOF
cd ${REPO_PATH}
git pull origin main
echo "pulling repository from:${REPO_URL}"
EOF
'''
        }

        stage('prune docker'){
            sh '''
ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} <<EOF
docker stop ${CONTAINER}
echo "DOCKER CONTAINER >${CONTAINER}< STOPPED 🚫"
docker system prune -a -f
echo "DOCKER SYSTEM PRUNED 🧹"
EOF
'''
        }

        stage('write env to nginx.conf'){
            sh '''
ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} <<EOF
chmod +x modify_nginx.sh
./modify_nginx.sh ${ACCESS_TOKEN} ${SPACE_ID}
EOF
'''
        }

        stage('write env to nginx.conf'){
            sh '''
ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} <<EOF
docker build -t ${IMAGE}:${BUILD_NUMBER} -t ${IMAGE} .
echo "DOCKER IMAGE >${IMAGE}< BUILD ✅"
docker run -d -p ${PORT}:80 --name ${CONTAINER} ${IMAGE}
echo "DOCKER CONTAINER >${CONTAINER}< STARTED ✅"
EOF
'''
        }
    }


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
                steps{

sh '''
ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} <<EOF
if [ ! -d ${REPO_PATH} ]; then
echo "mkdir at ${REPO_PATH}"
mkdir -p ${REPO_PATH}
fi
EOF
'''
                }
            } 

             stage('check repo'){
                steps{

sh '''
ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} <<EOF
if [ ! -d "${REPO_PATH}/.git" ]; then
git clone ${REPO_URL} ${REPO_PATH}
echo "cloning repository from:${REPO_URL}"
fi
EOF
'''
                }
            }

             stage('pull repo'){
                steps{

sh '''
ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} <<EOF
set -x
cd ${REPO_PATH}
git pull origin main
echo "pulling repository from:${REPO_URL}"
set +x
EOF
'''
                }
            }

             stage('prune docker'){
                steps{

sh '''
ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} <<EOF
docker stop ${CONTAINER}
echo "DOCKER CONTAINER >${CONTAINER}< STOPPED 🚫"
docker system prune -a -f
echo "DOCKER SYSTEM PRUNED 🧹"
EOF
'''
                }
            }

             stage('write env to nginx.conf'){
                steps{
sh '''
ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} <<EOF
set -x
cd ${REPO_PATH}
chmod +x modify_nginx.sh
./modify_nginx.sh ${ACCESS_TOKEN} ${SPACE_ID}
set +x
EOF
'''
                }
            }

             stage('build & run docker container'){
                steps{
sh '''
ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} <<EOF
set -x
cd ${REPO_PATH}
docker build -t ${IMAGE}:${BUILD_NUMBER} -t ${IMAGE} .
echo "DOCKER IMAGE >${IMAGE}< BUILD ✅"
docker run -d -p ${PORT}:80 --name ${CONTAINER} --restart unless-stopped ${IMAGE}
echo "DOCKER CONTAINER >${CONTAINER}< STARTED ✅"
set +x
EOF
'''
                }
            }
    }
}
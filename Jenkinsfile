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
        PACE_ID = credentials('VITE_SPACE_ID')
    }

    stages {
        stage('Connect and Execute') {
            steps {
                        sh '''
ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} <<EOF
if [ ! -d ${REPO_PATH} ]; then
    echo "mkdir at ${REPO_PATH}"
    mkdir -p ${REPO_PATH}
fi
if [ ! -d "${REPO_PATH}/.git" ]; then
    git clone ${REPO_URL} ${REPO_PATH}
    echo "cloning repository from:${REPO_URL}"
else
    export VITE_ACCESS_TOKEN=${ACCESS_TOKEN}
    export VITE_SPACE_ID=${SPACE_ID}
    echo "Access Token: $VITE_ACCESS_TOKEN
    echo "Space ID: $VITE_SPACE_ID
    cd ${REPO_PATH}
    git pull origin main
    echo "pulling repository from:${REPO_URL}"
    docker stop ${CONTAINER}
    echo "DOCKER CONTAINER >${CONTAINER}< STOPPED 🚫"
    docker system prune -a -f
    echo "DOCKER SYSTEM PRUNED 🧹"
    envsubst < nginx.conf > envnginx.conf
    docker build -t ${IMAGE}:${BUILD_NUMBER} -t ${IMAGE} .
    echo "DOCKER IMAGE >${IMAGE}< BUILD ✅"
    docker run -d -p ${PORT}:80 --name ${CONTAINER} ${IMAGE}
    echo "DOCKER CONTAINER >${CONTAINER}< STARTED ✅"
fi
EOF
'''

                }
            }
        }
    }


#!/bin/bash
export LOCAL_ACCESS_TOKEN=$1
export LOCAL_SPACE_ID=$2
envsubst '$LOCAL_ACCESS_TOKEN $LOCAL_SPACE_ID' < nginx.conf > envnginx.conf
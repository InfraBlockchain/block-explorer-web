#!/bin/bash
# chmod +x dev_sentinel_build_deploy_infrablockchain_explorer_web_s3.sh

BASEDIR=$(dirname "$0")

red=`tput setaf 1`
green=`tput setaf 2`
magenta=`tput setaf 6`
reset=`tput sgr0`

echo "${red}Do you want to deploy InfraBlockchain ExplorerWeb DevelopmentServer for Testnet Sentinel?${reset}"
echo "write YES to proceed deploy process"
read USER_CONFIRM_TO_PROCEED
if [ "$USER_CONFIRM_TO_PROCEED" != "YES" ]; then
  exit 1
fi

#deploy/set_server_mode.sh dev_sentinel

ng build

export AWS_ACCESS_KEY_ID=`cat ${BASEDIR}/DEV_SENTINEL_S3_AWS_ACCESS_KEY_ID`
export AWS_SECRET_ACCESS_KEY=`cat ${BASEDIR}/DEV_SENTINEL_S3_AWS_SECRET_ACCESS_KEY`
export AWS_DEFAULT_REGION=ap-northeast-2

echo "${red}[InfraBlockchainExplorerWeb]${green}[DevelopmentServer-Testnet-Sentinel]${reset} starting s3 bucket sync"

aws s3 sync ${BASEDIR}/../dist/ s3://testnet-sentinel-explorer.yosemitelabs.org/ --delete

echo "${red}[InfraBlockchainExplorerWeb]${green}[DevelopmentServer-Testnet-Sentinel]${reset} s3 bucket sync finished"

sleep 5
open "http://testnet-sentinel-explorer.yosemitelabs.org"

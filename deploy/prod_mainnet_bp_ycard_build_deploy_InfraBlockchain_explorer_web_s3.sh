#!/bin/bash
# chmod +x dev_sentinel_build_deploy_infrablockchain_explorer_web_s3.sh

BASEDIR=$(dirname "$0")

red=`tput setaf 1`
green=`tput setaf 2`
magenta=`tput setaf 6`
reset=`tput sgr0`

echo "${red}Do you want to deploy InfraBlockchain ExplorerWeb Production Server for YOSEMITE Main-Net?${reset}"
echo "write YES to proceed deploy process"
read USER_CONFIRM_TO_PROCEED
if [ "$USER_CONFIRM_TO_PROCEED" != "YES" ]; then
  exit 1
fi

#deploy/set_server_mode.sh prod_mainnet

ng build

export AWS_ACCESS_KEY_ID=`cat ${BASEDIR}/PROD_MAINNET_BP_YCARD_S3_ACCESS_KEY_ID`
export AWS_SECRET_ACCESS_KEY=`cat ${BASEDIR}/PROD_MAINNET_BP_YCARD_S3_SECRET_ACCESS_KEY`
export AWS_DEFAULT_REGION=us-west-1

echo "${red}[MainNet][InfraBlockchainExplorerWeb]${green}[ProductionServer-YOSEMITE-MainNet]${reset} starting s3 bucket sync"

aws s3 sync ${BASEDIR}/../dist/ s3://mainnet.yosemite.ycard.io/ --delete

echo "${red}[MainNet][InfraBlockchainExplorerWeb]${green}[ProductionServer-YOSEMITE-MainNet]${reset} s3 bucket sync finished"

sleep 5
open "http://mainnet.yosemite.ycard.io"

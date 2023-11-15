#!make
include .env

# -------------- DEPLOYMENT -------------- #

deploy: 
	npx hardhat deploy --network $(NETWORK)

#-------------- PLAYGROUND ----------------#

withdraw:
	npx hardhat run scripts/playground/withdraw.ts --network $(NETWORK)

set-data:
	npx hardhat run scripts/playground/set-data.ts --network $(NETWORK)
# Simple CIP54 Viewer

This is part of the [https://cips.cardano.org/cips/cip54](CIP54) Smart NFT toolset. For further details on Smart NFTs, check out the [https://nft-playground.dev/](Smart NFT Playground).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The idea is to provide the most simple possible interface to render a Smart NFT.
This is used as a test harness for [https://github.com/kieransimkin/SmartNFTPortal](Smart NFT Portal), which is the react component responsible for rendering Smart NFTs. It is also used in [https://github.com/kieransimkin/SmartNFTThumbnailer](SmartNFTThumbnailer) to generate the static HTML which is rendered in chrome-headless. 

## The data

SmartNFTPortal requires two props - the NFT metedata itself from the blockchain, and the Smart Imports data structure which has been generated by [https://github.com/kieransimkin/libcip54](libcip54). These are hardcoded in two files - [src/smartImport.json](smartImport.json) and [src/metadata.json](metadata.json)

## Submodules

This project loads SmartNFTPortal as a Git submodule rather than a standard NPM import, this is to enable rapid testing and debugging of SmartNFTPortal without having to repeatedly update and publish it. 
This means when you're cloning this project, you will need to use the `--recurse-submodules` flag to git, Ie: `git clone --recurse-submodules https://github.com/kieransimkin/SimpleCip54Viewer`
Node: This is *not* how you should import SmartNFTPortal in your own projects - you do not need to use Git submodules if you are not intending to contribute to the development of SmartNFTPortal - if you just wish to use it; simply install it in the normal way with `npm install smartnftportal` or `yarn install smartnftportal`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

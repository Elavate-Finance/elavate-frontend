export default {
    '1_20': {
      native: {
        '1': {
          contract: '0xf127003ea39878EFeEE89aA4E22248CC6cb7728E',
          minTx: 0.1, // 0.01, // 10000000000000000
          maxTx: 1500000, // 1500000000000000000000000
          fee: 0.1
        },
        '20': {
          contract: '0x88723077663F9e24091D2c30c2a2cE213d9080C6', // token 0xe6fd75ff38Adca4B97FBCD938c86b98772431867
          minTx: 1, // 1000000000000000000
          maxTx: 750000, // 750000000000000000000000
          fee: 0
        }
      }, 
      token: {
        '1': {
          contract: '0xfBec16ac396431162789FF4b5f65F47978988D7f',
          minTx: 0.5,
          maxTx: 750000,
          fee: 0
        },
        '20': {
          contract: '0x6Ae6B30F6bb361136b0cC47fEe25E44B7d58605c',
          minTx: 0.5,
          maxTx: 750000,
          fee: 0
        }
      }
    },
    '20_1': {     
      native: {
        '1': {
          contract: '0x314dfec1Fb4de1e0Be70F260d0a065E497f7E2eB', // token 0x802c3e839E4fDb10aF583E3E759239ec7703501e
          minTx: 0.1, // 0.5, // 500000000000000000
          maxTx: 750000, // 750000000000000000000000
          fee: 0 // ??
        },
        '20': {
          contract: '0xE235CbC85e26824E4D855d4d0ac80f3A85A520E4',
          minTx: 1,  // 1000000000000000000
          maxTx: 1500000, // 1500000000000000000000000
          fee: 0 // was 1
        }
      }, 
      token: {
        '1': {
          contract: '0xe6fd75ff38Adca4B97FBCD938c86b98772431867',
          minTx: 0.5,
          maxTx: 750000,
          fee: 0
        },
        '20': {
          contract: '0x0054351c99288D37B96878EDC2319ca006c8B910',
          minTx: 0.5,
          maxTx: 750000,
          fee: 0
        }
      }
    },
    '128_20': {     
      native: {
        '20': {
          contract: '0x5e071258254c85B900Be01F6D7B3f8F34ab219e7', // token 0xa1ecFc2beC06E4b43dDd423b94Fef84d0dBc8F5c
          minTx: 0.1, // was 1
          maxTx: 750000, // 750000000000000000000000
          fee: 0.1
        },
        '128': {
          contract: '0x4490ee96671855BD0a52Eb5074EC5569496c0162',
          minTx: 0.1, // was 100,
          maxTx: 1500000, // 1500000000000000000000000
          fee: 0.1 // percent
        }
      }, 
      token: {
        '20': {
          contract: '0x6683268d72eeA063d8ee17639cC9B7C317d1734a',
          minTx: 0.5,
          maxTx: 750000,
          fee: 0,

        },
        '128': {
          contract: '0x323b5913dadd3e61e5242Fe44781cb7Dd4BE7EB8',
          minTx: 0.5,
          maxTx: 750000,
          fee: 0
        }
      }
    },
    '20_128': {    
      native: {
        '20': {
          contract: '0x74efe86928abe5bCD191f2e6C85b01861ea1C17d',
          minTx: 0.1, // was 1
          maxTx: 40000, // 40000000000000000000000
          fee: 0.1
        },
        '128': {
          contract: '0x5acCF25F5722A6ed0606C02AA5d8cFe27F346e1B', // token 0xeceefC50f9aAcF0795586Ed90a8b9E24f55Ce3F3
          minTx: 0.1, // was 100,
          maxTx: 750000, // 750000000000000000000000
          fee: 0.1
        }
      }, 
      token: {
        '20': {
          contract: '0x59F65A3913F1FFcE7aB684bd8c24ba3790bD376B',
          minTx: 0.5,
          maxTx: 750000,
          fee: 0
        },
        '128': {
          contract: '0x3394577F74B86b9FD4D6e1D8a66c668bC6188379',
          minTx: 0.5,
          maxTx: 750000,
          fee: 0
        }
      }
    }
}

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/OVVABCJprXhqXWqnVczR_y0sXIvWVW9m',
      accounts: ['d9aab6b064296cddf410cebabcb3aaa08003c7b13b4cfedd27e70e0f73b53279'],
    },
  },
};
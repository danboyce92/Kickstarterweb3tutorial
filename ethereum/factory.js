import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xD73b9Fc4e601e88A3880AD92e1cF0D0AE4928AFF'
);

export default instance;
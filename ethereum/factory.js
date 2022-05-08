import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xCe0561Da3B6A6AF21D0555eE2a24D3EDA76f613c'
);

export default instance;
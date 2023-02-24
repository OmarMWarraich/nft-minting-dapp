export class Contract{
  wallet;

  constructor({wallet}){
    this.wallet = wallet;
  }

  async get_total_tokens(){
    return await this.wallet.viewMethod({ method: 'get_total_tokens' });
  }

  async get_all_tokens(){
    return await this.wallet.viewMethod({ method: 'get_all_tokens' });
  }
}
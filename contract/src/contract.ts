import { NearBindgen, near, call, view, LookupMap, initialize } from 'near-sdk-js';

class Token {
  token_id: number;
  owner_id: string;
  
  constructor(token_id: number, owner_id: string) {
    this.token_id = token_id;
    this.owner_id = owner_id;
  }
}

@NearBindgen({})
class NFTMinting {

  owner_id: string;
  owner_by_id: LookupMap;
  token_id: number;

  constructor() {
    this.owner_id = "";
    this.owner_by_id = new LookupMap("n");
    this.token_id = 0;
  }

  @initialize({})
  init({owner_id, prefix}) {

    this.owner_id = owner_id;
    this.owner_by_id = new LookupMap(prefix);
    this.token_id = 0;
  }

  @call({})
  mint_nft({token_owner_id}) {

    this.owner_by_id.set(this.token_id.toString(), token_owner_id);

    let token = new Token(this.token_id, token_owner_id);

    this.token_id++;

    return token;
  }

}
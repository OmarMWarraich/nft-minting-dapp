import { NearBindgen, near, call, view, LookupMap, initialize } from 'near-sdk-js';

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
}
import { NearBindgen, near, call, view, LookupMap } from 'near-sdk-js';

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
}
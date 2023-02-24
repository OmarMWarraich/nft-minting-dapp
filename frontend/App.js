import 'regenerator-runtime/runtime';
import React from 'react';

import './assets/global.css';

import { SignInPrompt, SignOutButton } from './ui-components';


export default function App({ isSignedIn, contract, wallet }) {
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  const [totalTokens, setTotalTokens] = React.useState(0);

  const [allTokens, setAllTokens] = React.useState([]);

  React.useEffect(() => {
    contract.get_total_tokens()
      .then(setTotalTokens)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false)
      });
  }, []);

  React.useEffect(() => {
    contract.get_all_tokens()
      .then(setAllTokens)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false)
      });
  }, []);


  
  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt greeting={valueFromBlockchain} onClick={() => wallet.signIn()}/>;
  }

  return (
    <>
      <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()}/>
      <main className={uiPleaseWait ? 'please-wait' : ''}>
        <h1>
          NFT Minting Dapp
        </h1>

        <h2>
          Number of Total NFT Tokens Minted: {totalTokens}
        </h2>

        {allTokens.map((token) => {
          return (
            <div key={token.token_id}>
              <h3>
                Token ID: {token.token_id}
              </h3>
              <p>
                Token Owner: {token.owner_id}
              </p>
            </div>
          )
        }
        )}
      </main>
    </>
  );
}

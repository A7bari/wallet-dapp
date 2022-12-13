import './App.css';
import { useWeb3React } from '@web3-react/core';
import ConnectWallet from './components/ConnectWallet';
import { useBalance } from './hooks/useBalance';
import AccountDetails from './components/AccountDetails';

function App() {

  const { account , chainId, active } = useWeb3React();
  const balance = useBalance();

  return (
    <div className="container">
      <div className='app'>
        {active && (
          <AccountDetails chainId={chainId} account={account} balance={balance || "0.0"} />
          )}
          <ConnectWallet />
      </div>
    </div>
  );
}

export default App;

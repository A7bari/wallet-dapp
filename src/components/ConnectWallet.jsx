import { useWeb3React } from "@web3-react/core";
import { injected } from "../helpers/connector";


function ConnectWallet() {

  const {activate, deactivate, active} = useWeb3React();

  const connect = async() => {
    try {
      await activate(injected) ;
    } catch (error) {
      console.log({error})
    }
  }

  const disconnect = async() => {
    try {
      deactivate() ;
    } catch (error) {
      console.log({error})
    }
  }

  return (
    <div className="connect-section">
      {
        active ? (
          <button className="btn btn-secondary" onClick={disconnect}>
            disconnect your wallet 
          </button> 
        ) : (
          <button className="btn bg-prime" onClick={connect}>
            connect your wallet 
          </button>
        )
      }
    </div>
  )
}

export default ConnectWallet
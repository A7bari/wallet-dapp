

const copyTextToClipboard = async(text) => {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}


const AccountDetails = ({chainId, account, balance}) => {

  const handleCopyClick = () => {
    copyTextToClipboard(account)
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='details'>
       <div className={chainId === 1 ? 'network' : 'network warning'}>
        {chainId === 1 ? "connected to Ethereum's Mainnet" : "Please connect to Ethereum's Mainnet"}
      </div>

      <div className='dataSpace account' onClick={handleCopyClick} >
        <h3 className='title'>account</h3> 
        <div className='account-number'>
          { account.slice(0,6) + "..." + account.slice(-6)}
          <span className="copy-icon">
            <img src='./icons/copy.svg' alt="copy account adress" />
          </span>
        </div> 
      </div>
     
      <div className='dataSpace balance'>
        <h5 className='title'>Total balance</h5> 
        { balance } eth
        <img src="./icons/ETH-icon2.png" alt="" className="eth-icon"/>
      </div>
    </div>
  )
}

export default AccountDetails
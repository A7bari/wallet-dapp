import { formatEther } from "@ethersproject/units";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

export const useBalance = () => {
  const { account, library } = useWeb3React();
  const [ balance , setBalance ] = useState();

  useEffect(()=> {
    library?.eth.getBalance(account).then((result)=>{
      setBalance(result)
    })

  }, [ account, library ])

  return  balance ? formatEther(balance) : null ;
}
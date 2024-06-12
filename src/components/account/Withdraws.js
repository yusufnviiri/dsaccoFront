
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getMemberWithdraws} from '../../redux/ApiSlice';
function Withdraws() {
    const dispatch = useDispatch();
    const accounts = useSelector((state)=>state.ApiSlice.accounts)
    const withdraws = useSelector((state)=>state.ApiSlice.withdraws)  
   useEffect(()=>{dispatch(getMemberWithdraws())})

  return (
<>   
<h4 className=" my-4 font-bold   underline-offset-2 underline 
 text-center font-poppins ">Number of accounts {accounts.length}
</h4>

 <div>Member Withdraws</div>

 {withdraws.length>0? withdraws.map((item)=>(<div key={item.withdrawId
} className='flex   flex-col justify-start my-5 text-left w-1/2 m-auto '>
    <p className='font-semibold'>Account : <span className='font-bold'>{item.account.accountDescription}</span></p>
    <p className='font-semibold'>Available Balance: <span className='font-bold'>{item.account.currentBalance}</span></p>       <p className='font-semibold'>Amount: <span className='font-bold'>{item.amount
    }</span></p>
    <p className='font-semibold'>Withdraw Date: <span className='font-bold'>{item.depositDate}</span></p>
 </div>)):(<p>No account in database</p>)}

</>  )
}
export default Withdraws
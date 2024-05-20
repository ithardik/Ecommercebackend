const Razorpay =require('razorpay')
require('dotenv').config()

const instance=new Razorpay({
  key_id:process.env.RAZORPAY_API_KEY,
  key_secret:process.env.RAZORPAY_API_SECRET,
})
 
const checkout= async(req,res)=>{


const options = {
  amount:Number(req.body.amount*100), 
  currency: "INR",
};
const order=await instance.orders.create(options)
console.log(order)
res.status(200).json({
    success:true,
    order,
})
}



module.exports=checkout


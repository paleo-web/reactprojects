import './App.css'
import {useEffect, useState } from "react"


function App() {

// const [userDetail ,setUserDetail] = useState(
//   {
//     name : '',
//     email: ""
//   }
// )


// let [userInfo, setUserInfo] = useState([])
// let [getInfo, setGetInfo] = useState([])
// // async function fetchData  (){
// //   let data = await JSON.parse(localStorage.getItem("userInfo"))
// //   // console.log(data)
// //   setUserInfo(
// //         [...userInfo , data]
// //       )
// // }
// useEffect(() => {
// // fetchData()

//   let data = JSON.parse(localStorage.getItem("userInfo"))
//   if(data){
//     setGetInfo(data)
//   }
// console.log("data inside useEffect==>",getInfo)
// }, [])
// const handleSubmit = (e)=>{
// e.preventDefault()
//   setUserInfo([...userInfo, userDetail])
  
//   setUserDetail({
//     name : '',
//     email: ""
//   })
//   localStorage.setItem("userInfo", JSON.stringify([...userInfo, userDetail]))
  

// }
const [userInfo, setUserInfo] = useState([]);
  const [userDetail, setUserDetail] = useState({ name: '', email: '' });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo")) || [];
    setUserInfo(data);
    console.log(data)
    console.log(userInfo)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserInfo((prevUserInfo) => {
      const updatedUserInfo = [...prevUserInfo, userDetail];
      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
      console.log("call back",prevUserInfo)
      return updatedUserInfo;
    });

    setUserDetail({
      name: '',
      email: ""
    });
  };


  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder='name' onChange={(e)=>setUserDetail({...userDetail, name: e.target.value})} value={userDetail.name}/>
      <br />
      <input type="text" placeholder='email' onChange={(e)=>setUserDetail({...userDetail, email: e.target.value})} value={userDetail.email}/>
      <br />
      <button className='mt-5 px-5 rounded-md bg-slate-600 text-white'>Sumbit</button>
    </form>
    <hr/>
    <ul>
      {
        
        userInfo.length > 0 ? userInfo.map((info, id)=><div key={id}>
        <li>{info.name}</li>
        <li>{info.email}</li>
        </div>) : <li><img src='/public/download.png'/></li>
      }
    </ul>
    </>
  )
  }

export default App

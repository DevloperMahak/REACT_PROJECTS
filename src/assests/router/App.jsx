import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Createpost from '../components/Createpost';
import Footer from '../components/Footer';
import Post from '../components/Post';
import Postlist from '../components/Postlist';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import { useState } from 'react';
import Postlistprovider from '../store/Post-list-store';
import {Outlet} from "react-router-dom";

function App() {
  const [selectedtab,setselectedtab]=useState("Home");
  return (
  <Postlistprovider>
  <div className='app-container'>
 <Sidebar selectedtab={selectedtab} setselectedtab={setselectedtab}></Sidebar>
 <div className='content'>
 <Header></Header>
 <Outlet></Outlet>
 <Footer></Footer>
 </div>
 </div>
 </Postlistprovider>);
}

export default App;

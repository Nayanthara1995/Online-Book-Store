import React from 'react';
import './App.css';

import Login from './component/login/login';
import SideNav from './component/customer/sideNavbar/sidenavbar';
import NavBar from './component/navigation/navbar';
import StorePurchased from './component/bookstore/store_purchased';
import AdminNavbar from './component/Admin/Admin Navbar/adminNavbar';
import AdminSidenav from './component/Admin/Admin SideNavbar/adminSidenav';
import BookStores from './component/Admin/BookStores/bookstores';
import { matchPath } from 'react-router-dom';
import ViewCustomer from "./component/Admin/View Customer/viewcustomer";
import FrontView from "./component/bookstore/frontview";
import Home from "./component/Home/home";
import CustomerBook from "./component/Admin/View Customer/customerbook";
import viewcustomer from './component/Admin/View Customer/viewcustomer';
import BookCard from './component/bookstore/bookcard';
import BookStoreNav from './component/bookstore/bookstorenav';
import StoreSidenavbar from './component/bookstore/storesidenavbar';
import ViewBooks from './component/bookstore/viewbooks';
import Cart from './component/customer/cart';
import CartItem from './component/customer/cartitem';
import CartPrice from './component/customer/cartprice';
import CustomerNav from './component/customer/customernav';
import History from './component/customer/history';
import HistoryCard from './component/customer/historycard';
import PayCard from './component/customer/paycard';
import ViewBook from './component/customer/viewbook';
import ViewCard from './component/customer/viewcard';
import BookStoreRegistration from './component/registration/bookstore';
import CustomerRegistration from './component/registration/customer';
import Search from './component/Search/search';
import BookstoreLogin from './component/login/bookstorelogin';
import CustomerFrontview from './component/customer/customerfrontview';
import BookstoreList from './component/customer/bookstorelist';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookStoreLogin from './component/login/bookstorelogin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customerL" exact component={Login}/>
          <Route path="/bookstoreL" exact component={BookstoreLogin}/>
          <Route path="/bookstoreReg" exact component={BookStoreRegistration}/>
          <Route path="/customerReg" exact component={CustomerRegistration}/>
          <Route path="/cusHomePage" exact component={CustomerFrontview}/>
          <Route path="/booklist" exact component={BookstoreList}/>
          <Route path="/bookHistory" exact component={History}/>
          <Route path="/frontView" exact component={FrontView}/>
          <Route path="/books" exact component={ViewBooks}/>
          <Route path="/purchase" exact component={StorePurchased}/>
        </Switch>
      </BrowserRouter>
      
      {/* <SideNav/> */}
      {/* <NavBar/> */}
      {/* <StorePurchased/> */}
      {/* <AdminNavbar/> */}
      {/* <AdminSidenav/> */}
      {/* <BookStores/> */}
      {/* <ViewCustomer/> */}
      {/* <FrontView/> */}
      {/* <Home/> */}
      {/* <CustomerBook/> */}
      {/* <BookCard/> */}
      {/* <BookStoreNav/> */}
      {/* <StoreSidenavbar/> */}
      {/* <ViewBooks/> */}
      {/* <Cart/> */}
      {/* <CartItem/> */}
      {/* <CartPrice/> */}
      {/* <CustomerNav/> */}
      {/* <CustomerFrontview/> */}
      {/* <History/> */}
      {/* <HistoryCard/> */}
      {/* <PayCard/> */}
      {/* <ViewBook/> */}
      {/* <ViewCard/> */}
      {/* <BookStore/> */}
      {/* <Customer/> */}
      {/* <Search/> */}
      {/* <BookstoreList/> */}
    </div>
  );

}


export default App;

import Neet from "./neet/Neet";
import Body from "./component/Body";
import { Route, BrowserRouter, Routes, } from "react-router-dom";

import UP from "./downloads/UP";
import Panjab from "./downloads/Panjab";
import Delhi from "./downloads/Delhi";
import Himachal from "./downloads/Himachal";
import Chandigarh from "./downloads/Chandigarh";
import Bihar from './downloads/Bihar'
import Rajasthan from './downloads/Rajasthan'
import WestBengal from './downloads/WestBengal'
import Odisha from './downloads/Odisha'
import Gujrat from './downloads/Gujarat'
import Uttarakhand from './downloads/Uttarakhand'
import Maharashtra from './downloads/Maharashtra'
import Haryana from './downloads/Haryana'
import Telangana from './downloads/Telangana'
import MP from './downloads/MP'

import Login from "./component/Login";
import ForgotPassword from "./component/ForgotPassword";
import Register from "./component/Register";
import PasswordReset from "./component/PasswordReset";
import Form from "./component/Form";

import Chemistry from "./neet/Chemistry";
import Biology from "./neet/Biology";
import Physics from "./neet/Physics";
import Result from "./neet/Result";
import ResultBio from "./neet/ResultBio";
import ResultPhy from "./neet/ResultPhy";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* ===================  NEET component routers ==================================== */}

          <Route path='/neet' element={<Neet />} ></Route>
          <Route path='/chem' element={<Chemistry />} ></Route>
          <Route path='/bio' element={<Biology />} ></Route>
          <Route path='/phy' element={<Physics />} ></Route>
          <Route path='/result' element={<Result />} ></Route>
          <Route path='/bioresult' element={<ResultBio />} ></Route>
          <Route path='/phyresult' element={<ResultPhy />} ></Route>

          {/* ====================== Main page routers ===================== */}

          <Route path='/' element={<Body />} ></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/form' element={<Form />} ></Route>
          <Route path='/signup' element={<Register />} ></Route>
          <Route path='/password-reset' element={<PasswordReset />}> </Route>
          <Route path='/forgotpassword/:id/:token' element={<ForgotPassword />}></Route>


          {/* ========================== cards routers =============================== */}

          <Route path='/UtterPradesh' element={<UP />} ></Route>
          <Route path='/Panjab' element={<Panjab />} ></Route>
          <Route path='/Delhi' element={<Delhi />} ></Route>
          <Route path='/HimanchalPradesh' element={<Himachal />} ></Route>
          <Route path='/Chandigarh' element={<Chandigarh />} ></Route>

          <Route path='/MadhyaPradesh' element={<MP />} ></Route>
          <Route path='/Odisha' element={<Odisha />} ></Route>
          <Route path='/WestBengal' element={<WestBengal />} ></Route>
          <Route path='/Rajasthan' element={<Rajasthan />} ></Route>
          <Route path='/Bihar' element={<Bihar />} ></Route>

          <Route path='/Telangana' element={<Telangana />} ></Route>
          <Route path='/Haryana' element={<Haryana />} ></Route>
          <Route path='/Maharashtra' element={<Maharashtra />} ></Route>
          <Route path='/Uttarakhand' element={<Uttarakhand />} ></Route>
          <Route path='/Bihar' element={<Bihar />} ></Route>
          <Route path='/Gujrat' element={<Gujrat />} ></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

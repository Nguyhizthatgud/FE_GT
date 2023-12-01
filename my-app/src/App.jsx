import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Headbar from './components/Headbar'
import Controler from './components/Controler'
function App() {
  return (
    <div className='container-fluid overflow-hidden'>

      <div className="row gy-auto">

        <div className="bg-body-tertiary col-lg-auto col-sm-1 d-flex flex-column justify-content-between  min-vh-100 border border-right p-0">
          <Container className=''>
            <Navbar.Brand href="#home" className="d-flex justify-content-center mt-3">
              <img
                alt="logo"
                src="logo1.png"
                width="40"

              />{' '}
            </Navbar.Brand>
            <hr />
            <ul className='nav nav-pills flex-column flex-column-shrink-0'>
              <li className='nav-item'>
                <a href="#control" className='nav-link d-flex justify-content-center active' aria-current='page'><i className="bi fa-3x bi-house"></i></a>
              </li>
              <li className='nav-item'>
                <a href="#control" className='nav-link d-flex justify-content-center ' aria-current='page'><i className="bi fa-3x bi-speedometer2"></i></a>
              </li>
              <li className='nav-item'>
                <a href="#control" className='nav-link d-flex justify-content-center ' aria-current='page'><i className="bi fa-3x bi-table"></i></a>
              </li>
              <li className='nav-item'>
                <a href="#control" className='nav-link  d-flex justify-content-center' aria-current='page'><i className="bi fa-3x bi-database"></i></a>
              </li>
              <li className='nav-item'>
                <a href="#control" className='nav-link d-flex justify-content-center' aria-current='page'><i className="bi fa-3x bi-circle-half"></i></a>
              </li>
            </ul>



          </Container>
          <div class="dropdown open d-flex flex-shrink-0 mb-3 mx-auto">
            <a class="text-decoration-none dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              <i class="bi fa-5x bi-person-circle"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <a class="dropdown-item" href="#">New project...</a>
              <a class="dropdown-item " href="#">Settings</a>
              <a class="dropdown-item" href="#">Profile</a>
              <a class="dropdown-item border-top text-warning" href="#">Sign out</a>
            </div>
          </div>
        </div>
        <div className=" col-md-2 col-lg-3 col-ms-1  d-flex flex-column flex-nowrap bg-body-secondary bg-gradient border-end" >
          <h2 className='filer-listname h3 p-0 mt-lg-4 mt-md-3 mb-1 fw-semibold'>Bảng <span className='text-primary'>điều khiển</span></h2>
          <div className='filer-list d-flex flex-column' >
            <div className="search-filerbox g-4 pt-5 d-flex flex-column">
              <div className="devices">
                <div className="devices-box d-flex justify-content-between">
                  <i class="bi bi-box p-2 "><span className='p-2 text-primary fs-md-4 fs-ms-2'>Thiết bị</span></i>
                  <i className="bi bi-search p-2" role='button'></i></div>
                <div className=' fs-lg-5 fs-ms-3'>Số lượng thiết bị <p></p></div>
                <div className='fs-lg-5 fs-ms-3'>Tổng cộng <p></p></div>
              </div>
            </div>
            <div className="search-filerbox g-4 pt-1 d-flex flex-column">
              <div className="devices">
                <div className="devices-box d-flex justify-content-between">
                  <i class="bi bi-geo p-2 "><span className='p-2 text-primary'>Vị trí</span></i>
                  <i className="bi bi-search p-2" role='button'></i></div>
                <div className='fs-6 p-1'>Vị trí thiết bị <p></p></div>
                <div className='fs-6 p-1'>Tổng cộng <p></p></div>
              </div>
            </div>
            <div className="search-filerbox g-4 pt-1 d-flex flex-column">
              <div className="devices">
                <div className="devices-box d-flex justify-content-between">
                  <i class="bi bi-person-badge p-2 "><span className='p-2 text-primary'>Người dùng</span></i>
                  <i className="bi bi-search p-2" role='button'></i></div>
                <div className='fs-6 p-1'>Tên người dùng<p></p></div>
                <div className='fs-6 p-1'>Trạng thái <p></p></div>
                <div className='fs-6 p-1'>Vai Trò <p></p></div>
              </div>
            </div>
          </div>

        </div>
        <div className="head-bar col">
          <Headbar />
        </div>
      </div>
    </div >



  );
}

export default App;

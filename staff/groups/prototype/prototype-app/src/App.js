import React, { Component } from 'react'

import './App.css'
class App extends Component {

  render() {
    return <div>
      <div className='movie-profile card container-fluid'>
        <img className='backdrop card-img container' src='https://dummyimage.com/780x439/b3b1b3/fff.png'></img>
        <div className='movie-profile__card card-img-overlay media'>
          <img className='card__poster mr-5' src='https://dummyimage.com/342x513/ebceeb/fff.png'></img>
          <div className='card__info media-body mt-5'>
            <h3 className='cardtitle mt-5 ml-4'>Title</h3>
            <ul className='cardtext ml-4'>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='container'>
              <div className='row-4' />
              <div className='row'>
                <div>
                  <a>hhhaa</a>
                </div>
              </div>
            </div>
          </div>
          <div className='sinopsis col d-flex flex-row justify-content-start mt-3 ml-5'>
            <div>
              <h3 className='sinopsis-title mr-5'>Sinopsis</h3>
              <p className='sinopsis-text mr-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quia excepturi impedit consequuntur, sunt quas delectus expedita cupiditate alias eaque nostrum dolore nulla maiores molestias quo ipsum accusamus, ducimus libero!</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'></div>
          <div className='cast col d-flex flex-row justify-content-start mt-3 ml-5'>
            <div>
              <h3 className='cast-title mr-5'>Cast</h3>
              <ul className='cast-text mr-5 text-justify'>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
  // <div class="container">
  // <div class="row">
  //   <div class="col">Column</div>
  //   <div class="w-100"></div>
  //   <div class="col">Column</div>
  // </div>
  //   return <div>
  //     <div className='movie-profile card bg-dark text-white container-fluid'>
  //       <img className='backdrop card-img container' src='https://dummyimage.com/780x439/b3b1b3/fff.png'></img>
  //       <div className='movie-profile__card card-img-overlay container'>
  //         <div className="row">
  //           <div className='card__poster col-sm'>
  //             <img src='https://dummyimage.com/342x513/ebceeb/fff.png'></img>
  //           </div>
  //           <div className='card__info col-sm'>
  //             <h3 className='cardtitle'>Title</h3>
  //             <p className='cardtext'>Lorem ipsum......</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // }
}

export default App

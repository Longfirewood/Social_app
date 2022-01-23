import React from 'react';
import store from '../../redux/redux-store';
import CarouselComponent from '../CarouselComponent/CarouselComponent';
import ToastComponent from '../Toast/Toast';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import c from './Profile.module.css'


const Profile = () => {


  return <div className='content'>

    {/* <div className={c.main_photo}>
      <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
    </div> */}
    <div>
      <CarouselComponent />
    </div>
    <MyPostsContainer />
  </div>
}

export default Profile;
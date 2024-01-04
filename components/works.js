import React, { useState } from 'react'

export default function Works({ clientH }) {
  return (
    <>
      <div className="works">
        <div className="box">
          <h2>Works.</h2>{' '}
          <div className="clipBox">
            <div className="work1">
              <video
                className="demo1"
                src="食食嗑嗑-嗑零食.mp4"
                muted
                loop
                autoPlay
              ></video>
              <div className="desc1">
                <div className="btnMoreShadow">
                  <div className="btnMore ">
                    {' '}
                    <a
                      href="https://github.com/CChloeCC?tab=repositories"
                      className=""
                    >
                      more
                    </a>
                  </div>
                </div>
                <h3>食食嗑嗑食記共享平台</h3>
                <p>
                  next.js為前端、node.js為後端，並結合Bootstrap框架及MySQL的食記共享平台
                  <br />
                  <br />
                  主要負責內容(商城)如下﹔
                  <br /> 1.商城、商品頁切版、使用者收藏(RWD) 商品搜尋，動態篩選
                  <br /> 2.使用者願望清單管理、新增購物車商品
                  <br />
                  3.MySQL資料庫設計
                  <br /> 4.商城後端API串接
                  <br /> 5.WebSocket功能
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .works {
          height: ${clientH}px;
          background-color: #f1f1f1;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 2;
          
        }
        .works::after{
          content: "";
          position:absolute;
          bottom:15px;
          right:-5px;
          width:85%;
         height:18px;
         filter: drop-shadow(-3px 5px 3px rgba(0, 0, 0, 0.25));
         border-radius:3px 0 0 3px;
          background-color: #c7bcae;
          // border-bottom: #c7bcae 12px outset ;
        }
        .box {
          width:100%;
          height: 70%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .box h2{
          position: absolute;
          top: -8%;
          margin:-30px;
          left: 10%;
          font-family: 'Belanosima', sans-serif;
          font-size: 60px;
          font-weight: bold;
          color:#606f69;
        }
        .clipBox {
          position: relative;
          height: 400px;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .work1 {
          height: 800px;
          position: absolute;
          top: 0px;

          display: flex;
          flex-direction: column;

          transition: all 0.5s ease-out;
        }
        .work1:hover {
          top: -401px;
        }
        .demo1 {
          height: 400px;
          transition: all 0.5s ease-out;
        }
        .demo1:hover {
          opacity: 0;
        }
        .desc1 {
          height: 400px;
          width: 100%;
          font-family: 'Belanosima', sans-serif;
          position: relative;
        }
        .desc1 h3{
        font-weight:bold;
        display: inline-block;
        position: absolute;
        top:35px;
        left:230px;
        }
        .desc1 p{
          padding:50px;
          
          font:
            bold 16px/30px 'Belanosima',
            sans-serif;
}

        .btnMore {
          border: 4px solid #666666;
          width: 155px;
          height:50px;
          padding: 10px 20px;
          font-size: 18px;
          top: -8px;
          left: -9px;
          position: absolute;
          transition: all 0.2s ease-out;
        }
        .btnMore a {
          font:normal 30px/0.6 'Chewy';
          color: #f1f1f1;
          text-decoration:none;
          text-align: center;
          display: inline-block;
          width:100%;
          transition:all 0.2s ease-out;
          animation: bounce .5s cubic-bezier(.5,0.05,1,.5) infinite alternate;
        }
        .btnMore:hover {
          top: 0px;
          left: 0px;
        }
        .btnMoreShadow {
          width: 155px;
          height: 50px;
          background-color: #d0946e;
          margin: 5% 0 0 5%;
          position: relative;
          display: inline-block;
        }

        @keyframes bounce {
          from {
            margin-top: 0px;
          }
          to {
            margin-top: 5px;
          }
        }


        @media screen and (max-width: 576px) {
          .works {
            height: ${clientH - 50}px;}
          .clipBox,
          .demo1,
          .desc1 {
            height: 250px;
          }
          .box h2{
            font-size: 50px;
            top: 0;  top: 0;
          }

          .desc1 h3{
            position: static;
            padding:10px 0 0 20px;
          }
          .work1 {
            height: 500px;
          }
          .work1:hover {
            top: -251px;
          
        }
      `}</style>
    </>
  )
}

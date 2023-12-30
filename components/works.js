import React, { useState } from 'react'

export default function Works({ clientH }) {
  return (
    <>
      <div className="works">
        <h3>works</h3>
        <div className="box">
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
          justify-content: center;
          border-bottom: 4px solid #666666;
          position: relative;
          z-index: 2;
        }
        .box {
          height: 60%;
          margin-top: ${clientH * 0.2}px;
          // background-color: seagreen;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .clipBox {
          position: relative;
          height: 450px;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .work1 {
          height: 900px;
          position: absolute;
          top: 0px;

          transition: all 0.5s ease-out;
        }
        .work1:hover {
          top: -451px;
        }
        .demo1 {
          height: 450px;
          transition: all 0.5s ease-out;
        }
        .demo1:hover {
          opacity: 0;
        }
        .desc1 {
          height: 450px;
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


        @media screen and (max-width: 992px) {
          .clipBox,
          .demo1,
          .desc1 {
            height: 400px;
          }

          .work1 {
            height: 800px;
          }
          .work1:hover {
            top: -401px;
          
        }
        
        @media screen and (max-width: 576px) {
          .clipBox,
          .demo1,
          .desc1 {
            height: 250px;
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

  //   const [show, setShow] = useState('demo1')
  //   console.log(show)
  //   return (
  //     <>
  //       <div className="works">
  //         {show === 'demo1' ? (
  //           <div className="box">
  //             <h4 className="title">標題</h4>
  //             <p className="desc">
  //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
  //               molestiae illum neque excepturi amet voluptatum eos quibusdam
  //               sapiente facere? Nisi voluptate magnam necessitatibus molestias
  //               cum ex ut. Magnam, aliquam tempore?
  //             </p>
  //             <div className="imgBox">
  //               <button
  //                 onClick={() => {
  //                   setShow('demo1')
  //                 }}
  //               >
  //                 ＜
  //               </button>
  //               <div className="imgs">111</div>
  //               <button
  //                 onClick={() => {
  //                   setShow('demo2')
  //                 }}
  //               >
  //                 ＞
  //               </button>
  //             </div>
  //           </div>
  //         ) : (
  //           <div className="box">
  //             <h4 className="title">標題</h4>
  //             <p className="desc">
  //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
  //               molestiae illum neque excepturi amet voluptatum eos quibusdam
  //               sapiente facere? Nisi voluptate magnam necessitatibus molestias
  //               cum ex ut. Magnam, aliquam tempore?
  //             </p>
  //             <div className="imgBox">
  //               <button
  //                 onClick={() => {
  //                   setShow('demo1')
  //                 }}
  //               >
  //                 ＜
  //               </button>
  //               <div className="imgs">222</div>
  //               <button
  //                 onClick={() => {
  //                   setShow('demo2')
  //                 }}
  //               >
  //                 ＞
  //               </button>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //       <style jsx>{`
  //         .works {
  //           height: ${clientH}px;
  //           background-color: salmon;
  //           display: flex;
  //           justify-content: center;
  //         }
  //         .box {
  //           height: 70%;
  //           width: 60%;
  //           margin: ${0.15 * clientH}px auto;
  //           background-color: seagreen;
  //           display: flex;
  //           flex-direction: column;
  //           justify-content: center;
  //         }
  //         .title {
  //           background-color: sandybrown;
  //           font-weight: bold;
  //         }
  //         .imgBox {
  //           width: 100%;
  //           height: 25%;
  //           margin-top: 20%;
  //           background-color: seashell;
  //           display: flex;
  //           justify-content: center;
  //           align-items: center;
  //         }
  //         .imgBox button {
  //           width: 2.5rem;
  //           height: 2.5rem;
  //           border-radius: 50px;
  //         }
  //         .imgBox button:first-of-type {
  //           visibility: ${show === 'demo1' ? 'hidden' : 'visible'};
  //         }
  //         .imgBox button:last-of-type {
  //           visibility: ${show === 'demo2' ? 'hidden' : 'visible'};
  //         }
  //         .imgs {
  //           width: 60%;
  //           background-color: sandybrown;
  //           height: 90%;
  //         }
  //       `}</style>
  //     </>
  //   )
}

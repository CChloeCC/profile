import React, { useEffect, useState } from 'react'

export default function LittleProjects({ clientH }) {
  const [showProject, setShowProject] = useState([1, 2])
  // console.log(showProject)
  const [clientW, setClientW] = useState(0)

  const projectData = [
    {
      img: 'little-project1.jpg',
      link: 'https://little-projects.vercel.app/',
      title: '60s Challenge',
      content: '以Next.js開發的計時算術遊戲',
    },
    {
      img: 'little-project2.jpg',
      link: 'https://little-projects.vercel.app/',
      title: 'AQI Index',
      content: '以Next.js開發，空氣品質指標(AQI)查詢工具，資料環境部提供、更新',
    },
    {
      img: 'little-project3.jpg',
      link: 'https://little-projects.vercel.app/',
      title: 'Drawing-Board',
      content: '以Next.js開發，包含步驟控制、清除、儲存等功能的畫板',
    },
    {
      img: 'little-project5.jpg',
      link: 'https://calculator-drab-xi.vercel.app/',
      title: 'Calculator',
      content: '以純JavaScript開發的計算機工具',
    },
  ]

  useEffect(() => {
    if (window) {
      setClientW(window.innerWidth)
    }
    const handleResize = () => {
      const clientWidth = window.innerWidth
      if (clientWidth > 1280) {
        setShowProject([1, 2])
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [clientW])

  return (
    <>
      <div className="littleProjects">
        <div className="box">
          <h2>Little projects.</h2>
          <div className="clipBox">
            <button
              className="btnLeft icon-arrow-up-circle"
              onClick={() => {
                if (showProject[0] > 1) {
                  const newShowProject = [...showProject].map((v) => v - 1)

                  setShowProject(newShowProject)
                }
              }}
            ></button>
            <button
              className="btnRight icon-arrow-up-circle"
              onClick={() => {
                if (showProject[1] < 4) {
                  const newShowProject = [...showProject].map((v) => v + 1)
                  setShowProject(newShowProject)
                }
                if (showProject[1] === 4 && window?.innerWidth < 1279) {
                  const newShowProject = [...showProject].map((v) => v + 1)
                  setShowProject(newShowProject)
                }
              }}
            ></button>

            <div className="work1">
              <div className="pic">
                <img
                  src={
                    showProject[0] === 1
                      ? projectData[0].img
                      : showProject[0] === 2
                      ? projectData[1].img
                      : showProject[0] === 3
                      ? projectData[2].img
                      : showProject[0] === 4
                      ? projectData[3].img
                      : ''
                  }
                  alt=""
                />
              </div>

              <div className="desc">
                <div className="btnMoreShadow">
                  <div className="btnMore ">
                    {' '}
                    <a
                      href={
                        showProject[0] === 1 ||
                        showProject[0] === 2 ||
                        showProject[0] === 3
                          ? projectData[0].link
                          : projectData[3].link
                      }
                      className=""
                    >
                      more
                    </a>
                  </div>
                </div>
                <h3>
                  {showProject[0] === 1
                    ? projectData[0].title
                    : showProject[0] === 2
                    ? projectData[1].title
                    : showProject[0] === 3
                    ? projectData[2].title
                    : showProject[0] === 4
                    ? projectData[3].title
                    : ''}
                </h3>
                <p>
                  {showProject[0] === 1
                    ? projectData[0].content
                    : showProject[0] === 2
                    ? projectData[1].content
                    : showProject[0] === 3
                    ? projectData[2].content
                    : showProject[0] === 4
                    ? projectData[3].content
                    : ''}
                </p>
              </div>
            </div>
            <div className="work2">
              <div className="pic">
                <img
                  src={
                    showProject[1] === 2
                      ? projectData[1].img
                      : showProject[1] === 3
                      ? projectData[2].img
                      : showProject[1] === 4
                      ? projectData[3].img
                      : ''
                  }
                  alt=""
                />
              </div>

              <div className="desc">
                <div className="btnMoreShadow">
                  <div className="btnMore ">
                    <a
                      href={
                        showProject[1] === 2 || showProject[1] === 3
                          ? projectData[0].link
                          : projectData[3].link
                      }
                      className=""
                    >
                      more
                    </a>
                  </div>
                </div>
                <h3>
                  {showProject[1] === 2
                    ? projectData[1].title
                    : showProject[1] === 3
                    ? projectData[2].title
                    : showProject[1] === 4
                    ? projectData[3].title
                    : ''}
                </h3>
                <p>
                  {showProject[1] === 2
                    ? projectData[1].content
                    : showProject[1] === 3
                    ? projectData[2].content
                    : showProject[1] === 4
                    ? projectData[3].content
                    : ''}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .littleProjects {
          height: ${clientH}px;
          background-color: #f1f1f1;
          display: flex;
          align-items: center;
          border-bottom: 4px solid #666666;
          position: relative;
          z-index: 2;
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
          height: 350px;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btnLeft,.btnRight{
          position: absolute;
          margin-top:20px;
          width: 40px;
          height: 40px;
          background-color: #c7bcae;
          text-align: center;
          line-height: 40px;
          border-radius: 50px;
          z-index: 3;
        }
        .btnLeft,.btnRight{
          left: 1%;
          color:#666666;
          font-size:40px;
          background-color: #f1f1f1;
          border:none;
          transform:rotate(-90deg);
        }
        
        .btnRight{
          left:auto;
          right:1% ;
          transform:rotate(90deg);
        }
        .work1,.work2 {
          height: 700px;
          width:30%;
          position: absolute;
          top: 0px;
          
          display: flex;
          flex-direction: column;
          
          transition: all 0.5s ease-out;
        }
        .work1{
          left:15%;
        }
        .work2{
          right:15%;
        }
        .work1:hover,.work2:hover {
          top: -351px;
        }
        .pic{
          height:350px;
        }
        .pic img{
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .desc {
          height: 350px;
          width: 100%;
          font-family: 'Belanosima', sans-serif;
          position: relative;
        }
        .desc h3{
        font-weight:bold;
        padding:30px 0 0 20px;

        }
        .desc p{
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

        @media screen and (max-width: 1280px) {
          .clipBox,
          .pic,
          .desc {
            height: 400px;
          }

          .work1 {
            width:520px;
            height: 800px;
            left:auto;
          }
          .work1:hover {
            top: -401px;
        }
        .work2{
          right:-500px;
        }
        
        @media screen and (max-width: 576px) {
          .littleProjects {
            height: ${clientH - 50}px;}
          .clipBox,
          .pic,
          .desc {
            height: 250px;
          }
          
          .box h2{
            font-size: 50px;
            top: 0;
          }
          .desc h3{
            position: static;
            padding:10px 0 0 20px;
          }
          .work1 {
            height: 500px;
            width:420px;
          }
          .work1:hover {
            top: -251px;
          
        }
      `}</style>
    </>
  )
}

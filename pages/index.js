import About from '@/components/about'
import Works from '@/components/works'
import { useState, useEffect } from 'react'

export default function Index() {
  const [windowheight, setWindowHeight] = useState(0)

  const [clientH, setclientH] = useState(960)

  const [view, setView] = useState('frontPage')

  useEffect(() => {
    if (window) {
      setclientH(window.innerHeight)
    }

    const handleResize = () => {
      setclientH(window.innerHeight)
    }

    const handleScroll = () => {
      setWindowHeight(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    // 記得在組件卸載時解除事件監聽
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [clientH, view, windowheight]) // 空的依賴陣列確保只有在組件掛載和卸載時才會設定和解除事件監聽,不然每一次進來會多一個監聽器
  return (
    <>
      <div
        className="home"
        style={{
          height: `${clientH}px`,
        }}
      >
        <section className="container">
          <div
            className={
              'navbar ' +
              (windowheight == 0 &&
              typeof window !== 'undefined' &&
              window?.innerWidth > 1024
                ? 'navbarTop'
                : '')
            }
          >
            <p className="icon-menu"></p>
            <button
              onClick={() => {
                window?.scrollTo(0, 0)
              }}
            >
              Home
            </button>
            <button
              onClick={() => {
                window?.scrollTo(
                  0,
                  window?.innerWidth > 576 ? clientH : clientH - 50,
                )
              }}
            >
              About
            </button>

            <button
              onClick={() => {
                window?.scrollTo(
                  0,
                  window?.innerWidth > 576 ? clientH * 2 : clientH * 2 - 100,
                )
              }}
            >
              Works
            </button>
            <button
              onClick={() => {
                window?.scrollTo(
                  0,
                  window?.innerWidth > 576 ? clientH * 3 : clientH * 3 - 150,
                )
              }}
            >
              Contact
            </button>
          </div>
          <div className="pic">
            <img src="/g1.png" />
          </div>
          <p className="name">
            Hello,
            <br /> <span>my name is..</span>
          </p>{' '}
        </section>
      </div>
      <About clientH={clientH} />
      <Works clientH={clientH} />

      <footer>
        <button
          className="icon-arrow-up-circle up"
          onClick={() => {
            window.scroll(0, 0)
          }}
        ></button>
        <div className="box">
          <div>
            <p className="myIcon icon-phone1 "></p> 0955-780-945
          </div>
          <div>
            <p className="icon-send myIcon"></p> ischloe11854@gmail.com
          </div>
          <div>
            <p className="icon-github1 myIcon"></p>{' '}
            https://github.com/CChloeCC?tab=repositories
          </div>
          <img src="footer.jpg"></img>
          <h1>Hey there !</h1>
        </div>
      </footer>
      <style jsx>
        {`
          .container {
            padding-top: 120px;
            position: relative;
            display: flex;
            flex-direction: row-reverse;
          }
          .home {
            background-color: #f1f1f1;
            background-image: url(background.jpg);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: left 5% bottom;
            width: 100%;
            transition: all 0.3s ease-in;
            position: relative;
            z-index: 3;
          }
          .name {
            color: #606f69;
            font-size: 100px;
            line-height: 1;
            font-family: 'Belanosima', sans-serif;
            margin-top: 180px;
            font-weight: bold;
          }
          .name span {
            font-weight: normal;
            padding-left: 140px;
            font-size: 72px;
          }
          .pic {
            width: 40%;
            overflow: hidden;
          }
          .pic img {
            width: 100%;
          }
          .navbar {
            // box-shadow: 7px 8px 11px 0px rgba(239, 238, 235, 0.6) inset;
            // filter: drop-shadow(4px 4px 5.1px rgba(0, 0, 0, 0.25));

            // background-color: #c7bcae;
            // border-radius: 40px;
            width: 65px;
            height: 65px;

            overflow: hidden;
            position: fixed;
            right: 50px;
            top: 50px;
            transition: all 0.4s ease-out;
          }
          .navbar p {
            height: 100%;
            width: 65px;
            font-size: 30px;
            font-weight: bold;
            color: ${windowheight >= clientH * 3 ? '#f1f1f1' : '#666666'};
            margin: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar button {
            color: ${windowheight >= clientH * 3 ? '#f1f1f1' : '#666666'};
            font-size: 22px;
            font-family: Belanosima, sans-serif;
            text-decoration: none;
            border: none;
            background-color: transparent;
          }

          .navbar:hover,
          .navbarTop {
            width: 450px;
            height: 65px;
            border-radius: 40px;
            position: fixed;
            right: 50px;
            top: 50px;
            display: flex;
            align-items: center;
            justify-content: space-around;
          }
          // .transparent {
          //   height: ${clientH}px;
          //   background-color: transparent;
          // }
          footer {
            height: ${clientH}px;
            background-color: #606f69;
            font:
              normal 26px 'Belanosima',
              sans-serif;
            width: 100%;
            position: sticky;

            bottom: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
          }
          footer .box {
            background-color: #f0f0f0;
            box-shadow: 6px 6px 12px 0px rgba(109, 109, 109, 0.78) inset;
            color: #606f69;
            width: 60%;
            height: 60%;
            position: relative;
            border-radius: 20px;
            padding: 60px;
            word-wrap: break-word;
          }

          footer img {
            width: 45%;
            position: absolute;
            right: 10px;
            bottom: 10px;
          }
          footer h1 {
            position: absolute;
            left: 30px;
            bottom: -40px;
            font-weight: 600;
            font-size: 70px;
            color: #c7bcae;
          }
          footer div {
            font-weight: 600;
            font-size: 20px;
          }
          .myIcon {
            display: inline-block;
            width: 32px;
            height: 32px;
            border-radius: 50px;
            text-align: center;
            line-height: 32px;
            background-color: #606f69;
            color: #f1f1f1;
            font-weight: 400;
            font-size: 20px;
          }
          .up {
            color: ${windowheight >= clientH * 2 ? '#f1f1f1' : '#666666'};
            background-color: transparent;
            border: none;
            font-weight: 400;
            font-size: 50px;

            position: fixed;
            bottom: 60px;
            right: 10px;
            cursor: pointer;
          }
          @media screen and (max-width: 1024px) {
            .container {
              padding-top: 60px;
            }
            .name {
              margin-top: 80px;
            }
            .name span {
              padding-left: 72px;
            }
            .pic {
              width: 40%;
            }
          }
          @media screen and (max-width: 768px) {
            .pic {
              margin-left: 20%;
              width: 60%;
            }
            .container {
              display: block;
            }
            .name {
              font-size: 72px;
            }
            .name span {
              font-size: 62px;
            }
            footer img {
              width: 80%;
              position: absolute;
              right: 10px;
              bottom: 10px;
            }
          }
          @media screen and (max-width: 576px) {
            .home {
              height: ${clientH - 50}px !important;
            }
            .navbar {
              width: 100%;
              height: 50px;
              position: fixed;
              bottom: 0;
              top: auto;
              right: auto;
              left: 0;
              background-color: #f1f1f1;
              padding: 0 10px;

              color: #666666;

              // top: 20px;
              // right: 20px;
              // width: 45px;
              // height: 45px;
            }
            .navbar p {
              display: none;

              // height: 45px;
              // width: 45px;
              // font-size: 28px;
            }
            .navbar:hover,
            .navbarTop {
              // top: 20px;
              // right: 20px;
              // width: 200px;
              // height: 280px;
              // display: flex;
              // flex-direction: column;

              width: 100%;
              height: 50px;
              position: fixed;
              bottom: 0;
              top: auto;
              right: auto;
              left: 0;
              background-color: #f1f1f1;
              padding: 0 10px;
              color: #666666;
            }

            .name {
              font-size: 60px;
              margin-top: 30px;
            }
            .name span {
              font-size: 42px;
            }
            footer {
              font:
                normal 22px 'Belanosima',
                sans-serif;
            }
            footer .box {
              width: 80%;
            }
            footer h1 {
              left: 10px;
              bottom: -26px;

              font-size: 36px;
            }
          }
        `}
      </style>
    </>
  )
}

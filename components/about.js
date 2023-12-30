import React, { useEffect, useRef, useState } from 'react'

export default function About({ clientH }) {
  const content1Ref = useRef(null)
  const content2Ref = useRef(null)
  const content3Ref = useRef(null)
  const [position, setPosition] = useState([0, 0, 0])

  const [windowheight, setWindowHeight] = useState(0)

  useEffect(() => {
    if (window) {
      setPosition([
        content1Ref.current?.offsetTop,
        content2Ref.current?.offsetTop,
        content3Ref.current?.offsetTop,
      ])
    }
    const handlePosition = () => {
      const newPosition = [
        content1Ref.current?.offsetTop,
        content2Ref.current?.offsetTop,
        content3Ref.current?.offsetTop,
      ]
      setPosition(newPosition)
    }
    const handleScroll = () => {
      setWindowHeight(window.scrollY)
    }
    window.addEventListener('resize', handlePosition)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handlePosition)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <div className="about">
        {' '}
        <div className="container ">
          <p>
            <span> Hi</span>我是 <span>陳柏婷 </span>
            ，個性活潑開朗、善於溝通與團隊合作、做事謹慎且細心。 <br />
            雖然並不是資工相關科系，也從來沒有過相關經驗，但透過進修學習前端程式的相關技術，立志成為一名優秀的前端工程師！
          </p>
          <div className="box ">
            <div
              className={
                'content ' + (windowheight >= position[0] ? 'contentShow' : '')
              }
              ref={content1Ref}
            >
              {Array(3).fill(<div className="circle"></div>)}輔仁大學/2012
              <p>中國文學與應用學系</p>
            </div>
            <div
              className={
                'content ' + (windowheight >= position[1] ? 'contentShow' : '')
              }
              ref={content2Ref}
            >
              {Array(3).fill(<div className="circle"></div>)}
              高地植髮/2015
              <p>毛囊分離師</p>
            </div>
            <div
              className={
                'content ' + (windowheight >= position[2] ? 'contentShow' : '')
              }
              ref={content3Ref}
            >
              {Array(3).fill(<div className="circle"></div>)}
              資展國際 (原資策會)/2023
              <p>前端工程師就業養成班</p>
            </div>

            <div className="btnMoreShadow">
              <div className="btnMore">
                <a href="https://pda.104.com.tw/profile/share/jJG6b5O0421rpBVABZlGsYjA2xKT03Hj">
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          height: ${clientH}px;
          background-color: #c7bcae;
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
        }
        .about p {
          font-size: 18px;
          line-height: 30px;
          font-weight: bold;
          color: #666666;
        }
        .about span {
          font-size: 22px;
          color: #f1f1f1;
        }
        .about span:first-of-type {
          font-size: 40px;
        }
        .about span:nth-of-type(2) {
          background-image: linear-gradient(
            transparent 50%,
            #d0946e,
            #d0946e,
            transparent 100%
          );
        }
        .container {
          height: 90%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .box {
          display: grid;
          height: 75%;
        }
        .content {
          width: 1px;
          height: 1px;
          overflow: hidden;
          margin: 6%;
          opacity: 0;
          background-color: rgba(255, 255, 255, 1);
          border: 2px solid #666666;
          border-radius: 20px;
          position: relative;

          font:
            bold 22px/35px 'Belanosima',
            sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 50px;
          transition: all 0.4s linear;
        }
        .contentShow {
          opacity: 1;
          width: 35%;
          height: 180px;
        }
        .content:nth-of-type(2) {
          transition-delay: 250ms;
          margin: -15% 0 0 55%;
        }
        .content:nth-of-type(3) {
          transition-delay: 350ms;
        }
        .content p {
          font-size: 18px;
        }
        .content::after {
          content: '';
          width: 100%;
          height: 2px;
          background-color: #666666;
          top: 32px;
          position: absolute;
          left: 0;
        }
        .circle {
          content: '';
          width: 16px;
          height: 16px;
          position: absolute;
          top: 8px;
          left: 8px;
          border-radius: 50px;
          background-color: #606f69;
        }
        .circle:nth-of-type(2) {
          left: 30px;
        }
        .circle:nth-of-type(3) {
          left: 52px;
        }
        .btnMore {
          border: 2px solid #666666;
          background-color: #f1f1f1;
          width: 170px;
          height: 50px;
          padding: 5px 20px;
          font: bold 24px 'Chewy';
          top: -8px;
          left: -8px;
          position: absolute;
          transition: all 0.2s ease-out;
        }
        .btnMore a {
          display: inline-block;
          width: 100%;
          color: #666666;
          text-decoration: none;
          text-align: center;
          animation: bounce 0.5s cubic-bezier(0.5, 0.05, 1, 0.5) infinite
            alternate;
        }
        @keyframes bounce {
          from {
            margin-top: 0px;
          }
          to {
            margin-top: 8px;
          }
        }
        .btnMore:hover {
          top: 0px;
          left: 0px;
        }
        .btnMoreShadow {
          width: 170px;
          height: 50px;
          background-color: #d0946e;
          margin: -12% 0 0 65%;
          position: relative;
        }

        @media screen and (max-width: 1024px) {
          .container {
            height: auto;
          }
          .content {
            width: 45%;
            margin: 2%;
          }
        }

        @media screen and (max-width: 992px) {
          .content {
            width: 65%;
            margin: 2%;
          }
          .content:nth-of-type(2) {
            margin: 0 0 0 25%;
          }
          .btnMoreShadow {
            width: 170px;
            height: 50px;
            background-color: #d0946e;
            margin: 5% 25% 0 65%;
            position: relative;
          }
        }
        @media screen and (max-width: 576px) {
          .about {
            height: ${clientH - 50}px;
          }
          .content {
            width: 80%;
            height: 100px;
            margin: 2% auto;
            font:
              bold 18px/25px 'Belanosima',
              sans-serif;
          }
          .content p {
            font-size: 14px;
          }
          .content:nth-of-type(2) {
            margin: 0%;
          }
          .btnMoreShadow {
            width: 155px;
            height: 47px;
            background-color: #d0946e;
            margin: 5% 0 0 50%;
            position: relative;
          }
        }
      `}</style>
    </>
  )
}

import { useEffect, useRef, useState, useLayoutEffect } from 'react'

export default function Skills() {
  const [clientH, setclientH] = useState(1080)
  const [clientW, setclientW] = useState(1920)
  // console.log(clientW)
  const [skills, setSkills] = useState([
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'figma',
    'git',
    'VScode',
    'mySQL',
  ])
  const [ballSize, setBallSize] = useState(Array(9).fill(120))
  // console.log(ballSize)
  const [ballPosition, setBallPosition] = useState(Array(9).fill([0, 0]))
  // console.log(ballPosition)

  const skillBoxRef = useRef(null)

  useEffect(() => {
    const handleBallSize = () => {
      if (skillBoxRef.current) {
        // console.log(
        //   skillBoxRef.current.clientHeight,
        //   skillBoxRef.current.clientWidth,
        // )
        const randomSizes = Array.from({ length: 9 }, () =>
          Math.ceil(
            Math.random() * (skillBoxRef.current.clientWidth / 13) +
              skillBoxRef.current.clientWidth / 18,
          ),
        )
        setBallSize(randomSizes)
      }
    }
    const handleBallPosition = () => {
      if (skillBoxRef.current) {
        const positionH =
          skillBoxRef.current.clientHeight * 0.7 +
          skillBoxRef.current.clientHeight * 0.1
        const positionW =
          skillBoxRef.current.clientWidth * 0.7 +
          skillBoxRef.current.clientWidth * 0.1

        const randomPositions = Array.from({ length: 9 }, () => {
          const top =
            Math.random() * positionH >
            skillBoxRef.current.clientHeigh * 0.7 +
              skillBoxRef.current.clientHeight * 0.1 -
              180
              ? Math.random() * positionH - 250
              : Math.random() * positionH
          const left =
            Math.random() * positionW >
            skillBoxRef.current.clientWidth * 0.7 +
              skillBoxRef.current.clientWidth * 0.1 -
              100
              ? Math.random() * positionW - 150
              : Math.random() * positionW

          return [top, left]
        })

        setBallPosition(randomPositions)
      }
    }
    handleBallPosition()
    if (window) {
      setclientH(window.innerHeight)
      setclientW(window.innerWidth)
      handleBallSize()
    }

    const handleResize = () => {
      //檢查skillBox.current寬高ball及位置關係
      setclientH(window.innerHeight)
      setclientW(window.innerWidth)
      handleBallPosition()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('resize', handleBallSize)

    // 記得在組件卸載時解除事件監聽
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('resize', handleBallSize)
    }
  }, []) // 空的依賴陣列確保只有在組件掛載和卸載時才會設定和解除事件監聽,不然每一次進來會多一個監聽器

  return (
    <>
      <div className="skills" style={{ height: `${clientH}px` }}>
        <div className="skillBox" ref={skillBoxRef}>
          {skills.map((v, i) => {
            return (
              <div
                className="ball"
                style={{
                  width: `${ballSize[i]}px`,
                  height: `${ballSize[i]}px`,
                  top: `${ballPosition[i][0] || 0}px`,
                  left: `${ballPosition[i][1] || 0}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 10 + 3}s`,
                }}
                key={i}
              >
                {v}
              </div>
            )
          })}
        </div>
      </div>
      <style jsx>
        {`
          .skills {
            padding: 0 20px;
            width: 100%;
            background-color: #3c5124;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .skillBox {
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(background-2.png);
            // background-color: yellow;
            width: ${1.88 * (0.98 * clientH)}px;
            // height: 98%;

            // RWD變質長方比例跑掉/顛倒?
            height: ${clientW < 1800 ? clientW / 1.88 + 'px' : '98%'};
            display: flex;
            flex-wrap: wrap;
            position: relative;
          }
          .ball {
            background-image: url(circle-2.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;

            animation-name: Bounce;
            animation-duration: 5s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;

            transition: all 1s ease-in-out;
          }
          @keyframes Bounce {
            0% {
              transform: translate(0, 0);
            }

            50% {
              transform: translateY(50px);
            }
          }
        `}
      </style>
    </>
  )
}

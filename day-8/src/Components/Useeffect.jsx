import { useEffect, useState } from "react";
import "../App.css";

function Useeffect() {
  const [state, setState] = useState(true);
  const [arr, setArr] = useState([]);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setLogin(true);
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((res) => {
        setArr(res.results);
        setLogin(false);
      });
  }, [state]);

  useEffect(() => {
    function handleLoad() {
      const loader = document.querySelector('.loader');
      const content = document.getElementById('content');
      if (loader && content) {
        setTimeout(() => {
          loader.classList.add('hide');
          content.classList.add('show');
        }, 2000);
      }
    }

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const canvas = document.getElementById('nokey');
    if (canvas) {
      let can_w = parseInt(canvas.getAttribute('width'));
      let can_h = parseInt(canvas.getAttribute('height'));
      const ctx = canvas.getContext('2d');

      const BALL_NUM = 30;
      const R = 2;
      let balls = [];
      const alpha_f = 0.03;
      const link_line_width = 0.8;
      const dis_limit = 260;
      let mouse_in = false;
      const mouse_ball = { x: 0, y: 0, vx: 0, vy: 0, r: 0, type: 'mouse' };

      const ball_color = {
        r: 207,
        g: 255,
        b: 4
      };

      function getRandomSpeed(pos) {
        const min = -1;
        const max = 1;
        switch (pos) {
          case 'top':
            return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
          case 'right':
            return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
          case 'bottom':
            return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
          case 'left':
            return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
          default:
            return;
        }
      }

      function randomArrayItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

      function randomNumFrom(min, max) {
        return Math.random() * (max - min) + min;
      }

      function getRandomBall() {
        const pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
        switch (pos) {
          case 'top':
            return {
              x: randomSidePos(can_w),
              y: -R,
              vx: getRandomSpeed('top')[0],
              vy: getRandomSpeed('top')[1],
              r: R,
              alpha: 1,
              phase: randomNumFrom(0, 10)
            };
          case 'right':
            return {
              x: can_w + R,
              y: randomSidePos(can_h),
              vx: getRandomSpeed('right')[0],
              vy: getRandomSpeed('right')[1],
              r: R,
              alpha: 1,
              phase: randomNumFrom(0, 10)
            };
          case 'bottom':
            return {
              x: randomSidePos(can_w),
              y: can_h + R,
              vx: getRandomSpeed('bottom')[0],
              vy: getRandomSpeed('bottom')[1],
              r: R,
              alpha: 1,
              phase: randomNumFrom(0, 10)
            };
          case 'left':
            return {
              x: -R,
              y: randomSidePos(can_h),
              vx: getRandomSpeed('left')[0],
              vy: getRandomSpeed('left')[1],
              r: R,
              alpha: 1,
              phase: randomNumFrom(0, 10)
            };
        }
      }

      function randomSidePos(length) {
        return Math.ceil(Math.random() * length);
      }

      function renderBalls() {
        balls.forEach((b) => {
          if (!b.hasOwnProperty('type')) {
            ctx.fillStyle = `rgba(${ball_color.r},${ball_color.g},${ball_color.b},${b.alpha})`;
            ctx.beginPath();
            ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
          }
        });
      }

      function updateBalls() {
        const new_balls = [];
        balls.forEach((b) => {
          b.x += b.vx;
          b.y += b.vy;

          if (b.x > -50 && b.x < can_w + 50 && b.y > -50 && b.y < can_h + 50) {
            new_balls.push(b);
          }

          b.phase += alpha_f;
          b.alpha = Math.abs(Math.cos(b.phase));
        });

        balls = new_balls.slice(0);
      }

      function renderLines() {
        let fraction, alpha;
        for (let i = 0; i < balls.length; i++) {
          for (let j = i + 1; j < balls.length; j++) {
            fraction = getDisOf(balls[i], balls[j]) / dis_limit;

            if (fraction < 1) {
              alpha = (1 - fraction).toString();

              ctx.strokeStyle = `rgba(150,150,150,${alpha})`;
              ctx.lineWidth = link_line_width;

              ctx.beginPath();
              ctx.moveTo(balls[i].x, balls[i].y);
              ctx.lineTo(balls[j].x, balls[j].y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }

      function getDisOf(b1, b2) {
        const delta_x = Math.abs(b1.x - b2.x);
        const delta_y = Math.abs(b1.y - b2.y);

        return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
      }

      function addBallIfy() {
        if (balls.length < BALL_NUM) {
          balls.push(getRandomBall());
        }
      }

      function render() {
        ctx.clearRect(0, 0, can_w, can_h);

        renderBalls();

        renderLines();

        updateBalls();

        addBallIfy();

        window.requestAnimationFrame(render);
      }

      function initBalls(num) {
        for (let i = 1; i <= num; i++) {
          balls.push({
            x: randomSidePos(can_w),
            y: randomSidePos(can_h),
            vx: getRandomSpeed('top')[0],
            vy: getRandomSpeed('top')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
          });
        }
      }

      function initCanvas() {
        canvas.setAttribute('width', window.innerWidth);
        canvas.setAttribute('height', window.innerHeight);

        can_w = parseInt(canvas.getAttribute('width'));
        can_h = parseInt(canvas.getAttribute('height'));
      }

      window.addEventListener('resize', () => {
        console.log('Window Resize...');
        initCanvas();
      });

      function goMovie() {
        initCanvas();
        initBalls(BALL_NUM);
        window.requestAnimationFrame(render);
      }
      goMovie();

      canvas.addEventListener('mouseenter', () => {
        console.log('mouseenter');
        mouse_in = true;
        balls.push(mouse_ball);
      });

      canvas.addEventListener('mouseleave', () => {
        console.log('mouseleave');
        mouse_in = false;
        const new_balls = [];
        balls.forEach((b) => {
          if (!b.hasOwnProperty('type')) {
            new_balls.push(b);
          }
        });
        balls = new_balls.slice(0);
      });

      canvas.addEventListener('mousemove', (e) => {
        mouse_ball.x = e.pageX;
        mouse_ball.y = e.pageY;
      });
    }
  }, []);

  return (
    <div>
      <div className="sec">
        <button className="btn btn-light" onClick={() => setState(!state)} >
      <span>    Add Data </span>
          <div class="liquid"></div>
        </button>
        <div className="sec-1">
          <canvas id="nokey"></canvas>

          {login && 
            <div className="loader">
              <div className="load-inner load-one"></div>
              <div className="load-inner load-two"></div>
              <div className="load-inner load-three"></div>
              <span className="loader-text">Loading</span>
            </div>  
          }
          <div id="content">
            {arr.map((e) => (
              
              <div key={e.email} className="card border-none text-center" style={{ width: "21rem" }}>
                <div className="text-center">
                  

                <img src={e.picture.large} className="card-img-top" alt="..." id="a"/>
                </div>
                <div className="card-body  text-center">
                  <span className="card-title d-flex justify-content-center fw-bolder  fs-dark ">
                    <div><h3>{e.name.title}</h3></div>
                    <div className="ms-1 f"><h3> {e.name.first}</h3></div>
                    <div className="ms-1"> <h3>{e.name.last}</h3></div>
                  </span>
                  <p className="card-text">Email : {e.email}</p>
                  <p className="card-text">Phone : {e.phone}</p>
                  <p className="card-text">
                    Location :
                    <span>{e.location.country}</span>
                    <span>{e.location.state}</span>
                  </p>
                </div>
              </div>
            ))}


           


          </div>
        </div>
      </div>
    </div>
  );
}

export default Useeffect;

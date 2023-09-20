let mobileIcon = document.querySelector('.mobile-icon');
let menuWrapper = document.querySelector('.main-navigation');
let allNiv = document.querySelectorAll('.main-navigation > ul > li > a');
let firstNiv = document.querySelectorAll('.main-navigation > ul > li > .sub-menu > li > a');
let secondNiv = document.querySelectorAll('.main-navigation > ul > li > .sub-menu');
let thirdNiv = document.querySelectorAll('.main-navigation > ul > li > .sub-menu .sub-menu');
let returnBack = document.querySelectorAll('.return-back');

mobileIcon.addEventListener('click', function(e) {
    mobileIcon.classList.toggle('active');
    menuWrapper.classList.toggle('active');

    for(let a = 0; a < allNiv.length; a++) {
        allNiv[a].classList.remove('active');
    }
    for(let b = 0; b < firstNiv.length; b++) {
        firstNiv[b].classList.remove('active');
    }
    for(let c = 0; c < secondNiv.length; c++) {
        secondNiv[c].classList.remove('active');
    }
    for(let d = 0; d < thirdNiv.length; d++) {
        thirdNiv[d].classList.remove('active');
    }
});

for (let i = 0; i < allNiv.length; i++) {
    allNiv[i].addEventListener('click', function(event) {

        for (let x = 0; x < allNiv.length; x++) {
            allNiv[x].classList.remove('active');
        }
        allNiv[i].classList.add('active');

        for (let y = 0; y < secondNiv.length; y++) {
            secondNiv[y].classList.remove('active');
        }
        event.preventDefault();
        allNiv[i].parentNode.querySelector('.sub-menu').classList.add('active');
    });
}
for (let i = 0; i < firstNiv.length; i++) {
    firstNiv[i].addEventListener('click', function(event) {

        for (let x = 0; x < firstNiv.length; x++) {
            firstNiv[x].classList.remove('active');
        }
        firstNiv[i].classList.add('active');

        for (let y = 0; y < thirdNiv.length; y++) {
            thirdNiv[y].classList.remove('active');
        }
        event.preventDefault();
        firstNiv[i].parentNode.querySelector('.sub-menu').classList.add('active');
    });
}
for(let i = 0; i < secondNiv.length; i++) {
    let returnBack = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    returnBack.setAttribute('viewBox', '0 0 14 13');
    returnBack.setAttribute('fill', 'none');
    returnBack.classList.add('return-back');

    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M5.75 12.7811L0.25 7.5311C0.09375 7.37485 0 7.18735 0 6.9686C0 6.7811 0.09375 6.5936 0.25 6.43735L5.75 1.18735C6.03125 0.906096 6.53125 0.906096 6.8125 1.2186C7.09375 1.49985 7.09375 1.99985 6.78125 2.2811L2.625 6.2186L13.25 6.2186C13.6875 6.2186 14 6.56235 14 6.9686C14 7.4061 13.6875 7.7186 13.25 7.7186L2.625 7.7186L6.78125 11.6873C7.09375 11.9686 7.09375 12.4686 6.8125 12.7498C6.53125 13.0623 6.0625 13.0623 5.75 12.7811Z')
    path.setAttribute('fill', '#000');
    returnBack.appendChild(path);

    secondNiv[i].prepend(returnBack);
    secondNiv[i].querySelector('.return-back').addEventListener('click', () => {
        for(let x = 0; x < secondNiv.length; x++) {
            secondNiv[x].classList.remove('active');
        }
    });
}
for(let i = 0; i < thirdNiv.length; i++) {
    let returnBack = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    returnBack.setAttribute('viewBox', '0 0 14 13');
    returnBack.setAttribute('fill', 'none');
    returnBack.classList.add('return-back');

    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M5.75 12.7811L0.25 7.5311C0.09375 7.37485 0 7.18735 0 6.9686C0 6.7811 0.09375 6.5936 0.25 6.43735L5.75 1.18735C6.03125 0.906096 6.53125 0.906096 6.8125 1.2186C7.09375 1.49985 7.09375 1.99985 6.78125 2.2811L2.625 6.2186L13.25 6.2186C13.6875 6.2186 14 6.56235 14 6.9686C14 7.4061 13.6875 7.7186 13.25 7.7186L2.625 7.7186L6.78125 11.6873C7.09375 11.9686 7.09375 12.4686 6.8125 12.7498C6.53125 13.0623 6.0625 13.0623 5.75 12.7811Z')
    path.setAttribute('fill', '#000');
    returnBack.appendChild(path);

    thirdNiv[i].prepend(returnBack);
    thirdNiv[i].querySelector('.return-back').addEventListener('click', () => {
        for(let x = 0; x < thirdNiv.length; x++) {
            thirdNiv[x].classList.remove('active');
        }
    });
}

const $$ = s =>
  Array.prototype.slice.call(
    document.querySelectorAll(s)
    );
const isEl = obj => obj instanceof HTMLElement;
const isStr = obj => Object.prototype.toString.call(obj) === '[object String]';

const cursorDot = ({
  diameter = 100,
  easing = 4,
} = {}) => {
  let inited = false;
  const alt = { x: 0, y: 0, o: 1, d: diameter };
  const cur = { x: 0, y: 0, o: 0, d: diameter };
  const dot = document.createElement('div');
  const tim = easing / 15
  dot.style = `position:fixed; top:0; left:0; border-radius:100%; pointer-events:none; opacity:0; height:${diameter}px; width:${diameter}px; background:${background}; border:${borderWidth}px solid ${borderColor}; mix-blend-mode:exclusion; transition:background ${tim}s,border ${tim}s`;

  document.addEventListener('mousemove', e => {
    alt.x = e.clientX;
    alt.y = e.clientY;
    dot.style.opacity = 1;
    if (!inited) {
      document.body.append(dot)
      cur.x = alt.x;
      cur.y = alt.y;
      inited = true;
      draw()
    }
  })

  const draw = () => {
    const dX = alt.x - cur.x;
    const dY = alt.y - cur.y;
    cur.x += (dX / easing);
    cur.y += (dY / easing);
    const t3d = `translate3d(${cur.x - cur.d / 2}px,${cur.y - cur.d / 2}px,0)`;
    dot.style.transform = t3d;

    const dO = alt.o - cur.o;
    cur.o += dO / easing;
    dot.style.opacity = cur.o;

    const dD = alt.d - cur.d;
    cur.d += dD / easing;
    dot.style.height = cur.d + 'px';
    dot.style.width = cur.d + 'px';

    try {
      requestAnimationFrame(draw);
    } catch(_) {
      setImmediate(draw);
    }
  }

  dot.over = (any, style) => {
    const fn = el => {
        el.addEventListener('mouseover', _ => {
            if (style.background) {
                dot.style.backgroundColor = style.background;
            }
            if (style.borderColor) {
                dot.style.borderColor = style.borderColor;
            }
            if (style.scale) {
                alt.d = diameter * style.scale;
            }
        });
      el.addEventListener('mouseout', _ => {
        if (style.background) {
            dot.style.backgroundColor = background;
        }
        if (style.borderColor) {
            dot.style.borderColor = borderColor;
        }   
        if (style.scale) {
            alt.d = diameter;
        }
      })
    }
    if (isEl(any)) {
        fn(any)
    }
    else if (isStr(any)) {
        $$(any).forEach(fn)
    }
  }
  return dot
}
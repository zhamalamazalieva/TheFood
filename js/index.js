let scene = document.getElementById('scene');
let parallax = new Parallax(scene);

function timer(){
TweenMax.from('.header__logo', 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });
  TweenMax.from('.header__nav', 1, {
    opacity: 0,
    x: 1000,
    ease: Expo.easeInOut,
  });
  TweenMax.staggerFrom(
    '.nav ul li',
    1,
    {
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut,
    },
    0.08,
  );
  TweenMax.from('.hero__title', 1, {
    delay: 0.5,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });

  TweenMax.from('.hero__description', 1, {
    delay: 0.6,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });

  TweenMax.from('.btn', 1, {
    delay: 0.7,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });

  TweenMax.from('.hero__img', 1, {
    delay: 1,
    opacity: 0,
    x: 500,
    ease: Expo.easeInOut,
  });
  TweenMax.from('.header__system-elements', 2, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut,
  });
  TweenMax.from('.hero__mint', 2, {
    delay: 1.1,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut,
  });

  TweenMax.from('.hero__mint--small', 2, {
    delay: 1.3,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut,
  });

  TweenMax.from('.hero__pepper', 2, {
    delay: 1.3,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut,
  });
}
setTimeout (timer, 1000);

TweenMax.to('.over--1', 1, {
    delay: 0.3,
    top: '-100%',
    ease: Expo.easeInOut,
  });
  TweenMax.to('.over--2', 1, {
    delay: 0.7,
    top: '-100%',
    ease: Expo.easeInOut,
  });
  TweenMax.to('.over--3', 1, {
    delay: 1.1,
    top: '-100%',
    ease: Expo.easeInOut,
  });
  TweenMax.to('.overlay', 1, {
    delay: 2.1,
    zIndex: -1,
  });
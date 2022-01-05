let animationContainerElem = document.querySelector(".animation-container");
let canvasElem = document.querySelector(".canvas");
let characterElem = document.querySelector(".character");
let animatedCharacterElem = document.querySelector(".animation-container.full .character");
let playButtonElem = document.querySelector(".play-button");
let demoHistory = ["translate(24.56640625px, 30.8359375px)","translate(24.828125px, 30.8359375px)","translate(25.43359375px, 30.8359375px)","translate(25.69921875px, 31.1015625px)","translate(26.30859375px, 31.1015625px)","translate(26.5703125px, 31.1015625px)","translate(27.1796875px, 31.1015625px)","translate(27.44140625px, 31.1015625px)","translate(28.046875px, 31.1015625px)","translate(28.78515625px, 31.1015625px)","translate(29.95703125px, 31.1015625px)","translate(30.21875px, 31.1015625px)","translate(30.828125px, 31.1015625px)","translate(31.4375px, 31.1015625px)","translate(32.046875px, 31.1015625px)","translate(33.0859375px, 31.1015625px)","translate(33.6953125px, 31.1015625px)","translate(34.30078125px, 31.1015625px)","translate(34.91015625px, 31.1015625px)","translate(35.51953125px, 31.1015625px)","translate(36.12890625px, 31.1015625px)","translate(36.73828125px, 31.1015625px)","translate(37.34765625px, 30.7890625px)","translate(37.95703125px, 30.7890625px)","translate(39.29296875px, 30.2890625px)","translate(40.13671875px, 30.1328125px)","translate(41.2109375px, 29.9375px)","translate(42.2734375px, 29.578125px)","translate(43.328125px, 29.21875px)","translate(44.3828125px, 28.86328125px)","translate(45.42578125px, 28.51171875px)","translate(46.2109375px, 28.17578125px)","translate(47.12109375px, 27.83203125px)","translate(47.88671875px, 27.71875px)","translate(48.50390625px, 27.49609375px)","translate(49.12109375px, 27.18359375px)","translate(49.765625px, 26.85546875px)","translate(50.3515625px, 26.55859375px)","translate(51.0078125px, 26.22265625px)","translate(51.6640625px, 25.88671875px)","translate(51.953125px, 25.61328125px)","translate(52.5859375px, 24.97265625px)","translate(53.8046875px, 24.35546875px)","translate(54.4140625px, 23.73828125px)","translate(55.0234375px, 23.12109375px)","translate(55.62890625px, 22.8125px)","translate(56.23828125px, 22.1953125px)","translate(56.84765625px, 21.578125px)","translate(57.453125px, 21.26953125px)","translate(58.48828125px, 20.5703125px)","translate(59.09765625px, 19.953125px)","translate(59.703125px, 19.64453125px)","translate(60.3125px, 19.02734375px)","translate(60.921875px, 18.71875px)","translate(61.53125px, 18.1015625px)","translate(62.56640625px, 17.75px)","translate(63.17578125px, 17.1328125px)","translate(64.0859375px, 16.51953125px)","translate(64.703125px, 16.05078125px)","translate(65.54296875px, 15.53515625px)","translate(66.37109375px, 15.03125px)","translate(66.99609375px, 14.7109375px)","translate(67.61328125px, 14.21484375px)","translate(68.22265625px, 13.77734375px)","translate(68.8515625px, 13.45703125px)","translate(69.45703125px, 13.1484375px)","translate(70.09765625px, 12.82421875px)","translate(70.484375px, 12.53125px)","translate(71.00390625px, 12.453125px)","translate(71.65625px, 12.20703125px)","translate(71.98828125px, 11.9296875px)","translate(72.55078125px, 11.875px)","translate(72.8828125px, 11.63671875px)","translate(73.15234375px, 11.60546875px)","translate(73.43359375px, 11.33984375px)","translate(73.6953125px, 11.3359375px)","translate(74.1015625px, 11.3359375px)","translate(74.3671875px, 11.3359375px)","translate(74.6328125px, 11.3359375px)","translate(74.90234375px, 11.3359375px)","translate(75.171875px, 11.3359375px)","translate(75.4765625px, 11.3359375px)","translate(75.7265625px, 11.3359375px)","translate(75.94921875px, 11.3359375px)","translate(76.2421875px, 11.3359375px)","translate(76.484375px, 11.3359375px)","translate(76.76171875px, 11.578125px)","translate(76.78125px, 11.859375px)","translate(77.04296875px, 11.859375px)","translate(77.44140625px, 12.2578125px)","translate(77.703125px, 12.51953125px)","translate(77.9765625px, 12.79296875px)","translate(78.26953125px, 13.26953125px)","translate(78.5390625px, 13.6640625px)","translate(79.015625px, 14.140625px)","translate(79.41796875px, 14.54296875px)","translate(79.9140625px, 15.0390625px)","translate(80.31640625px, 15.44140625px)","translate(80.82421875px, 15.94921875px)","translate(81.46484375px, 16.58984375px)","translate(81.796875px, 16.921875px)","translate(82.37890625px, 17.50390625px)","translate(82.984375px, 17.85546875px)","translate(83.32421875px, 18.140625px)","translate(83.91796875px, 18.734375px)","translate(84.5625px, 19.078125px)","translate(85.1796875px, 19.38671875px)","translate(86.51953125px, 20.33984375px)","translate(87.12890625px, 20.94921875px)","translate(87.734375px, 21.25px)","translate(88.33984375px, 21.85546875px)","translate(88.94921875px, 22.16015625px)","translate(89.55859375px, 22.4609375px)","translate(90.59375px, 22.8046875px)","translate(90.8984375px, 23.4140625px)","translate(91.5078125px, 23.71875px)","translate(92.1171875px, 24.01953125px)","translate(92.7265625px, 24.01953125px)","translate(92.98828125px, 24.28125px)","translate(93.59765625px, 24.28125px)","translate(94.20703125px, 24.58203125px)","translate(94.8125px, 24.8828125px)","translate(95.7265625px, 25.03515625px)","translate(96.34765625px, 25.18359375px)","translate(96.9609375px, 25.34765625px)","translate(97.8125px, 25.484375px)","translate(98.6171875px, 25.65625px)","translate(99.234375px, 25.7890625px)","translate(100.109375px, 25.7890625px)","translate(100.9140625px, 25.984375px)","translate(101.53125px, 26.09375px)","translate(102.45703125px, 26.09375px)","translate(103.19921875px, 26.09375px)","translate(103.81640625px, 26.09375px)","translate(104.43359375px, 26.09375px)","translate(105.375px, 26.09375px)","translate(106.140625px, 26.09375px)","translate(106.80078125px, 26.09375px)","translate(107.83984375px, 26.09375px)","translate(108.5px, 26.09375px)","translate(110.1484375px, 26.09375px)","translate(111.18359375px, 26.09375px)","translate(112.21875px, 26.09375px)","translate(112.828125px, 26.09375px)","translate(113.86328125px, 26.09375px)","translate(114.8984375px, 26.09375px)","translate(115.5078125px, 26.09375px)","translate(116.54296875px, 25.7421875px)","translate(117.15234375px, 25.4296875px)","translate(117.7578125px, 25.4296875px)","translate(118.79296875px, 25.08203125px)","translate(119.40234375px, 24.7734375px)","translate(120.4375px, 24.42578125px)","translate(121.046875px, 23.80859375px)","translate(121.65625px, 23.49609375px)","translate(122.984375px, 23px)","translate(123.61328125px, 22.6796875px)","translate(124.23046875px, 22.19921875px)","translate(124.83984375px, 21.75px)","translate(125.4609375px, 21.26171875px)","translate(126.08203125px, 20.8125px)","translate(126.69140625px, 20.3203125px)","translate(127.6796875px, 19.32421875px)","translate(128.48828125px, 18.5078125px)","translate(129.44921875px, 17.5390625px)","translate(130.3203125px, 16.421875px)","translate(131.3828125px, 15.2421875px)","translate(132.16015625px, 14.45703125px)","translate(132.859375px, 13.47265625px)","translate(133.8203125px, 12.7109375px)","translate(134.55078125px, 12.04296875px)","translate(135.17578125px, 11.41015625px)","translate(135.82421875px, 10.75390625px)","translate(136.15625px, 10.109375px)","translate(136.765625px, 9.79296875px)","translate(137.375px, 9.48046875px)","translate(137.984375px, 9.171875px)","translate(138.28515625px, 8.55859375px)","translate(138.89453125px, 8.24609375px)","translate(139.50390625px, 7.9375px)","translate(139.8046875px, 7.32421875px)","translate(140.4140625px, 7.015625px)","translate(140.67578125px, 7.015625px)","translate(141.28515625px, 6.703125px)","translate(141.546875px, 6.43359375px)","translate(141.80859375px, 6.43359375px)","translate(142.0703125px, 6.43359375px)","translate(142.33203125px, 6.43359375px)","translate(142.59375px, 6.43359375px)","translate(142.859375px, 6.43359375px)","translate(143.1015625px, 6.43359375px)","translate(143.34375px, 6.43359375px)","translate(143.5859375px, 6.43359375px)","translate(143.828125px, 6.43359375px)","translate(144.0703125px, 6.43359375px)","translate(144.3125px, 6.43359375px)","translate(144.57421875px, 6.6953125px)","translate(144.57421875px, 6.95703125px)","translate(144.83984375px, 7.22265625px)","translate(145.1015625px, 7.484375px)","translate(145.36328125px, 7.74609375px)","translate(145.625px, 8.0078125px)","translate(145.88671875px, 8.26953125px)","translate(146.28125px, 8.6640625px)","translate(146.67578125px, 9.05859375px)","translate(146.98046875px, 9.66796875px)","translate(147.58984375px, 10.27734375px)","translate(148.19921875px, 10.88671875px)","translate(148.8046875px, 11.4921875px)","translate(149.4140625px, 12.1015625px)","translate(150.01953125px, 12.70703125px)","translate(150.70703125px, 13.7421875px)","translate(151.3125px, 14.34765625px)","translate(151.921875px, 14.95703125px)","translate(152.52734375px, 15.5625px)","translate(153.13671875px, 16.171875px)","translate(153.74609375px, 16.78125px)","translate(154.35546875px, 17.390625px)","translate(154.9609375px, 17.99609375px)","translate(155.5625px, 18.90234375px)","translate(156.19140625px, 19.53125px)","translate(156.80078125px, 20.140625px)","translate(157.23046875px, 20.5703125px)","translate(157.703125px, 21.04296875px)","translate(158.1171875px, 21.45703125px)","translate(158.59375px, 21.74609375px)","translate(158.9921875px, 22.02734375px)","translate(159.49609375px, 22.53125px)","translate(159.87890625px, 22.9140625px)","translate(160.15234375px, 23.1875px)","translate(160.6796875px, 23.484375px)","translate(161.03515625px, 23.76171875px)","translate(161.59375px, 24.0703125px)","translate(161.91796875px, 24.33984375px)","translate(162.47265625px, 24.38671875px)","translate(162.8125px, 24.62890625px)","translate(163.39453125px, 24.9296875px)","translate(164.05078125px, 24.953125px)","translate(164.984375px, 25.2578125px)","translate(165.60546875px, 25.42578125px)","translate(166.22265625px, 25.734375px)","translate(166.63671875px, 25.86328125px)","translate(167.11328125px, 26.046875px)","translate(167.73046875px, 26.16796875px)","translate(168.66015625px, 26.3984375px)","translate(169.40625px, 26.71484375px)","translate(170.03515625px, 26.81640625px)","translate(170.6875px, 27.05078125px)","translate(171.6484375px, 27.390625px)","translate(172.3828125px, 27.4609375px)","translate(172.9921875px, 27.72265625px)","translate(174.01953125px, 27.765625px)","translate(174.7109375px, 28.0625px)","translate(175.33203125px, 28.06640625px)","translate(175.94140625px, 28.37109375px)","translate(176.9765625px, 28.37109375px)","translate(177.58203125px, 28.671875px)","translate(178.19140625px, 28.671875px)","translate(178.453125px, 28.671875px)","translate(179.0625px, 28.671875px)","translate(179.671875px, 28.671875px)","translate(180.28125px, 28.671875px)","translate(180.54296875px, 28.671875px)","translate(181.6015625px, 28.671875px)","translate(181.95703125px, 28.671875px)","translate(182.4921875px, 28.671875px)","translate(183.125px, 28.671875px)","translate(183.76171875px, 28.671875px)","translate(184.37890625px, 28.671875px)","translate(184.703125px, 28.671875px)","translate(185.328125px, 28.671875px)","translate(186.69140625px, 28.671875px)","translate(187.3046875px, 28.671875px)","translate(188.14453125px, 28.671875px)","translate(189.22265625px, 28.671875px)","translate(190.015625px, 28.671875px)","translate(190.89453125px, 28.671875px)","translate(191.96875px, 28.4453125px)","translate(192.73828125px, 28.11328125px)","translate(193.65625px, 27.76953125px)","translate(194.734375px, 27.40234375px)","translate(195.8125px, 27.0390625px)","translate(196.8671875px, 26.68359375px)","translate(197.9296875px, 26.0390625px)","translate(199.0390625px, 25.60546875px)","translate(199.72265625px, 24.9921875px)","translate(200.7734375px, 24.609375px)","translate(201.41015625px, 23.984375px)","translate(202.4453125px, 23.63671875px)","translate(203.0546875px, 23.01953125px)","translate(203.66015625px, 22.7109375px)","translate(204.6953125px, 22.36328125px)","translate(205.3046875px, 21.74609375px)","translate(206.33984375px, 21.39453125px)","translate(206.94921875px, 20.77734375px)","translate(207.984375px, 20.42578125px)","translate(208.59375px, 19.80859375px)","translate(209.19921875px, 19.5px)","translate(210.234375px, 19.15234375px)","translate(210.49609375px, 18.8828125px)","translate(211.10546875px, 18.265625px)","translate(211.71484375px, 18.265625px)","translate(212.3203125px, 17.95703125px)","translate(212.58203125px, 17.6875px)","translate(213.19140625px, 17.37890625px)","translate(213.76171875px, 17.109375px)","translate(214.32421875px, 16.83984375px)","translate(214.5859375px, 16.5703125px)","translate(214.84765625px, 16.5703125px)","translate(215.109375px, 16.30078125px)","translate(215.37109375px, 16.30078125px)","translate(215.6328125px, 16.30078125px)","translate(215.89453125px, 16.03125px)","translate(216.15625px, 16.03125px)","translate(216.41796875px, 16.03125px)","translate(216.65234375px, 16.03125px)","translate(216.88671875px, 16.03125px)","translate(217.12890625px, 16.03125px)","translate(217.36328125px, 16.03125px)","translate(217.58984375px, 16.03125px)","translate(217.82421875px, 16.03125px)","translate(218.05859375px, 16.03125px)","translate(218.19140625px, 16.41015625px)","translate(218.3203125px, 16.8046875px)","translate(218.58203125px, 17.06640625px)","translate(218.84375px, 17.328125px)","translate(218.84375px, 17.58984375px)","translate(219.10546875px, 17.8515625px)","translate(219.40625px, 18.45703125px)","translate(219.7109375px, 19.06640625px)","translate(220.3203125px, 19.3671875px)","translate(220.62109375px, 19.9765625px)","translate(221.23046875px, 20.28125px)","translate(221.83984375px, 20.58203125px)","translate(222.4453125px, 21.1875px)","translate(223.0546875px, 21.4921875px)","translate(223.6640625px, 22.1015625px)","translate(224.26953125px, 22.40234375px)","translate(225.41015625px, 23.1875px)","translate(226.23828125px, 23.515625px)","translate(226.859375px, 23.9921875px)","translate(227.48046875px, 24.44140625px)","translate(228.08984375px, 24.7421875px)","translate(228.984375px, 25.08203125px)","translate(229.546875px, 25.375px)","translate(230.0390625px, 25.671875px)","translate(230.66796875px, 25.984375px)","translate(231.28515625px, 26.2890625px)","translate(231.8984375px, 26.59375px)","translate(232.26953125px, 26.875px)","translate(232.8203125px, 26.94140625px)","translate(233.1640625px, 27.16015625px)","translate(234.390625px, 27.5078125px)","translate(234.67578125px, 27.7578125px)","translate(235.296875px, 27.76953125px)","translate(236.515625px, 28.07421875px)","translate(237.125px, 28.375px)","translate(237.73046875px, 28.375px)","translate(238.3359375px, 28.67578125px)","translate(238.9453125px, 28.9765625px)","translate(239.55078125px, 28.9765625px)","translate(240.5859375px, 29.3203125px)","translate(241.62109375px, 29.3203125px)","translate(242.23046875px, 29.62109375px)","translate(243.265625px, 29.96484375px)","translate(244.30078125px, 29.96484375px)","translate(244.91015625px, 30.265625px)","translate(245.9453125px, 30.265625px)","translate(246.984375px, 30.609375px)","translate(248.01953125px, 30.609375px)","translate(249.8203125px, 30.953125px)","translate(251.14453125px, 30.953125px)","translate(252.1796875px, 30.953125px)","translate(253.2421875px, 31.140625px)","translate(254.27734375px, 31.29296875px)","translate(255.35546875px, 31.29296875px)","translate(256.37890625px, 31.29296875px)","translate(257.44140625px, 31.29296875px)","translate(258.515625px, 31.29296875px)","translate(259.57421875px, 31.29296875px)","translate(260.6640625px, 31.29296875px)"];

let backgroundImageInputElem = document.querySelector("[name='background-image']");
let characterImageInputElem = document.querySelector("[name='character-image']");

let position = { x: 0, y: 0 };
let history = [];
let dragIndex = 0;

interact('.draggable').draggable({
  listeners: {
    move (event) {
      position.x += event.dx;
      position.y += event.dy;

      let rect1 = interact.getElementRect(canvasElem);
      let rect2 = interact.getElementRect(characterElem);

      let translation = `translate(${position.x}px, ${position.y}px)`;
      event.target.style.transform = translation;

      if (doesCollide(rect1, rect2)) {
        if (dragIndex % 2 === 0) {
          history.push([(rect2.left - rect1.left) * 4, (rect2.top - rect1.top) * 4]);
        }

        dragIndex++;
        animationContainerElem.classList.add("colliding");
      } else {
        animationContainerElem.classList.remove("colliding");
      }
    },
  }
})


function doesCollide (elemPos1, elemPos2) {
    return elemPos1.left < elemPos2.left + elemPos2.width 
            && elemPos1.left + elemPos1.width > elemPos2.left
            && elemPos1.top < elemPos2.top + elemPos2.height 
            && elemPos1.height + elemPos1.top > elemPos2.top;
}


playButtonElem.addEventListener("click", (event) => {
  gameLoop();
});


let currentLoop = 0;
function gameLoop() {
  if (currentLoop === history.length) {
    currentLoop = 0;
    setTimeout(() => {
      gameLoop();
    }, 500);
    return;
  }

  let currentTranslation = history[currentLoop];
  animatedCharacterElem.style.transform = `translate(${currentTranslation[0]}px, ${currentTranslation[1]}px)`;
  animatedCharacterElem.classList.remove("hide");
  currentLoop++

  window.requestAnimationFrame(gameLoop);
}


let dataurl;
backgroundImageInputElem.addEventListener("change", (event) => {
  const file = backgroundImageInputElem.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // preview.src = reader.result;
    dataurl = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
});


// characterImageInputElem

















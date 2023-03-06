<template>
  <div class="o-scroll" id="js-scroll" data-scroll-container>
    <div data-scroll-section>
      <div class="o-container">
        <header class="c-header" id="header">
          <div class="c-header_heading" data-scroll data-scroll-speed="-8" data-scroll-position="top" data-scroll-target="#header" data-scroll-repeat>
            <div class="o-layout">
              <div class="o-layout_item u-1/2" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" data-scroll-position="top" data-scroll-target="#header">
                                    <span class="u-label c-header_heading_label">
                                        <a href="https://locomotive.ca" target="_blank" rel="noopener noreferrer">
                                            Locomotive.ca
                                        </a>
                                    </span>
              </div>
              <div class="o-layout_item u-1/2" data-scroll data-scroll-direction="horizontal" data-scroll-speed="2" data-scroll-position="top" data-scroll-target="#header">
                <div class="u-text-right">
                  <p class="u-label c-header_heading_label">
                    v4.x – Edition
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 class="c-header_title o-h1" data-scroll>
                            <span class="c-header_title_line">
                                <span data-scroll data-scroll-speed="3" data-scroll-position="top">Locomotive</span>
                            </span>
            <span class="c-header_title_line">
                                <span data-scroll data-scroll-speed="2" data-scroll-position="top">Scroll</span>
                            </span>
            <span class="c-header_title_line -version u-white">
                                <span class="o-h1" data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-delay="0.05">v</span><span class="o-h1" data-scroll data-scroll-speed="5" data-scroll-position="top" data-scroll-delay="0.05">4</span><span class="o-h1" data-scroll data-scroll-speed="2" data-scroll-position="top" data-scroll-delay="0.05">.</span><span class="o-h1" data-scroll data-scroll-speed="4" data-scroll-position="top" data-scroll-delay="0.05">X</span>
                            </span>
          </h1>
          <hr class="c-header_line" data-scroll data-scroll-offset="100" />
          <a class="c-header_logo" href="https://locomotive.ca" target="_blank">
            <svg role="img"><use xlink:href="dist/images/sprite.svg#logo"></use></svg>
          </a>
        </header>
      </div>
    </div>
  </div>
</template>
<script setup>
import LocomotiveScroll from 'locomotive-scroll';

(function() {

  document.documentElement.classList.add('is-loaded');
  document.documentElement.classList.remove('is-loading');

  setTimeout(() => {
    document.documentElement.classList.add('is-ready');
  },300)

  let options = {
    el: document.querySelector('#js-scroll'),
    smooth: true,
    getSpeed: true,
    getDirection: true
  }

  if(document.querySelector('#js-scroll').getAttribute('data-horizontal') === 'true') {
    options.direction = 'horizontal';
    options.gestureDirection = 'both';
    options.tablet = {
      smooth: true,
      direction: 'horizontal',
      horizontalGesture: true
    }
    options.smartphone = {
      smooth: false
    }
    options.reloadOnContextChange = true
  }

  setTimeout(() => {
    const scroll = new LocomotiveScroll(options);

    let dynamicBackgrounds = [];
    let dynamicColorElements = [];

    scroll.on('scroll', (instance) => {
      const progress = 360 * instance.scroll.y / instance.limit.y;

      scroll.el.style.backgroundColor = `hsl(${progress}, 11%, 81%)`;

      dynamicBackgrounds.forEach(obj => {
        obj.el.style.backgroundColor = `hsl(${progress}, 11%, 81%)`;
      });
      dynamicColorElements.forEach(obj => {
        obj.el.style.color = `hsl(${progress}, 11%, 81%)`;
      });

      document.documentElement.setAttribute('data-direction', instance.direction)

    });

    scroll.on('call', (value, way, obj) => {
      if (value === 'dynamicBackground') {
        if(way === 'enter') {
          dynamicBackgrounds.push({
            id: obj.id,
            el: obj.el
          });
        } else {
          for (var i = 0; i < dynamicBackgrounds.length; i++) {
            if(obj.id === dynamicBackgrounds[i].id) {
              dynamicBackgrounds.splice(i,1);
            }
          }
        }
      } else if (value === 'dynamicColor') {
        if(way === 'enter') {
          dynamicColorElements.push({
            id: obj.id,
            el: obj.el
          });
        } else {
          for (var i = 0; i < dynamicColorElements.length; i++) {
            if(obj.id === dynamicColorElements[i].id) {
              dynamicColorElements.splice(i,1);
            }
          }
        }
      }
    });

  }, 1000)

})();
</script>
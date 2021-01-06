import React from "react";

function Slider() {
  return (
    <section className="slider">
      <svg className="hidden">
        <symbol id="icon-arrow" viewBox="0 0 24 24">
          <title>arrow</title>
          <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
        </symbol>
        <symbol id="icon-drop" viewBox="0 0 24 24">
          <title>drop</title>
          <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z" />
          <path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z" />
        </symbol>
        <symbol id="icon-longarrow" viewBox="0 0 54 24">
          <title>longarrow</title>
          <path d="M.42 11.158L12.38.256c.333-.27.696-.322 1.09-.155.395.166.593.467.593.903v6.977h38.87c.29 0 .53.093.716.28.187.187.28.426.28.716v5.98c0 .29-.093.53-.28.716a.971.971 0 0 1-.716.28h-38.87v6.977c0 .416-.199.717-.592.903-.395.167-.759.104-1.09-.186L.42 12.62a1.018 1.018 0 0 1 0-1.462z" />
        </symbol>
        <symbol id="icon-navarrow" viewBox="0 0 408 408">
          <title>navarrow</title>
          <polygon
            fill="#fff"
            fill-rule="nonzero"
            points="204 0 168.3 35.7 311.1 178.5 0 178.5 0 229.5 311.1 229.5 168.3 372.3 204 408 408 204"
          ></polygon>
        </symbol>
      </svg>
      <main>
        <div className="frame">
          {/* <header className="codrops-header">
				<h1 className="codrops-header__title">Diagonal Slideshow</h1>
				<div className="codrops-links">
					<a className="github" href="https://github.com/codrops/DiagonalSlideshow/">GitHub</a>
					<a className="codrops-icon codrops-icon--prev" href="https://tympanus.net/Development/SlideOutBoxMenu/" title="Previous Demo">
						<svg className="icon icon--arrow">
							<use xlinkHref="#icon-arrow"></use>
						</svg>
					</a>
					<a className="codrops-icon codrops-icon--drop" href="https://tympanus.net/codrops/?p=35765" title="Back to the article">
						<svg className="icon icon--drop">
							<use xlinkHref="#icon-drop"></use>
						</svg>
					</a>
				</div>
			</header> */}
        </div>
        <div className="slideshow">
          <div className="slideshow__deco"></div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{ backgroundImage: "url(img/1.jpg)" }}
              ></div>
            </div>
            <div className="slide__side">Front &amp; End</div>
            <div className="slide__title-wrap">
              <span className="slide__number">1</span>
              <h3 className="slide__title">Front-End Dev</h3>
              <h4 className="slide__subtitle">
                A tree needs to be your friend if you're going to paint him
              </h4>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{ backgroundImage: "url(img/2.jpg" }}
              ></div>
            </div>
            <div className="slide__side">Random Roam</div>
            <div className="slide__title-wrap">
              <span className="slide__number">2</span>
              <h3 className="slide__title">Remote Learning</h3>
              <h4 className="slide__subtitle">
                This is probably the greatest thing to happen in my life
              </h4>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{ backgroundImage: "url(img/3.jpg)" }}
              ></div>
            </div>
            <div className="slide__side">Arbitrary Words</div>
            <div className="slide__title-wrap">
              <span className="slide__number">3</span>
              <h3 className="slide__title">Coexistence</h3>
              <h4 className="slide__subtitle">The only guide is your heart</h4>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{ backgroundImage: "url(img/4.jpg)" }}
              ></div>
            </div>
            <div className="slide__side">Haunted Drift</div>
            <div className="slide__title-wrap">
              <span className="slide__number">4</span>
              <h3 className="slide__title">Bellamio</h3>
              <h4 className="slide__subtitle">
                The only prerequisite is that it makes you happy
              </h4>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{ backgroundImage: "url(img/5.jpg)" }}
              ></div>
            </div>
            <div className="slide__side">Fun Diverge</div>
            <div className="slide__title-wrap">
              <span className="slide__number">5</span>
              <h3 className="slide__title">Pastures</h3>
              <h4 className="slide__subtitle">
                Let's go up in here, and start having some fun
              </h4>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{ backgroundImage: "url(img/6.jpg)" }}
              ></div>
            </div>
            <div className="slide__side">Hopes &amp; Dreams</div>
            <div className="slide__title-wrap">
              <span className="slide__number">6</span>
              <h3 className="slide__title">Focus</h3>
              <h4 className="slide__subtitle">
                This is unplanned it really just happens
              </h4>
            </div>
          </div>
          <button className="nav nav--prev">
            <svg className="icon icon--navarrow-prev">
              <use xlinkHref="#icon-navarrow"></use>
            </svg>
          </button>
          <button className="nav nav--next">
            <svg className="icon icon--navarrow-next">
              <use xlinkHref="#icon-navarrow"></use>
            </svg>
          </button>
        </div>
        <div className="content">
          <div className="content__item">
            <span className="content__number">1</span>
            <h3 className="content__title">Front-End Development</h3>
            <h4 className="content__subtitle">
              A tree needs to be your friend if you're going to paint him
            </h4>
            <div className="content__text">
              Just let this happen. We just let this flow right out of our
              minds. Just relax and let it flow. That easy. Let's put some happy
              little clouds in our world. It's a very cold picture, I may have
              to go get my coat. It’s about to freeze me to death. This is gonna
              be a happy little seascape. Let's go up in here, and start having
              some fun The least little bit can do so much. Work on one thing at
              a time. Don't get carried away - we have plenty of time. Put your
              feelings into it, your heart, it's your world. These trees are so
              much fun. I get started on them and I have a hard time stopping.
            </div>
          </div>
          <div className="content__item">
            <span className="content__number">2</span>
            <h3 className="content__title">Remote learning</h3>
            <h4 className="content__subtitle">
              This is probably the greatest thing to happen in my life
            </h4>
            <div className="content__text">
              We're not trying to teach you a thing to copy. We're just here to
              teach you a technique, then let you loose into the world. Now,
              we're going to fluff this cloud. We don't have anything but happy
              trees here. Let's do that again. Use what you see, don't plan it.
              Let's go up in here, and start having some fun The least little
              bit can do so much. Work on one thing at a time. Don't get carried
              away - we have plenty of time. Put your feelings into it, your
              heart, it's your world. These trees are so much fun. I get started
              on them and I have a hard time stopping.
            </div>
          </div>
          <div className="content__item">
            <span className="content__number">3</span>
            <h3 className="content__title">Coexistence</h3>
            <h4 className="content__subtitle">The only guide is your heart</h4>
            <div className="content__text">
              Let's go up in here, and start having some fun The least little
              bit can do so much. Work on one thing at a time. Don't get carried
              away - we have plenty of time. Put your feelings into it, your
              heart, it's your world. These trees are so much fun. I get started
              on them and I have a hard time stopping. But we're not there yet,
              so we don't need to worry about it. Now let's put some happy
              little clouds in here. What the devil. A thin paint will stick to
              a thick paint. I'm going to mix up a little color.{" "}
            </div>
          </div>
          <div className="content__item">
            <span className="content__number">4</span>
            <h3 className="content__title">Bellamio</h3>
            <h4 className="content__subtitle">
              The only prerequisite is that it makes you happy
            </h4>
            <div className="content__text">
              See. We take the corner of the brush and let it play
              back-and-forth. This is unplanned it really just happens. I'm sort
              of a softy, I couldn't shoot Bambi except with a camera. I guess
              I'm a little weird. I like to talk to trees and animals. That's
              okay though; I have more fun than most people. We'll play with
              clouds today. Didn't you know you had that much power? You can
              move mountains. You can do anything. Let's go up in here, and
              start having some fun The least little bit can do so much. Work on
              one thing at a time. Don't get carried away - we have plenty of
              time. Put your feelings into it, your heart, it's your world.
              These trees are so much fun. I get started on them and I have a
              hard time stopping.
            </div>
          </div>
          <div className="content__item">
            <span className="content__number">5</span>
            <h3 className="content__title">Pastures</h3>
            <h4 className="content__subtitle">
              Let's go up in here, and start having some fun
            </h4>
            <div className="content__text">
              So often we avoid running water, and running water is a lot of
              fun. Everyone is going to see things differently - and that's the
              way it should be. A big strong tree needs big strong roots. Steve
              wants reflections, so let's give him reflections. We don't have to
              be committed. We are just playing here. Making all those little
              fluffies that live in the clouds. Let's go up in here, and start
              having some fun The least little bit can do so much. Work on one
              thing at a time. Don't get carried away - we have plenty of time.
              Put your feelings into it, your heart, it's your world. These
              trees are so much fun. I get started on them and I have a hard
              time stopping.
            </div>
          </div>
          <div className="content__item">
            <span className="content__number">6</span>
            <h3 className="content__title">Focus</h3>
            <h4 className="content__subtitle">
              This is unplanned it really just happens
            </h4>
            <div className="content__text">
              But we're not there yet, so we don't need to worry about it. Now
              let's put some happy little clouds in here. What the devil. A thin
              paint will stick to a thick paint. I'm going to mix up a little
              color. We’ll use Van Dyke Brown, Permanent Red, and a little bit
              of Prussian Blue. Let's go up in here, and start having some fun
              The least little bit can do so much. Work on one thing at a time.
              Don't get carried away - we have plenty of time. Put your feelings
              into it, your heart, it's your world. These trees are so much fun.
              I get started on them and I have a hard time stopping.
            </div>
          </div>
          <button className="content__close">
            <svg className="icon icon--longarrow">
              <use xlinkHref="#icon-longarrow"></use>
            </svg>
          </button>
        </div>
      </main>
    </section>
  );
}

export default Slider;

import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons';

import { DotButton, useDotButton } from './EmblaCarouselDotButtons';
import { LazyLoadImage } from './EmblaCarouselLazyLoadingImage';

import "./base.css";
import "./embla.css";

const TWEEN_FACTOR_BASE = 0.2

const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const tweenFactor = useRef(0)
    const tweenNodes = useRef([])

    const [slidesInView, setSlidesInView] = useState([]); // for lazy loading

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const setTweenNodes = useCallback((emblaApi) => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__parallax__layer')
        })
    }, [])

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenParallax = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target()

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }

                const translate = diffToTarget * (-1 * tweenFactor.current) * 100
                const tweenNode = tweenNodes.current[slideIndex]
                tweenNode.style.transform = `translateX(${translate}%)`
            })
        })
    }, [])

    // for lazy loading
    const updateSlidesInView = useCallback((emblaApi) => {
        setSlidesInView((slidesInView) => {
            if (slidesInView.length === emblaApi.slideNodes().length) {
                emblaApi.off('slidesInView', updateSlidesInView)
            }
            const inView = emblaApi
                .slidesInView()
                .filter((index) => !slidesInView.includes(index))
            return slidesInView.concat(inView)
        })
    }, []);
    // ended the function for lazy loading feature

    useEffect(() => {
        if (!emblaApi) return

        updateSlidesInView(emblaApi); // for lazy loading

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenParallax(emblaApi)

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenParallax)
            .on('scroll', tweenParallax)
            .on('slideFocus', tweenParallax)
    }, [emblaApi, tweenParallax])


    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__parallax">
                                {/* <div className="embla__parallax__layer"> */} {/* This div's classname was migrated and used in LazyLoadImage div as classname, in future any problem occurred to this parallex effect due to divs setting then try to uncomment this div and remove this classname from LazyLoadImage first div */}
                                {/* <img
                                        className="embla__slide__img embla__parallax__img"
                                        src={`https://picsum.photos/1920/1080?v=${index}`}
                                        alt="Your alt text"
                                        loading='lazy'
                                    /> */}
                                {/* lazy loading component */}
                                <LazyLoadImage
                                    key={index}
                                    index={index}
                                    imgSrc={`https://picsum.photos/1920/1080?v=${index}`}
                                    inView={slidesInView.indexOf(index) > -1}
                                />
                                {/* lazy loading component ended*/}
                                {/* </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected border-red-500' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel

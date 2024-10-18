import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll';
import {useEffect, useState} from "react";

const ProjectCarousel = ({components}) => {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        stopOnInteraction: true
    }, [AutoScroll()]);
    return (
        <div className={"embla"} ref={emblaRef}>
            <div className="embla__container">
                {components.map((text, index) => (
                    <div key={index} className={"embla__slide"}><p>{text}</p></div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCarousel;
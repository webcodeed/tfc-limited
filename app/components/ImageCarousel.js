'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import Image from 'next/image';

const ImageCarousel = ({ images, direction = 'left', speed = 20, title, description }) => {
  const tickerRef = useRef(null);
  const controls = useAnimation();
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Create enough duplicates for seamless scrolling (more for fewer images)
  const getOptimalDuplicates = (imageCount) => {
    if (imageCount <= 4) return 6; // 6 sets for very few images (better coverage)
    if (imageCount <= 6) return 4; // 4 sets for few images  
    return 3; // 3 sets for many images
  };

  const duplicateCount = getOptimalDuplicates(images.length);
  const duplicatedImages = Array(duplicateCount).fill(images).flat();

  // Calculate scroll width when images are ready
  useEffect(() => {
    if (tickerRef.current) {
      // Multiple checks to ensure accurate measurement
      const measureScrollWidth = () => {
        if (tickerRef.current) {
          const totalWidth = tickerRef.current.scrollWidth;
          const singleSetWidth = totalWidth / duplicateCount;
          setScrollWidth(singleSetWidth);
          setIsReady(true);
        }
      };

      // Wait for images to load and layout to complete
      const timeout1 = setTimeout(measureScrollWidth, 200);
      
      // Backup measurement after a longer delay
      const timeout2 = setTimeout(measureScrollWidth, 500);

      // Cleanup function to clear timeouts
      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [images, duplicateCount]);

  // Start animation when everything is ready
  useEffect(() => {
    if (scrollWidth > 0 && isReady) {
      const animationDirection = direction === 'left' ? [0, -scrollWidth] : [-scrollWidth, 0];
      
      controls.start({
        x: animationDirection,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        },
      });
    }
  }, [scrollWidth, controls, direction, speed, isReady]);

  if (!images.length) return null;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink-900 mb-4">
          {title}
        </h3>
        <p className="text-base md:text-lg text-ink-600 max-w-2xl mx-auto px-4">
          {description}
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-cream-50 to-white p-4 md:p-8 shadow-sm cursor-pointer transition-opacity duration-300 ${
          isReady ? 'opacity-100' : 'opacity-50'
        }`}
        onMouseEnter={() => controls.stop()} // Pause on hover
        onMouseLeave={() => {
          if (scrollWidth > 0 && isReady) {
            const animationDirection = direction === 'left' ? [0, -scrollWidth] : [-scrollWidth, 0];
            controls.start({
              x: animationDirection,
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: speed,
                  ease: "linear",
                },
              },
            });
          }
        }}
      >
        <motion.div 
          ref={tickerRef}
          animate={controls}
          className="flex gap-4 sm:gap-6 md:gap-8 items-center will-change-transform"
          style={{ 
            width: 'max-content',
            transform: direction === 'left' ? 'translateX(0)' : `translateX(-${scrollWidth}px)`
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.alt}-${index}`}
              className="flex-shrink-0 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-2 sm:p-3 md:p-4 w-40 h-20 sm:w-48 sm:h-24 md:w-60 md:h-28 flex items-center justify-center group"
              style={{ minWidth: '160px', minHeight: '80px' }} // Increased minimum size for mobile
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain transition-all duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 240px"
                  priority={index < images.length} // Prioritize first set of images
                  onLoad={() => {
                    // Ensure measurements happen after images load
                    if (index === images.length - 1 && !isReady) {
                      setTimeout(() => {
                        if (tickerRef.current) {
                          const totalWidth = tickerRef.current.scrollWidth;
                          const singleSetWidth = totalWidth / duplicateCount;
                          setScrollWidth(singleSetWidth);
                          setIsReady(true);
                        }
                      }, 50);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for seamless edges */}
        <div className="absolute left-0 top-0 w-6 sm:w-8 md:w-16 h-full bg-gradient-to-r from-cream-50 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-6 sm:w-8 md:w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ImageCarousel;
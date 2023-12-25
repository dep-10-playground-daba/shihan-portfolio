import * as React from 'react';
import { useEffect, useState } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Replace with your actual number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div>
      {/* Carousel content */}
      <div style={{display: currentSlide === 0 ? 'block' : 'none'}}>
        {/* Slide 1 content */}
        <div className="bg-slate-50 p-4 rounded-2xl">
          <ul role="list" className="grid grid-cols-1 gap-4 list-none lg:pr-12">
            <li>
              <div>
                <p className="font-semibold text-purple-900 text-lg lg:text-xl">Weeks <span className="lg:block">to minutes</span></p>
              </div>
              <div className="mt-2 text-slate-500 text-sm">Reduction in customer onboarding time</div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-purple-900 text-lg lg:text-xl">2-5x <span className="lg:block">faster</span></p>
              </div>
              <div className="mt-2 text-slate-500 text-sm">Fast reconciliation with a single report</div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-purple-900 text-sm">Products used</p>
              </div>
              <div className="mt-2 text-slate-500 text-sm inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-3">
                  <path className="stroke-purple-500" stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"></path>
                </svg>
                Deployments
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div style={{display: currentSlide === 1 ? 'block' : 'none'}}>
      <div className="bg-slate-50 p-4 rounded-2xl">
          <ul role="list" className="grid grid-cols-1 gap-4 list-none lg:pr-12">
            <li>
              <div>
                <p className="font-semibold text-purple-900 text-lg lg:text-xl">Weeks <span className="lg:block">to minutes</span></p>
              </div>
              <div className="mt-2 text-slate-500 text-sm">Reduction in customer onboarding time</div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-purple-900 text-lg lg:text-xl">2-5x <span className="lg:block">faster</span></p>
              </div>
              <div className="mt-2 text-slate-500 text-sm">Fast reconciliation with a single report</div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-purple-900 text-sm">Products used</p>
              </div>
              <div className="mt-2 text-slate-500 text-sm inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-3">
                  <path className="stroke-purple-500" stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"></path>
                </svg>
                Deployments
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div style={{display: currentSlide === 2 ? 'block' : 'none'}}>
      <div className="bg-slate-50 p-4 rounded-2xl">
          <ul role="list" className="grid grid-cols-1 gap-4 list-none lg:pr-12">
            <li>
              <div>
                <p className="font-semibold text-purple-900 text-lg lg:text-xl">Weeks <span className="lg:block">to minutes</span></p>
              </div>
              <div className="mt-2 text-slate-500 text-sm">Reduction in customer onboarding time</div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-purple-900 text-lg lg:text-xl">2-5x <span className="lg:block">faster</span></p>
              </div>
              <div className="mt-2 text-slate-500 text-sm">Fast reconciliation with a single report</div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-purple-900 text-sm">Products used</p>
              </div>
              <div className="mt-2 text-slate-500 text-sm inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-3">
                  <path className="stroke-purple-500" stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"></path>
                </svg>
                Deployments
              </div>
            </li>
          </ul>
        </div>
      </div>

      <button onClick={() => setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides)}>Previous</button>
      <button onClick={() => setCurrentSlide((currentSlide + 1) % totalSlides)}>Next</button>
    </div>
  );
}

export default Carousel;

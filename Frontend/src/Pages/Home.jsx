import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <div className='min-h-screen w-full flex flex-col items-center justify-center text-white relative'>
     
        <div className='absolute inset-0 z-0'>
          <img 
            src="https://imgs.search.brave.com/AdnbX4X-gpYV0tZpUVxh4Ef2TGpgH47zrkIqCJVnS28/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/MjM1NzE1OS9waG90/by9tb2Rlcm4tYmVh/Y2gtaG91c2Utd2l0/aC1zZWEtdmlldy1z/d2ltbWluZy1wb29s/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ZZHRkMkYyWlJO/TkFKaW94Ym15M1ZC/OXNLMEViWi1WSjVB/UnltUmVNNWRrPQ" 
            alt="Luxury Interior" 
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/30'></div>
        </div>
      
        <div className='z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto'>
          <div className='bg-amber-600/80 text-white text-xs sm:text-sm font-medium py-2 px-4 sm:px-6 rounded-full inline-block mb-6 sm:mb-8'>
            YOUR GATEWAY TO LUXURY & SERENITY
          </div>
          
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-3 sm:mb-4'>
            Experience The <span className='text-amber-400'>ICONIC</span> Life
          </h1>
          
          <p className='text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 px-2'>
            Exclusive luxury villas and world-class experiences on the 
            pristine coast of Andhra Pradesh
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-amber-600 hover:bg-amber-700 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-md transition text-sm sm:text-base'>
              Book Your Stay
            </button>
            <button className='border border-white hover:bg-white/10 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-md transition text-sm sm:text-base'>
              Own Your Luxury Retreat
            </button>
          </div>
        </div>
      
        <div className='absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      
      <div className='bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8'>
        <div className='max-w-6xl mx-auto text-center'>
          <div className='bg-amber-900/30 text-amber-300 text-xs sm:text-sm font-medium py-2 px-4 sm:px-6 rounded-full inline-block mb-8 sm:mb-10'>
            THE VISION BEHIND ICONIC OCEAN EDGE
          </div>
          
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-8 sm:mb-10'>
            Creating Extraordinary<br className='hidden sm:block' />Moments & Memories
          </h2>
          
          <p className='text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto px-2'>
            ICONIC Ocean Edge is a testament to luxury living with unparalleled 
            experiences on the pristine coastline of Andhra Pradesh. Designed 
            for discerning individuals who value exclusivity and sophistication.
          </p>
        </div>

        <div className='max-w-7xl mt-16 sm:mt-28 mx-auto'>
          <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
            <div className='w-full md:w-1/2 relative px-4 sm:px-0'>
              <div className='rounded-lg overflow-hidden'>
                <img 
                  src="https://imgs.search.brave.com/AdnbX4X-gpYV0tZpUVxh4Ef2TGpgH47zrkIqCJVnS28/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/MjM1NzE1OS9waG90/by9tb2Rlcm4tYmVh/Y2gtaG91c2Utd2l0/aC1zZWEtdmlldy1z/d2ltbWluZy1wb29s/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ZZHRkMkYyWlJO/TkFKaW94Ym15M1ZC/OXNLMEViWi1WSjVB/UnltUmVNNWRrPQ" 
                  alt="Luxury Experience" 
                  className='w-full h-full object-cover'
                />
              </div>
              
            </div>
            
            <div className='w-full md:w-1/2 px-4 sm:px-6 md:px-0'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6'>Our Legacy of Excellence</h2>
              <p className='text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base'>
                With over 15 years of experience in crafting exceptional living spaces, ICONIC
                brings its legacy of credibility, innovation, and customer trust to Ocean Edge. Our
                mission is to create a world-class luxurious and secure getaway that redefines
                coastal living in India.
              </p>
              
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8'>
                {/* Features 1-4 remain the same as they're already responsive */}
                <div className='bg-gray-900/50 p-4 sm:p-6 rounded-lg'>
                  <div className='text-amber-500 mb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className='text-lg sm:text-xl font-medium mb-2'>Unmatched Security</h3>
                  <p className='text-gray-400 text-sm sm:text-base'>State-of-the-art systems ensuring peace of mind at all times.</p>
                </div>
                
                <div className='bg-gray-900/50 p-4 sm:p-6 rounded-lg'>
                  <div className='text-amber-500 mb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className='text-lg sm:text-xl font-medium mb-2'>Premium Quality</h3>
                  <p className='text-gray-400 text-sm sm:text-base'>Exceptional craftsmanship and materials in every detail.</p>
                </div>
                
                <div className='bg-gray-900/50 p-4 sm:p-6 rounded-lg'>
                  <div className='text-amber-500 mb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className='text-lg sm:text-xl font-medium mb-2'>Exclusive Amenities</h3>
                  <p className='text-gray-400 text-sm sm:text-base'>Curated experiences designed for the discerning few.</p>
                </div>
                
                <div className='bg-gray-900/50 p-4 sm:p-6 rounded-lg'>
                  <div className='text-amber-500 mb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className='text-lg sm:text-xl font-medium mb-2'>Award-Winning</h3>
                  <p className='text-gray-400 text-sm sm:text-base'>Recognized excellence in design and hospitality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
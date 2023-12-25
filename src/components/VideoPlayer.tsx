import ReactPlayer1 from "react-player";

const ReactPlayer = typeof ReactPlayer1 === 'function' ? ReactPlayer1 : ReactPlayer1.default;
export default function VideoPlayer(props) {

    return (
    <>
    {/* <div className="flex justify-center text-center mt-[50px] lg:mt-[100px] mx-auto z-10 max-w-[1200px]">
        <h3 className="text-4xl font-semibold lg:text-6xl z-10 px-12 mb-12">What Really Wildcard is?
        <br />
        <span className="text-blue-600 text-2xl lg:text-4xl text-bold text-cnter ">Watch This Video To Know More...</span>
        </h3>
    </div> */}
      <div className=" w-full px-12 py-12 flex justify-center">
        <div className="flex justify-center w-full min-h-[150px] max-h-[400px] max-w-[800px]"
        >
          <ReactPlayer
            playing={true}
            url={props.videoUrl}
            controls={true}
            volume={1}
            width="100%"
            height="auto"
            // playIcon={<button className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] flex justify-center items-center"><span className="relative flex"><svg className="animate-ping duration-1000 absolute inline-flex" xmlns="http://www.w3.org/2000/svg" height="128" width="96" viewBox="0 0 384 512"><path fill="#ff9500" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg><svg className="relative inline-flex " xmlns="http://www.w3.org/2000/svg" height="128" width="96" viewBox="0 0 384 512"><path fill="#ff9500" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></span></button>}
            playIcon={
            <span className="relative flex min-h-[50px]  sm:h-[250px] md:h-[450px] lg:h-[600px]  justify-center items-center">
            <svg className="animate-ping duration-1000 absolute inline-flex h-[30px] sm:h-[100px] md:h-[200px] lg:h-[350px]" width="100px" height="100px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title>70 Basic icons by Xicons.co</title><path d="M24,2A22,22,0,1,0,46,24,22,22,0,0,0,24,2Z" fill={props.buttonPddingColor}/><path d="M19.4,33.1V14.9A1,1,0,0,1,21,14.08l13.23,9.1a1,1,0,0,1,0,1.65L21,33.92A1,1,0,0,1,19.4,33.1Z" fill={props.BubuttonCenterColor}/></svg>
            <svg className="relative inline-flex h-[30px] sm:h-[100px] md:h-[200px] lg:h-[350px]" width="100px" height="100px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title>70 Basic icons by Xicons.co</title><path d="M24,2A22,22,0,1,0,46,24,22,22,0,0,0,24,2Z" fill={props.buttonPddingColor}/><path d="M19.4,33.1V14.9A1,1,0,0,1,21,14.08l13.23,9.1a1,1,0,0,1,0,1.65L21,33.92A1,1,0,0,1,19.4,33.1Z" fill={props.BubuttonCenterColor}/></svg>

            </span>
            }
            light={props.coverUrl}
            className="flex justify-center h-[300px]  max-w-[1400px] hover:cursor-pointer"
          />
        
  
        </div>
      </div>
    </>
    );
  }
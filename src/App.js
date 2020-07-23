import React from 'react';
import MePic from './images/me.jpg'
import ReactPic from './images/react.png'
import PythonPic from './images/python.png'
import JSPic from './images/js.png'
import FirebasePic from './images/firebase.png'
import NodePic from './images/node.png'
import Arrow from './images/arrow2.png'
import './App.css'
import Parallax from 'react-rellax'
import Typewriter from 'typewriter-effect';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Fade from 'react-reveal/Fade';


function App() {
  return (
    <>
    <div className='landing-section'>
      <div style={{display: 'flex', alignSelf: 'center'}}>
      <Parallax speed={10}>
        <h1 id='myname'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('tom pettit')
                .start();
            }}
          />
        </h1>
        </Parallax>
      </div>
      <div style={{display: 'block', textAlign: 'center', zIndex: 1, position: 'relative'}}>
      <Parallax speed={-5} id='arrow' style={{zIndex: 1, position: 'relative'}}>
        <img src={Arrow} height='50' width='50'></img>
      </Parallax>
      </div>
    </div>

    <div className="about-section" style={{marginTop: '0', position: 'relative'}} >
      <div style={{position: 'relative', bottom: 0}}>
        <div className='left-side' style={{fontFamily: 'Nunito Sans'}}>
          <Parallax id='about-para' speed={2}>
            <h1 id='about-title'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('about me')
                  .start();
              }}
            />
            </h1>
            <p id='mydesc'>Computer Science Student at Durham University</p>
            <p id='mydesc'>Web Developer</p>
            <p id='mydesc'>Python Programmer</p>

          </Parallax>
        </div>

        <div className='right-side'>
          <Parallax id='about-pic' speed={1}>
            <img id='meimg' src={MePic} style={{borderRadius: '50%'}}></img>
          </Parallax>
        </div>
      </div>
    </div>

    <div className="technologies-section" style={{position: 'relative'}}>
      <div style={{position: 'relative', textAlign: 'center'}}>
        <div style={{position: 'relative', bottom: 0}}>
          <div id='technologyword' style={{textAlign: 'center', position: 'relative', bottom: 0, display: 'inline-block'}}>
            <Parallax speed={-3} style={{height: '229px', bottom: 0, fontFamily: 'Orbitron'}}>
                <h1>technologies</h1>
            </Parallax>
          </div>
        </div>

        <div style={{textAlign: 'center', display: 'inline-block', paddingTop: '100vh'}}>
          <div style={{display: 'inline-block'}}>
            <div id='technologylogos' style={{display: 'table-row', position: 'relative', bottom: 0, width: '100%'}}>
              <Parallax speed={1} style={{display: 'table-cell'}}>
                <img id='reactpic' src={ReactPic} />
              </Parallax>
              
              <Parallax speed={3} style={{display: 'table-cell'}}>
                <img id='pythonpic' src={PythonPic} />
              </Parallax>

              <Parallax speed={2} style={{display: 'table-cell'}}>
                <img id='jspic' src={JSPic} />
              </Parallax>

              <Parallax speed={4} style={{display: 'table-cell'}}>
                <img id='firebasepic' src={FirebasePic} height='230' width='230' />
              </Parallax>

              <Parallax speed={0.5} style={{display: 'table-cell'}}>
                <img id='nodepic' src={NodePic} height='175' width='195' />
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className='another-section'>
    </div>
    </>
  );
}

export default App;

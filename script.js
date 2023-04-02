// *************************************************************
//                    page full screen code
// *************************************************************
const fullScreen = document.getElementById('full');
fullScreen.addEventListener('click', goToFull);
const elem = document.documentElement;

function goToFull(e) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}

// *************************************************************
//                    youtube full screen code
// *************************************************************
const theFrame = document.getElementById('vid__frame');
const fullVid = document.getElementById('vid-full');

fullVid.addEventListener('click', () => {
  theFrame.style.display = 'block';

  theFrame.requestFullscreen();
  theFrame.setAttribute('src', 'https://www.youtube.com/embed/MQ8ZKw7YIfQ?start=2801&autoplay=1');

  setTimeout(() => {
    // document.exitFullscreen();
    console.log('tried to stop');
    theFrame.setAttribute('src', 'https://www.youtube.com/embed/MQ8ZKw7YIfQ');
    theFrame.style.display = 'none';
  }, 121000)
});

// *************************************************************
//                    loading and spinning images
// *************************************************************
const picArray = [
  './pix/aunt-mildred-unc-elliott.png',
  './pix/dad-baby-tim.png',
  './pix/family-dad.png',
  './pix/floyd-dana-tim-who.png',
  './pix/tim-mom-desert-unknown-car.png',
]

const pic = document.getElementById('pic');
let lnth = picArray.length;

async function someProcedure (n) {
  for (let i = 0; i < n; i++) {
    pic.src = picArray[i];
    
    const x = await new Promise(r => setTimeout(r, 25000, i));
    console.log (i, x, pic.src);
  }

  if (i = n) {
    i = 0;
  }
  someProcedure(lnth);
  // return 'done';
}

someProcedure(lnth);

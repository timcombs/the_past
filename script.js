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
  './pix/floyd-dana-tim-who.png',
  './pix/tim-larry.png',
  './pix/tim-mom-desert-unknown-car.png',
  './pix/68-commemoration-drKing-reagan-hater.png',
  './pix/auntdj-unclegary-carma.png',
  './pix/tim-mom-dad-overlooking-alcatraz.png',
  './pix/agar-grandparent-house-newton-iowa.png',
  './pix/tim-mom-dad-overlooking-alcatraz.png',
  './pix/ma-tim-aunt-dora-grandpa-floyd-etc.png',
  './pix/tim-neighbor-kids.png',
  './pix/dad-lloyd-barbers.png',
  './pix/golden-gate-bridge.png',
  './pix/tim-mom-no-baby-seat-utah.png',
  './pix/mom-dad-turner-falls-park-oklahoma.png',
  './pix/grandparalph.png',
  './pix/granpaphil-grandmaruth.png',
  './pix/interracial-couple.png',
  './pix/tim-sabrina.png',
  './pix/ma-writing-packing.png',
  './pix/mom-dad-des-moines.png',
  './pix/delmar-sammy-uncle-lloyd-tim-etc.png',
  './pix/mom-lake-texarkana.png',
  './pix/lil-lloyd-claudia.png',
  './pix/mom-near-stinson-beach.png',
  './pix/mom-tim-j-el-moro-puerto-rico.png',
  './pix/mormon-tabernacle-salt-lake.png',
  './pix/sacramento-hippies-tim-mom.png',
  './pix/tim-kim-first-birthday-ogden.png',
  './pix/tim-john-muir-first-grade-fresno.png',
  './pix/tim-mom-christmas-mojave-desert.png',
  './pix/tim-mom-alphonso-tombstone.png',
  './pix/tim-mom-others-victorville.png',
  './pix/tim-mom-dad-land-park-sacramento.png',
  './pix/tim-pool.png',
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

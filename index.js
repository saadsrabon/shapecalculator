// function for  getting input value by id
function getInputValueById(id) {
 const value=document.getElementById(id).value;
 return parseFloat(value);
}

// get Triangle Areas

function getTriangleArea() {
  const base = getInputValueById('triangle-base');
  const height = getInputValueById('triangle-height');
  const area = 0.5 * base * height;
//   he
 
  document.getElementById('triangle-area').innerText= area;
  document.getElementById('triangle-base').value="";
    document.getElementById('triangle-height').value="";
    
}

// Get Rectangle Area
function getRectangleArea() {
  const length = getInputValueById('rectangle-length');
  const width = getInputValueById('rectangle-width');
  const area = length * width;
    document.getElementById('rectangle-area').innerText= area;
}
// Get Parallelogram Area
function getParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;
        document.getElementById('parallelogram-area').innerText= area;
    }
// Get Rhombus Area
function getRhombusArea() {
    const base = getInputValueById('rhombus-base');
    const height = getInputValueById('rhombus-height');
    const area = base * height;
        document.getElementById('rhombus-area').innerText= area;
        base.innerText="";
        height.innerText="";
    }    

    const a=5;
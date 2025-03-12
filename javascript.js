
var allHeartElement = []

function drawElement(x,R){

    const offSetR = 50
    const xmlns = "http://www.w3.org/2000/svg"
    const path = 'M10 17.12c3.33-1.4 5.74-3.79 7.04-6.21c1.28-2.41 1.46-4.81.32-6.25c-1.03-1.29-2.37-1.78-3.73-1.74s-2.68.63-3.63 1.46c-.95-.83-2.27-1.42-3.63-1.46s-2.7.45-3.73 1.74c-1.14 1.44-.96 3.84.34 6.25c1.28 2.42 3.69 4.81 7.02 6.21z'
    const viewBox = " 0 0 20 20"
    var centerPoint = [0,((Math.acos(1) - 3.14)*R)/2]


    // Create Svg element
    var heartIconSvg1 = document.createElementNS(xmlns,'svg')
    var heartIconSvg2 = document.createElementNS(xmlns,'svg')
    heartIconSvg1.setAttributeNS(null,'viewBox',viewBox)
    heartIconSvg2.setAttributeNS(null,'viewBox',viewBox)
 
    var randomSize1 = Math.floor(Math.random()*(25-20) + 20)
    var randomSize2 = Math.floor(Math.random()*(25-20) + 20)

    heartIconSvg1.setAttributeNS(null,"width",randomSize1 + "px")
    heartIconSvg1.setAttributeNS(null,"height",randomSize1 + "px")
    heartIconSvg2.setAttributeNS(null,"width",randomSize2 + "px")
    heartIconSvg2.setAttributeNS(null,"height",randomSize2 + "px")

    heartIconSvg1.setAttributeNS(null,"class","heartElementIcon")
    heartIconSvg2.setAttributeNS(null,"class","heartElementIcon")

    // Create Path element

    var heartIconPath1 = document.createElementNS(xmlns,'path')
    heartIconPath1.setAttributeNS(null,'d',path)

    var heartIconPath2 = document.createElementNS(xmlns,'path')
    heartIconPath2.setAttributeNS(null,'d',path)

   
    heartIconSvg1.appendChild(heartIconPath1)
    heartIconSvg2.appendChild(heartIconPath2)

 

    // Create div for cordinate
    var heartElement1 = document.createElement('div')
    heartElement1.className = "heartElementContainer" 
    var heartElement2 = document.createElement('div')
    heartElement2.className = "heartElementContainer"
    heartElement1.appendChild(heartIconSvg1)
    heartElement2.appendChild(heartIconSvg2)

 

    //calculate cordinate
    var y1out = Math.sqrt(Math.pow(R,2)-Math.pow((Math.abs(x)-R),2))
    var y2out = (Math.acos(1-Math.abs(x/R)) - 3.14)*R

    var x1out = x
    var x2out = x

    var x1=-2*R
    var x2 = 2*R
    var y1 = -2*(R-offSetR)
    var y2 = 2*(R-offSetR)

    var x1in = (x-x1)*(y2-y1)/(x2-x1)+y1
    var x2in = x1in
    
    var y1in = Math.sqrt(Math.pow(R-offSetR,2)-Math.pow((Math.abs(x1in)-(R-offSetR)),2))-offSetR
    var y2in = (Math.acos(1-Math.abs(x2in/(R-offSetR))) - 3.14)*(R-offSetR)-offSetR


    heartElement1.style.left = x1out + "px"
    heartElement1.style.top = -(y1out) + "px"

    heartElement2.style.left = x2out+ "px"
    heartElement2.style.top = -(y2out) + "px"

    var cordinate = document.getElementById("cordinate")
    cordinate.appendChild(heartElement1)
    cordinate.appendChild(heartElement2)

    const keyframes1 = {
        left:[x1in +"px",x1out +"px",x1out +"px"],
        top:[-y1in +"px",-y1out +"px",-y1out +"px"],
        opacity: [ 0, 1 ,0],
        offset: [ 0, 0.7], 
        // easing: [ 'ease-in'],
      }
    const keyframes2 = {
        left:[x2in +"px",x2out +"px",x2out +"px"],
        top:[-y2in +"px",-y2out +"px",-y2out +"px"],
        opacity: [ 0, 1 ,0],
        offset: [ 0, 0.7], 
        // easing: [ 'ease-in'],
      }
    const heartkeyframes = {
        width:["10px","30px"],
        height:["10px","30px"],
      }
    const option = {
        duration: 2500,
        iterations: Infinity,
        iterationStart :Math.random()
      }

    heartIconSvg1.animate(heartkeyframes,option)
    heartIconSvg2.animate(heartkeyframes,option)
    heartElement1.animate(keyframes1,option)
    heartElement2.animate(keyframes2,option)

}

 

var R=150
var xMin = -2*R
var xMax = 2*R
var totalPoint = 300
var step = (xMax-xMin)/totalPoint

 

for(var i = 0;i<=totalPoint ; ++i){
    if((xMin+i*step) === 2*R || (xMin+i*step)=== -2*R){
        for(var j=1;j<=9;++j){
            drawElement(xMin + i*step + 0.2*j,R)
        }
    }else{
        drawElement(xMin + i*step,R)
    }

}

 
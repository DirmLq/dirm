let pics3 = [
    'url("./assets/nterm1.png")',
    'url("./assets/nterm2.png")',
    'url("./assets/nterm3.png")',
    'url("./assets/nterm4.png")',
    'url("./assets/nterm5.png")',
    'url("./assets/nterm6.png")',
    'url("./assets/nterm7.png")',
    'url("./assets/nterm8.png")',
    'url("./assets/nterm9.png")',
    'url("./assets/nterm10.png")',
    'url("./assets/nterm11.png")',
    'url("./assets/nterm12.png")',
    'url("./assets/nterm13.png")',
    'url("./assets/nterm14.png")',
    'url("./assets/nterm15.png")',
    'url("./assets/nterm16.png")',
    'url("./assets/nterm17.png")',
    'url("./assets/nterm18.png")',
    'url("./assets/nterm19.png")',
    'url("./assets/nterm20.png")',
    'url("./assets/nterm21.png")',
    'url("./assets/nterm22.png")',
    'url("./assets/nterm23.png")',
  
  ];
  
  let pic3 = document.getElementById('grid-item-2');
  
  
  function showImage(){
    console.log(a);
    var a = Math.floor(Math.random()*pics3.length)
    var img = pics3[a];
    console.log(img);
    pic3.style.backgroundImage = img;
  }
  
  let pics2 = [
    'url("assets/sterm1.png")',
    'url("assets/sterm2.png")',
    'url("assets/sterm3.png")',
    'url("assets/sterm4.png")',
    'url("assets/sterm5.png")',
    'url("assets/sterm6.png")',
    'url("assets/sterm7.png")',
    'url("assets/sterm8.png")',
    'url("assets/sterm9.png")',
    'url("assets/sterm10.png")',
    'url("assets/sterm11.png")',
    'url("assets/sterm12.png")',
    'url("assets/sterm13.png")',
    'url("assets/sterm14.png")',
    'url("assets/sterm15.png")',
    'url("assets/sterm16.png")',
    'url("assets/sterm17.png")',
  ];
  
  let pic2 = document.getElementById('section2');
  
  
  function showImage2(){
    console.log(a);
    var a = Math.floor(Math.random()*pics2.length)
    var img = pics2[a];
    console.log(img);
    pic2.style.backgroundImage = img;
  }
  
  
  
  let pics = [
    'url("assets/route1.png")',
    'url("assets/route2.png")',
    'url("assets/route3.png")',
    'url("assets/route4.png")',
    'url("assets/route5.png")',
    'url("assets/route6.png")',
    'url("assets/route7.png")',
    'url("assets/route8.png")',
    'url("assets/route9.png")',
    'url("assets/route10.png")',
    'url("assets/route11.png")',
    'url("assets/route12.png")',
    'url("assets/route13.png")',
    'url("assets/route14.png")',
    'url("assets/route15.png")',
    'url("assets/route16.png")',
    'url("assets/route17.png")',
  
  ];
  
  let pic = document.getElementById('section3');
  
  
  function showImage3(){
    console.log(a);
    var a = Math.floor(Math.random()*pics.length)
    var img = pics[a];
    console.log(img);
    pic.style.backgroundImage = img;
  }
  
  
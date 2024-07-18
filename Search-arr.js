 let initialArr =["Shubham","Pranav","Radhika","Mahesh","Arvika"];

 let initValue = "Pranavs";

 function SearchArr (Arr , initArr){
    if(initArr.includes(Arr)){                 // includes() is search Value which we pass
           console.log(`${Arr} Name Is Found !`);
    }else{
           console.log(`${Arr} Name Is not Found !`);
    }
 }

 SearchArr(initValue,initialArr)  // passing parameter :- Arr     = initValue in prameter
                                                       // initArr = initialArr in prameter

     // OUTPUT:- Pranavs Name Is Found !
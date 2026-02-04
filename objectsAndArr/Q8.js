const data = { 
            A: [80, 90],
            B: [70, 75, 85] 
    }

    function highestAverage(obj){
        let maxAvg = 0;
        let topStudent= "";

        for (let key in obj){

           let marks=  obj[key];
           let sum = 0;


        for(let i =0;i< marks.length; i++){
            sum +=marks[i];
        }   

        let avg = sum/ marks.length;

        if(avg> maxAvg){
            maxAvg = avg;
            topStudent= key;
        }

        }
            return topStudent
    }

    console.log(highestAverage(data));
    

    
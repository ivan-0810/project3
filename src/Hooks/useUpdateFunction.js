

const updateFunction = (arr1, arr2, arr3, games, names, prazna, setShow,setAllCards) => {    
  
    
    if (arr2.length === 0 && arr3.length === 0) {
  
        let filtered1 = [];
        arr1.forEach(el => {
            let filtered = games.filter(card => card[names[0]].split(" ")[0].toLowerCase() === el);
            filtered1.push(...filtered);
        })
        if(filtered1.length===0){
             return setAllCards(true)
        }
     
        return filtered1
  
    }
    if (arr2.length > 0 && arr3.length === 0) {
  
        let filtered1 = [];
        let filtered2 = [];
        if (arr1.length === 0) {
            arr2.forEach(el => {
                let filtered = games.filter(card => card[names[1]].split(" ")[0].toLowerCase() === el)
                filtered1.push(...filtered)
            })
            if(filtered1.length === 0){
                setShow(true);
              }
              
            return filtered1;
  
        } else {
            arr1.forEach(el => {
                let filtered = games.filter(card => card[names[0]].split(" ")[0].toLowerCase() === el)
                filtered1.push(...filtered)
  
            })
            arr2.forEach(el => {
                let filtered = filtered1.filter(card => card[names[1]].split(" ")[0].toLowerCase() === el);
                filtered2.push(...filtered)
            })
            if(filtered2.length === 0){
                setShow(true);
              }
            return filtered2
        }
    }
    if (arr2.length === 0 && arr3.length > 0) {
  
        let filtered1 = [];
        let filtered2 = [];
        if (arr1.length === 0) {
            arr3.forEach(el => {
                let filtered = games.filter(card => card[names[2]].split(" ")[0].toLowerCase() === el)
                filtered1.push(...filtered)
            })
            if(filtered1.length === 0){
                setShow(true);
              }
            return filtered1
        } else {
            arr1.forEach(el => {
                let filtered = games.filter(card => card[names[0]].split(" ")[0].toLowerCase() === el)
                filtered1.push(...filtered)
  
            })
  
            arr3.forEach(el => {
                let filtered = filtered1.filter(card => card[names[2]].split(" ")[0].toLowerCase() === el);
                filtered2.push(...filtered)
            })
            if(filtered2.length === 0){
                setShow(true);
              }
            return filtered2
        }
    }
    if (arr2.length > 0 && arr3.length > 0) {
  
        let filtered1 = [];
        let filtered2 = [];
        let filtered3 = [];
        if (arr1.length === 0) {
            arr3.forEach(el => {
                let filtered = games.filter(card => card[names[2]].split(" ")[0].toLowerCase() === el)
                filtered1.push(...filtered)
  
            })
            arr2.forEach(el => {
                let filtered = filtered1.filter(card => card[names[1]].split(" ")[0].toLowerCase() === el);
                filtered2.push(...filtered)
            })
            if(filtered2.length === 0){
                setShow(true);
              }
            return filtered2
        } else {
            arr3.forEach(el => {
                let filtered = games.filter(card => card[names[2]].split(" ")[0].toLowerCase() === el)
                filtered1.push(...filtered)
  
            })
            arr2.forEach(el => {
                let filtered = filtered1.filter(card => card[names[1]].split(" ")[0].toLowerCase() === el);
                filtered2.push(...filtered)
            })
            arr1.forEach(el => {
                let filtered = filtered2.filter(card => card[names[0]].split(' ')[0].toLowerCase() === el);
                filtered3.push(...filtered)
            })
            if(filtered3.length === 0){
                setShow(true);
              }
            return filtered3
        }
  
    }
  }

  export default updateFunction;
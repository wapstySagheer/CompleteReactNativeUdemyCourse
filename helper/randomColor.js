const setColor = (color , change , value) => {
    if(color === 'red'){
        if('red' >= 255){
            return ;
        }
        else {
           value = () => value + change; 
        }
    }
}
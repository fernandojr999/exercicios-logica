function bubblesort_executar(){
    let arr = [25,10,36,5,8,65,100];

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]){
                let b  = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = b;
            }
        }

    }

    alert(arr);
}
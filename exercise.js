//fill array with 60000 elements

const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    setTimeout(() => {
        var item = list.pop();
        if(item){
            removeItemsFromList();
        }
    }, 0)
    console.log(list);
}
removeItemsFromList();

const categoryItemName = document.querySelectorAll(".main-items-item-title");
newProductName();

function newProductName() {
let categoryItemCountArray = [];
categoryItemName.forEach((item) => {
    if (item.innerHTML.length > 23) {
        for (let i = 0; i < item.innerHTML.length; i++) {
            categoryItemCountArray.push(item.innerHTML[i]);
        }
        var itemLengthToReduce = item.innerHTML.length - 23;
        categoryItemCountArray.splice(23, itemLengthToReduce, '.', '.', '.');
        let newProductString = categoryItemCountArray.join('');
        categoryItemCountArray = [];
        item.innerHTML = `${newProductString}`;
    }
})
}
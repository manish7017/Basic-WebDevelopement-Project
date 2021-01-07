var ul = document.getElementById('nature-list')
var natureName = document.getElementById('entered-nature')
var addNature = document.getElementById('add-nature')

addNature.addEventListener('click', function(){
    // add a logic that value of string length should be greater than 1 or as much character you want.
    if (natureName.value.length > 0){
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(natureName.value))
    ul.appendChild(li)
    // to solve this we just need to add a single line to clear the value.
    natureName.value =''
    }
})




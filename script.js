
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('get').addEventListener('click', function () {
        var g = new Roller(Math.floor(Math.random() * 6)+1, Math.floor(Math.random() * 6));
    document.getElementById('roll').addEventListener('click', function () {
            g.greet()   
    })
})
})
var Roller = function (value, newValue) {
    this.value = value;
    
    this.div = document.createElement('div');
    var h1 = document.createElement('h1');
    h1.innerHTML = this.value;
    this.div.appendChild(h1);
    document.body.appendChild(this.div);
    this.div.className = 'dice'
    Numbers.push(this.value)   
};
Numbers = []
newNumbers = []
Roller.prototype.greet = function() {
    while(this.div.firstChild){
        this.div.removeChild(this.div.firstChild);
    }
    this.newValue= r
    var r = (Math.floor(Math.random() * 6)+1)
            newNumbers.push(r)
            this.newValue=r

    var h1 = document.createElement('h1');
    h1.innerHTML = this.newValue;
    this.div.appendChild(h1);
};

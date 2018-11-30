class DomNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }

  html (string) {
    if (string === undefined) {
      return this.arr[0].innerHTML;
    }
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i].innerHTML = string;
    }

    return string;
  }

  empty () {
    this.html('');
  }

  append (arg) {
    if (typeof arg != 'string') { arg = arg.outerHTML; }

    for (let i = 0; i < this.arr.length; i++){
      this.arr[i].innerHTML += arg;
    }
    return true;
  }

  attr(name, value) {
    if (value === undefined) {
      let res = [];
      for (let i = 0; i < this.arr.length; i++){
        res.push(this.arr[i].getAttribute(name));
      }
      return res;
    }

    for (let i = 0; i < this.arr.length; i++){
      if (this.arr[i].getAttribute(name) === null)
        this.arr[i].setAttribute(name, value);
      else
        this.arr[i].setAttribute(name, this.arr[i].getAttribute(name) + ' ' + value);
    }
    return value;
  }

  addClass(name){
    this.attr('class', name);
  }

  removeClass(name) {
    if (name) {
      for (let i = 0; i < this.arr.length; i++) {
        this.arr[i].classList.remove(name);
      }
    }
    else {
      for (let i = 0; i < this.arr.length; i++) {
        for (let j = this.arr[i].classList.length - 1; j >= 0; j--){
          this.arr[i].classList.remove(this.arr[i].classList[j]);
        }
      }
    }
    return 0;
  }

}


module.exports = DomNodeCollection;

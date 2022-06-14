
export class msg {

    constructor(idForm, idTextarea, ListPost) {
      this.form = document.getElementById(idForm);
      this.textarea = document.getElementById(idTextarea);
      this.listPost = document.getElementById(ListPost);
      this.addSubmit();
    }
  
    formValidate(value) {
      if (value === '' || value === null || value === undefined || value.length < 3) {
        return false
      }
      return true
    }
  
  
    onSubmit(func) {
      this.form.addEventListener("submit", func)
    }
  
  
  
    addSubmit() {
      const handleSubmit = (event) => {
  
        event.preventDefault();
        if (this.formValidate(this.textarea.value)) {
          const newPost = document.createElement("li");
          newPost.classList.add('post')
          const time = this.getTime();
          newPost.innerHTML = `
          <div class="infoUserPost">
            <div class="imgUserPost"></div>
  
            <div class="nameAndHour">
              <strong>Username</strong>
              <p>${time}</p>
            </div>
          </div>
  
          <p>
           ${this.textarea.value}
          </p>
  
        
          `;
          this.listPost.appendChild(newPost);
          this.textarea.value = "";
  
        } else {
          alert('void error');
        }
      }
  
      this.onSubmit(handleSubmit);
    }
  
    getTime() {
      const time = new Date();
      const hour = time.getHours();
      const minutes = time.getMinutes();
      return `${hour}h ${minutes}min`
    }
  
  }
  
  const Msg = new msg('msg', 'textarea', 'posts')
   
  function sumAllEven(list) {
    let size = list.length;
    let resultArray = [];
    let plus = 0;
  
    for (var i = 0; i < size; i++) {
      let value = list[i];
  
  
  
      if (value.constructor.name == "Array") {
        let size2 = value.length;
        var add = 0;
  
        for (var d = 0; d < size2; d++) {
          let value2 = value[d]
          if (isNaN(value2) || value2 == null || value2 == undefined) { continue }
          if (!(value2 % 2) == 0) { continue }
          value2 = parseInt(value2);
          add += value2
        }
        plus += add;
        continue
      }
  
      if (isNaN(value) || value == null || value == undefined) { continue }
  
  
    
      if (!(value % 2) == 0) { continue }
  
      value = parseInt(value);
  
      resultArray.push(value);
  
      plus += value
    }
    return plus
  }
  
  
  const test = sumAllEven([[2, 0, null, 'undeifas'], 30, 20, 15, 'jon', [5, 5, 5, 2]])
  console.log(test);
  
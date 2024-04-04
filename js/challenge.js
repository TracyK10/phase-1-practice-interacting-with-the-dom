document.addEventListener("DOMContentLoaded", () => {
  let counter = document.getElementById("counter");
  let count = parseInt(counter.textContent);

  let intervalId; // Variable to store interval ID

  // timer function
  function timer(){
    count++;
    counter.textContent = count;
  }

  //increase the count every secod
  intervalId = setInterval(timer, 1000);

  let minus = document.getElementById("minus");
  minus.addEventListener("click", () => {
    // decrease the count manually
    if (count > 0) {
      count--;
      counter.textContent = count;
    }
  });

  let plus = document.getElementById("plus");
  plus.addEventListener("click", () => {
    //increase the count manually
    if (count > 0) {
      count++;
      counter.textContent = count;
    }
  });

  // pausing everything  when the button is clicked
  let pause = document.getElementById("pause");
  pause.addEventListener("click", () => {
    if (pause.innerText === "pause") {
      pause.disabled = false;
      plus.disabled = true;
      minus.disabled = true;
      pause.innerText = "Resume";
      submitBtn.disabled = true;
      heartButton.disabled = true;
      clearInterval(intervalId);
    }
    //unpausing everything
    else {
      pause.disabled = false;
      plus.disabled = false;
      minus.disabled = false;
      submitBtn.disabled = false;
      heartButton.disabled = false;
      pause.textContent = "pause";
    }
  });

  let num = 0
  // TODO: heart button
  let heartButton = document.getElementById("heart");
  heartButton.addEventListener("click", () => {
    
    num++

    let likes = document.querySelector(".likes");
    let li = document.createElement("li");
    li.textContent += `${count} has been liked ${num} times.`;
    likes.appendChild(li)
  });

  //adding comments
  let submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let input = document.getElementById("comment-input");
    let p = document.createElement("p");
    p.textContent = input.value;
    document.querySelector(".comments").appendChild(p);
    input.value = "";
  });
});

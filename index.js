
function toDoTool(todo) {
  
  const $input = document.querySelector(".input-class")
  const $ul = document.getElementById("ul-ID")
  const $li = document.createElement("li")
  

  if ($input.value) {
    $li.innerHTML = `
  <div>
  <span>
      <input type="checkbox" />
      </span>
      <span>
  ${$input.value}
  </span>
  </div>
  `;
  $ul.appendChild($li)
  }
  
  
}


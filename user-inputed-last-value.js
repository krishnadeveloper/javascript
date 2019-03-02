<code>
let typingTimer = null;
let typingInterval = 1000; // interval will be set in ms, and 1000ms = 1 second

document.getElementById('#name').addEventListner('keyup',()=>{
  clearTimeout(typingTimer);
  typingTimer = setTimeout(()=>{
    // you can see the updated value in console
    consold.log(document.getElementById('#name').value);
  },typingInterval)
})

</code>


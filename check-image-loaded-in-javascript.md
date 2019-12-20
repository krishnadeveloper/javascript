<button onclick="showQuestionImage(this)" data-img="image-name.png">Show Image</button>
<img src=" />

js```
  let showQuestionImage = (el) =>{
    let popele = document.querySelector('img');
    popele.src='http://example.com/imagge/'+el.dataset.img // String concatenation
    // popele.src=`http://example.com/imagge/${el.dataset.img}` //ES 6 -> String concatenation
    popele.onload = () => {
        alert('Image loaded completely')
    }

    popele.onerror = () => {
        alert('Image loading error')
    }
    
}
```

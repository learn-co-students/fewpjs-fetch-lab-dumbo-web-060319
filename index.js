function fetchBooks()
{
  fetch('https://anapioficeandfire.com/api/books')
  .then(function(resp)
  {
    return resp.json();
  })
  .then(renderBooks);
}

function getPosts()
{
  fetch('https://anapioficeandfire.com/api/books')
  .then(function(resp)
  {
    return resp.json();
  })
  .then(function(f)
  {
    for (let i=0; i < f.length; i++)
    {
      console.log(f[i].name);
    }
  });
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  getPosts();
})



// post
class Post {
  constructor(title, author, body) {
    this.title = title;
    this.author = author;
    this.body = body;
  }
}

// show post in a table
class UI {
  addPostToList(post) {
    // get list post
    const list = document.getElementById("post-list");

    // create tr element
    const row = document.createElement("tr");

    //insert cols
    row.innerHTML = `
    <th>${post.title}</th>
    <td>${post.author}</td>
    <td>${post.body}</td>
    <td><i class="fas fa-times text-danger delete"></i></td>
    `;

    list.appendChild(row);
  }

  clearFields() {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('body').value = "";
  }
}

document.getElementById('post-form').addEventListener("submit", function (e) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const body = document.getElementById('body').value;

  const post = new Post(title, author, body);
  const ui = new UI();
  ui.addPostToList(post);
  ui.clearFields();
  e.preventDefault();
})
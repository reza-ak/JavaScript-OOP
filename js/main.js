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

  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const col = document.querySelector('.col-sm-8');
    const form = document.querySelector('#post-form');
    col.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deletePost(target) {
    target.parentElement.parentElement.remove();
  }
}

document.getElementById('post-form').addEventListener("submit", function (e) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const body = document.getElementById('body').value;

  const post = new Post(title, author, body);
  const ui = new UI();

  // validation
  if (title === '' || author === '' || body === '') {
    ui.showAlert('تمام فیلد ها الزامی هستند.', 'danger');
  }
  else {
    ui.addPostToList(post);
    ui.showAlert('پست جدید با موفقیت ایجاد شد.', 'success');
    ui.clearFields();
  }
  e.preventDefault();
})

document.getElementById('post-list').addEventListener("click", function (e) {
  const ui = new UI();
  if (e.target.classList.contains('delete')) {
    ui.deletePost(e.target);
    ui.showAlert('پست حذف شد.', 'success');
  }
})
const bookmarkName = document.getElementById("bookmark-name"),
  bookmarkURL = document.getElementById("bookmark-url"),
  addBtn = document.getElementById("submit-btn"),
  bookmarkContainer = document.getElementById("bookmark-container"),
  bookmarkFormEl = document.getElementById("bookmark-form");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

addBtn.addEventListener("click", addBookmark);

function addBookmark(e) {
  e.preventDefault();
  const name = bookmarkName.value;
  name.charAt(0).toUpperCase + name.slice(1);
  const url = bookmarkURL.value;
  bookmarks.push({
    name,
    url,
  });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  bookmarkFormEl.reset();
  updateList();
}

function updateList() {
  let finalHTMl = "";
  bookmarks.forEach((bookmark, index) => {
    const listHtml = `
      <div class="bookmark" id="bookmark">
        <a target="_blank" href="${bookmark.url}" id="bookmark">
          <span>${bookmark.name}</span>
        </a>
        <button onclick="removeBookmark(${index})" class="remove-btn">Remove</button>
      </div>`;

    finalHTMl += listHtml;
  });

  bookmarkContainer.innerHTML = finalHTMl;
}

function removeBookmark(index) {
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  updateList();
}

updateList();

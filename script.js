cardArea = document.querySelector("#card-area");

let totalCol = 0;
const gridChoose1 = [3, 4, 6]
let grid;
blogs = [
  {
    image: "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    title: "Blog Başlığı 1",
    summary: "Blog özet metni 1",
    text: "Blog metni 1",
    writer: "Yazar Adı 1",
    authorImage: "URL 1",
    tarih: "18-05-2023 10:00",
    category: "Kategori 1"
  },
  {
    image: "https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    title: "Blog Başlığı 2",
    summary: "Blog özet metni 2",
    text: "Blog metni 2",
    writer: "Yazar Adı 2",
    authorImage: "URL 2",
    tarih: "18-05-2023 14:30",
    category: "Kategori 2"
  },
  {
    image: "https://images.unsplash.com/uploads/1412594480669535c9ef9/9d85c477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    title: "Blog Başlığı 3",
    summary: "Blog özet metni 3",
    text: "Blog metni 3",
    writer: "Yazar Adı 3",
    authorImage: "URL 3",
    tarih: "18-05-2023 16:00",
    category: "Kategori 3"
  },
  {
    image: "https://images.unsplash.com/photo-1514248787438-077495e23674?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    title: "Blog Başlığı 3",
    summary: "Blog özet metni 3",
    text: "Blog metni 3",
    writer: "Yazar Adı 3",
    authorImage: "URL 3",
    tarih: "18-05-2023 16:00",
    category: "Kategori 3"
  },
  {
    image: "https://images.unsplash.com/photo-1535813381253-2917d694ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1546&q=80",
    title: "Blog Başlığı 3",
    summary: "Blog özet metni 3",
    text: "Blog metni 3",
    writer: "Yazar Adı 3",
    authorImage: "URL 3",
    tarih: "18-05-2023 16:00",
    category: "Kategori 3"
  },
  {
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Blog Başlığı 3",
    summary: "Blog özet metni 3",
    text: "Blog metni 3",
    writer: "Yazar Adı 3",
    authorImage: "URL 3",
    tarih: "18-05-2023 16:00",
    category: "Kategori 3"
  },
  {
    image: "https://images.unsplash.com/photo-1496262967815-132206202600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1846&q=80",
    title: "Blog Başlığı 3",
    summary: "Blog özet metni 3",
    text: "Blog metni 3",
    writer: "Yazar Adı 3",
    authorImage: "URL 3",
    tarih: "18-05-2023 16:00",
    category: "Kategori 3"
  },
  {
    image: "https://images.unsplash.com/photo-1472148083604-64f1084980b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Blog Başlığı 3",
    summary: "Blog özet metni 3",
    text: "Blog metni 3",
    writer: "Yazar Adı 3",
    authorImage: "URL 3",
    tarih: "18-05-2023 16:00",
    category: "Kategori 3"
  },
  {
    image: "https://images.unsplash.com/photo-1456428746267-a1756408f782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Blog Başlığı 3",
    summary: "Blog özet metni 3",
    text: "Blog metni 3",
    writer: "Yazar Adı 3",
    authorImage: "URL 3",
    tarih: "18-05-2023 16:00",
    category: "Kategori 3"
  },
  {
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Blog Başlığı 3",
    summary: "Blog özet metni 3",
    text: "Blog metni 3",
    writer: "Yazar Adı 3",
    authorImage: "URL 3",
    tarih: "18-05-2023 16:00",
    category: "Kategori 3"
  },
  {
    image: "https://images.unsplash.com/photo-1614157561595-dc25d28cfa85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80",
    title: "Blog Başlığı 3",
    summary: "Blog özet metni 3",
    text: "Blog metni 3",
    writer: "Yazar Adı 3",
    authorImage: "URL 3",
    tarih: "18-05-2023 16:00",
    category: "Kategori 3"
  },
  {
    image: "https://images.unsplash.com/photo-1600485513918-dc9fe2ebc21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    title: "Blog Başlığı 3",
    summary: "Blog özet metni 3",
    text: "Blog metni 3",
    writer: "Yazar Adı 3",
    authorImage: "URL 3",
    tarih: "18-05-2023 16:00",
    category: "Kategori 3"
  },
]

blogs.forEach((blog, index) => {

  if (index % 3 == 2) {
    grid = 12 - totalCol;
    grid == 0 ? grid = 12 : grid = grid;
    grid == 2 ? grid = 12 : grid = grid;

    totalCol = 0;
  } else {
    grid = gridChoose1[Math.floor(Math.random() * gridChoose1.length)];
    totalCol += grid;
  }

  cardArea.innerHTML += `
  <div class="col-md-${grid} col-10 col-sm-6 p-4" >
  <div class="card overflow-hidden" id="${blog.id}">
  <img src="${blog.image ||
    "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-476x700.jpg"
    }"
      class="card-img-top img-fluid" alt="...">
  <div class="card-body flex-column justify-content-center align-items-center">
      <h5 class="card-title text-white fs-2">${blog.title
    }</h5>
      <p class="card-text explanation">${blog.summary}</p>

      <p class="card-text director">
          <span class="fw-bold">Director : </span> ${blog.director
    }
      </p>
      <p class="card-text type">
          <span class="fw-bold">Type : </span> ${blog.category
    }
      </p>
      <p class="card-text year">
          <span class="fw-bold">Year : </span> ${blog.year}
      </p>
      <div class="row card-buttons">

      <a href="#" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#addFilmModal" data-bs-id="${blog.id}" data-bs-action="update">Edit</a>
          <a href="#" class="btn btn-danger mt-2"
              onclick="deleteFilm(${blog.id})">Remove</a>
      </div>
  </div>
</div>
      </div>
      `
});



const modeButton = document.querySelector("#switch");
let isDark = 1;

modeButton.addEventListener("click", () => {
  if (isDark == 0) {
    document.body.style.backgroundColor = "#252525";
    document.body.style.color = "#fdfdfd";
    isDark = 1;
  } else {
    document.body.style.backgroundColor = "#fdfdfd";
    document.body.style.color = "#252525";
    isDark = 0;
  }

});

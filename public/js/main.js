const form__file = document.querySelector(".form__file");
const form__button = document.querySelector(".form__button");

form__button.addEventListener("click", (e) => {
  e.preventDefault();

  const image = new FormData();
  image.append("image", form__file.files[0]);

  fetch("http://localhost:3001/api/upload", {
    method: "POST",
    body: image,
  })
    .then((res) => res.json())
    .then((res) => {
      window.location.reload();
      console.log(res);
    })
    .catch((err) => console.log(err));
});

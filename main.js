import "./style.css";
const productContainer = document.querySelector(".product");
const customerContainer = document.querySelector(".customer-msg");
const imgContainer = document.querySelector(".product-img");
const produtArray = [
  {
    question: "Quality is unquestionable",
    ans: "We always prioritize customer satisfaction over everything.",
  },
  {
    question: "International standard",
    ans: "We already have international standards, and we often import abroad.",
  },
  {
    question: "Long warranty",
    ans: "All the products we provide have a long warranty of up to 2-3 year.",
  },
];

let customerMsg = [
  {
    comment:
      "The quality of the chair is not in doubt, provided with a warranty that is long enough to provide satisfaction to customers. The chair provided also matches what is in the original picture. I am very satisfied with this chair website!",
    name: "William jonathan",
    position: "CEO Tokopedia",
  },
  {
    comment:
      "I am very satisfied with this chair website!, The quality of the chair is not in doubt, provided with a warranty that is long enough to provide satisfaction to customers.The chair provided also matches what is in the original picture.",
    name: "John Farrel",
    position: "CEO Tokopedia",
  },
];

let imgArry = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1506332088442-9e0024864f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1616627547584-bf28cee262db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    imgUrl:
      //   "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1616627547584-bf28cee262db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];
produtArray.forEach((qa) => {
  let qstin = `<div class="quality">
    <h2>${qa.question}</h2>
    <p>${qa.ans}</p>
    <hr />
  </div>`;
  productContainer.innerHTML += qstin;
});

customerMsg.forEach((msg) => {
  let comment = `<div>
    <p>
      ${msg.comment}
    </p>
    <hr />
    <h2>${msg.name}</h2>
    ${msg.position}
  </div>`;
  customerContainer.innerHTML += comment;
});

imgArry.forEach((img) => {
  let url = `<div class="chair3">
    <img
      src="${img.imgUrl}"
      alt=""
    />
  </div>`;
  imgContainer.innerHTML += url;
});

import "./style.css";
const productContainer = document.querySelector(".product");
const customerContainer = document.querySelector(".customer-msg");
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
produtArray.forEach((qa) => {
  let qa = `<div class="quality">
    <h2>${qa.question}</h2>
    <p>${qa.ans}</p>
    <hr />
  </div>`;
  productContainer.innerHTML += qa;
});

customerContainer.forEach((msg) => {
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

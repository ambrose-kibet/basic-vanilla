const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
let value = 0;
const btn = document.querySelectorAll(".btn");
const displayImage = document.querySelectorAll("img");
const displayName = document.querySelector(".name");
const displayJob = document.querySelector(".job");
const displayReview = document.querySelector(".text");
btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    const theClass = e.target.classList;
    if (theClass.contains("dec")) {
      value--;
      if (value < 0) {
        value = reviews.length - 1;
      }
      let { id, name, job, image, text } = reviews[value];
      displayImage.src = image;
      displayName.textContent = name;
      displayJob.textContent = job;
      displayReview.textContent = text;
    } else if (theClass.contains("inc")) {
      value++;
      if (value > reviews.length - 1) {
        value = 0;
      }
      let { id, name, job, image, text } = reviews[value];
      displayImage.src = image;
      displayName.textContent = name;
      displayJob.textContent = job;
      displayReview.textContent = text;
    } else {
      value = Math.floor(Math.random() * reviews.length);
      let { id, name, job, image, text } = reviews[value];
      displayImage.src = image;
      displayName.textContent = name;
      displayJob.textContent = job;
      displayReview.textContent = text;
    }
  });
});

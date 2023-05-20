const dataAraay = [
  {
    userId: 1,
    userName: "სახელი 1",
    userLastName: "გვარი 1",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 20,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 2,
    userName: "სახელი 2",
    userLastName: "გვარი 2",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 30,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 3,
    userName: "სახელი 3",
    userLastName: "გვარი 3",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 35,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 4,
    userName: "სახელი 4",
    userLastName: "გვარი 4",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 29,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 5,
    userName: "სახელი 5",
    userLastName: "გვარი 5",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 49,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 6,
    userName: "სახელი 6",
    userLastName: "გვარი 6",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 31,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 7,
    userName: "სახელი 7",
    userLastName: "გვარი 7",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 31,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
];

for (let i = 0; i < dataAraay.length; i++) {
  const card = dataAraay[i];

  const userId = document.createElement("p");
  userId.innerText = card.userId;

  const image = document.createElement("img");
  image.src = card.userImage;

  const userName = document.createElement("h1");
  userName.textContent = card.userName;

  const userLastName = document.createElement("h2");
  userLastName.textContent = card.userLastName;

  const userAge = document.createElement("p");
  userAge.textContent = card.userAge;

  const userAdress = document.createElement("p");
  userAdress.textContent = card.userAddresses;

  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.appendChild(userId);
  cardElement.appendChild(image);
  cardElement.appendChild(userName);
  cardElement.appendChild(userName);
  cardElement.appendChild(userLastName);
  cardElement.appendChild(userAdress);

  cardElement.addEventListener("click", function () {
    cardElement.classList.add("active");
  });
  document.getElementById("card-container").appendChild(cardElement);
}

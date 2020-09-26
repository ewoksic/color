class Color {
  constructor() {
    this.btn = document.getElementById("btn");
    this.color = document.querySelector(".color");
    this.colors = [
      "green",
      "red",
      "rgba(133,122,200)",
      "#f15025",
      "black",
      "yellow",
      "pink",
      "grey",
      "blue",
      "grey",
      "purple",
      "orange",
      "aqua",
    ];
    this.events();
  }

  events() {
    this.btn.addEventListener("click", () => this.toggleTheMenu());
  }
  toggleTheMenu() {
    this.randomNumber = Math.floor(Math.random() * this.colors.length);
    this.color.innerText = this.colors[this.randomNumber];
    document.body.style.backgroundColor = this.colors[this.randomNumber];
  }
}

export default Color;

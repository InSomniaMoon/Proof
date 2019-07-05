/*
 * 
 * permet de faire bouger aléatoirement des boutons ou balise en toute sorte.
 * 
 */

export class Move {
  public idInterval;
  private id;
  constructor(unid) {
    this.id = unid;
  }

  public anime(id) {
    var w = 8;
    var h = 8;
    var nw = Math.floor(Math.random() * w) + "px";
    var nh = Math.floor(Math.random() * h) + "px";

    var newq = [nh, nw];
    document.getElementById(id).style.top = newq[0]
    document.getElementById(id).style.left = newq[1];

  }

  public startMoving() {
    this.idInterval = setInterval(this.anime, 1800, [this.id]);
  }

  public stopMoving() {
    clearInterval(this.idInterval);
  }

}

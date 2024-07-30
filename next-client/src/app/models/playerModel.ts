import PlayerInterface from "../models/playerInterface";

class player implements PlayerInterface {
    x: number
    y: number
    radius: number
    level: number
    color: string
    ctx: any

    constructor(x: number, y: number, raduis: number, level: number, color: string, ctx: any) {
        this.x = x 
        this.y = y
        this.radius = raduis
        this.level = level
        this.color = color
        this.ctx = ctx
    }

    create() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    move(dx: number, dy: number) {
        if(dy + this.y > this.radius && dy + this.y < innerHeight - this.radius && dx + this.x > this.radius && dx + this.x < innerWidth - this.radius) {
            this.x += dx;
            this.y += dy;
            this.ctx.clearRect(0, 0, innerWidth, innerHeight);
            this.create();
        }
    }
}

export default player

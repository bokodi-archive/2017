export function drawRect(ctx, position, width, height, color = 'black', lineWidth = 1) {
    ctx.beginPath();

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    ctx.rect(position.x, position.y, width, height);

    ctx.stroke();

    ctx.closePath();
}

export function drawArc(ctx, position, r, color = 'black', lineWidth = 1) {
    ctx.beginPath();

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    ctx.arc(position.x, position.y, r, 0, Math.PI * 2);

    ctx.stroke();

    ctx.closePath();
}
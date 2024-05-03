// BEGIN

function getX()
{
    return this.x;
};

function getY()
{
    return this.y;
};

function getBeginPoint()
{
    return this.beginPoint;
};

function getEndPoint()
{
    return this.endPoint;
};



export function Point(x, y) {
    this.x = x;
    this.y = y;
    this.getX = getX;

    this.getY = getY;
}

function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
    this.getBeginPoint = getBeginPoint;

    this.getEndPoint = getEndPoint;
}

function reverse(segment) {
    const newBeginPoint = new Point(segment.endPoint.getX(), segment.endPoint.getY());
    const newEndPoint = new Point(segment.beginPoint.getX(), segment.beginPoint.getY());
    return new Segment(newBeginPoint, newEndPoint);
  };
  
export { Segment, reverse };
// END

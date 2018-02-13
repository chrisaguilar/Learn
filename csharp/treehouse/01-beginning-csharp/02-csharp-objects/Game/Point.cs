using System;

namespace TowerDefense
{
    class Point
    {
        public int X;
        public int Y;

        public Point(int x, int y)
        {
            X = x;
            Y = y;
        }

        public int DistanceTo(int x, int y)
        {
            int xDiffSquared = (int)Math.Pow(X - x, 2);
            int yDiffSquared = (int)Math.Pow(Y - y, 2);

            return (int)Math.Sqrt(xDiffSquared + yDiffSquared);
        }

        public int DistanceTo(Point point) {
            return DistanceTo(point.X, point.Y);
        }
    }
}

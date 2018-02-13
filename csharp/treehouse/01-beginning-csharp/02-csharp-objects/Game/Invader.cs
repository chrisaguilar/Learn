namespace TowerDefense
{
    class Invader
    {
        private MapLocation location;

        public MapLocation GetLocation()
        {
            return this.location;
        }

        public void SetLocation(MapLocation value)
        {
            this.location = value;
        }
    }
}

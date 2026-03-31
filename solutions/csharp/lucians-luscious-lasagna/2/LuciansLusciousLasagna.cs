class Lasagna
{

    public int ExpectedMinutesInOven() => 40;

    public int RemainingMinutesInOven(int ActualMinutes) => ExpectedMinutesInOven() - ActualMinutes;
    
     public int PreparationTimeInMinutes(int Layers) => Layers * 2;

     public int ElapsedTimeInMinutes(int Layers, int ActualMinutes) => PreparationTimeInMinutes(Layers) + ActualMinutes;
}
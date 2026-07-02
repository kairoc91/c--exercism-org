class Lasagna
{

    public int ExpectedMinutesInOven()
    {
        return 40;
    }

     public int RemainingMinutesInOven(int ActualMinutes)
    {
        return ExpectedMinutesInOven() - ActualMinutes;
    }

     public int PreparationTimeInMinutes(int Layers)
    {
        return Layers * 2;
    }

     public int ElapsedTimeInMinutes(int Layers, int ActualMinutes)
    {
        return PreparationTimeInMinutes(Layers) + ActualMinutes;
    }
}
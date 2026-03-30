static class LogLine
{
    public static string Message(string logLine)
    {
    
        int toRemove = logLine.IndexOf(':') + 1;
    
        string sms = logLine.Substring(toRemove);

        return sms.Trim();
        //throw new NotImplementedException("Please implement the (static) LogLine.Message() method");
    }

    public static string LogLevel(string logLine)
    {
        //throw new NotImplementedException("Please implement the (static) LogLine.LogLevel() method");
    

    int start = logLine.IndexOf('[') + 1;

    int end = logLine.IndexOf(']');

    int size = end - start;

    string level = logLine.Substring(start, size);

    return level.ToLower();

    }
    
    public static string Reformat(string logLine)
    {
        //throw new NotImplementedException("Please implement the (static) LogLine.Reformat() method");
    
    string sms = Message(logLine);
        string level = LogLevel(logLine);

        return $"{sms} ({level})";
    
    }
}

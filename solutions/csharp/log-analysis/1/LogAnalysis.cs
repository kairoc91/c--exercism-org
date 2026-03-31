public static class LogAnalysis 
{
    // TODO: define the 'SubstringAfter()' extension method on the `string` type
   public static string SubstringAfter(this string textoDoLog, string delimitacao)
   {
       int index = textoDoLog.IndexOf(delimitacao) + delimitacao.Length;
       return textoDoLog.Substring(index);
   }

    // TODO: define the 'SubstringBetween()' extension method on the `string` type
public static string SubstringBetween(this string textoDoLog, string delimiterStart, string delimiterEnd)
{
    int indexStart = textoDoLog.IndexOf(delimiterStart) + delimiterStart.Length;
    int indexEnd = textoDoLog.IndexOf(delimiterEnd);
    int size = indexEnd - indexStart;
    return textoDoLog.Substring(indexStart, size);
}
    
    // TODO: define the 'Message()' extension method on the `string` type
public static string Message(this string textoDoLog)
{
    return textoDoLog.SubstringAfter(": ");
}
    
    // TODO: define the 'LogLevel()' extension method on the `string` type
public static string LogLevel(this string textoDoLog)
{
    return textoDoLog.SubstringBetween("[","]");
}

}
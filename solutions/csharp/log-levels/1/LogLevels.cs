using System;
using System.Text.RegularExpressions;

static class LogLine
{
    public static string Message(string logLine)
    {
        string replaced = Regex.Replace(logLine, @"\[(ERROR|WARNING|INFO)\]:", "");
        return replaced.Trim();
    }

    public static string LogLevel(string logLine)
    {
        string pattern = @"ERROR|WARNING|INFO";
        Regex regex = new Regex(pattern);
        Match m = regex.Match(logLine);
        return m.ToString().ToLower();
    }

    public static string Reformat(string logLine)
    {
        string message = Message(logLine);
        string level = LogLevel(logLine);
        return $"{message} ({level})";
    }
}
using System.Text.RegularExpressions;

public static class LogAnalysis
{
    public static string SubstringAfter(this string str, string target)
    {
        if (!str.Contains(target)) return "";

        var index = str.IndexOf(target, StringComparison.Ordinal);
        return index != -1 ? str[(index + target.Length)..] : "";
    }

    public static string SubstringBetween(this string str, string start, string end)
    {
        if (!str.Contains(start) && !str.Contains(end)) return "";

        var startIndex = str.IndexOf(start, StringComparison.Ordinal) + start.Length;
        var endIndex = str.IndexOf(end, StringComparison.Ordinal) - startIndex;

        if (startIndex == -1 || endIndex == -1) return "";

        return str.Substring(startIndex, endIndex);
    }

    public static string Message(this string str)
    {
        var replaced = Regex.Replace(str, @"\[(ERROR|WARNING|INFO)\]:", "");
        return replaced.Trim();
    }

    public static string LogLevel(this string str)
    {
        const string pattern = @"ERROR|WARNING|INFO";
        var regex = new Regex(pattern);
        var m = regex.Match(str);
        return m.ToString();
    }
}
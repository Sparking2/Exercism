static class Badge
{
    public static string Print(int? id, string name, string? department)
    {
        department ??= "Owner";

        return id == null
            ? $"{name} - {department?.ToUpper()}"
            : $"[{id}] - {name} - {department?.ToUpper()}";
    }
}
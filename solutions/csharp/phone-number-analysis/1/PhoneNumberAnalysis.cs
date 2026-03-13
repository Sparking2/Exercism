public static class PhoneNumber
{
    public static (bool IsNewYork, bool IsFake, string LocalNumber) Analyze(string phoneNumber)
    {
        var IsNewYork = false;
        var IsFake = false;
        var LocalNumber = "";
        
        var splitNumber = phoneNumber.Split('-');
        if (splitNumber[0] == "212")
            IsNewYork = true;
        if (splitNumber[1] == "555")
            IsFake = true;

        return (IsNewYork, IsFake, splitNumber[2]);
    }

    public static bool IsFake((bool IsNewYork, bool IsFake, string LocalNumber) phoneNumberInfo)
    {
        return phoneNumberInfo.IsFake;
    }
}
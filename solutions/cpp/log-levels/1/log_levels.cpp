#include <string>
#include <iostream>

namespace log_line {
std::string message(std::string line) {
    int index = line.find_first_of(':');
    std::string result = line.substr(index+2);
    return result;
}

std::string log_level(std::string line) {
     int start = line.find_first_of('[')+1;
     int end = line.find_first_of(']')-1;
     return line.substr(start, end);
}

std::string reformat(std::string line) {
    std::string level = log_level(line);
    std::string text = message(line);
    std::string result = text + " (" + level + ")"; 
    return result;
}
}  // namespace log_line


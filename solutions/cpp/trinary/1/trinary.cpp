#include "trinary.h"

#include <algorithm>
#include <cmath>
#include <iostream>
#include <string>

namespace trinary {

int to_decimal(std::string number) {
  int result{0};

  if (!std::all_of(number.begin(), number.end(),
                   [](unsigned char c) { return std::isdigit(c); })) {
    return 0;
  }

  int length = number.size() - 1;

  for (const char &c : number) {
    int value = c - '0';
    result += value * (std::pow(3, length));
    length--;
  }

  std::cout << "result: " << result << '\n';
  return result;
}

} // namespace trinary
#include "luhn.h"
#include <algorithm>
#include <cctype>

namespace luhn {

bool valid(std::string original_number) {
  bool clean =
      std::all_of(original_number.begin(), original_number.end(),
                  [](char c) { return std::isdigit(c) || std::isspace(c); });

  if (!clean)
    return false;

  original_number.erase(
      std::remove_if(original_number.begin(), original_number.end(),
                     [](unsigned char c) { return std::isspace(c); }),
      original_number.end());

  if (original_number.size() <= 1)
    return false;

  bool touch{false};
  for (auto it{original_number.rbegin()}; it != original_number.rend(); it++) {
    if (touch) {
      unsigned int v{static_cast<unsigned int>(*it - '0')};

      v = v * 2;
      if (v >= 10) {
        v -= 9;
      }

      *it = v + '0';

      touch = !touch;
    } else {
      touch = !touch;
    }
  }

  int sum{0};
  for (const char &c : original_number) {
    sum += static_cast<int>(c - '0');
  }

  return (sum % 10) == 0;
}

} // namespace luhn
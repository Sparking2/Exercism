#include "rotational_cipher.h"

#include <cctype>

namespace rotational_cipher {

std::string rotate(std::string msg, unsigned int key) {
  std::string result;

  for (auto &c : msg) {

    if (std::isdigit(c) || std::ispunct(c) || std::isspace(c)) {
      result.push_back(c);
      continue;
    }

    bool is_upper = std::isupper(c);

    unsigned int rotated_c = c + key;

    if ((is_upper && rotated_c >= 91) || (!is_upper && rotated_c >= 123)) {
      int remainder = is_upper ? rotated_c - 91 : rotated_c - 123;
      char clamped_c = is_upper ? 'A' + remainder : 'a' + remainder;

      rotated_c = clamped_c;
    }

    result.push_back((char)rotated_c);
  }

  return result;
}

} // namespace rotational_cipher

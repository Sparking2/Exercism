#include "atbash_cipher.h"
#include <algorithm>
#include <cctype>
#include <cstring>
#include <vector>

namespace atbash_cipher {

std::string plain{"abcdefghijklmnopqrstuvwxyz"};
std::string cipher{"zyxwvutsrqponmlkjihgfedcba"};

void remove_non_alphanumeric(std::string &msg) {
  msg.erase(std::remove_if(msg.begin(), msg.end(),
                           [](unsigned char c) { return !std::isalnum(c); }),
            msg.end());
}

void lower_case(std::string &msg) {
  std::transform(msg.begin(), msg.end(), msg.begin(),
                 [](unsigned char c) { return std::tolower(c); });
}

std::vector<char> translate(std::string &msg) {
  std::vector<char> result;

  for (size_t i{0}; i < msg.length(); ++i) {
    char c{msg[i]};

    if (std::isdigit(c)) {
      result.push_back(c);
    } else {
      result.push_back('a' + ('z' - c));
    }
  }

  return result;
}

std::string encode(std::string message) {

  // remove spaces, special chars etc.
  remove_non_alphanumeric(message);

  // make it lowercase
  lower_case(message);

  std::vector<char> result = translate(message);

  // build the string;

  std::string r;
  result.reserve(result.size() + (result.size() - 1) / 5);
  for (size_t i = 0; i < result.size(); ++i) {
    if (i > 0 && i % 5 == 0) {
      r.push_back(' ');
    }
    r.push_back(result[i]);
  }

  return r;
}

std::string decode(std::string message) {

  // remove spaces
  remove_non_alphanumeric(message);

  std::vector<char> result = translate(message);

  // build the string
  std::string r;
  for (size_t i = 0; i < result.size(); ++i) {
    r.push_back(result[i]);
  }

  return r;
}

} // namespace atbash_cipher


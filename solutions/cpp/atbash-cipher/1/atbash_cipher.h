#pragma once

#include <string>

namespace atbash_cipher {

std::string encode(std::string message);
std::string decode(std::string message);

} // namespace atbash_cipher
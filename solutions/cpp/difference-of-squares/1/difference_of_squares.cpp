#include "difference_of_squares.h"

namespace difference_of_squares {

unsigned int square_of_sum(unsigned int num) {
  unsigned int result{0};

  for (unsigned int i{0}; i <= num; ++i) {
    result += i;
  }

  return result * result;
}

unsigned int sum_of_squares(unsigned int num) {
  unsigned int result{0};

  for (unsigned int i{0}; i <= num; ++i) {
    result += i * i;
  }

  return result;
}

unsigned int difference(unsigned int target) {
  return square_of_sum(target) - sum_of_squares(target);
}

} // namespace difference_of_squares


#include "difference_of_squares.h"

namespace difference_of_squares {

unsigned int square_of_sum(unsigned int num) {
  unsigned int result = (num * (num + 1)) / 2;

  return result * result;
}

unsigned int sum_of_squares(unsigned int num) {
  return (num * (num + 1) * (2 * num + 1)) / 6;
}

unsigned int difference(unsigned int target) {
  return square_of_sum(target) - sum_of_squares(target);
}

} // namespace difference_of_squares

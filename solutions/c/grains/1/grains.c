#include "grains.h"

uint64_t square(uint8_t index) {
    if (index == 0 || index > 64) {
        return 0;
    }

    uint64_t grains = 1;
    for (uint8_t i = 2; i <= index; i++) {
        grains *= 2;
    }
    return grains;
}

uint64_t total(void) {
    uint64_t total_grains = 0;
    for (uint8_t i = 1; i <= 64; i++) {
        total_grains += square(i);
    }
    return total_grains;
}
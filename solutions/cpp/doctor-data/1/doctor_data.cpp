#include "doctor_data.h"

heaven::Vessel::Vessel(std::string n, int g, star_map::System s){
    name = n;
    generation = g;
    current_system = s;
}

heaven::Vessel heaven::Vessel::replicate(std::string n){
    return Vessel{n, generation + 1, current_system};
}

void heaven::Vessel::make_buster(){
    busters += 1;
}

bool heaven::Vessel::shoot_buster(){
    if(busters > 0){
        busters -= 1;
        return true;
    }
    return false;
}

std::string heaven::get_older_bob(Vessel a, Vessel b){
    if(a.generation < b.generation){
        return a.name;
    } else {
        return b.name;
    }
}

bool heaven::in_the_same_system(Vessel a, Vessel b){
    return a.current_system == b.current_system;
}


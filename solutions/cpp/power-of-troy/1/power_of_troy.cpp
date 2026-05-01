#include "power_of_troy.h"

namespace troy {
    void give_new_artifact(troy::human& h, std::string artifact_name){
    h.possession = std::make_unique<artifact>(artifact_name);
}

    void exchange_artifacts(std::unique_ptr<artifact>& a1, std::unique_ptr<artifact>& a2){
    std::swap(a1, a2);
}

    void manifest_power(troy::human& h, std::string p){
    h.own_power = std::make_shared<power>(p);
}

    void use_power(troy::human& caster, human& target){
    target.influenced_by = caster.own_power;
}

    int power_intensity(troy::human& h){
    if(h.own_power == nullptr) return 0;

    return h.own_power.use_count();
}
}  // namespace troy

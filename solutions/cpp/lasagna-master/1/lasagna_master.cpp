#include "lasagna_master.h"

namespace lasagna_master {

int preparationTime(std::vector<std::string> layers, int avg){
    return layers.size() * avg;
}

int GRAMS_PER_NOODLE = 50;
double LITERS_PER_SAUCE = 0.2;

amount quantities(std::vector<std::string> layers){
    int layers_noodle = 0;
    int layers_sauce = 0;
    for(const auto& l : layers){
        if(l == "sauce"){
            layers_sauce++;
        }
        if(l == "noodles"){
            layers_noodle++;
        }
    }

    amount i {layers_noodle * GRAMS_PER_NOODLE, layers_sauce * LITERS_PER_SAUCE};
    return i;
}

void addSecretIngredient(std::vector<std::string>& myList, const std::vector<std::string>& friendsList){
    std::string secret_ingredient = friendsList[friendsList.size() - 1];
    myList[myList.size() - 1] = secret_ingredient;
}

void addSecretIngredient(std::vector<std::string>& myList, std::string secret_ingredient){
    myList[myList.size() - 1] = secret_ingredient;
}

std::vector<double> scaleRecipe(std::vector<double> original_quantities, int portions){
    std::vector<double> scaled_recipe{};
    double scaling{0.0};
    if(portions == 1){
        scaling = 0.5;
    }else if(portions == 2){
        scaling = 1;
    }else{
        scaling = portions / (double)2;
    }
    for(const double quantiti : original_quantities){
        scaled_recipe.push_back(quantiti * scaling);
    }

    return scaled_recipe;
}

}  // namespace lasagna_master

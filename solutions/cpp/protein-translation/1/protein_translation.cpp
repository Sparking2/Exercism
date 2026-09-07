#include "protein_translation.h"

#include <iostream>
#include <map>
#include <string_view>

namespace protein_translation {

    const std::map<std::string, std::string> protein_map = {
    {"AUG", "Methionine"},
    // ---
    {"UUU", "Phenylalanine"},
    {"UUC", "Phenylalanine"},
    // ---
    {"UUA", "Leucine"},
    {"UUG", "Leucine"},
    // ---
    {"UCU", "Serine"},
    {"UCC", "Serine"},
    {"UCA", "Serine"},
    {"UCG", "Serine"},
    // ---
    {"UAU", "Tyrosine"},
    {"UAC", "Tyrosine"},
    // --- 
    {"UGU", "Cysteine"},
    {"UGC", "Cysteine"},
    // ---
    {"UGG", "Tryptophan"},
    // ---
    {"UAA","STOP"},
    {"UAG", "STOP"},
    {"UGA", "STOP"},
    };
    
    std::vector<std::string> proteins(std::string s){
        std::vector<std::string> result{};
        
        std::vector<std::string> chunks;
        for(size_t i = 0; i < s.size(); i += 3){
            std::string chunk = s.substr(i,3);
            if(chunk.size() == 3){
                chunks.push_back(chunk);
            }
        }

        for(size_t i = 0; i < chunks.size(); i++){
            std::string current_protein = protein_map.at(chunks[i]);
            if(current_protein == "STOP") {
                return result;
            }

            result.push_back(current_protein);
        }

        return result;
    }

}  // namespace protein_translation

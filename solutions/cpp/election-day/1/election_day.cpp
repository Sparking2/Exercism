#include <string>
#include <vector>
#include <iostream>

namespace election {

// The election result struct is already created for you:

struct ElectionResult {
    // Name of the candidate
    std::string name{};
    // Number of votes the candidate has
    int votes{};
};

int vote_count(ElectionResult& er){
    return er.votes;
}

void increment_vote_count(ElectionResult& er, int votes){
    er.votes += votes;
}

ElectionResult& determine_result(std::vector<ElectionResult>& participants){
    int currentWinnerIndex = 0;
    
    for(int i = 0; i < participants.size(); i++){
        if(participants[i].votes > participants[currentWinnerIndex].votes){
            currentWinnerIndex = i;
        }
    }

    ElectionResult& winner = participants[currentWinnerIndex];
    winner.name = "President " + winner.name;
    return winner;
}

}  // namespace election

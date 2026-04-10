#include <array>
#include <string>
#include <vector>
#include <sstream>

// Round down all provided student scores.
std::vector<int> round_down_scores(std::vector<double> student_scores) {
    std::vector<int> result {};
    for(double score : student_scores){
        result.push_back(static_cast<int>(score));
    }
    return result;
}

// Count the number of failing students out of the group provided.
int count_failed_students(std::vector<int> student_scores) {
    int count{0};
    for(int score : student_scores){
        if(score <= 40){
            count++;
        }
    }
    return count;
}

// Create a list of grade thresholds based on the provided highest grade.
std::array<int, 4> letter_grades(int highest_score) {
    std::array<int, 4> grades{};
    int range = (highest_score - 40) / 4;
    for(int i = 0; i < 4; i++){
        grades[i] = 41 + (range * i);
    }
    return grades;
}

// Organize the student's rank, name, and grade information in ascending order.
std::vector<std::string> student_ranking(
    std::vector<int> student_scores, std::vector<std::string> student_names) {
    std::vector<std::string> ranking {};
    for(int i = 0; i < student_scores.size(); i++){
        std::stringstream ss;
        ss << (i + 1) << ". " << student_names[i] << ": " << student_scores[i];
        ranking.push_back(ss.str());
    }
    return ranking;
}

// Create a string that contains the name of the first student to make a perfect
// score on the exam.
std::string perfect_score(std::vector<int> student_scores,
                          std::vector<std::string> student_names) {
    std::string name{""};
    for(int i = 0; i < student_scores.size(); i++){
        if(student_scores[i] == 100){
            name = student_names[i];
            return name;
        }
    }
    return name;
}

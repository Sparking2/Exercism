#include <string>

namespace star_map{
    enum class System{
        Sol,
        BetaHydri,
        EpsilonEridani,
        EpsilonEridiani,
        AlphaCentauri,
        DeltaEridiani,
        DeltaEridani,
        Omicron2Eridiani,
        Omicron2Eridani
    };
} // namespace star_map

namespace heaven{
    class Vessel {
    public:
        std::string name;
        star_map::System current_system;
        int generation;
        int busters{0};

        Vessel(std::string name, int gen, star_map::System sys = star_map::System::Sol);
        Vessel replicate(std::string);
        void make_buster();
        bool shoot_buster();
    }; // class Vessel

    std::string get_older_bob(Vessel a, Vessel b);
    bool in_the_same_system(Vessel a, Vessel b);

} // namespace heaven



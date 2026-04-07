namespace targets {
    class Alien{
    public:
    int x_coordinate;
    int y_coordinate;
    private:
    int health{3};
    public:
    Alien(int x, int y){
        x_coordinate = x;
        y_coordinate = y;
    }
    int get_health(){
        return health;
    }
    bool hit(){
        health--;

        if(health < 0){
            health = 0;
        }

        return true;
    }
    bool is_alive(){
        return health > 0;
    }
    bool teleport(int new_x, int new_y){
        x_coordinate = new_x;
        y_coordinate = new_y;
        return true;
    }
    bool collision_detection(Alien alien_obj){
        return x_coordinate == alien_obj.x_coordinate && y_coordinate == alien_obj.y_coordinate;
    }
    };
}  // namespace targets

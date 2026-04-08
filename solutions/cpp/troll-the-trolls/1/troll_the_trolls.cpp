namespace hellmath {

enum class AccountStatus { troll, guest, user, mod };

enum class Action { read, write, remove };

bool display_post(AccountStatus poster, AccountStatus viewer) {
switch (viewer) {
        case AccountStatus::troll:
            return true; 
        case AccountStatus::guest:
        case AccountStatus::user:
        case AccountStatus::mod:
            return poster != AccountStatus::troll;
    }
    return false;
}

bool permission_check(Action action, AccountStatus status) {
  switch (action) {
  case Action::read:
    return true;
    break;
  case Action::write:
    return status != AccountStatus::guest;
    break;
  case Action::remove:
    return status == AccountStatus::mod;
    break;
  }
    return false;
}

bool valid_player_combination(AccountStatus p1, AccountStatus p2) {
  switch (p1) {

  case AccountStatus::guest:
    return false;
  case AccountStatus::troll:
    return p2 == AccountStatus::troll;
  case AccountStatus::user:
  case AccountStatus::mod:
    return p2 != AccountStatus::guest && p2 != AccountStatus::troll;
    break;
  }
    return false;
}

bool has_priority(AccountStatus s1, AccountStatus s2) { return s1 > s2; }
} // namespace hellmath

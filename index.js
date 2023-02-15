function scuberGreetingForFeet(distance) {
  let results;

  if (distance <= 199 && distance >= 0) {
    return "This one is on me!";
  } else if (distance >= 199 && distance <= 1500) {
    return "That will be twenty bucks.";
  } else if (distance >= 1500 && distance <= 2001) {
    return "I will gladly take your thirty bucks.";
  } else if (distance >= 2001 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (distance >= 2501) {
    return "No can do.";
  }
}

function ternaryCheckCity(City) {
  return City === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  let reply;

  switch (tip) {
    case "generous":
      reply = "Thank you so much.";
      break;
    case "not as generous":
      reply = "Thank you.";
      break;
    default:
      reply = "Bye.";
  }

  return reply;
}

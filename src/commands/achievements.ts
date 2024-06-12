import command from '../../config.json' assert {type: 'json'};

const createAchievement = () : string[] => {
  const achievements : string[] = [];
  const files = ``;

  achievements.push("<br>")
  command.achievements.forEach((ele) => {
    let listItem = `<li>${ele[0]} : ${ele[1]}</li>`;
    achievements.push(listItem);
  });

  achievements.push("<br>");
  achievements.push(files);
  achievements.push("<br>");
  return achievements
}

export const ACHIEVEMENTS = createAchievement()

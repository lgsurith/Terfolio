import command from '../../config.json' assert {type: 'json'};

const createContribution = () : string[] => {
  let string = "";
  const contributions : string[] = [];
  const files = `${command.contributions.length} File(s)`;
  const SPACE = "&nbsp;";

  contributions.push("<br>")
  //make sure that i can add as many projects as i want
  command.contributions.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(25 - ele[0].length);
    string += ele[1];
    contributions.push(string);
    string = '';
  });

  contributions.push("<br>");
  contributions.push(files);
  contributions.push("<br>");
  return contributions
}

export const CONTRIBUTIONS = createContribution()

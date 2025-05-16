function SummarizePerson(
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  middleName?: string | null,
  hobbies?: string[] | null,
  workInfo?: [string, number] | null
): [number, string, number, string, string] {

  let fullName: string;
  if (middleName) {
    fullName = `${firstName} ${middleName} ${lastName}`;
  } else {
    fullName = `${firstName} ${lastName}`;
  }

  let hobbiesStr: string;
  if (hobbies) {
    hobbiesStr = hobbies.join(", ");
  } else {
    hobbiesStr = "-";
  }

  let workStr: string;
  if (workInfo) {
    workStr = `${workInfo[0]} -> ${workInfo[1]}`;
  } else {
    workStr = "-";
  }

  return [id, fullName, age, hobbiesStr, workStr];
}

console.log(SummarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));


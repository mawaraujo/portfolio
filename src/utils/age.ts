export function getAge(date: Date) {
  const diffMs = Date.now() - date.getTime();
  const diff = new Date(diffMs); 

  const age: number = Math.abs(diff.getUTCFullYear() - 1970);
  return age;
}

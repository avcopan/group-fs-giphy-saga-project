export default function toTitleCase(string) {
  return string
    .split(' ')
    .map((str) => str[0].toUpperCase() + str.slice(1, str.length).toLowerCase())
    .join(' ');
}
